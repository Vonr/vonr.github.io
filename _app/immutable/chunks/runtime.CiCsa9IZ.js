var On=Array.isArray,Sn=Array.from,xn=Object.defineProperty,ot=Object.getOwnPropertyDescriptor,Ut=Object.getOwnPropertyDescriptors,Nn=Object.prototype,gn=Array.prototype,Vt=Object.getPrototypeOf;function Dn(t){return typeof t=="function"}const kn=()=>{};function Cn(t){return t()}function Gt(t){for(var n=0;n<t.length;n++)t[n]()}const m=2,ct=4,Y=8,tt=16,T=32,Z=64,x=128,V=256,p=512,R=1024,b=2048,C=4096,j=8192,Kt=16384,vt=32768,bn=65536,$t=1<<18,pt=1<<19,ut=Symbol("$state"),Fn=Symbol("");function ht(t){return t===this.v}function Zt(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function dt(t){return!Zt(t,this.v)}function zt(t){throw new Error("effect_in_teardown")}function Jt(){throw new Error("effect_in_unowned_derived")}function Wt(t){throw new Error("effect_orphan")}function Xt(){throw new Error("effect_update_depth_exceeded")}function Pn(){throw new Error("hydration_failed")}function qn(t){throw new Error("props_invalid_value")}function Ln(){throw new Error("state_descriptors_fixed")}function Mn(){throw new Error("state_prototype_fixed")}function Qt(){throw new Error("state_unsafe_local_read")}function tn(){throw new Error("state_unsafe_mutation")}function nt(t){return{f:0,v:t,reactions:null,equals:ht,version:0}}function Hn(t){return Et(nt(t))}function nn(t,n=!1){var e;const r=nt(t);return n||(r.equals=dt),f!==null&&f.l!==null&&((e=f.l).s??(e.s=[])).push(r),r}function Yn(t,n=!1){return Et(nn(t,n))}function Et(t){return u!==null&&u.f&m&&(y===null?dn([t]):y.push(t)),t}function rn(t,n){return u!==null&&at()&&u.f&(m|tt)&&(y===null||!y.includes(t))&&tn(),en(t,n)}function en(t,n){return t.equals(n)||(t.v=n,t.version=Lt(),yt(t,R),at()&&o!==null&&o.f&p&&!(o.f&T)&&(_!==null&&_.includes(t)?(E(o,R),z(o)):I===null?En([t]):I.push(t))),n}function yt(t,n){var r=t.reactions;if(r!==null)for(var e=at(),s=r.length,a=0;a<s;a++){var l=r[a],i=l.f;i&R||!e&&l===o||(E(l,n),i&(p|x)&&(i&m?yt(l,b):z(l)))}}const jn=1,Bn=2,Un=16,Vn=1,Gn=2,Kn=4,$n=8,Zn=16,zn=1,Jn=2,Wn=4,Xn=1,Qn=2,sn="[",an="[!",ln="]",Tt={},tr=Symbol();function wt(t){console.warn("hydration_mismatch")}let S=!1;function nr(t){S=t}let d;function L(t){if(t===null)throw wt(),Tt;return d=t}function rr(){return L(N(d))}function er(t){if(S){if(N(d)!==null)throw wt(),Tt;d=t}}function sr(t=1){if(S){for(var n=t,r=d;n--;)r=N(r);d=r}}function ar(){for(var t=0,n=d;;){if(n.nodeType===8){var r=n.data;if(r===ln){if(t===0)return n;t-=1}else(r===sn||r===an)&&(t+=1)}var e=N(n);n.remove(),n=e}}var it,on,mt,At;function lr(){if(it===void 0){it=window,on=document;var t=Element.prototype,n=Node.prototype;mt=ot(n,"firstChild").get,At=ot(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function J(t=""){return document.createTextNode(t)}function W(t){return mt.call(t)}function N(t){return At.call(t)}function or(t,n){if(!S)return W(t);var r=W(d);if(r===null)r=d.appendChild(J());else if(n&&r.nodeType!==3){var e=J();return r==null||r.before(e),L(e),e}return L(r),r}function ur(t,n){if(!S){var r=W(t);return r instanceof Comment&&r.data===""?N(r):r}return d}function ir(t,n=1,r=!1){let e=S?d:t;for(;n--;)e=N(e);if(!S)return e;var s=e.nodeType;if(r&&s!==3){var a=J();return e==null||e.before(a),L(a),a}return L(e),e}function fr(t){t.textContent=""}function un(t){var n=m|R;o===null?n|=x:o.f|=pt;const r={children:null,ctx:f,deps:null,equals:ht,f:n,fn:t,reactions:null,v:null,version:0,parent:o};if(u!==null&&u.f&m){var e=u;(e.children??(e.children=[])).push(r)}return r}function _r(t){const n=un(t);return n.equals=dt,n}function It(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&m?rt(e):P(e)}}}function Rt(t){var n,r=o;$(t.parent);try{It(t),n=Mt(t)}finally{$(r)}return n}function Ot(t){var n=Rt(t),r=(g||t.f&x)&&t.deps!==null?b:p;E(t,r),t.equals(n)||(t.v=n,t.version=Lt())}function rt(t){It(t),H(t,0),E(t,j),t.v=t.children=t.deps=t.ctx=t.reactions=null}function St(t){o===null&&u===null&&Wt(),u!==null&&u.f&x&&Jt(),st&&zt()}function fn(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function F(t,n,r,e=!0){var s=(t&Z)!==0,a=o,l={ctx:f,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|R,first:null,fn:n,last:null,next:null,parent:s?null:a,prev:null,teardown:null,transitions:null,version:0};if(r){var i=D;try{ft(!0),B(l),l.f|=Kt}catch(c){throw P(l),c}finally{ft(i)}}else n!==null&&z(l);var w=r&&l.deps===null&&l.first===null&&l.nodes_start===null&&l.teardown===null&&(l.f&pt)===0;if(!w&&!s&&e&&(a!==null&&fn(l,a),u!==null&&u.f&m)){var A=u;(A.children??(A.children=[])).push(l)}return l}function cr(t){const n=F(Y,null,!1);return E(n,p),n.teardown=t,n}function vr(t){St();var n=o!==null&&(o.f&T)!==0&&f!==null&&!f.m;if(n){var r=f;(r.e??(r.e=[])).push({fn:t,effect:o,reaction:u})}else{var e=xt(t);return e}}function pr(t){return St(),et(t)}function hr(t){const n=F(Z,t,!0);return()=>{P(n)}}function xt(t){return F(ct,t,!1)}function dr(t,n){var r=f,e={effect:null,ran:!1};r.l.r1.push(e),e.effect=et(()=>{t(),!e.ran&&(e.ran=!0,rn(r.l.r2,!0),In(n))})}function Er(){var t=f;et(()=>{if(An(t.l.r2)){for(var n of t.l.r1){var r=n.effect;r.f&p&&E(r,b),q(r)&&B(r),n.ran=!1}t.l.r2.v=!1}})}function et(t){return F(Y,t,!0)}function yr(t){return _n(t)}function _n(t,n=0){return F(Y|tt|n,t,!0)}function Tr(t,n=!0){return F(Y|T,t,!0,n)}function Nt(t){var n=t.teardown;if(n!==null){const r=st,e=u;_t(!0),K(null);try{n.call(null)}finally{_t(r),K(e)}}}function gt(t){var n=t.deriveds;if(n!==null){t.deriveds=null;for(var r=0;r<n.length;r+=1)rt(n[r])}}function Dt(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;P(r,n),r=e}}function cn(t){for(var n=t.first;n!==null;){var r=n.next;n.f&T||P(n),n=r}}function P(t,n=!0){var r=!1;if((n||t.f&$t)&&t.nodes_start!==null){for(var e=t.nodes_start,s=t.nodes_end;e!==null;){var a=e===s?null:N(e);e.remove(),e=a}r=!0}gt(t),Dt(t,n&&!r),H(t,0),E(t,j);var l=t.transitions;if(l!==null)for(const w of l)w.stop();Nt(t);var i=t.parent;i!==null&&i.first!==null&&kt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.parent=t.fn=t.nodes_start=t.nodes_end=null}function kt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function wr(t,n){var r=[];Ct(t,r,!0),vn(r,()=>{P(t),n&&n()})}function vn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var s of t)s.out(e)}else n()}function Ct(t,n,r){if(!(t.f&C)){if(t.f^=C,t.transitions!==null)for(const l of t.transitions)(l.is_global||r)&&n.push(l);for(var e=t.first;e!==null;){var s=e.next,a=(e.f&vt)!==0||(e.f&T)!==0;Ct(e,n,a?r:!1),e=s}}}function mr(t){bt(t,!0)}function bt(t,n){if(t.f&C){t.f^=C,q(t)&&B(t);for(var r=t.first;r!==null;){var e=r.next,s=(r.f&vt)!==0||(r.f&T)!==0;bt(r,s?n:!1),r=e}if(t.transitions!==null)for(const a of t.transitions)(a.is_global||n)&&a.in()}}let G=!1,X=[];function Ft(){G=!1;const t=X.slice();X=[],Gt(t)}function Ar(t){G||(G=!0,queueMicrotask(Ft)),X.push(t)}function pn(){G&&Ft()}const Pt=0,hn=1;let U=Pt,M=!1,D=!1,st=!1;function ft(t){D=t}function _t(t){st=t}let O=[],k=0;let u=null;function K(t){u=t}let o=null;function $(t){o=t}let y=null;function dn(t){y=t}let _=null,h=0,I=null;function En(t){I=t}let qt=0,g=!1,f=null;function Lt(){return++qt}function at(){return f!==null&&f.l===null}function q(t){var l,i;var n=t.f;if(n&R)return!0;if(n&b){var r=t.deps,e=(n&x)!==0;if(r!==null){var s;if(n&V){for(s=0;s<r.length;s++)((l=r[s]).reactions??(l.reactions=[])).push(t);t.f^=V}for(s=0;s<r.length;s++){var a=r[s];if(q(a)&&Ot(a),e&&o!==null&&!g&&!((i=a==null?void 0:a.reactions)!=null&&i.includes(t))&&(a.reactions??(a.reactions=[])).push(t),a.version>t.version)return!0}}e||E(t,p)}return!1}function yn(t,n,r){throw t}function Mt(t){var lt;var n=_,r=h,e=I,s=u,a=g,l=y,i=f,w=t.f;_=null,h=0,I=null,u=w&(T|Z)?null:t,g=!D&&(w&x)!==0,y=null,f=t.ctx;try{var A=(0,t.fn)(),c=t.deps;if(_!==null){var v;if(H(t,h),c!==null&&h>0)for(c.length=h+_.length,v=0;v<_.length;v++)c[h+v]=_[v];else t.deps=c=_;if(!g)for(v=h;v<c.length;v++)((lt=c[v]).reactions??(lt.reactions=[])).push(t)}else c!==null&&h<c.length&&(H(t,h),c.length=h);return A}finally{_=n,h=r,I=e,u=s,g=a,y=l,f=i}}function Tn(t,n){let r=n.reactions;if(r!==null){var e=r.indexOf(t);if(e!==-1){var s=r.length-1;s===0?r=n.reactions=null:(r[e]=r[s],r.pop())}}r===null&&n.f&m&&(_===null||!_.includes(n))&&(E(n,b),n.f&(x|V)||(n.f^=V),H(n,0))}function H(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)Tn(t,r[e])}function B(t){var n=t.f;if(!(n&j)){E(t,p);var r=o;o=t;try{gt(t),n&tt?cn(t):Dt(t),Nt(t);var e=Mt(t);t.teardown=typeof e=="function"?e:null,t.version=qt}catch(s){yn(s)}finally{o=r}}}function Ht(){k>1e3&&(k=0,Xt()),k++}function Yt(t){var n=t.length;if(n!==0){Ht();var r=D;D=!0;try{for(var e=0;e<n;e++){var s=t[e];s.f&p||(s.f^=p);var a=[];jt(s,a),wn(a)}}finally{D=r}}}function wn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];!(e.f&(j|C))&&q(e)&&(B(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?kt(e):e.fn=null))}}function mn(){if(M=!1,k>1001)return;const t=O;O=[],Yt(t),M||(k=0)}function z(t){U===Pt&&(M||(M=!0,queueMicrotask(mn)));for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(Z|T)){if(!(r&p))return;n.f^=p}}O.push(n)}function jt(t,n){var r=t.first,e=[];t:for(;r!==null;){var s=r.f,a=(s&T)!==0,l=a&&(s&p)!==0;if(!l&&!(s&C))if(s&Y){a?r.f^=p:q(r)&&B(r);var i=r.first;if(i!==null){r=i;continue}}else s&ct&&e.push(r);var w=r.next;if(w===null){let v=r.parent;for(;v!==null;){if(t===v)break t;var A=v.next;if(A!==null){r=A;continue t}v=v.parent}}r=w}for(var c=0;c<e.length;c++)i=e[c],n.push(i),jt(i,n)}function Bt(t){var n=U,r=O;try{Ht();const s=[];U=hn,O=s,M=!1,Yt(r);var e=t==null?void 0:t();return pn(),(O.length>0||s.length>0)&&Bt(),k=0,e}finally{U=n,O=r}}async function Ir(){await Promise.resolve(),Bt()}function An(t){var i;var n=t.f,r=(n&m)!==0;if(r&&n&j){var e=Rt(t);return rt(t),e}if(u!==null){y!==null&&y.includes(t)&&Qt();var s=u.deps;_===null&&s!==null&&s[h]===t?h++:_===null?_=[t]:_.push(t),I!==null&&o!==null&&o.f&p&&!(o.f&T)&&I.includes(t)&&(E(o,R),z(o))}else if(r&&t.deps===null){var a=t,l=a.parent;l!==null&&!((i=l.deriveds)!=null&&i.includes(a))&&(l.deriveds??(l.deriveds=[])).push(a)}return r&&(a=t,q(a)&&Ot(a)),t.v}function In(t){const n=u;try{return u=null,t()}finally{u=n}}const Rn=~(R|b|p);function E(t,n){t.f=t.f&Rn|n}function Rr(t,n=!1,r){f={p:f,c:null,e:null,m:!1,s:t,x:null,l:null},n||(f.l={s:null,u:null,r1:[],r2:nt(!1)})}function Or(t){const n=f;if(n!==null){const l=n.e;if(l!==null){var r=o,e=u;n.e=null;try{for(var s=0;s<l.length;s++){var a=l[s];$(a.effect),K(a.reaction),xt(a.fn)}}finally{$(r),K(e)}}f=n.p,n.m=!0}return{}}function Sr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(ut in t)Q(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&ut in r&&Q(r)}}}function Q(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{Q(t[e],n)}catch{}const r=Vt(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Ut(r);for(let s in e){const a=e[s].get;if(a)try{a.call(t)}catch{}}}}}export{on as $,Zn as A,T as B,nn as C,j as D,pr as E,vr as F,f as G,Cn as H,Gt as I,Sr as J,cr as K,bn as L,kn as M,S as N,Vt as O,Kn as P,Ut as Q,Z as R,ut as S,Fn as T,rr as U,_n as V,On as W,Sn as X,an as Y,ar as Z,L as _,Or as a,nr as a0,d as a1,mr as a2,Tr as a3,wr as a4,C as a5,en as a6,jn as a7,Un as a8,nt as a9,Ir as aA,K as aB,$t as aC,Xn as aD,Qn as aE,it as aF,tt as aG,Kt as aH,zn as aI,Dn as aJ,Jn as aK,Wn as aL,Zt as aM,Bn as aa,Ct as ab,fr as ac,vn as ad,P as ae,ln as af,N as ag,lr as ah,W as ai,sn as aj,Tt as ak,wt as al,Pn as am,hr as an,J as ao,Nn as ap,gn as aq,Ln as ar,tr as as,Mn as at,vt as au,dr as av,Er as aw,Yn as ax,Bt as ay,xn as az,er as b,or as c,rn as d,xt as e,ur as f,An as g,Hn as h,ot as i,qn as j,dt as k,$ as l,Vn as m,sr as n,Gn as o,Rr as p,Ar as q,et as r,ir as s,yr as t,In as u,$n as v,un as w,_r as x,u as y,o as z};
