import{S as ne,i as ae,s as se,a as w,l as m,r as d,K as oe,h as t,c as M,m as c,n as y,u as v,q as A,p as le,b as o,G as f,Q as X,Z as Y,v as g,M as re,N as ee,T as fe}from"../../../chunks/index-cac77216.js";import{f as te}from"../../../chunks/index-54fd7bcd.js";function ue(i){let x,a,b,R,l,E,_,I,j,p,s,r,u,B,q,J,k,z,S,L,D,O,$,K,h,C,F,G,P,H,U;return{c(){x=w(),a=m("div"),b=m("p"),R=d(`
Object Monads`),E=w(),_=m("br"),I=m("br"),j=w(),p=m("form"),s=m("input"),r=w(),u=m("h3"),B=d("ret("),q=d(i[0]),J=d(").bnd(=>ret(x**3)).bnd(x=>ret(x*2)).bnd(x=>ret(x-12)).x = "),k=d(i[1]),z=w(),S=m("p"),L=d('In this example, Monad returns simple objects I call "monads". Each monad "m" has two components: "x" can be any JavaScript value and "bnd" is a method that operates on functions. Let m = new Monad(v), then m.x = v and m.bnd(func) for some function func returns a monad "m2", which can be anonymous, whose components are func(v) and the method "bnd". m2.bnd(func2) for some function "func2" returns a monad with components func2(func(v)) and bnd().'),D=w(),O=m("p"),$=d("The interactive example above shows a"),K=w(),h=m("pre"),C=d(""),F=d(i[4]),G=d(`
`),this.h()},l(e){oe('[data-svelte="svelte-1qlbf6k"]',document.head).forEach(t),x=M(e),a=c(e,"DIV",{style:!0});var Q=y(a);b=c(Q,"P",{}),y(b).forEach(t),R=v(Q,`
Object Monads`),Q.forEach(t),E=M(e),_=c(e,"BR",{}),I=c(e,"BR",{}),j=M(e),p=c(e,"FORM",{});var V=y(p);s=c(V,"INPUT",{type:!0}),V.forEach(t),r=M(e),u=c(e,"H3",{});var T=y(u);B=v(T,"ret("),q=v(T,i[0]),J=v(T,").bnd(=>ret(x**3)).bnd(x=>ret(x*2)).bnd(x=>ret(x-12)).x = "),k=v(T,i[1]),T.forEach(t),z=M(e),S=c(e,"P",{});var Z=y(S);L=v(Z,'In this example, Monad returns simple objects I call "monads". Each monad "m" has two components: "x" can be any JavaScript value and "bnd" is a method that operates on functions. Let m = new Monad(v), then m.x = v and m.bnd(func) for some function func returns a monad "m2", which can be anonymous, whose components are func(v) and the method "bnd". m2.bnd(func2) for some function "func2" returns a monad with components func2(func(v)) and bnd().'),Z.forEach(t),D=M(e),O=c(e,"P",{});var W=y(O);$=v(W,"The interactive example above shows a"),W.forEach(t),K=M(e),h=c(e,"PRE",{});var N=y(h);C=v(N,""),F=v(N,i[4]),G=v(N,`
`),N.forEach(t),this.h()},h(){document.title="Objects",A(a,"font-family","Times New Roman"),A(a,"text-align","center"),A(a,"color","#0000AA"),A(a,"font-size","38px"),le(s,"type","text")},m(e,n){o(e,x,n),o(e,a,n),f(a,b),f(a,R),o(e,E,n),o(e,_,n),o(e,I,n),o(e,j,n),o(e,p,n),f(p,s),o(e,r,n),o(e,u,n),f(u,B),f(u,q),f(u,J),f(u,k),o(e,z,n),o(e,S,n),f(S,L),o(e,D,n),o(e,O,n),f(O,$),o(e,K,n),o(e,h,n),f(h,C),f(h,F),f(h,G),P=!0,H||(U=[X(s,"keyup",Y(i[3])),X(p,"submit",Y(i[2]))],H=!0)},p(e,[n]){(!P||n&1)&&g(q,e[0]),(!P||n&2)&&g(k,e[1])},i(e){P||(re(()=>{l||(l=ee(a,te,{},!0)),l.run(1)}),P=!0)},o(e){l||(l=ee(a,te,{},!1)),l.run(0),P=!1},d(e){e&&t(x),e&&t(a),e&&l&&l.end(),e&&t(E),e&&t(_),e&&t(I),e&&t(j),e&&t(p),e&&t(r),e&&t(u),e&&t(z),e&&t(S),e&&t(D),e&&t(O),e&&t(K),e&&t(h),H=!1,fe(U)}}}function ie(i,x,a){let b=3;var R=function s(r=0){this.x=r,this.bnd=function(u){return new s(u(this.x).x)}};function l(s){return new R(s)}var E=s=>l(s).bnd(r=>l(r**3)).bnd(r=>l(r*2)).bnd(r=>l(r-12)).x;let _=42;const I=()=>{},j=s=>{if(s.code=="Enter")return s.preventDefault(),a(0,b=parseInt(s.target.value,10)),a(1,_=E(b)),s.target.value=null,!1};var p=`
var Monad = function Monad(z = 0) {
  var _this = this;
  this.x = z;
  this.bnd = function (func) {
    return new Monad(func(this.x).x);
  };
}

function ret (v) { 
  return new Monad(v);
} 
    
var foo = v => ret(v).bnd(x => ret(x**3)).bnd(x => ret(x*2)).bnd(x=>ret(x-12)).x;
let val = 3;


let value = 42
let submit = false
let vv = 3;
	
const handleSubmit = () => {
  submit = true
}
	
const handleKeyup = () => {
  submit = false
  if (event.code == 'Enter') {
    event.preventDefault()
    vv = parseInt(event.target.value, 10);
    value = foo(vv);
    return false
  }
}  `;return[b,_,I,j,p]}class ce extends ne{constructor(x){super(),ae(this,x,ie,ue,se,{})}}export{ce as default};
