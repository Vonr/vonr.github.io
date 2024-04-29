import{_ as j}from"../chunks/preload-helper.D6kgxu3v.js";import{i as N}from"../chunks/article-index_raw.BbPfwXWW.js";import{s as R,c as H,o as z}from"../chunks/scheduler.BfKkd2ys.js";import{S as B,i as U,e as g,s as M,k as Y,H as $,x as L,l as G,c as b,d as m,f as O,a as S,n as J,m as F,F as K,o as d,E,h as P,g as v,p as Q,q as W,r as X,u as Z}from"../chunks/index.C34Kbxwq.js";import{F as x,d as ee}from"../chunks/index.jKgM7098.js";import{a as te,t as ne}from"../chunks/ThemeToggle.svelte_svelte_type_style_lang.DFXZno4s.js";import{p as ae}from"../chunks/stores.CIiIDdou.js";const oe=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global,le=(t,n)=>{const a=t[n];return a?typeof a=="function"?a():Promise.resolve(a):new Promise((o,c)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(c.bind(null,new Error("Unknown variable dynamic import: "+n)))})},re=async()=>N.split(`
`).map(t=>t.split("|||")).filter(t=>t.length===4).map(([t,n,a])=>({article:t})),se=async({params:t})=>{const n=t.article;return{post:(await le(Object.assign({"../../../lib/articles/compact-strings.html":()=>j(()=>import("../chunks/compact-strings.2EUlfGVr.js"),[],import.meta.url),"../../../lib/articles/why-rust.html":()=>j(()=>import("../chunks/why-rust.DhY1LSTb.js"),[],import.meta.url)}),`../../../lib/articles/${n}.html`)).default}},ge=Object.freeze(Object.defineProperty({__proto__:null,entries:re,load:se},Symbol.toStringTag,{value:"Module"})),{document:T}=oe;function V(t){let n,a=`.codeblock {
            max-height: 16rem;
            font-size: 0.875rem;
            line-height: 1.25rem;
        }`;return{c(){n=g("style"),n.textContent=a},l(o){n=b(o,"STYLE",{"data-svelte-h":!0}),F(n)!=="svelte-t6whel"&&(n.textContent=a)},m(o,c){v(o,n,c)},d(o){o&&m(n)}}}function ie(t){let n,a,o,c,h,l,f,p,s,k="Index",y,u,C,A,w,_;T.title=n=`
        `+t[4]+`
    `,p=new x({props:{icon:ee,class:"inline mr-1"}});let i=t[0]&&t[2]&&V();return{c(){a=g("meta"),o=g("meta"),h=M(),l=g("div"),f=g("a"),Y(p.$$.fragment),s=g("b"),s.textContent=k,y=M(),u=g("div"),C=new $(!1),A=M(),i&&i.c(),w=L(),this.h()},l(e){const r=G("svelte-16u30cp",T.head);a=b(r,"META",{content:!0,property:!0}),o=b(r,"META",{content:!0,property:!0}),r.forEach(m),h=O(e),l=b(e,"DIV",{class:!0});var q=S(l);f=b(q,"A",{href:!0,class:!0});var I=S(f);J(p.$$.fragment,I),s=b(I,"B",{"data-svelte-h":!0}),F(s)!=="svelte-1jwultk"&&(s.textContent=k),I.forEach(m),q.forEach(m),y=O(e),u=b(e,"DIV",{class:!0,id:!0});var D=S(u);C=K(D,!1),D.forEach(m),A=O(e),i&&i.l(e),w=L(),this.h()},h(){d(a,"content",t[4]),d(a,"property","og:title"),d(o,"content",c=t[1].url.href),d(o,"property","og:url"),d(f,"href","/blog"),d(f,"class","no-underline"),d(l,"class","top-0 mt-16"),E(l,"fixed",!t[0]||!t[2]),E(l,"ml-8",!t[0]||!t[2]),E(l,"centered-content",t[0]&&t[2]),C.a=null,d(u,"class","centered-content pb-8"),d(u,"id","article")},m(e,r){P(T.head,a),P(T.head,o),v(e,h,r),v(e,l,r),P(l,f),Q(p,f,null),P(f,s),v(e,y,r),v(e,u,r),C.m(t[3],u),v(e,A,r),i&&i.m(e,r),v(e,w,r),_=!0},p(e,[r]){(!_||r&16)&&n!==(n=`
        `+e[4]+`
    `)&&(T.title=n),(!_||r&2&&c!==(c=e[1].url.href))&&d(o,"content",c),(!_||r&5)&&E(l,"fixed",!e[0]||!e[2]),(!_||r&5)&&E(l,"ml-8",!e[0]||!e[2]),(!_||r&5)&&E(l,"centered-content",e[0]&&e[2]),e[0]&&e[2]?i||(i=V(),i.c(),i.m(w.parentNode,w)):i&&(i.d(1),i=null)},i(e){_||(W(p.$$.fragment,e),_=!0)},o(e){X(p.$$.fragment,e),_=!1},d(e){e&&(m(h),m(l),m(y),m(u),m(A),m(w)),m(a),m(o),Z(p),i&&i.d(e)}}}function me(t,n,a){let o,c;H(t,ae,s=>a(1,o=s)),H(t,te,s=>a(2,c=s));let{data:h}=n,l=h.post,f=l.substring(0,l.indexOf(`
`)).replace(/<[^>]*>?/gm,""),p=!1;return z(()=>{const s=document.getElementsByClassName("diagram");ne.subscribe(k=>{for(const y of s)for(const u of y.querySelectorAll("img"))u.src=u.src.replace(k==="light"?"dark":"light",k)}),a(0,p=!0)}),t.$$set=s=>{"data"in s&&a(5,h=s.data)},[p,o,c,l,f,h]}class be extends B{constructor(n){super(),U(this,n,me,ie,R,{data:5})}}export{be as component,ge as universal};