import{S as pr,i as br,s as vr,e as s,k as f,t as m,L as cr,c as o,d as t,m as u,a as b,h as p,b as ne,f as y,G as n,g as i,M as k,j as Ui,N as yr,O as ar,P as dr,Q as mr}from"../../chunks/vendor-4e552e70.js";function kr(a){let d,v,h,M,F,ae,G,O,me,pe,I,V,P,w,R,J,Xe,B,be,S,Ye,ve,C,Ze,A,je,Le,ce,D,_,ze,K,Ct,qe,Q,Nt,Ge,$,Ft,Ve,g,Pt,Je,ee,St,Ke,te,At,Qe,U,Dt,le,ye=parseFloat(a[12](E)).toFixed(5).toString()+"",$e,ge,et,tt,H,Ut,lt,W,Ht,it,st,ot,rt,X,Wt,ft,r,c,x,de,Yt,ke,Wi,Zt,Ee,jt,Lt,zt,qt,he,Xi,Gt,we,Vt,Jt,Kt,Qt,_e,Yi,$t,Te,gt,el,tl,ll,ut,Zi,il,nt,ji,sl,at,Li,ol,N,zi,Xt=a[10](E).join(", ")+"",rl,qi,fl,ul,nl,al,Be,Gi,ml,Re,Vi,pl,Me,Ji,bl,Oe,Ki,vl,cl,yl,dl,kl,ie,Qi,mt,$i,gi,El,pt,es,hl,xe,ts,ls,wl,Y,is,_l,Z,ss,Tl,j,os,Bl,L,rs,Rl,z,fs,us,Ml,Ol,xl,Il,bt,ns,Cl,vt,Qs=m2("stop")+"",as,Nl,Ie,ms,Fl,Ce,ps,Pl,Ne,bs,Sl,Fe,vs,Al,Pe,cs,Dl,q,Ul,Hl,Wl,Xl,Yl,Se,ys,Zl,jl,Ll,zl,Ae,ds,ql,Gl,Vl,Jl,De,ks,Kl,se,Es,Ql,oe,hs,$l,re,ws,gl,fe,_s,ei,ue,Ts,ti,li,ii,si,Ue,Bs,oi,He,Rs,ri,We,Ms,Os,fi,ct,xs,ui,yt,Is,ni,dt,Cs,ai,kt,Ns,mi,Et,Fs,pi,ht,Ps,bi,wt,Ss,vi,_t,As,ci,Tt,Ds,yi,Bt,Us,di,Rt,Hs,ki,Mt,Ws,Ei,Ot,Xs,hi,xt,Ys,wi,It,Zs,_i,Ti,Bi,Ri,Mi,Oi,xi,Ii,Ci,Ni,Fi,Pi,T,js,$s;return{c(){d=s("link"),v=f(),h=s("br"),M=f(),F=s("div"),ae=m("**************************************************************************"),G=f(),O=s("div"),me=s("br"),pe=m(`
The Recursive Closure "m2 = M(x)" Controls the Action Without Mutating "x"`),V=f(),P=s("br"),w=f(),R=s("h2"),J=m("Work In Progress"),Xe=f(),B=s("p"),be=m(`m2 is a recursive function spawned by the function M. Together,they form a closure as follows:
`),S=s("pre"),Ye=m(a[32]),ve=f(),C=s("p"),Ze=m("This differs from the version in "),A=s("a"),je=m("monads"),Le=m('. There, "x = func(x)" mutated x each time go(func) executed on a function "func". I see no harm in doing it that way, but I thought it would be interesting to work a version that returns M(func(x)) and thereby avoids assigning a new value to x.'),ce=f(),D=s("p"),_=m("The game of Score in this section provides a way for players to take back actions. This depends on an array of cloned values of x, so it doesn't rely on x not being subject to mutation. I would like to preserve past states without cloning, so someday I will be back at the drawing board."),ze=f(),K=s("p"),Ct=m(`I call functions returned by M "monads", much to the consternation of some "functional programmers" who scoff at the idea that JavaScript could possibly have monads such as those defined in the Haskell programming language. Neither my monads nor the Haskell monads are Category Theory monads. The Haskell part actually surprises some programmers. Google "hask is a category" if you don't believe me.`),qe=f(),Q=s("p"),Nt=m('A monads created by, say, "monad = M(x)" creates an isolated pipeline allowing nested functions to operate on "x" insulated from any outer scope. For example, you could run:'),Ge=f(),$=s("pre"),Ft=m(a[40]),Ve=f(),g=s("p"),Pt=m("In the solitaire version of the game of score below, x will be an array of arrays in the form x =  [ [], [], [], [], [n] ] where x[0] contains four integers simulating a throw of two six-sided, one twelve-sided, and one twenty-sided dice. x[1] and x[3] contain the number selected by the player, x[2] is the selected operator, and x[4] keeps track of the number of successes until the player wins by reaching x[4] = 5. But first, let's consider some simpler examples."),Je=f(),ee=s("p"),St=m("These are the first interactive demonstration's event handlers:"),Ke=f(),te=s("pre"),At=m(a[39]),Qe=f(),U=s("p"),Dt=m("m4(s) is "),le=s("span"),$e=m(ye),ge=f(),et=s("br"),tt=f(),H=s("button"),Ut=m("m4(cube)"),lt=f(),W=s("button"),Ht=m("m4(square)"),it=f(),st=s("br"),ot=s("br"),rt=f(),X=s("span"),Wt=m("To call m4(pow(n)), enter n in the box ->"),ft=f(),r=s("input"),c=f(),x=s("br"),de=s("br"),Yt=f(),ke=s("span"),Wi=m("To call m4(add(n)), enter n in the box ->"),Zt=f(),Ee=s("input"),jt=f(),Lt=s("br"),zt=s("br"),qt=f(),he=s("span"),Xi=m("To call m4(mult(n)), enter n in the box ->"),Gt=f(),we=s("input"),Vt=f(),Jt=s("br"),Kt=s("br"),Qt=f(),_e=s("span"),Yi=m("To call m4(reset(n)), enter n in the box ->"),$t=f(),Te=s("input"),gt=f(),el=s("br"),tl=s("br"),ll=f(),ut=s("p"),Zi=m("Next, x will be an array manipulated by functions designed for that purpose. Here are the functions responsible for the interactive demonstration below:"),il=f(),nt=s("pre"),ji=m(a[33]),sl=f(),at=s("p"),Li=m(`If you click mon3 = mon3(g) four times and the click mon3 = mon3(g3), you will see that mon3(s) returns its original value, [1,2,3,4]. By the way, the "mon3 =" part of "mon3 = mon3(g)" is included solely to trigger updating of browser displays. Svelte doesn't have a virtual DOM, and merely changing objects isn't enough to trigger DOM updates. For example, arr = [1,2,3] doesn't change in the DOM when arr.push(888) is called. arr = arr afterwards or arr = arr.push(888) initially both do the trick.`),ol=f(),N=s("div"),zi=m("["),rl=m(Xt),qi=m("]"),fl=f(),ul=s("br"),nl=s("br"),al=f(),Be=s("button"),Gi=m("mon3 = mon3(g)"),ml=f(),Re=s("button"),Vi=m("mon3 = mon3(g2)"),pl=f(),Me=s("button"),Ji=m("mon3 = mon3(g3)"),bl=f(),Oe=s("button"),Ki=m("mon3 = mon3(x => [1,2,3,4])"),vl=f(),cl=s("br"),yl=s("br"),dl=s("br"),kl=f(),ie=s("p"),Qi=m("Now for the game of score, a game involving four dice and two or three-stage arithmetic computations with the goal of arriving at the number 20. My son Alex taught it to me a decade ago, when he was in middle school. I was also learning the Haskell programming language, so I developed a multiplayer online version with groups of interacting player, a chat box, and a shared-by-the-group todo list controlled by a Haskell WebSockets server backend. The backend could compute all possible solutions, if any existed, to any throw of the dice. It also identified all of the impossible-to-solve rolls. Users could change the default number of dice sides from 6,6,12,and 20 and the goal from the default value of 20. A version of it is online at "),mt=s("a"),$i=m("https://score.schalk.net"),gi=m("."),El=f(),pt=s("p"),es=m("This demonstration doesn't work in conjunction with a remote server, nor does it feature any Haskell code. It's just a little solitaire game providing an opportunity to consider the interesting possibilities of recursive closures. Instead of being argunents of function or global object methods, these monads are functions that consume functions. When the functions consumed by monads have no side effects outside of the monad's closure -- which should always be the case -- maintenance and bug tracking become more manageable. Minimizing side effects inside of monadic closure can help even more."),hl=f(),xe=s("h3"),ts=m("Score: "),ls=m(SCORE),wl=f(),Y=s("button"),is=m(AA),_l=f(),Z=s("button"),ss=m(BB),Tl=f(),j=s("button"),os=m(CC),Bl=f(),L=s("button"),rs=m(DD),Rl=f(),z=s("span"),fs=m("The operator is "),us=m(EE),Ml=f(),Ol=s("br"),xl=s("br"),Il=f(),bt=s("h2"),ns=m(m2),Cl=f(),vt=s("h2"),as=m(Qs),Nl=f(),Ie=s("button"),ms=m("add"),Fl=f(),Ce=s("button"),ps=m("subtract"),Pl=f(),Ne=s("button"),bs=m("multiply"),Sl=f(),Fe=s("button"),vs=m("divide"),Al=f(),Pe=s("button"),cs=m("concat"),Dl=f(),q=s("span"),Ul=m(a[0]),Hl=f(),Wl=s("br"),Xl=s("br"),Yl=f(),Se=s("button"),ys=m("ROLL"),Zl=f(),jl=s("br"),Ll=s("br"),zl=f(),Ae=s("div"),ds=m("XO is: "),ql=m(a[13]),Gl=f(),Vl=s("br"),Jl=f(),De=s("button"),ks=m("test"),Kl=f(),se=s("button"),Es=m(WW),Ql=f(),oe=s("button"),hs=m(XX),$l=f(),re=s("button"),ws=m(YY),gl=f(),fe=s("button"),_s=m(ZZ),ei=f(),ue=s("button"),Ts=m(EE),ti=f(),li=s("br"),ii=s("br"),si=f(),Ue=s("button"),Bs=m("Back"),oi=f(),He=s("button"),Rs=m("Forward"),ri=f(),We=s("h3"),Ms=m("index is "),Os=m(a[14]),fi=f(),ct=s("p"),xs=m("The function fu() is the brains behing the game of Score. Each time a number is clicked, m2(fu) is called and fu does various things depending on the state of the closures value, x."),ui=f(),yt=s("p"),Is=m("At the end of fu(), two formatting functions are Called. The first displays or hides variables in the DOM and the second updates their values. Here they are:"),ni=f(),dt=s("pre"),Cs=m(a[31]),ai=f(),kt=s("p"),Ns=m('Clicking "ROLL" calls runRoll() which, in turn, calls updateRoll() to re-set HTML variables.'),mi=f(),Et=s("pre"),Fs=m(a[34]),pi=f(),ht=s("p"),Ps=m('The "x = [ [], [], [], [], [0] ]" format will be maintained throught game play. x[0] simulates the dice roll; x[1] recieves integers that are clicked; x[2] holds the operator; and x[4] contains numbers that are computed. x[4] makes sure at least one computed number is involved in arriving at 20. Here are the first few functions called when a number is clicked:'),bi=f(),wt=s("pre"),Ss=m(a[35]),vi=f(),_t=s("p"),As=m(`The first line of fu() is the calculation result that is generated whenever there are two items in (s)[1] and an operator in m2(s)[3]. The intersection is important in fu()'s bottom test. If "intersect", the intersection of m2(s)[1] and m2(s)[3], is empty intersect[0] returns false and the last test in fu fails, even though 20 was produced on the second computation.`),ci=f(),Tt=s("p"),Ds=m("If no operator has been selected, it's possible to click a third number. The program doesn't complain, it just puts the number back for you with:"),yi=f(),Bt=s("pre"),Us=m(a[36]),di=f(),Rt=s("p"),Hs=m("If you roll the dice and keep clicking on the leftmost number, you'll see the numbers shift back and forth on every try. The first element of m2(s)[0] keeps getting pulled out of the first position and pushed back on the right."),ki=f(),Mt=s("p"),Ws=m(`sfunc() does some more DOM housekeeping. The buttons with dice number come and go as their CSS display strings are changed back and forth between "none" and "inline". fu() calls sfunc(). Here's how it is defined:`),Ei=f(),Ot=s("pre"),Xs=m(a[37]),hi=f(),xt=s("p"),Ys=m("After each number is selected and Before calling sFunc(), fu() first updates the HTML variables as follows:"),wi=f(),It=s("pre"),Zs=m(a[38]),_i=f(),Ti=s("br"),Bi=s("br"),Ri=s("br"),Mi=s("br"),Oi=s("br"),xi=s("br"),Ii=f(),Ci=s("br"),Ni=s("br"),Fi=s("br"),Pi=s("br"),this.h()},l(e){const l=cr('[data-svelte="svelte-3yzzxp"]',document.head);d=o(l,"LINK",{rel:!0,href:!0}),l.forEach(t),v=u(e),h=o(e,"BR",{}),M=u(e),F=o(e,"DIV",{});var gs=b(F);ae=p(gs,"**************************************************************************"),gs.forEach(t),G=u(e),O=o(e,"DIV",{style:!0});var Ls=b(O);me=o(Ls,"BR",{}),pe=p(Ls,`
The Recursive Closure "m2 = M(x)" Controls the Action Without Mutating "x"`),Ls.forEach(t),V=u(e),P=o(e,"BR",{}),w=u(e),R=o(e,"H2",{});var eo=b(R);J=p(eo,"Work In Progress"),eo.forEach(t),Xe=u(e),B=o(e,"P",{});var to=b(B);be=p(to,`m2 is a recursive function spawned by the function M. Together,they form a closure as follows:
`),to.forEach(t),S=o(e,"PRE",{});var lo=b(S);Ye=p(lo,a[32]),lo.forEach(t),ve=u(e),C=o(e,"P",{});var Si=b(C);Ze=p(Si,"This differs from the version in "),A=o(Si,"A",{href:!0});var io=b(A);je=p(io,"monads"),io.forEach(t),Le=p(Si,'. There, "x = func(x)" mutated x each time go(func) executed on a function "func". I see no harm in doing it that way, but I thought it would be interesting to work a version that returns M(func(x)) and thereby avoids assigning a new value to x.'),Si.forEach(t),ce=u(e),D=o(e,"P",{});var so=b(D);_=p(so,"The game of Score in this section provides a way for players to take back actions. This depends on an array of cloned values of x, so it doesn't rely on x not being subject to mutation. I would like to preserve past states without cloning, so someday I will be back at the drawing board."),so.forEach(t),ze=u(e),K=o(e,"P",{});var oo=b(K);Ct=p(oo,`I call functions returned by M "monads", much to the consternation of some "functional programmers" who scoff at the idea that JavaScript could possibly have monads such as those defined in the Haskell programming language. Neither my monads nor the Haskell monads are Category Theory monads. The Haskell part actually surprises some programmers. Google "hask is a category" if you don't believe me.`),oo.forEach(t),qe=u(e),Q=o(e,"P",{});var ro=b(Q);Nt=p(ro,'A monads created by, say, "monad = M(x)" creates an isolated pipeline allowing nested functions to operate on "x" insulated from any outer scope. For example, you could run:'),ro.forEach(t),Ge=u(e),$=o(e,"PRE",{});var fo=b($);Ft=p(fo,a[40]),fo.forEach(t),Ve=u(e),g=o(e,"P",{});var uo=b(g);Pt=p(uo,"In the solitaire version of the game of score below, x will be an array of arrays in the form x =  [ [], [], [], [], [n] ] where x[0] contains four integers simulating a throw of two six-sided, one twelve-sided, and one twenty-sided dice. x[1] and x[3] contain the number selected by the player, x[2] is the selected operator, and x[4] keeps track of the number of successes until the player wins by reaching x[4] = 5. But first, let's consider some simpler examples."),uo.forEach(t),Je=u(e),ee=o(e,"P",{});var no=b(ee);St=p(no,"These are the first interactive demonstration's event handlers:"),no.forEach(t),Ke=u(e),te=o(e,"PRE",{});var ao=b(te);At=p(ao,a[39]),ao.forEach(t),Qe=u(e),U=o(e,"P",{});var zs=b(U);Dt=p(zs,"m4(s) is "),le=o(zs,"SPAN",{style:!0});var mo=b(le);$e=p(mo,ye),mo.forEach(t),zs.forEach(t),ge=u(e),et=o(e,"BR",{}),tt=u(e),H=o(e,"BUTTON",{});var po=b(H);Ut=p(po,"m4(cube)"),po.forEach(t),lt=u(e),W=o(e,"BUTTON",{});var bo=b(W);Ht=p(bo,"m4(square)"),bo.forEach(t),it=u(e),st=o(e,"BR",{}),ot=o(e,"BR",{}),rt=u(e),X=o(e,"SPAN",{style:!0});var vo=b(X);Wt=p(vo,"To call m4(pow(n)), enter n in the box ->"),vo.forEach(t),ft=u(e),r=o(e,"INPUT",{type:!0,style:!0}),c=u(e),x=o(e,"BR",{}),de=o(e,"BR",{}),Yt=u(e),ke=o(e,"SPAN",{style:!0});var co=b(ke);Wi=p(co,"To call m4(add(n)), enter n in the box ->"),co.forEach(t),Zt=u(e),Ee=o(e,"INPUT",{type:!0,style:!0}),jt=u(e),Lt=o(e,"BR",{}),zt=o(e,"BR",{}),qt=u(e),he=o(e,"SPAN",{style:!0});var yo=b(he);Xi=p(yo,"To call m4(mult(n)), enter n in the box ->"),yo.forEach(t),Gt=u(e),we=o(e,"INPUT",{type:!0,style:!0}),Vt=u(e),Jt=o(e,"BR",{}),Kt=o(e,"BR",{}),Qt=u(e),_e=o(e,"SPAN",{style:!0});var ko=b(_e);Yi=p(ko,"To call m4(reset(n)), enter n in the box ->"),ko.forEach(t),$t=u(e),Te=o(e,"INPUT",{type:!0,style:!0}),gt=u(e),el=o(e,"BR",{}),tl=o(e,"BR",{}),ll=u(e),ut=o(e,"P",{});var Eo=b(ut);Zi=p(Eo,"Next, x will be an array manipulated by functions designed for that purpose. Here are the functions responsible for the interactive demonstration below:"),Eo.forEach(t),il=u(e),nt=o(e,"PRE",{});var ho=b(nt);ji=p(ho,a[33]),ho.forEach(t),sl=u(e),at=o(e,"P",{});var wo=b(at);Li=p(wo,`If you click mon3 = mon3(g) four times and the click mon3 = mon3(g3), you will see that mon3(s) returns its original value, [1,2,3,4]. By the way, the "mon3 =" part of "mon3 = mon3(g)" is included solely to trigger updating of browser displays. Svelte doesn't have a virtual DOM, and merely changing objects isn't enough to trigger DOM updates. For example, arr = [1,2,3] doesn't change in the DOM when arr.push(888) is called. arr = arr afterwards or arr = arr.push(888) initially both do the trick.`),wo.forEach(t),ol=u(e),N=o(e,"DIV",{style:!0});var Ai=b(N);zi=p(Ai,"["),rl=p(Ai,Xt),qi=p(Ai,"]"),Ai.forEach(t),fl=u(e),ul=o(e,"BR",{}),nl=o(e,"BR",{}),al=u(e),Be=o(e,"BUTTON",{});var _o=b(Be);Gi=p(_o,"mon3 = mon3(g)"),_o.forEach(t),ml=u(e),Re=o(e,"BUTTON",{});var To=b(Re);Vi=p(To,"mon3 = mon3(g2)"),To.forEach(t),pl=u(e),Me=o(e,"BUTTON",{});var Bo=b(Me);Ji=p(Bo,"mon3 = mon3(g3)"),Bo.forEach(t),bl=u(e),Oe=o(e,"BUTTON",{});var Ro=b(Oe);Ki=p(Ro,"mon3 = mon3(x => [1,2,3,4])"),Ro.forEach(t),vl=u(e),cl=o(e,"BR",{}),yl=o(e,"BR",{}),dl=o(e,"BR",{}),kl=u(e),ie=o(e,"P",{});var Di=b(ie);Qi=p(Di,"Now for the game of score, a game involving four dice and two or three-stage arithmetic computations with the goal of arriving at the number 20. My son Alex taught it to me a decade ago, when he was in middle school. I was also learning the Haskell programming language, so I developed a multiplayer online version with groups of interacting player, a chat box, and a shared-by-the-group todo list controlled by a Haskell WebSockets server backend. The backend could compute all possible solutions, if any existed, to any throw of the dice. It also identified all of the impossible-to-solve rolls. Users could change the default number of dice sides from 6,6,12,and 20 and the goal from the default value of 20. A version of it is online at "),mt=o(Di,"A",{href:!0});var Mo=b(mt);$i=p(Mo,"https://score.schalk.net"),Mo.forEach(t),gi=p(Di,"."),Di.forEach(t),El=u(e),pt=o(e,"P",{});var Oo=b(pt);es=p(Oo,"This demonstration doesn't work in conjunction with a remote server, nor does it feature any Haskell code. It's just a little solitaire game providing an opportunity to consider the interesting possibilities of recursive closures. Instead of being argunents of function or global object methods, these monads are functions that consume functions. When the functions consumed by monads have no side effects outside of the monad's closure -- which should always be the case -- maintenance and bug tracking become more manageable. Minimizing side effects inside of monadic closure can help even more."),Oo.forEach(t),hl=u(e),xe=o(e,"H3",{});var qs=b(xe);ts=p(qs,"Score: "),ls=p(qs,SCORE),qs.forEach(t),wl=u(e),Y=o(e,"BUTTON",{style:!0});var xo=b(Y);is=p(xo,AA),xo.forEach(t),_l=u(e),Z=o(e,"BUTTON",{style:!0});var Io=b(Z);ss=p(Io,BB),Io.forEach(t),Tl=u(e),j=o(e,"BUTTON",{style:!0});var Co=b(j);os=p(Co,CC),Co.forEach(t),Bl=u(e),L=o(e,"BUTTON",{style:!0});var No=b(L);rs=p(No,DD),No.forEach(t),Rl=u(e),z=o(e,"SPAN",{style:!0});var Gs=b(z);fs=p(Gs,"The operator is "),us=p(Gs,EE),Gs.forEach(t),Ml=u(e),Ol=o(e,"BR",{}),xl=o(e,"BR",{}),Il=u(e),bt=o(e,"H2",{});var Fo=b(bt);ns=p(Fo,m2),Fo.forEach(t),Cl=u(e),vt=o(e,"H2",{});var Po=b(vt);as=p(Po,Qs),Po.forEach(t),Nl=u(e),Ie=o(e,"BUTTON",{});var So=b(Ie);ms=p(So,"add"),So.forEach(t),Fl=u(e),Ce=o(e,"BUTTON",{});var Ao=b(Ce);ps=p(Ao,"subtract"),Ao.forEach(t),Pl=u(e),Ne=o(e,"BUTTON",{});var Do=b(Ne);bs=p(Do,"multiply"),Do.forEach(t),Sl=u(e),Fe=o(e,"BUTTON",{});var Uo=b(Fe);vs=p(Uo,"divide"),Uo.forEach(t),Al=u(e),Pe=o(e,"BUTTON",{});var Ho=b(Pe);cs=p(Ho,"concat"),Ho.forEach(t),Dl=u(e),q=o(e,"SPAN",{style:!0});var Wo=b(q);Ul=p(Wo,a[0]),Wo.forEach(t),Hl=u(e),Wl=o(e,"BR",{}),Xl=o(e,"BR",{}),Yl=u(e),Se=o(e,"BUTTON",{});var Xo=b(Se);ys=p(Xo,"ROLL"),Xo.forEach(t),Zl=u(e),jl=o(e,"BR",{}),Ll=o(e,"BR",{}),zl=u(e),Ae=o(e,"DIV",{});var Vs=b(Ae);ds=p(Vs,"XO is: "),ql=p(Vs,a[13]),Vs.forEach(t),Gl=u(e),Vl=o(e,"BR",{}),Jl=u(e),De=o(e,"BUTTON",{});var Yo=b(De);ks=p(Yo,"test"),Yo.forEach(t),Kl=u(e),se=o(e,"BUTTON",{style:!0});var Zo=b(se);Es=p(Zo,WW),Zo.forEach(t),Ql=u(e),oe=o(e,"BUTTON",{style:!0});var jo=b(oe);hs=p(jo,XX),jo.forEach(t),$l=u(e),re=o(e,"BUTTON",{style:!0});var Lo=b(re);ws=p(Lo,YY),Lo.forEach(t),gl=u(e),fe=o(e,"BUTTON",{style:!0});var zo=b(fe);_s=p(zo,ZZ),zo.forEach(t),ei=u(e),ue=o(e,"BUTTON",{style:!0});var qo=b(ue);Ts=p(qo,EE),qo.forEach(t),ti=u(e),li=o(e,"BR",{}),ii=o(e,"BR",{}),si=u(e),Ue=o(e,"BUTTON",{});var Go=b(Ue);Bs=p(Go,"Back"),Go.forEach(t),oi=u(e),He=o(e,"BUTTON",{});var Vo=b(He);Rs=p(Vo,"Forward"),Vo.forEach(t),ri=u(e),We=o(e,"H3",{});var Js=b(We);Ms=p(Js,"index is "),Os=p(Js,a[14]),Js.forEach(t),fi=u(e),ct=o(e,"P",{});var Jo=b(ct);xs=p(Jo,"The function fu() is the brains behing the game of Score. Each time a number is clicked, m2(fu) is called and fu does various things depending on the state of the closures value, x."),Jo.forEach(t),ui=u(e),yt=o(e,"P",{});var Ko=b(yt);Is=p(Ko,"At the end of fu(), two formatting functions are Called. The first displays or hides variables in the DOM and the second updates their values. Here they are:"),Ko.forEach(t),ni=u(e),dt=o(e,"PRE",{});var Qo=b(dt);Cs=p(Qo,a[31]),Qo.forEach(t),ai=u(e),kt=o(e,"P",{});var $o=b(kt);Ns=p($o,'Clicking "ROLL" calls runRoll() which, in turn, calls updateRoll() to re-set HTML variables.'),$o.forEach(t),mi=u(e),Et=o(e,"PRE",{});var go=b(Et);Fs=p(go,a[34]),go.forEach(t),pi=u(e),ht=o(e,"P",{});var er=b(ht);Ps=p(er,'The "x = [ [], [], [], [], [0] ]" format will be maintained throught game play. x[0] simulates the dice roll; x[1] recieves integers that are clicked; x[2] holds the operator; and x[4] contains numbers that are computed. x[4] makes sure at least one computed number is involved in arriving at 20. Here are the first few functions called when a number is clicked:'),er.forEach(t),bi=u(e),wt=o(e,"PRE",{});var tr=b(wt);Ss=p(tr,a[35]),tr.forEach(t),vi=u(e),_t=o(e,"P",{});var lr=b(_t);As=p(lr,`The first line of fu() is the calculation result that is generated whenever there are two items in (s)[1] and an operator in m2(s)[3]. The intersection is important in fu()'s bottom test. If "intersect", the intersection of m2(s)[1] and m2(s)[3], is empty intersect[0] returns false and the last test in fu fails, even though 20 was produced on the second computation.`),lr.forEach(t),ci=u(e),Tt=o(e,"P",{});var ir=b(Tt);Ds=p(ir,"If no operator has been selected, it's possible to click a third number. The program doesn't complain, it just puts the number back for you with:"),ir.forEach(t),yi=u(e),Bt=o(e,"PRE",{});var sr=b(Bt);Us=p(sr,a[36]),sr.forEach(t),di=u(e),Rt=o(e,"P",{});var or=b(Rt);Hs=p(or,"If you roll the dice and keep clicking on the leftmost number, you'll see the numbers shift back and forth on every try. The first element of m2(s)[0] keeps getting pulled out of the first position and pushed back on the right."),or.forEach(t),ki=u(e),Mt=o(e,"P",{});var rr=b(Mt);Ws=p(rr,`sfunc() does some more DOM housekeeping. The buttons with dice number come and go as their CSS display strings are changed back and forth between "none" and "inline". fu() calls sfunc(). Here's how it is defined:`),rr.forEach(t),Ei=u(e),Ot=o(e,"PRE",{});var fr=b(Ot);Xs=p(fr,a[37]),fr.forEach(t),hi=u(e),xt=o(e,"P",{});var ur=b(xt);Ys=p(ur,"After each number is selected and Before calling sFunc(), fu() first updates the HTML variables as follows:"),ur.forEach(t),wi=u(e),It=o(e,"PRE",{});var nr=b(It);Zs=p(nr,a[38]),nr.forEach(t),_i=u(e),Ti=o(e,"BR",{}),Bi=o(e,"BR",{}),Ri=o(e,"BR",{}),Mi=o(e,"BR",{}),Oi=o(e,"BR",{}),xi=o(e,"BR",{}),Ii=u(e),Ci=o(e,"BR",{}),Ni=o(e,"BR",{}),Fi=o(e,"BR",{}),Pi=o(e,"BR",{}),this.h()},h(){document.title="Recursive Closures Without Mutating State ",ne(d,"rel","stylesheet"),ne(d,"href","../Functions/style.css"),y(O,"font-family","Times New Roman"),y(O,"text-align","center"),y(O,"font-size","32px"),ne(A,"href","./monads"),y(le,"font-size","54px"),y(X,"font-size","24px"),ne(r,"type","text"),y(r,"width","65px"),y(ke,"font-size","24px"),ne(Ee,"type","number"),y(Ee,"width","65px"),y(he,"font-size","24px"),ne(we,"type","text"),y(we,"width","65px"),y(_e,"font-size","24px"),ne(Te,"type","number"),y(Te,"width","65px"),y(N,"margin-left","10%"),y(N,"font-size","44px"),y(N,"color","#ddaadd"),ne(mt,"href","https://score.schalk.net"),y(Y,"display",a[1]),y(Z,"display",a[2]),y(j,"display",a[3]),y(L,"display",a[4]),y(z,"margin-left","8%"),y(z,"font-size","22px"),y(q,"margin-left","20px"),y(q,"color","#bbbbff"),y(q,"font-size","28px"),y(se,"display",a[5]),y(oe,"display",a[6]),y(re,"display",a[7]),y(fe,"display",a[8]),y(ue,"display",a[8])},m(e,l){n(document.head,d),i(e,v,l),i(e,h,l),i(e,M,l),i(e,F,l),n(F,ae),i(e,G,l),i(e,O,l),n(O,me),n(O,pe),i(e,V,l),i(e,P,l),i(e,w,l),i(e,R,l),n(R,J),i(e,Xe,l),i(e,B,l),n(B,be),i(e,S,l),n(S,Ye),i(e,ve,l),i(e,C,l),n(C,Ze),n(C,A),n(A,je),n(C,Le),i(e,ce,l),i(e,D,l),n(D,_),i(e,ze,l),i(e,K,l),n(K,Ct),i(e,qe,l),i(e,Q,l),n(Q,Nt),i(e,Ge,l),i(e,$,l),n($,Ft),i(e,Ve,l),i(e,g,l),n(g,Pt),i(e,Je,l),i(e,ee,l),n(ee,St),i(e,Ke,l),i(e,te,l),n(te,At),i(e,Qe,l),i(e,U,l),n(U,Dt),n(U,le),n(le,$e),i(e,ge,l),i(e,et,l),i(e,tt,l),i(e,H,l),n(H,Ut),i(e,lt,l),i(e,W,l),n(W,Ht),i(e,it,l),i(e,st,l),i(e,ot,l),i(e,rt,l),i(e,X,l),n(X,Wt),i(e,ft,l),i(e,r,l),i(e,c,l),i(e,x,l),i(e,de,l),i(e,Yt,l),i(e,ke,l),n(ke,Wi),i(e,Zt,l),i(e,Ee,l),i(e,jt,l),i(e,Lt,l),i(e,zt,l),i(e,qt,l),i(e,he,l),n(he,Xi),i(e,Gt,l),i(e,we,l),i(e,Vt,l),i(e,Jt,l),i(e,Kt,l),i(e,Qt,l),i(e,_e,l),n(_e,Yi),i(e,$t,l),i(e,Te,l),i(e,gt,l),i(e,el,l),i(e,tl,l),i(e,ll,l),i(e,ut,l),n(ut,Zi),i(e,il,l),i(e,nt,l),n(nt,ji),i(e,sl,l),i(e,at,l),n(at,Li),i(e,ol,l),i(e,N,l),n(N,zi),n(N,rl),n(N,qi),i(e,fl,l),i(e,ul,l),i(e,nl,l),i(e,al,l),i(e,Be,l),n(Be,Gi),i(e,ml,l),i(e,Re,l),n(Re,Vi),i(e,pl,l),i(e,Me,l),n(Me,Ji),i(e,bl,l),i(e,Oe,l),n(Oe,Ki),i(e,vl,l),i(e,cl,l),i(e,yl,l),i(e,dl,l),i(e,kl,l),i(e,ie,l),n(ie,Qi),n(ie,mt),n(mt,$i),n(ie,gi),i(e,El,l),i(e,pt,l),n(pt,es),i(e,hl,l),i(e,xe,l),n(xe,ts),n(xe,ls),i(e,wl,l),i(e,Y,l),n(Y,is),i(e,_l,l),i(e,Z,l),n(Z,ss),i(e,Tl,l),i(e,j,l),n(j,os),i(e,Bl,l),i(e,L,l),n(L,rs),i(e,Rl,l),i(e,z,l),n(z,fs),n(z,us),i(e,Ml,l),i(e,Ol,l),i(e,xl,l),i(e,Il,l),i(e,bt,l),n(bt,ns),i(e,Cl,l),i(e,vt,l),n(vt,as),i(e,Nl,l),i(e,Ie,l),n(Ie,ms),i(e,Fl,l),i(e,Ce,l),n(Ce,ps),i(e,Pl,l),i(e,Ne,l),n(Ne,bs),i(e,Sl,l),i(e,Fe,l),n(Fe,vs),i(e,Al,l),i(e,Pe,l),n(Pe,cs),i(e,Dl,l),i(e,q,l),n(q,Ul),i(e,Hl,l),i(e,Wl,l),i(e,Xl,l),i(e,Yl,l),i(e,Se,l),n(Se,ys),i(e,Zl,l),i(e,jl,l),i(e,Ll,l),i(e,zl,l),i(e,Ae,l),n(Ae,ds),n(Ae,ql),i(e,Gl,l),i(e,Vl,l),i(e,Jl,l),i(e,De,l),n(De,ks),i(e,Kl,l),i(e,se,l),n(se,Es),i(e,Ql,l),i(e,oe,l),n(oe,hs),i(e,$l,l),i(e,re,l),n(re,ws),i(e,gl,l),i(e,fe,l),n(fe,_s),i(e,ei,l),i(e,ue,l),n(ue,Ts),i(e,ti,l),i(e,li,l),i(e,ii,l),i(e,si,l),i(e,Ue,l),n(Ue,Bs),i(e,oi,l),i(e,He,l),n(He,Rs),i(e,ri,l),i(e,We,l),n(We,Ms),n(We,Os),i(e,fi,l),i(e,ct,l),n(ct,xs),i(e,ui,l),i(e,yt,l),n(yt,Is),i(e,ni,l),i(e,dt,l),n(dt,Cs),i(e,ai,l),i(e,kt,l),n(kt,Ns),i(e,mi,l),i(e,Et,l),n(Et,Fs),i(e,pi,l),i(e,ht,l),n(ht,Ps),i(e,bi,l),i(e,wt,l),n(wt,Ss),i(e,vi,l),i(e,_t,l),n(_t,As),i(e,ci,l),i(e,Tt,l),n(Tt,Ds),i(e,yi,l),i(e,Bt,l),n(Bt,Us),i(e,di,l),i(e,Rt,l),n(Rt,Hs),i(e,ki,l),i(e,Mt,l),n(Mt,Ws),i(e,Ei,l),i(e,Ot,l),n(Ot,Xs),i(e,hi,l),i(e,xt,l),n(xt,Ys),i(e,wi,l),i(e,It,l),n(It,Zs),i(e,_i,l),i(e,Ti,l),i(e,Bi,l),i(e,Ri,l),i(e,Mi,l),i(e,Oi,l),i(e,xi,l),i(e,Ii,l),i(e,Ci,l),i(e,Ni,l),i(e,Fi,l),i(e,Pi,l),T=!0,js||($s=[k(H,"click",a[26]),k(W,"click",a[25]),k(r,"keydown",a[27]),k(Ee,"keydown",a[28]),k(we,"keydown",a[29]),k(Te,"keydown",a[30]),k(Be,"click",a[42]),k(Re,"click",a[43]),k(Me,"click",a[44]),k(Oe,"click",a[45]),k(Y,"click",a[46]),k(Z,"click",a[47]),k(j,"click",a[48]),k(L,"click",a[49]),k(Ie,"click",a[50]),k(Ce,"click",a[51]),k(Ne,"click",a[52]),k(Fe,"click",a[53]),k(Pe,"click",a[54]),k(Se,"click",a[55]),k(De,"click",a[56]),k(Ue,"click",a[57]),k(He,"click",a[58])],js=!0)},p(e,l){(!T||l[0]&4096)&&ye!==(ye=parseFloat(e[12](E)).toFixed(5).toString()+"")&&Ui($e,ye),(!T||l[0]&1024)&&Xt!==(Xt=e[10](E).join(", ")+"")&&Ui(rl,Xt),(!T||l[0]&2)&&y(Y,"display",e[1]),(!T||l[0]&4)&&y(Z,"display",e[2]),(!T||l[0]&8)&&y(j,"display",e[3]),(!T||l[0]&16)&&y(L,"display",e[4]),(!T||l[0]&1)&&Ui(Ul,e[0]),(!T||l[0]&8192)&&Ui(ql,e[13]),(!T||l[0]&32)&&y(se,"display",e[5]),(!T||l[0]&64)&&y(oe,"display",e[6]),(!T||l[0]&128)&&y(re,"display",e[7]),(!T||l[0]&256)&&y(fe,"display",e[8]),(!T||l[0]&256)&&y(ue,"display",e[8])},i(e){T||(yr(()=>{I||(I=ar(O,mr,{},!0)),I.run(1)}),T=!0)},o(e){I||(I=ar(O,mr,{},!1)),I.run(0),T=!1},d(e){t(d),e&&t(v),e&&t(h),e&&t(M),e&&t(F),e&&t(G),e&&t(O),e&&I&&I.end(),e&&t(V),e&&t(P),e&&t(w),e&&t(R),e&&t(Xe),e&&t(B),e&&t(S),e&&t(ve),e&&t(C),e&&t(ce),e&&t(D),e&&t(ze),e&&t(K),e&&t(qe),e&&t(Q),e&&t(Ge),e&&t($),e&&t(Ve),e&&t(g),e&&t(Je),e&&t(ee),e&&t(Ke),e&&t(te),e&&t(Qe),e&&t(U),e&&t(ge),e&&t(et),e&&t(tt),e&&t(H),e&&t(lt),e&&t(W),e&&t(it),e&&t(st),e&&t(ot),e&&t(rt),e&&t(X),e&&t(ft),e&&t(r),e&&t(c),e&&t(x),e&&t(de),e&&t(Yt),e&&t(ke),e&&t(Zt),e&&t(Ee),e&&t(jt),e&&t(Lt),e&&t(zt),e&&t(qt),e&&t(he),e&&t(Gt),e&&t(we),e&&t(Vt),e&&t(Jt),e&&t(Kt),e&&t(Qt),e&&t(_e),e&&t($t),e&&t(Te),e&&t(gt),e&&t(el),e&&t(tl),e&&t(ll),e&&t(ut),e&&t(il),e&&t(nt),e&&t(sl),e&&t(at),e&&t(ol),e&&t(N),e&&t(fl),e&&t(ul),e&&t(nl),e&&t(al),e&&t(Be),e&&t(ml),e&&t(Re),e&&t(pl),e&&t(Me),e&&t(bl),e&&t(Oe),e&&t(vl),e&&t(cl),e&&t(yl),e&&t(dl),e&&t(kl),e&&t(ie),e&&t(El),e&&t(pt),e&&t(hl),e&&t(xe),e&&t(wl),e&&t(Y),e&&t(_l),e&&t(Z),e&&t(Tl),e&&t(j),e&&t(Bl),e&&t(L),e&&t(Rl),e&&t(z),e&&t(Ml),e&&t(Ol),e&&t(xl),e&&t(Il),e&&t(bt),e&&t(Cl),e&&t(vt),e&&t(Nl),e&&t(Ie),e&&t(Fl),e&&t(Ce),e&&t(Pl),e&&t(Ne),e&&t(Sl),e&&t(Fe),e&&t(Al),e&&t(Pe),e&&t(Dl),e&&t(q),e&&t(Hl),e&&t(Wl),e&&t(Xl),e&&t(Yl),e&&t(Se),e&&t(Zl),e&&t(jl),e&&t(Ll),e&&t(zl),e&&t(Ae),e&&t(Gl),e&&t(Vl),e&&t(Jl),e&&t(De),e&&t(Kl),e&&t(se),e&&t(Ql),e&&t(oe),e&&t($l),e&&t(re),e&&t(gl),e&&t(fe),e&&t(ei),e&&t(ue),e&&t(ti),e&&t(li),e&&t(ii),e&&t(si),e&&t(Ue),e&&t(oi),e&&t(He),e&&t(ri),e&&t(We),e&&t(fi),e&&t(ct),e&&t(ui),e&&t(yt),e&&t(ni),e&&t(dt),e&&t(ai),e&&t(kt),e&&t(mi),e&&t(Et),e&&t(pi),e&&t(ht),e&&t(bi),e&&t(wt),e&&t(vi),e&&t(_t),e&&t(ci),e&&t(Tt),e&&t(yi),e&&t(Bt),e&&t(di),e&&t(Rt),e&&t(ki),e&&t(Mt),e&&t(Ei),e&&t(Ot),e&&t(hi),e&&t(xt),e&&t(wi),e&&t(It),e&&t(_i),e&&t(Ti),e&&t(Bi),e&&t(Ri),e&&t(Mi),e&&t(Oi),e&&t(xi),e&&t(Ii),e&&t(Ci),e&&t(Ni),e&&t(Fi),e&&t(Pi),js=!1,dr($s)}}}var E="stop";function Er(a,d,v){var h=parseInt(a,10),M=parseInt(d,10);return v==="+"?h+M:v==="*"?h*M:v==="-"?h-M:v==="/"?h/M:v==="concat"?parseInt(""+h+M,10):"fubar"}function hr(a){var d=a.pop()**3;return a.unshift(d),a}function wr(a){return a.flatMap(d=>(d+1)**3)}function _r(a){return a.flatMap(d=>Math.round(d**(1/3)))}function Hi(a){return function(d){if(typeof d=="function")return Hi(d(a));if(d==="stop")return a}}function Tr(){console.log("m2 is",m2),console.log(m2(E)[0]),console.log(m2(E)[1]),console.log(m2(E)[2]),console.log(m2(E)[3]),console.log(m2(E)[4]),console.log(m2(E)[5]),console.log(m2(E)[6])}function Ks(a){var d=a.split("/");return d.length>1?d[0]/d[1]:d[0]}function Br(a,d){return a.filter(v=>d.includes(v))}function Rr(a,d,v){let h;var M="none",F="none",ae="none",G="none",O,me="none",pe="none",I="none",V="none",P="",w,R,J;J=r=>c=>(r=Hi([[Math.floor(Math.random()*6)+1,Math.floor(Math.random()*6)+1,Math.floor(Math.random()*12)+1,Math.floor(Math.random()*20)+1],[],[],[],[0],[],[0]]),updateRoll(r),EEE="yet to be selected",v(13,h=r("stop")),console.log("In runRoll. XO IS",h),r),console.log("Line 54. m2('stop') is",m2("stop"));function Xe(){v(1,M=v(2,F=v(3,ae=v(4,G=v(5,me=v(6,pe=v(7,I=v(8,V="none")))))))),m2(R)[0][0]!=null&&v(1,M="inline"),m2(R)[0][1]!=null&&v(2,F="inline"),m2(R)[0][2]!=null&&v(3,ae="inline"),m2(R)[0][3]!=null&&v(4,G="inline"),m2(R)[1][0]!=null&&v(5,me="inline"),m2(R)[1][1]!=null&&v(6,pe="inline"),m2(R)[1][2]!=null&&v(7,I="inline"),m2(R)[1][3]!=null&&v(8,V="inline")}var B=Hi([1,2,3,4]),be,S=r=>{var c=r(E)[4][0];c>0?(c=c-1,r[4][0]=c,r(w),console.log("in back. a(s) is",r(E))):console.log("In forward. Can't compute")};w=r=>{r[4].push(r[4].pop+1),v(13,h=r),console.log("In fu. XO IS",h);var c,x=r[4][0],de;return r[1].length===2&&r[2].length===1&&(de=r[1],c=Er(r[1][0],r[1][1],r[2][0]),r[0].push(c),r[3].push(c),r[1]=[]),r[1].length===3&&r[0].push(r[1].pop()),c==20&&Br(de,r[3]).length>0&&(r[4][0]===4?(v(0,P="You win! "),x=0):(x=x*1,x+=1,v(0,P="           Your score increased to "+x)),J(x),setTimeout(()=>v(0,P=""),3e3)),Xe(),r};var Ye=r=>{console.log("a is",r),r[1].push(r.splice(0,1)[0]),console.log("in click0. a(s) is",r(E))},ve=r=>{r[1].push(r[0].splice(1,1)[0]),r(w)},C=r=>{r[1].push(r[0].splice(2,1)[0]),r(w)},Ze=r=>{r[1].push(r[0].splice(3,1)[0]),r(w)};function A(r){console.log("m(s) is",r(E)),console.log("m2(s) is",m2(E)),EEE="add",r[2]="+",r(w)}function je(r){EEE="subtract",r[2][0]="-",r(w)}function Le(r){EEE="multiply",r[2][0]="*",r(w)}function ce(r){EEE="divide",r[2][0]="/",r(w)}function D(r){EEE="concat",r[2].pop(),r[2].push("concat"),r(w)}var _=Hi(3.1415926535),ze=r=>r**3,K=r=>r*r,Ct=r=>c=>c**r,qe=r=>c=>1*c+1*r,Q=r=>c=>c*r,Nt=r=>c=>r;function Ge(){v(12,_=_(K))}function $(){v(12,_=_(ze))}var Ft=function(c){var x=Ks(c.target.value);c.keyCode==13&&v(12,_=_(Ct(x)))},Ve=function(c){c.keyCode==13&&v(12,_=_(qe(c.target.value)))},g=function(c){c.keyCode==13&&v(12,_=_(Q(Ks(c.target.value))))},Pt=function(c){c.keyCode==13&&v(12,_=_(Nt(Ks(c.target.value))))},Je=`fu = a => {  m2(fu) caused fu to operate on the closure's current value, a.
  var result;
  var SCORE = a[4][0]; 
  var a1;                                 //  a1 will preserve a[1] for the final test
  if (a[1].length === 2 && a[2].length === 1)   {
    a1 = a[1];
    result = calc(a[1][0], a[1][1],a[2][0]);   // a[1] holds the selected numbers
    a[0].push(result);
    a[3].push(result);     // a1 is used in the final test to make sure 20 was 
                           // achieved by using a previously computed number. 
    a[1] = [];             // Now a[1] is empty but a1 still holds its prior value
  }

  if (a[1].length === 3) {     // a[1] can't use 3 numbers so it sends a 3rd selection back.
    a[0].push(a[1].pop());
  }
  
  if (result == 20 && intersection(a1, a[3])) { // An empty array means no previously computed 
                            // number was used. An empty array is like 0, false in a logical test. 
      if (a[4][0] === 4) {
          a[4] = 0;
          Z = "You win! "
          SCORE = 0;
      }
      else {
          SCORE += 1;
          Z = "Good. Your score increased to " + SCORE;
      }
      runRoll(SCORE);
      setTimeout(() => Z = "", 2000);
  }
  update();
  sfunc();
  return a;
};

// Now variables that appear in curly braces in the DOM must be updated.

function sfunc () {
    b0 = b1 = b2 = b3 = b4 = b5 = b6 = b7 = "none"; // All button displays controlled by b's disappear. 
    if (AA != (undefined && 0)) b0 = "inline"; // Next, selected buttons are diplayed.
    if (BB != (undefined && 0)) b1 = "inline";
    if (CC != (undefined && 0)) b2 = "inline";
    if (DD != (undefined && 0)) b3 = "inline";
    if (WW != (undefined && 0)) b4 = "inline";
    if (XX != (undefined && 0)) b5 = "inline";
    if (YY != (undefined && 0)) b6 = "inline";
    if (ZZ != (undefined && 0)) b7 = "inline";
}

var update = () => { // Now the values of DOM variables are updated.
  AA = m2(s)[0][0];
  BB = m2(s)[0][1];
  CC = m2(s)[0][2];
  DD = m2(s)[0][3];
  EE = m2(s)[2];
  FF = m2(s)[3];
  SCORE = m2(s)[4];
  WW = m2(s)[1][0];
  XX = m2(s)[1][1];
  YY = m2(s)[1][2];
  ZZ = m2(s)[1][3];
}`,ee=`function M (x) {
    return function (func) {
        if (typeof func === "function") {
            return M(func(x));
        }
        else if (func === "stop") return x;
    }
};`,St=`var mon3 = M([1,2,3,4]);
function g(ar) {
    var x = (ar.pop())**3;
    ar.unshift(x);
  return ar;
};
function g2 (ar) {return (ar.flatMap(v => (v+1)**3))};
function g3 (ar) {return (ar.flatMap(v => Math.round(v**(1/3))))};`,Ke=`runRoll = x => {
    m2 = M([ [Math.floor(Math.random()*6) + 1, Math.floor(Math.random()*6) + 1, Math.floor(Math.random()*12) + 1, Math.floor(Math.random()*20) + 1], [], [], [], [x] ]);
    updateRoll();
    EEE = "yet to be selected";
    XO = m2('stop');
    AR = [];
    index = 0;
}
const updateRoll = () => {
  AA = m2(s)[0][0];
  BB = m2(s)[0][1];
  CC = m2(s)[0][2];
  DD = m2(s)[0][3];
  
  WW = m2(s)[1][0];
  XX = m2(s)[1][1];
  YY = m2(s)[1][2];
  ZZ = m2(s)[1][3];
  EE = m2(s)[2];
  FF = m2(s)[3];
  SCORE = m2(s)[4];
  b0 = b1 = b2 = b3 = "inline";
  b4 = b5 = b6 = b7 = 'none';
};`,te=`function clic0 () {
  EEE = "add";
  m2(ar => ar = [ m2(s)[0], m2(s)[1], ['+'], m2(s)[3] ].map(v => v.flat()));
  m2(fu);
} 

function clic1 () {
  EEE = "subtract";
  m2(ar => ar = [ m2(s)[0], m2(s)[1], ['-'], m2(s)[3] ].map(v => v.flat()));
  m2(fu);
} 

function clic2 () {
  EEE= "multiply";
  m2(ar => ar = [ m2(s)[0], m2(s)[1], ['*'], m2(s)[3] ].map(v => v.flat()));
  m2(fu);
} 

function clic3 () {
  EEE = "divide";
  m2(ar => ar = [ m2(s)[0], m2(s)[1], ['/'], m2(s)[3] ].map(v => v.flat()));
  m2(fu);
} 

function clic4 () {
  EEE = "concat";
  m2(ar => ar = [ m2(s)[0], m2(s)[1], ['concat'], m2(s)[3] ].map(v => v.flat()));
  m2(fu);
} 

var click0 = ar => {
    ar[1].push(ar[0].splice(0,1)[0]);
    m2(fu);
};

var click1 = ar => {
    ar[1].push(ar[0].splice(1,1)[0]);
    m2(fu);
};

var click2 = ar => {
    ar[1].push(ar[0].splice(2,1)[0]);
    m2(fu);
};

var click3 = ar => {
    ar[1].push(ar[0].splice(3,1)[0]);
    m2(fu);
};`,At=`if (a[1].length === 3) {   
    a[0].push(a[1].pop());  // Returns a clicked third number.
  };`,Qe=`function sfunc () {
    b0 = b1 = b2 = b3 = b4 = b5 = b6 = b7 = "none";
    if (AA != (undefined && 0)) b0 = "inline";
    if (BB != (undefined && 0)) b1 = "inline";
    if (CC != (undefined && 0)) b2 = "inline";
    if (DD != (undefined && 0)) b3 = "inline";
    if (WW != (undefined && 0)) b4 = "inline";
    if (XX != (undefined && 0)) b5 = "inline";
    if (YY != (undefined && 0)) b6 = "inline";
    if (ZZ != (undefined && 0)) b7 = "inline";
}`,U=`var update = () => {
  AA = m2(s)[0][0];
  BB = m2(s)[0][1];
  CC = m2(s)[0][2];
  DD = m2(s)[0][3];
  EE = m2(s)[2];
  FF = m2(s)[3];
  
  WW = m2(s)[1][0];
  XX = m2(s)[1][1];
  YY = m2(s)[1][2];
  ZZ = m2(s)[1][3];
};`,Dt=`function squareFu () {m4 = m4(square)};
function cubeFu () {m4 = m4(cube)};

function divFraction (x) {
    var y = x.split('/');
    if(y.length > 1){
        return (y[0] / y[1])
    }
    else{
        return y[0];
    }
}

var powFu = function powFu (e) {
    var p = divFraction(e.target.value);
    if (e.keyCode == 13) {
        m4 = m4(pow(p));
    }
};
    
var addFu = function addFu (e) {
    if (e.keyCode == 13) {
        m4 = m4(add(e.target.value));
    };
  };
    
var multFu = function multFu (e) {
    if (e.keyCode == 13) {
        m4 = m4(mult(divFraction(e.target.value)))};
};
    
var resetFu = function resetFu (e) {
    if (e.keyCode == 13) {
        m4 = m4(reset2(divFraction(e.target.value)))
    };
};`,le=`var mon = M(2);
mon(v=>v**4)(v=>v+5)(v=>v*2);
// The value of x can be obtained later
mon('stop');  // 42`;const ye=()=>v(10,B=B(hr)),$e=()=>v(10,B=B(wr)),ge=()=>v(10,B=B(_r)),et=()=>v(10,B=B(r=>[1,2,3,4])),tt=()=>m2(Ye),H=()=>m2(ve),Ut=()=>m2(C),lt=()=>m2(Ze),W=()=>m2(A),Ht=()=>m2(je),it=()=>m2(Le),st=()=>m2(ce),ot=()=>m2(D),rt=()=>m2(J(SCORE)),X=()=>Tr(),Wt=()=>m2(be),ft=()=>m2(S);return a.$$.update=()=>{a.$$.dirty[0]&1&&v(0,P),a.$$.dirty[0]&1,a.$$.dirty[1]&1024&&v(11,be=r=>{var c=r(E)[4][0];c>0?(c=c-1,r[4][0]=c,r(w),console.log("in back. m2(s)[5] and index are",m2(E)[5],"**",c)):console.log("In back. Can't compute")})},v(13,h=m2(E)),[P,M,F,ae,G,me,pe,I,V,J,B,be,_,h,O,S,Ye,ve,C,Ze,A,je,Le,ce,D,Ge,$,Ft,Ve,g,Pt,Je,ee,St,Ke,te,At,Qe,U,Dt,le,w,ye,$e,ge,et,tt,H,Ut,lt,W,Ht,it,st,ot,rt,X,Wt,ft]}class Or extends pr{constructor(d){super();br(this,d,Rr,kr,vr,{},null,[-1,-1,-1])}}export{Or as default};
