import{S as Ji,i as Vi,s as Ki,e as r,k as p,t as b,L as Qi,c as f,d as t,m as a,a as c,h as v,b as Re,f as h,G as m,g as o,M as _,j as O,N as gi,O as Xi,P as $i,Q as qi}from"../../chunks/vendor-4e552e70.js";function er(i){let k,u,M,R,D,me,X,B,be,ve,F,C,A,S,N,Z,U,I,Y,n,q,G,j,Me,J,Ne,P,ce,z,Je,L,V,Ve,Oe,K,Ke,Fe,Q,Qe,T,ye,Ut,ge,he,Ht,$e,de,Wt,et,g,Zt,ke,Ie=parseFloat(i[23](y)).toFixed(5).toString()+"",tt,lt,ot,st,$,Yt,it,ee,jt,rt,ft,ut,nt,te,zt,pt,le,at,mt,bt,vt,oe,Lt,ct,se,yt,s,d,x,H,zo,Jt,Pe,Vt,Kt,Qt,gt,Ce,Lo,$t,Ae,el,tl,ll,ol,ht,Xo,sl,dt,qo,il,kt,Go,rl,W,Jo,Xt=i[20](y).join(", ")+"",fl,Vo,ul,nl,pl,al,Se,Ko,ml,xe,Qo,bl,De,go,vl,Ue,$o,cl,yl,hl,dl,kl,we,es,wt,ts,ls,wl,_t,os,_l,He,ss,qt=i[0](y)[4]+"",El,Tl,ie,Bl,Rl,re,Ml,Nl,fe,Ol,Fl,ue,Il,Pl,ne,is,Gt=i[0](y)[2]+"",Cl,Al,Sl,xl,Dl,We,rs,Ul,Ze,fs,Hl,Ye,us,Wl,je,ns,Zl,ze,ps,Yl,pe,jl,zl,ae,Ll,Xl,ql,Gl,Jl,Le,as,Vl,Kl,Ql,gl,Xe,ms,$l,_e,eo,to,Ee,lo,oo,Te,so,io,Be,ro,fo,uo,no,po,qe,bs,ao,Ge,vs,mo,Et,cs,bo,Tt,ys,vo,Bt,hs,co,Rt,ds,yo,Mt,ks,ho,Nt,ws,ko,Ot,_s,wo,Ft,Es,_o,It,Ts,Eo,Pt,Bs,To,Ct,Rs,Bo,At,Ms,Ro,St,Ns,Mo,xt,Os,No,Dt,Fs,Oo,Fo,Io,Po,Co,Ao,So,xo,Do,Uo,Ho,Wo,w,Is,Ds;return{c(){k=r("link"),u=p(),M=r("br"),R=p(),D=r("div"),me=b("**************************************************************************"),X=p(),B=r("div"),be=r("br"),ve=b(`
The Recursive Closure "m2 = M(x)" Controls the Action Without Mutating "x"`),C=p(),A=r("br"),S=p(),N=r("h2"),Z=b("Work In Progress"),U=p(),I=r("p"),Y=b(`m2 is a recursive function spawned by the function M. Together,they form a closure as follows:
`),n=r("pre"),q=b(i[41]),G=p(),j=r("p"),Me=b("This differs from the version in "),J=r("a"),Ne=b("monads"),P=b('. There, "x = func(x)" mutated x each time go(func) executed on a function "func". I see no harm in doing it that way, but I thought it would be interesting to work a version that returns M(func(x)) and thereby avoids assigning a new value to x.'),ce=p(),z=r("p"),Je=b("The game of Score in this section provides a way for players to take back actions. This depends on an array of cloned values of x, so it doesn't rely on x not being subject to mutation. I would like to preserve past states without cloning, so someday I will be back at the drawing board."),L=p(),V=r("p"),Ve=b(`I call functions returned by M "monads", much to the consternation of some "functional programmers" who scoff at the idea that JavaScript could possibly have monads such as those defined in the Haskell programming language. Neither my monads nor the Haskell monads are Category Theory monads. The Haskell part actually surprises some programmers. Google "hask is a category" if you don't believe me.`),Oe=p(),K=r("p"),Ke=b('A monads created by, say, "monad = M(x)" creates an isolated pipeline allowing nested functions to operate on "x" insulated from any outer scope. For example, you could run:'),Fe=p(),Q=r("pre"),Qe=b(i[49]),T=p(),ye=r("p"),Ut=b("In the solitaire version of the game of score below, x will be an array of arrays in the form x =  [ [], [], [], [], [n] ] where x[0] contains four integers simulating a throw of two six-sided, one twelve-sided, and one twenty-sided dice. x[1] and x[3] contain the number selected by the player, x[2] is the selected operator, and x[4] keeps track of the number of successes until the player wins by reaching x[4] = 5. But first, let's consider some simpler examples."),ge=p(),he=r("p"),Ht=b("These are the first interactive demonstration's event handlers:"),$e=p(),de=r("pre"),Wt=b(i[48]),et=p(),g=r("p"),Zt=b("m4(s) is "),ke=r("span"),tt=b(Ie),lt=p(),ot=r("br"),st=p(),$=r("button"),Yt=b("m4(cube)"),it=p(),ee=r("button"),jt=b("m4(square)"),rt=p(),ft=r("br"),ut=r("br"),nt=p(),te=r("span"),zt=b("To call m4(pow(n)), enter n in the box ->"),pt=p(),le=r("input"),at=p(),mt=r("br"),bt=r("br"),vt=p(),oe=r("span"),Lt=b("To call m4(add(n)), enter n in the box ->"),ct=p(),se=r("input"),yt=p(),s=r("br"),d=r("br"),x=p(),H=r("span"),zo=b("To call m4(mult(n)), enter n in the box ->"),Jt=p(),Pe=r("input"),Vt=p(),Kt=r("br"),Qt=r("br"),gt=p(),Ce=r("span"),Lo=b("To call m4(reset(n)), enter n in the box ->"),$t=p(),Ae=r("input"),el=p(),tl=r("br"),ll=r("br"),ol=p(),ht=r("p"),Xo=b("Next, x will be an array manipulated by functions designed for that purpose. Here are the functions responsible for the interactive demonstration below:"),sl=p(),dt=r("pre"),qo=b(i[42]),il=p(),kt=r("p"),Go=b(`If you click mon3 = mon3(g) four times and the click mon3 = mon3(g3), you will see that mon3(s) returns its original value, [1,2,3,4]. By the way, the "mon3 =" part of "mon3 = mon3(g)" is included solely to trigger updating of browser displays. Svelte doesn't have a virtual DOM, and merely changing objects isn't enough to trigger DOM updates. For example, arr = [1,2,3] doesn't change in the DOM when arr.push(888) is called. arr = arr afterwards or arr = arr.push(888) initially both do the trick.`),rl=p(),W=r("div"),Jo=b("["),fl=b(Xt),Vo=b("]"),ul=p(),nl=r("br"),pl=r("br"),al=p(),Se=r("button"),Ko=b("mon3 = mon3(g)"),ml=p(),xe=r("button"),Qo=b("mon3 = mon3(g2)"),bl=p(),De=r("button"),go=b("mon3 = mon3(g3)"),vl=p(),Ue=r("button"),$o=b("mon3 = mon3(x => [1,2,3,4])"),cl=p(),yl=r("br"),hl=r("br"),dl=r("br"),kl=p(),we=r("p"),es=b("Now for the game of score, a game involving four dice and two or three-stage arithmetic computations with the goal of arriving at the number 20. My son Alex taught it to me a decade ago, when he was in middle school. I was also learning the Haskell programming language, so I developed a multiplayer online version with groups of interacting player, a chat box, and a shared-by-the-group todo list controlled by a Haskell WebSockets server backend. The backend could compute all possible solutions, if any existed, to any throw of the dice. It also identified all of the impossible-to-solve rolls. Users could change the default number of dice sides from 6,6,12,and 20 and the goal from the default value of 20. A version of it is online at "),wt=r("a"),ts=b("https://score.schalk.net"),ls=b("."),wl=p(),_t=r("p"),os=b("This demonstration doesn't work in conjunction with a remote server, nor does it feature any Haskell code. It's just a little solitaire game providing an opportunity to consider the interesting possibilities of recursive closures. Instead of being argunents of function or global object methods, these monads are functions that consume functions. When the functions consumed by monads have no side effects outside of the monad's closure -- which should always be the case -- maintenance and bug tracking become more manageable. Minimizing side effects inside of monadic closure can help even more."),_l=p(),He=r("h3"),ss=b("Score: "),El=b(qt),Tl=p(),ie=r("button"),Bl=b(i[2]),Rl=p(),re=r("button"),Ml=b(i[3]),Nl=p(),fe=r("button"),Ol=b(i[4]),Fl=p(),ue=r("button"),Il=b(i[5]),Pl=p(),ne=r("span"),is=b("The operator is "),Cl=b(Gt),Al=p(),Sl=r("br"),xl=r("br"),Dl=p(),We=r("button"),rs=b("add"),Ul=p(),Ze=r("button"),fs=b("subtract"),Hl=p(),Ye=r("button"),us=b("multiply"),Wl=p(),je=r("button"),ns=b("divide"),Zl=p(),ze=r("button"),ps=b("concat"),Yl=p(),pe=r("span"),jl=b(i[1]),zl=p(),ae=r("span"),Ll=b(i[19]),Xl=p(),ql=r("br"),Gl=r("br"),Jl=p(),Le=r("button"),as=b("ROLL"),Vl=p(),Kl=r("br"),Ql=r("br"),gl=p(),Xe=r("button"),ms=b("test"),$l=p(),_e=r("button"),eo=b(i[14]),to=p(),Ee=r("button"),lo=b(i[15]),oo=p(),Te=r("button"),so=b(i[16]),io=p(),Be=r("button"),ro=b(i[17]),fo=p(),uo=r("br"),no=r("br"),po=p(),qe=r("button"),bs=b("Back"),ao=p(),Ge=r("button"),vs=b("Forward"),mo=p(),Et=r("p"),cs=b("The function fu() is the brains behing the game of Score. Each time a number is clicked, m2(fu) is called and fu does various things depending on the state of the closures value, x."),bo=p(),Tt=r("p"),ys=b("At the end of fu(), two formatting functions are Called. The first displays or hides variables in the DOM and the second updates their values. Here they are:"),vo=p(),Bt=r("pre"),hs=b(i[40]),co=p(),Rt=r("p"),ds=b('Clicking "ROLL" calls runRoll() which, in turn, calls updateRoll() to re-set HTML variables.'),yo=p(),Mt=r("pre"),ks=b(i[43]),ho=p(),Nt=r("p"),ws=b('The "x = [ [], [], [], [], [0], [], [0] ]" format will be maintained throught game play. x[0] simulates the dice roll; x[1] recieves integers that are clicked; x[2] holds the operator; and x[4] contains numbers that are computed. x[4] makes sure at least one computed number is involved in arriving at 20. Here are the first few functions called when a number is clicked:'),ko=p(),Ot=r("pre"),_s=b(i[44]),wo=p(),Ft=r("p"),Es=b(`The first line of fu() is the calculation result that is generated whenever there are two items in (s)[1] and an operator in m2(s)[3]. The intersection is important in fu()'s bottom test. If "intersect", the intersection of m2(s)[1] and m2(s)[3], is empty intersect[0] returns false and the last test in fu fails, even though 20 was produced on the second computation.`),_o=p(),It=r("p"),Ts=b("If no operator has been selected, it's possible to click a third number. The program doesn't complain, it just puts the number back for you with:"),Eo=p(),Pt=r("pre"),Bs=b(i[45]),To=p(),Ct=r("p"),Rs=b("If you roll the dice and keep clicking on the leftmost number, you'll see the numbers shift back and forth on every try. The first element of m2(s)[0] keeps getting pulled out of the first position and pushed back on the right."),Bo=p(),At=r("p"),Ms=b(`sfunc() does some more DOM housekeeping. The buttons with dice number come and go as their CSS display strings are changed back and forth between "none" and "inline". fu() calls sfunc(). Here's how it is defined:`),Ro=p(),St=r("pre"),Ns=b(i[46]),Mo=p(),xt=r("p"),Os=b("After each number is selected and Before calling sFunc(), fu() first updates the HTML variables as follows:"),No=p(),Dt=r("pre"),Fs=b(i[47]),Oo=p(),Fo=r("br"),Io=r("br"),Po=r("br"),Co=r("br"),Ao=r("br"),So=r("br"),xo=p(),Do=r("br"),Uo=r("br"),Ho=r("br"),Wo=r("br"),this.h()},l(e){const l=Qi('[data-svelte="svelte-3yzzxp"]',document.head);k=f(l,"LINK",{rel:!0,href:!0}),l.forEach(t),u=a(e),M=f(e,"BR",{}),R=a(e),D=f(e,"DIV",{});var Us=c(D);me=v(Us,"**************************************************************************"),Us.forEach(t),X=a(e),B=f(e,"DIV",{style:!0});var Ps=c(B);be=f(Ps,"BR",{}),ve=v(Ps,`
The Recursive Closure "m2 = M(x)" Controls the Action Without Mutating "x"`),Ps.forEach(t),C=a(e),A=f(e,"BR",{}),S=a(e),N=f(e,"H2",{});var Hs=c(N);Z=v(Hs,"Work In Progress"),Hs.forEach(t),U=a(e),I=f(e,"P",{});var Ws=c(I);Y=v(Ws,`m2 is a recursive function spawned by the function M. Together,they form a closure as follows:
`),Ws.forEach(t),n=f(e,"PRE",{});var Zs=c(n);q=v(Zs,i[41]),Zs.forEach(t),G=a(e),j=f(e,"P",{});var Zo=c(j);Me=v(Zo,"This differs from the version in "),J=f(Zo,"A",{href:!0});var Ys=c(J);Ne=v(Ys,"monads"),Ys.forEach(t),P=v(Zo,'. There, "x = func(x)" mutated x each time go(func) executed on a function "func". I see no harm in doing it that way, but I thought it would be interesting to work a version that returns M(func(x)) and thereby avoids assigning a new value to x.'),Zo.forEach(t),ce=a(e),z=f(e,"P",{});var js=c(z);Je=v(js,"The game of Score in this section provides a way for players to take back actions. This depends on an array of cloned values of x, so it doesn't rely on x not being subject to mutation. I would like to preserve past states without cloning, so someday I will be back at the drawing board."),js.forEach(t),L=a(e),V=f(e,"P",{});var zs=c(V);Ve=v(zs,`I call functions returned by M "monads", much to the consternation of some "functional programmers" who scoff at the idea that JavaScript could possibly have monads such as those defined in the Haskell programming language. Neither my monads nor the Haskell monads are Category Theory monads. The Haskell part actually surprises some programmers. Google "hask is a category" if you don't believe me.`),zs.forEach(t),Oe=a(e),K=f(e,"P",{});var Ls=c(K);Ke=v(Ls,'A monads created by, say, "monad = M(x)" creates an isolated pipeline allowing nested functions to operate on "x" insulated from any outer scope. For example, you could run:'),Ls.forEach(t),Fe=a(e),Q=f(e,"PRE",{});var Xs=c(Q);Qe=v(Xs,i[49]),Xs.forEach(t),T=a(e),ye=f(e,"P",{});var qs=c(ye);Ut=v(qs,"In the solitaire version of the game of score below, x will be an array of arrays in the form x =  [ [], [], [], [], [n] ] where x[0] contains four integers simulating a throw of two six-sided, one twelve-sided, and one twenty-sided dice. x[1] and x[3] contain the number selected by the player, x[2] is the selected operator, and x[4] keeps track of the number of successes until the player wins by reaching x[4] = 5. But first, let's consider some simpler examples."),qs.forEach(t),ge=a(e),he=f(e,"P",{});var Gs=c(he);Ht=v(Gs,"These are the first interactive demonstration's event handlers:"),Gs.forEach(t),$e=a(e),de=f(e,"PRE",{});var Js=c(de);Wt=v(Js,i[48]),Js.forEach(t),et=a(e),g=f(e,"P",{});var Cs=c(g);Zt=v(Cs,"m4(s) is "),ke=f(Cs,"SPAN",{style:!0});var Vs=c(ke);tt=v(Vs,Ie),Vs.forEach(t),Cs.forEach(t),lt=a(e),ot=f(e,"BR",{}),st=a(e),$=f(e,"BUTTON",{});var Ks=c($);Yt=v(Ks,"m4(cube)"),Ks.forEach(t),it=a(e),ee=f(e,"BUTTON",{});var Qs=c(ee);jt=v(Qs,"m4(square)"),Qs.forEach(t),rt=a(e),ft=f(e,"BR",{}),ut=f(e,"BR",{}),nt=a(e),te=f(e,"SPAN",{style:!0});var gs=c(te);zt=v(gs,"To call m4(pow(n)), enter n in the box ->"),gs.forEach(t),pt=a(e),le=f(e,"INPUT",{type:!0,style:!0}),at=a(e),mt=f(e,"BR",{}),bt=f(e,"BR",{}),vt=a(e),oe=f(e,"SPAN",{style:!0});var $s=c(oe);Lt=v($s,"To call m4(add(n)), enter n in the box ->"),$s.forEach(t),ct=a(e),se=f(e,"INPUT",{type:!0,style:!0}),yt=a(e),s=f(e,"BR",{}),d=f(e,"BR",{}),x=a(e),H=f(e,"SPAN",{style:!0});var ei=c(H);zo=v(ei,"To call m4(mult(n)), enter n in the box ->"),ei.forEach(t),Jt=a(e),Pe=f(e,"INPUT",{type:!0,style:!0}),Vt=a(e),Kt=f(e,"BR",{}),Qt=f(e,"BR",{}),gt=a(e),Ce=f(e,"SPAN",{style:!0});var ti=c(Ce);Lo=v(ti,"To call m4(reset(n)), enter n in the box ->"),ti.forEach(t),$t=a(e),Ae=f(e,"INPUT",{type:!0,style:!0}),el=a(e),tl=f(e,"BR",{}),ll=f(e,"BR",{}),ol=a(e),ht=f(e,"P",{});var li=c(ht);Xo=v(li,"Next, x will be an array manipulated by functions designed for that purpose. Here are the functions responsible for the interactive demonstration below:"),li.forEach(t),sl=a(e),dt=f(e,"PRE",{});var oi=c(dt);qo=v(oi,i[42]),oi.forEach(t),il=a(e),kt=f(e,"P",{});var si=c(kt);Go=v(si,`If you click mon3 = mon3(g) four times and the click mon3 = mon3(g3), you will see that mon3(s) returns its original value, [1,2,3,4]. By the way, the "mon3 =" part of "mon3 = mon3(g)" is included solely to trigger updating of browser displays. Svelte doesn't have a virtual DOM, and merely changing objects isn't enough to trigger DOM updates. For example, arr = [1,2,3] doesn't change in the DOM when arr.push(888) is called. arr = arr afterwards or arr = arr.push(888) initially both do the trick.`),si.forEach(t),rl=a(e),W=f(e,"DIV",{style:!0});var Yo=c(W);Jo=v(Yo,"["),fl=v(Yo,Xt),Vo=v(Yo,"]"),Yo.forEach(t),ul=a(e),nl=f(e,"BR",{}),pl=f(e,"BR",{}),al=a(e),Se=f(e,"BUTTON",{});var ii=c(Se);Ko=v(ii,"mon3 = mon3(g)"),ii.forEach(t),ml=a(e),xe=f(e,"BUTTON",{});var ri=c(xe);Qo=v(ri,"mon3 = mon3(g2)"),ri.forEach(t),bl=a(e),De=f(e,"BUTTON",{});var fi=c(De);go=v(fi,"mon3 = mon3(g3)"),fi.forEach(t),vl=a(e),Ue=f(e,"BUTTON",{});var ui=c(Ue);$o=v(ui,"mon3 = mon3(x => [1,2,3,4])"),ui.forEach(t),cl=a(e),yl=f(e,"BR",{}),hl=f(e,"BR",{}),dl=f(e,"BR",{}),kl=a(e),we=f(e,"P",{});var jo=c(we);es=v(jo,"Now for the game of score, a game involving four dice and two or three-stage arithmetic computations with the goal of arriving at the number 20. My son Alex taught it to me a decade ago, when he was in middle school. I was also learning the Haskell programming language, so I developed a multiplayer online version with groups of interacting player, a chat box, and a shared-by-the-group todo list controlled by a Haskell WebSockets server backend. The backend could compute all possible solutions, if any existed, to any throw of the dice. It also identified all of the impossible-to-solve rolls. Users could change the default number of dice sides from 6,6,12,and 20 and the goal from the default value of 20. A version of it is online at "),wt=f(jo,"A",{href:!0});var ni=c(wt);ts=v(ni,"https://score.schalk.net"),ni.forEach(t),ls=v(jo,"."),jo.forEach(t),wl=a(e),_t=f(e,"P",{});var pi=c(_t);os=v(pi,"This demonstration doesn't work in conjunction with a remote server, nor does it feature any Haskell code. It's just a little solitaire game providing an opportunity to consider the interesting possibilities of recursive closures. Instead of being argunents of function or global object methods, these monads are functions that consume functions. When the functions consumed by monads have no side effects outside of the monad's closure -- which should always be the case -- maintenance and bug tracking become more manageable. Minimizing side effects inside of monadic closure can help even more."),pi.forEach(t),_l=a(e),He=f(e,"H3",{});var As=c(He);ss=v(As,"Score: "),El=v(As,qt),As.forEach(t),Tl=a(e),ie=f(e,"BUTTON",{style:!0});var ai=c(ie);Bl=v(ai,i[2]),ai.forEach(t),Rl=a(e),re=f(e,"BUTTON",{style:!0});var mi=c(re);Ml=v(mi,i[3]),mi.forEach(t),Nl=a(e),fe=f(e,"BUTTON",{style:!0});var bi=c(fe);Ol=v(bi,i[4]),bi.forEach(t),Fl=a(e),ue=f(e,"BUTTON",{style:!0});var vi=c(ue);Il=v(vi,i[5]),vi.forEach(t),Pl=a(e),ne=f(e,"SPAN",{style:!0});var Ss=c(ne);is=v(Ss,"The operator is "),Cl=v(Ss,Gt),Ss.forEach(t),Al=a(e),Sl=f(e,"BR",{}),xl=f(e,"BR",{}),Dl=a(e),We=f(e,"BUTTON",{});var ci=c(We);rs=v(ci,"add"),ci.forEach(t),Ul=a(e),Ze=f(e,"BUTTON",{});var yi=c(Ze);fs=v(yi,"subtract"),yi.forEach(t),Hl=a(e),Ye=f(e,"BUTTON",{});var hi=c(Ye);us=v(hi,"multiply"),hi.forEach(t),Wl=a(e),je=f(e,"BUTTON",{});var di=c(je);ns=v(di,"divide"),di.forEach(t),Zl=a(e),ze=f(e,"BUTTON",{});var ki=c(ze);ps=v(ki,"concat"),ki.forEach(t),Yl=a(e),pe=f(e,"SPAN",{style:!0});var wi=c(pe);jl=v(wi,i[1]),wi.forEach(t),zl=a(e),ae=f(e,"SPAN",{style:!0});var _i=c(ae);Ll=v(_i,i[19]),_i.forEach(t),Xl=a(e),ql=f(e,"BR",{}),Gl=f(e,"BR",{}),Jl=a(e),Le=f(e,"BUTTON",{});var Ei=c(Le);as=v(Ei,"ROLL"),Ei.forEach(t),Vl=a(e),Kl=f(e,"BR",{}),Ql=f(e,"BR",{}),gl=a(e),Xe=f(e,"BUTTON",{});var Ti=c(Xe);ms=v(Ti,"test"),Ti.forEach(t),$l=a(e),_e=f(e,"BUTTON",{style:!0});var Bi=c(_e);eo=v(Bi,i[14]),Bi.forEach(t),to=a(e),Ee=f(e,"BUTTON",{style:!0});var Ri=c(Ee);lo=v(Ri,i[15]),Ri.forEach(t),oo=a(e),Te=f(e,"BUTTON",{style:!0});var Mi=c(Te);so=v(Mi,i[16]),Mi.forEach(t),io=a(e),Be=f(e,"BUTTON",{style:!0});var Ni=c(Be);ro=v(Ni,i[17]),Ni.forEach(t),fo=a(e),uo=f(e,"BR",{}),no=f(e,"BR",{}),po=a(e),qe=f(e,"BUTTON",{});var Oi=c(qe);bs=v(Oi,"Back"),Oi.forEach(t),ao=a(e),Ge=f(e,"BUTTON",{});var Fi=c(Ge);vs=v(Fi,"Forward"),Fi.forEach(t),mo=a(e),Et=f(e,"P",{});var Ii=c(Et);cs=v(Ii,"The function fu() is the brains behing the game of Score. Each time a number is clicked, m2(fu) is called and fu does various things depending on the state of the closures value, x."),Ii.forEach(t),bo=a(e),Tt=f(e,"P",{});var Pi=c(Tt);ys=v(Pi,"At the end of fu(), two formatting functions are Called. The first displays or hides variables in the DOM and the second updates their values. Here they are:"),Pi.forEach(t),vo=a(e),Bt=f(e,"PRE",{});var Ci=c(Bt);hs=v(Ci,i[40]),Ci.forEach(t),co=a(e),Rt=f(e,"P",{});var Ai=c(Rt);ds=v(Ai,'Clicking "ROLL" calls runRoll() which, in turn, calls updateRoll() to re-set HTML variables.'),Ai.forEach(t),yo=a(e),Mt=f(e,"PRE",{});var Si=c(Mt);ks=v(Si,i[43]),Si.forEach(t),ho=a(e),Nt=f(e,"P",{});var xi=c(Nt);ws=v(xi,'The "x = [ [], [], [], [], [0], [], [0] ]" format will be maintained throught game play. x[0] simulates the dice roll; x[1] recieves integers that are clicked; x[2] holds the operator; and x[4] contains numbers that are computed. x[4] makes sure at least one computed number is involved in arriving at 20. Here are the first few functions called when a number is clicked:'),xi.forEach(t),ko=a(e),Ot=f(e,"PRE",{});var Di=c(Ot);_s=v(Di,i[44]),Di.forEach(t),wo=a(e),Ft=f(e,"P",{});var Ui=c(Ft);Es=v(Ui,`The first line of fu() is the calculation result that is generated whenever there are two items in (s)[1] and an operator in m2(s)[3]. The intersection is important in fu()'s bottom test. If "intersect", the intersection of m2(s)[1] and m2(s)[3], is empty intersect[0] returns false and the last test in fu fails, even though 20 was produced on the second computation.`),Ui.forEach(t),_o=a(e),It=f(e,"P",{});var Hi=c(It);Ts=v(Hi,"If no operator has been selected, it's possible to click a third number. The program doesn't complain, it just puts the number back for you with:"),Hi.forEach(t),Eo=a(e),Pt=f(e,"PRE",{});var Wi=c(Pt);Bs=v(Wi,i[45]),Wi.forEach(t),To=a(e),Ct=f(e,"P",{});var Zi=c(Ct);Rs=v(Zi,"If you roll the dice and keep clicking on the leftmost number, you'll see the numbers shift back and forth on every try. The first element of m2(s)[0] keeps getting pulled out of the first position and pushed back on the right."),Zi.forEach(t),Bo=a(e),At=f(e,"P",{});var Yi=c(At);Ms=v(Yi,`sfunc() does some more DOM housekeeping. The buttons with dice number come and go as their CSS display strings are changed back and forth between "none" and "inline". fu() calls sfunc(). Here's how it is defined:`),Yi.forEach(t),Ro=a(e),St=f(e,"PRE",{});var ji=c(St);Ns=v(ji,i[46]),ji.forEach(t),Mo=a(e),xt=f(e,"P",{});var zi=c(xt);Os=v(zi,"After each number is selected and Before calling sFunc(), fu() first updates the HTML variables as follows:"),zi.forEach(t),No=a(e),Dt=f(e,"PRE",{});var Li=c(Dt);Fs=v(Li,i[47]),Li.forEach(t),Oo=a(e),Fo=f(e,"BR",{}),Io=f(e,"BR",{}),Po=f(e,"BR",{}),Co=f(e,"BR",{}),Ao=f(e,"BR",{}),So=f(e,"BR",{}),xo=a(e),Do=f(e,"BR",{}),Uo=f(e,"BR",{}),Ho=f(e,"BR",{}),Wo=f(e,"BR",{}),this.h()},h(){document.title="Recursive Closures Without Mutating State ",Re(k,"rel","stylesheet"),Re(k,"href","../Functions/style.css"),h(B,"font-family","Times New Roman"),h(B,"text-align","center"),h(B,"font-size","32px"),Re(J,"href","./monads"),h(ke,"font-size","54px"),h(te,"font-size","24px"),Re(le,"type","text"),h(le,"width","65px"),h(oe,"font-size","24px"),Re(se,"type","number"),h(se,"width","65px"),h(H,"font-size","24px"),Re(Pe,"type","text"),h(Pe,"width","65px"),h(Ce,"font-size","24px"),Re(Ae,"type","number"),h(Ae,"width","65px"),h(W,"margin-left","10%"),h(W,"font-size","44px"),h(W,"color","#ddaadd"),Re(wt,"href","https://score.schalk.net"),h(ie,"display",i[6]),h(re,"display",i[7]),h(fe,"display",i[8]),h(ue,"display",i[9]),h(ne,"margin-left","8%"),h(ne,"font-size","22px"),h(pe,"margin-left","20px"),h(pe,"color","#bbbbff"),h(pe,"font-size","28px"),h(ae,"margin-left","20px"),h(ae,"color","#bbbbff"),h(ae,"font-size","38px"),h(_e,"display",i[10]),h(Ee,"display",i[11]),h(Te,"display",i[12]),h(Be,"display",i[13])},m(e,l){m(document.head,k),o(e,u,l),o(e,M,l),o(e,R,l),o(e,D,l),m(D,me),o(e,X,l),o(e,B,l),m(B,be),m(B,ve),o(e,C,l),o(e,A,l),o(e,S,l),o(e,N,l),m(N,Z),o(e,U,l),o(e,I,l),m(I,Y),o(e,n,l),m(n,q),o(e,G,l),o(e,j,l),m(j,Me),m(j,J),m(J,Ne),m(j,P),o(e,ce,l),o(e,z,l),m(z,Je),o(e,L,l),o(e,V,l),m(V,Ve),o(e,Oe,l),o(e,K,l),m(K,Ke),o(e,Fe,l),o(e,Q,l),m(Q,Qe),o(e,T,l),o(e,ye,l),m(ye,Ut),o(e,ge,l),o(e,he,l),m(he,Ht),o(e,$e,l),o(e,de,l),m(de,Wt),o(e,et,l),o(e,g,l),m(g,Zt),m(g,ke),m(ke,tt),o(e,lt,l),o(e,ot,l),o(e,st,l),o(e,$,l),m($,Yt),o(e,it,l),o(e,ee,l),m(ee,jt),o(e,rt,l),o(e,ft,l),o(e,ut,l),o(e,nt,l),o(e,te,l),m(te,zt),o(e,pt,l),o(e,le,l),o(e,at,l),o(e,mt,l),o(e,bt,l),o(e,vt,l),o(e,oe,l),m(oe,Lt),o(e,ct,l),o(e,se,l),o(e,yt,l),o(e,s,l),o(e,d,l),o(e,x,l),o(e,H,l),m(H,zo),o(e,Jt,l),o(e,Pe,l),o(e,Vt,l),o(e,Kt,l),o(e,Qt,l),o(e,gt,l),o(e,Ce,l),m(Ce,Lo),o(e,$t,l),o(e,Ae,l),o(e,el,l),o(e,tl,l),o(e,ll,l),o(e,ol,l),o(e,ht,l),m(ht,Xo),o(e,sl,l),o(e,dt,l),m(dt,qo),o(e,il,l),o(e,kt,l),m(kt,Go),o(e,rl,l),o(e,W,l),m(W,Jo),m(W,fl),m(W,Vo),o(e,ul,l),o(e,nl,l),o(e,pl,l),o(e,al,l),o(e,Se,l),m(Se,Ko),o(e,ml,l),o(e,xe,l),m(xe,Qo),o(e,bl,l),o(e,De,l),m(De,go),o(e,vl,l),o(e,Ue,l),m(Ue,$o),o(e,cl,l),o(e,yl,l),o(e,hl,l),o(e,dl,l),o(e,kl,l),o(e,we,l),m(we,es),m(we,wt),m(wt,ts),m(we,ls),o(e,wl,l),o(e,_t,l),m(_t,os),o(e,_l,l),o(e,He,l),m(He,ss),m(He,El),o(e,Tl,l),o(e,ie,l),m(ie,Bl),o(e,Rl,l),o(e,re,l),m(re,Ml),o(e,Nl,l),o(e,fe,l),m(fe,Ol),o(e,Fl,l),o(e,ue,l),m(ue,Il),o(e,Pl,l),o(e,ne,l),m(ne,is),m(ne,Cl),o(e,Al,l),o(e,Sl,l),o(e,xl,l),o(e,Dl,l),o(e,We,l),m(We,rs),o(e,Ul,l),o(e,Ze,l),m(Ze,fs),o(e,Hl,l),o(e,Ye,l),m(Ye,us),o(e,Wl,l),o(e,je,l),m(je,ns),o(e,Zl,l),o(e,ze,l),m(ze,ps),o(e,Yl,l),o(e,pe,l),m(pe,jl),o(e,zl,l),o(e,ae,l),m(ae,Ll),o(e,Xl,l),o(e,ql,l),o(e,Gl,l),o(e,Jl,l),o(e,Le,l),m(Le,as),o(e,Vl,l),o(e,Kl,l),o(e,Ql,l),o(e,gl,l),o(e,Xe,l),m(Xe,ms),o(e,$l,l),o(e,_e,l),m(_e,eo),o(e,to,l),o(e,Ee,l),m(Ee,lo),o(e,oo,l),o(e,Te,l),m(Te,so),o(e,io,l),o(e,Be,l),m(Be,ro),o(e,fo,l),o(e,uo,l),o(e,no,l),o(e,po,l),o(e,qe,l),m(qe,bs),o(e,ao,l),o(e,Ge,l),m(Ge,vs),o(e,mo,l),o(e,Et,l),m(Et,cs),o(e,bo,l),o(e,Tt,l),m(Tt,ys),o(e,vo,l),o(e,Bt,l),m(Bt,hs),o(e,co,l),o(e,Rt,l),m(Rt,ds),o(e,yo,l),o(e,Mt,l),m(Mt,ks),o(e,ho,l),o(e,Nt,l),m(Nt,ws),o(e,ko,l),o(e,Ot,l),m(Ot,_s),o(e,wo,l),o(e,Ft,l),m(Ft,Es),o(e,_o,l),o(e,It,l),m(It,Ts),o(e,Eo,l),o(e,Pt,l),m(Pt,Bs),o(e,To,l),o(e,Ct,l),m(Ct,Rs),o(e,Bo,l),o(e,At,l),m(At,Ms),o(e,Ro,l),o(e,St,l),m(St,Ns),o(e,Mo,l),o(e,xt,l),m(xt,Os),o(e,No,l),o(e,Dt,l),m(Dt,Fs),o(e,Oo,l),o(e,Fo,l),o(e,Io,l),o(e,Po,l),o(e,Co,l),o(e,Ao,l),o(e,So,l),o(e,xo,l),o(e,Do,l),o(e,Uo,l),o(e,Ho,l),o(e,Wo,l),w=!0,Is||(Ds=[_($,"click",i[35]),_(ee,"click",i[34]),_(le,"keydown",i[36]),_(se,"keydown",i[37]),_(Pe,"keydown",i[38]),_(Ae,"keydown",i[39]),_(Se,"click",i[50]),_(xe,"click",i[51]),_(De,"click",i[52]),_(Ue,"click",i[53]),_(ie,"click",i[54]),_(re,"click",i[55]),_(fe,"click",i[56]),_(ue,"click",i[57]),_(We,"click",i[58]),_(Ze,"click",i[59]),_(Ye,"click",i[60]),_(je,"click",i[61]),_(ze,"click",i[62]),_(Le,"click",i[63]),_(Xe,"click",i[64]),_(qe,"click",i[65]),_(Ge,"click",i[66])],Is=!0)},p(e,l){(!w||l[0]&8388608)&&Ie!==(Ie=parseFloat(e[23](y)).toFixed(5).toString()+"")&&O(tt,Ie),(!w||l[0]&1048576)&&Xt!==(Xt=e[20](y).join(", ")+"")&&O(fl,Xt),(!w||l[0]&1)&&qt!==(qt=e[0](y)[4]+"")&&O(El,qt),(!w||l[0]&4)&&O(Bl,e[2]),(!w||l[0]&64)&&h(ie,"display",e[6]),(!w||l[0]&8)&&O(Ml,e[3]),(!w||l[0]&128)&&h(re,"display",e[7]),(!w||l[0]&16)&&O(Ol,e[4]),(!w||l[0]&256)&&h(fe,"display",e[8]),(!w||l[0]&32)&&O(Il,e[5]),(!w||l[0]&512)&&h(ue,"display",e[9]),(!w||l[0]&1)&&Gt!==(Gt=e[0](y)[2]+"")&&O(Cl,Gt),(!w||l[0]&2)&&O(jl,e[1]),(!w||l[0]&524288)&&O(Ll,e[19]),(!w||l[0]&16384)&&O(eo,e[14]),(!w||l[0]&1024)&&h(_e,"display",e[10]),(!w||l[0]&32768)&&O(lo,e[15]),(!w||l[0]&2048)&&h(Ee,"display",e[11]),(!w||l[0]&65536)&&O(so,e[16]),(!w||l[0]&4096)&&h(Te,"display",e[12]),(!w||l[0]&131072)&&O(ro,e[17]),(!w||l[0]&8192)&&h(Be,"display",e[13])},i(e){w||(gi(()=>{F||(F=Xi(B,qi,{},!0)),F.run(1)}),w=!0)},o(e){F||(F=Xi(B,qi,{},!1)),F.run(0),w=!1},d(e){t(k),e&&t(u),e&&t(M),e&&t(R),e&&t(D),e&&t(X),e&&t(B),e&&F&&F.end(),e&&t(C),e&&t(A),e&&t(S),e&&t(N),e&&t(U),e&&t(I),e&&t(n),e&&t(G),e&&t(j),e&&t(ce),e&&t(z),e&&t(L),e&&t(V),e&&t(Oe),e&&t(K),e&&t(Fe),e&&t(Q),e&&t(T),e&&t(ye),e&&t(ge),e&&t(he),e&&t($e),e&&t(de),e&&t(et),e&&t(g),e&&t(lt),e&&t(ot),e&&t(st),e&&t($),e&&t(it),e&&t(ee),e&&t(rt),e&&t(ft),e&&t(ut),e&&t(nt),e&&t(te),e&&t(pt),e&&t(le),e&&t(at),e&&t(mt),e&&t(bt),e&&t(vt),e&&t(oe),e&&t(ct),e&&t(se),e&&t(yt),e&&t(s),e&&t(d),e&&t(x),e&&t(H),e&&t(Jt),e&&t(Pe),e&&t(Vt),e&&t(Kt),e&&t(Qt),e&&t(gt),e&&t(Ce),e&&t($t),e&&t(Ae),e&&t(el),e&&t(tl),e&&t(ll),e&&t(ol),e&&t(ht),e&&t(sl),e&&t(dt),e&&t(il),e&&t(kt),e&&t(rl),e&&t(W),e&&t(ul),e&&t(nl),e&&t(pl),e&&t(al),e&&t(Se),e&&t(ml),e&&t(xe),e&&t(bl),e&&t(De),e&&t(vl),e&&t(Ue),e&&t(cl),e&&t(yl),e&&t(hl),e&&t(dl),e&&t(kl),e&&t(we),e&&t(wl),e&&t(_t),e&&t(_l),e&&t(He),e&&t(Tl),e&&t(ie),e&&t(Rl),e&&t(re),e&&t(Nl),e&&t(fe),e&&t(Fl),e&&t(ue),e&&t(Pl),e&&t(ne),e&&t(Al),e&&t(Sl),e&&t(xl),e&&t(Dl),e&&t(We),e&&t(Ul),e&&t(Ze),e&&t(Hl),e&&t(Ye),e&&t(Wl),e&&t(je),e&&t(Zl),e&&t(ze),e&&t(Yl),e&&t(pe),e&&t(zl),e&&t(ae),e&&t(Xl),e&&t(ql),e&&t(Gl),e&&t(Jl),e&&t(Le),e&&t(Vl),e&&t(Kl),e&&t(Ql),e&&t(gl),e&&t(Xe),e&&t($l),e&&t(_e),e&&t(to),e&&t(Ee),e&&t(oo),e&&t(Te),e&&t(io),e&&t(Be),e&&t(fo),e&&t(uo),e&&t(no),e&&t(po),e&&t(qe),e&&t(ao),e&&t(Ge),e&&t(mo),e&&t(Et),e&&t(bo),e&&t(Tt),e&&t(vo),e&&t(Bt),e&&t(co),e&&t(Rt),e&&t(yo),e&&t(Mt),e&&t(ho),e&&t(Nt),e&&t(ko),e&&t(Ot),e&&t(wo),e&&t(Ft),e&&t(_o),e&&t(It),e&&t(Eo),e&&t(Pt),e&&t(To),e&&t(Ct),e&&t(Bo),e&&t(At),e&&t(Ro),e&&t(St),e&&t(Mo),e&&t(xt),e&&t(No),e&&t(Dt),e&&t(Oo),e&&t(Fo),e&&t(Io),e&&t(Po),e&&t(Co),e&&t(Ao),e&&t(So),e&&t(xo),e&&t(Do),e&&t(Uo),e&&t(Ho),e&&t(Wo),Is=!1,$i(Ds)}}}var y="stop";function tr(i,k,u){var M=parseInt(i,10),R=parseInt(k,10);return u==="+"?M+R:u==="*"?M*R:u==="-"?M-R:u==="/"?M/R:u==="@"?" "+M+R:"fubar"}function lr(i){var k=i.pop()**3;return i.unshift(k),i}function or(i){return i.flatMap(k=>(k+1)**3)}function sr(i){return i.flatMap(k=>Math.round(k**(1/3)))}function Gi(i){return JSON.parse(JSON.stringify(i))}function E(i){return function(k){if(typeof k=="function")return E(k(i));if(k==="stop")return i}}function xs(i){var k=i.split("/");return k.length>1?k[0]/k[1]:k[0]}function ir(i,k){return i.filter(u=>k.includes(u))}function rr(i,k,u){let M;var C,A,S,N,R="none",D="none",me="none",X="none",B="none",be="none",ve="none",F="none",C,A,S,N,Z,U,I,Y,n,q;q=s=>{var d=[[Math.floor(Math.random()*6)+1,Math.floor(Math.random()*6)+1,Math.floor(Math.random()*12)+1,Math.floor(Math.random()*20)+1],[],["+"],[],[s],[],[0],[]];return u(0,n=E(d)),u(0,n=E(n(y))),j(n),n(L),n};var G="";function j(s){console.log("In updateRoll. m(s) is",s(y)),u(2,C=s(y)[0][0]),u(3,A=s(y)[0][1]),u(4,S=s(y)[0][2]),u(5,N=s(y)[0][3]),u(14,Z=s(y)[1][0]),u(15,U=s(y)[1][1]),u(16,I=s(y)[1][2]),u(17,Y=s(y)[1][3]),s(y)[2],s(y)[3],s(y)[4],u(6,R=u(7,D=u(8,me=u(9,X="inline")))),u(10,B=u(11,be=u(12,ve=u(13,F="none"))))}function Me(){u(6,R=u(7,D=u(8,me=u(9,X=u(10,B=u(11,be=u(12,ve=u(13,F="none")))))))),C!=null&&u(6,R="inline"),A!=null&&u(7,D="inline"),S!=null&&u(8,me="inline"),N!=null&&u(9,X="inline"),Z!=null&&u(10,B="inline"),U!=null&&u(11,be="inline"),I!=null&&u(12,ve="inline"),Y!=null&&u(13,F="inline")}n=E([[Math.floor(Math.random()*6)+1,Math.floor(Math.random()*6)+1,Math.floor(Math.random()*12)+1,Math.floor(Math.random()*20)+1],[],["+"],[],[0],[],[0],[]]);var J=function(){u(2,C=n(y)[0][0]),u(3,A=n(y)[0][1]),u(4,S=n(y)[0][2]),u(5,N=n(y)[0][3]),n(y)[2],n(y)[3],n(y)[4],u(14,Z=n(y)[1][0]),u(15,U=n(y)[1][1]),u(16,I=n(y)[1][2]),u(17,Y=n(y)[1][3])},Ne="",P=E([1,2,3,4]),ce,z;function Je(){var s=n(y);return console.log("<><><><><><><><> xx is",s),console.log(s[0]),console.log("xx[5].length is ",s[5].length),console.log("index is",s[6]),u(0,n=E(s)),n}function L(s){s[5].push(Gi([s[0],s[1],s[2],s[3],s[4],s[5],s[6],s[7]])),s[7].push(Gi([s[0],s[1],s[2],s[3],s[4],s[5],s[6],s[7]])),s[6][0]+=1;var d,x;if(s[1].length===2&&s[2].length===1&&(x=s[1],d=tr(s[1][0],s[1][1],s[2][0]),s[0].push(d),s[3].push(d),s[1]=[],u(0,n=E(s))),s[1].length===3&&s[0].push(s[1].pop()),d==20&&ir(x,s[3]).length>0){if(s[4][0]===4)u(19,Ne="You win! "),s[4][0]=0,q(0);else{var H=parseInt(s[4][0],10);H+=1,u(1,G="           Your score increased to "+H),q(H)}setTimeout(()=>u(1,G=u(19,Ne="")),3e3)}return u(2,C=n(y)[0][0]),u(3,A=n(y)[0][1]),u(4,S=n(y)[0][2]),u(5,N=n(y)[0][3]),n(y)[2],n(y)[3],n(y)[4],u(14,Z=n(y)[1][0]),u(15,U=n(y)[1][1]),u(16,I=n(y)[1][2]),u(17,Y=n(y)[1][3]),Me(),n(y)}var V=s=>{s[1].push(s[0][0]),s[0].shift(),u(0,n=E(s)),n(L)},Ve=s=>{s[1].push(s[0].splice(1,1)[0]),u(0,n=E(s)),u(0,n=n(L))},Oe=s=>{s[1].push(s[0].splice(2,1)[0]),u(0,n=E(s)),u(0,n=n(L))},K=s=>{s[1].push(s[0].splice(3,1)[0]),u(0,n=E(s)),u(0,n=n(L))};function Ke(s){s[2]="+",u(0,n=E(s))}function Fe(s){s[2]="*",u(0,n=E(s))}function Q(s){s[2]="/",u(0,n=E(s))}function Qe(s){s[2]="@",u(0,n=E(s))}var T=E(3.1415926535),ye=s=>s**3,Ut=s=>s*s,ge=s=>d=>d**s,he=s=>d=>1*d+1*s,Ht=s=>d=>d*s,$e=s=>d=>s;function de(){u(23,T=T(Ut))}function Wt(){u(23,T=T(ye))}var et=function(d){var x=xs(d.target.value);d.keyCode==13&&u(23,T=T(ge(x)))},g=function(d){d.keyCode==13&&u(23,T=T(he(d.target.value)))},Zt=function(d){d.keyCode==13&&u(23,T=T(Ht(xs(d.target.value))))},ke=function(d){d.keyCode==13&&u(23,T=T($e(xs(d.target.value))))},Ie=`fu = a => {  m2(fu) caused fu to operate on the closure's current value, a.
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
}`,tt=`function M (x) {
    return function (func) {
        if (typeof func === "function") {
            return M(func(x));
        }
        else if (func === "stop") return x;
    }
};`,lt=`var mon3 = M([1,2,3,4]);
function g(ar) {
    var x = (ar.pop())**3;
    ar.unshift(x);
  return ar;
};
function g2 (ar) {return (ar.flatMap(v => (v+1)**3))};
function g3 (ar) {return (ar.flatMap(v => Math.round(v**(1/3))))};`,ot=`runRoll = x => {
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
};`,st=`function clic0 () {
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
};`,$=`if (a[1].length === 3) {   
    a[0].push(a[1].pop());  // Returns a clicked third number.
  };`,Yt=`function sfunc () {
    b0 = b1 = b2 = b3 = b4 = b5 = b6 = b7 = "none";
    if (AA != (undefined && 0)) b0 = "inline";
    if (BB != (undefined && 0)) b1 = "inline";
    if (CC != (undefined && 0)) b2 = "inline";
    if (DD != (undefined && 0)) b3 = "inline";
    if (WW != (undefined && 0)) b4 = "inline";
    if (XX != (undefined && 0)) b5 = "inline";
    if (YY != (undefined && 0)) b6 = "inline";
    if (ZZ != (undefined && 0)) b7 = "inline";
}`,it=`var update = () => {
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
};`,ee=`function squareFu () {m4 = m4(square)};
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
};`,jt=`var mon = M(2);
mon(v=>v**4)(v=>v+5)(v=>v*2);
// The value of x can be obtained later
mon('stop');  // 42`;const rt=()=>u(20,P=P(lr)),ft=()=>u(20,P=P(or)),ut=()=>u(20,P=P(sr)),nt=()=>u(20,P=P(s=>[1,2,3,4])),te=()=>n(V),zt=()=>n(Ve),pt=()=>n(Oe),le=()=>n(K),at=()=>n(Ke),mt=()=>n(M),bt=()=>n(Fe),vt=()=>n(Q),oe=()=>n(Qe),Lt=()=>n(q(n(y)[4])),ct=()=>Je(),se=()=>n(ce),yt=()=>n(z);return i.$$.update=()=>{i.$$.dirty[0]&2&&u(1,G),i.$$.dirty[0]&2,i.$$.dirty[0]&1&&u(2,C=n(y)[0][0]),i.$$.dirty[0]&1&&u(3,A=n(y)[0][1]),i.$$.dirty[0]&1&&u(4,S=n(y)[0][2]),i.$$.dirty[0]&1&&u(5,N=n(y)[0][3]),i.$$.dirty[0]&1&&n(y)[2],i.$$.dirty[0]&1&&n(y)[3],i.$$.dirty[0]&1&&n(y)[4],i.$$.dirty[0]&1&&u(14,Z=n(y)[1][0]),i.$$.dirty[0]&1&&u(15,U=n(y)[1][1]),i.$$.dirty[0]&1&&u(16,I=n(y)[1][2]),i.$$.dirty[0]&1&&u(17,Y=n(y)[1][3]),i.$$.dirty[0]&1&&n(y)},u(21,ce=s=>{if(s[5].length>0){var d=s[5][s[5].length-1];d[7]=s[7],u(0,n=E(d)),J(),Me()}else console.log("In back. Can't compute")}),u(22,z=s=>{var d=s[6][0];if(d<s[7].length-1){var x=s[7][d+1];x[7]=s[7],u(0,n=E(x)),J(),Me()}else console.log("Going out of bounds. The end of b[7] has been reached")}),u(24,M=s=>{s[2]="-",u(0,n=E(s))}),[n,G,C,A,S,N,R,D,me,X,B,be,ve,F,Z,U,I,Y,q,Ne,P,ce,z,T,M,Je,V,Ve,Oe,K,Ke,Fe,Q,Qe,de,Wt,et,g,Zt,ke,Ie,tt,lt,ot,st,$,Yt,it,ee,jt,rt,ft,ut,nt,te,zt,pt,le,at,mt,bt,vt,oe,Lt,ct,se,yt]}class ur extends Ji{constructor(k){super();Vi(this,k,rr,er,Ki,{},null,[-1,-1,-1,-1])}}export{ur as default};
