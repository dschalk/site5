import{S as fs,i as us,s as as,e as n,k as u,t as m,L as ps,c as s,d as t,m as a,a as c,h as b,b as j,f as y,G as p,g as i,M as _,j as N,N as ms,O as ns,P as bs,Q as ss}from"../../chunks/vendor-4e552e70.js";function hs(r){let w,f,x,R,H,re,L,T,fe,ue,P,A,D,U,S,Y,Z,O,z,h,I,ae,pe,xe,Ie,me,B,Ne,be,X,q,Pe,J,$e,Se,W,et,V,tt,M,ot,he,Wt,it,ce,Zt,lt,de,jt,nt,ye,Lt,st,ve,Yt,rt,we,zt,ft,K,Xt,ke,Oe=parseFloat(r[23](d)).toFixed(5).toString()+"",ut,at,pt,mt,G,qt,bt,Q,Jt,ht,ct,dt,yt,g,Vt,vt,$,l,v,C,_e,Ce,$i,gt,Fe,$t,eo,to,oo,He,el,io,Ae,lo,no,so,ro,De,tl,fo,Ue,uo,ao,po,mo,wt,ol,bo,kt,il,ho,_t,ll,co,F,nl,Kt=r[20](d).join(", ")+"",yo,sl,vo,wo,ko,_o,We,rl,Eo,Ze,fl,To,je,ul,Mo,Le,al,Bo,Ro,xo,Io,No,Ee,pl,Et,ml,bl,Po,Tt,hl,So,Ye,cl,Gt=r[0](d)[4]+"",Oo,Co,ee,Fo,Ho,te,Ao,Do,oe,Uo,Wo,ie,Zo,jo,le,dl,Qt=r[0](d)[2]+"",Lo,Yo,zo,Xo,qo,ze,yl,Jo,Xe,vl,Vo,qe,wl,Ko,Je,kl,Go,Ve,_l,Qo,ne,go,$o,se,ei,ti,oi,ii,li,Ke,El,ni,si,ri,fi,Ge,Tl,ui,Te,ai,pi,Me,mi,bi,Be,hi,ci,Re,di,yi,vi,wi,ki,Qe,Ml,_i,ge,Bl,Ei,Mt,Rl,Ti,Bt,xl,Mi,Rt,Il,Bi,xt,Nl,Ri,It,Pl,xi,Nt,Sl,Ii,Pt,Ol,Ni,St,Cl,Pi,Ot,Fl,Si,Ct,Hl,Oi,Ft,Al,Ci,Ht,Dl,Fi,At,Ul,Hi,Dt,Wl,Ai,Ut,Zl,Di,Ui,Wi,Zi,ji,Li,Yi,zi,Xi,qi,Ji,Vi,k,jl,Jl;return{c(){w=n("link"),f=u(),x=n("br"),R=u(),H=n("div"),re=m("**************************************************************************"),L=u(),T=n("div"),fe=n("br"),ue=m(`

A Very Simple Recursive Closure Insulates and Controls State Transformations`),A=u(),D=n("br"),U=u(),S=n("p"),Y=m("Various bloggers and writers define functional programming and JavaScript monads in various ways. I'm not saying any of them are right or wrong. In these areas, everyone is entitled to an opinion."),Z=u(),O=n("p"),z=m(`In my opinion, trying to define JavaScript objects that resemble the basic monads found in the Haskell Prelude module, amusing though it may be, isn't likely to produce anything very useful. People who think Haskell, or the supposed mathematical category of Haskell types and functions called "Hask", are actually Category Theory categories are mistaken. Category Theory inspired the development of Haskell monads and it might not be merely coincidental that the monads I am about to define are functionally similar to Haskell monads, though superficially quite different. Both transform state along pipelines isolated from their outer scope by operating on functions that return new monads. Both preserve state for future transformations or for eventual use in their outer scopes. Mine call functions in their outer scopes in order to update the DOM, not having to wait to do it in a main() function. I'm not trying to mimic Haskell or any other functional programming language.`),h=u(),I=n("p"),ae=m('Recursive closures spawned by "M" will control a fairly complicated dice game called "Score" ('),pe=n("a"),xe=m("Link To Score"),Ie=m(`) m2, defined by "m2 = M(x)" where x = [ [], [], [], [], [0], [], [0], [] ], will do the work by consuming functions that operate internally on x. x will represent the ever-changing state of game play.But first we'll let x be a number and then a simple array of numbers in order to show how the monad works. Experienced programmers can see what is going on by just looking at the code, but such people might not be reading this until the end of a hectic work day, a time when they might appreciate an elementary walk-through. Students will benfit from understanding what is going on here. They aren't likely to learn about the possibility of such things in their classrooms. Here's the definition of "M":`),me=u(),B=n("pre"),Ne=m(r[41]),be=u(),X=n("p"),q=m(`Notice that the anonymous function returned by "M" returns a brand new monad in which the value of "x" is func(x') where x' is the previous value of x in "M(x)". There's another version that mutates x which is defined as follows:`),Pe=u(),J=n("pre"),$e=m(r[50]),Se=u(),W=n("p"),et=m("It isn't on the menu, but you can see it in action here: "),V=n("a"),tt=m("Monads That Mutate State"),M=m('. There, the function returned by "M" is named and x = func(x)" mutates x each time go(func) executed on a function "func". It is a little less elegant than the version presented here and changing "x" would have a tendency to change earlier versions, making reverting to prior states by pressing the "BACK" button problematic as opposed to its being problem-free when we re-define "x" inside of a new closure.'),ot=u(),he=n("p"),Wt=m(`I call functions returned by M "monads", much to the consternation of some "functional programmers" who scoff at the idea that JavaScript could possibly have monads such as those defined in the Haskell programming language. Neither my monads nor the Haskell monads are Category Theory monads. Haskell monads insulate chained computation from the global space, consuming functions that return new Monads. Mine happen to do the same thing. Haskell monads need to navegate through various types but I don't bother with that. The definition of "M" shows that the returned function responds to arguments that are functions and also to the string "Stop."`),it=u(),ce=n("p"),Zt=m(`A monads created by, say, "mon = M(x)" can create an insolated pipeline of state transformations that can wait indefinitely for mon('stop') to return the result. Transformations of M's state can resume at any time. For example, you could run:`),lt=u(),de=n("pre"),jt=m(r[49]),nt=u(),ye=n("p"),Lt=m("In the solitaire version of the game of score below, x will be an array of arrays in the form x =  [ [], [], [], [], [], [], [], [] ] where x[0] starts out as four integers simulating a throw of two six-sided, one twelve-sided, and one twenty-sided dice. x[1] and x[3] contain the number selected by the player, x[2] is the selected operator, and x[4] keeps track of the number of successes until the player wins by reaching x[4] = 5, x[5] contains all prior states as the player selects numbers and operators and is used for reversing state a little or all the way back to the original roll, x[6] is an index of where in x[5] play is taking place, and x[7] contains every state during a round and uses x[6] to travers the history of game play forward. Before getting to that, let's look at a simple example."),st=u(),ve=n("p"),Yt=m("These are the demonstration's event handlers:"),rt=u(),we=n("pre"),zt=m(r[48]),ft=u(),K=n("p"),Xt=m("m4(s) is "),ke=n("span"),ut=m(Oe),at=u(),pt=n("br"),mt=u(),G=n("button"),qt=m("m4(cube)"),bt=u(),Q=n("button"),Jt=m("m4(square)"),ht=u(),ct=n("br"),dt=n("br"),yt=u(),g=n("span"),Vt=m("To call m4(pow(n)), enter n in the box ->"),vt=u(),$=n("input"),l=u(),v=n("br"),C=n("br"),_e=u(),Ce=n("span"),$i=m("To call m4(add(n)), enter n in the box ->"),gt=u(),Fe=n("input"),$t=u(),eo=n("br"),to=n("br"),oo=u(),He=n("span"),el=m("To call m4(mult(n)), enter n in the box ->"),io=u(),Ae=n("input"),lo=u(),no=n("br"),so=n("br"),ro=u(),De=n("span"),tl=m("To call m4(reset(n)), enter n in the box ->"),fo=u(),Ue=n("input"),uo=u(),ao=n("br"),po=n("br"),mo=u(),wt=n("p"),ol=m("Next, x will be an array manipulated by functions designed for that purpose. Here are the functions responsible for the interactive demonstration below:"),bo=u(),kt=n("pre"),il=m(r[42]),ho=u(),_t=n("p"),ll=m(`If you click mon3 = mon3(g) four times and the click mon3 = mon3(g3), you will see that mon3(s) returns its original value, [1,2,3,4]. By the way, the "mon3 =" part of "mon3 = mon3(g)" is included solely to trigger updating of browser displays. Svelte doesn't have a virtual DOM, and merely changing objects isn't enough to trigger DOM updates. For example, arr = [1,2,3] doesn't change in the DOM when arr.push(888) is called. arr = arr afterwards or arr = arr.push(888) initially both do the trick.`),co=u(),F=n("div"),nl=m("["),yo=m(Kt),sl=m("]"),vo=u(),wo=n("br"),ko=n("br"),_o=u(),We=n("button"),rl=m("mon3 = mon3(g)"),Eo=u(),Ze=n("button"),fl=m("mon3 = mon3(g2)"),To=u(),je=n("button"),ul=m("mon3 = mon3(g3)"),Mo=u(),Le=n("button"),al=m("mon3 = mon3(x => [1,2,3,4])"),Bo=u(),Ro=n("br"),xo=n("br"),Io=n("br"),No=u(),Ee=n("p"),pl=m("Now for the game of score, a game involving four dice and two or three-stage arithmetic computations with the goal of arriving at the number 20. My son Alex taught it to me a decade ago, when he was in middle school. I was also learning the Haskell programming language, so I developed a multiplayer online version with groups of interacting player, a chat box, and a shared-by-the-group todo list controlled by a Haskell WebSockets server backend. The backend could compute all possible solutions, if any existed, to any throw of the dice. It also identified all of the impossible-to-solve rolls. Users could change the default number of dice sides from 6,6,12,and 20 and the goal from the default value of 20. A version of it is online at "),Et=n("a"),ml=m("https://score.schalk.net"),bl=m("."),Po=u(),Tt=n("p"),hl=m("This demonstration doesn't work in conjunction with a remote server, nor does it feature any Haskell code. It's just a little solitaire game providing an opportunity to consider the interesting possibilities of recursive closures. Instead of being argunents of function or global object methods, these monads are functions that consume functions. When the functions consumed by monads have no side effects outside of the monad's closure -- which should always be the case -- maintenance and bug tracking become more manageable. Minimizing side effects inside of monadic closure can help even more."),So=u(),Ye=n("h3"),cl=m("Score: "),Oo=m(Gt),Co=u(),ee=n("button"),Fo=m(r[2]),Ho=u(),te=n("button"),Ao=m(r[3]),Do=u(),oe=n("button"),Uo=m(r[4]),Wo=u(),ie=n("button"),Zo=m(r[5]),jo=u(),le=n("span"),dl=m("The operator is "),Lo=m(Qt),Yo=u(),zo=n("br"),Xo=n("br"),qo=u(),ze=n("button"),yl=m("add"),Jo=u(),Xe=n("button"),vl=m("subtract"),Vo=u(),qe=n("button"),wl=m("multiply"),Ko=u(),Je=n("button"),kl=m("divide"),Go=u(),Ve=n("button"),_l=m("concat"),Qo=u(),ne=n("span"),go=m(r[1]),$o=u(),se=n("span"),ei=m(r[19]),ti=u(),oi=n("br"),ii=n("br"),li=u(),Ke=n("button"),El=m("ROLL"),ni=u(),si=n("br"),ri=n("br"),fi=u(),Ge=n("button"),Tl=m("test"),ui=u(),Te=n("button"),ai=m(r[14]),pi=u(),Me=n("button"),mi=m(r[15]),bi=u(),Be=n("button"),hi=m(r[16]),ci=u(),Re=n("button"),di=m(r[17]),yi=u(),vi=n("br"),wi=n("br"),ki=u(),Qe=n("button"),Ml=m("Back"),_i=u(),ge=n("button"),Bl=m("Forward"),Ei=u(),Mt=n("p"),Rl=m("The function fu() is the brains behing the game of Score. Each time a number or operator is clicked, m2(fu) is called and fu does various things depending on the state of the closures value, x."),Ti=u(),Bt=n("p"),xl=m("At the end of fu(), two formatting functions are Called. The first displays or hides variables in the DOM and the second updates their values. Here they are:"),Mi=u(),Rt=n("pre"),Il=m(r[40]),Bi=u(),xt=n("p"),Nl=m('Clicking "ROLL" calls runRoll() which, in turn, calls updateRoll() to re-set HTML variables.'),Ri=u(),It=n("pre"),Pl=m(r[43]),xi=u(),Nt=n("p"),Sl=m(`The "x = [ [], [], [], [], [0], [], [0], [] ]" format will be maintained throught game play. x[0] simulates the dice roll; x[1] recieves integers that are clicked; x[2] holds the operator; and x[4] contains numbers that are computed. x[4] makes sure at least one computed number is involved in arriving at 20. That's the reason, toward the end of fu(), that the intersection of a[0] and a[4] is examined when 20 is computed. Here are the first few functions called when a number is clicked:`),Ii=u(),Pt=n("pre"),Ol=m(r[44]),Ni=u(),St=n("p"),Cl=m(`The first line of fu() is the calculation result that is generated whenever there are two items in (s)[1] and an operator in m2(s)[3]. The intersection is important in fu()'s bottom test. If "intersect", the intersection of m2(s)[1] and m2(s)[3], is empty intersect[0] returns false and the last test in fu fails, even though 20 was produced on the second computation.`),Pi=u(),Ot=n("p"),Fl=m("If no operator has been selected, it's possible to click a third number. The program doesn't complain, it just puts the number back for you with:"),Si=u(),Ct=n("pre"),Hl=m(r[45]),Oi=u(),Ft=n("p"),Al=m("If you roll the dice and keep clicking on the leftmost number, you'll see the numbers shift back and forth on every try. The first element of m2(s)[0] keeps getting pulled out of the first position and pushed back on the right."),Ci=u(),Ht=n("p"),Dl=m(`sfunc() does some more DOM housekeeping. The buttons with dice number come and go as their CSS display strings are changed back and forth between "none" and "inline". fu() calls sfunc(). Here's how it is defined:`),Fi=u(),At=n("pre"),Ul=m(r[46]),Hi=u(),Dt=n("p"),Wl=m("After each number is selected and Before calling sFunc(), fu() first updates the HTML variables as follows:"),Ai=u(),Ut=n("pre"),Zl=m(r[47]),Di=u(),Ui=n("br"),Wi=n("br"),Zi=n("br"),ji=n("br"),Li=n("br"),Yi=n("br"),zi=u(),Xi=n("br"),qi=n("br"),Ji=n("br"),Vi=n("br"),this.h()},l(e){const o=ps('[data-svelte="svelte-3yzzxp"]',document.head);w=s(o,"LINK",{rel:!0,href:!0}),o.forEach(t),f=a(e),x=s(e,"BR",{}),R=a(e),H=s(e,"DIV",{});var Vl=c(H);re=b(Vl,"**************************************************************************"),Vl.forEach(t),L=a(e),T=s(e,"DIV",{style:!0});var Ll=c(T);fe=s(Ll,"BR",{}),ue=b(Ll,`

A Very Simple Recursive Closure Insulates and Controls State Transformations`),Ll.forEach(t),A=a(e),D=s(e,"BR",{}),U=a(e),S=s(e,"P",{});var Kl=c(S);Y=b(Kl,"Various bloggers and writers define functional programming and JavaScript monads in various ways. I'm not saying any of them are right or wrong. In these areas, everyone is entitled to an opinion."),Kl.forEach(t),Z=a(e),O=s(e,"P",{});var Gl=c(O);z=b(Gl,`In my opinion, trying to define JavaScript objects that resemble the basic monads found in the Haskell Prelude module, amusing though it may be, isn't likely to produce anything very useful. People who think Haskell, or the supposed mathematical category of Haskell types and functions called "Hask", are actually Category Theory categories are mistaken. Category Theory inspired the development of Haskell monads and it might not be merely coincidental that the monads I am about to define are functionally similar to Haskell monads, though superficially quite different. Both transform state along pipelines isolated from their outer scope by operating on functions that return new monads. Both preserve state for future transformations or for eventual use in their outer scopes. Mine call functions in their outer scopes in order to update the DOM, not having to wait to do it in a main() function. I'm not trying to mimic Haskell or any other functional programming language.`),Gl.forEach(t),h=a(e),I=s(e,"P",{});var Ki=c(I);ae=b(Ki,'Recursive closures spawned by "M" will control a fairly complicated dice game called "Score" ('),pe=s(Ki,"A",{href:!0});var Ql=c(pe);xe=b(Ql,"Link To Score"),Ql.forEach(t),Ie=b(Ki,`) m2, defined by "m2 = M(x)" where x = [ [], [], [], [], [0], [], [0], [] ], will do the work by consuming functions that operate internally on x. x will represent the ever-changing state of game play.But first we'll let x be a number and then a simple array of numbers in order to show how the monad works. Experienced programmers can see what is going on by just looking at the code, but such people might not be reading this until the end of a hectic work day, a time when they might appreciate an elementary walk-through. Students will benfit from understanding what is going on here. They aren't likely to learn about the possibility of such things in their classrooms. Here's the definition of "M":`),Ki.forEach(t),me=a(e),B=s(e,"PRE",{});var gl=c(B);Ne=b(gl,r[41]),gl.forEach(t),be=a(e),X=s(e,"P",{});var $l=c(X);q=b($l,`Notice that the anonymous function returned by "M" returns a brand new monad in which the value of "x" is func(x') where x' is the previous value of x in "M(x)". There's another version that mutates x which is defined as follows:`),$l.forEach(t),Pe=a(e),J=s(e,"PRE",{});var en=c(J);$e=b(en,r[50]),en.forEach(t),Se=a(e),W=s(e,"P",{});var Gi=c(W);et=b(Gi,"It isn't on the menu, but you can see it in action here: "),V=s(Gi,"A",{href:!0});var tn=c(V);tt=b(tn,"Monads That Mutate State"),tn.forEach(t),M=b(Gi,'. There, the function returned by "M" is named and x = func(x)" mutates x each time go(func) executed on a function "func". It is a little less elegant than the version presented here and changing "x" would have a tendency to change earlier versions, making reverting to prior states by pressing the "BACK" button problematic as opposed to its being problem-free when we re-define "x" inside of a new closure.'),Gi.forEach(t),ot=a(e),he=s(e,"P",{});var on=c(he);Wt=b(on,`I call functions returned by M "monads", much to the consternation of some "functional programmers" who scoff at the idea that JavaScript could possibly have monads such as those defined in the Haskell programming language. Neither my monads nor the Haskell monads are Category Theory monads. Haskell monads insulate chained computation from the global space, consuming functions that return new Monads. Mine happen to do the same thing. Haskell monads need to navegate through various types but I don't bother with that. The definition of "M" shows that the returned function responds to arguments that are functions and also to the string "Stop."`),on.forEach(t),it=a(e),ce=s(e,"P",{});var ln=c(ce);Zt=b(ln,`A monads created by, say, "mon = M(x)" can create an insolated pipeline of state transformations that can wait indefinitely for mon('stop') to return the result. Transformations of M's state can resume at any time. For example, you could run:`),ln.forEach(t),lt=a(e),de=s(e,"PRE",{});var nn=c(de);jt=b(nn,r[49]),nn.forEach(t),nt=a(e),ye=s(e,"P",{});var sn=c(ye);Lt=b(sn,"In the solitaire version of the game of score below, x will be an array of arrays in the form x =  [ [], [], [], [], [], [], [], [] ] where x[0] starts out as four integers simulating a throw of two six-sided, one twelve-sided, and one twenty-sided dice. x[1] and x[3] contain the number selected by the player, x[2] is the selected operator, and x[4] keeps track of the number of successes until the player wins by reaching x[4] = 5, x[5] contains all prior states as the player selects numbers and operators and is used for reversing state a little or all the way back to the original roll, x[6] is an index of where in x[5] play is taking place, and x[7] contains every state during a round and uses x[6] to travers the history of game play forward. Before getting to that, let's look at a simple example."),sn.forEach(t),st=a(e),ve=s(e,"P",{});var rn=c(ve);Yt=b(rn,"These are the demonstration's event handlers:"),rn.forEach(t),rt=a(e),we=s(e,"PRE",{});var fn=c(we);zt=b(fn,r[48]),fn.forEach(t),ft=a(e),K=s(e,"P",{});var Yl=c(K);Xt=b(Yl,"m4(s) is "),ke=s(Yl,"SPAN",{style:!0});var un=c(ke);ut=b(un,Oe),un.forEach(t),Yl.forEach(t),at=a(e),pt=s(e,"BR",{}),mt=a(e),G=s(e,"BUTTON",{});var an=c(G);qt=b(an,"m4(cube)"),an.forEach(t),bt=a(e),Q=s(e,"BUTTON",{});var pn=c(Q);Jt=b(pn,"m4(square)"),pn.forEach(t),ht=a(e),ct=s(e,"BR",{}),dt=s(e,"BR",{}),yt=a(e),g=s(e,"SPAN",{style:!0});var mn=c(g);Vt=b(mn,"To call m4(pow(n)), enter n in the box ->"),mn.forEach(t),vt=a(e),$=s(e,"INPUT",{type:!0,style:!0}),l=a(e),v=s(e,"BR",{}),C=s(e,"BR",{}),_e=a(e),Ce=s(e,"SPAN",{style:!0});var bn=c(Ce);$i=b(bn,"To call m4(add(n)), enter n in the box ->"),bn.forEach(t),gt=a(e),Fe=s(e,"INPUT",{type:!0,style:!0}),$t=a(e),eo=s(e,"BR",{}),to=s(e,"BR",{}),oo=a(e),He=s(e,"SPAN",{style:!0});var hn=c(He);el=b(hn,"To call m4(mult(n)), enter n in the box ->"),hn.forEach(t),io=a(e),Ae=s(e,"INPUT",{type:!0,style:!0}),lo=a(e),no=s(e,"BR",{}),so=s(e,"BR",{}),ro=a(e),De=s(e,"SPAN",{style:!0});var cn=c(De);tl=b(cn,"To call m4(reset(n)), enter n in the box ->"),cn.forEach(t),fo=a(e),Ue=s(e,"INPUT",{type:!0,style:!0}),uo=a(e),ao=s(e,"BR",{}),po=s(e,"BR",{}),mo=a(e),wt=s(e,"P",{});var dn=c(wt);ol=b(dn,"Next, x will be an array manipulated by functions designed for that purpose. Here are the functions responsible for the interactive demonstration below:"),dn.forEach(t),bo=a(e),kt=s(e,"PRE",{});var yn=c(kt);il=b(yn,r[42]),yn.forEach(t),ho=a(e),_t=s(e,"P",{});var vn=c(_t);ll=b(vn,`If you click mon3 = mon3(g) four times and the click mon3 = mon3(g3), you will see that mon3(s) returns its original value, [1,2,3,4]. By the way, the "mon3 =" part of "mon3 = mon3(g)" is included solely to trigger updating of browser displays. Svelte doesn't have a virtual DOM, and merely changing objects isn't enough to trigger DOM updates. For example, arr = [1,2,3] doesn't change in the DOM when arr.push(888) is called. arr = arr afterwards or arr = arr.push(888) initially both do the trick.`),vn.forEach(t),co=a(e),F=s(e,"DIV",{id:!0,style:!0});var Qi=c(F);nl=b(Qi,"["),yo=b(Qi,Kt),sl=b(Qi,"]"),Qi.forEach(t),vo=a(e),wo=s(e,"BR",{}),ko=s(e,"BR",{}),_o=a(e),We=s(e,"BUTTON",{});var wn=c(We);rl=b(wn,"mon3 = mon3(g)"),wn.forEach(t),Eo=a(e),Ze=s(e,"BUTTON",{});var kn=c(Ze);fl=b(kn,"mon3 = mon3(g2)"),kn.forEach(t),To=a(e),je=s(e,"BUTTON",{});var _n=c(je);ul=b(_n,"mon3 = mon3(g3)"),_n.forEach(t),Mo=a(e),Le=s(e,"BUTTON",{});var En=c(Le);al=b(En,"mon3 = mon3(x => [1,2,3,4])"),En.forEach(t),Bo=a(e),Ro=s(e,"BR",{}),xo=s(e,"BR",{}),Io=s(e,"BR",{}),No=a(e),Ee=s(e,"P",{});var gi=c(Ee);pl=b(gi,"Now for the game of score, a game involving four dice and two or three-stage arithmetic computations with the goal of arriving at the number 20. My son Alex taught it to me a decade ago, when he was in middle school. I was also learning the Haskell programming language, so I developed a multiplayer online version with groups of interacting player, a chat box, and a shared-by-the-group todo list controlled by a Haskell WebSockets server backend. The backend could compute all possible solutions, if any existed, to any throw of the dice. It also identified all of the impossible-to-solve rolls. Users could change the default number of dice sides from 6,6,12,and 20 and the goal from the default value of 20. A version of it is online at "),Et=s(gi,"A",{href:!0});var Tn=c(Et);ml=b(Tn,"https://score.schalk.net"),Tn.forEach(t),bl=b(gi,"."),gi.forEach(t),Po=a(e),Tt=s(e,"P",{});var Mn=c(Tt);hl=b(Mn,"This demonstration doesn't work in conjunction with a remote server, nor does it feature any Haskell code. It's just a little solitaire game providing an opportunity to consider the interesting possibilities of recursive closures. Instead of being argunents of function or global object methods, these monads are functions that consume functions. When the functions consumed by monads have no side effects outside of the monad's closure -- which should always be the case -- maintenance and bug tracking become more manageable. Minimizing side effects inside of monadic closure can help even more."),Mn.forEach(t),So=a(e),Ye=s(e,"H3",{});var zl=c(Ye);cl=b(zl,"Score: "),Oo=b(zl,Gt),zl.forEach(t),Co=a(e),ee=s(e,"BUTTON",{style:!0});var Bn=c(ee);Fo=b(Bn,r[2]),Bn.forEach(t),Ho=a(e),te=s(e,"BUTTON",{style:!0});var Rn=c(te);Ao=b(Rn,r[3]),Rn.forEach(t),Do=a(e),oe=s(e,"BUTTON",{style:!0});var xn=c(oe);Uo=b(xn,r[4]),xn.forEach(t),Wo=a(e),ie=s(e,"BUTTON",{style:!0});var In=c(ie);Zo=b(In,r[5]),In.forEach(t),jo=a(e),le=s(e,"SPAN",{style:!0});var Xl=c(le);dl=b(Xl,"The operator is "),Lo=b(Xl,Qt),Xl.forEach(t),Yo=a(e),zo=s(e,"BR",{}),Xo=s(e,"BR",{}),qo=a(e),ze=s(e,"BUTTON",{});var Nn=c(ze);yl=b(Nn,"add"),Nn.forEach(t),Jo=a(e),Xe=s(e,"BUTTON",{});var Pn=c(Xe);vl=b(Pn,"subtract"),Pn.forEach(t),Vo=a(e),qe=s(e,"BUTTON",{});var Sn=c(qe);wl=b(Sn,"multiply"),Sn.forEach(t),Ko=a(e),Je=s(e,"BUTTON",{});var On=c(Je);kl=b(On,"divide"),On.forEach(t),Go=a(e),Ve=s(e,"BUTTON",{});var Cn=c(Ve);_l=b(Cn,"concat"),Cn.forEach(t),Qo=a(e),ne=s(e,"SPAN",{style:!0});var Fn=c(ne);go=b(Fn,r[1]),Fn.forEach(t),$o=a(e),se=s(e,"SPAN",{style:!0});var Hn=c(se);ei=b(Hn,r[19]),Hn.forEach(t),ti=a(e),oi=s(e,"BR",{}),ii=s(e,"BR",{}),li=a(e),Ke=s(e,"BUTTON",{});var An=c(Ke);El=b(An,"ROLL"),An.forEach(t),ni=a(e),si=s(e,"BR",{}),ri=s(e,"BR",{}),fi=a(e),Ge=s(e,"BUTTON",{});var Dn=c(Ge);Tl=b(Dn,"test"),Dn.forEach(t),ui=a(e),Te=s(e,"BUTTON",{style:!0});var Un=c(Te);ai=b(Un,r[14]),Un.forEach(t),pi=a(e),Me=s(e,"BUTTON",{style:!0});var Wn=c(Me);mi=b(Wn,r[15]),Wn.forEach(t),bi=a(e),Be=s(e,"BUTTON",{style:!0});var Zn=c(Be);hi=b(Zn,r[16]),Zn.forEach(t),ci=a(e),Re=s(e,"BUTTON",{style:!0});var jn=c(Re);di=b(jn,r[17]),jn.forEach(t),yi=a(e),vi=s(e,"BR",{}),wi=s(e,"BR",{}),ki=a(e),Qe=s(e,"BUTTON",{});var Ln=c(Qe);Ml=b(Ln,"Back"),Ln.forEach(t),_i=a(e),ge=s(e,"BUTTON",{});var Yn=c(ge);Bl=b(Yn,"Forward"),Yn.forEach(t),Ei=a(e),Mt=s(e,"P",{});var zn=c(Mt);Rl=b(zn,"The function fu() is the brains behing the game of Score. Each time a number or operator is clicked, m2(fu) is called and fu does various things depending on the state of the closures value, x."),zn.forEach(t),Ti=a(e),Bt=s(e,"P",{});var Xn=c(Bt);xl=b(Xn,"At the end of fu(), two formatting functions are Called. The first displays or hides variables in the DOM and the second updates their values. Here they are:"),Xn.forEach(t),Mi=a(e),Rt=s(e,"PRE",{});var qn=c(Rt);Il=b(qn,r[40]),qn.forEach(t),Bi=a(e),xt=s(e,"P",{});var Jn=c(xt);Nl=b(Jn,'Clicking "ROLL" calls runRoll() which, in turn, calls updateRoll() to re-set HTML variables.'),Jn.forEach(t),Ri=a(e),It=s(e,"PRE",{});var Vn=c(It);Pl=b(Vn,r[43]),Vn.forEach(t),xi=a(e),Nt=s(e,"P",{});var Kn=c(Nt);Sl=b(Kn,`The "x = [ [], [], [], [], [0], [], [0], [] ]" format will be maintained throught game play. x[0] simulates the dice roll; x[1] recieves integers that are clicked; x[2] holds the operator; and x[4] contains numbers that are computed. x[4] makes sure at least one computed number is involved in arriving at 20. That's the reason, toward the end of fu(), that the intersection of a[0] and a[4] is examined when 20 is computed. Here are the first few functions called when a number is clicked:`),Kn.forEach(t),Ii=a(e),Pt=s(e,"PRE",{});var Gn=c(Pt);Ol=b(Gn,r[44]),Gn.forEach(t),Ni=a(e),St=s(e,"P",{});var Qn=c(St);Cl=b(Qn,`The first line of fu() is the calculation result that is generated whenever there are two items in (s)[1] and an operator in m2(s)[3]. The intersection is important in fu()'s bottom test. If "intersect", the intersection of m2(s)[1] and m2(s)[3], is empty intersect[0] returns false and the last test in fu fails, even though 20 was produced on the second computation.`),Qn.forEach(t),Pi=a(e),Ot=s(e,"P",{});var gn=c(Ot);Fl=b(gn,"If no operator has been selected, it's possible to click a third number. The program doesn't complain, it just puts the number back for you with:"),gn.forEach(t),Si=a(e),Ct=s(e,"PRE",{});var $n=c(Ct);Hl=b($n,r[45]),$n.forEach(t),Oi=a(e),Ft=s(e,"P",{});var es=c(Ft);Al=b(es,"If you roll the dice and keep clicking on the leftmost number, you'll see the numbers shift back and forth on every try. The first element of m2(s)[0] keeps getting pulled out of the first position and pushed back on the right."),es.forEach(t),Ci=a(e),Ht=s(e,"P",{});var ts=c(Ht);Dl=b(ts,`sfunc() does some more DOM housekeeping. The buttons with dice number come and go as their CSS display strings are changed back and forth between "none" and "inline". fu() calls sfunc(). Here's how it is defined:`),ts.forEach(t),Fi=a(e),At=s(e,"PRE",{});var os=c(At);Ul=b(os,r[46]),os.forEach(t),Hi=a(e),Dt=s(e,"P",{});var is=c(Dt);Wl=b(is,"After each number is selected and Before calling sFunc(), fu() first updates the HTML variables as follows:"),is.forEach(t),Ai=a(e),Ut=s(e,"PRE",{});var ls=c(Ut);Zl=b(ls,r[47]),ls.forEach(t),Di=a(e),Ui=s(e,"BR",{}),Wi=s(e,"BR",{}),Zi=s(e,"BR",{}),ji=s(e,"BR",{}),Li=s(e,"BR",{}),Yi=s(e,"BR",{}),zi=a(e),Xi=s(e,"BR",{}),qi=s(e,"BR",{}),Ji=s(e,"BR",{}),Vi=s(e,"BR",{}),this.h()},h(){document.title="Recursive Closures Without Mutating State ",j(w,"rel","stylesheet"),j(w,"href","../Functions/style.css"),y(T,"font-family","Times New Roman"),y(T,"text-align","center"),y(T,"font-size","32px"),j(pe,"href","#score"),j(V,"href","./monadsOld"),y(ke,"font-size","54px"),y(g,"font-size","24px"),j($,"type","text"),y($,"width","65px"),y(Ce,"font-size","24px"),j(Fe,"type","number"),y(Fe,"width","65px"),y(He,"font-size","24px"),j(Ae,"type","text"),y(Ae,"width","65px"),y(De,"font-size","24px"),j(Ue,"type","number"),y(Ue,"width","65px"),j(F,"id","score"),y(F,"margin-left","10%"),y(F,"font-size","44px"),y(F,"color","#ddaadd"),j(Et,"href","https://score.schalk.net"),y(ee,"display",r[6]),y(te,"display",r[7]),y(oe,"display",r[8]),y(ie,"display",r[9]),y(le,"margin-left","8%"),y(le,"font-size","22px"),y(ne,"margin-left","20px"),y(ne,"color","#bbbbff"),y(ne,"font-size","28px"),y(se,"margin-left","20px"),y(se,"color","#bbbbff"),y(se,"font-size","38px"),y(Te,"display",r[10]),y(Me,"display",r[11]),y(Be,"display",r[12]),y(Re,"display",r[13])},m(e,o){p(document.head,w),i(e,f,o),i(e,x,o),i(e,R,o),i(e,H,o),p(H,re),i(e,L,o),i(e,T,o),p(T,fe),p(T,ue),i(e,A,o),i(e,D,o),i(e,U,o),i(e,S,o),p(S,Y),i(e,Z,o),i(e,O,o),p(O,z),i(e,h,o),i(e,I,o),p(I,ae),p(I,pe),p(pe,xe),p(I,Ie),i(e,me,o),i(e,B,o),p(B,Ne),i(e,be,o),i(e,X,o),p(X,q),i(e,Pe,o),i(e,J,o),p(J,$e),i(e,Se,o),i(e,W,o),p(W,et),p(W,V),p(V,tt),p(W,M),i(e,ot,o),i(e,he,o),p(he,Wt),i(e,it,o),i(e,ce,o),p(ce,Zt),i(e,lt,o),i(e,de,o),p(de,jt),i(e,nt,o),i(e,ye,o),p(ye,Lt),i(e,st,o),i(e,ve,o),p(ve,Yt),i(e,rt,o),i(e,we,o),p(we,zt),i(e,ft,o),i(e,K,o),p(K,Xt),p(K,ke),p(ke,ut),i(e,at,o),i(e,pt,o),i(e,mt,o),i(e,G,o),p(G,qt),i(e,bt,o),i(e,Q,o),p(Q,Jt),i(e,ht,o),i(e,ct,o),i(e,dt,o),i(e,yt,o),i(e,g,o),p(g,Vt),i(e,vt,o),i(e,$,o),i(e,l,o),i(e,v,o),i(e,C,o),i(e,_e,o),i(e,Ce,o),p(Ce,$i),i(e,gt,o),i(e,Fe,o),i(e,$t,o),i(e,eo,o),i(e,to,o),i(e,oo,o),i(e,He,o),p(He,el),i(e,io,o),i(e,Ae,o),i(e,lo,o),i(e,no,o),i(e,so,o),i(e,ro,o),i(e,De,o),p(De,tl),i(e,fo,o),i(e,Ue,o),i(e,uo,o),i(e,ao,o),i(e,po,o),i(e,mo,o),i(e,wt,o),p(wt,ol),i(e,bo,o),i(e,kt,o),p(kt,il),i(e,ho,o),i(e,_t,o),p(_t,ll),i(e,co,o),i(e,F,o),p(F,nl),p(F,yo),p(F,sl),i(e,vo,o),i(e,wo,o),i(e,ko,o),i(e,_o,o),i(e,We,o),p(We,rl),i(e,Eo,o),i(e,Ze,o),p(Ze,fl),i(e,To,o),i(e,je,o),p(je,ul),i(e,Mo,o),i(e,Le,o),p(Le,al),i(e,Bo,o),i(e,Ro,o),i(e,xo,o),i(e,Io,o),i(e,No,o),i(e,Ee,o),p(Ee,pl),p(Ee,Et),p(Et,ml),p(Ee,bl),i(e,Po,o),i(e,Tt,o),p(Tt,hl),i(e,So,o),i(e,Ye,o),p(Ye,cl),p(Ye,Oo),i(e,Co,o),i(e,ee,o),p(ee,Fo),i(e,Ho,o),i(e,te,o),p(te,Ao),i(e,Do,o),i(e,oe,o),p(oe,Uo),i(e,Wo,o),i(e,ie,o),p(ie,Zo),i(e,jo,o),i(e,le,o),p(le,dl),p(le,Lo),i(e,Yo,o),i(e,zo,o),i(e,Xo,o),i(e,qo,o),i(e,ze,o),p(ze,yl),i(e,Jo,o),i(e,Xe,o),p(Xe,vl),i(e,Vo,o),i(e,qe,o),p(qe,wl),i(e,Ko,o),i(e,Je,o),p(Je,kl),i(e,Go,o),i(e,Ve,o),p(Ve,_l),i(e,Qo,o),i(e,ne,o),p(ne,go),i(e,$o,o),i(e,se,o),p(se,ei),i(e,ti,o),i(e,oi,o),i(e,ii,o),i(e,li,o),i(e,Ke,o),p(Ke,El),i(e,ni,o),i(e,si,o),i(e,ri,o),i(e,fi,o),i(e,Ge,o),p(Ge,Tl),i(e,ui,o),i(e,Te,o),p(Te,ai),i(e,pi,o),i(e,Me,o),p(Me,mi),i(e,bi,o),i(e,Be,o),p(Be,hi),i(e,ci,o),i(e,Re,o),p(Re,di),i(e,yi,o),i(e,vi,o),i(e,wi,o),i(e,ki,o),i(e,Qe,o),p(Qe,Ml),i(e,_i,o),i(e,ge,o),p(ge,Bl),i(e,Ei,o),i(e,Mt,o),p(Mt,Rl),i(e,Ti,o),i(e,Bt,o),p(Bt,xl),i(e,Mi,o),i(e,Rt,o),p(Rt,Il),i(e,Bi,o),i(e,xt,o),p(xt,Nl),i(e,Ri,o),i(e,It,o),p(It,Pl),i(e,xi,o),i(e,Nt,o),p(Nt,Sl),i(e,Ii,o),i(e,Pt,o),p(Pt,Ol),i(e,Ni,o),i(e,St,o),p(St,Cl),i(e,Pi,o),i(e,Ot,o),p(Ot,Fl),i(e,Si,o),i(e,Ct,o),p(Ct,Hl),i(e,Oi,o),i(e,Ft,o),p(Ft,Al),i(e,Ci,o),i(e,Ht,o),p(Ht,Dl),i(e,Fi,o),i(e,At,o),p(At,Ul),i(e,Hi,o),i(e,Dt,o),p(Dt,Wl),i(e,Ai,o),i(e,Ut,o),p(Ut,Zl),i(e,Di,o),i(e,Ui,o),i(e,Wi,o),i(e,Zi,o),i(e,ji,o),i(e,Li,o),i(e,Yi,o),i(e,zi,o),i(e,Xi,o),i(e,qi,o),i(e,Ji,o),i(e,Vi,o),k=!0,jl||(Jl=[_(G,"click",r[35]),_(Q,"click",r[34]),_($,"keydown",r[36]),_(Fe,"keydown",r[37]),_(Ae,"keydown",r[38]),_(Ue,"keydown",r[39]),_(We,"click",r[51]),_(Ze,"click",r[52]),_(je,"click",r[53]),_(Le,"click",r[54]),_(ee,"click",r[55]),_(te,"click",r[56]),_(oe,"click",r[57]),_(ie,"click",r[58]),_(ze,"click",r[59]),_(Xe,"click",r[60]),_(qe,"click",r[61]),_(Je,"click",r[62]),_(Ve,"click",r[63]),_(Ke,"click",r[64]),_(Ge,"click",r[65]),_(Qe,"click",r[66]),_(ge,"click",r[67])],jl=!0)},p(e,o){(!k||o[0]&8388608)&&Oe!==(Oe=parseFloat(e[23](d)).toFixed(5).toString()+"")&&N(ut,Oe),(!k||o[0]&1048576)&&Kt!==(Kt=e[20](d).join(", ")+"")&&N(yo,Kt),(!k||o[0]&1)&&Gt!==(Gt=e[0](d)[4]+"")&&N(Oo,Gt),(!k||o[0]&4)&&N(Fo,e[2]),(!k||o[0]&64)&&y(ee,"display",e[6]),(!k||o[0]&8)&&N(Ao,e[3]),(!k||o[0]&128)&&y(te,"display",e[7]),(!k||o[0]&16)&&N(Uo,e[4]),(!k||o[0]&256)&&y(oe,"display",e[8]),(!k||o[0]&32)&&N(Zo,e[5]),(!k||o[0]&512)&&y(ie,"display",e[9]),(!k||o[0]&1)&&Qt!==(Qt=e[0](d)[2]+"")&&N(Lo,Qt),(!k||o[0]&2)&&N(go,e[1]),(!k||o[0]&524288)&&N(ei,e[19]),(!k||o[0]&16384)&&N(ai,e[14]),(!k||o[0]&1024)&&y(Te,"display",e[10]),(!k||o[0]&32768)&&N(mi,e[15]),(!k||o[0]&2048)&&y(Me,"display",e[11]),(!k||o[0]&65536)&&N(hi,e[16]),(!k||o[0]&4096)&&y(Be,"display",e[12]),(!k||o[0]&131072)&&N(di,e[17]),(!k||o[0]&8192)&&y(Re,"display",e[13])},i(e){k||(ms(()=>{P||(P=ns(T,ss,{},!0)),P.run(1)}),k=!0)},o(e){P||(P=ns(T,ss,{},!1)),P.run(0),k=!1},d(e){t(w),e&&t(f),e&&t(x),e&&t(R),e&&t(H),e&&t(L),e&&t(T),e&&P&&P.end(),e&&t(A),e&&t(D),e&&t(U),e&&t(S),e&&t(Z),e&&t(O),e&&t(h),e&&t(I),e&&t(me),e&&t(B),e&&t(be),e&&t(X),e&&t(Pe),e&&t(J),e&&t(Se),e&&t(W),e&&t(ot),e&&t(he),e&&t(it),e&&t(ce),e&&t(lt),e&&t(de),e&&t(nt),e&&t(ye),e&&t(st),e&&t(ve),e&&t(rt),e&&t(we),e&&t(ft),e&&t(K),e&&t(at),e&&t(pt),e&&t(mt),e&&t(G),e&&t(bt),e&&t(Q),e&&t(ht),e&&t(ct),e&&t(dt),e&&t(yt),e&&t(g),e&&t(vt),e&&t($),e&&t(l),e&&t(v),e&&t(C),e&&t(_e),e&&t(Ce),e&&t(gt),e&&t(Fe),e&&t($t),e&&t(eo),e&&t(to),e&&t(oo),e&&t(He),e&&t(io),e&&t(Ae),e&&t(lo),e&&t(no),e&&t(so),e&&t(ro),e&&t(De),e&&t(fo),e&&t(Ue),e&&t(uo),e&&t(ao),e&&t(po),e&&t(mo),e&&t(wt),e&&t(bo),e&&t(kt),e&&t(ho),e&&t(_t),e&&t(co),e&&t(F),e&&t(vo),e&&t(wo),e&&t(ko),e&&t(_o),e&&t(We),e&&t(Eo),e&&t(Ze),e&&t(To),e&&t(je),e&&t(Mo),e&&t(Le),e&&t(Bo),e&&t(Ro),e&&t(xo),e&&t(Io),e&&t(No),e&&t(Ee),e&&t(Po),e&&t(Tt),e&&t(So),e&&t(Ye),e&&t(Co),e&&t(ee),e&&t(Ho),e&&t(te),e&&t(Do),e&&t(oe),e&&t(Wo),e&&t(ie),e&&t(jo),e&&t(le),e&&t(Yo),e&&t(zo),e&&t(Xo),e&&t(qo),e&&t(ze),e&&t(Jo),e&&t(Xe),e&&t(Vo),e&&t(qe),e&&t(Ko),e&&t(Je),e&&t(Go),e&&t(Ve),e&&t(Qo),e&&t(ne),e&&t($o),e&&t(se),e&&t(ti),e&&t(oi),e&&t(ii),e&&t(li),e&&t(Ke),e&&t(ni),e&&t(si),e&&t(ri),e&&t(fi),e&&t(Ge),e&&t(ui),e&&t(Te),e&&t(pi),e&&t(Me),e&&t(bi),e&&t(Be),e&&t(ci),e&&t(Re),e&&t(yi),e&&t(vi),e&&t(wi),e&&t(ki),e&&t(Qe),e&&t(_i),e&&t(ge),e&&t(Ei),e&&t(Mt),e&&t(Ti),e&&t(Bt),e&&t(Mi),e&&t(Rt),e&&t(Bi),e&&t(xt),e&&t(Ri),e&&t(It),e&&t(xi),e&&t(Nt),e&&t(Ii),e&&t(Pt),e&&t(Ni),e&&t(St),e&&t(Pi),e&&t(Ot),e&&t(Si),e&&t(Ct),e&&t(Oi),e&&t(Ft),e&&t(Ci),e&&t(Ht),e&&t(Fi),e&&t(At),e&&t(Hi),e&&t(Dt),e&&t(Ai),e&&t(Ut),e&&t(Di),e&&t(Ui),e&&t(Wi),e&&t(Zi),e&&t(ji),e&&t(Li),e&&t(Yi),e&&t(zi),e&&t(Xi),e&&t(qi),e&&t(Ji),e&&t(Vi),jl=!1,bs(Jl)}}}var d="stop";function cs(r,w,f){var x=parseInt(r,10),R=parseInt(w,10);return f==="+"?x+R:f==="*"?x*R:f==="-"?x-R:f==="/"?x/R:f==="@"?" "+x+R:"fubar"}function ds(r){var w=r.pop()**3;return r.unshift(w),r}function ys(r){return r.flatMap(w=>(w+1)**3)}function vs(r){return r.flatMap(w=>Math.round(w**(1/3)))}function rs(r){return JSON.parse(JSON.stringify(r))}function E(r){return function(w){if(typeof w=="function")return E(w(r));if(w==="stop")return r}}function ql(r){var w=r.split("/");return w.length>1?w[0]/w[1]:w[0]}function ws(r,w){return r.filter(f=>w.includes(f))}function ks(r,w,f){let x;var A,D,U,S,R="none",H="none",re="none",L="none",T="none",fe="none",ue="none",P="none",A,D,U,S,Y,Z,O,z,h,I;I=l=>{var v=[[Math.floor(Math.random()*6)+1,Math.floor(Math.random()*6)+1,Math.floor(Math.random()*12)+1,Math.floor(Math.random()*20)+1],[],["+"],[],[l],[],[0],[]];return f(0,h=E(v)),f(0,h=E(h(d))),pe(h),h(q),h};var ae="";function pe(l){console.log("In updateRoll. m(s) is",l(d)),f(2,A=l(d)[0][0]),f(3,D=l(d)[0][1]),f(4,U=l(d)[0][2]),f(5,S=l(d)[0][3]),f(14,Y=l(d)[1][0]),f(15,Z=l(d)[1][1]),f(16,O=l(d)[1][2]),f(17,z=l(d)[1][3]),l(d)[2],l(d)[3],l(d)[4],f(6,R=f(7,H=f(8,re=f(9,L="inline")))),f(10,T=f(11,fe=f(12,ue=f(13,P="none"))))}function xe(){f(6,R=f(7,H=f(8,re=f(9,L=f(10,T=f(11,fe=f(12,ue=f(13,P="none")))))))),A!=null&&f(6,R="inline"),D!=null&&f(7,H="inline"),U!=null&&f(8,re="inline"),S!=null&&f(9,L="inline"),Y!=null&&f(10,T="inline"),Z!=null&&f(11,fe="inline"),O!=null&&f(12,ue="inline"),z!=null&&f(13,P="inline")}h=E([[Math.floor(Math.random()*6)+1,Math.floor(Math.random()*6)+1,Math.floor(Math.random()*12)+1,Math.floor(Math.random()*20)+1],[],["+"],[],[0],[],[0],[]]);var Ie=function(){f(2,A=h(d)[0][0]),f(3,D=h(d)[0][1]),f(4,U=h(d)[0][2]),f(5,S=h(d)[0][3]),h(d)[2],h(d)[3],h(d)[4],f(14,Y=h(d)[1][0]),f(15,Z=h(d)[1][1]),f(16,O=h(d)[1][2]),f(17,z=h(d)[1][3])},me="",B=E([1,2,3,4]),Ne,be;function X(){var l=h(d);return console.log("<><><><><><><><> xx is",l),console.log(l[0]),console.log("xx[5].length is ",l[5].length),console.log("index is",l[6]),f(0,h=E(l)),h}function q(l){l[5].push(rs([l[0],l[1],l[2],l[3],l[4],l[5],l[6],l[7]])),l[7].push(rs([l[0],l[1],l[2],l[3],l[4],l[5],l[6],l[7]])),l[6][0]+=1;var v,C;if(l[1].length===2&&l[2].length===1&&(C=l[1],v=cs(l[1][0],l[1][1],l[2][0]),l[0].push(v),l[3].push(v),l[1]=[],f(0,h=E(l))),l[1].length===3&&l[0].push(l[1].pop()),v==20&&ws(C,l[3]).length>0){if(l[4][0]===4)f(19,me="You win! "),l[4][0]=0,I(0);else{var _e=parseInt(l[4][0],10);_e+=1,f(1,ae="           Your score increased to "+_e),I(_e)}setTimeout(()=>f(1,ae=f(19,me="")),3e3)}return Ie(),xe(),h(d)}var Pe=l=>{l[1].push(l[0][0]),l[0].shift(),f(0,h=E(l)),h(q)},J=l=>{l[1].push(l[0].splice(1,1)[0]),f(0,h=E(l)),f(0,h=h(q))},$e=l=>{l[1].push(l[0].splice(2,1)[0]),f(0,h=E(l)),f(0,h=h(q))},Se=l=>{l[1].push(l[0].splice(3,1)[0]),f(0,h=E(l)),f(0,h=h(q))};function W(l){l[2]="+",f(0,h=E(l))}function et(l){l[2]="*",f(0,h=E(l))}function V(l){l[2]="/",f(0,h=E(l))}function tt(l){l[2]="@",f(0,h=E(l))}var M=E(3.1415926535),ot=l=>l**3,he=l=>l*l,Wt=l=>v=>v**l,it=l=>v=>1*v+1*l,ce=l=>v=>v*l,Zt=l=>v=>l;function lt(){f(23,M=M(he))}function de(){f(23,M=M(ot))}var jt=function(v){var C=ql(v.target.value);v.keyCode==13&&f(23,M=M(Wt(C)))},nt=function(v){v.keyCode==13&&f(23,M=M(it(v.target.value)))},ye=function(v){v.keyCode==13&&f(23,M=M(ce(ql(v.target.value))))},Lt=function(v){v.keyCode==13&&f(23,M=M(Zt(ql(v.target.value))))},st=`function fu (a) {                                    // fu
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
  update()
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
}`,ve=`function M (x) {
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
};`,we=`var click0 = a => {
    a[1].push(a[0][0])
    a[0].shift();
    m2 = M(a);
    m2(fu);
    // sfunc();
};

var click1 = a => {
    a[1].push(a[0].splice(1,1)[0]);
    m2 = M(a);
    m2 = m2(fu);
};

var click2 = a => {
    a[1].push(a[0].splice(2,1)[0]);
    m2 = M(a);
    m2 = m2(fu);
};

var click3 = a => {
    a[1].push(a[0].splice(3,1)[0]);
    m2 = M(a);
    m2 = m2(fu);
};

function clic0 (m) {
  EEE = "add";
  m[2] = "+";
  m2 = M(m) ;
} 

$: clic1 = m => {
  EEE = "subtract";
  m[2] = "-";
  m2 = M(m) ;
} 

function clic2 (m) {
  EEE = "multiply";
  m[2] = "*";
  m2 = M(m) ;
} 

function clic3 (m) {
  EEE = "divide";
  m[2] = "/";
  m2 = M(m) ;
} 

function clic4 (m) {
  EEE = "concat";
  m[2] = "@"
  m2 = M(m);
};`,zt=`if (a[1].length === 3) {   
    a[0].push(a[1].pop());  // Returns a clicked third number.
  };`,ft=`function sfunc () {
    b0 = b1 = b2 = b3 = b4 = b5 = b6 = b7 = "none";
    if (AA != (undefined && 0)) b0 = "inline";
    if (BB != (undefined && 0)) b1 = "inline";
    if (CC != (undefined && 0)) b2 = "inline";
    if (DD != (undefined && 0)) b3 = "inline";
    if (WW != (undefined && 0)) b4 = "inline";
    if (XX != (undefined && 0)) b5 = "inline";
    if (YY != (undefined && 0)) b6 = "inline";
    if (ZZ != (undefined && 0)) b7 = "inline";
}`,K=`var update = () => {
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
};`,Xt=`function squareFu () {m4 = m4(square)};
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
};`,ke=`var mon = M(2);
mon(v=>v**4)(v=>v+5)(v=>v*2);
// The value of x can be obtained later
mon('stop');  // 42`,Oe=`function M (x) {
    return function go (func) {
        if (typeof func === "function") {
            x = func(x);
            return go;
        }
        else if (func === "stop") return x;
    }
};`;const ut=()=>f(20,B=B(ds)),at=()=>f(20,B=B(ys)),pt=()=>f(20,B=B(vs)),mt=()=>f(20,B=B(l=>[1,2,3,4])),G=()=>h(Pe),qt=()=>h(J),bt=()=>h($e),Q=()=>h(Se),Jt=()=>h(W),ht=()=>h(x),ct=()=>h(et),dt=()=>h(V),yt=()=>h(tt),g=()=>h(I(h(d)[4])),Vt=()=>X(),vt=()=>h(Ne),$=()=>h(be);return r.$$.update=()=>{r.$$.dirty[0]&2&&f(1,ae),r.$$.dirty[0]&2,r.$$.dirty[0]&1&&f(2,A=h(d)[0][0]),r.$$.dirty[0]&1&&f(3,D=h(d)[0][1]),r.$$.dirty[0]&1&&f(4,U=h(d)[0][2]),r.$$.dirty[0]&1&&f(5,S=h(d)[0][3]),r.$$.dirty[0]&1&&h(d)[2],r.$$.dirty[0]&1&&h(d)[3],r.$$.dirty[0]&1&&h(d)[4],r.$$.dirty[0]&1&&f(14,Y=h(d)[1][0]),r.$$.dirty[0]&1&&f(15,Z=h(d)[1][1]),r.$$.dirty[0]&1&&f(16,O=h(d)[1][2]),r.$$.dirty[0]&1&&f(17,z=h(d)[1][3]),r.$$.dirty[0]&1&&h(d)},f(21,Ne=l=>{if(l[5].length>0){var v=l[5][l[5].length-1];v[7]=l[7],f(0,h=E(v)),Ie(),xe()}else console.log("In back. Can't compute")}),f(22,be=l=>{var v=l[6][0];if(v<l[7].length-1){var C=l[7][v+1];C[7]=l[7],f(0,h=E(C)),Ie(),xe()}else console.log("Going out of bounds. The end of b[7] has been reached")}),f(24,x=l=>{l[2]="-",f(0,h=E(l))}),[h,ae,A,D,U,S,R,H,re,L,T,fe,ue,P,Y,Z,O,z,I,me,B,Ne,be,M,x,X,Pe,J,$e,Se,W,et,V,tt,lt,de,jt,nt,ye,Lt,st,ve,Yt,rt,we,zt,ft,K,Xt,ke,Oe,ut,at,pt,mt,G,qt,bt,Q,Jt,ht,ct,dt,yt,g,Vt,vt,$]}class Es extends fs{constructor(w){super();us(this,w,ks,hs,as,{},null,[-1,-1,-1,-1])}}export{Es as default};
