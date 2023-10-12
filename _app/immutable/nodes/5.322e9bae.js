import{s as oe,f as g,l as b,a as z,g as d,h as U,m as $,d as _,c as M,j as u,i as F,x as n,n as le,o as me,H as he,A as q,G as pe}from"../chunks/scheduler.9d93041a.js";import{S as ie,i as fe,b as j,d as T,m as G,a as k,g as ce,t as A,c as ge,e as L}from"../chunks/index.3e095812.js";import{F as ue}from"../chunks/fa.7c8c3a1d.js";import{d as de}from"../chunks/index.ac23d56d.js";import{f as _e}from"../chunks/index.04ca9c1a.js";function se(f){let t,r,l=f[4].stargazers_count+"",a,i,h;return r=new ue({props:{icon:de,class:"inline",color:"#ddb14e"}}),{c(){t=g("a"),j(r.$$.fragment),a=b(l),this.h()},l(s){t=d(s,"A",{href:!0,target:!0,class:!0});var e=U(t);T(r.$$.fragment,e),a=$(e,l),e.forEach(_),this.h()},h(){u(t,"href",i=`${f[4].html_url}/stargazers`),u(t,"target","_blank"),u(t,"class","noblue no-underline")},m(s,e){F(s,t,e),G(r,t,null),n(t,a),h=!0},p(s,e){(!h||e&16)&&l!==(l=s[4].stargazers_count+"")&&le(a,l),(!h||e&16&&i!==(i=`${s[4].html_url}/stargazers`))&&u(t,"href",i)},i(s){h||(k(r.$$.fragment,s),h=!0)},o(s){A(r.$$.fragment,s),h=!1},d(s){s&&_(t),L(r)}}}function ve(f){let t,r,l,a,i,h,s;l=new ue({props:{icon:_e,class:"inline text-black dark:text-white mr-0.5"}});let e=f[3]&&f[2]&&f[4].stargazers_count>0&&se(f);return{c(){t=g("span"),r=g("a"),j(l.$$.fragment),a=b(f[1]),h=z(),e&&e.c(),this.h()},l(o){t=d(o,"SPAN",{class:!0});var c=U(t);r=d(c,"A",{href:!0,target:!0});var y=U(r);T(l.$$.fragment,y),a=$(y,f[1]),y.forEach(_),h=M(c),e&&e.l(c),c.forEach(_),this.h()},h(){u(r,"href",i=f[3]?f[4].html_url:`https://github.com/${f[0]}/${f[1]}`),u(r,"target","_blank"),u(t,"class","bg-indigo-100 dark:bg-gray-700")},m(o,c){F(o,t,c),n(t,r),G(l,r,null),n(r,a),n(t,h),e&&e.m(t,null),s=!0},p(o,[c]){(!s||c&2)&&le(a,o[1]),(!s||c&27&&i!==(i=o[3]?o[4].html_url:`https://github.com/${o[0]}/${o[1]}`))&&u(r,"href",i),o[3]&&o[2]&&o[4].stargazers_count>0?e?(e.p(o,c),c&28&&k(e,1)):(e=se(o),e.c(),k(e,1),e.m(t,null)):e&&(ce(),A(e,1,1,()=>{e=null}),ge())},i(o){s||(k(l.$$.fragment,o),k(e),s=!0)},o(o){A(l.$$.fragment,o),A(e),s=!1},d(o){o&&_(t),L(l),e&&e.d()}}}function ye(f,t,r){let{owner:l="Vonr"}=t,{repo:a}=t,{showStars:i=!0}=t,h=!1,s;return me(async()=>{r(4,s=await fetch(`https://api.github.com/repos/${l}/${a}`,{headers:{Accept:"application/vnd.github+json","X-GitHub-Api-Version":"2022-11-28"}}).then(e=>e.json()).then(e=>e)),r(3,h=!0)}),f.$$set=e=>{"owner"in e&&r(0,l=e.owner),"repo"in e&&r(1,a=e.repo),"showStars"in e&&r(2,i=e.showStars)},[l,a,i,h,s]}class B extends ie{constructor(t){super(),fe(this,t,ye,ve,oe,{owner:0,repo:1,showStars:2})}}function be(f){let t,r,l,a,i,h="Portfolio",s,e,o=`Hey, I&#39;m Qther.
        <br/>
        Of course, that&#39;s just an alias as I choose not to reveal my real name for the sake of privacy.
        <br/>`,c,y,ae=`I started programming with Javascript when I was just 9 years old,
        <br/>
        though I did not make anything of note until much later.`,Z,p,D,H,J,O,Q,N,X,x,K,C,W,Y,w,ee,E,ne="configuration files",te,P,re,V;return H=new B({props:{repo:"parui"}}),N=new B({props:{repo:"compact_strings"}}),C=new B({props:{repo:"nonn"}}),P=new B({props:{repo:"align.nvim"}}),{c(){t=g("meta"),r=g("meta"),l=z(),a=g("div"),i=g("h1"),i.textContent=h,s=z(),e=g("p"),e.innerHTML=o,c=z(),y=g("p"),y.innerHTML=ae,Z=z(),p=g("p"),D=b(`Nowadays, I mostly program in Rust, as I am a big fan of its safety and
        ergonomics. Apart from binaries like
        `),j(H.$$.fragment),J=b(`, a terminal user interface wrapper around the Arch
        User Repository (AUR) Helper paru,
        `),O=g("br"),Q=b(`
        I have also made several libraries such
        `),j(N.$$.fragment),X=b(`
        , a more space-efficient and cache-friendly way of representing large lists
        of strings also used in parui,
        `),x=g("br"),K=b(`
        and
        `),j(C.$$.fragment),W=b(`, a wrapper around the standard library's NonZero*
        integer types to make them generically NonN instead.`),Y=z(),w=g("p"),ee=b(`I use Neovim as my text editor, both for simple files and for
        programming. I host my `),E=g("a"),E.textContent=ne,te=b(`
        on GitHub and have made some plugins for it, such as
        `),j(P.$$.fragment),re=b(", though they are largely unmaintained."),this.h()},l(m){const R=he("svelte-11qzclm",document.head);t=d(R,"META",{content:!0,property:!0}),r=d(R,"META",{content:!0,property:!0}),R.forEach(_),l=M(m),a=d(m,"DIV",{class:!0});var I=U(a);i=d(I,"H1",{"data-svelte-h":!0}),q(i)!=="svelte-1iek1aq"&&(i.textContent=h),s=M(I),e=d(I,"P",{class:!0,"data-svelte-h":!0}),q(e)!=="svelte-1wxtfm"&&(e.innerHTML=o),c=M(I),y=d(I,"P",{class:!0,"data-svelte-h":!0}),q(y)!=="svelte-u0p5cf"&&(y.innerHTML=ae),Z=M(I),p=d(I,"P",{class:!0});var v=U(p);D=$(v,`Nowadays, I mostly program in Rust, as I am a big fan of its safety and
        ergonomics. Apart from binaries like
        `),T(H.$$.fragment,v),J=$(v,`, a terminal user interface wrapper around the Arch
        User Repository (AUR) Helper paru,
        `),O=d(v,"BR",{}),Q=$(v,`
        I have also made several libraries such
        `),T(N.$$.fragment,v),X=$(v,`
        , a more space-efficient and cache-friendly way of representing large lists
        of strings also used in parui,
        `),x=d(v,"BR",{}),K=$(v,`
        and
        `),T(C.$$.fragment,v),W=$(v,`, a wrapper around the standard library's NonZero*
        integer types to make them generically NonN instead.`),v.forEach(_),Y=M(I),w=d(I,"P",{class:!0});var S=U(w);ee=$(S,`I use Neovim as my text editor, both for simple files and for
        programming. I host my `),E=d(S,"A",{href:!0,"data-svelte-h":!0}),q(E)!=="svelte-uv1yaj"&&(E.textContent=ne),te=$(S,`
        on GitHub and have made some plugins for it, such as
        `),T(P.$$.fragment,S),re=$(S,", though they are largely unmaintained."),S.forEach(_),I.forEach(_),this.h()},h(){document.title="Portfolio",u(t,"content","Portfolio"),u(t,"property","og:title"),u(r,"content","https://vonr.github.io/portfolio"),u(r,"property","og:url"),u(e,"class","svelte-104u3se"),u(y,"class","svelte-104u3se"),u(p,"class","svelte-104u3se"),u(E,"href","https://github.com/Vonr/nvim"),u(w,"class","svelte-104u3se"),u(a,"class","centered-content")},m(m,R){n(document.head,t),n(document.head,r),F(m,l,R),F(m,a,R),n(a,i),n(a,s),n(a,e),n(a,c),n(a,y),n(a,Z),n(a,p),n(p,D),G(H,p,null),n(p,J),n(p,O),n(p,Q),G(N,p,null),n(p,X),n(p,x),n(p,K),G(C,p,null),n(p,W),n(a,Y),n(a,w),n(w,ee),n(w,E),n(w,te),G(P,w,null),n(w,re),V=!0},p:pe,i(m){V||(k(H.$$.fragment,m),k(N.$$.fragment,m),k(C.$$.fragment,m),k(P.$$.fragment,m),V=!0)},o(m){A(H.$$.fragment,m),A(N.$$.fragment,m),A(C.$$.fragment,m),A(P.$$.fragment,m),V=!1},d(m){m&&(_(l),_(a)),_(t),_(r),L(H),L(N),L(C),L(P)}}}class He extends ie{constructor(t){super(),fe(this,t,null,be,oe,{})}}export{He as component};
