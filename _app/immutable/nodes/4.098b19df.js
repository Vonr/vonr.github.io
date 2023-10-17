import{_ as G}from"../chunks/preload-helper.a4192956.js";import{i as N}from"../chunks/article-index_raw.27fe09df.js";import{s as R,f as g,a as q,J as O,e as S,H as B,g as y,d as i,c as C,h as D,A as K,K as V,j as p,w,x as I,i as b,F as H,o as J}from"../chunks/scheduler.9d93041a.js";import{S as U,i as Y,b as Q,d as W,m as X,a as Z,t as $,e as ee}from"../chunks/index.3e095812.js";import{c as te}from"../chunks/index.ac23d56d.js";import{F as le}from"../chunks/fa.7c8c3a1d.js";import{t as oe,a as se}from"../chunks/ThemeToggle.svelte_svelte_type_style_lang.728e6f5b.js";import{p as re}from"../chunks/stores.ac79f7a1.js";const ae=(t,o)=>{const l=t[o];return l?typeof l=="function"?l():Promise.resolve(l):new Promise((r,h)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(h.bind(null,new Error("Unknown variable dynamic import: "+o)))})},ne=async()=>N.split(`
`).map(t=>t.split("|||")).filter(t=>t.length===3).map(([t,o,l])=>({article:t})),ie=async({params:t})=>{const o=t.article;return{post:(await ae(Object.assign({"../../../lib/articles/why-rust.html":()=>G(()=>import("../chunks/why-rust.a5e9936f.js"),[],import.meta.url)}),`../../../lib/articles/${o}.html`)).default}},ke=Object.freeze(Object.defineProperty({__proto__:null,entries:ne,load:ie},Symbol.toStringTag,{value:"Module"}));const ce=`/*!
  Theme: Gruvbox light, medium
  Author: Dawid Kurek (dawikur@gmail.com), morhetz (https://github.com/morhetz/gruvbox)
  License: ~ MIT (or more permissive) [via base16-schemes-source]
  Maintainer: @highlightjs/core-team
  Version: 2021.09.0
*/pre code.hljs{display:block;overflow-x:auto;padding:1em}div .codeheader{background:#ebdbb2}code.hljs{padding:3px 5px}p>code{background:#ebdbb2;border-radius:.25rem;opacity:.8}blockquote{background:#fbf1c7;border-left-color:#d5c4a1}.hljs{color:#504945;background:#fbf1c7}.hljs::-moz-selection,.hljs ::-moz-selection{background-color:#d5c4a1;color:#504945}.hljs::selection,.hljs ::selection{background-color:#d5c4a1;color:#504945}.hljs-comment{color:#bdae93}.hljs-tag{color:#665c54}.hljs-subst,.hljs-punctuation,.hljs-operator{color:#504945}.hljs-operator{opacity:.7}.hljs-bullet,.hljs-variable,.hljs-template-variable,.hljs-selector-tag,.hljs-name,.hljs-deletion{color:#9d0006}.hljs-symbol,.hljs-number,.hljs-link,.hljs-attr,.hljs-variable.constant_,.hljs-literal{color:#af3a03}.hljs-title,.hljs-class .hljs-title,.hljs-title.class_,#markdown>p>code{color:#b57614}.hljs-strong{font-weight:700;color:#b57614}.hljs-code,.hljs-addition,.hljs-title.class_.inherited__,.hljs-string{color:#79740e}.hljs-built_in,.hljs-doctag,.hljs-quote,.hljs-keyword.hljs-atrule,.hljs-regexp{color:#427b58}.hljs-function .hljs-title,.hljs-attribute,.ruby .hljs-property,.hljs-title.function_,.hljs-section{color:#076678}.hljs-type,.hljs-template-tag,.diff .hljs-meta,.hljs-keyword{color:#8f3f71}.hljs-emphasis{color:#8f3f71;font-style:italic}.hljs-meta,.hljs-meta .hljs-keyword,.hljs-meta .hljs-string{color:#d65d0e}.hljs-meta .hljs-keyword,.hljs-meta-keyword{font-weight:700}
`,he=`/*!
  Theme: Gruvbox dark, medium
  Author: Dawid Kurek (dawikur@gmail.com), morhetz (https://github.com/morhetz/gruvbox)
  License: ~ MIT (or more permissive) [via base16-schemes-source]
  Maintainer: @highlightjs/core-team
  Version: 2021.09.0
*/pre code.hljs{display:block;overflow-x:auto;padding:1em}div .codeheader{background:#3c3836}code.hljs{padding:3px 5px}p>code{background:#3c3836;border-radius:.25rem;opacity:.8}blockquote{background:#282828;border-left-color:#504945}.hljs{color:#d5c4a1;background:#282828}.hljs::-moz-selection,.hljs ::-moz-selection{background-color:#504945;color:#d5c4a1}.hljs::selection,.hljs ::selection{background-color:#504945;color:#d5c4a1}.hljs-comment{color:#665c54}.hljs-tag{color:#bdae93}.hljs-subst,.hljs-punctuation,.hljs-operator{color:#d5c4a1}.hljs-operator{opacity:.7}.hljs-bullet,.hljs-variable,.hljs-template-variable,.hljs-selector-tag,.hljs-name,.hljs-deletion{color:#dad5b8}.hljs-symbol,.hljs-number,.hljs-link,.hljs-attr,.hljs-variable.constant_,.hljs-literal{color:#fe8019}.hljs-title,.hljs-class .hljs-title,.hljs-title.class_,#markdown>p>code{color:#fabd2f}.hljs-strong{font-weight:700;color:#fabd2f}.hljs-code,.hljs-addition,.hljs-title.class_.inherited__,.hljs-string{color:#b8bb26}.hljs-built_in,.hljs-doctag,.hljs-quote,.hljs-keyword.hljs-atrule,.hljs-regexp{color:#8ec07c}.hljs-function .hljs-title,.hljs-attribute,.ruby .hljs-property,.hljs-title.function_,.hljs-section{color:#83a598}.hljs-type,.hljs-template-tag,.diff .hljs-meta,.hljs-keyword{color:#d3869b}.hljs-emphasis{color:#d3869b;font-style:italic}.hljs-meta,.hljs-meta .hljs-keyword,.hljs-meta .hljs-string{color:#d65d0e}.hljs-meta .hljs-keyword,.hljs-meta-keyword{font-weight:700}
`;function F(t){let o,l=`.codeblock {
            max-height: 16rem;
            font-size: 0.875rem;
            line-height: 1.25rem;
        }`;return{c(){o=g("style"),o.textContent=l},l(r){o=y(r,"STYLE",{"data-svelte-h":!0}),K(o)!=="svelte-t6whel"&&(o.textContent=l)},m(r,h){b(r,o,h)},d(r){r&&i(o)}}}function me(t){let o,l,r,h,f,a,c,u,j,m="Index",z,k,E=`<style>${t[0]}</style>`,T,_,M,A,v,d;document.title=o=`
        `+t[5]+`
    `,u=new le({props:{icon:te,class:"inline mr-1"}});let n=t[1]&&t[3]&&F();return{c(){l=g("meta"),r=g("meta"),f=q(),a=g("div"),c=g("a"),Q(u.$$.fragment),j=g("b"),j.textContent=m,z=q(),k=new O(!1),T=q(),_=g("div"),M=new O(!1),A=q(),n&&n.c(),v=S(),this.h()},l(e){const s=B("svelte-16u30cp",document.head);l=y(s,"META",{content:!0,property:!0}),r=y(s,"META",{content:!0,property:!0}),s.forEach(i),f=C(e),a=y(e,"DIV",{class:!0});var P=D(a);c=y(P,"A",{href:!0,class:!0});var x=D(c);W(u.$$.fragment,x),j=y(x,"B",{"data-svelte-h":!0}),K(j)!=="svelte-1jwultk"&&(j.textContent=m),x.forEach(i),P.forEach(i),z=C(e),k=V(e,!1),T=C(e),_=y(e,"DIV",{class:!0});var L=D(_);M=V(L,!1),L.forEach(i),A=C(e),n&&n.l(e),v=S(),this.h()},h(){p(l,"content",t[5]),p(l,"property","og:title"),p(r,"content",h=t[2].url.href),p(r,"property","og:url"),p(c,"href","/blog"),p(c,"class","no-underline"),p(a,"class","top-0 mt-16"),w(a,"fixed",!t[1]||!t[3]),w(a,"ml-8",!t[1]||!t[3]),w(a,"centered-content",t[1]&&t[3]),k.a=T,M.a=null,p(_,"class","centered-content pb-8")},m(e,s){I(document.head,l),I(document.head,r),b(e,f,s),b(e,a,s),I(a,c),X(u,c,null),I(c,j),b(e,z,s),k.m(E,e,s),b(e,T,s),b(e,_,s),M.m(t[4],_),b(e,A,s),n&&n.m(e,s),b(e,v,s),d=!0},p(e,[s]){(!d||s&32)&&o!==(o=`
        `+e[5]+`
    `)&&(document.title=o),(!d||s&4&&h!==(h=e[2].url.href))&&p(r,"content",h),(!d||s&10)&&w(a,"fixed",!e[1]||!e[3]),(!d||s&10)&&w(a,"ml-8",!e[1]||!e[3]),(!d||s&10)&&w(a,"centered-content",e[1]&&e[3]),(!d||s&1)&&E!==(E=`<style>${e[0]}</style>`)&&k.p(E),e[1]&&e[3]?n||(n=F(),n.c(),n.m(v.parentNode,v)):n&&(n.d(1),n=null)},i(e){d||(Z(u.$$.fragment,e),d=!0)},o(e){$(u.$$.fragment,e),d=!1},d(e){e&&(i(f),i(a),i(z),k.d(),i(T),i(_),i(A),i(v)),i(l),i(r),ee(u),n&&n.d(e)}}}function de(t,o,l){let r,h;H(t,re,m=>l(2,r=m)),H(t,se,m=>l(3,h=m));let f,{data:a}=o,c=a.post,u=c.substring(0,c.indexOf(`
`)).replace(/<[^>]*>?/gm,"");oe.subscribe(async m=>{m==="light"?l(0,f=ce):l(0,f=he)});let j=!1;return J(()=>l(1,j=!0)),t.$$set=m=>{"data"in m&&l(6,a=m.data)},[f,j,r,h,c,u,a]}class ve extends U{constructor(o){super(),Y(this,o,de,me,R,{data:6})}}export{ve as component,ke as universal};
