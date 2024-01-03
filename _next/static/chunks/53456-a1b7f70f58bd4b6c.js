"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[53456],{53456:function(e,t,n){n.d(t,{j:function(){return E}});var l=n(27378),r=n(61506),a=n(64088),o=n(56437),i=n(16985),c=n(67890),d=n(49947),h=n(47955),m=n(16541),s=n(78053);let p=`
import { RichTextEditor, Link } from '@mantine/tiptap';
import { useEditor } from '@tiptap/react';
import Highlight from '@tiptap/extension-highlight';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import Superscript from '@tiptap/extension-superscript';
import SubScript from '@tiptap/extension-subscript';

const content =
  '<h2 style="text-align: center;">Welcome to Mantine rich text editor</h2><p><code>RichTextEditor</code> component focuses on usability and is designed to be as simple as possible to bring a familiar editing experience to regular users. <code>RichTextEditor</code> is based on <a href="https://tiptap.dev/" rel="noopener noreferrer" target="_blank">Tiptap.dev</a> and supports all of its features:</p><ul><li>General text formatting: <strong>bold</strong>, <em>italic</em>, <u>underline</u>, <s>strike-through</s> </li><li>Headings (h1-h6)</li><li>Sub and super scripts (<sup>&lt;sup /&gt;</sup> and <sub>&lt;sub /&gt;</sub> tags)</li><li>Ordered and bullet lists</li><li>Text align&nbsp;</li><li>And all <a href="https://tiptap.dev/extensions" target="_blank" rel="noopener noreferrer">other extensions</a></li></ul>';

function Demo() {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link,
      Superscript,
      SubScript,
      Highlight,
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
    ],
    content,
  });

  return (
    <RichTextEditor editor={editor}>
      <RichTextEditor.Toolbar sticky stickyOffset={60}>
        <RichTextEditor.ControlsGroup>
          <RichTextEditor.Bold />
          <RichTextEditor.Italic />
          <RichTextEditor.Underline />
          <RichTextEditor.Strikethrough />
          <RichTextEditor.ClearFormatting />
          <RichTextEditor.Highlight />
          <RichTextEditor.Code />
        </RichTextEditor.ControlsGroup>

        <RichTextEditor.ControlsGroup>
          <RichTextEditor.H1 />
          <RichTextEditor.H2 />
          <RichTextEditor.H3 />
          <RichTextEditor.H4 />
        </RichTextEditor.ControlsGroup>

        <RichTextEditor.ControlsGroup>
          <RichTextEditor.Blockquote />
          <RichTextEditor.Hr />
          <RichTextEditor.BulletList />
          <RichTextEditor.OrderedList />
          <RichTextEditor.Subscript />
          <RichTextEditor.Superscript />
        </RichTextEditor.ControlsGroup>

        <RichTextEditor.ControlsGroup>
          <RichTextEditor.Link />
          <RichTextEditor.Unlink />
        </RichTextEditor.ControlsGroup>

        <RichTextEditor.ControlsGroup>
          <RichTextEditor.AlignLeft />
          <RichTextEditor.AlignCenter />
          <RichTextEditor.AlignJustify />
          <RichTextEditor.AlignRight />
        </RichTextEditor.ControlsGroup>

        <RichTextEditor.ControlsGroup>
          <RichTextEditor.Undo />
          <RichTextEditor.Redo />
        </RichTextEditor.ControlsGroup>
      </RichTextEditor.Toolbar>

      <RichTextEditor.Content />
    </RichTextEditor>
  );
}
`,E={type:"code",component:function(){let e=(0,d.jE)({extensions:[h.Z,c.Z,m.r,o.Z,a.Z,r.ZP,i.Z.configure({types:["heading","paragraph"]})],content:'<h2 style="text-align: center;">Welcome to Mantine rich text editor</h2><p><code>RichTextEditor</code> component focuses on usability and is designed to be as simple as possible to bring a familiar editing experience to regular users. <code>RichTextEditor</code> is based on <a href="https://tiptap.dev/" rel="noopener noreferrer" target="_blank">Tiptap.dev</a> and supports all of its features:</p><ul><li>General text formatting: <strong>bold</strong>, <em>italic</em>, <u>underline</u>, <s>strike-through</s> </li><li>Headings (h1-h6)</li><li>Sub and super scripts (<sup>&lt;sup /&gt;</sup> and <sub>&lt;sub /&gt;</sub> tags)</li><li>Ordered and bullet lists</li><li>Text align&nbsp;</li><li>And all <a href="https://tiptap.dev/extensions" target="_blank" rel="noopener noreferrer">other extensions</a></li></ul>'});return l.createElement(s.L,{editor:e},l.createElement(s.L.Toolbar,{sticky:!0,stickyOffset:60},l.createElement(s.L.ControlsGroup,null,l.createElement(s.L.Bold,null),l.createElement(s.L.Italic,null),l.createElement(s.L.Underline,null),l.createElement(s.L.Strikethrough,null),l.createElement(s.L.ClearFormatting,null),l.createElement(s.L.Highlight,null),l.createElement(s.L.Code,null)),l.createElement(s.L.ControlsGroup,null,l.createElement(s.L.H1,null),l.createElement(s.L.H2,null),l.createElement(s.L.H3,null),l.createElement(s.L.H4,null)),l.createElement(s.L.ControlsGroup,null,l.createElement(s.L.Blockquote,null),l.createElement(s.L.Hr,null),l.createElement(s.L.BulletList,null),l.createElement(s.L.OrderedList,null),l.createElement(s.L.Subscript,null),l.createElement(s.L.Superscript,null)),l.createElement(s.L.ControlsGroup,null,l.createElement(s.L.Link,null),l.createElement(s.L.Unlink,null)),l.createElement(s.L.ControlsGroup,null,l.createElement(s.L.AlignLeft,null),l.createElement(s.L.AlignCenter,null),l.createElement(s.L.AlignJustify,null),l.createElement(s.L.AlignRight,null)),l.createElement(s.L.ControlsGroup,null,l.createElement(s.L.Undo,null),l.createElement(s.L.Redo,null))),l.createElement(s.L.Content,null))},code:p}},37454:function(e,t,n){n.d(t,{M:function(){return k}});var l=n(27378),r=n(96739),a=n(6231),o=n(40593),i=n(56589),c=n(20410),d=n(53007),h=n(86689),m=n(92082),s=n(31582),p=n(75001),E=n(2256),u=n(9889);function b({spacing:e,verticalSpacing:t,cols:n,selector:r}){let a=(0,E.rZ)(),o=void 0===t?e:t,i=(0,h.L)({"--sg-spacing-x":(0,m.bG)((0,p.v)(e)),"--sg-spacing-y":(0,m.bG)((0,p.v)(o)),"--sg-cols":p.v(n)?.toString()}),c=(0,d.X)(a.breakpoints).reduce((t,l)=>(t[l]||(t[l]={}),"object"==typeof e&&void 0!==e[l]&&(t[l]["--sg-spacing-x"]=(0,m.bG)(e[l])),"object"==typeof o&&void 0!==o[l]&&(t[l]["--sg-spacing-y"]=(0,m.bG)(o[l])),"object"==typeof n&&void 0!==n[l]&&(t[l]["--sg-cols"]=n[l]),t),{}),b=(0,s.I)((0,d.X)(c),a).filter(e=>(0,d.X)(c[e.value]).length>0),g=b.map(e=>({query:`(min-width: ${a.breakpoints[e.value]})`,styles:c[e.value]}));return l.createElement(u.f,{styles:i,media:g,selector:r})}var g={root:"m-2415a157"};let f={cols:1,spacing:"md"},k=(0,c.d)((e,t)=>{let n=(0,r.w)("SimpleGrid",f,e),{classNames:c,className:d,style:h,styles:m,unstyled:s,vars:p,cols:E,verticalSpacing:u,spacing:k,...v}=n,M=(0,a.y)({name:"SimpleGrid",classes:g,props:n,className:d,style:h,classNames:c,styles:m,unstyled:s,vars:p}),C=(0,o.m)();return l.createElement(l.Fragment,null,l.createElement(b,{...n,selector:`.${C}`}),l.createElement(i.x,{ref:t,...M("root",{className:C}),...v}))});k.classes=g,k.displayName="@mantine/core/SimpleGrid"},94993:function(e,t,n){n.d(t,{l:function(){return h}});var l=n(27378),r=n(96739),a=n(6231),o=n(56589),i=n(20410),c={root:"m-d6493fad"};let d={},h=(0,i.d)((e,t)=>{let n=(0,r.w)("TypographyStylesProvider",d,e),{classNames:i,className:h,style:m,styles:s,unstyled:p,...E}=n,u=(0,a.y)({name:"TypographyStylesProvider",classes:c,props:n,className:h,style:m,classNames:i,styles:s,unstyled:p});return l.createElement(o.x,{ref:t,...u("root"),...E})});h.classes=c,h.displayName="@mantine/core/TypographyStylesProvider"},75001:function(e,t,n){n.d(t,{v:function(){return l}});function l(e){return"object"==typeof e&&null!==e?"base"in e?e.base:void 0:e}},10874:function(e,t,n){n.d(t,{o:function(){return r}});var l=n(27589);function r(e,t){return e in t.breakpoints?(0,l.px)(t.breakpoints[e]):(0,l.px)(e)}},31582:function(e,t,n){n.d(t,{I:function(){return r}});var l=n(10874);function r(e,t){let n=e.map(e=>({value:e,px:(0,l.o)(e,t)}));return n.sort((e,t)=>e.px-t.px),n}},29002:function(e,t,n){n.d(t,{U:function(){return r}});var l=n(27378);function r(e){let[t,n]=(0,l.useState)(e);return[t,e=>{if(e){if("function"==typeof e)n(e);else if("object"==typeof e&&"nativeEvent"in e){let{currentTarget:t}=e;n("checkbox"===t.type?t.checked:t.value)}else n(e)}else n(e)}]}},47986:function(e,t,n){n.d(t,{Y:function(){return a},r:function(){return r}});var l=n(71656);let[r,a]=(0,l.R)("RichTextEditor component was not found in tree")},78053:function(e,t,n){n.d(t,{L:function(){return e0}});var l=n(27378),r=n(20410),a=n(96739),o=n(6231),i=n(56589);let c={linkControlLabel:"Link",colorPickerControlLabel:"Text color",highlightControlLabel:"Highlight text",colorControlLabel:e=>`Set text color ${e}`,boldControlLabel:"Bold",italicControlLabel:"Italic",underlineControlLabel:"Underline",strikeControlLabel:"Strikethrough",clearFormattingControlLabel:"Clear formatting",unlinkControlLabel:"Remove link",bulletListControlLabel:"Bullet list",orderedListControlLabel:"Ordered list",h1ControlLabel:"Heading 1",h2ControlLabel:"Heading 2",h3ControlLabel:"Heading 3",h4ControlLabel:"Heading 4",h5ControlLabel:"Heading 5",h6ControlLabel:"Heading 6",blockquoteControlLabel:"Blockquote",alignLeftControlLabel:"Align text: left",alignCenterControlLabel:"Align text: center",alignRightControlLabel:"Align text: right",alignJustifyControlLabel:"Align text: justify",codeControlLabel:"Code",codeBlockControlLabel:"Code block",subscriptControlLabel:"Subscript",superscriptControlLabel:"Superscript",unsetColorControlLabel:"Unset color",hrControlLabel:"Horizontal line",undoControlLabel:"Undo",redoControlLabel:"Redo",linkEditorInputLabel:"Enter URL",linkEditorInputPlaceholder:"https://example.com/",linkEditorExternalLink:"Open link in a new tab",linkEditorInternalLink:"Open link in the same tab",linkEditorSave:"Save",colorPickerCancel:"Cancel",colorPickerClear:"Clear color",colorPickerColorPicker:"Color picker",colorPickerPalette:"Color palette",colorPickerSave:"Save",colorPickerColorLabel:e=>`Set text color ${e}`};var d=n(47986),h=n(49947),m=n(94993),s={root:"m-dd3f7539",typographyStylesProvider:"m-d37966d9",content:"m-c2204cc2",linkEditorDropdown:"m-8a991b4f",control:"m-c2207da6",controlsGroup:"m-2ab47ef2",linkEditor:"m-b67b711e",linkEditorInput:"m-296cf94c",linkEditorExternalControl:"m-cfef614",linkEditorSave:"m-3b28e7bb",toolbar:"m-4574a3c4"};let p={},E=(0,r.d)((e,t)=>{let n=(0,a.w)("RichTextEditorContent",p,e),{classNames:r,className:o,style:c,styles:s,vars:E,...u}=n,b=(0,d.Y)();return b.withTypographyStyles?l.createElement(m.l,{...b.getStyles("typographyStylesProvider",{className:o,style:c,styles:s,classNames:r}),unstyled:b.unstyled,ref:t},l.createElement(i.x,{component:h.kg,editor:b.editor,...b.getStyles("content",{classNames:r,styles:s}),...u})):l.createElement(i.x,{component:h.kg,editor:b.editor,...b.getStyles("content",{classNames:r,styles:s,className:o,style:c}),...u})});function u(e){return l.createElement("svg",{...e,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"})}function b(e){return l.createElement(u,{...e},l.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),l.createElement("path",{d:"M7 5h6a3.5 3.5 0 0 1 0 7h-6z"}),l.createElement("path",{d:"M13 12h1a3.5 3.5 0 0 1 0 7h-7v-7"}))}function g(e){return l.createElement(u,{...e},l.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),l.createElement("path",{d:"M11 5l6 0"}),l.createElement("path",{d:"M7 19l6 0"}),l.createElement("path",{d:"M14 5l-4 14"}))}function f(e){return l.createElement(u,{...e},l.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),l.createElement("path",{d:"M7 5v5a5 5 0 0 0 10 0v-5"}),l.createElement("path",{d:"M5 19h14"}))}function k(e){return l.createElement(u,{...e},l.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),l.createElement("path",{d:"M5 12l14 0"}),l.createElement("path",{d:"M16 6.5a4 2 0 0 0 -4 -1.5h-1a3.5 3.5 0 0 0 0 7h2a3.5 3.5 0 0 1 0 7h-1.5a4 2 0 0 1 -4 -1.5"}))}function v(e){return l.createElement(u,{...e},l.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),l.createElement("path",{d:"M17 15l4 4m0 -4l-4 4"}),l.createElement("path",{d:"M7 6v-1h11v1"}),l.createElement("path",{d:"M7 19l4 0"}),l.createElement("path",{d:"M13 5l-4 14"}))}function M(e){return l.createElement(u,{...e},l.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),l.createElement("path",{d:"M19 18v-8l-2 2"}),l.createElement("path",{d:"M4 6v12"}),l.createElement("path",{d:"M12 6v12"}),l.createElement("path",{d:"M11 18h2"}),l.createElement("path",{d:"M3 18h2"}),l.createElement("path",{d:"M4 12h8"}),l.createElement("path",{d:"M3 6h2"}),l.createElement("path",{d:"M11 6h2"}))}function C(e){return l.createElement(u,{...e},l.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),l.createElement("path",{d:"M17 12a2 2 0 1 1 4 0c0 .591 -.417 1.318 -.816 1.858l-3.184 4.143l4 0"}),l.createElement("path",{d:"M4 6v12"}),l.createElement("path",{d:"M12 6v12"}),l.createElement("path",{d:"M11 18h2"}),l.createElement("path",{d:"M3 18h2"}),l.createElement("path",{d:"M4 12h8"}),l.createElement("path",{d:"M3 6h2"}),l.createElement("path",{d:"M11 6h2"}))}function L(e){return l.createElement(u,{...e},l.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),l.createElement("path",{d:"M19 14a2 2 0 1 0 -2 -2"}),l.createElement("path",{d:"M17 16a2 2 0 1 0 2 -2"}),l.createElement("path",{d:"M4 6v12"}),l.createElement("path",{d:"M12 6v12"}),l.createElement("path",{d:"M11 18h2"}),l.createElement("path",{d:"M3 18h2"}),l.createElement("path",{d:"M4 12h8"}),l.createElement("path",{d:"M3 6h2"}),l.createElement("path",{d:"M11 6h2"}))}function x(e){return l.createElement(u,{...e},l.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),l.createElement("path",{d:"M20 18v-8l-4 6h5"}),l.createElement("path",{d:"M4 6v12"}),l.createElement("path",{d:"M12 6v12"}),l.createElement("path",{d:"M11 18h2"}),l.createElement("path",{d:"M3 18h2"}),l.createElement("path",{d:"M4 12h8"}),l.createElement("path",{d:"M3 6h2"}),l.createElement("path",{d:"M11 6h2"}))}function y(e){return l.createElement(u,{...e},l.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),l.createElement("path",{d:"M17 18h2a2 2 0 1 0 0 -4h-2v-4h4"}),l.createElement("path",{d:"M4 6v12"}),l.createElement("path",{d:"M12 6v12"}),l.createElement("path",{d:"M11 18h2"}),l.createElement("path",{d:"M3 18h2"}),l.createElement("path",{d:"M4 12h8"}),l.createElement("path",{d:"M3 6h2"}),l.createElement("path",{d:"M11 6h2"}))}function T(e){return l.createElement(u,{...e},l.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),l.createElement("path",{d:"M19 14a2 2 0 1 0 0 4a2 2 0 0 0 0 -4z"}),l.createElement("path",{d:"M21 12a2 2 0 1 0 -4 0v4"}),l.createElement("path",{d:"M4 6v12"}),l.createElement("path",{d:"M12 6v12"}),l.createElement("path",{d:"M11 18h2"}),l.createElement("path",{d:"M3 18h2"}),l.createElement("path",{d:"M4 12h8"}),l.createElement("path",{d:"M3 6h2"}),l.createElement("path",{d:"M11 6h2"}))}function R(e){return l.createElement(u,{...e},l.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),l.createElement("path",{d:"M9 6l11 0"}),l.createElement("path",{d:"M9 12l11 0"}),l.createElement("path",{d:"M9 18l11 0"}),l.createElement("path",{d:"M5 6l0 .01"}),l.createElement("path",{d:"M5 12l0 .01"}),l.createElement("path",{d:"M5 18l0 .01"}))}function H(e){return l.createElement(u,{...e},l.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),l.createElement("path",{d:"M11 6h9"}),l.createElement("path",{d:"M11 12h9"}),l.createElement("path",{d:"M12 18h8"}),l.createElement("path",{d:"M4 16a2 2 0 1 1 4 0c0 .591 -.5 1 -1 1.5l-3 2.5h4"}),l.createElement("path",{d:"M6 10v-6l-2 2"}))}function S(e){return l.createElement(u,{...e},l.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),l.createElement("path",{d:"M17 22v-2"}),l.createElement("path",{d:"M9 15l6 -6"}),l.createElement("path",{d:"M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464"}),l.createElement("path",{d:"M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463"}),l.createElement("path",{d:"M20 17h2"}),l.createElement("path",{d:"M2 7h2"}),l.createElement("path",{d:"M7 2v2"}))}function A(e){return l.createElement(u,{...e},l.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),l.createElement("path",{d:"M6 15h15"}),l.createElement("path",{d:"M21 19h-15"}),l.createElement("path",{d:"M15 11h6"}),l.createElement("path",{d:"M21 7h-6"}),l.createElement("path",{d:"M9 9h1a1 1 0 1 1 -1 1v-2.5a2 2 0 0 1 2 -2"}),l.createElement("path",{d:"M3 9h1a1 1 0 1 1 -1 1v-2.5a2 2 0 0 1 2 -2"}))}function w(e){return l.createElement(u,{...e},l.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),l.createElement("path",{d:"M4 6l16 0"}),l.createElement("path",{d:"M4 12l10 0"}),l.createElement("path",{d:"M4 18l14 0"}))}function z(e){return l.createElement(u,{...e},l.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),l.createElement("path",{d:"M4 6l16 0"}),l.createElement("path",{d:"M10 12l10 0"}),l.createElement("path",{d:"M6 18l14 0"}))}function P(e){return l.createElement(u,{...e},l.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),l.createElement("path",{d:"M4 6l16 0"}),l.createElement("path",{d:"M8 12l8 0"}),l.createElement("path",{d:"M6 18l12 0"}))}function G(e){return l.createElement(u,{...e},l.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),l.createElement("path",{d:"M4 6l16 0"}),l.createElement("path",{d:"M4 12l16 0"}),l.createElement("path",{d:"M4 18l12 0"}))}function B(e){return l.createElement(u,{...e},l.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),l.createElement("path",{d:"M5 7l8 10m-8 0l8 -10"}),l.createElement("path",{d:"M21 20h-4l3.5 -4a1.73 1.73 0 0 0 -3.5 -2"}))}function U(e){return l.createElement(u,{...e},l.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),l.createElement("path",{d:"M5 7l8 10m-8 0l8 -10"}),l.createElement("path",{d:"M21 11h-4l3.5 -4a1.73 1.73 0 0 0 -3.5 -2"}))}function I(e){return l.createElement(u,{...e},l.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),l.createElement("path",{d:"M7 8l-4 4l4 4"}),l.createElement("path",{d:"M17 8l4 4l-4 4"}),l.createElement("path",{d:"M14 4l-4 16"}))}function N(e){return l.createElement(u,{...e},l.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),l.createElement("path",{d:"M3 19h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4"}),l.createElement("path",{d:"M12.5 5.5l4 4"}),l.createElement("path",{d:"M4.5 13.5l4 4"}),l.createElement("path",{d:"M21 15v4h-8l4 -4z"}))}function D(e){return l.createElement(u,{...e},l.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),l.createElement("path",{d:"M5 12h2"}),l.createElement("path",{d:"M17 12h2"}),l.createElement("path",{d:"M11 12h2"}))}function O(e){return l.createElement(u,{...e},l.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),l.createElement("path",{d:"M20.042 16.045a9 9 0 0 0 -12.087 -12.087m-2.318 1.677a9 9 0 1 0 12.725 12.73"}),l.createElement("path",{d:"M3 3l18 18"}))}function _(e){return l.createElement(u,{...e},l.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),l.createElement("path",{d:"M11 7l6 6"}),l.createElement("path",{d:"M4 16l11.7 -11.7a1 1 0 0 1 1.4 0l2.6 2.6a1 1 0 0 1 0 1.4l-11.7 11.7h-4v-4z"}))}function j(e){return l.createElement(u,{...e},l.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),l.createElement("path",{d:"M18 6l-12 12"}),l.createElement("path",{d:"M6 6l12 12"}))}function q(e){return l.createElement(u,{...e},l.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),l.createElement("path",{d:"M12 21a9 9 0 0 1 0 -18c4.97 0 9 3.582 9 8c0 1.06 -.474 2.078 -1.318 2.828c-.844 .75 -1.989 1.172 -3.182 1.172h-2.5a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25"}),l.createElement("path",{d:"M8.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}),l.createElement("path",{d:"M12.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}),l.createElement("path",{d:"M16.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}))}function J(e){return l.createElement(u,{...e},l.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),l.createElement("path",{d:"M5 12l5 5l10 -10"}))}function Y(e){return l.createElement(u,{...e},l.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),l.createElement("path",{d:"M9 15l6 -6"}),l.createElement("path",{d:"M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464"}),l.createElement("path",{d:"M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463"}))}function Z(e){return l.createElement(u,{...e},l.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),l.createElement("path",{d:"M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"}),l.createElement("path",{d:"M11 13l9 -9"}),l.createElement("path",{d:"M15 4h5v5"}))}function F(e){return l.createElement(u,{...e},l.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),l.createElement("path",{d:"M9 14l-4 -4l4 -4"}),l.createElement("path",{d:"M5 10h11a4 4 0 1 1 0 8h-1"}))}function K(e){return l.createElement(u,{...e},l.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),l.createElement("path",{d:"M15 14l4 -4l-4 -4"}),l.createElement("path",{d:"M19 10h-11a4 4 0 1 0 0 8h1"}))}E.classes=s,E.displayName="@mantine/tiptap/RichTextEditorContent";var $=n(19397),W=n(71078);let X={interactive:!0},V=(0,r.d)((e,t)=>{let n=(0,a.w)("RichTextEditorControl",X,e),{classNames:r,className:o,style:i,styles:c,vars:h,interactive:m,active:s,onMouseDown:p,disabled:E,...u}=n,b=(0,d.Y)();return l.createElement($.k,{...u,...b.getStyles("control",{className:o,style:i,classNames:r,styles:c}),disabled:E,"data-rich-text-editor-control":!0,tabIndex:m?0:-1,"data-interactive":m||void 0,"data-disabled":E||void 0,"data-active":s||void 0,"aria-pressed":s&&m||void 0,"aria-hidden":!m||void 0,ref:t,unstyled:b.unstyled,onMouseDown:e=>{e.preventDefault(),p?.(e)}})});V.classes=s,V.displayName="@mantine/tiptap/RichTextEditorControl";let Q=(0,l.forwardRef)(({className:e,icon:t,...n},r)=>l.createElement(V,{ref:r,...n},l.createElement(t,{style:{width:(0,W.h)(16),height:(0,W.h)(16)}})));function ee({label:e,isActive:t,operation:n,icon:r,isDisabled:a}){return(0,l.forwardRef)((o,i)=>{let{editor:c,labels:h}=(0,d.Y)(),m=h[e];return l.createElement(Q,{...o,"aria-label":m,title:m,active:!!t?.name&&c?.isActive(t.name,t.attributes),ref:i,onClick:()=>c?.chain().focus()[n.name](n.attributes).run(),icon:o.icon||r,disabled:a?.(c)||!1})})}Q.displayName="@mantine/tiptap/RichTextEditorControlBase";let et=ee({label:"boldControlLabel",icon:e=>l.createElement(b,{...e}),isActive:{name:"bold"},operation:{name:"toggleBold"}}),en=ee({label:"italicControlLabel",icon:e=>l.createElement(g,{...e}),isActive:{name:"italic"},operation:{name:"toggleItalic"}}),el=ee({label:"underlineControlLabel",icon:e=>l.createElement(f,{...e}),isActive:{name:"underline"},operation:{name:"toggleUnderline"}}),er=ee({label:"strikeControlLabel",icon:e=>l.createElement(k,{...e}),isActive:{name:"strike"},operation:{name:"toggleStrike"}}),ea=ee({label:"clearFormattingControlLabel",icon:e=>l.createElement(v,{...e}),operation:{name:"unsetAllMarks"}}),eo=ee({label:"unlinkControlLabel",icon:e=>l.createElement(S,{...e}),operation:{name:"unsetLink"}}),ei=ee({label:"bulletListControlLabel",icon:e=>l.createElement(R,{...e}),isActive:{name:"bulletList"},operation:{name:"toggleBulletList"}}),ec=ee({label:"orderedListControlLabel",icon:e=>l.createElement(H,{...e}),isActive:{name:"orderedList"},operation:{name:"toggleOrderedList"}}),ed=ee({label:"h1ControlLabel",icon:e=>l.createElement(M,{...e}),isActive:{name:"heading",attributes:{level:1}},operation:{name:"toggleHeading",attributes:{level:1}}}),eh=ee({label:"h2ControlLabel",icon:e=>l.createElement(C,{...e}),isActive:{name:"heading",attributes:{level:2}},operation:{name:"toggleHeading",attributes:{level:2}}}),em=ee({label:"h3ControlLabel",icon:e=>l.createElement(L,{...e}),isActive:{name:"heading",attributes:{level:3}},operation:{name:"toggleHeading",attributes:{level:3}}}),es=ee({label:"h4ControlLabel",icon:e=>l.createElement(x,{...e}),isActive:{name:"heading",attributes:{level:4}},operation:{name:"toggleHeading",attributes:{level:4}}}),ep=ee({label:"h5ControlLabel",icon:e=>l.createElement(y,{...e}),isActive:{name:"heading",attributes:{level:5}},operation:{name:"toggleHeading",attributes:{level:5}}}),eE=ee({label:"h6ControlLabel",icon:e=>l.createElement(T,{...e}),isActive:{name:"heading",attributes:{level:6}},operation:{name:"toggleHeading",attributes:{level:6}}}),eu=ee({label:"blockquoteControlLabel",icon:e=>l.createElement(A,{...e}),isActive:{name:"blockquote"},operation:{name:"toggleBlockquote"}}),eb=ee({label:"alignLeftControlLabel",icon:e=>l.createElement(w,{...e}),operation:{name:"setTextAlign",attributes:"left"}}),eg=ee({label:"alignRightControlLabel",icon:e=>l.createElement(z,{...e}),operation:{name:"setTextAlign",attributes:"right"}}),ef=ee({label:"alignCenterControlLabel",icon:e=>l.createElement(P,{...e}),operation:{name:"setTextAlign",attributes:"center"}}),ek=ee({label:"alignJustifyControlLabel",icon:e=>l.createElement(G,{...e}),operation:{name:"setTextAlign",attributes:"justify"}}),ev=ee({label:"subscriptControlLabel",icon:e=>l.createElement(B,{...e}),isActive:{name:"subscript"},operation:{name:"toggleSubscript"}}),eM=ee({label:"superscriptControlLabel",icon:e=>l.createElement(U,{...e}),isActive:{name:"superscript"},operation:{name:"toggleSuperscript"}}),eC=ee({label:"codeControlLabel",icon:e=>l.createElement(I,{...e}),isActive:{name:"code"},operation:{name:"toggleCode"}}),eL=ee({label:"codeBlockControlLabel",icon:e=>l.createElement(I,{...e}),isActive:{name:"codeBlock"},operation:{name:"toggleCodeBlock"}}),ex=ee({label:"highlightControlLabel",icon:e=>l.createElement(N,{...e}),isActive:{name:"highlight"},operation:{name:"toggleHighlight"}}),ey=ee({label:"hrControlLabel",icon:e=>l.createElement(D,{...e}),operation:{name:"setHorizontalRule"}}),eT=ee({label:"unsetColorControlLabel",icon:e=>l.createElement(O,{...e}),operation:{name:"unsetColor"}}),eR=ee({label:"undoControlLabel",icon:e=>l.createElement(F,{...e}),isDisabled:e=>!e?.can().undo(),operation:{name:"undo"}}),eH=ee({label:"redoControlLabel",icon:e=>l.createElement(K,{...e}),isDisabled:e=>!e?.can().redo(),operation:{name:"redo"}});var eS=n(5564),eA=n(63433),ew=n(7033),ez=n(99684),eP=n(8671),eG=n(29002),eB=n(87921),eU=n(56617);let eI=e=>l.createElement(Y,{...e}),eN={},eD=(0,r.d)((e,t)=>{let n=(0,a.w)("RichTextEditorLinkControl",eN,e),{classNames:r,className:o,style:i,styles:c,vars:h,icon:m,popoverProps:s,disableTooltips:p,initialExternal:E,...u}=n,b=(0,d.Y)(),g={classNames:r,styles:c},[f,k]=(0,eG.U)(""),[v,M]=(0,l.useState)(E),[C,{open:L,close:x}]=(0,eB.q)(!1),y=()=>{L();let e=b.editor?.getAttributes("link");k(e?.href||""),M(e?.target==="_blank")},T=()=>{x(),k(""),M(E)},R=()=>{T(),""===f?b.editor?.chain().focus().extendMarkRange("link").unsetLink().run():b.editor?.chain().focus().extendMarkRange("link").setLink({href:f,target:v?"_blank":null}).run()};(0,eU.s)("edit-link",y,!1);let{resolvedClassNames:H,resolvedStyles:S}=(0,eS.h)({classNames:r,styles:c,props:n});return l.createElement(eA.J,{trapFocus:!0,shadow:"md",withinPortal:!0,opened:C,onClose:T,offset:-44,zIndex:1e4,...s},l.createElement(eA.J.Target,null,l.createElement(Q,{icon:m||eI,...u,"aria-label":b.labels.linkControlLabel,title:b.labels.linkControlLabel,onClick:y,active:b.editor?.isActive("link"),ref:t,classNames:H,styles:S,className:o,style:i})),l.createElement(eA.J.Dropdown,{...b.getStyles("linkEditorDropdown",g)},l.createElement("div",{...b.getStyles("linkEditor",g)},l.createElement(ew.o,{placeholder:b.labels.linkEditorInputPlaceholder,"aria-label":b.labels.linkEditorInputLabel,type:"url",value:f,onChange:k,classNames:{input:b.getStyles("linkEditorInput",g).className},onKeyDown:e=>{"Enter"===e.key&&(e.preventDefault(),R())},rightSection:l.createElement(ez.u,{label:v?b.labels.linkEditorExternalLink:b.labels.linkEditorInternalLink,events:{hover:!0,focus:!0,touch:!0},withinPortal:!0,withArrow:!0,disabled:p,zIndex:1e4},l.createElement($.k,{onClick:()=>M(e=>!e),"data-active":v||void 0,...b.getStyles("linkEditorExternalControl",g)},l.createElement(Z,{style:{width:(0,W.h)(14),height:(0,W.h)(14)}})))}),l.createElement(eP.z,{variant:"default",onClick:R,...b.getStyles("linkEditorSave",g)},b.labels.linkEditorSave))))});eD.classes=s,eD.displayName="@mantine/tiptap/RichTextEditorLinkControl";var eO=n(16202),e_=n(37454),ej=n(36227),eq=n(22971),eJ=n(84246);let eY={},eZ=(0,l.forwardRef)((e,t)=>{let{popoverProps:n,colors:r,colorPickerProps:o,...i}=(0,a.w)("RichTextEditorColorPickerControl",eY,e),{editor:c,labels:h,getStyles:m}=(0,d.Y)(),[s,{toggle:p,close:E}]=(0,eB.q)(!1),[u,b]=(0,l.useState)("palette"),g=c?.getAttributes("textStyle").color||"var(--mantine-color-text)",f=(e,t=!0)=>{c?.chain().focus().setColor(e).run(),t&&E()},k=r.map((e,t)=>l.createElement(eO.b,{key:t,component:"button",color:e,onClick:()=>f(e),size:26,radius:"xs",style:{cursor:"pointer"},title:h.colorPickerColorLabel(e),"aria-label":h.colorPickerColorLabel(e)}));return l.createElement(eA.J,{opened:s,withinPortal:!0,trapFocus:!0,onClose:E,...n},l.createElement(eA.J.Target,null,l.createElement(V,{...i,"aria-label":h.colorPickerControlLabel,title:h.colorPickerControlLabel,ref:t,onClick:p},l.createElement(eO.b,{color:g,size:14}))),l.createElement(eA.J.Dropdown,{...m("linkEditorDropdown")},"palette"===u&&l.createElement(e_.M,{cols:7,spacing:2},k),"colorPicker"===u&&l.createElement(ej.z,{defaultValue:g,onChange:e=>f(e,!1),...o}),l.createElement(ez.u.Group,{closeDelay:200},l.createElement(eq.Z,{justify:"flex-end",gap:"xs",mt:"sm"},"palette"===u&&l.createElement(eJ.A,{variant:"default",onClick:E,title:h.colorPickerCancel,"aria-label":h.colorPickerCancel},l.createElement(j,{style:{width:(0,W.h)(16),height:(0,W.h)(16)}})),l.createElement(eJ.A,{variant:"default",onClick:()=>{c?.chain().focus().unsetColor().run(),E()},title:h.colorPickerClear,"aria-label":h.colorPickerClear},l.createElement(O,{style:{width:(0,W.h)(16),height:(0,W.h)(16)}})),"palette"===u?l.createElement(eJ.A,{variant:"default",onClick:()=>b("colorPicker"),title:h.colorPickerColorPicker,"aria-label":h.colorPickerColorPicker},l.createElement(_,{style:{width:(0,W.h)(16),height:(0,W.h)(16)}})):l.createElement(eJ.A,{variant:"default",onClick:()=>b("palette"),"aria-label":h.colorPickerPalette,title:h.colorPickerPalette},l.createElement(q,{style:{width:(0,W.h)(16),height:(0,W.h)(16)}})),"colorPicker"===u&&l.createElement(eJ.A,{variant:"default",onClick:E,title:h.colorPickerSave,"aria-label":h.colorPickerSave},l.createElement(J,{style:{width:(0,W.h)(16),height:(0,W.h)(16)}}))))))});eZ.displayName="@mantine/tiptap/ColorPickerControl";let eF={},eK=(0,l.forwardRef)((e,t)=>{let{color:n,...r}=(0,a.w)("RichTextEditorColorControl",eF,e),{editor:o,labels:i}=(0,d.Y)(),c=o?.getAttributes("textStyle").color||null,h=i.colorControlLabel(n);return l.createElement(V,{...r,active:c===n,"aria-label":h,title:h,onClick:()=>o?.chain().focus().setColor(n).run(),ref:t},l.createElement(eO.b,{color:n,size:14}))}),e$={},eW=(0,r.d)((e,t)=>{let n=(0,a.w)("RichTextEditorControlsGroup",e$,e),{classNames:r,className:o,style:c,styles:h,vars:m,...s}=n,p=(0,d.Y)();return l.createElement(i.x,{ref:t,...p.getStyles("controlsGroup",{className:o,style:c,styles:h,classNames:r}),...s})});eW.classes=s,eW.displayName="@mantine/tiptap/RichTextEditorControlsGroup";let eX={},eV=(0,r.d)((e,t)=>{let n=(0,a.w)("RichTextEditorToolbar",eX,e),{classNames:r,className:o,style:c,styles:h,vars:m,sticky:s,stickyOffset:p,...E}=n,u=(0,d.Y)();return l.createElement(i.x,{ref:t,mod:{sticky:s},...u.getStyles("toolbar",{className:o,style:c,styles:h,classNames:r}),...E,__vars:{"--rte-sticky-offset":(0,W.h)(p)}})});eV.classes=s,eV.displayName="@mantine/tiptap/RichTextEditorToolbar";let eQ={withCodeHighlightStyles:!0,withTypographyStyles:!0},e0=(0,r.d)((e,t)=>{let n=(0,a.w)("RichTextEditor",eQ,e),{classNames:r,className:h,style:m,styles:p,unstyled:E,vars:u,editor:b,withCodeHighlightStyles:g,withTypographyStyles:f,labels:k,children:v,...M}=n,C=(0,o.y)({name:"RichTextEditor",classes:s,props:n,className:h,style:m,classNames:r,styles:p,unstyled:E,vars:u}),L=(0,l.useMemo)(()=>({...c,...k}),[k]);return l.createElement(d.r,{value:{editor:b,getStyles:C,labels:L,withCodeHighlightStyles:g,withTypographyStyles:f,unstyled:E}},l.createElement(i.x,{...C("root"),...M,ref:t},v))});e0.classes=s,e0.displayName="@mantine/tiptap/RichTextEditor",e0.Content=E,e0.Control=V,e0.Toolbar=eV,e0.ControlsGroup=eW,e0.Bold=et,e0.Italic=en,e0.Strikethrough=er,e0.Underline=el,e0.ClearFormatting=ea,e0.H1=ed,e0.H2=eh,e0.H3=em,e0.H4=es,e0.H5=ep,e0.H6=eE,e0.BulletList=ei,e0.OrderedList=ec,e0.Link=eD,e0.Unlink=eo,e0.Blockquote=eu,e0.AlignLeft=eb,e0.AlignRight=eg,e0.AlignCenter=ef,e0.AlignJustify=ek,e0.Superscript=eM,e0.Subscript=ev,e0.Code=eC,e0.CodeBlock=eL,e0.ColorPicker=eZ,e0.Color=eK,e0.Highlight=ex,e0.Hr=ey,e0.UnsetColor=eT,e0.Undo=eR,e0.Redo=eH},16541:function(e,t,n){n.d(t,{r:function(){return r}});var l=n(61165);let r=l.Z.extend({addKeyboardShortcuts:()=>({"Mod-k":()=>(window.dispatchEvent(new Event("edit-link")),!0)})}).configure({openOnClick:!1})}}]);