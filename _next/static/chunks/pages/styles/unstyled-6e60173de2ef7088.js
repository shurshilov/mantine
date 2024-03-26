(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[16266],{51162:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/styles/unstyled",function(){return t(20179)}])},20179:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return d}});var s=t(52322),o=t(45392),l=t(70074),r=t(79016),a=t(33638);let i=(0,r.A)(a.us.UnstyledComponents);function c(e){let n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components},{Demo:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"unstyled-components",children:"Unstyled components"}),"\n",(0,s.jsx)(n.h2,{id:"using-mantine-as-a-headless-ui-library",children:"Using Mantine as a headless UI library"}),"\n",(0,s.jsxs)(n.p,{children:["You can use Mantine as a headless UI library. To do that, simply do not import ",(0,s.jsx)(n.code,{children:"@mantine/*/styles.css"}),"\nin your application. Then you will be able to apply styles to Mantine components using ",(0,s.jsx)(n.a,{href:"/styles/styles-api/",children:"Styles API"}),"\nwith a styling solution of your choice."]}),"\n",(0,s.jsx)(n.h2,{id:"headlessmantineprovider",children:"HeadlessMantineProvider"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"HeadlessMantineProvider"})," is an alternative to ",(0,s.jsx)(n.a,{href:"/theming/mantine-provider",children:"MantineProvider"}),"\nthat should be used when you want to use Mantine as a headless UI library. It removes all\nfeatures that are related to Mantine styles:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Mantine classes are not applied to components"}),"\n",(0,s.jsxs)(n.li,{children:["Inline CSS variables are not added with ",(0,s.jsx)(n.code,{children:"style"})," attribute"]}),"\n",(0,s.jsx)(n.li,{children:"All color scheme related features are removed"}),"\n",(0,s.jsx)(n.li,{children:"Global styles are not generated"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Limitations of ",(0,s.jsx)(n.code,{children:"HeadlessMantineProvider"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/theming/color-schemes/",children:"Color scheme switching"})," will not work. If your application has a dark mode, you will need to implement it on your side."]}),"\n",(0,s.jsxs)(n.li,{children:["Props that are related to styles in all components (",(0,s.jsx)(n.code,{children:"color"}),", ",(0,s.jsx)(n.code,{children:"radius"}),", ",(0,s.jsx)(n.code,{children:"size"}),", etc.) will have no effect."]}),"\n",(0,s.jsxs)(n.li,{children:["Some components that rely on styles will become unusable (",(0,s.jsx)(n.a,{href:"/core/grid",children:"Grid"}),", ",(0,s.jsx)(n.a,{href:"/core/simple-grid",children:"SimpleGrid"}),", ",(0,s.jsx)(n.a,{href:"/core/container",children:"Container"}),", etc.)."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"lightHidden"}),"/",(0,s.jsx)(n.code,{children:"darkHidden"}),", ",(0,s.jsx)(n.code,{children:"visibleFrom"}),"/",(0,s.jsx)(n.code,{children:"hiddenFrom"})," props will not work."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/styles/style-props/",children:"Style props"})," will work only with explicit values, for example ",(0,s.jsx)(n.code,{children:'mt="xs"'})," will not work, but ",(0,s.jsx)(n.code,{children:"mt={5}"})," will."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["To use ",(0,s.jsx)(n.code,{children:"HeadlessMantineProvider"}),", follow ",(0,s.jsx)(n.a,{href:"/getting-started/",children:"getting started guide"})," and replace ",(0,s.jsx)(n.code,{children:"MantineProvider"})," with ",(0,s.jsx)(n.code,{children:"HeadlessMantineProvider"}),".\nNote that you do not need to use ",(0,s.jsx)(n.a,{href:"/theming/color-schemes/#colorschemescript",children:"ColorSchemeScript"})," in your application, it will not have any effect,\nyou can ignore this part of the guide."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"import { HeadlessMantineProvider } from '@mantine/core';\n\nfunction App() {\n  return (\n    <HeadlessMantineProvider>\n      {/* Your application */}\n    </HeadlessMantineProvider>\n  );\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"unstyled-prop",children:"unstyled prop"}),"\n",(0,s.jsxs)(n.p,{children:["Most of Mantine components support ",(0,s.jsx)(n.code,{children:"unstyled"})," prop that removes library styles from the component and allows you to style it\nfrom scratch. Note that ",(0,s.jsx)(n.code,{children:"unstyled"})," prop is not supported by compound components (",(0,s.jsx)(n.code,{children:"Tabs.Tab"}),", ",(0,s.jsx)(n.code,{children:"Menu.Dropdown"}),", ",(0,s.jsx)(n.code,{children:"Accordion.Control"}),", etc.)\n– it only works on root component (",(0,s.jsx)(n.code,{children:"Tabs"}),", ",(0,s.jsx)(n.code,{children:"Menu"}),", ",(0,s.jsx)(n.code,{children:"Accordion"}),", etc.)."]}),"\n",(0,s.jsxs)(n.p,{children:["Unstyled ",(0,s.jsx)(n.a,{href:"/core/tabs",children:"Tabs"})," component:"]}),"\n",(0,s.jsx)(t,{data:l.W}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Choosing between unstyled prop and headless components"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"unstyled"})," prop is useful when you want to remove library styles from a single component,\nbut keep styles for other components. For example, if ",(0,s.jsx)(n.a,{href:"/core/tabs",children:"Tabs"})," component does\nnot meet your design system requirements, but all other components do, you can use ",(0,s.jsx)(n.code,{children:"unstyled"}),"\nprop to remove styles from Tabs and style it from scratch, while keeping all other components\nstyled with Mantine styles."]}),"\n",(0,s.jsxs)(n.p,{children:["Note that ",(0,s.jsx)(n.code,{children:"unstyled"})," prop does not remove Mantine library styles from your ",(0,s.jsx)(n.code,{children:".css"})," bundle –\nit only does not apply them to component with ",(0,s.jsx)(n.code,{children:"unstyled"})," prop."]}),"\n"]})]})}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,s.jsx)(i,{...e,children:(0,s.jsx)(c,{...e})})}},70074:function(e,n,t){"use strict";t.d(n,{W:function(){return r}});var s=t(2784),o=t(40437);let l=`
import { Tabs } from '@mantine/core';

function Demo() {
  return (
    <Tabs defaultValue="chat" unstyled>
      <Tabs.List>
        <Tabs.Tab value="chat">Chat</Tabs.Tab>
        <Tabs.Tab value="gallery">Gallery</Tabs.Tab>
        <Tabs.Tab value="account">Account</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="chat">Chat panel</Tabs.Panel>
      <Tabs.Panel value="gallery">Gallery panel</Tabs.Panel>
      <Tabs.Panel value="account">Account panel</Tabs.Panel>
    </Tabs>
  );
}
`,r={type:"code",component:function(){return s.createElement(o.m,{defaultValue:"chat",unstyled:!0},s.createElement(o.m.List,null,s.createElement(o.m.Tab,{value:"chat"},"Chat"),s.createElement(o.m.Tab,{value:"gallery"},"Gallery"),s.createElement(o.m.Tab,{value:"account"},"Account")),s.createElement(o.m.Panel,{value:"chat"},"Chat panel"),s.createElement(o.m.Panel,{value:"gallery"},"Gallery panel"),s.createElement(o.m.Panel,{value:"account"},"Account panel"))},code:l}}},function(e){e.O(0,[57938,17454,47747,49774,92888,40179],function(){return e(e.s=51162)}),_N_E=e.O()}]);