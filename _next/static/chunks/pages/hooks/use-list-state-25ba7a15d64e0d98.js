(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[19023],{74777:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-list-state",function(){return t(18643)}])},18643:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return d}});var i=t(24246),s=t(71670),a=t(63630),r=t(3916),o=t(54568);let l=(0,r.A)(o.us.useListState);function c(e){let n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components},{Demo:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"use-list-state"})," provides an API to work with list state:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"const [values, handlers] = useListState([{ a: 1 }]);\n\n// add one or more items to the end of the list\nconst append = () => handlers.append({ a: 2 });\n// values -> [{ a: 1 }, { a: 2 }]\n\n// add one or more items to the start of the list\nconst prepend = () => handlers.prepend({ a: 3 }, { a: 4 });\n// values -> [{ a: 3 }, { a: 4 }, { a: 1 }, { a: 2 }]\n\n// remove items at given positions\nconst remove = () => handlers.remove(0, 2);\n// values -> [{ a: 4 }, { a: 2 }]\n\n// insert one or more items at given position\nconst insert = () => handlers.insert(1, { a: 5 });\n// values -> [{ a: 4 }, { a: 5 }, { a: 2 }]\n\n// apply function to each element of the list\nconst apply = () =>\n  handlers.apply((item, index) => ({ a: item.a * index }));\n// values -> [{ a: 0 }, { a: 5 }, { a: 4 }]\n\n// move item from one position to another\nconst reorder = () => handlers.reorder({ from: 2, to: 0 });\n// values -> [{ a: 4 }, { a: 0 }, { a: 5 }]\n\n// apply function to each element that matches condition\nconst applyWhere = () =>\n  handlers.applyWhere(\n    (item) => item.a > 0,\n    (item) => ({ a: item.a + 2 })\n  );\n// values -> [{ a: 6 }, { a: 0 }, { a: 7 }]\n\n// set entirely new state\nconst setState = () => handlers.setState([{ a: 6 }, { a: 7 }]);\n// values -> [{ a: 6 }, { a: 7 }]\n\n// set individual item at given position\nconst setItem = () => handlers.setItem(0, { a: 8 });\n// values -> [{ a: 8 }, { a: 7 }]\n\n// set item property at given position\nconst setItemProp = () => handlers.setItemProp(1, 'a', 'new-prop');\n// values -> [{ a: 8 }, { a: 'new-prop' }]\n\n// filter objects that have a = 'new-prop'\nconst filter = () => handlers.filter((item) => item.a === 'new-prop');\n// values -> [{ a: 'new-prop' }]\n"})}),"\n",(0,i.jsx)(n.h2,{id:"api",children:"API"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"use-list-state"})," takes an array as a single argument and\nreturns a list of values and handlers to change them in a tuple, similar to ",(0,i.jsx)(n.code,{children:"useState"})," hook."]}),"\n",(0,i.jsx)(n.p,{children:"The hook provides handlers to work with array data:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"append"})," – add items to the end of the list"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"prepend"})," – add items to the start of the list"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"pop"})," – remove last item"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"shift"})," – remove first item"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"insert"})," – insert items at given index"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"remove"})," – remove items at given indices"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"reorder"})," – move item from one position to another"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"apply"})," – apply given function to all items in the list"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"applyWhere"})," - apply given function to selective items using condition"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"setItem"})," – replace item at given index"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"setItemProp"})," – set item property at given index"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"setState"})," – set list state with react action"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"filter"})," - filter values with callback function"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"indeterminate-state-checkbox-example",children:"Indeterminate state checkbox example"}),"\n",(0,i.jsx)(t,{data:a.N,demoProps:{toggle:!0}}),"\n",(0,i.jsx)(n.h2,{id:"useliststatehandlers-type",children:"UseListStateHandlers type"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"@mantine/hooks"})," package exports ",(0,i.jsx)(n.code,{children:"UseListStateHandlers"}),". It is a generic type\nthat contains all handlers from ",(0,i.jsx)(n.code,{children:"useListState"})," hook. It can be used to type\nhandlers in your components."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"UseListStateHandlers"})," type:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"export interface UseListStateHandlers<T> {\n  setState: React.Dispatch<React.SetStateAction<T[]>>;\n  append: (...items: T[]) => void;\n  prepend: (...items: T[]) => void;\n  insert: (index: number, ...items: T[]) => void;\n  pop: () => void;\n  shift: () => void;\n  apply: (fn: (item: T, index?: number) => T) => void;\n  applyWhere: (\n    condition: (item: T, index: number) => boolean,\n    fn: (item: T, index?: number) => T\n  ) => void;\n  remove: (...indices: number[]) => void;\n  reorder: ({ from, to }: { from: number; to: number }) => void;\n  setItem: (index: number, item: T) => void;\n  setItemProp: <K extends keyof T, U extends T[K]>(\n    index: number,\n    prop: K,\n    value: U\n  ) => void;\n  filter: (fn: (item: T, i: number) => boolean) => void;\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The type is useful when you want to pass ",(0,i.jsx)(n.code,{children:"use-list-state"})," handlers to child components\nas a prop:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"import { UseListStateHandlers } from '@mantine/hooks';\n\ninterface Props {\n  handlers: UseListStateHandlers<string>;\n}\n\nfunction Demo({ handlers }: Props) {\n  return (\n    <button type=\"button\" onClick={() => handlers.append('hello')}>\n      Append hello\n    </button>\n  );\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"definition",children:"Definition"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"function useListState<T>(\n  initialValue?: T[]\n): [T[], UseListStateHandlers<T>];\n"})}),"\n",(0,i.jsx)(n.h2,{id:"set-item-type",children:"Set item type"}),"\n",(0,i.jsxs)(n.p,{children:["By default, ",(0,i.jsx)(n.code,{children:"use-list-state"})," will use type from ",(0,i.jsx)(n.code,{children:"initialValues"}),".\nIf you call the hook with an empty array, you must specify item type:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"useListState(['hello']); // ok, item type is string\nuseListState([]); // not ok, item type is any\nuseListState<string>([]); // ok, item type is string\n"})})]})}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,i.jsx)(l,{...e,children:(0,i.jsx)(c,{...e})})}},63630:function(e,n,t){"use strict";t.d(n,{N:function(){return c}});var i=t(27378),s=t(94193),a=t(56589),r=t(55574);let o=`
import { useListState, randomId } from '@mantine/hooks';
import { Checkbox } from '@mantine/core';

const initialValues = [
  { label: 'Receive email notifications', checked: false, key: randomId() },
  { label: 'Receive sms notifications', checked: false, key: randomId() },
  { label: 'Receive push notifications', checked: false, key: randomId() },
];

export function IndeterminateCheckbox() {
  const [values, handlers] = useListState(initialValues);

  const allChecked = values.every((value) => value.checked);
  const indeterminate = values.some((value) => value.checked) && !allChecked;

  const items = values.map((value, index) => (
    <Checkbox
      mt="xs"
      ml={33}
      label={value.label}
      key={value.key}
      checked={value.checked}
      onChange={(event) => handlers.setItemProp(index, 'checked', event.currentTarget.checked)}
    />
  ));

  return (
    <>
      <Checkbox
        checked={allChecked}
        indeterminate={indeterminate}
        label="Receive all notifications"
        onChange={() =>
          handlers.setState((current) =>
            current.map((value) => ({ ...value, checked: !allChecked }))
          )
        }
      />
      {items}
    </>
  );
}
`,l=[{label:"Receive email notifications",checked:!1,key:(0,r.k)()},{label:"Receive sms notifications",checked:!1,key:(0,r.k)()},{label:"Receive push notifications",checked:!1,key:(0,r.k)()}],c={type:"code",code:o,component:function(){let[e,n]=function(e=[]){let[n,t]=(0,i.useState)(e);return[n,{setState:t,append:(...e)=>t(n=>[...n,...e]),prepend:(...e)=>t(n=>[...e,...n]),insert:(e,...n)=>t(t=>[...t.slice(0,e),...n,...t.slice(e)]),pop:()=>t(e=>{let n=[...e];return n.pop(),n}),shift:()=>t(e=>{let n=[...e];return n.shift(),n}),apply:e=>t(n=>n.map((n,t)=>e(n,t))),applyWhere:(e,n)=>t(t=>t.map((t,i)=>e(t,i)?n(t,i):t)),remove:(...e)=>t(n=>n.filter((n,t)=>!e.includes(t))),reorder:({from:e,to:n})=>t(t=>{let i=[...t],s=t[e];return i.splice(e,1),i.splice(n,0,s),i}),setItem:(e,n)=>t(t=>{let i=[...t];return i[e]=n,i}),setItemProp:(e,n,i)=>t(t=>{let s=[...t];return s[e]={...s[e],[n]:i},s}),filter:e=>{t(n=>n.filter(e))}}]}(l),t=e.every(e=>e.checked),r=e.some(e=>e.checked)&&!t,o=e.map((e,t)=>i.createElement(s.X,{mt:"xs",ml:33,label:e.label,key:e.key,checked:e.checked,onChange:e=>n.setItemProp(t,"checked",e.currentTarget.checked)}));return i.createElement(a.x,{maw:400,mx:"auto"},i.createElement(s.X,{checked:t,indeterminate:r,label:"Receive all notifications",onChange:()=>n.setState(e=>e.map(e=>({...e,checked:!t})))}),o)}}}},function(e){e.O(0,[30370,15819,2775,49774,92888,40179],function(){return e(e.s=74777)}),_N_E=e.O()}]);