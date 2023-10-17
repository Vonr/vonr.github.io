import{r as Be,s as Ye,e as pe,i as D,d as f,u as Ne,o as Re,v as Ue,f as p,a as R,g as T,h as S,c as j,j as _,k as U,w as He,x as y,y as Oe,p as Ee,z as Fe,A as be,B as Ge,C as Ke,D as Je,E as Qe,F as De,l as We,m as Xe}from"../chunks/scheduler.9d93041a.js";import{S as je,i as qe,a as Q,g as Ze,t as ee,c as $e,f as Ve,h as Me,b as me,d as he,m as de,e as _e}from"../chunks/index.3e095812.js";import{F as Te}from"../chunks/fa.7c8c3a1d.js";import{f as et,a as xe,b as ze}from"../chunks/index.ac23d56d.js";import{f as tt}from"../chunks/index.04ca9c1a.js";import{D as lt,m as nt,t as ge,a as st}from"../chunks/ThemeToggle.svelte_svelte_type_style_lang.ec9dfc06.js";import{j as it}from"../chunks/singletons.350f6e99.js";const ot=!0,kt=Object.freeze(Object.defineProperty({__proto__:null,prerender:ot},Symbol.toStringTag,{value:"Module"}));function ye(n,{delay:l=0,duration:e=400,easing:i=Be}={}){const o=+getComputedStyle(n).opacity;return{delay:l,duration:e,easing:i,css:b=>`opacity: ${b*o}`}}const rt=it("on_navigate");function Ce(n){let l,e,i,o,b,r,v,g,d;return{c(){l=p("div"),e=p("div"),b=R(),r=p("div"),this.h()},l(a){l=T(a,"DIV",{class:!0,style:!0});var u=S(l);e=T(u,"DIV",{class:!0,style:!0}),S(e).forEach(f),b=j(u),r=T(u,"DIV",{class:!0,style:!0}),S(r).forEach(f),u.forEach(f),this.h()},h(){_(e,"class","v-track svelte-iodyq2"),U(e,"height",n[6]+"px"),_(r,"class","v-thumb svelte-iodyq2"),U(r,"height",n[12]+"px"),U(r,"top",n[11]+"px"),_(l,"class","v-scrollbar svelte-iodyq2"),U(l,"height",n[6]+"px"),U(l,"margin",n[8]+"px "+n[14]+"px "+n[7]+"px "+n[13]+"px"),He(l,"fixed",n[9])},m(a,u){D(a,l,u),y(l,e),n[24](e),y(l,b),y(l,r),n[25](r),d=!0},p(a,u){(!d||u[0]&64)&&U(e,"height",a[6]+"px"),(!d||u[0]&4096)&&U(r,"height",a[12]+"px"),(!d||u[0]&2048)&&U(r,"top",a[11]+"px"),(!d||u[0]&64)&&U(l,"height",a[6]+"px"),(!d||u[0]&24960)&&U(l,"margin",a[8]+"px "+a[14]+"px "+a[7]+"px "+a[13]+"px"),(!d||u[0]&512)&&He(l,"fixed",a[9])},i(a){d||(a&&Oe(()=>{d&&(o&&o.end(1),i=Ve(e,n[0],{}),i.start())}),a&&Oe(()=>{d&&(g&&g.end(1),v=Ve(r,n[2],{}),v.start())}),d=!0)},o(a){i&&i.invalidate(),a&&(o=Me(e,n[1],{})),v&&v.invalidate(),a&&(g=Me(r,n[3],{})),d=!1},d(a){a&&f(l),n[24](null),a&&o&&o.end(),n[25](null),a&&g&&g.end()}}}function at(n){let l,e=n[10]&&Ce(n);return{c(){e&&e.c(),l=pe()},l(i){e&&e.l(i),l=pe()},m(i,o){e&&e.m(i,o),D(i,l,o)},p(i,o){i[10]?e?(e.p(i,o),o[0]&1024&&Q(e,1)):(e=Ce(i),e.c(),Q(e,1),e.m(l.parentNode,l)):e&&(Ze(),ee(e,1,1,()=>{e=null}),$e())},i(i){Q(e)},o(i){ee(e)},d(i){i&&f(l),e&&e.d(i)}}}function ut(n,l,e){let i,o,b,r,v,g,d,a,u,m,V,oe,q,W,X,{viewport:c}=l,{contents:w}=l,{hideAfter:B=1e3}=l,{alwaysVisible:I=!1}=l,{initiallyVisible:M=!1}=l,{margin:N={}}=l,{vTrackIn:F=t=>ye(t,{duration:100})}=l,{vTrackOut:H=t=>ye(t,{duration:300})}=l,{vThumbIn:P=t=>ye(t,{duration:100})}=l,{vThumbOut:te=t=>ye(t,{duration:300})}=l;const le=Ne();let k,x,z=0,re=0,G=0,A=!1,Z=!1;function $(t){if(!t)return;if(i==null||i(),typeof window.ResizeObserver>"u")throw new Error("window.ResizeObserver is missing.");e(9,A=document.scrollingElement===t);const Y=A?document:t;Y.addEventListener("scroll",L,{passive:!0});const C=new ResizeObserver(ce=>{for(const fe of ce)e(21,u=(t==null?void 0:t.scrollHeight)??0),e(6,V=(t==null?void 0:t.clientHeight)-(v+g))});return C.observe(t),()=>{Y.removeEventListener("scroll",L),C.unobserve(w),C.disconnect()}}function K(t){if(t)return b==null||b(),k.addEventListener("mouseenter",ue),k.addEventListener("mouseleave",se),()=>{k.removeEventListener("mouseenter",ue),k.removeEventListener("mouseleave",se)}}function ae(t){if(t)return r==null||r(),x.addEventListener("mousedown",O,{passive:!0}),x.addEventListener("touchstart",O,{passive:!0}),()=>{x.removeEventListener("mousedown",O),x.removeEventListener("touchstart",O)}}function ve(t){if(!t)return;if(o==null||o(),typeof window.ResizeObserver>"u")throw new Error("window.ResizeObserver is missing.");const Y=new ResizeObserver(C=>{for(const ce of C)e(21,u=(c==null?void 0:c.scrollHeight)??0)});return Y.observe(t),()=>{Y.unobserve(t),Y.disconnect()}}function E(){G=window.setTimeout(()=>{e(10,X=W&&(I||M&&!Z)||!1),le("hide")},B)}function ne(){G&&(window.clearTimeout(G),G=0)}function L(){W&&(ne(),E(),e(10,X=I||M&&!Z||!0),e(22,m=(c==null?void 0:c.scrollTop)??0),Z=!0,le("show"))}function ue(){ne()}function se(){ne(),E()}function O(t){t.stopPropagation(),t.preventDefault(),z=c.scrollTop,re=t.changedTouches?t.changedTouches[0].clientY:t.clientY,document.addEventListener("mousemove",s),document.addEventListener("touchmove",s),document.addEventListener("mouseup",h),document.addEventListener("touchend",h)}function s(t){t.stopPropagation(),t.preventDefault();const Y=t.changedTouches?t.changedTouches[0].clientY:t.clientY,C=u/V;e(15,c.scrollTop=z+C*(Y-re),c)}function h(t){t.stopPropagation(),t.preventDefault(),z=0,re=0,document.removeEventListener("mousemove",s),document.removeEventListener("touchmove",s),document.removeEventListener("mouseup",h),document.removeEventListener("touchend",h)}Re(()=>{e(15,c=c??document.scrollingElement),e(16,w=w??document.body)}),Ue(()=>{i==null||i(),o==null||o(),b==null||b(),r==null||r()});function J(t){Ee[t?"unshift":"push"](()=>{k=t,e(4,k)})}function ie(t){Ee[t?"unshift":"push"](()=>{x=t,e(5,x)})}return n.$$set=t=>{"viewport"in t&&e(15,c=t.viewport),"contents"in t&&e(16,w=t.contents),"hideAfter"in t&&e(17,B=t.hideAfter),"alwaysVisible"in t&&e(18,I=t.alwaysVisible),"initiallyVisible"in t&&e(19,M=t.initiallyVisible),"margin"in t&&e(20,N=t.margin),"vTrackIn"in t&&e(0,F=t.vTrackIn),"vTrackOut"in t&&e(1,H=t.vTrackOut),"vThumbIn"in t&&e(2,P=t.vThumbIn),"vThumbOut"in t&&e(3,te=t.vThumbOut)},n.$$.update=()=>{n.$$.dirty[0]&32768&&(i=$(c)),n.$$.dirty[0]&65536&&(o=ve(w)),n.$$.dirty[0]&16&&(b=K(k)),n.$$.dirty[0]&32&&(r=ae(x)),n.$$.dirty[0]&1048576&&e(8,v=N.top??0),n.$$.dirty[0]&1048576&&e(7,g=N.bottom??0),n.$$.dirty[0]&1048576&&e(14,d=N.right??0),n.$$.dirty[0]&1048576&&e(13,a=N.left??0),n.$$.dirty[0]&32768&&e(21,u=(c==null?void 0:c.scrollHeight)??0),n.$$.dirty[0]&32768&&e(22,m=(c==null?void 0:c.scrollTop)??0),n.$$.dirty[0]&33152&&e(6,V=(c==null?void 0:c.clientHeight)??0-(v+g)),n.$$.dirty[0]&2097216&&e(12,oe=u>0?V/u*V:0),n.$$.dirty[0]&6291520&&e(11,q=u>0?m/u*V:0),n.$$.dirty[0]&2097216&&e(23,W=u>V),n.$$.dirty[0]&9175040&&e(10,X=W&&(I||M))},[F,H,P,te,k,x,V,g,v,A,X,q,oe,a,d,c,w,B,I,M,N,u,m,W,J,ie]}class ct extends je{constructor(l){super(),qe(this,l,ut,at,Ye,{viewport:15,contents:16,hideAfter:17,alwaysVisible:18,initiallyVisible:19,margin:20,vTrackIn:0,vTrackOut:1,vThumbIn:2,vThumbOut:3},null,[-1,-1])}}const ft=n=>({}),Pe=n=>({class:"bg-white dark:bg-black"});function Ae(n){let l;return{c(){l=We("Home")},l(e){l=Xe(e,"Home")},m(e,i){D(e,l,i)},d(e){e&&f(l)}}}function mt(n){let l,e=`h1:not(.no-hl),
        h2:not(.no-hl),
        h3:not(.no-hl) {
            color: #83a598;
        }

        .text-col {
            color: white;
        }`;return{c(){l=p("style"),l.textContent=e},l(i){l=T(i,"STYLE",{"data-svelte-h":!0}),be(l)!=="svelte-1p36ju8"&&(l.textContent=e)},m(i,o){D(i,l,o)},d(i){i&&f(l)}}}function ht(n){let l,e=`h1:not(.no-hl),
        h2:not(.no-hl),
        h3:not(.no-hl) {
            color: #076678;
        }

        .text-col {
            color: black;
        }`;return{c(){l=p("style"),l.textContent=e},l(i){l=T(i,"STYLE",{"data-svelte-h":!0}),be(l)!=="svelte-lexy66"&&(l.textContent=e)},m(i,o){D(i,l,o)},d(i){i&&f(l)}}}function dt(n){let l,e,i,o,b,r,v,g,d,a,u,m,V='<a href="/portfolio" class="text-lg no-underline" title="Portfolio">Portfolio</a>',oe,q,W='<a href="/blog" class="text-lg no-underline" title="Blog">Blog</a>',X,c,w,B,I,M,N,F,H,P,te,le,k,x,z,re='<a href="https://ko-fi.com/qther" target="_blank"><img src="/logos/kofi.png" width="500px" height="500px" alt="Support me on Ko-fi" class="h-16 w-16"/></a>',G,A,Z,$,K,ae,ve;l=new lt({}),d=new Te({props:{icon:et,class:"inline"}});let E=(!n[1]||!n[3])&&Ae();M=new Te({props:{icon:tt,size:"2x",class:"py-1 w-6"}}),P=new Te({props:{icon:n[4]==="light"?xe:ze,size:"2x",class:"py-1 w-6"}}),k=new ct({props:{alwaysVisible:!0,margin:{top:3.5*n[2],buttom:.5*n[2]}}});const ne=n[6].default,L=Fe(ne,n,n[5],Pe);function ue(s,h){return s[4]==="light"?ht:mt}let se=ue(n),O=se(n);return{c(){me(l.$$.fragment),e=R(),i=p("nav"),o=p("ul"),b=p("li"),r=p("ul"),v=p("li"),g=p("a"),me(d.$$.fragment),a=R(),E&&E.c(),u=R(),m=p("li"),m.innerHTML=V,oe=R(),q=p("li"),q.innerHTML=W,X=R(),c=p("li"),w=p("ul"),B=p("li"),I=p("a"),me(M.$$.fragment),N=R(),F=p("li"),H=p("button"),me(P.$$.fragment),le=R(),me(k.$$.fragment),x=R(),z=p("div"),z.innerHTML=re,G=R(),A=p("div"),L&&L.c(),Z=R(),O.c(),$=pe(),this.h()},l(s){he(l.$$.fragment,s),e=j(s),i=T(s,"NAV",{class:!0});var h=S(i);o=T(h,"UL",{class:!0});var J=S(o);b=T(J,"LI",{class:!0});var ie=S(b);r=T(ie,"UL",{class:!0});var t=S(r);v=T(t,"LI",{class:!0});var Y=S(v);g=T(Y,"A",{href:!0,class:!0,title:!0});var C=S(g);he(d.$$.fragment,C),a=j(C),E&&E.l(C),C.forEach(f),Y.forEach(f),u=j(t),m=T(t,"LI",{class:!0,"data-svelte-h":!0}),be(m)!=="svelte-13ep1wf"&&(m.innerHTML=V),oe=j(t),q=T(t,"LI",{class:!0,"data-svelte-h":!0}),be(q)!=="svelte-12rj2bx"&&(q.innerHTML=W),t.forEach(f),ie.forEach(f),X=j(J),c=T(J,"LI",{class:!0});var ce=S(c);w=T(ce,"UL",{class:!0});var fe=S(w);B=T(fe,"LI",{class:!0});var ke=S(B);I=T(ke,"A",{href:!0,target:!0,class:!0,title:!0});var Le=S(I);he(M.$$.fragment,Le),Le.forEach(f),ke.forEach(f),N=j(fe),F=T(fe,"LI",{class:!0});var Se=S(F);H=T(Se,"BUTTON",{title:!0,class:!0});var we=S(H);he(P.$$.fragment,we),we.forEach(f),Se.forEach(f),fe.forEach(f),ce.forEach(f),J.forEach(f),h.forEach(f),le=j(s),he(k.$$.fragment,s),x=j(s),z=T(s,"DIV",{class:!0,"data-svelte-h":!0}),be(z)!=="svelte-5svdin"&&(z.innerHTML=re),G=j(s),A=T(s,"DIV",{class:!0});var Ie=S(A);L&&L.l(Ie),Ie.forEach(f),Z=j(s),O.l(s),$=pe(),this.h()},h(){_(g,"href","/"),_(g,"class","text-lg no-underline"),_(g,"title","Home"),_(v,"class","svelte-10xly4i"),_(m,"class","svelte-10xly4i"),_(q,"class","svelte-10xly4i"),_(r,"class","svelte-10xly4i"),_(b,"class","svelte-10xly4i"),_(I,"href","https://github.com/Vonr"),_(I,"target","_blank"),_(I,"class","noblue notransition"),_(I,"title","GitHub"),_(B,"class","svelte-10xly4i"),_(H,"title",te=n[4]==="light"?"Switch to Dark Mode":"Switch to Light Mode"),H.disabled=!0,_(H,"class","disabled:opacity-50"),_(F,"class","svelte-10xly4i"),_(w,"class","svelte-10xly4i"),_(c,"class","svelte-10xly4i"),_(o,"class","svelte-10xly4i"),_(i,"class","h-12 py-2 mb-8 bg-gray-800 text-white flex fixed w-full top-0 z-50 svelte-10xly4i"),_(z,"class","fixed bottom-0 right-0 m-8"),_(A,"class","mt-16 text-lg")},m(s,h){de(l,s,h),D(s,e,h),D(s,i,h),y(i,o),y(o,b),y(b,r),y(r,v),y(v,g),de(d,g,null),y(g,a),E&&E.m(g,null),y(r,u),y(r,m),y(r,oe),y(r,q),y(o,X),y(o,c),y(c,w),y(w,B),y(B,I),de(M,I,null),y(w,N),y(w,F),y(F,H),de(P,H,null),n[8](H),D(s,le,h),de(k,s,h),D(s,x,h),D(s,z,h),D(s,G,h),D(s,A,h),L&&L.m(A,null),D(s,Z,h),O.m(s,h),D(s,$,h),K=!0,ae||(ve=Ge(H,"click",n[7]),ae=!0)},p(s,[h]){!s[1]||!s[3]?E||(E=Ae(),E.c(),E.m(g,null)):E&&(E.d(1),E=null);const J={};h&16&&(J.icon=s[4]==="light"?xe:ze),P.$set(J),(!K||h&16&&te!==(te=s[4]==="light"?"Switch to Dark Mode":"Switch to Light Mode"))&&_(H,"title",te);const ie={};h&4&&(ie.margin={top:3.5*s[2],buttom:.5*s[2]}),k.$set(ie),L&&L.p&&(!K||h&32)&&Ke(L,ne,s,s[5],K?Qe(ne,s[5],h,ft):Je(s[5]),Pe),se!==(se=ue(s))&&(O.d(1),O=se(s),O&&(O.c(),O.m($.parentNode,$)))},i(s){K||(Q(l.$$.fragment,s),Q(d.$$.fragment,s),Q(M.$$.fragment,s),Q(P.$$.fragment,s),Q(k.$$.fragment,s),Q(L,s),K=!0)},o(s){ee(l.$$.fragment,s),ee(d.$$.fragment,s),ee(M.$$.fragment,s),ee(P.$$.fragment,s),ee(k.$$.fragment,s),ee(L,s),K=!1},d(s){s&&(f(e),f(i),f(le),f(x),f(z),f(G),f(A),f(Z),f($)),_e(l,s),_e(d),E&&E.d(),_e(M),_e(P),n[8](null),_e(k,s),L&&L.d(s),O.d(s),ae=!1,ve()}}}function _t(n,l,e){let i,o;De(n,st,m=>e(3,i=m)),De(n,ge,m=>e(4,o=m));let{$$slots:b={},$$scope:r}=l;nt.set(1e3);let v,g=!1,d=16;Re(()=>{e(2,d=parseInt(getComputedStyle(document.documentElement).fontSize)),e(0,v.disabled=!1,v),localStorage.theme==="light"||!("theme"in localStorage)&&window.matchMedia("(prefers-color-scheme: light)").matches?ge.set("light"):ge.set("dark"),ge.subscribe(m=>{m==="light"?(document.documentElement.classList.remove("dark"),document.documentElement.style.setProperty("color-scheme","light"),localStorage.theme="light"):(document.documentElement.classList.add("dark"),document.documentElement.style.setProperty("color-scheme","dark"),localStorage.theme="dark")}),e(1,g=!0)}),rt(m=>{if(document.startViewTransition)return new Promise(V=>{document.startViewTransition(async()=>{V(),await m.complete})})});const a=()=>{ge.update(m=>m==="light"?"dark":"light")};function u(m){Ee[m?"unshift":"push"](()=>{v=m,e(0,v)})}return n.$$set=m=>{"$$scope"in m&&e(5,r=m.$$scope)},[v,g,d,i,o,r,b,a,u]}class Lt extends je{constructor(l){super(),qe(this,l,_t,dt,Ye,{})}}export{Lt as component,kt as universal};