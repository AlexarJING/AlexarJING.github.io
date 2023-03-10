console.log('使用抖音开发者工具开发过程中可以参考以下文档:')

require("./assets/libs/fetch.umd.js")
require("./assets/libs/adapter.js")
globalThis.TWEEN = require("./assets/libs/tween.umd.min.js")
require("./assets/libs/pixi.min.js")
require("./assets/libs/unsafe-eval.min.js")
require("./assets/libs/fgui.min.js")
// require("./assets/libs/pixi-sound.js")
// require("./assets/libs/pixi-spine.js")
require("./bundle.js")

console.log("完成")