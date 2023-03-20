window.fgui = {};
window.fairygui = window.fgui;
fgui = {};
PIXI = PIXI || globalThis.PIXI; var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

(function (fgui) {
    let win = window;
    let hasPointer = !!(win.PointerEvent || win.MSPointerEvent);
    let hasTouch = 'ontouchstart' in window && PIXI.utils.isMobile.any;
    class InteractiveEvents {
    }
    InteractiveEvents.Down = hasPointer ? "pointerdown" : hasTouch ? "touchstart" : "mousedown";
    InteractiveEvents.Cancel = hasPointer ? "pointercancel" : hasTouch ? "touchcancel" : "mousecancel";
    InteractiveEvents.Up = hasPointer ? "pointerup" : hasTouch ? "touchend" : "mouseup";
    InteractiveEvents.Click = hasPointer ? "pointertap" : hasTouch ? "tap" : "click";
    InteractiveEvents.UpOutside = hasPointer ? "pointerupoutside" : hasTouch ? "touchendoutside" : "mouseupoutside";
    InteractiveEvents.Move = hasPointer ? "pointermove" : hasTouch ? "touchmove" : "mousemove";
    InteractiveEvents.Over = hasPointer ? "pointerover" : hasTouch ? null : "mouseover";
    InteractiveEvents.Out = hasPointer ? "pointerout" : hasTouch ? null : "mouseout";
    InteractiveEvents.RightDown = "rightdown";
    InteractiveEvents.RightUp = "rightup";
    InteractiveEvents.RightClick = "rightclick";
    InteractiveEvents.RightUpOutside = "rightupoutside";
    fgui.InteractiveEvents = InteractiveEvents;
    ;
    fgui.GearXMLNodeNameMap = {
        "gearDisplay": 0,
        "gearXY": 1,
        "gearSize": 2,
        "gearLook": 3,
        "gearColor": 4,
        "gearAni": 5,
        "gearText": 6,
        "gearIcon": 7
    };
    fgui.BlendModeMap = [
        "Normal",
        "Add",
        "Multiply",
        "Screen",
        "Overlay",
        "Darken",
        "Lighten",
        "ColorDodge",
        "ColorBurn",
        "HardLight",
        "SoftLight",
        "Difference",
        "Exclusion",
        "Hue",
        "Saturation",
        "Color",
        "Luminosity",
        "NormalNPM",
        "AddNPM",
        "ScreenNPM"
    ];
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    function ParseOverflowType(value) {
        switch (value) {
            case "visible":
                return 0;
            case "hidden":
                return 1;
            case "scroll":
                return 2;
            case "scale":
                return 3;
            case "scaleFree":
                return 4;
            default:
                return 0;
        }
    }
    fgui.ParseOverflowType = ParseOverflowType;
    function ParseScrollType(value) {
        switch (value) {
            case "horizontal":
                return 0;
            case "vertical":
                return 1;
            case "both":
                return 2;
            default:
                return 1;
        }
    }
    fgui.ParseScrollType = ParseScrollType;
    function ParseLoaderFillType(value) {
        switch (value) {
            case "none":
                return 0;
            case "scale":
                return 1;
            case "scaleMatchHeight":
                return 2;
            case "scaleMatchWidth":
                return 3;
            case "scaleFree":
                return 4;
            case "scaleNoBorder":
                return 5;
            default:
                return 0;
        }
    }
    fgui.ParseLoaderFillType = ParseLoaderFillType;
    function ParseListLayoutType(value) {
        switch (value) {
            case "column":
                return 0;
            case "row":
                return 1;
            case "flow_hz":
                return 2;
            case "flow_vt":
                return 3;
            case "pagination":
                return 4;
            default:
                return 0;
        }
    }
    fgui.ParseListLayoutType = ParseListLayoutType;
    function ParseListSelectionMode(value) {
        switch (value) {
            case "single":
                return 0;
            case "multiple":
                return 1;
            case "multipleSingleClick":
                return 2;
            case "none":
                return 3;
            default:
                return 0;
        }
    }
    fgui.ParseListSelectionMode = ParseListSelectionMode;
    function ParsePackageItemType(value) {
        switch (value) {
            case "image":
                return 0;
            case "movieclip":
                return 2;
            case "sound":
                return 3;
            case "component":
                return 4;
            case "swf":
                return 1;
            case "font":
                return 6;
            case "atlas":
                return 7;
            default:
                return 5;
        }
    }
    fgui.ParsePackageItemType = ParsePackageItemType;
    function ParseProgressTitleType(value) {
        switch (value) {
            case "percent":
                return 0;
            case "valueAndmax":
                return 1;
            case "value":
                return 2;
            case "max":
                return 3;
            default:
                return 0;
        }
    }
    fgui.ParseProgressTitleType = ParseProgressTitleType;
    function ParseScrollBarDisplayType(value) {
        switch (value) {
            case "default":
                return 0;
            case "visible":
                return 1;
            case "auto":
                return 2;
            case "hidden":
                return 3;
            default:
                return 0;
        }
    }
    fgui.ParseScrollBarDisplayType = ParseScrollBarDisplayType;
    function ParseFlipType(value) {
        switch (value) {
            case "hz":
                return 1;
            case "vt":
                return 2;
            case "both":
                return 3;
            default:
                return 0;
        }
    }
    fgui.ParseFlipType = ParseFlipType;
    function ParseButtonMode(value) {
        switch (value) {
            case "Common":
                return 0;
            case "Check":
                return 1;
            case "Radio":
                return 2;
            default:
                return 0;
        }
    }
    fgui.ParseButtonMode = ParseButtonMode;
    function ParseAutoSizeType(value) {
        switch (value) {
            case "none":
                return 0;
            case "both":
                return 1;
            case "height":
                return 2;
            case "shrink":
                return 3;
            default:
                return 0;
        }
    }
    fgui.ParseAutoSizeType = ParseAutoSizeType;
    function ParseAlignType(value) {
        switch (value) {
            case "left":
                return "left";
            case "center":
                return "center";
            case "right":
                return "right";
            default:
                return "left";
        }
    }
    fgui.ParseAlignType = ParseAlignType;
    function ParseVertAlignType(value) {
        switch (value) {
            case "top":
                return 0;
            case "middle":
                return 1;
            case "bottom":
                return 2;
            default:
                return 0;
        }
    }
    fgui.ParseVertAlignType = ParseVertAlignType;
    function ParseListChildrenRenderOrder(value) {
        switch (value) {
            case "ascent":
                return 0;
            case "descent":
                return 1;
            case "arch":
                return 2;
            default:
                return 0;
        }
    }
    fgui.ParseListChildrenRenderOrder = ParseListChildrenRenderOrder;
    let easeMap = {
        "Linear": TWEEN.Easing.Linear.None,
        "Elastic.In": TWEEN.Easing.Elastic.In,
        "Elastic.Out": TWEEN.Easing.Elastic.Out,
        "Elastic.InOut": TWEEN.Easing.Elastic.InOut,
        "Quad.In": TWEEN.Easing.Quadratic.In,
        "Quad.Out": TWEEN.Easing.Quadratic.Out,
        "Quad.InOut": TWEEN.Easing.Quadratic.InOut,
        "Cube.In": TWEEN.Easing.Cubic.In,
        "Cube.Out": TWEEN.Easing.Cubic.Out,
        "Cube.InOut": TWEEN.Easing.Cubic.InOut,
        "Quart.In": TWEEN.Easing.Quartic.In,
        "Quart.Out": TWEEN.Easing.Quartic.Out,
        "Quart.InOut": TWEEN.Easing.Quartic.InOut,
        "Quint.In": TWEEN.Easing.Quintic.In,
        "Quint.Out": TWEEN.Easing.Quintic.Out,
        "Quint.InOut": TWEEN.Easing.Quintic.InOut,
        "Sine.In": TWEEN.Easing.Sinusoidal.In,
        "Sine.Out": TWEEN.Easing.Sinusoidal.Out,
        "Sine.InOut": TWEEN.Easing.Sinusoidal.InOut,
        "Bounce.In": TWEEN.Easing.Bounce.In,
        "Bounce.Out": TWEEN.Easing.Bounce.Out,
        "Bounce.InOut": TWEEN.Easing.Bounce.InOut,
        "Circ.In": TWEEN.Easing.Circular.In,
        "Circ.Out": TWEEN.Easing.Circular.Out,
        "Circ.InOut": TWEEN.Easing.Circular.InOut,
        "Expo.In": TWEEN.Easing.Exponential.In,
        "Expo.Out": TWEEN.Easing.Exponential.Out,
        "Expo.InOut": TWEEN.Easing.Exponential.InOut,
        "Back.In": TWEEN.Easing.Back.In,
        "Back.Out": TWEEN.Easing.Back.Out,
        "Back.InOut": TWEEN.Easing.Back.InOut
    };
    function ParseEaseType(name) {
        return easeMap[name] || easeMap["Linear"];
    }
    fgui.ParseEaseType = ParseEaseType;
})(fgui || (fgui = {}));

(function (fgui) {
    class GObject {
        constructor() {
            this.$x = 0;
            this.$y = 0;
            this.$width = 0;
            this.$height = 0;
            this.$alpha = 1;
            this.$rotation = 0;
            this.$visible = true;
            this.$touchable = true;
            this.$grayed = false;
            this.$draggable = false;
            this.$scaleX = 1;
            this.$scaleY = 1;
            this.$skewX = 0;
            this.$skewY = 0;
            this.$pivot = new PIXI.Point();
            this.$pivotAsAnchor = false;
            this.$pivotOffset = new PIXI.Point();
            this.$sortingOrder = 0;
            this.$internalVisible = true;
            this.$focusable = false;
            this.$pixelSnapping = false;
            this.$handlingController = false;
            this.$lastColorComponents = null;
            this.$rawWidth = 0;
            this.$rawHeight = 0;
            this.$initWidth = 0;
            this.$initHeight = 0;
            this.$sourceWidth = 0;
            this.$sourceHeight = 0;
            this.$id = `${GObject.gInstanceCounter++}`;
            this.$name = "";
            this.createDisplayObject();
            this.$relations = new fgui.Relations(this);
            this.$gears = [];
        }
        get id() {
            return this.$id;
        }
        get name() {
            return this.$name;
        }
        set name(value) {
            this.$name = value;
        }
        get x() {
            return this.$x;
        }
        set x(value) {
            this.setXY(value, this.$y);
        }
        get y() {
            return this.$y;
        }
        set y(value) {
            this.setXY(this.$x, value);
        }
        setXY(xv, yv) {
            if (this.$x != xv || this.$y != yv) {
                this.$x = xv;
                this.$y = yv;
                this.handleXYChanged();
                this.updateGear(1);
                if (this.$parent) {
                    this.$parent.setBoundsChangedFlag();
                    this.$displayObject.emit(fgui.DisplayObjectEvent.XY_CHANGED, this);
                }
                if (GObject.draggingObject == this && !GObject.sUpdatingWhileDragging)
                    this.localToGlobalRect(0, 0, this.width, this.height, GObject.sGlobalRect);
            }
        }
        get pixelSnapping() {
            return this.$pixelSnapping;
        }
        set pixelSnapping(value) {
            if (this.$pixelSnapping != value) {
                this.$pixelSnapping = value;
                this.handleXYChanged();
            }
        }
        center(restraint = false) {
            let r;
            if (this.$parent != null)
                r = this.parent;
            else
                r = this.root;
            this.setXY((r.width - this.width) / 2, (r.height - this.height) / 2);
            if (restraint) {
                this.addRelation(r, 3);
                this.addRelation(r, 10);
            }
        }
        get width() {
            this.ensureSizeCorrect();
            if (this.$relations.sizeDirty)
                this.$relations.ensureRelationsSizeCorrect();
            return this.$width;
        }
        set width(value) {
            this.setSize(value, this.$rawHeight);
        }
        get height() {
            this.ensureSizeCorrect();
            if (this.$relations.sizeDirty)
                this.$relations.ensureRelationsSizeCorrect();
            return this.$height;
        }
        set height(value) {
            this.setSize(this.$rawWidth, value);
        }
        setSize(wv, hv, ignorePivot = false) {
            if (this.$rawWidth != wv || this.$rawHeight != hv) {
                this.$rawWidth = wv;
                this.$rawHeight = hv;
                wv = Math.max(0, wv);
                hv = Math.max(0, hv);
                let diffw = wv - this.mapPivotWidth(1);
                let diffh = hv - this.mapPivotHeight(1);
                this.$width = wv;
                this.$height = hv;
                this.handleSizeChanged();
                if (this.$pivot.x != 0 || this.$pivot.y != 0) {
                    if (!this.$pivotAsAnchor) {
                        if (!ignorePivot)
                            this.setXY(this.x - this.$pivot.x * diffw, this.y - this.$pivot.y * diffh);
                        this.updatePivotOffset();
                    }
                    else
                        this.applyPivot();
                }
                this.updateGear(2);
                if (this.$parent) {
                    this.$relations.onOwnerSizeChanged(diffw, diffh);
                    this.$parent.setBoundsChangedFlag();
                }
                this.$displayObject.emit(fgui.DisplayObjectEvent.SIZE_CHANGED, this);
            }
        }
        ensureSizeCorrect() {
        }
        get sourceHeight() {
            return this.$sourceHeight;
        }
        get sourceWidth() {
            return this.$sourceWidth;
        }
        get initHeight() {
            return this.$initHeight;
        }
        get initWidth() {
            return this.$initWidth;
        }
        get actualWidth() {
            return this.width * Math.abs(this.$scaleX);
        }
        get actualHeight() {
            return this.height * Math.abs(this.$scaleY);
        }
        get scaleX() {
            return this.$scaleX;
        }
        set scaleX(value) {
            this.setScale(value, this.$scaleY);
        }
        get scaleY() {
            return this.$scaleY;
        }
        set scaleY(value) {
            this.setScale(this.$scaleX, value);
        }
        setScale(sx, sy) {
            if (this.$scaleX != sx || this.$scaleY != sy) {
                this.$scaleX = sx;
                this.$scaleY = sy;
                this.handleScaleChanged();
                this.applyPivot();
                this.updateGear(2);
            }
        }
        get skewX() {
            return this.$skewX;
        }
        set skewX(value) {
            this.setSkew(value, this.$skewY);
        }
        get skewY() {
            return this.$skewY;
        }
        set skewY(value) {
            this.setSkew(this.$skewX, value);
        }
        setSkew(xv, yv) {
            if (this.$skewX != xv || this.$skewY != yv) {
                this.$skewX = xv;
                this.$skewY = yv;
                this.$displayObject.skew.set(xv * -fgui.utils.NumberUtil.RADIAN, yv * fgui.utils.NumberUtil.RADIAN);
                this.applyPivot();
            }
        }
        mapPivotWidth(scale) {
            return scale * this.$width;
        }
        mapPivotHeight(scale) {
            return scale * this.$height;
        }
        get pivotX() {
            return this.$pivot.x;
        }
        get pivotY() {
            return this.$pivot.y;
        }
        set pivotX(value) {
            this.setPivot(value, this.pivotY);
        }
        set pivotY(value) {
            this.setPivot(this.pivotX, value);
        }
        setPivot(xv, yv, asAnchor = false) {
            if (this.$pivot.x != xv || this.$pivot.y != yv || this.$pivotAsAnchor != asAnchor) {
                this.$pivot.set(xv, yv);
                this.$pivotAsAnchor = asAnchor;
                this.updatePivotOffset();
                this.handleXYChanged();
            }
        }
        internalSetPivot(xv, yv, asAnchor) {
            this.$pivot.set(xv, yv);
            this.$pivotAsAnchor = asAnchor;
            if (asAnchor)
                this.handleXYChanged();
        }
        updatePivotOffset() {
            if (this.$pivot.x != 0 || this.$pivot.y != 0 && this.$displayObject.transform) {
                let vx = this.mapPivotWidth(this.$pivot.x), vy = this.mapPivotHeight(this.$pivot.y);
                GObject.sHelperPoint.set(vx, vy);
                this.$displayObject.transform.updateLocalTransform();
                let trans = this.$displayObject.localTransform;
                let p = trans.apply(GObject.sHelperPoint, GObject.sHelperPoint);
                p.x -= trans.tx, p.y -= trans.ty;
                this.$pivotOffset.set(this.$pivot.x * this.$width - p.x, this.$pivot.y * this.$height - p.y);
            }
            else
                this.$pivotOffset.set(0, 0);
        }
        applyPivot() {
            if (this.$pivot.x != 0 || this.$pivot.y != 0) {
                this.updatePivotOffset();
                this.handleXYChanged();
            }
        }
        get touchable() {
            return this.$touchable;
        }
        set touchable(value) {
            this.$touchable = value;
            this.$displayObject.interactive = this.$touchable;
            this.$displayObject.interactiveChildren = this.$touchable
            this.$displayObject.ignoreHit = !this.$touchable
        }
        get grayed() {
            return this.$grayed;
        }
        set grayed(value) {
            if (this.$grayed != value) {
                this.$grayed = value;
                this.handleGrayedChanged();
                this.updateGear(3);
            }
        }
        get enabled() {
            return !this.$grayed && this.$touchable;
        }
        set enabled(value) {
            this.grayed = !value;
            this.touchable = value;
        }
        get rotation() {
            return this.$rotation;
        }
        set rotation(value) {
            if (this.$rotation != value) {
                this.$rotation = value;
                if (this.$displayObject)
                    this.$displayObject.rotation = fgui.utils.NumberUtil.angleToRadian(this.normalizeRotation);
                this.applyPivot();
                this.updateGear(3);
            }
        }
        get normalizeRotation() {
            let rot = this.$rotation % 360;
            if (rot > 180)
                rot -= 360;
            else if (rot < -180)
                rot += 360;
            return rot;
        }
        get alpha() {
            return this.$alpha;
        }
        set alpha(value) {
            if (this.$alpha != value) {
                this.$alpha = value;
                this.updateAlpha();
            }
        }
        updateAlpha() {
            if (this.$displayObject)
                this.$displayObject.alpha = this.$alpha;
            this.updateGear(3);
        }
        get visible() {
            return this.$visible;
        }
        set visible(value) {
            if (this.$visible != value) {
                this.$visible = value;
                if (this.$displayObject)
                    this.$displayObject.visible = this.$visible;
                if (this.$parent) {
                    this.$parent.childStateChanged(this);
                    this.$parent.setBoundsChangedFlag();
                }
                this.emit(fgui.DisplayObjectEvent.VISIBLE_CHANGED, this.$visible, this);
            }
        }
        set internalVisible(value) {
            if (value != this.$internalVisible) {
                this.$internalVisible = value;
                if (this.$parent)
                    this.$parent.childStateChanged(this);
            }
        }
        get internalVisible() {
            return this.$internalVisible;
        }
        get finalVisible() {
            return this.$visible && this.$internalVisible && (!this.$group || this.$group.finalVisible);
        }
        get sortingOrder() {
            return this.$sortingOrder;
        }
        set sortingOrder(value) {
            if (value < 0)
                value = 0;
            if (this.$sortingOrder != value) {
                let old = this.$sortingOrder;
                this.$sortingOrder = value;
                if (this.$parent != null)
                    this.$parent.childSortingOrderChanged(this, old, this.$sortingOrder);
            }
        }
        get focusable() {
            return this.$focusable;
        }
        set focusable(value) {
            this.$focusable = value;
        }
        get focused() {
            return this.root.focus == this;
        }
        requestFocus() {
            let p = this;
            while (p && !p.$focusable)
                p = p.parent;
            if (p != null)
                this.root.focus = p;
        }
        get tooltips() {
            return this.$tooltips;
        }
        set tooltips(value) {
            this.$tooltips = value;
        }
        get blendMode() {
            if (this.$displayObject && this.$displayObject instanceof PIXI.Sprite)
                return fgui.BlendModeMap[this.$displayObject.blendMode] || "None";
            return fgui.BlendModeMap[0];
        }
        set blendMode(value) {
            if (!value || !value.length || !this.$displayObject || !(this.$displayObject instanceof PIXI.Sprite))
                return;
            for (let i = 0; i < fgui.BlendModeMap.length; i++) {
                if (fgui.BlendModeMap[i].toLowerCase() === value.toLowerCase()) {
                    this.$displayObject.blendMode = i;
                    return;
                }
            }
        }
        get filters() {
            return this.$displayObject.filters;
        }
        set filters(value) {
            this.$displayObject.filters = value;
        }
        get inContainer() {
            return this.$displayObject.parent != null;
        }
        static isDisplayObjectOnStage(display) {
            if (!display || !display.parent)
                return false;
            let p = display;
            while (p != null) {
                if (p == fgui.GRoot.inst.nativeStage)
                    return true;
                p = p.parent;
            }
            return false;
        }
        get onStage() {
            return GObject.isDisplayObjectOnStage(this.$displayObject);
        }
        get resourceURL() {
            if (this.packageItem != null)
                return `ui://${this.packageItem.owner.id}${this.packageItem.id}`;
            else
                return null;
        }
        set group(value) {
            this.$group = value;
        }
        get group() {
            return this.$group;
        }
        getGear(index) {
            let gear = this.$gears[index];
            if (gear == null) {
                switch (index) {
                    case 0:
                        gear = new fgui.GearDisplay(this);
                        break;
                    case 1:
                        gear = new fgui.GearXY(this);
                        break;
                    case 2:
                        gear = new fgui.GearSize(this);
                        break;
                    case 3:
                        gear = new fgui.GearLook(this);
                        break;
                    case 4:
                        if (fgui.isColorGear(this))
                            gear = new fgui.GearColor(this);
                        else
                            throw new Error(`Invalid component type to add GearColor feature, please check the component named ${this.$name} in the Editor.`);
                        break;
                    case 5:
                        if (fgui.isAnimationGear(this))
                            gear = new fgui.GearAnimation(this);
                        else
                            throw new Error(`Invalid component type to add GearAnimation feature, please check the component named ${this.$name} in the Editor.`);
                        break;
                    case 6:
                        gear = new fgui.GearText(this);
                        break;
                    case 7:
                        gear = new fgui.GearIcon(this);
                        break;
                    default:
                        throw new Error("FGUI: invalid gear type");
                }
                this.$gears[index] = gear;
            }
            return gear;
        }
        updateGear(index) {
            if (this.$gears[index] != null)
                this.$gears[index].updateState();
        }
        updateGearFromRelations(index, dx, dy) {
            if (this.$gears[index] != null)
                this.$gears[index].updateFromRelations(dx, dy);
        }
        hasGearController(index, c) {
            return this.$gears[index] && this.$gears[index].controller == c;
        }
        lockGearDisplay() {
            let g = this.$gears[0];
            if (g && g.controller) {
                let ret = g.lock();
                this.checkGearVisible();
                return ret;
            }
            else
                return 0;
        }
        releaseGearDisplay(token) {
            let g = this.$gears[0];
            if (g && g.controller) {
                g.release(token);
                this.checkGearVisible();
            }
        }
        checkGearVisible() {
            if (this.$handlingController)
                return;
            let g = this.$gears[0];
            let v = !g || g.connected;
            if (v != this.$internalVisible) {
                this.$internalVisible = v;
                if (this.$parent)
                    this.$parent.childStateChanged(this);
            }
        }
        get gearXY() {
            return this.getGear(1);
        }
        get gearSize() {
            return this.getGear(2);
        }
        get gearLook() {
            return this.getGear(3);
        }
        get relations() {
            return this.$relations;
        }
        addRelation(target, relationType, usePercent = false) {
            this.$relations.add(target, relationType, usePercent);
        }
        removeRelation(target, relationType = 0) {
            this.$relations.remove(target, relationType);
        }
        get displayObject() {
            return this.$displayObject;
        }
        createDisplayObject() {
        }
        setDisplayObject(value) {
            this.$displayObject = value;
        }
        get parent() {
            return this.$parent;
        }
        set parent(val) {
            this.$parent = val;
        }
        removeFromParent() {
            if (this.$parent)
                this.$parent.removeChild(this);
        }
        get root() {
            if (this instanceof fgui.GRoot)
                return this;
            let p = this.$parent;
            while (p) {
                if (p instanceof fgui.GRoot)
                    return p;
                p = p.parent;
            }
            return fgui.GRoot.inst;
        }
        get text() {
            return null;
        }
        set text(value) {
        }
        get icon() {
            return null;
        }
        set icon(value) {
        }
        dispose() {
            this.removeFromParent();
            this.$relations.dispose();
            this.removeAllListeners();
            if (this.$owner) {
                this.$owner.off(fgui.InteractiveEvents.Move, this.$moving, this);
                this.$owner.off(fgui.InteractiveEvents.Up, this.$end, this);
                this.$owner.off(fgui.InteractiveEvents.Move, this.$moving2, this);
                this.$owner.off(fgui.InteractiveEvents.Up, this.$end2, this);
            }
            this.$displayObject.destroy();
        }
        click(listener, thisObj) {
            return this.on(fgui.InteractiveEvents.Click, listener, thisObj);
        }
        onClick(listener, thisObj) {
            return this.on(fgui.InteractiveEvents.Click, listener, thisObj);
        }
        setPosition(x, y) {
            this.setXY(x, y);
        }
        onConstruct() {
        }
        removeClick(listener, thisObj) {
            return this.off(fgui.InteractiveEvents.Click, listener, thisObj);
        }
        hasClick(fn) {
            return this.hasListener(fgui.InteractiveEvents.Click, fn);
        }
        on(type, listener, thisObject) {
            if (type == null)
                return this;
            this.$displayObject.on(type, listener, thisObject);
            return this;
        }
        off(type, listener, thisObject) {
            if (type == null)
                return this;
            if (this.$displayObject.listeners(type))
                this.$displayObject.off(type, listener, thisObject);
            return this;
        }
        once(type, listener, thisObject) {
            if (type == null)
                return this;
            this.$displayObject.once(type, listener, thisObject);
            return this;
        }
        hasListener(event, handler) {
            return this.$displayObject.listeners(event).indexOf(handler) >= 0;
        }
        emit(event, ...args) {
            if (!args || args.length <= 0)
                args = [event];
            else
                args.unshift(event);
            return this.$displayObject.emit.apply(this.$displayObject, args);
        }
        removeAllListeners(type) {
            this.$displayObject.removeAllListeners(type);
        }
        get draggable() {
            return this.$draggable;
        }
        set draggable(value) {
            if (this.$draggable != value) {
                this.$draggable = value;
                this.initDrag();
            }
        }
        get dragBounds() {
            return this.$dragBounds;
        }
        set dragBounds(value) {
            this.$dragBounds = value;
        }
        startDrag(touchPointID = -1) {
            if (!this.onStage)
                return;
            this.dragBegin();
        }
        stopDrag() {
            this.dragEnd();
        }
        get dragging() {
            return GObject.draggingObject == this;
        }
        localToGlobal(ax = 0, ay = 0, resultPoint) {
            if (this.$pivotAsAnchor) {
                ax += this.$pivot.x * this.$width;
                ay += this.$pivot.y * this.$height;
            }
            if (!resultPoint)
                resultPoint = GObject.sHelperPoint;
            resultPoint.x = ax;
            resultPoint.y = ay;
            return this.$displayObject.toGlobal(resultPoint, resultPoint);
        }
        globalToLocal(ax = 0, ay = 0, resultPoint) {
            if (!resultPoint)
                resultPoint = GObject.sHelperPoint;
            resultPoint.set(ax, ay);
            resultPoint = this.$displayObject.toLocal(resultPoint, fgui.GRoot.inst.nativeStage);
            if (this.$pivotAsAnchor) {
                resultPoint.x -= this.$pivot.x * this.$width;
                resultPoint.y -= this.$pivot.y * this.$height;
            }
            return resultPoint;
        }
        localToRoot(ax = 0, ay = 0, resultPoint) {
            let pt = this.localToGlobal(ax, ay, resultPoint);
            pt.x /= fgui.GRoot.inst.contentScaleFactor;
            pt.y /= fgui.GRoot.inst.contentScaleFactor;
            return pt;
        }
        rootToLocal(ax = 0, ay = 0, resultPoint) {
            ax *= fgui.GRoot.inst.contentScaleFactor;
            ay *= fgui.GRoot.inst.contentScaleFactor;
            return this.globalToLocal(ax, ay, resultPoint);
        }
        localToGlobalRect(ax = 0, ay = 0, aWidth = 0, aHeight = 0, resultRect) {
            if (resultRect == null)
                resultRect = GObject.sDragHelperRect;
            let pt = this.localToGlobal(ax, ay);
            resultRect.x = pt.x;
            resultRect.y = pt.y;
            resultRect.width = aWidth;
            resultRect.height = aHeight;
            return resultRect;
        }
        globalToLocalRect(ax = 0, ay = 0, aWidth = 0, aHeight = 0, resultRect) {
            if (resultRect == null)
                resultRect = GObject.sDragHelperRect;
            let pt = this.globalToLocal(ax, ay);
            resultRect.x = pt.x;
            resultRect.y = pt.y;
            resultRect.width = aWidth;
            resultRect.height = aHeight;
            return resultRect;
        }
        handleControllerChanged(c) {
            this.$handlingController = true;
            for (let i = 0; i < 8; i++) {
                let gear = this.$gears[i];
                if (gear != null && gear.controller == c)
                    gear.apply();
            }
            this.$handlingController = false;
            this.checkGearVisible();
        }
        switchDisplayObject(newObj) {
            if (newObj == this.$displayObject)
                return;
            let old = this.$displayObject;
            if (this.inContainer) {
                let i = this.$displayObject.parent.getChildIndex(this.$displayObject);
                this.$displayObject.parent.addChildAt(newObj, i);
                this.$displayObject.parent.removeChild(this.$displayObject);
            }
            this.$displayObject = newObj;
            this.$displayObject.x = old.x;
            this.$displayObject.y = old.y;
            this.$displayObject.rotation = old.rotation;
            this.$displayObject.alpha = old.alpha;
            this.$displayObject.visible = old.visible;
            this.$displayObject.scale.x = old.scale.x;
            this.$displayObject.scale.y = old.scale.y;
            this.$displayObject.interactive = old.interactive;
            if (this.$displayObject instanceof PIXI.Container && old instanceof PIXI.Container)
                this.$displayObject.interactiveChildren = old.interactiveChildren;
        }
        handleXYChanged() {
            if (this.$displayObject) {
                let xv = this.$x;
                let yv = this.$y;
                if (this.$pivotAsAnchor) {
                    xv -= this.$pivot.x * this.$width;
                    yv -= this.$pivot.y * this.$height;
                }
                if (this.$pixelSnapping) {
                    xv = Math.round(xv);
                    yv = Math.round(yv);
                }
                this.$displayObject.position.set(xv + this.$pivotOffset.x, yv + this.$pivotOffset.y);
            }
        }
        handleSizeChanged() {
        }
        handleScaleChanged() {
            if (this.$displayObject)
                this.$displayObject.scale.set(this.$scaleX, this.$scaleY);
        }
        get colorFilter() {
            if (this.$colorFilter)
                return this.$colorFilter;
            this.$colorFilter = new PIXI.filters.ColorMatrixFilter();
            if (this.$displayObject) {
                let a = this.$displayObject.filters || [];
                a.push(this.$colorFilter);
                this.$displayObject.filters = a;
            }
            return this.$colorFilter;
        }
        updateColorComponents(brightness, contrast, saturate, hue) {
            if (!GObject.$colorHelper)
                GObject.$colorHelper = new fgui.utils.ColorMatrix();
            let helper = GObject.$colorHelper;
            helper.setColor(brightness, contrast * 100, saturate * 100, hue * 180);
            let f = this.colorFilter;
            f.enabled = true;
            f.reset();
            f.matrix = helper.toArray();
            if (!this.$lastColorComponents)
                this.$lastColorComponents = [];
            this.$lastColorComponents.length = 0;
            this.$lastColorComponents.push(helper.brightness, helper.contrast, helper.saturation, helper.hue);
        }
        handleGrayedChanged() {
            if (this.$displayObject) {
                let c = this.colorFilter;
                c.enabled = true;
                if (this.$grayed)
                    c.blackAndWhite(true);
                else {
                    if (this.$lastColorComponents && this.$lastColorComponents.length >= 4)
                        this.updateColorComponents(this.$lastColorComponents[0], this.$lastColorComponents[1], this.$lastColorComponents[2], this.$lastColorComponents[3]);
                    else
                        c.enabled = false;
                }
            }
        }
        constructFromResource() {
        }
        setupBeforeAdd(xml) {
            let str;
            let arr;
            this.$id = xml.attributes.id;
            this.$name = xml.attributes.name;
            str = xml.attributes.xy;
            arr = str.split(",");
            this.setXY(parseInt(arr[0]), parseInt(arr[1]));
            str = xml.attributes.size;
            if (str) {
                arr = str.split(",");
                this.$initWidth = parseInt(arr[0]);
                this.$initHeight = parseInt(arr[1]);
                this.setSize(this.$initWidth, this.$initHeight, true);
            }
            str = xml.attributes.scale;
            if (str) {
                arr = str.split(",");
                this.setScale(parseFloat(arr[0]), parseFloat(arr[1]));
            }
            str = xml.attributes.rotation;
            if (str)
                this.rotation = parseInt(str);
            str = xml.attributes.skew;
            if (str) {
                arr = str.split(",");
                this.setSkew(parseFloat(arr[0]), parseFloat(arr[1]));
            }
            str = xml.attributes.pivot;
            if (str) {
                arr = str.split(",");
                let n1 = parseFloat(arr[0]), n2 = parseFloat(arr[1]);
                str = xml.attributes.anchor;
                this.setPivot(n1, n2, str == "true");
            }
            str = xml.attributes.alpha;
            if (str)
                this.alpha = parseFloat(str);
            if (xml.attributes.touchable == "false")
                this.touchable = false;
            if (xml.attributes.visible == "false")
                this.visible = false;
            if (xml.attributes.grayed == "true")
                this.grayed = true;
            this.tooltips = xml.attributes.tooltips;
            this.customData = xml.attributes.customData;
            if (xml.children) {
                let properties = xml.children.filter(v => v.nodeName == "property");
                properties.forEach(v => {
                    let target = this[v.attributes.target];
                    target.text = v.attributes.value;
                });
            }
            str = xml.attributes.blend;
            if (str)
                this.blendMode = str;
            str = xml.attributes.filter;
            if (str) {
                switch (str) {
                    case "color":
                        str = xml.attributes.filterData;
                        arr = str.split(",");
                        this.updateColorComponents(parseFloat(arr[0]), parseFloat(arr[1]), parseFloat(arr[2]), parseFloat(arr[3]));
                        break;
                }
            }
        }
        setupAfterAdd(xml) {
            let str = xml.attributes.group;
            if (str)
                this.$group = this.$parent.getChildById(str);
            let col = xml.children;
            col.forEach(cxml => {
                let index = fgui.GearXMLNodeNameMap[cxml.nodeName];
                if (index != void 0)
                    this.getGear(index).setup(cxml);
            }, this);

            str = xml.attributes.controller

            if (str && str.includes(",")) {
                let arr = str.split(",")
                for (let i = 0; i < arr.length / 2; i++) {
                    this.getController(arr[i * 2]).selectedIndex = Number(arr[i * 2 + 1])
                }

            }
        }
        static castFromNativeObject(disp) {
            if (fgui.isUIObject(disp))
                return disp.UIOwner;
            return null;
        }
        initDrag() {
            if (this.$draggable)
                this.on(fgui.InteractiveEvents.Down, this.$touchBegin, this);
            else
                this.off(fgui.InteractiveEvents.Down, this.$touchBegin, this);
        }
        dragBegin() {
            if (GObject.draggingObject != null)
                GObject.draggingObject.stopDrag();
            GObject.sGlobalDragStart.x = fgui.GRoot.globalMouseStatus.mouseX;
            GObject.sGlobalDragStart.y = fgui.GRoot.globalMouseStatus.mouseY;
            this.localToGlobalRect(0, 0, this.width, this.height, GObject.sGlobalRect);
            GObject.draggingObject = this;
            this.$owner.on(fgui.InteractiveEvents.Move, this.$moving2, this);
            this.$owner.on(fgui.InteractiveEvents.Up, this.$end2, this);
        }
        dragEnd() {
            if (GObject.draggingObject == this) {
                this.$owner.off(fgui.InteractiveEvents.Move, this.$moving2, this);
                this.$owner.off(fgui.InteractiveEvents.Up, this.$end2, this);
                GObject.draggingObject = null;
            }
            GObject.$dragBeginCancelled = true;
        }
        reset() {
            this.$owner.off(fgui.InteractiveEvents.Move, this.$moving, this);
            this.$owner.off(fgui.InteractiveEvents.Up, this.$end, this);
        }
        $touchBegin(evt) {
            if (this.$touchDownPoint == null)
                this.$touchDownPoint = new PIXI.Point();
            this.$touchDownPoint.x = evt.data.global.x;
            this.$touchDownPoint.y = evt.data.global.y;
            this.$owner.on(fgui.InteractiveEvents.Move, this.$moving, this);
            this.$owner.on(fgui.InteractiveEvents.Up, this.$end, this);
        }
        $end(evt) {
            this.reset();
        }
        $moving(evt) {
            let sensitivity = fgui.UIConfig.touchDragSensitivity;
            if (this.$touchDownPoint != null
                && Math.abs(this.$touchDownPoint.x - evt.data.global.x) < sensitivity
                && Math.abs(this.$touchDownPoint.y - evt.data.global.y) < sensitivity)
                return;
            this.reset();
            GObject.$dragBeginCancelled = false;
            evt.currentTarget = this.$displayObject;
            this.$displayObject.emit(fgui.DragEvent.START, evt, this);
            if (!GObject.$dragBeginCancelled)
                this.dragBegin();
        }
        $moving2(evt) {
            let xx = evt.data.global.x - GObject.sGlobalDragStart.x + GObject.sGlobalRect.x;
            let yy = evt.data.global.y - GObject.sGlobalDragStart.y + GObject.sGlobalRect.y;
            if (this.$dragBounds != null) {
                let rect = fgui.GRoot.inst.localToGlobalRect(this.$dragBounds.x, this.$dragBounds.y, this.$dragBounds.width, this.$dragBounds.height, GObject.sDragHelperRect);
                if (xx < rect.x)
                    xx = rect.x;
                else if (xx + GObject.sGlobalRect.width > rect.right) {
                    xx = rect.right - GObject.sGlobalRect.width;
                    if (xx < rect.x)
                        xx = rect.x;
                }
                if (yy < rect.y)
                    yy = rect.y;
                else if (yy + GObject.sGlobalRect.height > rect.bottom) {
                    yy = rect.bottom - GObject.sGlobalRect.height;
                    if (yy < rect.y)
                        yy = rect.y;
                }
            }
            GObject.sUpdatingWhileDragging = true;
            GObject.sHelperPoint.x = xx;
            GObject.sHelperPoint.y = yy;
            let pt = this.parent.globalToLocal(xx, yy, GObject.sHelperPoint);
            this.setXY(Math.round(pt.x), Math.round(pt.y));
            GObject.sUpdatingWhileDragging = false;
            evt.currentTarget = this.$displayObject;
            this.$displayObject.emit(fgui.DragEvent.MOVING, evt, this);
        }
        $end2(evt) {
            if (GObject.draggingObject == this) {
                this.stopDrag();
                evt.currentTarget = this.$displayObject;
                this.$displayObject.emit(fgui.DragEvent.END, evt, this);
            }
        }
    }
    GObject.gInstanceCounter = 0;
    GObject.sGlobalDragStart = new PIXI.Point();
    GObject.sGlobalRect = new PIXI.Rectangle();
    GObject.sHelperPoint = new PIXI.Point();
    GObject.sDragHelperRect = new PIXI.Rectangle();
    fgui.GObject = GObject;
})(fgui || (fgui = {}));

(function (fgui) {
    class GComponent extends fgui.GObject {
        constructor() {
            super();
            this.$sortingChildCount = 0;
            this.$children = [];
            this.$controllers = [];
            this.$transitions = [];
            this.$margin = new fgui.utils.Margin();
            this.$alignOffset = new PIXI.Point();
        }
        createDisplayObject() {
            this.$rootContainer = new fgui.UIContainer(this);
            this.setDisplayObject(this.$rootContainer);
            this.$container = this.$rootContainer;
        }
        dispose() {
            fgui.GTimer.inst.remove(this.$validate, this);
            this.off("added", this.$added, this);
            this.off("removed", this.$removed, this);
            this.$transitions.forEach((trans) => {
                trans.dispose();
            });
            let numChildren = this.$children.length;
            for (let i = numChildren - 1; i >= 0; --i) {
                let obj = this.$children[i];
                obj.parent = null;
                obj.dispose();
            }
            this.$boundsChanged = false;
            if (this.$scrollPane)
                this.$scrollPane.dispose();
            super.dispose();
        }
        get displayListContainer() {
            return this.$container;
        }
        addChild(child) {
            this.addChildAt(child, this.$children.length);
            return child;
        }
        addChildAt(child, index = 0) {
            if (!child)
                throw new Error("Invalid child");
            let numChildren = this.$children.length;
            if (index >= 0 && index <= numChildren) {
                if (child.parent == this)
                    this.setChildIndex(child, index);
                else {
                    child.removeFromParent();
                    child.parent = this;
                    let cnt = this.$children.length;
                    if (child.sortingOrder != 0) {
                        this.$sortingChildCount++;
                        index = this.getInsertPosForSortingChild(child);
                    }
                    else if (this.$sortingChildCount > 0) {
                        if (index > (cnt - this.$sortingChildCount))
                            index = cnt - this.$sortingChildCount;
                    }
                    if (index == cnt)
                        this.$children.push(child);
                    else
                        this.$children.splice(index, 0, child);
                    this.childStateChanged(child);
                    this.setBoundsChangedFlag();
                }
                return child;
            }
            else
                throw new Error("Invalid child index");
        }
        getInsertPosForSortingChild(target) {
            let cnt = this.$children.length;
            let i = 0;
            for (i = 0; i < cnt; i++) {
                let child = this.$children[i];
                if (child == target)
                    continue;
                if (target.sortingOrder < child.sortingOrder)
                    break;
            }
            return i;
        }
        removeChild(child, dispose = false) {
            let childIndex = this.$children.indexOf(child);
            if (childIndex != -1)
                this.removeChildAt(childIndex, dispose);
            return child;
        }
        removeChildAt(index, dispose = false) {
            if (index >= 0 && index < this.numChildren) {
                let child = this.$children[index];
                if (!child) debugger
                child.parent = null;
                if (child.sortingOrder != 0)
                    this.$sortingChildCount--;
                this.$children.splice(index, 1);
                if (child.inContainer)
                    this.$container.removeChild(child.displayObject);
                if (dispose === true)
                    child.dispose();
                this.setBoundsChangedFlag();
                return child;
            }
            else
                throw new Error("Invalid child index");
        }
        removeChildren(beginIndex = 0, endIndex = -1, dispose = false) {
            if (endIndex < 0 || endIndex >= this.numChildren) { }
            endIndex = this.numChildren - 1;
            for (let i = endIndex; i >= beginIndex; i--)
                this.removeChildAt(beginIndex, dispose);
        }
        getChildAt(index = 0) {
            if (index >= 0 && index < this.numChildren)
                return this.$children[index];
            else
                throw new Error("Invalid child index");
        }
        getChild(name) {
            let cnt = this.$children.length;
            for (let i = 0; i < cnt; ++i) {
                if (this.$children[i].name == name)
                    return this.$children[i];
            }
            return null;
        }
        getChildInGroup(name, group) {
            let cnt = this.$children.length;
            for (let i = 0; i < cnt; ++i) {
                let child = this.$children[i];
                if (child.group == group && child.name == name)
                    return child;
            }
            return null;
        }
        getChildById(id) {
            let cnt = this.$children.length;
            for (let i = 0; i < cnt; ++i) {
                if (this.$children[i].id == id)
                    return this.$children[i];
            }
            return null;
        }
        getChildIndex(child) {
            return this.$children.indexOf(child);
        }
        setChildIndex(child, index = 0) {
            let oldIndex = this.$children.indexOf(child);
            if (oldIndex == -1)
                throw new Error("no such child found");
            if (child.sortingOrder != 0)
                return;
            let cnt = this.$children.length;
            if (this.$sortingChildCount > 0) {
                if (index > (cnt - this.$sortingChildCount - 1))
                    index = cnt - this.$sortingChildCount - 1;
            }
            this.$setChildIndex(child, oldIndex, index);
        }
        setChildIndexBefore(child, index) {
            let oldIndex = this.$children.indexOf(child);
            if (oldIndex == -1)
                throw new Error("no such child found");
            if (child.sortingOrder != 0)
                return oldIndex;
            let cnt = this.$children.length;
            if (this.$sortingChildCount > 0) {
                if (index > (cnt - this.$sortingChildCount - 1))
                    index = cnt - this.$sortingChildCount - 1;
            }
            if (oldIndex < index)
                return this.$setChildIndex(child, oldIndex, index - 1);
            else
                return this.$setChildIndex(child, oldIndex, index);
        }
        $setChildIndex(child, oldIndex, index = 0) {
            let cnt = this.$children.length;
            if (index > cnt)
                index = cnt;
            if (oldIndex == index)
                return oldIndex;
            this.$children.splice(oldIndex, 1);
            this.$children.splice(index, 0, child);
            if (child.inContainer) {
                let displayIndex = 0;
                let childCount = this.$container.children.length;
                for (let i = 0; i < index; i++) {
                    let g = this.$children[i];
                    if (g.inContainer)
                        displayIndex++;
                }
                if (displayIndex == childCount)
                    displayIndex--;
                this.$container.setChildIndex(child.displayObject, displayIndex);
                this.setBoundsChangedFlag();
            }
            return index;
        }
        swapChildren(child1, child2) {
            let index1 = this.$children.indexOf(child1);
            let index2 = this.$children.indexOf(child2);
            if (index1 == -1 || index2 == -1)
                throw new Error("no such child found");
            this.swapChildrenAt(index1, index2);
        }
        swapChildrenAt(index1, index2 = 0) {
            let child1 = this.$children[index1];
            let child2 = this.$children[index2];
            this.setChildIndex(child1, index2);
            this.setChildIndex(child2, index1);
        }
        get numChildren() {
            return this.$children.length;
        }
        isAncestorOf(child) {
            if (child == null)
                return false;
            let p = child.parent;
            while (p) {
                if (p == this)
                    return true;
                p = p.parent;
            }
            return false;
        }
        addController(controller) {
            this.$controllers.push(controller);
            controller.$parent = this;
            this.applyController(controller);
        }
        getControllerAt(index) {
            return this.$controllers[index];
        }
        getController(name) {
            let cnt = this.$controllers.length;
            for (let i = 0; i < cnt; ++i) {
                let c = this.$controllers[i];
                if (c.name == name)
                    return c;
            }
            return null;
        }
        removeController(c) {
            let index = this.$controllers.indexOf(c);
            if (index == -1)
                throw new Error("controller not exists");
            c.$parent = null;
            this.$controllers.splice(index, 1);
            this.$children.forEach(child => {
                child.handleControllerChanged(c);
            });
        }
        get controllers() {
            return this.$controllers;
        }
        childStateChanged(child) {
            if (this.$buildingDisplayList)
                return;
            if (child instanceof fgui.GGroup) {
                this.$children.forEach(g => {
                    if (g.group == child)
                        this.childStateChanged(g);
                }, this);
                return;
            }
            if (!child.displayObject)
                return;
            if (child.finalVisible) {
                if (!child.displayObject.parent) {
                    let index = 0;
                    let len = this.$children.length;
                    for (let i1 = 0; i1 < len; i1++) {
                        let g = this.$children[i1];
                        if (g == child)
                            break;
                        if (g.displayObject && g.displayObject.parent)
                            index++;
                    }
                    this.$container.addChildAt(child.displayObject, index);
                }
            }
            else {
                if (child.displayObject.parent)
                    this.$container.removeChild(child.displayObject);
            }
        }
        applyController(c) {
            this.$applyingController = c;
            this.$children.forEach(child => {
                child.handleControllerChanged(c);
            });
            this.$applyingController = null;
            c.executeActions();
        }
        applyAllControllers() {
            this.$controllers.forEach(c => {
                this.applyController(c);
            }, this);
        }
        adjustRadioGroupDepth(obj, c) {
            let myIndex = -1, maxIndex = -1;
            this.$children.forEach((child, i) => {
                if (child == obj) {
                    myIndex = i;
                }
                else if ((child instanceof fgui.GButton)
                    && child.relatedController == c) {
                    if (i > maxIndex)
                        maxIndex = i;
                }
            });
            if (myIndex < maxIndex) {
                if (this.$applyingController != null)
                    this.$children[maxIndex].handleControllerChanged(this.$applyingController);
                this.swapChildrenAt(myIndex, maxIndex);
            }
        }
        getTransitionAt(index) {
            return this.$transitions[index];
        }
        getTransition(transName) {
            let cnt = this.$transitions.length;
            for (let i = 0; i < cnt; ++i) {
                let trans = this.$transitions[i];
                if (trans.name == transName)
                    return trans;
            }
            return null;
        }
        isChildInView(child) {
            if (this.$rootContainer.scrollRect != null) {
                return child.x + child.width >= 0 && child.x <= this.width
                    && child.y + child.height >= 0 && child.y <= this.height;
            }
            else if (this.$scrollPane != null) {
                return this.$scrollPane.isChildInView(child);
            }
            else
                return true;
        }
        getFirstChildInView() {
            let cnt = this.$children.length;
            for (let i = 0; i < cnt; ++i) {
                let child = this.$children[i];
                if (this.isChildInView(child))
                    return i;
            }
            return -1;
        }
        get scrollPane() {
            return this.$scrollPane;
        }
        get opaque() {
            return this.$opaque;
        }
        set opaque(value) {
            if (this.$opaque != value) {
                this.$opaque = value;
                if (this.$opaque)
                    this.updateOpaque();
                else {
                    if (this.$rootContainer.hitArea && this.$rootContainer.hitArea instanceof PIXI.Rectangle)
                        this.$rootContainer.hitArea.width = this.$rootContainer.hitArea.height = 0;
                }
            }
        }
        get margin() {
            return this.$margin;
        }
        set margin(value) {
            this.$margin.copy(value);
            if (this.$rootContainer.scrollRect != null) {
                this.$container.x = this.$margin.left + this.$alignOffset.x;
                this.$container.y = this.$margin.top + this.$alignOffset.y;
            }
            this.handleSizeChanged();
        }
        get mask() {
            return this.$rootContainer.mask;
        }
        set mask(obj) {
            if (!obj)
                return;
            if (obj instanceof PIXI.Container)
                obj.interactive = false;
            if (obj instanceof PIXI.Graphics)
                obj.isMask = true;
            this.$rootContainer.mask = obj;
        }
        updateOpaque() {
            if (!this.$rootContainer.hitArea)
                this.$rootContainer.hitArea = new PIXI.Rectangle();
            let h = this.$rootContainer.hitArea;
            h.x = h.y = 0;
            h.width = this.width;
            h.height = this.height;
        }
        updateScrollRect() {
            let rect = this.$rootContainer.scrollRect;
            if (rect == null)
                rect = new PIXI.Rectangle();
            let w = this.width - this.$margin.right;
            let h = this.height - this.$margin.bottom;
            rect.x = rect.y = 0;
            rect.width = w;
            rect.height = h;
            this.$rootContainer.scrollRect = rect;
        }
        setupScroll(scrollBarMargin, scroll, scrollBarDisplay, flags, vtScrollBarRes, hzScrollBarRes, headerRes, footerRes) {
            if (this.$rootContainer == this.$container) {
                this.$container = new PIXI.Container();
                this.$rootContainer.addChild(this.$container);
            }
            this.$scrollPane = new fgui.ScrollPane(this, scroll, scrollBarMargin, scrollBarDisplay, flags, vtScrollBarRes, hzScrollBarRes, headerRes, footerRes);
        }
        setupOverflow(overflow) {
            if (overflow == 1) {
                if (this.$rootContainer == this.$container) {
                    this.$container = new PIXI.Container();
                    this.$rootContainer.addChild(this.$container);
                }
                this.updateScrollRect();
                this.$container.x = this.$margin.left;
                this.$container.y = this.$margin.top;
            }
            else if (this.$margin.left != 0 || this.$margin.top != 0) {
                if (this.$rootContainer == this.$container) {
                    this.$container = new PIXI.Container();
                    this.$rootContainer.addChild(this.$container);
                }
                this.$container.x = this.$margin.left;
                this.$container.y = this.$margin.top;
            }
            this.setBoundsChangedFlag();
        }
        handleSizeChanged() {
            if (this.$scrollPane)
                this.$scrollPane.onOwnerSizeChanged();
            else if (this.$rootContainer.scrollRect != null)
                this.updateScrollRect();
            if (this.$opaque)
                this.updateOpaque();
        }
        handleGrayedChanged() {
            let c = this.getController("grayed");
            if (c != null)
                c.selectedIndex = this.grayed ? 1 : 0;
            else
                super.handleGrayedChanged();
        }
        setBoundsChangedFlag() {
            if (!this.$scrollPane && !this.$trackBounds)
                return;
            if (!this.$boundsChanged) {
                this.$boundsChanged = true;
                fgui.GTimer.inst.callLater(this.$validate, this);
            }
        }
        $validate(dt) {
            if (this.$boundsChanged)
                this.updateBounds();
        }
        ensureBoundsCorrect() {
            if (this.$boundsChanged)
                this.updateBounds();
        }
        updateBounds() {
            let ax = 0, ay = 0, aw = 0, ah = 0;
            let len = this.$children.length;
            if (len > 0) {
                ax = Number.POSITIVE_INFINITY, ay = Number.POSITIVE_INFINITY;
                let ar = Number.NEGATIVE_INFINITY, ab = Number.NEGATIVE_INFINITY;
                let tmp = 0;
                this.$children.forEach(child => {
                    child.ensureSizeCorrect();
                    tmp = child.x;
                    if (tmp < ax)
                        ax = tmp;
                    tmp = child.y;
                    if (tmp < ay)
                        ay = tmp;
                    tmp = child.x + child.actualWidth;
                    if (tmp > ar)
                        ar = tmp;
                    tmp = child.y + child.actualHeight;
                    if (tmp > ab)
                        ab = tmp;
                });
                aw = ar - ax;
                ah = ab - ay;
            }
            this.setBounds(ax, ay, aw, ah);
        }
        setBounds(ax, ay, aw, ah = 0) {
            this.$boundsChanged = false;
            if (this.$scrollPane)
                this.$scrollPane.setContentSize(Math.round(ax + aw), Math.round(ay + ah));
        }
        get viewWidth() {
            if (this.$scrollPane != null)
                return this.$scrollPane.viewWidth;
            else
                return this.width - this.$margin.left - this.$margin.right;
        }
        set viewWidth(value) {
            if (this.$scrollPane != null)
                this.$scrollPane.viewWidth = value;
            else
                this.width = value + this.$margin.left + this.$margin.right;
        }
        get viewHeight() {
            if (this.$scrollPane != null)
                return this.$scrollPane.viewHeight;
            else
                return this.height - this.$margin.top - this.$margin.bottom;
        }
        set viewHeight(value) {
            if (this.$scrollPane != null)
                this.$scrollPane.viewHeight = value;
            else
                this.height = value + this.$margin.top + this.$margin.bottom;
        }
        getSnappingPosition(xValue, yValue, resultPoint) {
            if (!resultPoint)
                resultPoint = new PIXI.Point();
            let cnt = this.$children.length;
            if (cnt <= 0) {
                resultPoint.x = 0;
                resultPoint.y = 0;
                return resultPoint;
            }
            this.ensureBoundsCorrect();
            let obj = null;
            let prev = null;
            let i = 0;
            if (yValue != 0) {
                for (; i < cnt; i++) {
                    obj = this.$children[i];
                    if (yValue < obj.y) {
                        if (i == 0) {
                            yValue = 0;
                            break;
                        }
                        else {
                            prev = this.$children[i - 1];
                            if (yValue < prev.y + prev.actualHeight / 2)
                                yValue = prev.y;
                            else
                                yValue = obj.y;
                            break;
                        }
                    }
                }
                if (i == cnt)
                    yValue = obj.y;
            }
            if (xValue != 0) {
                if (i > 0)
                    i--;
                for (; i < cnt; i++) {
                    obj = this.$children[i];
                    if (xValue < obj.x) {
                        if (i == 0) {
                            xValue = 0;
                            break;
                        }
                        else {
                            prev = this.$children[i - 1];
                            if (xValue < prev.x + prev.actualWidth / 2)
                                xValue = prev.x;
                            else
                                xValue = obj.x;
                            break;
                        }
                    }
                }
                if (i == cnt)
                    xValue = obj.x;
            }
            resultPoint.x = xValue;
            resultPoint.y = yValue;
            return resultPoint;
        }
        childSortingOrderChanged(child, oldValue, newValue = 0) {
            if (newValue == 0) {
                this.$sortingChildCount--;
                this.setChildIndex(child, this.$children.length);
            }
            else {
                if (oldValue == 0)
                    this.$sortingChildCount++;
                let oldIndex = this.$children.indexOf(child);
                let index = this.getInsertPosForSortingChild(child);
                if (oldIndex < index)
                    this.$setChildIndex(child, oldIndex, index - 1);
                else
                    this.$setChildIndex(child, oldIndex, index);
            }
        }
        constructFromResource() {
            this.constructInternal(null, 0);
        }
        constructInternal(objectPool, poolIndex) {
            let xml = this.packageItem.owner.getItemAsset(this.packageItem);
            this.$inProgressBuilding = true;
            let str;
            let arr;
            str = xml.attributes.size;
            arr = str.split(",");
            this.$sourceWidth = parseInt(arr[0]);
            this.$sourceHeight = parseInt(arr[1]);
            this.$initWidth = this.$sourceWidth;
            this.$initHeight = this.$sourceHeight;
            this.setSize(this.$sourceWidth, this.$sourceHeight);
            str = xml.attributes.pivot;
            if (str) {
                arr = str.split(",");
                str = xml.attributes.anchor;
                this.internalSetPivot(parseFloat(arr[0]), parseFloat(arr[1]), str == "true");
            }
            str = xml.attributes.opaque;
            this.opaque = str != "false";
            let overflow;
            str = xml.attributes.overflow;
            if (str)
                overflow = fgui.ParseOverflowType(str);
            else
                overflow = 0;
            str = xml.attributes.margin;
            if (str)
                this.$margin.parse(str);
            if (overflow == 2) {
                let scroll;
                str = xml.attributes.scroll;
                if (str)
                    scroll = fgui.ParseScrollType(str);
                else
                    scroll = 1;
                let scrollBarDisplay;
                str = xml.attributes.scrollBar;
                if (str)
                    scrollBarDisplay = fgui.ParseScrollBarDisplayType(str);
                else
                    scrollBarDisplay = 0;
                let scrollBarFlags;
                str = xml.attributes.scrollBarFlags;
                if (str)
                    scrollBarFlags = parseInt(str);
                else
                    scrollBarFlags = 0;
                let scrollBarMargin = new fgui.utils.Margin();
                str = xml.attributes.scrollBarMargin;
                if (str)
                    scrollBarMargin.parse(str);
                let vtScrollBarRes;
                let hzScrollBarRes;
                str = xml.attributes.scrollBarRes;
                if (str) {
                    arr = str.split(",");
                    vtScrollBarRes = arr[0];
                    hzScrollBarRes = arr[1];
                }
                let headerRes, footerRes;
                str = xml.attributes.ptrRes;
                if (str) {
                    arr = str.split(",");
                    headerRes = arr[0];
                    footerRes = arr[1];
                }
                this.setupScroll(scrollBarMargin, scroll, scrollBarDisplay, scrollBarFlags, vtScrollBarRes, hzScrollBarRes, headerRes, footerRes);
            }
            else
                this.setupOverflow(overflow);
            this.$buildingDisplayList = true;
            let col = xml.children;
            col.forEach(cxml => {
                if (cxml.nodeName == "controller") {
                    let c = new fgui.Controller();
                    this.$controllers.push(c);
                    c.$parent = this;
                    c.setup(cxml);
                }
            });
            let displayList = this.packageItem.displayList;
            displayList.forEach((di, i) => {
                let child;
                if (objectPool != null)
                    child = objectPool[poolIndex + i];
                else if (di.packageItem) {
                    child = fgui.UIObjectFactory.newObject(di.packageItem);
                    child.packageItem = di.packageItem;
                    child.constructFromResource();
                }
                else
                    child = fgui.UIObjectFactory.newObjectDirectly(di.type);
                child.$inProgressBuilding = true;
                child.setupBeforeAdd(di.desc);
                child.parent = this;
                this.$children.push(child);
            }, this);
            this.relations.setup(xml);
            this.$children.forEach((child, i) => {
                child.relations.setup(displayList[i].desc);
                child.setupAfterAdd(displayList[i].desc);
                child.$inProgressBuilding = false;
            });
            str = xml.attributes.mask;
            if (str) {
                let maskObj = this.getChildById(str).displayObject;
                if (maskObj instanceof PIXI.Graphics || maskObj instanceof PIXI.Sprite)
                    this.mask = maskObj;
                else
                    throw new Error("only PIXI.Sprite or PIXI.Graphics can be applied as mask object");
            }
            col.forEach(cxml => {
                if (cxml.nodeName == "transition") {
                    let trans = new fgui.Transition(this);
                    this.$transitions.push(trans);
                    trans.setup(cxml);
                }
            }, this);
            if (this.$transitions.length > 0) {
                this.on("added", this.$added, this);
                this.on("removed", this.$removed, this);
            }
            this.applyAllControllers();
            this.$buildingDisplayList = false;
            this.$inProgressBuilding = false;
            this.appendChildrenList();
            this.setBoundsChangedFlag();
            this.constructFromXML(xml);
            this.onConstruct();
        }
        appendChildrenList() {
            this.$children.forEach(child => {
                if (child.displayObject != null && child.finalVisible)
                    this.$container.addChild(child.displayObject);
            }, this);
        }
        constructFromXML(xml) {
        }
        $added(d) {
            this.$transitions.forEach(trans => {
                if (trans.autoPlay)
                    trans.play({ times: trans.autoPlayRepeat, delay: trans.autoPlayDelay });
            });
        }
        $removed(d) {
            this.$transitions.forEach(trans => {
                trans.stop(false, false);
            });
        }
    }
    fgui.GComponent = GComponent;
})(fgui || (fgui = {}));

(function (fgui) {
    class GButton extends fgui.GComponent {
        constructor() {
            super();
            this.$mode = 0;
            this.$title = "";
            this.$icon = "";
            this.$pageOption = new fgui.PageOption();
            this.$changeStateOnClick = true;
            this.$downEffect = 0;
            this.$downEffectValue = 0.8;
        }
        setDisplayObject(value) {
            super.setDisplayObject(value);
            this.$displayObject.buttonMode = true;
        }
        get icon() {
            return this.$icon;
        }
        set icon(value) {
            this.$icon = value;
            value = (this.$selected && this.$selectedIcon) ? this.$selectedIcon : this.$icon;
            if (this.$iconObject != null)
                this.$iconObject.icon = value;
            this.updateGear(7);
        }
        get selectedIcon() {
            return this.$selectedIcon;
        }
        set selectedIcon(value) {
            this.$selectedIcon = value;
            value = (this.$selected && this.$selectedIcon) ? this.$selectedIcon : this.$icon;
            if (this.$iconObject != null)
                this.$iconObject.icon = value;
        }
        get title() {
            return this.$title;
        }
        set title(value) {
            this.$title = value;
            if (this.$titleObject)
                this.$titleObject.text = (this.$selected && this.$selectedTitle) ? this.$selectedTitle : this.$title;
            this.updateGear(6);
        }
        get text() {
            return this.title;
        }
        set text(value) {
            this.title = value;
        }
        get selectedTitle() {
            return this.$selectedTitle;
        }
        set selectedTitle(value) {
            this.$selectedTitle = value;
            if (this.$titleObject)
                this.$titleObject.text = (this.$selected && this.$selectedTitle) ? this.$selectedTitle : this.$title;
        }
        get titleColor() {
            if (fgui.isColorableTitle(this.$titleObject))
                return this.$titleObject.titleColor;
            return 0;
        }
        set titleColor(value) {
            if (fgui.isColorableTitle(this.$titleObject))
                this.$titleObject.titleColor = value;
        }
        get fontSize() {
            if (fgui.isColorableTitle(this.$titleObject))
                return this.$titleObject.fontSize;
            return 0;
        }
        set fontSize(value) {
            if (fgui.isColorableTitle(this.$titleObject))
                this.$titleObject.fontSize = value;
        }
        set selected(val) {
            if (this.$mode == 0)
                return;
            if (this.$selected != val) {
                this.$selected = val;
                if (this.grayed && this.$buttonController && this.$buttonController.hasPage(GButton.DISABLED)) {
                    if (this.$selected)
                        this.setState(GButton.SELECTED_DISABLED);
                    else
                        this.setState(GButton.DISABLED);
                }
                else {
                    if (this.$selected)
                        this.setState(this.$over ? GButton.SELECTED_OVER : GButton.DOWN);
                    else
                        this.setState(this.$over ? GButton.OVER : GButton.UP);
                }
                if (this.$selectedTitle && this.$titleObject)
                    this.$titleObject.text = this.$selected ? this.$selectedTitle : this.$title;
                if (this.$selectedIcon) {
                    let str = this.$selected ? this.$selectedIcon : this.$icon;
                    if (this.$iconObject != null)
                        this.$iconObject.icon = str;
                }
                if (this.$relatedController
                    && this.$parent
                    && !this.$parent.$buildingDisplayList) {
                    if (this.$selected) {
                        this.$relatedController.selectedPageId = this.$pageOption.id;
                        if (this.$relatedController.$autoRadioGroupDepth)
                            this.$parent.adjustRadioGroupDepth(this, this.$relatedController);
                    }
                    else if (this.$mode == 1 && this.$relatedController.selectedPageId == this.$pageOption.id)
                        this.$relatedController.oppositePageId = this.$pageOption.id;
                }
            }
        }
        get selected() {
            return this.$selected;
        }
        get mode() {
            return this.$mode;
        }
        set mode(value) {
            if (this.$mode != value) {
                if (value == 0)
                    this.selected = false;
                this.$mode = value;
            }
        }
        get relatedController() {
            return this.$relatedController;
        }
        set relatedController(val) {
            if (val != this.$relatedController) {
                this.$relatedController = val;
                this.$pageOption.controller = val;
                this.$pageOption.clear();
            }
        }
        get pageOption() {
            return this.$pageOption;
        }
        get changeStateOnClick() {
            return this.$changeStateOnClick;
        }
        set changeStateOnClick(value) {
            this.$changeStateOnClick = value;
        }
        get linkedPopup() {
            return this.$linkedPopup;
        }
        set linkedPopup(value) {
            this.$linkedPopup = value;
        }
        addStateListener(listener, thisObj) {
            this.on(fgui.StateChangeEvent.CHANGED, listener, thisObj);
        }
        removeStateListener(listener, thisObj) {
            this.off(fgui.StateChangeEvent.CHANGED, listener, thisObj);
        }
        fireClick(downEffect = true) {
            if (downEffect && this.$mode == 0) {
                this.setState(GButton.OVER);
                fgui.GTimer.inst.add(100, 1, this.setState, this, GButton.DOWN);
                fgui.GTimer.inst.add(200, 1, this.setState, this, GButton.UP);
            }
            this.$click(null);
        }
        setState(val) {
            if (this.$buttonController)
                this.$buttonController.selectedPage = val;
            if (this.$downEffect == 1) {
                if (val == GButton.DOWN || val == GButton.SELECTED_OVER || val == GButton.SELECTED_DISABLED) {
                    let r = this.$downEffectValue * 255;
                    let color = (r << 16) + (r << 8) + r;
                    this.$children.forEach(obj => {
                        if (fgui.isColorGear(obj))
                            obj.color = color;
                    });
                }
                else {
                    this.$children.forEach(obj => {
                        if (fgui.isColorGear(obj))
                            obj.color = 0xffffff;
                    });
                }
            }
            else if (this.$downEffect == 2) {
                if (val == GButton.DOWN || val == GButton.SELECTED_OVER || val == GButton.SELECTED_DISABLED)
                    this.setScale(this.$downEffectValue, this.$downEffectValue);
                else
                    this.setScale(1, 1);
            }
        }
        handleControllerChanged(c) {
            super.handleControllerChanged(c);
            if (this.$relatedController == c)
                this.selected = this.$pageOption.id == c.selectedPageId;
        }
        handleGrayedChanged() {
            if (this.$buttonController && this.$buttonController.hasPage(GButton.DISABLED)) {
                if (this.grayed) {
                    if (this.$selected && this.$buttonController.hasPage(GButton.SELECTED_DISABLED))
                        this.setState(GButton.SELECTED_DISABLED);
                    else
                        this.setState(GButton.DISABLED);
                }
                else if (this.$selected)
                    this.setState(GButton.DOWN);
                else
                    this.setState(GButton.UP);
            }
            else
                super.handleGrayedChanged();
        }
        constructFromXML(xml) {
            super.constructFromXML(xml);
            xml = xml.getChildNodes("Button")[0];
            let str;
            str = xml.attributes.mode;
            if (str)
                this.$mode = fgui.ParseButtonMode(str);
            str = xml.attributes.downEffect;
            if (str) {
                this.$downEffect = str == "dark" ? 1 : (str == "scale" ? 2 : 0);
                str = xml.attributes.downEffectValue;
                this.$downEffectValue = parseFloat(str);
                if (this.$downEffect == 2)
                    this.setPivot(0.5, 0.5);
            }
            this.$buttonController = this.getController("button");
            this.$titleObject = this.getChild("title");
            this.$iconObject = this.getChild("icon");
            if (this.$titleObject != null)
                this.$title = this.$titleObject.text;
            if (this.$iconObject != null)
                this.$icon = this.$iconObject.icon;
            if (this.$mode == 0)
                this.setState(GButton.UP);
            this.on(fgui.InteractiveEvents.Over, this.$rollover, this);
            this.on(fgui.InteractiveEvents.Out, this.$rollout, this);
            this.on(fgui.InteractiveEvents.Down, this.$mousedown, this);
            this.on(fgui.InteractiveEvents.Click, this.$click, this);
        }
        setupAfterAdd(xml) {
            super.setupAfterAdd(xml);
            xml = xml.getChildNodes("Button")[0];
            if (xml) {
                let str;
                str = xml.attributes.title;
                if (str)
                    this.title = str;
                str = xml.attributes.icon;
                if (str)
                    this.icon = str;
                str = xml.attributes.selectedTitle;
                if (str)
                    this.selectedTitle = str;
                str = xml.attributes.selectedIcon;
                if (str)
                    this.selectedIcon = str;
                str = xml.attributes.titleColor;
                if (str)
                    this.titleColor = fgui.utils.StringUtil.convertFromHtmlColor(str);
                str = xml.attributes.titleFontSize;
                if (str)
                    this.fontSize = parseInt(str);
                str = xml.attributes.controller;
                if (str)
                    this.$relatedController = this.$parent.getController(str);
                else
                    this.$relatedController = null;
                str = xml.attributes.sound;
                if (str)
                    this.$clicksound = str;
                else
                    this.$clicksound = null;
                this.$pageOption.id = xml.attributes.page;
                this.selected = xml.attributes.checked == "true";
            }
        }
        $rollover(evt) {
            if (!this.$buttonController || !this.$buttonController.hasPage(GButton.OVER))
                return;
            this.$over = true;
            if (this.$down)
                return;
            this.setState(this.$selected ? GButton.SELECTED_OVER : GButton.OVER);
        }
        $rollout(evt) {
            if (!this.$buttonController || !this.$buttonController.hasPage(GButton.OVER))
                return;
            this.$over = false;
            if (this.$down)
                return;
            this.setState(this.$selected ? GButton.DOWN : GButton.UP);
        }
        $mousedown(evt) {
            this.$down = true;
            fgui.GRoot.inst.on(fgui.InteractiveEvents.Up, this.$mouseup, this);
            if (this.$mode == 0) {
                if (this.grayed && this.$buttonController && this.$buttonController.hasPage(GButton.DISABLED))
                    this.setState(GButton.SELECTED_DISABLED);
                else
                    this.setState(GButton.DOWN);
            }
            if (this.$linkedPopup != null) {
                if (this.$linkedPopup instanceof fgui.Window)
                    this.$linkedPopup.toggleVisible();
                else
                    this.root.togglePopup(this.$linkedPopup, this);
            }
        }
        $mouseup(evt) {
            if (this.$down) {
                fgui.GRoot.inst.off(fgui.InteractiveEvents.Up, this.$mouseup, this);
                this.$down = false;
                if (this.$mode == 0) {
                    if (this.grayed && this.$buttonController && this.$buttonController.hasPage(GButton.DISABLED))
                        this.setState(GButton.DISABLED);
                    else if (this.$over)
                        this.setState(GButton.OVER);
                    else
                        this.setState(GButton.UP);
                }
            }
        }
        $click(evt) {
            if (!this.$changeStateOnClick)
                return;
            if (this.$mode == 1) {
                this.selected = !this.$selected;
                this.emit(fgui.StateChangeEvent.CHANGED, this);
            }
            else if (this.$mode == 2) {
                if (!this.$selected) {
                    this.selected = true;
                    this.emit(fgui.StateChangeEvent.CHANGED, this);
                }
            }
            if (this.$clicksound) {
                var packname = this.packageItem.owner.name;
                var item = fgui.UIPackage.getItemByURL(this.$clicksound);
                if (item) {
                    var resource = fgui.utils.Assets.get(`${packname}@${item.id}`);
                    this.playSound(resource);
                }
            } else if (fgui.UIConfig.defaultButtonSound) {
                this.playSound(fgui.UIConfig.defaultButtonSound);
            }
        }
        playSound(resource) {
            return __awaiter(this, void 0, void 0, function* () {
                if (!!PIXI.sound) {
                    let Sound = PIXI.sound.Sound;
                    if (resource.sound) {
                        resource.play();
                    }
                    else {
                        let sound = Sound.from(resource);
                        sound.play((sound) => sound.destroy());
                    }
                }
            });
        }
        dispose() {
            fgui.GTimer.inst.remove(this.setState, this);
            fgui.GTimer.inst.remove(this.setState, this);
            fgui.GRoot.inst.off(fgui.InteractiveEvents.Up, this.$mouseup, this);
            super.dispose();
        }
    }
    GButton.UP = "up";
    GButton.DOWN = "down";
    GButton.OVER = "over";
    GButton.SELECTED_OVER = "selectedOver";
    GButton.DISABLED = "disabled";
    GButton.SELECTED_DISABLED = "selectedDisabled";
    fgui.GButton = GButton;
})(fgui || (fgui = {}));

(function (fgui) {
    class GComboBox extends fgui.GComponent {
        constructor() {
            super();
            this.$visibleItemCount = 0;
            this.$selectedIndex = 0;
            this.$popupDir = 1;
            this.$visibleItemCount = fgui.UIConfig.defaultComboBoxVisibleItemCount;
            this.$itemsUpdated = true;
            this.$selectedIndex = -1;
            this.$items = [];
            this.$values = [];
        }
        get text() {
            if (this.$titleObject)
                return this.$titleObject.text;
            else
                return null;
        }
        set text(value) {
            if (this.$titleObject)
                this.$titleObject.text = value;
            this.updateGear(6);
        }
        get icon() {
            if (this.$iconObject)
                return this.$iconObject.icon;
            else
                return null;
        }
        set icon(value) {
            if (this.$iconObject)
                this.$iconObject.icon = value;
            this.updateGear(7);
        }
        get titleColor() {
            if (fgui.isColorableTitle(this.$titleObject))
                return this.$titleObject.titleColor;
            return 0;
        }
        set titleColor(value) {
            if (fgui.isColorableTitle(this.$titleObject))
                this.$titleObject.titleColor = value;
        }
        get visibleItemCount() {
            return this.$visibleItemCount;
        }
        set visibleItemCount(value) {
            this.$visibleItemCount = value;
        }
        get popupDirection() {
            return this.$popupDir;
        }
        set popupDirection(value) {
            this.$popupDir = value;
        }
        get items() {
            return this.$items;
        }
        set items(value) {
            if (!value)
                this.$items.length = 0;
            else
                this.$items = value.concat();
            if (this.$items.length > 0) {
                if (this.$selectedIndex >= this.$items.length)
                    this.$selectedIndex = this.$items.length - 1;
                else if (this.$selectedIndex == -1)
                    this.$selectedIndex = 0;
                this.text = this.$items[this.$selectedIndex];
                if (this.$icons != null && this.$selectedIndex < this.$icons.length)
                    this.icon = this.$icons[this.$selectedIndex];
            }
            else {
                this.text = "";
                if (this.$icons != null)
                    this.icon = null;
                this.$selectedIndex = -1;
            }
            this.$itemsUpdated = true;
        }
        get icons() {
            return this.$icons;
        }
        set icons(value) {
            this.$icons = value;
            if (this.$icons != null && this.$selectedIndex != -1 && this.$selectedIndex < this.$icons.length)
                this.icon = this.$icons[this.$selectedIndex];
        }
        get values() {
            return this.$values;
        }
        set values(value) {
            if (!value)
                this.$values.length = 0;
            else
                this.$values = value.concat();
        }
        get selectedIndex() {
            return this.$selectedIndex;
        }
        set selectedIndex(val) {
            if (this.$selectedIndex == val)
                return;
            this.$selectedIndex = val;
            if (this.selectedIndex >= 0 && this.selectedIndex < this.$items.length) {
                this.text = this.$items[this.$selectedIndex];
                if (this.$icons != null && this.$selectedIndex < this.$icons.length)
                    this.icon = this.$icons[this.$selectedIndex];
            }
            else {
                this.text = "";
                if (this.$icons != null)
                    this.icon = null;
            }
        }
        get value() {
            return this.$values[this.$selectedIndex];
        }
        set value(val) {
            this.selectedIndex = this.$values.indexOf(val);
        }
        setState(val) {
            if (this.$buttonController)
                this.$buttonController.selectedPage = val;
        }
        constructFromXML(xml) {
            super.constructFromXML(xml);
            xml = xml.getChildNodes("ComboBox")[0];
            let str;
            this.$buttonController = this.getController("button");
            this.$titleObject = this.getChild("title");
            this.$iconObject = this.getChild("icon");
            str = xml.attributes.dropdown;
            if (str) {
                this.$dropdown = fgui.UIPackage.createObjectFromURL(str);
                if (!this.$dropdown)
                    throw new Error("the 'dropdown' is not specified, it must be a component definied in the package pool");
                this.$dropdown.name = "this.dropdown";
                this.$list = this.$dropdown.getChild("list");
                if (this.$list == null)
                    throw new Error(`${this.resourceURL}: the dropdown component must have a GList child and named 'list'.`);
                this.$list.on(fgui.ListEvent.ItemClick, this.$clickItem, this);
                this.$list.addRelation(this.$dropdown, 14);
                this.$list.removeRelation(this.$dropdown, 15);
                this.$dropdown.addRelation(this.$list, 15);
                this.$dropdown.removeRelation(this.$list, 14);
                this.$dropdown.on("removed", this.$popupWinClosed, this);
            }
            if (!PIXI.utils.isMobile.any) {
                this.on(fgui.InteractiveEvents.Over, this.$rollover, this);
                this.on(fgui.InteractiveEvents.Out, this.$rollout, this);
            }
            this.on(fgui.InteractiveEvents.Down, this.$mousedown, this);
        }
        dispose() {
            fgui.GTimer.inst.remove(this.delayedClickItem, this);
            this.$list.off(fgui.ListEvent.ItemClick, this.$clickItem, this);
            this.$dropdown.off("removed", this.$popupWinClosed, this);
            this.$owner.off(fgui.InteractiveEvents.Up, this.$mouseup, this);
            this.$popupWinClosed(null);
            if (this.$dropdown) {
                this.$dropdown.dispose();
                this.$dropdown = null;
            }
            super.dispose();
        }
        setupAfterAdd(xml) {
            super.setupAfterAdd(xml);
            xml = xml.getChildNodes("ComboBox")[0];
            if (xml) {
                let str;
                str = xml.attributes.titleColor;
                if (str)
                    this.titleColor = fgui.utils.StringUtil.convertFromHtmlColor(str);
                str = xml.attributes.visibleItemCount;
                if (str)
                    this.$visibleItemCount = parseInt(str);
                let col = xml.children;
                if (col) {
                    col.forEach((x, i) => {
                        if (x.nodeName == "item") {
                            this.$items.push(x.attributes.title);
                            this.$values.push(x.attributes.value);
                            str = x.attributes.icon;
                            if (str) {
                                if (!this.$icons)
                                    this.$icons = new Array(length);
                                this.$icons[i] = str;
                            }
                        }
                    });
                }
                str = xml.attributes.title;
                if (str) {
                    this.text = str;
                    this.$selectedIndex = this.$items.indexOf(str);
                }
                else if (this.$items.length > 0) {
                    this.$selectedIndex = 0;
                    this.text = this.$items[0];
                }
                else
                    this.$selectedIndex = -1;
                str = xml.attributes.icon;
                if (str)
                    this.icon = str;
                str = xml.attributes.direction;
                if (str) {
                    if (str == "up")
                        this.$popupDir = 2;
                    else if (str == "auto")
                        this.$popupDir = 0;
                }
            }
        }
        showDropdown() {
            if (this.$itemsUpdated) {
                this.$itemsUpdated = false;
                this.$list.removeChildrenToPool();
                this.$items.forEach((o, i) => {
                    let item = this.$list.addItemFromPool();
                    item.name = i < this.$values.length ? this.$values[i] : "";
                    item.text = this.$items[i];
                    item.icon = (this.$icons != null && i < this.$icons.length) ? this.$icons[i] : null;
                }, this);
                this.$list.resizeToFit(this.$visibleItemCount);
            }
            this.$list.selectedIndex = -1;
            this.$dropdown.width = this.width;
            this.root.togglePopup(this.$dropdown, this, this.$popupDir);
            if (this.$dropdown.parent)
                this.setState(fgui.GButton.DOWN);
        }
        $popupWinClosed(evt) {
            if (this.$over)
                this.setState(fgui.GButton.OVER);
            else
                this.setState(fgui.GButton.UP);
        }
        $clickItem(evt, item) {
            fgui.GTimer.inst.add(100, 1, this.delayedClickItem, this, this.$list.getChildIndex(item));
        }
        delayedClickItem(index) {
            if (this.$dropdown.parent instanceof fgui.GRoot)
                this.$dropdown.parent.hidePopup();
            this.$selectedIndex = index;
            if (this.$selectedIndex >= 0)
                this.text = this.$items[this.$selectedIndex];
            else
                this.text = "";
            this.emit(fgui.StateChangeEvent.CHANGED, this);
        }
        $rollover(evt) {
            this.$over = true;
            if (this.$down || this.$dropdown && this.$dropdown.parent)
                return;
            this.setState(fgui.GButton.OVER);
        }
        $rollout(evt) {
            this.$over = false;
            if (this.$down || this.$dropdown && this.$dropdown.parent)
                return;
            this.setState(fgui.GButton.UP);
        }
        $mousedown(evt) {
            evt.stopPropagation();
            fgui.GRoot.inst.checkPopups(evt.target);
            this.$down = true;
            this.$owner.on(fgui.InteractiveEvents.Up, this.$mouseup, this);
            if (this.$dropdown)
                this.showDropdown();
        }
        $mouseup(evt) {
            if (this.$down) {
                this.$down = false;
                this.$owner.off(fgui.InteractiveEvents.Up, this.$mouseup, this);
                if (this.$dropdown && !this.$dropdown.parent) {
                    if (this.$over)
                        this.setState(fgui.GButton.OVER);
                    else
                        this.setState(fgui.GButton.UP);
                }
            }
        }
    }
    fgui.GComboBox = GComboBox;
})(fgui || (fgui = {}));

(function (fgui) {
    class GGraph extends fgui.GObject {
        constructor() {
            super();
            this.$type = 0;
            this.$lineSize = 0;
            this.$lineColor = 0;
            this.$fillColor = 0;
            this.$lineSize = 1;
            this.$lineAlpha = 1;
            this.$fillAlpha = 1;
            this.$fillColor = 0xFFFFFF;
        }
        drawRect(lineSize, lineColor, lineAlpha, fillColor, fillAlpha, corner = null) {
            this.$type = 1;
            this.$lineSize = lineSize;
            this.$lineColor = lineColor;
            this.$lineAlpha = lineAlpha;
            this.$fillColor = fillColor;
            this.$fillAlpha = fillAlpha;
            this.$corner = corner;
            this.drawGraph();
        }
        drawEllipse(lineSize, lineColor, lineAlpha, fillColor, fillAlpha) {
            this.$type = 2;
            this.$lineSize = lineSize;
            this.$lineColor = lineColor;
            this.$lineAlpha = lineAlpha;
            this.$fillColor = fillColor;
            this.$fillAlpha = fillAlpha;
            this.$corner = null;
            this.drawGraph();
        }
        get color() {
            return this.$fillColor;
        }
        set color(value) {
            this.$fillColor = value;
            if (this.$type != 0)
                this.drawGraph();
        }
        drawGraph() {
            let g = this.$displayObject;
            g.interactive = this.touchable;
            g.clear();
            let w = this.width;
            let h = this.height;
            if (w == 0 || h == 0)
                return;
            if (this.$lineSize == 0)
                g.lineStyle(0, 0, 0);
            else
                g.lineStyle(this.$lineSize, this.$lineColor, this.$lineAlpha);
            g.beginFill(this.$fillColor, this.$fillAlpha);
            if (this.$type == 1) {
                if (this.$corner && this.$corner.length >= 1) {
                    g.drawRoundedRect(0, 0, w, h, this.$corner[0]);
                }
                else
                    g.drawRect(0, 0, w, h);
            }
            else {
                let halfW = w * .5, halfH = h * .5;
                if (w == h)
                    g.drawCircle(halfW, halfW, halfW);
                else
                    g.drawEllipse(halfW, halfH, halfW, halfH);
            }
            g.endFill();
        }
        replaceMe(target) {
            if (!this.$parent)
                throw new Error("parent not set");
            target.name = this.name;
            target.alpha = this.alpha;
            target.rotation = this.rotation;
            target.visible = this.visible;
            target.touchable = this.touchable;
            target.grayed = this.grayed;
            target.setXY(this.x, this.y);
            target.setSize(this.width, this.height);
            let index = this.$parent.getChildIndex(this);
            this.$parent.addChildAt(target, index);
            target.relations.copyFrom(this.relations);
            this.$parent.removeChild(this, true);
        }
        addBeforeMe(target) {
            if (this.$parent == null)
                throw new Error("parent not set");
            let index = this.$parent.getChildIndex(this);
            this.$parent.addChildAt(target, index);
        }
        addAfterMe(target) {
            if (this.$parent == null)
                throw new Error("parent not set");
            let index = this.$parent.getChildIndex(this);
            index++;
            this.$parent.addChildAt(target, index);
        }
        setNativeObject(obj) {
            this.$type = 0;
            let g = this.$displayObject;
            g.interactive = this.touchable;
            g.clear();
            g.removeChildren();
            g.addChild(obj);
        }
        createDisplayObject() {
            this.$displayObject = new fgui.UISprite(this);
        }
        handleSizeChanged() {
            if (this.$type != 0)
                this.drawGraph();
        }
        setupBeforeAdd(xml) {
            super.setupBeforeAdd(xml);
            let type = xml.attributes.type;
            if (type && type != "empty") {
                let str;
                str = xml.attributes.lineSize;
                if (str)
                    this.$lineSize = parseInt(str);
                let c;
                str = xml.attributes.lineColor;
                if (str) {
                    c = fgui.utils.StringUtil.convertFromHtmlColor(str, true);
                    this.$lineColor = c & 0xFFFFFF;
                    this.$lineAlpha = ((c >> 24) & 0xFF) / 0xFF;
                }
                str = xml.attributes.fillColor;
                if (str) {
                    c = fgui.utils.StringUtil.convertFromHtmlColor(str, true);
                    this.$fillColor = c & 0xFFFFFF;
                    this.$fillAlpha = ((c >> 24) & 0xFF) / 0xFF;
                }
                let arr;
                str = xml.attributes.corner;
                if (str) {
                    arr = str.split(",");
                    if (arr.length > 1)
                        this.$corner = [parseInt(arr[0]), parseInt(arr[1]), parseInt(arr[2]), parseInt(arr[3])];
                    else
                        this.$corner = [parseInt(arr[0])];
                }
                if (type == "rect")
                    this.$type = 1;
                else
                    this.$type = 2;
                this.drawGraph();
            }
        }
    }
    fgui.GGraph = GGraph;
})(fgui || (fgui = {}));

(function (fgui) {
    class GGroup extends fgui.GObject {
        createDisplayObject() {
            let c = new fgui.UIContainer(this);
            c.interactive = false;
            this.setDisplayObject(c);
        }
        updateBounds() {
            if (this.$updating || !this.parent)
                return;
            let cnt = this.$parent.numChildren;
            let i = 0;
            let ax = Number.POSITIVE_INFINITY, ay = Number.POSITIVE_INFINITY;
            let ar = Number.NEGATIVE_INFINITY, ab = Number.NEGATIVE_INFINITY;
            this.$empty = true;
            let child;
            let tmp = 0;
            for (i = 0; i < cnt; i++) {
                child = this.$parent.getChildAt(i);
                if (child.group == this) {
                    tmp = child.x;
                    if (tmp < ax)
                        ax = tmp;
                    tmp = child.y;
                    if (tmp < ay)
                        ay = tmp;
                    tmp = child.x + child.width;
                    if (tmp > ar)
                        ar = tmp;
                    tmp = child.y + child.height;
                    if (tmp > ab)
                        ab = tmp;
                    this.$empty = false;
                }
            }
            this.$updating = true;
            if (!this.$empty) {
                this.setXY(ax, ay);
                this.setSize(ar - ax, ab - ay);
            }
            else
                this.setSize(0, 0);
            this.$updating = false;
        }
        setXY(xv, yv) {
            if (this.$x != xv || this.$y != yv) {
                let dx = xv - this.$x;
                let dy = yv - this.$y;
                super.setXY(xv, yv);
                this.moveChildren(dx, dy);
            }
        }
        moveChildren(dx, dy) {
            if (this.$updating || !this.$parent)
                return;
            this.$updating = true;
            let cnt = this.$parent.numChildren;
            let i = 0;
            let child;
            for (i = 0; i < cnt; i++) {
                child = this.$parent.getChildAt(i);
                if (child.group == this) {
                    child.setXY(child.x + dx, child.y + dy);
                }
            }
            this.$updating = false;
        }
        updateAlpha() {
            super.updateAlpha();
            if (this.$inProgressBuilding)
                return;
            let cnt = this.$parent.numChildren;
            let i;
            let child;
            for (i = 0; i < cnt; i++) {
                child = this.$parent.getChildAt(i);
                if (child.group == this)
                    child.alpha = this.alpha;
            }
        }
    }
    fgui.GGroup = GGroup;
})(fgui || (fgui = {}));

(function (fgui) {
    class GImage extends fgui.GObject {
        constructor() {
            super();
        }
        get touchable() {
            return false;
        }
        set touchable(value) {
            this.$touchable = false;
        }
        get color() {
            return this.$content.tint;
        }
        set color(value) {
            if (this.color != value) {
                this.updateGear(4);
                this.$content.tint = value;
            }
        }
        get flip() {
            return this.$flip;
        }
        set flip(value) {
            if (this.$flip != value) {
                this.$flip = value;
                let sx = false, sy = false;
                if (this.$flip == 1 || this.$flip == 3)
                    sx = true;
                if (this.$flip == 2 || this.$flip == 3)
                    sy = true;
                this.$content.flipX = sx;
                this.$content.flipY = sy;
            }
        }
        get texture() {
            return this.$content.texture;
        }
        set texture(value) {
            if (value != null) {
                this.$sourceWidth = value.orig.width;
                this.$sourceHeight = value.orig.height;
            }
            else
                this.$sourceWidth = this.$sourceHeight = 0;
            this.$initWidth = this.$sourceWidth;
            this.$initHeight = this.$sourceHeight;
            this.$content.texture = value;
        }
        createDisplayObject() {
            this.$content = new fgui.UIImage(this);
            this.setDisplayObject(this.$content);
        }
        dispose() {
            this.$content.destroy();
            super.dispose();
        }
        constructFromResource() {
            this.$sourceWidth = this.packageItem.width;
            this.$sourceHeight = this.packageItem.height;
            this.$initWidth = this.$sourceWidth;
            this.$initHeight = this.$sourceHeight;
            this.$content.$initDisp(this.packageItem);
            this.setSize(this.$sourceWidth, this.$sourceHeight);
        }
        handleXYChanged() {
            super.handleXYChanged();
            if (this.$flip != 0) {
                if (this.$content.scale.x == -1)
                    this.$content.x += this.width;
                if (this.$content.scale.y == -1)
                    this.$content.y += this.height;
            }
        }
        handleSizeChanged() {
            this.$content.width = this.width;
            this.$content.height = this.height;
        }
        setupBeforeAdd(xml) {
            super.setupBeforeAdd(xml);
            let str;
            str = xml.attributes.color;
            if (str)
                this.color = fgui.utils.StringUtil.convertFromHtmlColor(str);
            str = xml.attributes.flip;
            if (str)
                this.flip = fgui.ParseFlipType(str);
        }
    }
    fgui.GImage = GImage;
})(fgui || (fgui = {}));

(function (fgui) {
    class GLabel extends fgui.GComponent {
        constructor() {
            super();
        }
        get icon() {
            if (this.$iconObject != null)
                return this.$iconObject.icon;
            return null;
        }
        set icon(value) {
            if (this.$iconObject != null)
                this.$iconObject.icon = value;
            this.updateGear(7);
        }
        get title() {
            if (this.$titleObject)
                return this.$titleObject.text;
            else
                return null;
        }
        set title(value) {
            if (this.$titleObject)
                this.$titleObject.text = value;
            this.updateGear(6);
        }
        get text() {
            return this.title;
        }
        set text(value) {
            this.title = value;
        }
        get titleColor() {
            if (fgui.isColorableTitle(this.$titleObject))
                return this.$titleObject.titleColor;
            return 0;
        }
        set titleColor(value) {
            if (fgui.isColorableTitle(this.$titleObject))
                this.$titleObject.titleColor = value;
        }
        get fontSize() {
            if (fgui.isColorableTitle(this.$titleObject))
                return this.$titleObject.fontSize;
            return 0;
        }
        set fontSize(value) {
            if (fgui.isColorableTitle(this.$titleObject))
                this.$titleObject.fontSize = value;
        }
        set editable(val) {
            if (this.$titleObject)
                this.$titleObject.editable = val;
        }
        get editable() {
            if (this.$titleObject && (this.$titleObject instanceof fgui.GTextInput))
                return this.$titleObject.editable;
            else
                return false;
        }
        constructFromXML(xml) {
            super.constructFromXML(xml);
            this.$titleObject = this.getChild("title");
            this.$iconObject = this.getChild("icon");
        }
        setupAfterAdd(xml) {
            super.setupAfterAdd(xml);
            let cs = xml.getChildNodes("Label");
            if (cs && cs.length > 0) {
                xml = cs[0];
                let str;
                str = xml.attributes.title;
                if (str)
                    this.text = str;
                str = xml.attributes.icon;
                if (str)
                    this.icon = str;
                str = xml.attributes.titleColor;
                if (str)
                    this.titleColor = fgui.utils.StringUtil.convertFromHtmlColor(str);
                if (this.$titleObject instanceof fgui.GTextInput) {
                    str = xml.attributes.prompt;
                    let ti = this.$titleObject;
                    if (str)
                        ti.promptText = str;
                    str = xml.attributes.maxLength;
                    if (str)
                        ti.maxLength = parseInt(str);
                    str = xml.attributes.restrict;
                    if (str)
                        ti.restrict = str;
                    str = xml.attributes.password;
                    if (str)
                        ti.password = str == "true";
                }
            }
        }
    }
    fgui.GLabel = GLabel;
})(fgui || (fgui = {}));

(function (fgui) {
    ;
    class ItemInfo {
        constructor() {
            this.width = 0;
            this.height = 0;
            this.updateFlag = 0;
            this.selected = false;
        }
    }
    class GList extends fgui.GComponent {
        constructor() {
            super();
            this.$lineCount = 0;
            this.$columnCount = 0;
            this.$lineGap = 0;
            this.$columnGap = 0;
            this.$lastSelectedIndex = 0;
            this.$numItems = 0;
            this.$firstIndex = 0;
            this.$curLineItemCount = 0;
            this.$virtualListChanged = 0;
            this.$apexIndex = 0;
            this.$childrenRenderOrder = 0;
            this.$itemInfoVer = 0;
            this.$enterCounter = 0;
            this.$trackBounds = true;
            this.$pool = new fgui.utils.GObjectRecycler();
            this.$layout = 0;
            this.$autoResizeItem = true;
            this.$lastSelectedIndex = -1;
            this.$selectionMode = 0;
            this.opaque = true;
            this.scrollItemToViewOnClick = true;
            this.$align = "left";
            this.$verticalAlign = 0;
            this.$container = new fgui.UIContainer();
            this.$rootContainer.addChild(this.$container);
        }
        get childrenRenderOrder() {
            return this.$childrenRenderOrder;
        }
        set childrenRenderOrder(value) {
            if (this.$childrenRenderOrder != value) {
                this.$childrenRenderOrder = value;
                this.appendChildrenList();
            }
        }
        get apexIndex() {
            return this.$apexIndex;
        }
        set apexIndex(value) {
            if (this.$apexIndex != value) {
                this.$apexIndex = value;
                if (this.$childrenRenderOrder == 2)
                    this.appendChildrenList();
            }
        }
        appendChildrenList() {
            const cnt = this.$children.length;
            if (cnt == 0)
                return;
            let i;
            let child;
            switch (this.$childrenRenderOrder) {
                case 0:
                    {
                        for (i = 0; i < cnt; i++) {
                            child = this.$children[i];
                            if (child.displayObject != null && child.finalVisible)
                                this.$container.addChild(child.displayObject);
                        }
                    }
                    break;
                case 1:
                    {
                        for (i = cnt - 1; i >= 0; i--) {
                            child = this.$children[i];
                            if (child.displayObject != null && child.finalVisible)
                                this.$container.addChild(child.displayObject);
                        }
                    }
                    break;
                case 2:
                    {
                        for (i = 0; i < this.$apexIndex; i++) {
                            child = this.$children[i];
                            if (child.displayObject != null && child.finalVisible)
                                this.$container.addChild(child.displayObject);
                        }
                        for (i = cnt - 1; i >= this.$apexIndex; i--) {
                            child = this.$children[i];
                            if (child.displayObject != null && child.finalVisible)
                                this.$container.addChild(child.displayObject);
                        }
                    }
                    break;
            }
        }
        setXY(xv, yv) {
            if (this.$x != xv || this.$y != yv) {
                this.$x = xv;
                this.$y = yv;
                this.handleXYChanged();
                this.updateGear(1);
                if (fgui.GObject.draggingObject == this && !fgui.GObject.sUpdatingWhileDragging)
                    this.localToGlobalRect(0, 0, this.width, this.height, fgui.GObject.sGlobalRect);
            }
        }
        $setChildIndex(child, oldIndex, index = 0) {
            let cnt = this.$children.length;
            if (index > cnt)
                index = cnt;
            if (oldIndex == index)
                return oldIndex;
            this.$children.splice(oldIndex, 1);
            this.$children.splice(index, 0, child);
            if (child.inContainer) {
                let displayIndex = 0;
                let g;
                let i;
                if (this.$childrenRenderOrder == 0) {
                    for (i = 0; i < index; i++) {
                        g = this.$children[i];
                        if (g.inContainer)
                            displayIndex++;
                    }
                    if (displayIndex == this.$container.children.length)
                        displayIndex--;
                    this.$container.setChildIndex(child.displayObject, displayIndex);
                }
                else if (this.$childrenRenderOrder == 1) {
                    for (i = cnt - 1; i > index; i--) {
                        g = this.$children[i];
                        if (g.inContainer)
                            displayIndex++;
                    }
                    if (displayIndex == this.$container.children.length)
                        displayIndex--;
                    this.$container.setChildIndex(child.displayObject, displayIndex);
                }
                else
                    fgui.GTimer.inst.callLater(this.appendChildrenList, this);
                this.setBoundsChangedFlag();
            }
            return index;
        }
        childStateChanged(child) {
            if (this.$buildingDisplayList)
                return;
            if (child instanceof fgui.GGroup) {
                this.$children.forEach(g => {
                    if (g.group == child)
                        this.childStateChanged(g);
                }, this);
                return;
            }
            if (!child.displayObject)
                return;
            if (child.finalVisible) {
                let i, g;
                let cnt = this.$children.length;
                if (!child.displayObject.parent) {
                    let index = 0;
                    if (this.$childrenRenderOrder == 0) {
                        for (let i = 0; i < cnt; i++) {
                            g = this.$children[i];
                            if (g == child)
                                break;
                            if (g.displayObject != null && g.displayObject.parent != null)
                                index++;
                        }
                        this.$container.addChildAt(child.displayObject, index);
                    }
                    else if (this.$childrenRenderOrder == 1) {
                        for (i = cnt - 1; i >= 0; i--) {
                            g = this.$children[i];
                            if (g == child)
                                break;
                            if (g.displayObject != null && g.displayObject.parent != null)
                                index++;
                        }
                        this.$container.addChildAt(child.displayObject, index);
                    }
                    else {
                        this.$container.addChild(child.displayObject);
                        fgui.GTimer.inst.callLater(this.appendChildrenList, this);
                    }
                }
            }
            else {
                if (child.displayObject.parent)
                    this.$container.removeChild(child.displayObject);
            }
        }
        dispose() {
            fgui.GTimer.inst.remove(this.$refreshVirtualList, this);
            this.$pool.clear();
            if (this.$scrollPane)
                this.$scrollPane.off(fgui.ScrollEvent.SCROLL, this.$scrolled, this);
            super.dispose();
        }
        get layout() {
            return this.$layout;
        }
        set layout(value) {
            if (this.$layout != value) {
                this.$layout = value;
                this.setBoundsChangedFlag();
                if (this.$virtual)
                    this.setVirtualListChangedFlag(true);
            }
        }
        get lineCount() {
            return this.$lineCount;
        }
        set lineCount(value) {
            if (this.$lineCount != value) {
                this.$lineCount = value;
                if (this.$layout == 3 || this.$layout == 4) {
                    this.setBoundsChangedFlag();
                    if (this.$virtual)
                        this.setVirtualListChangedFlag(true);
                }
            }
        }
        get columnCount() {
            return this.$columnCount;
        }
        set columnCount(value) {
            if (this.$columnCount != value) {
                this.$columnCount = value;
                if (this.$layout == 2 || this.$layout == 4) {
                    this.setBoundsChangedFlag();
                    if (this.$virtual)
                        this.setVirtualListChangedFlag(true);
                }
            }
        }
        get lineGap() {
            return this.$lineGap;
        }
        set lineGap(value) {
            if (this.$lineGap != value) {
                this.$lineGap = value;
                this.setBoundsChangedFlag();
                if (this.$virtual)
                    this.setVirtualListChangedFlag(true);
            }
        }
        get columnGap() {
            return this.$columnGap;
        }
        set columnGap(value) {
            if (this.$columnGap != value) {
                this.$columnGap = value;
                this.setBoundsChangedFlag();
                if (this.$virtual)
                    this.setVirtualListChangedFlag(true);
            }
        }
        get align() {
            return this.$align;
        }
        set align(value) {
            if (this.$align != value) {
                this.$align = value;
                this.setBoundsChangedFlag();
                if (this.$virtual)
                    this.setVirtualListChangedFlag(true);
            }
        }
        get verticalAlign() {
            return this.$verticalAlign;
        }
        set verticalAlign(value) {
            if (this.$verticalAlign != value) {
                this.$verticalAlign = value;
                this.setBoundsChangedFlag();
                if (this.$virtual)
                    this.setVirtualListChangedFlag(true);
            }
        }
        get virtualItemSize() {
            return this.$itemSize;
        }
        set virtualItemSize(value) {
            if (this.$virtual) {
                if (this.$itemSize == null)
                    this.$itemSize = new PIXI.Point();
                this.$itemSize.copyFrom(value);
                this.setVirtualListChangedFlag(true);
            }
        }
        get defaultItem() {
            return this.$defaultItem;
        }
        set defaultItem(val) {
            this.$defaultItem = val;
        }
        get autoResizeItem() {
            return this.$autoResizeItem;
        }
        set autoResizeItem(value) {
            if (this.$autoResizeItem != value) {
                this.$autoResizeItem = value;
                this.setBoundsChangedFlag();
                if (this.$virtual)
                    this.setVirtualListChangedFlag(true);
            }
        }
        get selectionMode() {
            return this.$selectionMode;
        }
        set selectionMode(value) {
            this.$selectionMode = value;
        }
        get selectionController() {
            return this.$selectionController;
        }
        set selectionController(value) {
            this.$selectionController = value;
        }
        get itemPool() {
            return this.$pool;
        }
        getFromPool(url = null) {
            if (!url)
                url = this.$defaultItem;
            let obj = this.$pool.get(url);
            if (obj != null)
                obj.visible = true;
            return obj;
        }
        returnToPool(obj) {
            this.$pool.recycle(obj.resourceURL, obj);
        }
        addChildAt(child, index = 0) {
            super.addChildAt(child, index);
            if (child instanceof fgui.GButton) {
                child.selected = false;
                child.changeStateOnClick = false;
            }
            child.click(this.$clickItem, this);
            return child;
        }
        addItem(url = null) {
            if (!url)
                url = this.$defaultItem;
            return this.addChild(fgui.UIPackage.createObjectFromURL(url));
        }
        addItemFromPool(url = null) {
            return this.addChild(this.getFromPool(url));
        }
        removeChildAt(index, dispose = false) {
            if (index >= 0 && index < this.numChildren) {
                let child = this.$children[index];
                if (!child) debugger
                child.parent = null;
                if (child.sortingOrder != 0)
                    this.$sortingChildCount--;
                this.$children.splice(index, 1);
                if (child.inContainer) {
                    this.$container.removeChild(child.displayObject);
                    if (this.$childrenRenderOrder == 2)
                        fgui.GTimer.inst.callLater(this.appendChildrenList, this);
                }
                if (dispose === true)
                    child.dispose();
                this.setBoundsChangedFlag();
                child.removeClick(this.$clickItem, this);
                return child;
            }
            else
                throw new Error("Invalid child index");
        }
        removeChildToPoolAt(index) {
            let child = this.removeChildAt(index);
            this.returnToPool(child);
        }
        removeChildToPool(child) {
            super.removeChild(child);
            this.returnToPool(child);
        }
        removeChildrenToPool(beginIndex = 0, endIndex = -1) {
            if (endIndex < 0 || endIndex >= this.$children.length)
                endIndex = this.$children.length - 1;
            for (let i = beginIndex; i <= endIndex; ++i)
                this.removeChildToPoolAt(beginIndex);
        }
        get selectedIndex() {
            let i;
            if (this.$virtual) {
                for (i = 0; i < this.$realNumItems; i++) {
                    const ii = this.$virtualItems[i];
                    if ((ii.obj instanceof fgui.GButton && ii.obj.selected) || (ii.obj == null && ii.selected)) {
                        if (this.$loop)
                            return i % this.$numItems;
                        else
                            return i;
                    }
                }
            }
            else {
                const cnt = this.$children.length;
                for (i = 0; i < cnt; i++) {
                    const obj = this.$children[i];
                    if (obj != null && obj.selected)
                        return i;
                }
            }
            return -1;
        }
        set selectedIndex(value) {
            if (value >= 0 && value < this.numItems) {
                if (this.selectionMode != 0)
                    this.clearSelection();
                this.addSelection(value);
            }
            else
                this.clearSelection();
        }
        getSelection() {
            let ret = [];
            let i;
            if (this.$virtual) {
                for (i = 0; i < this.$realNumItems; i++) {
                    const ii = this.$virtualItems[i];
                    if ((ii.obj instanceof fgui.GButton && ii.obj.selected) || (ii.obj == null && ii.selected)) {
                        let j = i;
                        if (this.$loop) {
                            j = i % this.$numItems;
                            if (ret.indexOf(j) != -1)
                                continue;
                        }
                        ret.push(j);
                    }
                }
            }
            else {
                const cnt = this.$children.length;
                for (i = 0; i < cnt; i++) {
                    const obj = this.$children[i];
                    if (obj != null && obj.selected)
                        ret.push(i);
                }
            }
            return ret;
        }
        addSelection(index, scrollIntoView = false) {
            if (this.$selectionMode == 3)
                return;
            this.checkVirtualList();
            if (this.$selectionMode == 0)
                this.clearSelection();
            if (scrollIntoView)
                this.scrollToView(index);
            this.$lastSelectedIndex = index;
            let obj = null;
            if (this.$virtual) {
                const ii = this.$virtualItems[index];
                if (ii.obj != null)
                    obj = ii.obj;
                ii.selected = true;
            }
            else
                obj = this.getChildAt(index);
            if (obj != null && !obj.selected) {
                obj.selected = true;
                this.updateSelectionController(index);
            }
        }
        removeSelection(index) {
            if (this.$selectionMode == 3)
                return;
            let obj = null;
            if (this.$virtual) {
                const ii = this.$virtualItems[index];
                if (ii.obj != null)
                    obj = ii.obj;
                ii.selected = false;
            }
            else
                obj = this.getChildAt(index);
            if (obj != null)
                obj.selected = false;
        }
        clearSelection() {
            let i;
            if (this.$virtual) {
                for (i = 0; i < this.$realNumItems; i++) {
                    const ii = this.$virtualItems[i];
                    if (ii.obj instanceof fgui.GButton)
                        ii.obj.selected = false;
                    ii.selected = false;
                }
            }
            else {
                const cnt = this.$children.length;
                for (i = 0; i < cnt; i++) {
                    const obj = this.$children[i];
                    if (obj != null)
                        obj.selected = false;
                }
            }
        }
        clearSelectionExcept(g) {
            let i;
            if (this.$virtual) {
                for (i = 0; i < this.$realNumItems; i++) {
                    const ii = this.$virtualItems[i];
                    if (ii.obj != g) {
                        if (ii.obj instanceof fgui.GButton)
                            ii.obj.selected = false;
                        ii.selected = false;
                    }
                }
            }
            else {
                const cnt = this.$children.length;
                for (i = 0; i < cnt; i++) {
                    const obj = this.$children[i];
                    if (obj != null && obj != g)
                        obj.selected = false;
                }
            }
        }
        selectAll() {
            this.checkVirtualList();
            let last = -1;
            let i;
            if (this.$virtual) {
                for (i = 0; i < this.$realNumItems; i++) {
                    const ii = this.$virtualItems[i];
                    if (ii.obj instanceof fgui.GButton && !ii.obj.selected) {
                        ii.obj.selected = true;
                        last = i;
                    }
                    ii.selected = true;
                }
            }
            else {
                const cnt = this.$children.length;
                for (i = 0; i < cnt; i++) {
                    const obj = this.$children[i];
                    if (obj != null && !obj.selected) {
                        obj.selected = true;
                        last = i;
                    }
                }
            }
            if (last != -1)
                this.updateSelectionController(last);
        }
        selectNone() {
            this.clearSelection();
        }
        selectReverse() {
            this.checkVirtualList();
            let last = -1;
            let i;
            if (this.$virtual) {
                for (i = 0; i < this.$realNumItems; i++) {
                    const ii = this.$virtualItems[i];
                    if (ii.obj instanceof fgui.GButton) {
                        ii.obj.selected = !ii.obj.selected;
                        if (ii.obj.selected)
                            last = i;
                    }
                    ii.selected = !ii.selected;
                }
            }
            else {
                const cnt = this.$children.length;
                for (i = 0; i < cnt; i++) {
                    const obj = this.$children[i];
                    if (obj != null) {
                        obj.selected = !obj.selected;
                        if (obj.selected)
                            last = i;
                    }
                }
            }
            if (last != -1)
                this.updateSelectionController(last);
        }
        handleArrowKey(key) {
            let index = this.selectedIndex;
            if (index == -1)
                return;
            let current;
            let k, i;
            let obj;
            switch (key) {
                case 38:
                    if (this.$layout == 0 || this.$layout == 3) {
                        index--;
                        if (index >= 0) {
                            this.clearSelection();
                            this.addSelection(index, true);
                        }
                    }
                    else if (this.$layout == 2 || this.$layout == 4) {
                        current = this.$children[index];
                        k = 0;
                        for (i = index - 1; i >= 0; i--) {
                            obj = this.$children[i];
                            if (obj.y != current.y) {
                                current = obj;
                                break;
                            }
                            k++;
                        }
                        for (; i >= 0; i--) {
                            obj = this.$children[i];
                            if (obj.y != current.y) {
                                this.clearSelection();
                                this.addSelection(i + k + 1, true);
                                break;
                            }
                        }
                    }
                    break;
                case 39:
                    if (this.$layout == 1 || this.$layout == 2 || this.$layout == 4) {
                        index++;
                        if (index < this.$children.length) {
                            this.clearSelection();
                            this.addSelection(index, true);
                        }
                    }
                    else if (this.$layout == 3) {
                        current = this.$children[index];
                        k = 0;
                        const cnt = this.$children.length;
                        for (i = index + 1; i < cnt; i++) {
                            obj = this.$children[i];
                            if (obj.x != current.x) {
                                current = obj;
                                break;
                            }
                            k++;
                        }
                        for (; i < cnt; i++) {
                            obj = this.$children[i];
                            if (obj.x != current.x) {
                                this.clearSelection();
                                this.addSelection(i - k - 1, true);
                                break;
                            }
                        }
                    }
                    break;
                case 40:
                    if (this.$layout == 0 || this.$layout == 3) {
                        index++;
                        if (index < this.$children.length) {
                            this.clearSelection();
                            this.addSelection(index, true);
                        }
                    }
                    else if (this.$layout == 2 || this.$layout == 4) {
                        current = this.$children[index];
                        k = 0;
                        const cnt = this.$children.length;
                        for (i = index + 1; i < cnt; i++) {
                            obj = this.$children[i];
                            if (obj.y != current.y) {
                                current = obj;
                                break;
                            }
                            k++;
                        }
                        for (; i < cnt; i++) {
                            obj = this.$children[i];
                            if (obj.y != current.y) {
                                this.clearSelection();
                                this.addSelection(i - k - 1, true);
                                break;
                            }
                        }
                    }
                    break;
                case 37:
                    if (this.$layout == 1 || this.$layout == 2 || this.$layout == 4) {
                        index--;
                        if (index >= 0) {
                            this.clearSelection();
                            this.addSelection(index, true);
                        }
                    }
                    else if (this.$layout == 3) {
                        current = this.$children[index];
                        k = 0;
                        for (i = index - 1; i >= 0; i--) {
                            obj = this.$children[i];
                            if (obj.x != current.x) {
                                current = obj;
                                break;
                            }
                            k++;
                        }
                        for (; i >= 0; i--) {
                            obj = this.$children[i];
                            if (obj.x != current.x) {
                                this.clearSelection();
                                this.addSelection(i + k + 1, true);
                                break;
                            }
                        }
                    }
                    break;
            }
        }
        $clickItem(evt) {
            if (this.$scrollPane != null && this.$scrollPane.isDragging)
                return;
            const item = fgui.GObject.castFromNativeObject(evt.currentTarget);
            if (!item)
                return;
            this.setSelectionOnEvent(item);
            if (this.$scrollPane && this.scrollItemToViewOnClick)
                this.$scrollPane.scrollToView(item, true);
            this.emit(fgui.ListEvent.ItemClick, evt, item);
        }
        setSelectionOnEvent(button) {
            if (!(button instanceof fgui.GButton) || this.$selectionMode == 3)
                return;
            let dontChangeLastIndex = false;
            let index = this.childIndexToItemIndex(this.getChildIndex(button));
            if (this.$selectionMode == 0) {
                if (!button.selected) {
                    this.clearSelectionExcept(button);
                    button.selected = true;
                }
            }
            else {
                if (fgui.utils.DOMEventManager.inst.isKeyPressed(16)) {
                    if (!button.selected) {
                        if (this.$lastSelectedIndex != -1) {
                            const min = Math.min(this.$lastSelectedIndex, index);
                            const max = Math.min(Math.max(this.$lastSelectedIndex, index), this.numItems - 1);
                            let i;
                            if (this.$virtual) {
                                for (i = min; i <= max; i++) {
                                    const ii = this.$virtualItems[i];
                                    if (ii.obj instanceof fgui.GButton)
                                        ii.obj.selected = true;
                                    ii.selected = true;
                                }
                            }
                            else {
                                for (i = min; i <= max; i++) {
                                    const obj = this.getChildAt(i);
                                    if (obj != null)
                                        obj.selected = true;
                                }
                            }
                            dontChangeLastIndex = true;
                        }
                        else
                            button.selected = true;
                    }
                }
                else if (fgui.utils.DOMEventManager.inst.isKeyPressed(17) || this.$selectionMode == 2)
                    button.selected = !button.selected;
                else {
                    if (!button.selected) {
                        this.clearSelectionExcept(button);
                        button.selected = true;
                    }
                    else
                        this.clearSelectionExcept(button);
                }
            }
            if (!dontChangeLastIndex)
                this.$lastSelectedIndex = index;
            if (button.selected)
                this.updateSelectionController(index);
        }
        resizeToFit(itemCount = 1000000, minSize = 0) {
            this.ensureBoundsCorrect();
            const curCount = this.numItems;
            if (itemCount > curCount)
                itemCount = curCount;
            if (this.$virtual) {
                const lineCount = Math.ceil(itemCount / this.$curLineItemCount);
                if (this.$layout == 0 || this.$layout == 2)
                    this.viewHeight = lineCount * this.$itemSize.y + Math.max(0, lineCount - 1) * this.$lineGap;
                else
                    this.viewWidth = lineCount * this.$itemSize.x + Math.max(0, lineCount - 1) * this.$columnGap;
            }
            else if (itemCount == 0) {
                if (this.$layout == 0 || this.$layout == 2)
                    this.viewHeight = minSize;
                else
                    this.viewWidth = minSize;
            }
            else {
                let i = itemCount - 1;
                let obj;
                while (i >= 0) {
                    obj = this.getChildAt(i);
                    if (!this.foldInvisibleItems || obj.visible)
                        break;
                    i--;
                }
                if (i < 0) {
                    if (this.$layout == 0 || this.$layout == 2)
                        this.viewHeight = minSize;
                    else
                        this.viewWidth = minSize;
                }
                else {
                    let size = 0;
                    if (this.$layout == 0 || this.$layout == 2) {
                        size = obj.y + obj.height;
                        if (size < minSize)
                            size = minSize;
                        this.viewHeight = size;
                    }
                    else {
                        size = obj.x + obj.width;
                        if (size < minSize)
                            size = minSize;
                        this.viewWidth = size;
                    }
                }
            }
        }
        getMaxItemWidth() {
            const cnt = this.$children.length;
            let max = 0;
            for (let i = 0; i < cnt; i++) {
                const child = this.getChildAt(i);
                if (child.width > max)
                    max = child.width;
            }
            return max;
        }
        handleSizeChanged() {
            super.handleSizeChanged();
            this.setBoundsChangedFlag();
            if (this.$virtual)
                this.setVirtualListChangedFlag(true);
        }
        handleControllerChanged(c) {
            super.handleControllerChanged(c);
            if (this.$selectionController == c)
                this.selectedIndex = c.selectedIndex;
        }
        updateSelectionController(index) {
            if (this.$selectionController != null && !this.$selectionController.$updating
                && index < this.$selectionController.pageCount) {
                const c = this.$selectionController;
                this.$selectionController = null;
                c.selectedIndex = index;
                this.$selectionController = c;
            }
        }
        getSnappingPosition(xValue, yValue, resultPoint = null) {
            if (this.$virtual) {
                if (!resultPoint)
                    resultPoint = new PIXI.Point();
                let saved;
                let index;
                if (this.$layout == 0 || this.$layout == 2) {
                    saved = yValue;
                    GList.$lastPosHelper = yValue;
                    index = this.getIndexOnPos1(false);
                    yValue = GList.$lastPosHelper;
                    if (index < this.$virtualItems.length && saved - yValue > this.$virtualItems[index].height / 2 && index < this.$realNumItems)
                        yValue += this.$virtualItems[index].height + this.$lineGap;
                }
                else if (this.$layout == 1 || this.$layout == 3) {
                    saved = xValue;
                    GList.$lastPosHelper = xValue;
                    index = this.getIndexOnPos2(false);
                    xValue = GList.$lastPosHelper;
                    if (index < this.$virtualItems.length && saved - xValue > this.$virtualItems[index].width / 2 && index < this.$realNumItems)
                        xValue += this.$virtualItems[index].width + this.$columnGap;
                }
                else {
                    saved = xValue;
                    GList.$lastPosHelper = xValue;
                    index = this.getIndexOnPos3(false);
                    xValue = GList.$lastPosHelper;
                    if (index < this.$virtualItems.length && saved - xValue > this.$virtualItems[index].width / 2 && index < this.$realNumItems)
                        xValue += this.$virtualItems[index].width + this.$columnGap;
                }
                resultPoint.x = xValue;
                resultPoint.y = yValue;
                return resultPoint;
            }
            else
                return super.getSnappingPosition(xValue, yValue, resultPoint);
        }
        scrollToView(index, ani = false, snapToFirst = false) {
            if (this.$virtual) {
                if (this.$numItems == 0)
                    return;
                this.checkVirtualList();
                if (index >= this.$virtualItems.length)
                    throw new Error(`Invalid child index: ${index} is larger than max length: ${this.$virtualItems.length}`);
                if (this.$loop)
                    index = Math.floor(this.$firstIndex / this.$numItems) * this.$numItems + index;
                let rect;
                const ii = this.$virtualItems[index];
                let pos = 0;
                let i;
                if (this.$layout == 0 || this.$layout == 2) {
                    for (i = 0; i < index; i += this.$curLineItemCount)
                        pos += this.$virtualItems[i].height + this.$lineGap;
                    rect = new PIXI.Rectangle(0, pos, this.$itemSize.x, ii.height);
                }
                else if (this.$layout == 1 || this.$layout == 3) {
                    for (i = 0; i < index; i += this.$curLineItemCount)
                        pos += this.$virtualItems[i].width + this.$columnGap;
                    rect = new PIXI.Rectangle(pos, 0, ii.width, this.$itemSize.y);
                }
                else {
                    const page = index / (this.$curLineItemCount * this.$curLineItemCount2);
                    rect = new PIXI.Rectangle(page * this.viewWidth + (index % this.$curLineItemCount) * (ii.width + this.$columnGap), (index / this.$curLineItemCount) % this.$curLineItemCount2 * (ii.height + this.$lineGap), ii.width, ii.height);
                }
                snapToFirst = true;
                if (this.$scrollPane != null)
                    this.$scrollPane.scrollToView(rect, ani, snapToFirst);
            }
            else {
                const obj = this.getChildAt(index);
                if (this.$scrollPane != null)
                    this.$scrollPane.scrollToView(obj, ani, snapToFirst);
                else if (this.parent != null && this.parent.scrollPane != null)
                    this.parent.scrollPane.scrollToView(obj, ani, snapToFirst);
            }
        }
        getFirstChildInView() {
            return this.childIndexToItemIndex(super.getFirstChildInView());
        }
        childIndexToItemIndex(index) {
            if (!this.$virtual)
                return index;
            if (this.$layout == 4) {
                for (let i = this.$firstIndex; i < this.$realNumItems; i++) {
                    if (this.$virtualItems[i].obj != null) {
                        index--;
                        if (index < 0)
                            return i;
                    }
                }
                return index;
            }
            else {
                index += this.$firstIndex;
                if (this.$loop && this.$numItems > 0)
                    index = index % this.$numItems;
                return index;
            }
        }
        itemIndexToChildIndex(index) {
            if (!this.$virtual)
                return index;
            if (this.$layout == 4)
                return this.getChildIndex(this.$virtualItems[index].obj);
            else {
                if (this.$loop && this.$numItems > 0) {
                    const j = this.$firstIndex % this.$numItems;
                    if (index >= j)
                        index = this.$firstIndex + (index - j);
                    else
                        index = this.$firstIndex + this.$numItems + (j - index);
                }
                else
                    index -= this.$firstIndex;
                return index;
            }
        }
        setVirtual() {
            this.$setVirtual(false);
        }
        setVirtualAndLoop() {
            this.$setVirtual(true);
        }
        $setVirtual(loop) {
            if (!this.$virtual) {
                if (this.$scrollPane == null)
                    throw new Error("Virtual list must be scrollable");
                if (loop) {
                    if (this.$layout == 2 || this.$layout == 3)
                        throw new Error("Virtual list with loop mode is not supported for both FlowHorizontal and FlowVertical layout");
                    this.$scrollPane.bouncebackEffect = false;
                }
                this.$virtual = true;
                this.$loop = loop;
                this.$virtualItems = [];
                this.removeChildrenToPool();
                if (this.$itemSize == null) {
                    this.$itemSize = new PIXI.Point();
                    const obj = this.getFromPool(null);
                    if (obj == null)
                        throw new Error("Virtual list must have a default list item resource specified through list.defaultItem = resUrl.");
                    else {
                        this.$itemSize.x = obj.width;
                        this.$itemSize.y = obj.height;
                    }
                    this.returnToPool(obj);
                }
                if (this.$layout == 0 || this.$layout == 2) {
                    this.$scrollPane.scrollSpeed = this.$itemSize.y;
                    if (this.$loop)
                        this.$scrollPane.$loop = 2;
                }
                else {
                    this.$scrollPane.scrollSpeed = this.$itemSize.x;
                    if (this.$loop)
                        this.$scrollPane.$loop = 1;
                }
                this.$scrollPane.on(fgui.ScrollEvent.SCROLL, this.$scrolled, this);
                this.setVirtualListChangedFlag(true);
            }
        }
        get numItems() {
            if (this.$virtual)
                return this.$numItems;
            else
                return this.$children.length;
        }
        set numItems(value) {
            let i;
            if (this.$virtual) {
                if (this.itemRenderer == null)
                    throw new Error("list.itemRenderer is required");
                this.$numItems = value;
                if (this.$loop)
                    this.$realNumItems = this.$numItems * 6;
                else
                    this.$realNumItems = this.$numItems;
                const oldCount = this.$virtualItems.length;
                if (this.$realNumItems > oldCount) {
                    for (i = oldCount; i < this.$realNumItems; i++) {
                        let ii = new ItemInfo();
                        ii.width = this.$itemSize.x;
                        ii.height = this.$itemSize.y;
                        this.$virtualItems.push(ii);
                    }
                }
                else {
                    for (i = this.$realNumItems; i < oldCount; i++)
                        this.$virtualItems[i].selected = false;
                }
                if (this.$virtualListChanged != 0)
                    fgui.GTimer.inst.remove(this.$refreshVirtualList, this);
                this.$refreshVirtualList();
            }
            else {
                const cnt = this.$children.length;
                if (value > cnt) {
                    for (i = cnt; i < value; i++) {
                        if (this.itemProvider == null)
                            this.addItemFromPool();
                        else
                            this.addItemFromPool(this.itemProvider(i));
                    }
                }
                else
                    this.removeChildrenToPool(value, cnt);
                if (this.itemRenderer != null) {
                    for (i = 0; i < value; i++)
                        this.itemRenderer(i, this.getChildAt(i));
                }
            }
        }
        refreshVirtualList() {
            this.setVirtualListChangedFlag(false);
        }
        checkVirtualList() {
            if (this.$virtualListChanged != 0) {
                this.$refreshVirtualList();
                fgui.GTimer.inst.remove(this.$refreshVirtualList, this);
            }
        }
        setVirtualListChangedFlag(layoutChanged = false) {
            if (layoutChanged)
                this.$virtualListChanged = 2;
            else if (this.$virtualListChanged == 0)
                this.$virtualListChanged = 1;
            fgui.GTimer.inst.callLater(this.$refreshVirtualList, this);
        }
        $refreshVirtualList() {
            const layoutChanged = this.$virtualListChanged == 2;
            this.$virtualListChanged = 0;
            this.$eventLocked = true;
            if (layoutChanged) {
                if (this.$layout == 0 || this.$layout == 1)
                    this.$curLineItemCount = 1;
                else if (this.$layout == 2) {
                    if (this.$columnCount > 0)
                        this.$curLineItemCount = this.$columnCount;
                    else {
                        this.$curLineItemCount = Math.floor((this.$scrollPane.viewWidth + this.$columnGap) / (this.$itemSize.x + this.$columnGap));
                        if (this.$curLineItemCount <= 0)
                            this.$curLineItemCount = 1;
                    }
                }
                else if (this.$layout == 3) {
                    if (this.$lineCount > 0)
                        this.$curLineItemCount = this.$lineCount;
                    else {
                        this.$curLineItemCount = Math.floor((this.$scrollPane.viewHeight + this.$lineGap) / (this.$itemSize.y + this.$lineGap));
                        if (this.$curLineItemCount <= 0)
                            this.$curLineItemCount = 1;
                    }
                }
                else {
                    if (this.$columnCount > 0)
                        this.$curLineItemCount = this.$columnCount;
                    else {
                        this.$curLineItemCount = Math.floor((this.$scrollPane.viewWidth + this.$columnGap) / (this.$itemSize.x + this.$columnGap));
                        if (this.$curLineItemCount <= 0)
                            this.$curLineItemCount = 1;
                    }
                    if (this.$lineCount > 0)
                        this.$curLineItemCount2 = this.$lineCount;
                    else {
                        this.$curLineItemCount2 = Math.floor((this.$scrollPane.viewHeight + this.$lineGap) / (this.$itemSize.y + this.$lineGap));
                        if (this.$curLineItemCount2 <= 0)
                            this.$curLineItemCount2 = 1;
                    }
                }
            }
            let ch = 0, cw = 0;
            if (this.$realNumItems > 0) {
                let i;
                let len = Math.ceil(this.$realNumItems / this.$curLineItemCount) * this.$curLineItemCount;
                let len2 = Math.min(this.$curLineItemCount, this.$realNumItems);
                if (this.$layout == 0 || this.$layout == 2) {
                    for (i = 0; i < len; i += this.$curLineItemCount)
                        ch += this.$virtualItems[i].height + this.$lineGap;
                    if (ch > 0)
                        ch -= this.$lineGap;
                    if (this.$autoResizeItem)
                        cw = this.$scrollPane.viewWidth;
                    else {
                        for (i = 0; i < len2; i++)
                            cw += this.$virtualItems[i].width + this.$columnGap;
                        if (cw > 0)
                            cw -= this.$columnGap;
                    }
                }
                else if (this.$layout == 1 || this.$layout == 3) {
                    for (i = 0; i < len; i += this.$curLineItemCount)
                        cw += this.$virtualItems[i].width + this.$columnGap;
                    if (cw > 0)
                        cw -= this.$columnGap;
                    if (this.$autoResizeItem)
                        ch = this.$scrollPane.viewHeight;
                    else {
                        for (i = 0; i < len2; i++)
                            ch += this.$virtualItems[i].height + this.$lineGap;
                        if (ch > 0)
                            ch -= this.$lineGap;
                    }
                }
                else {
                    const pageCount = Math.ceil(len / (this.$curLineItemCount * this.$curLineItemCount2));
                    cw = pageCount * this.viewWidth;
                    ch = this.viewHeight;
                }
            }
            this.handleAlign(cw, ch);
            this.$scrollPane.setContentSize(cw, ch);
            this.$eventLocked = false;
            this.handleScroll(true);
        }
        $scrolled() {
            this.handleScroll(false);
        }
        getIndexOnPos1(forceUpdate) {
            if (this.$realNumItems < this.$curLineItemCount) {
                GList.$lastPosHelper = 0;
                return 0;
            }
            let i;
            let pos2;
            let pos3;
            if (this.numChildren > 0 && !forceUpdate) {
                pos2 = this.getChildAt(0).y;
                if (pos2 > GList.$lastPosHelper) {
                    for (i = this.$firstIndex - this.$curLineItemCount; i >= 0; i -= this.$curLineItemCount) {
                        pos2 -= (this.$virtualItems[i].height + this.$lineGap);
                        if (pos2 <= GList.$lastPosHelper) {
                            GList.$lastPosHelper = pos2;
                            return i;
                        }
                    }
                    GList.$lastPosHelper = 0;
                    return 0;
                }
                else {
                    for (i = this.$firstIndex; i < this.$realNumItems; i += this.$curLineItemCount) {
                        pos3 = pos2 + this.$virtualItems[i].height + this.$lineGap;
                        if (pos3 > GList.$lastPosHelper) {
                            GList.$lastPosHelper = pos2;
                            return i;
                        }
                        pos2 = pos3;
                    }
                    GList.$lastPosHelper = pos2;
                    return this.$realNumItems - this.$curLineItemCount;
                }
            }
            else {
                pos2 = 0;
                for (i = 0; i < this.$realNumItems; i += this.$curLineItemCount) {
                    pos3 = pos2 + this.$virtualItems[i].height + this.$lineGap;
                    if (pos3 > GList.$lastPosHelper) {
                        GList.$lastPosHelper = pos2;
                        return i;
                    }
                    pos2 = pos3;
                }
                GList.$lastPosHelper = pos2;
                return this.$realNumItems - this.$curLineItemCount;
            }
        }
        getIndexOnPos2(forceUpdate) {
            if (this.$realNumItems < this.$curLineItemCount) {
                GList.$lastPosHelper = 0;
                return 0;
            }
            let i;
            let pos2;
            let pos3;
            if (this.numChildren > 0 && !forceUpdate) {
                pos2 = this.getChildAt(0).x;
                if (pos2 > GList.$lastPosHelper) {
                    for (i = this.$firstIndex - this.$curLineItemCount; i >= 0; i -= this.$curLineItemCount) {
                        pos2 -= (this.$virtualItems[i].width + this.$columnGap);
                        if (pos2 <= GList.$lastPosHelper) {
                            GList.$lastPosHelper = pos2;
                            return i;
                        }
                    }
                    GList.$lastPosHelper = 0;
                    return 0;
                }
                else {
                    for (i = this.$firstIndex; i < this.$realNumItems; i += this.$curLineItemCount) {
                        pos3 = pos2 + this.$virtualItems[i].width + this.$columnGap;
                        if (pos3 > GList.$lastPosHelper) {
                            GList.$lastPosHelper = pos2;
                            return i;
                        }
                        pos2 = pos3;
                    }
                    GList.$lastPosHelper = pos2;
                    return this.$realNumItems - this.$curLineItemCount;
                }
            }
            else {
                pos2 = 0;
                for (i = 0; i < this.$realNumItems; i += this.$curLineItemCount) {
                    pos3 = pos2 + this.$virtualItems[i].width + this.$columnGap;
                    if (pos3 > GList.$lastPosHelper) {
                        GList.$lastPosHelper = pos2;
                        return i;
                    }
                    pos2 = pos3;
                }
                GList.$lastPosHelper = pos2;
                return this.$realNumItems - this.$curLineItemCount;
            }
        }
        getIndexOnPos3(forceUpdate) {
            if (this.$realNumItems < this.$curLineItemCount) {
                GList.$lastPosHelper = 0;
                return 0;
            }
            const viewWidth = this.viewWidth;
            const page = Math.floor(GList.$lastPosHelper / viewWidth);
            const startIndex = page * (this.$curLineItemCount * this.$curLineItemCount2);
            let i;
            let pos3;
            let pos2 = page * viewWidth;
            for (i = 0; i < this.$curLineItemCount; i++) {
                pos3 = pos2 + this.$virtualItems[startIndex + i].width + this.$columnGap;
                if (pos3 > GList.$lastPosHelper) {
                    GList.$lastPosHelper = pos2;
                    return startIndex + i;
                }
                pos2 = pos3;
            }
            GList.$lastPosHelper = pos2;
            return startIndex + this.$curLineItemCount - 1;
        }
        handleScroll(forceUpdate) {
            if (this.$eventLocked)
                return;
            this.$enterCounter = 0;
            if (this.$layout == 0 || this.$layout == 2) {
                this.handleScroll1(forceUpdate);
                this.handleArchOrder1();
            }
            else if (this.$layout == 1 || this.$layout == 3) {
                this.handleScroll2(forceUpdate);
                this.handleArchOrder2();
            }
            else
                this.handleScroll3(forceUpdate);
            this.$boundsChanged = false;
        }
        handleScroll1(forceUpdate) {
            this.$enterCounter++;
            if (this.$enterCounter > 3) {
                console.warn("this list view cannot be filled full as the itemRenderer function always returns an item with different size.");
                return;
            }
            let pos = this.$scrollPane.scrollingPosY;
            let max = pos + this.$scrollPane.viewHeight;
            const end = max == this.$scrollPane.contentHeight;
            GList.$lastPosHelper = pos;
            const newFirstIndex = this.getIndexOnPos1(forceUpdate);
            if (newFirstIndex == this.$firstIndex && !forceUpdate)
                return;
            pos = GList.$lastPosHelper;
            const oldFirstIndex = this.$firstIndex;
            this.$firstIndex = newFirstIndex;
            let curIndex = newFirstIndex;
            const forward = oldFirstIndex > newFirstIndex;
            const oldCount = this.numChildren;
            const lastIndex = oldFirstIndex + oldCount - 1;
            let reuseIndex = forward ? lastIndex : oldFirstIndex;
            let curX = 0, curY = pos;
            let needRender;
            let deltaSize = 0;
            let firstItemDeltaSize = 0;
            let url = this.defaultItem;
            let ii, ii2;
            let i, j;
            const partSize = (this.$scrollPane.viewWidth - this.$columnGap * (this.$curLineItemCount - 1)) / this.$curLineItemCount;
            this.$itemInfoVer++;
            while (curIndex < this.$realNumItems && (end || curY < max)) {
                ii = this.$virtualItems[curIndex];
                if (ii.obj == null || forceUpdate) {
                    if (this.itemProvider != null) {
                        url = this.itemProvider(curIndex % this.$numItems);
                        if (url == null)
                            url = this.$defaultItem;
                        url = fgui.UIPackage.normalizeURL(url);
                    }
                    if (ii.obj != null && ii.obj.resourceURL != url) {
                        if (ii.obj instanceof fgui.GButton)
                            ii.selected = ii.obj.selected;
                        this.removeChildToPool(ii.obj);
                        ii.obj = null;
                    }
                }
                if (ii.obj == null) {
                    if (forward) {
                        for (j = reuseIndex; j >= oldFirstIndex; j--) {
                            ii2 = this.$virtualItems[j];
                            if (ii2.obj != null && ii2.updateFlag != this.$itemInfoVer && ii2.obj.resourceURL == url) {
                                if (ii2.obj instanceof fgui.GButton)
                                    ii2.selected = ii2.obj.selected;
                                ii.obj = ii2.obj;
                                ii2.obj = null;
                                if (j == reuseIndex)
                                    reuseIndex--;
                                break;
                            }
                        }
                    }
                    else {
                        for (j = reuseIndex; j <= lastIndex; j++) {
                            ii2 = this.$virtualItems[j];
                            if (ii2.obj != null && ii2.updateFlag != this.$itemInfoVer && ii2.obj.resourceURL == url) {
                                if (ii2.obj instanceof fgui.GButton)
                                    ii2.selected = ii2.obj.selected;
                                ii.obj = ii2.obj;
                                ii2.obj = null;
                                if (j == reuseIndex)
                                    reuseIndex++;
                                break;
                            }
                        }
                    }
                    if (ii.obj != null)
                        this.setChildIndex(ii.obj, forward ? curIndex - newFirstIndex : this.numChildren);
                    else {
                        ii.obj = this.$pool.get(url);
                        if (forward)
                            this.addChildAt(ii.obj, curIndex - newFirstIndex);
                        else
                            this.addChild(ii.obj);
                    }
                    if (ii.obj instanceof fgui.GButton)
                        ii.obj.selected = ii.selected;
                    needRender = true;
                }
                else
                    needRender = forceUpdate;
                if (needRender) {
                    if (this.$autoResizeItem && (this.$layout == 0 || this.$columnCount > 0))
                        ii.obj.setSize(partSize, ii.obj.height, true);
                    this.itemRenderer(curIndex % this.$numItems, ii.obj);
                    if (curIndex % this.$curLineItemCount == 0) {
                        deltaSize += Math.ceil(ii.obj.height) - ii.height;
                        if (curIndex == newFirstIndex && oldFirstIndex > newFirstIndex) {
                            firstItemDeltaSize = Math.ceil(ii.obj.height) - ii.height;
                        }
                    }
                    ii.width = Math.ceil(ii.obj.width);
                    ii.height = Math.ceil(ii.obj.height);
                }
                ii.updateFlag = this.$itemInfoVer;
                ii.obj.setXY(curX, curY);
                if (curIndex == newFirstIndex)
                    max += ii.height;
                curX += ii.width + this.$columnGap;
                if (curIndex % this.$curLineItemCount == this.$curLineItemCount - 1) {
                    curX = 0;
                    curY += ii.height + this.$lineGap;
                }
                curIndex++;
            }
            for (i = 0; i < oldCount; i++) {
                ii = this.$virtualItems[oldFirstIndex + i];
                if (ii.updateFlag != this.$itemInfoVer && ii.obj != null) {
                    if (ii.obj instanceof fgui.GButton)
                        ii.selected = ii.obj.selected;
                    this.removeChildToPool(ii.obj);
                    ii.obj = null;
                }
            }
            if (deltaSize != 0 || firstItemDeltaSize != 0)
                this.$scrollPane.changeContentSizeOnScrolling(0, deltaSize, 0, firstItemDeltaSize);
            if (curIndex > 0 && this.numChildren > 0 && this.$container.y < 0 && this.getChildAt(0).y > -this.$container.y)
                this.handleScroll1(false);
        }
        handleScroll2(forceUpdate) {
            this.$enterCounter++;
            if (this.$enterCounter > 3) {
                console.warn("this list view cannot be filled full as the itemRenderer function always returns an item with different size.");
                return;
            }
            let pos = this.$scrollPane.scrollingPosX;
            let max = pos + this.$scrollPane.viewWidth;
            const end = pos == this.$scrollPane.contentWidth;
            GList.$lastPosHelper = pos;
            const newFirstIndex = this.getIndexOnPos2(forceUpdate);
            if (newFirstIndex == this.$firstIndex && !forceUpdate)
                return;
            pos = GList.$lastPosHelper;
            const oldFirstIndex = this.$firstIndex;
            this.$firstIndex = newFirstIndex;
            let curIndex = newFirstIndex;
            const forward = oldFirstIndex > newFirstIndex;
            const oldCount = this.numChildren;
            let lastIndex = oldFirstIndex + oldCount - 1;
            let reuseIndex = forward ? lastIndex : oldFirstIndex;
            let curX = pos, curY = 0;
            let needRender;
            let deltaSize = 0;
            let firstItemDeltaSize = 0;
            let url = this.defaultItem;
            let ii, ii2;
            let i, j;
            const partSize = (this.$scrollPane.viewHeight - this.$lineGap * (this.$curLineItemCount - 1)) / this.$curLineItemCount;
            this.$itemInfoVer++;
            while (curIndex < this.$realNumItems && (end || curX < max)) {
                ii = this.$virtualItems[curIndex];
                if (ii.obj == null || forceUpdate) {
                    if (this.itemProvider != null) {
                        url = this.itemProvider(curIndex % this.$numItems);
                        if (url == null)
                            url = this.$defaultItem;
                        url = fgui.UIPackage.normalizeURL(url);
                    }
                    if (ii.obj != null && ii.obj.resourceURL != url) {
                        if (ii.obj instanceof fgui.GButton)
                            ii.selected = ii.obj.selected;
                        this.removeChildToPool(ii.obj);
                        ii.obj = null;
                    }
                }
                if (ii.obj == null) {
                    if (forward) {
                        for (j = reuseIndex; j >= oldFirstIndex; j--) {
                            ii2 = this.$virtualItems[j];
                            if (ii2.obj != null && ii2.updateFlag != this.$itemInfoVer && ii2.obj.resourceURL == url) {
                                if (ii2.obj instanceof fgui.GButton)
                                    ii2.selected = ii2.obj.selected;
                                ii.obj = ii2.obj;
                                ii2.obj = null;
                                if (j == reuseIndex)
                                    reuseIndex--;
                                break;
                            }
                        }
                    }
                    else {
                        for (j = reuseIndex; j <= lastIndex; j++) {
                            ii2 = this.$virtualItems[j];
                            if (ii2.obj != null && ii2.updateFlag != this.$itemInfoVer && ii2.obj.resourceURL == url) {
                                if (ii2.obj instanceof fgui.GButton)
                                    ii2.selected = ii2.obj.selected;
                                ii.obj = ii2.obj;
                                ii2.obj = null;
                                if (j == reuseIndex)
                                    reuseIndex++;
                                break;
                            }
                        }
                    }
                    if (ii.obj != null)
                        this.setChildIndex(ii.obj, forward ? curIndex - newFirstIndex : this.numChildren);
                    else {
                        ii.obj = this.$pool.get(url);
                        if (forward)
                            this.addChildAt(ii.obj, curIndex - newFirstIndex);
                        else
                            this.addChild(ii.obj);
                    }
                    if (ii.obj instanceof fgui.GButton)
                        ii.obj.selected = ii.selected;
                    needRender = true;
                }
                else
                    needRender = forceUpdate;
                if (needRender) {
                    if (this.$autoResizeItem && (this.$layout == 1 || this.$lineCount > 0))
                        ii.obj.setSize(ii.obj.width, partSize, true);
                    this.itemRenderer(curIndex % this.$numItems, ii.obj);
                    if (curIndex % this.$curLineItemCount == 0) {
                        deltaSize += Math.ceil(ii.obj.width) - ii.width;
                        if (curIndex == newFirstIndex && oldFirstIndex > newFirstIndex)
                            firstItemDeltaSize = Math.ceil(ii.obj.width) - ii.width;
                    }
                    ii.width = Math.ceil(ii.obj.width);
                    ii.height = Math.ceil(ii.obj.height);
                }
                ii.updateFlag = this.$itemInfoVer;
                ii.obj.setXY(curX, curY);
                if (curIndex == newFirstIndex)
                    max += ii.width;
                curY += ii.height + this.$lineGap;
                if (curIndex % this.$curLineItemCount == this.$curLineItemCount - 1) {
                    curY = 0;
                    curX += ii.width + this.$columnGap;
                }
                curIndex++;
            }
            for (i = 0; i < oldCount; i++) {
                ii = this.$virtualItems[oldFirstIndex + i];
                if (ii.updateFlag != this.$itemInfoVer && ii.obj != null) {
                    if (ii.obj instanceof fgui.GButton)
                        ii.selected = ii.obj.selected;
                    this.removeChildToPool(ii.obj);
                    ii.obj = null;
                }
            }
            if (deltaSize != 0 || firstItemDeltaSize != 0)
                this.$scrollPane.changeContentSizeOnScrolling(deltaSize, 0, firstItemDeltaSize, 0);
            if (curIndex > 0 && this.numChildren > 0 && this.$container.x < 0 && this.getChildAt(0).x > -this.$container.x)
                this.handleScroll2(false);
        }
        handleScroll3(forceUpdate) {
            let pos = this.$scrollPane.scrollingPosX;
            GList.$lastPosHelper = pos;
            const newFirstIndex = this.getIndexOnPos3(forceUpdate);
            if (newFirstIndex == this.$firstIndex && !forceUpdate)
                return;
            pos = GList.$lastPosHelper;
            const oldFirstIndex = this.$firstIndex;
            this.$firstIndex = newFirstIndex;
            let reuseIndex = oldFirstIndex;
            const virtualItemCount = this.$virtualItems.length;
            const pageSize = this.$curLineItemCount * this.$curLineItemCount2;
            const startCol = newFirstIndex % this.$curLineItemCount;
            const viewWidth = this.viewWidth;
            const page = Math.floor(newFirstIndex / pageSize);
            const startIndex = page * pageSize;
            const lastIndex = startIndex + pageSize * 2;
            let needRender;
            let i;
            let ii, ii2;
            let col;
            let url = this.$defaultItem;
            const partWidth = (this.$scrollPane.viewWidth - this.$columnGap * (this.$curLineItemCount - 1)) / this.$curLineItemCount;
            const partHeight = (this.$scrollPane.viewHeight - this.$lineGap * (this.$curLineItemCount2 - 1)) / this.$curLineItemCount2;
            this.$itemInfoVer++;
            for (i = startIndex; i < lastIndex; i++) {
                if (i >= this.$realNumItems)
                    continue;
                col = i % this.$curLineItemCount;
                if (i - startIndex < pageSize) {
                    if (col < startCol)
                        continue;
                }
                else {
                    if (col > startCol)
                        continue;
                }
                ii = this.$virtualItems[i];
                ii.updateFlag = this.$itemInfoVer;
            }
            let lastObj = null;
            let insertIndex = 0;
            for (i = startIndex; i < lastIndex; i++) {
                if (i >= this.$realNumItems)
                    continue;
                ii = this.$virtualItems[i];
                if (ii.updateFlag != this.$itemInfoVer)
                    continue;
                if (ii.obj == null) {
                    while (reuseIndex < virtualItemCount) {
                        ii2 = this.$virtualItems[reuseIndex];
                        if (ii2.obj != null && ii2.updateFlag != this.$itemInfoVer) {
                            if (ii2.obj instanceof fgui.GButton)
                                ii2.selected = ii2.obj.selected;
                            ii.obj = ii2.obj;
                            ii2.obj = null;
                            break;
                        }
                        reuseIndex++;
                    }
                    if (insertIndex == -1)
                        insertIndex = this.getChildIndex(lastObj) + 1;
                    if (ii.obj == null) {
                        if (this.itemProvider != null) {
                            url = this.itemProvider(i % this.$numItems);
                            if (url == null)
                                url = this.$defaultItem;
                            url = fgui.UIPackage.normalizeURL(url);
                        }
                        ii.obj = this.$pool.get(url);
                        this.addChildAt(ii.obj, insertIndex);
                    }
                    else
                        insertIndex = this.setChildIndexBefore(ii.obj, insertIndex);
                    insertIndex++;
                    if (ii.obj instanceof fgui.GButton)
                        ii.obj.selected = ii.selected;
                    needRender = true;
                }
                else {
                    needRender = forceUpdate;
                    insertIndex = -1;
                    lastObj = ii.obj;
                }
                if (needRender) {
                    if (this.$autoResizeItem) {
                        if (this.$curLineItemCount == this.$columnCount && this.$curLineItemCount2 == this.$lineCount)
                            ii.obj.setSize(partWidth, partHeight, true);
                        else if (this.$curLineItemCount == this.$columnCount)
                            ii.obj.setSize(partWidth, ii.obj.height, true);
                        else if (this.$curLineItemCount2 == this.$lineCount)
                            ii.obj.setSize(ii.obj.width, partHeight, true);
                    }
                    this.itemRenderer(i % this.$numItems, ii.obj);
                    ii.width = Math.ceil(ii.obj.width);
                    ii.height = Math.ceil(ii.obj.height);
                }
            }
            let borderX = (startIndex / pageSize) * viewWidth;
            let xx = borderX;
            let yy = 0;
            let lineHeight = 0;
            for (i = startIndex; i < lastIndex; i++) {
                if (i >= this.$realNumItems)
                    continue;
                ii = this.$virtualItems[i];
                if (ii.updateFlag == this.$itemInfoVer)
                    ii.obj.setXY(xx, yy);
                if (ii.height > lineHeight)
                    lineHeight = ii.height;
                if (i % this.$curLineItemCount == this.$curLineItemCount - 1) {
                    xx = borderX;
                    yy += lineHeight + this.$lineGap;
                    lineHeight = 0;
                    if (i == startIndex + pageSize - 1) {
                        borderX += viewWidth;
                        xx = borderX;
                        yy = 0;
                    }
                }
                else
                    xx += ii.width + this.$columnGap;
            }
            for (i = reuseIndex; i < virtualItemCount; i++) {
                ii = this.$virtualItems[i];
                if (ii.updateFlag != this.$itemInfoVer && ii.obj != null) {
                    if (ii.obj instanceof fgui.GButton)
                        ii.selected = ii.obj.selected;
                    this.removeChildToPool(ii.obj);
                    ii.obj = null;
                }
            }
        }
        handleArchOrder1() {
            if (this.$childrenRenderOrder == 2) {
                const mid = this.$scrollPane.posY + this.viewHeight / 2;
                let minDist = Number.POSITIVE_INFINITY;
                let dist = 0;
                let apexIndex = 0;
                const cnt = this.numChildren;
                for (let i = 0; i < cnt; i++) {
                    const obj = this.getChildAt(i);
                    if (!this.foldInvisibleItems || obj.visible) {
                        dist = Math.abs(mid - obj.y - obj.height / 2);
                        if (dist < minDist) {
                            minDist = dist;
                            apexIndex = i;
                        }
                    }
                }
                this.apexIndex = apexIndex;
            }
        }
        handleArchOrder2() {
            if (this.childrenRenderOrder == 2) {
                const mid = this.$scrollPane.posX + this.viewWidth / 2;
                let minDist = Number.POSITIVE_INFINITY;
                let dist = 0;
                let apexIndex = 0;
                const cnt = this.numChildren;
                for (let i = 0; i < cnt; i++) {
                    const obj = this.getChildAt(i);
                    if (!this.foldInvisibleItems || obj.visible) {
                        dist = Math.abs(mid - obj.x - obj.width / 2);
                        if (dist < minDist) {
                            minDist = dist;
                            apexIndex = i;
                        }
                    }
                }
                this.apexIndex = apexIndex;
            }
        }
        handleAlign(contentWidth, contentHeight) {
            let newOffsetX = 0;
            let newOffsetY = 0;
            if (contentHeight < this.viewHeight) {
                if (this.$verticalAlign == 1)
                    newOffsetY = Math.floor((this.viewHeight - contentHeight) / 2);
                else if (this.$verticalAlign == 2)
                    newOffsetY = this.viewHeight - contentHeight;
            }
            if (contentWidth < this.viewWidth) {
                if (this.$align == "center")
                    newOffsetX = Math.floor((this.viewWidth - contentWidth) / 2);
                else if (this.$align == "right")
                    newOffsetX = this.viewWidth - contentWidth;
            }
            if (newOffsetX != this.$alignOffset.x || newOffsetY != this.$alignOffset.y) {
                this.$alignOffset.set(newOffsetX, newOffsetY);
                if (this.$scrollPane != null)
                    this.$scrollPane.adjustMaskContainer();
                else {
                    this.$container.x = this.$margin.left + this.$alignOffset.x;
                    this.$container.y = this.$margin.top + this.$alignOffset.y;
                }
            }
        }
        updateBounds() {
            if (this.$virtual)
                return;
            let i;
            let child;
            let curX = 0;
            let curY = 0;
            let maxWidth = 0;
            let maxHeight = 0;
            let cw = 0, ch = 0;
            let j = 0;
            let page = 0;
            let k = 0;
            const cnt = this.$children.length;
            const viewWidth = this.viewWidth;
            const viewHeight = this.viewHeight;
            let lineSize = 0;
            let lineStart = 0;
            let ratio;
            if (this.$layout == 0) {
                for (i = 0; i < cnt; i++) {
                    child = this.getChildAt(i);
                    if (this.foldInvisibleItems && !child.visible)
                        continue;
                    if (curY != 0)
                        curY += this.$lineGap;
                    child.y = curY;
                    if (this.$autoResizeItem)
                        child.setSize(viewWidth, child.height, true);
                    curY += Math.ceil(child.height);
                    if (child.width > maxWidth)
                        maxWidth = child.width;
                }
                cw = Math.ceil(maxWidth);
                ch = curY;
            }
            else if (this.$layout == 1) {
                for (i = 0; i < cnt; i++) {
                    child = this.getChildAt(i);
                    if (this.foldInvisibleItems && !child.visible)
                        continue;
                    if (curX != 0)
                        curX += this.$columnGap;
                    child.x = curX;
                    if (this.$autoResizeItem)
                        child.setSize(child.width, viewHeight, true);
                    curX += Math.ceil(child.width);
                    if (child.height > maxHeight)
                        maxHeight = child.height;
                }
                cw = curX;
                ch = Math.ceil(maxHeight);
            }
            else if (this.$layout == 2) {
                if (this.$autoResizeItem && this.$columnCount > 0) {
                    for (i = 0; i < cnt; i++) {
                        child = this.getChildAt(i);
                        if (this.foldInvisibleItems && !child.visible)
                            continue;
                        lineSize += child.sourceWidth;
                        j++;
                        if (j == this.$columnCount || i == cnt - 1) {
                            ratio = (viewWidth - lineSize - (j - 1) * this.$columnGap) / lineSize;
                            curX = 0;
                            for (j = lineStart; j <= i; j++) {
                                child = this.getChildAt(j);
                                if (this.foldInvisibleItems && !child.visible)
                                    continue;
                                child.setXY(curX, curY);
                                if (j < i) {
                                    child.setSize(child.sourceWidth + Math.round(child.sourceWidth * ratio), child.height, true);
                                    curX += Math.ceil(child.width) + this.$columnGap;
                                }
                                else
                                    child.setSize(viewWidth - curX, child.height, true);
                                if (child.height > maxHeight)
                                    maxHeight = child.height;
                            }
                            curY += Math.ceil(maxHeight) + this.$lineGap;
                            maxHeight = 0;
                            j = 0;
                            lineStart = i + 1;
                            lineSize = 0;
                        }
                    }
                    ch = curY + Math.ceil(maxHeight);
                    cw = viewWidth;
                }
                else {
                    for (i = 0; i < cnt; i++) {
                        child = this.getChildAt(i);
                        if (this.foldInvisibleItems && !child.visible)
                            continue;
                        if (curX != 0)
                            curX += this.$columnGap;
                        if (this.$columnCount != 0 && j >= this.$columnCount
                            || this.$columnCount == 0 && curX + child.width > viewWidth && maxHeight != 0) {
                            curX = 0;
                            curY += Math.ceil(maxHeight) + this.$lineGap;
                            maxHeight = 0;
                            j = 0;
                        }
                        child.setXY(curX, curY);
                        curX += Math.ceil(child.width);
                        if (curX > maxWidth)
                            maxWidth = curX;
                        if (child.height > maxHeight)
                            maxHeight = child.height;
                        j++;
                    }
                    ch = curY + Math.ceil(maxHeight);
                    cw = Math.ceil(maxWidth);
                }
            }
            else if (this.$layout == 3) {
                if (this.$autoResizeItem && this.$lineCount > 0) {
                    for (i = 0; i < cnt; i++) {
                        child = this.getChildAt(i);
                        if (this.foldInvisibleItems && !child.visible)
                            continue;
                        lineSize += child.sourceHeight;
                        j++;
                        if (j == this.$lineCount || i == cnt - 1) {
                            ratio = (viewHeight - lineSize - (j - 1) * this.$lineGap) / lineSize;
                            curY = 0;
                            for (j = lineStart; j <= i; j++) {
                                child = this.getChildAt(j);
                                if (this.foldInvisibleItems && !child.visible)
                                    continue;
                                child.setXY(curX, curY);
                                if (j < i) {
                                    child.setSize(child.width, child.sourceHeight + Math.round(child.sourceHeight * ratio), true);
                                    curY += Math.ceil(child.height) + this.$lineGap;
                                }
                                else
                                    child.setSize(child.width, viewHeight - curY, true);
                                if (child.width > maxWidth)
                                    maxWidth = child.width;
                            }
                            curX += Math.ceil(maxWidth) + this.$columnGap;
                            maxWidth = 0;
                            j = 0;
                            lineStart = i + 1;
                            lineSize = 0;
                        }
                    }
                    cw = curX + Math.ceil(maxWidth);
                    ch = viewHeight;
                }
                else {
                    for (i = 0; i < cnt; i++) {
                        child = this.getChildAt(i);
                        if (this.foldInvisibleItems && !child.visible)
                            continue;
                        if (curY != 0)
                            curY += this.$lineGap;
                        if (this.$lineCount != 0 && j >= this.$lineCount
                            || this.$lineCount == 0 && curY + child.height > viewHeight && maxWidth != 0) {
                            curY = 0;
                            curX += Math.ceil(maxWidth) + this.$columnGap;
                            maxWidth = 0;
                            j = 0;
                        }
                        child.setXY(curX, curY);
                        curY += Math.ceil(child.height);
                        if (curY > maxHeight)
                            maxHeight = curY;
                        if (child.width > maxWidth)
                            maxWidth = child.width;
                        j++;
                    }
                    cw = curX + Math.ceil(maxWidth);
                    ch = Math.ceil(maxHeight);
                }
            }
            else {
                let eachHeight;
                if (this.$autoResizeItem && this.$lineCount > 0)
                    eachHeight = Math.floor((viewHeight - (this.$lineCount - 1) * this.$lineGap) / this.$lineCount);
                if (this.$autoResizeItem && this.$columnCount > 0) {
                    for (i = 0; i < cnt; i++) {
                        child = this.getChildAt(i);
                        if (this.foldInvisibleItems && !child.visible)
                            continue;
                        lineSize += child.sourceWidth;
                        j++;
                        if (j == this.$columnCount || i == cnt - 1) {
                            ratio = (viewWidth - lineSize - (j - 1) * this.$columnGap) / lineSize;
                            curX = 0;
                            for (j = lineStart; j <= i; j++) {
                                child = this.getChildAt(j);
                                if (this.foldInvisibleItems && !child.visible)
                                    continue;
                                child.setXY(page * viewWidth + curX, curY);
                                if (j < i) {
                                    child.setSize(child.sourceWidth + Math.round(child.sourceWidth * ratio), this.$lineCount > 0 ? eachHeight : child.height, true);
                                    curX += Math.ceil(child.width) + this.$columnGap;
                                }
                                else
                                    child.setSize(viewWidth - curX, this.$lineCount > 0 ? eachHeight : child.height, true);
                                if (child.height > maxHeight)
                                    maxHeight = child.height;
                            }
                            curY += Math.ceil(maxHeight) + this.$lineGap;
                            maxHeight = 0;
                            j = 0;
                            lineStart = i + 1;
                            lineSize = 0;
                            k++;
                            if (this.$lineCount != 0 && k >= this.$lineCount
                                || this.$lineCount == 0 && curY + child.height > viewHeight) {
                                page++;
                                curY = 0;
                                k = 0;
                            }
                        }
                    }
                }
                else {
                    for (i = 0; i < cnt; i++) {
                        child = this.getChildAt(i);
                        if (this.foldInvisibleItems && !child.visible)
                            continue;
                        if (curX != 0)
                            curX += this.$columnGap;
                        if (this.$autoResizeItem && this.$lineCount > 0)
                            child.setSize(child.width, eachHeight, true);
                        if (this.$columnCount != 0 && j >= this.$columnCount
                            || this.$columnCount == 0 && curX + child.width > viewWidth && maxHeight != 0) {
                            curX = 0;
                            curY += Math.ceil(maxHeight) + this.$lineGap;
                            maxHeight = 0;
                            j = 0;
                            k++;
                            if (this.$lineCount != 0 && k >= this.$lineCount
                                || this.$lineCount == 0 && curY + child.height > viewHeight && maxWidth != 0) {
                                page++;
                                curY = 0;
                                k = 0;
                            }
                        }
                        child.setXY(page * viewWidth + curX, curY);
                        curX += Math.ceil(child.width);
                        if (curX > maxWidth)
                            maxWidth = curX;
                        if (child.height > maxHeight)
                            maxHeight = child.height;
                        j++;
                    }
                }
                ch = page > 0 ? viewHeight : curY + Math.ceil(maxHeight);
                cw = (page + 1) * viewWidth;
            }
            this.handleAlign(cw, ch);
            this.setBounds(0, 0, cw, ch);
        }
        setupBeforeAdd(xml) {
            super.setupBeforeAdd(xml);
            let str;
            let arr;
            str = xml.attributes.layout;
            if (str)
                this.$layout = fgui.ParseListLayoutType(str);
            let overflow;
            str = xml.attributes.overflow;
            if (str)
                overflow = fgui.ParseOverflowType(str);
            else
                overflow = 0;
            str = xml.attributes.margin;
            if (str)
                this.$margin.parse(str);
            str = xml.attributes.align;
            if (str)
                this.$align = fgui.ParseAlignType(str);
            str = xml.attributes.vAlign;
            if (str)
                this.$verticalAlign = fgui.ParseVertAlignType(str);
            if (overflow == 2) {
                let scroll;
                str = xml.attributes.scroll;
                if (str)
                    scroll = fgui.ParseScrollType(str);
                else
                    scroll = 1;
                let scrollBarDisplay;
                str = xml.attributes.scrollBar;
                if (str)
                    scrollBarDisplay = fgui.ParseScrollBarDisplayType(str);
                else
                    scrollBarDisplay = 0;
                let scrollBarFlags;
                str = xml.attributes.scrollBarFlags;
                if (str)
                    scrollBarFlags = parseInt(str);
                else
                    scrollBarFlags = 0;
                let scrollBarMargin = new fgui.utils.Margin();
                str = xml.attributes.scrollBarMargin;
                if (str)
                    scrollBarMargin.parse(str);
                let vtScrollBarRes;
                let hzScrollBarRes;
                str = xml.attributes.scrollBarRes;
                if (str) {
                    arr = str.split(",");
                    vtScrollBarRes = arr[0];
                    hzScrollBarRes = arr[1];
                }
                let headerRes;
                let footerRes;
                str = xml.attributes.ptrRes;
                if (str) {
                    arr = str.split(",");
                    headerRes = arr[0];
                    footerRes = arr[1];
                }
                this.setupScroll(scrollBarMargin, scroll, scrollBarDisplay, scrollBarFlags, vtScrollBarRes, hzScrollBarRes, headerRes, footerRes);
            }
            else
                this.setupOverflow(overflow);
            str = xml.attributes.lineGap;
            if (str)
                this.$lineGap = parseInt(str);
            str = xml.attributes.colGap;
            if (str)
                this.$columnGap = parseInt(str);
            str = xml.attributes.lineItemCount;
            if (str) {
                if (this.$layout == 2 || this.$layout == 4)
                    this.$columnCount = parseInt(str);
                else if (this.$layout == 3)
                    this.$lineCount = parseInt(str);
            }
            str = xml.attributes.lineItemCount2;
            if (str)
                this.$lineCount = parseInt(str);
            str = xml.attributes.selectionMode;
            if (str)
                this.$selectionMode = fgui.ParseListSelectionMode(str);
            str = xml.attributes.defaultItem;
            if (str)
                this.$defaultItem = str;
            str = xml.attributes.autoItemSize;
            if (this.$layout == 1 || this.$layout == 0)
                this.$autoResizeItem = str != "false";
            else
                this.$autoResizeItem = str == "true";
            str = xml.attributes.renderOrder;
            if (str) {
                this.$childrenRenderOrder = fgui.ParseListChildrenRenderOrder(str);
                if (this.$childrenRenderOrder == 2) {
                    str = xml.attributes.apex;
                    if (str)
                        this.$apexIndex = parseInt(str);
                }
            }
            let col = xml.children;
            col.forEach(cxml => {
                if (cxml.nodeName != "item")
                    return;
                let url = cxml.attributes.url;
                if (!url)
                    url = this.$defaultItem;
                if (!url)
                    return;
                let obj = this.getFromPool(url);
                if (obj != null) {
                    this.addChild(obj);
                    str = cxml.attributes.title;
                    if (str)
                        obj.text = str;
                    str = cxml.attributes.icon;
                    if (str)
                        obj.icon = str;
                    str = cxml.attributes.name;
                    if (str)
                        obj.name = str;
                    str = cxml.attributes.selectedIcon;
                    if (str && (obj instanceof fgui.GButton))
                        obj.selectedIcon = str;
                }
            }, this);
        }
        setupAfterAdd(xml) {
            super.setupAfterAdd(xml);
            let str;
            str = xml.attributes.selectionController;
            if (str)
                this.$selectionController = this.parent.getController(str);
        }
    }
    GList.$lastPosHelper = 0;
    fgui.GList = GList;
})(fgui || (fgui = {}));

(function (fgui) {
    var utils;
    (function (utils) {
        class Recycler {
            constructor() {
                this.$count = 0;
                this.$pool = {};
            }
            get count() {
                return this.$count;
            }
            clear() {
                for (let key in this.$pool) {
                    let arr = this.$pool[key];
                    if (arr) {
                        arr.length = 0;
                        arr = null;
                    }
                }
                this.$pool = {};
                this.$count = 0;
            }
            get(id) {
                let arr = this.$pool[id];
                if (arr == null) {
                    arr = [];
                    this.$pool[id] = arr;
                }
                if (arr.length) {
                    this.$count--;
                    return arr.shift();
                }
                return this.createObject(id);
            }
            recycle(id, obj) {
                if (!id)
                    return;
                let arr = this.$pool[id];
                if (arr == null) {
                    arr = [];
                    this.$pool[id] = arr;
                }
                this.$count++;
                arr.push(obj);
            }
        }
        utils.Recycler = Recycler;
    })(utils = fgui.utils || (fgui.utils = {}));
})(fgui || (fgui = {}));

(function (fgui) {
    var utils;
    (function (utils) {
        class GObjectRecycler extends utils.Recycler {
            constructor() {
                super();
            }
            clear() {
                for (let key in this.$pool) {
                    let arr = this.$pool[key];
                    if (arr) {
                        arr.forEach((v) => {
                            v.dispose();
                        });
                    }
                }
                super.clear();
            }
            createObject(id) {
                return fgui.UIPackage.createObjectFromURL(id);
            }
        }
        utils.GObjectRecycler = GObjectRecycler;
    })(utils = fgui.utils || (fgui.utils = {}));
})(fgui || (fgui = {}));

(function (fgui) {
    class GLoader extends fgui.GObject {
        constructor() {
            super();
            this.$frame = 0;
            this.$color = 0;
            this.$contentSourceWidth = 0;
            this.$contentSourceHeight = 0;
            this.$contentWidth = 0;
            this.$contentHeight = 0;
            this.$loadingTexture = null;
            this.$playing = true;
            this.$url = "";
            this.$fill = 0;
            this.$align = "left";
            this.$verticalAlign = 0;
            this.$showErrorSign = true;
            this.$color = 0xFFFFFF;
        }
        createDisplayObject() {
            this.$container = new fgui.UIContainer(this);
            this.$container.hitArea = new PIXI.Rectangle();
            this.setDisplayObject(this.$container);
            this.$container.interactiveChildren = false;
        }
        dispose() {
            this.clearContent();
            super.dispose();
        }
        get url() {
            return this.$url;
        }
        set url(value) {
            if (this.$url == value)
                return;
            this.$url = value;
            this.loadContent();
            this.updateGear(7);
        }
        get icon() {
            return this.$url;
        }
        set icon(value) {
            this.url = value;
        }
        get align() {
            return this.$align;
        }
        set align(value) {
            if (this.$align != value) {
                this.$align = value;
                this.updateLayout();
            }
        }
        get verticalAlign() {
            return this.$verticalAlign;
        }
        set verticalAlign(value) {
            if (this.$verticalAlign != value) {
                this.$verticalAlign = value;
                this.updateLayout();
            }
        }
        get fill() {
            return this.$fill;
        }
        set fill(value) {
            if (this.$fill != value) {
                this.$fill = value;
                this.updateLayout();
            }
        }
        get autoSize() {
            return this.$autoSize;
        }
        set autoSize(value) {
            if (this.$autoSize != value) {
                this.$autoSize = value;
                this.updateLayout();
            }
        }
        get playing() {
            return this.$playing;
        }
        set playing(value) {
            if (this.$playing != value) {
                this.$playing = value;
                if (this.$content instanceof fgui.MovieClip)
                    this.$content.playing = value;
                this.updateGear(5);
            }
        }
        get frame() {
            return this.$frame;
        }
        set frame(value) {
            if (this.$frame != value) {
                this.$frame = value;
                if (this.$content instanceof fgui.MovieClip)
                    this.$content.currentFrame = value;
                this.updateGear(5);
            }
        }
        get color() {
            return this.$color;
        }
        set color(value) {
            if (this.$color != value) {
                this.$color = value;
                this.updateGear(4);
                this.applyColor();
            }
        }
        applyColor() {
            if (this.$content)
                this.$content.tint = this.$color;
        }
        get showErrorSign() {
            return this.$showErrorSign;
        }
        set showErrorSign(value) {
            this.$showErrorSign = value;
        }
        get content() {
            return this.$content;
        }
        get texture() {
            if (this.$content instanceof fgui.UIImage)
                return this.$content.texture;
            else
                return null;
        }
        set texture(value) {
            this.url = null;
            if (!this.$content) {
                this.$content = new fgui.UIImage(null);
                this.$content.$initDisp();
                this.$container.addChild(this.$content);
            }
            else
                this.$container.addChild(this.$content);
            this.switchToMovieMode(false);
            if (this.$content instanceof fgui.UIImage)
                this.$content.texture = value;
            if (value) {
                this.$contentSourceWidth = value.orig.width;
                this.$contentSourceHeight = value.orig.height;
            }
            else
                this.$contentSourceWidth = this.$contentHeight = 0;
            this.updateLayout();
        }
        loadContent() {
            this.clearContent();
            if (!this.$url)
                return;
            if (fgui.utils.StringUtil.startsWith(this.$url, "ui://"))
                this.loadFromPackage(this.$url);
            else
                this.loadExternal();
        }
        loadFromPackage(itemURL) {
            this.$contentItem = fgui.UIPackage.getItemByURL(itemURL);
            if (this.$contentItem) {
                this.$contentItem.load();
                if (this.$contentItem.type == 0) {
                    if (this.$contentItem.texture == null) {
                        this.setErrorState();
                    }
                    else {
                        this.switchToMovieMode(false);
                        this.$content.$initDisp(this.$contentItem);
                        this.$contentSourceWidth = this.$contentItem.width;
                        this.$contentSourceHeight = this.$contentItem.height;
                        this.updateLayout();
                    }
                }
                else if (this.$contentItem.type == 2) {
                    this.switchToMovieMode(true);
                    this.$contentSourceWidth = this.$contentItem.width;
                    this.$contentSourceHeight = this.$contentItem.height;
                    let mc = this.$content;
                    mc.interval = this.$contentItem.interval;
                    mc.swing = this.$contentItem.swing;
                    mc.repeatDelay = this.$contentItem.repeatDelay;
                    mc.frames = this.$contentItem.frames;
                    mc.boundsRect = new PIXI.Rectangle(0, 0, this.$contentSourceWidth, this.$contentSourceHeight);
                    this.updateLayout();
                }
                else
                    this.setErrorState();
            }
            else
                this.setErrorState();
        }
        switchToMovieMode(value) {
            this.$container.removeChildren();
            if (value) {
                if (!(this.$content instanceof fgui.MovieClip))
                    this.$content = new fgui.MovieClip(this);
            }
            else {
                if (!(this.$content instanceof fgui.UIImage))
                    this.$content = new fgui.UIImage(null);
            }
            this.$container.addChild(this.$content);
        }
        loadExternal() {
            this.$container.removeChildren();
            if (!this.$content || !(this.$content instanceof fgui.UIImage)) {
                this.$content = new fgui.UIImage(null);
                this.$content.$initDisp();
                this.$container.addChild(this.$content);
            }
            else
                this.$container.addChild(this.$content);
            this.$content.texture = PIXI.Texture.from(this.$url, { scaleMode: PIXI.SCALE_MODES.LINEAR });
            let updateContent = () => {
                if (this.$content && this.$content.texture) {
                    this.$content.texture.frame = new PIXI.Rectangle(0, 0, this.$content.texture.baseTexture.width, this.$content.texture.baseTexture.height);
                    this.$contentSourceWidth = this.$content.texture.width;
                    this.$contentSourceHeight = this.$content.texture.height;
                    this.updateLayout();
                }
            }
            this.$content.texture.once("update", () => {
                updateContent()
            });
            updateContent()
            //如果这个图片不是第一次读入，不会触发update
        }
        __loadExternal() {
            let texture = PIXI.Texture.from(this.$url, { scaleMode: PIXI.SCALE_MODES.LINEAR });
            this.$loadingTexture = texture;
            if (texture.width > 1 && texture.height > 1) {
                this.$loadResCompleted(texture);
            }
            else {
                texture.once("update", () => {
                    if (!texture.width || !texture.height)
                        this.$loadResCompleted(null);
                    else
                        this.$loadResCompleted(texture);
                });
            }
        }
        freeExternal(texture) {
            PIXI.Texture.removeFromCache(texture);
            texture.destroy(texture.baseTexture != null);
        }
        $loadResCompleted(texture) {
            if (texture)
                this.onExternalLoadSuccess(texture);
            else {
                this.onExternalLoadFailed();
                if (this.$loadingTexture) {
                    this.$loadingTexture.removeAllListeners();
                    this.freeExternal(this.$loadingTexture);
                }
                this.$loadingTexture = null;
            }
            this.$loadingTexture = null;
        }
        onExternalLoadSuccess(texture) {
            this.$container.removeChildren();
            if (!this.$content || !(this.$content instanceof fgui.UIImage)) {
                this.$content = new fgui.UIImage(null);
                this.$content.$initDisp();
                this.$container.addChild(this.$content);
            }
            else
                this.$container.addChild(this.$content);
            texture.frame = new PIXI.Rectangle(0, 0, texture.baseTexture.width, texture.baseTexture.height);
            this.$content.texture = texture;
            this.$contentSourceWidth = texture.width;
            this.$contentSourceHeight = texture.height;
            this.updateLayout();
        }
        onExternalLoadFailed() {
            this.setErrorState();
        }
        setErrorState() {
            if (!this.$showErrorSign)
                return;
            if (this.$errorSign == null) {
                if (fgui.UIConfig.loaderErrorSign) {
                    this.$errorSign = GLoader.$errorSignPool.get(fgui.UIConfig.loaderErrorSign);
                }
            }
            if (this.$errorSign) {
                this.$errorSign.width = this.width;
                this.$errorSign.height = this.height;
                this.$container.addChild(this.$errorSign.displayObject);
            }
        }
        clearErrorState() {
            if (this.$errorSign) {
                this.$container.removeChild(this.$errorSign.displayObject);
                GLoader.$errorSignPool.recycle(this.$errorSign.resourceURL, this.$errorSign);
                this.$errorSign = null;
            }
        }
        updateLayout() {
            if (this.$content == null) {
                if (this.$autoSize) {
                    this.$updatingLayout = true;
                    this.setSize(50, 30);
                    this.$updatingLayout = false;
                }
                return;
            }
            this.$content.position.set(0, 0);
            this.$content.scale.set(1, 1);
            this.$contentWidth = this.$contentSourceWidth;
            this.$contentHeight = this.$contentSourceHeight;
            if (this.$autoSize) {
                this.$updatingLayout = true;
                if (this.$contentWidth == 0)
                    this.$contentWidth = 50;
                if (this.$contentHeight == 0)
                    this.$contentHeight = 30;
                this.setSize(this.$contentWidth, this.$contentHeight);
                this.$updatingLayout = false;
            }
            else {
                let sx = 1, sy = 1;
                if (this.$fill != 0) {
                    sx = this.width / this.$contentSourceWidth;
                    sy = this.height / this.$contentSourceHeight;
                    if (sx != 1 || sy != 1) {
                        if (this.$fill == 2)
                            sx = sy;
                        else if (this.$fill == 3)
                            sy = sx;
                        else if (this.$fill == 1) {
                            if (sx > sy)
                                sx = sy;
                            else
                                sy = sx;
                        }
                        else if (this.$fill == 5) {
                            if (sx > sy)
                                sy = sx;
                            else
                                sx = sy;
                        }
                        this.$contentWidth = this.$contentSourceWidth * sx;
                        this.$contentHeight = this.$contentSourceHeight * sy;
                    }
                }
                if (this.$content instanceof fgui.UIImage) {
                    this.$content.width = this.$contentWidth;
                    this.$content.height = this.$contentHeight;
                }
                else
                    this.$content.scale.set(sx, sy);
                if (this.$align == "center")
                    this.$content.x = Math.floor((this.width - this.$contentWidth) / 2);
                else if (this.$align == "right")
                    this.$content.x = this.width - this.$contentWidth;
                if (this.$verticalAlign == 1)
                    this.$content.y = Math.floor((this.height - this.$contentHeight) / 2);
                else if (this.$verticalAlign == 2)
                    this.$content.y = this.height - this.$contentHeight;
            }
        }
        clearContent(freeRes = false) {
            this.clearErrorState();
            if (this.$content && this.$content.parent)
                this.$container.removeChild(this.$content);
            if (this.$contentItem == null && this.$content instanceof fgui.UIImage && freeRes)
                this.freeExternal(this.$content.texture);
            this.$content && this.$content.destroy();
            this.$content = null;
            this.$contentItem = null;
        }
        handleSizeChanged() {
            if (!this.$updatingLayout)
                this.updateLayout();
            let rect = this.$container.hitArea;
            rect.x = rect.y = 0;
            rect.width = this.width;
            rect.height = this.height;
        }
        setupBeforeAdd(xml) {
            super.setupBeforeAdd(xml);
            let str;
            str = xml.attributes.url;
            if (str)
                this.$url = str;
            str = xml.attributes.align;
            if (str)
                this.$align = fgui.ParseAlignType(str);
            str = xml.attributes.vAlign;
            if (str)
                this.$verticalAlign = fgui.ParseVertAlignType(str);
            str = xml.attributes.fill;
            if (str)
                this.$fill = fgui.ParseLoaderFillType(str);
            this.$autoSize = xml.attributes.autoSize == "true";
            str = xml.attributes.errorSign;
            if (str)
                this.$showErrorSign = str == "true";
            this.$playing = xml.attributes.playing != "false";
            str = xml.attributes.color;
            if (str)
                this.color = fgui.utils.StringUtil.convertFromHtmlColor(str);
            if (this.$url)
                this.loadContent();
        }
    }
    GLoader.$errorSignPool = new fgui.utils.GObjectRecycler();
    fgui.GLoader = GLoader;
})(fgui || (fgui = {}));

(function (fgui) {
    class GMovieClip extends fgui.GObject {
        constructor() {
            super();
        }
        mapPivotWidth(scale) {
            return scale * this.$sourceWidth;
        }
        mapPivotHeight(scale) {
            return scale * this.$sourceHeight;
        }
        handleSizeChanged() {
            if (this.$displayObject != null && this.$sourceWidth != 0 && this.$sourceHeight != 0)
                this.$displayObject.scale.set(this.$width / this.$sourceWidth * this.$scaleX, this.$height / this.$sourceHeight * this.$scaleY);
        }
        handleScaleChanged() {
            if (this.$displayObject != null) {
                this.$displayObject.scale.set(this.$width / this.$sourceWidth * this.$scaleX, this.$height / this.$sourceHeight * this.$scaleY);
            }
        }
        get touchable() {
            return false;
        }
        set touchable(value) {
            this.$touchable = false;
        }
        get color() {
            return this.$movieClip.tint;
        }
        set color(value) {
            this.$movieClip.tint = value;
        }
        createDisplayObject() {
            this.$movieClip = new fgui.MovieClip(this);
            this.setDisplayObject(this.$movieClip);
        }
        get playing() {
            return this.$movieClip.playing;
        }
        set playing(value) {
            if (this.$movieClip.playing != value) {
                this.$movieClip.playing = value;
                this.updateGear(5);
            }
        }
        get frame() {
            return this.$movieClip.currentFrame;
        }
        set frame(value) {
            if (this.$movieClip.currentFrame != value) {
                this.$movieClip.currentFrame = value;
                this.updateGear(5);
            }
        }
        setPlaySettings(...args) {
            this.$movieClip.setPlaySettings.apply(this.$movieClip, args);
        }
        constructFromResource() {
            this.$sourceWidth = this.packageItem.width;
            this.$sourceHeight = this.packageItem.height;
            this.$initWidth = this.$sourceWidth;
            this.$initHeight = this.$sourceHeight;
            this.setSize(this.$sourceWidth, this.$sourceHeight);
            this.packageItem.load();
            this.$movieClip.interval = this.packageItem.interval;
            this.$movieClip.swing = this.packageItem.swing;
            this.$movieClip.repeatDelay = this.packageItem.repeatDelay;
            this.$movieClip.frames = this.packageItem.frames;
            this.$movieClip.boundsRect = new PIXI.Rectangle(0, 0, this.$sourceWidth, this.$sourceHeight);
        }
        setupBeforeAdd(xml) {
            super.setupBeforeAdd(xml);
            let str;
            str = xml.attributes.frame;
            if (str)
                this.$movieClip.currentFrame = parseInt(str);
            str = xml.attributes.playing;
            this.$movieClip.playing = str != "false";
            str = xml.attributes.color;
            if (str)
                this.color = fgui.utils.StringUtil.convertFromHtmlColor(str);
        }
    }
    fgui.GMovieClip = GMovieClip;
})(fgui || (fgui = {}));

(function (fgui) {
    class GProgressBar extends fgui.GComponent {
        constructor() {
            super();
            this.$max = 0;
            this.$value = 0;
            this.$barMaxWidth = 0;
            this.$barMaxHeight = 0;
            this.$barMaxWidthDelta = 0;
            this.$barMaxHeightDelta = 0;
            this.$barStartX = 0;
            this.$barStartY = 0;
            this.$tweenValue = 0;
            this.$titleType = 0;
            this.$value = 50;
            this.$max = 100;
        }
        get titleType() {
            return this.$titleType;
        }
        set titleType(value) {
            if (this.$titleType != value) {
                this.$titleType = value;
                this.update(this.$value);
            }
        }
        get max() {
            return this.$max;
        }
        set max(value) {
            if (this.$max != value) {
                this.$max = value;
                this.update(this.$value);
            }
        }
        get value() {
            return this.$value;
        }
        set value(value) {
            if (this.$tweener != null) {
                this.$tweener.pause();
                this.$tweener = null;
            }
            if (this.$value != value) {
                this.$value = value;
                this.update(this.$value);
            }
        }
        tweenValue(value, duration) {
            if (this.$value != value) {
                if (this.$tweener) {
                    this.$tweener.stop();
                    TWEEN.remove(this.$tweener);
                }
                this.$tweenValue = this.$value;
                this.$value = value;
                this.$tweener = new TWEEN.Tween(this)
                    .onUpdate(fgui.utils.Binder.create(this.onUpdateTween, this))
                    .to({ $tweenValue: value }, duration * 1000)
                    .easing(GProgressBar.easeLinear)
                    .start();
                return this.$tweener;
            }
            else
                return null;
        }
        onUpdateTween() {
            this.update(this.$tweenValue);
        }
        update(val) {
            let percent = this.$max != 0 ? Math.min(val / this.$max, 1) : 0;
            if (this.$titleObject) {
                switch (this.$titleType) {
                    case 0:
                        this.$titleObject.text = `${Math.round(percent * 100)}%`;
                        break;
                    case 1:
                        this.$titleObject.text = `${Math.round(val)}/${Math.round(this.$max)}`;
                        break;
                    case 2:
                        this.$titleObject.text = `${Math.round(val)}`;
                        break;
                    case 3:
                        this.$titleObject.text = `${Math.round(this.$max)}`;
                        break;
                }
            }
            let fullWidth = this.width - this.$barMaxWidthDelta;
            let fullHeight = this.height - this.$barMaxHeightDelta;
            if (!this.$reverse) {
                if (this.$barObjectH)
                    this.$barObjectH.width = fullWidth * percent;
                if (this.$barObjectV)
                    this.$barObjectV.height = fullHeight * percent;
            }
            else {
                if (this.$barObjectH) {
                    this.$barObjectH.width = fullWidth * percent;
                    this.$barObjectH.x = this.$barStartX + (fullWidth - this.$barObjectH.width);
                }
                if (this.$barObjectV) {
                    this.$barObjectV.height = fullHeight * percent;
                    this.$barObjectV.y = this.$barStartY + (fullHeight - this.$barObjectV.height);
                }
            }
            if (this.$aniObject instanceof fgui.GMovieClip)
                this.$aniObject.frame = Math.round(percent * 100);
        }
        constructFromXML(xml) {
            super.constructFromXML(xml);
            xml = xml.getChildNodes("ProgressBar")[0];
            let str;
            str = xml.attributes.titleType;
            if (str)
                this.$titleType = fgui.ParseProgressTitleType(str);
            this.$reverse = xml.attributes.reverse == "true";
            this.$titleObject = this.getChild("title");
            this.$barObjectH = this.getChild("bar");
            this.$barObjectV = this.getChild("bar_v");
            this.$aniObject = this.getChild("ani");
            if (this.$barObjectH) {
                this.$barMaxWidth = this.$barObjectH.width;
                this.$barMaxWidthDelta = this.width - this.$barMaxWidth;
                this.$barStartX = this.$barObjectH.x;
            }
            if (this.$barObjectV) {
                this.$barMaxHeight = this.$barObjectV.height;
                this.$barMaxHeightDelta = this.height - this.$barMaxHeight;
                this.$barStartY = this.$barObjectV.y;
            }
        }
        handleSizeChanged() {
            super.handleSizeChanged();
            if (this.$barObjectH)
                this.$barMaxWidth = this.width - this.$barMaxWidthDelta;
            if (this.$barObjectV)
                this.$barMaxHeight = this.height - this.$barMaxHeightDelta;
            if (!this.$inProgressBuilding)
                this.update(this.$value);
        }
        setupAfterAdd(xml) {
            super.setupAfterAdd(xml);
            xml = xml.getChildNodes("ProgressBar")[0];
            if (xml) {
                this.$value = parseInt(xml.attributes.value) || 0;
                this.$max = parseInt(xml.attributes.max) || 0;
            }
            this.update(this.$value);
        }
        dispose() {
            if (this.$tweener) {
                this.$tweener.stop();
                TWEEN.remove(this.$tweener);
            }

            this.$tweener = null;
            super.dispose();
        }
    }
    GProgressBar.easeLinear = fgui.ParseEaseType("linear");
    fgui.GProgressBar = GProgressBar;
})(fgui || (fgui = {}));

(function (fgui) {
    class LineInfo {
        constructor() {
            this.width = 0;
            this.height = 0;
            this.textHeight = 0;
            this.y = 0;
        }
        static get() {
            if (LineInfo.pool.length) {
                let ret = LineInfo.pool.pop();
                ret.width = 0;
                ret.height = 0;
                ret.textHeight = 0;
                ret.text = null;
                ret.y = 0;
                return ret;
            }
            else
                return new LineInfo();
        }
        static recycle(value) {
            LineInfo.pool.push(value);
        }
        static recycleMany(value) {
            if (value && value.length) {
                value.forEach(v => {
                    LineInfo.pool.push(v);
                }, this);
            }
            value.length = 0;
        }
    }
    LineInfo.pool = [];
    fgui.LineInfo = LineInfo;
    class GTextField extends fgui.GObject {
        constructor() {
            super();
            this.$verticalAlign = 0;
            this.$offset = new PIXI.Point();
            this.$singleLine = true;
            this.$text = "";
            this.$textWidth = 0;
            this.$textHeight = 0;
            this.$style = new PIXI.TextStyle({
                fontSize: 12,
                fontFamily: fgui.UIConfig.defaultFont,
                align: "left",
                leading: 3,
                fill: 0
            });
            this.$verticalAlign = 0;
            this.$text = "";
            this.$autoSize = 1;
            this.$widthAutoSize = true;
            this.$heightAutoSize = true;
            this.$bitmapPool = [];
            this.touchable = false;
        }
        createDisplayObject() {
            this.$textField = new fgui.UITextField(this);
            this.setDisplayObject(this.$textField);
        }
        switchBitmapMode(val) {
            if (val && this.displayObject == this.$textField) {
                if (this.$btContainer == null)
                    this.$btContainer = new fgui.UIContainer(this);
                this.switchDisplayObject(this.$btContainer);
            }
            else if (!val && this.displayObject == this.$btContainer)
                this.switchDisplayObject(this.$textField);
        }
        dispose() {
            fgui.GTimer.inst.remove(this.$render, this);
            this.$bitmapFont = null;
            if (this.$bitmapPool) this.$bitmapPool.length = 0;
            this.$bitmapPool = null;
            this.$style = null;
            super.dispose();
        }
        set text(value) {
            this.setText(value);
        }
        setText(value) {
            if (value == null)
                value = "";
            if (this.$text == value)
                return;
            this.$text = value;
            this.updateGear(6);
            if (this.parent && this.parent.$inProgressBuilding)
                this.renderNow();
            else
                this.render();
        }
        get text() {
            return this.getText();
        }
        getText() {
            return this.$text;
        }
        set color(value) {
            this.setColor(value);
        }
        get color() {
            return this.getColor();
        }
        set colors(value) {
            this.setColor(value);
        }
        get colors() {
            return this.getColor();
        }
        getColor() {
            return this.$color;
        }
        setColor(value) {
            if (this.$color != value) {
                this.$color = value;
                this.updateGear(4);
                this.$style.fill = this.$color;
                this.render();
            }
        }
        get titleColor() {
            return this.color;
        }
        set titleColor(value) {
            this.color = value;
        }
        get lineHeight() {
            if (this.$style.lineHeight > 0)
                return this.$style.lineHeight;
            if (!this.$fontProperties)
                return (+this.$style.fontSize) + this.$style.strokeThickness;
            return this.$fontProperties.fontSize + this.$style.strokeThickness + this.$style.leading;
        }
        set lineHeight(lh) {
            this.$style.lineHeight = lh;
        }
        get font() {
            return this.$font || fgui.UIConfig.defaultFont;
        }
        set font(value) {
            if (this.$font != value) {
                this.$font = value;
                if (this.$font && fgui.utils.StringUtil.startsWith(this.$font, "ui://"))
                    this.$bitmapFont = fgui.UIPackage.getBitmapFontByURL(this.$font);
                else
                    this.$style.fontFamily = this.$font || fgui.UIConfig.defaultFont;
                this.render();
            }
        }
        get fontSize() {
            return +this.$style.fontSize;
        }
        set fontSize(value) {
            if (value <= 0)
                return;
            if (this.$style.fontSize != value) {
                this.$style.fontSize = value;
                this.render();
            }
        }
        get align() {
            return this.$style.align;
        }
        set align(value) {
            if (this.$style.align != value) {
                this.$style.align = value;
                this.render();
            }
        }
        get verticalAlign() {
            return this.$verticalAlign;
        }
        set verticalAlign(value) {
            if (this.$verticalAlign != value) {
                this.$verticalAlign = value;
                if (!this.$inProgressBuilding)
                    this.layoutAlign();
            }
        }
        get leading() {
            return this.$style.leading;
        }
        set leading(value) {
            if (this.$style.leading != value) {
                this.$style.leading = value;
                this.render();
            }
        }
        get letterSpacing() {
            return this.$style.letterSpacing;
        }
        set letterSpacing(value) {
            if (this.$style.letterSpacing != value) {
                this.$style.letterSpacing = value;
                this.render();
            }
        }
        get underline() {
            return false;
        }
        set underline(value) {
        }
        get bold() {
            return this.$style.fontWeight == "bold";
        }
        set bold(value) {
            let v = value === true ? "bold" : "normal";
            if (this.$style.fontWeight != v) {
                this.$style.fontWeight = v;
                this.render();
            }
        }
        get weight() {
            return this.$style.fontWeight;
        }
        set weight(v) {
            if (this.$style.fontWeight != v) {
                this.$style.fontWeight = v;
                this.render();
            }
        }
        get variant() {
            return this.$style.fontVariant;
        }
        set variant(v) {
            if (this.$style.fontVariant != v) {
                this.$style.fontVariant = v;
                this.render();
            }
        }
        get italic() {
            return this.$style.fontStyle == "italic";
        }
        set italic(value) {
            let v = value === true ? "italic" : "normal";
            if (this.$style.fontStyle != v) {
                this.$style.fontStyle = v;
                this.render();
            }
        }
        get multipleLine() {
            return !this.$singleLine;
        }
        set multipleLine(value) {
            value = !value;
            if (this.$singleLine != value) {
                this.$singleLine = value;
                this.render();
            }
        }
        get stroke() {
            return +this.$style.strokeThickness;
        }
        set stroke(value) {
            if (this.$style.strokeThickness != value)
                this.$style.strokeThickness = value;
        }
        get strokeColor() {
            return this.$style.stroke;
        }
        set strokeColor(value) {
            if (this.$style.stroke != value)
                this.$style.stroke = value;
        }
        set autoSize(value) {
            if (this.$autoSize != value) {
                this.$autoSize = value;
                this.$widthAutoSize = (value == 1 || value == 3);
                this.$heightAutoSize = (value == 1 || value == 2);
                this.render();
            }
        }
        get autoSize() {
            return this.$autoSize;
        }
        get textWidth() {
            if (this.$requireRender)
                this.renderNow();
            return this.$textWidth;
        }
        get textHeight() {
            if (this.$requireRender)
                this.renderNow();
            return this.$textHeight;
        }
        set cacheAsBitmap(v) {
            this.$cacheAsBitmap = v;
        }
        get cacheAsBitmap() { return this.$cacheAsBitmap; }
        ensureSizeCorrect() {
            if (this.$sizeDirty && this.$requireRender)
                this.renderNow();
        }
        render() {
            if (!this.$requireRender) {
                this.$requireRender = true;
                fgui.GTimer.inst.callLater(this.$render, this);
            }
            if (!this.$sizeDirty && (this.$widthAutoSize || this.$heightAutoSize)) {
                this.$sizeDirty = true;
                this.emit(fgui.DisplayObjectEvent.SIZE_DELAY_CHANGE, this);
            }
        }
        applyStyle() {
            if (!this.$style) return
            this.$textField.style.stroke = this.$style.stroke;
            this.$textField.style.strokeThickness = this.$style.strokeThickness;
            this.$textField.style.fontStyle = this.$style.fontStyle;
            this.$textField.style.fontVariant = this.$style.fontVariant;
            this.$textField.style.fontWeight = this.$style.fontWeight;
            this.$textField.style.letterSpacing = this.$style.letterSpacing;
            this.$textField.style.align = this.$style.align;
            this.$textField.style.fontSize = this.$style.fontSize;
            this.$textField.style.fontFamily = this.$style.fontFamily;
            this.$textField.style.fill = this.$style.fill;
            this.$textField.style.leading = this.$style.leading;
        }
        $render() {
            if (this.$requireRender)
                this.renderNow();
        }
        renderNow(updateBounds = true) {
            if (this.disposed) return
            if (this.$cacheAsBitmap) {
                this.$textField.cacheAsBitmap = false;
            }
            this.$requireRender = false;
            this.$sizeDirty = false;
            if (this.$bitmapFont != null) {
                this.renderWithBitmapFont(updateBounds);
                return;
            }
            this.switchBitmapMode(false);
            this.applyStyle();
            this.$textField.$updateMinHeight();
            let wordWrap = !this.$widthAutoSize && this.multipleLine;
            this.$textField.width = this.$textField.style.wordWrapWidth = (wordWrap || this.autoSize == 0) ? Math.ceil(this.width) : 10000;
            this.$textField.style.wordWrap = wordWrap;
            this.$textField.style.breakWords = wordWrap;
            this.$textField.text = this.$text;
            this.$fontProperties = PIXI.TextMetrics.measureFont(this.$style.toFontString());
            this.$textWidth = Math.ceil(this.$textField.textWidth);
            if (this.$textWidth > 0)
                this.$textWidth += GTextField.GUTTER_X * 2;
            this.$textHeight = Math.ceil(this.$textField.textHeight);
            if (this.$textHeight > 0)
                this.$textHeight += GTextField.GUTTER_Y * 2;
            let w = this.width, h = this.height;
            if (this.autoSize == 3)
                this.shrinkTextField();
            else {
                this.$textField.scale.set(1, 1);
                if (this.$widthAutoSize) {
                    w = this.$textWidth;
                    this.$textField.width = w;
                }
                if (this.$heightAutoSize) {
                    h = this.$textHeight;
                    if (this.$textField.height != this.$textHeight)
                        this.$textField.height = this.$textHeight;
                }
                else {
                    h = this.height;
                    if (this.$textHeight > h)
                        this.$textHeight = h;
                }
            }
            if (updateBounds) {
                this.$updatingSize = true;
                this.setSize(w, h);
                this.$updatingSize = false;
            }
            this.layoutAlign();
            if (this.$cacheAsBitmap) {
                this.$textField.cacheAsBitmap = true;
            }
        }
        renderWithBitmapFont(updateBounds) {
            this.switchBitmapMode(true);
            this.$btContainer.children.forEach((c, i) => {
                this.$bitmapPool.push(this.$btContainer.getChildAt(i));
            }, this);
            this.$btContainer.removeChildren();
            if (!this.$lines)
                this.$lines = [];
            else
                LineInfo.recycleMany(this.$lines);
            let letterSpacing = this.letterSpacing;
            let lineSpacing = this.leading - 1;
            let rectWidth = this.width - GTextField.GUTTER_X * 2;
            let lineWidth = 0, lineHeight = 0, lineTextHeight = 0;
            let glyphWidth = 0, glyphHeight = 0;
            let wordChars = 0, wordStart = 0, wordEnd = 0;
            let lastLineHeight = 0;
            let lineBuffer = "";
            let lineY = GTextField.GUTTER_Y;
            let line;
            let wordWrap = !this.$widthAutoSize && this.multipleLine;
            let fontScale = this.$bitmapFont.resizable ? this.fontSize / this.$bitmapFont.size : 1;
            let glyph;
            this.$textWidth = 0;
            this.$textHeight = 0;
            let textLength = this.text.length;
            for (let offset = 0; offset < textLength; ++offset) {
                let ch = this.$text.charAt(offset);
                let cc = ch.charCodeAt(offset);
                if (ch == "\n") {
                    lineBuffer += ch;
                    line = LineInfo.get();
                    line.width = lineWidth;
                    if (lineTextHeight == 0) {
                        if (lastLineHeight == 0)
                            lastLineHeight = Math.ceil(this.fontSize * fontScale);
                        if (lineHeight == 0)
                            lineHeight = lastLineHeight;
                        lineTextHeight = lineHeight;
                    }
                    line.height = lineHeight;
                    lastLineHeight = lineHeight;
                    line.textHeight = lineTextHeight;
                    line.text = lineBuffer;
                    line.y = lineY;
                    lineY += (line.height + lineSpacing);
                    if (line.width > this.$textWidth)
                        this.$textWidth = line.width;
                    this.$lines.push(line);
                    lineBuffer = "";
                    lineWidth = 0;
                    lineHeight = 0;
                    lineTextHeight = 0;
                    wordChars = 0;
                    wordStart = 0;
                    wordEnd = 0;
                    continue;
                }
                if (cc > 256 || cc <= 32) {
                    if (wordChars > 0)
                        wordEnd = lineWidth;
                    wordChars = 0;
                }
                else {
                    if (wordChars == 0)
                        wordStart = lineWidth;
                    wordChars++;
                }
                if (ch == " ") {
                    glyphWidth = Math.ceil(this.fontSize / 2);
                    glyphHeight = Math.ceil(this.fontSize);
                }
                else {
                    glyph = this.$bitmapFont.glyphs[ch];
                    if (glyph) {
                        glyphWidth = Math.ceil(glyph.advance * fontScale);
                        glyphHeight = Math.ceil(glyph.lineHeight * fontScale);
                    }
                    else if (ch == " ") {
                        glyphWidth = Math.ceil(this.$bitmapFont.size * fontScale / 2);
                        glyphHeight = Math.ceil(this.$bitmapFont.size * fontScale);
                    }
                    else {
                        glyphWidth = 0;
                        glyphHeight = 0;
                    }
                }
                if (glyphHeight > lineTextHeight)
                    lineTextHeight = glyphHeight;
                if (glyphHeight > lineHeight)
                    lineHeight = glyphHeight;
                if (lineWidth != 0)
                    lineWidth += letterSpacing;
                lineWidth += glyphWidth;
                if (!wordWrap || lineWidth <= rectWidth) {
                    lineBuffer += ch;
                }
                else {
                    line = LineInfo.get();
                    line.height = lineHeight;
                    line.textHeight = lineTextHeight;
                    if (lineBuffer.length == 0) {
                        line.text = ch;
                    }
                    else if (wordChars > 0 && wordEnd > 0) {
                        lineBuffer += ch;
                        let len = lineBuffer.length - wordChars;
                        line.text = fgui.utils.StringUtil.trimRight(lineBuffer.substr(0, len));
                        line.width = wordEnd;
                        lineBuffer = lineBuffer.substr(len + 1);
                        lineWidth -= wordStart;
                    }
                    else {
                        line.text = lineBuffer;
                        line.width = lineWidth - (glyphWidth + letterSpacing);
                        lineBuffer = ch;
                        lineWidth = glyphWidth;
                        lineHeight = glyphHeight;
                        lineTextHeight = glyphHeight;
                    }
                    line.y = lineY;
                    lineY += (line.height + lineSpacing);
                    if (line.width > this.$textWidth)
                        this.$textWidth = line.width;
                    wordChars = 0;
                    wordStart = 0;
                    wordEnd = 0;
                    this.$lines.push(line);
                }
            }
            if (lineBuffer.length > 0
                || this.$lines.length > 0 && fgui.utils.StringUtil.endsWith(this.$lines[this.$lines.length - 1].text, "\n")) {
                line = LineInfo.get();
                line.width = lineWidth;
                if (lineHeight == 0)
                    lineHeight = lastLineHeight;
                if (lineTextHeight == 0)
                    lineTextHeight = lineHeight;
                line.height = lineHeight;
                line.textHeight = lineTextHeight;
                line.text = lineBuffer;
                line.y = lineY;
                if (line.width > this.$textWidth)
                    this.$textWidth = line.width;
                this.$lines.push(line);
            }
            if (this.$textWidth > 0)
                this.$textWidth += GTextField.GUTTER_X * 2;
            let count = this.$lines.length;
            if (count == 0) {
                this.$textHeight = 0;
            }
            else {
                line = this.$lines[this.$lines.length - 1];
                this.$textHeight = line.y + line.height + GTextField.GUTTER_Y;
            }
            let w, h = 0;
            if (this.$widthAutoSize) {
                if (this.$textWidth == 0)
                    w = 0;
                else
                    w = this.$textWidth;
            }
            else
                w = this.width;
            if (this.$heightAutoSize) {
                if (this.$textHeight == 0)
                    h = 0;
                else
                    h = this.$textHeight;
            }
            else
                h = this.height;
            if (updateBounds) {
                this.$updatingSize = true;
                this.setSize(w, h);
                this.$updatingSize = false;
            }
            if (w == 0 || h == 0)
                return;
            rectWidth = this.width - GTextField.GUTTER_X * 2;
            this.$lines.forEach(line => {
                let charX = GTextField.GUTTER_X;
                let lineIndent = 0;
                let charIndent = 0;
                if (this.align == "center")
                    lineIndent = (rectWidth - line.width) / 2;
                else if (this.align == "right")
                    lineIndent = rectWidth - line.width;
                else
                    lineIndent = 0;
                textLength = line.text.length;
                for (let j = 0; j < textLength; j++) {
                    let ch = line.text.charAt(j);
                    glyph = this.$bitmapFont.glyphs[ch];
                    if (glyph != null) {
                        charIndent = (line.height + line.textHeight) / 2 - Math.ceil(glyph.lineHeight * fontScale);
                        let bm;
                        if (this.$bitmapPool.length)
                            bm = this.$bitmapPool.pop();
                        else
                            bm = new PIXI.Sprite();
                        bm.x = charX + lineIndent + Math.ceil(glyph.offsetX * fontScale);
                        bm.y = line.y + charIndent + Math.ceil(glyph.offsetY * fontScale);
                        bm.texture = glyph.texture;
                        bm.scale.set(fontScale, fontScale);
                        bm.tint = this.$bitmapFont.colorable === true ? this.$color : 0xFFFFFF;
                        this.$btContainer.addChild(bm);
                        charX += letterSpacing + Math.ceil(glyph.advance * fontScale);
                    }
                    else if (ch == " ") {
                        charX += letterSpacing + Math.ceil(this.$bitmapFont.size * fontScale / 2);
                    }
                    else {
                        charX += letterSpacing;
                    }
                }
            });
        }
        localToGlobal(ax = 0, ay = 0, resultPoint) {
            ax -= this.$offset.x;
            ay -= this.$offset.y;
            return super.localToGlobal(ax, ay, resultPoint);
        }
        globalToLocal(ax = 0, ay = 0, resultPoint) {
            let r = super.globalToLocal(ax, ay, resultPoint);
            r.x -= this.$offset.x;
            r.y -= this.$offset.y;
            return r;
        }
        handleSizeChanged() {
            if (this.$updatingSize)
                return;
            if (this.$bitmapFont != null) {
                if (!this.$widthAutoSize)
                    this.render();
            }
            else {
                if (this.$inProgressBuilding) {
                    this.$textField.width = this.width;
                    this.$textField.height = this.height;
                }
                else {
                    if (this.$autoSize == 3)
                        this.shrinkTextField();
                    else {
                        if (!this.$widthAutoSize) {
                            if (!this.$heightAutoSize) {
                                this.$textField.width = this.width;
                                this.$textField.height = this.height;
                            }
                            else
                                this.$textField.width = this.width;
                        }
                    }
                }
            }
            this.layoutAlign();
        }
        shrinkTextField() {
            let fitScale = Math.min(1, this.width / this.$textWidth);
            this.$textField.scale.set(fitScale, fitScale);
        }
        layoutAlign() {
            let tw = this.$textWidth, th = this.$textHeight;
            if (this.autoSize == 3) {
                tw *= this.displayObject.scale.x;
                th *= this.displayObject.scale.y;
            }
            if (this.$verticalAlign == 0 || th == 0)
                this.$offset.y = GTextField.GUTTER_Y;
            else {
                let dh = Math.max(0, this.height - th);
                if (this.$verticalAlign == 1)
                    this.$offset.y = dh * .5;
                else if (this.$verticalAlign == 2)
                    this.$offset.y = dh;
            }
            let xPos = 0;
            switch (this.$style.align) {
                case "center":
                    xPos = (this.width - tw) * .5;
                    break;
                case "right":
                    xPos = this.width - tw;
                    break;
            }
            this.$offset.x = xPos;
            this.updatePosition();
        }
        updatePosition() {
            this.displayObject.position.set(Math.floor(this.x + this.$offset.x), Math.floor(this.y + this.$offset.y));
        }
        handleXYChanged() {
            super.handleXYChanged();
            if (this.$displayObject)
                this.updatePosition();
        }
        setupBeforeAdd(xml) {
            super.setupBeforeAdd(xml);
            let str = xml.attributes.font;
            if (str)
                this.font = str;
            str = xml.attributes.vAlign;
            if (str)
                this.verticalAlign = fgui.ParseVertAlignType(str);
            str = xml.attributes.leading;
            if (str)
                this.$style.leading = parseInt(str);
            str = xml.attributes.letterSpacing;
            if (str)
                this.$style.letterSpacing = parseInt(str);
            str = xml.attributes.fontSize;
            if (str)
                this.$style.fontSize = parseInt(str);
            str = xml.attributes.color;
            if (str)
                this.color = fgui.utils.StringUtil.convertFromHtmlColor(str);
            str = xml.attributes.align;
            if (str)
                this.align = fgui.ParseAlignType(str);
            str = xml.attributes.autoSize;
            if (str) {
                this.autoSize = fgui.ParseAutoSizeType(str);
                this.$widthAutoSize = (this.$autoSize == 1 || this.$autoSize == 3);
                this.$heightAutoSize = (this.$autoSize == 1 || this.$autoSize == 2);
            }
            this.underline = xml.attributes.underline == "true";
            this.italic = xml.attributes.italic == "true";
            this.bold = xml.attributes.bold == "true";
            this.multipleLine = xml.attributes.singleLine != "true";
            str = xml.attributes.strokeColor;
            if (str) {
                this.strokeColor = fgui.utils.StringUtil.convertFromHtmlColor(str);
                str = xml.attributes.strokeSize;
                if (str)
                    this.stroke = parseInt(str) + 1;
                else
                    this.stroke = 2;
            }
        }
        setupAfterAdd(xml) {
            super.setupAfterAdd(xml);
            let str = xml.attributes.text;
            if (str != null && str.length > 0)
                this.text = str;
            this.$sizeDirty = false;
        }
    }
    GTextField.GUTTER_X = 2;
    GTextField.GUTTER_Y = 2;
    fgui.GTextField = GTextField;
})(fgui || (fgui = {}));

(function (fgui) {
    class TextBlock {
    }
    fgui.TextBlock = TextBlock;
    class GRichTextField extends fgui.GTextField {
        constructor() {
            super();
            this.$textField.interactive = true;
            this.$textField.interactiveChildren = false;
            this.on(fgui.TextEvent.LinkClick, this.$clickLink, this);
        }
        set ubbEnabled(value) {
            if (this.$ubbEnabled != value) {
                this.$ubbEnabled = value;
                this.render();
            }
        }
        get ubbEnabled() {
            return this.$ubbEnabled;
        }
        setupBeforeAdd(xml) {
            super.setupBeforeAdd(xml);
            this.$ubbEnabled = xml.attributes.ubb == "true";
        }
        set textFlow(flow) {
            Object.assign(this.$style, flow.style);
            this.$textFlow = flow;
            this.text = flow.text;
            this.render();
        }
        set text(value) {
            this.$text = value;
            if (this.$text == null)
                this.$text = "";
            this.$textField.width = this.width;
            this.updateGear(6);
            this.render();
        }
        $clickLink(block) {
            this.emit(fgui.TextEvent.LinkClick, block.text, this);
        }
        dispose() {
            this.off(fgui.TextEvent.LinkClick, this.$clickLink, this);
            super.dispose();
        }
    }
    fgui.GRichTextField = GRichTextField;
})(fgui || (fgui = {}));

(function (fgui) {
    class GRootMouseStatus {
        constructor() {
            this.touchDown = false;
            this.mouseX = 0;
            this.mouseY = 0;
        }
    }
    fgui.GRootMouseStatus = GRootMouseStatus;
    class GRoot extends fgui.GComponent {
        constructor() {
            super();
            if (GRoot.$inst == null)
                GRoot.$inst = this;
            this.opaque = false;
            this.$popupStack = [];
            this.$justClosedPopups = [];
            this.$uid = GRoot.uniqueID++;
            fgui.utils.DOMEventManager.inst.on(fgui.DisplayObjectEvent.MOUSE_WHEEL, this.dispatchMouseWheel, this);
        }
        static get inst() {
            if (GRoot.$inst == null)
                new GRoot();
            return GRoot.$inst;
        }
        static get globalMouseStatus() {
            return GRoot.$gmStatus;
        }
        attachTo(app, stageOptions) {
            fgui.GTimer.inst.setTicker(PIXI.Ticker.shared);
            if (this.$uiStage) {
                this.$uiStage.off(fgui.DisplayObjectEvent.SIZE_CHANGED, this.$winResize, this);
                this.$uiStage.nativeStage.off(fgui.InteractiveEvents.Down, this.$stageDown, this);
                this.$uiStage.nativeStage.off(fgui.InteractiveEvents.Up, this.$stageUp, this);
                this.$uiStage.nativeStage.off(fgui.InteractiveEvents.Move, this.$stageMove, this);
                this.$uiStage.nativeStage.removeChild(this.$displayObject);
                this.$uiStage.dispose();
            }
            this.$uiStage = new fgui.UIStage(app, stageOptions);
            this.$uiStage.nativeStage.on(fgui.InteractiveEvents.Down, this.$stageDown, this);
            this.$uiStage.nativeStage.on(fgui.InteractiveEvents.Up, this.$stageUp, this);
            this.$uiStage.nativeStage.on(fgui.InteractiveEvents.Move, this.$stageMove, this);
            this.$uiStage.nativeStage.addChild(this.$displayObject);
            if (!this.$modalLayer) {
                this.$modalLayer = new fgui.GGraph();
                this.$modalLayer.setSize(this.width, this.height);
                this.$modalLayer.drawRect(0, 0, 0, fgui.UIConfig.modalLayerColor, fgui.UIConfig.modalLayerAlpha);
                this.$modalLayer.addRelation(this, 24);
            }
        }
        get uniqueID() {
            return this.$uid;
        }
        get stageWidth() {
            return this.$uiStage.stageWidth;
        }
        get stageHeight() {
            return this.$uiStage.stageHeight;
        }
        get contentScaleFactor() {
            return this.$uiStage.resolution;
        }
        get applicationContext() {
            return this.$uiStage.applicationContext;
        }
        get nativeStage() {
            return this.$uiStage.nativeStage;
        }
        get orientation() {
            return this.$uiStage.orientation;
        }
        get stageWrapper() {
            return this.$uiStage;
        }

        get view() {
            return this.getChildAt(0)
        }

        dispatchMouseWheel(evt) {
            let childUnderMouse = this.getObjectUnderPoint(GRoot.globalMouseStatus.mouseX, GRoot.globalMouseStatus.mouseY);
            if (childUnderMouse != null) {
                childUnderMouse.emit(fgui.DisplayObjectEvent.MOUSE_WHEEL, evt);
                while (childUnderMouse.parent && childUnderMouse.parent != this) {
                    childUnderMouse = childUnderMouse.parent;
                }
            }
        }
        getObjectUnderPoint(globalX, globalY) {
            GRoot.sHelperPoint.set(globalX, globalY);
            const boundary = this.$uiStage.$appContext.renderer.events.rootBoundary
            let ret = boundary.hitTest(globalX, globalY);
            return ret && (fgui.GObject.castFromNativeObject(ret) || ret.parent);
        }
        showWindow(win) {
            this.addChild(win);
            win.requestFocus();
            if (win.x > this.width)
                win.x = this.width - win.width;
            else if (win.x + win.width < 0)
                win.x = 0;
            if (win.y > this.height)
                win.y = this.height - win.height;
            else if (win.y + win.height < 0)
                win.y = 0;
            this.adjustModalLayer();
        }
        hideWindow(win) {
            win.hide();
        }
        hideWindowImmediately(win) {
            if (win.parent == this)
                this.removeChild(win);
            this.adjustModalLayer();
        }
        bringToFront(win) {
            let i;
            if (this.$modalLayer.parent != null && !win.modal)
                i = this.getChildIndex(this.$modalLayer) - 1;
            else
                i = this.numChildren - 1;
            for (; i >= 0; i--) {
                let g = this.getChildAt(i);
                if (g == win)
                    return;
                if (g instanceof fgui.Window)
                    break;
            }
            if (i >= 0)
                this.setChildIndex(win, i);
        }
        showModalWait(msg = null) {
            if (fgui.UIConfig.globalModalWaiting != null) {
                if (this.$modalWaitPane == null) {
                    this.$modalWaitPane = fgui.UIPackage.createObjectFromURL(fgui.UIConfig.globalModalWaiting);
                    this.$modalWaitPane.addRelation(this, 24);
                }
                this.$modalWaitPane.setSize(this.width, this.height);
                this.addChild(this.$modalWaitPane);
                this.$modalWaitPane.text = msg;
            }
        }
        closeModalWait() {
            if (this.$modalWaitPane != null && this.$modalWaitPane.parent != null)
                this.removeChild(this.$modalWaitPane);
        }
        closeAllExceptModals() {
            let arr = this.$children.slice();
            arr.forEach(g => {
                if ((g instanceof fgui.Window) && !g.modal)
                    g.hide();
            }, this);
        }
        closeAllWindows() {
            let arr = this.$children.slice();
            arr.forEach(g => {
                if (g instanceof fgui.Window)
                    g.hide();
            }, this);
        }
        getTopWindow() {
            let cnt = this.numChildren;
            for (let i = cnt - 1; i >= 0; i--) {
                let g = this.getChildAt(i);
                if (g instanceof fgui.Window) {
                    return g;
                }
            }
            return null;
        }
        get hasModalWindow() {
            return this.$modalLayer.parent != null;
        }
        get modalWaiting() {
            return this.$modalWaitPane && this.$modalWaitPane.inContainer;
        }
        showPopup(popup, target = null, dir = 0) {
            if (this.$popupStack.length > 0) {
                let k = this.$popupStack.indexOf(popup);
                if (k != -1) {
                    for (let i = this.$popupStack.length - 1; i >= k; i--)
                        this.removeChild(this.$popupStack.pop());
                }
            }
            this.$popupStack.push(popup);
            this.addChild(popup);
            this.adjustModalLayer();
            let pos;
            let sizeW = 0, sizeH = 0;
            if (target) {
                pos = target.localToRoot();
                sizeW = target.width;
                sizeH = target.height;
            }
            else
                pos = this.globalToLocal(GRoot.$gmStatus.mouseX, GRoot.$gmStatus.mouseY);
            let xx, yy;
            xx = pos.x;
            if (xx + popup.width > this.width)
                xx = xx + sizeW - popup.width;
            yy = pos.y + sizeH;
            if ((dir == 0 && yy + popup.height > this.height)
                || dir == 2) {
                yy = pos.y - popup.height - 1;
                if (yy < 0) {
                    yy = 0;
                    xx += sizeW * .5;
                }
            }
            popup.x = xx;
            popup.y = yy;
        }
        togglePopup(popup, target = null, dir) {
            if (this.$justClosedPopups.indexOf(popup) != -1)
                return;
            this.showPopup(popup, target, dir);
        }
        hidePopup(popup = null) {
            let i;
            if (popup != null) {
                let k = this.$popupStack.indexOf(popup);
                if (k != -1) {
                    for (i = this.$popupStack.length - 1; i >= k; i--)
                        this.closePopup(this.$popupStack.pop());
                }
            }
            else {
                let cnt = this.$popupStack.length;
                for (i = cnt - 1; i >= 0; i--)
                    this.closePopup(this.$popupStack[i]);
                this.$popupStack.length = 0;
            }
        }
        get hasAnyPopup() {
            return this.$popupStack.length != 0;
        }
        closePopup(target) {
            if (target.parent != null) {
                if (target instanceof fgui.Window)
                    target.hide();
                else
                    this.removeChild(target);
            }
        }
        showTooltips(msg) {
            if (this.$defaultTooltipWin == null) {
                let resourceURL = fgui.UIConfig.tooltipsWin;
                if (!resourceURL) {
                    console.error("UIConfig.tooltipsWin not defined");
                    return;
                }
                this.$defaultTooltipWin = fgui.UIPackage.createObjectFromURL(resourceURL);
            }
            this.$defaultTooltipWin.text = msg;
            this.showTooltipsWin(this.$defaultTooltipWin);
        }
        showTooltipsWin(tooltipWin, position = null) {
            this.hideTooltips();
            this.$tooltipWin = tooltipWin;
            let xx = 0;
            let yy = 0;
            if (position == null) {
                xx = GRoot.$gmStatus.mouseX + 10;
                yy = GRoot.$gmStatus.mouseY + 20;
            }
            else {
                xx = position.x;
                yy = position.y;
            }
            let pt = this.globalToLocal(xx, yy);
            xx = pt.x;
            yy = pt.y;
            if (xx + this.$tooltipWin.width > this.width) {
                xx = xx - this.$tooltipWin.width - 1;
                if (xx < 0)
                    xx = 10;
            }
            if (yy + this.$tooltipWin.height > this.height) {
                yy = yy - this.$tooltipWin.height - 1;
                if (xx - this.$tooltipWin.width - 1 > 0)
                    xx = xx - this.$tooltipWin.width - 1;
                if (yy < 0)
                    yy = 10;
            }
            this.$tooltipWin.x = xx;
            this.$tooltipWin.y = yy;
            this.addChild(this.$tooltipWin);
        }
        hideTooltips() {
            if (this.$tooltipWin != null) {
                if (this.$tooltipWin.parent)
                    this.removeChild(this.$tooltipWin);
                this.$tooltipWin = null;
            }
        }
        get focus() {
            if (this.$focusedObject && !this.$focusedObject.onStage)
                this.$focusedObject = null;
            return this.$focusedObject;
        }
        set focus(value) {
            if (value && (!value.focusable || !value.onStage))
                throw new Error("Invalid target to focus");
            this.setFocus(value);
        }
        setFocus(value) {
            if (this.$focusedObject != value) {
                this.$focusedObject = value;
                this.emit(fgui.FocusEvent.CHANGED, this);
            }
        }
        adjustModalLayer() {
            let cnt = this.numChildren;
            if (this.$modalWaitPane != null && this.$modalWaitPane.parent != null)
                this.setChildIndex(this.$modalWaitPane, cnt - 1);
            for (let i = cnt - 1; i >= 0; i--) {
                let g = this.getChildAt(i);
                if ((g instanceof fgui.Window) && g.modal) {
                    if (this.$modalLayer.parent == null)
                        this.addChildAt(this.$modalLayer, i);
                    else
                        this.setChildIndexBefore(this.$modalLayer, i);
                    return;
                }
            }
            if (this.$modalLayer.parent != null)
                this.removeChild(this.$modalLayer);
        }
        $stageDown(evt) {
            GRoot.$gmStatus.mouseX = evt.data.global.x;
            GRoot.$gmStatus.mouseY = evt.data.global.y;
            GRoot.$gmStatus.touchDown = true;
            let mc = evt.target;
            while (mc && mc != this.nativeStage) {
                if (fgui.isUIObject(mc)) {
                    let g = mc.UIOwner;
                    if (g.touchable && g.focusable) {
                        this.setFocus(g);
                        break;
                    }
                }
                mc = mc.parent;
            }
            if (this.$tooltipWin != null)
                this.hideTooltips();
            this.checkPopups(evt.target);
        }
        checkPopups(target) {
            if (this.$checkingPopups)
                return;
            this.$checkingPopups = true;
            this.$justClosedPopups.length = 0;
            if (this.$popupStack.length > 0) {
                let mc = target;
                while (mc && mc != this.nativeStage) {
                    if (fgui.isUIObject(mc)) {
                        let pindex = this.$popupStack.indexOf(mc.UIOwner);
                        if (pindex != -1) {
                            let popup;
                            for (let i = this.$popupStack.length - 1; i > pindex; i--) {
                                popup = this.$popupStack.pop();
                                this.closePopup(popup);
                                this.$justClosedPopups.push(popup);
                            }
                            return;
                        }
                    }
                    mc = mc.parent;
                }
                let cnt = this.$popupStack.length;
                let popup;
                for (let i = cnt - 1; i >= 0; i--) {
                    popup = this.$popupStack[i];
                    this.closePopup(popup);
                    this.$justClosedPopups.push(popup);
                }
                this.$popupStack.length = 0;
            }
        }
        $stageMove(evt) {
            GRoot.$gmStatus.mouseX = evt.data.global.x;
            GRoot.$gmStatus.mouseY = evt.data.global.y;
        }
        $stageUp(evt) {
            GRoot.$gmStatus.touchDown = false;
            this.$checkingPopups = false;
        }
        $winResize(stage) {
            this.setSize(stage.stageWidth, stage.stageHeight);
        }
    }
    GRoot.uniqueID = 0;
    GRoot.$gmStatus = new GRootMouseStatus();
    fgui.GRoot = GRoot;
})(fgui || (fgui = {}));

(function (fgui) {
    class GScrollBar extends fgui.GComponent {
        constructor() {
            super();
            this.$dragOffset = new PIXI.Point();
            this.$scrollPerc = 0;
        }
        setScrollPane(target, vertical) {
            this.$target = target;
            this.$vertical = vertical;
        }
        set displayPerc(val) {
            if (this.$vertical) {
                if (!this.$fixedGripSize)
                    this.$grip.height = val * this.$bar.height;
                this.$grip.y = this.$bar.y + (this.$bar.height - this.$grip.height) * this.$scrollPerc;
            }
            else {
                if (!this.$fixedGripSize)
                    this.$grip.width = val * this.$bar.width;
                this.$grip.x = this.$bar.x + (this.$bar.width - this.$grip.width) * this.$scrollPerc;
            }
        }
        get scrollPerc() {
            return this.$scrollPerc;
        }
        set scrollPerc(val) {
            this.$scrollPerc = val;
            if (this.$vertical)
                this.$grip.y = this.$bar.y + (this.$bar.height - this.$grip.height) * this.$scrollPerc;
            else
                this.$grip.x = this.$bar.x + (this.$bar.width - this.$grip.width) * this.$scrollPerc;
        }
        get minSize() {
            if (this.$vertical)
                return (this.$arrowButton1 != null ? this.$arrowButton1.height : 0) + (this.$arrowButton2 != null ? this.$arrowButton2.height : 0);
            else
                return (this.$arrowButton1 != null ? this.$arrowButton1.width : 0) + (this.$arrowButton2 != null ? this.$arrowButton2.width : 0);
        }
        constructFromXML(xml) {
            super.constructFromXML(xml);
            xml = xml.getChildNodes("ScrollBar")[0];
            if (xml != null)
                this.$fixedGripSize = xml.attributes.fixedGripSize == "true";
            this.$grip = this.getChild("grip");
            if (!this.$grip) {
                console.error("please create and define 'grip' in the Editor for the scrollbar");
                return;
            }
            this.$bar = this.getChild("bar");
            if (!this.$bar) {
                console.error("please create and define 'bar' in the Editor for the scrollbar");
                return;
            }
            this.$arrowButton1 = this.getChild("arrow1");
            this.$arrowButton2 = this.getChild("arrow2");
            this.$grip.on(fgui.InteractiveEvents.Down, this.$gripMouseDown, this);
            if (this.$arrowButton1)
                this.$arrowButton1.on(fgui.InteractiveEvents.Down, this.$arrowButton1Click, this);
            if (this.$arrowButton2)
                this.$arrowButton2.on(fgui.InteractiveEvents.Down, this.$arrowButton2Click, this);
            this.on(fgui.InteractiveEvents.Down, this.$barMouseDown, this);
        }
        $gripMouseDown(evt) {
            if (!this.$bar)
                return;
            evt.stopPropagation();
            this.$dragOffset = evt.data.getLocalPosition(this.displayObject, this.$dragOffset);
            this.$dragOffset.x -= this.$grip.x;
            this.$dragOffset.y -= this.$grip.y;
            let g = fgui.GRoot.inst.view
            g.on(fgui.InteractiveEvents.Move, this.$gripDragging, this);
            g.on(fgui.InteractiveEvents.Up, this.$gripDraggingEnd, this);
        }
        $gripDragging(evt) {
            let pt = evt.data.getLocalPosition(this.displayObject, GScrollBar.sScrollbarHelperPoint);
            if (this.$vertical) {
                let curY = pt.y - this.$dragOffset.y;
                this.$target.setPercY((curY - this.$bar.y) / (this.$bar.height - this.$grip.height), false);
            }
            else {
                let curX = pt.x - this.$dragOffset.x;
                this.$target.setPercX((curX - this.$bar.x) / (this.$bar.width - this.$grip.width), false);
            }
        }
        $gripDraggingEnd(evt) {
            let g = fgui.GRoot.inst.view;
            g.off(fgui.InteractiveEvents.Move, this.$gripDragging, this);
            g.off(fgui.InteractiveEvents.Up, this.$gripDraggingEnd, this);
        }
        $arrowButton1Click(evt) {
            evt.stopPropagation();
            if (this.$vertical)
                this.$target.scrollUp();
            else
                this.$target.scrollLeft();
        }
        $arrowButton2Click(evt) {
            evt.stopPropagation();
            if (this.$vertical)
                this.$target.scrollDown();
            else
                this.$target.scrollRight();
        }
        $barMouseDown(evt) {
            let pt = evt.data.getLocalPosition(this.$grip.displayObject, GScrollBar.sScrollbarHelperPoint);
            if (this.$vertical) {
                if (pt.y < 0)
                    this.$target.scrollUp(4);
                else
                    this.$target.scrollDown(4);
            }
            else {
                if (pt.x < 0)
                    this.$target.scrollLeft(4);
                else
                    this.$target.scrollRight(4);
            }
        }
        dispose() {
            this.off(fgui.InteractiveEvents.Down, this.$barMouseDown, this);
            if (this.$arrowButton1)
                this.$arrowButton1.off(fgui.InteractiveEvents.Down, this.$arrowButton1Click, this);
            if (this.$arrowButton2)
                this.$arrowButton2.off(fgui.InteractiveEvents.Down, this.$arrowButton2Click, this);
            this.$grip.off(fgui.InteractiveEvents.Down, this.$gripMouseDown, this);
            this.$gripDraggingEnd(null);
            super.dispose();
        }
    }
    GScrollBar.sScrollbarHelperPoint = new PIXI.Point();
    fgui.GScrollBar = GScrollBar;
})(fgui || (fgui = {}));

(function (fgui) {
    class GSlider extends fgui.GComponent {
        constructor() {
            super();
            this.$max = 0;
            this.$value = 0;
            this.$barMaxWidth = 0;
            this.$barMaxHeight = 0;
            this.$barMaxWidthDelta = 0;
            this.$barMaxHeightDelta = 0;
            this.$titleType = 0;
            this.$value = 50;
            this.$max = 100;
            this.$clickPos = new PIXI.Point();
        }
        get titleType() {
            return this.$titleType;
        }
        set titleType(value) {
            this.$titleType = value;
        }
        get max() {
            return this.$max;
        }
        set max(value) {
            if (this.$max != value) {
                this.$max = value;
                this.update();
            }
        }
        get value() {
            return this.$value;
        }
        set value(value) {
            if (this.$value != value) {
                this.$value = value;
                this.update();
            }
        }
        update() {
            let percent = Math.min(this.$value / this.$max, 1);
            this.updateWidthPercent(percent);
        }
        updateWidthPercent(percent) {
            if (this.$titleObject) {
                switch (this.$titleType) {
                    case 0:
                        this.$titleObject.text = `${Math.round(percent * 100)}%`;
                        break;
                    case 1:
                        this.$titleObject.text = `${this.$value}/${this.$max}`;
                        break;
                    case 2:
                        this.$titleObject.text = `${this.$value}`;
                        break;
                    case 3:
                        this.$titleObject.text = `${this.$max}`;
                        break;
                }
            }
            if (this.$barObjectH)
                this.$barObjectH.width = (this.width - this.$barMaxWidthDelta) * percent;
            if (this.$barObjectV)
                this.$barObjectV.height = (this.height - this.$barMaxHeightDelta) * percent;
            if (this.$aniObject instanceof fgui.GMovieClip)
                this.$aniObject.frame = Math.round(percent * 100);
        }
        handleSizeChanged() {
            super.handleSizeChanged();
            if (this.$barObjectH)
                this.$barMaxWidth = this.width - this.$barMaxWidthDelta;
            if (this.$barObjectV)
                this.$barMaxHeight = this.height - this.$barMaxHeightDelta;
            if (!this.$inProgressBuilding)
                this.update();
        }
        setupAfterAdd(xml) {
            super.setupAfterAdd(xml);
            xml = xml.getChildNodes("Slider")[0];
            if (xml) {
                this.$value = parseInt(xml.attributes.value);
                this.$max = parseInt(xml.attributes.max);
            }
            this.update();
        }
        constructFromXML(xml) {
            super.constructFromXML(xml);
            xml = xml.getChildNodes("Slider")[0];
            let str;
            if (xml) {
                str = xml.attributes.titleType;
                if (str)
                    this.$titleType = fgui.ParseProgressTitleType(str);
            }
            this.$titleObject = this.getChild("title");
            this.$barObjectH = this.getChild("bar");
            this.$barObjectV = this.getChild("bar_v");
            this.$aniObject = this.getChild("ani");
            this.$gripObject = this.getChild("grip");
            if (this.$barObjectH) {
                this.$barMaxWidth = this.$barObjectH.width;
                this.$barMaxWidthDelta = this.width - this.$barMaxWidth;
            }
            if (this.$barObjectV) {
                this.$barMaxHeight = this.$barObjectV.height;
                this.$barMaxHeightDelta = this.height - this.$barMaxHeight;
            }
            if (this.$gripObject)
                this.$gripObject.on(fgui.InteractiveEvents.Down, this.$gripMouseDown, this);
        }
        $gripMouseDown(evt) {
            this.$clickPos = this.globalToLocal(evt.data.global.x, evt.data.global.y);
            this.$clickPercent = this.$value / this.$max;
            if (fgui.GRoot.inst.view) {
                fgui.GRoot.inst.view.on(fgui.InteractiveEvents.Move, this.$gripMouseMove, this);
                fgui.GRoot.inst.view.on(fgui.InteractiveEvents.Up, this.$gripMouseUp, this);

            }
        }
        $gripMouseMove(evt) {
            let pt = this.globalToLocal(evt.data.global.x, evt.data.global.y, GSlider.sSilderHelperPoint);
            let deltaX = pt.x - this.$clickPos.x;
            let deltaY = pt.y - this.$clickPos.y;
            let percent;
            if (this.$barObjectH)
                percent = this.$clickPercent + deltaX / this.$barMaxWidth;
            else
                percent = this.$clickPercent + deltaY / this.$barMaxHeight;
            if (percent > 1)
                percent = 1;
            else if (percent < 0)
                percent = 0;
            let newValue = Math.round(this.$max * percent);
            if (newValue != this.$value) {
                this.$value = newValue;
                this.emit(fgui.StateChangeEvent.CHANGED, this);
            }
            this.updateWidthPercent(percent);
        }
        $gripMouseUp(evt) {
            let percent = this.$value / this.$max;
            this.updateWidthPercent(percent);
            if (fgui.GRoot.inst.view) {
                fgui.GRoot.inst.view.off(fgui.InteractiveEvents.Move, this.$gripMouseMove, this);
                fgui.GRoot.inst.view.off(fgui.InteractiveEvents.Up, this.$gripMouseUp, this);
            }

        }
        dispose() {
            if (this.$gripObject)
                this.$gripObject.off(fgui.InteractiveEvents.Down, this.$gripMouseDown, this);
            if (fgui.GRoot.inst.view) {
                fgui.GRoot.inst.view.off(fgui.InteractiveEvents.Move, this.$gripMouseMove, this);
                fgui.GRoot.inst.view.off(fgui.InteractiveEvents.Up, this.$gripMouseUp, this);
            }
            super.dispose();
        }
    }
    GSlider.sSilderHelperPoint = new PIXI.Point();
    fgui.GSlider = GSlider;
})(fgui || (fgui = {}));

(function (fgui) {
    var utils;
    (function (utils) {
        class InputDelegate {
            constructor(tf) {
                this.$inited = false;
                this.$restrictString = null;
                this.$restrictRegex = null;
                this.$focused = false;
                this.$textField = tf;
                this.$input = new fgui.InputElement(tf);
            }
            initialize() {
                if (this.$inited)
                    return;
                this.$input.$addToStage();
                this.$input.on("updateText", this.updateText, this);
                this.$input.on(fgui.FocusEvent.CHANGED, this.focusHandler, this);
                this.$textField.on(fgui.InteractiveEvents.Down, this.textFieldDownHandler, this);
                this.$inited = true;
            }
            textFieldDownHandler() {
                this.$onFocus();
            }
            destroy() {
                if (!this.$inited)
                    return;
                this.$input.$removeFromStage();
                this.$textField.off(fgui.InteractiveEvents.Down, this.textFieldDownHandler, this);
                fgui.GRoot.inst.off(fgui.InteractiveEvents.Down, this.onStageDown, this);
                this.$input.off("updateText", this.updateText, this);
                this.$input.off(fgui.FocusEvent.CHANGED, this.focusHandler, this);
                this.$inited = false;
            }
            get text() {
                return this.$input.text;
            }
            set text(v) {
                this.$input.text = v;
            }
            setColor(v) {
                return this.$input.setColor(v);
            }
            updateText() {
                let textValue = this.$input.text;
                let isChanged = false;
                if (this.$restrictRegex != null) {
                    let result = textValue.match(this.$restrictRegex);
                    if (result)
                        textValue = result.join("");
                    else
                        textValue = "";
                    isChanged = true;
                }
                if (isChanged && this.$input.text != textValue)
                    this.$input.text = textValue;
                this.$textField.text = this.$input.text;
                this.$textField.emit(fgui.TextEvent.Change, this.$textField);
            }
            onStageDown(e) {
                let target = fgui.GObject.castFromNativeObject(e.currentTarget);
                if (target != this.$textField)
                    this.$input.$hide();
            }
            focusHandler(type) {
                if (type == "focus") {
                    if (!this.$focused) {
                        this.$focused = true;
                        this.$textField.$isTyping = true;
                        this.$textField.alpha = 0;
                        this.$textField.emit(fgui.FocusEvent.CHANGED, "focus", this.$textField);
                        this.$textField.emit(fgui.TextEvent.FocusIn, this.$textField);
                    }
                }
                else if (type == "blur") {
                    if (this.$focused) {
                        this.$focused = false;
                        fgui.GRoot.inst.off(fgui.InteractiveEvents.Down, this.onStageDown, this);
                        this.$textField.$isTyping = false;
                        this.$textField.alpha = 1;
                        this.$input.$onBlur();
                        this.$textField.emit(fgui.FocusEvent.CHANGED, "blur", this.$textField);
                        this.$textField.emit(fgui.TextEvent.FocusOut, this.$textField);
                    }
                }
            }
            get isFocused() {
                return this.$focused;
            }
            $getProperty(name) {
                return this.$inited && this.$input.getAttribute(name) || null;
            }
            $setProperty(name, value) {
                if (!this.$inited)
                    return;
                this.$input.setAttribute(name, value);
            }
            get $restrict() {
                return this.$restrictString;
            }
            set $restrict(v) {
                this.$restrictString = v;
                if (this.$restrictString != null && this.$restrictString.length > 0)
                    this.$restrictRegex = new RegExp(this.$restrictString);
                else
                    this.$restrictRegex = null;
            }
            get type() {
                return this.$type;
            }
            set type(v) {
                if (v != this.$type)
                    this.$type = v;
            }
            tryHideInput() {
                if (!this.$textField.visible && this.$input)
                    this.$input.$removeFromStage();
            }
            $updateProperties() {
                if (this.isFocused) {
                    this.$input.resetInput();
                    this.tryHideInput();
                    return;
                }
                this.$input.text = this.$textField.text;
                this.$input.resetInput();
                this.tryHideInput();
            }
            $onFocus() {
                if (!this.$textField.visible || this.$focused)
                    return;
                fgui.GRoot.inst.off(fgui.InteractiveEvents.Down, this.onStageDown, this);
                fgui.GTimer.inst.callLater(() => {
                    fgui.GRoot.inst.on(fgui.InteractiveEvents.Down, this.onStageDown, this);
                }, this);
                this.$input.$show();
            }
        }
        utils.InputDelegate = InputDelegate;
    })(utils = fgui.utils || (fgui.utils = {}));
})(fgui || (fgui = {}));

(function (fgui) {
    ;
    class GTextInput extends fgui.GTextField {
        constructor() {
            super();
            this.$util = null;
            this.$isTyping = false;
            this.focusable = true;
            this.editable = true;
            this.type = "text";
            this.on("removed", this.removed, this);
            this.on("added", this.added, this);
            this.$util.initialize();
        }
        createDisplayObject() {
            super.createDisplayObject();
            this.$displayObject.hitArea = new PIXI.Rectangle();
        }
        handleSizeChanged() {
            super.handleSizeChanged();
            let rect = this.$displayObject.hitArea;
            rect.x = rect.y = 0;
            rect.width = this.width;
            rect.height = this.height;
        }
        removed(disp) {
            if (this.$util)
                this.$util.destroy();
        }
        added(disp) {
            if (this.$util)
                this.$util.initialize();
        }
        requestFocus() {
            this.root.focus = this;
            this.$util.$onFocus();
        }
        get editable() {
            return this.$editable;
        }
        set editable(v) {
            if (v != this.$editable) {
                this.$editable = v;
                if (this.$editable) {
                    if (!this.$util)
                        this.$util = new fgui.utils.InputDelegate(this);
                    this.$util.initialize();
                }
                else {
                    if (this.$util)
                        this.$util.destroy();
                }
                this.touchable = this.$editable;
            }
        }
        changeToPassText(text) {
            let passText = "";
            for (let i = 0, num = text.length; i < num; i++) {
                switch (text.charAt(i)) {
                    case '\n':
                        passText += "\n";
                        break;
                    case '\r':
                        break;
                    default:
                        passText += '*';
                }
            }
            return passText;
        }
        getText() {
            return this.$util.text;
        }
        setText(value) {
            if (value == null)
                value = "";
            if (this.$text == value)
                return;
            this.$util.text = value;
            super.setText(value);
        }
        setColor(value) {
            super.setColor(value);
            this.$util.setColor(value);
        }
        get promptText() {
            return this.$util.$getProperty("placeholder");
        }
        set promptText(v) {
            if (v == null)
                v = "";
            this.$util.$setProperty("placeholder", v);
        }
        get maxLength() {
            return parseInt(this.$util.$getProperty("maxlength")) || 0;
        }
        set maxLength(v) {
            this.$util.$setProperty("maxlength", String(v));
        }
        get restrict() {
            return this.$util.$restrict;
        }
        set restrict(v) {
            this.$util.$restrict = v;
        }
        get password() {
            return this.type == "password";
        }
        set password(v) {
            this.type = "password";
        }
        get type() {
            return this.$util.type;
        }
        set type(t) {
            this.$util.type = t;
        }
        dispose() {
            super.dispose();
            this.off("removed", this.removed, this);
            this.off("added", this.added, this);
            this.$util.destroy();
            this.$util = null;
        }
        renderNow(updateBounds = true) {
            this.$requireRender = false;
            this.$sizeDirty = false;
            this.$util.$updateProperties();
            if (this.$isTyping)
                this.decorateInputbox();
            let origText = this.$text;
            if (this.type == "password")
                this.$text = this.changeToPassText(this.$text);
            super.renderNow(updateBounds);
            this.$text = origText;
        }
        decorateInputbox() {
        }
        setupBeforeAdd(xml) {
            super.setupBeforeAdd(xml);
            var str = xml.attributes.maxLength;
            if (str != null)
                this.maxLength = parseInt(str);
            str = xml.attributes.restrict;
            if (str != null)
                this.restrict = str;
            str = xml.attributes.password;
            if (str == "true")
                this.password = true;
            else {
                str = xml.attributes.keyboardType;
                if (str == "4")
                    this.type = "number";
                else if (str == "3")
                    this.type = "url";
                else if (str == "5")
                    this.type = "tel";
                else if (str == "6")
                    this.type = "email";
            }
        }
    }
    fgui.GTextInput = GTextInput;
})(fgui || (fgui = {}));

(function (fgui) {
    class GTimer {
        constructor() {
            this.$enumIdx = 0;
            this.$enumCount = 0;
            this.$curTime = Date.now();
            this.$startedTime = 0;
            this.$items = [];
            this.$itemPool = [];
            if (TWEEN.setupNow) {
                TWEEN.setupNow(() => this.$startedTime);
            }
        }
        getItem() {
            if (this.$itemPool.length)
                return this.$itemPool.pop();
            else
                return new TimerItem();
        }
        findItem(callback, thisObj) {
            let len = this.$items.length;
            for (let i = 0; i < len; i++) {
                let item = this.$items[i];
                if (item.callback == callback && item.thisObj == thisObj)
                    return item;
            }
            return null;
        }
        add(delayInMs, repeat, callback, thisObj, callbackParam) {
            let item = this.findItem(callback, thisObj);
            if (!item) {
                item = this.getItem();
                item.callback = callback;
                item.thisObj = thisObj;
                this.$items.push(item);
            }
            item.delay = delayInMs;
            item.counter = 0;
            item.repeat = repeat;
            item.param = callbackParam;
            item.end = false;
        }
        addLoop(delayInMs, callback, thisObj, callbackParam) {
            this.add(delayInMs, 0, callback, thisObj, callbackParam);
        }
        callLater(callback, thisObj, callbackParam) {
            this.add(1, 1, callback, thisObj, callbackParam);
        }
        callDelay(delayInMs, callback, thisObj, callbackParam) {
            this.add(delayInMs, 1, callback, thisObj, callbackParam);
        }
        exists(callback, thisObj) {
            let item = this.findItem(callback, thisObj);
            return item != null;
        }
        remove(callback, thisObj) {
            let item = this.findItem(callback, thisObj);
            if (item) {
                let i = this.$items.indexOf(item);
                this.$items.splice(i, 1);
                if (i < this.$enumIdx)
                    this.$enumIdx--;
                this.$enumCount--;
                item.callback = null;
                item.param = null;
                this.$itemPool.push(item);
            }
        }
        get ticker() {
            return this.$ticker;
        }
        get curTime() {
            return this.$curTime;
        }
        advance() {
            this.$enumIdx = 0;
            this.$enumCount = this.$items.length;
            while (this.$enumIdx < this.$enumCount) {
                let item = this.$items[this.$enumIdx];
                this.$enumIdx++;
                let ms = this.$ticker.deltaTime / PIXI.settings.TARGET_FPMS;
                this.$curTime += ms;
                if (item.advance(ms)) {
                    if (item.end) {
                        this.$enumIdx--;
                        this.$enumCount--;
                        this.$items.splice(this.$enumIdx, 1);
                        this.$itemPool.push(item);
                    }
                    if (item.callback) {
                        let args = [ms];
                        if (item.param && item.param instanceof Array)
                            args = item.param.concat(args);
                        else if (item.param !== void 0)
                            args.unshift(item.param);
                        item.callback.apply(item.thisObj, args);
                    }
                    if (item.end)
                        item.callback = item.thisObj = item.param = null;
                }
            }
        }
        tickTween() {
            this.$startedTime += this.$ticker.deltaTime / PIXI.settings.TARGET_FPMS;
            TWEEN.update(this.$startedTime, !this.$ticker.started);
        }
        setTicker(ticker) {
            if (this.$ticker) {
                this.$ticker.remove(this.advance);
                this.$ticker.remove(this.tickTween);
            }
            this.$ticker = ticker;
            this.$ticker.add(this.advance, this, PIXI.UPDATE_PRIORITY.NORMAL);
            this.$ticker.add(this.tickTween, this, PIXI.UPDATE_PRIORITY.HIGH);
            if (!this.$ticker.started)
                this.$ticker.start();
        }
    }
    GTimer.inst = new GTimer();
    fgui.GTimer = GTimer;
    class TimerItem {
        constructor() {
            this.delay = 0;
            this.counter = 0;
            this.repeat = 0;
        }
        advance(delta = 0) {
            this.counter += delta;
            if (this.counter >= this.delay) {
                this.counter -= this.delay;
                if (this.counter > this.delay)
                    this.counter = this.delay;
                if (this.repeat > 0) {
                    this.repeat--;
                    if (this.repeat == 0)
                        this.end = true;
                }
                return true;
            }
            else
                return false;
        }
    }
})(fgui || (fgui = {}));

(function (fgui) {
    class GearBase {
        constructor(owner) {
            this.$lockToken = 0;
            this.$owner = owner;
            this.$easeType = fgui.ParseEaseType("Quad.Out");
            this.$tweenTime = 0.3;
            this.$tweenDelay = 0;
        }
        get controller() {
            return this.$controller;
        }
        set controller(val) {
            if (val != this.$controller) {
                this.$controller = val;
                if (this.$controller)
                    this.init();
            }
        }
        get tween() {
            return this.$tween;
        }
        set tween(val) {
            this.$tween = val;
        }
        get tweenDelay() {
            return this.$tweenDelay;
        }
        set tweenDelay(val) {
            this.$tweenDelay = val;
        }
        get tweenTime() {
            return this.$tweenTime;
        }
        set tweenTime(value) {
            this.$tweenTime = value;
        }
        get easeType() {
            return this.$easeType;
        }
        set easeType(value) {
            this.$easeType = value;
        }
        setup(xml) {
            this.$controller = this.$owner.parent.getController(xml.attributes.controller);
            if (this.$controller == null)
                return;
            this.init();
            let str;
            str = xml.attributes.tween;
            if (str)
                this.$tween = true;
            str = xml.attributes.ease;
            if (str)
                this.$easeType = fgui.ParseEaseType(str);
            str = xml.attributes.duration;
            if (str)
                this.$tweenTime = parseFloat(str);
            str = xml.attributes.delay;
            if (str)
                this.$tweenDelay = parseFloat(str);
            if (this instanceof fgui.GearDisplay) {
                str = xml.attributes.pages;
                if (str)
                    this.pages = str.split(",");
            }
            else {
                let pages;
                let values;
                str = xml.attributes.pages;
                if (str)
                    pages = str.split(",");
                str = xml.attributes.values;
                if (str)
                    values = str.split("|");
                if (pages && values) {
                    values.forEach((s, i) => {
                        this.addStatus(pages[i], s);
                    });
                }
                str = xml.attributes.default;
                if (str)
                    this.addStatus(null, str);
            }
        }
        updateFromRelations(dx, dy) {
        }
        addStatus(pageId, value) {
        }
        init() {
        }
        apply() {
        }
        updateState() {
        }
    }
    GearBase.disableAllTweenEffect = false;
    fgui.GearBase = GearBase;
})(fgui || (fgui = {}));

(function (fgui) {
    class GearAnimation extends fgui.GearBase {
        constructor(owner) {
            super(owner);
        }
        init() {
            this.$default = new GearAnimationValue(this.$owner.playing, this.$owner.frame);
            this.$storage = {};
        }
        addStatus(pageId, value) {
            if (value == "-")
                return;
            let gv;
            if (pageId == null)
                gv = this.$default;
            else {
                gv = new GearAnimationValue();
                this.$storage[pageId] = gv;
            }
            let arr = value.split(",");
            gv.frame = parseInt(arr[0]);
            gv.playing = arr[1] == "p";
        }
        apply() {
            this.$owner.$gearLocked = true;
            let gv = this.$storage[this.$controller.selectedPageId];
            if (!gv)
                gv = this.$default;
            this.$owner.frame = gv.frame;
            this.$owner.playing = gv.playing;
            this.$owner.$gearLocked = false;
        }
        updateState() {
            if (this.$controller == null || this.$owner.$gearLocked || this.$owner.$inProgressBuilding)
                return;
            let gv = this.$storage[this.$controller.selectedPageId];
            if (!gv) {
                gv = new GearAnimationValue();
                this.$storage[this.$controller.selectedPageId] = gv;
            }
            gv.frame = this.$owner.frame;
            gv.playing = this.$owner.playing;
        }
    }
    fgui.GearAnimation = GearAnimation;
    class GearAnimationValue {
        constructor(playing = true, frame = 0) {
            this.playing = playing;
            this.frame = frame;
        }
    }
})(fgui || (fgui = {}));

(function (fgui) {
    class GearColor extends fgui.GearBase {
        constructor(owner) {
            super(owner);
            this.$default = 0;
        }
        init() {
            if ("color" in this.$owner) {
                this.$default = this.$owner.color;
            }
            else if ("titleColor" in this.$owner) {
                this.$default = this.$owner["titleColor"];
            }
            this.$storage = {};
        }
        addStatus(pageId, value) {
            if (value == "-")
                return;
            let col = fgui.utils.StringUtil.convertFromHtmlColor(value);
            if (pageId == null)
                this.$default = col;
            else
                this.$storage[pageId] = col;
        }
        apply() {
            this.$owner.$gearLocked = true;
            let data = this.$storage[this.$controller.selectedPageId];
            let color = data != undefined ? Math.floor(data) : Math.floor(this.$default);
            if ("color" in this.$owner) {
                this.$owner.color = color;
            }
            else if ("titleColor" in this.$owner) {
                this.$owner["titleColor"] = color;
            }
            this.$owner.$gearLocked = false;
        }
        updateState() {
            if (this.$controller == null || this.$owner.$gearLocked || this.$owner.$inProgressBuilding)
                return;
            if ("color" in this.$owner) {
                this.$storage[this.$controller.selectedPageId] = this.$owner.color;
            }
            else if ("titleColor" in this.$owner) {
                this.$storage[this.$controller.selectedPageId] = this.$owner["titleColor"];
            }
        }
    }
    fgui.GearColor = GearColor;
})(fgui || (fgui = {}));

(function (fgui) {
    class GearDisplay extends fgui.GearBase {
        constructor(owner) {
            super(owner);
            this.$vid = 0;
            this.$lockToken = 1;
        }
        init() {
            this.pages = null;
        }
        lock() {
            this.$vid++;
            return this.$lockToken;
        }
        release(token) {
            if (token == this.$lockToken)
                this.$vid--;
        }
        get connected() {
            return this.controller == null || this.$vid > 0;
        }
        apply() {
            this.$lockToken++;
            if (this.$lockToken <= 0)
                this.$lockToken = 1;
            if (this.pages == null || this.pages.length == 0
                || this.pages.indexOf(this.$controller.selectedPageId) != -1)
                this.$vid = 1;
            else
                this.$vid = 0;
        }
    }
    fgui.GearDisplay = GearDisplay;
})(fgui || (fgui = {}));

(function (fgui) {
    class GearIcon extends fgui.GearBase {
        constructor(owner) {
            super(owner);
        }
        init() {
            this.$default = this.$owner.icon;
            this.$storage = {};
        }
        addStatus(pageId, value) {
            if (pageId == null)
                this.$default = value;
            else
                this.$storage[pageId] = value;
        }
        apply() {
            this.$owner.$gearLocked = true;
            let data = this.$storage[this.$controller.selectedPageId];
            if (data != undefined)
                this.$owner.icon = data;
            else
                this.$owner.icon = this.$default;
            this.$owner.$gearLocked = false;
        }
        updateState() {
            if (this.$controller == null || this.$owner.$gearLocked || this.$owner.$inProgressBuilding)
                return;
            this.$storage[this.$controller.selectedPageId] = this.$owner.icon;
        }
    }
    fgui.GearIcon = GearIcon;
})(fgui || (fgui = {}));

(function (fgui) {
    class GearLook extends fgui.GearBase {
        constructor(owner) {
            super(owner);
        }
        init() {
            this.$default = new GearLookValue(this.$owner.alpha, this.$owner.rotation, this.$owner.grayed);
            this.$storage = {};
        }
        addStatus(pageId, value) {
            if (value == "-")
                return;
            let arr = value.split(",");
            let gv;
            if (pageId == null)
                gv = this.$default;
            else {
                gv = new GearLookValue();
                this.$storage[pageId] = gv;
            }
            gv.alpha = parseFloat(arr[0]);
            gv.rotation = parseInt(arr[1]);
            gv.grayed = arr[2] == "1" ? true : false;
        }
        apply() {
            let gv = this.$storage[this.$controller.selectedPageId];
            if (!gv)
                gv = this.$default;
            if (this.$tween && !fgui.UIPackage.$constructingObjects && !fgui.GearBase.disableAllTweenEffect) {
                this.$owner.$gearLocked = true;
                this.$owner.grayed = gv.grayed;
                this.$owner.$gearLocked = false;
                if (this.$tweener) {
                    if (this.$tweenTarget.alpha === gv.alpha && this.$tweenTarget.rotation === gv.rotation)
                        return;
                    this.$tweener.end().stop();
                    this.$tweener = null;
                }
                let a = gv.alpha != this.$owner.alpha;
                let b = gv.rotation != this.$owner.rotation;
                if (a || b) {
                    if (this.$owner.hasGearController(0, this.$controller))
                        this.$lockToken = this.$owner.lockGearDisplay();
                    this.$tweenTarget = gv;
                    let vars = {
                        onChange: () => {
                            this.$owner.$gearLocked = true;
                            if (a)
                                this.$owner.alpha = this.$tweenValue.x;
                            if (b)
                                this.$owner.rotation = this.$tweenValue.y;
                            this.$owner.$gearLocked = false;
                        }
                    };
                    if (this.$tweenValue == null)
                        this.$tweenValue = new PIXI.Point();
                    this.$tweenValue.x = this.$owner.alpha;
                    this.$tweenValue.y = this.$owner.rotation;
                    this.$tweener = new TWEEN.Tween(this.$tweenValue)
                        .delay(this.$tweenDelay * 1000)
                        .to({ x: gv.alpha, y: gv.rotation }, this.$tweenTime * 1000)
                        .easing(this.$easeType)
                        .onUpdate(vars.onChange)
                        .onComplete(this.tweenComplete)
                        .start();
                }
            }
            else {
                this.$owner.$gearLocked = true;
                this.$owner.grayed = gv.grayed;
                this.$owner.alpha = gv.alpha;
                this.$owner.rotation = gv.rotation;
                this.$owner.$gearLocked = false;
            }
        }
        tweenComplete() {
            if (this.$lockToken != 0) {
                if (this.$owner) this.$owner.releaseGearDisplay(this.$lockToken);
                this.$lockToken = 0;
            }
            this.$tweener = null;
            if (this.$owner) this.$owner.emit(fgui.GearEvent.GEAR_STOP, this);
        }
        updateState() {
            if (this.$controller == null || this.$owner.$gearLocked || this.$owner.$inProgressBuilding)
                return;
            let gv = this.$storage[this.$controller.selectedPageId];
            if (!gv) {
                gv = new GearLookValue();
                this.$storage[this.$controller.selectedPageId] = gv;
            }
            gv.alpha = this.$owner.alpha;
            gv.rotation = this.$owner.rotation;
            gv.grayed = this.$owner.grayed;
        }
    }
    fgui.GearLook = GearLook;
    class GearLookValue {
        constructor(alpha = 0, rotation = 0, grayed = false) {
            this.alpha = alpha;
            this.rotation = rotation;
            this.grayed = grayed;
        }
    }
})(fgui || (fgui = {}));

(function (fgui) {
    class GearSize extends fgui.GearBase {
        constructor(owner) {
            super(owner);
        }
        init() {
            this.$default = new GearSizeValue(this.$owner.width, this.$owner.height, this.$owner.scaleX, this.$owner.scaleY);
            this.$storage = {};
        }
        addStatus(pageId, value) {
            if (value == "-")
                return;
            let arr = value.split(",");
            let gv;
            if (pageId == null)
                gv = this.$default;
            else {
                gv = new GearSizeValue();
                this.$storage[pageId] = gv;
            }
            gv.width = parseInt(arr[0]);
            gv.height = parseInt(arr[1]);
            if (arr.length > 2) {
                gv.scaleX = parseFloat(arr[2]);
                gv.scaleY = parseFloat(arr[3]);
            }
        }
        apply() {
            let gv = this.$storage[this.$controller.selectedPageId];
            if (!gv)
                gv = this.$default;
            if (this.$tween && !fgui.UIPackage.$constructingObjects && !fgui.GearBase.disableAllTweenEffect) {
                if (this.$tweener) {
                    if (this.$tweenTarget.width != gv.width || this.$tweenTarget.height != gv.height
                        || this.$tweenTarget.scaleX != gv.scaleX || this.$tweenTarget.scaleY != gv.scaleY) {
                        this.$tweener.end().stop();
                        this.$tweener = null;
                    }
                    else
                        return;
                }
                let a = gv.width != this.$owner.width || gv.height != this.$owner.height;
                let b = gv.scaleX != this.$owner.scaleX || gv.scaleY != this.$owner.scaleY;
                if (a || b) {
                    if (this.$owner.hasGearController(0, this.$controller))
                        this.$lockToken = this.$owner.lockGearDisplay();
                    this.$tweenTarget = gv;
                    let vars = {
                        onChange: () => {
                            this.$owner.$gearLocked = true;
                            if (a)
                                this.$owner.setSize(this.$tweenValue.width, this.$tweenValue.height, this.$owner.gearXY.controller == this.$controller);
                            if (b)
                                this.$owner.setScale(this.$tweenValue.scaleX, this.$tweenValue.scaleY);
                            this.$owner.$gearLocked = false;
                        }
                    };
                    if (this.$tweenValue == null)
                        this.$tweenValue = new GearSizeValue();
                    this.$tweenValue.width = this.$owner.width;
                    this.$tweenValue.height = this.$owner.height;
                    this.$tweenValue.scaleX = this.$owner.scaleX;
                    this.$tweenValue.scaleY = this.$owner.scaleY;
                    this.$tweener = new TWEEN.Tween(this.$tweenValue)
                        .delay(this.$tweenDelay * 1000)
                        .to({ width: gv.width, height: gv.height, scaleX: gv.scaleX, scaleY: gv.scaleY }, this.$tweenTime * 1000)
                        .easing(this.$easeType)
                        .onUpdate(vars.onChange)
                        .onComplete(this.tweenComplete)
                        .start();
                }
            }
            else {
                this.$owner.$gearLocked = true;
                this.$owner.setSize(gv.width, gv.height, this.$owner.gearXY.controller == this.$controller);
                this.$owner.setScale(gv.scaleX, gv.scaleY);
                this.$owner.$gearLocked = false;
            }
        }
        tweenComplete() {
            if (this.$lockToken != 0) {
                this.$owner.releaseGearDisplay(this.$lockToken);
                this.$lockToken = 0;
            }
            this.$tweener = null;
            this.$owner.emit(fgui.GearEvent.GEAR_STOP, this);
        }
        updateState() {
            if (this.$controller == null || this.$owner.$gearLocked || this.$owner.$inProgressBuilding)
                return;
            let gv = this.$storage[this.$controller.selectedPageId];
            if (!gv) {
                gv = new GearSizeValue();
                this.$storage[this.$controller.selectedPageId] = gv;
            }
            gv.width = this.$owner.width;
            gv.height = this.$owner.height;
            gv.scaleX = this.$owner.scaleX;
            gv.scaleY = this.$owner.scaleY;
        }
        updateFromRelations(dx, dy) {
            if (this.$controller == null || this.$storage == null)
                return;
            for (let key in this.$storage) {
                let gv = this.$storage[key];
                gv.width += dx;
                gv.height += dy;
            }
            this.$default.width += dx;
            this.$default.height += dy;
            this.updateState();
        }
    }
    fgui.GearSize = GearSize;
    class GearSizeValue {
        constructor(width = 0, height = 0, scaleX = 0, scaleY = 0) {
            this.width = width;
            this.height = height;
            this.scaleX = scaleX;
            this.scaleY = scaleY;
        }
    }
})(fgui || (fgui = {}));

(function (fgui) {
    class GearText extends fgui.GearBase {
        constructor(owner) {
            super(owner);
        }
        init() {
            this.$default = this.$owner.text;
            this.$storage = {};
        }
        addStatus(pageId, value) {
            if (pageId == null)
                this.$default = value;
            else
                this.$storage[pageId] = value;
        }
        apply() {
            this.$owner.$gearLocked = true;
            let data = this.$storage[this.$controller.selectedPageId];
            if (data != undefined)
                this.$owner.text = data;
            else
                this.$owner.text = this.$default;
            this.$owner.$gearLocked = false;
        }
        updateState() {
            if (this.$controller == null || this.$owner.$gearLocked || this.$owner.$inProgressBuilding)
                return;
            this.$storage[this.$controller.selectedPageId] = this.$owner.text;
        }
    }
    fgui.GearText = GearText;
})(fgui || (fgui = {}));

(function (fgui) {
    class GearXY extends fgui.GearBase {
        constructor(owner) {
            super(owner);
        }
        init() {
            this.$default = new PIXI.Point(this.$owner.x, this.$owner.y);
            this.$storage = {};
        }
        addStatus(pageId, value) {
            if (value == "-")
                return;
            let arr = value.split(",");
            let pt;
            if (pageId == null)
                pt = this.$default;
            else {
                pt = new PIXI.Point();
                this.$storage[pageId] = pt;
            }
            pt.x = parseInt(arr[0]);
            pt.y = parseInt(arr[1]);
        }
        apply() {
            let pt = this.$storage[this.$controller.selectedPageId];
            if (!pt)
                pt = this.$default;
            if (this.$tween && !fgui.UIPackage.$constructingObjects && !fgui.GearBase.disableAllTweenEffect) {
                if (this.$tweener) {
                    if (this.$tweenTarget.x === pt.x && this.$tweenTarget.y === pt.y)
                        return;
                    this.$tweener.end().stop();
                    this.$tweener = null;
                }
                if (this.$owner.x != pt.x || this.$owner.y != pt.y) {
                    this.$owner.hasGearController(0, this.$controller);
                    this.$lockToken = this.$owner.lockGearDisplay();
                    this.$tweenTarget = pt;
                    let vars = {
                        onChange: () => {
                            this.$owner.$gearLocked = true;
                            this.$owner.setXY(this.$tweenValue.x, this.$tweenValue.y);
                            this.$owner.$gearLocked = false;
                        }
                    };
                    if (this.$tweenValue == null)
                        this.$tweenValue = new PIXI.Point();
                    this.$tweenValue.x = this.$owner.x;
                    this.$tweenValue.y = this.$owner.y;
                    this.$tweener = new TWEEN.Tween(this.$tweenValue)
                        .onUpdate(vars.onChange)
                        .delay(this.$tweenDelay * 1000)
                        .to({ x: pt.x, y: pt.y }, this.$tweenTime * 1000)
                        .easing(this.$easeType)
                        .onComplete(this.tweenComplete)
                        .start();
                }
            }
            else {
                this.$owner.$gearLocked = true;
                this.$owner.setXY(pt.x, pt.y);
                this.$owner.$gearLocked = false;
            }
        }
        tweenComplete() {
            if (this.$lockToken != 0) {
                this.$owner?.releaseGearDisplay(this.$lockToken);
                this.$lockToken = 0;
            }
            this.$tweener = null;
            if (this.$owner) this.$owner.emit(fgui.GearEvent.GEAR_STOP, this);
        }
        updateState() {
            if (this.$controller == null || this.$owner.$gearLocked || this.$owner.$inProgressBuilding)
                return;
            let pt = this.$storage[this.$controller.selectedPageId];
            if (!pt) {
                pt = new PIXI.Point();
                this.$storage[this.$controller.selectedPageId] = pt;
            }
            pt.x = this.$owner.x;
            pt.y = this.$owner.y;
        }
        updateFromRelations(dx, dy) {
            if (this.$controller == null || this.$storage == null)
                return;
            for (let key in this.$storage) {
                let pt = this.$storage[key];
                pt.x += dx;
                pt.y += dy;
            }
            this.$default.x += dx;
            this.$default.y += dy;
            this.updateState();
        }
    }
    fgui.GearXY = GearXY;
})(fgui || (fgui = {}));

(function (fgui) {
    fgui.isAnimationGear = function (obj) {
        return obj && "playing" in obj && "frame" in obj;
    };
})(fgui || (fgui = {}));

(function (fgui) {
    fgui.isColorGear = function (obj) {
        return obj && ("color" in obj || "titleColor" in obj);
    };
})(fgui || (fgui = {}));

(function (fgui) {
    fgui.isColorableTitle = function (obj) {
        return obj && "titleColor" in obj && "fontSize" in obj;
    };
})(fgui || (fgui = {}));

(function (fgui) {
    class PopupMenu {
        constructor(resourceURL = null) {
            if (!resourceURL) {
                resourceURL = fgui.UIConfig.popupMenu;
                if (!resourceURL)
                    throw new Error("UIConfig.popupMenu not defined");
            }
            this.$contentPane = fgui.UIPackage.createObjectFromURL(resourceURL);
            this.$contentPane.on("added", this.$addedToStage, this);
            this.$list = this.$contentPane.getChild("list");
            this.$list.removeChildrenToPool();
            this.$list.addRelation(this.$contentPane, 14);
            this.$list.removeRelation(this.$contentPane, 15);
            this.$contentPane.addRelation(this.$list, 15);
            this.$list.on(fgui.ListEvent.ItemClick, this.$clickItem, this);
        }
        dispose() {
            fgui.GTimer.inst.remove(this.$delayClickItem, this);
            this.$list.off(fgui.ListEvent.ItemClick, this.$clickItem, this);
            this.$contentPane.off("added", this.$addedToStage, this);
            this.$contentPane.dispose();
        }
        addItem(caption, handler) {
            let item = this.$list.addItemFromPool();
            item.title = caption;
            item.data = handler;
            item.grayed = false;
            let c = item.getController("checked");
            if (c != null)
                c.selectedIndex = 0;
            return item;
        }
        addItemAt(caption, index, handler) {
            let item = this.$list.getFromPool();
            this.$list.addChildAt(item, index);
            item.title = caption;
            item.data = handler;
            item.grayed = false;
            let c = item.getController("checked");
            if (c != null)
                c.selectedIndex = 0;
            return item;
        }
        addSeperator() {
            if (fgui.UIConfig.popupMenuSeperator == null)
                throw new Error("UIConfig.popupMenuSeperator not defined");
            this.$list.addItemFromPool(fgui.UIConfig.popupMenuSeperator);
        }
        getItemName(index) {
            let item = this.$list.getChildAt(index);
            return item.name;
        }
        setItemText(name, caption) {
            let item = this.$list.getChild(name);
            item.title = caption;
        }
        setItemVisible(name, visible) {
            let item = this.$list.getChild(name);
            if (item.visible != visible) {
                item.visible = visible;
                this.$list.setBoundsChangedFlag();
            }
        }
        setItemGrayed(name, grayed) {
            let item = this.$list.getChild(name);
            item.grayed = grayed;
        }
        setItemCheckable(name, checkable) {
            let item = this.$list.getChild(name);
            let c = item.getController("checked");
            if (c != null) {
                if (checkable) {
                    if (c.selectedIndex == 0)
                        c.selectedIndex = 1;
                }
                else
                    c.selectedIndex = 0;
            }
        }
        setItemChecked(name, checked) {
            let item = this.$list.getChild(name);
            let c = item.getController("checked");
            if (c != null)
                c.selectedIndex = checked ? 2 : 1;
        }
        isItemChecked(name) {
            let item = this.$list.getChild(name);
            let c = item.getController("checked");
            if (c != null)
                return c.selectedIndex == 2;
            else
                return false;
        }
        removeItem(name) {
            let item = this.$list.getChild(name);
            if (item != null) {
                let index = this.$list.getChildIndex(item);
                this.$list.removeChildToPoolAt(index);
                return true;
            }
            else
                return false;
        }
        clearItems() {
            this.$list.removeChildrenToPool();
        }
        get itemCount() {
            return this.$list.numChildren;
        }
        get contentPane() {
            return this.$contentPane;
        }
        get list() {
            return this.$list;
        }
        show(target = null, dir) {
            let r = target != null ? target.root : fgui.GRoot.inst;
            r.showPopup(this.contentPane, (target instanceof fgui.GRoot) ? null : target, dir);
        }
        $clickItem(evt, itemObject) {
            fgui.GTimer.inst.add(100, 1, this.$delayClickItem, this, itemObject);
        }
        $delayClickItem(itemObject) {
            if (!(itemObject instanceof fgui.GButton))
                return;
            if (itemObject.grayed) {
                this.$list.selectedIndex = -1;
                return;
            }
            let c = itemObject.getController("checked");
            if (c != null && c.selectedIndex != 0) {
                if (c.selectedIndex == 1)
                    c.selectedIndex = 2;
                else
                    c.selectedIndex = 1;
            }
            let r = this.$contentPane.parent;
            if (r)
                r.hidePopup(this.contentPane);
            if (itemObject.data != null)
                itemObject.data.call(null);
            fgui.GTimer.inst.remove(this.$delayClickItem, this);
        }
        $addedToStage() {
            this.$list.selectedIndex = -1;
            this.$list.resizeToFit(100000, 10);
        }
    }
    fgui.PopupMenu = PopupMenu;
})(fgui || (fgui = {}));

(function (fgui) {
    class RelationItem {
        constructor(owner) {
            this.$owner = owner;
            this.$defs = [];
        }
        get owner() {
            return this.$owner;
        }
        set target(value) {
            if (this.$target != value) {
                if (this.$target)
                    this.releaseRefTarget(this.$target);
                this.$target = value;
                if (this.$target)
                    this.addRefTarget(this.$target);
            }
        }
        get target() {
            return this.$target;
        }
        add(relationType, usePercent) {
            if (relationType == 24) {
                this.add(14, usePercent);
                this.add(15, usePercent);
                return;
            }
            let length = this.$defs.length;
            for (let i = 0; i < length; i++) {
                let def = this.$defs[i];
                if (def.type == relationType)
                    return;
            }
            this.internalAdd(relationType, usePercent);
        }
        internalAdd(relationType, usePercent) {
            if (relationType == 24) {
                this.internalAdd(14, usePercent);
                this.internalAdd(15, usePercent);
                return;
            }
            let info = new RelationDef();
            info.percent = usePercent;
            info.type = relationType;
            this.$defs.push(info);
            if (usePercent || relationType == 1 || relationType == 3 || relationType == 5
                || relationType == 8 || relationType == 10 || relationType == 12)
                this.$owner.pixelSnapping = true;
        }
        remove(relationType = 0) {
            if (relationType == 24) {
                this.remove(14);
                this.remove(15);
                return;
            }
            let dc = this.$defs.length;
            for (let k = dc - 1; k >= 0; k--) {
                if (this.$defs[k].type == relationType) {
                    this.$defs.splice(k, 1);
                    break;
                }
            }
        }
        copyFrom(source) {
            this.target = source.target;
            this.$defs.length = 0;
            source.$defs.forEach(info => {
                let info2 = new RelationDef();
                info2.copyFrom(info);
                this.$defs.push(info2);
            }, this);
        }
        dispose() {
            if (this.$target != null) {
                this.releaseRefTarget(this.$target);
                this.$target = null;
            }
        }
        get isEmpty() {
            return this.$defs.length == 0;
        }
        applyOnSelfResized(dWidth, dHeight) {
            let ox = this.$owner.x;
            let oy = this.$owner.y;
            this.$defs.forEach(info => {
                switch (info.type) {
                    case 3:
                    case 5:
                        this.$owner.x -= dWidth / 2;
                        break;
                    case 4:
                    case 6:
                        this.$owner.x -= dWidth;
                        break;
                    case 10:
                    case 12:
                        this.$owner.y -= dHeight / 2;
                        break;
                    case 11:
                    case 13:
                        this.$owner.y -= dHeight;
                        break;
                }
            }, this);
            if (ox != this.$owner.x || oy != this.$owner.y) {
                ox = this.$owner.x - ox;
                oy = this.$owner.y - oy;
                this.$owner.updateGearFromRelations(1, ox, oy);
                if (this.$owner.parent != null && this.$owner.parent.$transitions.length > 0) {
                    this.$owner.parent.$transitions.forEach(t => {
                        t.updateFromRelations(this.$owner.id, ox, oy);
                    }, this);
                }
            }
        }
        applyOnXYChanged(info, dx, dy) {
            let tmp;
            switch (info.type) {
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                    this.$owner.x += dx;
                    break;
                case 7:
                case 8:
                case 9:
                case 10:
                case 11:
                case 12:
                case 13:
                    this.$owner.y += dy;
                    break;
                case 14:
                case 15:
                    break;
                case 16:
                case 17:
                    tmp = this.$owner.x;
                    this.$owner.x += dx;
                    this.$owner.width = this.$owner.$rawWidth - (this.$owner.x - tmp);
                    break;
                case 18:
                case 19:
                    this.$owner.width = this.$owner.$rawWidth + dx;
                    break;
                case 20:
                case 21:
                    tmp = this.$owner.y;
                    this.$owner.y += dy;
                    this.$owner.height = this.$owner.$rawHeight - (this.$owner.y - tmp);
                    break;
                case 22:
                case 23:
                    this.$owner.height = this.$owner.$rawHeight + dy;
                    break;
            }
        }
        applyOnSizeChanged(info) {
            let targetX, targetY;
            if (this.$target != this.$owner.parent) {
                targetX = this.$target.x;
                targetY = this.$target.y;
            }
            else {
                targetX = 0;
                targetY = 0;
            }
            let v, tmp;
            switch (info.type) {
                case 0:
                    break;
                case 1:
                    v = this.$owner.x - (targetX + this.$targetWidth / 2);
                    if (info.percent)
                        v = v / this.$targetWidth * this.$target.$rawWidth;
                    this.$owner.x = targetX + this.$target.$rawWidth / 2 + v;
                    break;
                case 2:
                    v = this.$owner.x - (targetX + this.$targetWidth);
                    if (info.percent)
                        v = v / this.$targetWidth * this.$target.$rawWidth;
                    this.$owner.x = targetX + this.$target.$rawWidth + v;
                    break;
                case 3:
                    v = this.$owner.x + this.$owner.$rawWidth / 2 - (targetX + this.$targetWidth / 2);
                    if (info.percent)
                        v = v / this.$targetWidth * this.$target.$rawWidth;
                    this.$owner.x = targetX + this.$target.$rawWidth / 2 + v - this.$owner.$rawWidth / 2;
                    break;
                case 4:
                    v = this.$owner.x + this.$owner.$rawWidth - targetX;
                    if (info.percent)
                        v = v / this.$targetWidth * this.$target.$rawWidth;
                    this.$owner.x = targetX + v - this.$owner.$rawWidth;
                    break;
                case 5:
                    v = this.$owner.x + this.$owner.$rawWidth - (targetX + this.$targetWidth / 2);
                    if (info.percent)
                        v = v / this.$targetWidth * this.$target.$rawWidth;
                    this.$owner.x = targetX + this.$target.$rawWidth / 2 + v - this.$owner.$rawWidth;
                    break;
                case 6:
                    v = this.$owner.x + this.$owner.$rawWidth - (targetX + this.$targetWidth);
                    if (info.percent)
                        v = v / this.$targetWidth * this.$target.$rawWidth;
                    this.$owner.x = targetX + this.$target.$rawWidth + v - this.$owner.$rawWidth;
                    break;
                case 7:
                    break;
                case 8:
                    v = this.$owner.y - (targetY + this.$targetHeight / 2);
                    if (info.percent)
                        v = v / this.$targetHeight * this.$target.$rawHeight;
                    this.$owner.y = targetY + this.$target.$rawHeight / 2 + v;
                    break;
                case 9:
                    v = this.$owner.y - (targetY + this.$targetHeight);
                    if (info.percent)
                        v = v / this.$targetHeight * this.$target.$rawHeight;
                    this.$owner.y = targetY + this.$target.$rawHeight + v;
                    break;
                case 10:
                    v = this.$owner.y + this.$owner.$rawHeight / 2 - (targetY + this.$targetHeight / 2);
                    if (info.percent)
                        v = v / this.$targetHeight * this.$target.$rawHeight;
                    this.$owner.y = targetY + this.$target.$rawHeight / 2 + v - this.$owner.$rawHeight / 2;
                    break;
                case 11:
                    v = this.$owner.y + this.$owner.$rawHeight - targetY;
                    if (info.percent)
                        v = v / this.$targetHeight * this.$target.$rawHeight;
                    this.$owner.y = targetY + v - this.$owner.$rawHeight;
                    break;
                case 12:
                    v = this.$owner.y + this.$owner.$rawHeight - (targetY + this.$targetHeight / 2);
                    if (info.percent)
                        v = v / this.$targetHeight * this.$target.$rawHeight;
                    this.$owner.y = targetY + this.$target.$rawHeight / 2 + v - this.$owner.$rawHeight;
                    break;
                case 13:
                    v = this.$owner.y + this.$owner.$rawHeight - (targetY + this.$targetHeight);
                    if (info.percent)
                        v = v / this.$targetHeight * this.$target.$rawHeight;
                    this.$owner.y = targetY + this.$target.$rawHeight + v - this.$owner.$rawHeight;
                    break;
                case 14:
                    if (this.$owner.$inProgressBuilding && this.$owner == this.$target.parent)
                        v = this.$owner.sourceWidth - this.$target.$initWidth;
                    else
                        v = this.$owner.$rawWidth - this.$targetWidth;
                    if (info.percent)
                        v = v / this.$targetWidth * this.$target.$rawWidth;
                    if (this.$target == this.$owner.parent)
                        this.$owner.setSize(this.$target.$rawWidth + v, this.$owner.$rawHeight, true);
                    else
                        this.$owner.width = this.$target.$rawWidth + v;
                    break;
                case 15:
                    if (this.$owner.$inProgressBuilding && this.$owner == this.$target.parent)
                        v = this.$owner.sourceHeight - this.$target.$initHeight;
                    else
                        v = this.$owner.$rawHeight - this.$targetHeight;
                    if (info.percent)
                        v = v / this.$targetHeight * this.$target.$rawHeight;
                    if (this.$target == this.$owner.parent)
                        this.$owner.setSize(this.$owner.$rawWidth, this.$target.$rawHeight + v, true);
                    else
                        this.$owner.height = this.$target.$rawHeight + v;
                    break;
                case 16:
                    break;
                case 17:
                    v = this.$owner.x - (targetX + this.$targetWidth);
                    if (info.percent)
                        v = v / this.$targetWidth * this.$target.$rawWidth;
                    tmp = this.$owner.x;
                    this.$owner.x = targetX + this.$target.$rawWidth + v;
                    this.$owner.width = this.$owner.$rawWidth - (this.$owner.x - tmp);
                    break;
                case 18:
                    break;
                case 19:
                    if (this.$owner.$inProgressBuilding && this.$owner == this.$target.parent)
                        v = this.$owner.sourceWidth - (targetX + this.$target.$initWidth);
                    else
                        v = this.$owner.width - (targetX + this.$targetWidth);
                    if (this.$owner != this.$target.parent)
                        v += this.$owner.x;
                    if (info.percent)
                        v = v / this.$targetWidth * this.$target.$rawWidth;
                    if (this.$owner != this.$target.parent)
                        this.$owner.width = targetX + this.$target.$rawWidth + v - this.$owner.x;
                    else
                        this.$owner.width = targetX + this.$target.$rawWidth + v;
                    break;
                case 20:
                    break;
                case 21:
                    v = this.$owner.y - (targetY + this.$targetHeight);
                    if (info.percent)
                        v = v / this.$targetHeight * this.$target.$rawHeight;
                    tmp = this.$owner.y;
                    this.$owner.y = targetY + this.$target.$rawHeight + v;
                    this.$owner.height = this.$owner.$rawHeight - (this.$owner.y - tmp);
                    break;
                case 22:
                    break;
                case 23:
                    if (this.$owner.$inProgressBuilding && this.$owner == this.$target.parent)
                        v = this.$owner.sourceHeight - (targetY + this.$target.$initHeight);
                    else
                        v = this.$owner.$rawHeight - (targetY + this.$targetHeight);
                    if (this.$owner != this.$target.parent)
                        v += this.$owner.y;
                    if (info.percent)
                        v = v / this.$targetHeight * this.$target.$rawHeight;
                    if (this.$owner != this.$target.parent)
                        this.$owner.height = targetY + this.$target.$rawHeight + v - this.$owner.y;
                    else
                        this.$owner.height = targetY + this.$target.$rawHeight + v;
                    break;
            }
        }
        addRefTarget(target) {
            if (target != this.$owner.parent)
                target.on(fgui.DisplayObjectEvent.XY_CHANGED, this.$targetXYChanged, this);
            target.on(fgui.DisplayObjectEvent.SIZE_CHANGED, this.$targetSizeChanged, this);
            target.on(fgui.DisplayObjectEvent.SIZE_DELAY_CHANGE, this.$targetSizeWillChange, this);
            this.$targetX = this.$target.x;
            this.$targetY = this.$target.y;
            this.$targetWidth = this.$target.$rawWidth;
            this.$targetHeight = this.$target.$rawHeight;
        }
        releaseRefTarget(target) {
            target.off(fgui.DisplayObjectEvent.XY_CHANGED, this.$targetXYChanged, this);
            target.off(fgui.DisplayObjectEvent.SIZE_CHANGED, this.$targetSizeChanged, this);
            target.off(fgui.DisplayObjectEvent.SIZE_DELAY_CHANGE, this.$targetSizeWillChange, this);
        }
        $targetXYChanged(evt) {
            if (this.$owner.relations.$dealing != null || this.$owner.group != null && this.$owner.group.$updating) {
                this.$targetX = this.$target.x;
                this.$targetY = this.$target.y;
                return;
            }
            this.$owner.relations.$dealing = this.$target;
            let ox = this.$owner.x;
            let oy = this.$owner.y;
            let dx = this.$target.x - this.$targetX;
            let dy = this.$target.y - this.$targetY;
            this.$defs.forEach(info => {
                this.applyOnXYChanged(info, dx, dy);
            }, this);
            this.$targetX = this.$target.x;
            this.$targetY = this.$target.y;
            if (ox != this.$owner.x || oy != this.$owner.y) {
                ox = this.$owner.x - ox;
                oy = this.$owner.y - oy;
                this.$owner.updateGearFromRelations(1, ox, oy);
                if (this.$owner.parent != null && this.$owner.parent.$transitions.length > 0) {
                    this.$owner.parent.$transitions.forEach(t => {
                        t.updateFromRelations(this.$owner.id, ox, oy);
                    }, this);
                }
            }
            this.$owner.relations.$dealing = null;
        }
        $targetSizeChanged(evt) {
            if (this.$owner.relations.$dealing != null)
                return;
            this.$owner.relations.$dealing = this.$target;
            let ox = this.$owner.x;
            let oy = this.$owner.y;
            let ow = this.$owner.$rawWidth;
            let oh = this.$owner.$rawHeight;
            this.$defs.forEach(info => {
                this.applyOnSizeChanged(info);
            }, this);
            this.$targetWidth = this.$target.$rawWidth;
            this.$targetHeight = this.$target.$rawHeight;
            if (ox != this.$owner.x || oy != this.$owner.y) {
                ox = this.$owner.x - ox;
                oy = this.$owner.y - oy;
                this.$owner.updateGearFromRelations(1, ox, oy);
                if (this.$owner.parent != null && this.$owner.parent.$transitions.length > 0) {
                    this.$owner.parent.$transitions.forEach(t => {
                        t.updateFromRelations(this.$owner.id, ox, oy);
                    }, this);
                }
            }
            if (ow != this.$owner.$rawWidth || oh != this.$owner.$rawHeight) {
                ow = this.$owner.$rawWidth - ow;
                oh = this.$owner.$rawHeight - oh;
                this.$owner.updateGearFromRelations(2, ow, oh);
            }
            this.$owner.relations.$dealing = null;
        }
        $targetSizeWillChange(evt) {
            this.$owner.relations.sizeDirty = true;
        }
    }
    fgui.RelationItem = RelationItem;
    class RelationDef {
        copyFrom(source) {
            this.percent = source.percent;
            this.type = source.type;
        }
    }
    fgui.RelationDef = RelationDef;
})(fgui || (fgui = {}));

(function (fgui) {
    class Relations {
        constructor(owner) {
            this.sizeDirty = false;
            this.$owner = owner;
            this.$items = [];
        }
        add(target, relationType, usePercent = false) {
            let length = this.$items.length;
            for (let i = 0; i < length; i++) {
                let item = this.$items[i];
                if (item.target == target) {
                    item.add(relationType, usePercent);
                    return;
                }
            }
            let newItem = new fgui.RelationItem(this.$owner);
            newItem.target = target;
            newItem.add(relationType, usePercent);
            this.$items.push(newItem);
        }
        addItems(target, sidePairs) {
            let arr = sidePairs.split(",");
            let s;
            let usePercent;
            for (let i = 0; i < 2; i++) {
                s = arr[i];
                if (!s)
                    continue;
                if (s.charAt(s.length - 1) == "%") {
                    s = s.substr(0, s.length - 1);
                    usePercent = true;
                }
                else
                    usePercent = false;
                if (s.indexOf("-") == -1)
                    s = `${s}-${s}`;
                let t = Relations.RELATION_NAMES.indexOf(s);
                if (t == -1)
                    throw new Error("Invalid relation type");
                this.add(target, t, usePercent);
            }
        }
        remove(target, relationType = 0) {
            let cnt = this.$items.length;
            let i = 0;
            while (i < cnt) {
                let item = this.$items[i];
                if (item.target == target) {
                    item.remove(relationType);
                    if (item.isEmpty) {
                        item.dispose();
                        this.$items.splice(i, 1);
                        cnt--;
                    }
                    else
                        i++;
                }
                else
                    i++;
            }
        }
        contains(target) {
            let length = this.$items.length;
            for (let i = 0; i < length; i++) {
                if (this.$items[i].target == target)
                    return true;
            }
            return false;
        }
        clearFor(target) {
            let cnt = this.$items.length;
            let i = 0;
            while (i < cnt) {
                let item = this.$items[i];
                if (item.target == target) {
                    item.dispose();
                    this.$items.splice(i, 1);
                    cnt--;
                }
                else
                    i++;
            }
        }
        clearAll() {
            this.$items.forEach(item => {
                item.dispose();
            }, this);
            this.$items.length = 0;
        }
        copyFrom(source) {
            this.clearAll();
            source.$items.forEach(ri => {
                let item = new fgui.RelationItem(this.$owner);
                item.copyFrom(ri);
                this.$items.push(item);
            }, this);
        }
        dispose() {
            this.clearAll();
        }
        onOwnerSizeChanged(dWidth, dHeight) {
            if (this.$items.length <= 0)
                return;
            this.$items.forEach(item => {
                item.applyOnSelfResized(dWidth, dHeight);
            }, this);
        }
        ensureRelationsSizeCorrect() {
            if (this.$items.length == 0)
                return;
            this.sizeDirty = false;
            this.$items.forEach(item => {
                item.target.ensureSizeCorrect();
            }, this);
        }
        get empty() {
            return this.$items.length == 0;
        }
        setup(xml) {
            xml.children.forEach(cxml => {
                if (cxml.nodeName != "relation")
                    return;
                let targetId;
                let target;
                targetId = cxml.attributes.target;
                if (this.$owner.parent) {
                    if (targetId)
                        target = this.$owner.parent.getChildById(targetId);
                    else
                        target = this.$owner.parent;
                }
                else {
                    target = this.$owner.getChildById(targetId);
                }
                if (target)
                    this.addItems(target, cxml.attributes.sidePair);
            }, this);
        }
    }
    Relations.RELATION_NAMES = [
        "left-left",
        "left-center",
        "left-right",
        "center-center",
        "right-left",
        "right-center",
        "right-right",
        "top-top",
        "top-middle",
        "top-bottom",
        "middle-middle",
        "bottom-top",
        "bottom-middle",
        "bottom-bottom",
        "width-width",
        "height-height",
        "leftext-left",
        "leftext-right",
        "rightext-left",
        "rightext-right",
        "topext-top",
        "topext-bottom",
        "bottomext-top",
        "bottomext-bottom"
    ];
    fgui.Relations = Relations;
})(fgui || (fgui = {}));

(function (fgui) {
    class ScrollPane extends PIXI.utils.EventEmitter {
        constructor(owner, scrollType, scrollBarMargin, scrollBarDisplay, flags, vtScrollBarRes, hzScrollBarRes, headerRes, footerRes) {
            super();
            this.$isDragging = false;
            this.$owner = owner;
            this.$maskContainer = new fgui.UIContainer(null);
            this.$owner.$rootContainer.addChild(this.$maskContainer);
            this.$container = this.$owner.$container;
            this.$container.x = 0;
            this.$container.y = 0;
            this.$maskContainer.addChild(this.$container);
            this.$scrollBarMargin = scrollBarMargin;
            this.$scrollType = scrollType;
            this.$scrollSpeed = fgui.UIConfig.defaultScrollSpeed;
            this.$mouseWheelSpeed = this.$scrollSpeed * 2;
            this.$decelerationRate = fgui.UIConfig.defaultScrollDecelerationRate;
            this.$displayOnLeft = (flags & 1) != 0;
            this.$snapToItem = (flags & 2) != 0;
            this.$displayOnDemand = (flags & 4) != 0;
            this.$pageMode = (flags & 8) != 0;
            if (flags & 16)
                this.$touchEffect = true;
            else if (flags & 32)
                this.$touchEffect = false;
            else
                this.$touchEffect = fgui.UIConfig.defaultScrollTouchEffect;
            if (flags & 64)
                this.$bouncebackEffect = true;
            else if (flags & 128)
                this.$bouncebackEffect = false;
            else
                this.$bouncebackEffect = fgui.UIConfig.defaultScrollBounceEffect;
            this.$inertiaDisabled = (flags & 256) != 0;
            if ((flags & 512) == 0)
                this.$maskContainer.scrollRect = new PIXI.Rectangle();
            this.$scrollBarVisible = true;
            this.$mouseWheelEnabled = true;
            this.$xPos = 0;
            this.$yPos = 0;
            this.$aniFlag = 0;
            this.$footerLockedSize = 0;
            this.$headerLockedSize = 0;
            if (scrollBarDisplay == 0)
                scrollBarDisplay = fgui.UIConfig.defaultScrollBarDisplay;
            this.$viewSize = new PIXI.Point();
            this.$contentSize = new PIXI.Point();
            this.$pageSize = new PIXI.Point(1, 1);
            this.$overlapSize = new PIXI.Point();
            this.$tweening = 0;
            this.$tweenTime = new PIXI.Point();
            this.$tweenStart = new PIXI.Point();
            this.$tweenDuration = new PIXI.Point();
            this.$tweenChange = new PIXI.Point();
            this.$velocity = new PIXI.Point();
            this.$containerPos = new PIXI.Point();
            this.$beginTouchPos = new PIXI.Point();
            this.$lastTouchPos = new PIXI.Point();
            this.$lastTouchGlobalPos = new PIXI.Point();
            let res;
            if (scrollBarDisplay != 3) {
                if (this.$scrollType == 2 || this.$scrollType == 1) {
                    const res = vtScrollBarRes ? vtScrollBarRes : fgui.UIConfig.verticalScrollBar;
                    if (res) {
                        this.$vtScrollBar = fgui.UIPackage.createObjectFromURL(res);
                        if (!this.$vtScrollBar)
                            throw new Error(`Cannot creatrootContainere scrollbar from ${res}`);
                        this.$vtScrollBar.setScrollPane(this, true);
                        this.$owner.$rootContainer.addChild(this.$vtScrollBar.displayObject);
                    }
                }
                if (this.$scrollType == 2 || this.$scrollType == 0) {
                    res = hzScrollBarRes ? hzScrollBarRes : fgui.UIConfig.horizontalScrollBar;
                    if (res) {
                        this.$hzScrollBar = fgui.UIPackage.createObjectFromURL(res);
                        if (!this.$hzScrollBar)
                            throw new Error(`Cannot create scrollbar from ${res}`);
                        this.$hzScrollBar.setScrollPane(this, false);
                        this.$owner.$rootContainer.addChild(this.$hzScrollBar.displayObject);
                    }
                }
                this.$scrollBarDisplayAuto = scrollBarDisplay == 2;
                if (this.$scrollBarDisplayAuto) {
                    this.$scrollBarVisible = false;
                    if (this.$vtScrollBar)
                        this.$vtScrollBar.displayObject.visible = false;
                    if (this.$hzScrollBar)
                        this.$hzScrollBar.displayObject.visible = false;
                }
            }
            else
                this.$mouseWheelEnabled = false;
            if (headerRes) {
                this.$header = fgui.UIPackage.createObjectFromURL(headerRes);
                if (this.$header == null)
                    throw new Error(`Cannot create scrollPane.header from ${res}`);
            }
            if (footerRes) {
                this.$footer = fgui.UIPackage.createObjectFromURL(footerRes);
                if (this.$footer == null)
                    throw new Error(`Cannot create scrollPane.footer from ${res}`);
            }
            if (this.$header != null || this.$footer != null)
                this.$refreshBarAxis = (this.$scrollType == 2 || this.$scrollType == 1) ? "y" : "x";
            this.setSize(owner.width, owner.height);
            this.$owner.on(fgui.InteractiveEvents.Over, this.$rollOver, this);
            this.$owner.on(fgui.InteractiveEvents.Out, this.$rollOut, this);
            this.$owner.on(fgui.InteractiveEvents.Down, this.$mouseDown, this);
            this.$owner.on(fgui.DisplayObjectEvent.MOUSE_WHEEL, this.$mouseWheel, this);
            // this.$owner.on(fgui.InteractiveEvents.Click, this.$click, this); //暂存

            this.boundary = new PIXI.EventBoundary(this.owner.$container)
            let events =
                [
                    'pointerdown',
                    'pointerup',
                    'pointermove',
                    'pointerover',
                    'pointerout',
                    'wheel'
                ]
            events.forEach((event) => {
                this.$owner.on(event, (e) => this.boundary.mapEvent(e));
                //消息转发
            });
        }
        dispose() {
            if (this.$tweening != 0)
                fgui.GTimer.inst.remove(this.tweenUpdate, this);
            this.$pageController = null;
            if (this.$hzScrollBar != null)
                this.$hzScrollBar.dispose();
            if (this.$vtScrollBar != null)
                this.$vtScrollBar.dispose();
            if (this.$header != null)
                this.$header.dispose();
            if (this.$footer != null)
                this.$footer.dispose();
            // this.boundary.destroy()
            this.$owner.off(fgui.InteractiveEvents.Move, this.$mouseMove, this);
            this.$owner.off(fgui.InteractiveEvents.Up, this.$mouseUp, this);
            this.$owner.off(fgui.InteractiveEvents.Over, this.$rollOver, this);
            this.$owner.off(fgui.InteractiveEvents.Out, this.$rollOut, this);
            this.$owner.off(fgui.InteractiveEvents.Down, this.$mouseDown, this);
            this.$owner.off(fgui.DisplayObjectEvent.MOUSE_WHEEL, this.$mouseWheel, this);
        }
        get owner() {
            return this.$owner;
        }
        get horzScrollBar() {
            return this.$hzScrollBar;
        }
        get vertScrollBar() {
            return this.$vtScrollBar;
        }
        get header() {
            return this.$header;
        }
        get footer() {
            return this.$footer;
        }
        get bouncebackEffect() {
            return this.$bouncebackEffect;
        }
        set bouncebackEffect(sc) {
            this.$bouncebackEffect = sc;
        }
        get touchEffect() {
            return this.$touchEffect;
        }
        set touchEffect(sc) {
            this.$touchEffect = sc;
        }
        set scrollSpeed(val) {
            this.$scrollSpeed = val;
            if (this.$scrollSpeed == 0)
                this.$scrollSpeed = fgui.UIConfig.defaultScrollSpeed;
            this.$mouseWheelSpeed = this.$scrollSpeed * 2;
        }
        get scrollSpeed() {
            return this.$scrollSpeed;
        }
        get snapToItem() {
            return this.$snapToItem;
        }
        set snapToItem(value) {
            this.$snapToItem = value;
        }
        get mouseWheelEnabled() {
            return this.$mouseWheelEnabled;
        }
        set mouseWheelEnabled(value) {
            this.$mouseWheelEnabled = value;
        }
        get decelerationRate() {
            return this.$decelerationRate;
        }
        set decelerationRate(value) {
            this.$decelerationRate = value;
        }
        get percX() {
            return this.$overlapSize.x == 0 ? 0 : this.$xPos / this.$overlapSize.x;
        }
        set percX(value) {
            this.setPercX(value, false);
        }
        setPercX(value, ani = false) {
            this.$owner.ensureBoundsCorrect();
            this.setPosX(this.$overlapSize.x * fgui.utils.NumberUtil.clamp01(value), ani);
        }
        get percY() {
            return this.$overlapSize.y == 0 ? 0 : this.$yPos / this.$overlapSize.y;
        }
        set percY(value) {
            this.setPercY(value, false);
        }
        setPercY(value, ani = false) {
            this.$owner.ensureBoundsCorrect();
            this.setPosY(this.$overlapSize.y * fgui.utils.NumberUtil.clamp01(value), ani);
        }
        get posX() {
            return this.$xPos;
        }
        set posX(value) {
            this.setPosX(value, false);
        }
        setPosX(value, ani = false) {
            this.$owner.ensureBoundsCorrect();
            if (this.$loop == 1)
                value = this.loopCheckingNewPos(value, "x");
            value = fgui.utils.NumberUtil.clamp(value, 0, this.$overlapSize.x);
            if (value != this.$xPos) {
                this.$xPos = value;
                this.posChanged(ani);
            }
        }
        get posY() {
            return this.$yPos;
        }
        set posY(value) {
            this.setPosY(value, false);
        }
        setPosY(value, ani = false) {
            this.$owner.ensureBoundsCorrect();
            if (this.$loop == 1)
                value = this.loopCheckingNewPos(value, "y");
            value = fgui.utils.NumberUtil.clamp(value, 0, this.$overlapSize.y);
            if (value != this.$yPos) {
                this.$yPos = value;
                this.posChanged(ani);
            }
        }
        get contentWidth() {
            return this.$contentSize.x;
        }
        get contentHeight() {
            return this.$contentSize.y;
        }
        get viewWidth() {
            return this.$viewSize.x;
        }
        set viewWidth(value) {
            value = value + this.$owner.margin.left + this.$owner.margin.right;
            if (this.$vtScrollBar != null)
                value += this.$vtScrollBar.width;
            this.$owner.width = value;
        }
        get viewHeight() {
            return this.$viewSize.y;
        }
        set viewHeight(value) {
            value = value + this.$owner.margin.top + this.$owner.margin.bottom;
            if (this.$hzScrollBar != null)
                value += this.$hzScrollBar.height;
            this.$owner.height = value;
        }
        get currentPageX() {
            if (!this.$pageMode)
                return 0;
            var page = Math.floor(this.$xPos / this.$pageSize.x);
            if (this.$xPos - page * this.$pageSize.x > this.$pageSize.x * 0.5)
                page++;
            return page;
        }
        set currentPageX(value) {
            if (this.$pageMode && this.$overlapSize.x > 0)
                this.setPosX(value * this.$pageSize.x, false);
        }
        get currentPageY() {
            if (!this.$pageMode)
                return 0;
            let page = Math.floor(this.$yPos / this.$pageSize.y);
            if (this.$yPos - page * this.$pageSize.y > this.$pageSize.y * 0.5)
                page++;
            return page;
        }
        set currentPageY(value) {
            if (this.$pageMode && this.$overlapSize.y > 0)
                this.setPosY(value * this.$pageSize.y, false);
        }
        get isBottomMost() {
            return this.$yPos == this.$overlapSize.y || this.$overlapSize.y == 0;
        }
        get isRightMost() {
            return this.$xPos == this.$overlapSize.x || this.$overlapSize.x == 0;
        }
        get pageController() {
            return this.$pageController;
        }
        set pageController(value) {
            this.$pageController = value;
        }
        get scrollingPosX() {
            return fgui.utils.NumberUtil.clamp(-this.$container.x, 0, this.$overlapSize.x);
        }
        get scrollingPosY() {
            return fgui.utils.NumberUtil.clamp(-this.$container.y, 0, this.$overlapSize.y);
        }
        scrollTop(ani = false) {
            this.setPercY(0, ani);
        }
        scrollBottom(ani = false) {
            this.setPercY(1, ani);
        }
        scrollUp(ratio = 1, ani = false) {
            if (this.$pageMode)
                this.setPosY(this.$yPos - this.$pageSize.y * ratio, ani);
            else
                this.setPosY(this.$yPos - this.$scrollSpeed * ratio, ani);
            ;
        }
        scrollDown(ratio = 1, ani = false) {
            if (this.$pageMode)
                this.setPosY(this.$yPos + this.$pageSize.y * ratio, ani);
            else
                this.setPosY(this.$yPos + this.$scrollSpeed * ratio, ani);
        }
        scrollLeft(ratio = 1, ani = false) {
            if (this.$pageMode)
                this.setPosX(this.$xPos - this.$pageSize.x * ratio, ani);
            else
                this.setPosX(this.$xPos - this.$scrollSpeed * ratio, ani);
        }
        scrollRight(ratio = 1, ani = false) {
            if (this.$pageMode)
                this.setPosX(this.$xPos + this.$pageSize.x * ratio, ani);
            else
                this.setPosX(this.$xPos + this.$scrollSpeed * ratio, ani);
        }
        scrollToView(target, ani = false, snapToFirst = false) {
            this.$owner.ensureBoundsCorrect();
            if (this.$needRefresh)
                this.refresh();
            let rect;
            if (target instanceof fgui.GObject) {
                if (target.parent != this.$owner) {
                    target.parent.localToGlobalRect(target.x, target.y, target.width, target.height, ScrollPane.sHelperRect);
                    rect = this.$owner.globalToLocalRect(ScrollPane.sHelperRect.x, ScrollPane.sHelperRect.y, ScrollPane.sHelperRect.width, ScrollPane.sHelperRect.height, ScrollPane.sHelperRect);
                }
                else {
                    rect = ScrollPane.sHelperRect;
                    rect.x = target.x;
                    rect.y = target.y;
                    rect.width = target.width;
                    rect.height = target.height;
                }
            }
            else
                rect = target;
            if (this.$overlapSize.y > 0) {
                const bottom = this.$yPos + this.$viewSize.y;
                if (snapToFirst || rect.y <= this.$yPos || rect.height >= this.$viewSize.y) {
                    if (this.$pageMode)
                        this.setPosY(Math.floor(rect.y / this.$pageSize.y) * this.$pageSize.y, ani);
                    else
                        this.setPosY(rect.y, ani);
                }
                else if (rect.y + rect.height > bottom) {
                    if (this.$pageMode)
                        this.setPosY(Math.floor(rect.y / this.$pageSize.y) * this.$pageSize.y, ani);
                    else if (rect.height <= this.$viewSize.y / 2)
                        this.setPosY(rect.y + rect.height * 2 - this.$viewSize.y, ani);
                    else
                        this.setPosY(rect.y + rect.height - this.$viewSize.y, ani);
                }
            }
            if (this.$overlapSize.x > 0) {
                let right = this.$xPos + this.$viewSize.x;
                if (snapToFirst || rect.x <= this.$xPos || rect.width >= this.$viewSize.x) {
                    if (this.$pageMode)
                        this.setPosX(Math.floor(rect.x / this.$pageSize.x) * this.$pageSize.x, ani);
                    else
                        this.setPosX(rect.x, ani);
                }
                else if (rect.x + rect.width > right) {
                    if (this.$pageMode)
                        this.setPosX(Math.floor(rect.x / this.$pageSize.x) * this.$pageSize.x, ani);
                    else if (rect.width <= this.$viewSize.x / 2)
                        this.setPosX(rect.x + rect.width * 2 - this.$viewSize.x, ani);
                    else
                        this.setPosX(rect.x + rect.width - this.$viewSize.x, ani);
                }
            }
            if (!ani && this.$needRefresh)
                this.refresh();
        }
        isChildInView(obj) {
            if (this.$overlapSize.y > 0) {
                var dist = obj.y + this.$container.y;
                if (dist < -obj.height || dist > this.$viewSize.y)
                    return false;
            }
            if (this.$overlapSize.x > 0) {
                dist = obj.x + this.$container.x;
                if (dist < -obj.width || dist > this.$viewSize.x)
                    return false;
            }
            return true;
        }
        cancelDragging() {
            this.$owner.off(fgui.InteractiveEvents.Move, this.$mouseMove, this);
            this.$owner.off(fgui.InteractiveEvents.Up, this.$mouseUp, this);
            if (ScrollPane.draggingPane == this)
                ScrollPane.draggingPane = null;
            ScrollPane.$gestureFlag = 0;
            this.$isDragging = false;
            this.$maskContainer.interactive = true;
        }
        get isDragging() {
            return this.$isDragging;
        }
        lockHeader(size) {
            if (this.$headerLockedSize == size)
                return;
            this.$headerLockedSize = size;
            if (!this.$refreshEventDispatching && this.$container[this.$refreshBarAxis] >= 0) {
                this.$tweenStart.set(this.$container.x, this.$container.y);
                this.$tweenChange.set(0, 0);
                this.$tweenChange[this.$refreshBarAxis] = this.$headerLockedSize - this.$tweenStart[this.$refreshBarAxis];
                this.$tweenDuration.set(ScrollPane.TWEEN_DEFAULT_DURATION, ScrollPane.TWEEN_DEFAULT_DURATION);
                this.$tweenTime.set(0, 0);
                this.$tweening = 2;
                fgui.GTimer.inst.addLoop(1, this.tweenUpdate, this);
            }
        }
        lockFooter(size) {
            if (this.$footerLockedSize == size)
                return;
            this.$footerLockedSize = size;
            if (!this.$refreshEventDispatching && this.$container[this.$refreshBarAxis] <= -this.$overlapSize[this.$refreshBarAxis]) {
                this.$tweenStart.set(this.$container.x, this.$container.y);
                this.$tweenChange.set(0, 0);
                let max = this.$overlapSize[this.$refreshBarAxis];
                if (max == 0)
                    max = Math.max(this.$contentSize[this.$refreshBarAxis] + this.$footerLockedSize - this.$viewSize[this.$refreshBarAxis], 0);
                else
                    max += this.$footerLockedSize;
                this.$tweenChange[this.$refreshBarAxis] = -max - this.$tweenStart[this.$refreshBarAxis];
                this.$tweenDuration.set(ScrollPane.TWEEN_DEFAULT_DURATION, ScrollPane.TWEEN_DEFAULT_DURATION);
                this.$tweenTime.set(0, 0);
                this.$tweening = 2;
                fgui.GTimer.inst.addLoop(1, this.tweenUpdate, this);
            }
        }
        onOwnerSizeChanged() {
            this.setSize(this.$owner.width, this.$owner.height);
            this.posChanged(false);
        }
        handleControllerChanged(c) {
            if (this.$pageController == c) {
                if (this.$scrollType == 0)
                    this.currentPageX = c.selectedIndex;
                else
                    this.currentPageY = c.selectedIndex;
            }
        }
        updatePageController() {
            if (this.$pageController != null && !this.$pageController.$updating) {
                let index;
                if (this.$scrollType == 0)
                    index = this.currentPageX;
                else
                    index = this.currentPageY;
                if (index < this.$pageController.pageCount) {
                    const c = this.$pageController;
                    this.$pageController = null;
                    c.selectedIndex = index;
                    this.$pageController = c;
                }
            }
        }
        adjustMaskContainer() {
            let mx, my;
            if (this.$displayOnLeft && this.$vtScrollBar != null)
                mx = Math.floor(this.$owner.margin.left + this.$vtScrollBar.width);
            else
                mx = Math.floor(this.$owner.margin.left);
            my = Math.floor(this.$owner.margin.top);
            this.$maskContainer.position.set(mx, my);
            if (this.$owner.$alignOffset.x != 0 || this.$owner.$alignOffset.y != 0) {
                if (this.$alignContainer == null) {
                    this.$alignContainer = new PIXI.Container();
                    this.$maskContainer.addChild(this.$alignContainer);
                    this.$alignContainer.addChild(this.$container);
                }
                this.$alignContainer.position.set(this.$owner.$alignOffset.x, this.$owner.$alignOffset.y);
            }
            else if (this.$alignContainer)
                this.$alignContainer.position.set(0, 0);
        }
        setSize(width, height) {
            this.adjustMaskContainer();
            if (this.$hzScrollBar) {
                this.$hzScrollBar.y = height - this.$hzScrollBar.height;
                if (this.$vtScrollBar && !this.$vScrollNone) {
                    this.$hzScrollBar.width = width - this.$vtScrollBar.width - this.$scrollBarMargin.left - this.$scrollBarMargin.right;
                    if (this.$displayOnLeft)
                        this.$hzScrollBar.x = this.$scrollBarMargin.left + this.$vtScrollBar.width;
                    else
                        this.$hzScrollBar.x = this.$scrollBarMargin.left;
                }
                else {
                    this.$hzScrollBar.width = width - this.$scrollBarMargin.left - this.$scrollBarMargin.right;
                    this.$hzScrollBar.x = this.$scrollBarMargin.left;
                }
            }
            if (this.$vtScrollBar) {
                if (!this.$displayOnLeft)
                    this.$vtScrollBar.x = width - this.$vtScrollBar.width;
                if (this.$hzScrollBar)
                    this.$vtScrollBar.height = height - this.$hzScrollBar.height - this.$scrollBarMargin.top - this.$scrollBarMargin.bottom;
                else
                    this.$vtScrollBar.height = height - this.$scrollBarMargin.top - this.$scrollBarMargin.bottom;
                this.$vtScrollBar.y = this.$scrollBarMargin.top;
            }
            this.$viewSize.x = width;
            this.$viewSize.y = height;
            if (this.$hzScrollBar && !this.$hScrollNone)
                this.$viewSize.y -= this.$hzScrollBar.height;
            if (this.$vtScrollBar && !this.$vScrollNone)
                this.$viewSize.x -= this.$vtScrollBar.width;
            this.$viewSize.x -= (this.$owner.margin.left + this.$owner.margin.right);
            this.$viewSize.y -= (this.$owner.margin.top + this.$owner.margin.bottom);
            this.$viewSize.x = Math.max(1, this.$viewSize.x);
            this.$viewSize.y = Math.max(1, this.$viewSize.y);
            this.$pageSize.x = this.$viewSize.x;
            this.$pageSize.y = this.$viewSize.y;
            this.handleSizeChanged();
        }
        setContentSize(w, h) {
            if (this.$contentSize.x == w && this.$contentSize.y == h)
                return;
            this.$contentSize.x = w;
            this.$contentSize.y = h;
            this.handleSizeChanged();
        }
        changeContentSizeOnScrolling(deltaWidth, deltaHeight, deltaPosX, deltaPosY) {
            const isRightmost = this.$xPos == this.$overlapSize.x;
            const isBottom = this.$yPos == this.$overlapSize.y;
            this.$contentSize.x += deltaWidth;
            this.$contentSize.y += deltaHeight;
            this.handleSizeChanged();
            if (this.$tweening == 1) {
                if (deltaWidth != 0 && isRightmost && this.$tweenChange.x < 0) {
                    this.$xPos = this.$overlapSize.x;
                    this.$tweenChange.x = -this.$xPos - this.$tweenStart.x;
                }
                if (deltaHeight != 0 && isBottom && this.$tweenChange.y < 0) {
                    this.$yPos = this.$overlapSize.y;
                    this.$tweenChange.y = -this.$yPos - this.$tweenStart.y;
                }
            }
            else if (this.$tweening == 2) {
                if (deltaPosX != 0) {
                    this.$container.x -= deltaPosX;
                    this.$tweenStart.x -= deltaPosX;
                    this.$xPos = -this.$container.x;
                }
                if (deltaPosY != 0) {
                    this.$container.y -= deltaPosY;
                    this.$tweenStart.y -= deltaPosY;
                    this.$yPos = -this.$container.y;
                }
            }
            else if (this.$isDragging) {
                if (deltaPosX != 0) {
                    this.$container.x -= deltaPosX;
                    this.$containerPos.x -= deltaPosX;
                    this.$xPos = -this.$container.x;
                }
                if (deltaPosY != 0) {
                    this.$container.y -= deltaPosY;
                    this.$containerPos.y -= deltaPosY;
                    this.$yPos = -this.$container.y;
                }
            }
            else {
                if (deltaWidth != 0 && isRightmost) {
                    this.$xPos = this.$overlapSize.x;
                    this.$container.x = -this.$xPos;
                }
                if (deltaHeight != 0 && isBottom) {
                    this.$yPos = this.$overlapSize.y;
                    this.$container.y = -this.$yPos;
                }
            }
            if (this.$pageMode)
                this.updatePageController();
        }
        handleSizeChanged(onScrolling = false) {
            if (this.$displayOnDemand) {
                if (this.$vtScrollBar) {
                    if (this.$contentSize.y <= this.$viewSize.y) {
                        if (!this.$vScrollNone) {
                            this.$vScrollNone = true;
                            this.$viewSize.x += this.$vtScrollBar.width;
                        }
                    }
                    else {
                        if (this.$vScrollNone) {
                            this.$vScrollNone = false;
                            this.$viewSize.x -= this.$vtScrollBar.width;
                        }
                    }
                }
                if (this.$hzScrollBar) {
                    if (this.$contentSize.x <= this.$viewSize.x) {
                        if (!this.$hScrollNone) {
                            this.$hScrollNone = true;
                            this.$viewSize.y += this.$hzScrollBar.height;
                        }
                    }
                    else {
                        if (this.$hScrollNone) {
                            this.$hScrollNone = false;
                            this.$viewSize.y -= this.$hzScrollBar.height;
                        }
                    }
                }
            }
            if (this.$vtScrollBar) {
                if (this.$viewSize.y < this.$vtScrollBar.minSize)
                    this.$vtScrollBar.displayObject.visible = false;
                else {
                    this.$vtScrollBar.displayObject.visible = this.$scrollBarVisible && !this.$vScrollNone;
                    if (this.$contentSize.y == 0)
                        this.$vtScrollBar.displayPerc = 0;
                    else
                        this.$vtScrollBar.displayPerc = Math.min(1, this.$viewSize.y / this.$contentSize.y);
                }
            }
            if (this.$hzScrollBar) {
                if (this.$viewSize.x < this.$hzScrollBar.minSize)
                    this.$hzScrollBar.displayObject.visible = false;
                else {
                    this.$hzScrollBar.displayObject.visible = this.$scrollBarVisible && !this.$hScrollNone;
                    if (this.$contentSize.x == 0)
                        this.$hzScrollBar.displayPerc = 0;
                    else
                        this.$hzScrollBar.displayPerc = Math.min(1, this.$viewSize.x / this.$contentSize.x);
                }
            }
            const rect = this.$maskContainer.scrollRect;
            if (rect) {
                rect.width = this.$viewSize.x;
                rect.height = this.$viewSize.y;
                this.$maskContainer.scrollRect = rect;
            }
            if (this.$scrollType == 0 || this.$scrollType == 2)
                this.$overlapSize.x = Math.ceil(Math.max(0, this.$contentSize.x - this.$viewSize.x));
            else
                this.$overlapSize.x = 0;
            if (this.$scrollType == 1 || this.$scrollType == 2)
                this.$overlapSize.y = Math.ceil(Math.max(0, this.$contentSize.y - this.$viewSize.y));
            else
                this.$overlapSize.y = 0;
            this.$xPos = fgui.utils.NumberUtil.clamp(this.$xPos, 0, this.$overlapSize.x);
            this.$yPos = fgui.utils.NumberUtil.clamp(this.$yPos, 0, this.$overlapSize.y);
            if (this.$refreshBarAxis != null) {
                var max = this.$overlapSize[this.$refreshBarAxis];
                if (max == 0)
                    max = Math.max(this.$contentSize[this.$refreshBarAxis] + this.$footerLockedSize - this.$viewSize[this.$refreshBarAxis], 0);
                else
                    max += this.$footerLockedSize;
                if (this.$refreshBarAxis == "x") {
                    this.$container.position.set(fgui.utils.NumberUtil.clamp(this.$container.x, -max, this.$headerLockedSize), fgui.utils.NumberUtil.clamp(this.$container.y, -this.$overlapSize.y, 0));
                }
                else {
                    this.$container.position.set(fgui.utils.NumberUtil.clamp(this.$container.x, -this.$overlapSize.x, 0), fgui.utils.NumberUtil.clamp(this.$container.y, -max, this.$headerLockedSize));
                }
                if (this.$header != null) {
                    if (this.$refreshBarAxis == "x")
                        this.$header.height = this.$viewSize.y;
                    else
                        this.$header.width = this.$viewSize.x;
                }
                if (this.$footer != null) {
                    if (this.$refreshBarAxis == "y")
                        this.$footer.height = this.$viewSize.y;
                    else
                        this.$footer.width = this.$viewSize.x;
                }
            }
            else {
                this.$container.position.set(fgui.utils.NumberUtil.clamp(this.$container.x, -this.$overlapSize.x, 0), fgui.utils.NumberUtil.clamp(this.$container.y, -this.$overlapSize.y, 0));
            }
            this.syncScrollBar();
            this.checkRefreshBar();
            if (this.$pageMode)
                this.updatePageController();
        }
        posChanged(ani) {
            if (this.$aniFlag == 0)
                this.$aniFlag = ani ? 1 : -1;
            else if (this.$aniFlag == 1 && !ani)
                this.$aniFlag = -1;
            this.$needRefresh = true;
            fgui.GTimer.inst.callLater(this.refresh, this);
        }
        refresh() {
            this.$needRefresh = false;
            fgui.GTimer.inst.remove(this.refresh, this);
            if (this.$pageMode || this.$snapToItem) {
                ScrollPane.sEndPos.set(-this.$xPos, -this.$yPos);
                this.alignPosition(ScrollPane.sEndPos, false);
                this.$xPos = -ScrollPane.sEndPos.x;
                this.$yPos = -ScrollPane.sEndPos.y;
            }
            this.refresh2();
            this.emit(fgui.ScrollEvent.SCROLL, this);
            if (this.$needRefresh) {
                this.$needRefresh = false;
                fgui.GTimer.inst.remove(this.refresh, this);
                this.refresh2();
            }
            this.syncScrollBar();
            this.$aniFlag = 0;
        }
        refresh2() {
            if (this.$aniFlag == 1 && !this.$isDragging) {
                let posX;
                let posY;
                if (this.$overlapSize.x > 0)
                    posX = -Math.floor(this.$xPos);
                else {
                    if (this.$container.x != 0)
                        this.$container.x = 0;
                    posX = 0;
                }
                if (this.$overlapSize.y > 0)
                    posY = -Math.floor(this.$yPos);
                else {
                    if (this.$container.y != 0)
                        this.$container.y = 0;
                    posY = 0;
                }
                if (posX != this.$container.x || posY != this.$container.y) {
                    this.$tweening = 1;
                    this.$tweenTime.set(0, 0);
                    this.$tweenDuration.set(ScrollPane.TWEEN_MANUALLY_SET_DURATION, ScrollPane.TWEEN_MANUALLY_SET_DURATION);
                    this.$tweenStart.set(this.$container.x, this.$container.y);
                    this.$tweenChange.set(posX - this.$tweenStart.x, posY - this.$tweenStart.y);
                    fgui.GTimer.inst.addLoop(1, this.tweenUpdate, this);
                }
                else if (this.$tweening != 0)
                    this.killTween();
            }
            else {
                if (this.$tweening != 0)
                    this.killTween();
                this.$container.position.set(Math.floor(-this.$xPos), Math.floor(-this.$yPos));
                this.loopCheckingCurrent();
            }
            if (this.$pageMode)
                this.updatePageController();
        }
        syncScrollBar(end = false) {
            if (this.$vtScrollBar != null) {
                this.$vtScrollBar.scrollPerc = this.$overlapSize.y == 0 ? 0 : fgui.utils.NumberUtil.clamp(-this.$container.y, 0, this.$overlapSize.y) / this.$overlapSize.y;
                if (this.$scrollBarDisplayAuto)
                    this.showScrollBar(!end);
            }
            if (this.$hzScrollBar != null) {
                this.$hzScrollBar.scrollPerc = this.$overlapSize.x == 0 ? 0 : fgui.utils.NumberUtil.clamp(-this.$container.x, 0, this.$overlapSize.x) / this.$overlapSize.x;
                if (this.$scrollBarDisplayAuto)
                    this.showScrollBar(!end);
            }
            if (end)
                this.$maskContainer.interactive = true;
        }
        $mouseDown(e) {
            if (!this.$touchEffect)
                return;
            if (this.$tweening != 0) {
                this.killTween();
                this.$isDragging = false;
            }
            else
                this.$isDragging = false;
            fgui.GRoot.globalMouseStatus.mouseX = e.clientX
            fgui.GRoot.globalMouseStatus.mouseY = e.clientY
            const globalMouse = PIXI.utils.isMobile.any ?
                this.$owner.globalToLocal(e.data.global.x, e.data.global.y)
                : this.$owner.globalToLocal(fgui.GRoot.globalMouseStatus.mouseX, fgui.GRoot.globalMouseStatus.mouseY, ScrollPane.sHelperPoint);
            this.$containerPos.set(this.$container.x, this.$container.y);
            this.$beginTouchPos.copyFrom(globalMouse);
            this.$lastTouchPos.copyFrom(globalMouse);
            this.$lastTouchGlobalPos.copyFrom(globalMouse);
            this.$isHoldAreaDone = false;
            this.$velocity.set(0, 0);
            this.$velocityScale = 1;
            this.$lastMoveTime = fgui.GTimer.inst.curTime / 1000;
            this.$owner.on(fgui.InteractiveEvents.Move, this.$mouseMove, this);
            this.$owner.on(fgui.InteractiveEvents.Up, this.$mouseUp, this);
            this.$owner.on(fgui.InteractiveEvents.UpOutside, this.$mouseUp, this);
        }
        $mouseMove() {
            this.$isDragging = true
            if (!this.$touchEffect)
                return;
            if (ScrollPane.draggingPane != null && ScrollPane.draggingPane != this || fgui.GObject.draggingObject != null)
                return;
            let sensitivity = fgui.UIConfig.touchScrollSensitivity;
            const globalMouse = this.$owner.globalToLocal(fgui.GRoot.globalMouseStatus.mouseX, fgui.GRoot.globalMouseStatus.mouseY, ScrollPane.sHelperPoint);
            let diff, diff2;
            let sv, sh;
            if (this.$scrollType == 1) {
                if (!this.$isHoldAreaDone) {
                    ScrollPane.$gestureFlag |= 1;
                    diff = Math.abs(this.$beginTouchPos.y - globalMouse.y);
                    if (diff < sensitivity) {
                        return;
                    }
                    if ((ScrollPane.$gestureFlag & 2) != 0) {
                        diff2 = Math.abs(this.$beginTouchPos.x - globalMouse.x);
                        if (diff < diff2) {
                            return;
                        }
                    }
                }
                sv = true;
            }
            else if (this.$scrollType == 0) {
                if (!this.$isHoldAreaDone) {
                    ScrollPane.$gestureFlag |= 2;
                    diff = Math.abs(this.$beginTouchPos.x - globalMouse.x);
                    if (diff < sensitivity)
                        return;
                    if ((ScrollPane.$gestureFlag & 1) != 0) {
                        diff2 = Math.abs(this.$beginTouchPos.y - globalMouse.y);
                        if (diff < diff2)
                            return;
                    }
                }
                sh = true;
            }
            else {
                ScrollPane.$gestureFlag = 3;
                if (!this.$isHoldAreaDone) {
                    diff = Math.abs(this.$beginTouchPos.y - globalMouse.y);
                    if (diff < sensitivity) {
                        diff = Math.abs(this.$beginTouchPos.x - globalMouse.x);
                        if (diff < sensitivity)
                            return;
                    }
                }
                sv = sh = true;
            }
            let newPosX = Math.floor(this.$containerPos.x + globalMouse.x - this.$beginTouchPos.x);
            let newPosY = Math.floor(this.$containerPos.y + globalMouse.y - this.$beginTouchPos.y);
            if (sv) {
                if (newPosY > 0) {
                    if (!this.$bouncebackEffect)
                        this.$container.y = 0;
                    else if (this.$header != null && this.$header.height != 0)
                        this.$container.y = Math.floor(Math.min(newPosY * 0.5, this.$header.height));
                    else
                        this.$container.y = Math.floor(Math.min(newPosY * 0.5, this.$viewSize.y * ScrollPane.PULL_DIST_RATIO));
                }
                else if (newPosY < -this.$overlapSize.y) {
                    if (!this.$bouncebackEffect)
                        this.$container.y = -this.$overlapSize.y;
                    else if (this.$footer != null && this.$footer.height > 0)
                        this.$container.y = Math.floor(Math.max((newPosY + this.$overlapSize.y) * 0.5, -this.$footer.height) - this.$overlapSize.y);
                    else
                        this.$container.y = Math.floor(Math.max((newPosY + this.$overlapSize.y) * 0.5, -this.$viewSize.y * ScrollPane.PULL_DIST_RATIO) - this.$overlapSize.y);
                }
                else
                    this.$container.y = newPosY;
            }
            if (sh) {
                if (newPosX > 0) {
                    if (!this.$bouncebackEffect)
                        this.$container.x = 0;
                    else if (this.$header != null && this.$header.width != 0)
                        this.$container.x = Math.floor(Math.min(newPosX * 0.5, this.$header.width));
                    else
                        this.$container.x = Math.floor(Math.min(newPosX * 0.5, this.$viewSize.x * ScrollPane.PULL_DIST_RATIO));
                }
                else if (newPosX < 0 - this.$overlapSize.x) {
                    if (!this.$bouncebackEffect)
                        this.$container.x = -this.$overlapSize.x;
                    else if (this.$footer != null && this.$footer.width > 0)
                        this.$container.x = Math.floor(Math.max((newPosX + this.$overlapSize.x) * 0.5, -this.$footer.width) - this.$overlapSize.x);
                    else
                        this.$container.x = Math.floor(Math.max((newPosX + this.$overlapSize.x) * 0.5, -this.$viewSize.x * ScrollPane.PULL_DIST_RATIO) - this.$overlapSize.x);
                }
                else
                    this.$container.x = newPosX;
            }
            const frameRate = PIXI.Ticker.shared.FPS;
            const now = fgui.GTimer.inst.curTime / 1000;
            const deltaTime = Math.max(now - this.$lastMoveTime, 1 / frameRate);
            let deltaPositionX = globalMouse.x - this.$lastTouchPos.x;
            let deltaPositionY = globalMouse.y - this.$lastTouchPos.y;
            if (!sh)
                deltaPositionX = 0;
            if (!sv)
                deltaPositionY = 0;
            if (deltaTime != 0) {
                const elapsed = deltaTime * frameRate - 1;
                if (elapsed > 1) {
                    const factor = Math.pow(0.833, elapsed);
                    this.$velocity.x = this.$velocity.x * factor;
                    this.$velocity.y = this.$velocity.y * factor;
                }
                this.$velocity.x = fgui.utils.NumberUtil.lerp(this.$velocity.x, deltaPositionX * 60 / frameRate / deltaTime, deltaTime * 10);
                this.$velocity.y = fgui.utils.NumberUtil.lerp(this.$velocity.y, deltaPositionY * 60 / frameRate / deltaTime, deltaTime * 10);
            }
            const deltaGlobalPositionX = this.$lastTouchGlobalPos.x - globalMouse.x;
            const deltaGlobalPositionY = this.$lastTouchGlobalPos.y - globalMouse.y;
            if (deltaPositionX != 0)
                this.$velocityScale = Math.abs(deltaGlobalPositionX / deltaPositionX);
            else if (deltaPositionY != 0)
                this.$velocityScale = Math.abs(deltaGlobalPositionY / deltaPositionY);
            this.$lastTouchPos.copyFrom(globalMouse);
            this.$lastTouchGlobalPos.copyFrom(globalMouse);
            this.$lastMoveTime = now;
            if (this.$overlapSize.x > 0)
                this.$xPos = fgui.utils.NumberUtil.clamp(-this.$container.x, 0, this.$overlapSize.x);
            if (this.$overlapSize.y > 0)
                this.$yPos = fgui.utils.NumberUtil.clamp(-this.$container.y, 0, this.$overlapSize.y);
            if (this.$loop != 0) {
                newPosX = this.$container.x;
                newPosY = this.$container.y;
                if (this.loopCheckingCurrent()) {
                    this.$containerPos.x += this.$container.x - newPosX;
                    this.$containerPos.y += this.$container.y - newPosY;
                }
            }
            ScrollPane.draggingPane = this;
            this.$isHoldAreaDone = true;
            this.$isDragging = true;
            this.$maskContainer.interactive = false;
            this.syncScrollBar();
            this.checkRefreshBar();
            if (this.$pageMode)
                this.updatePageController();
            this.emit(fgui.ScrollEvent.SCROLL, this);
        }
        $mouseUp() {
            this.$owner.off(fgui.InteractiveEvents.Move, this.$mouseMove, this);
            this.$owner.off(fgui.InteractiveEvents.UpOutside, this.$mouseUp, this);
            this.$owner.off(fgui.InteractiveEvents.Up, this.$mouseUp, this);
            if (ScrollPane.draggingPane == this)
                ScrollPane.draggingPane = null;
            ScrollPane.$gestureFlag = 0;
            if (!this.$isDragging || !this.$touchEffect) {
                this.$isDragging = false;
                this.$maskContainer.interactive = true;
                //注意 这里也可以用于触发 同时down/up也可以传递
                return;
            }
            this.$isDragging = false;
            this.$maskContainer.interactive = true;
            this.$tweenStart.set(this.$container.x, this.$container.y);
            ScrollPane.sEndPos.set(this.$tweenStart.x, this.$tweenStart.y);
            let flag = false;
            if (this.$container.x > 0) {
                ScrollPane.sEndPos.x = 0;
                flag = true;
            }
            else if (this.$container.x < -this.$overlapSize.x) {
                ScrollPane.sEndPos.x = -this.$overlapSize.x;
                flag = true;
            }
            if (this.$container.y > 0) {
                ScrollPane.sEndPos.y = 0;
                flag = true;
            }
            else if (this.$container.y < -this.$overlapSize.y) {
                ScrollPane.sEndPos.y = -this.$overlapSize.y;
                flag = true;
            }
            if (flag) {
                this.$tweenChange.set(ScrollPane.sEndPos.x - this.$tweenStart.x, ScrollPane.sEndPos.y - this.$tweenStart.y);
                if (this.$tweenChange.x < -fgui.UIConfig.touchDragSensitivity || this.$tweenChange.y < -fgui.UIConfig.touchDragSensitivity) {
                    this.$refreshEventDispatching = true;
                    this.emit(fgui.ScrollEvent.PULL_DOWN_RELEASE);
                    this.$refreshEventDispatching = false;
                }
                else if (this.$tweenChange.x > fgui.UIConfig.touchDragSensitivity || this.$tweenChange.y > fgui.UIConfig.touchDragSensitivity) {
                    this.$refreshEventDispatching = true;
                    this.emit(fgui.ScrollEvent.PULL_UP_RELEASE);
                    this.$refreshEventDispatching = false;
                }
                if (this.$headerLockedSize > 0 && ScrollPane.sEndPos[this.$refreshBarAxis] == 0) {
                    ScrollPane.sEndPos[this.$refreshBarAxis] = this.$headerLockedSize;
                    this.$tweenChange.x = ScrollPane.sEndPos.x - this.$tweenStart.x;
                    this.$tweenChange.y = ScrollPane.sEndPos.y - this.$tweenStart.y;
                }
                else if (this.$footerLockedSize > 0 && ScrollPane.sEndPos[this.$refreshBarAxis] == -this.$overlapSize[this.$refreshBarAxis]) {
                    var max = this.$overlapSize[this.$refreshBarAxis];
                    if (max == 0)
                        max = Math.max(this.$contentSize[this.$refreshBarAxis] + this.$footerLockedSize - this.$viewSize[this.$refreshBarAxis], 0);
                    else
                        max += this.$footerLockedSize;
                    ScrollPane.sEndPos[this.$refreshBarAxis] = -max;
                    this.$tweenChange.x = ScrollPane.sEndPos.x - this.$tweenStart.x;
                    this.$tweenChange.y = ScrollPane.sEndPos.y - this.$tweenStart.y;
                }
                this.$tweenDuration.set(ScrollPane.TWEEN_DEFAULT_DURATION, ScrollPane.TWEEN_DEFAULT_DURATION);
            }
            else {
                if (!this.$inertiaDisabled) {
                    const frameRate = PIXI.Ticker.shared.FPS;
                    const elapsed = (fgui.GTimer.inst.curTime / 1000 - this.$lastMoveTime) * frameRate - 1;
                    if (elapsed > 1) {
                        const factor = Math.pow(0.833, elapsed);
                        this.$velocity.x = this.$velocity.x * factor;
                        this.$velocity.y = this.$velocity.y * factor;
                    }
                    this.updateTargetAndDuration(this.$tweenStart, ScrollPane.sEndPos);
                }
                else
                    this.$tweenDuration.set(ScrollPane.TWEEN_DEFAULT_DURATION, ScrollPane.TWEEN_DEFAULT_DURATION);
                ScrollPane.sOldChange.set(ScrollPane.sEndPos.x - this.$tweenStart.x, ScrollPane.sEndPos.y - this.$tweenStart.y);
                this.loopCheckingTarget(ScrollPane.sEndPos);
                if (this.$pageMode || this.$snapToItem)
                    this.alignPosition(ScrollPane.sEndPos, true);
                this.$tweenChange.x = ScrollPane.sEndPos.x - this.$tweenStart.x;
                this.$tweenChange.y = ScrollPane.sEndPos.y - this.$tweenStart.y;
                if (this.$tweenChange.x == 0 && this.$tweenChange.y == 0) {
                    if (this.$scrollBarDisplayAuto)
                        this.showScrollBar(false);
                    return;
                }
                if (this.$pageMode || this.$snapToItem) {
                    this.fixDuration("x", ScrollPane.sOldChange.x);
                    this.fixDuration("y", ScrollPane.sOldChange.y);
                }
            }
            this.$tweening = 2;
            this.$tweenTime.set(0, 0);
            fgui.GTimer.inst.addLoop(1, this.tweenUpdate, this);
        }
        $click(ev) {
            this.$isDragging = false;
            //fgui.GRoot.inst.$uiStage.$appContext.renderer.events.rootBoundary
            // console.log("clicked on me")
            let x = fgui.GRoot.globalMouseStatus.mouseX
            let y = fgui.GRoot.globalMouseStatus.mouseY
            let c = this.owner.$displayObject
            // this.$maskContainer.interactive = false
            // this.$owner.off(fgui.InteractiveEvents.Click, this.$click, this); //暂存


            // this.interactive = true
            // this.$owner.on(fgui.InteractiveEvents.Click, this.$click, this); //暂存
        }
        $mouseWheel(evt) {
            if (!this.$mouseWheelEnabled)
                return;
            const delta = evt.delta > 0 ? -1 : (evt.delta < 0 ? 1 : 0);
            if (this.$overlapSize.x > 0 && this.$overlapSize.y == 0) {
                if (this.$pageMode)
                    this.setPosX(this.$xPos + this.$pageSize.x * delta, false);
                else
                    this.setPosX(this.$xPos + this.$mouseWheelSpeed * delta, false);
            }
            else {
                if (this.$pageMode)
                    this.setPosY(this.$yPos + this.$pageSize.y * delta, false);
                else
                    this.setPosY(this.$yPos + this.$mouseWheelSpeed * delta, false);
            }
        }
        $rollOver() {
            this.showScrollBar(true);
        }
        $rollOut() {
            this.showScrollBar(false);
        }
        showScrollBar(visible) {
            if (visible) {
                fgui.GTimer.inst.remove(this.setScrollBarVisible, this);
                this.setScrollBarVisible(true);
            }
            else
                fgui.GTimer.inst.add(500, 1, this.setScrollBarVisible, this, visible);
        }
        setScrollBarVisible(visible) {
            this.$scrollBarVisible = visible && this.$viewSize.x > 0 && this.$viewSize.y > 0;
            if (this.$vtScrollBar)
                this.$vtScrollBar.displayObject.visible = this.$scrollBarVisible && !this.$vScrollNone;
            if (this.$hzScrollBar)
                this.$hzScrollBar.displayObject.visible = this.$scrollBarVisible && !this.$hScrollNone;
        }
        getLoopPartSize(division, axis) {
            let pad = 0;
            if (this.$owner instanceof fgui.GList)
                pad = axis == "x" ? this.$owner.columnGap : this.$owner.lineGap;
            return (this.$contentSize[axis] + pad) / division;
        }
        loopCheckingCurrent() {
            let changed = false;
            if (this.$loop == 1 && this.$overlapSize.x > 0) {
                if (this.$xPos < 0.001) {
                    this.$xPos += this.getLoopPartSize(2, "x");
                    changed = true;
                }
                else if (this.$xPos >= this.$overlapSize.x) {
                    this.$xPos -= this.getLoopPartSize(2, "x");
                    changed = true;
                }
            }
            else if (this.$loop == 2 && this.$overlapSize.y > 0) {
                if (this.$yPos < 0.001) {
                    this.$yPos += this.getLoopPartSize(2, "y");
                    changed = true;
                }
                else if (this.$yPos >= this.$overlapSize.y) {
                    this.$yPos -= this.getLoopPartSize(2, "y");
                    changed = true;
                }
            }
            if (changed)
                this.$container.position.set(Math.floor(-this.$xPos), Math.floor(-this.$yPos));
            return changed;
        }
        loopCheckingTarget(endPos) {
            if (this.$loop == 1)
                this.loopCheckingTarget2(endPos, "x");
            if (this.$loop == 2)
                this.loopCheckingTarget2(endPos, "y");
        }
        loopCheckingTarget2(endPos, axis) {
            var halfSize;
            var tmp;
            if (endPos[axis] > 0) {
                halfSize = this.getLoopPartSize(2, axis);
                tmp = this.$tweenStart[axis] - halfSize;
                if (tmp <= 0 && tmp >= -this.$overlapSize[axis]) {
                    endPos[axis] -= halfSize;
                    this.$tweenStart[axis] = tmp;
                }
            }
            else if (endPos[axis] < -this.$overlapSize[axis]) {
                halfSize = this.getLoopPartSize(2, axis);
                tmp = this.$tweenStart[axis] + halfSize;
                if (tmp <= 0 && tmp >= -this.$overlapSize[axis]) {
                    endPos[axis] += halfSize;
                    this.$tweenStart[axis] = tmp;
                }
            }
        }
        loopCheckingNewPos(value, axis) {
            if (this.$overlapSize[axis] == 0)
                return value;
            let pos = axis == "x" ? this.$xPos : this.$yPos;
            let changed = false;
            let v;
            if (value < 0.001) {
                value += this.getLoopPartSize(2, axis);
                if (value > pos) {
                    v = this.getLoopPartSize(6, axis);
                    v = Math.ceil((value - pos) / v) * v;
                    pos = fgui.utils.NumberUtil.clamp(pos + v, 0, this.$overlapSize[axis]);
                    changed = true;
                }
            }
            else if (value >= this.$overlapSize[axis]) {
                value -= this.getLoopPartSize(2, axis);
                if (value < pos) {
                    v = this.getLoopPartSize(6, axis);
                    v = Math.ceil((pos - value) / v) * v;
                    pos = fgui.utils.NumberUtil.clamp(pos - v, 0, this.$overlapSize[axis]);
                    changed = true;
                }
            }
            if (changed) {
                if (axis == "x")
                    this.$container.x = -Math.floor(pos);
                else
                    this.$container.y = -Math.floor(pos);
            }
            return value;
        }
        alignPosition(pos, inertialScrolling) {
            if (this.$pageMode) {
                pos.x = this.alignByPage(pos.x, "x", inertialScrolling);
                pos.y = this.alignByPage(pos.y, "y", inertialScrolling);
            }
            else if (this.$snapToItem) {
                var pt = this.$owner.getSnappingPosition(-pos.x, -pos.y, ScrollPane.sHelperPoint);
                if (pos.x < 0 && pos.x > -this.$overlapSize.x)
                    pos.x = -pt.x;
                if (pos.y < 0 && pos.y > -this.$overlapSize.y)
                    pos.y = -pt.y;
            }
        }
        alignByPage(pos, axis, inertialScrolling) {
            let page;
            if (pos > 0)
                page = 0;
            else if (pos < -this.$overlapSize[axis])
                page = Math.ceil(this.$contentSize[axis] / this.$pageSize[axis]) - 1;
            else {
                page = Math.floor(-pos / this.$pageSize[axis]);
                var change = inertialScrolling ? (pos - this.$containerPos[axis]) : (pos - this.$container[axis]);
                var testPageSize = Math.min(this.$pageSize[axis], this.$contentSize[axis] - (page + 1) * this.$pageSize[axis]);
                var delta = -pos - page * this.$pageSize[axis];
                if (Math.abs(change) > this.$pageSize[axis]) {
                    if (delta > testPageSize * 0.5)
                        page++;
                }
                else {
                    if (delta > testPageSize * (change < 0 ? 0.3 : 0.7))
                        page++;
                }
                const dst = this.$pageSize[axis];
                pos = -page * dst;
                if (pos < -dst)
                    pos = -dst;
            }
            if (inertialScrolling) {
                var oldPos = this.$tweenStart[axis];
                var oldPage;
                if (oldPos > 0)
                    oldPage = 0;
                else if (oldPos < -this.$overlapSize[axis])
                    oldPage = Math.ceil(this.$contentSize[axis] / this.$pageSize[axis]) - 1;
                else
                    oldPage = Math.floor(-oldPos / this.$pageSize[axis]);
                var startPage = Math.floor(-this.$containerPos[axis] / this.$pageSize[axis]);
                if (Math.abs(page - startPage) > 1 && Math.abs(oldPage - startPage) <= 1) {
                    if (page > startPage)
                        page = startPage + 1;
                    else
                        page = startPage - 1;
                    pos = -page * this.$pageSize[axis];
                }
            }
            return pos;
        }
        updateTargetAndDuration(orignPos, resultPos) {
            resultPos.x = this.updateTargetAndDuration2(orignPos.x, "x");
            resultPos.y = this.updateTargetAndDuration2(orignPos.y, "y");
        }
        updateTargetAndDuration2(pos, axis) {
            let v = this.$velocity[axis];
            var duration = 0;
            if (pos > 0)
                pos = 0;
            else if (pos < -this.$overlapSize[axis])
                pos = -this.$overlapSize[axis];
            else {
                var isMobile = PIXI.utils.isMobile.any;
                let v2 = Math.abs(v) * this.$velocityScale;
                if (isMobile)
                    v2 *= Math.max(fgui.GRoot.inst.stageWrapper.designWidth, fgui.GRoot.inst.stageWrapper.designHeight) / Math.max(fgui.GRoot.inst.stageWidth, fgui.GRoot.inst.stageHeight);
                let ratio = 0;
                if (this.$pageMode || !isMobile) {
                    if (v2 > 500)
                        ratio = Math.pow((v2 - 500) / 500, 2);
                }
                else {
                    if (v2 > 1000)
                        ratio = Math.pow((v2 - 1000) / 1000, 2);
                }
                if (ratio != 0) {
                    if (ratio > 1)
                        ratio = 1;
                    v2 *= ratio;
                    v *= ratio;
                    this.$velocity[axis] = v;
                    duration = Math.log(60 / v2) / Math.log(this.$decelerationRate) / 60;
                    const change = (v / 60 - 1) / (1 - this.$decelerationRate);
                    pos += change;
                }
            }
            if (duration < ScrollPane.TWEEN_DEFAULT_DURATION)
                duration = ScrollPane.TWEEN_DEFAULT_DURATION;
            this.$tweenDuration[axis] = duration;
            return pos;
        }
        fixDuration(axis, oldChange) {
            if (this.$tweenChange[axis] == 0 || Math.abs(this.$tweenChange[axis]) >= Math.abs(oldChange))
                return;
            let newDuration = Math.abs(this.$tweenChange[axis] / oldChange) * this.$tweenDuration[axis];
            if (newDuration < ScrollPane.TWEEN_DEFAULT_DURATION)
                newDuration = ScrollPane.TWEEN_DEFAULT_DURATION;
            this.$tweenDuration[axis] = newDuration;
        }
        killTween() {
            if (this.$tweening == 1) {
                this.$container.position.set(this.$tweenStart.x + this.$tweenChange.x, this.$tweenStart.y + this.$tweenChange.y);
                this.emit(fgui.ScrollEvent.SCROLL, this);
            }
            this.$tweening = 0;
            fgui.GTimer.inst.remove(this.tweenUpdate, this);
            this.emit(fgui.ScrollEvent.SCROLL_END, this);
        }
        checkRefreshBar() {
            if (this.$header == null && this.$footer == null)
                return;
            const pos = this.$container[this.$refreshBarAxis];
            if (this.$header != null) {
                if (pos > 0) {
                    if (this.$header.displayObject.parent == null)
                        this.$maskContainer.addChildAt(this.$header.displayObject, 0);
                    const pt = ScrollPane.sHelperPoint;
                    pt.set(this.$header.width, this.$header.height);
                    pt[this.$refreshBarAxis] = pos;
                    this.$header.setSize(pt.x, pt.y);
                }
                else {
                    if (this.$header.displayObject.parent != null)
                        this.$maskContainer.removeChild(this.$header.displayObject);
                }
            }
            if (this.$footer != null) {
                var max = this.$overlapSize[this.$refreshBarAxis];
                if (pos < -max || max == 0 && this.$footerLockedSize > 0) {
                    if (this.$footer.displayObject.parent == null)
                        this.$maskContainer.addChildAt(this.$footer.displayObject, 0);
                    const pt = ScrollPane.sHelperPoint;
                    pt.set(this.$footer.x, this.$footer.y);
                    if (max > 0)
                        pt[this.$refreshBarAxis] = pos + this.$contentSize[this.$refreshBarAxis];
                    else
                        pt[this.$refreshBarAxis] = Math.max(Math.min(pos + this.$viewSize[this.$refreshBarAxis], this.$viewSize[this.$refreshBarAxis] - this.$footerLockedSize), this.$viewSize[this.$refreshBarAxis] - this.$contentSize[this.$refreshBarAxis]);
                    this.$footer.setXY(pt.x, pt.y);
                    pt.set(this.$footer.width, this.$footer.height);
                    if (max > 0)
                        pt[this.$refreshBarAxis] = -max - pos;
                    else
                        pt[this.$refreshBarAxis] = this.$viewSize[this.$refreshBarAxis] - this.$footer[this.$refreshBarAxis];
                    this.$footer.setSize(pt.x, pt.y);
                }
                else {
                    if (this.$footer.displayObject.parent != null)
                        this.$maskContainer.removeChild(this.$footer.displayObject);
                }
            }
        }
        tweenUpdate() {
            var nx = this.runTween("x");
            var ny = this.runTween("y");
            this.$container.position.set(nx, ny);
            if (this.$tweening == 2) {
                if (this.$overlapSize.x > 0)
                    this.$xPos = fgui.utils.NumberUtil.clamp(-nx, 0, this.$overlapSize.x);
                if (this.$overlapSize.y > 0)
                    this.$yPos = fgui.utils.NumberUtil.clamp(-ny, 0, this.$overlapSize.y);
                if (this.$pageMode)
                    this.updatePageController();
            }
            if (this.$tweenChange.x == 0 && this.$tweenChange.y == 0) {
                this.$tweening = 0;
                fgui.GTimer.inst.remove(this.tweenUpdate, this);
                this.loopCheckingCurrent();
                this.syncScrollBar(true);
                this.checkRefreshBar();
                this.emit(fgui.ScrollEvent.SCROLL, this);
                this.emit(fgui.ScrollEvent.SCROLL_END, this);
            }
            else {
                this.syncScrollBar(false);
                this.checkRefreshBar();
                this.emit(fgui.ScrollEvent.SCROLL, this);
            }
        }
        runTween(axis) {
            const delta = fgui.GTimer.inst.ticker.deltaTime;
            let newValue;
            if (this.$tweenChange[axis] != 0) {
                this.$tweenTime[axis] += delta * PIXI.settings.TARGET_FPMS;
                if (this.$tweenTime[axis] >= this.$tweenDuration[axis]) {
                    newValue = this.$tweenStart[axis] + this.$tweenChange[axis];
                    this.$tweenChange[axis] = 0;
                }
                else {
                    const ratio = ScrollPane.$easeTypeFunc(this.$tweenTime[axis], this.$tweenDuration[axis]);
                    newValue = this.$tweenStart[axis] + Math.floor(this.$tweenChange[axis] * ratio);
                }
                var threshold1 = 0;
                var threshold2 = -this.$overlapSize[axis];
                if (this.$headerLockedSize > 0 && this.$refreshBarAxis == axis)
                    threshold1 = this.$headerLockedSize;
                if (this.$footerLockedSize > 0 && this.$refreshBarAxis == axis) {
                    var max = this.$overlapSize[this.$refreshBarAxis];
                    if (max == 0)
                        max = Math.max(this.$contentSize[this.$refreshBarAxis] + this.$footerLockedSize - this.$viewSize[this.$refreshBarAxis], 0);
                    else
                        max += this.$footerLockedSize;
                    threshold2 = -max;
                }
                if (this.$tweening == 2 && this.$bouncebackEffect) {
                    if (newValue > 20 + threshold1 && this.$tweenChange[axis] > 0
                        || newValue > threshold1 && this.$tweenChange[axis] == 0) {
                        this.$tweenTime[axis] = 0;
                        this.$tweenDuration[axis] = ScrollPane.TWEEN_DEFAULT_DURATION;
                        this.$tweenChange[axis] = -newValue + threshold1;
                        this.$tweenStart[axis] = newValue;
                    }
                    else if (newValue < threshold2 - 20 && this.$tweenChange[axis] < 0
                        || newValue < threshold2 && this.$tweenChange[axis] == 0) {
                        this.$tweenTime[axis] = 0;
                        this.$tweenDuration[axis] = ScrollPane.TWEEN_DEFAULT_DURATION;
                        this.$tweenChange[axis] = threshold2 - newValue;
                        this.$tweenStart[axis] = newValue;
                    }
                }
                else {
                    if (newValue > threshold1) {
                        newValue = threshold1;
                        this.$tweenChange[axis] = 0;
                    }
                    else if (newValue < threshold2) {
                        newValue = threshold2;
                        this.$tweenChange[axis] = 0;
                    }
                }
            }
            else
                newValue = this.$container[axis];
            return newValue;
        }
    }
    ScrollPane.$easeTypeFunc = (t, d) => { return (t = t / d - 1) * t * t + 1; };
    ScrollPane.$gestureFlag = 0;
    ScrollPane.sHelperPoint = new PIXI.Point();
    ScrollPane.sHelperRect = new PIXI.Rectangle();
    ScrollPane.sEndPos = new PIXI.Point();
    ScrollPane.sOldChange = new PIXI.Point();
    ScrollPane.TWEEN_DEFAULT_DURATION = .4;
    ScrollPane.TWEEN_MANUALLY_SET_DURATION = 0.5;
    ScrollPane.PULL_DIST_RATIO = 0.5;
    fgui.ScrollPane = ScrollPane;
})(fgui || (fgui = {}));

(function (fgui) {
    ;
    class Transition {
        constructor(owner) {
            this.autoPlayRepeat = 1;
            this.autoPlayDelay = 0;
            this.$ownerBaseX = 0;
            this.$ownerBaseY = 0;
            this.$totalTimes = 0;
            this.$totalTasks = 0;
            this.$playing = false;
            this.$options = 0;
            this.$maxTime = 0;
            this.$owner = owner;
            this.$items = [];
            this.$owner.on(fgui.DisplayObjectEvent.VISIBLE_CHANGED, this.$ownerVisibleChanged, this);
        }
        $ownerVisibleChanged(vis, owner) {
            if ((this.$options & Transition.OPTION_AUTO_STOP_DISABLED) == 0 && vis === false)
                this.stop((this.$options & Transition.OPTION_AUTO_STOP_AT_END) != 0 ? true : false, false);
        }
        get autoPlay() {
            return this.$autoPlay;
        }
        set autoPlay(value) {
            if (this.$autoPlay != value) {
                this.$autoPlay = value;
                if (this.$autoPlay) {
                    if (this.$owner.onStage)
                        this.play({
                            times: this.autoPlayRepeat,
                            delay: this.autoPlayDelay
                        });
                }
                else {
                    if (!this.$owner.onStage)
                        this.stop(false, true);
                }
            }
        }
        changeRepeat(value) {
            this.$totalTimes = value | 0;
        }
        play(...args) {
            if (args.length && typeof (args[0]) == "object") {
                let obj = args[0];
                this.$play(obj.onComplete, obj.onCompleteObj, obj.onCompleteParam, obj.times || 1, obj.delay || 0, false);
            }
            else
                this.$play(args[0], args[1], args[2], args[3] || 1, args[4] || 0, false);
        }
        playReverse(...args) {
            if (args.length && typeof (args[0]) == "object") {
                let obj = args[0];
                this.$play(obj.onComplete, obj.onCompleteObj, obj.onCompleteParam, obj.times || 1, obj.delay || 0, true);
            }
            else
                this.$play(args[0], args[1], args[2], args[3] || 1, args[4] || 0, true);
        }
        $play(onComplete, onCompleteObj, onCompleteParam, times, delay, reversed = false) {
            this.stop();
            if (times == 0)
                times = 1;
            else if (times == -1)
                times = Number.MAX_VALUE;
            this.$totalTimes = times;
            this.$reversed = reversed;
            this.internalPlay(delay);
            this.$playing = this.$totalTasks > 0;
            if (this.$playing) {
                this.$onComplete = onComplete;
                this.$onCompleteParam = onCompleteParam;
                this.$onCompleteObj = onCompleteObj;
                if ((this.$options & Transition.OPTION_IGNORE_DISPLAY_CONTROLLER) != 0) {
                    this.$items.forEach(item => {
                        if (item.target != null && item.target != this.$owner)
                            item.lockToken = item.target.lockGearDisplay();
                    }, this);
                }
            }
            else if (onComplete != null) {
                onCompleteParam && onCompleteParam.length ? onComplete.apply(onCompleteObj, onCompleteParam) :
                    onComplete.call(onCompleteObj, onCompleteParam);
            }
        }
        stop(setToComplete = true, processCallback = false) {
            if (this.$playing) {
                this.$playing = false;
                this.$totalTasks = 0;
                this.$totalTimes = 0;
                let func = this.$onComplete;
                let param = this.$onCompleteParam;
                let thisObj = this.$onCompleteObj;
                this.$onComplete = null;
                this.$onCompleteParam = null;
                this.$onCompleteObj = null;
                let cnt = this.$items.length;
                let item;
                if (this.$reversed) {
                    for (let i = cnt - 1; i >= 0; i--) {
                        item = this.$items[i];
                        if (item.target == null)
                            continue;
                        this.stopItem(item, setToComplete);
                    }
                }
                else {
                    for (let i = 0; i < cnt; i++) {
                        item = this.$items[i];
                        if (item.target == null)
                            continue;
                        this.stopItem(item, setToComplete);
                    }
                }
                if (processCallback && func != null)
                    param && param.length > 0 ? func.apply(thisObj, param) : func.call(thisObj, param);
            }
        }
        stopItem(item, setToComplete) {
            if (item.lockToken != 0) {
                item.target.releaseGearDisplay(item.lockToken);
                item.lockToken = 0;
            }
            if (item.type == 12 && item.filterCreated)
                item.target.filters = null;
            if (item.completed)
                return;
            this.disposeTween(item);
            if (item.type == 10) {
                let trans = item.target.getTransition(item.value.s);
                if (trans != null)
                    trans.stop(setToComplete, false);
            }
            else if (item.type == 11) {
                fgui.GTimer.inst.remove(item.$shake, item);
                item.target.$gearLocked = true;
                item.target.setXY(item.target.x - item.startValue.f1, item.target.y - item.startValue.f2);
                item.target.$gearLocked = false;
            }
            else {
                if (setToComplete) {
                    if (item.tween) {
                        if (!item.yoyo || item.repeat % 2 == 0)
                            this.applyValue(item, this.$reversed ? item.startValue : item.endValue);
                        else
                            this.applyValue(item, this.$reversed ? item.endValue : item.startValue);
                    }
                    else if (item.type != 9)
                        this.applyValue(item, item.value);
                }
            }
        }
        dispose() {
            fgui.GTimer.inst.remove(this.internalPlay, this);
            this.$owner.off(fgui.DisplayObjectEvent.VISIBLE_CHANGED, this.$ownerVisibleChanged, this);
            this.$playing = false;
            this.$items.forEach(item => {
                if (item.target == null || item.completed)
                    return;
                this.disposeTween(item);
                if (item.type == 10) {
                    let trans = item.target.getTransition(item.value.s);
                    if (trans != null)
                        trans.dispose();
                }
                else if (item.type == 11)
                    fgui.GTimer.inst.remove(item.$shake, item);
            }, this);
        }
        get playing() {
            return this.$playing;
        }
        setValue(label, ...args) {
            this.$items.forEach(item => {
                if (item.label == null && item.label2 == null)
                    return;
                let value;
                if (item.label == label) {
                    if (item.tween)
                        value = item.startValue;
                    else
                        value = item.value;
                }
                else if (item.label2 == label)
                    value = item.endValue;
                else
                    return;
                switch (item.type) {
                    case 0:
                    case 1:
                    case 3:
                    case 2:
                    case 13:
                        value.b1 = true;
                        value.b2 = true;
                        value.f1 = parseFloat(args[0]);
                        value.f2 = parseFloat(args[1]);
                        break;
                    case 4:
                        value.f1 = parseFloat(args[0]);
                        break;
                    case 5:
                        value.i = parseInt(args[0]);
                        break;
                    case 6:
                        value.c = parseFloat(args[0]);
                        break;
                    case 7:
                        value.i = parseInt(args[0]);
                        if (args.length > 1)
                            value.b = args[1];
                        break;
                    case 8:
                        value.b = args[0];
                        break;
                    case 9:
                        value.s = args[0];
                        if (args.length > 1)
                            value.f1 = parseFloat(args[1]);
                        break;
                    case 10:
                        value.s = args[0];
                        if (args.length > 1)
                            value.i = parseInt(args[1]);
                        break;
                    case 11:
                        value.f1 = parseFloat(args[0]);
                        if (args.length > 1)
                            value.f2 = parseFloat(args[1]);
                        break;
                    case 12:
                        value.f1 = parseFloat(args[0]);
                        value.f2 = parseFloat(args[1]);
                        value.f3 = parseFloat(args[2]);
                        value.f4 = parseFloat(args[3]);
                        break;
                }
            }, this);
        }
        setHook(label, callback, thisObj) {
            let cnt = this.$items.length;
            for (let i = 0; i < cnt; i++) {
                let item = this.$items[i];
                if (item.label == label) {
                    item.hook = callback;
                    item.hookObj = thisObj;
                    break;
                }
                else if (item.label2 == label) {
                    item.hook2 = callback;
                    item.hook2Obj = thisObj;
                    break;
                }
            }
        }
        clearHooks() {
            this.$items.forEach(item => {
                item.hook = null;
                item.hookObj = null;
                item.hook2 = null;
                item.hook2Obj = null;
            }, this);
        }
        setTarget(label, newTarget) {
            this.$items.forEach(item => {
                if (item.label == label)
                    item.targetId = newTarget.id;
            }, this);
        }
        setDuration(label, value) {
            this.$items.forEach(item => {
                if (item.tween && item.label == label)
                    item.duration = value;
            }, this);
        }
        updateFromRelations(targetId, dx, dy) {
            this.$items.forEach(item => {
                if (item.type == 0 && item.targetId == targetId) {
                    if (item.tween) {
                        item.startValue.f1 += dx;
                        item.startValue.f2 += dy;
                        item.endValue.f1 += dx;
                        item.endValue.f2 += dy;
                    }
                    else {
                        item.value.f1 += dx;
                        item.value.f2 += dy;
                    }
                }
            }, this);
        }
        internalPlay(delay = 0) {
            this.$ownerBaseX = this.$owner.x;
            this.$ownerBaseY = this.$owner.y;
            this.$totalTasks = 0;
            this.$items.forEach(item => {
                if (item.targetId)
                    item.target = this.$owner.getChildById(item.targetId);
                else
                    item.target = this.$owner;
                if (item.target == null)
                    return;
                let startTime;
                this.disposeTween(item);
                if (item.tween) {
                    if (this.$reversed)
                        startTime = delay + this.$maxTime - item.time - item.duration;
                    else
                        startTime = delay + item.time;
                    if (startTime > 0) {
                        this.$totalTasks++;
                        item.completed = false;
                        item.tweener = new TWEEN.Tween(item.value).duration(startTime * 1000).onComplete(() => {
                            this.$delayCall(item);
                        }).start();
                    }
                    else
                        this.startTween(item);
                }
                else {
                    if (this.$reversed)
                        startTime = delay + this.$maxTime - item.time;
                    else
                        startTime = delay + item.time;
                    if (startTime <= 0)
                        this.applyValue(item, item.value);
                    else {
                        this.$totalTasks++;
                        item.completed = false;
                        item.tweener = new TWEEN.Tween(item.value).duration(startTime * 1000).onComplete(() => this.$delayCall2(item)).start();
                    }
                }
            }, this);
        }
        prepareValue(item, toProps, reversed = false) {
            let startValue;
            let endValue;
            if (reversed) {
                startValue = item.endValue;
                endValue = item.startValue;
            }
            else {
                startValue = item.startValue;
                endValue = item.endValue;
            }
            switch (item.type) {
                case 0:
                case 1:
                    if (item.type == 0) {
                        if (item.target == this.$owner) {
                            if (!startValue.b1)
                                startValue.f1 = 0;
                            if (!startValue.b2)
                                startValue.f2 = 0;
                        }
                        else {
                            if (!startValue.b1)
                                startValue.f1 = item.target.x;
                            if (!startValue.b2)
                                startValue.f2 = item.target.y;
                        }
                    }
                    else {
                        if (!startValue.b1)
                            startValue.f1 = item.target.width;
                        if (!startValue.b2)
                            startValue.f2 = item.target.height;
                    }
                    item.value.f1 = startValue.f1;
                    item.value.f2 = startValue.f2;
                    if (!endValue.b1)
                        endValue.f1 = item.value.f1;
                    if (!endValue.b2)
                        endValue.f2 = item.value.f2;
                    item.value.b1 = startValue.b1 || endValue.b1;
                    item.value.b2 = startValue.b2 || endValue.b2;
                    toProps.f1 = endValue.f1;
                    toProps.f2 = endValue.f2;
                    break;
                case 2:
                case 13:
                    item.value.f1 = startValue.f1;
                    item.value.f2 = startValue.f2;
                    toProps.f1 = endValue.f1;
                    toProps.f2 = endValue.f2;
                    break;
                case 4:
                    item.value.f1 = startValue.f1;
                    toProps.f1 = endValue.f1;
                    break;
                case 5:
                    item.value.i = startValue.i;
                    toProps.i = endValue.i;
                    break;
                case 12:
                    item.value.f1 = startValue.f1;
                    item.value.f2 = startValue.f2;
                    item.value.f3 = startValue.f3;
                    item.value.f4 = startValue.f4;
                    toProps.f1 = endValue.f1;
                    toProps.f2 = endValue.f2;
                    toProps.f3 = endValue.f3;
                    toProps.f4 = endValue.f4;
                    break;
            }
        }
        startTween(item) {
            let toProps = new TransitionValue();
            this.prepareValue(item, toProps, this.$reversed);
            this.applyValue(item, item.value);
            let completeHandler;
            if (item.repeat != 0) {
                item.tweenTimes = 0;
                completeHandler = fgui.utils.Binder.create(this.$tweenRepeatComplete, this, item);
            }
            else
                completeHandler = fgui.utils.Binder.create(this.$tweenComplete, this, item);
            this.$totalTasks++;
            item.completed = false;
            this.prepareValue(item, toProps, this.$reversed);
            const onUpdate = fgui.utils.Binder.create(this.$tweenUpdate, this, item);
            item.tweener = new TWEEN.Tween(item.value)
                .onUpdate(() => {
                    onUpdate(null);
                }).to(toProps, item.duration * 1000)
                .onComplete(() => completeHandler(item.tweener))
                .easing(item.easeType)
                .start();
            if (item.hook != null)
                item.hook.call(item.hookObj);
        }
        $delayCall(item) {
            this.disposeTween(item);
            this.$totalTasks--;
            this.startTween(item);
        }
        $delayCall2(item) {
            this.disposeTween(item);
            this.$totalTasks--;
            item.completed = true;
            this.applyValue(item, item.value);
            if (item.hook != null)
                item.hook.call(item.hookObj);
            this.checkAllComplete();
        }
        $tweenUpdate(event, item) {
            this.applyValue(item, item.value);
        }
        $tweenComplete(event, item) {
            this.disposeTween(item);
            this.$totalTasks--;
            item.completed = true;
            if (item.hook2 != null)
                item.hook2.call(item.hook2Obj);
            this.checkAllComplete();
        }
        $tweenRepeatComplete(event, item) {
            item.tweenTimes++;
            if (item.repeat == -1 || item.tweenTimes < item.repeat + 1) {
                let toProps = new TransitionValue;
                let reversed;
                if (item.yoyo) {
                    if (this.$reversed)
                        reversed = item.tweenTimes % 2 == 0;
                    else
                        reversed = item.tweenTimes % 2 == 1;
                }
                else
                    reversed = this.$reversed;
                this.prepareValue(item, toProps, reversed);
                this.disposeTween(item);
                const onUpdate = fgui.utils.Binder.create(this.$tweenUpdate, this, item);
                item.tweener = new TWEEN.Tween(item.value).onUpdate(() => {
                    onUpdate(null);
                })
                    .to(toProps, item.duration * 1000)
                    .easing(item.easeType)
                    .delay(0)
                    .onComplete(() => { this.$tweenRepeatComplete(null, item); })
                    .start();
            }
            else
                this.$tweenComplete(null, item);
        }
        disposeTween(item) {
            if (!item)
                return;
            if (item.tweener) {
                item.tweener.stop();
                TWEEN.remove(item.tweener);
                item.tweener = null;
            }
        }
        $playTransComplete(item) {
            this.disposeTween(item);
            this.$totalTasks--;
            item.completed = true;
            this.checkAllComplete();
        }
        checkAllComplete() {
            if (this.$playing && this.$totalTasks == 0) {
                if (this.$totalTimes < 0) {
                    fgui.GTimer.inst.callLater(this.internalPlay, this, 0);
                }
                else {
                    this.$totalTimes--;
                    if (this.$totalTimes > 0)
                        fgui.GTimer.inst.callLater(this.internalPlay, this, 0);
                    else {
                        this.$playing = false;
                        this.$items.forEach(item => {
                            if (item.target != null) {
                                if (item.lockToken != 0) {
                                    item.target.releaseGearDisplay(item.lockToken);
                                    item.lockToken = 0;
                                }
                                if (item.filterCreated) {
                                    item.filterCreated = false;
                                    item.target.filters = null;
                                }
                                this.disposeTween(item);
                            }
                        });
                        if (this.$onComplete != null) {
                            let func = this.$onComplete;
                            let param = this.$onCompleteParam;
                            let thisObj = this.$onCompleteObj;
                            this.$onComplete = null;
                            this.$onCompleteParam = null;
                            this.$onCompleteObj = null;
                            param && param.length ? func.apply(thisObj, param) : func.call(thisObj, param);
                        }
                    }
                }
            }
        }
        applyValue(item, value) {
            item.target.$gearLocked = true;
            switch (item.type) {
                case 0:
                    if (item.target == this.$owner) {
                        let f1 = 0, f2 = 0;
                        if (!value.b1)
                            f1 = item.target.x;
                        else
                            f1 = value.f1 + this.$ownerBaseX;
                        if (!value.b2)
                            f2 = item.target.y;
                        else
                            f2 = value.f2 + this.$ownerBaseY;
                        item.target.setXY(f1, f2);
                    }
                    else {
                        if (!value.b1)
                            value.f1 = item.target.x;
                        if (!value.b2)
                            value.f2 = item.target.y;
                        item.target.setXY(value.f1, value.f2);
                    }
                    break;
                case 1:
                    if (!value.b1)
                        value.f1 = item.target.width;
                    if (!value.b2)
                        value.f2 = item.target.height;
                    item.target.setSize(value.f1, value.f2);
                    break;
                case 3:
                    item.target.setPivot(value.f1, value.f2);
                    break;
                case 4:
                    item.target.alpha = value.f1;
                    break;
                case 5:
                    item.target.rotation = value.i;
                    break;
                case 2:
                    item.target.setScale(value.f1, value.f2);
                    break;
                case 13:
                    item.target.setSkew(value.f1, value.f2);
                    break;
                case 6:
                    if (fgui.isColorGear(item.target))
                        item.target.color = value.c;
                    break;
                case 7:
                    if (fgui.isAnimationGear(item.target)) {
                        if (!value.b1)
                            value.i = item.target.frame;
                        item.target.frame = value.i;
                        item.target.playing = value.b;
                    }
                    break;
                case 8:
                    item.target.visible = value.b;
                    break;
                case 10:
                    let trans = item.target.getTransition(value.s);
                    if (trans != null) {
                        if (value.i == 0)
                            trans.stop(false, true);
                        else if (trans.playing)
                            trans.$totalTimes = value.i == -1 ? Number.MAX_VALUE : value.i;
                        else {
                            item.completed = false;
                            this.$totalTasks++;
                            if (this.$reversed)
                                trans.playReverse(this.$playTransComplete, this, item, item.value.i);
                            else
                                trans.play(this.$playTransComplete, this, item, item.value.i);
                        }
                    }
                    break;
                case 9:
                    break;
                case 11:
                    item.startValue.f1 = 0;
                    item.startValue.f2 = 0;
                    item.startValue.f3 = item.value.f2;
                    fgui.GTimer.inst.add(1, 0, item.$shake, item, [this]);
                    this.$totalTasks++;
                    item.completed = false;
                    break;
                case 12:
                    item.target.updateColorComponents(value.f1, value.f2, value.f3, value.f4);
                    break;
            }
            item.target.$gearLocked = false;
        }
        $shakeItem(item, elapsedMS) {
            let r = Math.ceil(item.value.f1 * item.startValue.f3 / item.value.f2);
            let rx = (Math.random() * 2 - 1) * r;
            let ry = (Math.random() * 2 - 1) * r;
            rx = rx > 0 ? Math.ceil(rx) : Math.floor(rx);
            ry = ry > 0 ? Math.ceil(ry) : Math.floor(ry);
            item.target.$gearLocked = true;
            item.target.setXY(item.target.x - item.startValue.f1 + rx, item.target.y - item.startValue.f2 + ry);
            item.target.$gearLocked = false;
            item.startValue.f1 = rx;
            item.startValue.f2 = ry;
            item.startValue.f3 -= elapsedMS / 1000;
            if (item.startValue.f3 <= 0) {
                item.target.$gearLocked = true;
                item.target.setXY(item.target.x - item.startValue.f1, item.target.y - item.startValue.f2);
                item.target.$gearLocked = false;
                item.completed = true;
                this.$totalTasks--;
                fgui.GTimer.inst.remove(item.$shake, item);
                this.checkAllComplete();
            }
        }
        setup(xml) {
            this.name = xml.attributes.name;
            let str = xml.attributes.options;
            if (str)
                this.$options = parseInt(str);
            this.$autoPlay = xml.attributes.autoPlay == "true";
            if (this.$autoPlay) {
                str = xml.attributes.autoPlayRepeat;
                if (str)
                    this.autoPlayRepeat = parseInt(str);
                str = xml.attributes.autoPlayDelay;
                if (str)
                    this.autoPlayDelay = parseFloat(str);
            }
            let col = xml.children;
            col.forEach(cxml => {
                if (cxml.nodeName != "item")
                    return;
                let item = new TransitionItem();
                this.$items.push(item);
                item.time = parseInt(cxml.attributes.time) / Transition.FRAME_RATE;
                item.targetId = cxml.attributes.target;
                str = cxml.attributes.type;
                switch (str) {
                    case "XY":
                        item.type = 0;
                        break;
                    case "Size":
                        item.type = 1;
                        break;
                    case "Scale":
                        item.type = 2;
                        break;
                    case "Pivot":
                        item.type = 3;
                        break;
                    case "Alpha":
                        item.type = 4;
                        break;
                    case "Rotation":
                        item.type = 5;
                        break;
                    case "Color":
                        item.type = 6;
                        break;
                    case "Animation":
                        item.type = 7;
                        break;
                    case "Visible":
                        item.type = 8;
                        break;
                    case "Sound":
                        item.type = 9;
                        break;
                    case "Transition":
                        item.type = 10;
                        break;
                    case "Shake":
                        item.type = 11;
                        break;
                    case "ColorFilter":
                        item.type = 12;
                        break;
                    case "Skew":
                        item.type = 13;
                        break;
                    default:
                        item.type = 14;
                        break;
                }
                item.tween = cxml.attributes.tween == "true";
                item.label = cxml.attributes.label;
                if (item.tween) {
                    item.duration = parseInt(cxml.attributes.duration) / Transition.FRAME_RATE;
                    if (item.time + item.duration > this.$maxTime)
                        this.$maxTime = item.time + item.duration;
                    str = cxml.attributes.ease;
                    if (str)
                        item.easeType = fgui.ParseEaseType(str);
                    str = cxml.attributes.repeat;
                    if (str)
                        item.repeat = parseInt(str);
                    item.yoyo = cxml.attributes.yoyo == "true";
                    item.label2 = cxml.attributes.label2;
                    let v = cxml.attributes.endValue;
                    if (v) {
                        this.decodeValue(item.type, cxml.attributes.startValue, item.startValue);
                        this.decodeValue(item.type, v, item.endValue);
                    }
                    else {
                        item.tween = false;
                        this.decodeValue(item.type, cxml.attributes.startValue, item.value);
                    }
                }
                else {
                    if (item.time > this.$maxTime)
                        this.$maxTime = item.time;
                    this.decodeValue(item.type, cxml.attributes.value, item.value);
                }
            }, this);
        }
        decodeValue(type, str, value) {
            let arr;
            switch (type) {
                case 0:
                case 1:
                case 3:
                case 13:
                    arr = str.split(",");
                    if (arr[0] == "-") {
                        value.b1 = false;
                    }
                    else {
                        value.f1 = parseFloat(arr[0]);
                        value.b1 = true;
                    }
                    if (arr[1] == "-") {
                        value.b2 = false;
                    }
                    else {
                        value.f2 = parseFloat(arr[1]);
                        value.b2 = true;
                    }
                    break;
                case 4:
                    value.f1 = parseFloat(str);
                    break;
                case 5:
                    value.i = parseInt(str);
                    break;
                case 2:
                    arr = str.split(",");
                    value.f1 = parseFloat(arr[0]);
                    value.f2 = parseFloat(arr[1]);
                    break;
                case 6:
                    value.c = fgui.utils.StringUtil.convertFromHtmlColor(str);
                    break;
                case 7:
                    arr = str.split(",");
                    if (arr[0] == "-") {
                        value.b1 = false;
                    }
                    else {
                        value.i = parseInt(arr[0]);
                        value.b1 = true;
                    }
                    value.b = arr[1] == "p";
                    break;
                case 8:
                    value.b = str == "true";
                    break;
                case 9:
                    arr = str.split(",");
                    value.s = arr[0];
                    if (arr.length > 1) {
                        let intv = parseInt(arr[1]);
                        if (intv == 0 || intv == 100)
                            value.f1 = 1;
                        else
                            value.f1 = intv / 100;
                    }
                    else
                        value.f1 = 1;
                    break;
                case 10:
                    arr = str.split(",");
                    value.s = arr[0];
                    if (arr.length > 1)
                        value.i = parseInt(arr[1]);
                    else
                        value.i = 1;
                    break;
                case 11:
                    arr = str.split(",");
                    value.f1 = parseFloat(arr[0]);
                    value.f2 = parseFloat(arr[1]);
                    break;
                case 12:
                    arr = str.split(",");
                    value.f1 = parseFloat(arr[0]);
                    value.f2 = parseFloat(arr[1]);
                    value.f3 = parseFloat(arr[2]);
                    value.f4 = parseFloat(arr[3]);
                    break;
            }
        }
    }
    Transition.OPTION_IGNORE_DISPLAY_CONTROLLER = 1;
    Transition.OPTION_AUTO_STOP_DISABLED = 1 >> 1;
    Transition.OPTION_AUTO_STOP_AT_END = 1 >> 2;
    Transition.FRAME_RATE = 24;
    fgui.Transition = Transition;
    class TransitionItem {
        constructor() {
            this.time = 0;
            this.type = 0;
            this.duration = 0;
            this.repeat = 0;
            this.yoyo = false;
            this.tween = false;
            this.tweenTimes = 0;
            this.completed = false;
            this.lockToken = 0;
            this.easeType = fgui.ParseEaseType("Quad.Out");
            this.value = new TransitionValue();
            this.startValue = new TransitionValue();
            this.endValue = new TransitionValue();
        }
        $shake(trans, elapsedMS) {
            trans.$shakeItem(this, elapsedMS);
        }
    }
    class TransitionValue {
        constructor() {
            this.f1 = 0;
            this.f2 = 0;
            this.f3 = 0;
            this.f4 = 0;
            this.i = 0;
            this.c = 0;
            this.b = false;
            this.b1 = true;
            this.b2 = true;
        }
    }
})(fgui || (fgui = {}));

(function (fgui) {
    class Window extends fgui.GComponent {
        constructor() {
            super();
            this.$requestingCmd = 0;
            this.focusable = true;
            this.$uiSources = [];
            this.bringToFrontOnClick = fgui.UIConfig.bringWindowToFrontOnClick;
            this.on("added", this.$onShown, this);
            this.on("removed", this.$onHidden, this);
            this.on(fgui.InteractiveEvents.Down, this.$mouseDown, this);
        }
        addUISource(source) {
            this.$uiSources.push(source);
        }
        set contentPane(val) {
            if (this.$contentPane != val) {
                if (this.$contentPane != null)
                    this.removeChild(this.$contentPane);
                this.$contentPane = val;
                if (this.$contentPane != null) {
                    this.addChild(this.$contentPane);
                    this.setSize(this.$contentPane.width, this.$contentPane.height);
                    this.$contentPane.addRelation(this, 24);
                    this.$frame = this.$contentPane.getChild("frame");
                    if (this.$frame != null) {
                        this.closeButton = this.$frame.getChild("closeButton");
                        this.dragArea = this.$frame.getChild("dragArea");
                        this.contentArea = this.$frame.getChild("contentArea");
                    }
                }
            }
        }
        get contentPane() {
            return this.$contentPane;
        }
        get frame() {
            return this.$frame;
        }
        get closeButton() {
            return this.$closeButton;
        }
        set closeButton(value) {
            if (this.$closeButton != null)
                this.$closeButton.removeClick(this.closeEventHandler, this);
            this.$closeButton = value;
            if (this.$closeButton != null)
                this.$closeButton.click(this.closeEventHandler, this);
        }
        get dragArea() {
            return this.$dragArea;
        }
        set dragArea(value) {
            if (this.$dragArea != value) {
                if (this.$dragArea != null) {
                    this.$dragArea.draggable = false;
                    this.$dragArea.off(fgui.DragEvent.START, this.$dragStart, this);
                }
                this.$dragArea = value;
                if (this.$dragArea != null) {
                    if (this.$dragArea instanceof fgui.GGraph)
                        this.$dragArea.drawRect(0, 0, 0, 0, 0);
                    this.$dragArea.draggable = true;
                    this.$dragArea.on(fgui.DragEvent.START, this.$dragStart, this);
                }
            }
        }
        get contentArea() {
            return this.$contentArea;
        }
        set contentArea(value) {
            this.$contentArea = value;
        }
        show() {
            fgui.GRoot.inst.showWindow(this);
        }
        showOn(root) {
            root.showWindow(this);
        }
        hide() {
            if (this.isShowing)
                this.doHideAnimation();
        }
        hideImmediately() {
            let r = (this.parent && this.parent instanceof fgui.GRoot) ? this.parent : fgui.GRoot.inst;
            r.hideWindowImmediately(this);
        }
        centerOn(r, autoUpdate = false) {
            this.setXY(Math.round((r.width - this.width) * .5), Math.round((r.height - this.height) * .5));
            if (autoUpdate) {
                this.addRelation(r, 3);
                this.addRelation(r, 10);
            }
        }
        toggleVisible() {
            if (this.isTop)
                this.hide();
            else
                this.show();
        }
        get isShowing() {
            return this.parent != null;
        }
        get isTop() {
            return this.parent != null && this.parent.getChildIndex(this) == this.parent.numChildren - 1;
        }
        get modal() {
            return this.$modal;
        }
        set modal(val) {
            this.$modal = val;
        }
        bringToFront() {
            this.root.bringToFront(this);
        }
        showModalWait(msg, cmd = 0) {
            if (cmd != 0)
                this.$requestingCmd = cmd;
            if (fgui.UIConfig.windowModalWaiting) {
                if (!this.$modalWaitPane)
                    this.$modalWaitPane = fgui.UIPackage.createObjectFromURL(fgui.UIConfig.windowModalWaiting);
                this.layoutModalWaitPane(msg);
                this.addChild(this.$modalWaitPane);
            }
        }
        layoutModalWaitPane(msg) {
            if (this.$contentArea != null) {
                let pt = this.$frame.localToGlobal();
                pt = this.globalToLocal(pt.x, pt.y, pt);
                this.$modalWaitPane.setXY(pt.x + this.$contentArea.x, pt.y + this.$contentArea.y);
                this.$modalWaitPane.setSize(this.$contentArea.width, this.$contentArea.height);
                if (msg && msg.length)
                    this.$modalWaitPane.text = msg;
            }
            else
                this.$modalWaitPane.setSize(this.width, this.height);
        }
        closeModalWait(cmd = 0) {
            if (cmd != 0) {
                if (this.$requestingCmd != cmd)
                    return false;
            }
            this.$requestingCmd = 0;
            if (this.$modalWaitPane && this.$modalWaitPane.parent != null)
                this.removeChild(this.$modalWaitPane);
            return true;
        }
        get modalWaiting() {
            return this.$modalWaitPane && this.$modalWaitPane.parent != null;
        }
        init() {
            if (this.$inited || this.$loading)
                return;
            if (this.$uiSources.length > 0) {
                this.$loading = false;
                this.$uiSources.forEach(o => {
                    if (!o.loaded) {
                        o.load(this.$uiLoadComplete, this);
                        this.$loading = true;
                    }
                }, this);
                if (!this.$loading)
                    this.$init();
            }
            else
                this.$init();
        }
        onInit() {
        }
        onShown() {
        }
        onHide() {
        }
        doShowAnimation() {
            this.onShown();
        }
        doHideAnimation() {
            this.hideImmediately();
        }
        $uiLoadComplete() {
            let cnt = this.$uiSources.length;
            for (let i = 0; i < cnt; i++) {
                if (!this.$uiSources[i].loaded)
                    return;
            }
            this.$loading = false;
            this.$init();
        }
        $init() {
            this.$inited = true;
            this.onInit();
            if (this.isShowing)
                this.doShowAnimation();
        }
        dispose() {
            this.off("added", this.$onShown, this);
            this.off("removed", this.$onHidden, this);
            this.off(fgui.InteractiveEvents.Down, this.$mouseDown, this);
            if (this.$dragArea)
                this.$dragArea.off(fgui.DragEvent.START, this.$dragStart, this);
            if (this.parent != null)
                this.hideImmediately();
            if (this.$modalWaitPane)
                this.$modalWaitPane.dispose();
            if (this.$contentPane)
                this.$contentPane.dispose();
            super.dispose();
        }
        closeEventHandler(evt) {
            this.hide();
        }
        $onShown(target) {
            if (!this.$inited)
                this.init();
            else
                this.doShowAnimation();
        }
        $onHidden(target) {
            this.closeModalWait();
            this.onHide();
        }
        $mouseDown(evt) {
            if (this.isShowing && this.bringToFrontOnClick)
                this.bringToFront();
        }
        $dragStart(evt) {
            fgui.GObject.castFromNativeObject(evt.currentTarget).stopDrag();
            this.startDrag(evt.data.pointerId);
        }
    }
    fgui.Window = Window;
})(fgui || (fgui = {}));

var PIXI;
(function (PIXI) {
    var extras;
    (function (extras) {
        class NineSlicePlane extends PIXI.NineSlicePlane {
            constructor() {
                super(...arguments);
                this.$flipX = false;
                this.$flipY = false;
            }
            updateHorizontalVertices() {
                const vertices = this.vertices;
                const h = this.topHeight + this.bottomHeight;
                const scale = this._height > h ? 1.0 : this._height / h;
                vertices[9] = vertices[11] = vertices[13] = vertices[15] = (this.$flipY ? this.bottomHeight : this.topHeight) * scale;
                vertices[17] = vertices[19] = vertices[21] = vertices[23] = this._height - (this.$flipY ? this.topHeight : this.bottomHeight) * scale;
                vertices[25] = vertices[27] = vertices[29] = vertices[31] = this._height;
            }
            ;
            updateVerticalVertices() {
                const vertices = this.vertices;
                const w = this.leftWidth + this.rightWidth;
                const scale = this._width > w ? 1.0 : this._width / w;
                vertices[2] = vertices[10] = vertices[18] = vertices[26] = (this.$flipX ? this.rightWidth : this.leftWidth) * scale;
                vertices[4] = vertices[12] = vertices[20] = vertices[28] = this._width - (this.$flipX ? this.leftWidth : this.rightWidth) * scale;
                vertices[6] = vertices[14] = vertices[22] = vertices[30] = this._width;
            }
            ;
            _refresh() {
                if (isNaN(this.leftWidth) || isNaN(this.topHeight) || isNaN(this.rightWidth) || isNaN(this.bottomHeight))
                    return;
                super._refresh();
                let uvs = this.geometry["buffers"][1].data;
                if (this.$flipX) {
                    let x0 = uvs[0];
                    let x1 = uvs[2];
                    uvs[0] = uvs[6];
                    uvs[2] = uvs[4];
                    uvs[6] = x0;
                    uvs[4] = x1;
                    x0 = uvs[8];
                    x1 = uvs[10];
                    uvs[8] = uvs[14];
                    uvs[10] = uvs[12];
                    uvs[14] = x0;
                    uvs[12] = x1;
                    x0 = uvs[16];
                    x1 = uvs[18];
                    uvs[16] = uvs[22];
                    uvs[18] = uvs[20];
                    uvs[22] = x0;
                    uvs[20] = x1;
                    x0 = uvs[24];
                    x1 = uvs[26];
                    uvs[24] = uvs[30];
                    uvs[26] = uvs[28];
                    uvs[30] = x0;
                    uvs[28] = x1;
                }
                if (this.$flipY) {
                    let y0 = uvs[1];
                    let y1 = uvs[9];
                    uvs[1] = uvs[25];
                    uvs[9] = uvs[17];
                    uvs[25] = y0;
                    uvs[17] = y1;
                    y0 = uvs[3];
                    y1 = uvs[11];
                    uvs[3] = uvs[27];
                    uvs[11] = uvs[19];
                    uvs[27] = y0;
                    uvs[19] = y1;
                    y0 = uvs[5];
                    y1 = uvs[13];
                    uvs[5] = uvs[29];
                    uvs[13] = uvs[21];
                    uvs[29] = y0;
                    uvs[21] = y1;
                    y0 = uvs[7];
                    y1 = uvs[15];
                    uvs[7] = uvs[31];
                    uvs[15] = uvs[23];
                    uvs[31] = y0;
                    uvs[23] = y1;
                }
            }
            get flipX() {
                return this.$flipX;
            }
            get flipY() {
                return this.$flipY;
            }
            set flipX(v) {
                if (this.$flipX != v) {
                    this.$flipX = v;
                    this._refresh();
                }
            }
            set flipY(v) {
                if (this.$flipY != v) {
                    this.$flipY = v;
                    this._refresh();
                }
            }
        }
        extras.NineSlicePlane = NineSlicePlane;
    })(extras = PIXI.extras || (PIXI.extras = {}));
})(PIXI || (PIXI = {}));
var PIXI;
(function (PIXI) {
    var extras;
    (function (extras) {
        class Sprite extends PIXI.Sprite {
            constructor(frameId, tex) {
                super(tex);
                this.$flipX = false;
                this.$flipY = false;
                this.$frameId = frameId;
            }
            get flipX() {
                return this.$flipX;
            }
            get flipY() {
                return this.$flipY;
            }
            set flipX(v) {
                if (this.$flipX != v) {
                    this.$flipX = v;
                    fgui.GTimer.inst.callLater(this.updateUvs, this);
                }
            }
            set flipY(v) {
                if (this.$flipY != v) {
                    this.$flipY = v;
                    fgui.GTimer.inst.callLater(this.updateUvs, this);
                }
            }
            combineCacheId(flipx, flipy) {
                if (!this.$frameId || this.$frameId == "")
                    return null;
                return `${this.$frameId}${flipx ? '_fx' : ''}${flipy ? '_fy' : ''}`;
            }
            getTextureFromCache(flipx, flipy) {
                const cachedid = this.combineCacheId(flipx, flipy);
                if (cachedid == null)
                    return this.texture;
                let ret = Sprite.$cachedTexturePool[cachedid];
                if (!ret) {
                    ret = {
                        refCount: 1,
                        texture: this.createFlippedTexture(this.texture, flipx, flipy)
                    };
                    Sprite.$cachedTexturePool[cachedid] = ret;
                }
                else
                    ret.refCount++;
                return ret.texture;
            }
            tryRemoveTextureCache(flipx, flipy) {
                const cachedid = this.combineCacheId(flipx, flipy);
                if (!cachedid)
                    return false;
                let ret = Sprite.$cachedTexturePool[cachedid];
                if (ret) {
                    ret.refCount--;
                    if (ret.refCount <= 0) {
                        ret.texture.destroy();
                        delete Sprite.$cachedTexturePool[cachedid];
                    }
                    return true;
                }
                return false;
            }
            createFlippedTexture(origTexture, flipx, flipy) {
                let newTex = origTexture.clone();
                let uvs = newTex["_uvs"];
                if (this.$flipX) {
                    const tx0 = uvs.x0;
                    const tx3 = uvs.x3;
                    uvs.x0 = uvs.x1;
                    uvs.x1 = tx0;
                    uvs.x3 = uvs.x2;
                    uvs.x2 = tx3;
                }
                if (this.$flipY) {
                    const ty0 = uvs.y0;
                    const ty1 = uvs.y1;
                    uvs.y0 = uvs.y3;
                    uvs.y3 = ty0;
                    uvs.y1 = uvs.y2;
                    uvs.y2 = ty1;
                }
                uvs.uvsFloat32[0] = (uvs.y0 * 65535 & 0xFFFF) << 16 | uvs.x0 * 65535 & 0xFFFF;
                uvs.uvsFloat32[1] = (uvs.y1 * 65535 & 0xFFFF) << 16 | uvs.x1 * 65535 & 0xFFFF;
                uvs.uvsFloat32[2] = (uvs.y2 * 65535 & 0xFFFF) << 16 | uvs.x2 * 65535 & 0xFFFF;
                uvs.uvsFloat32[3] = (uvs.y3 * 65535 & 0xFFFF) << 16 | uvs.x3 * 65535 & 0xFFFF;
                return newTex;
            }
            updateUvs() {
                if (!this.texture)
                    return;
                if (this.$flipX || this.$flipY) {
                    let cachedTex = this.getTextureFromCache(this.$flipX, this.$flipY);
                    if (this.texture != cachedTex)
                        this.texture = cachedTex;
                }
            }
            destroy(options) {
                this.tryRemoveTextureCache(this.$flipX, this.$flipY);
                super.destroy(options);
            }
        }
        Sprite.$cachedTexturePool = {};
        extras.Sprite = Sprite;
    })(extras = PIXI.extras || (PIXI.extras = {}));
})(PIXI || (PIXI = {}));
var PIXI;
(function (PIXI) {
    var extras;
    (function (extras) {
        class TilingSprite extends PIXI.TilingSprite {
            constructor(frameId, tex) {
                super(tex);
                this.$flipX = false;
                this.$flipY = false;
                this.$frameId = frameId;
            }
            get flipX() {
                return this.$flipX;
            }
            get flipY() {
                return this.$flipY;
            }
            set flipX(v) {
                if (this.$flipX != v) {
                    this.$flipX = v;
                    fgui.GTimer.inst.callLater(this.updateUvs, this);
                }
            }
            set flipY(v) {
                if (this.$flipY != v) {
                    this.$flipY = v;
                    fgui.GTimer.inst.callLater(this.updateUvs, this);
                }
            }
            combineCacheId(flipx, flipy) {
                if (!this.$frameId || this.$frameId == "")
                    return null;
                return `${this.$frameId}${flipx ? '_fx' : ''}${flipy ? '_fy' : ''}`;
            }
            getTextureFromCache(flipx, flipy) {
                const cachedid = this.combineCacheId(flipx, flipy);
                if (cachedid == null)
                    return this.texture;
                let ret = TilingSprite.$cachedTexturePool[cachedid];
                if (!ret) {
                    ret = {
                        refCount: 1,
                        texture: this.createFlippedTexture(this.texture, flipx, flipy)
                    };
                    TilingSprite.$cachedTexturePool[cachedid] = ret;
                }
                else
                    ret.refCount++;
                return ret.texture;
            }
            tryRemoveTextureCache(flipx, flipy) {
                const cachedid = this.combineCacheId(flipx, flipy);
                if (!cachedid)
                    return false;
                let ret = TilingSprite.$cachedTexturePool[cachedid];
                if (ret) {
                    ret.refCount--;
                    if (ret.refCount <= 0) {
                        ret.texture.destroy();
                        delete TilingSprite.$cachedTexturePool[cachedid];
                    }
                    return true;
                }
                return false;
            }
            createFlippedTexture(origTexture, flipx, flipy) {
                let newTex = origTexture.clone();
                let uvs = newTex["_uvs"];
                if (this.$flipX) {
                    const tx0 = uvs.x0;
                    const tx3 = uvs.x3;
                    uvs.x0 = uvs.x1;
                    uvs.x1 = tx0;
                    uvs.x3 = uvs.x2;
                    uvs.x2 = tx3;
                }
                if (this.$flipY) {
                    const ty0 = uvs.y0;
                    const ty1 = uvs.y1;
                    uvs.y0 = uvs.y3;
                    uvs.y3 = ty0;
                    uvs.y1 = uvs.y2;
                    uvs.y2 = ty1;
                }
                uvs.uvsFloat32[0] = (uvs.y0 * 65535 & 0xFFFF) << 16 | uvs.x0 * 65535 & 0xFFFF;
                uvs.uvsFloat32[1] = (uvs.y1 * 65535 & 0xFFFF) << 16 | uvs.x1 * 65535 & 0xFFFF;
                uvs.uvsFloat32[2] = (uvs.y2 * 65535 & 0xFFFF) << 16 | uvs.x2 * 65535 & 0xFFFF;
                uvs.uvsFloat32[3] = (uvs.y3 * 65535 & 0xFFFF) << 16 | uvs.x3 * 65535 & 0xFFFF;
                return newTex;
            }
            updateUvs() {
                if (!this.texture)
                    return;
                if (this.$flipX || this.$flipY) {
                    let cachedTex = this.getTextureFromCache(this.$flipX, this.$flipY);
                    if (this.texture != cachedTex)
                        this.texture = cachedTex;
                }
            }
            destroy(options) {
                this.tryRemoveTextureCache(this.$flipX, this.$flipY);
                super.destroy(options);
            }
        }
        TilingSprite.$cachedTexturePool = {};
        extras.TilingSprite = TilingSprite;
    })(extras = PIXI.extras || (PIXI.extras = {}));
})(PIXI || (PIXI = {}));

(function (fgui) {
    class UIConfig {
    }
    UIConfig.defaultFont = "Arial";
    UIConfig.modalLayerColor = 0x333333;
    UIConfig.modalLayerAlpha = 0.2;
    UIConfig.defaultScrollSpeed = 25;
    UIConfig.defaultScrollBarDisplay = 1;
    UIConfig.defaultScrollTouchEffect = true;
    UIConfig.defaultScrollBounceEffect = true;
    UIConfig.defaultScrollDecelerationRate = .967;
    UIConfig.defaultComboBoxVisibleItemCount = 10;
    UIConfig.touchScrollSensitivity = 20;
    UIConfig.touchDragSensitivity = 10;
    UIConfig.bringWindowToFrontOnClick = true;
    fgui.UIConfig = UIConfig;
})(fgui || (fgui = {}));

(function (fgui) {
    class Action {
        static create(type) {
            switch (type) {
                case "play_transition":
                    return new fgui.PlayTransitionAction();
                case "change_page":
                    return new fgui.ChangePageAction();
            }
            return null;
        }
        execute(controller, prevPage, curPage) {
            if ((!this.fromPage || this.fromPage.length == 0 || this.fromPage.indexOf(prevPage) != -1)
                && (!this.toPage || this.toPage.length == 0 || this.toPage.indexOf(curPage) != -1))
                this.enter(controller);
            else
                this.leave(controller);
        }
        enter(controller) {
        }
        leave(controller) {
        }
        setup(xml) {
            let str;
            str = xml.attributes.fromPage;
            if (str)
                this.fromPage = str.split(",");
            str = xml.attributes.toPage;
            if (str)
                this.toPage = str.split(",");
        }
    }
    fgui.Action = Action;
})(fgui || (fgui = {}));

(function (fgui) {
    class ChangePageAction extends fgui.Action {
        enter(controller) {
            if (!this.controllerName)
                return;
            let gcom;
            if (this.objectId)
                gcom = controller.parent.getChildById(this.objectId);
            else
                gcom = controller.parent;
            if (gcom) {
                let cc = gcom.getController(this.controllerName);
                if (cc && cc != controller && !cc.$updating)
                    cc.selectedPageId = this.targetPage;
            }
        }
        setup(xml) {
            super.setup(xml);
            this.objectId = xml.attributes.objectId;
            this.controllerName = xml.attributes.controller;
            this.targetPage = xml.attributes.targetPage;
        }
    }
    fgui.ChangePageAction = ChangePageAction;
})(fgui || (fgui = {}));

(function (fgui) {
    class StateChangeEvent {
    }
    StateChangeEvent.CHANGED = "__stateChanged";
    fgui.StateChangeEvent = StateChangeEvent;
})(fgui || (fgui = {}));

(function (fgui) {
    class Controller extends PIXI.utils.EventEmitter {
        constructor() {
            super();
            this.$selectedIndex = 0;
            this.$previousIndex = 0;
            this.$pageIds = [];
            this.$pageNames = [];
            this.$selectedIndex = -1;
            this.$previousIndex = -1;
        }
        get name() {
            return this.$name;
        }
        set name(value) {
            this.$name = value;
        }
        get parent() {
            return this.$parent;
        }
        get selectedIndex() {
            return this.$selectedIndex;
        }
        set selectedIndex(value) {
            if (this.$selectedIndex != value) {
                if (value > this.$pageIds.length - 1) {
                    console.error(this, `index out of range: ${value}`);
                    value = this.$pageIds.length - 1
                }

                this.$updating = true;
                this.$previousIndex = this.$selectedIndex;
                this.$selectedIndex = value;
                this.$parent.applyController(this);
                this.emit(fgui.StateChangeEvent.CHANGED, this);
                this.$updating = false;
            }
        }
        setSelectedIndex(value = 0) {
            if (this.$selectedIndex != value) {
                if (value > this.$pageIds.length - 1)
                    throw new Error(`index out of range: ${value}`);
                this.$updating = true;
                this.$previousIndex = this.$selectedIndex;
                this.$selectedIndex = value;
                this.$parent.applyController(this);
                this.$updating = false;
            }
        }
        get previsousIndex() {
            return this.$previousIndex;
        }
        get selectedPage() {
            if (this.$selectedIndex == -1)
                return null;
            else
                return this.$pageNames[this.$selectedIndex];
        }
        set selectedPage(val) {
            this.selectedIndex = Math.max(0, this.$pageNames.indexOf(val));
        }
        setSelectedPage(value) {
            this.setSelectedIndex(Math.max(0, this.$pageNames.indexOf(value)));
        }
        get previousPage() {
            if (this.$previousIndex == -1)
                return null;
            else
                return this.$pageNames[this.$previousIndex];
        }
        get pageCount() {
            return this.$pageIds.length;
        }
        getPageName(index = 0) {
            return this.$pageNames[index];
        }
        addPage(name = "") {
            this.addPageAt(name, this.$pageIds.length);
        }
        addPageAt(name, index = 0) {
            let nid = `${Controller.$nextPageId++}`;
            if (index == this.$pageIds.length) {
                this.$pageIds.push(nid);
                this.$pageNames.push(name);
            }
            else {
                this.$pageIds.splice(index, 0, nid);
                this.$pageNames.splice(index, 0, name);
            }
        }
        removePage(name) {
            let i = this.$pageNames.indexOf(name);
            if (i != -1) {
                this.$pageIds.splice(i, 1);
                this.$pageNames.splice(i, 1);
                if (this.$selectedIndex >= this.$pageIds.length)
                    this.selectedIndex = this.$selectedIndex - 1;
                else
                    this.$parent.applyController(this);
            }
        }
        removePageAt(index = 0) {
            this.$pageIds.splice(index, 1);
            this.$pageNames.splice(index, 1);
            if (this.$selectedIndex >= this.$pageIds.length)
                this.selectedIndex = this.$selectedIndex - 1;
            else
                this.$parent.applyController(this);
        }
        clearPages() {
            this.$pageIds.length = 0;
            this.$pageNames.length = 0;
            if (this.$selectedIndex != -1)
                this.selectedIndex = -1;
            else
                this.$parent.applyController(this);
        }
        hasPage(aName) {
            return this.$pageNames.indexOf(aName) >= 0;
        }
        getPageIndexById(aId) {
            return this.$pageIds.indexOf(aId);
        }
        getPageIdByName(aName) {
            let i = this.$pageNames.indexOf(aName);
            if (i != -1)
                return this.$pageIds[i];
            else
                return null;
        }
        getPageNameById(aId) {
            let i = this.$pageIds.indexOf(aId);
            if (i != -1)
                return this.$pageNames[i];
            else
                return null;
        }
        getPageId(index = 0) {
            return this.$pageIds[index];
        }
        get selectedPageId() {
            if (this.$selectedIndex == -1)
                return null;
            else
                return this.$pageIds[this.$selectedIndex];
        }
        set selectedPageId(val) {
            this.selectedIndex = this.$pageIds.indexOf(val);
        }
        set oppositePageId(val) {
            let i = this.$pageIds.indexOf(val);
            if (i > 0)
                this.selectedIndex = 0;
            else if (this.$pageIds.length > 1)
                this.selectedIndex = 1;
        }
        get previousPageId() {
            if (this.$previousIndex == -1)
                return null;
            else
                return this.$pageIds[this.$previousIndex];
        }
        executeActions() {
            if (this.$actions && this.$actions.length > 0) {
                this.$actions.forEach(a => {
                    a.execute(this, this.previousPageId, this.selectedPageId);
                });
            }
        }
        setup(xml) {
            this.$name = xml.attributes.name;
            this.$autoRadioGroupDepth = xml.attributes.autoRadioGroupDepth == "true";
            let str = xml.attributes.pages;
            if (str) {
                let arr = str.split(",");
                let cnt = arr.length;
                for (let i = 0; i < cnt; i += 2) {
                    this.$pageIds.push(arr[i]);
                    this.$pageNames.push(arr[i + 1]);
                }
            }
            let col = xml.children;
            if (col.length > 0) {
                this.$actions = this.$actions || [];
                col.forEach(cxml => {
                    let action = fgui.Action.create(cxml.attributes.type);
                    action.setup(cxml);
                    this.$actions.push(action);
                });
            }
            str = xml.attributes.transitions;
            if (str) {
                this.$actions = this.$actions || [];
                let k, e;
                str.split(",").forEach(str => {
                    if (str && str.length) {
                        let pt = new fgui.PlayTransitionAction();
                        k = str.indexOf("=");
                        pt.transitionName = str.substr(k + 1);
                        str = str.substring(0, k);
                        k = str.indexOf("-");
                        e = parseInt(str.substring(k + 1));
                        if (e < this.$pageIds.length)
                            pt.toPage = [this.$pageIds[e]];
                        str = str.substring(0, k);
                        if (str != "*") {
                            e = parseInt(str);
                            if (e < this.$pageIds.length)
                                pt.fromPage = [this.$pageIds[e]];
                        }
                        pt.stopOnExit = true;
                        this.$actions.push(pt);
                    }
                });
            }
            if (this.$parent && this.$pageIds.length > 0)
                this.$selectedIndex = 0;
            else
                this.$selectedIndex = -1;
        }
    }
    Controller.$nextPageId = 0;
    fgui.Controller = Controller;
})(fgui || (fgui = {}));

(function (fgui) {
    class PageOption {
        set controller(val) {
            this.$controller = val;
        }
        set name(pageName) {
            this.$id = this.$controller.getPageIdByName(pageName);
        }
        get name() {
            if (this.$id)
                return this.$controller.getPageNameById(this.$id);
            else
                return null;
        }
        set index(pageIndex) {
            this.$id = this.$controller.getPageId(pageIndex);
        }
        get index() {
            if (this.$id)
                return this.$controller.getPageIndexById(this.$id);
            else
                return -1;
        }
        clear() {
            this.$id = null;
        }
        set id(id) {
            this.$id = id;
        }
        get id() {
            return this.$id;
        }
    }
    fgui.PageOption = PageOption;
})(fgui || (fgui = {}));

(function (fgui) {
    var utils;
    (function (utils) {
        class XmlNode {
            constructor(ele) {
                this.nodeName = ele.nodeName;
                this.context = ele;
                this.type = ele.nodeType;
                this.text = (this.type == Node.COMMENT_NODE || this.type == Node.TEXT_NODE || this.type == Node.ELEMENT_NODE) ? this.context.textContent : null;
            }
            get children() {
                if (!this.$children)
                    this.$children = this.__parseChildNodes(this);
                return this.$children;
            }
            get attributes() {
                if (!this.$attributes)
                    this.$attributes = this.__parseNodeAttributes(this);
                return this.$attributes;
            }
            getChildNodes(matchName = null) {
                let nodes = this.children;
                let ret = [];
                if (!nodes || nodes.length <= 0)
                    return ret;
                let len = nodes.length;
                for (let i = 0; i < len; i++) {
                    let n = nodes[i];
                    if (n.type == Node.TEXT_NODE) {
                        continue;
                    }
                    if (!matchName || (matchName && matchName.length > 0 && n.nodeName.toLowerCase() == matchName.toLowerCase()))
                        ret.push(n);
                }
                return ret;
            }
            __parseChildNodes(xml, matchName = null) {
                let nodes = xml.context.childNodes;
                let ret = [];
                if (!nodes || nodes.length <= 0)
                    return ret;
                let len = nodes.length;
                for (let i = 0; i < len; i++) {
                    let n = nodes.item(i);
                    if (n.nodeType == Node.TEXT_NODE) {
                        continue;
                    }
                    if (!matchName || (matchName && matchName.length > 0 && n.nodeName.toLowerCase() == matchName.toLowerCase()))
                        ret.push(new XmlNode(n));
                }
                return ret;
            }
            __parseNodeAttributes(xml) {
                let asList = xml.context.attributes;
                let ret = {};
                if (!asList || asList.length <= 0)
                    return ret;
                let len = asList.length;
                for (let i = 0; i < len; i++) {
                    let a = asList.item(i);
                    ret[a.nodeName] = a.nodeValue;
                }
                return ret;
            }
        }
        utils.XmlNode = XmlNode;
        class XmlParser {
            static tryParse(xmlstring, mimeType = "text/xml") {
                let doc = XmlParser.$parser.parseFromString(xmlstring, mimeType);
                if (doc && doc.childNodes && doc.childNodes.length >= 1)
                    return new XmlNode(doc.firstChild);
                return null;
            }
            static getXmlRoot(xml) {
                if (!xml || !xml.context)
                    throw new Error("Invalid xml node");
                let p = xml.context;
                while (p.parentNode != null)
                    p = p.parentNode;
                return p == xml.context ? xml : new XmlNode(p);
            }
        }
        XmlParser.$parser = new DOMParser();
        utils.XmlParser = XmlParser;
    })(utils = fgui.utils || (fgui.utils = {}));
})(fgui || (fgui = {}));

(function (fgui) {
    class PlayTransitionAction extends fgui.Action {
        constructor() {
            super(...arguments);
            this.repeat = 1;
            this.delay = 0;
            this.stopOnExit = false;
        }
        enter(controller) {
            let trans = controller.parent.getTransition(this.transitionName);
            if (trans) {
                if (this.$currentTransition && this.$currentTransition.playing)
                    trans.changeRepeat(this.repeat);
                else
                    trans.play({
                        times: this.repeat,
                        delay: this.delay
                    });
                this.$currentTransition = trans;
            }
        }
        leave(controller) {
            if (this.stopOnExit && this.$currentTransition) {
                this.$currentTransition.stop();
                this.$currentTransition = null;
            }
        }
        setup(xml) {
            super.setup(xml);
            this.transitionName = xml.attributes.transition;
            let str;
            str = xml.attributes.repeat;
            if (str)
                this.repeat = parseInt(str);
            str = xml.attributes.delay;
            if (str)
                this.delay = parseFloat(str);
            this.stopOnExit = xml.attributes.stopOnExit == "true";
        }
    }
    fgui.PlayTransitionAction = PlayTransitionAction;
})(fgui || (fgui = {}));

(function (fgui) {
    class BMGlyph {
        constructor() {
            this.x = 0;
            this.y = 0;
            this.offsetX = 0;
            this.offsetY = 0;
            this.width = 0;
            this.height = 0;
            this.advance = 0;
            this.lineHeight = 0;
            this.channel = 0;
        }
    }
    fgui.BMGlyph = BMGlyph;
})(fgui || (fgui = {}));

(function (fgui) {
    class BitmapFont {
        constructor() {
            this.size = 0;
            this.glyphs = {};
        }
    }
    fgui.BitmapFont = BitmapFont;
})(fgui || (fgui = {}));

(function (fgui) {
    class FillSprite extends PIXI.Sprite {
        constructor(texture) {
            super(texture);
            this._fillDir = 0;
            this._flip = 0;
            this._percent = 0;
        }
        get flip() {
            return this._flip;
        }
        set flip(v) {
            if (v != this._flip) {
                this._flip = v;
            }
        }
        get fillAmount() {
            return typeof this._fillAmount == "number" ? this._fillAmount : 100;
        }
        set fillAmount(n) {
            if (n != this._fillAmount) {
                this._fillAmount = n;
            }
        }
        get fillBegin() {
            return this._fillBegin;
        }
        set fillBegin(n) {
            if (n != this._fillBegin) {
                this._fillBegin = n;
            }
        }
        get fillMode() {
            return this._fillMode;
        }
        set fillMode(n) {
            if (n != this._fillMode) {
                this._fillMode = n;
                this.checkAndFixFillBegin();
            }
        }
        get fillDirection() {
            return this._fillDir;
        }
        set fillDirection(n) {
            if (n != this._fillDir) {
                this._fillDir = n;
                this.checkAndFixFillBegin();
            }
        }
        checkAndFixFillBegin() {
            switch (this._fillMode) {
                case 1:
                    if (this._fillBegin != 0 && this._fillBegin != 1)
                        this._fillBegin = 0;
                    break;
                case 2:
                    if (this._fillBegin != 2 && this._fillBegin != 3)
                        this._fillBegin = 2;
                    break;
                case 3:
                    if (this._fillBegin != 4 && this._fillBegin != 6
                        && this._fillBegin != 5 && this._fillBegin != 7)
                        this._fillBegin = 4;
                    break;
                case 4:
                case 5:
                    if (this._fillBegin != 0 && this._fillBegin != 1
                        && this._fillBegin != 2 && this._fillBegin != 3)
                        this._fillBegin = 2;
                    break;
            }
        }
        set amount(v) {
            this._percent = v;
        }
        get amount() {
            return this._percent;
        }
    }
    fgui.FillSprite = FillSprite;
})(fgui || (fgui = {}));

(function (fgui) {
    class Frame {
        constructor() {
            this.addDelay = 0;
        }
    }
    fgui.Frame = Frame;
})(fgui || (fgui = {}));

(function (fgui) {
    var utils;
    (function (utils) {
        class StringUtil {
            static encodeHTML(str) {
                if (!str)
                    return "";
                else
                    return str.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;").replace("'", "&apos;");
            }
            static getFileName(source) {
                let i = source.lastIndexOf("/");
                if (i != -1)
                    source = source.substr(i + 1);
                i = source.lastIndexOf("\\");
                if (i != -1)
                    source = source.substr(i + 1);
                i = source.lastIndexOf(".");
                if (i != -1)
                    return source.substring(0, i);
                else
                    return source;
            }
            static startsWith(source, str, ignoreCase = false) {
                if (!source)
                    return false;
                else if (source.length < str.length)
                    return false;
                else {
                    source = source.substring(0, str.length);
                    if (!ignoreCase)
                        return source == str;
                    else
                        return source.toLowerCase() == str.toLowerCase();
                }
            }
            static endsWith(source, str, ignoreCase = false) {
                if (!source)
                    return false;
                else if (source.length < str.length)
                    return false;
                else {
                    source = source.substring(source.length - str.length);
                    if (!ignoreCase)
                        return source == str;
                    else
                        return source.toLowerCase() == str.toLowerCase();
                }
            }
            static trim(targetString) {
                return StringUtil.trimLeft(StringUtil.trimRight(targetString));
            }
            static trimLeft(targetString) {
                let tempChar = "";
                let i;
                for (i = 0; i < targetString.length; i++) {
                    tempChar = targetString.charAt(i);
                    if (tempChar != " " && tempChar != "\n" && tempChar != "\r")
                        break;
                }
                return targetString.substr(i);
            }
            static trimRight(targetString) {
                let tempChar = "";
                let i;
                for (i = targetString.length - 1; i >= 0; i--) {
                    tempChar = targetString.charAt(i);
                    if (tempChar != " " && tempChar != "\n" && tempChar != "\r")
                        break;
                }
                return targetString.substring(0, i + 1);
            }
            static convertToHtmlColor(argb, hasAlpha = false) {
                let alpha;
                if (hasAlpha)
                    alpha = (argb >> 24 & 0xFF).toString(16);
                else
                    alpha = "";
                let red = (argb >> 16 & 0xFF).toString(16);
                let green = (argb >> 8 & 0xFF).toString(16);
                let blue = (argb & 0xFF).toString(16);
                if (alpha.length == 1)
                    alpha = `0${alpha}`;
                if (red.length == 1)
                    red = `0${red}`;
                if (green.length == 1)
                    green = `0${green}`;
                if (blue.length == 1)
                    blue = `0${blue}`;
                return `#${alpha}${red}${green}${blue}`;
            }
            static convertFromHtmlColor(str, hasAlpha = false) {
                if (str.length < 1)
                    return 0;
                if (str.charAt(0) == "#")
                    str = str.substr(1);
                if (str.length == 8)
                    return (parseInt(str.substr(0, 2), 16) << 24) + parseInt(str.substr(2), 16);
                else if (hasAlpha)
                    return 0xFF000000 + parseInt(str, 16);
                else
                    return parseInt(str, 16);
            }
        }
        utils.StringUtil = StringUtil;
    })(utils = fgui.utils || (fgui.utils = {}));
})(fgui || (fgui = {}));

(function (fgui) {
    var utils;
    (function (utils) {
        class Binder {
            static create(func, context, ...args) {
                if (!context)
                    return func;
                return (function () {
                    let fullargs = arguments.length > 0 ? [].concat(Array.prototype.slice.call(arguments)).concat(args) : [].concat(args);
                    func.apply(context, fullargs);
                });
            }
        }
        utils.Binder = Binder;
    })(utils = fgui.utils || (fgui.utils = {}));
})(fgui || (fgui = {}));

(function (fgui) {
    class FocusEvent {
    }
    FocusEvent.CHANGED = "__focusChanged";
    fgui.FocusEvent = FocusEvent;
})(fgui || (fgui = {}));

(function (fgui) {
    class InputElement extends PIXI.utils.EventEmitter {
        constructor(tf) {
            super();
            this.$requestToShow = false;
            this.inputElement = null;
            this.inputDiv = null;
            this.$scaleX = 0;
            this.$scaleY = 0;
            this.textValue = "";
            this.colorValue = 0xffffff;
            this.$attrsCache = {};
            this.$textfield = tf;
        }
        $addToStage() {
            this.htmlInput = fgui.HTMLInput.inst;
        }
        initElement() {
            let point = this.$textfield.localToGlobal(0, 0);
            let x = point.x;
            let y = point.y;
            let scaleX = this.htmlInput.$scaleX;
            let scaleY = this.htmlInput.$scaleY;
            if (!this.$textfield.multipleLine)
                this.inputElement.style.top = (-this.$textfield.leading * scaleY) + "px";
            this.inputDiv.style.top = (y + 1) * scaleY + "px";
            this.inputDiv.style.left = x * scaleX + "px";
            let node = this.$textfield;
            let cX = 1;
            let cY = 1;
            let rotation = 0;
            while (node.parent) {
                cX *= node.scaleX;
                cY *= node.scaleY;
                rotation += node.rotation;
                node = node.parent;
            }
            let style = this.inputDiv.style;
            style.transform = style.webkitTransform = style.msTransform = style.mozTransform = style.oTransform = "rotate(" + rotation + "deg)";
            this.$scaleX = scaleX * cX;
            this.$scaleY = scaleY * cY;
        }
        get textField() {
            return this.$textfield;
        }
        $show() {
            if (!this.htmlInput.isCurrentInput(this)) {
                this.inputElement = this.htmlInput.requestInput(this);
                if (!this.$textfield.multipleLine)
                    this.inputElement.type = this.$textfield.type;
                for (let key in this.$attrsCache)
                    this.inputElement.setAttribute(key, this.$attrsCache[key]);
                this.inputDiv = this.htmlInput.$wrapper;
            }
            else
                this.inputElement.onblur = null;
            this.htmlInput.$requestToShow = true;
            this.$requestToShow = true;
            this.initElement();
        }
        onBlurHandler() {
            this.htmlInput.clearInputElement();
            this.htmlInput.clearAttributes(this.$attrsCache);
            window.scrollTo(0, 0);
        }
        $hide() {
        }
        get text() {
            if (!this.textValue)
                this.textValue = "";
            return this.textValue;
        }
        set text(value) {
            this.textValue = value;
            if (this.inputElement)
                this.inputElement.value = this.textValue;
        }
        setColor(value) {
            this.colorValue = value;
            if (this.inputElement)
                this.setElementStyle("color", fgui.utils.StringUtil.convertToHtmlColor(this.colorValue));
        }
        $onBlur() {
        }
        onInputHandler() {
            window.setTimeout(() => {
                if (this.inputElement && this.inputElement.selectionStart == this.inputElement.selectionEnd) {
                    this.textValue = this.inputElement.value;
                    this.emit("updateText");
                }
            }, 0);
        }
        setAreaHeight() {
            let tf = this.$textfield;
            if (tf.multipleLine) {
                let textheight = tf.textHeight;
                if (tf.height <= tf.fontSize) {
                    this.setElementStyle("height", tf.fontSize * this.$scaleY + "px");
                    this.setElementStyle("padding", "0px");
                    this.setElementStyle("lineHeight", tf.lineHeight * this.$scaleY + "px");
                }
                else if (tf.height < textheight) {
                    this.setElementStyle("height", (tf.height) * this.$scaleY + "px");
                    this.setElementStyle("padding", "0px");
                    this.setElementStyle("lineHeight", tf.lineHeight * this.$scaleY + "px");
                }
                else {
                    this.setElementStyle("height", (textheight + tf.leading) * this.$scaleY + "px");
                    let rap = (tf.height - textheight) * this.$scaleY;
                    let valign = this.getVAlignFactor(tf);
                    let top = rap * valign;
                    let bottom = rap - top;
                    this.setElementStyle("padding", top + "px 0px " + bottom + "px 0px");
                    this.setElementStyle("lineHeight", tf.lineHeight * this.$scaleY + "px");
                }
            }
        }
        getVAlignFactor(textfield) {
            let vao = 0;
            switch (textfield.verticalAlign) {
                case 0:
                    break;
                case 1:
                    vao = .5;
                    break;
                case 2:
                    vao = 1;
                    break;
            }
            return vao;
        }
        onClickHandler(e) {
            if (this.$requestToShow) {
                this.$requestToShow = false;
                this.inputElement.value = this.text;
                if (this.inputElement.onblur == null)
                    this.inputElement.onblur = fgui.utils.Binder.create(this.onBlurHandler, this);
                this.resetInput();
                if (this.$textfield.maxLength > 0)
                    this.inputElement.setAttribute("maxlength", String(this.$textfield.maxLength));
                else
                    this.inputElement.removeAttribute("maxlength");
                this.inputElement.selectionStart = this.inputElement.value.length;
                this.inputElement.selectionEnd = this.inputElement.value.length;
                this.inputElement.focus();
                this.emit(fgui.FocusEvent.CHANGED, "focus", this.inputElement);
            }
        }
        onDisconnect() {
            this.inputElement = null;
            this.emit(fgui.FocusEvent.CHANGED, "blur", this.inputElement);
        }
        setElementStyle(style, value) {
            if (value == null)
                return;
            if (this.inputElement) {
                let ss = this.inputElement.style;
                ss[style] = value;
            }
        }
        setAttribute(name, value) {
            if (name == null || value == null)
                return;
            this.$attrsCache[name] = value;
        }
        getAttribute(name) {
            return this.$attrsCache[name];
        }
        $removeFromStage() {
            if (this.inputElement)
                this.htmlInput.disconnect(this);
        }
        resetInput() {
            if (this.inputElement) {
                let textfield = this.$textfield;
                this.setElementStyle("fontFamily", textfield.font);
                this.setElementStyle("fontStyle", textfield.italic ? "italic" : "normal");
                this.setElementStyle("fontWeight", textfield.bold ? "bold" : "normal");
                this.setElementStyle("textAlign", textfield.align);
                this.setElementStyle("fontSize", textfield.fontSize * this.$scaleY + "px");
                this.setElementStyle("color", fgui.utils.StringUtil.convertToHtmlColor(textfield.color));
                this.setElementStyle("width", textfield.width * this.$scaleX + "px");
                let va = "middle", vao = 0;
                switch (textfield.verticalAlign) {
                    case 0:
                        va = "top";
                        break;
                    case 1:
                        va = "middle";
                        vao = .5;
                        break;
                    case 2:
                        va = "bottom";
                        vao = 1;
                        break;
                }
                this.setElementStyle("verticalAlign", va);
                if (textfield.multipleLine)
                    this.setAreaHeight();
                else {
                    this.setElementStyle("lineHeight", textfield.lineHeight * this.$scaleY + "px");
                    if (textfield.height < textfield.fontSize) {
                        this.setElementStyle("height", textfield.fontSize * this.$scaleY + "px");
                        this.setElementStyle("padding", "0px 0px " + (textfield.fontSize * .5 * this.$scaleX) + "px 0px");
                    }
                    else {
                        this.setElementStyle("height", textfield.fontSize * this.$scaleY + "px");
                        let rap = (textfield.height - textfield.fontSize) * this.$scaleY;
                        let top = rap * vao;
                        let bottom = rap - top, fsy = textfield.fontSize * .5 * this.$scaleY;
                        if (bottom < fsy)
                            bottom = fsy;
                        this.setElementStyle("padding", top + "px 0px " + bottom + "px 0px");
                    }
                }
                this.inputDiv.style.clip = "rect(0px " + (textfield.width * this.$scaleX) + "px " + (textfield.height * this.$scaleY) + "px 0px)";
                this.inputDiv.style.height = textfield.height * this.$scaleY + "px";
                this.inputDiv.style.width = textfield.width * this.$scaleX + "px";
            }
        }
    }
    fgui.InputElement = InputElement;
})(fgui || (fgui = {}));

(function (fgui) {
    class HTMLInput {
        constructor() {
            this.$requestToShow = false;
            this.$scaleX = 1;
            this.$scaleY = 1;
        }
        static get inst() {
            if (!HTMLInput.$instance)
                HTMLInput.$instance = new HTMLInput();
            return HTMLInput.$instance;
        }
        initialize(container, view) {
            this.$canvas = view;
            let div;
            if (!this.$delegateDiv) {
                div = document.createElement("div");
                this.$delegateDiv = div;
                div.id = "__delegateDiv";
                container.appendChild(div);
                this.initDomPos(div);
                this.$wrapper = document.createElement("div");
                this.initDomPos(this.$wrapper);
                this.$wrapper.style.width = "0px";
                this.$wrapper.style.height = "0px";
                this.$wrapper.style.left = "0px";
                this.$wrapper.style.top = "-100px";
                this.setTransform(this.$wrapper, "0% 0% 0px");
                div.appendChild(this.$wrapper);
                fgui.GRoot.inst.on(fgui.InteractiveEvents.Click, this.canvasClickHandler, this);
                this.initInputElement(true);
                this.initInputElement(false);
            }
        }
        isInputOn() {
            return this.$input != null;
        }
        canvasClickHandler(e) {
            if (this.$requestToShow) {
                this.$requestToShow = false;
                this.$input.onClickHandler(e);
                this.show();
            }
            else {
                if (this.$curEle) {
                    this.clearInputElement();
                    this.$curEle.blur();
                    this.$curEle = null;
                }
            }
        }
        isInputShown() {
            return this.$input != null;
        }
        isCurrentInput(input) {
            return this.$input == input;
        }
        initDomPos(dom) {
            dom.style.position = "absolute";
            dom.style.left = "0px";
            dom.style.top = "0px";
            dom.style.border = "none";
            dom.style.padding = "0";
        }
        setTransform(el, origin, transform) {
            let style = el.style;
            style.transformOrigin = style.webkitTransformOrigin = style.msTransformOrigin = style.mozTransformOrigin = style.oTransformOrigin = origin;
            if (transform && transform.length > 0)
                style.transform = style.webkitTransform = style.msTransform = style.mozTransform = style.oTransform = transform;
        }
        updateSize(sx, sy) {
            if (!this.$canvas)
                return;
            this.$scaleX = sx;
            this.$scaleY = sy;
            this.$delegateDiv.style.left = this.$canvas.style.left;
            this.$delegateDiv.style.top = this.$canvas.style.top;
            let cvsStyle = this.$canvas.style;
            this.setTransform(this.$delegateDiv, "0% 0% 0px", cvsStyle.transform || cvsStyle.webkitTransform || cvsStyle.msTransform || cvsStyle.mozTransform || cvsStyle.oTransform);
        }
        initInputElement(multiline) {
            let inputElement;
            if (multiline) {
                inputElement = document.createElement("textarea");
                inputElement.style.resize = "none";
                this.$multiLine = inputElement;
                inputElement.id = "stageTextAreaEle";
            }
            else {
                inputElement = document.createElement("input");
                this.$singleLine = inputElement;
                inputElement.type = "text";
                inputElement.id = "stageInputEle";
            }
            this.$wrapper.appendChild(inputElement);
            inputElement.setAttribute("tabindex", "-1");
            inputElement.style.width = "1px";
            inputElement.style.height = "12px";
            this.initDomPos(inputElement);
            let style = inputElement.style;
            style.outline = "thin";
            style.background = "none";
            style.overflow = "hidden";
            style.wordBreak = "break-all";
            style.opacity = 0;
            inputElement.oninput = (e) => {
                if (this.$input)
                    this.$input.onInputHandler();
            };
        }
        show() {
            fgui.GTimer.inst.callLater(() => {
                this.$curEle.style.opacity = "1";
            }, this);
        }
        disconnect(ele) {
            if (this.$input == null || this.$input == ele) {
                this.clearInputElement();
                if (this.$curEle)
                    this.$curEle.blur();
            }
        }
        clearAttributes(obj) {
            if (this.$curEle) {
                for (let key in obj) {
                    this.$curEle.removeAttribute(key);
                }
            }
        }
        clearInputElement() {
            if (this.$curEle) {
                this.$curEle.value = "";
                this.$curEle.onblur = null;
                let style = this.$curEle.style;
                style.width = "1px";
                style.height = "12px";
                style.left = "0px";
                style.top = "0px";
                style.opacity = "0";
                let el2;
                if (this.$singleLine == this.$curEle)
                    el2 = this.$multiLine;
                else
                    el2 = this.$singleLine;
                el2.style.display = "block";
                this.$wrapper.style.left = "0px";
                this.$wrapper.style.top = "-100px";
                this.$wrapper.style.height = "0px";
                this.$wrapper.style.width = "0px";
            }
            if (this.$input) {
                this.$input.onDisconnect();
                this.$input = null;
                HTMLInput.isTyping = false;
            }
        }
        requestInput(ele) {
            this.clearInputElement();
            this.$input = ele;
            HTMLInput.isTyping = true;
            let el2;
            if (this.$input.textField.multipleLine) {
                this.$curEle = this.$multiLine;
                el2 = this.$singleLine;
            }
            else {
                this.$curEle = this.$singleLine;
                el2 = this.$multiLine;
            }
            el2.style.display = "none";
            return this.$curEle;
        }
    }
    HTMLInput.isTyping = false;
    fgui.HTMLInput = HTMLInput;
})(fgui || (fgui = {}));

(function (fgui) {
    fgui.isUIObject = function (obj) {
        return obj && "UIOwner" in obj && obj.UIOwner != null;
    };
})(fgui || (fgui = {}));

(function (fgui) {
    class DefaultMovieClipSettings {
        constructor() {
            this.startFrame = 0;
            this.endFrame = -1;
            this.repeatCount = 0;
            this.loopEndAt = -1;
            this.endCallback = null;
            this.endCallbackContext = null;
        }
        mix(other) {
            let ret = this;
            for (let key in other) {
                if (key == "mix")
                    continue;
                ret[key] = other[key];
            }
            return this;
        }
    }
    fgui.DefaultMovieClipSettings = DefaultMovieClipSettings;
})(fgui || (fgui = {}));

(function (fgui) {
    class MovieClipData {
        constructor() {
            this.repeatedCount = 0;
            this.$curFrame = 0;
            this.$lastTime = 0;
            this.$curFrameDelay = 0;
            this.$lastTime = Date.now();
        }
        update(mc) {
            let t = Date.now();
            let elapsed = t - this.$lastTime;
            this.$lastTime = t;
            let cur = this.$curFrame;
            if (cur >= mc.frameCount)
                cur = mc.frameCount - 1;
            this.reachesEnd = false;
            this.$curFrameDelay += elapsed;
            let interval = mc.interval + mc.frames[cur].addDelay
                + ((cur == 0 && this.repeatedCount > 0) ? mc.repeatDelay : 0);
            if (this.$curFrameDelay < interval)
                return;
            this.$curFrameDelay -= interval;
            if (this.$curFrameDelay > mc.interval)
                this.$curFrameDelay = mc.interval;
            if (mc.swing) {
                if (this.reversed) {
                    this.$curFrame--;
                    if (this.$curFrame < 0) {
                        this.$curFrame = Math.min(1, mc.frameCount - 1);
                        this.repeatedCount++;
                        this.reversed = !this.reversed;
                    }
                }
                else {
                    this.$curFrame++;
                    if (this.$curFrame > mc.frameCount - 1) {
                        this.$curFrame = Math.max(0, mc.frameCount - 2);
                        this.repeatedCount++;
                        this.reachesEnd = true;
                        this.reversed = !this.reversed;
                    }
                }
            }
            else {
                this.$curFrame++;
                if (this.$curFrame > mc.frameCount - 1) {
                    this.$curFrame = 0;
                    this.repeatedCount++;
                    this.reachesEnd = true;
                }
            }
        }
        get currentFrame() {
            return this.$curFrame;
        }
        set currentFrame(value) {
            this.$curFrame = value;
            this.$curFrameDelay = 0;
        }
        rewind() {
            this.$curFrame = 0;
            this.$curFrameDelay = 0;
            this.reversed = false;
            this.reachesEnd = false;
        }
        reset() {
            this.$curFrame = 0;
            this.$curFrameDelay = 0;
            this.repeatedCount = 0;
            this.reachesEnd = false;
            this.reversed = false;
        }
        copy(src) {
            this.$curFrame = src.$curFrame;
            this.$curFrameDelay = src.$curFrameDelay;
            this.repeatedCount = src.repeatedCount;
            this.reachesEnd = src.reachesEnd;
            this.reversed = src.reversed;
        }
    }
    fgui.MovieClipData = MovieClipData;
})(fgui || (fgui = {}));

(function (fgui) {
    var utils;
    (function (utils) {
        class NumberUtil {
            static clamp(value, min, max) {
                if (value < min)
                    value = min;
                else if (value > max)
                    value = max;
                return value;
            }
            static clamp01(value) {
                if (value > 1)
                    value = 1;
                else if (value < 0)
                    value = 0;
                return value;
            }
            static isNumber(n) {
                if (typeof (n) != "number")
                    return false;
                if (isNaN(n))
                    return false;
                return true;
            }
            static sign(x) {
                x = Number(x);
                if (x === 0 || isNaN(x))
                    return x;
                return x > 0 ? 1 : -1;
            }
            static angleToRadian(n) {
                return n * NumberUtil.RADIAN;
            }
            static lerp(s, e, p) {
                return s + p * (e - s);
            }
        }
        NumberUtil.RADIAN = Math.PI / 180;
        utils.NumberUtil = NumberUtil;
    })(utils = fgui.utils || (fgui.utils = {}));
})(fgui || (fgui = {}));

(function (fgui) {
    ;
    class MovieClip extends PIXI.Sprite {
        constructor(owner) {
            super();
            this.interval = 0;
            this.repeatDelay = 0;
            this.$frameCount = 0;
            this.$currentFrame = 0;
            this.$status = 0;
            this.UIOwner = owner;
            this.data = new fgui.MovieClipData();
            this.$playing = true;
            this.interactive = this.interactiveChildren = false;
            this.$settings = new fgui.DefaultMovieClipSettings();
            this.visible;
            this.on("added", this.added, this);
            this.on("removed", this.removed, this);
        }
        get frames() {
            return this.$frames;
        }
        set frames(value) {
            this.$frames = value;
            if (this.$frames != null)
                this.$frameCount = this.$frames.length;
            else
                this.$frameCount = 0;
            if (this.$settings.endFrame == -1 || this.$settings.endFrame > this.$frameCount - 1)
                this.$settings.endFrame = this.$frameCount - 1;
            if (this.$settings.loopEndAt == -1 || this.$settings.loopEndAt > this.$frameCount - 1)
                this.$settings.loopEndAt = this.$frameCount - 1;
            if (this.$currentFrame < 0 || this.$currentFrame > this.$frameCount - 1)
                this.$currentFrame = this.$frameCount - 1;
            if (this.$frameCount > 0)
                this.setFrame(this.$frames[this.$currentFrame]);
            else
                this.setFrame(null);
            this.data.rewind();
        }
        get frameCount() {
            return this.$frameCount;
        }
        get boundsRect() {
            return this._bounds.getRectangle(PIXI.Rectangle.EMPTY);
        }
        set boundsRect(value) {
            this._bounds.addBoundsArea(new PIXI.Bounds(), value);
        }
        get currentFrame() {
            return this.$currentFrame;
        }
        set currentFrame(value) {
            if (this.$currentFrame != value) {
                this.$currentFrame = value;
                this.data.currentFrame = value;
                this.setFrame(this.$currentFrame < this.$frameCount ? this.$frames[this.$currentFrame] : null);
            }
        }
        get playing() {
            return this.$playing;
        }
        set playing(value) {
            this.$playing = value;
            if (value && fgui.GObject.isDisplayObjectOnStage(this))
                fgui.GTimer.inst.add(0, 0, this.update, this);
            else
                fgui.GTimer.inst.remove(this.update, this);
        }
        setPlaySettings(...args) {
            if (args.length == 1 && typeof args[0] == "object")
                this.$settings.mix(args[0]);
            else {
                let s = args[0], e = args[1], r = args[2], l = args[3], ec = args[4], ecc = args[5];
                let o = {};
                if (fgui.utils.NumberUtil.isNumber(s))
                    o.startFrame = s;
                if (fgui.utils.NumberUtil.isNumber(e))
                    o.endFrame = e;
                if (fgui.utils.NumberUtil.isNumber(r))
                    o.repeatCount = r;
                if (fgui.utils.NumberUtil.isNumber(l))
                    o.loopEndAt = l;
                if (ec && typeof (ec) == "function")
                    o.endCallback = ec;
                if (ecc)
                    o.endCallbackContext = ecc;
                this.$settings.mix(o);
            }
            if (this.$settings.endFrame == -1 || this.$settings.endFrame > this.$frameCount - 1)
                this.$settings.endFrame = this.$frameCount - 1;
            if (this.$settings.loopEndAt == -1)
                this.$settings.loopEndAt = this.$settings.endFrame;
            this.$status = 0;
            this.currentFrame = this.$settings.startFrame;
        }
        update() {
            if (this.UIOwner.$inProgressBuilding)
                return;
            if (this.$playing && this.$frameCount != 0 && this.$status != 3) {
                this.data.update(this);
                if (this.$currentFrame != this.data.currentFrame) {
                    if (this.$status == 1) {
                        this.$currentFrame = this.$settings.startFrame;
                        this.data.currentFrame = this.$currentFrame;
                        this.$status = 0;
                    }
                    else if (this.$status == 2) {
                        this.$currentFrame = this.$settings.loopEndAt;
                        this.data.currentFrame = this.$currentFrame;
                        this.$status = 3;
                        if (this.$settings.endCallback != null)
                            fgui.GTimer.inst.callLater(this.$playEnd, this);
                    }
                    else {
                        this.$currentFrame = this.data.currentFrame;
                        if (this.$currentFrame == this.$settings.endFrame) {
                            if (this.$settings.repeatCount > 0) {
                                this.$settings.repeatCount--;
                                if (this.$settings.repeatCount == 0)
                                    this.$status = 2;
                                else
                                    this.$status = 1;
                            }
                        }
                    }
                    this.setFrame(this.$frames[this.$currentFrame]);
                }
            }
        }
        $playEnd() {
            if (this.$settings.endCallback != null) {
                let f = this.$settings.endCallback;
                let fObj = this.$settings.endCallbackContext;
                this.$settings.endCallback = this.$settings.endCallbackContext = null;
                this.$settings.endCallbackContext = null;
                if (f)
                    f.call(fObj, this);
            }
        }
        setFrame(frame) {
            this.texture = frame == null ? null : frame.texture;
            this._textureID = -1;
        }
        added(disp) {
            if (this.$playing)
                fgui.GTimer.inst.add(0, 0, this.update, this);
        }
        removed(disp) {
            if (this.$playing)
                fgui.GTimer.inst.remove(this.update, this);
        }
        destroy() {
            fgui.GTimer.inst.remove(this.update, this);
            this.off("added", this.added, this);
            this.off("removed", this.removed, this);
            super.destroy();
        }
    }
    fgui.MovieClip = MovieClip;
})(fgui || (fgui = {}));

(function (fgui) {
    class UIContainer extends PIXI.Container {
        constructor(owner) {
            super();
            this.UIOwner = owner;
            this.interactive = true;
            this.interactiveChildren = true;
        }
        get scrollRect() {
            return this.$scrollRect;
        }
        set scrollRect(rect) {
            this.$scrollRect = rect;
            if (rect != null) {
                if (!this.$rectMask) {
                    this.$rectMask = new PIXI.Graphics();
                    this.$rectMask.isMask = true;
                    this.addChild(this.$rectMask);
                    this.mask = this.$rectMask;
                }
                this.$rectMask.clear();
                if (rect.width > 0 && rect.height > 0) {
                    this.$rectMask.beginFill(0x0, 1);
                    this.$rectMask.drawRect(this.$scrollRect.x, this.$scrollRect.y, this.$scrollRect.width, this.$scrollRect.height);
                    this.$rectMask.endFill();
                }
            }
            else
                this.mask = null;
        }
    }
    fgui.UIContainer = UIContainer;
})(fgui || (fgui = {}));

(function (fgui) {
    class UIImage extends PIXI.Container {
        constructor(owner) {
            super();
            this.UIOwner = owner;
            this.interactive = this.interactiveChildren = false;
        }
        $initDisp(item) {
            if (this.$disp)
                return;
            if (item) {
                item.load();
                if (item.scaleByTile) {
                    let ts = new PIXI.extras.TilingSprite(item.id, item.texture);
                    this.$disp = ts;
                }
                else if (item.scale9Grid) {
                    this.$disp = new PIXI.extras.NineSlicePlane(item.texture, item.scale9Grid.left, item.scale9Grid.top, Math.max(0, item.texture.width - item.scale9Grid.width - item.scale9Grid.x), Math.max(0, item.texture.height - item.scale9Grid.height - item.scale9Grid.y));
                    this.tiledSlices = item.tiledSlices;
                }
                else
                    this.$disp = new PIXI.extras.Sprite(item.id, item.texture);
            }
            else
                this.$disp = new PIXI.extras.Sprite();
            this.addChild(this.$disp);
        }
        get tint() {
            return this.$disp.tint;
        }
        set tint(v) {
            this.$disp.tint = v;
        }
        get height() {
            return this.$disp.height;
        }
        set height(v) {
            this.$disp.height = v;
        }
        get width() {
            return this.$disp.width;
        }
        set width(v) {
            this.$disp.width = v;
        }
        get texture() {
            return this.$disp.texture;
        }
        set texture(v) {
            this.$disp.texture = v;
        }
        get scale9Grid() {
            if (this.$disp instanceof PIXI.NineSlicePlane) {
                return new PIXI.Rectangle(this.$disp.leftWidth, this.$disp.topHeight, this.$disp.rightWidth, this.$disp.bottomHeight);
            }
            return null;
        }
        set scale9Grid(rect) {
            if (this.$disp instanceof PIXI.NineSlicePlane) {
                if (rect.left != this.$disp.leftWidth)
                    this.$disp.leftWidth = rect.left;
                if (rect.top != this.$disp.topHeight)
                    this.$disp.topHeight = rect.top;
                if (rect.right != this.$disp.rightWidth)
                    this.$disp.rightWidth = rect.right;
                if (rect.bottom != this.$disp.bottomHeight)
                    this.$disp.bottomHeight = rect.bottom;
            }
        }
        get tiledSlices() {
            return 0;
        }
        set tiledSlices(flags) {
        }
        get flipX() {
            return this.$disp.flipX;
        }
        get flipY() {
            return this.$disp.flipY;
        }
        set flipX(v) {
            if (fgui.GRoot.inst.applicationContext.renderer.type != PIXI.RENDERER_TYPE.WEBGL)
                return;
            this.$disp.flipX = v;
        }
        set flipY(v) {
            if (fgui.GRoot.inst.applicationContext.renderer.type != PIXI.RENDERER_TYPE.WEBGL)
                return;
            this.$disp.flipY = v;
        }
        destroy(options) {
            if (this.$disp) {
                this.$disp.destroy(options);
                this.$disp = null;
            }
            super.destroy(options);
        }
    }
    fgui.UIImage = UIImage;
})(fgui || (fgui = {}));

(function (fgui) {
    class UISprite extends PIXI.Graphics {
        constructor(owner) {
            super();
            this.UIOwner = owner;
            this.interactive = false;
            this.interactiveChildren = false;
        }
    }
    fgui.UISprite = UISprite;
})(fgui || (fgui = {}));

(function (fgui) {
    var utils;
    (function (utils) {
        class DOMEventManager extends PIXI.utils.EventEmitter {
            constructor() {
                super();
                this.retEvent = {};
                this.nullLowestDeltaTimeout = NaN;
                this.$pressedKeys = {};
                this.$releasedKeys = {};
                this.$downKeys = [];
                window.addEventListener("resize", e => this.notifyResizeEvents(e), false);
                window.addEventListener('keydown', e => this.onWindowKeyDown(e), false);
                window.addEventListener('keyup', e => this.onWindowKeyUp(e), false);
                const toBind = ('onwheel' in document || document["documentMode"] >= 9) ?
                    ['wheel'] : ['mousewheel', 'DomMouseScroll', 'MozMousePixelScroll'];
                for (let i = toBind.length; i;) {
                    window.addEventListener(toBind[--i], e => this.onMouseWheel(e), false);
                }
            }
            notifyResizeEvents(e) {
                this.emit('resize');
            }
            onMouseWheel(event) {
                let orgEvent = (event || window.event), delta = 0, deltaX = 0, deltaY = 0, absDelta = 0;
                if ('detail' in orgEvent) {
                    deltaY = orgEvent.detail * -1;
                }
                if ('wheelDelta' in orgEvent) {
                    deltaY = orgEvent.wheelDelta;
                }
                if ('wheelDeltaY' in orgEvent) {
                    deltaY = orgEvent.wheelDeltaY;
                }
                if ('wheelDeltaX' in orgEvent) {
                    deltaX = orgEvent.wheelDeltaX * -1;
                }
                if ('axis' in orgEvent && orgEvent.axis === orgEvent.HORIZONTAL_AXIS) {
                    deltaX = deltaY * -1;
                    deltaY = 0;
                }
                delta = deltaY === 0 ? deltaX : deltaY;
                if ('deltaY' in orgEvent) {
                    deltaY = orgEvent.deltaY * -1;
                    delta = deltaY;
                }
                if ('deltaX' in orgEvent) {
                    deltaX = orgEvent.deltaX;
                    if (deltaY === 0) {
                        delta = deltaX * -1;
                    }
                }
                if (deltaY === 0 && deltaX === 0) {
                    return;
                }
                if (orgEvent.deltaMode === 1) {
                    const lineHeight = 16;
                    delta *= lineHeight;
                    deltaY *= lineHeight;
                    deltaX *= lineHeight;
                }
                else if (orgEvent.deltaMode === 2) {
                    const pageHeight = 16;
                    delta *= pageHeight;
                    deltaY *= pageHeight;
                    deltaX *= pageHeight;
                }
                absDelta = Math.max(Math.abs(deltaY), Math.abs(deltaX));
                if (!this.lowestDelta || absDelta < this.lowestDelta) {
                    this.lowestDelta = absDelta;
                    if (orgEvent.type === 'mousewheel' && absDelta % 120 === 0)
                        this.lowestDelta /= 40;
                }
                if (orgEvent.type === 'mousewheel' && absDelta % 120 === 0) {
                    delta /= 40;
                    deltaX /= 40;
                    deltaY /= 40;
                }
                delta = Math[delta >= 1 ? 'floor' : 'ceil'](delta / this.lowestDelta);
                deltaX = Math[deltaX >= 1 ? 'floor' : 'ceil'](deltaX / this.lowestDelta);
                deltaY = Math[deltaY >= 1 ? 'floor' : 'ceil'](deltaY / this.lowestDelta);
                this.retEvent.delta = delta;
                this.retEvent.deltaX = deltaX;
                this.retEvent.deltaY = deltaY;
                this.retEvent.deltaFactor = this.lowestDelta;
                this.retEvent.deltaMode = 0;
                if (this.nullLowestDeltaTimeout) {
                    clearTimeout(this.nullLowestDeltaTimeout);
                }
                this.nullLowestDeltaTimeout = setTimeout(() => this.nullLowestDelta(), 200);
                this.emit(fgui.DisplayObjectEvent.MOUSE_WHEEL, this.retEvent);
            }
            nullLowestDelta() {
                this.lowestDelta = null;
            }
            isKeyDown(key) {
                return this.$downKeys.indexOf(key) >= 0;
            }
            isKeyPressed(key) {
                return !!this.$pressedKeys[key];
            }
            isKeyReleased(key) {
                return !!this.$releasedKeys[key];
            }
            onWindowKeyDown(evt) {
                let key = evt.which || evt.keyCode;
                if (!this.isKeyDown(key)) {
                    this.$downKeys.push(key);
                    this.$pressedKeys[key] = true;
                    this.emit('keyPressed', key);
                }
            }
            onWindowKeyUp(evt) {
                let key = evt.which || evt.keyCode;
                if (this.isKeyDown(key)) {
                    this.$pressedKeys[key] = false;
                    this.$releasedKeys[key] = true;
                    let index = this.$downKeys.indexOf(key);
                    if (index >= 0)
                        this.$downKeys.splice(index, 1);
                    this.emit('keyReleased', key);
                }
            }
        }
        DOMEventManager.inst = new DOMEventManager();
        utils.DOMEventManager = DOMEventManager;
    })(utils = fgui.utils || (fgui.utils = {}));
})(fgui || (fgui = {}));

(function (fgui) {
    class DefaultUIStageOptions {
        constructor() {
            this.scaleMode = "showAll";
            this.orientation = "auto";
            this.resolution = 1;
            this.designWidth = 800;
            this.designHeight = 600;
            this.alignV = 4;
            this.alignH = 1;
            this.fallbackWidth = 0;
            this.fallbackHeight = 0;
            this.initliazeHTMLInput = undefined;
        }
    }
    fgui.DefaultUIStageOptions = DefaultUIStageOptions;
    class DefaultBoudingRectCalculator {
        getRect(view, fallbackWidth, fallbackHeight) {
            let p = view.parentElement;
            if (!p)
                throw new Error("Your view of PIXI are still in memory but not appended to DOM yet? it's necessary that there is a parent element to wrap your view up.");
            let rect = p.getBoundingClientRect();
            let ret = {
                x: 0,
                y: 0,
                width: 0,
                height: 0
            };
            if (!rect || rect.width <= 0 || rect.height <= 0) {
                console.warn("It seems that you did not set a explicit size for the parent element of your view, now fall back to window size instead.");
                ret.width = window.innerWidth;
                ret.height = window.innerHeight;
                ret.x = 0;
                ret.y = 0;
            }
            else {
                ret.x = rect.left;
                ret.y = rect.top;
                ret.width = rect.width;
                ret.height = rect.height;
            }
            if (ret.width <= 0 || ret.height <= 0) {
                console.warn("fetch container size to initialize PIXI in all ways have failed, now use default size (fallbackWidth / fallbackHeight) specified in the options instead.");
                ret.width = fallbackWidth;
                ret.height = fallbackHeight;
            }
            return ret;
        }
    }
    class UIStage extends PIXI.utils.EventEmitter {
        constructor(app, stageOptions) {
            super();
            this.$width = 0;
            this.$height = 0;
            this.$scaleX = 1;
            this.$scaleY = 1;
            this.$canvasMatrix = new PIXI.Matrix();
            this.offsetX = 0;
            this.offsetY = 0;
            this.$sizeCalcer = new DefaultBoudingRectCalculator();
            UIStageInst.push(this);
            this.$appContext = app;
            this.$appStage = app.stage;
            this.$appStage.interactive = true;
            let opt;
            if (stageOptions instanceof DefaultUIStageOptions)
                opt = stageOptions;
            else {
                opt = new DefaultUIStageOptions();
                if (stageOptions != null) {
                    for (let i in stageOptions) {
                        opt[i] = stageOptions[i];
                    }
                }
            }
            if (!opt.designWidth || !opt.designHeight)
                throw new Error("Invalid designWidth / designHeight in the parameter 'stageOptions'.");
            this.$options = opt;
            if (opt.initliazeHTMLInput == undefined || opt.initliazeHTMLInput) {
                this.$appContext.view.style.position = "absolute";
                let container = this.$appContext.view.parentElement;
                let style = container.style;
                if (container.tagName != "DIV") {
                    container = document.createElement("DIV");
                    style.position = "relative";
                    style.left = style.top = "0px";
                    style.width = style.height = "100%";
                    style.overflow = "hidden";
                    this.$appContext.view.parentElement.appendChild(container);
                    container.appendChild(this.$appContext.view);
                }
                let containerPosition;
                if (document.defaultView && document.defaultView.getComputedStyle)
                    containerPosition = document.defaultView.getComputedStyle(container).position;
                else
                    containerPosition = style.position;
                if (containerPosition == "" || containerPosition == "static") {
                    containerPosition = "relative";
                    container.style.position = containerPosition;
                }
                fgui.HTMLInput.inst.initialize(container, this.$appContext.view);
                this.updateScreenSize();
            }
        }
        get orientation() {
            return this.$options.orientation;
        }
        get stageWidth() {
            return this.$width;
        }
        get stageHeight() {
            return this.$height;
        }
        get applicationContext() {
            return this.$appContext;
        }
        get nativeStage() {
            return this.$appStage;
        }
        get resolution() {
            return this.$options.resolution;
        }
        set resolution(v) {
            this.$options.resolution = v;
            this.updateScreenSize();
        }
        get scaleX() {
            return this.$scaleX;
        }
        get scaleY() {
            return this.$scaleY;
        }
        get designWidth() {
            return this.$options.designWidth;
        }
        get designHeight() {
            return this.$options.designHeight;
        }
        setDesignSize(width, height) {
            let option = this.$options;
            option.designWidth = width;
            option.designHeight = height;
            this.updateScreenSize();
        }
        calculateStageSize(scaleMode, screenWidth, screenHeight, contentWidth, contentHeight) {
            let displayWidth = screenWidth;
            let displayHeight = screenHeight;
            let stageWidth = contentWidth;
            let stageHeight = contentHeight;
            let scaleX = (screenWidth / stageWidth) || 0;
            let scaleY = (screenHeight / stageHeight) || 0;
            switch (scaleMode) {
                case "exactFit":
                    break;
                case "fixedHeight":
                    stageWidth = Math.round(screenWidth / scaleY);
                    break;
                case "fixedWidth":
                    stageHeight = Math.round(screenHeight / scaleX);
                    break;
                case "noBorder":
                    if (scaleX > scaleY)
                        displayHeight = Math.round(stageHeight * scaleX);
                    else
                        displayWidth = Math.round(stageWidth * scaleY);
                    break;
                case "showAll":
                    if (scaleX > scaleY)
                        displayWidth = Math.round(stageWidth * scaleY);
                    else
                        displayHeight = Math.round(stageHeight * scaleX);
                    break;
                case "fixedAuto":
                    if ((displayWidth / displayHeight) < (stageWidth / stageHeight)) {
                        scaleY = scaleX;
                        stageHeight = Math.round(screenHeight / scaleX);
                    }
                    else {
                        scaleX = scaleY;
                        stageWidth = Math.round(screenWidth / scaleY);
                    }
                    break;
                default:
                    stageWidth = screenWidth;
                    stageHeight = screenHeight;
                    break;
            }
            return {
                stageWidth: stageWidth,
                stageHeight: stageHeight,
                displayWidth: displayWidth,
                displayHeight: displayHeight
            };
        }
        updateScreenSize() {
            if (fgui.HTMLInput.isTyping)
                return;
            let canvas = this.$appContext.view;
            let canvasStyle = canvas.style;
            let rect = this.$sizeCalcer.getRect(canvas, this.$options.fallbackWidth, this.$options.fallbackHeight);
            let shouldRotate = false;
            let orientation = this.$options.orientation;
            if (orientation != "auto") {
                shouldRotate = orientation != "portrait" && rect.height > rect.width
                    || orientation == "portrait" && rect.width > rect.height;
            }
            let screenWidth = shouldRotate ? rect.height : rect.width;
            let screenHeight = shouldRotate ? rect.width : rect.height;
            let stageSize = this.calculateStageSize(this.$options.scaleMode, screenWidth, screenHeight, this.$options.designWidth, this.$options.designHeight);
            let stageWidth = stageSize.stageWidth;
            let stageHeight = stageSize.stageHeight;
            let displayWidth = stageSize.displayWidth;
            let displayHeight = stageSize.displayHeight;
            if (canvas.width !== stageWidth)
                canvas.width = stageWidth;
            if (canvas.height !== stageHeight)
                canvas.height = stageHeight;
            canvasStyle.transformOrigin = canvasStyle.webkitTransformOrigin = canvasStyle.msTransformOrigin = canvasStyle.mozTransformOrigin = canvasStyle.oTransformOrigin = "0px 0px 0px";
            canvasStyle.width = displayWidth + "px";
            canvasStyle.height = displayHeight + "px";
            this.$appContext.renderer.resize(stageWidth, stageHeight);
            let mat = this.$canvasMatrix.identity();
            let dispWidth = shouldRotate ? displayHeight : displayWidth;
            let dispHeight = shouldRotate ? displayWidth : displayHeight;
            let offx, offy;
            if (this.$options.alignH == 0)
                offx = 0;
            else if (this.$options.alignH == 2)
                offx = rect.width - dispWidth;
            else
                offx = (rect.width - dispWidth) * 0.5;
            if (this.$options.alignV == 3)
                offy = 0;
            else if (this.$options.alignV == 5)
                offy = rect.height - dispHeight;
            else
                offy = (rect.height - dispHeight) * 0.5;
            let rotDeg = 0;
            if (shouldRotate) {
                if (this.$options.orientation == "landscape") {
                    mat.rotate(Math.PI / 2);
                    mat.translate(screenHeight - offx, offy);
                    rotDeg = 90;
                }
                else {
                    mat.rotate(-Math.PI / 2);
                    mat.translate(offx, screenWidth - offy);
                    rotDeg = -90;
                }
            }
            else
                mat.translate(offx, offy);
            if (shouldRotate) {
                mat.tx += this.offsetY;
                mat.ty += this.offsetX;
            }
            else {
                mat.tx += this.offsetX;
                mat.ty += this.offsetY;
            }
            mat.a = this.formatData(mat.a), mat.d = this.formatData(mat.d),
                mat.tx = this.formatData(mat.tx), mat.ty = this.formatData(mat.ty);
            canvasStyle.transformOrigin = canvasStyle.webkitTransformOrigin = canvasStyle.msTransformOrigin = canvasStyle.mozTransformOrigin = canvasStyle.oTransformOrigin = "0px 0px 0px";
            canvasStyle.transform = canvasStyle.webkitTransform = canvasStyle.msTransform = canvasStyle.mozTransform = canvasStyle.oTransform = `matrix(${mat.a},${mat.b},${mat.c},${mat.d},${mat.tx},${mat.ty})`;
            this.$width = stageWidth;
            this.$height = stageHeight;
            this.$scaleX = stageWidth / displayWidth;
            this.$scaleY = stageHeight / displayHeight;
            let im = this.$appContext.renderer.plugins.interaction;
            im.stageRotation = rotDeg;
            im.stageScaleX = this.$scaleX;
            im.stageScaleY = this.$scaleY;
            this.$appContext.renderer.resize(stageWidth, stageHeight);
            fgui.HTMLInput.inst.updateSize(displayWidth / stageWidth, displayHeight / stageHeight);
            this.emit(fgui.DisplayObjectEvent.SIZE_CHANGED, this);
        }
        formatData(value) {
            if (Math.abs(value) < 0.000001)
                return 0;
            if (Math.abs(1 - value) < 0.001)
                return value > 0 ? 1 : -1;
            return value;
        }
        dispose() {
            let i = UIStageInst.length;
            while (i-- >= 0) {
                if (UIStageInst[i] === this)
                    UIStageInst.splice(i, 1);
            }
        }
    }
    fgui.UIStage = UIStage;
    let UIStageInst = [];
    let resizeCheckTimer = NaN;
})(fgui || (fgui = {}));

(function (fgui) {
    const isEmojiChar = function (charCode, nextCharCode) {
        const hs = charCode;
        const nextCharValid = typeof nextCharCode === 'number' && !isNaN(nextCharCode) && nextCharCode > 0;
        if (hs >= 0xd800 && hs <= 0xdbff) {
            if (nextCharValid) {
                const uc = ((hs - 0xd800) * 0x400) + (nextCharCode - 0xdc00) + 0x10000;
                if (uc >= 0x1d000 && uc <= 0x1f77f) {
                    return 2;
                }
            }
        }
        else if ((hs >= 0x2100 && hs <= 0x27ff)
            || (hs >= 0x2B05 && hs <= 0x2b07)
            || (hs >= 0x2934 && hs <= 0x2935)
            || (hs >= 0x3297 && hs <= 0x3299)
            || hs === 0xa9 || hs === 0xae || hs === 0x303d || hs === 0x3030
            || hs === 0x2b55 || hs === 0x2b1c || hs === 0x2b1b
            || hs === 0x2b50 || hs === 0x231a) {
            return 1;
        }
        else if (nextCharValid && (nextCharCode === 0x20e3 || nextCharCode === 0xfe0f || nextCharCode === 0xd83c)) {
            return 2;
        }
        return 0;
    };
    PIXI.TextMetrics.canBreakChars = function (char, nextChar, token, index, breakWords) {
        if (isEmojiChar(char.charCodeAt(0), nextChar && nextChar.charCodeAt(0)) == 2)
            return false;
        return true;
    };
    PIXI.TextMetrics.isBreakingSpace = function (char) {
        if (typeof char !== 'string')
            return false;
        if (char === ' ')
            return false;
        return (PIXI.TextMetrics["_breakingSpaces"].indexOf(char.charCodeAt(0)) >= 0);
    };
    class UITextField extends PIXI.Text {
        constructor(owner) {
            super("");
            this.$minHeightID = -1;
            this.$width = 0;
            this.$height = 0;
            this.UIOwner = owner;
            this.interactive = this.interactiveChildren = false;
            this.texture.noFrame = false;
            this.$width = this.texture.frame.width;
            this.$height = this.texture.frame.height;
            this.$minHeight = -1;
            this.texture.on("update", this.updateFrame, this);

        }
        get minHeight() {
            return this.$minHeight;
        }
        $updateMinHeight() {
            if (this.style && this.style.styleID != this.$minHeightID || this.$minHeight <= 0) {
                this.$minHeight = PIXI.TextMetrics.measureText("", this.style, false).lineHeight;
                this.$minHeightID = this.style.styleID;
            }
        }
        updateFrame() {
            fgui.GTimer.inst.callLater(this.internalUpdateFrame, this);
        }
        internalUpdateFrame() {
            if (this.texture) {
                let frm = this.texture.frame;
                this.$height = Math.max(this.$height, this.$minHeight);
                let w = frm.x + this.$width, h = frm.y + this.$height;
                if (w > this.texture.baseTexture.width)
                    w = this.texture.baseTexture.width - frm.x;
                if (h > this.texture.baseTexture.height)
                    h = this.texture.baseTexture.height - frm.y;
                frm.width = w / this.resolution;
                frm.height = h / this.resolution;
                this.texture.trim.width = frm.width;
                this.texture.trim.height = frm.height;
                let padding = this.style.trim ? 0 : this.style.padding;
                this.texture.trim.x = -padding;
                this.texture.trim.y = -padding;
                this.texture.frame = frm;
            }
        }
        _onTextureUpdate() {
            this._textureID = -1;
            this._textureTrimmedID = -1;
        }
        get width() {
            return this.$width;
        }
        set width(v) {
            this.$width = v;
            this.updateFrame();
        }
        get height() {
            return this.$height;
        }
        set height(v) {
            this.$height = v;
            this.updateFrame();
        }
        get textHeight() {
            this.updateText(true);
            return this.texture.orig.height;
        }
        set textHeight(v) {
        }
        get textWidth() {
            this.updateText(true);
            return this.texture.orig.width;
        }
        set textWidth(v) {
            if (v != this.style.wordWrapWidth)
                this.style.wordWrapWidth = v;
        }
    }
    fgui.UITextField = UITextField;
})(fgui || (fgui = {}));

(function (fgui) {
    class DisplayObjectEvent {
    }
    DisplayObjectEvent.XY_CHANGED = "__xyChanged";
    DisplayObjectEvent.SIZE_CHANGED = "__sizeChanged";
    DisplayObjectEvent.VISIBLE_CHANGED = "__visibleChanged";
    DisplayObjectEvent.SIZE_DELAY_CHANGE = "__sizeDelayChange";
    DisplayObjectEvent.MOUSE_WHEEL = "__mouseWheel";
    fgui.DisplayObjectEvent = DisplayObjectEvent;
})(fgui || (fgui = {}));

(function (fgui) {
    class DragEvent {
    }
    DragEvent.START = "__dragStart";
    DragEvent.END = "__dragEnd";
    DragEvent.MOVING = "__dragMoving";
    DragEvent.DROP = "__dragDrop";
    fgui.DragEvent = DragEvent;
})(fgui || (fgui = {}));

(function (fgui) {
    class GearEvent {
    }
    GearEvent.GEAR_STOP = "__gearStop";
    fgui.GearEvent = GearEvent;
})(fgui || (fgui = {}));

(function (fgui) {
    class ListEvent {
    }
    ListEvent.ItemClick = "__itemClick";
    fgui.ListEvent = ListEvent;
})(fgui || (fgui = {}));

(function (fgui) {
    class ScrollEvent {
    }
    ScrollEvent.SCROLL = "__scroll";
    ScrollEvent.SCROLL_END = "__scrollEnd";
    ScrollEvent.PULL_DOWN_RELEASE = "__pullDownRelease";
    ScrollEvent.PULL_UP_RELEASE = "__pullUpRelease";
    fgui.ScrollEvent = ScrollEvent;
})(fgui || (fgui = {}));

(function (fgui) {
    class TextEvent {
    }
    TextEvent.LinkClick = "__linkClick";
    TextEvent.Change = "__textChange";
    TextEvent.FocusIn = "__textFocusIn";
    TextEvent.FocusOut = "__textFocusOut";
    fgui.TextEvent = TextEvent;
})(fgui || (fgui = {}));

(function (fgui) {
    class DisplayListItem {
        constructor(packageItem, type) {
            this.packageItem = packageItem;
            this.type = type;
        }
    }
    fgui.DisplayListItem = DisplayListItem;
})(fgui || (fgui = {}));

(function (fgui) {
    class PackageItem {
        constructor() {
            this.width = 0;
            this.height = 0;
            this.tiledSlices = 0;
            this.interval = 0;
            this.repeatDelay = 0;
        }
        load() {
            return this.owner.getItemAsset(this);
        }
        toString() {
            return this.name;
        }
    }
    fgui.PackageItem = PackageItem;
})(fgui || (fgui = {}));

(function (fgui) {
    class UIObjectFactory {
        static setPackageItemExtension(url, type) {
            UIObjectFactory.packageItemExtensions[url.substring(5)] = type;
        }
        static setLoaderExtension(type) {
            UIObjectFactory.loaderExtension = type;
        }
        static newObject(pi) {
            switch (pi.type) {
                case 0:
                    return new fgui.GImage();
                case 2:
                    return new fgui.GMovieClip();
                case 4:
                    let cls = UIObjectFactory.packageItemExtensions[pi.owner.id + pi.id] || UIObjectFactory.packageItemExtensions[pi.owner.name + "/" + pi.name];
                    if (cls)
                        return new cls();
                    let xml = pi.owner.getItemAsset(pi);
                    let extention = xml.attributes.extention;
                    if (extention != null) {
                        switch (extention) {
                            case "Button":
                                return new fgui.GButton();
                            case "ProgressBar":
                                return new fgui.GProgressBar();
                            case "Label":
                                return new fgui.GLabel();
                            case "Slider":
                                return new fgui.GSlider();
                            case "ScrollBar":
                                return new fgui.GScrollBar();
                            case "ComboBox":
                                return new fgui.GComboBox();
                            default:
                                return new fgui.GComponent();
                        }
                    }
                    else
                        return new fgui.GComponent();
            }
            return null;
        }
        static newObjectDirectly(type) {
            switch (type) {
                case "image":
                    return new fgui.GImage();
                case "movieclip":
                    return new fgui.GMovieClip();
                case "component":
                    return new fgui.GComponent();
                case "text":
                    return new fgui.GTextField();
                case "list":
                    return new fgui.GList();
                case "richtext":
                    return new fgui.GRichTextField();
                case "inputtext":
                    return new fgui.GTextInput();
                case "group":
                    return new fgui.GGroup();
                case "graph":
                    return new fgui.GGraph();
                case "loader":
                    if (UIObjectFactory.loaderExtension != null)
                        return new UIObjectFactory.loaderExtension();
                    else
                        return new fgui.GLoader();
            }
            return null;
        }
    }
    UIObjectFactory.packageItemExtensions = {};
    fgui.UIObjectFactory = UIObjectFactory;
})(fgui || (fgui = {}));

(function (fgui) {
    const fflate = (function () {
        var u8 = Uint8Array;
        var u16 = Uint16Array;
        var u32 = Uint32Array;
        const fleb = new u8([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]);
        const fdeb = new u8([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]);
        var clim = new u8([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
        var freb = function (eb, start) {
            var b = new u16(31);
            for (var i = 0; i < 31; ++i) {
                b[i] = start += 1 << eb[i - 1];
            }
            var r = new u32(b[30]);
            for (var i = 1; i < 30; ++i) {
                for (var j = b[i]; j < b[i + 1]; ++j) {
                    r[j] = j - b[i] << 5 | i;
                }
            }
            return [b, r];
        };
        var _a = freb(fleb, 2);
        var fl = _a[0];
        var revfl = _a[1];
        fl[28] = 258, revfl[258] = 28;
        var _b = freb(fdeb, 0);
        var fd = _b[0];
        var revfd = _b[1];
        var rev = new u16(32768);
        for (i = 0; i < 32768; ++i) {
            x = (i & 43690) >>> 1 | (i & 21845) << 1;
            x = (x & 52428) >>> 2 | (x & 13107) << 2;
            x = (x & 61680) >>> 4 | (x & 3855) << 4;
            rev[i] = ((x & 65280) >>> 8 | (x & 255) << 8) >>> 1;
        }
        var x;
        var i;
        var hMap = function (cd, mb, r) {
            var s = cd.length;
            var i = 0;
            var l = new u16(mb);
            for (; i < s; ++i) {
                if (cd[i])
                    ++l[cd[i] - 1];
            }
            var le = new u16(mb);
            for (i = 0; i < mb; ++i) {
                le[i] = le[i - 1] + l[i - 1] << 1;
            }
            var co;
            if (r) {
                co = new u16(1 << mb);
                var rvb = 15 - mb;
                for (i = 0; i < s; ++i) {
                    if (cd[i]) {
                        var sv = i << 4 | cd[i];
                        var r_1 = mb - cd[i];
                        var v = le[cd[i] - 1]++ << r_1;
                        for (var m = v | (1 << r_1) - 1; v <= m; ++v) {
                            co[rev[v] >>> rvb] = sv;
                        }
                    }
                }
            }
            else {
                co = new u16(s);
                for (i = 0; i < s; ++i) {
                    if (cd[i]) {
                        co[i] = rev[le[cd[i] - 1]++] >>> 15 - cd[i];
                    }
                }
            }
            return co;
        };
        var flt = new u8(288);
        for (i = 0; i < 144; ++i)
            flt[i] = 8;
        var i;
        for (i = 144; i < 256; ++i)
            flt[i] = 9;
        var i;
        for (i = 256; i < 280; ++i)
            flt[i] = 7;
        var i;
        for (i = 280; i < 288; ++i)
            flt[i] = 8;
        var i;
        var fdt = new u8(32);
        for (i = 0; i < 32; ++i)
            fdt[i] = 5;
        var i;
        var flrm = hMap(flt, 9, 1);
        var fdrm = hMap(fdt, 5, 1);
        var max = function (a) {
            var m = a[0];
            for (var i = 1; i < a.length; ++i) {
                if (a[i] > m)
                    m = a[i];
            }
            return m;
        };
        var bits = function (d, p, m) {
            var o = p / 8 | 0;
            return (d[o] | d[o + 1] << 8) >> (p & 7) & m;
        };
        var bits16 = function (d, p) {
            var o = p / 8 | 0;
            return (d[o] | d[o + 1] << 8 | d[o + 2] << 16) >> (p & 7);
        };
        var shft = function (p) {
            return (p + 7) / 8 | 0;
        };
        var slc = function (v, s, e) {
            if (s == null || s < 0)
                s = 0;
            if (e == null || e > v.length)
                e = v.length;
            var n = new (v.BYTES_PER_ELEMENT == 2 ? u16 : v.BYTES_PER_ELEMENT == 4 ? u32 : u8)(e - s);
            n.set(v.subarray(s, e));
            return n;
        };
        var ec = [
            "unexpected EOF",
            "invalid block type",
            "invalid length/literal",
            "invalid distance",
            "stream finished",
            "no stream handler",
            ,
            "no callback",
            "invalid UTF-8 data",
            "extra field too long",
            "date not in range 1980-2099",
            "filename too long",
            "stream finishing",
            "invalid zip data"
        ];
        ;
        const err = (ind, msg, nt) => {
            const e = new Error(msg || ec[ind]);
            e.code = ind;
            if (Error.captureStackTrace)
                Error.captureStackTrace(e, err);
            if (!nt)
                throw e;
            return e;
        };
        const inflt = (dat, buf, st) => {
            const sl = dat.length;
            if (!sl || (st && st.f && !st.l))
                return buf || new u8(0);
            const noBuf = !buf || st;
            const noSt = !st || st.i;
            if (!st)
                st = {};
            if (!buf)
                buf = new u8(sl * 3);
            const cbuf = (l) => {
                let bl = buf.length;
                if (l > bl) {
                    const nbuf = new u8(Math.max(bl * 2, l));
                    nbuf.set(buf);
                    buf = nbuf;
                }
            };
            let final = st.f || 0, pos = st.p || 0, bt = st.b || 0, lm = st.l, dm = st.d, lbt = st.m, dbt = st.n;
            const tbts = sl * 8;
            do {
                if (!lm) {
                    final = bits(dat, pos, 1);
                    const type = bits(dat, pos + 1, 3);
                    pos += 3;
                    if (!type) {
                        const s = shft(pos) + 4, l = dat[s - 4] | (dat[s - 3] << 8), t = s + l;
                        if (t > sl) {
                            if (noSt)
                                err(0);
                            break;
                        }
                        if (noBuf)
                            cbuf(bt + l);
                        buf.set(dat.subarray(s, t), bt);
                        st.b = bt += l, st.p = pos = t * 8, st.f = final;
                        continue;
                    }
                    else if (type == 1)
                        lm = flrm, dm = fdrm, lbt = 9, dbt = 5;
                    else if (type == 2) {
                        const hLit = bits(dat, pos, 31) + 257, hcLen = bits(dat, pos + 10, 15) + 4;
                        const tl = hLit + bits(dat, pos + 5, 31) + 1;
                        pos += 14;
                        const ldt = new u8(tl);
                        const clt = new u8(19);
                        for (let i = 0; i < hcLen; ++i) {
                            clt[clim[i]] = bits(dat, pos + i * 3, 7);
                        }
                        pos += hcLen * 3;
                        const clb = max(clt), clbmsk = (1 << clb) - 1;
                        const clm = hMap(clt, clb, 1);
                        for (let i = 0; i < tl;) {
                            const r = clm[bits(dat, pos, clbmsk)];
                            pos += r & 15;
                            const s = r >>> 4;
                            if (s < 16) {
                                ldt[i++] = s;
                            }
                            else {
                                let c = 0, n = 0;
                                if (s == 16)
                                    n = 3 + bits(dat, pos, 3), pos += 2, c = ldt[i - 1];
                                else if (s == 17)
                                    n = 3 + bits(dat, pos, 7), pos += 3;
                                else if (s == 18)
                                    n = 11 + bits(dat, pos, 127), pos += 7;
                                while (n--)
                                    ldt[i++] = c;
                            }
                        }
                        const lt = ldt.subarray(0, hLit), dt = ldt.subarray(hLit);
                        lbt = max(lt);
                        dbt = max(dt);
                        lm = hMap(lt, lbt, 1);
                        dm = hMap(dt, dbt, 1);
                    }
                    else
                        err(1);
                    if (pos > tbts) {
                        if (noSt)
                            err(0);
                        break;
                    }
                }
                if (noBuf)
                    cbuf(bt + 131072);
                const lms = (1 << lbt) - 1, dms = (1 << dbt) - 1;
                let lpos = pos;
                for (; ; lpos = pos) {
                    const c = lm[bits16(dat, pos) & lms], sym = c >>> 4;
                    pos += c & 15;
                    if (pos > tbts) {
                        if (noSt)
                            err(0);
                        break;
                    }
                    if (!c)
                        err(2);
                    if (sym < 256)
                        buf[bt++] = sym;
                    else if (sym == 256) {
                        lpos = pos, lm = null;
                        break;
                    }
                    else {
                        let add = sym - 254;
                        if (sym > 264) {
                            const i = sym - 257, b = fleb[i];
                            add = bits(dat, pos, (1 << b) - 1) + fl[i];
                            pos += b;
                        }
                        const d = dm[bits16(dat, pos) & dms], dsym = d >>> 4;
                        if (!d)
                            err(3);
                        pos += d & 15;
                        let dt = fd[dsym];
                        if (dsym > 3) {
                            const b = fdeb[dsym];
                            dt += bits16(dat, pos) & ((1 << b) - 1), pos += b;
                        }
                        if (pos > tbts) {
                            if (noSt)
                                err(0);
                            break;
                        }
                        if (noBuf)
                            cbuf(bt + 131072);
                        const end = bt + add;
                        for (; bt < end; bt += 4) {
                            buf[bt] = buf[bt - dt];
                            buf[bt + 1] = buf[bt + 1 - dt];
                            buf[bt + 2] = buf[bt + 2 - dt];
                            buf[bt + 3] = buf[bt + 3 - dt];
                        }
                        bt = end;
                    }
                }
                st.l = lm, st.p = lpos, st.b = bt, st.f = final;
                if (lm)
                    final = 1, st.m = lbt, st.d = dm, st.n = dbt;
            } while (!final);
            return bt == buf.length ? buf : slc(buf, 0, bt);
        };
        var et = new u8(0);
        function inflateSync(data, out) {
            return inflt(data, out);
        }
        var td = typeof TextDecoder != "undefined" && new TextDecoder();
        var tds = 0;
        try {
            td.decode(et, { stream: true });
            tds = 1;
        }
        catch (e) {
        }
        return {
            inflateSync
        };
    })();
    class AtlasConfig {
        constructor(atlasName, frame, orig, trim, rotate) {
            this.atlasName = atlasName;
            this.frame = frame;
            this.orig = orig;
            this.trim = trim;
            this.rotate = rotate;
        }
    }
    class UIPackage {
        constructor() {
            this.$items = [];
            this.$atlasConfigs = {};
        }
        static getById(id) {
            return UIPackage.$packageInstById[id];
        }
        static getByName(name) {
            return UIPackage.$packageInstByName[name];
        }
        static addPackage(resKey) {
            let pkg = new UIPackage();
            pkg.create(resKey);
            UIPackage.$packageInstById[pkg.id] = pkg;
            UIPackage.$packageInstByName[pkg.name] = pkg;
            pkg.customId = resKey;
            return pkg;
        }
        static removePackage(packageId) {
            let pkg = UIPackage.$packageInstById[packageId];
            pkg.dispose();
            delete UIPackage.$packageInstById[pkg.id];
            if (pkg.$customId != null)
                delete UIPackage.$packageInstById[pkg.$customId];
            delete UIPackage.$packageInstByName[pkg.name];
        }
        static createObject(pkgName, resName, userClass) {
            let pkg = UIPackage.getByName(pkgName);
            if (pkg)
                return pkg.createObject(resName, userClass);
            else
                return null;
        }
        static createObjectFromURL(url, userClass) {
            let pi = UIPackage.getItemByURL(url);
            if (pi)
                return pi.owner.internalCreateObject(pi, userClass);
            else
                return null;
        }
        static getItemURL(pkgName, resName) {
            let pkg = UIPackage.getByName(pkgName);
            if (!pkg)
                return null;
            let pi = pkg.$itemsByName[resName];
            if (!pi)
                return null;
            return `ui://${pkg.id}${pi.id}`;
        }
        static getItemByURL(url) {
            let pos1 = url.indexOf("//");
            if (pos1 == -1)
                return null;
            let pos2 = url.indexOf("/", pos1 + 2);
            let pkg;
            if (pos2 == -1) {
                if (url.length > 13) {
                    let pkgId = url.substr(5, 8);
                    pkg = UIPackage.getById(pkgId);
                    if (pkg != null) {
                        let srcId = url.substr(13);
                        return pkg.getItemById(srcId);
                    }
                }
            }
            else {
                let pkgName = url.substr(pos1 + 2, pos2 - pos1 - 2);
                pkg = UIPackage.getByName(pkgName);
                if (pkg != null) {
                    let srcName = url.substr(pos2 + 1);
                    return pkg.getItemByName(srcName);
                }
            }
            return null;
        }
        static getBitmapFontByURL(url) {
            return UIPackage.$bitmapFonts[url];
        }
        static setStringsSource(source) {
            UIPackage.$stringsSource = {};
            let xmlroot = fgui.utils.XmlParser.tryParse(source);
            xmlroot.children.forEach(cxml => {
                if (cxml.nodeName == "string") {
                    let key = cxml.attributes.name;
                    let i = key.indexOf("-");
                    if (i == -1)
                        return;
                    let text = cxml.text;
                    let key2 = key.substring(0, i);
                    let key3 = key.substring(i + 1);
                    let col = UIPackage.$stringsSource[key2];
                    if (!col) {
                        col = {};
                        UIPackage.$stringsSource[key2] = col;
                    }
                    col[key3] = text;
                }
            });
        }
        static normalizeURL(url) {
            if (url == null)
                return null;
            let pos1 = url.indexOf("//");
            if (pos1 == -1)
                return null;
            let pos2 = url.indexOf("/", pos1 + 2);
            if (pos2 == -1)
                return url;
            let pkgName = url.substr(pos1 + 2, pos2 - pos1 - 2);
            let srcName = url.substr(pos2 + 1);
            return UIPackage.getItemURL(pkgName, srcName);
        }
        create(resKey) {
            this.$resKey = resKey;
            let buf = fgui.utils.Assets.get(this.$resKey);
            if (!buf)
                buf = fgui.utils.Assets.get(`${this.$resKey}_fui`);
            if (!buf)
                throw new Error(`Resource '${this.$resKey}' not found, please make sure that you use "new fgui.utils.AssetLoader" to load resources instead of " PIXI.loaders.Loader".`);
            // if (!(buf instanceof ArrayBuffer || buf instanceof Uint8Array))
            //     buf = ArrayBuffer.from(buf)
            //throw new Error(typeof buf + ` Resource '${this.$resKey}' is not a proper binary resource, please load it as binary format by calling yourLoader.add(name, url, { loadType:PIXI.loaders.Resource.LOAD_TYPE.XHR, xhrType: PIXI.loaders.Resource.XHR_RESPONSE_TYPE.BUFFER })`);
            this.decompressPackage(buf);
            let str = this.getResDescriptor("sprites.bytes");
            str && str.split(UIPackage.sep1).forEach((str, index) => {
                if (index >= 1 && str && str.length) {
                    let arr = str.split(UIPackage.sep2);
                    let texID;
                    let itemId = arr[0];
                    let binIndex = parseInt(arr[1]);
                    if (binIndex >= 0)
                        texID = `atlas${binIndex}`;
                    else {
                        let pos = itemId.indexOf("_");
                        if (pos == -1)
                            texID = `atlas_${itemId}`;
                        else
                            texID = `atlas_${itemId.substr(0, pos)}`;
                    }
                    let cfg = new AtlasConfig(texID);
                    cfg.frame = new PIXI.Rectangle(parseInt(arr[2]), parseInt(arr[3]), parseInt(arr[4]), parseInt(arr[5]));
                    cfg.rotate = arr[6] == "1" ? 6 : 0;
                    cfg.orig = cfg.rotate != 0 ? new PIXI.Rectangle(0, 0, cfg.frame.height, cfg.frame.width) : null;
                    this.$atlasConfigs[itemId] = cfg;
                }
            });
            str = this.getResDescriptor("package.xml");
            let xml = fgui.utils.XmlParser.tryParse(str);
            this.$id = xml.attributes.id;
            this.$name = xml.attributes.name;
            let resources = xml.children[0].children;
            this.$itemsById = {};
            this.$itemsByName = {};
            resources.forEach(cxml => {
                let pi = new fgui.PackageItem();
                pi.type = fgui.ParsePackageItemType(cxml.nodeName);
                pi.id = cxml.attributes.id;
                pi.name = cxml.attributes.name;
                pi.file = cxml.attributes.file;
                str = cxml.attributes.size;
                if (str) {
                    let arr = str.split(UIPackage.sep0);
                    pi.width = parseInt(arr[0]);
                    pi.height = parseInt(arr[1]);
                }
                switch (pi.type) {
                    case 0: {
                        str = cxml.attributes.scale;
                        if (str == "9grid") {
                            str = cxml.attributes.scale9grid;
                            if (str) {
                                let arr = str.split(UIPackage.sep0);
                                let rect = new PIXI.Rectangle(parseInt(arr[0]), parseInt(arr[1]), parseInt(arr[2]), parseInt(arr[3]));
                                pi.scale9Grid = rect;
                                str = cxml.attributes.gridTile;
                                if (str)
                                    pi.tiledSlices = parseInt(str);
                            }
                        }
                        else if (str == "tile")
                            pi.scaleByTile = true;
                        break;
                    }
                }
                pi.owner = this;
                this.$items.push(pi);
                this.$itemsById[pi.id] = pi;
                if (pi.name != null)
                    this.$itemsByName[pi.name] = pi;
            }, this);
            this.$items.forEach(pi => {
                if (pi.type == 6) {
                    this.loadFont(pi);
                    UIPackage.$bitmapFonts[pi.bitmapFont.id] = pi.bitmapFont;
                }
            }, this);
        }
        decompressPackage(buf) {
            this.$resData = {};
            var data = fflate.inflateSync(new Uint8Array(buf));
            let source = fgui.utils.RawByte.decodeUTF8(data);
            let curr = 0;
            let fn;
            let size;
            while (true) {
                let pos = source.indexOf("|", curr);
                if (pos == -1)
                    break;
                fn = source.substring(curr, pos);
                curr = pos + 1;
                pos = source.indexOf("|", curr);
                size = parseInt(source.substring(curr, pos));
                curr = pos + 1;
                this.$resData[fn] = source.substr(curr, size);
                curr += size;
            }
        }
        dispose() {
            this.$items.forEach(pi => {
                let texture = pi.texture;
                if (texture != null) {
                    texture.destroy();
                    PIXI.Texture.removeFromCache(texture);
                }
                else if (pi.frames != null) {
                    pi.frames.forEach(f => {
                        texture = f.texture;
                        if (texture) {
                            texture.destroy();
                            PIXI.Texture.removeFromCache(texture);
                        }
                    });
                }
                else if (pi.bitmapFont != null)
                    delete UIPackage.$bitmapFonts[pi.bitmapFont.id];
                let cfg = this.$atlasConfigs[pi.id];
                if (cfg)
                    fgui.utils.Assets.unload(`${this.$resKey}@${cfg.atlasName}`);
            }, this);
            fgui.utils.Assets.unload(`${this.$resKey}`);
        }
        get id() {
            return this.$id;
        }
        get name() {
            return this.$name;
        }
        get customId() {
            return this.$customId;
        }
        set customId(value) {
            if (this.$customId != null)
                delete UIPackage.$packageInstById[this.$customId];
            this.$customId = value;
            if (this.$customId != null)
                UIPackage.$packageInstById[this.$customId] = this;
        }
        createObject(resName, userClass) {
            let pi = this.$itemsByName[resName];
            if (pi)
                return this.internalCreateObject(pi, userClass);
            else
                return null;
        }
        internalCreateObject(item, userClass = null) {
            let g = item.type == 4 && userClass != null ? new userClass() : fgui.UIObjectFactory.newObject(item);
            if (g == null)
                return null;
            UIPackage.$constructingObjects++;
            g.packageItem = item;
            g.constructFromResource();
            UIPackage.$constructingObjects--;
            return g;
        }
        getItemById(itemId) {
            return this.$itemsById[itemId];
        }
        getItemByName(resName) {
            return this.$itemsByName[resName];
        }
        getItemAssetByName(resName) {
            let pi = this.$itemsByName[resName];
            if (pi == null)
                throw new Error(`Resource '${resName}' not found`);
            return this.getItemAsset(pi);
        }
        createSpriteTexture(cfgName, cfg) {
            let atlasItem = this.$itemsById[cfg.atlasName];
            if (atlasItem != null) {
                let atlasTexture = this.getItemAsset(atlasItem);
                if (!atlasTexture || !atlasTexture.baseTexture)
                    return null;
                if (!cfg.texCacheID)
                    cfg.texCacheID = `${this.$resKey}@${cfg.atlasName}@${cfgName}`;
                let tex = PIXI.utils.TextureCache[cfg.texCacheID];
                if (!tex) {
                    tex = new PIXI.Texture(atlasTexture.baseTexture, cfg.frame, cfg.orig, cfg.trim, cfg.rotate);
                    PIXI.Texture.addToCache(tex, cfg.texCacheID);
                }
                return tex;
            }
            else
                return null;
        }
        getItemAsset(item) {
            switch (item.type) {
                case 0:
                    if (!item.decoded) {
                        item.decoded = true;
                        let cfg = this.$atlasConfigs[item.id];
                        if (cfg != null)
                            item.texture = this.createSpriteTexture(item.id, cfg);
                    }
                    return item.texture;
                case 7:
                    if (!item.decoded) {
                        item.decoded = true;
                        let fileName = (item.file != null && item.file.length > 0) ? item.file : (`${item.id}.png`);
                        let resName = `${this.$resKey}@${fgui.utils.StringUtil.getFileName(fileName)}`;
                        let res = fgui.utils.Assets.get(resName);
                        if (!res)
                            throw new Error(`${resName} not found in fgui.utils.AssetLoader.resourcesPool, please use new AssetLoader() to load assets instead of using new PIXI.loaders.Loader(). besides, AssetLoader is a sub-class from PIXI.loaders.Loader so they have the same usage.`);
                        item.texture = res;
                        if (!item.texture) {
                            res = fgui.utils.Assets.get(`${this.$resKey}@${fileName.replace("\.", "_")}`);
                            item.texture = res;
                        }
                    }
                    return item.texture;
                case 3:
                    item.decoded = false;
                    return null;
                case 6:
                    if (!item.decoded) {
                        item.decoded = true;
                        this.loadFont(item);
                    }
                    return item.bitmapFont;
                case 2:
                    if (!item.decoded) {
                        item.decoded = true;
                        this.loadMovieClip(item);
                    }
                    return item.frames;
                case 4:
                    if (!item.decoded) {
                        item.decoded = true;
                        let str = this.getResDescriptor(`${item.id}.xml`);
                        let xml = fgui.utils.XmlParser.tryParse(str);
                        item.componentData = xml;
                        this.loadComponentChildren(item);
                        this.loadComponentTranslation(item);
                    }
                    return item.componentData;
                default:
                    return fgui.utils.Assets.get(`${this.$resKey}@${item.id}`);
            }
        }
        loadComponentChildren(item) {
            let listNode = item.componentData.getChildNodes("displayList");
            if (listNode != null && listNode.length > 0) {
                item.displayList = [];
                listNode[0].children.forEach(cxml => {
                    let tagName = cxml.nodeName;
                    let di;
                    let src = cxml.attributes.src;
                    if (src) {
                        let pkgId = cxml.attributes.pkg;
                        let pkg;
                        if (pkgId && pkgId != item.owner.id)
                            pkg = UIPackage.getById(pkgId);
                        else
                            pkg = item.owner;
                        let pi = pkg != null ? pkg.getItemById(src) : null;
                        if (pi != null)
                            di = new fgui.DisplayListItem(pi, null);
                        else
                            di = new fgui.DisplayListItem(null, tagName);
                    }
                    else {
                        if (tagName == "text" && cxml.attributes.input == "true")
                            di = new fgui.DisplayListItem(null, "inputtext");
                        else
                            di = new fgui.DisplayListItem(null, tagName);
                    }
                    di.desc = cxml;
                    item.displayList.push(di);
                });
            }
            else
                item.displayList = [];
        }
        getResDescriptor(fn) {
            return this.$resData[fn];
        }
        loadComponentTranslation(item) {
            if (UIPackage.$stringsSource == null)
                return;
            let strings = UIPackage.$stringsSource[this.id + item.id];
            if (strings == null)
                return;
            let value;
            let cxml, dxml;
            let ename;
            let elementId;
            let str;
            item.displayList.forEach(item => {
                cxml = item.desc;
                ename = cxml.nodeName;
                elementId = cxml.attributes.id;
                str = cxml.attributes.tooltips;
                if (str) {
                    value = strings[`${elementId}-tips`];
                    if (value != undefined)
                        cxml.attributes.tooltips = value;
                }
                let cs = cxml.getChildNodes("gearText");
                dxml = cs && cs[0];
                if (dxml) {
                    value = strings[`${elementId}-texts`];
                    if (value != undefined)
                        dxml.attributes.values = value;
                    value = strings[`${elementId}-texts_def`];
                    if (value != undefined)
                        dxml.attributes.default = value;
                }
                if (ename == "text" || ename == "richtext") {
                    value = strings[elementId];
                    if (value != undefined)
                        cxml.attributes.text = value;
                    value = strings[`${elementId}-prompt`];
                    if (value != undefined)
                        cxml.attributes.prompt = value;
                }
                else if (ename == "list") {
                    cxml.children.forEach((exml, index) => {
                        if (exml.nodeName != "item")
                            return;
                        value = strings[`${elementId}-${index}`];
                        if (value != undefined)
                            exml.attributes.title = value;
                    });
                }
                else if (ename == "component") {
                    cs = cxml.getChildNodes("Button");
                    dxml = cs && cs[0];
                    if (dxml) {
                        value = strings[elementId];
                        if (value != undefined)
                            dxml.attributes.title = value;
                        value = strings[`${elementId}-0`];
                        if (value != undefined)
                            dxml.attributes.selectedTitle = value;
                        return;
                    }
                    cs = cxml.getChildNodes("Label");
                    dxml = cs && cs[0];
                    if (dxml) {
                        value = strings[elementId];
                        if (value != undefined)
                            dxml.attributes.title = value;
                        return;
                    }
                    cs = cxml.getChildNodes("ComboBox");
                    dxml = cs && cs[0];
                    if (dxml) {
                        value = strings[elementId];
                        if (value != undefined)
                            dxml.attributes.title = value;
                        dxml.children.forEach((exml, index) => {
                            if (exml.nodeName != "item")
                                return;
                            value = strings[`${elementId}-${index}`];
                            if (value != undefined)
                                exml.attributes.title = value;
                        });
                        return;
                    }
                }
            });
        }
        loadMovieClip(item) {
            let xml = fgui.utils.XmlParser.tryParse(this.getResDescriptor(`${item.id}.xml`));
            let str;
            str = xml.attributes.interval;
            if (str != null)
                item.interval = parseInt(str);
            str = xml.attributes.swing;
            if (str != null)
                item.swing = str == "true";
            str = xml.attributes.repeatDelay;
            if (str != null)
                item.repeatDelay = parseInt(str);
            item.frames = [];
            let frameNodes = xml.children[0].children;
            frameNodes.forEach((node, index) => {
                let frame = new fgui.Frame();
                str = node.attributes.rect;
                let arr = str.split(UIPackage.sep0);
                let trimRect = new PIXI.Rectangle(parseInt(arr[0]), parseInt(arr[1]), parseInt(arr[2]), parseInt(arr[3]));
                str = node.attributes.addDelay;
                if (str)
                    frame.addDelay = parseInt(str);
                item.frames.push(frame);
                if (trimRect.width <= 0)
                    return;
                str = node.attributes.sprite;
                if (str)
                    str = `${item.id}_${str}`;
                else
                    str = `${item.id}_${index}`;
                let cfg = this.$atlasConfigs[str];
                if (cfg != null) {
                    cfg.trim = trimRect;
                    frame.texture = this.createSpriteTexture(str, cfg);
                }
            });
        }
        loadFont(item) {
            let font = new fgui.BitmapFont();
            font.id = `ui://${this.id}${item.id}`;
            let str = this.getResDescriptor(`${item.id}.fnt`);
            let lines = str.split(UIPackage.sep1);
            let kv = {};
            let ttf = false;
            let size = 0;
            let xadvance = 0;
            let resizable = false;
            let colorable = false;
            let atlasOffsetX = 0, atlasOffsetY = 0;
            let charImg;
            let mainTexture;
            let lineHeight = 0;
            let maxCharHeight = 0;
            lines.forEach(line => {
                if (line && line.length) {
                    str = fgui.utils.StringUtil.trim(line);
                    let arr = str.split(UIPackage.sep2);
                    arr.forEach(v => {
                        let at = v.split(UIPackage.sep3);
                        kv[at[0]] = at[1];
                    });
                    str = arr[0];
                    if (str == "char") {
                        let bg = new fgui.BMGlyph();
                        bg.x = parseInt(kv.x) || 0;
                        bg.y = parseInt(kv.y) || 0;
                        bg.offsetX = parseInt(kv.xoffset) || 0;
                        bg.offsetY = parseInt(kv.yoffset) || 0;
                        bg.width = parseInt(kv.width) || 0;
                        bg.height = parseInt(kv.height) || 0;
                        maxCharHeight = Math.max(bg.height, maxCharHeight);
                        bg.advance = parseInt(kv.xadvance) || 0;
                        if (kv.chnl != undefined) {
                            bg.channel = parseInt(kv.chnl);
                            if (bg.channel == 15)
                                bg.channel = 4;
                            else if (bg.channel == 1)
                                bg.channel = 3;
                            else if (bg.channel == 2)
                                bg.channel = 2;
                            else
                                bg.channel = 1;
                        }
                        if (!ttf) {
                            if (kv.img) {
                                charImg = this.$itemsById[kv.img];
                                if (charImg != null) {
                                    charImg.load();
                                    bg.width = charImg.width;
                                    bg.height = charImg.height;
                                    bg.texture = charImg.texture;
                                }
                            }
                        }
                        else if (mainTexture != null) {
                            bg.texture = new PIXI.Texture(mainTexture.baseTexture, new PIXI.Rectangle(bg.x + atlasOffsetX, bg.y + atlasOffsetY, bg.width, bg.height));
                        }
                        if (ttf)
                            bg.lineHeight = lineHeight;
                        else {
                            if (bg.advance == 0) {
                                if (xadvance == 0)
                                    bg.advance = bg.offsetX + bg.width;
                                else
                                    bg.advance = xadvance;
                            }
                            bg.lineHeight = bg.offsetY < 0 ? bg.height : (bg.offsetY + bg.height);
                            if (size > 0 && bg.lineHeight < size)
                                bg.lineHeight = size;
                        }
                        font.glyphs[String.fromCharCode(+kv.id | 0)] = bg;
                    }
                    else if (str == "info") {
                        ttf = kv.face != null;
                        if (kv.size)
                            size = parseInt(kv.size);
                        resizable = kv.resizable == "true";
                        colorable = kv.colored == "true";
                        if (ttf) {
                            let cfg = this.$atlasConfigs[item.id];
                            if (cfg != null) {
                                atlasOffsetX = cfg.frame.x;
                                atlasOffsetY = cfg.frame.y;
                                let atlasItem = this.$itemsById[cfg.atlasName];
                                if (atlasItem != null)
                                    mainTexture = this.getItemAsset(atlasItem);
                            }
                        }
                    }
                    else if (str == "common") {
                        if (kv.lineHeight)
                            lineHeight = parseInt(kv.lineHeight);
                        if (size == 0)
                            size = lineHeight;
                        else if (lineHeight == 0)
                            lineHeight = size;
                        if (kv.xadvance)
                            xadvance = parseInt(kv.xadvance);
                    }
                }
            });
            if (size == 0 && maxCharHeight > 0)
                size = maxCharHeight;
            font.ttf = ttf;
            font.size = size;
            font.resizable = resizable;
            font.colorable = colorable;
            item.bitmapFont = font;
        }
    }
    UIPackage.$constructingObjects = 0;
    UIPackage.$packageInstById = {};
    UIPackage.$packageInstByName = {};
    UIPackage.$bitmapFonts = {};
    UIPackage.$stringsSource = null;
    UIPackage.sep0 = ",";
    UIPackage.sep1 = "\n";
    UIPackage.sep2 = " ";
    UIPackage.sep3 = "=";
    fgui.UIPackage = UIPackage;
})(fgui || (fgui = {}));

(function (fgui) {
    var utils;
    (function (utils) {
        utils.Assets = PIXI.Assets;
    })(utils = fgui.utils || (fgui.utils = {}));
})(fgui || (fgui = {}));

(function (fgui) {
    var utils;
    (function (utils) {
        class ColorMatrix {
            constructor(brightness = 0, contrast = 0, saturation = 0, hue = 0) {
                this._raw = [];
                this.h = 0;
                this.s = 0;
                this.c = 0;
                this.b = 0;
                this.setColor(brightness, contrast, saturation, hue);
            }
            get hue() { return this.h; }
            get brightness() { return this.b; }
            get contrast() { return this.c; }
            get saturation() { return this.s; }
            setColor(brightness, contrast, saturation, hue) {
                return this.reset().adjustColor(brightness, contrast, saturation, hue);
            }
            ;
            reset() {
                return this.copy(ColorMatrix.IDENTITY_MATRIX);
            }
            ;
            adjustColor(brightness, contrast, saturation, hue) {
                this.adjustHue(hue);
                this.adjustContrast(contrast);
                this.adjustBrightness(brightness);
                return this.adjustSaturation(saturation);
            }
            ;
            adjustBrightness(value) {
                if (value == 0 || isNaN(value)) {
                    return this;
                }
                this.b = value;
                value = this._cleanValue(value, 255);
                this._multiplyMatrix([
                    1, 0, 0, 0, value,
                    0, 1, 0, 0, value,
                    0, 0, 1, 0, value,
                    0, 0, 0, 1, 0,
                    0, 0, 0, 0, 1
                ]);
                return this;
            }
            ;
            adjustContrast(value) {
                if (value == 0 || isNaN(value)) {
                    return this;
                }
                this.c = value;
                value = this._cleanValue(value, 100);
                let x;
                const cst = 1;
                if (value < 0) {
                    x = cst + value / 100 * cst;
                }
                else {
                    x = value % 1;
                    if (x == 0) {
                        x = ColorMatrix.DELTA_INDEX[value];
                    }
                    else {
                        x = ColorMatrix.DELTA_INDEX[(value << 0)] * (1 - x) + ColorMatrix.DELTA_INDEX[(value << 0) + 1] * x;
                    }
                    x = x * cst + cst;
                }
                this._multiplyMatrix([
                    x / cst, 0, 0, 0, 0.5 * (cst - x),
                    0, x / cst, 0, 0, 0.5 * (cst - x),
                    0, 0, x / cst, 0, 0.5 * (cst - x),
                    0, 0, 0, 1, 0,
                    0, 0, 0, 0, 1
                ]);
                return this;
            }
            ;
            adjustSaturation(value) {
                if (value == 0 || isNaN(value)) {
                    return this;
                }
                this.s = value;
                value = this._cleanValue(value, 100);
                let x = 1 + ((value > 0) ? 3 * value / 100 : value / 100);
                let lumR = 0.3086;
                let lumG = 0.6094;
                let lumB = 0.0820;
                this._multiplyMatrix([
                    lumR * (1 - x) + x, lumG * (1 - x), lumB * (1 - x), 0, 0,
                    lumR * (1 - x), lumG * (1 - x) + x, lumB * (1 - x), 0, 0,
                    lumR * (1 - x), lumG * (1 - x), lumB * (1 - x) + x, 0, 0,
                    0, 0, 0, 1, 0,
                    0, 0, 0, 0, 1
                ]);
                return this;
            }
            ;
            adjustHue(value) {
                if (value == 0 || isNaN(value)) {
                    return this;
                }
                this.h = value;
                value = this._cleanValue(value, 180) / 180 * Math.PI;
                let cosVal = Math.cos(value);
                let sinVal = Math.sin(value);
                let lumR = 0.213;
                let lumG = 0.715;
                let lumB = 0.072;
                this._multiplyMatrix([
                    lumR + cosVal * (1 - lumR) + sinVal * (-lumR), lumG + cosVal * (-lumG) + sinVal * (-lumG), lumB + cosVal * (-lumB) + sinVal * (1 - lumB), 0, 0,
                    lumR + cosVal * (-lumR) + sinVal * (0.143), lumG + cosVal * (1 - lumG) + sinVal * (0.140), lumB + cosVal * (-lumB) + sinVal * (-0.283), 0, 0,
                    lumR + cosVal * (-lumR) + sinVal * (-(1 - lumR)), lumG + cosVal * (-lumG) + sinVal * (lumG), lumB + cosVal * (1 - lumB) + sinVal * (lumB), 0, 0,
                    0, 0, 0, 1, 0,
                    0, 0, 0, 0, 1
                ]);
                return this;
            }
            ;
            concat(matrix) {
                matrix = this._fixMatrix(matrix);
                if (matrix.length != ColorMatrix.LENGTH) {
                    return this;
                }
                this._multiplyMatrix(matrix);
                return this;
            }
            ;
            clone() {
                return (new ColorMatrix()).copy(this._raw);
            }
            ;
            toArray() {
                let arr = [];
                for (let i = 0, l = ColorMatrix.LENGTH; i < l; i++) {
                    arr[i] = this._raw[i];
                }
                return arr;
            }
            ;
            copy(matrix) {
                let l = ColorMatrix.LENGTH;
                for (let i = 0; i < l; i++) {
                    this._raw[i] = matrix[i];
                }
                return this;
            }
            ;
            _multiplyMatrix(matrix) {
                let i, j, k, col = [];
                for (i = 0; i < 5; i++) {
                    for (j = 0; j < 5; j++) {
                        col[j] = this._raw[j + i * 5];
                    }
                    for (j = 0; j < 5; j++) {
                        let val = 0;
                        for (k = 0; k < 5; k++) {
                            val += matrix[j + k * 5] * col[k];
                        }
                        this._raw[j + i * 5] = val;
                    }
                }
            }
            ;
            _cleanValue(value, limit) {
                return Math.min(limit, Math.max(-limit, value));
            }
            ;
            _fixMatrix(matrix) {
                if (matrix instanceof ColorMatrix) {
                    matrix = matrix.toArray();
                }
                if (matrix.length < ColorMatrix.LENGTH) {
                    matrix = matrix.slice(0, matrix.length).concat(ColorMatrix.IDENTITY_MATRIX.slice(matrix.length, ColorMatrix.LENGTH));
                }
                else if (matrix.length > ColorMatrix.LENGTH) {
                    matrix = matrix.slice(0, ColorMatrix.LENGTH);
                }
                return matrix;
            }
        }
        ColorMatrix.DELTA_INDEX = [
            0, 0.01, 0.02, 0.04, 0.05, 0.06, 0.07, 0.08, 0.1, 0.11,
            0.12, 0.14, 0.15, 0.16, 0.17, 0.18, 0.20, 0.21, 0.22, 0.24,
            0.25, 0.27, 0.28, 0.30, 0.32, 0.34, 0.36, 0.38, 0.40, 0.42,
            0.44, 0.46, 0.48, 0.5, 0.53, 0.56, 0.59, 0.62, 0.65, 0.68,
            0.71, 0.74, 0.77, 0.80, 0.83, 0.86, 0.89, 0.92, 0.95, 0.98,
            1.0, 1.06, 1.12, 1.18, 1.24, 1.30, 1.36, 1.42, 1.48, 1.54,
            1.60, 1.66, 1.72, 1.78, 1.84, 1.90, 1.96, 2.0, 2.12, 2.25,
            2.37, 2.50, 2.62, 2.75, 2.87, 3.0, 3.2, 3.4, 3.6, 3.8,
            4.0, 4.3, 4.7, 4.9, 5.0, 5.5, 6.0, 6.5, 6.8, 7.0,
            7.3, 7.5, 7.8, 8.0, 8.4, 8.7, 9.0, 9.4, 9.6, 9.8,
            10.0
        ];
        ColorMatrix.IDENTITY_MATRIX = [
            1, 0, 0, 0, 0,
            0, 1, 0, 0, 0,
            0, 0, 1, 0, 0,
            0, 0, 0, 1, 0,
            0, 0, 0, 0, 1
        ];
        ColorMatrix.LENGTH = ColorMatrix.IDENTITY_MATRIX.length;
        utils.ColorMatrix = ColorMatrix;
    })(utils = fgui.utils || (fgui.utils = {}));
})(fgui || (fgui = {}));

(function (fgui) {
    var utils;
    (function (utils) {
        class DragIndicator {
            constructor() {
                this.$agent = new fgui.GLoader();
                this.$agent.draggable = true;
                this.$agent.touchable = false;
                this.$agent.setSize(100, 100);
                this.$agent.setPivot(0.5, 0.5, true);
                this.$agent.align = "center";
                this.$agent.verticalAlign = 1;
                this.$agent.sortingOrder = 1000000;
                this.$agent.on(fgui.DragEvent.END, this.$dragEnd, this);
            }
            get dragAgent() {
                return this.$agent;
            }
            get isDragging() {
                return this.$agent.parent != null;
            }
            get sourceObject() {
                return this.$sourceObject;
            }
            startDrag(source, icon, sourceData, touchPointID = -1) {
                if (this.isDragging)
                    return;
                this.$sourceObject = source;
                this.$sourceData = sourceData;
                this.$agent.url = icon;
                fgui.GRoot.inst.addChild(this.$agent);
                const pt = fgui.GRoot.inst.globalToLocal(fgui.GRoot.globalMouseStatus.mouseX, fgui.GRoot.globalMouseStatus.mouseY);
                this.$agent.setXY(pt.x, pt.y);
                this.$agent.startDrag(touchPointID);
            }
            cancel() {
                if (this.$agent.parent != null) {
                    this.$agent.stopDrag();
                    fgui.GRoot.inst.removeChild(this.$agent);
                    this.$sourceData = null;
                }
            }
            $dragEnd(evt) {
                if (!this.isDragging)
                    return;
                fgui.GRoot.inst.removeChild(this.$agent);
                let sourceData = this.$sourceData;
                this.$sourceData = null;
                let obj = fgui.GRoot.inst.getObjectUnderPoint(evt.data.global.x, evt.data.global.y);
                while (obj != null) {
                    if (obj.hasListener(fgui.DragEvent.DROP)) {
                        obj.requestFocus();
                        evt.currentTarget = obj.displayObject;
                        obj.emit(fgui.DragEvent.DROP, evt, sourceData);
                        return;
                    }
                    obj = obj.parent;
                }
            }
        }
        utils.DragIndicator = DragIndicator;
    })(utils = fgui.utils || (fgui.utils = {}));
})(fgui || (fgui = {}));

(function (fgui) {
    var utils;
    (function (utils) {
        class Margin {
            constructor() {
                this.left = 0;
                this.right = 0;
                this.top = 0;
                this.bottom = 0;
            }
            parse(str) {
                if (!str) {
                    this.left = this.right = this.top = this.bottom = 0;
                    return;
                }
                let arr = str.split(",");
                if (arr.length == 1) {
                    let k = parseInt(arr[0]);
                    this.left = this.right = this.top = this.bottom = k;
                }
                else {
                    this.top = parseInt(arr[0]);
                    this.bottom = parseInt(arr[1]);
                    this.left = parseInt(arr[2]);
                    this.right = parseInt(arr[3]);
                }
            }
            copy(source) {
                this.top = source.top;
                this.bottom = source.bottom;
                this.left = source.left;
                this.right = source.right;
            }
        }
        utils.Margin = Margin;
    })(utils = fgui.utils || (fgui.utils = {}));
})(fgui || (fgui = {}));

(function (fgui) {
    var utils;
    (function (utils) {
        class RawByte {
            static inRange(a, min, max) {
                return min <= a && a <= max;
            }
            static decodeUTF8(data) {
                let pos = 0;
                let result = "";
                let code_point;
                let utf8_code_point = 0;
                let utf8_bytes_needed = 0;
                let utf8_bytes_seen = 0;
                let utf8_lower_boundary = 0;
                while (data.length > pos) {
                    let _byte = data[pos++];
                    if (_byte == -1) {
                        if (utf8_bytes_needed != 0) {
                            code_point = 65533;
                        }
                        else {
                            code_point = -1;
                        }
                    }
                    else {
                        if (utf8_bytes_needed == 0) {
                            if (RawByte.inRange(_byte, 0x00, 0x7F)) {
                                code_point = _byte;
                            }
                            else {
                                if (RawByte.inRange(_byte, 0xC2, 0xDF)) {
                                    utf8_bytes_needed = 1;
                                    utf8_lower_boundary = 0x80;
                                    utf8_code_point = _byte - 0xC0;
                                }
                                else if (RawByte.inRange(_byte, 0xE0, 0xEF)) {
                                    utf8_bytes_needed = 2;
                                    utf8_lower_boundary = 0x800;
                                    utf8_code_point = _byte - 0xE0;
                                }
                                else if (RawByte.inRange(_byte, 0xF0, 0xF4)) {
                                    utf8_bytes_needed = 3;
                                    utf8_lower_boundary = 0x10000;
                                    utf8_code_point = _byte - 0xF0;
                                }
                                else {
                                }
                                utf8_code_point = utf8_code_point * Math.pow(64, utf8_bytes_needed);
                                code_point = null;
                            }
                        }
                        else if (!RawByte.inRange(_byte, 0x80, 0xBF)) {
                            utf8_code_point = 0;
                            utf8_bytes_needed = 0;
                            utf8_bytes_seen = 0;
                            utf8_lower_boundary = 0;
                            pos--;
                            code_point = 65533;
                        }
                        else {
                            utf8_bytes_seen += 1;
                            utf8_code_point = utf8_code_point + (_byte - 0x80) * Math.pow(64, utf8_bytes_needed - utf8_bytes_seen);
                            if (utf8_bytes_seen !== utf8_bytes_needed) {
                                code_point = null;
                            }
                            else {
                                let cp = utf8_code_point;
                                let lower_boundary = utf8_lower_boundary;
                                utf8_code_point = 0;
                                utf8_bytes_needed = 0;
                                utf8_bytes_seen = 0;
                                utf8_lower_boundary = 0;
                                if (RawByte.inRange(cp, lower_boundary, 0x10FFFF) && !this.inRange(cp, 0xD800, 0xDFFF)) {
                                    code_point = cp;
                                }
                                else {
                                    code_point = _byte;
                                }
                            }
                        }
                    }
                    if (code_point !== null && code_point !== -1) {
                        if (code_point <= 0xFFFF) {
                            if (code_point > 0)
                                result += String.fromCharCode(code_point);
                        }
                        else {
                            code_point -= 0x10000;
                            result += String.fromCharCode(0xD800 + ((code_point >> 10) & 0x3ff));
                            result += String.fromCharCode(0xDC00 + (code_point & 0x3ff));
                        }
                    }
                }
                return result;
            }
        }
        utils.RawByte = RawByte;
    })(utils = fgui.utils || (fgui.utils = {}));
})(fgui || (fgui = {}));

(function (fgui) {
    var utils;
    (function (utils) {
        class UBBParser {
            constructor() {
                this.$readPos = 0;
                this.smallFontSize = 12;
                this.normalFontSize = 14;
                this.largeFontSize = 16;
                this.defaultImgWidth = 0;
                this.defaultImgHeight = 0;
                this.$handlers = {
                    url: this.onTag_URL,
                    img: this.onTag_IMG,
                    b: this.onTag_Simple,
                    i: this.onTag_Simple,
                    u: this.onTag_Simple,
                    sup: this.onTag_Simple,
                    sub: this.onTag_Simple,
                    color: this.onTag_COLOR,
                    font: this.onTag_FONT,
                    size: this.onTag_SIZE
                };
            }
            onTag_URL(tagName, end, attr) {
                if (!end) {
                    if (attr != null)
                        return `<a href="${attr}" target="_blank">`;
                    else {
                        let href = this.getTagText();
                        return `<a href="${href}" target="_blank">`;
                    }
                }
                else
                    return "</a>";
            }
            onTag_IMG(tagName, end, attr) {
                if (!end) {
                    let src = this.getTagText(true);
                    if (!src)
                        return null;
                    if (this.defaultImgWidth)
                        return `<img src="${src}" width="${this.defaultImgWidth}" height="${this.defaultImgHeight}"/>`;
                    else
                        return `<img src="${src}"/>`;
                }
                else
                    return null;
            }
            onTag_Simple(tagName, end, attr) {
                return end ? `</${tagName}>` : `<${tagName}>`;
            }
            onTag_COLOR(tagName, end, attr) {
                if (!end)
                    return `<font color="${attr}">`;
                else
                    return "</font>";
            }
            onTag_FONT(tagName, end, attr) {
                if (!end)
                    return `<font face="${attr}">`;
                else
                    return "</font>";
            }
            onTag_SIZE(tagName, end, attr) {
                if (!end) {
                    if (attr == "normal")
                        attr = `${this.normalFontSize}`;
                    else if (attr == "small")
                        attr = `${this.smallFontSize}`;
                    else if (attr == "large")
                        attr = `${this.largeFontSize}`;
                    else if (attr.length && attr.charAt(0) == "+")
                        attr = `${this.smallFontSize + parseInt(attr.substr(1))}`;
                    else if (attr.length && attr.charAt(0) == "-")
                        attr = `${this.smallFontSize - parseInt(attr.substr(1))}`;
                    return `<font size="${attr}">`;
                }
                else
                    return "</font>";
            }
            getTagText(remove = false) {
                let pos = this.$text.indexOf("[", this.$readPos);
                if (pos == -1)
                    return null;
                let ret = this.$text.substring(this.$readPos, pos);
                if (remove)
                    this.$readPos = pos;
                return ret;
            }
            parseStyle(text) {
                return [];
            }
        }
        UBBParser.inst = new UBBParser();
        utils.UBBParser = UBBParser;
    })(utils = fgui.utils || (fgui.utils = {}));
})(fgui || (fgui = {}));
