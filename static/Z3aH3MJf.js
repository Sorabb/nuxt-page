import{U as n,_ as u,aV as A,S,aL as N,bz as f}from"./Bjf4oVnu.js";var _=(r=>(r[r.TEXT=1]="TEXT",r[r.CLASS=2]="CLASS",r[r.STYLE=4]="STYLE",r[r.PROPS=8]="PROPS",r[r.FULL_PROPS=16]="FULL_PROPS",r[r.HYDRATE_EVENTS=32]="HYDRATE_EVENTS",r[r.STABLE_FRAGMENT=64]="STABLE_FRAGMENT",r[r.KEYED_FRAGMENT=128]="KEYED_FRAGMENT",r[r.UNKEYED_FRAGMENT=256]="UNKEYED_FRAGMENT",r[r.NEED_PATCH=512]="NEED_PATCH",r[r.DYNAMIC_SLOTS=1024]="DYNAMIC_SLOTS",r[r.HOISTED=-1]="HOISTED",r[r.BAIL=-2]="BAIL",r))(_||{});function s(r){return n(r)&&r.type===u}function L(r){return n(r)&&r.type===A}function i(r){return n(r)&&!s(r)&&!L(r)}const m=r=>{if(!n(r))return{};const o=r.props||{},e=(n(r.type)?r.type.props:void 0)||{},E={};return Object.keys(e).forEach(T=>{N(e[T],"default")&&(E[T]=e[T].default)}),Object.keys(o).forEach(T=>{E[f(T)]=o[T]}),E},p=r=>{const o=S(r)?r:[r],e=[];return o.forEach(E=>{var T;S(E)?e.push(...p(E)):n(E)&&S(E.children)?e.push(...p(E.children)):(e.push(E),n(E)&&((T=E.component)!=null&&T.subTree)&&e.push(...p(E.component.subTree)))}),e};export{_ as P,i as a,p as f,m as g,s as i};