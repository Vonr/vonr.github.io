import{w as m,d as v}from"./index.08d1af69.js";import{s as y,y as _,G as d,B as g,L as T,F as w}from"./scheduler.9d93041a.js";import{S as $,i as O}from"./index.3e095812.js";const D=m("light");function Y(e){let t=!1,c=()=>{t=!1},s,a,i;return _(e[4]),_(e[5]),{c:d,l:d,m(n,l){a||(i=[g(window,"mousemove",e[3]),g(window,"resize",e[4]),g(window,"scroll",()=>{t=!0,clearTimeout(s),s=setTimeout(c,100),e[5]()})],a=!0)},p(n,[l]){l&4&&!t&&(t=!0,clearTimeout(s),scrollTo(window.pageXOffset,n[2]),s=setTimeout(c,100))},i:d,o:d,d(n){a=!1,T(i)}}}const h=m(900),p=m(900),H=m(900),M=v([p,H],([e,t])=>e<t),b=m(0),L=m({x:0,y:0}),W=e=>{L.update(()=>({x:e.clientX,y:e.clientY}))};function E(e,t,c){let s,a=d,i,n=d,l,f=d;w(e,h,u=>c(0,s=u)),w(e,p,u=>c(1,i=u)),w(e,b,u=>c(2,l=u)),e.$$.on_destroy.push(()=>a()),e.$$.on_destroy.push(()=>n()),e.$$.on_destroy.push(()=>f());const o=u=>W(u);function r(){h.set(s=window.innerHeight),p.set(i=window.innerWidth)}function S(){b.set(l=window.pageYOffset)}return[s,i,l,o,r,S]}class V extends ${constructor(t){super(),O(this,t,E,Y,y,{})}}const F=(e,t)=>{const c=typeof globalThis.window<"u";let s=t;const{set:a,...i}=m(t,()=>{if(c){l();const o=r=>{r.key===e&&l()};return window.addEventListener("storage",o),()=>window.removeEventListener("storage",o)}else return()=>{}}),n=o=>{s=o,a(o);try{localStorage.setItem(e,JSON.stringify(o))}catch(r){console.error(`the \`${e}\` store's new value \`${o}\` could not be persisted to localStorage because of ${r}`)}},l=()=>{let o=null;try{o=localStorage.getItem(e)}catch(r){console.error(`the \`${e}\` store's value could not be restored from localStorage because of ${r}`)}if(o===null)n(t);else try{const r=JSON.parse(o);a(r),s=r}catch(r){console.error(`localStorage's value for \`${e}\` (\`${o}\`) could not be parsed as JSON because of ${r}`)}};return{...i,set:n,update:o=>{n(o(s))}}};const I=typeof window<"u"&&globalThis.localStorage&&"theme"in localStorage?localStorage.getItem("theme"):"dark";F("theme",I);export{V as D,M as a,H as m,D as t};