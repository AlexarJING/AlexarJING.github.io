var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function (x) {
  if (typeof require !== "undefined")
    return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + x + '" is not supported');
});
var __commonJS = (cb, mod) => function __require2() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};

// platforms/bytedance/wrapper/fs-utils.js
var require_fs_utils = __commonJS({
  "platforms/bytedance/wrapper/fs-utils.js"(exports, module) {
    var fs = tt.getFileSystemManager ? tt.getFileSystemManager() : null;
    var outOfStorageRegExp = /size.*limit.*exceeded/;
    var fsUtils2 = {
      fs,
      isOutOfStorage(errMsg) {
        return outOfStorageRegExp.test(errMsg);
      },
      getUserDataPath() {
        return tt.env.USER_DATA_PATH;
      },
      checkFsValid() {
        if (!fs) {
          console.warn("can not get the file system!");
          return false;
        }
        return true;
      },
      deleteFile(filePath, onComplete) {
        fs.unlink({
          filePath,
          success: function () {
            onComplete && onComplete(null);
          },
          fail: function (res) {
            console.warn(`Delete file failed: path: ${filePath} message: ${res.errMsg}`);
            onComplete && onComplete(new Error(res.errMsg));
          }
        });
      },
      downloadFile(remoteUrl, filePath, header, onProgress, onComplete) {
        var options = {
          url: remoteUrl,
          success: function (res) {
            if (res.statusCode === 200) {
              onComplete && onComplete(null, res.tempFilePath || res.filePath);
            } else {
              if (res.filePath) {
                fsUtils2.deleteFile(res.filePath);
              }
              console.warn(`Download file failed: path: ${remoteUrl} message: ${res.statusCode}`);
              onComplete && onComplete(new Error(res.statusCode), null);
            }
          },
          fail: function (res) {
            console.warn(`Download file failed: path: ${remoteUrl} message: ${res.errMsg}`);
            onComplete && onComplete(new Error(res.errMsg), null);
          }
        };
        if (filePath)
          options.filePath = filePath;
        if (header)
          options.header = header;
        var task = tt.downloadFile(options);
        onProgress && task.onProgressUpdate(onProgress);
      },
      saveFile(srcPath, destPath, onComplete) {
        tt.saveFile({
          tempFilePath: srcPath,
          filePath: destPath,
          success: function (res) {
            onComplete && onComplete(null);
          },
          fail: function (res) {
            console.warn(`Save file failed: path: ${srcPath} message: ${res.errMsg}`);
            onComplete && onComplete(new Error(res.errMsg));
          }
        });
      },
      copyFile(srcPath, destPath, onComplete) {
        fs.copyFile({
          srcPath,
          destPath,
          success: function () {
            onComplete && onComplete(null);
          },
          fail: function (res) {
            console.warn(`Copy file failed: path: ${srcPath} message: ${res.errMsg}`);
            onComplete && onComplete(new Error(res.errMsg));
          }
        });
      },
      writeFile(path, data, encoding, onComplete) {
        fs.writeFile({
          filePath: path,
          encoding,
          data,
          success: function () {
            onComplete && onComplete(null);
          },
          fail: function (res) {
            console.warn(`Write file failed: path: ${path} message: ${res.errMsg}`);
            onComplete && onComplete(new Error(res.errMsg));
          }
        });
      },
      writeFileSync(path, data, encoding) {
        try {
          fs.writeFileSync(path, data, encoding);
          return null;
        } catch (e) {
          console.warn(`Write file failed: path: ${path} message: ${e.message}`);
          return new Error(e.message);
        }
      },
      readFile(filePath, encoding, onComplete) {
        fs.readFile({
          filePath,
          encoding,
          success: function (res) {
            onComplete && onComplete(null, res.data);
          },
          fail: function (res) {
            console.warn(`Read file failed: path: ${filePath} message: ${res.errMsg}`);
            onComplete && onComplete(new Error(res.errMsg), null);
          }
        });
      },
      readDir(filePath, onComplete) {
        fs.readdir({
          dirPath: filePath,
          success: function (res) {
            onComplete && onComplete(null, res.files);
          },
          fail: function (res) {
            console.warn(`Read directory failed: path: ${filePath} message: ${res.errMsg}`);
            onComplete && onComplete(new Error(res.errMsg), null);
          }
        });
      },
      readText(filePath, onComplete) {
        fsUtils2.readFile(filePath, "utf8", onComplete);
      },
      readArrayBuffer(filePath, onComplete) {
        fsUtils2.readFile(filePath, "", onComplete);
      },
      readJson(filePath, onComplete) {
        fsUtils2.readFile(filePath, "utf8", function (err, text) {
          var out = null;
          if (!err) {
            try {
              out = JSON.parse(text);
            } catch (e) {
              console.warn(`Read json failed: path: ${filePath} message: ${e.message}`);
              err = new Error(e.message);
            }
          }
          onComplete && onComplete(err, out);
        });
      },
      readJsonSync(path) {
        try {
          var str = fs.readFileSync(path, "utf8");
          return JSON.parse(str);
        } catch (e) {
          console.warn(`Read json failed: path: ${path} message: ${e.message}`);
          return new Error(e.message);
        }
      },
      makeDirSync(path, recursive) {
        try {
          fs.mkdirSync(path, recursive);
          return null;
        } catch (e) {
          console.warn(`Make directory failed: path: ${path} message: ${e.message}`);
          return new Error(e.message);
        }
      },
      rmdirSync(dirPath, recursive) {
        try {
          fs.rmdirSync(dirPath, recursive);
        } catch (e) {
          console.warn(`rm directory failed: path: ${dirPath} message: ${e.message}`);
          return new Error(e.message);
        }
      },
      exists(filePath, onComplete) {
        fs.access({
          path: filePath,
          success: function () {
            onComplete && onComplete(true);
          },
          fail: function () {
            onComplete && onComplete(false);
          }
        });
      },
      loadSubpackage(name, onProgress, onComplete) {
        if (!tt.loadSubpackage) {
          console.warn("tt.loadSubpackage not supported, fallback to loading bundle");
          __require(`./subpackages/${name}/game.js`);
          onComplete && onComplete();
          return;
        }
        var task = tt.loadSubpackage({
          name,
          success: function () {
            onComplete && onComplete();
          },
          fail: function (res) {
            console.warn(`Load Subpackage failed: path: ${name} message: ${res.errMsg}`);
            onComplete && onComplete(new Error(`Failed to load subpackage ${name}: ${res.errMsg}`));
          }
        });
        onProgress && task.onProgressUpdate(onProgress);
        return task;
      },
      unzip(zipFilePath, targetPath, onComplete) {
        fs.unzip({
          zipFilePath,
          targetPath,
          success() {
            onComplete && onComplete(null);
          },
          fail(res) {
            console.warn(`unzip failed: path: ${zipFilePath} message: ${res.errMsg}`);
            onComplete && onComplete(new Error("unzip failed: " + res.errMsg));
          }
        });
      }
    };
    window.fsUtils = module.exports = fsUtils2;
  }
});

// common/xmldom/entities.js
var require_entities = __commonJS({
  "common/xmldom/entities.js"(exports) {
    exports.entityMap = {
      lt: "<",
      gt: ">",
      amp: "&",
      quot: '"',
      apos: "'",
      Agrave: "\xC0",
      Aacute: "\xC1",
      Acirc: "\xC2",
      Atilde: "\xC3",
      Auml: "\xC4",
      Aring: "\xC5",
      AElig: "\xC6",
      Ccedil: "\xC7",
      Egrave: "\xC8",
      Eacute: "\xC9",
      Ecirc: "\xCA",
      Euml: "\xCB",
      Igrave: "\xCC",
      Iacute: "\xCD",
      Icirc: "\xCE",
      Iuml: "\xCF",
      ETH: "\xD0",
      Ntilde: "\xD1",
      Ograve: "\xD2",
      Oacute: "\xD3",
      Ocirc: "\xD4",
      Otilde: "\xD5",
      Ouml: "\xD6",
      Oslash: "\xD8",
      Ugrave: "\xD9",
      Uacute: "\xDA",
      Ucirc: "\xDB",
      Uuml: "\xDC",
      Yacute: "\xDD",
      THORN: "\xDE",
      szlig: "\xDF",
      agrave: "\xE0",
      aacute: "\xE1",
      acirc: "\xE2",
      atilde: "\xE3",
      auml: "\xE4",
      aring: "\xE5",
      aelig: "\xE6",
      ccedil: "\xE7",
      egrave: "\xE8",
      eacute: "\xE9",
      ecirc: "\xEA",
      euml: "\xEB",
      igrave: "\xEC",
      iacute: "\xED",
      icirc: "\xEE",
      iuml: "\xEF",
      eth: "\xF0",
      ntilde: "\xF1",
      ograve: "\xF2",
      oacute: "\xF3",
      ocirc: "\xF4",
      otilde: "\xF5",
      ouml: "\xF6",
      oslash: "\xF8",
      ugrave: "\xF9",
      uacute: "\xFA",
      ucirc: "\xFB",
      uuml: "\xFC",
      yacute: "\xFD",
      thorn: "\xFE",
      yuml: "\xFF",
      nbsp: " ",
      iexcl: "\xA1",
      cent: "\xA2",
      pound: "\xA3",
      curren: "\xA4",
      yen: "\xA5",
      brvbar: "\xA6",
      sect: "\xA7",
      uml: "\xA8",
      copy: "\xA9",
      ordf: "\xAA",
      laquo: "\xAB",
      not: "\xAC",
      shy: "\xAD\xAD",
      reg: "\xAE",
      macr: "\xAF",
      deg: "\xB0",
      plusmn: "\xB1",
      sup2: "\xB2",
      sup3: "\xB3",
      acute: "\xB4",
      micro: "\xB5",
      para: "\xB6",
      middot: "\xB7",
      cedil: "\xB8",
      sup1: "\xB9",
      ordm: "\xBA",
      raquo: "\xBB",
      frac14: "\xBC",
      frac12: "\xBD",
      frac34: "\xBE",
      iquest: "\xBF",
      times: "\xD7",
      divide: "\xF7",
      forall: "\u2200",
      part: "\u2202",
      exist: "\u2203",
      empty: "\u2205",
      nabla: "\u2207",
      isin: "\u2208",
      notin: "\u2209",
      ni: "\u220B",
      prod: "\u220F",
      sum: "\u2211",
      minus: "\u2212",
      lowast: "\u2217",
      radic: "\u221A",
      prop: "\u221D",
      infin: "\u221E",
      ang: "\u2220",
      and: "\u2227",
      or: "\u2228",
      cap: "\u2229",
      cup: "\u222A",
      "int": "\u222B",
      there4: "\u2234",
      sim: "\u223C",
      cong: "\u2245",
      asymp: "\u2248",
      ne: "\u2260",
      equiv: "\u2261",
      le: "\u2264",
      ge: "\u2265",
      sub: "\u2282",
      sup: "\u2283",
      nsub: "\u2284",
      sube: "\u2286",
      supe: "\u2287",
      oplus: "\u2295",
      otimes: "\u2297",
      perp: "\u22A5",
      sdot: "\u22C5",
      Alpha: "\u0391",
      Beta: "\u0392",
      Gamma: "\u0393",
      Delta: "\u0394",
      Epsilon: "\u0395",
      Zeta: "\u0396",
      Eta: "\u0397",
      Theta: "\u0398",
      Iota: "\u0399",
      Kappa: "\u039A",
      Lambda: "\u039B",
      Mu: "\u039C",
      Nu: "\u039D",
      Xi: "\u039E",
      Omicron: "\u039F",
      Pi: "\u03A0",
      Rho: "\u03A1",
      Sigma: "\u03A3",
      Tau: "\u03A4",
      Upsilon: "\u03A5",
      Phi: "\u03A6",
      Chi: "\u03A7",
      Psi: "\u03A8",
      Omega: "\u03A9",
      alpha: "\u03B1",
      beta: "\u03B2",
      gamma: "\u03B3",
      delta: "\u03B4",
      epsilon: "\u03B5",
      zeta: "\u03B6",
      eta: "\u03B7",
      theta: "\u03B8",
      iota: "\u03B9",
      kappa: "\u03BA",
      lambda: "\u03BB",
      mu: "\u03BC",
      nu: "\u03BD",
      xi: "\u03BE",
      omicron: "\u03BF",
      pi: "\u03C0",
      rho: "\u03C1",
      sigmaf: "\u03C2",
      sigma: "\u03C3",
      tau: "\u03C4",
      upsilon: "\u03C5",
      phi: "\u03C6",
      chi: "\u03C7",
      psi: "\u03C8",
      omega: "\u03C9",
      thetasym: "\u03D1",
      upsih: "\u03D2",
      piv: "\u03D6",
      OElig: "\u0152",
      oelig: "\u0153",
      Scaron: "\u0160",
      scaron: "\u0161",
      Yuml: "\u0178",
      fnof: "\u0192",
      circ: "\u02C6",
      tilde: "\u02DC",
      ensp: "\u2002",
      emsp: "\u2003",
      thinsp: "\u2009",
      zwnj: "\u200C",
      zwj: "\u200D",
      lrm: "\u200E",
      rlm: "\u200F",
      ndash: "\u2013",
      mdash: "\u2014",
      lsquo: "\u2018",
      rsquo: "\u2019",
      sbquo: "\u201A",
      ldquo: "\u201C",
      rdquo: "\u201D",
      bdquo: "\u201E",
      dagger: "\u2020",
      Dagger: "\u2021",
      bull: "\u2022",
      hellip: "\u2026",
      permil: "\u2030",
      prime: "\u2032",
      Prime: "\u2033",
      lsaquo: "\u2039",
      rsaquo: "\u203A",
      oline: "\u203E",
      euro: "\u20AC",
      trade: "\u2122",
      larr: "\u2190",
      uarr: "\u2191",
      rarr: "\u2192",
      darr: "\u2193",
      harr: "\u2194",
      crarr: "\u21B5",
      lceil: "\u2308",
      rceil: "\u2309",
      lfloor: "\u230A",
      rfloor: "\u230B",
      loz: "\u25CA",
      spades: "\u2660",
      clubs: "\u2663",
      hearts: "\u2665",
      diams: "\u2666"
    };
  }
});

// common/xmldom/sax.js
var require_sax = __commonJS({
  "common/xmldom/sax.js"(exports) {
    var nameStartChar = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/;
    var nameChar = new RegExp("[\\-\\.0-9" + nameStartChar.source.slice(1, -1) + "\\u00B7\\u0300-\\u036F\\u203F-\\u2040]");
    var tagNamePattern = new RegExp("^" + nameStartChar.source + nameChar.source + "*(?::" + nameStartChar.source + nameChar.source + "*)?$");
    var S_TAG = 0;
    var S_ATTR = 1;
    var S_ATTR_SPACE = 2;
    var S_EQ = 3;
    var S_ATTR_NOQUOT_VALUE = 4;
    var S_ATTR_END = 5;
    var S_TAG_SPACE = 6;
    var S_TAG_CLOSE = 7;
    function XMLReader() {
    }
    XMLReader.prototype = {
      parse: function (source, defaultNSMap, entityMap) {
        var domBuilder = this.domBuilder;
        domBuilder.startDocument();
        _copy(defaultNSMap, defaultNSMap = {});
        parse(
          source,
          defaultNSMap,
          entityMap,
          domBuilder,
          this.errorHandler
        );
        domBuilder.endDocument();
      }
    };
    function parse(source, defaultNSMapCopy, entityMap, domBuilder, errorHandler) {
      function fixedFromCharCode(code) {
        if (code > 65535) {
          code -= 65536;
          var surrogate1 = 55296 + (code >> 10), surrogate2 = 56320 + (code & 1023);
          return String.fromCharCode(surrogate1, surrogate2);
        } else {
          return String.fromCharCode(code);
        }
      }
      function entityReplacer(a2) {
        var k = a2.slice(1, -1);
        if (k in entityMap) {
          return entityMap[k];
        } else if (k.charAt(0) === "#") {
          return fixedFromCharCode(parseInt(k.substr(1).replace("x", "0x")));
        } else {
          errorHandler.error("entity not found:" + a2);
          return a2;
        }
      }
      function appendText(end2) {
        if (end2 > start) {
          var xt = source.substring(start, end2).replace(/&#?\w+;/g, entityReplacer);
          locator && position(start);
          domBuilder.characters(xt, 0, end2 - start);
          start = end2;
        }
      }
      function position(p, m) {
        while (p >= lineEnd && (m = linePattern.exec(source))) {
          lineStart = m.index;
          lineEnd = lineStart + m[0].length;
          locator.lineNumber++;
        }
        locator.columnNumber = p - lineStart + 1;
      }
      var lineStart = 0;
      var lineEnd = 0;
      var linePattern = /.*(?:\r\n?|\n)|.*$/g;
      var locator = domBuilder.locator;
      var parseStack = [{ currentNSMap: defaultNSMapCopy }];
      var closeMap = {};
      var start = 0;
      while (true) {
        try {
          var tagStart = source.indexOf("<", start);
          if (tagStart < 0) {
            if (!source.substr(start).match(/^\s*$/)) {
              var doc = domBuilder.doc;
              var text = doc.createTextNode(source.substr(start));
              doc.appendChild(text);
              domBuilder.currentElement = text;
            }
            return;
          }
          if (tagStart > start) {
            appendText(tagStart);
          }
          switch (source.charAt(tagStart + 1)) {
            case "/":
              var end = source.indexOf(">", tagStart + 3);
              var tagName = source.substring(tagStart + 2, end);
              var config = parseStack.pop();
              if (end < 0) {
                tagName = source.substring(tagStart + 2).replace(/[\s<].*/, "");
                errorHandler.error("end tag name: " + tagName + " is not complete:" + config.tagName);
                end = tagStart + 1 + tagName.length;
              } else if (tagName.match(/\s</)) {
                tagName = tagName.replace(/[\s<].*/, "");
                errorHandler.error("end tag name: " + tagName + " maybe not complete");
                end = tagStart + 1 + tagName.length;
              }
              var localNSMap = config.localNSMap;
              var endMatch = config.tagName == tagName;
              var endIgnoreCaseMach = endMatch || config.tagName && config.tagName.toLowerCase() == tagName.toLowerCase();
              if (endIgnoreCaseMach) {
                domBuilder.endElement(config.uri, config.localName, tagName);
                if (localNSMap) {
                  for (var prefix in localNSMap) {
                    domBuilder.endPrefixMapping(prefix);
                  }
                }
                if (!endMatch) {
                  errorHandler.fatalError("end tag name: " + tagName + " is not match the current start tagName:" + config.tagName);
                }
              } else {
                parseStack.push(config);
              }
              end++;
              break;
            case "?":
              locator && position(tagStart);
              end = parseInstruction(source, tagStart, domBuilder);
              break;
            case "!":
              locator && position(tagStart);
              end = parseDCC(source, tagStart, domBuilder, errorHandler);
              break;
            default:
              locator && position(tagStart);
              var el = new ElementAttributes();
              var currentNSMap = parseStack[parseStack.length - 1].currentNSMap;
              var end = parseElementStartPart(source, tagStart, el, currentNSMap, entityReplacer, errorHandler);
              var len = el.length;
              if (!el.closed && fixSelfClosed(source, end, el.tagName, closeMap)) {
                el.closed = true;
                if (!entityMap.nbsp) {
                  errorHandler.warning("unclosed xml attribute");
                }
              }
              if (locator && len) {
                var locator2 = copyLocator(locator, {});
                for (var i = 0; i < len; i++) {
                  var a = el[i];
                  position(a.offset);
                  a.locator = copyLocator(locator, {});
                }
                domBuilder.locator = locator2;
                if (appendElement(el, domBuilder, currentNSMap)) {
                  parseStack.push(el);
                }
                domBuilder.locator = locator;
              } else {
                if (appendElement(el, domBuilder, currentNSMap)) {
                  parseStack.push(el);
                }
              }
              if (el.uri === "http://www.w3.org/1999/xhtml" && !el.closed) {
                end = parseHtmlSpecialContent(source, end, el.tagName, entityReplacer, domBuilder);
              } else {
                end++;
              }
          }
        } catch (e) {
          errorHandler.error("element parse error: " + e);
          end = -1;
        }
        if (end > start) {
          start = end;
        } else {
          appendText(Math.max(tagStart, start) + 1);
        }
      }
    }
    function copyLocator(f, t) {
      t.lineNumber = f.lineNumber;
      t.columnNumber = f.columnNumber;
      return t;
    }
    function parseElementStartPart(source, start, el, currentNSMap, entityReplacer, errorHandler) {
      var attrName;
      var value;
      var p = ++start;
      var s = S_TAG;
      while (true) {
        var c = source.charAt(p);
        switch (c) {
          case "=":
            if (s === S_ATTR) {
              attrName = source.slice(start, p);
              s = S_EQ;
            } else if (s === S_ATTR_SPACE) {
              s = S_EQ;
            } else {
              throw new Error("attribute equal must after attrName");
            }
            break;
          case "'":
          case '"':
            if (s === S_EQ || s === S_ATTR) {
              if (s === S_ATTR) {
                errorHandler.warning('attribute value must after "="');
                attrName = source.slice(start, p);
              }
              start = p + 1;
              p = source.indexOf(c, start);
              if (p > 0) {
                value = source.slice(start, p).replace(/&#?\w+;/g, entityReplacer);
                el.add(attrName, value, start - 1);
                s = S_ATTR_END;
              } else {
                throw new Error("attribute value no end '" + c + "' match");
              }
            } else if (s == S_ATTR_NOQUOT_VALUE) {
              value = source.slice(start, p).replace(/&#?\w+;/g, entityReplacer);
              el.add(attrName, value, start);
              errorHandler.warning('attribute "' + attrName + '" missed start quot(' + c + ")!!");
              start = p + 1;
              s = S_ATTR_END;
            } else {
              throw new Error('attribute value must after "="');
            }
            break;
          case "/":
            switch (s) {
              case S_TAG:
                el.setTagName(source.slice(start, p));
              case S_ATTR_END:
              case S_TAG_SPACE:
              case S_TAG_CLOSE:
                s = S_TAG_CLOSE;
                el.closed = true;
              case S_ATTR_NOQUOT_VALUE:
              case S_ATTR:
              case S_ATTR_SPACE:
                break;
              default:
                throw new Error("attribute invalid close char('/')");
            }
            break;
          case "":
            errorHandler.error("unexpected end of input");
            if (s == S_TAG) {
              el.setTagName(source.slice(start, p));
            }
            return p;
          case ">":
            switch (s) {
              case S_TAG:
                el.setTagName(source.slice(start, p));
              case S_ATTR_END:
              case S_TAG_SPACE:
              case S_TAG_CLOSE:
                break;
              case S_ATTR_NOQUOT_VALUE:
              case S_ATTR:
                value = source.slice(start, p);
                if (value.slice(-1) === "/") {
                  el.closed = true;
                  value = value.slice(0, -1);
                }
              case S_ATTR_SPACE:
                if (s === S_ATTR_SPACE) {
                  value = attrName;
                }
                if (s == S_ATTR_NOQUOT_VALUE) {
                  errorHandler.warning('attribute "' + value + '" missed quot(")!!');
                  el.add(attrName, value.replace(/&#?\w+;/g, entityReplacer), start);
                } else {
                  if (currentNSMap[""] !== "http://www.w3.org/1999/xhtml" || !value.match(/^(?:disabled|checked|selected)$/i)) {
                    errorHandler.warning('attribute "' + value + '" missed value!! "' + value + '" instead!!');
                  }
                  el.add(value, value, start);
                }
                break;
              case S_EQ:
                throw new Error("attribute value missed!!");
            }
            return p;
          case "\x80":
            c = " ";
          default:
            if (c <= " ") {
              switch (s) {
                case S_TAG:
                  el.setTagName(source.slice(start, p));
                  s = S_TAG_SPACE;
                  break;
                case S_ATTR:
                  attrName = source.slice(start, p);
                  s = S_ATTR_SPACE;
                  break;
                case S_ATTR_NOQUOT_VALUE:
                  var value = source.slice(start, p).replace(/&#?\w+;/g, entityReplacer);
                  errorHandler.warning('attribute "' + value + '" missed quot(")!!');
                  el.add(attrName, value, start);
                case S_ATTR_END:
                  s = S_TAG_SPACE;
                  break;
              }
            } else {
              switch (s) {
                case S_ATTR_SPACE:
                  var tagName = el.tagName;
                  if (currentNSMap[""] !== "http://www.w3.org/1999/xhtml" || !attrName.match(/^(?:disabled|checked|selected)$/i)) {
                    errorHandler.warning('attribute "' + attrName + '" missed value!! "' + attrName + '" instead2!!');
                  }
                  el.add(attrName, attrName, start);
                  start = p;
                  s = S_ATTR;
                  break;
                case S_ATTR_END:
                  errorHandler.warning('attribute space is required"' + attrName + '"!!');
                case S_TAG_SPACE:
                  s = S_ATTR;
                  start = p;
                  break;
                case S_EQ:
                  s = S_ATTR_NOQUOT_VALUE;
                  start = p;
                  break;
                case S_TAG_CLOSE:
                  throw new Error("elements closed character '/' and '>' must be connected to");
              }
            }
        }
        p++;
      }
    }
    function appendElement(el, domBuilder, currentNSMap) {
      var tagName = el.tagName;
      var localNSMap = null;
      var i = el.length;
      while (i--) {
        var a = el[i];
        var qName = a.qName;
        var value = a.value;
        var nsp = qName.indexOf(":");
        if (nsp > 0) {
          var prefix = a.prefix = qName.slice(0, nsp);
          var localName = qName.slice(nsp + 1);
          var nsPrefix = prefix === "xmlns" && localName;
        } else {
          localName = qName;
          prefix = null;
          nsPrefix = qName === "xmlns" && "";
        }
        a.localName = localName;
        if (nsPrefix !== false) {
          if (localNSMap == null) {
            localNSMap = {};
            _copy(currentNSMap, currentNSMap = {});
          }
          currentNSMap[nsPrefix] = localNSMap[nsPrefix] = value;
          a.uri = "http://www.w3.org/2000/xmlns/";
          domBuilder.startPrefixMapping(nsPrefix, value);
        }
      }
      var i = el.length;
      while (i--) {
        a = el[i];
        var prefix = a.prefix;
        if (prefix) {
          if (prefix === "xml") {
            a.uri = "http://www.w3.org/XML/1998/namespace";
          }
          if (prefix !== "xmlns") {
            a.uri = currentNSMap[prefix || ""];
          }
        }
      }
      var nsp = tagName.indexOf(":");
      if (nsp > 0) {
        prefix = el.prefix = tagName.slice(0, nsp);
        localName = el.localName = tagName.slice(nsp + 1);
      } else {
        prefix = null;
        localName = el.localName = tagName;
      }
      var ns = el.uri = currentNSMap[prefix || ""];
      domBuilder.startElement(ns, localName, tagName, el);
      if (el.closed) {
        domBuilder.endElement(ns, localName, tagName);
        if (localNSMap) {
          for (prefix in localNSMap) {
            domBuilder.endPrefixMapping(prefix);
          }
        }
      } else {
        el.currentNSMap = currentNSMap;
        el.localNSMap = localNSMap;
        return true;
      }
    }
    function parseHtmlSpecialContent(source, elStartEnd, tagName, entityReplacer, domBuilder) {
      if (/^(?:script|textarea)$/i.test(tagName)) {
        var elEndStart = source.indexOf("</" + tagName + ">", elStartEnd);
        var text = source.substring(elStartEnd + 1, elEndStart);
        if (/[&<]/.test(text)) {
          if (/^script$/i.test(tagName)) {
            domBuilder.characters(text, 0, text.length);
            return elEndStart;
          }
          text = text.replace(/&#?\w+;/g, entityReplacer);
          domBuilder.characters(text, 0, text.length);
          return elEndStart;
        }
      }
      return elStartEnd + 1;
    }
    function fixSelfClosed(source, elStartEnd, tagName, closeMap) {
      var pos = closeMap[tagName];
      if (pos == null) {
        pos = source.lastIndexOf("</" + tagName + ">");
        if (pos < elStartEnd) {
          pos = source.lastIndexOf("</" + tagName);
        }
        closeMap[tagName] = pos;
      }
      return pos < elStartEnd;
    }
    function _copy(source, target) {
      for (var n in source) {
        target[n] = source[n];
      }
    }
    function parseDCC(source, start, domBuilder, errorHandler) {
      var next = source.charAt(start + 2);
      switch (next) {
        case "-":
          if (source.charAt(start + 3) === "-") {
            var end = source.indexOf("-->", start + 4);
            if (end > start) {
              domBuilder.comment(source, start + 4, end - start - 4);
              return end + 3;
            } else {
              errorHandler.error("Unclosed comment");
              return -1;
            }
          } else {
            return -1;
          }
        default:
          if (source.substr(start + 3, 6) == "CDATA[") {
            var end = source.indexOf("]]>", start + 9);
            domBuilder.startCDATA();
            domBuilder.characters(source, start + 9, end - start - 9);
            domBuilder.endCDATA();
            return end + 3;
          }
          var matchs = split(source, start);
          var len = matchs.length;
          if (len > 1 && /!doctype/i.test(matchs[0][0])) {
            var name = matchs[1][0];
            var pubid = len > 3 && /^public$/i.test(matchs[2][0]) && matchs[3][0];
            var sysid = len > 4 && matchs[4][0];
            var lastMatch = matchs[len - 1];
            domBuilder.startDTD(
              name,
              pubid && pubid.replace(/^(['"])(.*?)\1$/, "$2"),
              sysid && sysid.replace(/^(['"])(.*?)\1$/, "$2")
            );
            domBuilder.endDTD();
            return lastMatch.index + lastMatch[0].length;
          }
      }
      return -1;
    }
    function parseInstruction(source, start, domBuilder) {
      var end = source.indexOf("?>", start);
      if (end) {
        var match = source.substring(start, end).match(/^<\?(\S*)\s*([\s\S]*?)\s*$/);
        if (match) {
          var len = match[0].length;
          domBuilder.processingInstruction(match[1], match[2]);
          return end + 2;
        } else {
          return -1;
        }
      }
      return -1;
    }
    function ElementAttributes(source) {
    }
    ElementAttributes.prototype = {
      setTagName: function (tagName) {
        if (!tagNamePattern.test(tagName)) {
          throw new Error("invalid tagName:" + tagName);
        }
        this.tagName = tagName;
      },
      add: function (qName, value, offset) {
        if (!tagNamePattern.test(qName)) {
          throw new Error("invalid attribute:" + qName);
        }
        this[this.length++] = { qName, value, offset };
      },
      length: 0,
      getLocalName: function (i) {
        return this[i].localName;
      },
      getLocator: function (i) {
        return this[i].locator;
      },
      getQName: function (i) {
        return this[i].qName;
      },
      getURI: function (i) {
        return this[i].uri;
      },
      getValue: function (i) {
        return this[i].value;
      }
      //	,getIndex:function(uri, localName)){
      //		if(localName){
      //			
      //		}else{
      //			var qName = uri
      //		}
      //	},
      //	getValue:function(){return this.getValue(this.getIndex.apply(this,arguments))},
      //	getType:function(uri,localName){}
      //	getType:function(i){},
    };
    function split(source, start) {
      var match;
      var buf = [];
      var reg = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
      reg.lastIndex = start;
      reg.exec(source);
      while (match = reg.exec(source)) {
        buf.push(match);
        if (match[1])
          return buf;
      }
    }
    exports.XMLReader = XMLReader;
  }
});

// common/xmldom/dom.js
var require_dom = __commonJS({
  "common/xmldom/dom.js"(exports) {
    function copy(src, dest) {
      for (var p in src) {
        dest[p] = src[p];
      }
    }
    function _extends(Class, Super) {
      var pt = Class.prototype;
      if (!(pt instanceof Super)) {
        let t2 = function () {
        };
        var t = t2;
        ;
        t2.prototype = Super.prototype;
        t2 = new t2();
        for (var p in pt) {
          t2[p] = pt[p];
        }
        Class.prototype = pt = t2;
      }
      if (pt.constructor != Class) {
        if (typeof Class != "function") {
          console.error("unknow Class:" + Class);
        }
        pt.constructor = Class;
      }
    }
    var htmlns = "http://www.w3.org/1999/xhtml";
    var NodeType = {};
    var ELEMENT_NODE = NodeType.ELEMENT_NODE = 1;
    var ATTRIBUTE_NODE = NodeType.ATTRIBUTE_NODE = 2;
    var TEXT_NODE = NodeType.TEXT_NODE = 3;
    var CDATA_SECTION_NODE = NodeType.CDATA_SECTION_NODE = 4;
    var ENTITY_REFERENCE_NODE = NodeType.ENTITY_REFERENCE_NODE = 5;
    var ENTITY_NODE = NodeType.ENTITY_NODE = 6;
    var PROCESSING_INSTRUCTION_NODE = NodeType.PROCESSING_INSTRUCTION_NODE = 7;
    var COMMENT_NODE = NodeType.COMMENT_NODE = 8;
    var DOCUMENT_NODE = NodeType.DOCUMENT_NODE = 9;
    var DOCUMENT_TYPE_NODE = NodeType.DOCUMENT_TYPE_NODE = 10;
    var DOCUMENT_FRAGMENT_NODE = NodeType.DOCUMENT_FRAGMENT_NODE = 11;
    var NOTATION_NODE = NodeType.NOTATION_NODE = 12;
    var ExceptionCode = {};
    var ExceptionMessage = {};
    var INDEX_SIZE_ERR = ExceptionCode.INDEX_SIZE_ERR = (ExceptionMessage[1] = "Index size error", 1);
    var DOMSTRING_SIZE_ERR = ExceptionCode.DOMSTRING_SIZE_ERR = (ExceptionMessage[2] = "DOMString size error", 2);
    var HIERARCHY_REQUEST_ERR = ExceptionCode.HIERARCHY_REQUEST_ERR = (ExceptionMessage[3] = "Hierarchy request error", 3);
    var WRONG_DOCUMENT_ERR = ExceptionCode.WRONG_DOCUMENT_ERR = (ExceptionMessage[4] = "Wrong document", 4);
    var INVALID_CHARACTER_ERR = ExceptionCode.INVALID_CHARACTER_ERR = (ExceptionMessage[5] = "Invalid character", 5);
    var NO_DATA_ALLOWED_ERR = ExceptionCode.NO_DATA_ALLOWED_ERR = (ExceptionMessage[6] = "No data allowed", 6);
    var NO_MODIFICATION_ALLOWED_ERR = ExceptionCode.NO_MODIFICATION_ALLOWED_ERR = (ExceptionMessage[7] = "No modification allowed", 7);
    var NOT_FOUND_ERR = ExceptionCode.NOT_FOUND_ERR = (ExceptionMessage[8] = "Not found", 8);
    var NOT_SUPPORTED_ERR = ExceptionCode.NOT_SUPPORTED_ERR = (ExceptionMessage[9] = "Not supported", 9);
    var INUSE_ATTRIBUTE_ERR = ExceptionCode.INUSE_ATTRIBUTE_ERR = (ExceptionMessage[10] = "Attribute in use", 10);
    var INVALID_STATE_ERR = ExceptionCode.INVALID_STATE_ERR = (ExceptionMessage[11] = "Invalid state", 11);
    var SYNTAX_ERR = ExceptionCode.SYNTAX_ERR = (ExceptionMessage[12] = "Syntax error", 12);
    var INVALID_MODIFICATION_ERR = ExceptionCode.INVALID_MODIFICATION_ERR = (ExceptionMessage[13] = "Invalid modification", 13);
    var NAMESPACE_ERR = ExceptionCode.NAMESPACE_ERR = (ExceptionMessage[14] = "Invalid namespace", 14);
    var INVALID_ACCESS_ERR = ExceptionCode.INVALID_ACCESS_ERR = (ExceptionMessage[15] = "Invalid access", 15);
    function DOMException(code, message) {
      if (message instanceof Error) {
        var error = message;
      } else {
        error = this;
        Error.call(this, ExceptionMessage[code]);
        this.message = ExceptionMessage[code];
        if (Error.captureStackTrace)
          Error.captureStackTrace(this, DOMException);
      }
      error.code = code;
      if (message)
        this.message = this.message + ": " + message;
      return error;
    }
    DOMException.prototype = Error.prototype;
    copy(ExceptionCode, DOMException);
    function NodeList() {
    }
    NodeList.prototype = {
      /**
       * The number of nodes in the list. The range of valid child node indices is 0 to length-1 inclusive.
       * @standard level1
       */
      length: 0,
      /**
       * Returns the indexth item in the collection. If index is greater than or equal to the number of nodes in the list, this returns null.
       * @standard level1
       * @param index  unsigned long 
       *   Index into the collection.
       * @return Node
       * 	The node at the indexth position in the NodeList, or null if that is not a valid index. 
       */
      item: function (index) {
        return this[index] || null;
      },
      toString: function (isHTML, nodeFilter) {
        for (var buf = [], i = 0; i < this.length; i++) {
          serializeToString(this[i], buf, isHTML, nodeFilter);
        }
        return buf.join("");
      }
    };
    function LiveNodeList(node, refresh) {
      this._node = node;
      this._refresh = refresh;
      _updateLiveList(this);
    }
    function _updateLiveList(list) {
      var inc = list._node._inc || list._node.ownerDocument._inc;
      if (list._inc != inc) {
        var ls = list._refresh(list._node);
        __set__(list, "length", ls.length);
        for (var p in ls) {
          list[p] = ls[p];
        }
        list._inc = inc;
      }
    }
    LiveNodeList.prototype.item = function (i) {
      _updateLiveList(this);
      return this[i];
    };
    _extends(LiveNodeList, NodeList);
    function NamedNodeMap() {
    }
    function _findNodeIndex(list, node) {
      var i = list.length;
      while (i--) {
        if (list[i] === node) {
          return i;
        }
      }
    }
    function _addNamedNode(el, list, newAttr, oldAttr) {
      if (oldAttr) {
        list[_findNodeIndex(list, oldAttr)] = newAttr;
      } else {
        list[list.length++] = newAttr;
      }
      if (el) {
        newAttr.ownerElement = el;
        var doc = el.ownerDocument;
        if (doc) {
          oldAttr && _onRemoveAttribute(doc, el, oldAttr);
          _onAddAttribute(doc, el, newAttr);
        }
      }
    }
    function _removeNamedNode(el, list, attr) {
      var i = _findNodeIndex(list, attr);
      if (i >= 0) {
        var lastIndex = list.length - 1;
        while (i < lastIndex) {
          list[i] = list[++i];
        }
        list.length = lastIndex;
        if (el) {
          var doc = el.ownerDocument;
          if (doc) {
            _onRemoveAttribute(doc, el, attr);
            attr.ownerElement = null;
          }
        }
      } else {
        throw DOMException(NOT_FOUND_ERR, new Error(el.tagName + "@" + attr));
      }
    }
    NamedNodeMap.prototype = {
      length: 0,
      item: NodeList.prototype.item,
      getNamedItem: function (key) {
        var i = this.length;
        while (i--) {
          var attr = this[i];
          if (attr.nodeName == key) {
            return attr;
          }
        }
      },
      setNamedItem: function (attr) {
        var el = attr.ownerElement;
        if (el && el != this._ownerElement) {
          throw new DOMException(INUSE_ATTRIBUTE_ERR);
        }
        var oldAttr = this.getNamedItem(attr.nodeName);
        _addNamedNode(this._ownerElement, this, attr, oldAttr);
        return oldAttr;
      },
      /* returns Node */
      setNamedItemNS: function (attr) {
        var el = attr.ownerElement, oldAttr;
        if (el && el != this._ownerElement) {
          throw new DOMException(INUSE_ATTRIBUTE_ERR);
        }
        oldAttr = this.getNamedItemNS(attr.namespaceURI, attr.localName);
        _addNamedNode(this._ownerElement, this, attr, oldAttr);
        return oldAttr;
      },
      /* returns Node */
      removeNamedItem: function (key) {
        var attr = this.getNamedItem(key);
        _removeNamedNode(this._ownerElement, this, attr);
        return attr;
      },
      // raises: NOT_FOUND_ERR,NO_MODIFICATION_ALLOWED_ERR
      //for level2
      removeNamedItemNS: function (namespaceURI, localName) {
        var attr = this.getNamedItemNS(namespaceURI, localName);
        _removeNamedNode(this._ownerElement, this, attr);
        return attr;
      },
      getNamedItemNS: function (namespaceURI, localName) {
        var i = this.length;
        while (i--) {
          var node = this[i];
          if (node.localName == localName && node.namespaceURI == namespaceURI) {
            return node;
          }
        }
        return null;
      }
    };
    function DOMImplementation(features) {
      this._features = {};
      if (features) {
        for (var feature in features) {
          this._features = features[feature];
        }
      }
    }
    DOMImplementation.prototype = {
      hasFeature: function (feature, version2) {
        var versions = this._features[feature.toLowerCase()];
        if (versions && (!version2 || version2 in versions)) {
          return true;
        } else {
          return false;
        }
      },
      // Introduced in DOM Level 2:
      createDocument: function (namespaceURI, qualifiedName, doctype) {
        var doc = new Document();
        doc.implementation = this;
        doc.childNodes = new NodeList();
        doc.doctype = doctype;
        if (doctype) {
          doc.appendChild(doctype);
        }
        if (qualifiedName) {
          var root = doc.createElementNS(namespaceURI, qualifiedName);
          doc.appendChild(root);
        }
        return doc;
      },
      // Introduced in DOM Level 2:
      createDocumentType: function (qualifiedName, publicId, systemId) {
        var node = new DocumentType();
        node.name = qualifiedName;
        node.nodeName = qualifiedName;
        node.publicId = publicId;
        node.systemId = systemId;
        return node;
      }
    };
    function Node2() {
    }
    Node2.prototype = {
      firstChild: null,
      lastChild: null,
      previousSibling: null,
      nextSibling: null,
      attributes: null,
      parentNode: null,
      childNodes: null,
      ownerDocument: null,
      nodeValue: null,
      namespaceURI: null,
      prefix: null,
      localName: null,
      // Modified in DOM Level 2:
      insertBefore: function (newChild, refChild) {
        return _insertBefore(this, newChild, refChild);
      },
      replaceChild: function (newChild, oldChild) {
        this.insertBefore(newChild, oldChild);
        if (oldChild) {
          this.removeChild(oldChild);
        }
      },
      removeChild: function (oldChild) {
        return _removeChild(this, oldChild);
      },
      appendChild: function (newChild) {
        return this.insertBefore(newChild, null);
      },
      hasChildNodes: function () {
        return this.firstChild != null;
      },
      cloneNode: function (deep) {
        return cloneNode(this.ownerDocument || this, this, deep);
      },
      // Modified in DOM Level 2:
      normalize: function () {
        var child = this.firstChild;
        while (child) {
          var next = child.nextSibling;
          if (next && next.nodeType == TEXT_NODE && child.nodeType == TEXT_NODE) {
            this.removeChild(next);
            child.appendData(next.data);
          } else {
            child.normalize();
            child = next;
          }
        }
      },
      // Introduced in DOM Level 2:
      isSupported: function (feature, version2) {
        return this.ownerDocument.implementation.hasFeature(feature, version2);
      },
      // Introduced in DOM Level 2:
      hasAttributes: function () {
        return this.attributes.length > 0;
      },
      lookupPrefix: function (namespaceURI) {
        var el = this;
        while (el) {
          var map = el._nsMap;
          if (map) {
            for (var n in map) {
              if (map[n] == namespaceURI) {
                return n;
              }
            }
          }
          el = el.nodeType == ATTRIBUTE_NODE ? el.ownerDocument : el.parentNode;
        }
        return null;
      },
      // Introduced in DOM Level 3:
      lookupNamespaceURI: function (prefix) {
        var el = this;
        while (el) {
          var map = el._nsMap;
          if (map) {
            if (prefix in map) {
              return map[prefix];
            }
          }
          el = el.nodeType == ATTRIBUTE_NODE ? el.ownerDocument : el.parentNode;
        }
        return null;
      },
      // Introduced in DOM Level 3:
      isDefaultNamespace: function (namespaceURI) {
        var prefix = this.lookupPrefix(namespaceURI);
        return prefix == null;
      }
    };
    function _xmlEncoder(c) {
      return c == "<" && "&lt;" || c == ">" && "&gt;" || c == "&" && "&amp;" || c == '"' && "&quot;" || "&#" + c.charCodeAt() + ";";
    }
    copy(NodeType, Node2);
    copy(NodeType, Node2.prototype);
    function _visitNode(node, callback) {
      if (callback(node)) {
        return true;
      }
      if (node = node.firstChild) {
        do {
          if (_visitNode(node, callback)) {
            return true;
          }
        } while (node = node.nextSibling);
      }
    }
    function Document() {
    }
    function _onAddAttribute(doc, el, newAttr) {
      doc && doc._inc++;
      var ns = newAttr.namespaceURI;
      if (ns == "http://www.w3.org/2000/xmlns/") {
        el._nsMap[newAttr.prefix ? newAttr.localName : ""] = newAttr.value;
      }
    }
    function _onRemoveAttribute(doc, el, newAttr, remove) {
      doc && doc._inc++;
      var ns = newAttr.namespaceURI;
      if (ns == "http://www.w3.org/2000/xmlns/") {
        delete el._nsMap[newAttr.prefix ? newAttr.localName : ""];
      }
    }
    function _onUpdateChild(doc, el, newChild) {
      if (doc && doc._inc) {
        doc._inc++;
        var cs = el.childNodes;
        if (newChild) {
          cs[cs.length++] = newChild;
        } else {
          var child = el.firstChild;
          var i = 0;
          while (child) {
            cs[i++] = child;
            child = child.nextSibling;
          }
          cs.length = i;
        }
      }
    }
    function _removeChild(parentNode, child) {
      var previous = child.previousSibling;
      var next = child.nextSibling;
      if (previous) {
        previous.nextSibling = next;
      } else {
        parentNode.firstChild = next;
      }
      if (next) {
        next.previousSibling = previous;
      } else {
        parentNode.lastChild = previous;
      }
      _onUpdateChild(parentNode.ownerDocument, parentNode);
      return child;
    }
    function _insertBefore(parentNode, newChild, nextChild) {
      var cp = newChild.parentNode;
      if (cp) {
        cp.removeChild(newChild);
      }
      if (newChild.nodeType === DOCUMENT_FRAGMENT_NODE) {
        var newFirst = newChild.firstChild;
        if (newFirst == null) {
          return newChild;
        }
        var newLast = newChild.lastChild;
      } else {
        newFirst = newLast = newChild;
      }
      var pre = nextChild ? nextChild.previousSibling : parentNode.lastChild;
      newFirst.previousSibling = pre;
      newLast.nextSibling = nextChild;
      if (pre) {
        pre.nextSibling = newFirst;
      } else {
        parentNode.firstChild = newFirst;
      }
      if (nextChild == null) {
        parentNode.lastChild = newLast;
      } else {
        nextChild.previousSibling = newLast;
      }
      do {
        newFirst.parentNode = parentNode;
      } while (newFirst !== newLast && (newFirst = newFirst.nextSibling));
      _onUpdateChild(parentNode.ownerDocument || parentNode, parentNode);
      if (newChild.nodeType == DOCUMENT_FRAGMENT_NODE) {
        newChild.firstChild = newChild.lastChild = null;
      }
      return newChild;
    }
    function _appendSingleChild(parentNode, newChild) {
      var cp = newChild.parentNode;
      if (cp) {
        var pre = parentNode.lastChild;
        cp.removeChild(newChild);
        var pre = parentNode.lastChild;
      }
      var pre = parentNode.lastChild;
      newChild.parentNode = parentNode;
      newChild.previousSibling = pre;
      newChild.nextSibling = null;
      if (pre) {
        pre.nextSibling = newChild;
      } else {
        parentNode.firstChild = newChild;
      }
      parentNode.lastChild = newChild;
      _onUpdateChild(parentNode.ownerDocument, parentNode, newChild);
      return newChild;
    }
    Document.prototype = {
      //implementation : null,
      nodeName: "#document",
      nodeType: DOCUMENT_NODE,
      doctype: null,
      documentElement: null,
      _inc: 1,
      insertBefore: function (newChild, refChild) {
        if (newChild.nodeType == DOCUMENT_FRAGMENT_NODE) {
          var child = newChild.firstChild;
          while (child) {
            var next = child.nextSibling;
            this.insertBefore(child, refChild);
            child = next;
          }
          return newChild;
        }
        if (this.documentElement == null && newChild.nodeType == ELEMENT_NODE) {
          this.documentElement = newChild;
        }
        return _insertBefore(this, newChild, refChild), newChild.ownerDocument = this, newChild;
      },
      removeChild: function (oldChild) {
        if (this.documentElement == oldChild) {
          this.documentElement = null;
        }
        return _removeChild(this, oldChild);
      },
      // Introduced in DOM Level 2:
      importNode: function (importedNode, deep) {
        return importNode(this, importedNode, deep);
      },
      // Introduced in DOM Level 2:
      getElementById: function (id) {
        var rtv = null;
        _visitNode(this.documentElement, function (node) {
          if (node.nodeType == ELEMENT_NODE) {
            if (node.getAttribute("id") == id) {
              rtv = node;
              return true;
            }
          }
        });
        return rtv;
      },
      //document factory method:
      createElement: function (tagName) {
        var node = new Element2();
        node.ownerDocument = this;
        node.nodeName = tagName;
        node.tagName = tagName;
        node.childNodes = new NodeList();
        var attrs = node.attributes = new NamedNodeMap();
        attrs._ownerElement = node;
        return node;
      },
      createDocumentFragment: function () {
        var node = new DocumentFragment();
        node.ownerDocument = this;
        node.childNodes = new NodeList();
        return node;
      },
      createTextNode: function (data) {
        var node = new Text();
        node.ownerDocument = this;
        node.appendData(data);
        return node;
      },
      createComment: function (data) {
        var node = new Comment();
        node.ownerDocument = this;
        node.appendData(data);
        return node;
      },
      createCDATASection: function (data) {
        var node = new CDATASection();
        node.ownerDocument = this;
        node.appendData(data);
        return node;
      },
      createProcessingInstruction: function (target, data) {
        var node = new ProcessingInstruction();
        node.ownerDocument = this;
        node.tagName = node.target = target;
        node.nodeValue = node.data = data;
        return node;
      },
      createAttribute: function (name) {
        var node = new Attr();
        node.ownerDocument = this;
        node.name = name;
        node.nodeName = name;
        node.localName = name;
        node.specified = true;
        return node;
      },
      createEntityReference: function (name) {
        var node = new EntityReference();
        node.ownerDocument = this;
        node.nodeName = name;
        return node;
      },
      // Introduced in DOM Level 2:
      createElementNS: function (namespaceURI, qualifiedName) {
        var node = new Element2();
        var pl = qualifiedName.split(":");
        var attrs = node.attributes = new NamedNodeMap();
        node.childNodes = new NodeList();
        node.ownerDocument = this;
        node.nodeName = qualifiedName;
        node.tagName = qualifiedName;
        node.namespaceURI = namespaceURI;
        if (pl.length == 2) {
          node.prefix = pl[0];
          node.localName = pl[1];
        } else {
          node.localName = qualifiedName;
        }
        attrs._ownerElement = node;
        return node;
      },
      // Introduced in DOM Level 2:
      createAttributeNS: function (namespaceURI, qualifiedName) {
        var node = new Attr();
        var pl = qualifiedName.split(":");
        node.ownerDocument = this;
        node.nodeName = qualifiedName;
        node.name = qualifiedName;
        node.namespaceURI = namespaceURI;
        node.specified = true;
        if (pl.length == 2) {
          node.prefix = pl[0];
          node.localName = pl[1];
        } else {
          node.localName = qualifiedName;
        }
        return node;
      }
    };
    _extends(Document, Node2);
    function Element2() {
      this._nsMap = {};
    }
    Element2.prototype = {
      nodeType: ELEMENT_NODE,
      hasAttribute: function (name) {
        return this.getAttributeNode(name) != null;
      },
      getAttribute: function (name) {
        var attr = this.getAttributeNode(name);
        return attr && attr.value || "";
      },
      getAttributeNode: function (name) {
        return this.attributes.getNamedItem(name);
      },
      setAttribute: function (name, value) {
        var attr = this.ownerDocument.createAttribute(name);
        attr.value = attr.nodeValue = "" + value;
        this.setAttributeNode(attr);
      },
      removeAttribute: function (name) {
        var attr = this.getAttributeNode(name);
        attr && this.removeAttributeNode(attr);
      },
      //four real opeartion method
      appendChild: function (newChild) {
        if (newChild.nodeType === DOCUMENT_FRAGMENT_NODE) {
          return this.insertBefore(newChild, null);
        } else {
          return _appendSingleChild(this, newChild);
        }
      },
      setAttributeNode: function (newAttr) {
        return this.attributes.setNamedItem(newAttr);
      },
      setAttributeNodeNS: function (newAttr) {
        return this.attributes.setNamedItemNS(newAttr);
      },
      removeAttributeNode: function (oldAttr) {
        return this.attributes.removeNamedItem(oldAttr.nodeName);
      },
      //get real attribute name,and remove it by removeAttributeNode
      removeAttributeNS: function (namespaceURI, localName) {
        var old = this.getAttributeNodeNS(namespaceURI, localName);
        old && this.removeAttributeNode(old);
      },
      hasAttributeNS: function (namespaceURI, localName) {
        return this.getAttributeNodeNS(namespaceURI, localName) != null;
      },
      getAttributeNS: function (namespaceURI, localName) {
        var attr = this.getAttributeNodeNS(namespaceURI, localName);
        return attr && attr.value || "";
      },
      setAttributeNS: function (namespaceURI, qualifiedName, value) {
        var attr = this.ownerDocument.createAttributeNS(namespaceURI, qualifiedName);
        attr.value = attr.nodeValue = "" + value;
        this.setAttributeNode(attr);
      },
      getAttributeNodeNS: function (namespaceURI, localName) {
        return this.attributes.getNamedItemNS(namespaceURI, localName);
      },
      getElementsByTagName: function (tagName) {
        return new LiveNodeList(this, function (base) {
          var ls = [];
          _visitNode(base, function (node) {
            if (node !== base && node.nodeType == ELEMENT_NODE && (tagName === "*" || node.tagName == tagName)) {
              ls.push(node);
            }
          });
          return ls;
        });
      },
      getElementsByTagNameNS: function (namespaceURI, localName) {
        return new LiveNodeList(this, function (base) {
          var ls = [];
          _visitNode(base, function (node) {
            if (node !== base && node.nodeType === ELEMENT_NODE && (namespaceURI === "*" || node.namespaceURI === namespaceURI) && (localName === "*" || node.localName == localName)) {
              ls.push(node);
            }
          });
          return ls;
        });
      }
    };
    Document.prototype.getElementsByTagName = Element2.prototype.getElementsByTagName;
    Document.prototype.getElementsByTagNameNS = Element2.prototype.getElementsByTagNameNS;
    _extends(Element2, Node2);
    function Attr() {
    }
    Attr.prototype.nodeType = ATTRIBUTE_NODE;
    _extends(Attr, Node2);
    function CharacterData() {
    }
    CharacterData.prototype = {
      data: "",
      substringData: function (offset, count) {
        return this.data.substring(offset, offset + count);
      },
      appendData: function (text) {
        text = this.data + text;
        this.nodeValue = this.data = text;
        this.length = text.length;
      },
      insertData: function (offset, text) {
        this.replaceData(offset, 0, text);
      },
      appendChild: function (newChild) {
        throw new Error(ExceptionMessage[HIERARCHY_REQUEST_ERR]);
      },
      deleteData: function (offset, count) {
        this.replaceData(offset, count, "");
      },
      replaceData: function (offset, count, text) {
        var start = this.data.substring(0, offset);
        var end = this.data.substring(offset + count);
        text = start + text + end;
        this.nodeValue = this.data = text;
        this.length = text.length;
      }
    };
    _extends(CharacterData, Node2);
    function Text() {
    }
    Text.prototype = {
      nodeName: "#text",
      nodeType: TEXT_NODE,
      splitText: function (offset) {
        var text = this.data;
        var newText = text.substring(offset);
        text = text.substring(0, offset);
        this.data = this.nodeValue = text;
        this.length = text.length;
        var newNode = this.ownerDocument.createTextNode(newText);
        if (this.parentNode) {
          this.parentNode.insertBefore(newNode, this.nextSibling);
        }
        return newNode;
      }
    };
    _extends(Text, CharacterData);
    function Comment() {
    }
    Comment.prototype = {
      nodeName: "#comment",
      nodeType: COMMENT_NODE
    };
    _extends(Comment, CharacterData);
    function CDATASection() {
    }
    CDATASection.prototype = {
      nodeName: "#cdata-section",
      nodeType: CDATA_SECTION_NODE
    };
    _extends(CDATASection, CharacterData);
    function DocumentType() {
    }
    DocumentType.prototype.nodeType = DOCUMENT_TYPE_NODE;
    _extends(DocumentType, Node2);
    function Notation() {
    }
    Notation.prototype.nodeType = NOTATION_NODE;
    _extends(Notation, Node2);
    function Entity() {
    }
    Entity.prototype.nodeType = ENTITY_NODE;
    _extends(Entity, Node2);
    function EntityReference() {
    }
    EntityReference.prototype.nodeType = ENTITY_REFERENCE_NODE;
    _extends(EntityReference, Node2);
    function DocumentFragment() {
    }
    DocumentFragment.prototype.nodeName = "#document-fragment";
    DocumentFragment.prototype.nodeType = DOCUMENT_FRAGMENT_NODE;
    _extends(DocumentFragment, Node2);
    function ProcessingInstruction() {
    }
    ProcessingInstruction.prototype.nodeType = PROCESSING_INSTRUCTION_NODE;
    _extends(ProcessingInstruction, Node2);
    function XMLSerializer() {
    }
    XMLSerializer.prototype.serializeToString = function (node, isHtml, nodeFilter) {
      return nodeSerializeToString.call(node, isHtml, nodeFilter);
    };
    Node2.prototype.toString = nodeSerializeToString;
    function nodeSerializeToString(isHtml, nodeFilter) {
      var buf = [];
      var refNode = this.nodeType == 9 && this.documentElement || this;
      var prefix = refNode.prefix;
      var uri = refNode.namespaceURI;
      if (uri && prefix == null) {
        var prefix = refNode.lookupPrefix(uri);
        if (prefix == null) {
          var visibleNamespaces = [
            { namespace: uri, prefix: null }
            //{namespace:uri,prefix:''}
          ];
        }
      }
      serializeToString(this, buf, isHtml, nodeFilter, visibleNamespaces);
      return buf.join("");
    }
    function needNamespaceDefine(node, isHTML, visibleNamespaces) {
      var prefix = node.prefix || "";
      var uri = node.namespaceURI;
      if (!prefix && !uri) {
        return false;
      }
      if (prefix === "xml" && uri === "http://www.w3.org/XML/1998/namespace" || uri == "http://www.w3.org/2000/xmlns/") {
        return false;
      }
      var i = visibleNamespaces.length;
      while (i--) {
        var ns = visibleNamespaces[i];
        if (ns.prefix == prefix) {
          return ns.namespace != uri;
        }
      }
      return true;
    }
    function serializeToString(node, buf, isHTML, nodeFilter, visibleNamespaces) {
      if (nodeFilter) {
        node = nodeFilter(node);
        if (node) {
          if (typeof node == "string") {
            buf.push(node);
            return;
          }
        } else {
          return;
        }
      }
      switch (node.nodeType) {
        case ELEMENT_NODE:
          if (!visibleNamespaces)
            visibleNamespaces = [];
          var startVisibleNamespaces = visibleNamespaces.length;
          var attrs = node.attributes;
          var len = attrs.length;
          var child = node.firstChild;
          var nodeName = node.tagName;
          isHTML = htmlns === node.namespaceURI || isHTML;
          buf.push("<", nodeName);
          for (var i = 0; i < len; i++) {
            var attr = attrs.item(i);
            if (attr.prefix == "xmlns") {
              visibleNamespaces.push({ prefix: attr.localName, namespace: attr.value });
            } else if (attr.nodeName == "xmlns") {
              visibleNamespaces.push({ prefix: "", namespace: attr.value });
            }
          }
          for (var i = 0; i < len; i++) {
            var attr = attrs.item(i);
            if (needNamespaceDefine(attr, isHTML, visibleNamespaces)) {
              var prefix = attr.prefix || "";
              var uri = attr.namespaceURI;
              var ns = prefix ? " xmlns:" + prefix : " xmlns";
              buf.push(ns, '="', uri, '"');
              visibleNamespaces.push({ prefix, namespace: uri });
            }
            serializeToString(attr, buf, isHTML, nodeFilter, visibleNamespaces);
          }
          if (needNamespaceDefine(node, isHTML, visibleNamespaces)) {
            var prefix = node.prefix || "";
            var uri = node.namespaceURI;
            var ns = prefix ? " xmlns:" + prefix : " xmlns";
            buf.push(ns, '="', uri, '"');
            visibleNamespaces.push({ prefix, namespace: uri });
          }
          if (child || isHTML && !/^(?:meta|link|img|br|hr|input)$/i.test(nodeName)) {
            buf.push(">");
            if (isHTML && /^script$/i.test(nodeName)) {
              while (child) {
                if (child.data) {
                  buf.push(child.data);
                } else {
                  serializeToString(child, buf, isHTML, nodeFilter, visibleNamespaces);
                }
                child = child.nextSibling;
              }
            } else {
              while (child) {
                serializeToString(child, buf, isHTML, nodeFilter, visibleNamespaces);
                child = child.nextSibling;
              }
            }
            buf.push("</", nodeName, ">");
          } else {
            buf.push("/>");
          }
          return;
        case DOCUMENT_NODE:
        case DOCUMENT_FRAGMENT_NODE:
          var child = node.firstChild;
          while (child) {
            serializeToString(child, buf, isHTML, nodeFilter, visibleNamespaces);
            child = child.nextSibling;
          }
          return;
        case ATTRIBUTE_NODE:
          return buf.push(" ", node.name, '="', node.value.replace(/[<&"]/g, _xmlEncoder), '"');
        case TEXT_NODE:
          return buf.push(node.data.replace(/[<&]/g, _xmlEncoder));
        case CDATA_SECTION_NODE:
          return buf.push("<![CDATA[", node.data, "]]>");
        case COMMENT_NODE:
          return buf.push("<!--", node.data, "-->");
        case DOCUMENT_TYPE_NODE:
          var pubid = node.publicId;
          var sysid = node.systemId;
          buf.push("<!DOCTYPE ", node.name);
          if (pubid) {
            buf.push(' PUBLIC "', pubid);
            if (sysid && sysid != ".") {
              buf.push('" "', sysid);
            }
            buf.push('">');
          } else if (sysid && sysid != ".") {
            buf.push(' SYSTEM "', sysid, '">');
          } else {
            var sub = node.internalSubset;
            if (sub) {
              buf.push(" [", sub, "]");
            }
            buf.push(">");
          }
          return;
        case PROCESSING_INSTRUCTION_NODE:
          return buf.push("<?", node.target, " ", node.data, "?>");
        case ENTITY_REFERENCE_NODE:
          return buf.push("&", node.nodeName, ";");
        default:
          buf.push("??", node.nodeName);
      }
    }
    function importNode(doc, node, deep) {
      var node2;
      switch (node.nodeType) {
        case ELEMENT_NODE:
          node2 = node.cloneNode(false);
          node2.ownerDocument = doc;
        case DOCUMENT_FRAGMENT_NODE:
          break;
        case ATTRIBUTE_NODE:
          deep = true;
          break;
      }
      if (!node2) {
        node2 = node.cloneNode(false);
      }
      node2.ownerDocument = doc;
      node2.parentNode = null;
      if (deep) {
        var child = node.firstChild;
        while (child) {
          node2.appendChild(importNode(doc, child, deep));
          child = child.nextSibling;
        }
      }
      return node2;
    }
    function cloneNode(doc, node, deep) {
      var node2 = new node.constructor();
      for (var n in node) {
        var v = node[n];
        if (typeof v != "object") {
          if (v != node2[n]) {
            node2[n] = v;
          }
        }
      }
      if (node.childNodes) {
        node2.childNodes = new NodeList();
      }
      node2.ownerDocument = doc;
      switch (node2.nodeType) {
        case ELEMENT_NODE:
          var attrs = node.attributes;
          var attrs2 = node2.attributes = new NamedNodeMap();
          var len = attrs.length;
          attrs2._ownerElement = node2;
          for (var i = 0; i < len; i++) {
            node2.setAttributeNode(cloneNode(doc, attrs.item(i), true));
          }
          break;
          ;
        case ATTRIBUTE_NODE:
          deep = true;
      }
      if (deep) {
        var child = node.firstChild;
        while (child) {
          node2.appendChild(cloneNode(doc, child, deep));
          child = child.nextSibling;
        }
      }
      return node2;
    }
    function __set__(object, key, value) {
      object[key] = value;
    }
    try {
      if (Object.defineProperty) {
        let getTextContent2 = function (node) {
          switch (node.nodeType) {
            case ELEMENT_NODE:
            case DOCUMENT_FRAGMENT_NODE:
              var buf = [];
              node = node.firstChild;
              while (node) {
                if (node.nodeType !== 7 && node.nodeType !== 8) {
                  buf.push(getTextContent2(node));
                }
                node = node.nextSibling;
              }
              return buf.join("");
            default:
              return node.nodeValue;
          }
        };
        getTextContent = getTextContent2;
        Object.defineProperty(LiveNodeList.prototype, "length", {
          get: function () {
            _updateLiveList(this);
            return this.$$length;
          }
        });
        Object.defineProperty(Node2.prototype, "textContent", {
          get: function () {
            return getTextContent2(this);
          },
          set: function (data) {
            switch (this.nodeType) {
              case ELEMENT_NODE:
              case DOCUMENT_FRAGMENT_NODE:
                while (this.firstChild) {
                  this.removeChild(this.firstChild);
                }
                if (data || String(data)) {
                  this.appendChild(this.ownerDocument.createTextNode(data));
                }
                break;
              default:
                this.data = data;
                this.value = data;
                this.nodeValue = data;
            }
          }
        });
        __set__ = function (object, key, value) {
          object["$$" + key] = value;
        };
      }
    } catch (e) {
    }
    var getTextContent;
    exports.DOMImplementation = DOMImplementation;
    exports.XMLSerializer = XMLSerializer;
    exports.Node = Node2;
    globalThis.XMLSerializer = XMLSerializer;
    globalThis.Node = Node2;
  }
});

// common/xmldom/dom-parser.js
var require_dom_parser = __commonJS({
  "common/xmldom/dom-parser.js"(exports) {
    function DOMParser(options) {
      this.options = options || { locator: {} };
    }
    DOMParser.prototype.parseFromString = function (source, mimeType) {
      var options = this.options;
      var sax = new XMLReader();
      var domBuilder = options.domBuilder || new DOMHandler();
      var errorHandler = options.errorHandler;
      var locator = options.locator;
      var defaultNSMap = options.xmlns || {};
      var isHTML = /\/x?html?$/.test(mimeType);
      var entityMap = isHTML ? htmlEntity.entityMap : { "lt": "<", "gt": ">", "amp": "&", "quot": '"', "apos": "'" };
      if (locator) {
        domBuilder.setDocumentLocator(locator);
      }
      sax.errorHandler = buildErrorHandler(errorHandler, domBuilder, locator);
      sax.domBuilder = options.domBuilder || domBuilder;
      if (isHTML) {
        defaultNSMap[""] = "http://www.w3.org/1999/xhtml";
      }
      defaultNSMap.xml = defaultNSMap.xml || "http://www.w3.org/XML/1998/namespace";
      if (source) {
        // console.log("尝试读取", source)
        sax.parse(source, defaultNSMap, entityMap);
      } else {
        sax.errorHandler.error("invalid doc source");
      }
      return domBuilder.doc;
    };
    function buildErrorHandler(errorImpl, domBuilder, locator) {
      if (!errorImpl) {
        if (domBuilder instanceof DOMHandler) {
          return domBuilder;
        }
        errorImpl = domBuilder;
      }
      var errorHandler = {};
      var isCallback = errorImpl instanceof Function;
      locator = locator || {};
      function build(key) {
        var fn = errorImpl[key];
        if (!fn && isCallback) {
          fn = errorImpl.length == 2 ? function (msg) {
            errorImpl(key, msg);
          } : errorImpl;
        }
        errorHandler[key] = fn && function (msg) {
          fn("[xmldom " + key + "]	" + msg + _locator(locator));
        } || function () {
        };
      }
      build("warning");
      build("error");
      build("fatalError");
      return errorHandler;
    }
    function DOMHandler() {
      this.cdata = false;
    }
    function position(locator, node) {
      node.lineNumber = locator.lineNumber;
      node.columnNumber = locator.columnNumber;
    }
    DOMHandler.prototype = {
      startDocument: function () {
        this.doc = new DOMImplementation().createDocument(null, null, null);
        if (this.locator) {
          this.doc.documentURI = this.locator.systemId;
        }
      },
      startElement: function (namespaceURI, localName, qName, attrs) {
        var doc = this.doc;
        var el = doc.createElementNS(namespaceURI, qName || localName);
        var len = attrs.length;
        appendElement(this, el);
        this.currentElement = el;
        this.locator && position(this.locator, el);
        for (var i = 0; i < len; i++) {
          var namespaceURI = attrs.getURI(i);
          var value = attrs.getValue(i);
          var qName = attrs.getQName(i);
          var attr = doc.createAttributeNS(namespaceURI, qName);
          this.locator && position(attrs.getLocator(i), attr);
          attr.value = attr.nodeValue = value;
          el.setAttributeNode(attr);
        }
      },
      endElement: function (namespaceURI, localName, qName) {
        var current = this.currentElement;
        var tagName = current.tagName;
        this.currentElement = current.parentNode;
      },
      startPrefixMapping: function (prefix, uri) {
      },
      endPrefixMapping: function (prefix) {
      },
      processingInstruction: function (target, data) {
        var ins = this.doc.createProcessingInstruction(target, data);
        this.locator && position(this.locator, ins);
        appendElement(this, ins);
      },
      ignorableWhitespace: function (ch, start, length) {
      },
      characters: function (chars, start, length) {
        chars = _toString.apply(this, arguments);
        if (chars) {
          if (this.cdata) {
            var charNode = this.doc.createCDATASection(chars);
          } else {
            var charNode = this.doc.createTextNode(chars);
          }
          if (this.currentElement) {
            this.currentElement.appendChild(charNode);
          } else if (/^\s*$/.test(chars)) {
            this.doc.appendChild(charNode);
          }
          this.locator && position(this.locator, charNode);
        }
      },
      skippedEntity: function (name) {
      },
      endDocument: function () {
        this.doc.normalize();
      },
      setDocumentLocator: function (locator) {
        if (this.locator = locator) {
          locator.lineNumber = 0;
        }
      },
      //LexicalHandler
      comment: function (chars, start, length) {
        chars = _toString.apply(this, arguments);
        var comm = this.doc.createComment(chars);
        this.locator && position(this.locator, comm);
        appendElement(this, comm);
      },
      startCDATA: function () {
        this.cdata = true;
      },
      endCDATA: function () {
        this.cdata = false;
      },
      startDTD: function (name, publicId, systemId) {
        var impl = this.doc.implementation;
        if (impl && impl.createDocumentType) {
          var dt = impl.createDocumentType(name, publicId, systemId);
          this.locator && position(this.locator, dt);
          appendElement(this, dt);
        }
      },
      /**
       * @see org.xml.sax.ErrorHandler
       * @link http://www.saxproject.org/apidoc/org/xml/sax/ErrorHandler.html
       */
      warning: function (error) {
        console.warn("[xmldom warning]	" + error, _locator(this.locator));
      },
      error: function (error) {
        console.error("[xmldom error]	" + error, _locator(this.locator));
      },
      fatalError: function (error) {
        console.error("[xmldom fatalError]	" + error, _locator(this.locator));
        throw error;
      }
    };
    function _locator(l) {
      if (l) {
        return "\n@" + (l.systemId || "") + "#[line:" + l.lineNumber + ",col:" + l.columnNumber + "]";
      }
    }
    function _toString(chars, start, length) {
      if (typeof chars == "string") {
        return chars.substr(start, length);
      } else {
        if (chars.length >= start + length || start) {
          return new java.lang.String(chars, start, length) + "";
        }
        return chars;
      }
    }
    "endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl".replace(/\w+/g, function (key) {
      DOMHandler.prototype[key] = function () {
        return null;
      };
    });
    function appendElement(hander, node) {
      if (!hander.currentElement) {
        hander.doc.appendChild(node);
      } else {
        hander.currentElement.appendChild(node);
      }
    }
    var htmlEntity = require_entities();
    var XMLReader = require_sax().XMLReader;
    var DOMImplementation = exports.DOMImplementation = require_dom().DOMImplementation;
    exports.XMLSerializer = require_dom().XMLSerializer;
    exports.DOMParser = DOMParser;
  }
});

// platforms/bytedance/wrapper/builtin/window.js
var window_exports = {};
__export(window_exports, {
  Audio: () => Audio,
  FileReader: () => FileReader,
  HTMLAudioElement: () => HTMLAudioElement,
  HTMLCanvasElement: () => HTMLCanvasElement_default,
  HTMLElement: () => HTMLElement,
  HTMLImageElement: () => HTMLImageElement_default,
  HTMLMediaElement: () => HTMLMediaElement,
  HTMLVideoElement: () => HTMLVideoElement,
  Image: () => Image_default,
  // ImageBitmap: () => ImageBitmap,
  MouseEvent: () => MouseEvent,
  TouchEvent: () => TouchEvent,
  WebGLRenderingContext: () => WebGLRenderingContext,
  WebSocket: () => WebSocket,
  XMLHttpRequest: () => XMLHttpRequest,
  cancelAnimationFrame: () => cancelAnimationFrame,
  canvas: () => canvas2,
  clearInterval: () => clearInterval,
  clearTimeout: () => clearTimeout,
  devicePixelRatio: () => devicePixelRatio,
  innerHeight: () => innerHeight,
  innerWidth: () => innerWidth,
  localStorage: () => localStorage_default,
  location: () => location_default,
  navigator: () => navigator_default,
  ontouchend: () => ontouchend,
  ontouchmove: () => ontouchmove,
  ontouchstart: () => ontouchstart,
  performance: () => performance,
  requestAnimationFrame: () => requestAnimationFrame,
  screen: () => screen,
  setInterval: () => setInterval,
  setTimeout: () => setTimeout
});

// platforms/bytedance/wrapper/builtin/WindowProperties.js
var { screenWidth, screenHeight, devicePixelRatio } = tt.getSystemInfoSync();
var innerWidth = screenWidth;
var innerHeight = screenHeight;
var screen = {
  width: screenWidth,
  height: screenHeight,
  availWidth: innerWidth,
  availHeight: innerHeight,
  availLeft: 0,
  availTop: 0
};
var performance = {
  now: Date.now
};
var ontouchstart = null;
var ontouchmove = null;
var ontouchend = null;

// platforms/bytedance/wrapper/builtin/Canvas.js
function Canvas() {
  const canvas3 = tt.createCanvas();
  canvas3.type = "canvas";
  const _getContext = canvas3.getContext;
  canvas3.getBoundingClientRect = () => {
    const ret = {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
    return ret;
  };
  canvas3.style = {
    top: "0px",
    left: "0px",
    width: innerWidth + "px",
    height: innerHeight + "px"
  };
  canvas3.addEventListener = function (type, listener, options = {}) {
    document.addEventListener(type, listener, options);
  };
  canvas3.removeEventListener = function (type, listener) {
    document.removeEventListener(type, listener);
  };
  canvas3.dispatchEvent = function (event = {}) {
    console.log("canvas.dispatchEvent", event.type, event);
  };
  Object.defineProperty(canvas3, "clientWidth", {
    enumerable: true,
    get: function get() {
      return innerWidth;
    }
  });
  Object.defineProperty(canvas3, "clientHeight", {
    enumerable: true,
    get: function get() {
      return innerHeight;
    }
  });
  return canvas3;
}

// platforms/bytedance/wrapper/builtin/util/index.js
function noop() {
}

// platforms/bytedance/wrapper/builtin/navigator.js
var systemInfo = tt.getSystemInfoSync();
console.log(systemInfo);
var system = systemInfo.system;
var platform = systemInfo.platform;
var language = systemInfo.language;
var version = systemInfo.version;
var android = system.toLowerCase().indexOf("android") !== -1;
var uaDesc = android ? `Android; CPU ${system}` : `iPhone; CPU iPhone OS ${system} like Mac OS X`;
var ua = `Mozilla/5.0 (${uaDesc}) AppleWebKit/603.1.30 (KHTML, like Gecko) Mobile/14E8301 MicroMessenger/${version} MiniGame NetType/WIFI Language/${language}`;
var navigator = {
  platform,
  language,
  appVersion: `5.0 (${uaDesc}) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1`,
  userAgent: ua,
  onLine: true,
  // TODO 用 tt.getNetworkStateChange 和 tt.onNetworkStateChange 来返回真实的状态
  // TODO 用 tt.getLocation 来封装 geolocation
  geolocation: {
    getCurrentPosition: noop,
    watchPosition: noop,
    clearWatch: noop
  }
};
if (tt.onNetworkStatusChange) {
  tt.onNetworkStatusChange(function (event) {
    navigator.onLine = event.isConnected;
  });
}
var navigator_default = navigator;

// platforms/bytedance/wrapper/builtin/EventTarget.js
var _events = /* @__PURE__ */ new WeakMap();
var EventTarget = class {
  constructor() {
    _events.set(this, {});
  }
  addEventListener(type, listener, options = {}) {
    let events2 = _events.get(this);
    if (!events2) {
      events2 = {};
      _events.set(this, events2);
    }
    if (!events2[type]) {
      events2[type] = [];
    }
    events2[type].push(listener);
    if (options.capture) {
    }
    if (options.once) {
    }
    if (options.passive) {
    }
  }
  removeEventListener(type, listener) {
    const events2 = _events.get(this);
    if (events2) {
      const listeners = events2[type];
      if (listeners && listeners.length > 0) {
        for (let i = listeners.length; i--; i > 0) {
          if (listeners[i] === listener) {
            listeners.splice(i, 1);
            break;
          }
        }
      }
    }
  }
  dispatchEvent(event = {}) {
    const listeners = _events.get(this)[event.type];
    if (listeners) {
      for (let i = 0; i < listeners.length; i++) {
        listeners[i](event);
      }
    }
  }
};

// platforms/bytedance/wrapper/builtin/XMLHttpRequest.js
var _url = /* @__PURE__ */ new WeakMap();
var _method = /* @__PURE__ */ new WeakMap();
var _requestHeader = /* @__PURE__ */ new WeakMap();
var _responseHeader = /* @__PURE__ */ new WeakMap();
var _requestTask = /* @__PURE__ */ new WeakMap();
function _triggerEvent(type, ...args) {
  if (typeof this[`on${type}`] === "function") {
    this[`on${type}`].apply(this, args);
  }
}
function _changeReadyState(readyState) {
  this.readyState = readyState;
  _triggerEvent.call(this, "readystatechange");
}
function _isRelativePath(url) {
  return !/^(http|https|ftp|wxfile):\/\/.*/i.test(url);
}
var _XMLHttpRequest = class extends EventTarget {
  /*
   * TODO 这一批事件应该是在 XMLHttpRequestEventTarget.prototype 上面的
   */
  onabort = null;
  onerror = null;
  onload = null;
  onloadstart = null;
  onprogress = null;
  ontimeout = null;
  onloadend = null;
  onreadystatechange = null;
  readyState = 0;
  response = null;
  responseText = null;
  responseType = "arraybuffer";
  responseXML = null;
  status = 0;
  statusText = "";
  upload = {};
  withCredentials = false;
  constructor() {
    super();
    _requestHeader.set(this, {
      "content-type": "application/x-www-form-urlencoded"
    });
    _responseHeader.set(this, {});
  }
  abort() {
    const myRequestTask = _requestTask.get(this);
    if (myRequestTask) {
      myRequestTask.abort();
    }
  }
  getAllResponseHeaders() {
    const responseHeader = _responseHeader.get(this);
    return Object.keys(responseHeader).map((header) => {
      return `${header}: ${responseHeader[header]}`;
    }).join("\n");
  }
  getResponseHeader(header) {
    return _responseHeader.get(this)[header];
  }
  open(method, url) {
    _method.set(this, method);
    _url.set(this, url);
    _changeReadyState.call(this, _XMLHttpRequest.OPENED);
  }
  overrideMimeType() {
  }
  send(data = "") {
    if (this.readyState !== _XMLHttpRequest.OPENED) {
      throw new Error("Failed to execute 'send' on 'XMLHttpRequest': The object's state must be OPENED.");
    } else {
      const onSuccess = ({ data: data2, statusCode, header }) => {
        this.status = statusCode;
        _responseHeader.set(this, header);
        _triggerEvent.call(this, "loadstart");
        _changeReadyState.call(this, _XMLHttpRequest.HEADERS_RECEIVED);
        _changeReadyState.call(this, _XMLHttpRequest.LOADING);
        switch (this.responseType) {
          case "json":
            this.responseText = data2;
            try {
              this.response = JSON.parse(data2);
            } catch (e) {
              this.response = null;
            }
            break;
          case "":
          case "text":
            this.responseText = this.response = data2;
            break;
          case "arraybuffer":
            this.response = data2;
            this.responseText = "";
            var bytes = new Uint8Array(data2);
            var len = bytes.byteLength;
            for (var i = 0; i < len; i++) {
              this.responseText += String.fromCharCode(bytes[i]);
            }
            break;
          default:
            this.response = null;
        }
        _changeReadyState.call(this, _XMLHttpRequest.DONE);
        _triggerEvent.call(this, "load");
        _triggerEvent.call(this, "loadend");
      };
      const onFail = ({ errMsg }) => {
        if (errMsg.indexOf("abort") !== -1) {
          _triggerEvent.call(this, "abort");
        } else if (errMsg.indexOf("timeout") !== -1) {
          _triggerEvent.call(this, "timeout");
        } else {
          _triggerEvent.call(this, "error", errMsg);
        }
        _triggerEvent.call(this, "loadend");
      };
      const url = _url.get(this);
      if (_isRelativePath(url)) {
        let readFn = this.responseType === "arraybuffer" ? fsUtils.readArrayBuffer : fsUtils.readText;
        return readFn(url, (err, data2) => {
          if (!err) {
            // 真机上是 arraybuffer 模拟器是 Uint8Array
            onSuccess({ data: data2.buffer ? data2.buffer : data2, statusCode: 200, header: {} });
          } else {
            onFail({ errMsg: err.message });
          }
        });
      }
      let myRequestTask = tt.request({
        data,
        url,
        method: _method.get(this),
        header: _requestHeader.get(this),
        dataType: "other",
        responseType: this.responseType === "arraybuffer" ? "arraybuffer" : "text",
        success: onSuccess,
        fail: onFail
      });
      _requestTask.set(this, myRequestTask);
    }
  }
  setRequestHeader(header, value) {
    const myHeader = _requestHeader.get(this);
    myHeader[header] = value;
    _requestHeader.set(this, myHeader);
  }
  addEventListener(type, listener) {
    if (typeof listener === "function") {
      let _this = this;
      let event = { target: _this };
      this["on" + type] = function (event2) {
        listener.call(_this, event2);
      };
    }
  }
};
var XMLHttpRequest = _XMLHttpRequest;
// TODO 没法模拟 HEADERS_RECEIVED 和 LOADING 两个状态
__publicField(XMLHttpRequest, "UNSEND", 0);
__publicField(XMLHttpRequest, "OPENED", 1);
__publicField(XMLHttpRequest, "HEADERS_RECEIVED", 2);
__publicField(XMLHttpRequest, "LOADING", 3);
__publicField(XMLHttpRequest, "DONE", 4);

// platforms/bytedance/wrapper/builtin/WebSocket.js
var _socketTask = /* @__PURE__ */ new WeakMap();
var _WebSocket = class {
  // The connection is closed or couldn't be opened.
  binaryType = "";
  // TODO 更新 binaryType
  bufferedAmount = 0;
  // TODO 更新 bufferedAmount
  extensions = "";
  onclose = null;
  onerror = null;
  onmessage = null;
  onopen = null;
  protocol = "";
  // TODO 小程序内目前获取不到，实际上需要根据服务器选择的 sub-protocol 返回
  readyState = 3;
  constructor(url, protocols = []) {
    if (typeof url !== "string" || !/(^ws:\/\/)|(^wss:\/\/)/.test(url)) {
      throw new TypeError(`Failed to construct 'WebSocket': The URL '${url}' is invalid`);
    }
    this.url = url;
    this.readyState = _WebSocket.CONNECTING;
    const socketTask = tt.connectSocket({
      url,
      protocols: Array.isArray(protocols) ? protocols : [protocols],
      tcpNoDelay: true
    });
    _socketTask.set(this, socketTask);
    socketTask.onClose((res) => {
      this.readyState = _WebSocket.CLOSED;
      if (typeof this.onclose === "function") {
        this.onclose(res);
      }
    });
    socketTask.onMessage((res) => {
      if (typeof this.onmessage === "function") {
        this.onmessage(res);
      }
    });
    socketTask.onOpen(() => {
      this.readyState = _WebSocket.OPEN;
      if (typeof this.onopen === "function") {
        this.onopen();
      }
    });
    socketTask.onError((res) => {
      if (typeof this.onerror === "function") {
        this.onerror(new Error(res.errMsg));
      }
    });
    return this;
  }
  close(code, reason) {
    this.readyState = _WebSocket.CLOSING;
    const socketTask = _socketTask.get(this);
    socketTask.close({
      code,
      reason
    });
  }
  send(data) {
    if (typeof data !== "string" && !(data instanceof ArrayBuffer) && !ArrayBuffer.isView(data)) {
      throw new TypeError(`Failed to send message: The data ${data} is invalid`);
    }
    const socketTask = _socketTask.get(this);
    socketTask.send({
      data
    });
  }
};
var WebSocket = _WebSocket;
__publicField(WebSocket, "CONNECTING", 0);
// The connection is not yet open.
__publicField(WebSocket, "OPEN", 1);
// The connection is open and ready to communicate.
__publicField(WebSocket, "CLOSING", 2);
// The connection is in the process of closing.
__publicField(WebSocket, "CLOSED", 3);

// platforms/bytedance/wrapper/builtin/Node.js
var Node = class extends EventTarget {
  constructor() {
    super();
  }
  childNodes = [];
  appendChild(node) {
    this.childNodes.push(node);
  }
  cloneNode() {
    const copyNode = Object.create(this);
    Object.assign(copyNode, this);
    return copyNode;
  }
  removeChild(node) {
    const index = this.childNodes.findIndex((child) => child === node);
    if (index > -1) {
      return this.childNodes.splice(index, 1);
    }
    return null;
  }
};

// platforms/bytedance/wrapper/builtin/Element.js
var Element = class extends Node {
  className = "";
  children = [];
  constructor() {
    super();
  }
};

// platforms/bytedance/wrapper/builtin/HTMLElement.js
var HTMLElement = class extends Element {
  className = "";
  childern = [];
  style = {
    width: `${innerWidth}px`,
    height: `${innerHeight}px`
  };
  insertBefore = noop;
  innerHTML = "";
  constructor(tagName = "") {
    super();
    this.tagName = tagName.toUpperCase();
  }
  setAttribute(name, value) {
    this[name] = value;
  }
  getAttribute(name) {
    return this[name];
  }
  get clientWidth() {
    const ret = parseInt(this.style.fontSize, 10) * this.innerHTML.length;
    return Number.isNaN(ret) ? 0 : ret;
  }
  get clientHeight() {
    const ret = parseInt(this.style.fontSize, 10);
    return Number.isNaN(ret) ? 0 : ret;
  }
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: innerWidth,
      height: innerHeight
    };
  }
  focus() {
  }
};

// platforms/bytedance/wrapper/builtin/HTMLImageElement.js
var imageConstructor = tt.createImage().constructor;
var HTMLImageElement_default = imageConstructor;

// platforms/bytedance/wrapper/builtin/Image.js
function Image_default() {
  const image = tt.createImage();
  return image;
}

// platforms/bytedance/wrapper/builtin/ImageBitmap.js
// var ImageBitmap = class {
//   tag = "ImageBitmap"
//   constructor() {
//   }
// };

// platforms/bytedance/wrapper/builtin/HTMLMediaElement.js
var HTMLMediaElement = class extends HTMLElement {
  constructor(type) {
    super(type);
  }
  addTextTrack() {
  }
  captureStream() {
  }
  fastSeek() {
  }
  load() {
  }
  pause() {
  }
  play() {
  }
};

// platforms/bytedance/wrapper/builtin/HTMLAudioElement.js
var HTMLAudioElement = class extends HTMLMediaElement {
  constructor() {
    super("audio");
  }
};

// platforms/bytedance/wrapper/builtin/Audio.js
var HAVE_NOTHING = 0;
var HAVE_METADATA = 1;
var HAVE_CURRENT_DATA = 2;
var HAVE_FUTURE_DATA = 3;
var HAVE_ENOUGH_DATA = 4;
var SN_SEED = 1;
var _innerAudioContextMap = {};
var Audio = class extends HTMLAudioElement {
  constructor(url) {
    super();
    this._$sn = SN_SEED++;
    this.HAVE_NOTHING = HAVE_NOTHING;
    this.HAVE_METADATA = HAVE_METADATA;
    this.HAVE_CURRENT_DATA = HAVE_CURRENT_DATA;
    this.HAVE_FUTURE_DATA = HAVE_FUTURE_DATA;
    this.HAVE_ENOUGH_DATA = HAVE_ENOUGH_DATA;
    this.readyState = HAVE_NOTHING;
    const innerAudioContext = tt.createInnerAudioContext();
    _innerAudioContextMap[this._$sn] = innerAudioContext;
    this._canplayEvents = [
      "load",
      "loadend",
      "canplay",
      "canplaythrough",
      "loadedmetadata"
    ];
    innerAudioContext.onCanplay(() => {
      this._loaded = true;
      this.readyState = this.HAVE_CURRENT_DATA;
      this._canplayEvents.forEach((type) => {
        this.dispatchEvent({ type });
      });
    });
    innerAudioContext.onPlay(() => {
      this._paused = _innerAudioContextMap[this._$sn].paused;
      this.dispatchEvent({ type: "play" });
    });
    innerAudioContext.onPause(() => {
      this._paused = _innerAudioContextMap[this._$sn].paused;
      this.dispatchEvent({ type: "pause" });
    });
    innerAudioContext.onEnded(() => {
      this._paused = _innerAudioContextMap[this._$sn].paused;
      if (_innerAudioContextMap[this._$sn].loop === false) {
        this.dispatchEvent({ type: "ended" });
      }
      this.readyState = HAVE_ENOUGH_DATA;
    });
    innerAudioContext.onError(() => {
      this._paused = _innerAudioContextMap[this._$sn].paused;
      this.dispatchEvent({ type: "error" });
    });
    if (url) {
      this.src = url;
    } else {
      this._src = "";
    }
    this._loop = innerAudioContext.loop;
    this._autoplay = innerAudioContext.autoplay;
    this._paused = innerAudioContext.paused;
    this._volume = innerAudioContext.volume;
    this._muted = false;
  }
  addEventListener(type, listener, options = {}) {
    super.addEventListener(type, listener, options);
    type = String(type).toLowerCase();
    if (this._loaded && this._canplayEvents.indexOf(type) !== -1) {
      this.dispatchEvent({ type });
    }
  }
  load() {
  }
  play() {
    _innerAudioContextMap[this._$sn].play();
  }
  resume() {
    _innerAudioContextMap[this._$sn].resume();
  }
  pause() {
    _innerAudioContextMap[this._$sn].pause();
  }
  stop() {
    _innerAudioContextMap[this._$sn].stop();
  }
  destroy() {
    _innerAudioContextMap[this._$sn].destroy();
  }
  canPlayType(mediaType = "") {
    if (typeof mediaType !== "string") {
      return "";
    }
    if (mediaType.indexOf("audio/mpeg") > -1 || mediaType.indexOf("audio/mp4")) {
      return "probably";
    }
    return "";
  }
  get currentTime() {
    return _innerAudioContextMap[this._$sn].currentTime;
  }
  set currentTime(value) {
    _innerAudioContextMap[this._$sn].seek(value);
  }
  get duration() {
    return _innerAudioContextMap[this._$sn].duration;
  }
  get src() {
    return this._src;
  }
  set src(value) {
    this._src = value;
    this._loaded = false;
    this.readyState = this.HAVE_NOTHING;
    const innerAudioContext = _innerAudioContextMap[this._$sn];
    innerAudioContext.src = value;
  }
  get loop() {
    return this._loop;
  }
  set loop(value) {
    this._loop = value;
    _innerAudioContextMap[this._$sn].loop = value;
  }
  get autoplay() {
    return this.autoplay;
  }
  set autoplay(value) {
    this._autoplay = value;
    _innerAudioContextMap[this._$sn].autoplay = value;
  }
  get paused() {
    return this._paused;
  }
  get volume() {
    return this._volume;
  }
  set volume(value) {
    this._volume = value;
    if (!this._muted) {
      _innerAudioContextMap[this._$sn].volume = value;
    }
  }
  get muted() {
    return this._muted;
  }
  set muted(value) {
    this._muted = value;
    if (value) {
      _innerAudioContextMap[this._$sn].volume = 0;
    } else {
      _innerAudioContextMap[this._$sn].volume = this._volume;
    }
  }
  cloneNode() {
    const newAudio = new Audio();
    newAudio.loop = this.loop;
    newAudio.autoplay = this.autoplay;
    newAudio.src = this.src;
    return newAudio;
  }
};

// platforms/bytedance/wrapper/builtin/FileReader.js
var FileReader = class {
  construct() {
  }
};

// platforms/bytedance/wrapper/builtin/HTMLCanvasElement.js
GameGlobal.screencanvas = GameGlobal.screencanvas || new Canvas();
var canvas = GameGlobal.screencanvas;
var canvasConstructor = canvas.constructor;
var HTMLCanvasElement_default = canvasConstructor;

// platforms/bytedance/wrapper/builtin/HTMLVideoElement.js
var HTMLVideoElement = class extends HTMLMediaElement {
  constructor() {
    super("video");
  }
};

// platforms/bytedance/wrapper/builtin/WebGLRenderingContext.js
var WebGLRenderingContext = class {
  constructor() {
  }
};

// platforms/bytedance/wrapper/builtin/EventIniter/TouchEvent.js
var TouchEvent = class {
  touches = [];
  targetTouches = [];
  changedTouches = [];
  preventDefault = noop;
  stopPropagation = noop;
  constructor(type) {
    this.type = type;
    this.target = window.canvas;
    this.currentTarget = window.canvas;
  }
};
function touchEventHandlerFactory(type) {
  return (event) => {
    const touchEvent = new TouchEvent(type);
    touchEvent.touches = event.touches;
    touchEvent.targetTouches = Array.prototype.slice.call(event.touches);
    touchEvent.changedTouches = event.changedTouches;
    touchEvent.timeStamp = event.timeStamp;
    document.dispatchEvent(touchEvent);
  };
}
tt.onTouchStart(touchEventHandlerFactory("touchstart"));
tt.onTouchMove(touchEventHandlerFactory("touchmove"));
tt.onTouchEnd(touchEventHandlerFactory("touchend"));
tt.onTouchCancel(touchEventHandlerFactory("touchcancel"));

// platforms/bytedance/wrapper/builtin/EventIniter/MouseEvent.js
var MouseEvent = class {
  constructor() {
  }
};

// platforms/bytedance/wrapper/builtin/localStorage.js
var localStorage = {
  get length() {
    const { keys } = tt.getStorageInfoSync();
    return keys.length;
  },
  key(n) {
    const { keys } = tt.getStorageInfoSync();
    return keys[n];
  },
  getItem(key) {
    return tt.getStorageSync(key);
  },
  setItem(key, value) {
    return tt.setStorageSync(key, value);
  },
  removeItem(key) {
    tt.removeStorageSync(key);
  },
  clear() {
    tt.clearStorageSync();
  }
};
var localStorage_default = localStorage;

// platforms/bytedance/wrapper/builtin/location.js
var location = {
  href: "game.js",
  reload() {
  }
};
var location_default = location;

// platforms/bytedance/wrapper/builtin/window.js
GameGlobal.screencanvas = GameGlobal.screencanvas || new Canvas();
var canvas2 = GameGlobal.screencanvas;
var {
  setTimeout,
  setInterval,
  clearTimeout,
  clearInterval,
  requestAnimationFrame,
  cancelAnimationFrame
} = GameGlobal;

// platforms/bytedance/wrapper/builtin/document.js
var events = {};
var document2 = {
  readyState: "complete",
  visibilityState: "visible",
  documentElement: window_exports,
  hidden: false,
  style: {},
  location: location_default,
  ontouchstart: null,
  ontouchmove: null,
  ontouchend: null,
  head: new HTMLElement("head"),
  body: new HTMLElement("body"),
  createElement(tagName) {
    if (tagName === "canvas") {
      return new Canvas();
    } else if (tagName === "audio") {
      return new Audio();
    } else if (tagName === "img") {
      return new Image_default();
    } else if (tagName === "video") {
      return new HTMLVideoElement();
    }
    return new HTMLElement(tagName);
  },
  createElementNS(nameSpace, tagName) {
    return this.createElement(tagName);
  },
  getElementById(id) {
    if (id === canvas2.id) {
      return canvas2;
    }
    return null;
  },
  getElementsByTagName(tagName) {
    if (tagName === "head") {
      return [document2.head];
    } else if (tagName === "body") {
      return [document2.body];
    } else if (tagName === "canvas") {
      return [canvas2];
    }
    return [];
  },
  getElementsByName(tagName) {
    if (tagName === "head") {
      return [document2.head];
    } else if (tagName === "body") {
      return [document2.body];
    } else if (tagName === "canvas") {
      return [canvas2];
    }
    return [];
  },
  querySelector(query) {
    if (query === "head") {
      return document2.head;
    } else if (query === "body") {
      return document2.body;
    } else if (query === "canvas") {
      return canvas2;
    } else if (query === `#${canvas2.id}`) {
      return canvas2;
    }
    return null;
  },
  querySelectorAll(query) {
    if (query === "head") {
      return [document2.head];
    } else if (query === "body") {
      return [document2.body];
    } else if (query === "canvas") {
      return [canvas2];
    }
    return [];
  },
  addEventListener(type, listener) {
    if (!events[type]) {
      events[type] = [];
    }
    events[type].push(listener);
  },
  removeEventListener(type, listener) {
    const listeners = events[type];
    if (listeners && listeners.length > 0) {
      for (let i = listeners.length; i--; i > 0) {
        if (listeners[i] === listener) {
          listeners.splice(i, 1);
          break;
        }
      }
    }
  },
  dispatchEvent(event) {
    const listeners = events[event.type];
    if (listeners) {
      for (let i = 0; i < listeners.length; i++) {
        listeners[i](event);
      }
    }
  }
};
var document_default = document2;

// platforms/bytedance/wrapper/builtin/index.js
var global = GameGlobal;
var _window = window_exports;
function inject() {
  _window.document = document_default;
  _window.addEventListener = (type, listener) => {
    _window.document.addEventListener(type, listener);
  };
  _window.removeEventListener = (type, listener) => {
    _window.document.removeEventListener(type, listener);
  };
  _window.dispatchEvent = _window.document.dispatchEvent;
  const { platform: platform2 } = tt.getSystemInfoSync();
  if (typeof __devtoolssubcontext === "undefined" && platform2 === "devtools") {
    for (const key in _window) {
      const descriptor = Object.getOwnPropertyDescriptor(global, key);
      if (!descriptor || descriptor.configurable === true) {
        Object.defineProperty(window, key, {
          value: _window[key]
        });
      }
    }
    for (const key in _window.document) {
      const descriptor = Object.getOwnPropertyDescriptor(global.document, key);
      if (!descriptor || descriptor.configurable === true) {
        Object.defineProperty(global.document, key, {
          value: _window.document[key]
        });
      }
    }
    window.parent = window;
  } else {
    for (const key in _window) {
      global[key] = _window[key];
    }
    global.window = _window;
    window = global;
    window.top = window.parent = window;
  }
}
if (!GameGlobal.__isAdapterInjected) {
  GameGlobal.__isAdapterInjected = true;
  inject();
}

// platforms/bytedance/wrapper/bundle.js
var import_fs_utils = __toESM(require_fs_utils());
var _global = GameGlobal;
_global.DOMParser = require_dom_parser().DOMParser;


// const PIXI_TT_Adapter = {
//   createCanvas: (width, height) => {
//     const canvas = tt.createCanvas();
//     canvas.width = width;
//     canvas.height = height;
//     return canvas;
//   },
//   getCanvasRenderingContext2D: () => CanvasRenderingContext2D,
//   getWebGLRenderingContext: () => WebGLRenderingContext,
//   getNavigator: () => navigator,
//   getBaseUrl: () => document.baseURI || window.location.href,
//   getFontFaceSet: () => document.fonts,
//   fetch: (url, options) => fetch(url, options),
//   parseXML: (xml) => {
//     const parser = new DOMParser();
//     return parser.parseFromString(xml, "text/xml");
//   }
// }