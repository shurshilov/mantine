(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[77490],{44491:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-input-state",function(){return t(72084)}])},72084:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return o}});var u=t(52322),a=t(45392),s=t(79016),i=t(33638);let r=(0,s.A)(i.us.useInputState);function l(n){let e={code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...n.components};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(e.h2,{id:"usage",children:"Usage"}),"\n",(0,u.jsxs)(e.p,{children:[(0,u.jsx)(e.code,{children:"use-input-state"})," handles state of native inputs (with event in ",(0,u.jsx)(e.code,{children:"onChange"})," handler) and custom inputs (with value in ",(0,u.jsx)(e.code,{children:"onChange"})," handler).\nHook works with all Mantine and native inputs:"]}),"\n",(0,u.jsx)(e.pre,{children:(0,u.jsx)(e.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { NumberInput, TextInput } from '@mantine/core';\nimport { useInputState } from '@mantine/hooks';\n\nfunction WithUseInputState() {\n  const [stringValue, setStringValue] = useInputState('');\n  const [numberValue, setNumberValue] = useInputState(0);\n\n  return (\n    <>\n      <input\n        type=\"text\"\n        value={stringValue}\n        onChange={setStringValue}\n      />\n      <TextInput value={stringValue} onChange={setStringValue} />\n      <NumberInput value={numberValue} onChange={setNumberValue} />\n    </>\n  );\n}\n\nfunction WithUseState() {\n  const [stringValue, setStringValue] = useState('');\n  const [numberValue, setNumberValue] = useState(0);\n\n  return (\n    <>\n      <input\n        type=\"text\"\n        value={stringValue}\n        onChange={(event) =>\n          setStringValue(event.currentTarget.value)\n        }\n      />\n      <TextInput\n        value={stringValue}\n        onChange={(event) =>\n          setStringValue(event.currentTarget.value)\n        }\n      />\n      <NumberInput value={numberValue} onChange={setNumberValue} />\n    </>\n  );\n}\n"})}),"\n",(0,u.jsx)(e.h2,{id:"definition",children:"Definition"}),"\n",(0,u.jsx)(e.pre,{children:(0,u.jsx)(e.code,{className:"language-tsx",children:"function useInputState<T>(\n  initialState: T\n): [\n  T,\n  (value: null | undefined | T | React.ChangeEvent<any>) => void,\n];\n"})})]})}function o(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,u.jsx)(r,{...n,children:(0,u.jsx)(l,{...n})})}}},function(n){n.O(0,[57938,17454,47747,49774,92888,40179],function(){return n(n.s=44491)}),_N_E=n.O()}]);