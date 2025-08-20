/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_listItem from "./UI_listItem";
import UI_Main from "./UI_Main";
import * as fgui from "fairygui-dom";


export default class Package1Binder {
	public static bindAll():void {
		fgui.UIObjectFactory.setExtension(UI_listItem.URL, UI_listItem);
		fgui.UIObjectFactory.setExtension(UI_Main.URL, UI_Main);
	}
}