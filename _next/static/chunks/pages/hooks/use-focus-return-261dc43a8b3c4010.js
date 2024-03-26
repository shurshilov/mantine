(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[29595],{13362:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-focus-return",function(){return s(95602)}])},95602:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return l}});var o=s(52322),t=s(45392),c=s(63644),u=s(79016),r=s(33638);let i=(0,u.A)(r.us.useFocusReturn);function a(e){let n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...e.components},{Demo:s}=n;return s||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"use-focus-return"})," automatically returns focus to the last focused element when a given condition is met.\nFor example, it is used in ",(0,o.jsx)(n.a,{href:"/core/modal/",children:"Modal"})," component to restore focus after the modal was closed."]}),"\n",(0,o.jsxs)(n.p,{children:["Close the modal with the ",(0,o.jsx)(n.code,{children:"Escape"})," key and see how focus returns to the button after the modal closes:"]}),"\n",(0,o.jsx)(s,{data:c.j,demoProps:{toggle:!0}}),"\n",(0,o.jsxs)(n.p,{children:["In most cases, you should use this hook with ",(0,o.jsx)(n.a,{href:"/hooks/use-focus-trap/",children:"use-focus-trap"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"useFocusReturn({\n  // Is region with focus trap active?\n  // When it activates hook saves document.activeElement to the internal state\n  // and focuses this element once focus trap is deactivated\n  opened: false,\n\n  // Determines whether focus should be returned automatically, true by default\n  shouldReturnFocus: true,\n});\n"})}),"\n",(0,o.jsxs)(n.p,{children:["If ",(0,o.jsx)(n.code,{children:"shouldReturnFocus"})," option is set to ",(0,o.jsx)(n.code,{children:"false"})," you can call returned function to focus last active element:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"const returnFocus = useFocusReturn({\n  opened: false,\n  shouldReturnFocus: false,\n});\n\n// ... later\nreturnFocus();\n"})}),"\n",(0,o.jsx)(n.h2,{id:"definition",children:"Definition"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"function useFocusReturn(options: {\n  opened: boolean;\n  shouldReturnFocus?: boolean;\n}): () => void;\n"})})]})}function l(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(i,{...e,children:(0,o.jsx)(a,{...e})})}}},function(e){e.O(0,[57938,17454,47747,88320,64485,49774,92888,40179],function(){return e(e.s=13362)}),_N_E=e.O()}]);