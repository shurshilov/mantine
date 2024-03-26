(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[92688],{6524:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-resize-observer",function(){return t(4798)}])},4798:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return x}});var r=t(52322),o=t(45392),s=t(2784),i=t(68755),Text=t(8582),c=t(93010),u=t(58898),l=t(45909),d=t(88916);let a=`
import { Text, Code, rem } from '@mantine/core';
import { useResizeObserver } from '@mantine/hooks';

function Demo() {
  const [ref, rect] = useResizeObserver();

  return (
    <>
      <textarea ref={ref} style={{ width: rem(400), height: rem(120) }} />
      <Text ta="center">Rect: <Code>{JSON.stringify(rect)}</Code></Text>
    </>
  );
}`,h={type:"code",code:a,component:function(){let e=(0,i.rZ)(),[n,t]=(0,d.y)();return s.createElement(s.Fragment,null,s.createElement(Text.x,{ta:"center",size:"sm",mb:"xs"},"Resize textarea by dragging its right bottom corner"),s.createElement(c.Z,{justify:"center"},s.createElement("textarea",{ref:n,style:{width:(0,u.h)(400),height:(0,u.h)(120),border:"none",backgroundColor:"var(--mantine-color-body)",position:"relative"}})),s.createElement(Text.x,{ta:"center",style:{marginTop:e.spacing.sm}},"Rect: ",s.createElement(l.E,null,JSON.stringify(t,null,2))))},dimmed:!0};var m=t(79016),f=t(33638);let b=(0,m.A)(f.us.useResizeObserver);function p(e){let n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components},{Demo:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(t,{data:h}),"\n",(0,r.jsx)(n.h2,{id:"api",children:"API"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"use-resize-observer"})," returns a ",(0,r.jsx)(n.code,{children:"ref"})," object that should be passed to the observed element, and the current element content rect, as returned by ",(0,r.jsx)(n.code,{children:"ResizeObserver"}),"'s callback ",(0,r.jsx)(n.code,{children:"entry.contentRect"}),".\nSee ",(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver",children:"Resize Observer API"})," documentation to learn more.\nOn the first render (as well as during SSR), or when no element is being observed, all of the properties are equal to ",(0,r.jsx)(n.code,{children:"0"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { useResizeObserver } from '@mantine/hooks';\n\nfunction Demo() {\n  const [ref, rect] = useResizeObserver();\n  return <div ref={ref}>Observed</div>;\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["See also ",(0,r.jsx)(n.a,{href:"https://mantine.dev/hooks/use-element-size/",children:"use-element-size"})," hook in case you need to subscribe only to ",(0,r.jsx)(n.code,{children:"width"})," and ",(0,r.jsx)(n.code,{children:"height"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"definition",children:"Definition"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"function useResizeObserver<T extends HTMLElement = any>(\n  options?: ResizeObserverOptions\n): [\n  RefObject<T>,\n  {\n    x: number;\n    y: number;\n    top: number;\n    left: number;\n    right: number;\n    bottom: number;\n    height: number;\n    width: number;\n  },\n];\n"})})]})}function x(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(b,{...e,children:(0,r.jsx)(p,{...e})})}},88916:function(e,n,t){"use strict";t.d(n,{h:function(){return i},y:function(){return s}});var r=t(2784);let o={x:0,y:0,width:0,height:0,top:0,left:0,bottom:0,right:0};function s(e){let n=(0,r.useRef)(0),t=(0,r.useRef)(null),[s,i]=(0,r.useState)(o),c=(0,r.useMemo)(()=>"undefined"!=typeof window?new ResizeObserver(e=>{let r=e[0];r&&(cancelAnimationFrame(n.current),n.current=requestAnimationFrame(()=>{t.current&&i(r.contentRect)}))}):null,[]);return(0,r.useEffect)(()=>(t.current&&c?.observe(t.current,e),()=>{c?.disconnect(),n.current&&cancelAnimationFrame(n.current)}),[t.current]),[t,s]}function i(e){let[n,{width:t,height:r}]=s(e);return{ref:n,width:t,height:r}}}},function(e){e.O(0,[57938,17454,47747,49774,92888,40179],function(){return e(e.s=6524)}),_N_E=e.O()}]);