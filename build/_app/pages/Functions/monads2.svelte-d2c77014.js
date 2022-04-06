import{S as If,i as Nf,s as Cf,e as s,k as u,t as p,L as Ff,c as o,d as t,m as n,a as b,h as m,b as Re,f as c,G as a,g as i,M as h,j as T,N as Pf,O as Mf,P as Af,Q as Of}from"../../chunks/vendor-4e552e70.js";function Sf(f){let E,r,C,I,D,fe,x,R,re,ue,P,ne,Z,j,S,L,X,U,ae,H,pe,y,F,M,me,be,xt,ge,ve,A,W,N,_,Me,z,et,Oe,q,tt,Ie,ye,Lt,lt,ce,Xt,B,ke,zt,it,V,qt,de,Ne=parseFloat(f[24](w)).toFixed(5).toString()+"",st,ot,ft,rt,G,Vt,ut,J,Gt,nt,at,pt,mt,K,Jt,bt,Q,vt,yt,ct,kt,$,Kt,dt,g,wt,_t,v,d,O,Et,il,Ce,sl,ol,fl,rl,Fe,ps,ul,Pe,nl,al,pl,ml,ht,ms,bl,Tt,bs,vl,Bt,vs,yl,Y,ys,Qt=f[22](w).join(", ")+"",cl,cs,kl,dl,wl,_l,Ae,ks,El,Se,ds,hl,De,ws,Tl,Ue,_s,Bl,Rl,Ml,Ol,Il,we,Es,Rt,hs,Ts,Nl,Mt,Bs,Cl,He,Rs,Fl,Pl,ee,Al,Sl,te,Dl,Ul,le,Hl,Wl,ie,Yl,Zl,se,Ms,jl,xl,Ll,Xl,zl,We,Os,ql,Ye,Is,Vl,Ze,Ns,Gl,je,Cs,Jl,xe,Fs,Kl,oe,Ql,$l,gl,ei,ti,Le,Ps,li,ii,si,oi,Xe,As,$t=f[14][0]+"",fi,ri,ze,Ss,gt=f[14][1]+"",ui,ni,qe,Ds,el=f[14][2]+"",ai,pi,Ve,Us,tl=f[14][3]+"",mi,bi,Ge,Hs,ll=f[14][4]+"",vi,yi,ci,ki,Je,Ws,di,_e,wi,_i,Ee,Ei,hi,he,Ti,Bi,Te,Ri,Mi,Be,Oi,Ii,Ni,Ci,Fi,Ke,Ys,Pi,Qe,Zs,Ai,$e,js,Si,Di,Ot,xs,Ui,It,Ls,Hi,Nt,Xs,Wi,Ct,zs,Yi,Ft,qs,Zi,Pt,Vs,ji,At,Gs,xi,St,Js,Li,Dt,Ks,Xi,Ut,Qs,zi,Ht,$s,qi,Wt,gs,Vi,Yt,eo,Gi,Zt,to,Ji,jt,lo,Ki,Qi,$i,gi,es,ts,ls,is,ss,os,fs,rs,k,io,yo;return{c(){E=s("link"),r=u(),C=s("br"),I=u(),D=s("div"),fe=p("**************************************************************************"),x=u(),R=s("div"),re=s("br"),ue=p(`
The Recursive Closure "m2 = M(x)" Controls the Action Without Mutating "x"`),ne=u(),Z=s("br"),j=u(),S=s("h2"),L=p("Work In Progress"),X=u(),U=s("p"),ae=p(`m2 is a recursive function spawned by the function M. Together,they form a closure as follows:
`),H=s("pre"),pe=p(f[44]),y=u(),F=s("p"),M=p("This differs from the version in "),me=s("a"),be=p("monads"),xt=p('. There, "x = func(x)" mutated x each time go(func) executed on a function "func". I see no harm in doing it that way, but I thought it would be interesting to work a version that returns M(func(x)) and thereby avoids assigning a new value to x.'),ge=u(),ve=s("p"),A=p("The game of Score in this section provides a way for players to take back actions. This depends on an array of cloned values of x, so it doesn't rely on x not being subject to mutation. I would like to preserve past states without cloning, so someday I will be back at the drawing board."),W=u(),N=s("p"),_=p(`I call functions returned by M "monads", much to the consternation of some "functional programmers" who scoff at the idea that JavaScript could possibly have monads such as those defined in the Haskell programming language. Neither my monads nor the Haskell monads are Category Theory monads. The Haskell part actually surprises some programmers. Google "hask is a category" if you don't believe me.`),Me=u(),z=s("p"),et=p('A monads created by, say, "monad = M(x)" creates an isolated pipeline allowing nested functions to operate on "x" insulated from any outer scope. For example, you could run:'),Oe=u(),q=s("pre"),tt=p(f[52]),Ie=u(),ye=s("p"),Lt=p("In the solitaire version of the game of score below, x will be an array of arrays in the form x =  [ [], [], [], [], [n] ] where x[0] contains four integers simulating a throw of two six-sided, one twelve-sided, and one twenty-sided dice. x[1] and x[3] contain the number selected by the player, x[2] is the selected operator, and x[4] keeps track of the number of successes until the player wins by reaching x[4] = 5. But first, let's consider some simpler examples."),lt=u(),ce=s("p"),Xt=p("These are the first interactive demonstration's event handlers:"),B=u(),ke=s("pre"),zt=p(f[51]),it=u(),V=s("p"),qt=p("m4(s) is "),de=s("span"),st=p(Ne),ot=u(),ft=s("br"),rt=u(),G=s("button"),Vt=p("m4(cube)"),ut=u(),J=s("button"),Gt=p("m4(square)"),nt=u(),at=s("br"),pt=s("br"),mt=u(),K=s("span"),Jt=p("To call m4(pow(n)), enter n in the box ->"),bt=u(),Q=s("input"),vt=u(),yt=s("br"),ct=s("br"),kt=u(),$=s("span"),Kt=p("To call m4(add(n)), enter n in the box ->"),dt=u(),g=s("input"),wt=u(),_t=s("br"),v=s("br"),d=u(),O=s("span"),Et=p("To call m4(mult(n)), enter n in the box ->"),il=u(),Ce=s("input"),sl=u(),ol=s("br"),fl=s("br"),rl=u(),Fe=s("span"),ps=p("To call m4(reset(n)), enter n in the box ->"),ul=u(),Pe=s("input"),nl=u(),al=s("br"),pl=s("br"),ml=u(),ht=s("p"),ms=p("Next, x will be an array manipulated by functions designed for that purpose. Here are the functions responsible for the interactive demonstration below:"),bl=u(),Tt=s("pre"),bs=p(f[45]),vl=u(),Bt=s("p"),vs=p(`If you click mon3 = mon3(g) four times and the click mon3 = mon3(g3), you will see that mon3(s) returns its original value, [1,2,3,4]. By the way, the "mon3 =" part of "mon3 = mon3(g)" is included solely to trigger updating of browser displays. Svelte doesn't have a virtual DOM, and merely changing objects isn't enough to trigger DOM updates. For example, arr = [1,2,3] doesn't change in the DOM when arr.push(888) is called. arr = arr afterwards or arr = arr.push(888) initially both do the trick.`),yl=u(),Y=s("div"),ys=p("["),cl=p(Qt),cs=p("]"),kl=u(),dl=s("br"),wl=s("br"),_l=u(),Ae=s("button"),ks=p("mon3 = mon3(g)"),El=u(),Se=s("button"),ds=p("mon3 = mon3(g2)"),hl=u(),De=s("button"),ws=p("mon3 = mon3(g3)"),Tl=u(),Ue=s("button"),_s=p("mon3 = mon3(x => [1,2,3,4])"),Bl=u(),Rl=s("br"),Ml=s("br"),Ol=s("br"),Il=u(),we=s("p"),Es=p("Now for the game of score, a game involving four dice and two or three-stage arithmetic computations with the goal of arriving at the number 20. My son Alex taught it to me a decade ago, when he was in middle school. I was also learning the Haskell programming language, so I developed a multiplayer online version with groups of interacting player, a chat box, and a shared-by-the-group todo list controlled by a Haskell WebSockets server backend. The backend could compute all possible solutions, if any existed, to any throw of the dice. It also identified all of the impossible-to-solve rolls. Users could change the default number of dice sides from 6,6,12,and 20 and the goal from the default value of 20. A version of it is online at "),Rt=s("a"),hs=p("https://score.schalk.net"),Ts=p("."),Nl=u(),Mt=s("p"),Bs=p("This demonstration doesn't work in conjunction with a remote server, nor does it feature any Haskell code. It's just a little solitaire game providing an opportunity to consider the interesting possibilities of recursive closures. Instead of being argunents of function or global object methods, these monads are functions that consume functions. When the functions consumed by monads have no side effects outside of the monad's closure -- which should always be the case -- maintenance and bug tracking become more manageable. Minimizing side effects inside of monadic closure can help even more."),Cl=u(),He=s("h3"),Rs=p("Score: "),Fl=p(f[19]),Pl=u(),ee=s("button"),Al=p(f[1]),Sl=u(),te=s("button"),Dl=p(f[2]),Ul=u(),le=s("button"),Hl=p(f[3]),Wl=u(),ie=s("button"),Yl=p(f[4]),Zl=u(),se=s("span"),Ms=p("The operator is "),jl=p(f[5]),xl=u(),Ll=s("br"),Xl=s("br"),zl=u(),We=s("button"),Os=p("add"),ql=u(),Ye=s("button"),Is=p("subtract"),Vl=u(),Ze=s("button"),Ns=p("multiply"),Gl=u(),je=s("button"),Cs=p("divide"),Jl=u(),xe=s("button"),Fs=p("concat"),Kl=u(),oe=s("span"),Ql=p(f[0]),$l=u(),gl=s("br"),ei=s("br"),ti=u(),Le=s("button"),Ps=p("ROLL"),li=u(),ii=s("br"),si=s("br"),oi=u(),Xe=s("div"),As=p("roll: "),fi=p($t),ri=u(),ze=s("div"),Ss=p("selected: "),ui=p(gt),ni=u(),qe=s("div"),Ds=p("operator: "),ai=p(el),pi=u(),Ve=s("div"),Us=p("computed: "),mi=p(tl),bi=u(),Ge=s("div"),Hs=p("score: "),vi=p(ll),yi=u(),ci=s("br"),ki=u(),Je=s("button"),Ws=p("test"),di=u(),_e=s("button"),wi=p(f[15]),_i=u(),Ee=s("button"),Ei=p(f[16]),hi=u(),he=s("button"),Ti=p(f[17]),Bi=u(),Te=s("button"),Ri=p(f[18]),Mi=u(),Be=s("button"),Oi=p(f[5]),Ii=u(),Ni=s("br"),Ci=s("br"),Fi=u(),Ke=s("button"),Ys=p("Back"),Pi=u(),Qe=s("button"),Zs=p("Forward"),Ai=u(),$e=s("h3"),js=p("index is "),Si=p(f[23]),Di=u(),Ot=s("p"),xs=p("The function fu() is the brains behing the game of Score. Each time a number is clicked, m2(fu) is called and fu does various things depending on the state of the closures value, x."),Ui=u(),It=s("p"),Ls=p("At the end of fu(), two formatting functions are Called. The first displays or hides variables in the DOM and the second updates their values. Here they are:"),Hi=u(),Nt=s("pre"),Xs=p(f[43]),Wi=u(),Ct=s("p"),zs=p('Clicking "ROLL" calls runRoll() which, in turn, calls updateRoll() to re-set HTML variables.'),Yi=u(),Ft=s("pre"),qs=p(f[46]),Zi=u(),Pt=s("p"),Vs=p('The "x = [ [], [], [], [], [0] ]" format will be maintained throught game play. x[0] simulates the dice roll; x[1] recieves integers that are clicked; x[2] holds the operator; and x[4] contains numbers that are computed. x[4] makes sure at least one computed number is involved in arriving at 20. Here are the first few functions called when a number is clicked:'),ji=u(),At=s("pre"),Gs=p(f[47]),xi=u(),St=s("p"),Js=p(`The first line of fu() is the calculation result that is generated whenever there are two items in (s)[1] and an operator in m2(s)[3]. The intersection is important in fu()'s bottom test. If "intersect", the intersection of m2(s)[1] and m2(s)[3], is empty intersect[0] returns false and the last test in fu fails, even though 20 was produced on the second computation.`),Li=u(),Dt=s("p"),Ks=p("If no operator has been selected, it's possible to click a third number. The program doesn't complain, it just puts the number back for you with:"),Xi=u(),Ut=s("pre"),Qs=p(f[48]),zi=u(),Ht=s("p"),$s=p("If you roll the dice and keep clicking on the leftmost number, you'll see the numbers shift back and forth on every try. The first element of m2(s)[0] keeps getting pulled out of the first position and pushed back on the right."),qi=u(),Wt=s("p"),gs=p(`sfunc() does some more DOM housekeeping. The buttons with dice number come and go as their CSS display strings are changed back and forth between "none" and "inline". fu() calls sfunc(). Here's how it is defined:`),Vi=u(),Yt=s("pre"),eo=p(f[49]),Gi=u(),Zt=s("p"),to=p("After each number is selected and Before calling sFunc(), fu() first updates the HTML variables as follows:"),Ji=u(),jt=s("pre"),lo=p(f[50]),Ki=u(),Qi=s("br"),$i=s("br"),gi=s("br"),es=s("br"),ts=s("br"),ls=s("br"),is=u(),ss=s("br"),os=s("br"),fs=s("br"),rs=s("br"),this.h()},l(e){const l=Ff('[data-svelte="svelte-3yzzxp"]',document.head);E=o(l,"LINK",{rel:!0,href:!0}),l.forEach(t),r=n(e),C=o(e,"BR",{}),I=n(e),D=o(e,"DIV",{});var co=b(D);fe=m(co,"**************************************************************************"),co.forEach(t),x=n(e),R=o(e,"DIV",{style:!0});var so=b(R);re=o(so,"BR",{}),ue=m(so,`
The Recursive Closure "m2 = M(x)" Controls the Action Without Mutating "x"`),so.forEach(t),ne=n(e),Z=o(e,"BR",{}),j=n(e),S=o(e,"H2",{});var ko=b(S);L=m(ko,"Work In Progress"),ko.forEach(t),X=n(e),U=o(e,"P",{});var wo=b(U);ae=m(wo,`m2 is a recursive function spawned by the function M. Together,they form a closure as follows:
`),wo.forEach(t),H=o(e,"PRE",{});var _o=b(H);pe=m(_o,f[44]),_o.forEach(t),y=n(e),F=o(e,"P",{});var us=b(F);M=m(us,"This differs from the version in "),me=o(us,"A",{href:!0});var Eo=b(me);be=m(Eo,"monads"),Eo.forEach(t),xt=m(us,'. There, "x = func(x)" mutated x each time go(func) executed on a function "func". I see no harm in doing it that way, but I thought it would be interesting to work a version that returns M(func(x)) and thereby avoids assigning a new value to x.'),us.forEach(t),ge=n(e),ve=o(e,"P",{});var ho=b(ve);A=m(ho,"The game of Score in this section provides a way for players to take back actions. This depends on an array of cloned values of x, so it doesn't rely on x not being subject to mutation. I would like to preserve past states without cloning, so someday I will be back at the drawing board."),ho.forEach(t),W=n(e),N=o(e,"P",{});var To=b(N);_=m(To,`I call functions returned by M "monads", much to the consternation of some "functional programmers" who scoff at the idea that JavaScript could possibly have monads such as those defined in the Haskell programming language. Neither my monads nor the Haskell monads are Category Theory monads. The Haskell part actually surprises some programmers. Google "hask is a category" if you don't believe me.`),To.forEach(t),Me=n(e),z=o(e,"P",{});var Bo=b(z);et=m(Bo,'A monads created by, say, "monad = M(x)" creates an isolated pipeline allowing nested functions to operate on "x" insulated from any outer scope. For example, you could run:'),Bo.forEach(t),Oe=n(e),q=o(e,"PRE",{});var Ro=b(q);tt=m(Ro,f[52]),Ro.forEach(t),Ie=n(e),ye=o(e,"P",{});var Mo=b(ye);Lt=m(Mo,"In the solitaire version of the game of score below, x will be an array of arrays in the form x =  [ [], [], [], [], [n] ] where x[0] contains four integers simulating a throw of two six-sided, one twelve-sided, and one twenty-sided dice. x[1] and x[3] contain the number selected by the player, x[2] is the selected operator, and x[4] keeps track of the number of successes until the player wins by reaching x[4] = 5. But first, let's consider some simpler examples."),Mo.forEach(t),lt=n(e),ce=o(e,"P",{});var Oo=b(ce);Xt=m(Oo,"These are the first interactive demonstration's event handlers:"),Oo.forEach(t),B=n(e),ke=o(e,"PRE",{});var Io=b(ke);zt=m(Io,f[51]),Io.forEach(t),it=n(e),V=o(e,"P",{});var oo=b(V);qt=m(oo,"m4(s) is "),de=o(oo,"SPAN",{style:!0});var No=b(de);st=m(No,Ne),No.forEach(t),oo.forEach(t),ot=n(e),ft=o(e,"BR",{}),rt=n(e),G=o(e,"BUTTON",{});var Co=b(G);Vt=m(Co,"m4(cube)"),Co.forEach(t),ut=n(e),J=o(e,"BUTTON",{});var Fo=b(J);Gt=m(Fo,"m4(square)"),Fo.forEach(t),nt=n(e),at=o(e,"BR",{}),pt=o(e,"BR",{}),mt=n(e),K=o(e,"SPAN",{style:!0});var Po=b(K);Jt=m(Po,"To call m4(pow(n)), enter n in the box ->"),Po.forEach(t),bt=n(e),Q=o(e,"INPUT",{type:!0,style:!0}),vt=n(e),yt=o(e,"BR",{}),ct=o(e,"BR",{}),kt=n(e),$=o(e,"SPAN",{style:!0});var Ao=b($);Kt=m(Ao,"To call m4(add(n)), enter n in the box ->"),Ao.forEach(t),dt=n(e),g=o(e,"INPUT",{type:!0,style:!0}),wt=n(e),_t=o(e,"BR",{}),v=o(e,"BR",{}),d=n(e),O=o(e,"SPAN",{style:!0});var So=b(O);Et=m(So,"To call m4(mult(n)), enter n in the box ->"),So.forEach(t),il=n(e),Ce=o(e,"INPUT",{type:!0,style:!0}),sl=n(e),ol=o(e,"BR",{}),fl=o(e,"BR",{}),rl=n(e),Fe=o(e,"SPAN",{style:!0});var Do=b(Fe);ps=m(Do,"To call m4(reset(n)), enter n in the box ->"),Do.forEach(t),ul=n(e),Pe=o(e,"INPUT",{type:!0,style:!0}),nl=n(e),al=o(e,"BR",{}),pl=o(e,"BR",{}),ml=n(e),ht=o(e,"P",{});var Uo=b(ht);ms=m(Uo,"Next, x will be an array manipulated by functions designed for that purpose. Here are the functions responsible for the interactive demonstration below:"),Uo.forEach(t),bl=n(e),Tt=o(e,"PRE",{});var Ho=b(Tt);bs=m(Ho,f[45]),Ho.forEach(t),vl=n(e),Bt=o(e,"P",{});var Wo=b(Bt);vs=m(Wo,`If you click mon3 = mon3(g) four times and the click mon3 = mon3(g3), you will see that mon3(s) returns its original value, [1,2,3,4]. By the way, the "mon3 =" part of "mon3 = mon3(g)" is included solely to trigger updating of browser displays. Svelte doesn't have a virtual DOM, and merely changing objects isn't enough to trigger DOM updates. For example, arr = [1,2,3] doesn't change in the DOM when arr.push(888) is called. arr = arr afterwards or arr = arr.push(888) initially both do the trick.`),Wo.forEach(t),yl=n(e),Y=o(e,"DIV",{style:!0});var ns=b(Y);ys=m(ns,"["),cl=m(ns,Qt),cs=m(ns,"]"),ns.forEach(t),kl=n(e),dl=o(e,"BR",{}),wl=o(e,"BR",{}),_l=n(e),Ae=o(e,"BUTTON",{});var Yo=b(Ae);ks=m(Yo,"mon3 = mon3(g)"),Yo.forEach(t),El=n(e),Se=o(e,"BUTTON",{});var Zo=b(Se);ds=m(Zo,"mon3 = mon3(g2)"),Zo.forEach(t),hl=n(e),De=o(e,"BUTTON",{});var jo=b(De);ws=m(jo,"mon3 = mon3(g3)"),jo.forEach(t),Tl=n(e),Ue=o(e,"BUTTON",{});var xo=b(Ue);_s=m(xo,"mon3 = mon3(x => [1,2,3,4])"),xo.forEach(t),Bl=n(e),Rl=o(e,"BR",{}),Ml=o(e,"BR",{}),Ol=o(e,"BR",{}),Il=n(e),we=o(e,"P",{});var as=b(we);Es=m(as,"Now for the game of score, a game involving four dice and two or three-stage arithmetic computations with the goal of arriving at the number 20. My son Alex taught it to me a decade ago, when he was in middle school. I was also learning the Haskell programming language, so I developed a multiplayer online version with groups of interacting player, a chat box, and a shared-by-the-group todo list controlled by a Haskell WebSockets server backend. The backend could compute all possible solutions, if any existed, to any throw of the dice. It also identified all of the impossible-to-solve rolls. Users could change the default number of dice sides from 6,6,12,and 20 and the goal from the default value of 20. A version of it is online at "),Rt=o(as,"A",{href:!0});var Lo=b(Rt);hs=m(Lo,"https://score.schalk.net"),Lo.forEach(t),Ts=m(as,"."),as.forEach(t),Nl=n(e),Mt=o(e,"P",{});var Xo=b(Mt);Bs=m(Xo,"This demonstration doesn't work in conjunction with a remote server, nor does it feature any Haskell code. It's just a little solitaire game providing an opportunity to consider the interesting possibilities of recursive closures. Instead of being argunents of function or global object methods, these monads are functions that consume functions. When the functions consumed by monads have no side effects outside of the monad's closure -- which should always be the case -- maintenance and bug tracking become more manageable. Minimizing side effects inside of monadic closure can help even more."),Xo.forEach(t),Cl=n(e),He=o(e,"H3",{});var fo=b(He);Rs=m(fo,"Score: "),Fl=m(fo,f[19]),fo.forEach(t),Pl=n(e),ee=o(e,"BUTTON",{style:!0});var zo=b(ee);Al=m(zo,f[1]),zo.forEach(t),Sl=n(e),te=o(e,"BUTTON",{style:!0});var qo=b(te);Dl=m(qo,f[2]),qo.forEach(t),Ul=n(e),le=o(e,"BUTTON",{style:!0});var Vo=b(le);Hl=m(Vo,f[3]),Vo.forEach(t),Wl=n(e),ie=o(e,"BUTTON",{style:!0});var Go=b(ie);Yl=m(Go,f[4]),Go.forEach(t),Zl=n(e),se=o(e,"SPAN",{style:!0});var ro=b(se);Ms=m(ro,"The operator is "),jl=m(ro,f[5]),ro.forEach(t),xl=n(e),Ll=o(e,"BR",{}),Xl=o(e,"BR",{}),zl=n(e),We=o(e,"BUTTON",{});var Jo=b(We);Os=m(Jo,"add"),Jo.forEach(t),ql=n(e),Ye=o(e,"BUTTON",{});var Ko=b(Ye);Is=m(Ko,"subtract"),Ko.forEach(t),Vl=n(e),Ze=o(e,"BUTTON",{});var Qo=b(Ze);Ns=m(Qo,"multiply"),Qo.forEach(t),Gl=n(e),je=o(e,"BUTTON",{});var $o=b(je);Cs=m($o,"divide"),$o.forEach(t),Jl=n(e),xe=o(e,"BUTTON",{});var go=b(xe);Fs=m(go,"concat"),go.forEach(t),Kl=n(e),oe=o(e,"SPAN",{style:!0});var ef=b(oe);Ql=m(ef,f[0]),ef.forEach(t),$l=n(e),gl=o(e,"BR",{}),ei=o(e,"BR",{}),ti=n(e),Le=o(e,"BUTTON",{});var tf=b(Le);Ps=m(tf,"ROLL"),tf.forEach(t),li=n(e),ii=o(e,"BR",{}),si=o(e,"BR",{}),oi=n(e),Xe=o(e,"DIV",{});var uo=b(Xe);As=m(uo,"roll: "),fi=m(uo,$t),uo.forEach(t),ri=n(e),ze=o(e,"DIV",{});var no=b(ze);Ss=m(no,"selected: "),ui=m(no,gt),no.forEach(t),ni=n(e),qe=o(e,"DIV",{});var ao=b(qe);Ds=m(ao,"operator: "),ai=m(ao,el),ao.forEach(t),pi=n(e),Ve=o(e,"DIV",{});var po=b(Ve);Us=m(po,"computed: "),mi=m(po,tl),po.forEach(t),bi=n(e),Ge=o(e,"DIV",{});var mo=b(Ge);Hs=m(mo,"score: "),vi=m(mo,ll),mo.forEach(t),yi=n(e),ci=o(e,"BR",{}),ki=n(e),Je=o(e,"BUTTON",{});var lf=b(Je);Ws=m(lf,"test"),lf.forEach(t),di=n(e),_e=o(e,"BUTTON",{style:!0});var sf=b(_e);wi=m(sf,f[15]),sf.forEach(t),_i=n(e),Ee=o(e,"BUTTON",{style:!0});var of=b(Ee);Ei=m(of,f[16]),of.forEach(t),hi=n(e),he=o(e,"BUTTON",{style:!0});var ff=b(he);Ti=m(ff,f[17]),ff.forEach(t),Bi=n(e),Te=o(e,"BUTTON",{style:!0});var rf=b(Te);Ri=m(rf,f[18]),rf.forEach(t),Mi=n(e),Be=o(e,"BUTTON",{style:!0});var uf=b(Be);Oi=m(uf,f[5]),uf.forEach(t),Ii=n(e),Ni=o(e,"BR",{}),Ci=o(e,"BR",{}),Fi=n(e),Ke=o(e,"BUTTON",{});var nf=b(Ke);Ys=m(nf,"Back"),nf.forEach(t),Pi=n(e),Qe=o(e,"BUTTON",{});var af=b(Qe);Zs=m(af,"Forward"),af.forEach(t),Ai=n(e),$e=o(e,"H3",{});var bo=b($e);js=m(bo,"index is "),Si=m(bo,f[23]),bo.forEach(t),Di=n(e),Ot=o(e,"P",{});var pf=b(Ot);xs=m(pf,"The function fu() is the brains behing the game of Score. Each time a number is clicked, m2(fu) is called and fu does various things depending on the state of the closures value, x."),pf.forEach(t),Ui=n(e),It=o(e,"P",{});var mf=b(It);Ls=m(mf,"At the end of fu(), two formatting functions are Called. The first displays or hides variables in the DOM and the second updates their values. Here they are:"),mf.forEach(t),Hi=n(e),Nt=o(e,"PRE",{});var bf=b(Nt);Xs=m(bf,f[43]),bf.forEach(t),Wi=n(e),Ct=o(e,"P",{});var vf=b(Ct);zs=m(vf,'Clicking "ROLL" calls runRoll() which, in turn, calls updateRoll() to re-set HTML variables.'),vf.forEach(t),Yi=n(e),Ft=o(e,"PRE",{});var yf=b(Ft);qs=m(yf,f[46]),yf.forEach(t),Zi=n(e),Pt=o(e,"P",{});var cf=b(Pt);Vs=m(cf,'The "x = [ [], [], [], [], [0] ]" format will be maintained throught game play. x[0] simulates the dice roll; x[1] recieves integers that are clicked; x[2] holds the operator; and x[4] contains numbers that are computed. x[4] makes sure at least one computed number is involved in arriving at 20. Here are the first few functions called when a number is clicked:'),cf.forEach(t),ji=n(e),At=o(e,"PRE",{});var kf=b(At);Gs=m(kf,f[47]),kf.forEach(t),xi=n(e),St=o(e,"P",{});var df=b(St);Js=m(df,`The first line of fu() is the calculation result that is generated whenever there are two items in (s)[1] and an operator in m2(s)[3]. The intersection is important in fu()'s bottom test. If "intersect", the intersection of m2(s)[1] and m2(s)[3], is empty intersect[0] returns false and the last test in fu fails, even though 20 was produced on the second computation.`),df.forEach(t),Li=n(e),Dt=o(e,"P",{});var wf=b(Dt);Ks=m(wf,"If no operator has been selected, it's possible to click a third number. The program doesn't complain, it just puts the number back for you with:"),wf.forEach(t),Xi=n(e),Ut=o(e,"PRE",{});var _f=b(Ut);Qs=m(_f,f[48]),_f.forEach(t),zi=n(e),Ht=o(e,"P",{});var Ef=b(Ht);$s=m(Ef,"If you roll the dice and keep clicking on the leftmost number, you'll see the numbers shift back and forth on every try. The first element of m2(s)[0] keeps getting pulled out of the first position and pushed back on the right."),Ef.forEach(t),qi=n(e),Wt=o(e,"P",{});var hf=b(Wt);gs=m(hf,`sfunc() does some more DOM housekeeping. The buttons with dice number come and go as their CSS display strings are changed back and forth between "none" and "inline". fu() calls sfunc(). Here's how it is defined:`),hf.forEach(t),Vi=n(e),Yt=o(e,"PRE",{});var Tf=b(Yt);eo=m(Tf,f[49]),Tf.forEach(t),Gi=n(e),Zt=o(e,"P",{});var Bf=b(Zt);to=m(Bf,"After each number is selected and Before calling sFunc(), fu() first updates the HTML variables as follows:"),Bf.forEach(t),Ji=n(e),jt=o(e,"PRE",{});var Rf=b(jt);lo=m(Rf,f[50]),Rf.forEach(t),Ki=n(e),Qi=o(e,"BR",{}),$i=o(e,"BR",{}),gi=o(e,"BR",{}),es=o(e,"BR",{}),ts=o(e,"BR",{}),ls=o(e,"BR",{}),is=n(e),ss=o(e,"BR",{}),os=o(e,"BR",{}),fs=o(e,"BR",{}),rs=o(e,"BR",{}),this.h()},h(){document.title="Recursive Closures Without Mutating State ",Re(E,"rel","stylesheet"),Re(E,"href","../Functions/style.css"),c(R,"font-family","Times New Roman"),c(R,"text-align","center"),c(R,"font-size","32px"),Re(me,"href","./monads"),c(de,"font-size","54px"),c(K,"font-size","24px"),Re(Q,"type","text"),c(Q,"width","65px"),c($,"font-size","24px"),Re(g,"type","number"),c(g,"width","65px"),c(O,"font-size","24px"),Re(Ce,"type","text"),c(Ce,"width","65px"),c(Fe,"font-size","24px"),Re(Pe,"type","number"),c(Pe,"width","65px"),c(Y,"margin-left","10%"),c(Y,"font-size","44px"),c(Y,"color","#ddaadd"),Re(Rt,"href","https://score.schalk.net"),c(ee,"display",f[6]),c(te,"display",f[7]),c(le,"display",f[8]),c(ie,"display",f[9]),c(se,"margin-left","8%"),c(se,"font-size","22px"),c(oe,"margin-left","20px"),c(oe,"color","#bbbbff"),c(oe,"font-size","28px"),c(_e,"display",f[10]),c(Ee,"display",f[11]),c(he,"display",f[12]),c(Te,"display",f[13]),c(Be,"display",f[13])},m(e,l){a(document.head,E),i(e,r,l),i(e,C,l),i(e,I,l),i(e,D,l),a(D,fe),i(e,x,l),i(e,R,l),a(R,re),a(R,ue),i(e,ne,l),i(e,Z,l),i(e,j,l),i(e,S,l),a(S,L),i(e,X,l),i(e,U,l),a(U,ae),i(e,H,l),a(H,pe),i(e,y,l),i(e,F,l),a(F,M),a(F,me),a(me,be),a(F,xt),i(e,ge,l),i(e,ve,l),a(ve,A),i(e,W,l),i(e,N,l),a(N,_),i(e,Me,l),i(e,z,l),a(z,et),i(e,Oe,l),i(e,q,l),a(q,tt),i(e,Ie,l),i(e,ye,l),a(ye,Lt),i(e,lt,l),i(e,ce,l),a(ce,Xt),i(e,B,l),i(e,ke,l),a(ke,zt),i(e,it,l),i(e,V,l),a(V,qt),a(V,de),a(de,st),i(e,ot,l),i(e,ft,l),i(e,rt,l),i(e,G,l),a(G,Vt),i(e,ut,l),i(e,J,l),a(J,Gt),i(e,nt,l),i(e,at,l),i(e,pt,l),i(e,mt,l),i(e,K,l),a(K,Jt),i(e,bt,l),i(e,Q,l),i(e,vt,l),i(e,yt,l),i(e,ct,l),i(e,kt,l),i(e,$,l),a($,Kt),i(e,dt,l),i(e,g,l),i(e,wt,l),i(e,_t,l),i(e,v,l),i(e,d,l),i(e,O,l),a(O,Et),i(e,il,l),i(e,Ce,l),i(e,sl,l),i(e,ol,l),i(e,fl,l),i(e,rl,l),i(e,Fe,l),a(Fe,ps),i(e,ul,l),i(e,Pe,l),i(e,nl,l),i(e,al,l),i(e,pl,l),i(e,ml,l),i(e,ht,l),a(ht,ms),i(e,bl,l),i(e,Tt,l),a(Tt,bs),i(e,vl,l),i(e,Bt,l),a(Bt,vs),i(e,yl,l),i(e,Y,l),a(Y,ys),a(Y,cl),a(Y,cs),i(e,kl,l),i(e,dl,l),i(e,wl,l),i(e,_l,l),i(e,Ae,l),a(Ae,ks),i(e,El,l),i(e,Se,l),a(Se,ds),i(e,hl,l),i(e,De,l),a(De,ws),i(e,Tl,l),i(e,Ue,l),a(Ue,_s),i(e,Bl,l),i(e,Rl,l),i(e,Ml,l),i(e,Ol,l),i(e,Il,l),i(e,we,l),a(we,Es),a(we,Rt),a(Rt,hs),a(we,Ts),i(e,Nl,l),i(e,Mt,l),a(Mt,Bs),i(e,Cl,l),i(e,He,l),a(He,Rs),a(He,Fl),i(e,Pl,l),i(e,ee,l),a(ee,Al),i(e,Sl,l),i(e,te,l),a(te,Dl),i(e,Ul,l),i(e,le,l),a(le,Hl),i(e,Wl,l),i(e,ie,l),a(ie,Yl),i(e,Zl,l),i(e,se,l),a(se,Ms),a(se,jl),i(e,xl,l),i(e,Ll,l),i(e,Xl,l),i(e,zl,l),i(e,We,l),a(We,Os),i(e,ql,l),i(e,Ye,l),a(Ye,Is),i(e,Vl,l),i(e,Ze,l),a(Ze,Ns),i(e,Gl,l),i(e,je,l),a(je,Cs),i(e,Jl,l),i(e,xe,l),a(xe,Fs),i(e,Kl,l),i(e,oe,l),a(oe,Ql),i(e,$l,l),i(e,gl,l),i(e,ei,l),i(e,ti,l),i(e,Le,l),a(Le,Ps),i(e,li,l),i(e,ii,l),i(e,si,l),i(e,oi,l),i(e,Xe,l),a(Xe,As),a(Xe,fi),i(e,ri,l),i(e,ze,l),a(ze,Ss),a(ze,ui),i(e,ni,l),i(e,qe,l),a(qe,Ds),a(qe,ai),i(e,pi,l),i(e,Ve,l),a(Ve,Us),a(Ve,mi),i(e,bi,l),i(e,Ge,l),a(Ge,Hs),a(Ge,vi),i(e,yi,l),i(e,ci,l),i(e,ki,l),i(e,Je,l),a(Je,Ws),i(e,di,l),i(e,_e,l),a(_e,wi),i(e,_i,l),i(e,Ee,l),a(Ee,Ei),i(e,hi,l),i(e,he,l),a(he,Ti),i(e,Bi,l),i(e,Te,l),a(Te,Ri),i(e,Mi,l),i(e,Be,l),a(Be,Oi),i(e,Ii,l),i(e,Ni,l),i(e,Ci,l),i(e,Fi,l),i(e,Ke,l),a(Ke,Ys),i(e,Pi,l),i(e,Qe,l),a(Qe,Zs),i(e,Ai,l),i(e,$e,l),a($e,js),a($e,Si),i(e,Di,l),i(e,Ot,l),a(Ot,xs),i(e,Ui,l),i(e,It,l),a(It,Ls),i(e,Hi,l),i(e,Nt,l),a(Nt,Xs),i(e,Wi,l),i(e,Ct,l),a(Ct,zs),i(e,Yi,l),i(e,Ft,l),a(Ft,qs),i(e,Zi,l),i(e,Pt,l),a(Pt,Vs),i(e,ji,l),i(e,At,l),a(At,Gs),i(e,xi,l),i(e,St,l),a(St,Js),i(e,Li,l),i(e,Dt,l),a(Dt,Ks),i(e,Xi,l),i(e,Ut,l),a(Ut,Qs),i(e,zi,l),i(e,Ht,l),a(Ht,$s),i(e,qi,l),i(e,Wt,l),a(Wt,gs),i(e,Vi,l),i(e,Yt,l),a(Yt,eo),i(e,Gi,l),i(e,Zt,l),a(Zt,to),i(e,Ji,l),i(e,jt,l),a(jt,lo),i(e,Ki,l),i(e,Qi,l),i(e,$i,l),i(e,gi,l),i(e,es,l),i(e,ts,l),i(e,ls,l),i(e,is,l),i(e,ss,l),i(e,os,l),i(e,fs,l),i(e,rs,l),k=!0,io||(yo=[h(G,"click",f[38]),h(J,"click",f[37]),h(Q,"keydown",f[39]),h(g,"keydown",f[40]),h(Ce,"keydown",f[41]),h(Pe,"keydown",f[42]),h(Ae,"click",f[53]),h(Se,"click",f[54]),h(De,"click",f[55]),h(Ue,"click",f[56]),h(ee,"click",f[57]),h(te,"click",f[58]),h(le,"click",f[59]),h(ie,"click",f[60]),h(We,"click",f[32]),h(Ye,"click",f[33]),h(Ze,"click",f[34]),h(je,"click",f[35]),h(xe,"click",f[36]),h(Le,"click",f[61]),h(Je,"click",f[62]),h(Ke,"click",f[63]),h(Qe,"click",f[64])],io=!0)},p(e,l){(!k||l[0]&16777216)&&Ne!==(Ne=parseFloat(e[24](w)).toFixed(5).toString()+"")&&T(st,Ne),(!k||l[0]&4194304)&&Qt!==(Qt=e[22](w).join(", ")+"")&&T(cl,Qt),(!k||l[0]&524288)&&T(Fl,e[19]),(!k||l[0]&2)&&T(Al,e[1]),(!k||l[0]&64)&&c(ee,"display",e[6]),(!k||l[0]&4)&&T(Dl,e[2]),(!k||l[0]&128)&&c(te,"display",e[7]),(!k||l[0]&8)&&T(Hl,e[3]),(!k||l[0]&256)&&c(le,"display",e[8]),(!k||l[0]&16)&&T(Yl,e[4]),(!k||l[0]&512)&&c(ie,"display",e[9]),(!k||l[0]&32)&&T(jl,e[5]),(!k||l[0]&1)&&T(Ql,e[0]),(!k||l[0]&16384)&&$t!==($t=e[14][0]+"")&&T(fi,$t),(!k||l[0]&16384)&&gt!==(gt=e[14][1]+"")&&T(ui,gt),(!k||l[0]&16384)&&el!==(el=e[14][2]+"")&&T(ai,el),(!k||l[0]&16384)&&tl!==(tl=e[14][3]+"")&&T(mi,tl),(!k||l[0]&16384)&&ll!==(ll=e[14][4]+"")&&T(vi,ll),(!k||l[0]&32768)&&T(wi,e[15]),(!k||l[0]&1024)&&c(_e,"display",e[10]),(!k||l[0]&65536)&&T(Ei,e[16]),(!k||l[0]&2048)&&c(Ee,"display",e[11]),(!k||l[0]&131072)&&T(Ti,e[17]),(!k||l[0]&4096)&&c(he,"display",e[12]),(!k||l[0]&262144)&&T(Ri,e[18]),(!k||l[0]&8192)&&c(Te,"display",e[13]),(!k||l[0]&32)&&T(Oi,e[5]),(!k||l[0]&8192)&&c(Be,"display",e[13]),(!k||l[0]&8388608)&&T(Si,e[23])},i(e){k||(Pf(()=>{P||(P=Mf(R,Of,{},!0)),P.run(1)}),k=!0)},o(e){P||(P=Mf(R,Of,{},!1)),P.run(0),k=!1},d(e){t(E),e&&t(r),e&&t(C),e&&t(I),e&&t(D),e&&t(x),e&&t(R),e&&P&&P.end(),e&&t(ne),e&&t(Z),e&&t(j),e&&t(S),e&&t(X),e&&t(U),e&&t(H),e&&t(y),e&&t(F),e&&t(ge),e&&t(ve),e&&t(W),e&&t(N),e&&t(Me),e&&t(z),e&&t(Oe),e&&t(q),e&&t(Ie),e&&t(ye),e&&t(lt),e&&t(ce),e&&t(B),e&&t(ke),e&&t(it),e&&t(V),e&&t(ot),e&&t(ft),e&&t(rt),e&&t(G),e&&t(ut),e&&t(J),e&&t(nt),e&&t(at),e&&t(pt),e&&t(mt),e&&t(K),e&&t(bt),e&&t(Q),e&&t(vt),e&&t(yt),e&&t(ct),e&&t(kt),e&&t($),e&&t(dt),e&&t(g),e&&t(wt),e&&t(_t),e&&t(v),e&&t(d),e&&t(O),e&&t(il),e&&t(Ce),e&&t(sl),e&&t(ol),e&&t(fl),e&&t(rl),e&&t(Fe),e&&t(ul),e&&t(Pe),e&&t(nl),e&&t(al),e&&t(pl),e&&t(ml),e&&t(ht),e&&t(bl),e&&t(Tt),e&&t(vl),e&&t(Bt),e&&t(yl),e&&t(Y),e&&t(kl),e&&t(dl),e&&t(wl),e&&t(_l),e&&t(Ae),e&&t(El),e&&t(Se),e&&t(hl),e&&t(De),e&&t(Tl),e&&t(Ue),e&&t(Bl),e&&t(Rl),e&&t(Ml),e&&t(Ol),e&&t(Il),e&&t(we),e&&t(Nl),e&&t(Mt),e&&t(Cl),e&&t(He),e&&t(Pl),e&&t(ee),e&&t(Sl),e&&t(te),e&&t(Ul),e&&t(le),e&&t(Wl),e&&t(ie),e&&t(Zl),e&&t(se),e&&t(xl),e&&t(Ll),e&&t(Xl),e&&t(zl),e&&t(We),e&&t(ql),e&&t(Ye),e&&t(Vl),e&&t(Ze),e&&t(Gl),e&&t(je),e&&t(Jl),e&&t(xe),e&&t(Kl),e&&t(oe),e&&t($l),e&&t(gl),e&&t(ei),e&&t(ti),e&&t(Le),e&&t(li),e&&t(ii),e&&t(si),e&&t(oi),e&&t(Xe),e&&t(ri),e&&t(ze),e&&t(ni),e&&t(qe),e&&t(pi),e&&t(Ve),e&&t(bi),e&&t(Ge),e&&t(yi),e&&t(ci),e&&t(ki),e&&t(Je),e&&t(di),e&&t(_e),e&&t(_i),e&&t(Ee),e&&t(hi),e&&t(he),e&&t(Bi),e&&t(Te),e&&t(Mi),e&&t(Be),e&&t(Ii),e&&t(Ni),e&&t(Ci),e&&t(Fi),e&&t(Ke),e&&t(Pi),e&&t(Qe),e&&t(Ai),e&&t($e),e&&t(Di),e&&t(Ot),e&&t(Ui),e&&t(It),e&&t(Hi),e&&t(Nt),e&&t(Wi),e&&t(Ct),e&&t(Yi),e&&t(Ft),e&&t(Zi),e&&t(Pt),e&&t(ji),e&&t(At),e&&t(xi),e&&t(St),e&&t(Li),e&&t(Dt),e&&t(Xi),e&&t(Ut),e&&t(zi),e&&t(Ht),e&&t(qi),e&&t(Wt),e&&t(Vi),e&&t(Yt),e&&t(Gi),e&&t(Zt),e&&t(Ji),e&&t(jt),e&&t(Ki),e&&t(Qi),e&&t($i),e&&t(gi),e&&t(es),e&&t(ts),e&&t(ls),e&&t(is),e&&t(ss),e&&t(os),e&&t(fs),e&&t(rs),io=!1,Af(yo)}}}var w="stop";function Df(f,E,r){var C=parseInt(f,10),I=parseInt(E,10);return r==="+"?C+I:r==="*"?C*I:r==="-"?C-I:r==="/"?C/I:r==="concat"?parseInt(""+C+I,10):"fubar"}function Uf(f){var E=f.pop()**3;return f.unshift(E),f}function Hf(f){return f.flatMap(E=>(E+1)**3)}function Wf(f){return f.flatMap(E=>Math.round(E**(1/3)))}function Yf(f){return JSON.parse(JSON.stringify(f))}function vo(f){var E=f.split("/");return E.length>1?E[0]/E[1]:E[0]}function Zf(f,E){return f.filter(r=>E.includes(r))}function jf(f,E,r){var Z,j,S,L,C,I="none",D="none",fe="none",x="none",R="none",re="none",ue="none",P="none",ne=[[0,0,0,0],[],[],[],[0]],Z,j,S,L,X,U,ae,H,pe=[0],y,F="",M,me=[[0,0,0,0],[],[],[],[0]],be;be=v=>{r(20,y=N([[Math.floor(Math.random()*6)+1,Math.floor(Math.random()*6)+1,Math.floor(Math.random()*12)+1,Math.floor(Math.random()*20)+1],[],[],[],[v]])),xt(),r(14,ne=y("stop")),W=[],r(23,_=0)};const xt=()=>{r(1,Z=y(w)[0][0]),r(2,j=y(w)[0][1]),r(3,S=y(w)[0][2]),r(4,L=y(w)[0][3]),r(15,X=y(w)[1][0]),r(16,U=y(w)[1][1]),r(17,ae=y(w)[1][2]),r(18,H=y(w)[1][3]),r(5,C=y(w)[2]),y(w)[3],r(19,pe=y(w)[4]),r(6,I=r(7,D=r(8,fe=r(9,x="inline")))),r(10,R=r(11,re=r(12,ue=r(13,P="none"))))};function ge(){r(6,I=r(7,D=r(8,fe=r(9,x=r(10,R=r(11,re=r(12,ue=r(13,P="none")))))))),Z!=null&&r(6,I="inline"),j!=null&&r(7,D="inline"),S!=null&&r(8,fe="inline"),L!=null&&r(9,x="inline"),X!=null&&r(10,R="inline"),U!=null&&r(11,re="inline"),ae!=null&&r(12,ue="inline"),H!=null&&r(13,P="inline")}var ve=()=>{r(1,Z=y(w)[0][0]),r(2,j=y(w)[0][1]),r(3,S=y(w)[0][2]),r(4,L=y(w)[0][3]),r(5,C=y(w)[2]),y(w)[3],r(19,pe=y(w)[4]),r(15,X=y(w)[1][0]),r(16,U=y(w)[1][1]),r(17,ae=y(w)[1][2]),r(18,H=y(w)[1][3])},A=N([1,2,3,4]),W=[];function N(v){return function(d){if(typeof d=="function")return W.push(Yf(v)),N(d(v));if(d==="stop")return v}}var _=1,Me=v=>{_>0?(r(23,_=_-1),r(20,y=N(W[_])),y(M),console.log("in back. m2(s) and index are",y(w),_)):console.log("In back. Can't compute")},z=v=>{_<W.length-1?(r(23,_=_+1),r(20,y=N(W[_])),y(M),console.log("in back. m2(s) and index are",y(w),_)):console.log("In forward. Can't compute")};function et(){console.log(y(w))}M=v=>{console.log("AR and index are",W,_),r(14,ne=v);var d,O=v[4][0],Et;return v[1].length===2&&v[2].length===1&&(Et=v[1],d=Df(v[1][0],v[1][1],v[2][0]),v[0].push(d),v[3].push(d),v[1]=[]),v[1].length===3&&v[0].push(v[1].pop()),d==20&&Zf(Et,v[3]).length>0&&(v[4][0]===4?(v[4]=0,r(0,F="You win! "),O=0):(O=O*1,O+=1,r(0,F="           Your score increased to "+O)),be(O),setTimeout(()=>r(0,F=""),3e3)),ve(),ge(),v},y=N(me);var Oe=v=>{v[1].push(v[0].splice(0,1)[0]),y(M),r(23,_+=1)},q=v=>{v[1].push(v[0].splice(1,1)[0]),y(M),r(23,_+=1)},tt=v=>{v[1].push(v[0].splice(2,1)[0]),y(M),r(23,_+=1)},Ie=v=>{v[1].push(v[0].splice(3,1)[0]),y(M),r(23,_+=1)};function ye(){y(v=>v[2]=["+"]),y(M),r(20,y),r(23,_+=1)}function Lt(){y(v=>v[2]=["-"]),y(M),r(20,y),r(23,_+=1)}_+=1,_+=1;function lt(){y(v=>v[2]=["*"]),y(M),r(20,y),r(23,_+=1)}function ce(){y(v=>v[2]=["/"]),y(M),r(20,y),r(23,_+=1)}function Xt(){y(v=>v[2]=["concat"]),y(M),r(20,y),r(23,_+=1)}var B=N(3.1415926535),ke=v=>v**3,zt=v=>v*v,it=v=>d=>d**v,V=v=>d=>1*d+1*v,qt=v=>d=>d*v,de=v=>d=>v;function Ne(){r(24,B=B(zt))}function st(){r(24,B=B(ke))}var ot=function(d){var O=vo(d.target.value);d.keyCode==13&&r(24,B=B(it(O)))},ft=function(d){d.keyCode==13&&r(24,B=B(V(d.target.value)))},rt=function(d){d.keyCode==13&&r(24,B=B(qt(vo(d.target.value))))},G=function(d){d.keyCode==13&&r(24,B=B(de(vo(d.target.value))))},Vt=`fu = a => {  m2(fu) caused fu to operate on the closure's current value, a.
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
}`,ut=`function M (x) {
    return function (func) {
        if (typeof func === "function") {
            return M(func(x));
        }
        else if (func === "stop") return x;
    }
};`,J=`var mon3 = M([1,2,3,4]);
function g(ar) {
    var x = (ar.pop())**3;
    ar.unshift(x);
  return ar;
};
function g2 (ar) {return (ar.flatMap(v => (v+1)**3))};
function g3 (ar) {return (ar.flatMap(v => Math.round(v**(1/3))))};`,Gt=`runRoll = x => {
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
};`,nt=`function clic0 () {
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
};`,at=`if (a[1].length === 3) {   
    a[0].push(a[1].pop());  // Returns a clicked third number.
  };`,pt=`function sfunc () {
    b0 = b1 = b2 = b3 = b4 = b5 = b6 = b7 = "none";
    if (AA != (undefined && 0)) b0 = "inline";
    if (BB != (undefined && 0)) b1 = "inline";
    if (CC != (undefined && 0)) b2 = "inline";
    if (DD != (undefined && 0)) b3 = "inline";
    if (WW != (undefined && 0)) b4 = "inline";
    if (XX != (undefined && 0)) b5 = "inline";
    if (YY != (undefined && 0)) b6 = "inline";
    if (ZZ != (undefined && 0)) b7 = "inline";
}`,mt=`var update = () => {
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
};`,K=`function squareFu () {m4 = m4(square)};
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
};`,Jt=`var mon = M(2);
mon(v=>v**4)(v=>v+5)(v=>v*2);
// The value of x can be obtained later
mon('stop');  // 42`;y=N([[0,0,0,0],[],[],[],[0]]);const bt=()=>r(22,A=A(Uf)),Q=()=>r(22,A=A(Hf)),vt=()=>r(22,A=A(Wf)),yt=()=>r(22,A=A(v=>[1,2,3,4])),ct=()=>y(Oe),kt=()=>y(q),$=()=>y(tt),Kt=()=>y(Ie),dt=()=>be(pe),g=()=>et(),wt=()=>y(Me),_t=()=>y(z);return f.$$.update=()=>{f.$$.dirty[0]&1&&r(0,F),f.$$.dirty[0]&1},[F,Z,j,S,L,C,I,D,fe,x,R,re,ue,P,ne,X,U,ae,H,pe,y,be,A,_,B,Me,z,et,Oe,q,tt,Ie,ye,Lt,lt,ce,Xt,Ne,st,ot,ft,rt,G,Vt,ut,J,Gt,nt,at,pt,mt,K,Jt,bt,Q,vt,yt,ct,kt,$,Kt,dt,g,wt,_t]}class Lf extends If{constructor(E){super();Nf(this,E,jf,Sf,Cf,{},null,[-1,-1,-1,-1])}}export{Lf as default};
