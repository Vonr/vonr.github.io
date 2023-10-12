import{_ as V}from"../chunks/preload-helper.a4192956.js";import{i as H}from"../chunks/article-index_raw.27fe09df.js";import{s as F,a as z,f as y,J as D,e as O,H as K,d as i,c as x,g as v,h as C,A as S,K as P,j as E,w as b,i as j,x as q,F as G,o as R}from"../chunks/scheduler.9d93041a.js";import{S as $,i as B,b as J,d as N,m as U,a as Y,t as Q,e as W}from"../chunks/index.3e095812.js";import{c as X}from"../chunks/index.ac23d56d.js";import{F as Z}from"../chunks/fa.7c8c3a1d.js";import{t as ee,a as te}from"../chunks/ThemeToggle.svelte_svelte_type_style_lang.093502ab.js";const le=(t,s)=>{const o=t[s];return o?typeof o=="function"?o():Promise.resolve(o):new Promise((l,a)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(a.bind(null,new Error("Unknown variable dynamic import: "+s)))})},se=async()=>H.split(`
`).map(t=>t.split("|||")).filter(t=>t.length===3).map(([t,s,o])=>({article:t})),oe=async({params:t})=>{const s=t.article;return{post:(await le(Object.assign({"../../../lib/articles/why-rust.html":()=>V(()=>import("../chunks/why-rust.4506b6ce.js"),[],import.meta.url)}),`../../../lib/articles/${s}.html`)).default}},pe=Object.freeze(Object.defineProperty({__proto__:null,entries:se,load:oe},Symbol.toStringTag,{value:"Module"}));const ae=`/*!
  Theme: Gruvbox light, medium
  Author: Dawid Kurek (dawikur@gmail.com), morhetz (https://github.com/morhetz/gruvbox)
  License: ~ MIT (or more permissive) [via base16-schemes-source]
  Maintainer: @highlightjs/core-team
  Version: 2021.09.0
*/pre code.hljs{display:block;overflow-x:auto;padding:1em}div .codeheader{background:#ebdbb2}code.hljs{padding:3px 5px}.hljs{color:#504945;background:#fbf1c7}.hljs::-moz-selection,.hljs ::-moz-selection{background-color:#d5c4a1;color:#504945}.hljs::selection,.hljs ::selection{background-color:#d5c4a1;color:#504945}.hljs-comment{color:#bdae93}.hljs-tag{color:#665c54}.hljs-subst,.hljs-punctuation,.hljs-operator{color:#504945}.hljs-operator{opacity:.7}.hljs-bullet,.hljs-variable,.hljs-template-variable,.hljs-selector-tag,.hljs-name,.hljs-deletion{color:#9d0006}.hljs-symbol,.hljs-number,.hljs-link,.hljs-attr,.hljs-variable.constant_,.hljs-literal{color:#af3a03}.hljs-title,.hljs-class .hljs-title,.hljs-title.class_,#markdown>p>code{color:#b57614}.hljs-strong{font-weight:700;color:#b57614}.hljs-code,.hljs-addition,.hljs-title.class_.inherited__,.hljs-string{color:#79740e}.hljs-built_in,.hljs-doctag,.hljs-quote,.hljs-keyword.hljs-atrule,.hljs-regexp{color:#427b58}.hljs-function .hljs-title,.hljs-attribute,.ruby .hljs-property,.hljs-title.function_,.hljs-section{color:#076678}.hljs-type,.hljs-template-tag,.diff .hljs-meta,.hljs-keyword{color:#8f3f71}.hljs-emphasis{color:#8f3f71;font-style:italic}.hljs-meta,.hljs-meta .hljs-keyword,.hljs-meta .hljs-string{color:#d65d0e}.hljs-meta .hljs-keyword,.hljs-meta-keyword{font-weight:700}
`,re=`/*!
  Theme: Gruvbox dark, medium
  Author: Dawid Kurek (dawikur@gmail.com), morhetz (https://github.com/morhetz/gruvbox)
  License: ~ MIT (or more permissive) [via base16-schemes-source]
  Maintainer: @highlightjs/core-team
  Version: 2021.09.0
*/pre code.hljs{display:block;overflow-x:auto;padding:1em}div .codeheader{background:#3c3836}code.hljs{padding:3px 5px}.hljs{color:#d5c4a1;background:#282828}.hljs::-moz-selection,.hljs ::-moz-selection{background-color:#504945;color:#d5c4a1}.hljs::selection,.hljs ::selection{background-color:#504945;color:#d5c4a1}.hljs-comment{color:#665c54}.hljs-tag{color:#bdae93}.hljs-subst,.hljs-punctuation,.hljs-operator{color:#d5c4a1}.hljs-operator{opacity:.7}.hljs-bullet,.hljs-variable,.hljs-template-variable,.hljs-selector-tag,.hljs-name,.hljs-deletion{color:#dad5b8}.hljs-symbol,.hljs-number,.hljs-link,.hljs-attr,.hljs-variable.constant_,.hljs-literal{color:#fe8019}.hljs-title,.hljs-class .hljs-title,.hljs-title.class_,#markdown>p>code{color:#fabd2f}.hljs-strong{font-weight:700;color:#fabd2f}.hljs-code,.hljs-addition,.hljs-title.class_.inherited__,.hljs-string{color:#b8bb26}.hljs-built_in,.hljs-doctag,.hljs-quote,.hljs-keyword.hljs-atrule,.hljs-regexp{color:#8ec07c}.hljs-function .hljs-title,.hljs-attribute,.ruby .hljs-property,.hljs-title.function_,.hljs-section{color:#83a598}.hljs-type,.hljs-template-tag,.diff .hljs-meta,.hljs-keyword{color:#d3869b}.hljs-emphasis{color:#d3869b;font-style:italic}.hljs-meta,.hljs-meta .hljs-keyword,.hljs-meta .hljs-string{color:#d65d0e}.hljs-meta .hljs-keyword,.hljs-meta-keyword{font-weight:700}
`;function L(t){let s,o=`.codeblock {
            max-height: 16rem;
            font-size: 0.875rem;
            line-height: 1.25rem;
        }`;return{c(){s=y("style"),s.textContent=o},l(l){s=v(l,"STYLE",{"data-svelte-h":!0}),S(s)!=="svelte-t6whel"&&(s.textContent=o)},m(l,a){j(l,s,a)},d(l){l&&i(s)}}}function ne(t){let s,o,l,a,h,d,_="Index",c,f,k=`<style>${t[0]}</style>`,g,u,w,T,p,m;document.title=s=`
        `+t[3].substring(0,t[3].indexOf(`
`)).replace(/<[^>]*>?/gm,"")+`
    `,h=new Z({props:{icon:X,class:"inline mr-1"}});let n=t[1]&&t[2]&&L();return{c(){o=z(),l=y("div"),a=y("a"),J(h.$$.fragment),d=y("b"),d.textContent=_,c=z(),f=new D(!1),g=z(),u=y("div"),w=new D(!1),T=z(),n&&n.c(),p=O(),this.h()},l(e){K("svelte-1awe3x3",document.head).forEach(i),o=x(e),l=v(e,"DIV",{class:!0});var I=C(l);a=v(I,"A",{href:!0,class:!0});var M=C(a);N(h.$$.fragment,M),d=v(M,"B",{"data-svelte-h":!0}),S(d)!=="svelte-1jwultk"&&(d.textContent=_),M.forEach(i),I.forEach(i),c=x(e),f=P(e,!1),g=x(e),u=v(e,"DIV",{class:!0});var A=C(u);w=P(A,!1),A.forEach(i),T=x(e),n&&n.l(e),p=O(),this.h()},h(){E(a,"href","/blog"),E(a,"class","no-underline"),E(l,"class","top-0 mt-16"),b(l,"fixed",!t[1]||!t[2]),b(l,"ml-8",!t[1]||!t[2]),b(l,"centered-content",t[1]&&t[2]),f.a=g,w.a=null,E(u,"class","centered-content pb-8")},m(e,r){j(e,o,r),j(e,l,r),q(l,a),U(h,a,null),q(a,d),j(e,c,r),f.m(k,e,r),j(e,g,r),j(e,u,r),w.m(t[3],u),j(e,T,r),n&&n.m(e,r),j(e,p,r),m=!0},p(e,[r]){(!m||r&8)&&s!==(s=`
        `+e[3].substring(0,e[3].indexOf(`
`)).replace(/<[^>]*>?/gm,"")+`
    `)&&(document.title=s),(!m||r&6)&&b(l,"fixed",!e[1]||!e[2]),(!m||r&6)&&b(l,"ml-8",!e[1]||!e[2]),(!m||r&6)&&b(l,"centered-content",e[1]&&e[2]),(!m||r&1)&&k!==(k=`<style>${e[0]}</style>`)&&f.p(k),e[1]&&e[2]?n||(n=L(),n.c(),n.m(p.parentNode,p)):n&&(n.d(1),n=null)},i(e){m||(Y(h.$$.fragment,e),m=!0)},o(e){Q(h.$$.fragment,e),m=!1},d(e){e&&(i(o),i(l),i(c),f.d(),i(g),i(u),i(T),i(p)),W(h),n&&n.d(e)}}}function ie(t,s,o){let l;G(t,te,c=>o(2,l=c));let a,{data:h}=s,d=h.post;ee.subscribe(async c=>{c==="light"?o(0,a=ae):o(0,a=re)});let _=!1;return R(()=>o(1,_=!0)),t.$$set=c=>{"data"in c&&o(4,h=c.data)},[a,_,l,d,h]}class be extends ${constructor(s){super(),B(this,s,ie,ne,F,{data:4})}}export{be as component,pe as universal};