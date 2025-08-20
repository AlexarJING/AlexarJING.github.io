import * as fgui from "fairygui-dom";

async function start() {
    await fgui.UIPackage.loadPackage("fgui/ui_pack/Package1");

    let view = fgui.UIPackage.createObject("Package1", "Main");
    view.makeFullScreen();
    fgui.GRoot.inst.addChild(view);
}

start();