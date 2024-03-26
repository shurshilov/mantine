(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[48074],{98745:function(e,o,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/dialog",function(){return t(17284)}])},17284:function(e,o,t){"use strict";t.r(o),t.d(o,{default:function(){return B}});var n=t(52322),i=t(45392),l=t(2784),r=t(93010),s=t(17115),a=t(91482),c=t(11200),d=t(38483),u=t(62378),m=t(82027),f=t(87386),h=t(2670),p=t(1198),x=t(96321),g={root:"m-e2125a27",closeButton:"m-5abab665"};let b={shadow:"md",p:"md",withBorder:!1,transitionProps:{transition:"pop-top-right",duration:200},position:{bottom:30,right:30}},j=(0,c.Z)((e,{size:o})=>({root:{"--dialog-size":(0,a.ap)(o,"dialog-size")}})),w=(0,m.d)((e,o)=>{let t=(0,d.w)("Dialog",b,e),{classNames:n,className:i,style:r,styles:s,unstyled:a,vars:c,zIndex:m,position:w,keepMounted:D,opened:y,transitionProps:E,withCloseButton:k,withinPortal:C,children:_,onClose:v,portalProps:z,...B}=t,N=(0,u.y)({name:"Dialog",classes:g,props:t,className:i,style:r,classNames:n,styles:s,unstyled:a,vars:c,varsResolver:j});return l.createElement(f.D,{zIndex:m,position:w,ref:o,withinPortal:C,portalProps:z,unstyled:a},l.createElement(x.u,{keepMounted:D,mounted:y,...E},e=>l.createElement(p.X,{unstyled:a,...N("root",{style:e}),...B},k&&l.createElement(h.P,{onClick:v,unstyled:a,...N("closeButton")}),_)))});w.classes=g,w.displayName="@mantine/core/Dialog";var Text=t(8582),D=t(74770),y=t(3900);let E=`
import { useDisclosure } from '@mantine/hooks';
import { Dialog, Group, Button, TextInput, Text } from '@mantine/core';

function Demo() {
  const [opened, { toggle, close }] = useDisclosure(false);

  return (
    <>
      <Group justify="center">
        <Button onClick={toggle}>Toggle dialog</Button>
      </Group>

      <Dialog opened={opened} withCloseButton onClose={close} size="lg" radius="md">
        <Text size="sm" mb="xs" fw={500}>
          Subscribe to email newsletter
        </Text>

        <Group align="flex-end">
          <TextInput placeholder="hello@gluesticker.com" style={{ flex: 1 }} />
          <Button onClick={close}>Subscribe</Button>
        </Group>
      </Dialog>
    </>
  );
}
`,k={type:"code",component:function(){let[e,{toggle:o,close:t}]=(0,y.q)(!1);return l.createElement(l.Fragment,null,l.createElement(r.Z,{justify:"center"},l.createElement(s.z,{onClick:o},"Toggle dialog")),l.createElement(w,{opened:e,withCloseButton:!0,onClose:t,size:"lg",radius:"md"},l.createElement(Text.x,{size:"sm",mb:"xs",fw:500},"Subscribe to email newsletter"),l.createElement(r.Z,{align:"flex-end"},l.createElement(D.o,{placeholder:"hello@gluesticker.com",style:{flex:1}}),l.createElement(s.z,{onClick:t},"Subscribe"))))},code:E};var C=t(79016),_=t(33638);let v=(0,C.A)(_.us.Dialog);function z(e){let o={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components},{Demo:t}=o;return t||function(e,o){throw Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.code,{children:"Dialog"})," is a simplified version of ",(0,n.jsx)(o.a,{href:"/core/modal/",children:"Modal"})," component.\nIt does not include most of accessibility and usability ",(0,n.jsx)(o.a,{href:"/core/modal/",children:"Modal"})," features:"]}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsx)(o.li,{children:"Focus trap is not available"}),"\n",(0,n.jsx)(o.li,{children:"Does not close on click outside"}),"\n",(0,n.jsx)(o.li,{children:"Does not have overlay"}),"\n"]}),"\n",(0,n.jsxs)(o.p,{children:["Use ",(0,n.jsx)(o.code,{children:"Dialog"})," to attract attention with not important information or action,\nfor example, you can create an email subscription form:"]}),"\n",(0,n.jsx)(t,{data:k}),"\n",(0,n.jsx)(o.h2,{id:"change-position",children:"Change position"}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.code,{children:"Dialog"})," is rendered in ",(0,n.jsx)(o.a,{href:"/core/portal/",children:"Portal"})," and has fixed position, set ",(0,n.jsx)(o.code,{children:"position"})," prop to control dialog's position:"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-tsx",children:"// Dialog in top left corner\n<Dialog position={{ top: 20, left: 20 }} />\n\n// Dialog in bottom left corner\n<Dialog position={{ bottom: 20, left: 20 }} />\n"})}),"\n",(0,n.jsx)(o.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.code,{children:"Dialog"})," is not accessible and most likely will not be announced by screen reader,\nmake sure you do not put any important information. In most cases it would be better\nto select ",(0,n.jsx)(o.a,{href:"/core/modal/",children:"Modal"}),", ",(0,n.jsx)(o.a,{href:"/core/drawer/",children:"Drawer"})," or ",(0,n.jsx)(o.a,{href:"/x/notifications/",children:"Notifications"}),"."]})]})}function B(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(v,{...e,children:(0,n.jsx)(z,{...e})})}},87386:function(e,o,t){"use strict";t.d(o,{D:function(){return p}});var n=t(2784),i=t(58898),l=t(97263),r=t(11200),s=t(38483),a=t(62378),c=t(28559),d=t(82027),u=t(71517),m={root:"m-7f854edf"};let f={position:{bottom:0,right:0},zIndex:(0,l.w)("modal"),withinPortal:!0},h=(0,r.Z)((e,{zIndex:o,position:t})=>({root:{"--affix-z-index":o?.toString(),"--affix-top":(0,i.h)(t?.top),"--affix-left":(0,i.h)(t?.left),"--affix-bottom":(0,i.h)(t?.bottom),"--affix-right":(0,i.h)(t?.right)}})),p=(0,d.d)((e,o)=>{let t=(0,s.w)("Affix",f,e),{classNames:i,className:l,style:r,styles:d,unstyled:p,vars:x,portalProps:g,zIndex:b,withinPortal:j,position:w,...D}=t,y=(0,a.y)({name:"Affix",classes:m,props:t,className:l,style:r,classNames:i,styles:d,unstyled:p,vars:x,varsResolver:h});return n.createElement(u.q,{...g,withinPortal:j},n.createElement(c.x,{ref:o,...y("root"),...D}))});p.classes=m,p.displayName="@mantine/core/Affix"},3900:function(e,o,t){"use strict";t.d(o,{q:function(){return i}});var n=t(2784);function i(e=!1,o){let{onOpen:t,onClose:i}=o||{},[l,r]=(0,n.useState)(e),s=(0,n.useCallback)(()=>{r(e=>e||(t?.(),!0))},[t]),a=(0,n.useCallback)(()=>{r(e=>e?(i?.(),!1):e)},[i]),c=(0,n.useCallback)(()=>{l?a():s()},[a,s,l]);return[l,{open:s,close:a,toggle:c}]}}},function(e){e.O(0,[57938,17454,47747,49774,92888,40179],function(){return e(e.s=98745)}),_N_E=e.O()}]);