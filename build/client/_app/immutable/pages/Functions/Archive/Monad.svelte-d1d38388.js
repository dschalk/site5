import{S as we,i as xe,s as _e,a as i,l as r,r as m,K as Be,h as t,c as l,m as s,n as u,u as c,q as re,p as Me,b as a,G as f,E as Pe,M as Ae,N as ve}from"../../../chunks/index-cac77216.js";import{f as be}from"../../../chunks/index-54fd7bcd.js";function ke(p){let h,o,v,$,d,S,I,T,b,G,W,w,K,R,x,V,C,_,L,q,B,Q,H,M,X,J,P,Y,z,A,Z,D,k,g,j,y,ee,F,E,te,O,N,ne,U;return{c(){h=i(),o=r("div"),v=r("p"),$=m(`
BASIC MONAD`),S=i(),I=r("br"),T=i(),b=r("p"),G=m('Forcing JavaScript to adhere to strict typing rules probably helps large development teams speed up the process of getting large, complicated applications into production. It might also be soothing to people who feel secure in highly structured environments. But here, we let JavaScript shine with only a few, common-sense rules such as, "make the code easy for future maintainers to understand"  and "each global variable is to be altered by no more than one function."'),W=i(),w=r("p"),K=m("That doesn't mean there is a dearth of variety. As you will see in later modules, there's a monad that handles data from a WebSocket server and a Web Worker, one that handles Promises, another that serves as a transducer, and so on."),R=i(),x=r("p"),V=m("Here's a basic design pattern; it's the definition of a very simple monad:"),C=i(),_=r("pre"),L=m(p[0]),q=i(),B=r("p"),Q=m(`"M()" returns "run()" which returns "f". M() holds the array ("ar") that can be augmented and manipulated by run(). If run() returns f() in front of a function, f()'s argument "func" (normally a function) is applied to run()'s argument, which is the return value of the previous "func" applied to the previous value of "x".`),H=i(),M=r("p"),X=m('Until the last function ("func") in a chain evaluates the return value of the most recent "func(x)", recursion is automatic. The array "ar" grows during each cycle in which func(x) does not return null, NaN, or undefined. Whenever func === "end", ar is returned, but that does not end a chain of computations. As shown below, ar can be used in computations.'),J=i(),P=r("pre"),Y=m(p[1]),z=i(),A=r("p"),Z=m('Note that both "mon = M([3])" and "mon = M()(()=>3)" have the same effect. They initialize the closure array making "ar === [3]" true.'),D=i(),k=r("p"),g=m('Now I think the Promises monad will be easier to understand. It follows the same basic pattern with a new name for "M": Mona() returns run(), and run returns f(). The array that was previously held in "M()" is now stored externally in objects A and B; more precisely, in A[sym1], A[sym2], A[sym3], B[sym1], B[sym2], and B[sym3] where sym1, sym2, and sym3 are symbols. The Promises module features branching and resuming chains and a global lock named "lok" to prevent A and B from clashing. Check it out:'),j=i(),y=r("a"),ee=m("Promises Monad"),F=i(),E=r("p"),te=m("Here are some definitions:"),O=i(),N=r("pre"),ne=m(p[2]),this.h()},l(e){Be('[data-svelte="svelte-8g96sv"]',document.head).forEach(t),h=l(e),o=s(e,"DIV",{style:!0});var ae=u(o);v=s(ae,"P",{}),u(v).forEach(t),$=c(ae,`
BASIC MONAD`),ae.forEach(t),S=l(e),I=s(e,"BR",{}),T=l(e),b=s(e,"P",{});var se=u(b);G=c(se,'Forcing JavaScript to adhere to strict typing rules probably helps large development teams speed up the process of getting large, complicated applications into production. It might also be soothing to people who feel secure in highly structured environments. But here, we let JavaScript shine with only a few, common-sense rules such as, "make the code easy for future maintainers to understand"  and "each global variable is to be altered by no more than one function."'),se.forEach(t),W=l(e),w=s(e,"P",{});var oe=u(w);K=c(oe,"That doesn't mean there is a dearth of variety. As you will see in later modules, there's a monad that handles data from a WebSocket server and a Web Worker, one that handles Promises, another that serves as a transducer, and so on."),oe.forEach(t),R=l(e),x=s(e,"P",{});var ie=u(x);V=c(ie,"Here's a basic design pattern; it's the definition of a very simple monad:"),ie.forEach(t),C=l(e),_=s(e,"PRE",{});var le=u(_);L=c(le,p[0]),le.forEach(t),q=l(e),B=s(e,"P",{});var ue=u(B);Q=c(ue,`"M()" returns "run()" which returns "f". M() holds the array ("ar") that can be augmented and manipulated by run(). If run() returns f() in front of a function, f()'s argument "func" (normally a function) is applied to run()'s argument, which is the return value of the previous "func" applied to the previous value of "x".`),ue.forEach(t),H=l(e),M=s(e,"P",{});var fe=u(M);X=c(fe,'Until the last function ("func") in a chain evaluates the return value of the most recent "func(x)", recursion is automatic. The array "ar" grows during each cycle in which func(x) does not return null, NaN, or undefined. Whenever func === "end", ar is returned, but that does not end a chain of computations. As shown below, ar can be used in computations.'),fe.forEach(t),J=l(e),P=s(e,"PRE",{});var me=u(P);Y=c(me,p[1]),me.forEach(t),z=l(e),A=s(e,"P",{});var ce=u(A);Z=c(ce,'Note that both "mon = M([3])" and "mon = M()(()=>3)" have the same effect. They initialize the closure array making "ar === [3]" true.'),ce.forEach(t),D=l(e),k=s(e,"P",{});var pe=u(k);g=c(pe,'Now I think the Promises monad will be easier to understand. It follows the same basic pattern with a new name for "M": Mona() returns run(), and run returns f(). The array that was previously held in "M()" is now stored externally in objects A and B; more precisely, in A[sym1], A[sym2], A[sym3], B[sym1], B[sym2], and B[sym3] where sym1, sym2, and sym3 are symbols. The Promises module features branching and resuming chains and a global lock named "lok" to prevent A and B from clashing. Check it out:'),pe.forEach(t),j=l(e),y=s(e,"A",{href:!0});var he=u(y);ee=c(he,"Promises Monad"),he.forEach(t),F=l(e),E=s(e,"P",{});var de=u(E);te=c(de,"Here are some definitions:"),de.forEach(t),O=l(e),N=s(e,"PRE",{});var ye=u(N);ne=c(ye,p[2]),ye.forEach(t),this.h()},h(){document.title="Basic Monad",re(o,"font-family","Times New Roman"),re(o,"text-align","center"),re(o,"font-size","38px"),Me(y,"href","http://blog.schalk.site/Monad3")},m(e,n){a(e,h,n),a(e,o,n),f(o,v),f(o,$),a(e,S,n),a(e,I,n),a(e,T,n),a(e,b,n),f(b,G),a(e,W,n),a(e,w,n),f(w,K),a(e,R,n),a(e,x,n),f(x,V),a(e,C,n),a(e,_,n),f(_,L),a(e,q,n),a(e,B,n),f(B,Q),a(e,H,n),a(e,M,n),f(M,X),a(e,J,n),a(e,P,n),f(P,Y),a(e,z,n),a(e,A,n),f(A,Z),a(e,D,n),a(e,k,n),f(k,g),a(e,j,n),a(e,y,n),f(y,ee),a(e,F,n),a(e,E,n),f(E,te),a(e,O,n),a(e,N,n),f(N,ne),U=!0},p:Pe,i(e){U||(Ae(()=>{d||(d=ve(o,be,{},!0)),d.run(1)}),U=!0)},o(e){d||(d=ve(o,be,{},!1)),d.run(0),U=!1},d(e){e&&t(h),e&&t(o),e&&d&&d.end(),e&&t(S),e&&t(I),e&&t(T),e&&t(b),e&&t(W),e&&t(w),e&&t(R),e&&t(x),e&&t(C),e&&t(_),e&&t(q),e&&t(B),e&&t(H),e&&t(M),e&&t(J),e&&t(P),e&&t(z),e&&t(A),e&&t(D),e&&t(k),e&&t(j),e&&t(y),e&&t(F),e&&t(E),e&&t(O),e&&t(N)}}}function Ee(p){var h=`function M (defaultArg = [])  {  
    var ar = defaultArg.slice(); // clones the argument
    return (function run (x) {
        if (typeof x !== "undefined") ar.push(x); 
        return function f (func) {
            if (func === "end") return ar.slice();
            else return run(func(x));
        };
    })(ar.pop());
}`,o=`mon = M();

var result = mon(()=>3)(x=>x*x*x)(x=>x*x)(x=>x/mon("end")[0]**2)
(Math.sqrt)(x=>mon("end")[1]+x)(x=>x+2*mon("end")[0])("end")

console.log(result)  // [3, 27, 729, 81, 9, 36, 42]`,v=`const sym1 = Symbol('sym1');
const sym2 = Symbol('sym2');
const sym3 = Symbol('sym3');

let B = {};
B[sym1] = [];
B[sym2] = [];
B[sym3] = [];

const  Mona = function Mona ( AR = [],  ar = "name" )  {  
  let p, run, f;
  B[ar] = AR.slice();
  return run = (function run (x) {
  if (x instanceof Promise) {x.then(y => {
    if (!( typeof y === "function" || y == lok || y == NaN || 
        typeof y == "undefined" ))   {B[ar] = B[ar].concat(y)}
    else if (typeof x !== "function" && x != lok  &&  typeof x !== "undefined"
       && x != NaN  && !(x instanceof Promise)) {B[ar] = B[ar].concat(x);
  }})}
    f = function f (func) {
      if (func === 'halt' || func === 'h' || func == undefined ||
        typeof func == "undefined" || func == NaN ) {
        B[ar] = B[ar]; 
        return B[ar].slice();
      }
      if (typeof func == "function" && x instanceof Promise) p = x.then(v => func(v))
      else if (typeof func != "function" && x instanceof Promise) p = x.then(v => v)
      else if (typeof func != "function") p = func
      else p = func(x);
      return run(p);
    };
    return f;
  })( B[ar].slice(-1)[0]);
}`;return[h,o,v]}class Ie extends we{constructor(h){super(),xe(this,h,Ee,ke,_e,{})}}export{Ie as default};
