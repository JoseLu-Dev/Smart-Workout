!function(){function t(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=t&&("undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"]);if(null==n)return;var i=[],r=!0,c=!1,s=void 0;try{for(n=n.call(t),_s;!(r=(_s=n.next()).done)&&(i.push(_s.value),!e||i.length!==e);r=!0);}catch(a){c=!0,s=a}finally{try{r||null==n.return||n.return()}finally{if(c)throw s}}return i}(t,n)||e(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(t,e){if(t){if("string"==typeof t)return n(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?n(t,e):void 0}}function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function c(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"5hf0":function(t,n,r){"use strict";r.d(n,"a",function(){return U});var s,a=r("HDdC"),o=r("fXoL"),u=r("gIeq"),l=r("tyNb"),f=r("n1iY"),h=r("ofXK"),b=((s=function(){function t(){i(this,t)}return c(t,[{key:"transform",value:function(t){return t||(t=0),"".concat(t,!0===(arguments.length<=1?void 0:arguments[1])?"''":" reps")}}]),t}()).\u0275fac=function(t){return new(t||s)},s.\u0275pipe=o.Ib({name:"setQuantityFormatter",type:s,pure:!0}),s.\u0275prov=o.Fb({token:s,factory:s.\u0275fac,providedIn:"root"}),s),v=r("wzjf"),d=function(t){return{"background-color":t}};function g(t,e){if(1&t&&o.Kb(0,"div",9),2&t){var n=o.bc().$implicit;o.hc("ngStyle",o.kc(1,d,n.color))}}function p(t,e){if(1&t&&(o.Pb(0,"div"),o.xc(1,g,1,3,"div",8),o.Ob()),2&t){var n=e.$implicit;o.zb(1),o.hc("ngIf",n)}}var m,y=((m=function(){function t(e,n){i(this,t),this.setQuantityFormatter=e,this.secondsFormatter=n,this.bands=new Array}return c(t,[{key:"set",set:function(t){this.setsCount=t.setsCount,this.exercise=t.setParts[0].exercise;var n,i=new Array,r=new Array,c=new Array,s=function(t,n){var i="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!i){if(Array.isArray(t)||(i=e(t))||n&&t&&"number"==typeof t.length){i&&(t=i);var r=0,c=function(){};return{s:c,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:c}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,a=!0,o=!1;return{s:function(){i=i.call(t)},n:function(){var t=i.next();return a=t.done,t},e:function(t){o=!0,s=t},f:function(){try{a||null==i.return||i.return()}finally{if(o)throw s}}}}(t.setParts);try{for(s.s();!(n=s.n()).done;){var a=n.value;this.bands.push(a.intensity.band),i.push(a.quantity),r.push(a.rest),c.push(a.intensity.weight)}}catch(v){s.e(v)}finally{s.f()}var o=Math.max.apply(Math,i),u=Math.min.apply(Math,i);this.quantity=u===o?this.setQuantityFormatter.transform(o):"".concat(u,"-").concat(this.setQuantityFormatter.transform(o));var l=Math.max.apply(Math,r),f=Math.min.apply(Math,r);this.rest=f===l?this.secondsFormatter.transform(l):"".concat(this.secondsFormatter.transform(f),"-").concat(this.secondsFormatter.transform(l));var h=Math.max.apply(Math,c),b=Math.min.apply(Math,c);this.weight=b===h?"".concat(h," kg"):"".concat(b,"-").concat(h," kg")}},{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||m)(o.Jb(b),o.Jb(v.a))},m.\u0275cmp=o.Db({type:m,selectors:[["app-normal-item-list-strategy"]],inputs:{set:"set"},decls:16,vars:8,consts:[[1,"flex","items-center"],[1,"flex","card","mr-4","flex-grow","gap-4","flex-wrap","md:flex-nowrap","justify-items-center","place-content-center"],[1,"w-full","md:w-auto","text-center"],[4,"ngFor","ngForOf"],[1,"flex","justify-items-center"],["xmlns","http://www.w3.org/2000/svg","height","24px","viewBox","0 0 24 24","width","24px",1,"icon"],["d","M0 0h24v24H0V0z","fill","none"],["d","M15.07 1.01h-6v2h6v-2zm-4 13h2v-6h-2v6zm8.03-6.62l1.42-1.42c-.43-.51-.9-.99-1.41-1.41l-1.42 1.42C16.14 4.74 14.19 4 12.07 4c-4.97 0-9 4.03-9 9s4.02 9 9 9 9-4.03 9-9c0-2.11-.74-4.06-1.97-5.61zm-7.03 12.62c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"],["class","mx-2 btn-rounded w-6 h-6",3,"ngStyle",4,"ngIf"],[1,"mx-2","btn-rounded","w-6","h-6",3,"ngStyle"]],template:function(t,e){1&t&&(o.Pb(0,"div",0),o.Pb(1,"div",1),o.Pb(2,"p",2),o.zc(3),o.Ob(),o.Pb(4,"p"),o.zc(5),o.Ob(),o.xc(6,p,2,1,"div",3),o.Pb(7,"div",4),o.zc(8),o.ac(),o.Pb(9,"svg",5),o.Kb(10,"path",6),o.Kb(11,"path",7),o.Ob(),o.Ob(),o.Zb(),o.Pb(12,"p"),o.zc(13),o.Ob(),o.Ob(),o.Pb(14,"p"),o.zc(15),o.Ob(),o.Ob()),2&t&&(o.zb(3),o.Dc("",null==e.exercise?null:e.exercise.name," ",null==e.exercise?null:e.exercise.progression," ",null==e.exercise?null:e.exercise.variation,""),o.zb(2),o.Ac(e.weight),o.zb(1),o.hc("ngForOf",e.bands),o.zb(2),o.Ac(e.rest),o.zb(5),o.Ac(e.quantity),o.zb(2),o.Bc("x",e.setsCount,""))},directives:[h.k,h.l,h.m],styles:[""]}),m),x=r("Ph8R");function w(t,e){1&t&&o.Lb(0)}var z=function(t){return{"background-color":t}};function P(t,e){if(1&t&&o.Kb(0,"div",20),2&t){var n=o.bc(2).$implicit;o.hc("ngStyle",o.kc(1,z,n.intensity.band.color))}}function k(t,e){if(1&t&&(o.Pb(0,"div"),o.Pb(1,"p"),o.zc(2),o.cc(3,"secondsFormat"),o.Ob(),o.Ob()),2&t){var n=o.bc(2).$implicit;o.zb(2),o.Ac(o.dc(3,1,n.quantity))}}function O(t,e){if(1&t&&(o.Pb(0,"p"),o.zc(1),o.cc(2,"setQuantityFormatter"),o.Ob()),2&t){var n=o.bc(2).$implicit;o.zb(1),o.Ac(o.dc(2,1,n.quantity))}}function S(t,e){1&t&&o.Lb(0)}var I=function(t){return{rest:t}};function M(t,e){if(1&t&&(o.Pb(0,"div",21),o.xc(1,S,1,0,"ng-container",15),o.Ob()),2&t){var n=o.bc(2).$implicit;o.bc();var i=o.pc(14);o.zb(1),o.hc("ngTemplateOutlet",i)("ngTemplateOutletContext",o.kc(2,I,n.rest))}}var T=function(t,e){return{weight:t,bodyWeight:e}};function C(t,e){if(1&t&&(o.Pb(0,"div",11),o.Pb(1,"div",13),o.Pb(2,"p",14),o.zc(3),o.cc(4,"titlecase"),o.cc(5,"titlecase"),o.cc(6,"titlecase"),o.Ob(),o.xc(7,w,1,0,"ng-container",15),o.xc(8,P,1,3,"div",16),o.xc(9,k,4,3,"div",17),o.xc(10,O,3,3,"ng-template",null,18,o.yc),o.xc(12,M,2,4,"div",19),o.Ob(),o.Ob()),2&t){var n=o.pc(11),i=o.bc().$implicit;o.bc();var r=o.pc(16);o.zb(3),o.Dc("",o.dc(4,9,null==i.exercise?null:i.exercise.name)," ",o.dc(5,11,null==i.exercise?null:i.exercise.progression)," ",o.dc(6,13,null==i.exercise?null:i.exercise.variation),""),o.zb(4),o.hc("ngTemplateOutlet",r)("ngTemplateOutletContext",o.lc(15,T,i.intensity.weight,i.exercise.bodyWeight)),o.zb(1),o.hc("ngIf",null==i||null==i.intensity?null:i.intensity.band),o.zb(1),o.hc("ngIf",i.exercise.static)("ngIfElse",n),o.zb(3),o.hc("ngIf",i.rest&&0!=i.rest)}}function E(t,e){if(1&t&&(o.Pb(0,"div",11),o.xc(1,C,13,18,"div",12),o.Ob()),2&t){var n=e.index,i=o.bc();o.zb(1),o.hc("ngIf",n<(null==i.set?null:i.set.setParts.length)/(null==i.set?null:i.set.setsCount))}}function A(t,e){if(1&t&&(o.ac(),o.Zb(),o.Pb(0,"p",22),o.zc(1),o.cc(2,"secondsFormat"),o.Ob(),o.ac(),o.Pb(3,"svg",6),o.Kb(4,"path",7),o.Kb(5,"path",23),o.Ob()),2&t){var n=e.rest;o.zb(1),o.Ac(o.dc(2,1,n))}}function F(t,e){1&t&&(o.ac(),o.Pb(0,"svg",6),o.Kb(1,"path",27),o.Kb(2,"path",28),o.Ob())}function D(t,e){if(1&t&&(o.Pb(0,"p"),o.zc(1),o.Ob()),2&t){var n=o.bc(2).weight,i=o.bc();o.zb(1),o.Bc("",i.weightString(n-i.userWeight),"kg")}}function K(t,e){if(1&t&&(o.Pb(0,"div"),o.xc(1,D,2,1,"p",26),o.Ob()),2&t){var n=o.bc().weight,i=o.bc();o.zb(1),o.hc("ngIf",n-i.userWeight!=0)}}function R(t,e){if(1&t&&(o.Pb(0,"div"),o.zc(1),o.Ob()),2&t){var n=o.bc().weight;o.zb(1),o.Bc(" ",n,"kg ")}}function W(t,e){1&t&&(o.ac(),o.Pb(0,"svg",6),o.Kb(1,"path",7),o.Kb(2,"path",29),o.Ob())}function q(t,e){if(1&t&&(o.ac(),o.Zb(),o.Pb(0,"div",24),o.xc(1,F,3,0,"svg",25),o.xc(2,K,2,1,"div",26),o.xc(3,R,2,1,"div",26),o.xc(4,W,3,0,"svg",25),o.Ob()),2&t){var n=e.weight,i=e.bodyWeight,r=o.bc();o.zb(1),o.hc("ngIf",i),o.zb(1),o.hc("ngIf",i),o.zb(1),o.hc("ngIf",!i),o.zb(1),o.hc("ngIf",n-r.userWeight!=0)}}var j,L=((j=function(){function t(e){i(this,t),this.userStatsService=e}return c(t,[{key:"ngOnInit",value:function(){var t=this;this.userStatsService.getWeight().subscribe(function(e){return t.userWeight=e})}},{key:"weightString",value:function(t){return t>0?"+ ".concat(t):"- ".concat(Math.abs(t))}}]),t}()).\u0275fac=function(t){return new(t||j)(o.Jb(x.a))},j.\u0275cmp=o.Db({type:j,selectors:[["app-multiple-item-list-strategy"]],inputs:{set:"set"},decls:17,vars:5,consts:[[1,"flex","md:flex-row","flex-col","gap-2"],[1,"rounded-lg","p-2","shadow-md","bg-light-lightest","dark:bg-dark-dark","mb-auto","mr-auto","text-center"],[1,"flex","w-full"],[1,"flex","flex-col","items-center","flex-grow","mr-4","flex-wrap"],["class","flex flex-row flex-grow items-center justify-items-center flex-wrap w-full",4,"ngFor","ngForOf"],[1,"flex","my-auto"],["xmlns","http://www.w3.org/2000/svg","height","24px","viewBox","0 0 24 24","width","24px",1,"icon-active"],["d","M0 0h24v24H0V0z","fill","none"],["d","M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z"],["rest",""],["weight",""],[1,"flex","flex-row","flex-grow","items-center","justify-items-center","flex-wrap","w-full"],["class","flex flex-row flex-grow items-center justify-items-center flex-wrap w-full",4,"ngIf"],[1,"flex","rounded-lg","p-4","md:p-6","shadow-md","bg-light-lightest","dark:bg-dark-dark","flex-grow","gap-4","flex-wrap","justify-items-center","place-content-center","w-full","mb-2","border-l-8","border-blue"],[1,"text-center","w-full","md:w-auto"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["class","mx-2 btn-rounded w-6 h-6",3,"ngStyle",4,"ngIf"],[4,"ngIf","ngIfElse"],["repsFormat",""],["class","flex",4,"ngIf"],[1,"mx-2","btn-rounded","w-6","h-6",3,"ngStyle"],[1,"flex"],[1,"text-black","dark:text-white"],["d","M15.07 1.01h-6v2h6v-2zm-4 13h2v-6h-2v6zm8.03-6.62l1.42-1.42c-.43-.51-.9-.99-1.41-1.41l-1.42 1.42C16.14 4.74 14.19 4 12.07 4c-4.97 0-9 4.03-9 9s4.02 9 9 9 9-4.03 9-9c0-2.11-.74-4.06-1.97-5.61zm-7.03 12.62c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"],[1,"flex","gap-2"],["xmlns","http://www.w3.org/2000/svg","height","24px","viewBox","0 0 24 24","width","24px","class","icon-active",4,"ngIf"],[4,"ngIf"],["d","M0 0h24v24H0z","fill","none"],["d","M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z"],["d","M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22l1.43-1.43L16.29 22l2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43L22 16.29l-1.43-1.43z"]],template:function(t,e){1&t&&(o.Pb(0,"div",0),o.Pb(1,"div",1),o.zc(2),o.cc(3,"titlecase"),o.Ob(),o.Pb(4,"div",2),o.Pb(5,"div",3),o.xc(6,E,2,1,"div",4),o.Ob(),o.Pb(7,"div",5),o.Pb(8,"p"),o.zc(9),o.Ob(),o.ac(),o.Pb(10,"svg",6),o.Kb(11,"path",7),o.Kb(12,"path",8),o.Ob(),o.Ob(),o.Ob(),o.Ob(),o.xc(13,A,6,3,"ng-template",null,9,o.yc),o.xc(15,q,5,4,"ng-template",null,10,o.yc)),2&t&&(o.zb(2),o.Ac(o.dc(3,3,e.set.type)),o.zb(4),o.hc("ngForOf",null==e.set?null:e.set.setParts),o.zb(3),o.Ac(e.set.setsCount))},directives:[h.k,h.l,h.q,h.m],pipes:[h.t,v.a,b],styles:[""]}),j);function $(t,e){if(1&t&&(o.Pb(0,"div"),o.Kb(1,"app-normal-item-list-strategy",10),o.Ob()),2&t){var n=o.bc(2).$implicit;o.zb(1),o.hc("set",n)}}function H(t,e){if(1&t&&(o.Pb(0,"div"),o.Kb(1,"app-multiple-item-list-strategy",10),o.Ob()),2&t){var n=o.bc(2).$implicit;o.zb(1),o.hc("set",n)}}function B(t,e){if(1&t){var n=o.Qb();o.Pb(0,"div",11),o.Pb(1,"button",12),o.Xb("click",function(){o.sc(n);var t=o.bc(2).index;return o.bc().onEditSetClicked(t)}),o.ac(),o.Pb(2,"svg",13),o.Kb(3,"path",14),o.Kb(4,"path",15),o.Ob(),o.Ob(),o.Zb(),o.Pb(5,"button",12),o.Xb("click",function(){o.sc(n);var t=o.bc(2).index;return o.bc().onDeleteSetClicked(t)}),o.ac(),o.Pb(6,"svg",13),o.Kb(7,"path",14),o.Kb(8,"path",16),o.Ob(),o.Ob(),o.Zb(),o.Pb(9,"button",17),o.ac(),o.Pb(10,"svg",13),o.Kb(11,"path",18),o.Kb(12,"path",19),o.Ob(),o.Ob(),o.Ob()}}function V(t,e){1&t&&o.Lb(0)}var J=function(t){return{rest:t}};function Q(t,e){if(1&t&&(o.Pb(0,"div",4),o.xc(1,V,1,0,"ng-container",20),o.Ob()),2&t){var n=o.bc(2).$implicit;o.bc();var i=o.pc(3);o.zb(1),o.hc("ngTemplateOutlet",i)("ngTemplateOutletContext",o.kc(2,J,n.finalRest))}}function X(t,e){if(1&t&&(o.Pb(0,"div",4),o.Pb(1,"div",5),o.Pb(2,"div",6),o.xc(3,$,2,1,"div",7),o.xc(4,H,2,1,"div",8),o.Ob(),o.xc(5,B,13,0,"div",9),o.Ob(),o.xc(6,Q,2,4,"div",3),o.Ob()),2&t){var n=o.bc(),i=n.$implicit,r=n.last,c=o.bc();o.zb(2),o.hc("ngSwitch",null==i?null:i.type),o.zb(1),o.hc("ngSwitchCase","normal"),o.zb(2),o.hc("ngIf",c.editing),o.zb(1),o.hc("ngIf",!r)}}function Z(t,e){if(1&t&&(o.Pb(0,"div",2),o.xc(1,X,7,4,"div",3),o.Ob()),2&t){var n=e.$implicit;o.zb(1),o.hc("ngIf",n)}}function Y(t,e){if(1&t&&(o.Pb(0,"div",21),o.Kb(1,"div",22),o.Pb(2,"div",23),o.Pb(3,"p",24),o.zc(4),o.cc(5,"secondsFormat"),o.Ob(),o.ac(),o.Pb(6,"svg",25),o.Kb(7,"path",18),o.Kb(8,"path",26),o.Ob(),o.Ob(),o.Zb(),o.Kb(9,"div",22),o.Ob()),2&t){var n=e.rest;o.zb(4),o.Ac(o.dc(5,1,n))}}var G,U=((G=function(){function t(e,n,r){i(this,t),this.trainingsService=e,this.route=n,this.trainingsServiceApi=r,this.trainingSpecs=new o.o,this.training=new a.a}return c(t,[{key:"ngOnInit",value:function(){var t=this,e=this.route.snapshot.paramMap.get("id");this.trainingsService.getTrainingFromAPI(e),this.training=this.trainingsService.getTraining(),this.training.subscribe(function(e){e&&t.trainingsServiceApi.getTrainingSpecs(e.id).subscribe(function(e){t.trainingSpecs.next(e)})})}},{key:"onEditSetClicked",value:function(t){this.trainingsService.setExerciseSetToEdit(t)}},{key:"onDeleteSetClicked",value:function(t){this.trainingsService.deleteExerciseSet(t)}}]),t}()).\u0275fac=function(t){return new(t||G)(o.Jb(u.a),o.Jb(l.a),o.Jb(f.a))},G.\u0275cmp=o.Db({type:G,selectors:[["app-exercises-set-list"]],inputs:{editing:"editing"},outputs:{trainingSpecs:"trainingSpecs"},decls:4,vars:3,consts:[["class","flex flex-col items-center w-full",4,"ngFor","ngForOf"],["rest",""],[1,"flex","flex-col","items-center","w-full"],["class","w-full",4,"ngIf"],[1,"w-full"],[1,"flex","w-full"],[1,"w-full",3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"],["class","flex flex-col ml-2 mt-14 md:mt-0 gap-2",4,"ngIf"],[3,"set"],[1,"flex","flex-col","ml-2","mt-14","md:mt-0","gap-2"],[1,"btn-rounded","btn-blue",3,"click"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 24 24",1,"icon-white","w-6","h-6"],["d","M0 0h24v24H0z","fill","none"],["d","M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"],["d","M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"],[1,"btn-rounded","btn-blue"],["d","M0 0h24v24H0V0z","fill","none"],["d","M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"flex","flex-row","items-center","my-2"],[1,"flex-grow","h-px","bg-light-dark","dark:bg-dark-light","mx-3"],[1,"flex","flex-row"],[1,"text-sm","text-black","dark:text-white"],["xmlns","http://www.w3.org/2000/svg","height","20px","viewBox","0 0 24 24","width","20px",1,"icon-active"],["d","M15.07 1.01h-6v2h6v-2zm-4 13h2v-6h-2v6zm8.03-6.62l1.42-1.42c-.43-.51-.9-.99-1.41-1.41l-1.42 1.42C16.14 4.74 14.19 4 12.07 4c-4.97 0-9 4.03-9 9s4.02 9 9 9 9-4.03 9-9c0-2.11-.74-4.06-1.97-5.61zm-7.03 12.62c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"]],template:function(t,e){var n;(1&t&&(o.xc(0,Z,2,1,"div",0),o.cc(1,"async"),o.xc(2,Y,10,3,"ng-template",null,1,o.yc)),2&t)&&o.hc("ngForOf",null==(n=o.dc(1,1,e.training))?null:n.setsDone)},directives:[h.k,h.l,h.n,h.o,h.p,y,L,h.q],pipes:[h.b,v.a],styles:[""]}),G)},"7Mzq":function(e,n,r){"use strict";r.d(n,"f",function(){return a}),r.d(n,"c",function(){return o}),r.d(n,"d",function(){return u}),r.d(n,"e",function(){return l}),r.d(n,"b",function(){return f}),r.d(n,"a",function(){return h});var s=function(){function e(){i(this,e)}return c(e,[{key:"addCount",value:function(t,e){this[t]||(this[t]=0),this[t]+=e}},{key:"addCounts",value:function(e){for(var n=0,i=Object.entries(e);n<i.length;n++){var r=t(i[n],2),c=r[0],s=r[1];this.addCount(c,s)}}}]),e}(),a=function(){function t(){i(this,t),this.setsDone=new Array}return c(t,[{key:"getTotalSets",value:function(){var t=0;return this.setsDone.forEach(function(e){t+=e.setsCount}),t}},{key:"getTotalReps",value:function(){var t=0;return this.setsDone.forEach(function(e){t+=e.getTotalReps()}),t}},{key:"getTotalMovedWeight",value:function(){var t=0;return this.setsDone.forEach(function(e){t+=e.getMovedWeight()}),t}},{key:"getTotalRest",value:function(){var t=0;return this.setsDone.forEach(function(e){t+=(null==e?void 0:e.getTotalRest())||0}),t}},{key:"getSetsPerMuscle",value:function(){var t=new s;return this.setsDone.forEach(function(e){t.addCounts(e.getSetsPerMuscle())}),t}},{key:"getRepsPerMuscle",value:function(){var t=new s;return this.setsDone.forEach(function(e){t.addCounts(e.getRepsPerMuscle())}),t}},{key:"getWeightPerMuscle",value:function(){var t=new s;return this.setsDone.forEach(function(e){t.addCounts(e.getWeightPerMuscle())}),t}},{key:"getTrainingStatistics",value:function(){return{totalSets:this.getTotalSets(),totalReps:this.getTotalReps(),totalWeightMoved:this.getTotalMovedWeight(),totalRest:this.getTotalRest(),setsPerMuscle:this.getSetsPerMuscle(),repsPerMuscle:this.getRepsPerMuscle(),weightPerMuscle:this.getWeightPerMuscle()}}}],[{key:"fromTraining",value:function(e){var n=new t;return n.id=e.id||null,n.userId=e.userId||null,n.date=new Date(e.date),n.setsDone=new Array,e.setsDone.forEach(function(t){n.setsDone.push(o.fromExerciseSet(t))}),n}}]),t}(),o=function(){function t(){i(this,t),this.setParts=new Array}return c(t,[{key:"getTotalReps",value:function(){var t=0;return this.setParts.forEach(function(e){t+=e.quantity||0}),t}},{key:"getMovedWeight",value:function(){var t=0;return this.setParts.forEach(function(e){t+=e.quantity*e.intensity.getIntensity()}),t}},{key:"getTotalRest",value:function(){var t=this.finalRest;return this.setParts.forEach(function(e){t+=(null==e?void 0:e.rest)||0}),t}},{key:"getSetsPerMuscle",value:function(){var t=new s;return this.setParts.forEach(function(e){t.addCount(e.exercise.muscleGroup,1)}),t}},{key:"getRepsPerMuscle",value:function(){var t=new s;return this.setParts.forEach(function(e){t.addCount(e.exercise.muscleGroup,e.quantity)}),t}},{key:"getWeightPerMuscle",value:function(){var t=new s;return this.setParts.forEach(function(e){t.addCount(e.exercise.muscleGroup,e.quantity*e.intensity.getIntensity())}),t}}],[{key:"fromExerciseSet",value:function(e){var n=new t;return n.setParts=new Array,e.setParts.forEach(function(t){n.setParts.push(u.fromExerciseSet(t))}),n.type=e.type,n.setsCount=e.setsCount,n.finalRest=e.finalRest,n}}]),t}(),u=function(){function t(){i(this,t),this.intensity=new l}return c(t,null,[{key:"fromExerciseSet",value:function(e){var n=new t;return n.exercise=e.exercise,n.intensity=l.fromIntensity(e.intensity),n.quantity=e.quantity,n.rest=e.rest,n}}]),t}(),l=function(){function t(){i(this,t)}return c(t,[{key:"getIntensity",value:function(){var t,e=(null===(t=this.band)||void 0===t?void 0:t.weight)||0;return this.weight+e}}],[{key:"fromIntensity",value:function(e){var n=new t;return e.band&&(n.band=f.fromBand(e.band)),n.weight=e.weight,n}}]),t}(),f=function(){function t(){i(this,t)}return c(t,null,[{key:"fromBand",value:function(e){var n=new t;return n.color=e.color,n.fullUse=e.fullUse,n.twoEnds=e.twoEnds,n.weight=e.weight,n}}]),t}(),h=function t(){i(this,t)}},I853:function(t,e,n){"use strict";n.d(e,"a",function(){return s});var r=n("fXoL"),s=function(){var t=function(){function t(){i(this,t)}return c(t,[{key:"contrast",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:128;if(void 0===t)return"#000";var n=this.hexToRgb(t);return void 0===n||this.rgbToYIQ(n)>=e?"#000":"#fff"}},{key:"rgbToYIQ",value:function(t){return(299*t.r+587*t.g+114*t.b)/1e3}},{key:"hexToRgb",value:function(t){if(t&&void 0!==t&&""!==t){var e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return e?{r:parseInt(e[1],16),g:parseInt(e[2],16),b:parseInt(e[3],16)}:void 0}}}]),t}();return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=r.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()},gIeq:function(t,e,n){"use strict";n.d(e,"a",function(){return o});var r=n("2Vo4"),s=n("n1iY"),a=n("fXoL"),o=function(){var t=function(){function t(e){i(this,t),this.trainingsService=e,this.training=new r.a(null),this.selectedSet=new r.a(null),this.indexSelected=new r.a(null),this.setOnIndexSelectedChanged()}return c(t,[{key:"setOnIndexSelectedChanged",value:function(){var t=this;this.indexSelected.subscribe(function(e){(e||0===e)&&t.selectedSet.next(t.training.value.setsDone[e])})}},{key:"setExerciseSetToEdit",value:function(t){this.indexSelected.next(t)}},{key:"deleteExerciseSet",value:function(t){this.training.value.setsDone.splice(t,1)}},{key:"confirmSetSelectedEdition",value:function(t){var e=this.training.value.setsDone,n=this.indexSelected.value;null==n||n>=e.length?e.push(t):e[n]=t,this.indexSelected.next(null),this.selectedSet.next(null)}},{key:"getTraining",value:function(){return this.training.asObservable()}},{key:"getSelectedSet",value:function(){return this.selectedSet.asObservable()}},{key:"getTrainingFromAPI",value:function(t){var e=this;this.trainingsService.getTraining(t).subscribe(function(t){e.training.next(t)})}},{key:"saveTraining",value:function(){this.trainingsService.saveTraining(this.training.value)}}]),t}();return t.\u0275fac=function(e){return new(e||t)(a.Tb(s.a))},t.\u0275prov=a.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()},wzjf:function(t,e,n){"use strict";n.d(e,"a",function(){return s});var r=n("fXoL"),s=function(){var t=function(){function t(){i(this,t)}return c(t,[{key:"transform",value:function(t){if(!t)return"0''";var e=Math.floor(t/60),n=t%60,i="";return 0!==e&&null!=e&&(i+="".concat(e,"'")),0!==e&&0!==n&&(i+=" "),0!==n&&null!=n&&(i+="".concat(n,"''")),i}}]),t}();return t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=r.Ib({name:"secondsFormat",type:t,pure:!0}),t.\u0275prov=r.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()}}])}();