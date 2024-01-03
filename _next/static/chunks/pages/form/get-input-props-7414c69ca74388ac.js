(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[37798],{75695:function(e,n,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/form/get-input-props",function(){return o(70676)}])},70676:function(e,n,o){"use strict";o.r(n),o.d(n,{default:function(){return p}});var t=o(24246),r=o(71670),s=o(68058),i=o(99166),c=o(18748),d=o(97900),l=o(3916),a=o(54568);let u=(0,l.A)(a.us.formGetInputProps);function h(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components},{Demo:o}=n;return o||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"getinputprops-handler",children:"getInputProps handler"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"form.getInputProps"})," returns an object with ",(0,t.jsx)(n.code,{children:"value"}),", ",(0,t.jsx)(n.code,{children:"onChange"}),", ",(0,t.jsx)(n.code,{children:"onFocus"}),", ",(0,t.jsx)(n.code,{children:"onBlur"}),", ",(0,t.jsx)(n.code,{children:"error"}),"\nand all props specified in ",(0,t.jsx)(n.code,{children:"enhanceGetInputProps"})," function. Return value should be spread to the input component."]}),"\n",(0,t.jsxs)(n.p,{children:["You can pass the following options to ",(0,t.jsx)(n.code,{children:"form.getInputProps"})," as second argument:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"type"}),": default ",(0,t.jsx)(n.code,{children:"input"}),". Must be set to ",(0,t.jsx)(n.code,{children:"checkbox"})," if the input requires ",(0,t.jsx)(n.code,{children:"checked"})," prop instead of ",(0,t.jsx)(n.code,{children:"value"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"withError"}),": default ",(0,t.jsx)(n.code,{children:"type === 'input'"}),". Determines whether the returned object should contain an ",(0,t.jsx)(n.code,{children:"error"})," property with\n",(0,t.jsx)(n.code,{children:"form.errors[path]"})," value."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"withFocus"}),": default ",(0,t.jsx)(n.code,{children:"true"}),". Determines whether the returned object should contain an ",(0,t.jsx)(n.code,{children:"onFocus"})," handler. If disabled, the touched\nstate will only change if value of the field has been changed."]}),"\n",(0,t.jsxs)(n.li,{children:["Any additional props that can be accessed with ",(0,t.jsx)(n.code,{children:"enhanceGetInputProps"})," function. These props are not passed to the input."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { Checkbox, TextInput, useForm } from '@mantine/core';\n\nfunction Demo() {\n  const form = useForm({\n    initialValues: { name: '', accepted: false },\n    validationRules: {\n      name: (value) => value.trim().length > 2,\n    },\n  });\n\n  return (\n    <>\n      <TextInput {...form.getInputProps('name')} />\n      <Checkbox\n        {...form.getInputProps('accepted', { type: 'checkbox' })}\n      />\n    </>\n  );\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"enhancegetinputprops",children:"enhanceGetInputProps"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"enhanceGetInputProps"})," is a function that can be used to add additional props to the object returned by ",(0,t.jsx)(n.code,{children:"form.getInputProps"}),".\nYou can define it in ",(0,t.jsx)(n.code,{children:"useForm"})," hook options. Its argument is an object with the following properties:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"inputProps"})," – object returned by ",(0,t.jsx)(n.code,{children:"form.getInputProps"})," by default"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"field"})," – field path, first argument of ",(0,t.jsx)(n.code,{children:"form.getInputProps"}),", for example ",(0,t.jsx)(n.code,{children:"name"}),", ",(0,t.jsx)(n.code,{children:"user.email"}),", ",(0,t.jsx)(n.code,{children:"users.0.name"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"options"})," – second argument of ",(0,t.jsx)(n.code,{children:"form.getInputProps"}),", for example ",(0,t.jsx)(n.code,{children:"{ type: 'checkbox' }"}),", can be used to pass additional\noptions to ",(0,t.jsx)(n.code,{children:"enhanceGetInputProps"})," function"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"form"})," – form instance"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Example of using ",(0,t.jsx)(n.code,{children:"enhanceGetInputProps"})," to disable input based on field path:"]}),"\n",(0,t.jsx)(o,{data:s.T}),"\n",(0,t.jsxs)(n.p,{children:["Example of using ",(0,t.jsx)(n.code,{children:"enhanceGetInputProps"})," to add additional props to the input based on option passed to ",(0,t.jsx)(n.code,{children:"form.getInputProps"}),":"]}),"\n",(0,t.jsx)(o,{data:i.w}),"\n",(0,t.jsxs)(n.p,{children:["Example of using ",(0,t.jsx)(n.code,{children:"enhanceGetInputProps"})," to add ",(0,t.jsx)(n.code,{children:"disabled"})," prop to all inputs if the form\nhas not been initialized yet:"]}),"\n",(0,t.jsx)(o,{data:c.W}),"\n",(0,t.jsx)(n.h2,{id:"initialize-form",children:"Initialize form"}),"\n",(0,t.jsxs)(n.p,{children:["When called ",(0,t.jsx)(n.code,{children:"form.initialize"})," handler sets ",(0,t.jsx)(n.code,{children:"initialValues"})," and ",(0,t.jsx)(n.code,{children:"values"})," to the same value\nand marks form as initialized. It can be used only once, next ",(0,t.jsx)(n.code,{children:"form.initialize"})," calls\nare ignored."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"form.initialize"})," is useful when you want to sync form values with backend API response:"]}),"\n",(0,t.jsx)(o,{data:d.j}),"\n",(0,t.jsxs)(n.p,{children:["Example with ",(0,t.jsx)(n.a,{href:"https://tanstack.com/query/latest",children:"TanStack Query"})," (react-query):"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { useEffect } from 'react';\nimport { useQuery } from '@tanstack/react-query';\nimport { useForm } from '@mantine/form';\n\nfunction Demo() {\n  const query = useQuery({\n    queryKey: ['current-user'],\n    queryFn: () => fetch('/api/users/me').then((res) => res.json()),\n  });\n\n  const form = useForm({\n    initialValues: {\n      name: '',\n      email: '',\n    },\n  });\n\n  useEffect(() => {\n    if (query.data) {\n      // Even if query.data changes, form will be initialized only once\n      form.initialize(query.data);\n    }\n  }, [query.data]);\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"integrate-getinputprops-with-custom-inputs",children:"Integrate getInputProps with custom inputs"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"form.getInputProps"})," returns an object with the following properties:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"value"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"onChange"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"onFocus"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"onBlur"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"error"})}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["To create a custom input that works with ",(0,t.jsx)(n.code,{children:"form.getInputProps"}),", make sure that your component\naccepts these props and passes them to the input component or uses them in any other way."]}),"\n",(0,t.jsx)(n.p,{children:"Example of creating a custom input component:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"interface CustomInputProps {\n  value: string;\n  onChange(event: React.ChangeEvent<HTMLInputElement>): void;\n  onFocus(event: React.FocusEvent<HTMLInputElement>): void;\n  onBlur(event: React.FocusEvent<HTMLInputElement>): void;\n  error: string;\n}\n\nexport function CustomInput({\n  value,\n  onChange,\n  onFocus,\n  onBlur,\n  error,\n}: CustomInputProps) {\n  return (\n    <div>\n      <input\n        value={value}\n        onChange={onChange}\n        onFocus={onFocus}\n        onBlur={onBlur}\n      />\n      {error && <div>{error}</div>}\n    </div>\n  );\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Then use it with ",(0,t.jsx)(n.code,{children:"form.getInputProps"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { useForm } from '@mantine/core';\nimport { CustomInput } from './CustomInput';\n\nfunction Demo() {\n  const form = useForm({\n    initialValues: { name: '' },\n  });\n\n  return <CustomInput {...form.getInputProps('name')} />;\n}\n"})})]})}function p(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(u,{...e,children:(0,t.jsx)(h,{...e})})}}},function(e){e.O(0,[30370,62740,15819,2775,56926,3242,49774,92888,40179],function(){return e(e.s=75695)}),_N_E=e.O()}]);