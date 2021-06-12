(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{dhA6:function(e,t,i){"use strict";i.r(t),i.d(t,"EmailVerificationPageModule",function(){return g});var r=i("ofXK"),a=i("3Pt+"),n=i("TEn/"),s=i("tyNb"),o=i("fXoL"),l=i("AytR"),c=i("tk/3");let m=(()=>{class e{constructor(e){this.http=e,this.authUrl=`${l.a.backendUrl}/auth`,this.reSendEmailUrl=`${this.authUrl}/reSendVerificationEmail`,this.verifyEmailUrl=`${this.authUrl}/verifyUser`}reSendVerificationEmail(e){return this.http.post(`${this.reSendEmailUrl}`,e,{observe:"response"})}sendConfirmationEmailCode(e){return this.http.post(`${this.verifyEmailUrl}`,{confirmationCode:e},{observe:"response"})}}return e.\u0275fac=function(t){return new(t||e)(o.Tb(c.b))},e.\u0275prov=o.Fb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();function b(e,t){1&e&&(o.Pb(0,"label",11),o.xc(1,"\xa0- Invalid Email"),o.Ob())}function u(e,t){1&e&&(o.Pb(0,"p",12),o.xc(1,"No user found with given email"),o.Ob())}const d=function(e){return{"input-invalid":e}};function f(e,t){if(1&e){const e=o.Qb();o.Pb(0,"div"),o.Pb(1,"form",4),o.Xb("ngSubmit",function(){o.rc(e);const t=o.bc();return t.onResendEmailCLicked(t.emailForm.value)}),o.Pb(2,"div",5),o.Pb(3,"label",6),o.xc(4,"Email"),o.Ob(),o.vc(5,b,2,0,"label",7),o.Ob(),o.Kb(6,"input",8),o.vc(7,u,2,0,"p",9),o.Pb(8,"button",10),o.xc(9,"Re send verification email"),o.Ob(),o.Ob(),o.Ob()}if(2&e){const e=o.bc();o.zb(1),o.gc("formGroup",e.emailForm),o.zb(4),o.gc("ngIf",!e.emailForm.get("email").valid&&e.emailForm.get("email").touched),o.zb(1),o.gc("ngClass",o.jc(5,d,!e.emailForm.get("email").valid&&e.emailForm.get("email").touched||e.invalidEmail)),o.zb(1),o.gc("ngIf",e.invalidEmail),o.zb(1),o.gc("disabled",e.emailForm.invalid)}}function h(e,t){if(1&e){const e=o.Qb();o.Pb(0,"p",13),o.xc(1," Email confirmed, you can now "),o.Pb(2,"a",14),o.Xb("click",function(){return o.rc(e),o.bc().onGoToLoginClicked()}),o.xc(3,"Log in"),o.Ob(),o.Ob()}}const p=[{path:"",component:(()=>{class e{constructor(e,t,i,r,a){this.formBuilder=e,this.route=t,this.emailVerificationService=i,this.alertCtrl=r,this.router=a,this.invalidEmail=!1,this.emailVerified=!1}ngOnInit(){this.verificationCode=this.route.snapshot.paramMap.get("code"),this.verificationCode&&this.emailVerificationService.sendConfirmationEmailCode(this.verificationCode).subscribe(e=>{switch(e.status){case 200:this.emailVerified=!0,this.alertCtrl.create({header:"Successfully verified",message:"Email has been successfully verified.",buttons:["OK"]}).then(e=>e.present())}},e=>{switch(e.status){case 404:this.invalidEmail=!0,this.alertCtrl.create({header:"Not suitable",message:"This account is not suitable for activation.",buttons:["OK"]}).then(e=>e.present());break;case 500:this.alertCtrl.create({header:"Server error",message:"An error has occurred, try again later.",buttons:["OK"]}).then(e=>e.present())}}),this.emailForm=this.formBuilder.group({email:["",a.p.compose([a.p.email,a.p.required])]})}onResendEmailCLicked(e){this.emailVerificationService.reSendVerificationEmail(e).subscribe(e=>{switch(e.status){case 200:this.alertCtrl.create({header:"Email resend",message:"Email has been resend, please look for it.",buttons:["OK"]}).then(e=>e.present())}},e=>{switch(e.status){case 400:this.alertCtrl.create({header:"Verified",message:"This email has been already verified.",buttons:["OK"]}).then(e=>e.present());break;case 404:this.alertCtrl.create({header:"No email found",message:"There is no user with this email.",buttons:["OK"]}).then(e=>e.present());break;case 500:this.alertCtrl.create({header:"Server error",message:"An error has occurred, try again later.",buttons:["OK"]}).then(e=>e.present())}})}onGoToLoginClicked(){this.router.navigate([""],{replaceUrl:!0})}}return e.\u0275fac=function(t){return new(t||e)(o.Jb(a.b),o.Jb(s.a),o.Jb(m),o.Jb(n.a),o.Jb(s.f))},e.\u0275cmp=o.Db({type:e,selectors:[["app-email-verification"]],decls:5,vars:2,consts:[[1,"background","sm:flex","sm:flex-wrap","sm:content-center"],[1,"w-10/12","sm:w-8/12","md:w-6/12","xl:w-4/12","m-auto","my-10","card"],[4,"ngIf","ngIfElse"],["verificationTemplate",""],[1,"mt-6",3,"formGroup","ngSubmit"],[1,"flex"],[1,"label"],["class","label-error",4,"ngIf"],["type","text","formControlName","email","placeholder","Email",1,"mt-4","mb-2","w-full","input",3,"ngClass"],["class","text-red-500 text-base font-bold text-center",4,"ngIf"],["type","submit",1,"w-full","mt-4","btn","btn-blue",3,"disabled"],[1,"label-error"],[1,"text-red-500","text-base","font-bold","text-center"],[1,"text-lg","text-center","text"],[1,"ml-2","link","text-lg",3,"click"]],template:function(e,t){if(1&e&&(o.Pb(0,"div",0),o.Pb(1,"div",1),o.vc(2,f,10,7,"div",2),o.vc(3,h,4,0,"ng-template",null,3,o.wc),o.Ob(),o.Ob()),2&e){const e=o.oc(4);o.zb(2),o.gc("ngIf",!t.emailVerified)("ngIfElse",e)}},directives:[r.k,a.q,a.k,a.f,a.a,a.j,a.e,r.i],styles:[""]}),e})()}];let v=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.Hb({type:e}),e.\u0275inj=o.Gb({imports:[[s.j.forChild(p)],s.j]}),e})(),g=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.Hb({type:e}),e.\u0275inj=o.Gb({imports:[[r.c,a.g,a.o,n.e,v]]}),e})()}}]);