import{s as G,e as d,t as S,a as R,c as b,b as w,d as z,f as c,g as V,o as h,i as y,h as _,j as A,p as q}from"./scheduler.DfbzFEVJ.js";import{S as C,i as H,c as N,a as j,m as v,t as m,g as I,b as g,e as M,d as E}from"./index.BnYrpKpz.js";import{F,f as P}from"./index.BzxVwUwI.js";import{f as X}from"./index.CdQvNdX5.js";function k(o){let a,r,n=o[5].stargazers_count+"",i,f,l;return r=new F({props:{icon:P,class:"inline",color:"#ddb14e"}}),{c(){a=d("a"),N(r.$$.fragment),i=S(n),this.h()},l(s){a=b(s,"A",{href:!0,target:!0,class:!0});var e=w(a);j(r.$$.fragment,e),i=z(e,n),e.forEach(c),this.h()},h(){h(a,"href",f=`${o[5].html_url}/stargazers`),h(a,"target","_blank"),h(a,"class","noblue no-underline")},m(s,e){y(s,a,e),v(r,a,null),_(a,i),l=!0},p(s,e){(!l||e&32)&&n!==(n=s[5].stargazers_count+"")&&A(i,n),(!l||e&32&&f!==(f=`${s[5].html_url}/stargazers`))&&h(a,"href",f)},i(s){l||(m(r.$$.fragment,s),l=!0)},o(s){g(r.$$.fragment,s),l=!1},d(s){s&&c(a),E(r)}}}function B(o){let a,r,n,i,f,l,s;n=new F({props:{icon:X,class:"inline text-black dark:text-white mr-0.5"}});let e=o[4]&&o[3]&&o[5].stargazers_count>0&&k(o);return{c(){a=d("span"),r=d("a"),N(n.$$.fragment),i=S(o[2]),l=R(),e&&e.c(),this.h()},l(t){a=b(t,"SPAN",{class:!0});var u=w(a);r=b(u,"A",{href:!0,target:!0});var p=w(r);j(n.$$.fragment,p),i=z(p,o[2]),p.forEach(c),l=V(u),e&&e.l(u),u.forEach(c),this.h()},h(){h(r,"href",f=`https://github.com/${o[0]}/${o[1]}`),h(r,"target","_blank"),h(a,"class","bg-indigo-100 dark:bg-gray-700")},m(t,u){y(t,a,u),_(a,r),v(n,r,null),_(r,i),_(a,l),e&&e.m(a,null),s=!0},p(t,[u]){(!s||u&4)&&A(i,t[2]),(!s||u&3&&f!==(f=`https://github.com/${t[0]}/${t[1]}`))&&h(r,"href",f),t[4]&&t[3]&&t[5].stargazers_count>0?e?(e.p(t,u),u&56&&m(e,1)):(e=k(t),e.c(),m(e,1),e.m(a,null)):e&&(I(),g(e,1,1,()=>{e=null}),M())},i(t){s||(m(n.$$.fragment,t),m(e),s=!0)},o(t){g(n.$$.fragment,t),g(e),s=!1},d(t){t&&c(a),E(n),e&&e.d()}}}function D(o,a,r){let{owner:n="Vonr"}=a,{repo:i}=a,{displayName:f=i}=a,{showStars:l=!0}=a,s=!1,e;return q(async()=>{l&&r(5,e=await fetch(`https://api.github.com/repos/${n}/${i}`,{headers:{Accept:"application/vnd.github+json","X-GitHub-Api-Version":"2022-11-28"}}).then(t=>t.json()).then(t=>t)),r(4,s=!0)}),o.$$set=t=>{"owner"in t&&r(0,n=t.owner),"repo"in t&&r(1,i=t.repo),"displayName"in t&&r(2,f=t.displayName),"showStars"in t&&r(3,l=t.showStars)},[n,i,f,l,s,e]}class Q extends C{constructor(a){super(),H(this,a,D,B,G,{owner:0,repo:1,displayName:2,showStars:3})}}export{Q as R};
