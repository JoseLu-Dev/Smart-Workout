(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"3E8E":function(t,e,n){"use strict";n.d(e,"a",function(){return o});var i=n("SxV6"),r=n("AytR"),c=n("fXoL"),s=n("tk/3");let o=(()=>{class t{constructor(t){this.http=t,this.daysUrl=`${r.a.backendUrl}/days`}getDaysOfYearAndMonth(t,e){return this.http.get(`${this.daysUrl}/${t}/${e}`,{observe:"response"}).pipe(Object(i.a)())}getDay(t,e,n){return this.http.get(`${this.daysUrl}/${t}/${e}/${n}`,{observe:"response"}).pipe(Object(i.a)())}}return t.\u0275fac=function(e){return new(e||t)(c.Tb(s.b))},t.\u0275prov=c.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},"74mu":function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"b",function(){return c}),n.d(e,"c",function(){return i}),n.d(e,"d",function(){return o});const i=(t,e)=>null!==e.closest(t),r=(t,e)=>"string"==typeof t&&t.length>0?Object.assign({"ion-color":!0,[`ion-color-${t}`]:!0},e):e,c=t=>{const e={};return(t=>void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(t=>null!=t).map(t=>t.trim()).filter(t=>""!==t):[])(t).forEach(t=>e[t]=!0),e},s=/^[a-z][a-z0-9+\-.]*:/,o=async(t,e,n,i)=>{if(null!=t&&"#"!==t[0]&&!s.test(t)){const r=document.querySelector("ion-router");if(r)return null!=e&&e.preventDefault(),r.push(t,n,i)}return!1}},JbSX:function(t,e,n){"use strict";n.d(e,"a",function(){return s});var i=n("wEJo"),r=n("qULd"),c=n("iWo5");const s=(t,e)=>{let n,s;const o=(t,i,r)=>{if("undefined"==typeof document)return;const c=document.elementFromPoint(t,i);c&&e(c)?c!==n&&(l(),a(c,r)):l()},a=(t,e)=>{n=t,s||(s=n);const r=n;Object(i.f)(()=>r.classList.add("ion-activated")),e()},l=(t=!1)=>{if(!n)return;const e=n;Object(i.f)(()=>e.classList.remove("ion-activated")),t&&s!==n&&n.click(),n=void 0};return Object(c.createGesture)({el:t,gestureName:"buttonActiveDrag",threshold:0,onStart:t=>o(t.currentX,t.currentY,r.a),onMove:t=>o(t.currentX,t.currentY,r.b),onEnd:()=>{l(!0),Object(r.e)(),s=void 0}})}},acej:function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"b",function(){return c});var i=n("1vRN");const r=async(t,e,n,r,c)=>{if(t)return t.attachViewToDom(e,n,c,r);if("string"!=typeof n&&!(n instanceof HTMLElement))throw new Error("framework delegate is missing");const s="string"==typeof n?e.ownerDocument&&e.ownerDocument.createElement(n):n;return r&&r.forEach(t=>s.classList.add(t)),c&&Object.assign(s,c),e.appendChild(s),await new Promise(t=>Object(i.c)(s,t)),s},c=(t,e)=>{if(e){if(t)return t.removeViewFromDom(e.parentElement,e);e.remove()}return Promise.resolve()}},h3R7:function(t,e,n){"use strict";n.d(e,"a",function(){return i});const i={bubbles:{dur:1e3,circles:9,fn:(t,e,n)=>{const i=t*e/n-t+"ms",r=2*Math.PI*e/n;return{r:5,style:{top:9*Math.sin(r)+"px",left:9*Math.cos(r)+"px","animation-delay":i}}}},circles:{dur:1e3,circles:8,fn:(t,e,n)=>{const i=e/n,r=t*i-t+"ms",c=2*Math.PI*i;return{r:5,style:{top:9*Math.sin(c)+"px",left:9*Math.cos(c)+"px","animation-delay":r}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(t,e)=>({r:6,style:{left:9-9*e+"px","animation-delay":-110*e+"ms"}})},lines:{dur:1e3,lines:12,fn:(t,e,n)=>({y1:17,y2:29,style:{transform:`rotate(${30*e+(e<6?180:-180)}deg)`,"animation-delay":t*e/n-t+"ms"}})},"lines-small":{dur:1e3,lines:12,fn:(t,e,n)=>({y1:12,y2:20,style:{transform:`rotate(${30*e+(e<6?180:-180)}deg)`,"animation-delay":t*e/n-t+"ms"}})}}},haYR:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var i=n("fXoL");let r=(()=>{class t{constructor(){this.modals=[]}add(t){this.modals.push(t)}remove(t){this.modals=this.modals.filter(e=>e.id!==t)}open(t){this.modals.find(e=>e.id===t).open()}close(t){this.modals.find(e=>e.id===t).close()}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=i.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},iz14:function(t,e,n){"use strict";n.d(e,"a",function(){return s});var i=n("fXoL"),r=n("haYR");const c=["*"];let s=(()=>{class t{constructor(t,e){this.modalService=t,this.el=e,this.closeEvent=new i.o,this.element=e.nativeElement}ngOnInit(){this.id?(document.body.appendChild(this.element),this.element.addEventListener("click",t=>{"jw-modal-background"===t.target.className&&this.close()}),this.modalService.add(this)):console.error("modal must have an id")}ngOnDestroy(){this.modalService.remove(this.id),this.element.remove()}open(){this.element.style.display="block",document.body.classList.add("jw-modal-open")}close(){this.element.style.display="none",document.body.classList.remove("jw-modal-open"),this.closeEvent.emit(null)}}return t.\u0275fac=function(e){return new(e||t)(i.Jb(r.a),i.Jb(i.m))},t.\u0275cmp=i.Db({type:t,selectors:[["jw-modal"]],inputs:{id:"id"},outputs:{closeEvent:"closeEvent"},ngContentSelectors:c,decls:4,vars:0,consts:[[1,"jw-modal","card-modal"],[1,"jw-modal-body"],[1,"jw-modal-background"]],template:function(t,e){1&t&&(i.fc(),i.Pb(0,"div",0),i.Pb(1,"div",1),i.ec(2),i.Ob(),i.Ob(),i.Kb(3,"div",2))},styles:["jw-modal{display:none}jw-modal .jw-modal{position:absolute;top:0;right:0;bottom:0;left:0;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;margin:auto;z-index:1000;overflow:auto}jw-modal .jw-modal .jw-modal-body{width:100%;height:100%}jw-modal .jw-modal-background{position:fixed;top:0;right:0;bottom:0;left:0;background-color:#000;opacity:.7;z-index:900}body.jw-modal-open{overflow:hidden}"],encapsulation:2}),t})()},kOPB:function(t,e,n){"use strict";n.d(e,"a",function(){return s});var i=n("2Vo4"),r=n("n1iY"),c=n("fXoL");let s=(()=>{class t{constructor(t){this.trainingsService=t,this.training=new i.a(null),this.selectedSet=new i.a(null),this.indexSelected=new i.a(null),this.setOnIndexSelectedChanged()}setOnIndexSelectedChanged(){this.indexSelected.subscribe(t=>{t&&this.selectedSet.next(this.training.value.setsDone[t])})}setExerciseSetToEdit(t){this.indexSelected.next(t)}confirmSetSelectedEdition(t){const e=this.training.value.setsDone,n=this.indexSelected.value;null==n||n>=e.length?e.push(t):e[n]=t}getTraining(){return this.training.asObservable()}getTrainingFromAPI(t){this.trainingsService.getTraining(t).subscribe(t=>{this.training.next(t)})}saveTraining(){this.trainingsService.saveTraining(this.training.value)}}return t.\u0275fac=function(e){return new(e||t)(c.Tb(r.a))},t.\u0275prov=c.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},kXp2:function(t,e,n){"use strict";n.d(e,"a",function(){return M});var i=n("HDdC"),r=n("fXoL"),c=n("kOPB"),s=n("tyNb"),o=n("ofXK");let a=(()=>{class t{transform(t,...e){return t||(t=0),!0===e[0]?`${t}''`:`${t} reps`}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=r.Ib({name:"setQuantityFormatter",type:t,pure:!0}),t.\u0275prov=r.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),l=(()=>{class t{transform(t,...e){t||(t=0);const n=Math.floor(t/60),i=t%60;let r="";return 0!==n&&null!=n&&(r+=`${n}'`),0!==n&&0!==i&&(r+=" "),0!==i&&null!=i&&(r+=`${i}''`),r}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=r.Ib({name:"secondsFormat",type:t,pure:!0}),t.\u0275prov=r.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const d=function(t){return{"background-color":t}};function u(t,e){if(1&t&&r.Kb(0,"div",9),2&t){const t=r.bc().$implicit;r.gc("ngStyle",r.jc(1,d,t.color))}}function b(t,e){if(1&t&&(r.Pb(0,"div"),r.vc(1,u,1,3,"div",8),r.Ob()),2&t){const t=e.$implicit;r.zb(1),r.gc("ngIf",t)}}let g=(()=>{class t{constructor(t,e){this.setQuantityFormatter=t,this.secondsFormatter=e,this.bands=new Array}set set(t){this.setsCount=t.setsCount,this.exercise=t.setParts[0].exercise;const e=new Array,n=new Array,i=new Array;for(const d of t.setParts)this.bands.push(d.intensity.band),e.push(d.quantity),n.push(d.rest),i.push(d.intensity.weight);const r=Math.max(...e),c=Math.min(...e);this.quantity=c===r?this.setQuantityFormatter.transform(r):`${c}-${this.setQuantityFormatter.transform(r)}`;const s=Math.max(...n),o=Math.min(...n);this.rest=o===s?this.secondsFormatter.transform(s):`${this.secondsFormatter.transform(o)}-${this.secondsFormatter.transform(s)}`;const a=Math.max(...i),l=Math.min(...i);this.weight=l===a?`${a} kg`:`${l}-${a} kg`}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)(r.Jb(a),r.Jb(l))},t.\u0275cmp=r.Db({type:t,selectors:[["app-normal-item-list-strategy"]],inputs:{set:"set"},decls:16,vars:8,consts:[[1,"flex","items-center"],[1,"flex","card","mr-4","flex-grow","gap-4","flex-wrap","md:flex-nowrap","justify-items-center","place-content-center"],[1,"w-full","md:w-auto","text-center"],[4,"ngFor","ngForOf"],[1,"flex","justify-items-center"],["xmlns","http://www.w3.org/2000/svg","height","24px","viewBox","0 0 24 24","width","24px",1,"icon"],["d","M0 0h24v24H0V0z","fill","none"],["d","M15.07 1.01h-6v2h6v-2zm-4 13h2v-6h-2v6zm8.03-6.62l1.42-1.42c-.43-.51-.9-.99-1.41-1.41l-1.42 1.42C16.14 4.74 14.19 4 12.07 4c-4.97 0-9 4.03-9 9s4.02 9 9 9 9-4.03 9-9c0-2.11-.74-4.06-1.97-5.61zm-7.03 12.62c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"],["class","mx-2 btn-rounded w-6 h-6",3,"ngStyle",4,"ngIf"],[1,"mx-2","btn-rounded","w-6","h-6",3,"ngStyle"]],template:function(t,e){1&t&&(r.Pb(0,"div",0),r.Pb(1,"div",1),r.Pb(2,"p",2),r.xc(3),r.Ob(),r.Pb(4,"p"),r.xc(5),r.Ob(),r.vc(6,b,2,1,"div",3),r.Pb(7,"div",4),r.xc(8),r.ac(),r.Pb(9,"svg",5),r.Kb(10,"path",6),r.Kb(11,"path",7),r.Ob(),r.Ob(),r.Zb(),r.Pb(12,"p"),r.xc(13),r.Ob(),r.Ob(),r.Pb(14,"p"),r.xc(15),r.Ob(),r.Ob()),2&t&&(r.zb(3),r.Bc("",null==e.exercise?null:e.exercise.name," ",null==e.exercise?null:e.exercise.progression," ",null==e.exercise?null:e.exercise.variation,""),r.zb(2),r.yc(e.weight),r.zb(1),r.gc("ngForOf",e.bands),r.zb(2),r.yc(e.rest),r.zb(5),r.yc(e.quantity),r.zb(2),r.zc("x",e.setsCount,""))},directives:[o.j,o.k,o.l],styles:[""]}),t})();const f=function(t){return{"background-color":t}};function m(t,e){if(1&t&&r.Kb(0,"div",12),2&t){const t=r.bc().$implicit;r.gc("ngStyle",r.jc(1,f,t.intensity.band.color))}}function p(t,e){1&t&&r.Lb(0)}const h=function(t){return{rest:t}};function v(t,e){if(1&t&&(r.Pb(0,"div",13),r.vc(1,p,1,0,"ng-container",14),r.Ob()),2&t){const t=r.bc().$implicit;r.bc();const e=r.oc(9);r.zb(1),r.gc("ngTemplateOutlet",e)("ngTemplateOutletContext",r.jc(2,h,t.rest))}}function w(t,e){1&t&&(r.Pb(0,"div",15),r.Pb(1,"div",16),r.xc(2," ..."),r.Ob(),r.Ob())}function x(t,e){if(1&t&&(r.Pb(0,"div",6),r.Pb(1,"div",7),r.Pb(2,"p",8),r.xc(3),r.cc(4,"titlecase"),r.cc(5,"titlecase"),r.cc(6,"titlecase"),r.Ob(),r.Pb(7,"p"),r.xc(8),r.Ob(),r.vc(9,m,1,3,"div",9),r.Pb(10,"p"),r.xc(11),r.cc(12,"setQuantityFormatter"),r.Ob(),r.Ob(),r.vc(13,v,2,4,"div",10),r.vc(14,w,3,0,"div",11),r.Ob()),2&t){const t=e.$implicit,n=e.last;r.zb(3),r.Bc("",r.dc(4,8,null==t.exercise?null:t.exercise.name)," ",r.dc(5,10,null==t.exercise?null:t.exercise.progression)," ",r.dc(6,12,null==t.exercise?null:t.exercise.variation),""),r.zb(5),r.zc("",t.intensity.weight,"kg"),r.zb(1),r.gc("ngIf",null==t||null==t.intensity?null:t.intensity.band),r.zb(2),r.yc(r.dc(12,14,t.quantity)),r.zb(2),r.gc("ngIf",t.rest&&0!=t.rest),r.zb(1),r.gc("ngIf",n)}}function y(t,e){if(1&t&&(r.Pb(0,"div",17),r.Kb(1,"div",18),r.Pb(2,"div",19),r.Pb(3,"p",20),r.xc(4),r.cc(5,"secondsFormat"),r.Ob(),r.ac(),r.Pb(6,"svg",21),r.Kb(7,"path",22),r.Kb(8,"path",23),r.Ob(),r.Ob(),r.Zb(),r.Kb(9,"div",18),r.Ob()),2&t){const t=e.rest;r.zb(4),r.yc(r.dc(5,1,t))}}let O=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Db({type:t,selectors:[["app-multiple-item-list-strategy"]],inputs:{set:"set"},decls:10,vars:5,consts:[[1,"flex","gap-4"],[1,"card","mb-auto"],[1,"flex","flex-col","items-center","flex-grow","mr-4","flex-wrap"],["class","flex flex-row flex-grow items-center justify-items-center flex-wrap w-full",4,"ngFor","ngForOf"],[1,"self-center"],["rest",""],[1,"flex","flex-row","flex-grow","items-center","justify-items-center","flex-wrap","w-full"],[1,"flex","card","flex-grow","gap-4","flex-wrap","md:flex-nowrap","justify-items-center","place-content-center","w-full"],[1,"w-full","md:w-auto","text-center"],["class","mx-2 btn-rounded w-6 h-6",3,"ngStyle",4,"ngIf"],["class","w-full",4,"ngIf"],["class","flex justify-items-center flex-grow",4,"ngIf"],[1,"mx-2","btn-rounded","w-6","h-6",3,"ngStyle"],[1,"w-full"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"flex","justify-items-center","flex-grow"],[1,"rounded-lg","p-1","shadow-md","bg-primary","dark:bg-primaryLightDark","mx-auto"],[1,"flex","flex-row","items-center","my-2"],[1,"flex-grow","h-px","bg-gray","dark:bg-grayLight","mx-3"],[1,"flex","flex-row"],[1,"text-sm","text-gray","dark:text-grayLight"],["xmlns","http://www.w3.org/2000/svg","height","20px","viewBox","0 0 24 24","width","20px",1,"icon-secondary"],["d","M0 0h24v24H0V0z","fill","none"],["d","M15.07 1.01h-6v2h6v-2zm-4 13h2v-6h-2v6zm8.03-6.62l1.42-1.42c-.43-.51-.9-.99-1.41-1.41l-1.42 1.42C16.14 4.74 14.19 4 12.07 4c-4.97 0-9 4.03-9 9s4.02 9 9 9 9-4.03 9-9c0-2.11-.74-4.06-1.97-5.61zm-7.03 12.62c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"]],template:function(t,e){1&t&&(r.Pb(0,"div",0),r.Pb(1,"div",1),r.xc(2),r.cc(3,"titlecase"),r.Ob(),r.Pb(4,"div",2),r.vc(5,x,15,16,"div",3),r.Ob(),r.Pb(6,"p",4),r.xc(7),r.Ob(),r.Ob(),r.vc(8,y,10,3,"ng-template",null,5,r.wc)),2&t&&(r.zb(2),r.yc(r.dc(3,3,e.set.type)),r.zb(3),r.gc("ngForOf",null==e.set?null:e.set.setParts),r.zb(2),r.zc("x",e.set.setsCount,""))},directives:[o.j,o.k,o.l,o.p],pipes:[o.s,a,l],styles:[""]}),t})();function P(t,e){if(1&t&&(r.Pb(0,"div"),r.Kb(1,"app-normal-item-list-strategy",7),r.Ob()),2&t){const t=r.bc().$implicit;r.zb(1),r.gc("set",t)}}function z(t,e){if(1&t&&(r.Pb(0,"div"),r.Kb(1,"app-multiple-item-list-strategy",7),r.Ob()),2&t){const t=r.bc().$implicit;r.zb(1),r.gc("set",t)}}function k(t,e){1&t&&r.Lb(0)}const C=function(t){return{rest:t}};function S(t,e){if(1&t&&(r.Pb(0,"div",8),r.vc(1,k,1,0,"ng-container",9),r.Ob()),2&t){const t=r.bc().$implicit;r.bc();const e=r.oc(3);r.zb(1),r.gc("ngTemplateOutlet",e)("ngTemplateOutletContext",r.jc(2,C,t.finalRest))}}function j(t,e){if(1&t&&(r.Pb(0,"div",2),r.Pb(1,"div",3),r.vc(2,P,2,1,"div",4),r.vc(3,z,2,1,"div",5),r.Ob(),r.vc(4,S,2,4,"div",6),r.Ob()),2&t){const t=e.$implicit,n=e.last;r.zb(1),r.gc("ngSwitch",t.type),r.zb(1),r.gc("ngSwitchCase","normal"),r.zb(2),r.gc("ngIf",!n)}}function F(t,e){if(1&t&&(r.Pb(0,"div",10),r.Kb(1,"div",11),r.Pb(2,"div",12),r.Pb(3,"p",13),r.xc(4),r.cc(5,"secondsFormat"),r.Ob(),r.ac(),r.Pb(6,"svg",14),r.Kb(7,"path",15),r.Kb(8,"path",16),r.Ob(),r.Ob(),r.Zb(),r.Kb(9,"div",11),r.Ob()),2&t){const t=e.rest;r.zb(4),r.yc(r.dc(5,1,t))}}let M=(()=>{class t{constructor(t,e){this.trainingsService=t,this.route=e,this.training=new i.a}ngOnInit(){const t=this.route.snapshot.paramMap.get("id");this.trainingsService.getTrainingFromAPI(t),this.training=this.trainingsService.getTraining()}}return t.\u0275fac=function(e){return new(e||t)(r.Jb(c.a),r.Jb(s.a))},t.\u0275cmp=r.Db({type:t,selectors:[["app-exercises-set-list"]],decls:4,vars:3,consts:[["class","flex flex-col items-center",4,"ngFor","ngForOf"],["rest",""],[1,"flex","flex-col","items-center"],[1,"w-full",3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"],["class","w-full",4,"ngIf"],[3,"set"],[1,"w-full"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"flex","flex-row","items-center","my-2"],[1,"flex-grow","h-px","bg-gray","dark:bg-grayLight","mx-3"],[1,"flex","flex-row"],[1,"text-sm","text-gray","dark:text-grayLight"],["xmlns","http://www.w3.org/2000/svg","height","20px","viewBox","0 0 24 24","width","20px",1,"icon-secondary"],["d","M0 0h24v24H0V0z","fill","none"],["d","M15.07 1.01h-6v2h6v-2zm-4 13h2v-6h-2v6zm8.03-6.62l1.42-1.42c-.43-.51-.9-.99-1.41-1.41l-1.42 1.42C16.14 4.74 14.19 4 12.07 4c-4.97 0-9 4.03-9 9s4.02 9 9 9 9-4.03 9-9c0-2.11-.74-4.06-1.97-5.61zm-7.03 12.62c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"]],template:function(t,e){if(1&t&&(r.vc(0,j,5,3,"div",0),r.cc(1,"async"),r.vc(2,F,10,3,"ng-template",null,1,r.wc)),2&t){let t=null;r.gc("ngForOf",null==(t=r.dc(1,1,e.training))?null:t.setsDone)}},directives:[o.j,o.m,o.n,o.o,o.k,g,O,o.p],pipes:[o.b,l],styles:[".icon[_ngcontent-%COMP%]{fill:currentColor;--tw-text-opacity:1;color:rgba(33,37,41,var(--tw-text-opacity))}@media (prefers-color-scheme:dark){.icon[_ngcontent-%COMP%]{--tw-text-opacity:1;color:rgba(247,247,254,var(--tw-text-opacity))}}.icon-secondary[_ngcontent-%COMP%]{fill:currentColor;--tw-text-opacity:1;color:rgba(97,97,97,var(--tw-text-opacity))}@media (prefers-color-scheme:dark){.icon-secondary[_ngcontent-%COMP%]{--tw-text-opacity:1;color:rgba(217,217,217,var(--tw-text-opacity))}}"]}),t})()},qULd:function(t,e,n){"use strict";n.d(e,"a",function(){return c}),n.d(e,"b",function(){return s}),n.d(e,"c",function(){return r}),n.d(e,"d",function(){return a}),n.d(e,"e",function(){return o});const i={getEngine(){const t=window;return t.TapticEngine||t.Capacitor&&t.Capacitor.isPluginAvailable("Haptics")&&t.Capacitor.Plugins.Haptics},available(){return!!this.getEngine()},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(t){const e=this.getEngine();if(!e)return;const n=this.isCapacitor()?t.style.toUpperCase():t.style;e.impact({style:n})},notification(t){const e=this.getEngine();if(!e)return;const n=this.isCapacitor()?t.style.toUpperCase():t.style;e.notification({style:n})},selection(){this.impact({style:"light"})},selectionStart(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},r=()=>{i.selection()},c=()=>{i.selectionStart()},s=()=>{i.selectionChanged()},o=()=>{i.selectionEnd()},a=t=>{i.impact(t)}},tFit:function(t,e,n){"use strict";n.d(e,"a",function(){return z});class i{constructor(){this.trainings=new Array,this.date=new Date}}var r=n("3Pt+"),c=n("fXoL"),s=n("haYR"),o=n("n1iY"),a=n("tyNb"),l=n("iz14"),d=n("ofXK"),u=n("zwmB");function b(t,e){if(1&t&&(c.Pb(0,"form",6),c.Pb(1,"div",7),c.Pb(2,"label",8),c.xc(3,"Training name"),c.Ob(),c.Kb(4,"input",9),c.Pb(5,"div",10),c.Pb(6,"label",11),c.xc(7,"Color"),c.Ob(),c.Kb(8,"ngx-colors",12),c.Ob(),c.Ob(),c.Ob()),2&t){const t=c.bc();c.gc("formGroup",t.trainingForm),c.zb(8),c.gc("formControl",t.colorForm)}}let g=(()=>{class t{constructor(t,e,n,i){this.modalService=t,this.formBuilder=e,this.trainingsService=n,this.router=i,this.id=`new-training-modal${Math.random()}`}ngOnInit(){this.buildForm()}buildForm(){this.trainingForm=this.formBuilder.group({name:["",r.p.compose([r.p.required,r.p.maxLength(20)])]}),this.colorForm=new r.c("",r.p.required)}openModal(){this.modalService.open(this.id)}closeModal(){this.onModalClosed(),this.modalService.close(this.id)}onModalClosed(){this.buildForm()}onSubmit(){this.trainingsDay||(this.trainingsDay=new i,this.trainingsDay.date=this.date),this.trainingsDay.trainings.push({name:this.trainingForm.value.name,color:this.colorForm.value,completed:!1}),this.trainingsService.saveTrainingDay(this.trainingsDay).subscribe(t=>{this.router.navigate([`app/trainings/edit/${t}`],{replaceUrl:!1})},t=>{console.log(t)}),this.closeModal()}}return t.\u0275fac=function(e){return new(e||t)(c.Jb(s.a),c.Jb(r.b),c.Jb(o.a),c.Jb(a.f))},t.\u0275cmp=c.Db({type:t,selectors:[["app-new-training-modal"]],inputs:{date:"date",trainingsDay:"trainingsDay"},decls:9,vars:3,consts:[[3,"id","closeEvent"],[1,"text-xl","font-semibold","dark:text-textPrimaryDark"],[3,"formGroup",4,"ngIf"],[1,"flex","justify-end","w-64","mt-4"],[1,"btn-transparent","mr-4",3,"click"],[1,"btn-transparent",3,"disabled","click"],[3,"formGroup"],[1,"flex","flex-col","justify-items-center","mt-4"],[1,"label","mb-2"],["type","text","placeholder","name","formControlName","name",1,"input"],[1,"flex","justify-center","items-center","gap-2","mt-4"],[1,"label"],["ngx-colors-trigger","",3,"formControl"]],template:function(t,e){1&t&&(c.Pb(0,"jw-modal",0),c.Xb("closeEvent",function(){return e.onModalClosed()}),c.Pb(1,"h1",1),c.xc(2,"New training"),c.Ob(),c.vc(3,b,9,2,"form",2),c.Pb(4,"div",3),c.Pb(5,"button",4),c.Xb("click",function(){return e.closeModal()}),c.xc(6,"Close"),c.Ob(),c.Pb(7,"button",5),c.Xb("click",function(){return e.onSubmit()}),c.xc(8,"Accept"),c.Ob(),c.Ob(),c.Ob()),2&t&&(c.gc("id",e.id),c.zb(3),c.gc("ngIf",e.trainingForm),c.zb(4),c.gc("disabled",e.trainingForm.invalid||e.colorForm.invalid))},directives:[l.a,d.k,r.q,r.k,r.f,r.a,r.j,r.e,u.a,u.c,r.d],styles:[""]}),t})();function f(t,e){1&t&&c.Lb(0)}function m(t,e){if(1&t&&(c.Pb(0,"div"),c.vc(1,f,1,0,"ng-container",16),c.Ob()),2&t){c.bc(4);const t=c.oc(12);c.zb(1),c.gc("ngTemplateOutlet",t)}}function p(t,e){if(1&t&&(c.Pb(0,"div"),c.vc(1,m,2,1,"div",0),c.Ob()),2&t){const t=c.bc(3),e=c.oc(14);c.zb(1),c.gc("ngIf",!t.dayHasPassed())("ngIfElse",e)}}const h=function(t){return{"background-color":t}};function v(t,e){if(1&t){const t=c.Qb();c.Pb(0,"div",13),c.Xb("click",function(){c.rc(t);const n=e.$implicit;return c.bc(2).onTrainingClicked(n.id)}),c.Kb(1,"div",14),c.Pb(2,"p",15),c.xc(3),c.cc(4,"titlecase"),c.Ob(),c.vc(5,p,2,2,"div",0),c.Ob()}if(2&t){const t=e.$implicit;c.bc(2);const n=c.oc(10);c.zb(1),c.gc("ngStyle",c.jc(6,h,null==t?null:t.color)),c.zb(2),c.yc(c.dc(4,4,t.name)),c.zb(2),c.gc("ngIf",!t.completed)("ngIfElse",n)}}function w(t,e){if(1&t&&(c.Pb(0,"div"),c.Pb(1,"p",11),c.xc(2,"Trainings list"),c.Ob(),c.vc(3,v,6,8,"div",12),c.Ob()),2&t){const t=c.bc();c.zb(3),c.gc("ngForOf",t.trainingsDay.trainings)}}function x(t,e){1&t&&(c.Pb(0,"p",17),c.xc(1,"You don't have any trainings today,"),c.Ob(),c.Pb(2,"p",17),c.xc(3,"want to create a new one?"),c.Ob())}function y(t,e){1&t&&(c.ac(),c.Pb(0,"svg",18),c.Kb(1,"path",4),c.Kb(2,"path",19),c.Ob())}function O(t,e){1&t&&(c.ac(),c.Pb(0,"svg",20),c.Pb(1,"g"),c.Kb(2,"rect",21),c.Ob(),c.Pb(3,"g"),c.Pb(4,"g"),c.Kb(5,"path",22),c.Ob(),c.Ob(),c.Ob())}function P(t,e){1&t&&(c.ac(),c.Pb(0,"svg",23),c.Kb(1,"path",4),c.Kb(2,"path",24),c.Ob())}let z=(()=>{class t{constructor(t){this.router=t}ngOnInit(){}dayHasPassed(){const t=new Date,e=new Date(this.trainingsDay.date);return e.setHours(23),e.getTime()<t.getTime()}onAddTrainingClicked(){this.newTrainingModal.openModal()}onTrainingClicked(t){this.router.navigate([`app/trainings/${t}`],{replaceUrl:!1})}}return t.\u0275fac=function(e){return new(e||t)(c.Jb(a.f))},t.\u0275cmp=c.Db({type:t,selectors:[["app-trainings-list"]],viewQuery:function(t,e){if(1&t&&c.Cc(g,1),2&t){let t;c.nc(t=c.Yb())&&(e.newTrainingModal=t.first)}},inputs:{date:"date",trainingsDay:"trainingsDay"},decls:15,vars:4,consts:[[4,"ngIf","ngIfElse"],[1,"mt-2"],[1,"btn-rounded","btn-blue","mx-auto",3,"click"],["xmlns","http://www.w3.org/2000/svg","height","24px","viewBox","0 0 24 24","width","24px",1,"icon"],["d","M0 0h24v24H0z","fill","none"],["d","M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"],[3,"trainingsDay","date"],["noTrainings",""],["done",""],["pending",""],["cancelled",""],[1,"mb-4"],["class","bg-primary dark:bg-primaryLightDark rounded-lg p-4 mb-4 shadow-lg flex flex-row items-center justify-between cursor-pointer",3,"click",4,"ngFor","ngForOf"],[1,"bg-primary","dark:bg-primaryLightDark","rounded-lg","p-4","mb-4","shadow-lg","flex","flex-row","items-center","justify-between","cursor-pointer",3,"click"],[1,"btn-rounded","w-8","h-8","mr-2",3,"ngStyle"],[1,"flex-grow","mr-4"],[4,"ngTemplateOutlet"],[1,"label","text-center"],["xmlns","http://www.w3.org/2000/svg","height","28px","viewBox","0 0 24 24","width","28px",1,"fill-current","text-green-600"],["d","M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"],["xmlns","http://www.w3.org/2000/svg","enable-background","new 0 0 24 24","height","28px","viewBox","0 0 24 24","width","28px",1,"fill-current","text-yellow-600"],["fill","none","height","24","width","24","x","0"],["d","M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10S17.5,2,12,2z M12,20c-4.41,0-8-3.59-8-8s3.59-8,8-8s8,3.59,8,8 S16.41,20,12,20z M12.5,7H11v6l5.2,3.2l0.8-1.3l-4.5-2.7V7z"],["xmlns","http://www.w3.org/2000/svg","height","28px","viewBox","0 0 24 24","width","28px",1,"fill-current","text-red-600"],["d","M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"]],template:function(t,e){if(1&t&&(c.vc(0,w,4,1,"div",0),c.Pb(1,"div",1),c.Pb(2,"button",2),c.Xb("click",function(){return e.onAddTrainingClicked()}),c.ac(),c.Pb(3,"svg",3),c.Kb(4,"path",4),c.Kb(5,"path",5),c.Ob(),c.Ob(),c.Zb(),c.Kb(6,"app-new-training-modal",6),c.Ob(),c.vc(7,x,4,0,"ng-template",null,7,c.wc),c.vc(9,y,3,0,"ng-template",null,8,c.wc),c.vc(11,O,6,0,"ng-template",null,9,c.wc),c.vc(13,P,3,0,"ng-template",null,10,c.wc)),2&t){const t=c.oc(8);c.gc("ngIf",e.trainingsDay)("ngIfElse",t),c.zb(6),c.gc("trainingsDay",e.trainingsDay)("date",e.date)}},directives:[d.k,g,d.j,d.l,d.p],pipes:[d.s],styles:[""]}),t})()}}]);