import{S as ne,i as ae,s as se,k as w,e as d,t as m,Q as oe,d as t,m as M,c,a as y,h as v,f as A,b as le,g as o,G as f,L as Y,U as Z,j as g,M as re,N as ee,T as fe,O as te}from"../../chunks/vendor-a263fa63.js";function ue(i){let x,a,b,R,l,E,_,I,j,p,s,r,u,B,k,J,q,z,O,K,D,S,U,L,h,$,C,F,P,G,Q;return{c(){x=w(),a=d("div"),b=d("p"),R=m(`
Object Monads`),E=w(),_=d("br"),I=d("br"),j=w(),p=d("form"),s=d("input"),r=w(),u=d("h3"),B=m("ret("),k=m(i[0]),J=m(").bnd(=>ret(x**3)).bnd(x=>ret(x*2)).bnd(x=>ret(x-12)).x = "),q=m(i[1]),z=w(),O=d("p"),K=m('In this example, Monad returns simple objects I call "monads". Each monad "m" has two components: "x" can be any JavaScript value and "bnd" is a method that operates on functions. Let m = new Monad(v), then m.x = v and m.bnd(func) for some function func returns a monad "m2", which can be anonymous, whose components are func(v) and the method "bnd". m2.bnd(func2) for some function "func2" returns a monad with components func2(func(v)) and bnd().'),D=w(),S=d("p"),U=m("The interactive example above shows a"),L=w(),h=d("pre"),$=m(`
`),C=m(i[4]),F=m(`
`),this.h()},l(e){oe('[data-svelte="svelte-1qlbf6k"]',document.head).forEach(t),x=M(e),a=c(e,"DIV",{style:!0});var H=y(a);b=c(H,"P",{}),y(b).forEach(t),R=v(H,`
Object Monads`),H.forEach(t),E=M(e),_=c(e,"BR",{}),I=c(e,"BR",{}),j=M(e),p=c(e,"FORM",{});var V=y(p);s=c(V,"INPUT",{type:!0}),V.forEach(t),r=M(e),u=c(e,"H3",{});var T=y(u);B=v(T,"ret("),k=v(T,i[0]),J=v(T,").bnd(=>ret(x**3)).bnd(x=>ret(x*2)).bnd(x=>ret(x-12)).x = "),q=v(T,i[1]),T.forEach(t),z=M(e),O=c(e,"P",{});var W=y(O);K=v(W,'In this example, Monad returns simple objects I call "monads". Each monad "m" has two components: "x" can be any JavaScript value and "bnd" is a method that operates on functions. Let m = new Monad(v), then m.x = v and m.bnd(func) for some function func returns a monad "m2", which can be anonymous, whose components are func(v) and the method "bnd". m2.bnd(func2) for some function "func2" returns a monad with components func2(func(v)) and bnd().'),W.forEach(t),D=M(e),S=c(e,"P",{});var X=y(S);U=v(X,"The interactive example above shows a"),X.forEach(t),L=M(e),h=c(e,"PRE",{});var N=y(h);$=v(N,`
`),C=v(N,i[4]),F=v(N,`
`),N.forEach(t),this.h()},h(){document.title="Objects",A(a,"font-family","Times New Roman"),A(a,"text-align","center"),A(a,"color","#0000AA"),A(a,"font-size","38px"),le(s,"type","text")},m(e,n){o(e,x,n),o(e,a,n),f(a,b),f(a,R),o(e,E,n),o(e,_,n),o(e,I,n),o(e,j,n),o(e,p,n),f(p,s),o(e,r,n),o(e,u,n),f(u,B),f(u,k),f(u,J),f(u,q),o(e,z,n),o(e,O,n),f(O,K),o(e,D,n),o(e,S,n),f(S,U),o(e,L,n),o(e,h,n),f(h,$),f(h,C),f(h,F),P=!0,G||(Q=[Y(s,"keyup",Z(i[3])),Y(p,"submit",Z(i[2]))],G=!0)},p(e,[n]){(!P||n&1)&&g(k,e[0]),(!P||n&2)&&g(q,e[1])},i(e){P||(re(()=>{l||(l=ee(a,te,{},!0)),l.run(1)}),P=!0)},o(e){l||(l=ee(a,te,{},!1)),l.run(0),P=!1},d(e){e&&t(x),e&&t(a),e&&l&&l.end(),e&&t(E),e&&t(_),e&&t(I),e&&t(j),e&&t(p),e&&t(r),e&&t(u),e&&t(z),e&&t(O),e&&t(D),e&&t(S),e&&t(L),e&&t(h),G=!1,fe(Q)}}}function ie(i,x,a){let b=3;var R=function s(r=0){this.x=r,this.bnd=function(u){return new s(u(this.x).x)}};function l(s){return new R(s)}var E=s=>l(s).bnd(r=>l(r**3)).bnd(r=>l(r*2)).bnd(r=>l(r-12)).x;let _=42;const I=()=>{},j=s=>{if(s.code=="Enter")return s.preventDefault(),a(0,b=parseInt(s.target.value,10)),a(1,_=E(b)),s.target.value=null,!1};var p=`
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
}  `;return[b,_,I,j,p]}class me extends ne{constructor(x){super();ae(this,x,ie,ue,se,{})}}export{me as default};
