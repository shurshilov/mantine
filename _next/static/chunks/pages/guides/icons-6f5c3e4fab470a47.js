(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[37423],{23472:function(e,n,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/guides/icons",function(){return o(38114)}])},38114:function(e,n,o){"use strict";o.r(n),o.d(n,{default:function(){return b}});var t=o(52322),i=o(45392),r=o(2784),s=o(99808),c=o(58898);let d=`
import { rem } from '@mantine/core';
import { IconBrandMantine } from '@tabler/icons-react';

function Demo() {
  return (
    <IconBrandMantine
      style={{ width: rem(80), height: rem(80) }}
      stroke={1.5}
      color="var(--mantine-color-blue-filled)"
    />
  );
}
`,h={type:"code",component:function(){return r.createElement(s.Z,{style:{width:(0,c.h)(80),height:(0,c.h)(80)},stroke:1.5,color:"var(--mantine-color-blue-filled)"})},centered:!0,code:d};var l=o(17115);function a({size:e,style:n,...o}){return r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",viewBox:"0 0 24 24",style:{width:(0,c.h)(e),height:(0,c.h)(e),...n},...o},r.createElement("path",{stroke:"none",d:"M0 0h24v24H0z"}),r.createElement("path",{d:"M20 6v12a2 2 0 01-2 2H8a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2zM10 16h6"}),r.createElement("path",{d:"M11 11a2 2 0 104 0 2 2 0 10-4 0M4 8h3M4 12h3M4 16h3"}))}let u=`
import { Button } from '@mantine/core';
import { AddressBookIcon } from './AddressBookIcon';

function Demo() {
  return <Button leftSection={<AddressBookIcon size={18} />}>Demo</Button>;
}
`,m=`
import { rem } from '@mantine/core';

interface AddressBookIconProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number | string;
}

export function AddressBookIcon({ size, style, ...others }: AddressBookIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      style={{ width: rem(size), height: rem(size), ...style }}
      {...others}
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <path d="M20 6v12a2 2 0 01-2 2H8a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2zM10 16h6" />
      <path d="M11 11a2 2 0 104 0 2 2 0 10-4 0M4 8h3M4 12h3M4 16h3" />
    </svg>
  );
}
`,p={type:"code",component:function(){return r.createElement(l.z,{leftSection:r.createElement(a,{size:18})},"Demo")},centered:!0,code:[{fileName:"AddressBookIcon.tsx",code:m,language:"tsx"},{fileName:"Demo.tsx",code:u,language:"tsx"}]};var x=o(79016),f=o(33638);let j=(0,x.A)(f.us.Icons);function w(e){let n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components},{Demo:o}=n;return o||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"icons-libraries-with-mantine",children:"Icons libraries with Mantine"}),"\n",(0,t.jsx)(n.p,{children:"You can use any icons library with Mantine components, most popular options are:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://tabler-icons.io/",children:"Tabler icons"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://feathericons.com/",children:"Feather icons"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://icons.radix-ui.com/",children:"Radix icons"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://react-icons.github.io/react-icons/",children:"react-icons"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://fontawesome.com/v5/docs/web/use-with/react",children:"Font Awesome"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"tabler-icons",children:"Tabler icons"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://tabler-icons.io/",children:"Tabler icons"})," are used in Mantine demos, documentation\nand some ",(0,t.jsx)(n.code,{children:"@mantine/"})," packages depend on them. If you do not know which icons library\nto use, we recommend ",(0,t.jsx)(n.a,{href:"https://tabler-icons.io/",children:"Tabler icons"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"icons-size",children:"Icons size"}),"\n",(0,t.jsxs)(n.p,{children:["Most of the icons libraries support ",(0,t.jsx)(n.code,{children:"size"})," prop (or similar ",(0,t.jsx)(n.code,{children:"width"})," and ",(0,t.jsx)(n.code,{children:"height"})," props) which allows changing\nicon width and height. Usually, it is a number in pixels. All Mantine components use ",(0,t.jsx)(n.a,{href:"/styles/rem",children:"rem"}),"\nunits – components are scaled based on user preferences and ",(0,t.jsx)(n.code,{children:"font-size"})," of the root element. If you want to\nsupport this feature in your application, set icon width and height in ",(0,t.jsx)(n.a,{href:"/styles/rem",children:"rem"})," units with ",(0,t.jsx)(n.code,{children:"style"})," prop."]}),"\n",(0,t.jsx)(o,{data:h}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"rem units in size prop"})}),"\n",(0,t.jsxs)(n.p,{children:["Icons ",(0,t.jsx)(n.code,{children:"size"})," prop is usually converted to ",(0,t.jsx)(n.code,{children:"width"})," and ",(0,t.jsx)(n.code,{children:"height"})," props under the hood.\nIf you set ",(0,t.jsx)(n.code,{children:"size={16}"})," it will be converted to ",(0,t.jsx)(n.code,{children:'width="16"'})," and ",(0,t.jsx)(n.code,{children:'height="16"'})," attributes\non svg element."]}),"\n",(0,t.jsxs)(n.p,{children:["You can use rem units in ",(0,t.jsx)(n.code,{children:"size"})," prop: ",(0,t.jsx)(n.code,{children:'size="1rem"'})," will be converted to ",(0,t.jsx)(n.code,{children:'width="1rem"'})," and ",(0,t.jsx)(n.code,{children:'height="1rem"'}),",\nbut it is not recommended as it is prohibited by SVG standard – some browsers (Firefox) will show a warning in the console."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"custom-icons",children:"Custom icons"}),"\n",(0,t.jsxs)(n.p,{children:["It is recommended to use icons as React components. In this case, you will be able to use\n",(0,t.jsx)(n.code,{children:"currentColor"})," in the ",(0,t.jsx)(n.code,{children:"fill"})," and ",(0,t.jsx)(n.code,{children:"stroke"})," prop. This will change icon color based on the context\nit is used in."]}),"\n",(0,t.jsx)(o,{data:p})]})}function b(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(j,{...e,children:(0,t.jsx)(w,{...e})})}}},function(e){e.O(0,[57938,17454,47747,49774,92888,40179],function(){return e(e.s=23472)}),_N_E=e.O()}]);