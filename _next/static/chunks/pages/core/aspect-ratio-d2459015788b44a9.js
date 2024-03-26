(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[54051],{58513:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/aspect-ratio",function(){return o(82813)}])},82813:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return y}});var n=o(52322),a=o(45392),r=o(2784),i=o(98814);let c=`
import { AspectRatio } from '@mantine/core';

function Demo() {
  return (
    <AspectRatio ratio={1080 / 720} maw={300} mx="auto">
      <img
        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-5.png"
        alt="Panda"
      />
    </AspectRatio>
  );
}
`,s={type:"code",component:function(){return r.createElement(i.o,{ratio:1.5,maw:300,mx:"auto"},r.createElement("img",{src:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-5.png",alt:"Panda"}))},code:c},m=`
import { AspectRatio } from '@mantine/core';

function Demo() {
  return (
    <AspectRatio ratio={16 / 9}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.3063874233135!2d-74.04668908358428!3d40.68924937933441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25090129c363d%3A0x40c6a5770d25022b!2sStatue%20of%20Liberty%20National%20Monument!5e0!3m2!1sen!2sru!4v1644262070010!5m2!1sen!2sru"
        title="Google map"
        style={{ border: 0 }}
      />
    </AspectRatio>
  );
}
`,d={type:"code",component:function(){return r.createElement(i.o,{ratio:16/9},r.createElement("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.3063874233135!2d-74.04668908358428!3d40.68924937933441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25090129c363d%3A0x40c6a5770d25022b!2sStatue%20of%20Liberty%20National%20Monument!5e0!3m2!1sen!2sru!4v1644262070010!5m2!1sen!2sru",title:"Google map",style:{border:0}}))},code:m},l=`
import { AspectRatio } from '@mantine/core';

function Demo() {
  return (
    <AspectRatio ratio={16 / 9}>
      <iframe
        src="https://www.youtube.com/embed/mzJ4vCjSt28"
        title="YouTube video player"
        style={{ border: 0 }}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </AspectRatio>
  );
}
`,p={type:"code",component:function(){return r.createElement(i.o,{ratio:16/9},r.createElement("iframe",{src:"https://www.youtube.com/embed/mzJ4vCjSt28",title:"YouTube video player",style:{border:0},allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}))},code:l};var u=o(58898),Image=o(43076);let f=`
import { AspectRatio, Image, rem } from '@mantine/core';

function Demo() {
  return (
    <div style={{ display: 'flex' }}>
      <AspectRatio ratio={1} style={{ flex: \`0 0 \${rem(100)}\` }}>
        <Image
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-6.png"
          alt="Avatar"
        />
      </AspectRatio>
    </div>
  );
}
`,h={type:"code",component:function(){return r.createElement("div",{style:{display:"flex"}},r.createElement(i.o,{ratio:1,style:{flex:`0 0 ${(0,u.h)(100)}`}},r.createElement(Image.E,{src:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-6.png",alt:"Avatar"})))},code:f};var g=o(79016),b=o(33638);let w=(0,g.A)(b.us.AspectRatio);function x(e){let t={code:"code",h2:"h2",p:"p",...(0,a.a)(),...e.components},{Demo:o}=t;return o||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"AspectRatio"})," allows maintaining a consistent width/height ratio.\nIt can be used to display images, maps, videos and other media."]}),"\n",(0,n.jsx)(o,{data:s}),"\n",(0,n.jsx)(t.h2,{id:"map-embed",children:"Map embed"}),"\n",(0,n.jsx)(o,{data:d}),"\n",(0,n.jsx)(t.h2,{id:"video-embed",children:"Video embed"}),"\n",(0,n.jsx)(o,{data:p}),"\n",(0,n.jsx)(t.h2,{id:"inside-flex-container",children:"Inside flex container"}),"\n",(0,n.jsxs)(t.p,{children:["By default, ",(0,n.jsx)(t.code,{children:"AspectRatio"})," does not have fixed width and height, it will take as much space as possible\nin a regular container. To make it work inside flex container, you need to set ",(0,n.jsx)(t.code,{children:"width"})," or ",(0,n.jsx)(t.code,{children:"flex"})," property."]}),"\n",(0,n.jsx)(o,{data:h})]})}function y(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(w,{...e,children:(0,n.jsx)(x,{...e})})}},98814:function(e,t,o){"use strict";o.d(t,{o:function(){return p}});var n=o(2784),a=o(11200),r=o(38483),i=o(62378),c=o(28559),s=o(82027),m={root:"m-71ac47fc"};let d={},l=(0,a.Z)((e,{ratio:t})=>({root:{"--ar-ratio":t?.toString()}})),p=(0,s.d)((e,t)=>{let o=(0,r.w)("AspectRatio",d,e),{classNames:a,className:s,style:p,styles:u,unstyled:f,vars:h,ratio:g,...b}=o,w=(0,i.y)({name:"AspectRatio",classes:m,props:o,className:s,style:p,classNames:a,styles:u,unstyled:f,vars:h,varsResolver:l});return n.createElement(c.x,{ref:t,...w("root"),...b})});p.classes=m,p.displayName="@mantine/core/AspectRatio"},43076:function(e,t,o){"use strict";o.d(t,{E:function(){return Image}});var n=o(2784),a=o(91482),r=o(11200),i=o(38483),c=o(62378),s=o(28559),m=o(33502),d={root:"m-9e117634"};let l={},p=(0,r.Z)((e,{radius:t,fit:o})=>({root:{"--image-radius":void 0===t?void 0:(0,a.H5)(t),"--image-object-fit":o}})),Image=(0,m.b)((e,t)=>{let o=(0,i.w)("Image",l,e),{classNames:a,className:r,style:m,styles:u,unstyled:f,vars:h,onError:g,src:b,radius:w,fit:x,fallbackSrc:y,mod:v,...A}=o,[E,j]=(0,n.useState)(!b);(0,n.useEffect)(()=>j(!b),[b]);let R=(0,c.y)({name:"Image",classes:d,props:o,className:r,style:m,classNames:a,styles:u,unstyled:f,vars:h,varsResolver:p});return E&&y?n.createElement(s.x,{component:"img",src:y,...R("root"),onError:g,mod:["fallback",v],...A}):n.createElement(s.x,{component:"img",ref:t,...R("root"),src:b,onError:e=>{g?.(e),j(!0)},mod:v,...A})});Image.classes=d,Image.displayName="@mantine/core/Image"}},function(e){e.O(0,[57938,17454,47747,49774,92888,40179],function(){return e(e.s=58513)}),_N_E=e.O()}]);