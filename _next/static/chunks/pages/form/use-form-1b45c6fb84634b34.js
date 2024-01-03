(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9141],{66471:function(e){"use strict";e.exports=function e(n,r){if(n===r)return!0;if(n&&r&&"object"==typeof n&&"object"==typeof r){if(n.constructor!==r.constructor)return!1;if(Array.isArray(n)){if((t=n.length)!=r.length)return!1;for(o=t;0!=o--;)if(!e(n[o],r[o]))return!1;return!0}if(n.constructor===RegExp)return n.source===r.source&&n.flags===r.flags;if(n.valueOf!==Object.prototype.valueOf)return n.valueOf()===r.valueOf();if(n.toString!==Object.prototype.toString)return n.toString()===r.toString();if((t=(s=Object.keys(n)).length)!==Object.keys(r).length)return!1;for(o=t;0!=o--;)if(!Object.prototype.hasOwnProperty.call(r,s[o]))return!1;for(o=t;0!=o--;){var t,o,s,a=s[o];if(!e(n[a],r[a]))return!1}return!0}return n!=n&&r!=r}},7331:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/form/use-form",function(){return r(82236)}])},82236:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return m}});var t=r(24246),o=r(71670),s=r(12184),a=r(3916),i=r(54568);let l=(0,a.A)(i.us.useForm);function u(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.a)(),...e.components},{Demo:r,InstallScript:a}=n;return r||c("Demo",!0),a||c("InstallScript",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"@mantine/form"})," package does not depend on any other libraries, you can use it with or without ",(0,t.jsx)(n.code,{children:"@mantine/core"})," inputs:"]}),"\n",(0,t.jsx)(a,{packages:"@mantine/form"}),"\n",(0,t.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(r,{data:s.j}),"\n",(0,t.jsx)(n.h2,{id:"api-overview",children:"API overview"}),"\n",(0,t.jsx)(n.p,{children:"All examples below use the following example use-form hook."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { useForm } from '@mantine/form';\n\nconst form = useForm({\n  initialValues: {\n    path: '',\n    path2: '',\n    user: {\n      firstName: 'John',\n      lastName: 'Doe',\n    },\n    fruits: [\n      { name: 'Banana', available: true },\n      { name: 'Orange', available: false },\n    ],\n    accepted: false,\n  },\n});\n"})}),"\n",(0,t.jsx)(n.h3,{id:"values",children:"Values"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/form/values/",children:"Form values guide"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"// get current form values\nform.values;\n\n// Set all form values\nform.setValues(values);\n\n// Set all form values using the previous state\nform.setValues((prev) => ({ ...prev, ...values }));\n\n// Set value of single field\nform.setFieldValue('path', value);\n\n// Set value of nested field\nform.setFieldValue('user.firstName', 'Jane');\n\n// Resets form.values to initialValues,\n// clears all validation errors,\n// resets touched and dirty state\nform.reset();\n\n// Sets initial values, used when form is reset\nform.setInitialValues({ values: 'object' });\n"})}),"\n",(0,t.jsx)(n.h3,{id:"list-items",children:"List items"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/form/nested/",children:"Nested fields guide"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"// Inserts given list item at the specified path\nform.insertListItem('fruits', { name: 'Apple', available: true });\n\n// An optional index may be provided to specify the position in a nested field.\n// If the index is provided, item will be inserted at the given position.\n// If the index is larger than the current list, the element is inserted at the last position.\nform.insertListItem('fruits', { name: 'Orange', available: true }, 1);\n\n// Removes the list item at the specified path and index.\nform.removeListItem('fruits', 1);\n\n// Swaps two items of the list at the specified path.\n// You should make sure that there are elements at at the `from` and `to` index.\nform.reorderListItem('fruits', { from: 1, to: 0 });\n"})}),"\n",(0,t.jsx)(n.h3,{id:"validation",children:"Validation"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/form/validation/",children:"Form validation guide"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { useForm } from '@mantine/form';\n\nconst form = useForm({\n  initialValues: {\n    email: '',\n    user: {\n      firstName: '',\n      lastName: '',\n    },\n  },\n  validate: {\n    email: (value) => (value.length < 2 ? 'Invalid email' : null),\n    user: {\n      firstName: (value) =>\n        value.length < 2\n          ? 'First name must have at least 2 letters'\n          : null,\n    },\n  },\n});\n\n// Validates all fields with specified `validate` function or schema, sets form.errors\nform.validate();\n\n// Validates single field at specified path, sets form.errors\nform.validateField('user.firstName');\n\n// Works the same way as form.validate but does not set form.errors\nform.isValid();\nform.isValid('user.firstName');\n"})}),"\n",(0,t.jsx)(n.h3,{id:"errors",children:"Errors"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/form/errors/",children:"Form errors guide"})}),"\n",(0,t.jsxs)(n.p,{children:["Validation errors occur when defined validation rules were violated, ",(0,t.jsx)(n.code,{children:"initialErrors"})," were specified in useForm properties\nor validation errors were set manually."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"// get current errors state\nform.errors;\n\n// Set all errors\nform.setErrors({ path: 'Error message', path2: 'Another error' });\n\n// Set error message at specified path\nform.setFieldError('user.lastName', 'No special characters allowed');\n\n// Clears all errors\nform.clearErrors();\n\n// Clears error of field at specified path\nform.clearFieldError('path');\n"})}),"\n",(0,t.jsx)(n.h3,{id:"onreset-and-onsubmit",children:"onReset and onSubmit"}),"\n",(0,t.jsxs)(n.p,{children:["Wrapper function for form ",(0,t.jsx)(n.code,{children:"onSubmit"})," and ",(0,t.jsx)(n.code,{children:"onReset"})," event handler. ",(0,t.jsx)(n.code,{children:"onSubmit"})," handler accepts as second argument a function\nthat will be called with errors object when validation fails."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"<form onSubmit={form.onSubmit(setFormValues)}></form>\n<form onSubmit={form.onSubmit(\n    (values, _event) => { setFormValues(values) },\n    (validationErrors, _values, _event) => { console.log(validationErrors) }\n)}></form>\n<form onReset={form.onReset}></form>\n"})}),"\n",(0,t.jsx)(n.h3,{id:"touched-and-dirty",children:"Touched and dirty"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/form/status/",children:"Touched & dirty guide"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"// Returns true if user interacted with any field inside form in any way\nform.isTouched();\n\n// Returns true if user interacted with field at specified path\nform.isTouched('path');\n\n// Set all touched values\nform.setTouched({ 'user.firstName': true, 'user.lastName': false });\n\n// Clears touched status of all fields\nform.resetTouched();\n\n// Returns true if form values are not deep equal to initialValues\nform.isDirty();\n\n// Returns true if field value is not deep equal to initialValues\nform.isDirty('path');\n\n// Sets dirty status of all fields\nform.setDirty({ 'user.firstName': true, 'user.lastName': false });\n\n// Clears dirty status of all fields, saves form.values snapshot\n// After form.resetDirty is called, form.isDirty will compare\n// form.values to snapshot instead of initialValues\nform.resetDirty();\n"})}),"\n",(0,t.jsx)(n.h2,{id:"useformreturntype",children:"UseFormReturnType"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"UseFormReturnType"})," can be used when you want to pass ",(0,t.jsx)(n.code,{children:"form"})," as a prop to another component:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { TextInput } from '@mantine/core';\nimport { useForm, UseFormReturnType } from '@mantine/form';\n\ninterface FormValues {\n  name: string;\n  occupation: string;\n}\n\nfunction NameInput({\n  form,\n}: {\n  form: UseFormReturnType<FormValues>;\n}) {\n  return <TextInput {...form.getInputProps('name')} />;\n}\n\nfunction OccupationInput({\n  form,\n}: {\n  form: UseFormReturnType<FormValues>;\n}) {\n  return <TextInput {...form.getInputProps('occupation')} />;\n}\n\nfunction Demo() {\n  const form = useForm<FormValues>({\n    initialValues: { name: '', occupation: '' },\n  });\n  return (\n    <>\n      <NameInput form={form} />\n      <OccupationInput form={form} />\n    </>\n  );\n}\n"})})]})}function m(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(l,{...e,children:(0,t.jsx)(u,{...e})})}function c(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},28380:function(e,n,r){"use strict";function t(e,n,r){"object"==typeof r.value&&(r.value=o(r.value)),r.enumerable&&!r.get&&!r.set&&r.configurable&&r.writable&&"__proto__"!==n?e[n]=r.value:Object.defineProperty(e,n,r)}function o(e){if("object"!=typeof e)return e;var n,r,s,a=0,i=Object.prototype.toString.call(e);if("[object Object]"===i?s=Object.create(e.__proto__||null):"[object Array]"===i?s=Array(e.length):"[object Set]"===i?(s=new Set,e.forEach(function(e){s.add(o(e))})):"[object Map]"===i?(s=new Map,e.forEach(function(e,n){s.set(o(n),o(e))})):"[object Date]"===i?s=new Date(+e):"[object RegExp]"===i?s=new RegExp(e.source,e.flags):"[object DataView]"===i?s=new e.constructor(o(e.buffer)):"[object ArrayBuffer]"===i?s=e.slice(0):"Array]"===i.slice(-6)&&(s=new e.constructor(e)),s){for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t(s,r[a],Object.getOwnPropertyDescriptor(e,r[a]));for(a=0,r=Object.getOwnPropertyNames(e);a<r.length;a++)Object.hasOwnProperty.call(s,n=r[a])&&s[n]===e[n]||t(s,n,Object.getOwnPropertyDescriptor(e,n))}return s||e}r.d(n,{Y:function(){return o}})},12184:function(e,n,r){"use strict";r.d(n,{j:function(){return c}});var t=r(27378),o=r(56589),s=r(7033),a=r(94193),i=r(22971),l=r(8671),u=r(56926);let m=`
import { TextInput, Checkbox, Button, Group, Box } from '@mantine/core';
import { useForm } from '@mantine/form';

function Demo() {
  const form = useForm({
    initialValues: {
      email: '',
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\\S+@\\S+$/.test(value) ? null : 'Invalid email'),
    },
  });

  return (
    <Box maw={340} mx="auto">
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <TextInput
          withAsterisk
          label="Email"
          placeholder="your@email.com"
          {...form.getInputProps('email')}
        />

        <Checkbox
          mt="md"
          label="I agree to sell my privacy"
          {...form.getInputProps('termsOfService', { type: 'checkbox' })}
        />

        <Group justify="flex-end" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Box>
  );
}
`,c={type:"code",component:function(){let e=(0,u.c)({initialValues:{email:"",termsOfService:!1},validate:{email:e=>/^\S+@\S+$/.test(e)?null:"Invalid email"}});return t.createElement(o.x,{maw:340,mx:"auto"},t.createElement("form",{onSubmit:e.onSubmit(e=>console.log(e))},t.createElement(s.o,{withAsterisk:!0,label:"Email",placeholder:"your@email.com",...e.getInputProps("email")}),t.createElement(a.X,{mt:"md",label:"I agree to sell my privacy",...e.getInputProps("termsOfService",{type:"checkbox"})}),t.createElement(i.Z,{justify:"flex-end",mt:"md"},t.createElement(l.z,{type:"submit"},"Submit"))))},code:m}}},function(e){e.O(0,[30370,15819,2775,56926,49774,92888,40179],function(){return e(e.s=7331)}),_N_E=e.O()}]);