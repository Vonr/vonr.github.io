import{w as m,d as $}from"./entry.2cPh04J8.js";import{s as T,D as h,n as d,E as w,F as v,k as g}from"./scheduler.62YBDsEO.js";import{S as y,i as O}from"./index.LLhpI6Hz.js";const z=m("light");function Y(e){let t=!1,c=()=>{t=!1},r,a,i;return h(e[4]),h(e[5]),{c:d,l:d,m(n,l){a||(i=[w(window,"mousemove",e[3]),w(window,"resize",e[4]),w(window,"scroll",()=>{t=!0,clearTimeout(r),r=setTimeout(c,100),e[5]()})],a=!0)},p(n,[l]){l&4&&!t&&(t=!0,clearTimeout(r),scrollTo(window.pageXOffset,n[2]),r=setTimeout(c,100))},i:d,o:d,d(n){a=!1,v(i)}}}const b=m(900),p=m(900),E=m(900),V=$([p,E],([e,t])=>e<t),S=m(0),H=m({x:0,y:0}),W=e=>{H.update(()=>({x:e.clientX,y:e.clientY}))};function D(e,t,c){let r,a=d,i,n=d,l,f=d;g(e,b,u=>c(0,r=u)),g(e,p,u=>c(1,i=u)),g(e,S,u=>c(2,l=u)),e.$$.on_destroy.push(()=>a()),e.$$.on_destroy.push(()=>n()),e.$$.on_destroy.push(()=>f());const o=u=>W(u);function s(){b.set(r=window.innerHeight),p.set(i=window.innerWidth)}function _(){S.set(l=window.pageYOffset)}return[r,i,l,o,s,_]}class X extends y{constructor(t){super(),O(this,t,D,Y,T,{})}}const F=(e,t)=>{const c=typeof globalThis.window<"u";let r=t;const{set:a,...i}=m(t,()=>{if(c){l();const o=s=>{s.key===e&&l()};return window.addEventListener("storage",o),()=>window.removeEventListener("storage",o)}else return()=>{}}),n=o=>{r=o,a(o);try{localStorage.setItem(e,JSON.stringify(o))}catch(s){console.error(`the \`${e}\` store's new value \`${o}\` could not be persisted to localStorage because of ${s}`)}},l=()=>{let o=null;try{o=localStorage.getItem(e)}catch(s){console.error(`the \`${e}\` store's value could not be restored from localStorage because of ${s}`)}if(o===null)n(t);else try{const s=JSON.parse(o);a(s),r=s}catch(s){console.error(`localStorage's value for \`${e}\` (\`${o}\`) could not be parsed as JSON because of ${s}`)}};return{...i,set:n,update:o=>{n(o(r))}}},I=typeof window<"u"&&globalThis.localStorage&&"theme"in localStorage?localStorage.getItem("theme"):"dark";F("theme",I);export{X as D,E as a,V as m,z as t};