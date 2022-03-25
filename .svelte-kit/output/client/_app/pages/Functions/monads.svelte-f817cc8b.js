import{S as oo,i as ro,s as fo,k as f,e as s,t as a,L as uo,d as t,m as u,c as o,a as y,h as b,f as w,b as Ft,g as i,G as m,M as h,j as N,N as no,O as io,P as po,Q as so}from"../../chunks/vendor-4e552e70.js";function mo(r){let _,n,M,d,se,W,B,oe,re,O,Y,H,D,I,Z,S,fe,q,A,z,p,C,R,Se,j,Et,Ae,ue,P,ce,X,Ue,ke,ne,_t,He,G,Tt,T,we=parseFloat(r[21](k)).toFixed(5).toString()+"",De,je,Le,We,J,ht,Ye,V,dt,Ze,qe,ze,Xe,Q,Bt,Ge,K,Je,Ve,Qe,Ke,x,Rt,xe,$,$e,ge,et,tt,c,v,F,L,Ot,Ct,Pt,It,Ee,ki,St,_e,At,Ut,Ht,Dt,lt,wi,jt,it,Ei,Lt,st,_i,Wt,U,Ti,Mt=r[20](k).join(", ")+"",Yt,hi,Zt,qt,zt,Xt,Te,di,Gt,he,Bi,Jt,de,Ri,Vt,Be,Mi,Qt,Kt,xt,$t,gt,pe,Fi,ot,Ni,Oi,el,rt,Ci,tl,Re,ll,il,Me,Pi,sl,ol,rl,fl,g,ul,nl,ee,pl,ml,te,al,bl,le,vl,yl,ie,Ii,cl,kl,wl,El,_l,Fe,Si,Tl,Ne,Ai,hl,Oe,Ui,dl,Ce,Hi,Bl,Pe,Di,Rl,Ml,Fl,Nl,Ie,ji,Ol,Cl,Pl,Il,me,Sl,Al,ae,Ul,Hl,be,Dl,jl,ve,Ll,Wl,ye,Yl,Zl,ql,zl,Xl,ft,Li,Gl,ut,Wi,Jl,nt,Yi,Vl,pt,Zi,Ql,mt,qi,Kl,at,zi,xl,bt,Xi,$l,vt,Gi,gl,yt,Ji,ei,ct,Vi,ti,kt,Qi,li,wt,Ki,ii,si,oi,ri,fi,ui,ni,pi,mi,ai,bi,vi,E,xi,is;return{c(){_=f(),n=s("br"),M=f(),d=s("div"),se=a("**************************************************************************"),W=f(),B=s("div"),oe=s("br"),re=a(`
The Recursive Closure "m2" Controls the Action`),Y=f(),H=s("br"),D=f(),I=s("p"),Z=a(`m2 is a recursive function spawned by the function M. Together,they form a closure as follows:
`),S=s("pre"),fe=a(r[38]),q=f(),A=s("p"),z=a(`I call functions returned by M "monads", much to the consternation of self-styled "functional programmers" who scoff at the idea that JavaScript could possibly have monads such as those defined in the Haskell programming language. Neither my monads nor the Haskell monads are Category Theory monads. The Haskell part actually surprises some programmers. Google "hask is a category" if you don't believe me.`),p=f(),C=s("p"),R=a('A monads created by, say, "monad = M(x)" creates an isolated pipeline allowing nested functions to operate on "x" insulated from any outer scope. For example, you could run:'),Se=f(),j=s("pre"),Et=a(r[46]),Ae=f(),ue=s("p"),P=a("In the solitaire version of the game of score below, x will be an array of arrays in the form x =  [ [], [], [], [], [n] ] where x[0] contains four integers simulating a throw of two six-sided, one twelve-sided, and one twenty-sided dice. x[1] and x[3] contain the number selected by the player, x[2] is the selected operator, and x[4] keeps track of the number of successes until the player wins by reaching x[4] = 5. But first, let's consider some simpler examples."),ce=f(),X=s("p"),Ue=a("These are the first interactive demonstration's event handlers:"),ke=f(),ne=s("pre"),_t=a(r[45]),He=f(),G=s("p"),Tt=a("m4(s) is "),T=s("span"),De=a(we),je=f(),Le=s("br"),We=f(),J=s("button"),ht=a("m4(cube)"),Ye=f(),V=s("button"),dt=a("m4(square)"),Ze=f(),qe=s("br"),ze=s("br"),Xe=f(),Q=s("span"),Bt=a("To call m4(pow(n)), enter n in the box ->"),Ge=f(),K=s("input"),Je=f(),Ve=s("br"),Qe=s("br"),Ke=f(),x=s("span"),Rt=a("To call m4(add(n)), enter n in the box ->"),xe=f(),$=s("input"),$e=f(),ge=s("br"),et=s("br"),tt=f(),c=s("span"),v=a("To call m4(mult(n)), enter n in the box ->"),F=f(),L=s("input"),Ot=f(),Ct=s("br"),Pt=s("br"),It=f(),Ee=s("span"),ki=a("To call m4(reset(n)), enter n in the box ->"),St=f(),_e=s("input"),At=f(),Ut=s("br"),Ht=s("br"),Dt=f(),lt=s("p"),wi=a("Next, x will be an array manipulated by functions designed for that purpose. Here are the functions responsible for the interactive demonstration below:"),jt=f(),it=s("pre"),Ei=a(r[39]),Lt=f(),st=s("p"),_i=a(`If you click mon3 = mon3(g) four times and the click mon3 = mon3(g3), you will see that mon3(s) returns its original value, [1,2,3,4]. By the way, the "mon3 =" part of "mon3 = mon3(g)" is included solely to trigger updating of browser displays. Svelte doesn't have a virtual DOM, and merely changing objects isn't enough to trigger DOM updates. For example, arr = [1,2,3] doesn't change in the DOM when arr.push(888) is called. arr = arr afterwards or arr = arr.push(888) initially both do the trick.`),Wt=f(),U=s("div"),Ti=a("["),Yt=a(Mt),hi=a("]"),Zt=f(),qt=s("br"),zt=s("br"),Xt=f(),Te=s("button"),di=a("mon3 = mon3(g)"),Gt=f(),he=s("button"),Bi=a("mon3 = mon3(g2)"),Jt=f(),de=s("button"),Ri=a("mon3 = mon3(g3)"),Vt=f(),Be=s("button"),Mi=a("mon3 = mon3(x => [1,2,3,4])"),Qt=f(),Kt=s("br"),xt=s("br"),$t=s("br"),gt=f(),pe=s("p"),Fi=a("Now for the game of score, a game involving four dice and two or three-stage arithmetic computations with the goal of arriving at the number 20. My son Alex taught it to me a decade ago, when he was in middle school. I was also learning the Haskell programming language, so I developed a multiplayer online version with groups of interacting player, a chat box, and a shared-by-the-group todo list controlled by a Haskell WebSockets server backend. The backend could compute all possible solutions, if any existed, to any throw of the dice. It also identified all of the impossible-to-solve rolls. Users could change the default number of dice sides from 6,6,12,and 20 and the goal from the default value of 20. A version of it is online at "),ot=s("a"),Ni=a("https://score.schalk.net"),Oi=a("."),el=f(),rt=s("p"),Ci=a("This demonstration doesn't work in conjunction with a remote server, nor does it feature any Haskell code. It's just a little solitaire game providing an opportunity to consider the interesting possibilities of recursive closures. Instead of being argunents of function or global object methods, these monads are functions that consume functions. When the functions consumed by monads have no side effects outside of the monad's closure -- which should always be the case -- maintenance and bug tracking become more manageable."),tl=f(),Re=s("h3"),ll=a(r[0]),il=f(),Me=s("h3"),Pi=a("Score: "),sl=a(r[18]),ol=f(),rl=s("br"),fl=f(),g=s("button"),ul=a(r[1]),nl=f(),ee=s("button"),pl=a(r[2]),ml=f(),te=s("button"),al=a(r[3]),bl=f(),le=s("button"),vl=a(r[4]),yl=f(),ie=s("span"),Ii=a("The operator is "),cl=a(r[5]),kl=f(),wl=s("br"),El=s("br"),_l=f(),Fe=s("button"),Si=a("add"),Tl=f(),Ne=s("button"),Ai=a("subtract"),hl=f(),Oe=s("button"),Ui=a("multiply"),dl=f(),Ce=s("button"),Hi=a("divide"),Bl=f(),Pe=s("button"),Di=a("concat"),Rl=f(),Ml=s("br"),Fl=s("br"),Nl=f(),Ie=s("button"),ji=a("ROLL"),Ol=f(),Cl=s("br"),Pl=s("br"),Il=f(),me=s("button"),Sl=a(r[14]),Al=f(),ae=s("button"),Ul=a(r[15]),Hl=f(),be=s("button"),Dl=a(r[16]),jl=f(),ve=s("button"),Ll=a(r[17]),Wl=f(),ye=s("button"),Yl=a(r[5]),Zl=f(),ql=s("br"),zl=s("br"),Xl=f(),ft=s("p"),Li=a('Clicking "ROLL" calls runRoll() which, in turn, calls updateRoll() to re-set HTML variables.'),Gl=f(),ut=s("pre"),Wi=a(r[40]),Jl=f(),nt=s("p"),Yi=a('The "x = [ [], [], [], [], [0] ]" format will be maintained throught game play. x[0] simulates the dice roll; x[1] recieves integers that are clicked; x[2] holds the operator; and x[4] contains numbers that are computed. x[4] makes sure at least one computed number is involved in arriving at 20. Here are the first few functions called when a number is clicked:'),Vl=f(),pt=s("pre"),Zi=a(r[41]),Ql=f(),mt=s("p"),qi=a(`The first line of fu() is the calculation result that is generated whenever there are two items in (s)[1] and an operator in m2(s)[3]. The intersection is important in fu()'s bottom test. If "intersect", the intersection of m2(s)[1] and m2(s)[3], is empty intersect[0] returns false and the last test in fu fails, even though 20 was produced on the second computation.`),Kl=f(),at=s("p"),zi=a("If no operator has been selected, it's possible to click a third number. The program doesn't complain, it just puts the number back for you with:"),xl=f(),bt=s("pre"),Xi=a(r[42]),$l=f(),vt=s("p"),Gi=a("If you roll the dice and keep clicking on the leftmost number, you'll see the numbers shift back and forth on every try. The first element of m2(s)[0] keeps getting pulled out of the first position and pushed back on the right."),gl=f(),yt=s("p"),Ji=a(`sfunc() does some more DOM housekeeping. The buttons with dice number come and go as their CSS display strings are changed back and forth between "none" and "inline". fu() calls sfunc(). Here's how it is defined:`),ei=f(),ct=s("pre"),Vi=a(r[43]),ti=f(),kt=s("p"),Qi=a("After each number is selected and Before calling sFunc(), fu() first updates the HTML variables as follows:"),li=f(),wt=s("pre"),Ki=a(r[44]),ii=f(),si=s("br"),oi=s("br"),ri=s("br"),fi=s("br"),ui=s("br"),ni=s("br"),pi=f(),mi=s("br"),ai=s("br"),bi=s("br"),vi=s("br"),this.h()},l(e){uo('[data-svelte="svelte-3na27m"]',document.head).forEach(t),_=u(e),n=o(e,"BR",{}),M=u(e),d=o(e,"DIV",{});var ss=y(d);se=b(ss,"**************************************************************************"),ss.forEach(t),W=u(e),B=o(e,"DIV",{style:!0});var $i=y(B);oe=o($i,"BR",{}),re=b($i,`
The Recursive Closure "m2" Controls the Action`),$i.forEach(t),Y=u(e),H=o(e,"BR",{}),D=u(e),I=o(e,"P",{});var os=y(I);Z=b(os,`m2 is a recursive function spawned by the function M. Together,they form a closure as follows:
`),os.forEach(t),S=o(e,"PRE",{});var rs=y(S);fe=b(rs,r[38]),rs.forEach(t),q=u(e),A=o(e,"P",{});var fs=y(A);z=b(fs,`I call functions returned by M "monads", much to the consternation of self-styled "functional programmers" who scoff at the idea that JavaScript could possibly have monads such as those defined in the Haskell programming language. Neither my monads nor the Haskell monads are Category Theory monads. The Haskell part actually surprises some programmers. Google "hask is a category" if you don't believe me.`),fs.forEach(t),p=u(e),C=o(e,"P",{});var us=y(C);R=b(us,'A monads created by, say, "monad = M(x)" creates an isolated pipeline allowing nested functions to operate on "x" insulated from any outer scope. For example, you could run:'),us.forEach(t),Se=u(e),j=o(e,"PRE",{});var ns=y(j);Et=b(ns,r[46]),ns.forEach(t),Ae=u(e),ue=o(e,"P",{});var ps=y(ue);P=b(ps,"In the solitaire version of the game of score below, x will be an array of arrays in the form x =  [ [], [], [], [], [n] ] where x[0] contains four integers simulating a throw of two six-sided, one twelve-sided, and one twenty-sided dice. x[1] and x[3] contain the number selected by the player, x[2] is the selected operator, and x[4] keeps track of the number of successes until the player wins by reaching x[4] = 5. But first, let's consider some simpler examples."),ps.forEach(t),ce=u(e),X=o(e,"P",{});var ms=y(X);Ue=b(ms,"These are the first interactive demonstration's event handlers:"),ms.forEach(t),ke=u(e),ne=o(e,"PRE",{});var as=y(ne);_t=b(as,r[45]),as.forEach(t),He=u(e),G=o(e,"P",{});var gi=y(G);Tt=b(gi,"m4(s) is "),T=o(gi,"SPAN",{style:!0});var bs=y(T);De=b(bs,we),bs.forEach(t),gi.forEach(t),je=u(e),Le=o(e,"BR",{}),We=u(e),J=o(e,"BUTTON",{});var vs=y(J);ht=b(vs,"m4(cube)"),vs.forEach(t),Ye=u(e),V=o(e,"BUTTON",{});var ys=y(V);dt=b(ys,"m4(square)"),ys.forEach(t),Ze=u(e),qe=o(e,"BR",{}),ze=o(e,"BR",{}),Xe=u(e),Q=o(e,"SPAN",{style:!0});var cs=y(Q);Bt=b(cs,"To call m4(pow(n)), enter n in the box ->"),cs.forEach(t),Ge=u(e),K=o(e,"INPUT",{type:!0,style:!0}),Je=u(e),Ve=o(e,"BR",{}),Qe=o(e,"BR",{}),Ke=u(e),x=o(e,"SPAN",{style:!0});var ks=y(x);Rt=b(ks,"To call m4(add(n)), enter n in the box ->"),ks.forEach(t),xe=u(e),$=o(e,"INPUT",{type:!0,style:!0}),$e=u(e),ge=o(e,"BR",{}),et=o(e,"BR",{}),tt=u(e),c=o(e,"SPAN",{style:!0});var ws=y(c);v=b(ws,"To call m4(mult(n)), enter n in the box ->"),ws.forEach(t),F=u(e),L=o(e,"INPUT",{type:!0,style:!0}),Ot=u(e),Ct=o(e,"BR",{}),Pt=o(e,"BR",{}),It=u(e),Ee=o(e,"SPAN",{style:!0});var Es=y(Ee);ki=b(Es,"To call m4(reset(n)), enter n in the box ->"),Es.forEach(t),St=u(e),_e=o(e,"INPUT",{type:!0,style:!0}),At=u(e),Ut=o(e,"BR",{}),Ht=o(e,"BR",{}),Dt=u(e),lt=o(e,"P",{});var _s=y(lt);wi=b(_s,"Next, x will be an array manipulated by functions designed for that purpose. Here are the functions responsible for the interactive demonstration below:"),_s.forEach(t),jt=u(e),it=o(e,"PRE",{});var Ts=y(it);Ei=b(Ts,r[39]),Ts.forEach(t),Lt=u(e),st=o(e,"P",{});var hs=y(st);_i=b(hs,`If you click mon3 = mon3(g) four times and the click mon3 = mon3(g3), you will see that mon3(s) returns its original value, [1,2,3,4]. By the way, the "mon3 =" part of "mon3 = mon3(g)" is included solely to trigger updating of browser displays. Svelte doesn't have a virtual DOM, and merely changing objects isn't enough to trigger DOM updates. For example, arr = [1,2,3] doesn't change in the DOM when arr.push(888) is called. arr = arr afterwards or arr = arr.push(888) initially both do the trick.`),hs.forEach(t),Wt=u(e),U=o(e,"DIV",{style:!0});var yi=y(U);Ti=b(yi,"["),Yt=b(yi,Mt),hi=b(yi,"]"),yi.forEach(t),Zt=u(e),qt=o(e,"BR",{}),zt=o(e,"BR",{}),Xt=u(e),Te=o(e,"BUTTON",{});var ds=y(Te);di=b(ds,"mon3 = mon3(g)"),ds.forEach(t),Gt=u(e),he=o(e,"BUTTON",{});var Bs=y(he);Bi=b(Bs,"mon3 = mon3(g2)"),Bs.forEach(t),Jt=u(e),de=o(e,"BUTTON",{});var Rs=y(de);Ri=b(Rs,"mon3 = mon3(g3)"),Rs.forEach(t),Vt=u(e),Be=o(e,"BUTTON",{});var Ms=y(Be);Mi=b(Ms,"mon3 = mon3(x => [1,2,3,4])"),Ms.forEach(t),Qt=u(e),Kt=o(e,"BR",{}),xt=o(e,"BR",{}),$t=o(e,"BR",{}),gt=u(e),pe=o(e,"P",{});var ci=y(pe);Fi=b(ci,"Now for the game of score, a game involving four dice and two or three-stage arithmetic computations with the goal of arriving at the number 20. My son Alex taught it to me a decade ago, when he was in middle school. I was also learning the Haskell programming language, so I developed a multiplayer online version with groups of interacting player, a chat box, and a shared-by-the-group todo list controlled by a Haskell WebSockets server backend. The backend could compute all possible solutions, if any existed, to any throw of the dice. It also identified all of the impossible-to-solve rolls. Users could change the default number of dice sides from 6,6,12,and 20 and the goal from the default value of 20. A version of it is online at "),ot=o(ci,"A",{href:!0});var Fs=y(ot);Ni=b(Fs,"https://score.schalk.net"),Fs.forEach(t),Oi=b(ci,"."),ci.forEach(t),el=u(e),rt=o(e,"P",{});var Ns=y(rt);Ci=b(Ns,"This demonstration doesn't work in conjunction with a remote server, nor does it feature any Haskell code. It's just a little solitaire game providing an opportunity to consider the interesting possibilities of recursive closures. Instead of being argunents of function or global object methods, these monads are functions that consume functions. When the functions consumed by monads have no side effects outside of the monad's closure -- which should always be the case -- maintenance and bug tracking become more manageable."),Ns.forEach(t),tl=u(e),Re=o(e,"H3",{style:!0});var Os=y(Re);ll=b(Os,r[0]),Os.forEach(t),il=u(e),Me=o(e,"H3",{});var es=y(Me);Pi=b(es,"Score: "),sl=b(es,r[18]),es.forEach(t),ol=u(e),rl=o(e,"BR",{}),fl=u(e),g=o(e,"BUTTON",{style:!0});var Cs=y(g);ul=b(Cs,r[1]),Cs.forEach(t),nl=u(e),ee=o(e,"BUTTON",{style:!0});var Ps=y(ee);pl=b(Ps,r[2]),Ps.forEach(t),ml=u(e),te=o(e,"BUTTON",{style:!0});var Is=y(te);al=b(Is,r[3]),Is.forEach(t),bl=u(e),le=o(e,"BUTTON",{style:!0});var Ss=y(le);vl=b(Ss,r[4]),Ss.forEach(t),yl=u(e),ie=o(e,"SPAN",{style:!0});var ts=y(ie);Ii=b(ts,"The operator is "),cl=b(ts,r[5]),ts.forEach(t),kl=u(e),wl=o(e,"BR",{}),El=o(e,"BR",{}),_l=u(e),Fe=o(e,"BUTTON",{});var As=y(Fe);Si=b(As,"add"),As.forEach(t),Tl=u(e),Ne=o(e,"BUTTON",{});var Us=y(Ne);Ai=b(Us,"subtract"),Us.forEach(t),hl=u(e),Oe=o(e,"BUTTON",{});var Hs=y(Oe);Ui=b(Hs,"multiply"),Hs.forEach(t),dl=u(e),Ce=o(e,"BUTTON",{});var Ds=y(Ce);Hi=b(Ds,"divide"),Ds.forEach(t),Bl=u(e),Pe=o(e,"BUTTON",{});var js=y(Pe);Di=b(js,"concat"),js.forEach(t),Rl=u(e),Ml=o(e,"BR",{}),Fl=o(e,"BR",{}),Nl=u(e),Ie=o(e,"BUTTON",{});var Ls=y(Ie);ji=b(Ls,"ROLL"),Ls.forEach(t),Ol=u(e),Cl=o(e,"BR",{}),Pl=o(e,"BR",{}),Il=u(e),me=o(e,"BUTTON",{style:!0});var Ws=y(me);Sl=b(Ws,r[14]),Ws.forEach(t),Al=u(e),ae=o(e,"BUTTON",{style:!0});var Ys=y(ae);Ul=b(Ys,r[15]),Ys.forEach(t),Hl=u(e),be=o(e,"BUTTON",{style:!0});var Zs=y(be);Dl=b(Zs,r[16]),Zs.forEach(t),jl=u(e),ve=o(e,"BUTTON",{style:!0});var qs=y(ve);Ll=b(qs,r[17]),qs.forEach(t),Wl=u(e),ye=o(e,"BUTTON",{style:!0});var zs=y(ye);Yl=b(zs,r[5]),zs.forEach(t),Zl=u(e),ql=o(e,"BR",{}),zl=o(e,"BR",{}),Xl=u(e),ft=o(e,"P",{});var Xs=y(ft);Li=b(Xs,'Clicking "ROLL" calls runRoll() which, in turn, calls updateRoll() to re-set HTML variables.'),Xs.forEach(t),Gl=u(e),ut=o(e,"PRE",{});var Gs=y(ut);Wi=b(Gs,r[40]),Gs.forEach(t),Jl=u(e),nt=o(e,"P",{});var Js=y(nt);Yi=b(Js,'The "x = [ [], [], [], [], [0] ]" format will be maintained throught game play. x[0] simulates the dice roll; x[1] recieves integers that are clicked; x[2] holds the operator; and x[4] contains numbers that are computed. x[4] makes sure at least one computed number is involved in arriving at 20. Here are the first few functions called when a number is clicked:'),Js.forEach(t),Vl=u(e),pt=o(e,"PRE",{});var Vs=y(pt);Zi=b(Vs,r[41]),Vs.forEach(t),Ql=u(e),mt=o(e,"P",{});var Qs=y(mt);qi=b(Qs,`The first line of fu() is the calculation result that is generated whenever there are two items in (s)[1] and an operator in m2(s)[3]. The intersection is important in fu()'s bottom test. If "intersect", the intersection of m2(s)[1] and m2(s)[3], is empty intersect[0] returns false and the last test in fu fails, even though 20 was produced on the second computation.`),Qs.forEach(t),Kl=u(e),at=o(e,"P",{});var Ks=y(at);zi=b(Ks,"If no operator has been selected, it's possible to click a third number. The program doesn't complain, it just puts the number back for you with:"),Ks.forEach(t),xl=u(e),bt=o(e,"PRE",{});var xs=y(bt);Xi=b(xs,r[42]),xs.forEach(t),$l=u(e),vt=o(e,"P",{});var $s=y(vt);Gi=b($s,"If you roll the dice and keep clicking on the leftmost number, you'll see the numbers shift back and forth on every try. The first element of m2(s)[0] keeps getting pulled out of the first position and pushed back on the right."),$s.forEach(t),gl=u(e),yt=o(e,"P",{});var gs=y(yt);Ji=b(gs,`sfunc() does some more DOM housekeeping. The buttons with dice number come and go as their CSS display strings are changed back and forth between "none" and "inline". fu() calls sfunc(). Here's how it is defined:`),gs.forEach(t),ei=u(e),ct=o(e,"PRE",{});var eo=y(ct);Vi=b(eo,r[43]),eo.forEach(t),ti=u(e),kt=o(e,"P",{});var to=y(kt);Qi=b(to,"After each number is selected and Before calling sFunc(), fu() first updates the HTML variables as follows:"),to.forEach(t),li=u(e),wt=o(e,"PRE",{});var lo=y(wt);Ki=b(lo,r[44]),lo.forEach(t),ii=u(e),si=o(e,"BR",{}),oi=o(e,"BR",{}),ri=o(e,"BR",{}),fi=o(e,"BR",{}),ui=o(e,"BR",{}),ni=o(e,"BR",{}),pi=u(e),mi=o(e,"BR",{}),ai=o(e,"BR",{}),bi=o(e,"BR",{}),vi=o(e,"BR",{}),this.h()},h(){document.title="Recursive Closures ",w(B,"font-family","Times New Roman"),w(B,"text-align","center"),w(B,"font-size","32px"),w(T,"font-size","54px"),w(Q,"font-size","24px"),Ft(K,"type","text"),w(K,"width","65px"),w(x,"font-size","24px"),Ft($,"type","number"),w($,"width","65px"),w(c,"font-size","24px"),Ft(L,"type","text"),w(L,"width","65px"),w(Ee,"font-size","24px"),Ft(_e,"type","number"),w(_e,"width","65px"),w(U,"margin-left","10%"),w(U,"font-size","44px"),w(U,"color","#ddaadd"),Ft(ot,"href","https://score.schalk.net"),w(Re,"color","#ffccff"),w(g,"display",r[6]),w(ee,"display",r[7]),w(te,"display",r[8]),w(le,"display",r[9]),w(ie,"margin-left","8%"),w(ie,"font-size","22px"),w(me,"display",r[10]),w(ae,"display",r[11]),w(be,"display",r[12]),w(ve,"display",r[13]),w(ye,"display",r[13])},m(e,l){i(e,_,l),i(e,n,l),i(e,M,l),i(e,d,l),m(d,se),i(e,W,l),i(e,B,l),m(B,oe),m(B,re),i(e,Y,l),i(e,H,l),i(e,D,l),i(e,I,l),m(I,Z),i(e,S,l),m(S,fe),i(e,q,l),i(e,A,l),m(A,z),i(e,p,l),i(e,C,l),m(C,R),i(e,Se,l),i(e,j,l),m(j,Et),i(e,Ae,l),i(e,ue,l),m(ue,P),i(e,ce,l),i(e,X,l),m(X,Ue),i(e,ke,l),i(e,ne,l),m(ne,_t),i(e,He,l),i(e,G,l),m(G,Tt),m(G,T),m(T,De),i(e,je,l),i(e,Le,l),i(e,We,l),i(e,J,l),m(J,ht),i(e,Ye,l),i(e,V,l),m(V,dt),i(e,Ze,l),i(e,qe,l),i(e,ze,l),i(e,Xe,l),i(e,Q,l),m(Q,Bt),i(e,Ge,l),i(e,K,l),i(e,Je,l),i(e,Ve,l),i(e,Qe,l),i(e,Ke,l),i(e,x,l),m(x,Rt),i(e,xe,l),i(e,$,l),i(e,$e,l),i(e,ge,l),i(e,et,l),i(e,tt,l),i(e,c,l),m(c,v),i(e,F,l),i(e,L,l),i(e,Ot,l),i(e,Ct,l),i(e,Pt,l),i(e,It,l),i(e,Ee,l),m(Ee,ki),i(e,St,l),i(e,_e,l),i(e,At,l),i(e,Ut,l),i(e,Ht,l),i(e,Dt,l),i(e,lt,l),m(lt,wi),i(e,jt,l),i(e,it,l),m(it,Ei),i(e,Lt,l),i(e,st,l),m(st,_i),i(e,Wt,l),i(e,U,l),m(U,Ti),m(U,Yt),m(U,hi),i(e,Zt,l),i(e,qt,l),i(e,zt,l),i(e,Xt,l),i(e,Te,l),m(Te,di),i(e,Gt,l),i(e,he,l),m(he,Bi),i(e,Jt,l),i(e,de,l),m(de,Ri),i(e,Vt,l),i(e,Be,l),m(Be,Mi),i(e,Qt,l),i(e,Kt,l),i(e,xt,l),i(e,$t,l),i(e,gt,l),i(e,pe,l),m(pe,Fi),m(pe,ot),m(ot,Ni),m(pe,Oi),i(e,el,l),i(e,rt,l),m(rt,Ci),i(e,tl,l),i(e,Re,l),m(Re,ll),i(e,il,l),i(e,Me,l),m(Me,Pi),m(Me,sl),i(e,ol,l),i(e,rl,l),i(e,fl,l),i(e,g,l),m(g,ul),i(e,nl,l),i(e,ee,l),m(ee,pl),i(e,ml,l),i(e,te,l),m(te,al),i(e,bl,l),i(e,le,l),m(le,vl),i(e,yl,l),i(e,ie,l),m(ie,Ii),m(ie,cl),i(e,kl,l),i(e,wl,l),i(e,El,l),i(e,_l,l),i(e,Fe,l),m(Fe,Si),i(e,Tl,l),i(e,Ne,l),m(Ne,Ai),i(e,hl,l),i(e,Oe,l),m(Oe,Ui),i(e,dl,l),i(e,Ce,l),m(Ce,Hi),i(e,Bl,l),i(e,Pe,l),m(Pe,Di),i(e,Rl,l),i(e,Ml,l),i(e,Fl,l),i(e,Nl,l),i(e,Ie,l),m(Ie,ji),i(e,Ol,l),i(e,Cl,l),i(e,Pl,l),i(e,Il,l),i(e,me,l),m(me,Sl),i(e,Al,l),i(e,ae,l),m(ae,Ul),i(e,Hl,l),i(e,be,l),m(be,Dl),i(e,jl,l),i(e,ve,l),m(ve,Ll),i(e,Wl,l),i(e,ye,l),m(ye,Yl),i(e,Zl,l),i(e,ql,l),i(e,zl,l),i(e,Xl,l),i(e,ft,l),m(ft,Li),i(e,Gl,l),i(e,ut,l),m(ut,Wi),i(e,Jl,l),i(e,nt,l),m(nt,Yi),i(e,Vl,l),i(e,pt,l),m(pt,Zi),i(e,Ql,l),i(e,mt,l),m(mt,qi),i(e,Kl,l),i(e,at,l),m(at,zi),i(e,xl,l),i(e,bt,l),m(bt,Xi),i(e,$l,l),i(e,vt,l),m(vt,Gi),i(e,gl,l),i(e,yt,l),m(yt,Ji),i(e,ei,l),i(e,ct,l),m(ct,Vi),i(e,ti,l),i(e,kt,l),m(kt,Qi),i(e,li,l),i(e,wt,l),m(wt,Ki),i(e,ii,l),i(e,si,l),i(e,oi,l),i(e,ri,l),i(e,fi,l),i(e,ui,l),i(e,ni,l),i(e,pi,l),i(e,mi,l),i(e,ai,l),i(e,bi,l),i(e,vi,l),E=!0,xi||(is=[h(J,"click",r[33]),h(V,"click",r[32]),h(K,"keydown",r[34]),h($,"keydown",r[35]),h(L,"keydown",r[36]),h(_e,"keydown",r[37]),h(Te,"click",r[47]),h(he,"click",r[48]),h(de,"click",r[49]),h(Be,"click",r[50]),h(g,"click",r[51]),h(ee,"click",r[52]),h(te,"click",r[53]),h(le,"click",r[54]),h(Fe,"click",r[27]),h(Ne,"click",r[28]),h(Oe,"click",r[29]),h(Ce,"click",r[30]),h(Pe,"click",r[31]),h(Ie,"click",r[55])],xi=!0)},p(e,l){(!E||l[0]&2097152)&&we!==(we=parseFloat(e[21](k)).toFixed(5).toString()+"")&&N(De,we),(!E||l[0]&1048576)&&Mt!==(Mt=e[20](k).join(", ")+"")&&N(Yt,Mt),(!E||l[0]&1)&&N(ll,e[0]),(!E||l[0]&262144)&&N(sl,e[18]),(!E||l[0]&2)&&N(ul,e[1]),(!E||l[0]&64)&&w(g,"display",e[6]),(!E||l[0]&4)&&N(pl,e[2]),(!E||l[0]&128)&&w(ee,"display",e[7]),(!E||l[0]&8)&&N(al,e[3]),(!E||l[0]&256)&&w(te,"display",e[8]),(!E||l[0]&16)&&N(vl,e[4]),(!E||l[0]&512)&&w(le,"display",e[9]),(!E||l[0]&32)&&N(cl,e[5]),(!E||l[0]&16384)&&N(Sl,e[14]),(!E||l[0]&1024)&&w(me,"display",e[10]),(!E||l[0]&32768)&&N(Ul,e[15]),(!E||l[0]&2048)&&w(ae,"display",e[11]),(!E||l[0]&65536)&&N(Dl,e[16]),(!E||l[0]&4096)&&w(be,"display",e[12]),(!E||l[0]&131072)&&N(Ll,e[17]),(!E||l[0]&8192)&&w(ve,"display",e[13]),(!E||l[0]&32)&&N(Yl,e[5]),(!E||l[0]&8192)&&w(ye,"display",e[13])},i(e){E||(no(()=>{O||(O=io(B,so,{},!0)),O.run(1)}),E=!0)},o(e){O||(O=io(B,so,{},!1)),O.run(0),E=!1},d(e){e&&t(_),e&&t(n),e&&t(M),e&&t(d),e&&t(W),e&&t(B),e&&O&&O.end(),e&&t(Y),e&&t(H),e&&t(D),e&&t(I),e&&t(S),e&&t(q),e&&t(A),e&&t(p),e&&t(C),e&&t(Se),e&&t(j),e&&t(Ae),e&&t(ue),e&&t(ce),e&&t(X),e&&t(ke),e&&t(ne),e&&t(He),e&&t(G),e&&t(je),e&&t(Le),e&&t(We),e&&t(J),e&&t(Ye),e&&t(V),e&&t(Ze),e&&t(qe),e&&t(ze),e&&t(Xe),e&&t(Q),e&&t(Ge),e&&t(K),e&&t(Je),e&&t(Ve),e&&t(Qe),e&&t(Ke),e&&t(x),e&&t(xe),e&&t($),e&&t($e),e&&t(ge),e&&t(et),e&&t(tt),e&&t(c),e&&t(F),e&&t(L),e&&t(Ot),e&&t(Ct),e&&t(Pt),e&&t(It),e&&t(Ee),e&&t(St),e&&t(_e),e&&t(At),e&&t(Ut),e&&t(Ht),e&&t(Dt),e&&t(lt),e&&t(jt),e&&t(it),e&&t(Lt),e&&t(st),e&&t(Wt),e&&t(U),e&&t(Zt),e&&t(qt),e&&t(zt),e&&t(Xt),e&&t(Te),e&&t(Gt),e&&t(he),e&&t(Jt),e&&t(de),e&&t(Vt),e&&t(Be),e&&t(Qt),e&&t(Kt),e&&t(xt),e&&t($t),e&&t(gt),e&&t(pe),e&&t(el),e&&t(rt),e&&t(tl),e&&t(Re),e&&t(il),e&&t(Me),e&&t(ol),e&&t(rl),e&&t(fl),e&&t(g),e&&t(nl),e&&t(ee),e&&t(ml),e&&t(te),e&&t(bl),e&&t(le),e&&t(yl),e&&t(ie),e&&t(kl),e&&t(wl),e&&t(El),e&&t(_l),e&&t(Fe),e&&t(Tl),e&&t(Ne),e&&t(hl),e&&t(Oe),e&&t(dl),e&&t(Ce),e&&t(Bl),e&&t(Pe),e&&t(Rl),e&&t(Ml),e&&t(Fl),e&&t(Nl),e&&t(Ie),e&&t(Ol),e&&t(Cl),e&&t(Pl),e&&t(Il),e&&t(me),e&&t(Al),e&&t(ae),e&&t(Hl),e&&t(be),e&&t(jl),e&&t(ve),e&&t(Wl),e&&t(ye),e&&t(Zl),e&&t(ql),e&&t(zl),e&&t(Xl),e&&t(ft),e&&t(Gl),e&&t(ut),e&&t(Jl),e&&t(nt),e&&t(Vl),e&&t(pt),e&&t(Ql),e&&t(mt),e&&t(Kl),e&&t(at),e&&t(xl),e&&t(bt),e&&t($l),e&&t(vt),e&&t(gl),e&&t(yt),e&&t(ei),e&&t(ct),e&&t(ti),e&&t(kt),e&&t(li),e&&t(wt),e&&t(ii),e&&t(si),e&&t(oi),e&&t(ri),e&&t(fi),e&&t(ui),e&&t(ni),e&&t(pi),e&&t(mi),e&&t(ai),e&&t(bi),e&&t(vi),xi=!1,po(is)}}}var k="stop";function ao(r,_,n){var M=parseInt(r,10),d=parseInt(_,10);return n==="+"?M+d:n==="*"?M*d:n==="-"?M-d:n==="/"?M/d:n==="concat"?parseInt(""+M+d,10):"fubar"}function bo(r){var _=r.pop()**3;return r.unshift(_),r}function vo(r){return r.flatMap(_=>(_+1)**3)}function yo(r){return r.flatMap(_=>Math.round(_**(1/3)))}function Nt(r){return function _(n){if(typeof n=="function")return r=n(r),_;if(n==="stop")return r}}function ls(r){var _=r.split("/");return console.log(_),_.length>1?_[0]/_[1]:_[0]}function co(r,_){return r.filter(n=>_.includes(n))}function ko(r,_,n){var H,D,I,Z,M,d="none",se="none",W="none",B="none",oe="none",re="none",O="none",Y="none",H,D,I,Z,S,fe,q,A,z=[0],p,C="",R,Se=[[0,0,0,0],[],[],[],[0]];R=c=>{var v,F=parseInt(c[4][0],10);console.log("In fu. SCORE is",F);var L;return c[1].length===2&&c[2].length===1&&(L=c[1],v=ao(c[1][0],c[1][1],c[2][0]),c[0].push(v),c[3].push(v),c[1]=[]),c[1].length===3&&c[0].push(c[1].pop()),v==20&&co(L,c[3])&&(parseInt(c[4][0],10)===4?(c[4]=0,n(0,C="You win! "),F=0):(F+=1,n(0,C="Congratulations! You did it. Your score is "+F)),j(F),setTimeout(()=>n(0,C=""),3e3),console.log("Z is",C)),ue(),Ae(),console.log("still in fu. m2(s) and SCORE are",p(k),F),c},p=Nt(Se);function j(c){n(19,p=Nt([[Math.floor(Math.random()*6)+1,Math.floor(Math.random()*6)+1,Math.floor(Math.random()*12)+1,Math.floor(Math.random()*20)+1],[],[],[],[c]])),Et()}const Et=()=>{n(1,H=p(k)[0][0]),n(2,D=p(k)[0][1]),n(3,I=p(k)[0][2]),n(4,Z=p(k)[0][3]),n(14,S=p(k)[1][0]),n(15,fe=p(k)[1][1]),n(16,q=p(k)[1][2]),n(17,A=p(k)[1][3]),n(5,M=p(k)[2]),p(k)[3],n(18,z=p(k)[4]),console.log("In updateRoll. SCORE is",z),n(6,d=n(7,se=n(8,W=n(9,B="inline")))),n(10,oe=n(11,re=n(12,O=n(13,Y="none"))))};function Ae(){n(6,d=n(7,se=n(8,W=n(9,B=n(10,oe=n(11,re=n(12,O=n(13,Y="none")))))))),H!=null&&n(6,d="inline"),D!=null&&n(7,se="inline"),I!=null&&n(8,W="inline"),Z!=null&&n(9,B="inline"),S!=null&&n(10,oe="inline"),fe!=null&&n(11,re="inline"),q!=null&&n(12,O="inline"),A!=null&&n(13,Y="inline")}var ue=()=>{n(1,H=p(k)[0][0]),n(2,D=p(k)[0][1]),n(3,I=p(k)[0][2]),n(4,Z=p(k)[0][3]),n(5,M=p(k)[2]),p(k)[3],n(18,z=p(k)[4]),n(14,S=p(k)[1][0]),n(15,fe=p(k)[1][1]),n(16,q=p(k)[1][2]),n(17,A=p(k)[1][3])},P=Nt([1,2,3,4]),ce=c=>v=>(v[1].push(v[0].splice(0,1)[0]),v=v,c(R),v),X=c=>v=>(v[1].push(v[0].splice(1,1)[0]),v=v,c(R),v),Ue=c=>v=>(v[1].push(v[0].splice(2,1)[0]),v=v,c(R),v),ke=c=>v=>(v[1].push(v[0].splice(3,1)[0]),v=v,c(R),v);function ne(){p(c=>[p(k)[0],p(k)[1],["+"],p(k)[3],p(k)[4]].map(v=>v.flat())),p(R)}function _t(){p(c=>[p(k)[0],p(k)[1],["-"],p(k)[3],p(k)[4]].map(v=>v.flat())),p(R)}function He(){p(c=>[p(k)[0],p(k)[1],["*"],p(k)[3],p(k)[4]].map(v=>v.flat())),p(R)}function G(){p(c=>[p(k)[0],p(k)[1],["/"],p(k)[3],p(k)[4]].map(v=>v.flat())),p(R)}function Tt(){p(c=>[p(k)[0],p(k)[1],["concat"],p(k)[3],p(k)[4]].map(v=>v.flat())),p(R)}var T=Nt(3.1415926535),we=c=>c**3,De=c=>c*c,je=c=>v=>v**c,Le=c=>v=>1*v+1*c,We=c=>v=>v*c,J=c=>v=>c;function ht(){n(21,T=T(De))}function Ye(){n(21,T=T(we))}var V=function(v){var F=ls(v.target.value);console.log("p is",F),v.keyCode==13&&n(21,T=T(je(F)))},dt=function(v){v.keyCode==13&&n(21,T=T(Le(v.target.value)))},Ze=function(v){v.keyCode==13&&n(21,T=T(We(ls(v.target.value))))},qe=function(v){v.keyCode==13&&n(21,T=T(J(ls(v.target.value))))},ze=`function M (x) {
    return function go (func) {
        if (typeof func === "function") {
            x = func(x);
            return go;
        }
        else if (func === "stop") return x;
    }
};

m2 = M(any value); // The argument can be any JavaScript value
// For the game, the starting value is [ [0,0,0,0], [], [], [] ].`,Xe=`var mon3 = M([1,2,3,4]);
function g(ar) {
    var x = (ar.pop())**3;
    ar.unshift(x);
  return ar;
};
function g2 (ar) {return (ar.flatMap(v => (v+1)**3))};
function g3 (ar) {return (ar.flatMap(v => Math.round(v**(1/3))))};`,Q=`function runRoll () {
    m2 = M([ [Math.floor(Math.random()*6) + 1, Math.floor(Math.random()*6) + 1, // Actually one line
    Math.floor(Math.random()*12) + 1, Math.floor(Math.random()*20) + 1], [], [], [] ]);
    updateRoll();
    EEE = "yet to be selected";
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
    b0 = b1 = b2 = b3 = "inline";
    b4 = b5 = b6 = b7 = 'none';
};`,Bt=`function clic0 () {
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

var click0 = m => ar => {
    ar[1].push(ar[0].splice(0,1)[0]);
    ar = ar;
    m(fu);
    return ar;
};

var click1 = m => ar => {
    ar[1].push(ar[0].splice(1,1)[0]);
    ar = ar;
    m(fu);
    return ar;
};

var click2 = m => ar => {
    ar[1].push(ar[0].splice(2,1)[0]);
    ar = ar;
    m(fu);
    return ar;
};

var click3 = m => ar => {
    ar[1].push(ar[0].splice(3,1)[0]);
    ar = ar;
    m(fu);
    return ar;
};

fu = a => {
  var result;
  var interSec = intersection(a[1],a[3]);
  if (a[1].length === 2 && a[2].length === 1)   {
    result = calc(a[1][0], a[1][1],a[2][0]);
    a[0].push(result);
    a[3].push(result);  
    a[1] = [];
  }

  if (a[1].length === 3) {   
    a[0].push(a[1].pop());  // Returns a clicked third number.
  }

  if (result == 20 && interSec[0]) {
      Z = "Congratulations! You made it.";
      setTimeout(() => Z = "", 3000);
      runRoll();
  }
  update();
  sfunc();
  return a;
};`,Ge=`if (a[1].length === 3) {   
    a[0].push(a[1].pop());  // Returns a clicked third number.
  };`,K=`function sfunc () {
    b0 = b1 = b2 = b3 = b4 = b5 = b6 = b7 = "none";
    if (AA != (undefined && 0)) b0 = "inline";
    if (BB != (undefined && 0)) b1 = "inline";
    if (CC != (undefined && 0)) b2 = "inline";
    if (DD != (undefined && 0)) b3 = "inline";
    if (WW != (undefined && 0)) b4 = "inline";
    if (XX != (undefined && 0)) b5 = "inline";
    if (YY != (undefined && 0)) b6 = "inline";
    if (ZZ != (undefined && 0)) b7 = "inline";
}`,Je=`var update = () => {
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
};`,Ve=`function squareFu () {m4 = m4(square)};
function cubeFu () {m4 = m4(cube)};

function divFraction (x) {
    var y = x.split('/');
    console.log(y)
    if(y.length > 1){
        return (y[0] / y[1])
    }
    else{
        return y[0];
    }
}

var powFu = function powFu (e) {
    var p = divFraction(e.target.value);
    console.log("p is", p);
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
};`;console.log(R(p(k)));var Qe=`var mon = M(2);
mon(v=>v**4)(v=>v+5)(v=>v*2);
// The value of x can be obtained later
mon('stop');  // 42`;p=Nt([[0,0,0,0],[],[],[],[0]]);const Ke=()=>n(20,P=P(bo)),x=()=>n(20,P=P(vo)),Rt=()=>n(20,P=P(yo)),xe=()=>n(20,P=P(c=>[1,2,3,4])),$=()=>p(ce(p)),$e=()=>p(X(p)),ge=()=>p(Ue(p)),et=()=>p(ke(p)),tt=()=>j(z);return r.$$.update=()=>{r.$$.dirty[0]&1&&n(0,C),r.$$.dirty[0]&1},[C,H,D,I,Z,M,d,se,W,B,oe,re,O,Y,S,fe,q,A,z,p,P,T,j,ce,X,Ue,ke,ne,_t,He,G,Tt,ht,Ye,V,dt,Ze,qe,ze,Xe,Q,Bt,Ge,K,Je,Ve,Qe,Ke,x,Rt,xe,$,$e,ge,et,tt]}class Eo extends oo{constructor(_){super();ro(this,_,ko,mo,fo,{},null,[-1,-1,-1])}}export{Eo as default};
