(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[13798],{85397:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/styles/postcss-preset",function(){return s(95556)}])},95556:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return t}});var r=s(24246),i=s(71670),l=s(3916),o=s(54568);let c=(0,l.A)(o.us.PostCSSPreset);function d(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components},{InstallScript:s}=n;return s||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("InstallScript",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"mantine-postcss-preset",children:"Mantine PostCSS preset"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"postcss-preset-mantine"})," provides several CSS functions and mixins to help you write styles.\nIt is not required to use it, but highly recommended. All demos that feature styles\nassume that you have this preset installed."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"postcss-preset-mantine"})," includes the following PostCSS plugins:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://www.npmjs.com/package/postcss-nested",children:"postcss-nested"})}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://www.npmjs.com/package/postcss-mixins",children:"postcss-mixins"})," with Mantine specific mixins"]}),"\n",(0,r.jsxs)(n.li,{children:["Custom plugin with ",(0,r.jsx)(n.code,{children:"em"}),"/",(0,r.jsx)(n.code,{children:"rem"})," functions"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,r.jsxs)(n.p,{children:["Install ",(0,r.jsx)(n.code,{children:"postcss-preset-mantine"})," as a dev dependency:"]}),"\n",(0,r.jsx)(s,{dev:!0,packages:"postcss-preset-mantine"}),"\n",(0,r.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(n.p,{children:["Note that setting up PostCSS may be different depending on your build tool/framework, check\na ",(0,r.jsx)(n.a,{href:"/getting-started",children:"dedicated framework guide"})," to learn more.\nAdd ",(0,r.jsx)(n.code,{children:"postcss-preset-mantine"})," to your ",(0,r.jsx)(n.code,{children:"postcss.config.cjs"})," file (usually it is located in the root of your project):"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"module.exports = {\n  plugins: {\n    'postcss-preset-mantine': {},\n  },\n};\n"})}),"\n",(0,r.jsx)(n.p,{children:"All done! You can now use all the features of the preset."}),"\n",(0,r.jsx)(n.h2,{id:"remem-functions",children:"rem/em functions"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"rem"})," and ",(0,r.jsx)(n.code,{children:"em"})," functions can be used to convert pixels to rem/em units.\n",(0,r.jsx)(n.code,{children:"16px = 1rem"})," and ",(0,r.jsx)(n.code,{children:"16px = 1em"}),", ",(0,r.jsx)(n.code,{children:"em"})," values are supposed to be used in media queries,\n",(0,r.jsx)(n.code,{children:"rem"})," everywhere else. You can learn more about units conversions in ",(0,r.jsx)(n.a,{href:"/styles/rem",children:"this guide"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-scss",children:".demo {\n  font-size: rem(16px);\n\n  @media (min-width: em(320px)) {\n    font-size: rem(32px);\n  }\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"Will be transformed to:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-scss",children:".demo {\n  font-size: calc(1rem * var(--mantine-scale));\n\n  @media (min-width: 20em) {\n    font-size: calc(2rem * var(--mantine-scale));\n  }\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"dark-and-light-mixins",children:"dark and light mixins"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"dark"})," and ",(0,r.jsx)(n.code,{children:"light"})," mixins can be used to create styles that will be applied only in dark or light color scheme."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-scss",children:".demo {\n  @mixin light {\n    color: red;\n  }\n\n  @mixin dark {\n    color: blue;\n  }\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"Will be transformed to:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-scss",children:"[data-mantine-color-scheme='light'] .demo {\n  color: red;\n}\n\n[data-mantine-color-scheme='dark'] .demo {\n  color: blue;\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Note that usually you do not need to use both ",(0,r.jsx)(n.code,{children:"light"})," and ",(0,r.jsx)(n.code,{children:"dark"})," mixins at the same time.\nIt is easier to define styles for light color scheme and then use ",(0,r.jsx)(n.code,{children:"dark"})," mixin to override them in dark color scheme."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-scss",children:".demo {\n  // Value for light color scheme\n  color: red;\n\n  @mixin dark {\n    // Value for dark color scheme\n    color: blue;\n  }\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["To define values for light/dark color scheme on the ",(0,r.jsx)(n.code,{children:":root"}),"/",(0,r.jsx)(n.code,{children:"html"})," element, use ",(0,r.jsx)(n.code,{children:"light-root"})," and ",(0,r.jsx)(n.code,{children:"dark-root"})," mixins instead:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-scss",children:":root {\n  @mixin light-root {\n    --color: red;\n  }\n\n  @mixin dark-root {\n    --color: blue;\n  }\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"smaller-than-and-larger-than-mixins",children:"smaller-than and larger-than mixins"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"smaller-than"})," and ",(0,r.jsx)(n.code,{children:"larger-than"})," mixins can be used to create styles that will be applied only when the screen is smaller or larger than specified breakpoint."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-scss",children:".demo {\n  @mixin smaller-than 320px {\n    color: red;\n  }\n\n  @mixin larger-than 320px {\n    color: blue;\n  }\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"Will be transformed to:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-scss",children:"// Breakpoint values are converted to em units\n// In smaller-than mixin 0.1px is subtracted from breakpoint value\n// to avoid intersection with larger-than mixin\n@media (max-width: 19.99375em) {\n  .demo {\n    color: red;\n  }\n}\n\n@media (min-width: 20em) {\n  .demo {\n    color: blue;\n  }\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["You can also use ",(0,r.jsx)(n.code,{children:"smaller-than"})," and ",(0,r.jsx)(n.code,{children:"larger-than"})," mixins with ",(0,r.jsx)(n.a,{href:"/styles/responsive/#breakpoints-variables-in-css-modules",children:"mantine breakpoints"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-scss",children:".demo {\n  @mixin smaller-than $mantine-breakpoint-sm {\n    color: red;\n  }\n\n  @mixin larger-than $mantine-breakpoint-sm {\n    color: blue;\n  }\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"light-dark-function",children:"light-dark function"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"light-dark"})," function is an alternative to ",(0,r.jsx)(n.code,{children:"light"})," and ",(0,r.jsx)(n.code,{children:"dark"})," mixins. It accepts two arguments:\nfirst argument is rule that will be applied in light color scheme, second argument is rule that will be applied in dark color scheme."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-css",children:".demo {\n  color: light-dark(red, blue);\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"Will be transformed to:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-css",children:".demo {\n  color: red;\n}\n\n[data-mantine-color-scheme='dark'] .demo {\n  color: blue;\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Note that ",(0,r.jsx)(n.code,{children:"light-dark"})," function does not work on ",(0,r.jsx)(n.code,{children:":root"}),"/",(0,r.jsx)(n.code,{children:"html"})," element. Use ",(0,r.jsx)(n.code,{children:"light-root"})," and ",(0,r.jsx)(n.code,{children:"dark-root"})," mixins instead:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-scss",children:"// ❌ Does not work\n:root {\n  --color: light-dark(red, blue);\n}\n\n// ✅ Works\n:root {\n  @mixin light-root {\n    --color: red;\n  }\n\n  @mixin dark-root {\n    --color: blue;\n  }\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"alpha-function",children:"alpha function"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"alpha"})," function can be used to add alpha channel to color. Note that it uses ",(0,r.jsx)(n.a,{href:"https://caniuse.com/mdn-css_types_color_color-mix",children:"color-mix"})," which is not supported in some older browsers."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-scss",children:".demo {\n  color: alpha(var(--mantine-color-red-4), 0.5);\n  border: 1px solid alpha(#ffc, 0.2);\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"Will be transformed to:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-scss",children:".demo {\n  color: color-mix(\n    in srgb,\n    var(--mantine-color-red-4),\n    transparent 50%\n  );\n  border: 1px solid color-mix(in srgb, #ffc, transparent 80%);\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"lighten-and-darken-functions",children:"lighten and darken functions"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"lighten"})," and ",(0,r.jsx)(n.code,{children:"darken"})," functions work similar to ",(0,r.jsx)(n.code,{children:"alpha"})," function, but instead of adding alpha channel they add white or black color to the color with ",(0,r.jsx)(n.a,{href:"https://caniuse.com/mdn-css_types_color_color-mix",children:"color-mix"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-scss",children:".demo {\n  color: lighten(var(--mantine-color-red-4), 0.5);\n  border: 1px solid darken(#ffc, 0.2);\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"Will be transformed to:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-scss",children:".demo {\n  color: color-mix(in srgb, var(--mantine-color-red-4), white 50%);\n  border: 1px solid color-mix(in srgb, #ffc, black 20%);\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"hover-mixin",children:"hover mixin"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"hover"})," mixin can be used to create styles that will be applied on hover."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-css",children:".demo {\n  @mixin hover {\n    color: orange;\n  }\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"Will be transformed to:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-css",children:"@media (hover: hover) {\n  .demo:hover {\n    color: orange;\n  }\n}\n\n@media (hover: none) {\n  .demo:active {\n    color: orange;\n  }\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"rtlltr-mixins",children:"rtl/ltr mixins"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"rtl"})," mixin can be used to create styles that will be applied when ",(0,r.jsx)(n.code,{children:'dir="rtl"'})," is set on parent element (usually ",(0,r.jsx)(n.code,{children:"<html />"}),")."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-scss",children:".demo {\n  margin-left: 1rem;\n\n  @mixin rtl {\n    margin-left: 0;\n    margin-right: 1rem;\n  }\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"Will be transformed to:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-css",children:".demo {\n  margin-left: 1rem;\n}\n\n[dir='rtl'] .demo {\n  margin-left: 0;\n  margin-right: 1rem;\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"ltr"})," mixin works the same way, but for ",(0,r.jsx)(n.code,{children:'dir="ltr"'}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-scss",children:".demo {\n  margin-left: 1rem;\n\n  @mixin ltr {\n    margin-left: 0;\n    margin-right: 1rem;\n  }\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"Will be transformed to:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-css",children:".demo {\n  margin-left: 1rem;\n}\n\n[dir='ltr'] .demo {\n  margin-left: 0;\n  margin-right: 1rem;\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"not-rtlnot-ltr-mixins",children:"not-rtl/not-ltr mixins"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"not-rtl"}),"/",(0,r.jsx)(n.code,{children:"not-ltr"})," mixins can be used to create styles that will be applied when the direction is set to the opposite value or not set at all.\nFor example, ",(0,r.jsx)(n.code,{children:"not-rtl"})," styles will be applied when ",(0,r.jsx)(n.code,{children:'dir="ltr"'})," or when ",(0,r.jsx)(n.code,{children:"dir"})," is not set at all."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-scss",children:".demo {\n  @mixin not-rtl {\n    margin-right: 1rem;\n  }\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"Will be transformed to:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-css",children:":root:not([dir='rtl']) .demo {\n  margin-right: 1rem;\n}\n"})})]})}function t(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(c,{...e,children:(0,r.jsx)(d,{...e})})}}},function(e){e.O(0,[30370,15819,2775,49774,92888,40179],function(){return e(e.s=85397)}),_N_E=e.O()}]);