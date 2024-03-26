(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[34190],{32031:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/changelog/7-1-0",function(){return s(13225)}])},13225:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return c}});var r=s(52322),t=s(45392),o=s(79016),i=s(33638);let a=(0,o.A)(i.us.Changelog710);function l(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"css-layers",children:"CSS layers"}),"\n",(0,r.jsxs)(n.p,{children:["Starting from 7.1.0 it is possible to import all ",(0,r.jsx)(n.code,{children:"@mantine/*"})," packages styles with rules\ndefined in ",(0,r.jsx)(n.code,{children:"mantine"})," ",(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/@layer",children:"CSS layer"}),".\nCSS rules within a layer are grouped together and applied before rules without a layer. This means that\neven if you do not have control over styles import order, you can still override Mantine styles with\nregular styles."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"// If your styles are not wrapped in @layer directive,\n// they will be applied after Mantine styles.\n// Import order does not affect styles in this case\nimport classes from './Demo.module.css';\n\nimport '@mantine/core/styles.layer.css';\n"})}),"\n",(0,r.jsxs)(n.p,{children:["You can import styles within a layer by importing ",(0,r.jsx)(n.code,{children:"@mantine/*/styles.layer.css"})," files.\nNote that these files are a full replacement for ",(0,r.jsx)(n.code,{children:"@mantine/*/styles.css"})," files –\nyou should not import both of them."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import '@mantine/core/styles.layer.css';\nimport '@mantine/dates/styles.layer.css';\n\n// ... other styles\n"})}),"\n",(0,r.jsxs)(n.p,{children:["CSS layers are also useful if you want to combine Mantine components with other libraries which also\nprovide styles. You can use ",(0,r.jsx)(n.code,{children:"@layer"})," directive to control the order of styles:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-scss",children:"@layer base, mantine, components;\n"})}),"\n",(0,r.jsxs)(n.p,{children:["In this example, Mantine styles will take precedence over other library ",(0,r.jsx)(n.code,{children:"base"})," styles, but other library\n",(0,r.jsx)(n.code,{children:"components"})," styles will take precedence over Mantine component styles."]}),"\n",(0,r.jsxs)(n.p,{children:["As of September 2023, CSS layers are supported in all modern browsers and have ",(0,r.jsx)(n.a,{href:"https://caniuse.com/css-cascade-layers",children:"90% browser support"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"renderroot-prop",children:"renderRoot prop"}),"\n",(0,r.jsxs)(n.p,{children:["All ",(0,r.jsx)(n.a,{href:"/guides/polymorphic",children:"polymorphic"})," components now support ",(0,r.jsx)(n.code,{children:"renderRoot"})," prop, which\nis an alternative to ",(0,r.jsx)(n.code,{children:"component"})," prop. ",(0,r.jsx)(n.code,{children:"renderRoot"})," prop allows changing the root element\nto any other component or HTML tag with a callback function. It can be used in cases when\n",(0,r.jsx)(n.code,{children:"component"})," prop is not flexible enough:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Target component props are incompatible with Mantine component. For example, ",(0,r.jsx)(n.a,{href:"/core/button",children:"Button"})," component expects ",(0,r.jsx)(n.code,{children:"className"}),"\nto be a string, but ",(0,r.jsx)(n.a,{href:"https://reactrouter.com/en/6.16.0/components/nav-link",children:"react-router-dom NavLink"})," expects\n",(0,r.jsx)(n.code,{children:"className"})," to be a function."]}),"\n",(0,r.jsxs)(n.li,{children:["Target component is a generic – it either accepts type as a parameter or its type changes depending\non its props. Examples: ",(0,r.jsx)(n.a,{href:"https://nextjs.org/docs/app/building-your-application/configuring/typescript#statically-typed-links",children:"typed Next.js Link"}),", ",(0,r.jsx)(n.a,{href:"https://tanstack.com/router/v1",children:"TanStack router Link"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"renderRoot"})," example with ",(0,r.jsx)(n.a,{href:"https://reactrouter.com/en/6.16.0/components/nav-link",children:"react-router-dom NavLink"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import cx from 'clsx';\nimport { NavLink } from 'react-router-dom';\nimport { Button } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <Button\n      renderRoot={({ className, ...others }) => (\n        <NavLink\n          className={({ isActive }) =>\n            cx(className, { 'active-class': isActive })\n          }\n          {...others}\n        />\n      )}\n    >\n      React router NavLink\n    </Button>\n  );\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"renderRoot"})," example with ",(0,r.jsx)(n.a,{href:"https://nextjs.org/docs/app/building-your-application/configuring/typescript#statically-typed-links",children:"typed Next.js Link"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import Link from 'next/link';\nimport { Button } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <Button renderRoot={(props) => <Link href=\"/hello\" {...props} />}>\n      Typed Next link button\n    </Button>\n  );\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"improved-esm-support",children:"Improved ESM support"}),"\n",(0,r.jsxs)(n.p,{children:["All ",(0,r.jsx)(n.code,{children:"@mantine/*"})," packages now have improved ESM support:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Files in ",(0,r.jsx)(n.code,{children:"esm"})," folder now have ",(0,r.jsx)(n.code,{children:".mjs"})," extension"]}),"\n",(0,r.jsxs)(n.li,{children:["You can use ",(0,r.jsx)(n.code,{children:"@mantine/*"})," packages with ",(0,r.jsx)(n.code,{children:"type: module"})," in ",(0,r.jsx)(n.code,{children:"package.json"})," without any additional configuration"]}),"\n",(0,r.jsxs)(n.li,{children:["All packages are now fully compatible with ",(0,r.jsx)(n.a,{href:"https://remix.run/blog/remix-v2",children:"Remix v2"})]}),"\n",(0,r.jsx)(n.li,{children:"Tree shaking was improved for some bundlers"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"css-variables-in-style-prop",children:"CSS variables in style prop"}),"\n",(0,r.jsxs)(n.p,{children:["It is now possible to define CSS variables in ",(0,r.jsx)(n.code,{children:"style"})," prop in all Mantine components –\n",(0,r.jsx)(n.a,{href:"/styles/style",children:"style"})," prop is no longer restricted by ",(0,r.jsx)(n.code,{children:"React.CSSProperties"})," type:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { Box } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <Box\n      style={{ '--radius': '0.5rem', borderRadius: 'var(--radius)' }}\n    />\n  );\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"formsetinitialvalues",children:"form.setInitialValues"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/form/values/#setinitialvalues-handler",children:"@mantine/form"})," now supports ",(0,r.jsx)(n.code,{children:"form.setInitialValues"})," method\nwhich allows updating initial values after the form was initialized. This method is useful when you\nwant to update values that are used in ",(0,r.jsx)(n.code,{children:"form.reset"})," and to compare values for dirty fields state:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { useEffect } from 'react';\nimport { useForm } from '@mantine/form';\n\nfunction Demo() {\n  const form = useForm({\n    initialValues: {\n      name: '',\n      email: '',\n    },\n  });\n\n  useEffect(() => {\n    fetch('/api/user')\n      .then((res) => res.json())\n      .then((data) => {\n        // Update initial values after form was initialized\n        // These values will be used in form.reset\n        // and to compare values to get dirty state\n        form.setInitialValues(data);\n        form.setValues(data);\n      });\n  }, []);\n}\n"})})]})}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(a,{...e,children:(0,r.jsx)(l,{...e})})}}},function(e){e.O(0,[57938,17454,47747,49774,92888,40179],function(){return e(e.s=32031)}),_N_E=e.O()}]);