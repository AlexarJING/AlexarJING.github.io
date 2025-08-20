/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "fairygui-dom";

export default class UI_listItem extends fgui.GComponent {

	public m_title:fgui.GTextField;
	public m_icon:fgui.GLoader;
	public m_gold:fgui.GTextField;
	public static URL:string = "ui://n6kxwmfedik82";

	public static createInstance():UI_listItem {
		return <UI_listItem>(fgui.UIPackage.createObject("Package1", "listItem"));
	}

	protected onConstruct():void {
		this.m_title = <fgui.GTextField>(this.getChildAt(0));
		this.m_icon = <fgui.GLoader>(this.getChildAt(2));
		this.m_gold = <fgui.GTextField>(this.getChildAt(3));
	}
}