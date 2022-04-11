import{S as nr,i as fr,s as ur,e as s,k as u,t as m,L as ar,c as r,d as t,m as a,a as c,h as b,b as Y,f as d,G as p,g as i,M as _,j as x,N as pr,O as or,P as mr,Q as sr}from"../../chunks/vendor-4e552e70.js";function br(n){let w,f,B,M,C,pe,X,R,me,be,I,z,F,O,N,U,W,S,q,Z,h,J,A,Ut,Ie,he,j,P,ce,L,V,Ne,K,ge,Pe,H,$e,G,et,T,tt,ye,Wt,lt,de,Zt,it,ve,jt,ot,we,Lt,st,ke,Yt,rt,_e,Xt,nt,Q,zt,Ee,Se=parseFloat(n[23](y)).toFixed(5).toString()+"",ft,ut,at,pt,g,qt,mt,$,Jt,bt,ht,ct,yt,ee,Vt,dt,te,o,v,le,Te,Ce,gi,gt,Fe,$t,el,tl,ll,Oe,$i,il,Ae,ol,sl,rl,nl,He,eo,fl,De,ul,al,pl,ml,vt,to,bl,wt,lo,hl,kt,io,cl,D,oo,Kt=n[20](y).join(", ")+"",yl,so,dl,vl,wl,kl,Ue,ro,_l,We,no,El,Ze,fo,Tl,je,uo,Ml,Bl,Rl,xl,Il,ie,ao,_t,po,mo,Nl,Et,bo,Pl,Le,ho,Gt=n[0](y)[4]+"",Sl,Cl,oe,Fl,Ol,se,Al,Hl,re,Dl,Ul,ne,Wl,Zl,fe,co,Qt=n[0](y)[2]+"",jl,Ll,Yl,Xl,zl,Ye,yo,ql,Xe,vo,Jl,ze,wo,Vl,qe,ko,Kl,Je,_o,Gl,ue,Ql,gl,ae,$l,ei,ti,li,ii,Ve,Eo,oi,si,ri,ni,Ke,To,fi,Me,ui,ai,Be,pi,mi,Re,bi,hi,xe,ci,yi,di,vi,wi,Ge,Mo,ki,Qe,Bo,_i,Tt,Ro,Ei,Mt,xo,Ti,Bt,Io,Mi,Rt,No,Bi,xt,Po,Ri,It,So,xi,Nt,Co,Ii,Pt,Fo,Ni,St,Oo,Pi,Ct,Ao,Si,Ft,Ho,Ci,Ot,Do,Fi,At,Uo,Oi,Ht,Wo,Ai,Dt,Zo,Hi,Di,Ui,Wi,Zi,ji,Li,Yi,Xi,zi,qi,Ji,k,jo,Jo;return{c(){w=s("link"),f=u(),B=s("br"),M=u(),C=s("div"),pe=m("**************************************************************************"),X=u(),R=s("div"),me=s("br"),be=m(`
A Very Simple Recursive Closure Insulates and Controls State Transformations`),z=u(),F=s("br"),O=u(),N=s("p"),U=m("Various bloggers and writers make define functional programming and JavaScript monads, if they deem their existence possible, in various ways. I'm not saying any of them are right or wrong. In these areas, everyone is entitled to an opinion."),W=u(),S=s("p"),q=m(`In my opinion, contorted efforts to make strictly typed JavaScript resemble the basic monads found in the Haskell Prelude module might be amusing for some, but aren't likely to ever be useful. People who think Haskell, or the supposed mathematical category of Haskell types and function called "Hask" are actually Category Theory categories are mistaken. Category Theory inspired the development of Haskell monads and it might not be a coincedence that the monads I am about to define are essentially similar to Haskell monads though superficially very different.`),Z=u(),h=s("p"),J=m('Recursive closures spawned by "M" will control a fairly complicated dice game called "Score" ('),A=s("a"),Ut=m("Link To Score"),Ie=m(`) m2, defined by "m2 = M(x)" where x = [ [], [], [], [], [0], [], [0], [] ], will do the work by consuming functions that operate internally on x. x will represent the ever-changing state of game play.But first we'll let x be a number and then a simple array of numbers in order to show how the monad works. Experienced programmers will be capable of seeing what is going on by just looking at the code, but such people might not see this until the end of a hectic work day, a time when they might appreciate an elementary walk-through. Students will benfit from understanding what is going on here. They aren't likely to learn about the possibility of such things in their classrooms. Here's the definition of "M":`),he=u(),j=s("pre"),P=m(n[40]),ce=u(),L=s("p"),V=m(`Notice that the anonymous function returned by "M" returns a brand new monad in which the value of "x" is func(x') where x' is the previous value of x in "M(x)". This is its definition:`),Ne=u(),K=s("pre"),ge=m(n[49]),Pe=u(),H=s("p"),$e=m("It isn't on the menu, but you can see it in action here: "),G=s("a"),et=m("Monads That Mutate State"),T=m('. There, the function returned by "M" is named and x = func(x)" mutates x each time go(func) executed on a function "func". It is a little less elegant than the version presented here and changing "x" would have a tendency to change earlier versions, making reverting to prior states by pressing the "BACK" button problematic as opposed to its being problem-free when we re-define "x" inside of a new closure.'),tt=u(),ye=s("p"),Wt=m(`I call functions returned by M "monads", much to the consternation of some "functional programmers" who scoff at the idea that JavaScript could possibly have monads such as those defined in the Haskell programming language. Neither my monads nor the Haskell monads are Category Theory monads. Haskell monads insulate chained computation from the global space, consuming functions that return new Monads. Mine happen to do the same thing. Haskell monads need to navegate through various types but I don't bother with that. The definition of "M" shows that the returned function responds to arguments that are functions and also to the string "Stop."`),lt=u(),de=s("p"),Zt=m(`A monads created by, say, "mon = M(x)" can create an insolated pipeline of state transformations that can wait indefinitely for mon('stop') to return the result. Transformations of M's state can resume at any time. For example, you could run:`),it=u(),ve=s("pre"),jt=m(n[48]),ot=u(),we=s("p"),Lt=m("In the solitaire version of the game of score below, x will be an array of arrays in the form x =  [ [], [], [], [], [], [], [], [] ] where x[0] starts out as four integers simulating a throw of two six-sided, one twelve-sided, and one twenty-sided dice. x[1] and x[3] contain the number selected by the player, x[2] is the selected operator, and x[4] keeps track of the number of successes until the player wins by reaching x[4] = 5, x[5] contains all prior states as the player selects numbers and operators and is used for reversing state a little or all the way back to the original roll, x[6] is an index of where in x[5] play is taking place, and x[7] contains every state during a round and uses x[6] to travers the history of game play forward. Before getting to that, here's one more simple example:"),st=u(),ke=s("p"),Yt=m("These are the demonstration's event handlers:"),rt=u(),_e=s("pre"),Xt=m(n[47]),nt=u(),Q=s("p"),zt=m("m4(s) is "),Ee=s("span"),ft=m(Se),ut=u(),at=s("br"),pt=u(),g=s("button"),qt=m("m4(cube)"),mt=u(),$=s("button"),Jt=m("m4(square)"),bt=u(),ht=s("br"),ct=s("br"),yt=u(),ee=s("span"),Vt=m("To call m4(pow(n)), enter n in the box ->"),dt=u(),te=s("input"),o=u(),v=s("br"),le=s("br"),Te=u(),Ce=s("span"),gi=m("To call m4(add(n)), enter n in the box ->"),gt=u(),Fe=s("input"),$t=u(),el=s("br"),tl=s("br"),ll=u(),Oe=s("span"),$i=m("To call m4(mult(n)), enter n in the box ->"),il=u(),Ae=s("input"),ol=u(),sl=s("br"),rl=s("br"),nl=u(),He=s("span"),eo=m("To call m4(reset(n)), enter n in the box ->"),fl=u(),De=s("input"),ul=u(),al=s("br"),pl=s("br"),ml=u(),vt=s("p"),to=m("Next, x will be an array manipulated by functions designed for that purpose. Here are the functions responsible for the interactive demonstration below:"),bl=u(),wt=s("pre"),lo=m(n[41]),hl=u(),kt=s("p"),io=m(`If you click mon3 = mon3(g) four times and the click mon3 = mon3(g3), you will see that mon3(s) returns its original value, [1,2,3,4]. By the way, the "mon3 =" part of "mon3 = mon3(g)" is included solely to trigger updating of browser displays. Svelte doesn't have a virtual DOM, and merely changing objects isn't enough to trigger DOM updates. For example, arr = [1,2,3] doesn't change in the DOM when arr.push(888) is called. arr = arr afterwards or arr = arr.push(888) initially both do the trick.`),cl=u(),D=s("div"),oo=m("["),yl=m(Kt),so=m("]"),dl=u(),vl=s("br"),wl=s("br"),kl=u(),Ue=s("button"),ro=m("mon3 = mon3(g)"),_l=u(),We=s("button"),no=m("mon3 = mon3(g2)"),El=u(),Ze=s("button"),fo=m("mon3 = mon3(g3)"),Tl=u(),je=s("button"),uo=m("mon3 = mon3(x => [1,2,3,4])"),Ml=u(),Bl=s("br"),Rl=s("br"),xl=s("br"),Il=u(),ie=s("p"),ao=m("Now for the game of score, a game involving four dice and two or three-stage arithmetic computations with the goal of arriving at the number 20. My son Alex taught it to me a decade ago, when he was in middle school. I was also learning the Haskell programming language, so I developed a multiplayer online version with groups of interacting player, a chat box, and a shared-by-the-group todo list controlled by a Haskell WebSockets server backend. The backend could compute all possible solutions, if any existed, to any throw of the dice. It also identified all of the impossible-to-solve rolls. Users could change the default number of dice sides from 6,6,12,and 20 and the goal from the default value of 20. A version of it is online at "),_t=s("a"),po=m("https://score.schalk.net"),mo=m("."),Nl=u(),Et=s("p"),bo=m("This demonstration doesn't work in conjunction with a server, nor does it feature any Haskell code as does the multiplayer version. It's just a little solitaire game providing an opportunity to consider the interesting possibilities of recursive closures. Instead of being argunents of function or global object methods, these monads are functions that consume functions. When the functions consumed by monads have no side effects outside of the monad's closure -- which should always be the case -- maintenance and bug tracking become more manageable. Minimizing side effects inside of monadic closure can help even more."),Pl=u(),Le=s("h3"),ho=m("Score: "),Sl=m(Gt),Cl=u(),oe=s("button"),Fl=m(n[2]),Ol=u(),se=s("button"),Al=m(n[3]),Hl=u(),re=s("button"),Dl=m(n[4]),Ul=u(),ne=s("button"),Wl=m(n[5]),Zl=u(),fe=s("span"),co=m("The operator is "),jl=m(Qt),Ll=u(),Yl=s("br"),Xl=s("br"),zl=u(),Ye=s("button"),yo=m("add"),ql=u(),Xe=s("button"),vo=m("subtract"),Jl=u(),ze=s("button"),wo=m("multiply"),Vl=u(),qe=s("button"),ko=m("divide"),Kl=u(),Je=s("button"),_o=m("concat"),Gl=u(),ue=s("span"),Ql=m(n[1]),gl=u(),ae=s("span"),$l=m(n[19]),ei=u(),ti=s("br"),li=s("br"),ii=u(),Ve=s("button"),Eo=m("ROLL"),oi=u(),si=s("br"),ri=s("br"),ni=u(),Ke=s("button"),To=m("test"),fi=u(),Me=s("button"),ui=m(n[14]),ai=u(),Be=s("button"),pi=m(n[15]),mi=u(),Re=s("button"),bi=m(n[16]),hi=u(),xe=s("button"),ci=m(n[17]),yi=u(),di=s("br"),vi=s("br"),wi=u(),Ge=s("button"),Mo=m("Back"),ki=u(),Qe=s("button"),Bo=m("Forward"),_i=u(),Tt=s("p"),Ro=m("The function fu() is the brains behing the game of Score. Each time a number is clicked, m2(fu) is called and fu does various things depending on the state of the closures value, x."),Ei=u(),Mt=s("p"),xo=m("At the end of fu(), two formatting functions are Called. The first displays or hides variables in the DOM and the second updates their values. Here they are:"),Ti=u(),Bt=s("pre"),Io=m(n[39]),Mi=u(),Rt=s("p"),No=m('Clicking "ROLL" calls runRoll() which, in turn, calls updateRoll() to re-set HTML variables.'),Bi=u(),xt=s("pre"),Po=m(n[42]),Ri=u(),It=s("p"),So=m('The "x = [ [], [], [], [], [0], [], [0] ]" format will be maintained throught game play. x[0] simulates the dice roll; x[1] recieves integers that are clicked; x[2] holds the operator; and x[4] contains numbers that are computed. x[4] makes sure at least one computed number is involved in arriving at 20. Here are the first few functions called when a number is clicked:'),xi=u(),Nt=s("pre"),Co=m(n[43]),Ii=u(),Pt=s("p"),Fo=m(`The first line of fu() is the calculation result that is generated whenever there are two items in (s)[1] and an operator in m2(s)[3]. The intersection is important in fu()'s bottom test. If "intersect", the intersection of m2(s)[1] and m2(s)[3], is empty intersect[0] returns false and the last test in fu fails, even though 20 was produced on the second computation.`),Ni=u(),St=s("p"),Oo=m("If no operator has been selected, it's possible to click a third number. The program doesn't complain, it just puts the number back for you with:"),Pi=u(),Ct=s("pre"),Ao=m(n[44]),Si=u(),Ft=s("p"),Ho=m("If you roll the dice and keep clicking on the leftmost number, you'll see the numbers shift back and forth on every try. The first element of m2(s)[0] keeps getting pulled out of the first position and pushed back on the right."),Ci=u(),Ot=s("p"),Do=m(`sfunc() does some more DOM housekeeping. The buttons with dice number come and go as their CSS display strings are changed back and forth between "none" and "inline". fu() calls sfunc(). Here's how it is defined:`),Fi=u(),At=s("pre"),Uo=m(n[45]),Oi=u(),Ht=s("p"),Wo=m("After each number is selected and Before calling sFunc(), fu() first updates the HTML variables as follows:"),Ai=u(),Dt=s("pre"),Zo=m(n[46]),Hi=u(),Di=s("br"),Ui=s("br"),Wi=s("br"),Zi=s("br"),ji=s("br"),Li=s("br"),Yi=u(),Xi=s("br"),zi=s("br"),qi=s("br"),Ji=s("br"),this.h()},l(e){const l=ar('[data-svelte="svelte-f5p5js"]',document.head);w=r(l,"LINK",{rel:!0,href:!0}),l.forEach(t),f=a(e),B=r(e,"BR",{}),M=a(e),C=r(e,"DIV",{});var Vo=c(C);pe=b(Vo,"**************************************************************************"),Vo.forEach(t),X=a(e),R=r(e,"DIV",{style:!0});var Lo=c(R);me=r(Lo,"BR",{}),be=b(Lo,`
A Very Simple Recursive Closure Insulates and Controls State Transformations`),Lo.forEach(t),z=a(e),F=r(e,"BR",{}),O=a(e),N=r(e,"P",{});var Ko=c(N);U=b(Ko,"Various bloggers and writers make define functional programming and JavaScript monads, if they deem their existence possible, in various ways. I'm not saying any of them are right or wrong. In these areas, everyone is entitled to an opinion."),Ko.forEach(t),W=a(e),S=r(e,"P",{});var Go=c(S);q=b(Go,`In my opinion, contorted efforts to make strictly typed JavaScript resemble the basic monads found in the Haskell Prelude module might be amusing for some, but aren't likely to ever be useful. People who think Haskell, or the supposed mathematical category of Haskell types and function called "Hask" are actually Category Theory categories are mistaken. Category Theory inspired the development of Haskell monads and it might not be a coincedence that the monads I am about to define are essentially similar to Haskell monads though superficially very different.`),Go.forEach(t),Z=a(e),h=r(e,"P",{});var Vi=c(h);J=b(Vi,'Recursive closures spawned by "M" will control a fairly complicated dice game called "Score" ('),A=r(Vi,"A",{href:!0});var Qo=c(A);Ut=b(Qo,"Link To Score"),Qo.forEach(t),Ie=b(Vi,`) m2, defined by "m2 = M(x)" where x = [ [], [], [], [], [0], [], [0], [] ], will do the work by consuming functions that operate internally on x. x will represent the ever-changing state of game play.But first we'll let x be a number and then a simple array of numbers in order to show how the monad works. Experienced programmers will be capable of seeing what is going on by just looking at the code, but such people might not see this until the end of a hectic work day, a time when they might appreciate an elementary walk-through. Students will benfit from understanding what is going on here. They aren't likely to learn about the possibility of such things in their classrooms. Here's the definition of "M":`),Vi.forEach(t),he=a(e),j=r(e,"PRE",{});var go=c(j);P=b(go,n[40]),go.forEach(t),ce=a(e),L=r(e,"P",{});var $o=c(L);V=b($o,`Notice that the anonymous function returned by "M" returns a brand new monad in which the value of "x" is func(x') where x' is the previous value of x in "M(x)". This is its definition:`),$o.forEach(t),Ne=a(e),K=r(e,"PRE",{});var es=c(K);ge=b(es,n[49]),es.forEach(t),Pe=a(e),H=r(e,"P",{});var Ki=c(H);$e=b(Ki,"It isn't on the menu, but you can see it in action here: "),G=r(Ki,"A",{href:!0});var ts=c(G);et=b(ts,"Monads That Mutate State"),ts.forEach(t),T=b(Ki,'. There, the function returned by "M" is named and x = func(x)" mutates x each time go(func) executed on a function "func". It is a little less elegant than the version presented here and changing "x" would have a tendency to change earlier versions, making reverting to prior states by pressing the "BACK" button problematic as opposed to its being problem-free when we re-define "x" inside of a new closure.'),Ki.forEach(t),tt=a(e),ye=r(e,"P",{});var ls=c(ye);Wt=b(ls,`I call functions returned by M "monads", much to the consternation of some "functional programmers" who scoff at the idea that JavaScript could possibly have monads such as those defined in the Haskell programming language. Neither my monads nor the Haskell monads are Category Theory monads. Haskell monads insulate chained computation from the global space, consuming functions that return new Monads. Mine happen to do the same thing. Haskell monads need to navegate through various types but I don't bother with that. The definition of "M" shows that the returned function responds to arguments that are functions and also to the string "Stop."`),ls.forEach(t),lt=a(e),de=r(e,"P",{});var is=c(de);Zt=b(is,`A monads created by, say, "mon = M(x)" can create an insolated pipeline of state transformations that can wait indefinitely for mon('stop') to return the result. Transformations of M's state can resume at any time. For example, you could run:`),is.forEach(t),it=a(e),ve=r(e,"PRE",{});var os=c(ve);jt=b(os,n[48]),os.forEach(t),ot=a(e),we=r(e,"P",{});var ss=c(we);Lt=b(ss,"In the solitaire version of the game of score below, x will be an array of arrays in the form x =  [ [], [], [], [], [], [], [], [] ] where x[0] starts out as four integers simulating a throw of two six-sided, one twelve-sided, and one twenty-sided dice. x[1] and x[3] contain the number selected by the player, x[2] is the selected operator, and x[4] keeps track of the number of successes until the player wins by reaching x[4] = 5, x[5] contains all prior states as the player selects numbers and operators and is used for reversing state a little or all the way back to the original roll, x[6] is an index of where in x[5] play is taking place, and x[7] contains every state during a round and uses x[6] to travers the history of game play forward. Before getting to that, here's one more simple example:"),ss.forEach(t),st=a(e),ke=r(e,"P",{});var rs=c(ke);Yt=b(rs,"These are the demonstration's event handlers:"),rs.forEach(t),rt=a(e),_e=r(e,"PRE",{});var ns=c(_e);Xt=b(ns,n[47]),ns.forEach(t),nt=a(e),Q=r(e,"P",{});var Yo=c(Q);zt=b(Yo,"m4(s) is "),Ee=r(Yo,"SPAN",{style:!0});var fs=c(Ee);ft=b(fs,Se),fs.forEach(t),Yo.forEach(t),ut=a(e),at=r(e,"BR",{}),pt=a(e),g=r(e,"BUTTON",{});var us=c(g);qt=b(us,"m4(cube)"),us.forEach(t),mt=a(e),$=r(e,"BUTTON",{});var as=c($);Jt=b(as,"m4(square)"),as.forEach(t),bt=a(e),ht=r(e,"BR",{}),ct=r(e,"BR",{}),yt=a(e),ee=r(e,"SPAN",{style:!0});var ps=c(ee);Vt=b(ps,"To call m4(pow(n)), enter n in the box ->"),ps.forEach(t),dt=a(e),te=r(e,"INPUT",{type:!0,style:!0}),o=a(e),v=r(e,"BR",{}),le=r(e,"BR",{}),Te=a(e),Ce=r(e,"SPAN",{style:!0});var ms=c(Ce);gi=b(ms,"To call m4(add(n)), enter n in the box ->"),ms.forEach(t),gt=a(e),Fe=r(e,"INPUT",{type:!0,style:!0}),$t=a(e),el=r(e,"BR",{}),tl=r(e,"BR",{}),ll=a(e),Oe=r(e,"SPAN",{style:!0});var bs=c(Oe);$i=b(bs,"To call m4(mult(n)), enter n in the box ->"),bs.forEach(t),il=a(e),Ae=r(e,"INPUT",{type:!0,style:!0}),ol=a(e),sl=r(e,"BR",{}),rl=r(e,"BR",{}),nl=a(e),He=r(e,"SPAN",{style:!0});var hs=c(He);eo=b(hs,"To call m4(reset(n)), enter n in the box ->"),hs.forEach(t),fl=a(e),De=r(e,"INPUT",{type:!0,style:!0}),ul=a(e),al=r(e,"BR",{}),pl=r(e,"BR",{}),ml=a(e),vt=r(e,"P",{});var cs=c(vt);to=b(cs,"Next, x will be an array manipulated by functions designed for that purpose. Here are the functions responsible for the interactive demonstration below:"),cs.forEach(t),bl=a(e),wt=r(e,"PRE",{});var ys=c(wt);lo=b(ys,n[41]),ys.forEach(t),hl=a(e),kt=r(e,"P",{});var ds=c(kt);io=b(ds,`If you click mon3 = mon3(g) four times and the click mon3 = mon3(g3), you will see that mon3(s) returns its original value, [1,2,3,4]. By the way, the "mon3 =" part of "mon3 = mon3(g)" is included solely to trigger updating of browser displays. Svelte doesn't have a virtual DOM, and merely changing objects isn't enough to trigger DOM updates. For example, arr = [1,2,3] doesn't change in the DOM when arr.push(888) is called. arr = arr afterwards or arr = arr.push(888) initially both do the trick.`),ds.forEach(t),cl=a(e),D=r(e,"DIV",{style:!0});var Gi=c(D);oo=b(Gi,"["),yl=b(Gi,Kt),so=b(Gi,"]"),Gi.forEach(t),dl=a(e),vl=r(e,"BR",{}),wl=r(e,"BR",{}),kl=a(e),Ue=r(e,"BUTTON",{});var vs=c(Ue);ro=b(vs,"mon3 = mon3(g)"),vs.forEach(t),_l=a(e),We=r(e,"BUTTON",{});var ws=c(We);no=b(ws,"mon3 = mon3(g2)"),ws.forEach(t),El=a(e),Ze=r(e,"BUTTON",{});var ks=c(Ze);fo=b(ks,"mon3 = mon3(g3)"),ks.forEach(t),Tl=a(e),je=r(e,"BUTTON",{});var _s=c(je);uo=b(_s,"mon3 = mon3(x => [1,2,3,4])"),_s.forEach(t),Ml=a(e),Bl=r(e,"BR",{}),Rl=r(e,"BR",{}),xl=r(e,"BR",{}),Il=a(e),ie=r(e,"P",{id:!0});var Qi=c(ie);ao=b(Qi,"Now for the game of score, a game involving four dice and two or three-stage arithmetic computations with the goal of arriving at the number 20. My son Alex taught it to me a decade ago, when he was in middle school. I was also learning the Haskell programming language, so I developed a multiplayer online version with groups of interacting player, a chat box, and a shared-by-the-group todo list controlled by a Haskell WebSockets server backend. The backend could compute all possible solutions, if any existed, to any throw of the dice. It also identified all of the impossible-to-solve rolls. Users could change the default number of dice sides from 6,6,12,and 20 and the goal from the default value of 20. A version of it is online at "),_t=r(Qi,"A",{href:!0});var Es=c(_t);po=b(Es,"https://score.schalk.net"),Es.forEach(t),mo=b(Qi,"."),Qi.forEach(t),Nl=a(e),Et=r(e,"P",{});var Ts=c(Et);bo=b(Ts,"This demonstration doesn't work in conjunction with a server, nor does it feature any Haskell code as does the multiplayer version. It's just a little solitaire game providing an opportunity to consider the interesting possibilities of recursive closures. Instead of being argunents of function or global object methods, these monads are functions that consume functions. When the functions consumed by monads have no side effects outside of the monad's closure -- which should always be the case -- maintenance and bug tracking become more manageable. Minimizing side effects inside of monadic closure can help even more."),Ts.forEach(t),Pl=a(e),Le=r(e,"H3",{});var Xo=c(Le);ho=b(Xo,"Score: "),Sl=b(Xo,Gt),Xo.forEach(t),Cl=a(e),oe=r(e,"BUTTON",{style:!0});var Ms=c(oe);Fl=b(Ms,n[2]),Ms.forEach(t),Ol=a(e),se=r(e,"BUTTON",{style:!0});var Bs=c(se);Al=b(Bs,n[3]),Bs.forEach(t),Hl=a(e),re=r(e,"BUTTON",{style:!0});var Rs=c(re);Dl=b(Rs,n[4]),Rs.forEach(t),Ul=a(e),ne=r(e,"BUTTON",{style:!0});var xs=c(ne);Wl=b(xs,n[5]),xs.forEach(t),Zl=a(e),fe=r(e,"SPAN",{style:!0});var zo=c(fe);co=b(zo,"The operator is "),jl=b(zo,Qt),zo.forEach(t),Ll=a(e),Yl=r(e,"BR",{}),Xl=r(e,"BR",{}),zl=a(e),Ye=r(e,"BUTTON",{});var Is=c(Ye);yo=b(Is,"add"),Is.forEach(t),ql=a(e),Xe=r(e,"BUTTON",{});var Ns=c(Xe);vo=b(Ns,"subtract"),Ns.forEach(t),Jl=a(e),ze=r(e,"BUTTON",{});var Ps=c(ze);wo=b(Ps,"multiply"),Ps.forEach(t),Vl=a(e),qe=r(e,"BUTTON",{});var Ss=c(qe);ko=b(Ss,"divide"),Ss.forEach(t),Kl=a(e),Je=r(e,"BUTTON",{});var Cs=c(Je);_o=b(Cs,"concat"),Cs.forEach(t),Gl=a(e),ue=r(e,"SPAN",{style:!0});var Fs=c(ue);Ql=b(Fs,n[1]),Fs.forEach(t),gl=a(e),ae=r(e,"SPAN",{style:!0});var Os=c(ae);$l=b(Os,n[19]),Os.forEach(t),ei=a(e),ti=r(e,"BR",{}),li=r(e,"BR",{}),ii=a(e),Ve=r(e,"BUTTON",{});var As=c(Ve);Eo=b(As,"ROLL"),As.forEach(t),oi=a(e),si=r(e,"BR",{}),ri=r(e,"BR",{}),ni=a(e),Ke=r(e,"BUTTON",{});var Hs=c(Ke);To=b(Hs,"test"),Hs.forEach(t),fi=a(e),Me=r(e,"BUTTON",{style:!0});var Ds=c(Me);ui=b(Ds,n[14]),Ds.forEach(t),ai=a(e),Be=r(e,"BUTTON",{style:!0});var Us=c(Be);pi=b(Us,n[15]),Us.forEach(t),mi=a(e),Re=r(e,"BUTTON",{style:!0});var Ws=c(Re);bi=b(Ws,n[16]),Ws.forEach(t),hi=a(e),xe=r(e,"BUTTON",{style:!0});var Zs=c(xe);ci=b(Zs,n[17]),Zs.forEach(t),yi=a(e),di=r(e,"BR",{}),vi=r(e,"BR",{}),wi=a(e),Ge=r(e,"BUTTON",{});var js=c(Ge);Mo=b(js,"Back"),js.forEach(t),ki=a(e),Qe=r(e,"BUTTON",{});var Ls=c(Qe);Bo=b(Ls,"Forward"),Ls.forEach(t),_i=a(e),Tt=r(e,"P",{});var Ys=c(Tt);Ro=b(Ys,"The function fu() is the brains behing the game of Score. Each time a number is clicked, m2(fu) is called and fu does various things depending on the state of the closures value, x."),Ys.forEach(t),Ei=a(e),Mt=r(e,"P",{});var Xs=c(Mt);xo=b(Xs,"At the end of fu(), two formatting functions are Called. The first displays or hides variables in the DOM and the second updates their values. Here they are:"),Xs.forEach(t),Ti=a(e),Bt=r(e,"PRE",{});var zs=c(Bt);Io=b(zs,n[39]),zs.forEach(t),Mi=a(e),Rt=r(e,"P",{});var qs=c(Rt);No=b(qs,'Clicking "ROLL" calls runRoll() which, in turn, calls updateRoll() to re-set HTML variables.'),qs.forEach(t),Bi=a(e),xt=r(e,"PRE",{});var Js=c(xt);Po=b(Js,n[42]),Js.forEach(t),Ri=a(e),It=r(e,"P",{});var Vs=c(It);So=b(Vs,'The "x = [ [], [], [], [], [0], [], [0] ]" format will be maintained throught game play. x[0] simulates the dice roll; x[1] recieves integers that are clicked; x[2] holds the operator; and x[4] contains numbers that are computed. x[4] makes sure at least one computed number is involved in arriving at 20. Here are the first few functions called when a number is clicked:'),Vs.forEach(t),xi=a(e),Nt=r(e,"PRE",{});var Ks=c(Nt);Co=b(Ks,n[43]),Ks.forEach(t),Ii=a(e),Pt=r(e,"P",{});var Gs=c(Pt);Fo=b(Gs,`The first line of fu() is the calculation result that is generated whenever there are two items in (s)[1] and an operator in m2(s)[3]. The intersection is important in fu()'s bottom test. If "intersect", the intersection of m2(s)[1] and m2(s)[3], is empty intersect[0] returns false and the last test in fu fails, even though 20 was produced on the second computation.`),Gs.forEach(t),Ni=a(e),St=r(e,"P",{});var Qs=c(St);Oo=b(Qs,"If no operator has been selected, it's possible to click a third number. The program doesn't complain, it just puts the number back for you with:"),Qs.forEach(t),Pi=a(e),Ct=r(e,"PRE",{});var gs=c(Ct);Ao=b(gs,n[44]),gs.forEach(t),Si=a(e),Ft=r(e,"P",{});var $s=c(Ft);Ho=b($s,"If you roll the dice and keep clicking on the leftmost number, you'll see the numbers shift back and forth on every try. The first element of m2(s)[0] keeps getting pulled out of the first position and pushed back on the right."),$s.forEach(t),Ci=a(e),Ot=r(e,"P",{});var er=c(Ot);Do=b(er,`sfunc() does some more DOM housekeeping. The buttons with dice number come and go as their CSS display strings are changed back and forth between "none" and "inline". fu() calls sfunc(). Here's how it is defined:`),er.forEach(t),Fi=a(e),At=r(e,"PRE",{});var tr=c(At);Uo=b(tr,n[45]),tr.forEach(t),Oi=a(e),Ht=r(e,"P",{});var lr=c(Ht);Wo=b(lr,"After each number is selected and Before calling sFunc(), fu() first updates the HTML variables as follows:"),lr.forEach(t),Ai=a(e),Dt=r(e,"PRE",{});var ir=c(Dt);Zo=b(ir,n[46]),ir.forEach(t),Hi=a(e),Di=r(e,"BR",{}),Ui=r(e,"BR",{}),Wi=r(e,"BR",{}),Zi=r(e,"BR",{}),ji=r(e,"BR",{}),Li=r(e,"BR",{}),Yi=a(e),Xi=r(e,"BR",{}),zi=r(e,"BR",{}),qi=r(e,"BR",{}),Ji=r(e,"BR",{}),this.h()},h(){document.title='Recursive Closures a/k/a "Monads" ',Y(w,"rel","stylesheet"),Y(w,"href","../Functions/style.css"),d(R,"font-family","Times New Roman"),d(R,"text-align","center"),d(R,"font-size","32px"),Y(A,"href","#score"),Y(G,"href","./mutatingStateMonads"),d(Ee,"font-size","54px"),d(ee,"font-size","24px"),Y(te,"type","text"),d(te,"width","65px"),d(Ce,"font-size","24px"),Y(Fe,"type","number"),d(Fe,"width","65px"),d(Oe,"font-size","24px"),Y(Ae,"type","text"),d(Ae,"width","65px"),d(He,"font-size","24px"),Y(De,"type","number"),d(De,"width","65px"),d(D,"margin-left","10%"),d(D,"font-size","44px"),d(D,"color","#ddaadd"),Y(_t,"href","https://score.schalk.net"),Y(ie,"id","score"),d(oe,"display",n[6]),d(se,"display",n[7]),d(re,"display",n[8]),d(ne,"display",n[9]),d(fe,"margin-left","8%"),d(fe,"font-size","22px"),d(ue,"margin-left","20px"),d(ue,"color","#bbbbff"),d(ue,"font-size","28px"),d(ae,"margin-left","20px"),d(ae,"color","#bbbbff"),d(ae,"font-size","38px"),d(Me,"display",n[10]),d(Be,"display",n[11]),d(Re,"display",n[12]),d(xe,"display",n[13])},m(e,l){p(document.head,w),i(e,f,l),i(e,B,l),i(e,M,l),i(e,C,l),p(C,pe),i(e,X,l),i(e,R,l),p(R,me),p(R,be),i(e,z,l),i(e,F,l),i(e,O,l),i(e,N,l),p(N,U),i(e,W,l),i(e,S,l),p(S,q),i(e,Z,l),i(e,h,l),p(h,J),p(h,A),p(A,Ut),p(h,Ie),i(e,he,l),i(e,j,l),p(j,P),i(e,ce,l),i(e,L,l),p(L,V),i(e,Ne,l),i(e,K,l),p(K,ge),i(e,Pe,l),i(e,H,l),p(H,$e),p(H,G),p(G,et),p(H,T),i(e,tt,l),i(e,ye,l),p(ye,Wt),i(e,lt,l),i(e,de,l),p(de,Zt),i(e,it,l),i(e,ve,l),p(ve,jt),i(e,ot,l),i(e,we,l),p(we,Lt),i(e,st,l),i(e,ke,l),p(ke,Yt),i(e,rt,l),i(e,_e,l),p(_e,Xt),i(e,nt,l),i(e,Q,l),p(Q,zt),p(Q,Ee),p(Ee,ft),i(e,ut,l),i(e,at,l),i(e,pt,l),i(e,g,l),p(g,qt),i(e,mt,l),i(e,$,l),p($,Jt),i(e,bt,l),i(e,ht,l),i(e,ct,l),i(e,yt,l),i(e,ee,l),p(ee,Vt),i(e,dt,l),i(e,te,l),i(e,o,l),i(e,v,l),i(e,le,l),i(e,Te,l),i(e,Ce,l),p(Ce,gi),i(e,gt,l),i(e,Fe,l),i(e,$t,l),i(e,el,l),i(e,tl,l),i(e,ll,l),i(e,Oe,l),p(Oe,$i),i(e,il,l),i(e,Ae,l),i(e,ol,l),i(e,sl,l),i(e,rl,l),i(e,nl,l),i(e,He,l),p(He,eo),i(e,fl,l),i(e,De,l),i(e,ul,l),i(e,al,l),i(e,pl,l),i(e,ml,l),i(e,vt,l),p(vt,to),i(e,bl,l),i(e,wt,l),p(wt,lo),i(e,hl,l),i(e,kt,l),p(kt,io),i(e,cl,l),i(e,D,l),p(D,oo),p(D,yl),p(D,so),i(e,dl,l),i(e,vl,l),i(e,wl,l),i(e,kl,l),i(e,Ue,l),p(Ue,ro),i(e,_l,l),i(e,We,l),p(We,no),i(e,El,l),i(e,Ze,l),p(Ze,fo),i(e,Tl,l),i(e,je,l),p(je,uo),i(e,Ml,l),i(e,Bl,l),i(e,Rl,l),i(e,xl,l),i(e,Il,l),i(e,ie,l),p(ie,ao),p(ie,_t),p(_t,po),p(ie,mo),i(e,Nl,l),i(e,Et,l),p(Et,bo),i(e,Pl,l),i(e,Le,l),p(Le,ho),p(Le,Sl),i(e,Cl,l),i(e,oe,l),p(oe,Fl),i(e,Ol,l),i(e,se,l),p(se,Al),i(e,Hl,l),i(e,re,l),p(re,Dl),i(e,Ul,l),i(e,ne,l),p(ne,Wl),i(e,Zl,l),i(e,fe,l),p(fe,co),p(fe,jl),i(e,Ll,l),i(e,Yl,l),i(e,Xl,l),i(e,zl,l),i(e,Ye,l),p(Ye,yo),i(e,ql,l),i(e,Xe,l),p(Xe,vo),i(e,Jl,l),i(e,ze,l),p(ze,wo),i(e,Vl,l),i(e,qe,l),p(qe,ko),i(e,Kl,l),i(e,Je,l),p(Je,_o),i(e,Gl,l),i(e,ue,l),p(ue,Ql),i(e,gl,l),i(e,ae,l),p(ae,$l),i(e,ei,l),i(e,ti,l),i(e,li,l),i(e,ii,l),i(e,Ve,l),p(Ve,Eo),i(e,oi,l),i(e,si,l),i(e,ri,l),i(e,ni,l),i(e,Ke,l),p(Ke,To),i(e,fi,l),i(e,Me,l),p(Me,ui),i(e,ai,l),i(e,Be,l),p(Be,pi),i(e,mi,l),i(e,Re,l),p(Re,bi),i(e,hi,l),i(e,xe,l),p(xe,ci),i(e,yi,l),i(e,di,l),i(e,vi,l),i(e,wi,l),i(e,Ge,l),p(Ge,Mo),i(e,ki,l),i(e,Qe,l),p(Qe,Bo),i(e,_i,l),i(e,Tt,l),p(Tt,Ro),i(e,Ei,l),i(e,Mt,l),p(Mt,xo),i(e,Ti,l),i(e,Bt,l),p(Bt,Io),i(e,Mi,l),i(e,Rt,l),p(Rt,No),i(e,Bi,l),i(e,xt,l),p(xt,Po),i(e,Ri,l),i(e,It,l),p(It,So),i(e,xi,l),i(e,Nt,l),p(Nt,Co),i(e,Ii,l),i(e,Pt,l),p(Pt,Fo),i(e,Ni,l),i(e,St,l),p(St,Oo),i(e,Pi,l),i(e,Ct,l),p(Ct,Ao),i(e,Si,l),i(e,Ft,l),p(Ft,Ho),i(e,Ci,l),i(e,Ot,l),p(Ot,Do),i(e,Fi,l),i(e,At,l),p(At,Uo),i(e,Oi,l),i(e,Ht,l),p(Ht,Wo),i(e,Ai,l),i(e,Dt,l),p(Dt,Zo),i(e,Hi,l),i(e,Di,l),i(e,Ui,l),i(e,Wi,l),i(e,Zi,l),i(e,ji,l),i(e,Li,l),i(e,Yi,l),i(e,Xi,l),i(e,zi,l),i(e,qi,l),i(e,Ji,l),k=!0,jo||(Jo=[_(g,"click",n[34]),_($,"click",n[33]),_(te,"keydown",n[35]),_(Fe,"keydown",n[36]),_(Ae,"keydown",n[37]),_(De,"keydown",n[38]),_(Ue,"click",n[50]),_(We,"click",n[51]),_(Ze,"click",n[52]),_(je,"click",n[53]),_(oe,"click",n[54]),_(se,"click",n[55]),_(re,"click",n[56]),_(ne,"click",n[57]),_(Ye,"click",n[58]),_(Xe,"click",n[59]),_(ze,"click",n[60]),_(qe,"click",n[61]),_(Je,"click",n[62]),_(Ve,"click",n[63]),_(Ke,"click",n[64]),_(Ge,"click",n[65]),_(Qe,"click",n[66])],jo=!0)},p(e,l){(!k||l[0]&8388608)&&Se!==(Se=parseFloat(e[23](y)).toFixed(5).toString()+"")&&x(ft,Se),(!k||l[0]&1048576)&&Kt!==(Kt=e[20](y).join(", ")+"")&&x(yl,Kt),(!k||l[0]&1)&&Gt!==(Gt=e[0](y)[4]+"")&&x(Sl,Gt),(!k||l[0]&4)&&x(Fl,e[2]),(!k||l[0]&64)&&d(oe,"display",e[6]),(!k||l[0]&8)&&x(Al,e[3]),(!k||l[0]&128)&&d(se,"display",e[7]),(!k||l[0]&16)&&x(Dl,e[4]),(!k||l[0]&256)&&d(re,"display",e[8]),(!k||l[0]&32)&&x(Wl,e[5]),(!k||l[0]&512)&&d(ne,"display",e[9]),(!k||l[0]&1)&&Qt!==(Qt=e[0](y)[2]+"")&&x(jl,Qt),(!k||l[0]&2)&&x(Ql,e[1]),(!k||l[0]&524288)&&x($l,e[19]),(!k||l[0]&16384)&&x(ui,e[14]),(!k||l[0]&1024)&&d(Me,"display",e[10]),(!k||l[0]&32768)&&x(pi,e[15]),(!k||l[0]&2048)&&d(Be,"display",e[11]),(!k||l[0]&65536)&&x(bi,e[16]),(!k||l[0]&4096)&&d(Re,"display",e[12]),(!k||l[0]&131072)&&x(ci,e[17]),(!k||l[0]&8192)&&d(xe,"display",e[13])},i(e){k||(pr(()=>{I||(I=or(R,sr,{},!0)),I.run(1)}),k=!0)},o(e){I||(I=or(R,sr,{},!1)),I.run(0),k=!1},d(e){t(w),e&&t(f),e&&t(B),e&&t(M),e&&t(C),e&&t(X),e&&t(R),e&&I&&I.end(),e&&t(z),e&&t(F),e&&t(O),e&&t(N),e&&t(W),e&&t(S),e&&t(Z),e&&t(h),e&&t(he),e&&t(j),e&&t(ce),e&&t(L),e&&t(Ne),e&&t(K),e&&t(Pe),e&&t(H),e&&t(tt),e&&t(ye),e&&t(lt),e&&t(de),e&&t(it),e&&t(ve),e&&t(ot),e&&t(we),e&&t(st),e&&t(ke),e&&t(rt),e&&t(_e),e&&t(nt),e&&t(Q),e&&t(ut),e&&t(at),e&&t(pt),e&&t(g),e&&t(mt),e&&t($),e&&t(bt),e&&t(ht),e&&t(ct),e&&t(yt),e&&t(ee),e&&t(dt),e&&t(te),e&&t(o),e&&t(v),e&&t(le),e&&t(Te),e&&t(Ce),e&&t(gt),e&&t(Fe),e&&t($t),e&&t(el),e&&t(tl),e&&t(ll),e&&t(Oe),e&&t(il),e&&t(Ae),e&&t(ol),e&&t(sl),e&&t(rl),e&&t(nl),e&&t(He),e&&t(fl),e&&t(De),e&&t(ul),e&&t(al),e&&t(pl),e&&t(ml),e&&t(vt),e&&t(bl),e&&t(wt),e&&t(hl),e&&t(kt),e&&t(cl),e&&t(D),e&&t(dl),e&&t(vl),e&&t(wl),e&&t(kl),e&&t(Ue),e&&t(_l),e&&t(We),e&&t(El),e&&t(Ze),e&&t(Tl),e&&t(je),e&&t(Ml),e&&t(Bl),e&&t(Rl),e&&t(xl),e&&t(Il),e&&t(ie),e&&t(Nl),e&&t(Et),e&&t(Pl),e&&t(Le),e&&t(Cl),e&&t(oe),e&&t(Ol),e&&t(se),e&&t(Hl),e&&t(re),e&&t(Ul),e&&t(ne),e&&t(Zl),e&&t(fe),e&&t(Ll),e&&t(Yl),e&&t(Xl),e&&t(zl),e&&t(Ye),e&&t(ql),e&&t(Xe),e&&t(Jl),e&&t(ze),e&&t(Vl),e&&t(qe),e&&t(Kl),e&&t(Je),e&&t(Gl),e&&t(ue),e&&t(gl),e&&t(ae),e&&t(ei),e&&t(ti),e&&t(li),e&&t(ii),e&&t(Ve),e&&t(oi),e&&t(si),e&&t(ri),e&&t(ni),e&&t(Ke),e&&t(fi),e&&t(Me),e&&t(ai),e&&t(Be),e&&t(mi),e&&t(Re),e&&t(hi),e&&t(xe),e&&t(yi),e&&t(di),e&&t(vi),e&&t(wi),e&&t(Ge),e&&t(ki),e&&t(Qe),e&&t(_i),e&&t(Tt),e&&t(Ei),e&&t(Mt),e&&t(Ti),e&&t(Bt),e&&t(Mi),e&&t(Rt),e&&t(Bi),e&&t(xt),e&&t(Ri),e&&t(It),e&&t(xi),e&&t(Nt),e&&t(Ii),e&&t(Pt),e&&t(Ni),e&&t(St),e&&t(Pi),e&&t(Ct),e&&t(Si),e&&t(Ft),e&&t(Ci),e&&t(Ot),e&&t(Fi),e&&t(At),e&&t(Oi),e&&t(Ht),e&&t(Ai),e&&t(Dt),e&&t(Hi),e&&t(Di),e&&t(Ui),e&&t(Wi),e&&t(Zi),e&&t(ji),e&&t(Li),e&&t(Yi),e&&t(Xi),e&&t(zi),e&&t(qi),e&&t(Ji),jo=!1,mr(Jo)}}}var y="stop";function hr(n,w,f){var B=parseInt(n,10),M=parseInt(w,10);return f==="+"?B+M:f==="*"?B*M:f==="-"?B-M:f==="/"?B/M:f==="@"?" "+B+M:"fubar"}function cr(n){var w=n.pop()**3;return n.unshift(w),n}function yr(n){return n.flatMap(w=>(w+1)**3)}function dr(n){return n.flatMap(w=>Math.round(w**(1/3)))}function rr(n){return JSON.parse(JSON.stringify(n))}function E(n){return function(w){if(typeof w=="function")return E(w(n));if(w==="stop")return n}}function qo(n){var w=n.split("/");return w.length>1?w[0]/w[1]:w[0]}function vr(n,w){return n.filter(f=>w.includes(f))}function wr(n,w,f){let B;var F,O,N,U,M="none",C="none",pe="none",X="none",R,me="none",be="none",I="none",z="none",F,O,N,U,W,S,q,Z,h,J;J=o=>{var v=[[Math.floor(Math.random()*6)+1,Math.floor(Math.random()*6)+1,Math.floor(Math.random()*12)+1,Math.floor(Math.random()*20)+1],[],["+"],[],[o],[],[0],[]];return f(0,h=E(v)),f(0,h=E(h(y))),Ut(h),h(V),h};var A="";function Ut(o){console.log("In updateRoll. m(s) is",o(y)),f(2,F=o(y)[0][0]),f(3,O=o(y)[0][1]),f(4,N=o(y)[0][2]),f(5,U=o(y)[0][3]),f(14,W=o(y)[1][0]),f(15,S=o(y)[1][1]),f(16,q=o(y)[1][2]),f(17,Z=o(y)[1][3]),o(y)[2],o(y)[3],o(y)[4],f(6,M=f(7,C=f(8,pe=f(9,X="inline")))),f(10,me=f(11,be=f(12,I=f(13,z="none"))))}function Ie(){f(6,M=f(7,C=f(8,pe=f(9,X=f(10,me=f(11,be=f(12,I=f(13,z="none")))))))),F!=null&&f(6,M="inline"),O!=null&&f(7,C="inline"),N!=null&&f(8,pe="inline"),U!=null&&f(9,X="inline"),W!=null&&f(10,me="inline"),S!=null&&f(11,be="inline"),q!=null&&f(12,I="inline"),Z!=null&&f(13,z="inline")}h=E([[Math.floor(Math.random()*6)+1,Math.floor(Math.random()*6)+1,Math.floor(Math.random()*12)+1,Math.floor(Math.random()*20)+1],[],["+"],[],[0],[],[0],[]]);var he=function(){f(2,F=h(y)[0][0]),f(3,O=h(y)[0][1]),f(4,N=h(y)[0][2]),f(5,U=h(y)[0][3]),h(y)[2],h(y)[3],h(y)[4],f(14,W=h(y)[1][0]),f(15,S=h(y)[1][1]),f(16,q=h(y)[1][2]),f(17,Z=h(y)[1][3])},j="",P=E([1,2,3,4]),ce,L;function V(o){o[5].push(rr([o[0],o[1],o[2],o[3],o[4],o[5],o[6],o[7]])),o[7].push(rr([o[0],o[1],o[2],o[3],o[4],o[5],o[6],o[7]])),o[6][0]+=1;var v,le;if(o[1].length===2&&o[2].length===1&&(le=o[1],v=hr(o[1][0],o[1][1],o[2][0]),o[0].push(v),o[3].push(v),o[1]=[],f(0,h=E(o))),o[1].length===3&&o[0].push(o[1].pop()),v==20&&vr(le,o[3]).length>0){if(o[4][0]===4)f(19,j="You win! "),o[4][0]=0,J(0);else{var Te=parseInt(o[4][0],10);Te+=1,f(1,A="           Your score increased to "+Te),J(Te)}setTimeout(()=>f(1,A=f(19,j="")),3e3)}return he(),Ie(),h(y)}var Ne=o=>{o[1].push(o[0][0]),o[0].shift(),f(0,h=E(o)),h(V)},K=o=>{o[1].push(o[0].splice(1,1)[0]),f(0,h=E(o)),f(0,h=h(V))},ge=o=>{o[1].push(o[0].splice(2,1)[0]),f(0,h=E(o)),f(0,h=h(V))},Pe=o=>{o[1].push(o[0].splice(3,1)[0]),f(0,h=E(o)),f(0,h=h(V))};function H(o){o[2]="+",f(0,h=E(o))}function $e(o){o[2]="*",f(0,h=E(o))}function G(o){o[2]="/",f(0,h=E(o))}function et(o){o[2]="@",f(0,h=E(o))}var T=E(3.1415926535),tt=o=>o**3,ye=o=>o*o,Wt=o=>v=>v**o,lt=o=>v=>1*v+1*o,de=o=>v=>v*o,Zt=o=>v=>o;function it(){f(23,T=T(ye))}function ve(){f(23,T=T(tt))}var jt=function(v){var le=qo(v.target.value);v.keyCode==13&&f(23,T=T(Wt(le)))},ot=function(v){v.keyCode==13&&f(23,T=T(lt(v.target.value)))},we=function(v){v.keyCode==13&&f(23,T=T(de(qo(v.target.value))))},Lt=function(v){v.keyCode==13&&f(23,T=T(Zt(qo(v.target.value))))},st=`function fu (a) {                                    
  a[5].push(clone([ a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7] ]));  
  a[7].push(clone([ a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7] ]));  
  a[6][0] += 1;
    // a[1].push(a[0].pop());
  var result;
  SCORE = a[4];
  var a1;
  if (a[1].length === 2 && a[2].length === 1)   {
    a1 = a[1];
    result = calc(a[1][0], a[1][1],a[2][0]);
    a[0].push(result);
    a[3].push(result);  
    a[1] = [];
    m2 = M(a);
  }

  if (a[1].length === 3) {
    a[0].push(a[1].pop());
  }
 
  if (result == 20 && intersection(a1, a[3]).length > 0) {
      if (a[4][0] === 4) {
          ZWIN = "You win! "
          a[4][0] = 0;
          runRoll(0);
      }
      else {
          var aint = parseInt(a[4][0], 10);
          aint += 1;
          Z = "           Your score increased to " + aint;
          runRoll(aint); 
      }
      setTimeout(() => Z = ZWIN = "", 3000);
  }
  update();
  sfunc();
  return m2(s);
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
}`,ke=`function M (x) {
    return function (func) {
        if (typeof func === "function") {
            return M(func(x));
        }
        else if (func === "stop") return x;
    }
};`,Yt=`var mon3 = M([1,2,3,4]);
function g(ar) {
    var x = (ar.pop())**3;
    ar.unshift(x);
  return ar;
};
function g2 (ar) {return (ar.flatMap(v => (v+1)**3))};
function g3 (ar) {return (ar.flatMap(v => Math.round(v**(1/3))))};`,rt=`runRoll = x => {
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
};`,_e=`function clic0 () {
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
};`,Xt=`if (a[1].length === 3) {   
    a[0].push(a[1].pop());  // Returns a clicked third number.
  };`,nt=`function sfunc () {
    b0 = b1 = b2 = b3 = b4 = b5 = b6 = b7 = "none";
    if (AA != (undefined && 0)) b0 = "inline";
    if (BB != (undefined && 0)) b1 = "inline";
    if (CC != (undefined && 0)) b2 = "inline";
    if (DD != (undefined && 0)) b3 = "inline";
    if (WW != (undefined && 0)) b4 = "inline";
    if (XX != (undefined && 0)) b5 = "inline";
    if (YY != (undefined && 0)) b6 = "inline";
    if (ZZ != (undefined && 0)) b7 = "inline";
}`,Q=`var update = () => {
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
};`,zt=`function squareFu () {m4 = m4(square)};
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
};`,Ee=`var mon = M(2);
mon(v=>v**4)(v=>v+5)(v=>v*2);
// The value of x can be obtained later
mon('stop');  // 42`,Se=`function M (x) {
    return function go (func) {
        if (typeof func === "function") {
            x = func(x);
            return go;
        }
        else if (func === "stop") return x;
    }
};`;const ft=()=>f(20,P=P(cr)),ut=()=>f(20,P=P(yr)),at=()=>f(20,P=P(dr)),pt=()=>f(20,P=P(o=>[1,2,3,4])),g=()=>h(Ne),qt=()=>h(K),mt=()=>h(ge),$=()=>h(Pe),Jt=()=>h(H),bt=()=>h(B),ht=()=>h($e),ct=()=>h(G),yt=()=>h(et),ee=()=>h(J(h(y)[4])),Vt=()=>test(),dt=()=>h(ce),te=()=>h(L);return n.$$.update=()=>{n.$$.dirty[0]&2&&f(1,A),n.$$.dirty[0]&2,n.$$.dirty[0]&1&&f(2,F=h(y)[0][0]),n.$$.dirty[0]&1&&f(3,O=h(y)[0][1]),n.$$.dirty[0]&1&&f(4,N=h(y)[0][2]),n.$$.dirty[0]&1&&f(5,U=h(y)[0][3]),n.$$.dirty[0]&1&&h(y)[2],n.$$.dirty[0]&1&&h(y)[3],n.$$.dirty[0]&1&&h(y)[4],n.$$.dirty[0]&1&&f(14,W=h(y)[1][0]),n.$$.dirty[0]&1&&f(15,S=h(y)[1][1]),n.$$.dirty[0]&1&&f(16,q=h(y)[1][2]),n.$$.dirty[0]&1&&f(17,Z=h(y)[1][3]),n.$$.dirty[0]&1&&h(y)},f(21,ce=o=>{if(o[5].length>0){var v=o[5][o[5].length-1];v[7]=o[7],f(0,h=E(v)),he(),Ie()}else console.log("In back. Can't compute")}),f(22,L=o=>{if(o[6][0]<o[7].length-1){var v=o[7][R+1];v[7]=o[7],f(0,h=E(v)),he(),Ie()}else console.log("Going out of bounds. The end of b[7] has been reached")}),f(24,B=o=>{o[2]="-",f(0,h=E(o))}),[h,A,F,O,N,U,M,C,pe,X,me,be,I,z,W,S,q,Z,J,j,P,ce,L,T,B,Ne,K,ge,Pe,H,$e,G,et,it,ve,jt,ot,we,Lt,st,ke,Yt,rt,_e,Xt,nt,Q,zt,Ee,Se,ft,ut,at,pt,g,qt,mt,$,Jt,bt,ht,ct,yt,ee,Vt,dt,te]}class _r extends nr{constructor(w){super();fr(this,w,wr,br,ur,{},null,[-1,-1,-1,-1])}}export{_r as default};
