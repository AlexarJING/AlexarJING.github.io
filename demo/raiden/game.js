
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
Module['FS_createPath']('/', 'lib', true, true);
Module['FS_createPath']('/lib', 'gooi', true, true);
Module['FS_createPath']('/lib', 'hump', true, true);
Module['FS_createPath']('/lib/hump', 'docs', true, true);
Module['FS_createPath']('/lib/hump/docs', '_static', true, true);
Module['FS_createPath']('/lib/hump', 'spec', true, true);
Module['FS_createPath']('/', 'object', true, true);
Module['FS_createPath']('/object', 'bosses', true, true);
Module['FS_createPath']('/object', 'enemies', true, true);
Module['FS_createPath']('/', 'res', true, true);
Module['FS_createPath']('/', 'scene', true, true);
Module['FS_createPath']('/', 'scr', true, true);

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
 loadPackage({"files": [{"audio": 0, "start": 0, "crunched": 0, "end": 3414, "filename": "/conf.lua"}, {"audio": 0, "start": 3414, "crunched": 0, "end": 4344, "filename": "/main.lua"}, {"audio": 0, "start": 4344, "crunched": 0, "end": 7441, "filename": "/lib/animation.lua"}, {"audio": 0, "start": 7441, "crunched": 0, "end": 12777, "filename": "/lib/autobatch.lua"}, {"audio": 0, "start": 12777, "crunched": 0, "end": 35665, "filename": "/lib/bump.lua"}, {"audio": 0, "start": 35665, "crunched": 0, "end": 36121, "filename": "/lib/delay.lua"}, {"audio": 0, "start": 36121, "crunched": 0, "end": 42347, "filename": "/lib/middleclass.lua"}, {"audio": 0, "start": 42347, "crunched": 0, "end": 43931, "filename": "/lib/sound.lua"}, {"audio": 0, "start": 43931, "crunched": 0, "end": 54018, "filename": "/lib/trail.lua"}, {"audio": 0, "start": 54018, "crunched": 0, "end": 67095, "filename": "/lib/tween.lua"}, {"audio": 0, "start": 67095, "crunched": 0, "end": 89224, "filename": "/lib/util.lua"}, {"audio": 0, "start": 89224, "crunched": 0, "end": 90805, "filename": "/lib/gooi/colorManager.lua"}, {"audio": 0, "start": 90805, "crunched": 0, "end": 104771, "filename": "/lib/gooi/component.lua"}, {"audio": 0, "start": 104771, "crunched": 0, "end": 164849, "filename": "/lib/gooi/gooi.lua"}, {"audio": 0, "start": 164849, "crunched": 0, "end": 166506, "filename": "/lib/gooi/init.lua"}, {"audio": 0, "start": 166506, "crunched": 0, "end": 170373, "filename": "/lib/gooi/layout.lua"}, {"audio": 0, "start": 170373, "crunched": 0, "end": 181103, "filename": "/lib/gooi/utf8.lua"}, {"audio": 0, "start": 181103, "crunched": 0, "end": 187386, "filename": "/lib/hump/camera.lua"}, {"audio": 0, "start": 187386, "crunched": 0, "end": 190507, "filename": "/lib/hump/class.lua"}, {"audio": 0, "start": 190507, "crunched": 0, "end": 194148, "filename": "/lib/hump/gamestate.lua"}, {"audio": 0, "start": 194148, "crunched": 0, "end": 196414, "filename": "/lib/hump/README.md"}, {"audio": 0, "start": 196414, "crunched": 0, "end": 199041, "filename": "/lib/hump/signal.lua"}, {"audio": 0, "start": 199041, "crunched": 0, "end": 205784, "filename": "/lib/hump/timer.lua"}, {"audio": 0, "start": 205784, "crunched": 0, "end": 209505, "filename": "/lib/hump/vector-light.lua"}, {"audio": 0, "start": 209505, "crunched": 0, "end": 215015, "filename": "/lib/hump/vector.lua"}, {"audio": 0, "start": 215015, "crunched": 0, "end": 230028, "filename": "/lib/hump/docs/camera.rst"}, {"audio": 0, "start": 230028, "crunched": 0, "end": 239433, "filename": "/lib/hump/docs/class.rst"}, {"audio": 0, "start": 239433, "crunched": 0, "end": 249062, "filename": "/lib/hump/docs/conf.py"}, {"audio": 0, "start": 249062, "crunched": 0, "end": 258536, "filename": "/lib/hump/docs/gamestate.rst"}, {"audio": 0, "start": 258536, "crunched": 0, "end": 259890, "filename": "/lib/hump/docs/index.rst"}, {"audio": 0, "start": 259890, "crunched": 0, "end": 261221, "filename": "/lib/hump/docs/license.rst"}, {"audio": 0, "start": 261221, "crunched": 0, "end": 268814, "filename": "/lib/hump/docs/Makefile"}, {"audio": 0, "start": 268814, "crunched": 0, "end": 273455, "filename": "/lib/hump/docs/signal.rst"}, {"audio": 0, "start": 273455, "crunched": 0, "end": 286740, "filename": "/lib/hump/docs/timer.rst"}, {"audio": 0, "start": 286740, "crunched": 0, "end": 296695, "filename": "/lib/hump/docs/vector-light.rst"}, {"audio": 0, "start": 296695, "crunched": 0, "end": 307267, "filename": "/lib/hump/docs/vector.rst"}, {"audio": 0, "start": 307267, "crunched": 0, "end": 314459, "filename": "/lib/hump/docs/_static/graph-tweens.js"}, {"audio": 0, "start": 314459, "crunched": 0, "end": 417295, "filename": "/lib/hump/docs/_static/in-out-interpolators.png"}, {"audio": 0, "start": 417295, "crunched": 0, "end": 514059, "filename": "/lib/hump/docs/_static/interpolators.png"}, {"audio": 0, "start": 514059, "crunched": 0, "end": 569535, "filename": "/lib/hump/docs/_static/inv-interpolators.png"}, {"audio": 0, "start": 569535, "crunched": 0, "end": 582960, "filename": "/lib/hump/docs/_static/vector-cross.png"}, {"audio": 0, "start": 582960, "crunched": 0, "end": 596066, "filename": "/lib/hump/docs/_static/vector-mirrorOn.png"}, {"audio": 0, "start": 596066, "crunched": 0, "end": 609834, "filename": "/lib/hump/docs/_static/vector-perpendicular.png"}, {"audio": 0, "start": 609834, "crunched": 0, "end": 639741, "filename": "/lib/hump/docs/_static/vector-projectOn.png"}, {"audio": 0, "start": 639741, "crunched": 0, "end": 652423, "filename": "/lib/hump/docs/_static/vector-rotated.png"}, {"audio": 0, "start": 652423, "crunched": 0, "end": 654125, "filename": "/lib/hump/spec/timer_spec.lua"}, {"audio": 0, "start": 654125, "crunched": 0, "end": 655093, "filename": "/object/aimLine.lua"}, {"audio": 0, "start": 655093, "crunched": 0, "end": 657421, "filename": "/object/base.lua"}, {"audio": 0, "start": 657421, "crunched": 0, "end": 657779, "filename": "/object/boom.lua"}, {"audio": 0, "start": 657779, "crunched": 0, "end": 658023, "filename": "/object/boss.lua"}, {"audio": 0, "start": 658023, "crunched": 0, "end": 660302, "filename": "/object/bullet.lua"}, {"audio": 0, "start": 660302, "crunched": 0, "end": 661604, "filename": "/object/collidable.lua"}, {"audio": 0, "start": 661604, "crunched": 0, "end": 662458, "filename": "/object/enemy.lua"}, {"audio": 0, "start": 662458, "crunched": 0, "end": 663413, "filename": "/object/engineFire.lua"}, {"audio": 0, "start": 663413, "crunched": 0, "end": 666362, "filename": "/object/frag.lua"}, {"audio": 0, "start": 666362, "crunched": 0, "end": 667572, "filename": "/object/item.lua"}, {"audio": 0, "start": 667572, "crunched": 0, "end": 669369, "filename": "/object/missile.lua"}, {"audio": 0, "start": 669369, "crunched": 0, "end": 672006, "filename": "/object/player.lua"}, {"audio": 0, "start": 672006, "crunched": 0, "end": 674556, "filename": "/object/ship.lua"}, {"audio": 0, "start": 674556, "crunched": 0, "end": 675563, "filename": "/object/star.lua"}, {"audio": 0, "start": 675563, "crunched": 0, "end": 676395, "filename": "/object/target.lua"}, {"audio": 0, "start": 676395, "crunched": 0, "end": 682929, "filename": "/object/bosses/001.lua"}, {"audio": 0, "start": 682929, "crunched": 0, "end": 683909, "filename": "/object/enemies/001.lua"}, {"audio": 0, "start": 683909, "crunched": 0, "end": 684575, "filename": "/object/enemies/002.lua"}, {"audio": 0, "start": 684575, "crunched": 0, "end": 685477, "filename": "/object/enemies/003.lua"}, {"audio": 0, "start": 685477, "crunched": 0, "end": 707967, "filename": "/res/bullet.png"}, {"audio": 0, "start": 707967, "crunched": 0, "end": 708162, "filename": "/res/cursor.png"}, {"audio": 0, "start": 708162, "crunched": 0, "end": 877783, "filename": "/res/icon.png"}, {"audio": 0, "start": 877783, "crunched": 0, "end": 879665, "filename": "/res/imagefont.png"}, {"audio": 0, "start": 879665, "crunched": 0, "end": 909854, "filename": "/res/M484ExplosionSet1.png"}, {"audio": 0, "start": 909854, "crunched": 0, "end": 975341, "filename": "/res/ships_t.png"}, {"audio": 0, "start": 975341, "crunched": 0, "end": 1016901, "filename": "/res/StarCraft.ttf"}, {"audio": 0, "start": 1016901, "crunched": 0, "end": 1017208, "filename": "/scene/test.lua"}, {"audio": 0, "start": 1017208, "crunched": 0, "end": 1017360, "filename": "/scr/editor.lua"}, {"audio": 0, "start": 1017360, "crunched": 0, "end": 1018433, "filename": "/scr/game.lua"}, {"audio": 0, "start": 1018433, "crunched": 0, "end": 1020006, "filename": "/scr/level.lua"}, {"audio": 0, "start": 1020006, "crunched": 0, "end": 1021199, "filename": "/scr/resloader.lua"}, {"audio": 0, "start": 1021199, "crunched": 0, "end": 1022590, "filename": "/scr/ui.lua"}], "remote_package_size": 1022590, "package_uuid": "601829c2-dca0-4bf0-95ba-7e724ab94036"});

})();
