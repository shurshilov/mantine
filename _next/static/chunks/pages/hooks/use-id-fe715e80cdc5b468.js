(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[66768],{13531:function(n,e,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-id",function(){return i(98747)}])},98747:function(n,e,i){"use strict";i.r(e),i.d(e,{default:function(){return l}});var t=i(24246),s=i(71670),d=i(3916),u=i(54568);let o=(0,d.A)(u.us.useId);function r(n){let e={code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"use-id"})," hook generates a random id that persists across renders.\nThe hook is usually used to bind input elements to labels.\nThe generated random id is saved to ref and will not change unless the component is unmounted."]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-tsx",children:"import { useId } from '@mantine/hooks';\n\nfunction Input({ id }: { id?: string }) {\n  const uuid = useId(id);\n\n  return (\n    <>\n      <label htmlFor={uuid}>Input label</label>\n      <input type=\"text\" id={uuid} />\n    </>\n  );\n}\n\n// input and label will have id 'my-id'\nconst withId = <Input id=\"my-id\" />;\n\n// input and label will have random id 'mantine-fZMoF'\nconst withoutId = <Input />;\n"})}),"\n",(0,t.jsx)(e.h2,{id:"definition",children:"Definition"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-tsx",children:"function useId(id: string): string;\n"})})]})}function l(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(o,{...n,children:(0,t.jsx)(r,{...n})})}}},function(n){n.O(0,[30370,15819,2775,49774,92888,40179],function(){return n(n.s=13531)}),_N_E=n.O()}]);