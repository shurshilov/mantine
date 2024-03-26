(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[88809],{97878:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-pagination",function(){return t(47331)}])},47331:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return x}});var a=t(52322),i=t(45392),o=t(2784),s=t(46159);let l={type:"code",component:function(){return o.createElement(s.t,{total:10})},centered:!0};var r=t(22188),d=t(96183),u=t(79016),c=t(33638);let g=(0,u.A)(c.us.usePagination);function m(n){let e={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...n.components},{Demo:t}=e;return t||function(n,e){throw Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.code,{children:"use-pagination"})," is a state management hook for ",(0,a.jsx)(e.a,{href:"/core/pagination/",children:"Pagination"})," component,\nit manages pagination with controlled and uncontrolled state:"]}),"\n",(0,a.jsx)(t,{data:l}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-tsx",children:"const pagination = usePagination({ total: 10, initialPage: 1 });\n\npagination.range; // -> [1, 2, 3, 4, 5, 'dots', 10];\n\npagination.setPage(5);\npagination.range; // -> [1, 'dots', 4, 5, 6, 'dots', 10];\n\npagination.next();\npagination.range; // -> [1, 'dots', 5, 6, 7, 'dots', 10];\n\npagination.previous();\npagination.range; // -> [1, 'dots', 4, 5, 6, 'dots', 10];\n\npagination.last();\npagination.range; // -> [1, 'dots', 6, 7, 8, 9, 10];\n\npagination.first();\npagination.range; // -> [1, 2, 3, 4, 5, 'dots', 10];\n"})}),"\n",(0,a.jsx)(e.h2,{id:"controlled",children:"Controlled"}),"\n",(0,a.jsxs)(e.p,{children:["The hook supports controlled mode, provide ",(0,a.jsx)(e.code,{children:"page"})," and ",(0,a.jsx)(e.code,{children:"onChange"})," props to manage state from outside:"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-tsx",children:"const [page, onChange] = useState(1);\nconst pagination = usePagination({ total: 10, page, onChange });\n\n// Will call onChange with 5\npagination.setPage(5);\npagination.range; // -> [1, 'dots', 4, 5, 6, 'dots', 10];\n\n// ... All other examples work the same\n"})}),"\n",(0,a.jsx)(e.h2,{id:"siblings",children:"Siblings"}),"\n",(0,a.jsxs)(e.p,{children:["Control number of active item siblings with ",(0,a.jsx)(e.code,{children:"siblings"}),":"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-tsx",children:"const pagination = usePagination({ total: 20, siblings: 3 });\n"})}),"\n",(0,a.jsx)(t,{data:r.d,demoProps:{toggle:!0}}),"\n",(0,a.jsx)(e.h2,{id:"boundaries",children:"Boundaries"}),"\n",(0,a.jsxs)(e.p,{children:["Control number of items on each boundary with ",(0,a.jsx)(e.code,{children:"boundaries"}),":"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-tsx",children:"const pagination = usePagination({ total: 20, boundaries: 3 });\n"})}),"\n",(0,a.jsx)(t,{data:d._,demoProps:{toggle:!0}}),"\n",(0,a.jsx)(e.h2,{id:"definition",children:"Definition"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-tsx",children:"function usePagination(settings: {\n  /** Page selected on initial render, defaults to 1 */\n  initialPage?: number;\n\n  /** Controlled active page number */\n  page?: number;\n\n  /** Total number of pages */\n  total: number;\n\n  /** Siblings number on left/right side of selected page, defaults to 1 */\n  siblings?: number;\n\n  /** Amount of elements visible on left/right edges, defaults to 1  */\n  boundaries?: number;\n\n  /** Callback fired after change of each page */\n  onChange?: (page: number) => void;\n}): {\n  range: (number | 'dots')[];\n  active: number;\n  setPage: (page: number) => void;\n  next: () => void;\n  previous: () => void;\n  first: () => void;\n  last: () => void;\n};\n"})})]})}function x(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.jsx)(g,{...n,children:(0,a.jsx)(m,{...n})})}},96183:function(n,e,t){"use strict";t.d(e,{_:function(){return l}});var a=t(2784),i=t(8582),o=t(46159);let s=`
import { Text, Pagination } from '@mantine/core';

function Demo() {
  return (
    <>
      <Text mb="xs">1 boundary (default)</Text>
      <Pagination total={20} boundaries={1} defaultValue={10} />

      <Text mt="xl" mb="xs">2 boundaries</Text>
      <Pagination total={20} boundaries={2} defaultValue={10} />

      <Text mt="xl" mb="xs">3 boundaries</Text>
      <Pagination total={20} boundaries={3} defaultValue={10} />
    </>
  );
}
`,l={type:"code",code:s,component:function(){return a.createElement(a.Fragment,null,a.createElement(i.x,{mb:"xs"},"1 boundary (default)"),a.createElement(o.t,{total:20,boundaries:1,defaultValue:10}),a.createElement(i.x,{mt:"xl",mb:"xs"},"2 boundaries"),a.createElement(o.t,{total:20,boundaries:2,defaultValue:10}),a.createElement(i.x,{mt:"xl",mb:"xs"},"3 boundaries"),a.createElement(o.t,{total:20,boundaries:3,defaultValue:10}))}}},22188:function(n,e,t){"use strict";t.d(e,{d:function(){return l}});var a=t(2784),i=t(8582),o=t(46159);let s=`
import { Text, Pagination } from '@mantine/core';

function Demo() {
  return (
    <>
      <Text mb="xs">1 sibling (default)</Text>
      <Pagination total={20} siblings={1} defaultValue={10} />

      <Text mb="xs" mt="xl">2 siblings</Text>
      <Pagination total={20} siblings={2} defaultValue={10} />

      <Text mb="xs" mt="xl">3 siblings</Text>
      <Pagination total={20} siblings={3} defaultValue={10} />
    </>
  );
}
`,l={type:"code",code:s,component:function(){return a.createElement(a.Fragment,null,a.createElement(i.x,{mb:"xs"},"1 sibling (default)"),a.createElement(o.t,{total:20,siblings:1,defaultValue:10}),a.createElement(i.x,{mb:"xs",mt:"xl"},"2 siblings"),a.createElement(o.t,{total:20,siblings:2,defaultValue:10}),a.createElement(i.x,{mb:"xs",mt:"xl"},"3 siblings"),a.createElement(o.t,{total:20,siblings:3,defaultValue:10}))}}}},function(n){n.O(0,[57938,17454,47747,46159,49774,92888,40179],function(){return n(n.s=97878)}),_N_E=n.O()}]);