
var Module;

if (typeof Module === 'undefined') Module = eval('(function() { try { return Module || {} } catch(e) { return {} } })()');

if (!Module.expectedDataFileDownloads) {
  Module.expectedDataFileDownloads = 0;
  Module.finishedDataFileDownloads = 0;
}
Module.expectedDataFileDownloads++;
(function() {
 var loadPackage = function(metadata) {

    var PACKAGE_PATH;
    if (typeof window === 'object') {
      PACKAGE_PATH = window['encodeURIComponent'](window.location.pathname.toString().substring(0, window.location.pathname.toString().lastIndexOf('/')) + '/');
    } else if (typeof location !== 'undefined') {
      // worker
      PACKAGE_PATH = encodeURIComponent(location.pathname.toString().substring(0, location.pathname.toString().lastIndexOf('/')) + '/');
    } else {
      throw 'using preloaded data can only be done on a web page or in a web worker';
    }
    var PACKAGE_NAME = 'game.data';
    var REMOTE_PACKAGE_BASE = 'game.data';
    if (typeof Module['locateFilePackage'] === 'function' && !Module['locateFile']) {
      Module['locateFile'] = Module['locateFilePackage'];
      Module.printErr('warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)');
    }
    var REMOTE_PACKAGE_NAME = typeof Module['locateFile'] === 'function' ?
                              Module['locateFile'](REMOTE_PACKAGE_BASE) :
                              ((Module['filePackagePrefixURL'] || '') + REMOTE_PACKAGE_BASE);
  
    var REMOTE_PACKAGE_SIZE = metadata.remote_package_size;
    var PACKAGE_UUID = metadata.package_uuid;
  
    function fetchRemotePackage(packageName, packageSize, callback, errback) {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', packageName, true);
      xhr.responseType = 'arraybuffer';
      xhr.onprogress = function(event) {
        var url = packageName;
        var size = packageSize;
        if (event.total) size = event.total;
        if (event.loaded) {
          if (!xhr.addedTotal) {
            xhr.addedTotal = true;
            if (!Module.dataFileDownloads) Module.dataFileDownloads = {};
            Module.dataFileDownloads[url] = {
              loaded: event.loaded,
              total: size
            };
          } else {
            Module.dataFileDownloads[url].loaded = event.loaded;
          }
          var total = 0;
          var loaded = 0;
          var num = 0;
          for (var download in Module.dataFileDownloads) {
          var data = Module.dataFileDownloads[download];
            total += data.total;
            loaded += data.loaded;
            num++;
          }
          total = Math.ceil(total * Module.expectedDataFileDownloads/num);
          if (Module['setStatus']) Module['setStatus']('Downloading data... (' + loaded + '/' + total + ')');
        } else if (!Module.dataFileDownloads) {
          if (Module['setStatus']) Module['setStatus']('Downloading data...');
        }
      };
      xhr.onload = function(event) {
        var packageData = xhr.response;
        callback(packageData);
      };
      xhr.send(null);
    };

    function handleError(error) {
      console.error('package error:', error);
    };
  
      var fetched = null, fetchedCallback = null;
      fetchRemotePackage(REMOTE_PACKAGE_NAME, REMOTE_PACKAGE_SIZE, function(data) {
        if (fetchedCallback) {
          fetchedCallback(data);
          fetchedCallback = null;
        } else {
          fetched = data;
        }
      }, handleError);
    
  function runWithFS() {

    function assert(check, msg) {
      if (!check) throw msg + new Error().stack;
    }
Module['FS_createPath']('/', 'font', true, true);
Module['FS_createPath']('/', 'libs', true, true);
Module['FS_createPath']('/libs', 'suit', true, true);
Module['FS_createPath']('/', 'music', true, true);
Module['FS_createPath']('/', 'objects', true, true);
Module['FS_createPath']('/', 'scene', true, true);
Module['FS_createPath']('/', 'stage', true, true);
Module['FS_createPath']('/', 'tree', true, true);
Module['FS_createPath']('/', 'tree2', true, true);

    function DataRequest(start, end, crunched, audio) {
      this.start = start;
      this.end = end;
      this.crunched = crunched;
      this.audio = audio;
    }
    DataRequest.prototype = {
      requests: {},
      open: function(mode, name) {
        this.name = name;
        this.requests[name] = this;
        Module['addRunDependency']('fp ' + this.name);
      },
      send: function() {},
      onload: function() {
        var byteArray = this.byteArray.subarray(this.start, this.end);

          this.finish(byteArray);

      },
      finish: function(byteArray) {
        var that = this;

        Module['FS_createDataFile'](this.name, null, byteArray, true, true, true); // canOwn this data in the filesystem, it is a slide into the heap that will never change
        Module['removeRunDependency']('fp ' + that.name);

        this.requests[this.name] = null;
      },
    };

        var files = metadata.files;
        for (i = 0; i < files.length; ++i) {
          new DataRequest(files[i].start, files[i].end, files[i].crunched, files[i].audio).open('GET', files[i].filename);
        }

  
    function processPackageData(arrayBuffer) {
      Module.finishedDataFileDownloads++;
      assert(arrayBuffer, 'Loading data file failed.');
      assert(arrayBuffer instanceof ArrayBuffer, 'bad input to processPackageData');
      var byteArray = new Uint8Array(arrayBuffer);
      var curr;
      
        // copy the entire loaded file into a spot in the heap. Files will refer to slices in that. They cannot be freed though
        // (we may be allocating before malloc is ready, during startup).
        if (Module['SPLIT_MEMORY']) Module.printErr('warning: you should run the file packager with --no-heap-copy when SPLIT_MEMORY is used, otherwise copying into the heap may fail due to the splitting');
        var ptr = Module['getMemory'](byteArray.length);
        Module['HEAPU8'].set(byteArray, ptr);
        DataRequest.prototype.byteArray = Module['HEAPU8'].subarray(ptr, ptr+byteArray.length);
  
          var files = metadata.files;
          for (i = 0; i < files.length; ++i) {
            DataRequest.prototype.requests[files[i].filename].onload();
          }
              Module['removeRunDependency']('datafile_game.data');

    };
    Module['addRunDependency']('datafile_game.data');
  
    if (!Module.preloadResults) Module.preloadResults = {};
  
      Module.preloadResults[PACKAGE_NAME] = {fromCache: false};
      if (fetched) {
        processPackageData(fetched);
        fetched = null;
      } else {
        fetchedCallback = processPackageData;
      }
    
  }
  if (Module['calledRun']) {
    runWithFS();
  } else {
    if (!Module['preRun']) Module['preRun'] = [];
    Module["preRun"].push(runWithFS); // FS is not initialized yet, wait for it
  }

 }
 loadPackage({"files": [{"audio": 0, "start": 0, "crunched": 0, "end": 722, "filename": "/.gitignore"}, {"audio": 0, "start": 722, "crunched": 0, "end": 767, "filename": "/1.sublime-project"}, {"audio": 0, "start": 767, "crunched": 0, "end": 31040, "filename": "/1.sublime-workspace"}, {"audio": 0, "start": 31040, "crunched": 0, "end": 34442, "filename": "/conf.lua"}, {"audio": 0, "start": 34442, "crunched": 0, "end": 35155, "filename": "/main.lua"}, {"audio": 0, "start": 35155, "crunched": 0, "end": 11820339, "filename": "/font/cn.ttf"}, {"audio": 0, "start": 11820339, "crunched": 0, "end": 11825675, "filename": "/libs/autobatch.lua"}, {"audio": 0, "start": 11825675, "crunched": 0, "end": 11828974, "filename": "/libs/gamestate.lua"}, {"audio": 0, "start": 11828974, "crunched": 0, "end": 11835019, "filename": "/libs/middleclass.lua"}, {"audio": 0, "start": 11835019, "crunched": 0, "end": 11835999, "filename": "/libs/shape.lua"}, {"audio": 0, "start": 11835999, "crunched": 0, "end": 11848679, "filename": "/libs/tween.lua"}, {"audio": 0, "start": 11848679, "crunched": 0, "end": 11862535, "filename": "/libs/util.lua"}, {"audio": 0, "start": 11862535, "crunched": 0, "end": 11863233, "filename": "/libs/suit/button.lua"}, {"audio": 0, "start": 11863233, "crunched": 0, "end": 11864056, "filename": "/libs/suit/checkbox.lua"}, {"audio": 0, "start": 11864056, "crunched": 0, "end": 11868112, "filename": "/libs/suit/core.lua"}, {"audio": 0, "start": 11868112, "crunched": 0, "end": 11869510, "filename": "/libs/suit/imagebutton.lua"}, {"audio": 0, "start": 11869510, "crunched": 0, "end": 11872026, "filename": "/libs/suit/init.lua"}, {"audio": 0, "start": 11872026, "crunched": 0, "end": 11875612, "filename": "/libs/suit/input.lua"}, {"audio": 0, "start": 11875612, "crunched": 0, "end": 11876307, "filename": "/libs/suit/label.lua"}, {"audio": 0, "start": 11876307, "crunched": 0, "end": 11885164, "filename": "/libs/suit/layout.lua"}, {"audio": 0, "start": 11885164, "crunched": 0, "end": 11886447, "filename": "/libs/suit/license.txt"}, {"audio": 0, "start": 11886447, "crunched": 0, "end": 11886847, "filename": "/libs/suit/panel.lua"}, {"audio": 0, "start": 11886847, "crunched": 0, "end": 11888454, "filename": "/libs/suit/slider.lua"}, {"audio": 0, "start": 11888454, "crunched": 0, "end": 11892590, "filename": "/libs/suit/theme.lua"}, {"audio": 1, "start": 11892590, "crunched": 0, "end": 18272667, "filename": "/music/1.mp3"}, {"audio": 0, "start": 18272667, "crunched": 0, "end": 18275691, "filename": "/objects/cloud.lua"}, {"audio": 0, "start": 18275691, "crunched": 0, "end": 18276456, "filename": "/objects/ground.lua"}, {"audio": 0, "start": 18276456, "crunched": 0, "end": 18278393, "filename": "/objects/lightning.lua"}, {"audio": 0, "start": 18278393, "crunched": 0, "end": 18281361, "filename": "/objects/moon.lua"}, {"audio": 0, "start": 18281361, "crunched": 0, "end": 18283696, "filename": "/objects/rain.lua"}, {"audio": 0, "start": 18283696, "crunched": 0, "end": 18284977, "filename": "/objects/sky.lua"}, {"audio": 0, "start": 18284977, "crunched": 0, "end": 18286251, "filename": "/objects/snow.lua"}, {"audio": 0, "start": 18286251, "crunched": 0, "end": 18286981, "filename": "/objects/star.lua"}, {"audio": 0, "start": 18286981, "crunched": 0, "end": 18287880, "filename": "/objects/star2.lua"}, {"audio": 0, "start": 18287880, "crunched": 0, "end": 18290599, "filename": "/objects/sun.lua"}, {"audio": 0, "start": 18290599, "crunched": 0, "end": 18292039, "filename": "/scene/game.lua"}, {"audio": 0, "start": 18292039, "crunched": 0, "end": 18292793, "filename": "/stage/background.lua"}, {"audio": 0, "start": 18292793, "crunched": 0, "end": 18294695, "filename": "/stage/climate.lua"}, {"audio": 0, "start": 18294695, "crunched": 0, "end": 18295317, "filename": "/stage/foreground.lua"}, {"audio": 0, "start": 18295317, "crunched": 0, "end": 18295731, "filename": "/stage/player.lua"}, {"audio": 0, "start": 18295731, "crunched": 0, "end": 18296843, "filename": "/stage/timer.lua"}, {"audio": 0, "start": 18296843, "crunched": 0, "end": 18299657, "filename": "/stage/ui.lua"}, {"audio": 0, "start": 18299657, "crunched": 0, "end": 18302274, "filename": "/stage/ui_en.lua"}, {"audio": 0, "start": 18302274, "crunched": 0, "end": 18302573, "filename": "/stage/weather.lua"}, {"audio": 0, "start": 18302573, "crunched": 0, "end": 18305362, "filename": "/tree/flower.lua"}, {"audio": 0, "start": 18305362, "crunched": 0, "end": 18310440, "filename": "/tree/leaf.lua"}, {"audio": 0, "start": 18310440, "crunched": 0, "end": 18316227, "filename": "/tree/node.lua"}, {"audio": 0, "start": 18316227, "crunched": 0, "end": 18317179, "filename": "/tree/seed.lua"}, {"audio": 0, "start": 18317179, "crunched": 0, "end": 18317179, "filename": "/tree2/flower.lua"}, {"audio": 0, "start": 18317179, "crunched": 0, "end": 18317179, "filename": "/tree2/herb.lua"}, {"audio": 0, "start": 18317179, "crunched": 0, "end": 18319205, "filename": "/tree2/init.lua"}, {"audio": 0, "start": 18319205, "crunched": 0, "end": 18321469, "filename": "/tree2/leaf.lua"}, {"audio": 0, "start": 18321469, "crunched": 0, "end": 18321935, "filename": "/tree2/leafvert.lua"}, {"audio": 0, "start": 18321935, "crunched": 0, "end": 18325951, "filename": "/tree2/node.lua"}, {"audio": 0, "start": 18325951, "crunched": 0, "end": 18326809, "filename": "/tree2/seed.lua"}], "remote_package_size": 18326809, "package_uuid": "07ed99e0-9a6b-4b32-b9f5-0551014d4951"});

})();
