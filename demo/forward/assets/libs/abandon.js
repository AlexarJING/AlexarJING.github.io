// var PIXI;
// (function (PIXI) {
//     var extras;
//     (function (extras) {
//         class InteractionManager extends PIXI.InteractionManager {
//             constructor(renderer, options) {
//                 super(renderer, options);
//                 this.stageRotation = 0;
//                 this.stageScaleX = 1;
//                 this.stageScaleY = 1;
//             }
//             processInteractive(interactionEvent, displayObject, func, hitTest) {
//                 const hit = this.search.findHit(interactionEvent, displayObject, func, hitTest);
//                 const delayedEvents = this.delayedEvents;
//                 if (!delayedEvents.length) {
//                     return hit;
//                 }
//                 interactionEvent.stopPropagationHint = false;
//                 const delayedLen = delayedEvents.length;
//                 this.delayedEvents = [];
//                 for (let i = 0; i < delayedLen; i++) {
//                     const { displayObject, eventString, eventData } = delayedEvents[i];
//                     if (eventData.stopsPropagatingAt === displayObject) {
//                         eventData.stopPropagationHint = true;
//                     }
//                     this.dispatchEvent(displayObject, eventString, eventData);
//                 }
//                 return hit;
//             }
//             mapPositionToPoint(point, x, y) {
//                 point.set(x, y);
//                 if (globalThis.tt)
//                     return;
//                 let rect = void 0;
//                 let dom = this.interactionDOMElement;
//                 if (!dom.parentElement) {
//                     rect = { x: 0, y: 0, width: 0, height: 0 };
//                 }
//                 else {
//                     rect = dom.getBoundingClientRect();
//                 }
//                 let nav = navigator;
//                 let resolutionMultiplier = nav.isCocoonJS ? this.resolution : 1.0 / this.resolution;
//                 let doc = document.documentElement;
//                 let left = rect.left + window.pageXOffset - doc.clientLeft;
//                 let top = rect.top + window.pageYOffset - doc.clientTop;
//                 x -= left;
//                 y -= top;
//                 let newx = x, newy = y;
//                 if (this.stageRotation == 90) {
//                     newx = y;
//                     newy = rect.width - x;
//                 }
//                 else if (this.stageRotation == -90) {
//                     newx = rect.height - y;
//                     newy = x;
//                 }
//                 newx = newx * this.stageScaleX * resolutionMultiplier;
//                 newy = newy * this.stageScaleY * resolutionMultiplier;
//                 point.set(newx, newy);
//             }
//         }
//         extras.InteractionManager = InteractionManager;
//         PIXI.extensions.add({
//             name: 'interaction',
//             type: 'renderer-webgl-plugin',
//             ref: PIXI.extras.InteractionManager,
//         });
//     })(extras = PIXI.extras || (PIXI.extras = {}));
// })(PIXI || (PIXI = {}));