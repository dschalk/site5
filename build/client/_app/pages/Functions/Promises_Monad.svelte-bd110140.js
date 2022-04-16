import{S as Fe,i as Je,s as Qe,k as f,e as i,t as c,Q as ze,d as s,m as u,c as n,a as h,h as m,f as Q,b as _,g as r,G as p,L as Ke,K as Ue,M as Xe,N as Le,v as Ye,O as je}from"../../chunks/vendor-a263fa63.js";function Ze(E){let M,d,V,v,x,O,W,o,F,a,l,k,y,N,P,b,T,w,$,J,z,D,K,G,pe,U,L,he,X,Y,Z,H,de,g,R,ve,ee,A,be,se,B,ke,te,I,we,re,q,ye,C,_e,oe,ae,le,ie,ne,j,Oe,fe,S,We,ue,Ee,Se;return{c(){M=f(),d=i("div"),V=c("Asynchronous Information Handling"),x=f(),O=i("br"),W=f(),o=i("h1"),F=c(me),a=c(" and "),l=c(E[0]),k=f(),y=i("p"),N=c("Clicking the button below fetches three quasi-random integers from the Haskell WebSockets server which are then sent to a Web Worker. The Worker returns the prime factors of the number."),P=f(),b=i("h1"),T=c(me),w=f(),$=i("div"),J=c("The WebSockets server sent these numbers (now at O.c0, O.c1, and O.c2);"),z=f(),D=i("div"),K=f(),G=i("h1"),pe=c(E[0]),U=f(),L=i("span"),he=c("Click this:"),X=f(),Y=i("br"),Z=f(),H=i("button"),de=c(E[2]),g=f(),R=i("p"),ve=c("In this demonstration, Monad() returns a function run() that returns a function f(). f() takes two arguments and calls run(a,b). run makes the assignment O[a1] = b, O[a2] =b, or O[a3] = b on the global object O, and returns f(). The cycle is repeated whenever f() encounters more arguments."),ee=f(),A=i("p"),be=c("Functions that cause side effects during execution can cause hard-to-find bugs. There is, however, no danger of that occurring here. This module is small, run() is the only function that modifies O, and there are no functions in the script that fetch data from O. O exists for the sole purpose of keeping browser displays refreshed when data arrives from the WebSockets server and the Web Worker. Svelte's built-in reactivity keeps the HTML page in sync with O."),se=f(),B=i("p"),ke=c(`Here's the definition of "Monad" used in this module:`),te=f(),I=i("p"),we=c('Messages are sent to the Haskell WebSockets server requesting pseudo-random numbers between 1 and the integer specified at the end of the request. On the server, randomR from the System.Random library produces a number that is sent to the browser with the prefix "BE#$42". Messages from the server are parsed in socket.onmessage. If the prefix is "BE#$42", mon(p) executes, where p is the payload (a number) and mon is defined by "mon = Monad()". mon sends p to worker_OO, which sends back the prime decomposition of p.'),re=f(),q=i("p"),ye=c(`mon(m) then executes, where m is an array co from the web worker are processed in worker_OO.onmessag
`),C=i("p"),_e=c("When M === 2 the process is complete. M and N are set to -1 and lock is set to false, allowing another possible call to random() to call rand()."),oe=f(),ae=i("br"),le=f(),ie=i("br"),ne=f(),j=i("span"),Oe=c("The code for this Svelte application is at"),fe=f(),S=i("a"),We=c("GitHub repository"),this.h()},l(e){ze('[data-svelte="svelte-1b99mu4"]',document.head).forEach(s),M=u(e),d=n(e,"DIV",{style:!0});var Me=h(d);V=m(Me,"Asynchronous Information Handling"),Me.forEach(s),x=u(e),O=n(e,"BR",{}),W=u(e),o=n(e,"H1",{});var ce=h(o);F=m(ce,me),a=m(ce," and "),l=m(ce,E[0]),ce.forEach(s),k=u(e),y=n(e,"P",{class:!0});var Te=h(y);N=m(Te,"Clicking the button below fetches three quasi-random integers from the Haskell WebSockets server which are then sent to a Web Worker. The Worker returns the prime factors of the number."),Te.forEach(s),P=u(e),b=n(e,"H1",{});var $e=h(b);T=m($e,me),$e.forEach(s),w=u(e),$=n(e,"DIV",{});var He=h($);J=m(He,"The WebSockets server sent these numbers (now at O.c0, O.c1, and O.c2);"),He.forEach(s),z=u(e),D=n(e,"DIV",{style:!0});var Ve=h(D);Ve.forEach(s),K=u(e),G=n(e,"H1",{});var xe=h(G);pe=m(xe,E[0]),xe.forEach(s),U=u(e),L=n(e,"SPAN",{});var Ne=h(L);he=m(Ne,"Click this:"),Ne.forEach(s),X=u(e),Y=n(e,"BR",{}),Z=u(e),H=n(e,"BUTTON",{class:!0});var Pe=h(H);de=m(Pe,E[2]),Pe.forEach(s),g=u(e),R=n(e,"P",{class:!0});var Re=h(R);ve=m(Re,"In this demonstration, Monad() returns a function run() that returns a function f(). f() takes two arguments and calls run(a,b). run makes the assignment O[a1] = b, O[a2] =b, or O[a3] = b on the global object O, and returns f(). The cycle is repeated whenever f() encounters more arguments."),Re.forEach(s),ee=u(e),A=n(e,"P",{class:!0});var Ae=h(A);be=m(Ae,"Functions that cause side effects during execution can cause hard-to-find bugs. There is, however, no danger of that occurring here. This module is small, run() is the only function that modifies O, and there are no functions in the script that fetch data from O. O exists for the sole purpose of keeping browser displays refreshed when data arrives from the WebSockets server and the Web Worker. Svelte's built-in reactivity keeps the HTML page in sync with O."),Ae.forEach(s),se=u(e),B=n(e,"P",{class:!0});var Be=h(B);ke=m(Be,`Here's the definition of "Monad" used in this module:`),Be.forEach(s),te=u(e),I=n(e,"P",{class:!0});var Ie=h(I);we=m(Ie,'Messages are sent to the Haskell WebSockets server requesting pseudo-random numbers between 1 and the integer specified at the end of the request. On the server, randomR from the System.Random library produces a number that is sent to the browser with the prefix "BE#$42". Messages from the server are parsed in socket.onmessage. If the prefix is "BE#$42", mon(p) executes, where p is the payload (a number) and mon is defined by "mon = Monad()". mon sends p to worker_OO, which sends back the prime decomposition of p.'),Ie.forEach(s),re=u(e),q=n(e,"P",{class:!0});var qe=h(q);ye=m(qe,`mon(m) then executes, where m is an array co from the web worker are processed in worker_OO.onmessag
`),qe.forEach(s),C=n(e,"P",{class:!0});var Ce=h(C);_e=m(Ce,"When M === 2 the process is complete. M and N are set to -1 and lock is set to false, allowing another possible call to random() to call rand()."),Ce.forEach(s),oe=u(e),ae=n(e,"BR",{}),le=u(e),ie=n(e,"BR",{}),ne=u(e),j=n(e,"SPAN",{});var De=h(j);Oe=m(De,"The code for this Svelte application is at"),De.forEach(s),fe=u(e),S=n(e,"A",{href:!0,target:!0,class:!0});var Ge=h(S);We=m(Ge,"GitHub repository"),Ge.forEach(s),this.h()},h(){document.title="Async",Q(d,"font-family","Times New Roman"),Q(d,"text-align","center"),Q(d,"color","yellow"),Q(d,"font-size","38px"),_(y,"class","svelte-euyywb"),Q(D,"color","red"),_(H,"class","svelte-euyywb"),_(R,"class","svelte-euyywb"),_(A,"class","svelte-euyywb"),_(B,"class","svelte-euyywb"),_(I,"class","svelte-euyywb"),_(q,"class","svelte-euyywb"),_(C,"class","svelte-euyywb"),_(S,"href","https://github.com/dschalk/blog/"),_(S,"target","_blank"),_(S,"class","svelte-euyywb")},m(e,t){r(e,M,t),r(e,d,t),p(d,V),r(e,x,t),r(e,O,t),r(e,W,t),r(e,o,t),p(o,F),p(o,a),p(o,l),r(e,k,t),r(e,y,t),p(y,N),r(e,P,t),r(e,b,t),p(b,T),r(e,w,t),r(e,$,t),p($,J),r(e,z,t),r(e,D,t),r(e,K,t),r(e,G,t),p(G,pe),r(e,U,t),r(e,L,t),p(L,he),r(e,X,t),r(e,Y,t),r(e,Z,t),r(e,H,t),p(H,de),r(e,g,t),r(e,R,t),p(R,ve),r(e,ee,t),r(e,A,t),p(A,be),r(e,se,t),r(e,B,t),p(B,ke),r(e,te,t),r(e,I,t),p(I,we),r(e,re,t),r(e,q,t),p(q,ye),r(e,C,t),p(C,_e),r(e,oe,t),r(e,ae,t),r(e,le,t),r(e,ie,t),r(e,ne,t),r(e,j,t),p(j,Oe),r(e,fe,t),r(e,S,t),p(S,We),ue=!0,Ee||(Se=Ke(H,"click",E[1]),Ee=!0)},p:Ue,i(e){ue||(Xe(()=>{v||(v=Le(d,je,{},!0)),v.run(1)}),ue=!0)},o(e){v||(v=Le(d,je,{},!1)),v.run(0),ue=!1},d(e){e&&s(M),e&&s(d),e&&v&&v.end(),e&&s(x),e&&s(O),e&&s(W),e&&s(o),e&&s(k),e&&s(y),e&&s(P),e&&s(b),e&&s(w),e&&s($),e&&s(z),e&&s(D),e&&s(K),e&&s(G),e&&s(U),e&&s(L),e&&s(X),e&&s(Y),e&&s(Z),e&&s(H),e&&s(g),e&&s(R),e&&s(ee),e&&s(A),e&&s(se),e&&s(B),e&&s(te),e&&s(I),e&&s(re),e&&s(q),e&&s(C),e&&s(oe),e&&s(ae),e&&s(le),e&&s(ie),e&&s(ne),e&&s(j),e&&s(fe),e&&s(S),Ee=!1,Se()}}}var me=7;function ge(E){var M={b0:1,b1:2,b2:3},d=function(){return"DOG, CAT, DOG"},V="Hello";return Ye(()=>{var v=new Worker("../../lib/worker.js");console.log("worker is ",v),v.postMessage(1e4),v.onmessage=a=>{console.log("$$$$$$$$$$$$  worker event is ",a);var l=a.data[0],k=a.data[1];a.data[1].length>1?mon("d",`The prime factors of ${l} are ${k}.`):mon("d",`${a.data[0]} is a prime number.`),mon("b",a.data[1])};var x=new WebSocket("wss://schalk.site:3002");x.onclose=function(a){console.log("<><><> ALERT - socket2 is closing. <><><> ",a)};var O=new WebSocket("wss://schalk.site:3003");O.onclose=function(a){console.log("<><><> ALERT - socket3 is closing. <><><> ",a)},x.onmessage=function(a){console.log("WebSocket message is",JSON.parse(a.data));var l=a.data;console.log("v and v[3] are ",l,l[3]),W=W+1,o["c"+W]=l[3],O.send(1e5),W===2&&(W=-1),F("c",l[3]),O.send(l[3])},O.onmessage=function(a){console.log("socket3 message is",JSON.parse(a.data));var l=a.data;console.log("v and v[3] are ",l,l[3]),o=o+1,o["c"+o]=l[3]};var W=-1,o={};o=o,o.b0=o.b1=o.b2=[3,3,3,3],o.c0=o.c1=o.c2=[2,4,6,8],o.d0=o.d1=o.d2=[2,2,2,2,2,2];function F(){var a=-1,l=-1,k=-1,y="start",N=0;function P(b,T){if(b==="b"){a=a+1;let w=b+a;o[w]=T,console.log("************************O[v] is **********************",o[w])}if(b==="c"){l=l+1;let w=b+l.toString();o[w]=T,O.send(T)}if(b==="d"){k=k+1;let w=b+k;o[w]=T}return a===2&&(a=-1),l===2&&(l=-1),k===2&&(k=-1),function($,J){return y=$,N=J,P(y,N)}}return P(y,N)}console.log("O is",o)}),[M,d,V]}class ss extends Fe{constructor(M){super();Je(this,M,ge,Ze,Qe,{})}}export{ss as default};
