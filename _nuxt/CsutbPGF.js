import{u as w,d as E,r as S,a as q,o as I,b as T,c as U,e as P,f as V,g as D,h as N,i as R,p as H,n as O,j as x,k as z,l as F,m as $,q as M,w as G,s as Q,_ as W,t as J,v as K,x as _,y as k,z as X,A as Y,B as Z,C as ee,D as te}from"./DkiMjYTJ.js";import{u as ae}from"./CfUWFjdW.js";async function j(t,a=w()){const{path:i,matched:v}=a.resolve(t);if(!v.length||(a._routePreloaded||(a._routePreloaded=new Set),a._routePreloaded.has(i)))return;const e=a._preloadPromises=a._preloadPromises||[];if(e.length>4)return Promise.all(e).then(()=>j(t,a));a._routePreloaded.add(i);const n=v.map(l=>{var r;return(r=l.components)==null?void 0:r.default}).filter(l=>typeof l=="function");for(const l of n){const r=Promise.resolve(l()).catch(()=>{}).finally(()=>e.splice(e.indexOf(r)));e.push(r)}await Promise.all(e)}const ne=(...t)=>t.find(a=>a!==void 0);function re(t){const a=t.componentName||"NuxtLink";function i(e,n){if(!e||t.trailingSlash!=="append"&&t.trailingSlash!=="remove")return e;if(typeof e=="string")return A(e,t.trailingSlash);const l="path"in e&&e.path!==void 0?e.path:n(e).path;return{...e,name:void 0,path:A(l,t.trailingSlash)}}function v(e){const n=w(),l=M(),r=x(()=>!!e.target&&e.target!=="_self"),c=x(()=>{const f=e.to||e.href||"";return typeof f=="string"&&z(f,{acceptRelative:!0})}),b=R("RouterLink"),p=b&&typeof b!="string"?b.useLink:void 0,h=x(()=>{if(e.external)return!0;const f=e.to||e.href||"";return typeof f=="object"?!1:f===""||c.value}),s=x(()=>{const f=e.to||e.href||"";return h.value?f:i(f,n.resolve)}),d=h.value||p==null?void 0:p({...e,to:s}),g=x(()=>{var f;if(!s.value||c.value)return s.value;if(h.value){const u=typeof s.value=="object"&&"path"in s.value?P(s.value):s.value,m=typeof u=="object"?n.resolve(u).href:u;return i(m,n.resolve)}return typeof s.value=="object"?((f=n.resolve(s.value))==null?void 0:f.href)??null:i(F(l.app.baseURL,s.value),n.resolve)});return{to:s,hasTarget:r,isAbsoluteUrl:c,isExternal:h,href:g,isActive:(d==null?void 0:d.isActive)??x(()=>s.value===n.currentRoute.value.path),isExactActive:(d==null?void 0:d.isExactActive)??x(()=>s.value===n.currentRoute.value.path),route:(d==null?void 0:d.route)??x(()=>n.resolve(s.value)),async navigate(){await $(g.value,{replace:e.replace,external:h.value||r.value})}}}return E({name:a,props:{to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1},custom:{type:Boolean,default:void 0,required:!1}},useLink:v,setup(e,{slots:n}){const l=w(),{to:r,href:c,navigate:b,isExternal:p,hasTarget:h,isAbsoluteUrl:s}=v(e),d=S(!1),g=S(null),f=u=>{var m;g.value=e.custom?(m=u==null?void 0:u.$el)==null?void 0:m.nextElementSibling:u==null?void 0:u.$el};if(e.prefetch!==!1&&e.noPrefetch!==!0&&e.target!=="_blank"&&!ie()){const m=q();let y,o=null;I(()=>{const L=se();T(()=>{y=U(()=>{var C;(C=g==null?void 0:g.value)!=null&&C.tagName&&(o=L.observe(g.value,async()=>{o==null||o(),o=null;const B=typeof r.value=="string"?r.value:p.value?P(r.value):l.resolve(r.value).fullPath;await Promise.all([m.hooks.callHook("link:prefetch",B).catch(()=>{}),!p.value&&!h.value&&j(r.value,l).catch(()=>{})]),d.value=!0}))})})}),V(()=>{y&&D(y),o==null||o(),o=null})}return()=>{var y;if(!p.value&&!h.value){const o={ref:f,to:r.value,activeClass:e.activeClass||t.activeClass,exactActiveClass:e.exactActiveClass||t.exactActiveClass,replace:e.replace,ariaCurrentValue:e.ariaCurrentValue,custom:e.custom};return e.custom||(d.value&&(o.class=e.prefetchedClass||t.prefetchedClass),o.rel=e.rel||void 0),N(R("RouterLink"),o,n.default)}const u=e.target||null,m=ne(e.noRel?"":e.rel,t.externalRelAttribute,s.value||h.value?"noopener noreferrer":"")||null;return e.custom?n.default?n.default({href:c.value,navigate:b,get route(){if(!c.value)return;const o=new URL(c.value,window.location.href);return{path:o.pathname,fullPath:o.pathname,get query(){return H(o.search)},hash:o.hash,params:{},name:void 0,matched:[],redirectedFrom:void 0,meta:{},href:c.value}},rel:m,target:u,isExternal:p.value||h.value,isActive:!1,isExactActive:!1}):null:N("a",{ref:g,href:c.value||null,rel:m,target:u},(y=n.default)==null?void 0:y.call(n))}}})}const oe=re(O);function A(t,a){const i=a==="append"?G:Q;return z(t)&&!t.startsWith("http")?t:i(t,!0)}function se(){const t=q();if(t._observer)return t._observer;let a=null;const i=new Map,v=(n,l)=>(a||(a=new IntersectionObserver(r=>{for(const c of r){const b=i.get(c.target);(c.isIntersecting||c.intersectionRatio>0)&&b&&b()}})),i.set(n,l),a.observe(n),()=>{i.delete(n),a.unobserve(n),i.size===0&&(a.disconnect(),a=null)});return t._observer={observe:v}}function ie(){const t=navigator.connection;return!!(t&&(t.saveData||/2g/.test(t.effectiveType)))}const le=t=>(ee("data-v-e5ff5367"),t=t(),te(),t),ue={class:"font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden"},ce=le(()=>_("div",{class:"fixed left-0 right-0 spotlight z-10"},null,-1)),fe={class:"max-w-520px text-center z-20"},de=["textContent"],he=["textContent"],ve={class:"w-full flex items-center justify-center"},pe={__name:"error-404",props:{appName:{type:String,default:"Nuxt"},version:{type:String,default:""},statusCode:{type:Number,default:404},statusMessage:{type:String,default:"Not Found"},description:{type:String,default:"Sorry, the page you are looking for could not be found."},backHome:{type:String,default:"Go back home"}},setup(t){const a=t;return ae({title:`${a.statusCode} - ${a.statusMessage} | ${a.appName}`,script:[],style:[{children:'*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:var(--un-default-border-color, #e5e7eb)}:before,:after{--un-content:""}html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}h1{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}h1,p{margin:0}*,:before,:after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / .5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }'}]}),(i,v)=>{const e=oe;return J(),K("div",ue,[ce,_("div",fe,[_("h1",{class:"text-8xl sm:text-10xl font-medium mb-8",textContent:k(t.statusCode)},null,8,de),_("p",{class:"text-xl px-8 sm:px-0 sm:text-4xl font-light mb-16 leading-tight",textContent:k(t.description)},null,8,he),_("div",ve,[X(e,{to:"/",class:"gradient-border text-md sm:text-xl py-2 px-4 sm:py-3 sm:px-6 cursor-pointer"},{default:Y(()=>[Z(k(t.backHome),1)]),_:1})])])])}}},be=W(pe,[["__scopeId","data-v-e5ff5367"]]);export{be as default};