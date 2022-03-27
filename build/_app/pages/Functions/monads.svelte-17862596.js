import{S as Gr,i as Jr,s as Qr,k as o,e as s,t as p,L as Kr,d as t,m as u,c as r,a as v,h as m,f as k,b as Lt,g as i,G as n,M as _,j as T,N as xr,O as qr,P as $r,Q as Vr}from"../../chunks/vendor-4e552e70.js";function gr(f){let w,a,O,B,ie,U,R,se,re,F,H,fe,S,P,Z,A,oe,Y,I,ue,W,b,j,M,ne,ae,We,pe,Ct,C,L,je,we,X,Ft,Le,z,Nt,me,h=parseFloat(f[23](d)).toFixed(5).toString()+"",Xe,ze,qe,Ve,q,Pt,Ge,V,At,Je,Qe,Ke,xe,G,It,$e,J,ge,et,tt,lt,Q,Dt,it,K,st,rt,ft,ot,x,St,c,y,N,_e,zt,qt,he,Xi,Vt,Te,Gt,Jt,Qt,Kt,ut,zi,xt,nt,qi,$t,at,Vi,gt,D,Gi,Ut=f[22](d).join(", ")+"",el,Ji,tl,ll,il,sl,Be,Qi,rl,Re,Ki,fl,Me,xi,ol,Oe,$i,ul,nl,al,pl,ml,be,gi,pt,es,ts,bl,mt,ls,vl,Ce,is,yl,cl,$,dl,kl,g,El,wl,ee,_l,hl,te,Tl,Bl,le,ss,Rl,Ml,Ol,Cl,Fl,Fe,rs,Nl,Ne,fs,Pl,Pe,os,Al,Ae,us,Il,Ie,ns,Dl,ve,Sl,Ul,Hl,Zl,Yl,De,as,Wl,jl,Ll,Xl,Se,ps,Ht=f[14][0]+"",zl,ql,Ue,ms,Zt=f[14][1]+"",Vl,Gl,He,bs,Yt=f[14][2]+"",Jl,Ql,Ze,vs,Wt=f[14][3]+"",Kl,xl,Ye,ys,jt=f[14][4]+"",$l,gl,ei,ti,ye,li,ii,ce,si,ri,de,fi,oi,ke,ui,ni,Ee,ai,pi,mi,bi,vi,bt,cs,yi,vt,ds,ci,yt,ks,di,ct,Es,ki,dt,ws,Ei,kt,_s,wi,Et,hs,_i,wt,Ts,hi,_t,Bs,Ti,ht,Rs,Bi,Tt,Ms,Ri,Bt,Os,Mi,Rt,Cs,Oi,Mt,Fs,Ci,Ot,Ns,Fi,Ni,Pi,Ai,Ii,Di,Si,Ui,Hi,Zi,Yi,Wi,E,Ps,Ls;return{c(){w=o(),a=s("br"),O=o(),B=s("div"),ie=p("**************************************************************************"),U=o(),R=s("div"),se=s("br"),re=p(`
The Recursive Closure "m2" Controls the Action`),H=o(),fe=s("br"),S=o(),P=s("p"),Z=p(`m2 is a recursive function spawned by the function M. Together,they form a closure as follows:
`),A=s("pre"),oe=p(f[40]),Y=o(),I=s("p"),ue=p(`I call functions returned by M "monads", much to the consternation of self-styled "functional programmers" who scoff at the idea that JavaScript could possibly have monads such as those defined in the Haskell programming language. Neither my monads nor the Haskell monads are Category Theory monads. The Haskell part actually surprises some programmers. Google "hask is a category" if you don't believe me.`),W=o(),b=s("p"),j=p('A monads created by, say, "monad = M(x)" creates an isolated pipeline allowing nested functions to operate on "x" insulated from any outer scope. For example, you could run:'),M=o(),ne=s("pre"),ae=p(f[48]),We=o(),pe=s("p"),Ct=p("In the solitaire version of the game of score below, x will be an array of arrays in the form x =  [ [], [], [], [], [n] ] where x[0] contains four integers simulating a throw of two six-sided, one twelve-sided, and one twenty-sided dice. x[1] and x[3] contain the number selected by the player, x[2] is the selected operator, and x[4] keeps track of the number of successes until the player wins by reaching x[4] = 5. But first, let's consider some simpler examples."),C=o(),L=s("p"),je=p("These are the first interactive demonstration's event handlers:"),we=o(),X=s("pre"),Ft=p(f[47]),Le=o(),z=s("p"),Nt=p("m4(s) is "),me=s("span"),Xe=p(h),ze=o(),qe=s("br"),Ve=o(),q=s("button"),Pt=p("m4(cube)"),Ge=o(),V=s("button"),At=p("m4(square)"),Je=o(),Qe=s("br"),Ke=s("br"),xe=o(),G=s("span"),It=p("To call m4(pow(n)), enter n in the box ->"),$e=o(),J=s("input"),ge=o(),et=s("br"),tt=s("br"),lt=o(),Q=s("span"),Dt=p("To call m4(add(n)), enter n in the box ->"),it=o(),K=s("input"),st=o(),rt=s("br"),ft=s("br"),ot=o(),x=s("span"),St=p("To call m4(mult(n)), enter n in the box ->"),c=o(),y=s("input"),N=o(),_e=s("br"),zt=s("br"),qt=o(),he=s("span"),Xi=p("To call m4(reset(n)), enter n in the box ->"),Vt=o(),Te=s("input"),Gt=o(),Jt=s("br"),Qt=s("br"),Kt=o(),ut=s("p"),zi=p("Next, x will be an array manipulated by functions designed for that purpose. Here are the functions responsible for the interactive demonstration below:"),xt=o(),nt=s("pre"),qi=p(f[41]),$t=o(),at=s("p"),Vi=p(`If you click mon3 = mon3(g) four times and the click mon3 = mon3(g3), you will see that mon3(s) returns its original value, [1,2,3,4]. By the way, the "mon3 =" part of "mon3 = mon3(g)" is included solely to trigger updating of browser displays. Svelte doesn't have a virtual DOM, and merely changing objects isn't enough to trigger DOM updates. For example, arr = [1,2,3] doesn't change in the DOM when arr.push(888) is called. arr = arr afterwards or arr = arr.push(888) initially both do the trick.`),gt=o(),D=s("div"),Gi=p("["),el=p(Ut),Ji=p("]"),tl=o(),ll=s("br"),il=s("br"),sl=o(),Be=s("button"),Qi=p("mon3 = mon3(g)"),rl=o(),Re=s("button"),Ki=p("mon3 = mon3(g2)"),fl=o(),Me=s("button"),xi=p("mon3 = mon3(g3)"),ol=o(),Oe=s("button"),$i=p("mon3 = mon3(x => [1,2,3,4])"),ul=o(),nl=s("br"),al=s("br"),pl=s("br"),ml=o(),be=s("p"),gi=p("Now for the game of score, a game involving four dice and two or three-stage arithmetic computations with the goal of arriving at the number 20. My son Alex taught it to me a decade ago, when he was in middle school. I was also learning the Haskell programming language, so I developed a multiplayer online version with groups of interacting player, a chat box, and a shared-by-the-group todo list controlled by a Haskell WebSockets server backend. The backend could compute all possible solutions, if any existed, to any throw of the dice. It also identified all of the impossible-to-solve rolls. Users could change the default number of dice sides from 6,6,12,and 20 and the goal from the default value of 20. A version of it is online at "),pt=s("a"),es=p("https://score.schalk.net"),ts=p("."),bl=o(),mt=s("p"),ls=p("This demonstration doesn't work in conjunction with a remote server, nor does it feature any Haskell code. It's just a little solitaire game providing an opportunity to consider the interesting possibilities of recursive closures. Instead of being argunents of function or global object methods, these monads are functions that consume functions. When the functions consumed by monads have no side effects outside of the monad's closure -- which should always be the case -- maintenance and bug tracking become more manageable. Minimizing side effects inside of monadic closure can help even more."),vl=o(),Ce=s("h3"),is=p("Score: "),yl=p(f[19]),cl=o(),$=s("button"),dl=p(f[1]),kl=o(),g=s("button"),El=p(f[2]),wl=o(),ee=s("button"),_l=p(f[3]),hl=o(),te=s("button"),Tl=p(f[4]),Bl=o(),le=s("span"),ss=p("The operator is "),Rl=p(f[5]),Ml=o(),Ol=s("br"),Cl=s("br"),Fl=o(),Fe=s("button"),rs=p("add"),Nl=o(),Ne=s("button"),fs=p("subtract"),Pl=o(),Pe=s("button"),os=p("multiply"),Al=o(),Ae=s("button"),us=p("divide"),Il=o(),Ie=s("button"),ns=p("concat"),Dl=o(),ve=s("span"),Sl=p(f[0]),Ul=o(),Hl=s("br"),Zl=s("br"),Yl=o(),De=s("button"),as=p("ROLL"),Wl=o(),jl=s("br"),Ll=s("br"),Xl=o(),Se=s("div"),ps=p("roll: "),zl=p(Ht),ql=o(),Ue=s("div"),ms=p("selected: "),Vl=p(Zt),Gl=o(),He=s("div"),bs=p("operator: "),Jl=p(Yt),Ql=o(),Ze=s("div"),vs=p("computed: "),Kl=p(Wt),xl=o(),Ye=s("div"),ys=p("score: "),$l=p(jt),gl=o(),ei=s("br"),ti=o(),ye=s("button"),li=p(f[15]),ii=o(),ce=s("button"),si=p(f[16]),ri=o(),de=s("button"),fi=p(f[17]),oi=o(),ke=s("button"),ui=p(f[18]),ni=o(),Ee=s("button"),ai=p(f[5]),pi=o(),mi=s("br"),bi=s("br"),vi=o(),bt=s("p"),cs=p("The function fu() is the brains behing the game of Score. Each time a number is clicked, m2(fu) is called and fu does various things depending on the state of the closures value, x."),yi=o(),vt=s("p"),ds=p("At the end of fu(), two formatting functions are Called. The first displays or hides variables in the DOM and the second updates their values. Here they are:"),ci=o(),yt=s("pre"),ks=p(f[39]),di=o(),ct=s("p"),Es=p('Clicking "ROLL" calls runRoll() which, in turn, calls updateRoll() to re-set HTML variables.'),ki=o(),dt=s("pre"),ws=p(f[42]),Ei=o(),kt=s("p"),_s=p('The "x = [ [], [], [], [], [0] ]" format will be maintained throught game play. x[0] simulates the dice roll; x[1] recieves integers that are clicked; x[2] holds the operator; and x[4] contains numbers that are computed. x[4] makes sure at least one computed number is involved in arriving at 20. Here are the first few functions called when a number is clicked:'),wi=o(),Et=s("pre"),hs=p(f[43]),_i=o(),wt=s("p"),Ts=p(`The first line of fu() is the calculation result that is generated whenever there are two items in (s)[1] and an operator in m2(s)[3]. The intersection is important in fu()'s bottom test. If "intersect", the intersection of m2(s)[1] and m2(s)[3], is empty intersect[0] returns false and the last test in fu fails, even though 20 was produced on the second computation.`),hi=o(),_t=s("p"),Bs=p("If no operator has been selected, it's possible to click a third number. The program doesn't complain, it just puts the number back for you with:"),Ti=o(),ht=s("pre"),Rs=p(f[44]),Bi=o(),Tt=s("p"),Ms=p("If you roll the dice and keep clicking on the leftmost number, you'll see the numbers shift back and forth on every try. The first element of m2(s)[0] keeps getting pulled out of the first position and pushed back on the right."),Ri=o(),Bt=s("p"),Os=p(`sfunc() does some more DOM housekeeping. The buttons with dice number come and go as their CSS display strings are changed back and forth between "none" and "inline". fu() calls sfunc(). Here's how it is defined:`),Mi=o(),Rt=s("pre"),Cs=p(f[45]),Oi=o(),Mt=s("p"),Fs=p("After each number is selected and Before calling sFunc(), fu() first updates the HTML variables as follows:"),Ci=o(),Ot=s("pre"),Ns=p(f[46]),Fi=o(),Ni=s("br"),Pi=s("br"),Ai=s("br"),Ii=s("br"),Di=s("br"),Si=s("br"),Ui=o(),Hi=s("br"),Zi=s("br"),Yi=s("br"),Wi=s("br"),this.h()},l(e){Kr('[data-svelte="svelte-3na27m"]',document.head).forEach(t),w=u(e),a=r(e,"BR",{}),O=u(e),B=r(e,"DIV",{});var Xs=v(B);ie=m(Xs,"**************************************************************************"),Xs.forEach(t),U=u(e),R=r(e,"DIV",{style:!0});var As=v(R);se=r(As,"BR",{}),re=m(As,`
The Recursive Closure "m2" Controls the Action`),As.forEach(t),H=u(e),fe=r(e,"BR",{}),S=u(e),P=r(e,"P",{});var zs=v(P);Z=m(zs,`m2 is a recursive function spawned by the function M. Together,they form a closure as follows:
`),zs.forEach(t),A=r(e,"PRE",{});var qs=v(A);oe=m(qs,f[40]),qs.forEach(t),Y=u(e),I=r(e,"P",{});var Vs=v(I);ue=m(Vs,`I call functions returned by M "monads", much to the consternation of self-styled "functional programmers" who scoff at the idea that JavaScript could possibly have monads such as those defined in the Haskell programming language. Neither my monads nor the Haskell monads are Category Theory monads. The Haskell part actually surprises some programmers. Google "hask is a category" if you don't believe me.`),Vs.forEach(t),W=u(e),b=r(e,"P",{});var Gs=v(b);j=m(Gs,'A monads created by, say, "monad = M(x)" creates an isolated pipeline allowing nested functions to operate on "x" insulated from any outer scope. For example, you could run:'),Gs.forEach(t),M=u(e),ne=r(e,"PRE",{});var Js=v(ne);ae=m(Js,f[48]),Js.forEach(t),We=u(e),pe=r(e,"P",{});var Qs=v(pe);Ct=m(Qs,"In the solitaire version of the game of score below, x will be an array of arrays in the form x =  [ [], [], [], [], [n] ] where x[0] contains four integers simulating a throw of two six-sided, one twelve-sided, and one twenty-sided dice. x[1] and x[3] contain the number selected by the player, x[2] is the selected operator, and x[4] keeps track of the number of successes until the player wins by reaching x[4] = 5. But first, let's consider some simpler examples."),Qs.forEach(t),C=u(e),L=r(e,"P",{});var Ks=v(L);je=m(Ks,"These are the first interactive demonstration's event handlers:"),Ks.forEach(t),we=u(e),X=r(e,"PRE",{});var xs=v(X);Ft=m(xs,f[47]),xs.forEach(t),Le=u(e),z=r(e,"P",{});var Is=v(z);Nt=m(Is,"m4(s) is "),me=r(Is,"SPAN",{style:!0});var $s=v(me);Xe=m($s,h),$s.forEach(t),Is.forEach(t),ze=u(e),qe=r(e,"BR",{}),Ve=u(e),q=r(e,"BUTTON",{});var gs=v(q);Pt=m(gs,"m4(cube)"),gs.forEach(t),Ge=u(e),V=r(e,"BUTTON",{});var er=v(V);At=m(er,"m4(square)"),er.forEach(t),Je=u(e),Qe=r(e,"BR",{}),Ke=r(e,"BR",{}),xe=u(e),G=r(e,"SPAN",{style:!0});var tr=v(G);It=m(tr,"To call m4(pow(n)), enter n in the box ->"),tr.forEach(t),$e=u(e),J=r(e,"INPUT",{type:!0,style:!0}),ge=u(e),et=r(e,"BR",{}),tt=r(e,"BR",{}),lt=u(e),Q=r(e,"SPAN",{style:!0});var lr=v(Q);Dt=m(lr,"To call m4(add(n)), enter n in the box ->"),lr.forEach(t),it=u(e),K=r(e,"INPUT",{type:!0,style:!0}),st=u(e),rt=r(e,"BR",{}),ft=r(e,"BR",{}),ot=u(e),x=r(e,"SPAN",{style:!0});var ir=v(x);St=m(ir,"To call m4(mult(n)), enter n in the box ->"),ir.forEach(t),c=u(e),y=r(e,"INPUT",{type:!0,style:!0}),N=u(e),_e=r(e,"BR",{}),zt=r(e,"BR",{}),qt=u(e),he=r(e,"SPAN",{style:!0});var sr=v(he);Xi=m(sr,"To call m4(reset(n)), enter n in the box ->"),sr.forEach(t),Vt=u(e),Te=r(e,"INPUT",{type:!0,style:!0}),Gt=u(e),Jt=r(e,"BR",{}),Qt=r(e,"BR",{}),Kt=u(e),ut=r(e,"P",{});var rr=v(ut);zi=m(rr,"Next, x will be an array manipulated by functions designed for that purpose. Here are the functions responsible for the interactive demonstration below:"),rr.forEach(t),xt=u(e),nt=r(e,"PRE",{});var fr=v(nt);qi=m(fr,f[41]),fr.forEach(t),$t=u(e),at=r(e,"P",{});var or=v(at);Vi=m(or,`If you click mon3 = mon3(g) four times and the click mon3 = mon3(g3), you will see that mon3(s) returns its original value, [1,2,3,4]. By the way, the "mon3 =" part of "mon3 = mon3(g)" is included solely to trigger updating of browser displays. Svelte doesn't have a virtual DOM, and merely changing objects isn't enough to trigger DOM updates. For example, arr = [1,2,3] doesn't change in the DOM when arr.push(888) is called. arr = arr afterwards or arr = arr.push(888) initially both do the trick.`),or.forEach(t),gt=u(e),D=r(e,"DIV",{style:!0});var ji=v(D);Gi=m(ji,"["),el=m(ji,Ut),Ji=m(ji,"]"),ji.forEach(t),tl=u(e),ll=r(e,"BR",{}),il=r(e,"BR",{}),sl=u(e),Be=r(e,"BUTTON",{});var ur=v(Be);Qi=m(ur,"mon3 = mon3(g)"),ur.forEach(t),rl=u(e),Re=r(e,"BUTTON",{});var nr=v(Re);Ki=m(nr,"mon3 = mon3(g2)"),nr.forEach(t),fl=u(e),Me=r(e,"BUTTON",{});var ar=v(Me);xi=m(ar,"mon3 = mon3(g3)"),ar.forEach(t),ol=u(e),Oe=r(e,"BUTTON",{});var pr=v(Oe);$i=m(pr,"mon3 = mon3(x => [1,2,3,4])"),pr.forEach(t),ul=u(e),nl=r(e,"BR",{}),al=r(e,"BR",{}),pl=r(e,"BR",{}),ml=u(e),be=r(e,"P",{});var Li=v(be);gi=m(Li,"Now for the game of score, a game involving four dice and two or three-stage arithmetic computations with the goal of arriving at the number 20. My son Alex taught it to me a decade ago, when he was in middle school. I was also learning the Haskell programming language, so I developed a multiplayer online version with groups of interacting player, a chat box, and a shared-by-the-group todo list controlled by a Haskell WebSockets server backend. The backend could compute all possible solutions, if any existed, to any throw of the dice. It also identified all of the impossible-to-solve rolls. Users could change the default number of dice sides from 6,6,12,and 20 and the goal from the default value of 20. A version of it is online at "),pt=r(Li,"A",{href:!0});var mr=v(pt);es=m(mr,"https://score.schalk.net"),mr.forEach(t),ts=m(Li,"."),Li.forEach(t),bl=u(e),mt=r(e,"P",{});var br=v(mt);ls=m(br,"This demonstration doesn't work in conjunction with a remote server, nor does it feature any Haskell code. It's just a little solitaire game providing an opportunity to consider the interesting possibilities of recursive closures. Instead of being argunents of function or global object methods, these monads are functions that consume functions. When the functions consumed by monads have no side effects outside of the monad's closure -- which should always be the case -- maintenance and bug tracking become more manageable. Minimizing side effects inside of monadic closure can help even more."),br.forEach(t),vl=u(e),Ce=r(e,"H3",{});var Ds=v(Ce);is=m(Ds,"Score: "),yl=m(Ds,f[19]),Ds.forEach(t),cl=u(e),$=r(e,"BUTTON",{style:!0});var vr=v($);dl=m(vr,f[1]),vr.forEach(t),kl=u(e),g=r(e,"BUTTON",{style:!0});var yr=v(g);El=m(yr,f[2]),yr.forEach(t),wl=u(e),ee=r(e,"BUTTON",{style:!0});var cr=v(ee);_l=m(cr,f[3]),cr.forEach(t),hl=u(e),te=r(e,"BUTTON",{style:!0});var dr=v(te);Tl=m(dr,f[4]),dr.forEach(t),Bl=u(e),le=r(e,"SPAN",{style:!0});var Ss=v(le);ss=m(Ss,"The operator is "),Rl=m(Ss,f[5]),Ss.forEach(t),Ml=u(e),Ol=r(e,"BR",{}),Cl=r(e,"BR",{}),Fl=u(e),Fe=r(e,"BUTTON",{});var kr=v(Fe);rs=m(kr,"add"),kr.forEach(t),Nl=u(e),Ne=r(e,"BUTTON",{});var Er=v(Ne);fs=m(Er,"subtract"),Er.forEach(t),Pl=u(e),Pe=r(e,"BUTTON",{});var wr=v(Pe);os=m(wr,"multiply"),wr.forEach(t),Al=u(e),Ae=r(e,"BUTTON",{});var _r=v(Ae);us=m(_r,"divide"),_r.forEach(t),Il=u(e),Ie=r(e,"BUTTON",{});var hr=v(Ie);ns=m(hr,"concat"),hr.forEach(t),Dl=u(e),ve=r(e,"SPAN",{style:!0});var Tr=v(ve);Sl=m(Tr,f[0]),Tr.forEach(t),Ul=u(e),Hl=r(e,"BR",{}),Zl=r(e,"BR",{}),Yl=u(e),De=r(e,"BUTTON",{});var Br=v(De);as=m(Br,"ROLL"),Br.forEach(t),Wl=u(e),jl=r(e,"BR",{}),Ll=r(e,"BR",{}),Xl=u(e),Se=r(e,"DIV",{});var Us=v(Se);ps=m(Us,"roll: "),zl=m(Us,Ht),Us.forEach(t),ql=u(e),Ue=r(e,"DIV",{});var Hs=v(Ue);ms=m(Hs,"selected: "),Vl=m(Hs,Zt),Hs.forEach(t),Gl=u(e),He=r(e,"DIV",{});var Zs=v(He);bs=m(Zs,"operator: "),Jl=m(Zs,Yt),Zs.forEach(t),Ql=u(e),Ze=r(e,"DIV",{});var Ys=v(Ze);vs=m(Ys,"computed: "),Kl=m(Ys,Wt),Ys.forEach(t),xl=u(e),Ye=r(e,"DIV",{});var Ws=v(Ye);ys=m(Ws,"score: "),$l=m(Ws,jt),Ws.forEach(t),gl=u(e),ei=r(e,"BR",{}),ti=u(e),ye=r(e,"BUTTON",{style:!0});var Rr=v(ye);li=m(Rr,f[15]),Rr.forEach(t),ii=u(e),ce=r(e,"BUTTON",{style:!0});var Mr=v(ce);si=m(Mr,f[16]),Mr.forEach(t),ri=u(e),de=r(e,"BUTTON",{style:!0});var Or=v(de);fi=m(Or,f[17]),Or.forEach(t),oi=u(e),ke=r(e,"BUTTON",{style:!0});var Cr=v(ke);ui=m(Cr,f[18]),Cr.forEach(t),ni=u(e),Ee=r(e,"BUTTON",{style:!0});var Fr=v(Ee);ai=m(Fr,f[5]),Fr.forEach(t),pi=u(e),mi=r(e,"BR",{}),bi=r(e,"BR",{}),vi=u(e),bt=r(e,"P",{});var Nr=v(bt);cs=m(Nr,"The function fu() is the brains behing the game of Score. Each time a number is clicked, m2(fu) is called and fu does various things depending on the state of the closures value, x."),Nr.forEach(t),yi=u(e),vt=r(e,"P",{});var Pr=v(vt);ds=m(Pr,"At the end of fu(), two formatting functions are Called. The first displays or hides variables in the DOM and the second updates their values. Here they are:"),Pr.forEach(t),ci=u(e),yt=r(e,"PRE",{});var Ar=v(yt);ks=m(Ar,f[39]),Ar.forEach(t),di=u(e),ct=r(e,"P",{});var Ir=v(ct);Es=m(Ir,'Clicking "ROLL" calls runRoll() which, in turn, calls updateRoll() to re-set HTML variables.'),Ir.forEach(t),ki=u(e),dt=r(e,"PRE",{});var Dr=v(dt);ws=m(Dr,f[42]),Dr.forEach(t),Ei=u(e),kt=r(e,"P",{});var Sr=v(kt);_s=m(Sr,'The "x = [ [], [], [], [], [0] ]" format will be maintained throught game play. x[0] simulates the dice roll; x[1] recieves integers that are clicked; x[2] holds the operator; and x[4] contains numbers that are computed. x[4] makes sure at least one computed number is involved in arriving at 20. Here are the first few functions called when a number is clicked:'),Sr.forEach(t),wi=u(e),Et=r(e,"PRE",{});var Ur=v(Et);hs=m(Ur,f[43]),Ur.forEach(t),_i=u(e),wt=r(e,"P",{});var Hr=v(wt);Ts=m(Hr,`The first line of fu() is the calculation result that is generated whenever there are two items in (s)[1] and an operator in m2(s)[3]. The intersection is important in fu()'s bottom test. If "intersect", the intersection of m2(s)[1] and m2(s)[3], is empty intersect[0] returns false and the last test in fu fails, even though 20 was produced on the second computation.`),Hr.forEach(t),hi=u(e),_t=r(e,"P",{});var Zr=v(_t);Bs=m(Zr,"If no operator has been selected, it's possible to click a third number. The program doesn't complain, it just puts the number back for you with:"),Zr.forEach(t),Ti=u(e),ht=r(e,"PRE",{});var Yr=v(ht);Rs=m(Yr,f[44]),Yr.forEach(t),Bi=u(e),Tt=r(e,"P",{});var Wr=v(Tt);Ms=m(Wr,"If you roll the dice and keep clicking on the leftmost number, you'll see the numbers shift back and forth on every try. The first element of m2(s)[0] keeps getting pulled out of the first position and pushed back on the right."),Wr.forEach(t),Ri=u(e),Bt=r(e,"P",{});var jr=v(Bt);Os=m(jr,`sfunc() does some more DOM housekeeping. The buttons with dice number come and go as their CSS display strings are changed back and forth between "none" and "inline". fu() calls sfunc(). Here's how it is defined:`),jr.forEach(t),Mi=u(e),Rt=r(e,"PRE",{});var Lr=v(Rt);Cs=m(Lr,f[45]),Lr.forEach(t),Oi=u(e),Mt=r(e,"P",{});var Xr=v(Mt);Fs=m(Xr,"After each number is selected and Before calling sFunc(), fu() first updates the HTML variables as follows:"),Xr.forEach(t),Ci=u(e),Ot=r(e,"PRE",{});var zr=v(Ot);Ns=m(zr,f[46]),zr.forEach(t),Fi=u(e),Ni=r(e,"BR",{}),Pi=r(e,"BR",{}),Ai=r(e,"BR",{}),Ii=r(e,"BR",{}),Di=r(e,"BR",{}),Si=r(e,"BR",{}),Ui=u(e),Hi=r(e,"BR",{}),Zi=r(e,"BR",{}),Yi=r(e,"BR",{}),Wi=r(e,"BR",{}),this.h()},h(){document.title="Recursive Closures ",k(R,"font-family","Times New Roman"),k(R,"text-align","center"),k(R,"font-size","32px"),k(me,"font-size","54px"),k(G,"font-size","24px"),Lt(J,"type","text"),k(J,"width","65px"),k(Q,"font-size","24px"),Lt(K,"type","number"),k(K,"width","65px"),k(x,"font-size","24px"),Lt(y,"type","text"),k(y,"width","65px"),k(he,"font-size","24px"),Lt(Te,"type","number"),k(Te,"width","65px"),k(D,"margin-left","10%"),k(D,"font-size","44px"),k(D,"color","#ddaadd"),Lt(pt,"href","https://score.schalk.net"),k($,"display",f[6]),k(g,"display",f[7]),k(ee,"display",f[8]),k(te,"display",f[9]),k(le,"margin-left","8%"),k(le,"font-size","22px"),k(ve,"color","#bbbbff"),k(ve,"font-size","42px"),k(ye,"display",f[10]),k(ce,"display",f[11]),k(de,"display",f[12]),k(ke,"display",f[13]),k(Ee,"display",f[13])},m(e,l){i(e,w,l),i(e,a,l),i(e,O,l),i(e,B,l),n(B,ie),i(e,U,l),i(e,R,l),n(R,se),n(R,re),i(e,H,l),i(e,fe,l),i(e,S,l),i(e,P,l),n(P,Z),i(e,A,l),n(A,oe),i(e,Y,l),i(e,I,l),n(I,ue),i(e,W,l),i(e,b,l),n(b,j),i(e,M,l),i(e,ne,l),n(ne,ae),i(e,We,l),i(e,pe,l),n(pe,Ct),i(e,C,l),i(e,L,l),n(L,je),i(e,we,l),i(e,X,l),n(X,Ft),i(e,Le,l),i(e,z,l),n(z,Nt),n(z,me),n(me,Xe),i(e,ze,l),i(e,qe,l),i(e,Ve,l),i(e,q,l),n(q,Pt),i(e,Ge,l),i(e,V,l),n(V,At),i(e,Je,l),i(e,Qe,l),i(e,Ke,l),i(e,xe,l),i(e,G,l),n(G,It),i(e,$e,l),i(e,J,l),i(e,ge,l),i(e,et,l),i(e,tt,l),i(e,lt,l),i(e,Q,l),n(Q,Dt),i(e,it,l),i(e,K,l),i(e,st,l),i(e,rt,l),i(e,ft,l),i(e,ot,l),i(e,x,l),n(x,St),i(e,c,l),i(e,y,l),i(e,N,l),i(e,_e,l),i(e,zt,l),i(e,qt,l),i(e,he,l),n(he,Xi),i(e,Vt,l),i(e,Te,l),i(e,Gt,l),i(e,Jt,l),i(e,Qt,l),i(e,Kt,l),i(e,ut,l),n(ut,zi),i(e,xt,l),i(e,nt,l),n(nt,qi),i(e,$t,l),i(e,at,l),n(at,Vi),i(e,gt,l),i(e,D,l),n(D,Gi),n(D,el),n(D,Ji),i(e,tl,l),i(e,ll,l),i(e,il,l),i(e,sl,l),i(e,Be,l),n(Be,Qi),i(e,rl,l),i(e,Re,l),n(Re,Ki),i(e,fl,l),i(e,Me,l),n(Me,xi),i(e,ol,l),i(e,Oe,l),n(Oe,$i),i(e,ul,l),i(e,nl,l),i(e,al,l),i(e,pl,l),i(e,ml,l),i(e,be,l),n(be,gi),n(be,pt),n(pt,es),n(be,ts),i(e,bl,l),i(e,mt,l),n(mt,ls),i(e,vl,l),i(e,Ce,l),n(Ce,is),n(Ce,yl),i(e,cl,l),i(e,$,l),n($,dl),i(e,kl,l),i(e,g,l),n(g,El),i(e,wl,l),i(e,ee,l),n(ee,_l),i(e,hl,l),i(e,te,l),n(te,Tl),i(e,Bl,l),i(e,le,l),n(le,ss),n(le,Rl),i(e,Ml,l),i(e,Ol,l),i(e,Cl,l),i(e,Fl,l),i(e,Fe,l),n(Fe,rs),i(e,Nl,l),i(e,Ne,l),n(Ne,fs),i(e,Pl,l),i(e,Pe,l),n(Pe,os),i(e,Al,l),i(e,Ae,l),n(Ae,us),i(e,Il,l),i(e,Ie,l),n(Ie,ns),i(e,Dl,l),i(e,ve,l),n(ve,Sl),i(e,Ul,l),i(e,Hl,l),i(e,Zl,l),i(e,Yl,l),i(e,De,l),n(De,as),i(e,Wl,l),i(e,jl,l),i(e,Ll,l),i(e,Xl,l),i(e,Se,l),n(Se,ps),n(Se,zl),i(e,ql,l),i(e,Ue,l),n(Ue,ms),n(Ue,Vl),i(e,Gl,l),i(e,He,l),n(He,bs),n(He,Jl),i(e,Ql,l),i(e,Ze,l),n(Ze,vs),n(Ze,Kl),i(e,xl,l),i(e,Ye,l),n(Ye,ys),n(Ye,$l),i(e,gl,l),i(e,ei,l),i(e,ti,l),i(e,ye,l),n(ye,li),i(e,ii,l),i(e,ce,l),n(ce,si),i(e,ri,l),i(e,de,l),n(de,fi),i(e,oi,l),i(e,ke,l),n(ke,ui),i(e,ni,l),i(e,Ee,l),n(Ee,ai),i(e,pi,l),i(e,mi,l),i(e,bi,l),i(e,vi,l),i(e,bt,l),n(bt,cs),i(e,yi,l),i(e,vt,l),n(vt,ds),i(e,ci,l),i(e,yt,l),n(yt,ks),i(e,di,l),i(e,ct,l),n(ct,Es),i(e,ki,l),i(e,dt,l),n(dt,ws),i(e,Ei,l),i(e,kt,l),n(kt,_s),i(e,wi,l),i(e,Et,l),n(Et,hs),i(e,_i,l),i(e,wt,l),n(wt,Ts),i(e,hi,l),i(e,_t,l),n(_t,Bs),i(e,Ti,l),i(e,ht,l),n(ht,Rs),i(e,Bi,l),i(e,Tt,l),n(Tt,Ms),i(e,Ri,l),i(e,Bt,l),n(Bt,Os),i(e,Mi,l),i(e,Rt,l),n(Rt,Cs),i(e,Oi,l),i(e,Mt,l),n(Mt,Fs),i(e,Ci,l),i(e,Ot,l),n(Ot,Ns),i(e,Fi,l),i(e,Ni,l),i(e,Pi,l),i(e,Ai,l),i(e,Ii,l),i(e,Di,l),i(e,Si,l),i(e,Ui,l),i(e,Hi,l),i(e,Zi,l),i(e,Yi,l),i(e,Wi,l),E=!0,Ps||(Ls=[_(q,"click",f[34]),_(V,"click",f[33]),_(J,"keydown",f[35]),_(K,"keydown",f[36]),_(y,"keydown",f[37]),_(Te,"keydown",f[38]),_(Be,"click",f[49]),_(Re,"click",f[50]),_(Me,"click",f[51]),_(Oe,"click",f[52]),_($,"click",f[53]),_(g,"click",f[54]),_(ee,"click",f[55]),_(te,"click",f[56]),_(Fe,"click",f[28]),_(Ne,"click",f[29]),_(Pe,"click",f[30]),_(Ae,"click",f[31]),_(Ie,"click",f[32]),_(De,"click",f[57])],Ps=!0)},p(e,l){(!E||l[0]&8388608)&&h!==(h=parseFloat(e[23](d)).toFixed(5).toString()+"")&&T(Xe,h),(!E||l[0]&4194304)&&Ut!==(Ut=e[22](d).join(", ")+"")&&T(el,Ut),(!E||l[0]&524288)&&T(yl,e[19]),(!E||l[0]&2)&&T(dl,e[1]),(!E||l[0]&64)&&k($,"display",e[6]),(!E||l[0]&4)&&T(El,e[2]),(!E||l[0]&128)&&k(g,"display",e[7]),(!E||l[0]&8)&&T(_l,e[3]),(!E||l[0]&256)&&k(ee,"display",e[8]),(!E||l[0]&16)&&T(Tl,e[4]),(!E||l[0]&512)&&k(te,"display",e[9]),(!E||l[0]&32)&&T(Rl,e[5]),(!E||l[0]&1)&&T(Sl,e[0]),(!E||l[0]&16384)&&Ht!==(Ht=e[14][0]+"")&&T(zl,Ht),(!E||l[0]&16384)&&Zt!==(Zt=e[14][1]+"")&&T(Vl,Zt),(!E||l[0]&16384)&&Yt!==(Yt=e[14][2]+"")&&T(Jl,Yt),(!E||l[0]&16384)&&Wt!==(Wt=e[14][3]+"")&&T(Kl,Wt),(!E||l[0]&16384)&&jt!==(jt=e[14][4]+"")&&T($l,jt),(!E||l[0]&32768)&&T(li,e[15]),(!E||l[0]&1024)&&k(ye,"display",e[10]),(!E||l[0]&65536)&&T(si,e[16]),(!E||l[0]&2048)&&k(ce,"display",e[11]),(!E||l[0]&131072)&&T(fi,e[17]),(!E||l[0]&4096)&&k(de,"display",e[12]),(!E||l[0]&262144)&&T(ui,e[18]),(!E||l[0]&8192)&&k(ke,"display",e[13]),(!E||l[0]&32)&&T(ai,e[5]),(!E||l[0]&8192)&&k(Ee,"display",e[13])},i(e){E||(xr(()=>{F||(F=qr(R,Vr,{},!0)),F.run(1)}),E=!0)},o(e){F||(F=qr(R,Vr,{},!1)),F.run(0),E=!1},d(e){e&&t(w),e&&t(a),e&&t(O),e&&t(B),e&&t(U),e&&t(R),e&&F&&F.end(),e&&t(H),e&&t(fe),e&&t(S),e&&t(P),e&&t(A),e&&t(Y),e&&t(I),e&&t(W),e&&t(b),e&&t(M),e&&t(ne),e&&t(We),e&&t(pe),e&&t(C),e&&t(L),e&&t(we),e&&t(X),e&&t(Le),e&&t(z),e&&t(ze),e&&t(qe),e&&t(Ve),e&&t(q),e&&t(Ge),e&&t(V),e&&t(Je),e&&t(Qe),e&&t(Ke),e&&t(xe),e&&t(G),e&&t($e),e&&t(J),e&&t(ge),e&&t(et),e&&t(tt),e&&t(lt),e&&t(Q),e&&t(it),e&&t(K),e&&t(st),e&&t(rt),e&&t(ft),e&&t(ot),e&&t(x),e&&t(c),e&&t(y),e&&t(N),e&&t(_e),e&&t(zt),e&&t(qt),e&&t(he),e&&t(Vt),e&&t(Te),e&&t(Gt),e&&t(Jt),e&&t(Qt),e&&t(Kt),e&&t(ut),e&&t(xt),e&&t(nt),e&&t($t),e&&t(at),e&&t(gt),e&&t(D),e&&t(tl),e&&t(ll),e&&t(il),e&&t(sl),e&&t(Be),e&&t(rl),e&&t(Re),e&&t(fl),e&&t(Me),e&&t(ol),e&&t(Oe),e&&t(ul),e&&t(nl),e&&t(al),e&&t(pl),e&&t(ml),e&&t(be),e&&t(bl),e&&t(mt),e&&t(vl),e&&t(Ce),e&&t(cl),e&&t($),e&&t(kl),e&&t(g),e&&t(wl),e&&t(ee),e&&t(hl),e&&t(te),e&&t(Bl),e&&t(le),e&&t(Ml),e&&t(Ol),e&&t(Cl),e&&t(Fl),e&&t(Fe),e&&t(Nl),e&&t(Ne),e&&t(Pl),e&&t(Pe),e&&t(Al),e&&t(Ae),e&&t(Il),e&&t(Ie),e&&t(Dl),e&&t(ve),e&&t(Ul),e&&t(Hl),e&&t(Zl),e&&t(Yl),e&&t(De),e&&t(Wl),e&&t(jl),e&&t(Ll),e&&t(Xl),e&&t(Se),e&&t(ql),e&&t(Ue),e&&t(Gl),e&&t(He),e&&t(Ql),e&&t(Ze),e&&t(xl),e&&t(Ye),e&&t(gl),e&&t(ei),e&&t(ti),e&&t(ye),e&&t(ii),e&&t(ce),e&&t(ri),e&&t(de),e&&t(oi),e&&t(ke),e&&t(ni),e&&t(Ee),e&&t(pi),e&&t(mi),e&&t(bi),e&&t(vi),e&&t(bt),e&&t(yi),e&&t(vt),e&&t(ci),e&&t(yt),e&&t(di),e&&t(ct),e&&t(ki),e&&t(dt),e&&t(Ei),e&&t(kt),e&&t(wi),e&&t(Et),e&&t(_i),e&&t(wt),e&&t(hi),e&&t(_t),e&&t(Ti),e&&t(ht),e&&t(Bi),e&&t(Tt),e&&t(Ri),e&&t(Bt),e&&t(Mi),e&&t(Rt),e&&t(Oi),e&&t(Mt),e&&t(Ci),e&&t(Ot),e&&t(Fi),e&&t(Ni),e&&t(Pi),e&&t(Ai),e&&t(Ii),e&&t(Di),e&&t(Si),e&&t(Ui),e&&t(Hi),e&&t(Zi),e&&t(Yi),e&&t(Wi),Ps=!1,$r(Ls)}}}var d="stop";function ef(f,w,a){var O=parseInt(f,10),B=parseInt(w,10);return a==="+"?O+B:a==="*"?O*B:a==="-"?O-B:a==="/"?O/B:a==="concat"?parseInt(""+O+B,10):"fubar"}function tf(f){var w=f.pop()**3;return f.unshift(w),f}function lf(f){return f.flatMap(w=>(w+1)**3)}function sf(f){return f.flatMap(w=>Math.round(w**(1/3)))}function Xt(f){return function w(a){if(typeof a=="function")return f=a(f),w;if(a==="stop")return f}}function js(f){var w=f.split("/");return w.length>1?w[0]/w[1]:w[0]}function rf(f,w){return f.filter(a=>w.includes(a))}function ff(f,w,a){var S,P,Z,A,O,B="none",ie="none",U="none",R="none",se="none",re="none",F="none",H="none",fe=[[0,0,0,0],[],[],[],[0]],S,P,Z,A,oe,Y,I,ue,W=[0],b,j="",M,ne=[[0,0,0,0],[],[],[],[0]],ae;ae=c=>{a(20,b=Xt([[Math.floor(Math.random()*6)+1,Math.floor(Math.random()*6)+1,Math.floor(Math.random()*12)+1,Math.floor(Math.random()*20)+1],[],[],[],[c]])),We(),a(14,fe=b("stop"))};const We=()=>{a(1,S=b(d)[0][0]),a(2,P=b(d)[0][1]),a(3,Z=b(d)[0][2]),a(4,A=b(d)[0][3]),a(15,oe=b(d)[1][0]),a(16,Y=b(d)[1][1]),a(17,I=b(d)[1][2]),a(18,ue=b(d)[1][3]),a(5,O=b(d)[2]),b(d)[3],a(19,W=b(d)[4]),a(6,B=a(7,ie=a(8,U=a(9,R="inline")))),a(10,se=a(11,re=a(12,F=a(13,H="none"))))};function pe(){a(6,B=a(7,ie=a(8,U=a(9,R=a(10,se=a(11,re=a(12,F=a(13,H="none")))))))),S!=null&&a(6,B="inline"),P!=null&&a(7,ie="inline"),Z!=null&&a(8,U="inline"),A!=null&&a(9,R="inline"),oe!=null&&a(10,se="inline"),Y!=null&&a(11,re="inline"),I!=null&&a(12,F="inline"),ue!=null&&a(13,H="inline")}var Ct=()=>{a(1,S=b(d)[0][0]),a(2,P=b(d)[0][1]),a(3,Z=b(d)[0][2]),a(4,A=b(d)[0][3]),a(5,O=b(d)[2]),b(d)[3],a(19,W=b(d)[4]),a(15,oe=b(d)[1][0]),a(16,Y=b(d)[1][1]),a(17,I=b(d)[1][2]),a(18,ue=b(d)[1][3])},C=Xt([1,2,3,4]);M=c=>{a(14,fe=c);var y,N=c[4][0],_e;return c[1].length===2&&c[2].length===1&&(_e=c[1],y=ef(c[1][0],c[1][1],c[2][0]),c[0].push(y),c[3].push(y),c[1]=[]),c[1].length===3&&c[0].push(c[1].pop()),y==20&&rf(_e,c[3]).length>0&&(c[4][0]===4?(c[4]=0,a(0,j="You win! "),N=0):(N=N*1,N+=1,a(0,j="           Your score increased to "+N)),ae(N),setTimeout(()=>a(0,j=""),3e3)),Ct(),pe(),c},b=Xt(ne);var L=c=>y=>(y[1].push(y[0].splice(0,1)[0]),y=y,c(M),y),je=c=>y=>(y[1].push(y[0].splice(1,1)[0]),y=y,c(M),y),we=c=>y=>(y[1].push(y[0].splice(2,1)[0]),y=y,c(M),y),X=c=>y=>(y[1].push(y[0].splice(3,1)[0]),y=y,c(M),y);function Ft(){b(c=>[b(d)[0],b(d)[1],["+"],b(d)[3],b(d)[4]].map(y=>y.flat())),b(M)}function Le(){b(c=>[b(d)[0],b(d)[1],["-"],b(d)[3],b(d)[4]].map(y=>y.flat())),b(M)}function z(){b(c=>[b(d)[0],b(d)[1],["*"],b(d)[3],b(d)[4]].map(y=>y.flat())),b(M)}function Nt(){b(c=>[b(d)[0],b(d)[1],["/"],b(d)[3],b(d)[4]].map(y=>y.flat())),b(M)}function me(){b(c=>[b(d)[0],b(d)[1],["concat"],b(d)[3],b(d)[4]].map(y=>y.flat())),b(M)}var h=Xt(3.1415926535),Xe=c=>c**3,ze=c=>c*c,qe=c=>y=>y**c,Ve=c=>y=>1*y+1*c,q=c=>y=>y*c,Pt=c=>y=>c;function Ge(){a(23,h=h(ze))}function V(){a(23,h=h(Xe))}var At=function(y){var N=js(y.target.value);y.keyCode==13&&a(23,h=h(qe(N)))},Je=function(y){y.keyCode==13&&a(23,h=h(Ve(y.target.value)))},Qe=function(y){y.keyCode==13&&a(23,h=h(q(js(y.target.value))))},Ke=function(y){y.keyCode==13&&a(23,h=h(Pt(js(y.target.value))))},xe=`fu = a => {  m2(fu) caused fu to operate on the closure's current value, a.
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
}`,G=`function M (x) {
    return function go (func) {
        if (typeof func === "function") {
            x = func(x);
            return go;
        }
        else if (func === "stop") return x;
    }
};

m2 = M(any value); // The argument can be any JavaScript value
// For the game, the starting value is [ [0,0,0,0], [], [], [] ].`,It=`var mon3 = M([1,2,3,4]);
function g(ar) {
    var x = (ar.pop())**3;
    ar.unshift(x);
  return ar;
};
function g2 (ar) {return (ar.flatMap(v => (v+1)**3))};
function g3 (ar) {return (ar.flatMap(v => Math.round(v**(1/3))))};`,$e=`function runRoll () {
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
};`,J=`function clic0 () {
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
};`,ge=`if (a[1].length === 3) {   
    a[0].push(a[1].pop());  // Returns a clicked third number.
  };`,et=`function sfunc () {
    b0 = b1 = b2 = b3 = b4 = b5 = b6 = b7 = "none";
    if (AA != (undefined && 0)) b0 = "inline";
    if (BB != (undefined && 0)) b1 = "inline";
    if (CC != (undefined && 0)) b2 = "inline";
    if (DD != (undefined && 0)) b3 = "inline";
    if (WW != (undefined && 0)) b4 = "inline";
    if (XX != (undefined && 0)) b5 = "inline";
    if (YY != (undefined && 0)) b6 = "inline";
    if (ZZ != (undefined && 0)) b7 = "inline";
}`,tt=`var update = () => {
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
};`,lt=`function squareFu () {m4 = m4(square)};
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
};`,Q=`var mon = M(2);
mon(v=>v**4)(v=>v+5)(v=>v*2);
// The value of x can be obtained later
mon('stop');  // 42`;b=Xt([[0,0,0,0],[],[],[],[0]]);const Dt=()=>a(22,C=C(tf)),it=()=>a(22,C=C(lf)),K=()=>a(22,C=C(sf)),st=()=>a(22,C=C(c=>[1,2,3,4])),rt=()=>b(L(b)),ft=()=>b(je(b)),ot=()=>b(we(b)),x=()=>b(X(b)),St=()=>ae(W);return f.$$.update=()=>{f.$$.dirty[0]&1&&a(0,j),f.$$.dirty[0]&1},[j,S,P,Z,A,O,B,ie,U,R,se,re,F,H,fe,oe,Y,I,ue,W,b,ae,C,h,L,je,we,X,Ft,Le,z,Nt,me,Ge,V,At,Je,Qe,Ke,xe,G,It,$e,J,ge,et,tt,lt,Q,Dt,it,K,st,rt,ft,ot,x,St]}class uf extends Gr{constructor(w){super();Jr(this,w,ff,gr,Qr,{},null,[-1,-1,-1])}}export{uf as default};
