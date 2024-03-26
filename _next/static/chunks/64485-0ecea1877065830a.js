"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[64485],{35661:function(e,t,r){r.d(t,{Z:function(){return o}});var o=(0,r(99882).Z)("at","IconAt",[["path",{d:"M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",key:"svg-0"}],["path",{d:"M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28",key:"svg-1"}]])},9945:function(e,t,r){r.d(t,{Z:function(){return o}});var o=(0,r(99882).Z)("lock","IconLock",[["path",{d:"M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z",key:"svg-0"}],["path",{d:"M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0",key:"svg-1"}],["path",{d:"M8 11v-4a4 4 0 1 1 8 0v4",key:"svg-2"}]])},69378:function(e){e.exports=function e(t,r){if(t===r)return!0;if(t&&r&&"object"==typeof t&&"object"==typeof r){if(t.constructor!==r.constructor)return!1;if(Array.isArray(t)){if((o=t.length)!=r.length)return!1;for(n=o;0!=n--;)if(!e(t[n],r[n]))return!1;return!0}if(t.constructor===RegExp)return t.source===r.source&&t.flags===r.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===r.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===r.toString();if((o=(a=Object.keys(t)).length)!==Object.keys(r).length)return!1;for(n=o;0!=n--;)if(!Object.prototype.hasOwnProperty.call(r,a[n]))return!1;for(n=o;0!=n--;){var o,n,a,l=a[n];if(!e(t[l],r[l]))return!1}return!0}return t!=t&&r!=r}},15463:function(e,t,r){function o(e,t,r){"object"==typeof r.value&&(r.value=n(r.value)),r.enumerable&&!r.get&&!r.set&&r.configurable&&r.writable&&"__proto__"!==t?e[t]=r.value:Object.defineProperty(e,t,r)}function n(e){if("object"!=typeof e)return e;var t,r,a,l=0,i=Object.prototype.toString.call(e);if("[object Object]"===i?a=Object.create(e.__proto__||null):"[object Array]"===i?a=Array(e.length):"[object Set]"===i?(a=new Set,e.forEach(function(e){a.add(n(e))})):"[object Map]"===i?(a=new Map,e.forEach(function(e,t){a.set(n(t),n(e))})):"[object Date]"===i?a=new Date(+e):"[object RegExp]"===i?a=new RegExp(e.source,e.flags):"[object DataView]"===i?a=new e.constructor(n(e.buffer)):"[object ArrayBuffer]"===i?a=e.slice(0):"Array]"===i.slice(-6)&&(a=new e.constructor(e)),a){for(r=Object.getOwnPropertySymbols(e);l<r.length;l++)o(a,r[l],Object.getOwnPropertyDescriptor(e,r[l]));for(l=0,r=Object.getOwnPropertyNames(e);l<r.length;l++)Object.hasOwnProperty.call(a,t=r[l])&&a[t]===e[t]||o(a,t,Object.getOwnPropertyDescriptor(e,t))}return a||e}r.d(t,{Y:function(){return n}})},63644:function(e,t,r){r.d(t,{j:function(){return c}});var o=r(2784),n=r(78222),a=r(17115),l=r(3900),i=r(3789);let s=`
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Authentication">
        {/* Modal content */}
      </Modal>

      <Button onClick={open}>Open modal</Button>
    </>
  );
}
`,c={type:"code",code:s,centered:!0,component:function(){let[e,{open:t,close:r}]=(0,l.q)(!1);return o.createElement(o.Fragment,null,o.createElement(n.u,{opened:e,onClose:r,title:"Authentication"},o.createElement(i._,{noShadow:!0,noPadding:!0})),o.createElement(a.z,{onClick:t},"Open modal"))}}},3789:function(e,t,r){r.d(t,{_:function(){return b}});var o=r(2784),n=r(35661),a=r(9945),l=r(1198),i=r(20992),s=r(93010),c=r(74770),u=r(60284),p=r(56159),d=r(8582),m=r(71873),f=r(17115),g=r(88320);function b({noShadow:e,noPadding:t,noSubmit:r,style:b}){let[v,y]=(0,o.useState)("register"),[h,w]=(0,o.useState)(!1),[C,E]=(0,o.useState)(null),O=(0,g.c)({initialValues:{firstName:"",lastName:"",email:"",password:"",confirmPassword:"",termsOfService:!0}});return o.createElement(l.X,{p:t?0:"lg",shadow:e?"none":"sm",style:{...b,position:"relative",backgroundColor:"var(--mantine-color-body)"}},o.createElement("form",{onSubmit:O.onSubmit(()=>{w(!0),E(null),setTimeout(()=>{w(!1),E("register"===v?"User with this email already exists":"User with this email does not exist")},3e3)})},o.createElement(i.f,{visible:h}),"register"===v&&o.createElement(s.Z,{grow:!0},o.createElement(c.o,{"data-autofocus":!0,required:!0,placeholder:"Your first name",label:"First name",...O.getInputProps("firstName")}),o.createElement(c.o,{required:!0,placeholder:"Your last name",label:"Last name",...O.getInputProps("lastName")})),o.createElement(c.o,{mt:"md",required:!0,placeholder:"Your email",label:"Email",leftSection:o.createElement(n.Z,{size:16,stroke:1.5}),...O.getInputProps("email")}),o.createElement(u.W,{mt:"md",required:!0,placeholder:"Password",label:"Password",leftSection:o.createElement(a.Z,{size:16,stroke:1.5}),...O.getInputProps("password")}),"register"===v&&o.createElement(u.W,{mt:"md",required:!0,label:"Confirm Password",placeholder:"Confirm password",leftSection:o.createElement(a.Z,{size:16,stroke:1.5}),...O.getInputProps("confirmPassword")}),"register"===v&&o.createElement(p.X,{mt:"xl",label:"I agree to sell my soul and privacy to this corporation",...O.getInputProps("termsOfService",{type:"checkbox"})}),C&&o.createElement(d.x,{c:"red",size:"sm",mt:"sm"},C),!r&&o.createElement(s.Z,{justify:"space-between",mt:"xl"},o.createElement(m.e,{component:"button",type:"button",c:"dimmed",onClick:()=>{y(e=>"register"===e?"login":"register"),E(null)},size:"sm"},"register"===v?"Have an account? Login":"Don't have an account? Register"),o.createElement(f.z,{color:"blue",type:"submit"},"register"===v?"Register":"Login"))))}},20992:function(e,t,r){r.d(t,{f:function(){return v}});var o=r(2784),n=r(97263),a=r(11200),l=r(68755),i=r(38483),s=r(62378),c=r(28559),u=r(82027),p=r(12491),d=r(87170),m=r(96321),f={root:"m-6e45937b",loader:"m-e8eb006c",overlay:"m-df587f17"};let g={transitionProps:{transition:"fade",duration:0},overlayProps:{backgroundOpacity:.75},zIndex:(0,n.w)("overlay")},b=(0,a.Z)((e,{zIndex:t})=>({root:{"--lo-z-index":t?.toString()}})),v=(0,u.d)((e,t)=>{let r=(0,i.w)("LoadingOverlay",g,e),{classNames:n,className:a,style:u,styles:v,unstyled:y,vars:h,transitionProps:w,loaderProps:C,overlayProps:E,visible:O,zIndex:k,...P}=r,j=(0,l.rZ)(),S=(0,s.y)({name:"LoadingOverlay",classes:f,props:r,className:a,style:u,classNames:n,styles:v,unstyled:y,vars:h,varsResolver:b}),I={...g.overlayProps,...E};return o.createElement(m.u,{transition:"fade",...w,mounted:!!O},e=>o.createElement(c.x,{...S("root",{style:e}),ref:t,...P},o.createElement(p.a,{...S("loader"),unstyled:y,...C}),o.createElement(d.a,{...I,...S("overlay"),darkHidden:!0,unstyled:y,color:E?.color||j.white}),o.createElement(d.a,{...I,...S("overlay"),lightHidden:!0,unstyled:y,color:E?.color||j.colors.dark[5]})))});v.classes=f,v.displayName="@mantine/core/LoadingOverlay"},60284:function(e,t,r){r.d(t,{W:function(){return w}});var o=r(2784),n=r(40489),a=r(66178),l=r(9341),i=r(91482),s=r(11200),c=r(51477),u=r(62378),p=r(38483),d=r(97072),m=r(82027),f=r(54813),g=r(6941),b=r(73063),v={root:"m-f61ca620",input:"m-ccf8da4c",innerInput:"m-f2d85dd2",visibilityToggle:"m-b1072d44"};let y={visibilityToggleIcon:({reveal:e})=>o.createElement("svg",{viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{width:"var(--psi-icon-size)",height:"var(--psi-icon-size)"}},o.createElement("path",{d:e?"M13.3536 2.35355C13.5488 2.15829 13.5488 1.84171 13.3536 1.64645C13.1583 1.45118 12.8417 1.45118 12.6464 1.64645L10.6828 3.61012C9.70652 3.21671 8.63759 3 7.5 3C4.30786 3 1.65639 4.70638 0.0760002 7.23501C-0.0253338 7.39715 -0.0253334 7.60288 0.0760014 7.76501C0.902945 9.08812 2.02314 10.1861 3.36061 10.9323L1.64645 12.6464C1.45118 12.8417 1.45118 13.1583 1.64645 13.3536C1.84171 13.5488 2.15829 13.5488 2.35355 13.3536L4.31723 11.3899C5.29348 11.7833 6.36241 12 7.5 12C10.6921 12 13.3436 10.2936 14.924 7.76501C15.0253 7.60288 15.0253 7.39715 14.924 7.23501C14.0971 5.9119 12.9769 4.81391 11.6394 4.06771L13.3536 2.35355ZM9.90428 4.38861C9.15332 4.1361 8.34759 4 7.5 4C4.80285 4 2.52952 5.37816 1.09622 7.50001C1.87284 8.6497 2.89609 9.58106 4.09974 10.1931L9.90428 4.38861ZM5.09572 10.6114L10.9003 4.80685C12.1039 5.41894 13.1272 6.35031 13.9038 7.50001C12.4705 9.62183 10.1971 11 7.5 11C6.65241 11 5.84668 10.8639 5.09572 10.6114Z":"M7.5 11C4.80285 11 2.52952 9.62184 1.09622 7.50001C2.52952 5.37816 4.80285 4 7.5 4C10.1971 4 12.4705 5.37816 13.9038 7.50001C12.4705 9.62183 10.1971 11 7.5 11ZM7.5 3C4.30786 3 1.65639 4.70638 0.0760002 7.23501C-0.0253338 7.39715 -0.0253334 7.60288 0.0760014 7.76501C1.65639 10.2936 4.30786 12 7.5 12C10.6921 12 13.3436 10.2936 14.924 7.76501C15.0253 7.60288 15.0253 7.39715 14.924 7.23501C13.3436 4.70638 10.6921 3 7.5 3ZM7.5 9.5C8.60457 9.5 9.5 8.60457 9.5 7.5C9.5 6.39543 8.60457 5.5 7.5 5.5C6.39543 5.5 5.5 6.39543 5.5 7.5C5.5 8.60457 6.39543 9.5 7.5 9.5Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"}))},h=(0,s.Z)((e,{size:t})=>({root:{"--psi-icon-size":(0,i.ap)(t,"psi-icon-size"),"--psi-button-size":(0,i.ap)(t,"psi-button-size")}})),w=(0,m.d)((e,t)=>{let r=(0,p.w)("PasswordInput",y,e),{classNames:i,className:s,style:m,styles:b,unstyled:w,vars:C,required:E,error:O,leftSection:k,disabled:P,id:j,variant:S,inputContainer:I,description:M,label:Z,size:_,errorProps:x,descriptionProps:z,labelProps:D,withAsterisk:L,inputWrapperOrder:A,wrapperProps:N,radius:q,rightSection:R,rightSectionWidth:B,rightSectionPointerEvents:T,leftSectionWidth:V,visible:W,defaultVisible:Y,onVisibilityChange:F,visibilityToggleIcon:H,visibilityToggleButtonProps:K,rightSectionProps:U,leftSectionProps:X,leftSectionPointerEvents:G,mod:J,...Q}=r,$=(0,a.M)(j),[ee,et]=(0,l.C)({value:W,defaultValue:Y,finalValue:!1,onChange:F}),er=()=>et(!ee),eo=(0,u.y)({name:"PasswordInput",classes:v,props:r,className:s,style:m,classNames:i,styles:b,unstyled:w,vars:C,varsResolver:h}),{resolvedClassNames:en,resolvedStyles:ea}=(0,c.h)({classNames:i,styles:b,props:r}),{styleProps:el,rest:ei}=(0,d.c)(Q),es=o.createElement(f.A,{...eo("visibilityToggle"),disabled:P,radius:q,"aria-hidden":!K,tabIndex:-1,...K,variant:"subtle",color:"gray",unstyled:w,onMouseDown:e=>{e.preventDefault(),K?.onMouseDown?.(e),er()},onKeyDown:e=>{K?.onKeyDown?.(e)," "===e.key&&(e.preventDefault(),er())}},o.createElement(H,{reveal:ee}));return o.createElement(g.I.Wrapper,{required:E,id:$,label:Z,error:O,description:M,size:_,classNames:en,styles:ea,__staticSelector:"PasswordInput",errorProps:x,descriptionProps:z,unstyled:w,withAsterisk:L,inputWrapperOrder:A,inputContainer:I,variant:S,labelProps:{...D,htmlFor:$},mod:J,...eo("root"),...el,...N},o.createElement(g.I,{component:"div",error:O,leftSection:k,size:_,classNames:{...en,input:(0,n.Z)(v.input,en.input)},styles:ea,radius:q,disabled:P,__staticSelector:"PasswordInput",rightSectionWidth:B,rightSection:R??es,variant:S,unstyled:w,leftSectionWidth:V,rightSectionPointerEvents:T||"all",rightSectionProps:U,leftSectionProps:X,leftSectionPointerEvents:G,withAria:!1},o.createElement("input",{required:E,"data-invalid":!!O||void 0,"data-with-left-section":!!k||void 0,...eo("innerInput"),disabled:P,id:$,ref:t,...ei,autoComplete:ei.autoComplete||"off",type:ee?"text":"password"})))});w.classes={...b.M.classes,...v},w.displayName="@mantine/core/PasswordInput"},3900:function(e,t,r){r.d(t,{q:function(){return n}});var o=r(2784);function n(e=!1,t){let{onOpen:r,onClose:n}=t||{},[a,l]=(0,o.useState)(e),i=(0,o.useCallback)(()=>{l(e=>e||(r?.(),!0))},[r]),s=(0,o.useCallback)(()=>{l(e=>e?(n?.(),!1):e)},[n]),c=(0,o.useCallback)(()=>{a?s():i()},[s,i,a]);return[a,{open:i,close:s,toggle:c}]}}}]);