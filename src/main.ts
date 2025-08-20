import * as fgui from "fairygui-dom";
import Package1Binder from "./Package1/Package1Binder";
import UIMain from "./UIMain";
type UIExtension = {
    new(): fgui.GComponent;
    URL: string;
};

async function start() {
    await fgui.UIPackage.loadPackage("fgui/ui_pack/Package1");
    Package1Binder.bindAll()
    fgui.UIObjectFactory.setExtension(UIMain.URL, UIMain);
    let view = fgui.UIPackage.createObject("Package1", "Main");
    view.makeFullScreen();
    fgui.GRoot.inst.addChild(view);
}

start();

console.log("开始？？")