import{s as oe,e as re,i as T,d as v,o as he,f as d,l as y,a as E,g as _,h as L,m as $,c as j,j as p,x as o,n as le,H as pe,A as V,G as ge}from"../chunks/scheduler.9d93041a.js";import{S as ie,i as fe,a as b,g as ue,t as I,c as me,b as z,d as x,m as G,e as M}from"../chunks/index.3e095812.js";import{F as ce}from"../chunks/fa.7c8c3a1d.js";import{d as de}from"../chunks/index.ac23d56d.js";import{f as _e}from"../chunks/index.04ca9c1a.js";function ne(u){let r,t,e,n,i,f,s;e=new ce({props:{icon:_e,class:"inline text-black dark:text-white mr-0.5"}});let a=u[1]&&u[3].stargazers_count>0&&se(u);return{c(){r=d("span"),t=d("a"),z(e.$$.fragment),n=y(u[0]),f=E(),a&&a.c(),this.h()},l(l){r=_(l,"SPAN",{class:!0});var h=L(r);t=_(h,"A",{href:!0,target:!0});var A=L(t);x(e.$$.fragment,A),n=$(A,u[0]),A.forEach(v),f=j(h),a&&a.l(h),h.forEach(v),this.h()},h(){p(t,"href",i=u[3].html_url),p(t,"target","_blank"),p(r,"class","bg-indigo-100 dark:bg-gray-700")},m(l,h){T(l,r,h),o(r,t),G(e,t,null),o(t,n),o(r,f),a&&a.m(r,null),s=!0},p(l,h){(!s||h&1)&&le(n,l[0]),(!s||h&8&&i!==(i=l[3].html_url))&&p(t,"href",i),l[1]&&l[3].stargazers_count>0?a?(a.p(l,h),h&10&&b(a,1)):(a=se(l),a.c(),b(a,1),a.m(r,null)):a&&(ue(),I(a,1,1,()=>{a=null}),me())},i(l){s||(b(e.$$.fragment,l),b(a),s=!0)},o(l){I(e.$$.fragment,l),I(a),s=!1},d(l){l&&v(r),M(e),a&&a.d()}}}function se(u){let r,t,e=u[3].stargazers_count+"",n,i,f;return t=new ce({props:{icon:de,class:"inline",color:"#ddb14e"}}),{c(){r=d("a"),z(t.$$.fragment),n=y(e),this.h()},l(s){r=_(s,"A",{href:!0,target:!0,class:!0});var a=L(r);x(t.$$.fragment,a),n=$(a,e),a.forEach(v),this.h()},h(){p(r,"href",i=`${u[3].html_url}/stargazers`),p(r,"target","_blank"),p(r,"class","noblue no-underline")},m(s,a){T(s,r,a),G(t,r,null),o(r,n),f=!0},p(s,a){(!f||a&8)&&e!==(e=s[3].stargazers_count+"")&&le(n,e),(!f||a&8&&i!==(i=`${s[3].html_url}/stargazers`))&&p(r,"href",i)},i(s){f||(b(t.$$.fragment,s),f=!0)},o(s){I(t.$$.fragment,s),f=!1},d(s){s&&v(r),M(t)}}}function ve(u){let r,t,e=u[2]&&ne(u);return{c(){e&&e.c(),r=re()},l(n){e&&e.l(n),r=re()},m(n,i){e&&e.m(n,i),T(n,r,i),t=!0},p(n,[i]){n[2]?e?(e.p(n,i),i&4&&b(e,1)):(e=ne(n),e.c(),b(e,1),e.m(r.parentNode,r)):e&&(ue(),I(e,1,1,()=>{e=null}),me())},i(n){t||(b(e),t=!0)},o(n){I(e),t=!1},d(n){n&&v(r),e&&e.d(n)}}}function be(u,r,t){let{owner:e="Vonr"}=r,{repo:n}=r,{showStars:i=!0}=r,f=!1,s;return he(async()=>{t(3,s=await fetch(`https://api.github.com/repos/${e}/${n}`,{headers:{Accept:"application/vnd.github+json","X-GitHub-Api-Version":"2022-11-28"}}).then(a=>a.json()).then(a=>a)),t(2,f=!0)}),u.$$set=a=>{"owner"in a&&t(4,e=a.owner),"repo"in a&&t(0,n=a.repo),"showStars"in a&&t(1,i=a.showStars)},[n,i,f,s,e]}class q extends ie{constructor(r){super(),fe(this,r,be,ve,oe,{owner:4,repo:0,showStars:1})}}function ye(u){let r,t,e,n="Portfolio",i,f,s=`Hey, I&#39;m Qther.
        <br/>
        Of course, that&#39;s just an alias as I choose not to reveal my real name for the sake of privacy.
        <br/>`,a,l,h=`I started programming with Javascript when I was just 9 years old,
        <br/>
        though I did not make anything of note until much later.`,A,c,B,H,F,Z,D,N,J,O,Q,C,X,K,w,W,R,ae="configuration files",Y,P,ee,U;return H=new q({props:{repo:"parui"}}),N=new q({props:{repo:"compact_strings"}}),C=new q({props:{repo:"nonn"}}),P=new q({props:{repo:"align.nvim"}}),{c(){r=E(),t=d("div"),e=d("h1"),e.textContent=n,i=E(),f=d("p"),f.innerHTML=s,a=E(),l=d("p"),l.innerHTML=h,A=E(),c=d("p"),B=y(`Nowadays, I mostly program in Rust, as I am a big fan of its safety and
        ergonomics. Apart from binaries like
        `),z(H.$$.fragment),F=y(`, a terminal user interface wrapper around the Arch
        User Repository (AUR) Helper paru,
        `),Z=d("br"),D=y(`
        I have also made several libraries such
        `),z(N.$$.fragment),J=y(`
        , a more space-efficient and cache-friendly way of representing large lists
        of strings also used in parui,
        `),O=d("br"),Q=y(`
        and
        `),z(C.$$.fragment),X=y(`, a wrapper around the standard library's NonZero*
        integer types to make them generically NonN instead.`),K=E(),w=d("p"),W=y(`I use Neovim as my text editor, both for simple files and for
        programming. I host my `),R=d("a"),R.textContent=ae,Y=y(`
        on GitHub and have made some plugins for it, such as
        `),z(P.$$.fragment),ee=y(", though they are largely unmaintained."),this.h()},l(m){pe("svelte-wdlemp",document.head).forEach(v),r=j(m),t=_(m,"DIV",{class:!0});var k=L(t);e=_(k,"H1",{"data-svelte-h":!0}),V(e)!=="svelte-1iek1aq"&&(e.textContent=n),i=j(k),f=_(k,"P",{class:!0,"data-svelte-h":!0}),V(f)!=="svelte-1wxtfm"&&(f.innerHTML=s),a=j(k),l=_(k,"P",{class:!0,"data-svelte-h":!0}),V(l)!=="svelte-u0p5cf"&&(l.innerHTML=h),A=j(k),c=_(k,"P",{class:!0});var g=L(c);B=$(g,`Nowadays, I mostly program in Rust, as I am a big fan of its safety and
        ergonomics. Apart from binaries like
        `),x(H.$$.fragment,g),F=$(g,`, a terminal user interface wrapper around the Arch
        User Repository (AUR) Helper paru,
        `),Z=_(g,"BR",{}),D=$(g,`
        I have also made several libraries such
        `),x(N.$$.fragment,g),J=$(g,`
        , a more space-efficient and cache-friendly way of representing large lists
        of strings also used in parui,
        `),O=_(g,"BR",{}),Q=$(g,`
        and
        `),x(C.$$.fragment,g),X=$(g,`, a wrapper around the standard library's NonZero*
        integer types to make them generically NonN instead.`),g.forEach(v),K=j(k),w=_(k,"P",{class:!0});var S=L(w);W=$(S,`I use Neovim as my text editor, both for simple files and for
        programming. I host my `),R=_(S,"A",{href:!0,"data-svelte-h":!0}),V(R)!=="svelte-uv1yaj"&&(R.textContent=ae),Y=$(S,`
        on GitHub and have made some plugins for it, such as
        `),x(P.$$.fragment,S),ee=$(S,", though they are largely unmaintained."),S.forEach(v),k.forEach(v),this.h()},h(){document.title="Portfolio",p(f,"class","svelte-104u3se"),p(l,"class","svelte-104u3se"),p(c,"class","svelte-104u3se"),p(R,"href","https://github.com/Vonr/nvim"),p(w,"class","svelte-104u3se"),p(t,"class","centered-content")},m(m,te){T(m,r,te),T(m,t,te),o(t,e),o(t,i),o(t,f),o(t,a),o(t,l),o(t,A),o(t,c),o(c,B),G(H,c,null),o(c,F),o(c,Z),o(c,D),G(N,c,null),o(c,J),o(c,O),o(c,Q),G(C,c,null),o(c,X),o(t,K),o(t,w),o(w,W),o(w,R),o(w,Y),G(P,w,null),o(w,ee),U=!0},p:ge,i(m){U||(b(H.$$.fragment,m),b(N.$$.fragment,m),b(C.$$.fragment,m),b(P.$$.fragment,m),U=!0)},o(m){I(H.$$.fragment,m),I(N.$$.fragment,m),I(C.$$.fragment,m),I(P.$$.fragment,m),U=!1},d(m){m&&(v(r),v(t)),M(H),M(N),M(C),M(P)}}}class He extends ie{constructor(r){super(),fe(this,r,null,ye,oe,{})}}export{He as component};
