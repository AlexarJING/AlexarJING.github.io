/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_listItem from "./UI_listItem";

import * as fgui from "fairygui-dom";

export default class UI_Main extends fgui.GComponent {

	public m_hero:UI_listItem;
	public m_try:fgui.GButton;
	public m_list:fgui.GList;
	public static URL:string = "ui://n6kxwmferz180";

	public static createInstance():UI_Main {
		return <UI_Main>(fgui.UIPackage.createObject("Package1", "Main"));
	}

	protected onConstruct():void {
		this.m_hero = <UI_listItem>(this.getChildAt(0));
		this.m_try = <fgui.GButton>(this.getChildAt(1));
		this.m_list = <fgui.GList>(this.getChildAt(2));
	}
}