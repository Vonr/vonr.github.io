import{n as M,x as ft,r as ut,s as dt,i as ht,t as pt,o as gt}from"./scheduler.BfKkd2ys.js";new URL("sveltekit-internal://");function mt(e,n){return e==="/"||n==="ignore"?e:n==="never"?e.endsWith("/")?e.slice(0,-1):e:n==="always"&&!e.endsWith("/")?e+"/":e}function _t(e){return e.split("%25").map(decodeURI).join("%25")}function yt(e){for(const n in e)e[n]=decodeURIComponent(e[n]);return e}function ue({href:e}){return e.split("#")[0]}const wt=["href","pathname","search","toString","toJSON"];function vt(e,n,t){const r=new URL(e);Object.defineProperty(r,"searchParams",{value:new Proxy(r.searchParams,{get(a,o){if(o==="get"||o==="getAll"||o==="has")return s=>(t(s),a[o](s));n();const i=Reflect.get(a,o);return typeof i=="function"?i.bind(a):i}}),enumerable:!0,configurable:!0});for(const a of wt)Object.defineProperty(r,a,{get(){return n(),e[a]},enumerable:!0,configurable:!0});return r}const bt="/__data.json",Et=".html__data.json";function kt(e){return e.endsWith(".html")?e.replace(/\.html$/,Et):e.replace(/\/$/,"")+bt}function St(...e){let n=5381;for(const t of e)if(typeof t=="string"){let r=t.length;for(;r;)n=n*33^t.charCodeAt(--r)}else if(ArrayBuffer.isView(t)){const r=new Uint8Array(t.buffer,t.byteOffset,t.byteLength);let a=r.length;for(;a;)n=n*33^r[--a]}else throw new TypeError("value must be a string or TypedArray");return(n>>>0).toString(36)}function At(e){const n=atob(e),t=new Uint8Array(n.length);for(let r=0;r<n.length;r++)t[r]=n.charCodeAt(r);return t.buffer}const Ve=window.fetch;window.fetch=(e,n)=>((e instanceof Request?e.method:(n==null?void 0:n.method)||"GET")!=="GET"&&G.delete(_e(e)),Ve(e,n));const G=new Map;function Rt(e,n){const t=_e(e,n),r=document.querySelector(t);if(r!=null&&r.textContent){let{body:a,...o}=JSON.parse(r.textContent);const i=r.getAttribute("data-ttl");return i&&G.set(t,{body:a,init:o,ttl:1e3*Number(i)}),r.getAttribute("data-b64")!==null&&(a=At(a)),Promise.resolve(new Response(a,o))}return window.fetch(e,n)}function It(e,n,t){if(G.size>0){const r=_e(e,t),a=G.get(r);if(a){if(performance.now()<a.ttl&&["default","force-cache","only-if-cached",void 0].includes(t==null?void 0:t.cache))return new Response(a.body,a.init);G.delete(r)}}return window.fetch(n,t)}function _e(e,n){let r=`script[data-sveltekit-fetched][data-url=${JSON.stringify(e instanceof Request?e.url:e)}]`;if(n!=null&&n.headers||n!=null&&n.body){const a=[];n.headers&&a.push([...new Headers(n.headers)].join(",")),n.body&&(typeof n.body=="string"||ArrayBuffer.isView(n.body))&&a.push(n.body),r+=`[data-hash="${St(...a)}"]`}return r}const Lt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Pt(e){const n=[];return{pattern:e==="/"?/^\/$/:new RegExp(`^${Tt(e).map(r=>{const a=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(r);if(a)return n.push({name:a[1],matcher:a[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const o=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(r);if(o)return n.push({name:o[1],matcher:o[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!r)return;const i=r.split(/\[(.+?)\](?!\])/);return"/"+i.map((c,l)=>{if(l%2){if(c.startsWith("x+"))return de(String.fromCharCode(parseInt(c.slice(2),16)));if(c.startsWith("u+"))return de(String.fromCharCode(...c.slice(2).split("-").map(f=>parseInt(f,16))));const u=Lt.exec(c),[,h,p,d,g]=u;return n.push({name:d,matcher:g,optional:!!h,rest:!!p,chained:p?l===1&&i[0]==="":!1}),p?"(.*?)":h?"([^/]*)?":"([^/]+?)"}return de(c)}).join("")}).join("")}/?$`),params:n}}function xt(e){return!/^\([^)]+\)$/.test(e)}function Tt(e){return e.slice(1).split("/").filter(xt)}function Ut(e,n,t){const r={},a=e.slice(1),o=a.filter(s=>s!==void 0);let i=0;for(let s=0;s<n.length;s+=1){const c=n[s];let l=a[s-i];if(c.chained&&c.rest&&i&&(l=a.slice(s-i,s+1).filter(u=>u).join("/"),i=0),l===void 0){c.rest&&(r[c.name]="");continue}if(!c.matcher||t[c.matcher](l)){r[c.name]=l;const u=n[s+1],h=a[s+1];u&&!u.rest&&u.optional&&h&&c.chained&&(i=0),!u&&!h&&Object.keys(r).length===o.length&&(i=0);continue}if(c.optional&&c.chained){i++;continue}return}if(!i)return r}function de(e){return e.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Nt({nodes:e,server_loads:n,dictionary:t,matchers:r}){const a=new Set(n);return Object.entries(t).map(([s,[c,l,u]])=>{const{pattern:h,params:p}=Pt(s),d={id:s,exec:g=>{const f=h.exec(g);if(f)return Ut(f,p,r)},errors:[1,...u||[]].map(g=>e[g]),layouts:[0,...l||[]].map(i),leaf:o(c)};return d.errors.length=d.layouts.length=Math.max(d.errors.length,d.layouts.length),d});function o(s){const c=s<0;return c&&(s=~s),[c,e[s]]}function i(s){return s===void 0?s:[a.has(s),e[s]]}}function Fe(e,n=JSON.parse){try{return n(sessionStorage[e])}catch{}}function Pe(e,n,t=JSON.stringify){const r=t(n);try{sessionStorage[e]=r}catch{}}const O=[];function Ot(e,n){return{subscribe:ae(e,n).subscribe}}function ae(e,n=M){let t;const r=new Set;function a(s){if(dt(e,s)&&(e=s,t)){const c=!O.length;for(const l of r)l[1](),O.push(l,e);if(c){for(let l=0;l<O.length;l+=2)O[l][0](O[l+1]);O.length=0}}}function o(s){a(s(e))}function i(s,c=M){const l=[s,c];return r.add(l),r.size===1&&(t=n(a,o)||M),s(e),()=>{r.delete(l),r.size===0&&t&&(t(),t=null)}}return{set:a,update:o,subscribe:i}}function fn(e,n,t){const r=!Array.isArray(e),a=r?[e]:e;if(!a.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const o=n.length<2;return Ot(t,(i,s)=>{let c=!1;const l=[];let u=0,h=M;const p=()=>{if(u)return;h();const g=n(r?l[0]:l,i,s);o?i(g):h=ht(g)?g:M},d=a.map((g,f)=>ft(g,_=>{l[f]=_,u&=~(1<<f),c&&p()},()=>{u|=1<<f}));return c=!0,p(),function(){ut(d),h(),c=!1}})}var De;const P=((De=globalThis.__sveltekit_i5pocc)==null?void 0:De.base)??"";var Ce;const jt=((Ce=globalThis.__sveltekit_i5pocc)==null?void 0:Ce.assets)??P,$t="1714396729659",qe="sveltekit:snapshot",Me="sveltekit:scroll",Ge="sveltekit:states",Dt="sveltekit:pageurl",D="sveltekit:history",H="sveltekit:navigation",W={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},Y=location.origin;function Be(e){if(e instanceof URL)return e;let n=document.baseURI;if(!n){const t=document.getElementsByTagName("base");n=t.length?t[0].href:document.URL}return new URL(e,n)}function ye(){return{x:pageXOffset,y:pageYOffset}}function j(e,n){return e.getAttribute(`data-sveltekit-${n}`)}const xe={...W,"":W.hover};function He(e){let n=e.assignedSlot??e.parentNode;return(n==null?void 0:n.nodeType)===11&&(n=n.host),n}function Ke(e,n){for(;e&&e!==n;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=He(e)}}function pe(e,n){let t;try{t=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const r=e instanceof SVGAElement?e.target.baseVal:e.target,a=!t||!!r||oe(t,n)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),o=(t==null?void 0:t.origin)===Y&&e.hasAttribute("download");return{url:t,external:a,target:r,download:o}}function X(e){let n=null,t=null,r=null,a=null,o=null,i=null,s=e;for(;s&&s!==document.documentElement;)r===null&&(r=j(s,"preload-code")),a===null&&(a=j(s,"preload-data")),n===null&&(n=j(s,"keepfocus")),t===null&&(t=j(s,"noscroll")),o===null&&(o=j(s,"reload")),i===null&&(i=j(s,"replacestate")),s=He(s);function c(l){switch(l){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:xe[r??"off"],preload_data:xe[a??"off"],keepfocus:c(n),noscroll:c(t),reload:c(o),replace_state:c(i)}}function Te(e){const n=ae(e);let t=!0;function r(){t=!0,n.update(i=>i)}function a(i){t=!1,n.set(i)}function o(i){let s;return n.subscribe(c=>{(s===void 0||t&&c!==s)&&i(s=c)})}return{notify:r,set:a,subscribe:o}}function Ct(){const{set:e,subscribe:n}=ae(!1);let t;async function r(){clearTimeout(t);try{const a=await fetch(`${jt}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!a.ok)return!1;const i=(await a.json()).version!==$t;return i&&(e(!0),clearTimeout(t)),i}catch{return!1}}return{subscribe:n,check:r}}function oe(e,n){return e.origin!==Y||!e.pathname.startsWith(n)}const Vt=-1,Ft=-2,qt=-3,Mt=-4,Gt=-5,Bt=-6;function Ht(e,n){if(typeof e=="number")return a(e,!0);if(!Array.isArray(e)||e.length===0)throw new Error("Invalid input");const t=e,r=Array(t.length);function a(o,i=!1){if(o===Vt)return;if(o===qt)return NaN;if(o===Mt)return 1/0;if(o===Gt)return-1/0;if(o===Bt)return-0;if(i)throw new Error("Invalid input");if(o in r)return r[o];const s=t[o];if(!s||typeof s!="object")r[o]=s;else if(Array.isArray(s))if(typeof s[0]=="string"){const c=s[0],l=n==null?void 0:n[c];if(l)return r[o]=l(a(s[1]));switch(c){case"Date":r[o]=new Date(s[1]);break;case"Set":const u=new Set;r[o]=u;for(let d=1;d<s.length;d+=1)u.add(a(s[d]));break;case"Map":const h=new Map;r[o]=h;for(let d=1;d<s.length;d+=2)h.set(a(s[d]),a(s[d+1]));break;case"RegExp":r[o]=new RegExp(s[1],s[2]);break;case"Object":r[o]=Object(s[1]);break;case"BigInt":r[o]=BigInt(s[1]);break;case"null":const p=Object.create(null);r[o]=p;for(let d=1;d<s.length;d+=2)p[s[d]]=a(s[d+1]);break;default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(s.length);r[o]=c;for(let l=0;l<s.length;l+=1){const u=s[l];u!==Ft&&(c[l]=a(u))}}else{const c={};r[o]=c;for(const l in s){const u=s[l];c[l]=a(u)}}return r[o]}return a(0)}const ze=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...ze];const Kt=new Set([...ze]);[...Kt];function zt(e){return e.filter(n=>n!=null)}class se{constructor(n,t){this.status=n,typeof t=="string"?this.body={message:t}:t?this.body=t:this.body={message:`Error: ${n}`}}toString(){return JSON.stringify(this.body)}}class Ye{constructor(n,t){this.status=n,this.location=t}}class we extends Error{constructor(n,t,r){super(r),this.status=n,this.text=t}}const Yt="x-sveltekit-invalidated",Jt="x-sveltekit-trailing-slash";function Z(e){return e instanceof se||e instanceof we?e.status:500}function Wt(e){return e instanceof we?e.text:"Internal Error"}const N=Fe(Me)??{},K=Fe(qe)??{},T={url:Te({}),page:Te({}),navigating:ae(null),updated:Ct()};function ve(e){N[e]=ye()}function Xt(e,n){let t=e+1;for(;N[t];)delete N[t],t+=1;for(t=n+1;K[t];)delete K[t],t+=1}function V(e){return location.href=e.href,new Promise(()=>{})}function Ue(){}let ie,ge,Q,x,me,F;const Je=[],ee=[];let R=null;const We=[],Xe=[];let $=[],y={branch:[],error:null,url:null},be=!1,te=!1,Ne=!0,z=!1,q=!1,Ze=!1,Ee=!1,ke,S,L,I,ne;const B=new Set;async function un(e,n,t){var a,o;document.URL!==location.href&&(location.href=location.href),F=e,ie=Nt(e),x=document.documentElement,me=n,ge=e.nodes[0],Q=e.nodes[1],ge(),Q(),S=(a=history.state)==null?void 0:a[D],L=(o=history.state)==null?void 0:o[H],S||(S=L=Date.now(),history.replaceState({...history.state,[D]:S,[H]:L},""));const r=N[S];r&&(history.scrollRestoration="manual",scrollTo(r.x,r.y)),t?await sn(me,t):an(location.href,{replaceState:!0}),on()}function Zt(){Je.length=0,Ee=!1}function Qe(e){ee.some(n=>n==null?void 0:n.snapshot)&&(K[e]=ee.map(n=>{var t;return(t=n==null?void 0:n.snapshot)==null?void 0:t.capture()}))}function et(e){var n;(n=K[e])==null||n.forEach((t,r)=>{var a,o;(o=(a=ee[r])==null?void 0:a.snapshot)==null||o.restore(t)})}function Oe(){ve(S),Pe(Me,N),Qe(L),Pe(qe,K)}async function tt(e,n,t,r){return J({type:"goto",url:Be(e),keepfocus:n.keepFocus,noscroll:n.noScroll,replace_state:n.replaceState,state:n.state,redirect_count:t,nav_token:r,accept:()=>{n.invalidateAll&&(Ee=!0)}})}async function Qt(e){if(e.id!==(R==null?void 0:R.id)){const n={};B.add(n),R={id:e.id,token:n,promise:rt({...e,preload:n}).then(t=>(B.delete(n),t.type==="loaded"&&t.state.error&&(R=null),t))}}return R.promise}async function he(e){const n=ie.find(t=>t.exec(at(e)));n&&await Promise.all([...n.layouts,n.leaf].map(t=>t==null?void 0:t[1]()))}function nt(e,n,t){var o;y=e.state;const r=document.querySelector("style[data-sveltekit]");r&&r.remove(),I=e.props.page,ke=new F.root({target:n,props:{...e.props,stores:T,components:ee},hydrate:t}),et(L);const a={from:null,to:{params:y.params,route:{id:((o=y.route)==null?void 0:o.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};$.forEach(i=>i(a)),te=!0}async function re({url:e,params:n,branch:t,status:r,error:a,route:o,form:i}){let s="never";if(P&&(e.pathname===P||e.pathname===P+"/"))s="always";else for(const d of t)(d==null?void 0:d.slash)!==void 0&&(s=d.slash);e.pathname=mt(e.pathname,s),e.search=e.search;const c={type:"loaded",state:{url:e,params:n,branch:t,error:a,route:o},props:{constructors:zt(t).map(d=>d.node.component),page:I}};i!==void 0&&(c.props.form=i);let l={},u=!I,h=0;for(let d=0;d<Math.max(t.length,y.branch.length);d+=1){const g=t[d],f=y.branch[d];(g==null?void 0:g.data)!==(f==null?void 0:f.data)&&(u=!0),g&&(l={...l,...g.data},u&&(c.props[`data_${h}`]=l),h+=1)}return(!y.url||e.href!==y.url.href||y.error!==a||i!==void 0&&i!==I.form||u)&&(c.props.page={error:a,params:n,route:{id:(o==null?void 0:o.id)??null},state:{},status:r,url:new URL(e),form:i??null,data:u?l:I.data}),c}async function Se({loader:e,parent:n,url:t,params:r,route:a,server_data_node:o}){var u,h,p;let i=null,s=!0;const c={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},l=await e();if((u=l.universal)!=null&&u.load){let d=function(...f){for(const _ of f){const{href:b}=new URL(_,t);c.dependencies.add(b)}};const g={route:new Proxy(a,{get:(f,_)=>(s&&(c.route=!0),f[_])}),params:new Proxy(r,{get:(f,_)=>(s&&c.params.add(_),f[_])}),data:(o==null?void 0:o.data)??null,url:vt(t,()=>{s&&(c.url=!0)},f=>{s&&c.search_params.add(f)}),async fetch(f,_){let b;f instanceof Request?(b=f.url,_={body:f.method==="GET"||f.method==="HEAD"?void 0:await f.blob(),cache:f.cache,credentials:f.credentials,headers:f.headers,integrity:f.integrity,keepalive:f.keepalive,method:f.method,mode:f.mode,redirect:f.redirect,referrer:f.referrer,referrerPolicy:f.referrerPolicy,signal:f.signal,..._}):b=f;const A=new URL(b,t);return s&&d(A.href),A.origin===t.origin&&(b=A.href.slice(t.origin.length)),te?It(b,A.href,_):Rt(b,_)},setHeaders:()=>{},depends:d,parent(){return s&&(c.parent=!0),n()},untrack(f){s=!1;try{return f()}finally{s=!0}}};i=await l.universal.load.call(null,g)??null}return{node:l,loader:e,server:o,universal:(h=l.universal)!=null&&h.load?{type:"data",data:i,uses:c}:null,data:i??(o==null?void 0:o.data)??null,slash:((p=l.universal)==null?void 0:p.trailingSlash)??(o==null?void 0:o.slash)}}function je(e,n,t,r,a,o){if(Ee)return!0;if(!a)return!1;if(a.parent&&e||a.route&&n||a.url&&t)return!0;for(const i of a.search_params)if(r.has(i))return!0;for(const i of a.params)if(o[i]!==y.params[i])return!0;for(const i of a.dependencies)if(Je.some(s=>s(new URL(i))))return!0;return!1}function Ae(e,n){return(e==null?void 0:e.type)==="data"?e:(e==null?void 0:e.type)==="skip"?n??null:null}function en(e,n){if(!e)return new Set(n.searchParams.keys());const t=new Set([...e.searchParams.keys(),...n.searchParams.keys()]);for(const r of t){const a=e.searchParams.getAll(r),o=n.searchParams.getAll(r);a.every(i=>o.includes(i))&&o.every(i=>a.includes(i))&&t.delete(r)}return t}function $e({error:e,url:n,route:t,params:r}){return{type:"loaded",state:{error:e,url:n,route:t,params:r,branch:[]},props:{page:I,constructors:[]}}}async function rt({id:e,invalidating:n,url:t,params:r,route:a,preload:o}){if((R==null?void 0:R.id)===e)return B.delete(R.token),R.promise;const{errors:i,layouts:s,leaf:c}=a,l=[...s,c];i.forEach(m=>m==null?void 0:m().catch(()=>{})),l.forEach(m=>m==null?void 0:m[1]().catch(()=>{}));let u=null;const h=y.url?e!==y.url.pathname+y.url.search:!1,p=y.route?a.id!==y.route.id:!1,d=en(y.url,t);let g=!1;const f=l.map((m,v)=>{var U;const E=y.branch[v],k=!!(m!=null&&m[0])&&((E==null?void 0:E.loader)!==m[1]||je(g,p,h,d,(U=E.server)==null?void 0:U.uses,r));return k&&(g=!0),k});if(f.some(Boolean)){try{u=await it(t,f)}catch(m){const v=await C(m,{url:t,params:r,route:{id:e}});return B.has(o)?$e({error:v,url:t,params:r,route:a}):ce({status:Z(m),error:v,url:t,route:a})}if(u.type==="redirect")return u}const _=u==null?void 0:u.nodes;let b=!1;const A=l.map(async(m,v)=>{var le;if(!m)return;const E=y.branch[v],k=_==null?void 0:_[v];if((!k||k.type==="skip")&&m[1]===(E==null?void 0:E.loader)&&!je(b,p,h,d,(le=E.universal)==null?void 0:le.uses,r))return E;if(b=!0,(k==null?void 0:k.type)==="error")throw k;return Se({loader:m[1],url:t,params:r,route:a,parent:async()=>{var Le;const Ie={};for(let fe=0;fe<v;fe+=1)Object.assign(Ie,(Le=await A[fe])==null?void 0:Le.data);return Ie},server_data_node:Ae(k===void 0&&m[0]?{type:"skip"}:k??null,m[0]?E==null?void 0:E.server:void 0)})});for(const m of A)m.catch(()=>{});const w=[];for(let m=0;m<l.length;m+=1)if(l[m])try{w.push(await A[m])}catch(v){if(v instanceof Ye)return{type:"redirect",location:v.location};if(B.has(o))return $e({error:await C(v,{params:r,url:t,route:{id:a.id}}),url:t,params:r,route:a});let E=Z(v),k;if(_!=null&&_.includes(v))E=v.status??E,k=v.error;else if(v instanceof se)k=v.body;else{if(await T.updated.check())return await V(t);k=await C(v,{params:r,url:t,route:{id:a.id}})}const U=await tn(m,w,i);return U?await re({url:t,params:r,branch:w.slice(0,U.idx).concat(U.node),status:E,error:k,route:a}):await st(t,{id:a.id},k,E)}else w.push(void 0);return await re({url:t,params:r,branch:w,status:200,error:null,route:a,form:n?void 0:null})}async function tn(e,n,t){for(;e--;)if(t[e]){let r=e;for(;!n[r];)r-=1;try{return{idx:r+1,node:{node:await t[e](),loader:t[e],data:{},server:null,universal:null}}}catch{continue}}}async function ce({status:e,error:n,url:t,route:r}){const a={};let o=null;if(F.server_loads[0]===0)try{const l=await it(t,[!0]);if(l.type!=="data"||l.nodes[0]&&l.nodes[0].type!=="data")throw 0;o=l.nodes[0]??null}catch{(t.origin!==Y||t.pathname!==location.pathname||be)&&await V(t)}const s=await Se({loader:ge,url:t,params:a,route:r,parent:()=>Promise.resolve({}),server_data_node:Ae(o)}),c={node:await Q(),loader:Q,universal:null,server:null,data:null};return await re({url:t,params:a,branch:[s,c],status:e,error:n,route:null})}function Re(e,n){if(!e||oe(e,P))return;let t;try{t=F.hooks.reroute({url:new URL(e)})??e.pathname}catch{return}const r=at(t);for(const a of ie){const o=a.exec(r);if(o)return{id:e.pathname+e.search,invalidating:n,route:a,params:yt(o),url:e}}}function at(e){return _t(e.slice(P.length)||"/")}function ot({url:e,type:n,intent:t,delta:r}){let a=!1;const o=lt(y,t,e,n);r!==void 0&&(o.navigation.delta=r);const i={...o.navigation,cancel:()=>{a=!0,o.reject(new Error("navigation cancelled"))}};return z||We.forEach(s=>s(i)),a?null:o}async function J({type:e,url:n,popped:t,keepfocus:r,noscroll:a,replace_state:o,state:i={},redirect_count:s=0,nav_token:c={},accept:l=Ue,block:u=Ue}){const h=Re(n,!1),p=ot({url:n,type:e,delta:t==null?void 0:t.delta,intent:h});if(!p){u();return}const d=S,g=L;l(),z=!0,te&&T.navigating.set(p.navigation),ne=c;let f=h&&await rt(h);if(!f){if(oe(n,P))return await V(n);f=await st(n,{id:null},await C(new we(404,"Not Found",`Not found: ${n.pathname}`),{url:n,params:{},route:{id:null}}),404)}if(n=(h==null?void 0:h.url)||n,ne!==c)return p.reject(new Error("navigation aborted")),!1;if(f.type==="redirect")if(s>=20)f=await ce({status:500,error:await C(new Error("Redirect loop"),{url:n,params:{},route:{id:null}}),url:n,route:{id:null}});else return tt(new URL(f.location,n).href,{},s+1,c),!1;else f.props.page.status>=400&&await T.updated.check()&&await V(n);if(Zt(),ve(d),Qe(g),f.props.page.url.pathname!==n.pathname&&(n.pathname=f.props.page.url.pathname),i=t?t.state:i,!t){const w=o?0:1,m={[D]:S+=w,[H]:L+=w,[Ge]:i};(o?history.replaceState:history.pushState).call(history,m,"",n),o||Xt(S,L)}if(R=null,f.props.page.state=i,te){y=f.state,f.props.page&&(f.props.page.url=n);const w=(await Promise.all(Xe.map(m=>m(p.navigation)))).filter(m=>typeof m=="function");if(w.length>0){let m=function(){$=$.filter(v=>!w.includes(v))};w.push(m),$.push(...w)}ke.$set(f.props),Ze=!0}else nt(f,me,!1);const{activeElement:_}=document;await pt();const b=t?t.scroll:a?ye():null;if(Ne){const w=n.hash&&document.getElementById(decodeURIComponent(n.hash.slice(1)));b?scrollTo(b.x,b.y):w?w.scrollIntoView():scrollTo(0,0)}const A=document.activeElement!==_&&document.activeElement!==document.body;!r&&!A&&cn(),Ne=!0,f.props.page&&(I=f.props.page),z=!1,e==="popstate"&&et(L),p.fulfil(void 0),$.forEach(w=>w(p.navigation)),T.navigating.set(null)}async function st(e,n,t,r){return e.origin===Y&&e.pathname===location.pathname&&!be?await ce({status:r,error:t,url:e,route:n}):await V(e)}function nn(){let e;x.addEventListener("mousemove",o=>{const i=o.target;clearTimeout(e),e=setTimeout(()=>{r(i,2)},20)});function n(o){r(o.composedPath()[0],1)}x.addEventListener("mousedown",n),x.addEventListener("touchstart",n,{passive:!0});const t=new IntersectionObserver(o=>{for(const i of o)i.isIntersecting&&(he(i.target.href),t.unobserve(i.target))},{threshold:0});function r(o,i){const s=Ke(o,x);if(!s)return;const{url:c,external:l,download:u}=pe(s,P);if(l||u)return;const h=X(s);if(!h.reload)if(i<=h.preload_data){const p=Re(c,!1);p&&Qt(p)}else i<=h.preload_code&&he(c.pathname)}function a(){t.disconnect();for(const o of x.querySelectorAll("a")){const{url:i,external:s,download:c}=pe(o,P);if(s||c)continue;const l=X(o);l.reload||(l.preload_code===W.viewport&&t.observe(o),l.preload_code===W.eager&&he(i.pathname))}}$.push(a),a()}function C(e,n){if(e instanceof se)return e.body;const t=Z(e),r=Wt(e);return F.hooks.handleError({error:e,event:n,status:t,message:r})??{message:r}}function rn(e,n){gt(()=>(e.push(n),()=>{const t=e.indexOf(n);e.splice(t,1)}))}function dn(e){rn(Xe,e)}function an(e,n={}){return e=Be(e),e.origin!==Y?Promise.reject(new Error("goto: invalid URL")):tt(e,n,0)}function on(){var n;history.scrollRestoration="manual",addEventListener("beforeunload",t=>{let r=!1;if(Oe(),!z){const a=lt(y,void 0,null,"leave"),o={...a.navigation,cancel:()=>{r=!0,a.reject(new Error("navigation cancelled"))}};We.forEach(i=>i(o))}r?(t.preventDefault(),t.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&Oe()}),(n=navigator.connection)!=null&&n.saveData||nn(),x.addEventListener("click",t=>{var p;if(t.button||t.which!==1||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.defaultPrevented)return;const r=Ke(t.composedPath()[0],x);if(!r)return;const{url:a,external:o,target:i,download:s}=pe(r,P);if(!a)return;if(i==="_parent"||i==="_top"){if(window.parent!==window)return}else if(i&&i!=="_self")return;const c=X(r);if(!(r instanceof SVGAElement)&&a.protocol!==location.protocol&&!(a.protocol==="https:"||a.protocol==="http:")||s)return;if(o||c.reload){ot({url:a,type:"link"})?z=!0:t.preventDefault();return}const[u,h]=a.href.split("#");if(h!==void 0&&u===ue(location)){const[,d]=y.url.href.split("#");if(d===h){t.preventDefault(),h===""||h==="top"&&r.ownerDocument.getElementById("top")===null?window.scrollTo({top:0}):(p=r.ownerDocument.getElementById(h))==null||p.scrollIntoView();return}if(q=!0,ve(S),e(a),!c.replace_state)return;q=!1}t.preventDefault(),J({type:"link",url:a,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??a.href===location.href})}),x.addEventListener("submit",t=>{if(t.defaultPrevented)return;const r=HTMLFormElement.prototype.cloneNode.call(t.target),a=t.submitter;if(((a==null?void 0:a.formMethod)||r.method)!=="get")return;const i=new URL((a==null?void 0:a.hasAttribute("formaction"))&&(a==null?void 0:a.formAction)||r.action);if(oe(i,P))return;const s=t.target,c=X(s);if(c.reload)return;t.preventDefault(),t.stopPropagation();const l=new FormData(s),u=a==null?void 0:a.getAttribute("name");u&&l.append(u,(a==null?void 0:a.getAttribute("value"))??""),i.search=new URLSearchParams(l).toString(),J({type:"form",url:i,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??i.href===location.href})}),addEventListener("popstate",async t=>{var r;if((r=t.state)!=null&&r[D]){const a=t.state[D];if(ne={},a===S)return;const o=N[a],i=t.state[Ge]??{},s=new URL(t.state[Dt]??location.href),c=t.state[H],l=ue(location)===ue(y.url);if(c===L&&(Ze||l)){e(s),N[S]=ye(),o&&scrollTo(o.x,o.y),i!==I.state&&(I={...I,state:i},ke.$set({page:I})),S=a;return}const h=a-S;await J({type:"popstate",url:s,popped:{state:i,scroll:o,delta:h},accept:()=>{S=a,L=c},block:()=>{history.go(-h)},nav_token:ne})}else if(!q){const a=new URL(location.href);e(a)}}),addEventListener("hashchange",()=>{q&&(q=!1,history.replaceState({...history.state,[D]:++S,[H]:L},"",location.href))});for(const t of document.querySelectorAll("link"))t.rel==="icon"&&(t.href=t.href);addEventListener("pageshow",t=>{t.persisted&&T.navigating.set(null)});function e(t){y.url=t,T.page.set({...I,url:t}),T.page.notify()}}async function sn(e,{status:n=200,error:t,node_ids:r,params:a,route:o,data:i,form:s}){be=!0;const c=new URL(location.href);({params:a={},route:o={id:null}}=Re(c,!1)||{});let l;try{const u=r.map(async(d,g)=>{const f=i[g];return f!=null&&f.uses&&(f.uses=ct(f.uses)),Se({loader:F.nodes[d],url:c,params:a,route:o,parent:async()=>{const _={};for(let b=0;b<g;b+=1)Object.assign(_,(await u[b]).data);return _},server_data_node:Ae(f)})}),h=await Promise.all(u),p=ie.find(({id:d})=>d===o.id);if(p){const d=p.layouts;for(let g=0;g<d.length;g++)d[g]||h.splice(g,0,void 0)}l=await re({url:c,params:a,branch:h,status:n,error:t,form:s,route:p??null})}catch(u){if(u instanceof Ye){await V(new URL(u.location,location.href));return}l=await ce({status:Z(u),error:await C(u,{url:c,params:a,route:o}),url:c,route:o})}l.props.page&&(l.props.page.state={}),nt(l,e,!0)}async function it(e,n){var a;const t=new URL(e);t.pathname=kt(e.pathname),e.pathname.endsWith("/")&&t.searchParams.append(Jt,"1"),t.searchParams.append(Yt,n.map(o=>o?"1":"0").join(""));const r=await Ve(t.href);if(!r.ok){let o;throw(a=r.headers.get("content-type"))!=null&&a.includes("application/json")?o=await r.json():r.status===404?o="Not Found":r.status===500&&(o="Internal Error"),new se(r.status,o)}return new Promise(async o=>{var h;const i=new Map,s=r.body.getReader(),c=new TextDecoder;function l(p){return Ht(p,{Promise:d=>new Promise((g,f)=>{i.set(d,{fulfil:g,reject:f})})})}let u="";for(;;){const{done:p,value:d}=await s.read();if(p&&!u)break;for(u+=!d&&u?`
`:c.decode(d,{stream:!0});;){const g=u.indexOf(`
`);if(g===-1)break;const f=JSON.parse(u.slice(0,g));if(u=u.slice(g+1),f.type==="redirect")return o(f);if(f.type==="data")(h=f.nodes)==null||h.forEach(_=>{(_==null?void 0:_.type)==="data"&&(_.uses=ct(_.uses),_.data=l(_.data))}),o(f);else if(f.type==="chunk"){const{id:_,data:b,error:A}=f,w=i.get(_);i.delete(_),A?w.reject(l(A)):w.fulfil(l(b))}}}})}function ct(e){return{dependencies:new Set((e==null?void 0:e.dependencies)??[]),params:new Set((e==null?void 0:e.params)??[]),parent:!!(e!=null&&e.parent),route:!!(e!=null&&e.route),url:!!(e!=null&&e.url),search_params:new Set((e==null?void 0:e.search_params)??[])}}function cn(){const e=document.querySelector("[autofocus]");if(e)e.focus();else{const n=document.body,t=n.getAttribute("tabindex");n.tabIndex=-1,n.focus({preventScroll:!0,focusVisible:!1}),t!==null?n.setAttribute("tabindex",t):n.removeAttribute("tabindex");const r=getSelection();if(r&&r.type!=="None"){const a=[];for(let o=0;o<r.rangeCount;o+=1)a.push(r.getRangeAt(o));setTimeout(()=>{if(r.rangeCount===a.length){for(let o=0;o<r.rangeCount;o+=1){const i=a[o],s=r.getRangeAt(o);if(i.commonAncestorContainer!==s.commonAncestorContainer||i.startContainer!==s.startContainer||i.endContainer!==s.endContainer||i.startOffset!==s.startOffset||i.endOffset!==s.endOffset)return}r.removeAllRanges()}})}}}function lt(e,n,t,r){var c,l;let a,o;const i=new Promise((u,h)=>{a=u,o=h});return i.catch(()=>{}),{navigation:{from:{params:e.params,route:{id:((c=e.route)==null?void 0:c.id)??null},url:e.url},to:t&&{params:(n==null?void 0:n.params)??null,route:{id:((l=n==null?void 0:n.route)==null?void 0:l.id)??null},url:t},willUnload:!n,type:r,complete:i},fulfil:a,reject:o}}export{un as a,fn as d,dn as o,T as s,ae as w};
