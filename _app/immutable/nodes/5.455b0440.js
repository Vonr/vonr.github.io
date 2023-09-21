import{s as oe,o as ce,n as pe}from"../chunks/scheduler.6c817c6f.js";import{S as le,i as ie,e as re,a as T,d as b,p as fe,t as I,b as ue,f as v,g as d,r as z,m as y,s as E,h as _,j as L,u as x,n as $,c as j,k as p,y as o,v as M,o as me,w as G,A as ge,x as V}from"../chunks/index.c0515c57.js";import{F as he}from"../chunks/fa.4f02a059.js";import{d as de}from"../chunks/index.ac23d56d.js";import{f as _e}from"../chunks/index.04ca9c1a.js";function ne(u){let r,t,e,n,i,f,s;e=new he({props:{icon:_e,class:"inline text-black dark:text-white mr-0.5"}});let a=u[1]&&u[3].stargazers_count>0&&se(u);return{c(){r=d("span"),t=d("a"),z(e.$$.fragment),n=y(u[0]),f=E(),a&&a.c(),this.h()},l(l){r=_(l,"SPAN",{class:!0});var c=L(r);t=_(c,"A",{href:!0,target:!0});var A=L(t);x(e.$$.fragment,A),n=$(A,u[0]),A.forEach(v),f=j(c),a&&a.l(c),c.forEach(v),this.h()},h(){p(t,"href",i=u[3].html_url),p(t,"target","_blank"),p(r,"class","bg-indigo-100 dark:bg-gray-700")},m(l,c){T(l,r,c),o(r,t),M(e,t,null),o(t,n),o(r,f),a&&a.m(r,null),s=!0},p(l,c){(!s||c&1)&&me(n,l[0]),(!s||c&8&&i!==(i=l[3].html_url))&&p(t,"href",i),l[1]&&l[3].stargazers_count>0?a?(a.p(l,c),c&10&&b(a,1)):(a=se(l),a.c(),b(a,1),a.m(r,null)):a&&(fe(),I(a,1,1,()=>{a=null}),ue())},i(l){s||(b(e.$$.fragment,l),b(a),s=!0)},o(l){I(e.$$.fragment,l),I(a),s=!1},d(l){l&&v(r),G(e),a&&a.d()}}}function se(u){let r,t,e=u[3].stargazers_count+"",n,i,f;return t=new he({props:{icon:de,class:"inline",color:"#ddb14e"}}),{c(){r=d("a"),z(t.$$.fragment),n=y(e),this.h()},l(s){r=_(s,"A",{href:!0,target:!0,class:!0});var a=L(r);x(t.$$.fragment,a),n=$(a,e),a.forEach(v),this.h()},h(){p(r,"href",i=`${u[3].html_url}/stargazers`),p(r,"target","_blank"),p(r,"class","noblue no-underline")},m(s,a){T(s,r,a),M(t,r,null),o(r,n),f=!0},p(s,a){(!f||a&8)&&e!==(e=s[3].stargazers_count+"")&&me(n,e),(!f||a&8&&i!==(i=`${s[3].html_url}/stargazers`))&&p(r,"href",i)},i(s){f||(b(t.$$.fragment,s),f=!0)},o(s){I(t.$$.fragment,s),f=!1},d(s){s&&v(r),G(t)}}}function ve(u){let r,t,e=u[2]&&ne(u);return{c(){e&&e.c(),r=re()},l(n){e&&e.l(n),r=re()},m(n,i){e&&e.m(n,i),T(n,r,i),t=!0},p(n,[i]){n[2]?e?(e.p(n,i),i&4&&b(e,1)):(e=ne(n),e.c(),b(e,1),e.m(r.parentNode,r)):e&&(fe(),I(e,1,1,()=>{e=null}),ue())},i(n){t||(b(e),t=!0)},o(n){I(e),t=!1},d(n){n&&v(r),e&&e.d(n)}}}function be(u,r,t){let{owner:e="Vonr"}=r,{repo:n}=r,{showStars:i=!0}=r,f=!1,s;return ce(async()=>{t(3,s=await fetch(`https://api.github.com/repos/${e}/${n}`,{headers:{Accept:"application/vnd.github+json","X-GitHub-Api-Version":"2022-11-28"}}).then(a=>a.json()).then(a=>a)),t(2,f=!0)}),u.$$set=a=>{"owner"in a&&t(4,e=a.owner),"repo"in a&&t(0,n=a.repo),"showStars"in a&&t(1,i=a.showStars)},[n,i,f,s,e]}class q extends le{constructor(r){super(),ie(this,r,be,ve,oe,{owner:4,repo:0,showStars:1})}}function ye(u){let r,t,e,n="Portfolio",i,f,s=`Hey, I&#39;m Qther.
        <br/>
        Of course, that&#39;s just an alias as I choose not to reveal my real name for the sake of privacy.
        <br/>`,a,l,c=`I started programming with Javascript when I was just 9 years old,
        <br/>
        though I did not make anything of note until much later.`,A,h,B,N,F,Z,D,H,J,O,Q,C,X,K,w,W,R,ae="configuration files",Y,P,ee,U;return N=new q({props:{repo:"parui"}}),H=new q({props:{repo:"compact_strings"}}),C=new q({props:{repo:"nonn"}}),P=new q({props:{repo:"align.nvim"}}),{c(){r=E(),t=d("div"),e=d("h1"),e.textContent=n,i=E(),f=d("p"),f.innerHTML=s,a=E(),l=d("p"),l.innerHTML=c,A=E(),h=d("p"),B=y(`Nowadays, I mostly program in Rust, as I am a big fan of its safety and
        ergonomics. Apart from binaries like
        `),z(N.$$.fragment),F=y(`, a terminal user interface wrapper around the Arch
        User Repository (AUR) Helper paru,
        `),Z=d("br"),D=y(`
        I have also made several libraries such
        `),z(H.$$.fragment),J=y(`
        , a more space-efficient and cache-friendly way of representing large lists
        of strings also used in parui,
        `),O=d("br"),Q=y(`
        and
        `),z(C.$$.fragment),X=y(`, a wrapper around the standard library's NonZero*
        integer types to make them generically NonN instead.`),K=E(),w=d("p"),W=y(`I use Neovim as my text editor, both for simple files and for
        programming. I host my `),R=d("a"),R.textContent=ae,Y=y(`
        on GitHub and have made some plugins for it, such as
        `),z(P.$$.fragment),ee=y(", though they are largely unmaintained."),this.h()},l(m){ge("svelte-wdlemp",document.head).forEach(v),r=j(m),t=_(m,"DIV",{class:!0});var k=L(t);e=_(k,"H1",{"data-svelte-h":!0}),V(e)!=="svelte-1iek1aq"&&(e.textContent=n),i=j(k),f=_(k,"P",{class:!0,"data-svelte-h":!0}),V(f)!=="svelte-1wxtfm"&&(f.innerHTML=s),a=j(k),l=_(k,"P",{class:!0,"data-svelte-h":!0}),V(l)!=="svelte-u0p5cf"&&(l.innerHTML=c),A=j(k),h=_(k,"P",{class:!0});var g=L(h);B=$(g,`Nowadays, I mostly program in Rust, as I am a big fan of its safety and
        ergonomics. Apart from binaries like
        `),x(N.$$.fragment,g),F=$(g,`, a terminal user interface wrapper around the Arch
        User Repository (AUR) Helper paru,
        `),Z=_(g,"BR",{}),D=$(g,`
        I have also made several libraries such
        `),x(H.$$.fragment,g),J=$(g,`
        , a more space-efficient and cache-friendly way of representing large lists
        of strings also used in parui,
        `),O=_(g,"BR",{}),Q=$(g,`
        and
        `),x(C.$$.fragment,g),X=$(g,`, a wrapper around the standard library's NonZero*
        integer types to make them generically NonN instead.`),g.forEach(v),K=j(k),w=_(k,"P",{class:!0});var S=L(w);W=$(S,`I use Neovim as my text editor, both for simple files and for
        programming. I host my `),R=_(S,"A",{href:!0,"data-svelte-h":!0}),V(R)!=="svelte-uv1yaj"&&(R.textContent=ae),Y=$(S,`
        on GitHub and have made some plugins for it, such as
        `),x(P.$$.fragment,S),ee=$(S,", though they are largely unmaintained."),S.forEach(v),k.forEach(v),this.h()},h(){document.title="Portfolio",p(f,"class","svelte-104u3se"),p(l,"class","svelte-104u3se"),p(h,"class","svelte-104u3se"),p(R,"href","https://github.com/Vonr/nvim"),p(w,"class","svelte-104u3se"),p(t,"class","centered-content")},m(m,te){T(m,r,te),T(m,t,te),o(t,e),o(t,i),o(t,f),o(t,a),o(t,l),o(t,A),o(t,h),o(h,B),M(N,h,null),o(h,F),o(h,Z),o(h,D),M(H,h,null),o(h,J),o(h,O),o(h,Q),M(C,h,null),o(h,X),o(t,K),o(t,w),o(w,W),o(w,R),o(w,Y),M(P,w,null),o(w,ee),U=!0},p:pe,i(m){U||(b(N.$$.fragment,m),b(H.$$.fragment,m),b(C.$$.fragment,m),b(P.$$.fragment,m),U=!0)},o(m){I(N.$$.fragment,m),I(H.$$.fragment,m),I(C.$$.fragment,m),I(P.$$.fragment,m),U=!1},d(m){m&&(v(r),v(t)),G(N),G(H),G(C),G(P)}}}class Ne extends le{constructor(r){super(),ie(this,r,null,ye,oe,{})}}export{Ne as component};
