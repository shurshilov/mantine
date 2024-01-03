(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[76225],{84117:function(n,e,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-uncontrolled",function(){return l(23296)}])},23296:function(n,e,l){"use strict";l.r(e),l.d(e,{default:function(){return d}});var t=l(24246),o=l(71670),a=l(3916),u=l(54568);let r=(0,a.A)(u.us.useUncontrolled);function c(n){let e={code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"use-uncontrolled"})," manages state for both controlled and uncontrolled components:"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-tsx",children:"import { useUncontrolled } from '@mantine/hooks';\n\nfunction CustomInput({ value, defaultValue, onChange }) {\n  const [_value, handleChange] = useUncontrolled({\n    value,\n    defaultValue,\n    finalValue: 'Final',\n    onChange,\n  });\n\n  return (\n    <input\n      type=\"text\"\n      value={_value}\n      onChange={(event) => handleChange(event.currentTarget.value)}\n    />\n  );\n}\n"})}),"\n",(0,t.jsx)(e.h2,{id:"set-value-type",children:"Set value type"}),"\n",(0,t.jsx)(e.p,{children:"By default, the hook will set type automatically, but you can provide your own type:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-tsx",children:"useUncontrolled<number>({\n  value: 10,\n  defaultValue: 5,\n  finalValue: 20,\n  onChange: (val) => console.log(val > 10),\n});\n"})}),"\n",(0,t.jsx)(e.h2,{id:"definition",children:"Definition"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-tsx",children:"interface UseUncontrolledInput<T> {\n  /** Value for controlled state */\n  value?: T;\n\n  /** Initial value for uncontrolled state */\n  defaultValue?: T;\n\n  /** Final value for uncontrolled state when value and defaultValue are not provided */\n  finalValue?: T;\n\n  /** Controlled state onChange handler */\n  onChange?(value: T): void;\n}\n\nfunction useUncontrolled<T>(input: UseUncontrolledInput<T>): [\n  T, // current value\n  (value: T) => void, // onChange function\n  boolean, // value that indicates if input is controlled or not\n];\n"})})]})}function d(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(r,{...n,children:(0,t.jsx)(c,{...n})})}}},function(n){n.O(0,[30370,15819,2775,49774,92888,40179],function(){return n(n.s=84117)}),_N_E=n.O()}]);