import{J as p,K as y,d as f,L as u,t as r,v as t,M as o,N as a,O as d,P as l,x as c,Q as m,B as n,y as i,R as h}from"./C2i97U5I.js";import{_ as v}from"./CqGSI99y.js";const S=p({header:{type:String,default:""},footer:{type:String,default:""},bodyStyle:{type:y([String,Object,Array]),default:""},bodyClass:String,shadow:{type:String,values:["always","hover","never"],default:"always"}}),b=f({name:"ElCard"}),C=f({...b,props:S,setup(w){const s=u("card");return(e,$)=>(r(),t("div",{class:o([a(s).b(),a(s).is(`${e.shadow}-shadow`)])},[e.$slots.header||e.header?(r(),t("div",{key:0,class:o(a(s).e("header"))},[d(e.$slots,"header",{},()=>[n(i(e.header),1)])],2)):l("v-if",!0),c("div",{class:o([a(s).e("body"),e.bodyClass]),style:m(e.bodyStyle)},[d(e.$slots,"default")],6),e.$slots.footer||e.footer?(r(),t("div",{key:1,class:o(a(s).e("footer"))},[d(e.$slots,"footer",{},()=>[n(i(e.footer),1)])],2)):l("v-if",!0)],2))}});var g=v(C,[["__file","card.vue"]]);const B=h(g);export{B as E};
