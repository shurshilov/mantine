(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[74669],{49848:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-in-viewport",function(){return n(5463)}])},5463:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return h}});var o=n(52322),r=n(45392),i=n(2784),Text=n(8582),s=n(28559);let c=`
import { Box, Text } from '@mantine/core';
import { useInViewport } from '@mantine/hooks';

function Demo() {
  const { ref, inViewport } = useInViewport();
  return (
    <>
      <Text ta="center">{inViewport ? 'Box is visible' : 'Scroll to see box'}</Text>
      <Box h={64} style={{ overflow: 'scroll' }}>
        <Box h={128}></Box>
        <Box ref={ref} bg="blue" h={32} p={8}>
          <Text ta="center" c="white">
            A box
          </Text>
        </Box>
      </Box>
    </>
  );
}
`,l={type:"code",code:c,component:function(){let{ref:e,inViewport:t}=function(){let e=(0,i.useRef)(null),[t,n]=(0,i.useState)(!1),o=(0,i.useMemo)(()=>"undefined"==typeof IntersectionObserver?null:new IntersectionObserver(([e])=>n(e.isIntersecting)),[e]);return(0,i.useEffect)(()=>e.current&&o?(o.observe(e.current),()=>o.disconnect()):()=>null,[]),{ref:e,inViewport:t}}();return i.createElement(i.Fragment,null,i.createElement(Text.x,{ta:"center"},t?"Box is visible":"Scroll to see box"),i.createElement(s.x,{h:64,style:{overflow:"scroll"}},i.createElement(s.x,{h:128}),i.createElement(s.x,{ref:e,bg:"blue",h:32,p:8},i.createElement(Text.x,{ta:"center",c:"white"},"A box"))))}};var u=n(79016),a=n(33638);let x=(0,u.A)(a.us.useInViewport);function f(e){let t={a:"a",code:"code",h2:"h2",p:"p",...(0,r.a)(),...e.components},{Demo:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"use-in-viewport"})," is a simpler alternative to ",(0,o.jsx)(t.a,{href:"/hooks/use-intersection",children:"use-intersection"})," that only checks if the element\nis visible in the viewport:"]}),"\n",(0,o.jsx)(n,{data:l})]})}function h(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(x,{...e,children:(0,o.jsx)(f,{...e})})}}},function(e){e.O(0,[57938,17454,47747,49774,92888,40179],function(){return e(e.s=49848)}),_N_E=e.O()}]);