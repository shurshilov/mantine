(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1206],{56169:function(e,i,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/title",function(){return t(26769)}])},26769:function(e,i,t){"use strict";t.r(i),t.d(i,{default:function(){return x}});var n=t(24246),r=t(71670),o=t(27378),l=t(57847);let s=`
import { Title } from '@mantine/core';

function Demo() {
  return (
    <>
      <Title order={1}>This is h1 title</Title>
      <Title order={2}>This is h2 title</Title>
      <Title order={3}>This is h3 title</Title>
      <Title order={4}>This is h4 title</Title>
      <Title order={5}>This is h5 title</Title>
      <Title order={6}>This is h6 title</Title>
    </>
  );
}
`,c={type:"code",code:s,component:function(){return o.createElement(o.Fragment,null,o.createElement(l.D,{order:1},"This is h1 title"),o.createElement(l.D,{order:2},"This is h2 title"),o.createElement(l.D,{order:3},"This is h3 title"),o.createElement(l.D,{order:4},"This is h4 title"),o.createElement(l.D,{order:5},"This is h5 title"),o.createElement(l.D,{order:6},"This is h6 title"))}},d=`
import { Title } from '@mantine/core';

function Demo() {
  return (
    <>
      <Title order={3} size="h1">
        H3 heading with h1 font-size
      </Title>
      <Title size="h4">H1 heading with h4 font-size</Title>
      <Title size="1rem">H1 heading with 1rem size</Title>
    </>
  );
}
`,h={type:"code",component:function(){return o.createElement(o.Fragment,null,o.createElement(l.D,{order:3,size:"h1"},"H3 heading with h1 font-size"),o.createElement(l.D,{size:"h4"},"H1 heading with h4 font-size"),o.createElement(l.D,{size:"1rem"},"H1 heading with 1rem size"))},code:d};var a=t(96100),u=t(3916),m=t(54568);let p=(0,u.A)(m.us.Title);function f(e){let i={a:"a",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,r.a)(),...e.components},{Demo:t}=i;return t||function(e,i){throw Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsxs)(i.p,{children:["Use Title component to render h1-h6 headings with Mantine ",(0,n.jsx)(i.a,{href:"/theming/theme-object",children:"theme"})," styles.\nBy default, ",(0,n.jsx)(i.code,{children:"Title"})," has no margins and paddings.\nYou can change ",(0,n.jsx)(i.code,{children:"font-size"}),", ",(0,n.jsx)(i.code,{children:"font-weight"})," and ",(0,n.jsx)(i.code,{children:"line-height"})," per heading with ",(0,n.jsx)(i.a,{href:"/theming/typography",children:"theme.headings"}),"."]}),"\n",(0,n.jsxs)(i.p,{children:["Set ",(0,n.jsx)(i.code,{children:"order"})," prop to render a specific element (h1-h6), default order is ",(0,n.jsx)(i.code,{children:"1"}),":"]}),"\n",(0,n.jsx)(t,{data:c}),"\n",(0,n.jsx)(i.h2,{id:"size",children:"Size"}),"\n",(0,n.jsxs)(i.p,{children:["You can change Title ",(0,n.jsx)(i.code,{children:"size"})," independent of its ",(0,n.jsx)(i.code,{children:"order"}),":"]}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["If you set size to ",(0,n.jsx)(i.code,{children:"h1"}),"-",(0,n.jsx)(i.code,{children:"h6"}),", then component will add corresponding ",(0,n.jsx)(i.code,{children:"font-size"})," and ",(0,n.jsx)(i.code,{children:"line-height"})," from the ",(0,n.jsx)(i.a,{href:"/theming/theme-object/",children:"theme"})]}),"\n",(0,n.jsxs)(i.li,{children:["If you set size to any other value, then ",(0,n.jsx)(i.code,{children:"line-height"})," will be calculated based on ",(0,n.jsx)(i.code,{children:"order"})," – ",(0,n.jsx)(i.code,{children:"size"})," will impact only ",(0,n.jsx)(i.code,{children:"font-size"})]}),"\n"]}),"\n",(0,n.jsx)(t,{data:h}),"\n",(0,n.jsx)(i.h2,{id:"line-clamp",children:"Line clamp"}),"\n",(0,n.jsxs)(i.p,{children:["Set ",(0,n.jsx)(i.code,{children:"lineClamp"})," prop to truncate text after specified number of lines:"]}),"\n",(0,n.jsx)(t,{data:a.S})]})}function x(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(p,{...e,children:(0,n.jsx)(f,{...e})})}},96100:function(e,i,t){"use strict";t.d(i,{S:function(){return s}});var n=t(27378),r=t(56589),o=t(57847);let l=`
import { Title, Box } from '@mantine/core';

function Demo() {
  return (
    <Box maw={400}>
      <Title order={2}{{props}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure doloremque quas dolorum. Quo
        amet earum alias consequuntur quam accusamus a quae beatae, odio, quod provident consectetur
        non repudiandae enim adipisci?
      </Title>
    </Box>
  )
}
`,s={type:"configurator",component:function(e){return n.createElement(r.x,{maw:400},n.createElement(o.D,{order:2,...e},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure doloremque quas dolorum. Quo amet earum alias consequuntur quam accusamus a quae beatae, odio, quod provident consectetur non repudiandae enim adipisci?"))},code:l,centered:!0,controls:[{type:"number",prop:"lineClamp",initialValue:2,libraryValue:null,min:1,max:8}]}}},function(e){e.O(0,[30370,15819,2775,49774,92888,40179],function(){return e(e.s=56169)}),_N_E=e.O()}]);