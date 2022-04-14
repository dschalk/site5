import{S as Jr,i as Kr,s as Qr,e as s,k as o,t as p,Q as xr,c as r,d as t,m as u,a as v,h as m,b as We,f as k,G as n,g as i,L as h,j as T,M as $r,N as Vr,R as gr,O as Gr}from"../../chunks/vendor-bc30573c.js";function ef(f){let E,a,O,M,I,se,W,B,re,fe,F,oe,Z,Y,P,L,D,ue,j,S,ne,b,A,C,Le,U,Nt,je,ae,N,ke,X,Xe,we,pe,Pt,ze,z,At,_,Ee=parseFloat(f[23](d)).toFixed(5).toString()+"",qe,Ve,Ge,Je,q,It,Ke,V,Dt,Qe,xe,$e,ge,G,St,et,J,tt,lt,it,st,K,Ut,rt,Q,ft,ot,ut,nt,x,c,y,R,_e,zt,qt,Vt,he,zi,Gt,Te,Jt,Kt,Qt,xt,at,qi,$t,pt,Vi,gt,mt,Gi,el,H,Ji,Ht=f[22](d).join(", ")+"",tl,Ki,ll,il,sl,rl,Be,Qi,fl,Re,xi,ol,Me,$i,ul,Oe,gi,nl,al,pl,ml,bl,me,es,bt,ts,ls,vl,vt,is,yl,Ce,ss,cl,dl,$,kl,wl,g,El,_l,ee,hl,Tl,te,Bl,Rl,le,rs,Ml,Ol,Cl,Fl,Nl,Fe,fs,Pl,Ne,os,Al,Pe,us,Il,Ae,ns,Dl,Ie,as,Sl,ie,Ul,Hl,Zl,Yl,Wl,De,ps,Ll,jl,Xl,zl,Se,ms,Zt=f[14][0]+"",ql,Vl,Ue,bs,Yt=f[14][1]+"",Gl,Jl,He,vs,Wt=f[14][2]+"",Kl,Ql,Ze,ys,Lt=f[14][3]+"",xl,$l,Ye,cs,jt=f[14][4]+"",gl,ei,ti,li,be,ii,si,ve,ri,fi,ye,oi,ui,ce,ni,ai,de,pi,mi,bi,vi,yi,yt,ds,ci,ct,ks,di,dt,ws,ki,kt,Es,wi,wt,_s,Ei,Et,hs,_i,_t,Ts,hi,ht,Bs,Ti,Tt,Rs,Bi,Bt,Ms,Ri,Rt,Os,Mi,Mt,Cs,Oi,Ot,Fs,Ci,Ct,Ns,Fi,Ft,Ps,Ni,Pi,Ai,Ii,Di,Si,Ui,Hi,Zi,Yi,Wi,Li,w,As,Xs;return{c(){E=s("link"),a=o(),O=s("br"),M=o(),I=s("div"),se=p("**************************************************************************"),W=o(),B=s("div"),re=s("br"),fe=p(`
The Recursive Closure "m2" Controls the Action`),oe=o(),Z=s("br"),Y=o(),P=s("p"),L=p(`m2 is a recursive function spawned by the function M. Together,they form a closure as follows:
`),D=s("pre"),ue=p(f[40]),j=o(),S=s("p"),ne=p(`I call functions returned by M "monads", much to the consternation of self-styled "functional programmers" who scoff at the idea that JavaScript could possibly have monads such as those defined in the Haskell programming language. Neither my monads nor the Haskell monads are Category Theory monads. The Haskell part actually surprises some programmers. Google "hask is a category" if you don't believe me.`),b=o(),A=s("p"),C=p('A monads created by, say, "monad = M(x)" creates an isolated pipeline allowing nested functions to operate on "x" insulated from any outer scope. For example, you could run:'),Le=o(),U=s("pre"),Nt=p(f[48]),je=o(),ae=s("p"),N=p("In the solitaire version of the game of score below, x will be an array of arrays in the form x =  [ [], [], [], [], [n] ] where x[0] contains four integers simulating a throw of two six-sided, one twelve-sided, and one twenty-sided dice. x[1] and x[3] contain the number selected by the player, x[2] is the selected operator, and x[4] keeps track of the number of successes until the player wins by reaching x[4] = 5. But first, let's consider some simpler examples."),ke=o(),X=s("p"),Xe=p("These are the first interactive demonstration's event handlers:"),we=o(),pe=s("pre"),Pt=p(f[47]),ze=o(),z=s("p"),At=p("m4(s) is "),_=s("span"),qe=p(Ee),Ve=o(),Ge=s("br"),Je=o(),q=s("button"),It=p("m4(cube)"),Ke=o(),V=s("button"),Dt=p("m4(square)"),Qe=o(),xe=s("br"),$e=s("br"),ge=o(),G=s("span"),St=p("To call m4(pow(n)), enter n in the box ->"),et=o(),J=s("input"),tt=o(),lt=s("br"),it=s("br"),st=o(),K=s("span"),Ut=p("To call m4(add(n)), enter n in the box ->"),rt=o(),Q=s("input"),ft=o(),ot=s("br"),ut=s("br"),nt=o(),x=s("span"),c=p("To call m4(mult(n)), enter n in the box ->"),y=o(),R=s("input"),_e=o(),zt=s("br"),qt=s("br"),Vt=o(),he=s("span"),zi=p("To call m4(reset(n)), enter n in the box ->"),Gt=o(),Te=s("input"),Jt=o(),Kt=s("br"),Qt=s("br"),xt=o(),at=s("p"),qi=p("Next, x will be an array manipulated by functions designed for that purpose. Here are the functions responsible for the interactive demonstration below:"),$t=o(),pt=s("pre"),Vi=p(f[41]),gt=o(),mt=s("p"),Gi=p(`If you click mon3 = mon3(g) four times and the click mon3 = mon3(g3), you will see that mon3(s) returns its original value, [1,2,3,4]. By the way, the "mon3 =" part of "mon3 = mon3(g)" is included solely to trigger updating of browser displays. Svelte doesn't have a virtual DOM, and merely changing objects isn't enough to trigger DOM updates. For example, arr = [1,2,3] doesn't change in the DOM when arr.push(888) is called. arr = arr afterwards or arr = arr.push(888) initially both do the trick.`),el=o(),H=s("div"),Ji=p("["),tl=p(Ht),Ki=p("]"),ll=o(),il=s("br"),sl=s("br"),rl=o(),Be=s("button"),Qi=p("mon3 = mon3(g)"),fl=o(),Re=s("button"),xi=p("mon3 = mon3(g2)"),ol=o(),Me=s("button"),$i=p("mon3 = mon3(g3)"),ul=o(),Oe=s("button"),gi=p("mon3 = mon3(x => [1,2,3,4])"),nl=o(),al=s("br"),pl=s("br"),ml=s("br"),bl=o(),me=s("p"),es=p("Now for the game of score, a game involving four dice and two or three-stage arithmetic computations with the goal of arriving at the number 20. My son Alex taught it to me a decade ago, when he was in middle school. I was also learning the Haskell programming language, so I developed a multiplayer online version with groups of interacting player, a chat box, and a shared-by-the-group todo list controlled by a Haskell WebSockets server backend. The backend could compute all possible solutions, if any existed, to any throw of the dice. It also identified all of the impossible-to-solve rolls. Users could change the default number of dice sides from 6,6,12,and 20 and the goal from the default value of 20. A version of it is online at "),bt=s("a"),ts=p("https://score.schalk.net"),ls=p("."),vl=o(),vt=s("p"),is=p("This demonstration doesn't work in conjunction with a remote server, nor does it feature any Haskell code. It's just a little solitaire game providing an opportunity to consider the interesting possibilities of recursive closures. Instead of being argunents of function or global object methods, these monads are functions that consume functions. When the functions consumed by monads have no side effects outside of the monad's closure -- which should always be the case -- maintenance and bug tracking become more manageable. Minimizing side effects inside of monadic closure can help even more."),yl=o(),Ce=s("h3"),ss=p("Score: "),cl=p(f[19]),dl=o(),$=s("button"),kl=p(f[1]),wl=o(),g=s("button"),El=p(f[2]),_l=o(),ee=s("button"),hl=p(f[3]),Tl=o(),te=s("button"),Bl=p(f[4]),Rl=o(),le=s("span"),rs=p("The operator is "),Ml=p(f[5]),Ol=o(),Cl=s("br"),Fl=s("br"),Nl=o(),Fe=s("button"),fs=p("add"),Pl=o(),Ne=s("button"),os=p("subtract"),Al=o(),Pe=s("button"),us=p("multiply"),Il=o(),Ae=s("button"),ns=p("divide"),Dl=o(),Ie=s("button"),as=p("concat"),Sl=o(),ie=s("span"),Ul=p(f[0]),Hl=o(),Zl=s("br"),Yl=s("br"),Wl=o(),De=s("button"),ps=p("ROLL"),Ll=o(),jl=s("br"),Xl=s("br"),zl=o(),Se=s("div"),ms=p("roll: "),ql=p(Zt),Vl=o(),Ue=s("div"),bs=p("selected: "),Gl=p(Yt),Jl=o(),He=s("div"),vs=p("operator: "),Kl=p(Wt),Ql=o(),Ze=s("div"),ys=p("computed: "),xl=p(Lt),$l=o(),Ye=s("div"),cs=p("score: "),gl=p(jt),ei=o(),ti=s("br"),li=o(),be=s("button"),ii=p(f[15]),si=o(),ve=s("button"),ri=p(f[16]),fi=o(),ye=s("button"),oi=p(f[17]),ui=o(),ce=s("button"),ni=p(f[18]),ai=o(),de=s("button"),pi=p(f[5]),mi=o(),bi=s("br"),vi=s("br"),yi=o(),yt=s("p"),ds=p("The function fu() is the brains behing the game of Score. Each time a number is clicked, m2(fu) is called and fu does various things depending on the state of the closures value, x."),ci=o(),ct=s("p"),ks=p("At the end of fu(), two formatting functions are Called. The first displays or hides variables in the DOM and the second updates their values. Here they are:"),di=o(),dt=s("pre"),ws=p(f[39]),ki=o(),kt=s("p"),Es=p('Clicking "ROLL" calls runRoll() which, in turn, calls updateRoll() to re-set HTML variables.'),wi=o(),wt=s("pre"),_s=p(f[42]),Ei=o(),Et=s("p"),hs=p('The "x = [ [], [], [], [], [0] ]" format will be maintained throught game play. x[0] simulates the dice roll; x[1] recieves integers that are clicked; x[2] holds the operator; and x[4] contains numbers that are computed. x[4] makes sure at least one computed number is involved in arriving at 20. Here are the first few functions called when a number is clicked:'),_i=o(),_t=s("pre"),Ts=p(f[43]),hi=o(),ht=s("p"),Bs=p(`The first line of fu() is the calculation result that is generated whenever there are two items in (s)[1] and an operator in m2(s)[3]. The intersection is important in fu()'s bottom test. If "intersect", the intersection of m2(s)[1] and m2(s)[3], is empty intersect[0] returns false and the last test in fu fails, even though 20 was produced on the second computation.`),Ti=o(),Tt=s("p"),Rs=p("If no operator has been selected, it's possible to click a third number. The program doesn't complain, it just puts the number back for you with:"),Bi=o(),Bt=s("pre"),Ms=p(f[44]),Ri=o(),Rt=s("p"),Os=p("If you roll the dice and keep clicking on the leftmost number, you'll see the numbers shift back and forth on every try. The first element of m2(s)[0] keeps getting pulled out of the first position and pushed back on the right."),Mi=o(),Mt=s("p"),Cs=p(`sfunc() does some more DOM housekeeping. The buttons with dice number come and go as their CSS display strings are changed back and forth between "none" and "inline". fu() calls sfunc(). Here's how it is defined:`),Oi=o(),Ot=s("pre"),Fs=p(f[45]),Ci=o(),Ct=s("p"),Ns=p("After each number is selected and Before calling sFunc(), fu() first updates the HTML variables as follows:"),Fi=o(),Ft=s("pre"),Ps=p(f[46]),Ni=o(),Pi=s("br"),Ai=s("br"),Ii=s("br"),Di=s("br"),Si=s("br"),Ui=s("br"),Hi=o(),Zi=s("br"),Yi=s("br"),Wi=s("br"),Li=s("br"),this.h()},l(e){const l=xr('[data-svelte="svelte-1klfhwr"]',document.head);E=r(l,"LINK",{rel:!0,href:!0}),l.forEach(t),a=u(e),O=r(e,"BR",{}),M=u(e),I=r(e,"DIV",{});var zs=v(I);se=m(zs,"**************************************************************************"),zs.forEach(t),W=u(e),B=r(e,"DIV",{style:!0});var Is=v(B);re=r(Is,"BR",{}),fe=m(Is,`
The Recursive Closure "m2" Controls the Action`),Is.forEach(t),oe=u(e),Z=r(e,"BR",{}),Y=u(e),P=r(e,"P",{});var qs=v(P);L=m(qs,`m2 is a recursive function spawned by the function M. Together,they form a closure as follows:
`),qs.forEach(t),D=r(e,"PRE",{});var Vs=v(D);ue=m(Vs,f[40]),Vs.forEach(t),j=u(e),S=r(e,"P",{});var Gs=v(S);ne=m(Gs,`I call functions returned by M "monads", much to the consternation of self-styled "functional programmers" who scoff at the idea that JavaScript could possibly have monads such as those defined in the Haskell programming language. Neither my monads nor the Haskell monads are Category Theory monads. The Haskell part actually surprises some programmers. Google "hask is a category" if you don't believe me.`),Gs.forEach(t),b=u(e),A=r(e,"P",{});var Js=v(A);C=m(Js,'A monads created by, say, "monad = M(x)" creates an isolated pipeline allowing nested functions to operate on "x" insulated from any outer scope. For example, you could run:'),Js.forEach(t),Le=u(e),U=r(e,"PRE",{});var Ks=v(U);Nt=m(Ks,f[48]),Ks.forEach(t),je=u(e),ae=r(e,"P",{});var Qs=v(ae);N=m(Qs,"In the solitaire version of the game of score below, x will be an array of arrays in the form x =  [ [], [], [], [], [n] ] where x[0] contains four integers simulating a throw of two six-sided, one twelve-sided, and one twenty-sided dice. x[1] and x[3] contain the number selected by the player, x[2] is the selected operator, and x[4] keeps track of the number of successes until the player wins by reaching x[4] = 5. But first, let's consider some simpler examples."),Qs.forEach(t),ke=u(e),X=r(e,"P",{});var xs=v(X);Xe=m(xs,"These are the first interactive demonstration's event handlers:"),xs.forEach(t),we=u(e),pe=r(e,"PRE",{});var $s=v(pe);Pt=m($s,f[47]),$s.forEach(t),ze=u(e),z=r(e,"P",{});var Ds=v(z);At=m(Ds,"m4(s) is "),_=r(Ds,"SPAN",{style:!0});var gs=v(_);qe=m(gs,Ee),gs.forEach(t),Ds.forEach(t),Ve=u(e),Ge=r(e,"BR",{}),Je=u(e),q=r(e,"BUTTON",{});var er=v(q);It=m(er,"m4(cube)"),er.forEach(t),Ke=u(e),V=r(e,"BUTTON",{});var tr=v(V);Dt=m(tr,"m4(square)"),tr.forEach(t),Qe=u(e),xe=r(e,"BR",{}),$e=r(e,"BR",{}),ge=u(e),G=r(e,"SPAN",{style:!0});var lr=v(G);St=m(lr,"To call m4(pow(n)), enter n in the box ->"),lr.forEach(t),et=u(e),J=r(e,"INPUT",{type:!0,style:!0}),tt=u(e),lt=r(e,"BR",{}),it=r(e,"BR",{}),st=u(e),K=r(e,"SPAN",{style:!0});var ir=v(K);Ut=m(ir,"To call m4(add(n)), enter n in the box ->"),ir.forEach(t),rt=u(e),Q=r(e,"INPUT",{type:!0,style:!0}),ft=u(e),ot=r(e,"BR",{}),ut=r(e,"BR",{}),nt=u(e),x=r(e,"SPAN",{style:!0});var sr=v(x);c=m(sr,"To call m4(mult(n)), enter n in the box ->"),sr.forEach(t),y=u(e),R=r(e,"INPUT",{type:!0,style:!0}),_e=u(e),zt=r(e,"BR",{}),qt=r(e,"BR",{}),Vt=u(e),he=r(e,"SPAN",{style:!0});var rr=v(he);zi=m(rr,"To call m4(reset(n)), enter n in the box ->"),rr.forEach(t),Gt=u(e),Te=r(e,"INPUT",{type:!0,style:!0}),Jt=u(e),Kt=r(e,"BR",{}),Qt=r(e,"BR",{}),xt=u(e),at=r(e,"P",{});var fr=v(at);qi=m(fr,"Next, x will be an array manipulated by functions designed for that purpose. Here are the functions responsible for the interactive demonstration below:"),fr.forEach(t),$t=u(e),pt=r(e,"PRE",{});var or=v(pt);Vi=m(or,f[41]),or.forEach(t),gt=u(e),mt=r(e,"P",{});var ur=v(mt);Gi=m(ur,`If you click mon3 = mon3(g) four times and the click mon3 = mon3(g3), you will see that mon3(s) returns its original value, [1,2,3,4]. By the way, the "mon3 =" part of "mon3 = mon3(g)" is included solely to trigger updating of browser displays. Svelte doesn't have a virtual DOM, and merely changing objects isn't enough to trigger DOM updates. For example, arr = [1,2,3] doesn't change in the DOM when arr.push(888) is called. arr = arr afterwards or arr = arr.push(888) initially both do the trick.`),ur.forEach(t),el=u(e),H=r(e,"DIV",{style:!0});var ji=v(H);Ji=m(ji,"["),tl=m(ji,Ht),Ki=m(ji,"]"),ji.forEach(t),ll=u(e),il=r(e,"BR",{}),sl=r(e,"BR",{}),rl=u(e),Be=r(e,"BUTTON",{});var nr=v(Be);Qi=m(nr,"mon3 = mon3(g)"),nr.forEach(t),fl=u(e),Re=r(e,"BUTTON",{});var ar=v(Re);xi=m(ar,"mon3 = mon3(g2)"),ar.forEach(t),ol=u(e),Me=r(e,"BUTTON",{});var pr=v(Me);$i=m(pr,"mon3 = mon3(g3)"),pr.forEach(t),ul=u(e),Oe=r(e,"BUTTON",{});var mr=v(Oe);gi=m(mr,"mon3 = mon3(x => [1,2,3,4])"),mr.forEach(t),nl=u(e),al=r(e,"BR",{}),pl=r(e,"BR",{}),ml=r(e,"BR",{}),bl=u(e),me=r(e,"P",{});var Xi=v(me);es=m(Xi,"Now for the game of score, a game involving four dice and two or three-stage arithmetic computations with the goal of arriving at the number 20. My son Alex taught it to me a decade ago, when he was in middle school. I was also learning the Haskell programming language, so I developed a multiplayer online version with groups of interacting player, a chat box, and a shared-by-the-group todo list controlled by a Haskell WebSockets server backend. The backend could compute all possible solutions, if any existed, to any throw of the dice. It also identified all of the impossible-to-solve rolls. Users could change the default number of dice sides from 6,6,12,and 20 and the goal from the default value of 20. A version of it is online at "),bt=r(Xi,"A",{href:!0});var br=v(bt);ts=m(br,"https://score.schalk.net"),br.forEach(t),ls=m(Xi,"."),Xi.forEach(t),vl=u(e),vt=r(e,"P",{});var vr=v(vt);is=m(vr,"This demonstration doesn't work in conjunction with a remote server, nor does it feature any Haskell code. It's just a little solitaire game providing an opportunity to consider the interesting possibilities of recursive closures. Instead of being argunents of function or global object methods, these monads are functions that consume functions. When the functions consumed by monads have no side effects outside of the monad's closure -- which should always be the case -- maintenance and bug tracking become more manageable. Minimizing side effects inside of monadic closure can help even more."),vr.forEach(t),yl=u(e),Ce=r(e,"H3",{});var Ss=v(Ce);ss=m(Ss,"Score: "),cl=m(Ss,f[19]),Ss.forEach(t),dl=u(e),$=r(e,"BUTTON",{style:!0});var yr=v($);kl=m(yr,f[1]),yr.forEach(t),wl=u(e),g=r(e,"BUTTON",{style:!0});var cr=v(g);El=m(cr,f[2]),cr.forEach(t),_l=u(e),ee=r(e,"BUTTON",{style:!0});var dr=v(ee);hl=m(dr,f[3]),dr.forEach(t),Tl=u(e),te=r(e,"BUTTON",{style:!0});var kr=v(te);Bl=m(kr,f[4]),kr.forEach(t),Rl=u(e),le=r(e,"SPAN",{style:!0});var Us=v(le);rs=m(Us,"The operator is "),Ml=m(Us,f[5]),Us.forEach(t),Ol=u(e),Cl=r(e,"BR",{}),Fl=r(e,"BR",{}),Nl=u(e),Fe=r(e,"BUTTON",{});var wr=v(Fe);fs=m(wr,"add"),wr.forEach(t),Pl=u(e),Ne=r(e,"BUTTON",{});var Er=v(Ne);os=m(Er,"subtract"),Er.forEach(t),Al=u(e),Pe=r(e,"BUTTON",{});var _r=v(Pe);us=m(_r,"multiply"),_r.forEach(t),Il=u(e),Ae=r(e,"BUTTON",{});var hr=v(Ae);ns=m(hr,"divide"),hr.forEach(t),Dl=u(e),Ie=r(e,"BUTTON",{});var Tr=v(Ie);as=m(Tr,"concat"),Tr.forEach(t),Sl=u(e),ie=r(e,"SPAN",{style:!0});var Br=v(ie);Ul=m(Br,f[0]),Br.forEach(t),Hl=u(e),Zl=r(e,"BR",{}),Yl=r(e,"BR",{}),Wl=u(e),De=r(e,"BUTTON",{});var Rr=v(De);ps=m(Rr,"ROLL"),Rr.forEach(t),Ll=u(e),jl=r(e,"BR",{}),Xl=r(e,"BR",{}),zl=u(e),Se=r(e,"DIV",{});var Hs=v(Se);ms=m(Hs,"roll: "),ql=m(Hs,Zt),Hs.forEach(t),Vl=u(e),Ue=r(e,"DIV",{});var Zs=v(Ue);bs=m(Zs,"selected: "),Gl=m(Zs,Yt),Zs.forEach(t),Jl=u(e),He=r(e,"DIV",{});var Ys=v(He);vs=m(Ys,"operator: "),Kl=m(Ys,Wt),Ys.forEach(t),Ql=u(e),Ze=r(e,"DIV",{});var Ws=v(Ze);ys=m(Ws,"computed: "),xl=m(Ws,Lt),Ws.forEach(t),$l=u(e),Ye=r(e,"DIV",{});var Ls=v(Ye);cs=m(Ls,"score: "),gl=m(Ls,jt),Ls.forEach(t),ei=u(e),ti=r(e,"BR",{}),li=u(e),be=r(e,"BUTTON",{style:!0});var Mr=v(be);ii=m(Mr,f[15]),Mr.forEach(t),si=u(e),ve=r(e,"BUTTON",{style:!0});var Or=v(ve);ri=m(Or,f[16]),Or.forEach(t),fi=u(e),ye=r(e,"BUTTON",{style:!0});var Cr=v(ye);oi=m(Cr,f[17]),Cr.forEach(t),ui=u(e),ce=r(e,"BUTTON",{style:!0});var Fr=v(ce);ni=m(Fr,f[18]),Fr.forEach(t),ai=u(e),de=r(e,"BUTTON",{style:!0});var Nr=v(de);pi=m(Nr,f[5]),Nr.forEach(t),mi=u(e),bi=r(e,"BR",{}),vi=r(e,"BR",{}),yi=u(e),yt=r(e,"P",{});var Pr=v(yt);ds=m(Pr,"The function fu() is the brains behing the game of Score. Each time a number is clicked, m2(fu) is called and fu does various things depending on the state of the closures value, x."),Pr.forEach(t),ci=u(e),ct=r(e,"P",{});var Ar=v(ct);ks=m(Ar,"At the end of fu(), two formatting functions are Called. The first displays or hides variables in the DOM and the second updates their values. Here they are:"),Ar.forEach(t),di=u(e),dt=r(e,"PRE",{});var Ir=v(dt);ws=m(Ir,f[39]),Ir.forEach(t),ki=u(e),kt=r(e,"P",{});var Dr=v(kt);Es=m(Dr,'Clicking "ROLL" calls runRoll() which, in turn, calls updateRoll() to re-set HTML variables.'),Dr.forEach(t),wi=u(e),wt=r(e,"PRE",{});var Sr=v(wt);_s=m(Sr,f[42]),Sr.forEach(t),Ei=u(e),Et=r(e,"P",{});var Ur=v(Et);hs=m(Ur,'The "x = [ [], [], [], [], [0] ]" format will be maintained throught game play. x[0] simulates the dice roll; x[1] recieves integers that are clicked; x[2] holds the operator; and x[4] contains numbers that are computed. x[4] makes sure at least one computed number is involved in arriving at 20. Here are the first few functions called when a number is clicked:'),Ur.forEach(t),_i=u(e),_t=r(e,"PRE",{});var Hr=v(_t);Ts=m(Hr,f[43]),Hr.forEach(t),hi=u(e),ht=r(e,"P",{});var Zr=v(ht);Bs=m(Zr,`The first line of fu() is the calculation result that is generated whenever there are two items in (s)[1] and an operator in m2(s)[3]. The intersection is important in fu()'s bottom test. If "intersect", the intersection of m2(s)[1] and m2(s)[3], is empty intersect[0] returns false and the last test in fu fails, even though 20 was produced on the second computation.`),Zr.forEach(t),Ti=u(e),Tt=r(e,"P",{});var Yr=v(Tt);Rs=m(Yr,"If no operator has been selected, it's possible to click a third number. The program doesn't complain, it just puts the number back for you with:"),Yr.forEach(t),Bi=u(e),Bt=r(e,"PRE",{});var Wr=v(Bt);Ms=m(Wr,f[44]),Wr.forEach(t),Ri=u(e),Rt=r(e,"P",{});var Lr=v(Rt);Os=m(Lr,"If you roll the dice and keep clicking on the leftmost number, you'll see the numbers shift back and forth on every try. The first element of m2(s)[0] keeps getting pulled out of the first position and pushed back on the right."),Lr.forEach(t),Mi=u(e),Mt=r(e,"P",{});var jr=v(Mt);Cs=m(jr,`sfunc() does some more DOM housekeeping. The buttons with dice number come and go as their CSS display strings are changed back and forth between "none" and "inline". fu() calls sfunc(). Here's how it is defined:`),jr.forEach(t),Oi=u(e),Ot=r(e,"PRE",{});var Xr=v(Ot);Fs=m(Xr,f[45]),Xr.forEach(t),Ci=u(e),Ct=r(e,"P",{});var zr=v(Ct);Ns=m(zr,"After each number is selected and Before calling sFunc(), fu() first updates the HTML variables as follows:"),zr.forEach(t),Fi=u(e),Ft=r(e,"PRE",{});var qr=v(Ft);Ps=m(qr,f[46]),qr.forEach(t),Ni=u(e),Pi=r(e,"BR",{}),Ai=r(e,"BR",{}),Ii=r(e,"BR",{}),Di=r(e,"BR",{}),Si=r(e,"BR",{}),Ui=r(e,"BR",{}),Hi=u(e),Zi=r(e,"BR",{}),Yi=r(e,"BR",{}),Wi=r(e,"BR",{}),Li=r(e,"BR",{}),this.h()},h(){document.title="Recursive Closures ",We(E,"rel","stylesheet"),We(E,"href","../Functions/style.css"),k(B,"font-family","Times New Roman"),k(B,"text-align","center"),k(B,"font-size","32px"),k(_,"font-size","54px"),k(G,"font-size","24px"),We(J,"type","text"),k(J,"width","65px"),k(K,"font-size","24px"),We(Q,"type","number"),k(Q,"width","65px"),k(x,"font-size","24px"),We(R,"type","text"),k(R,"width","65px"),k(he,"font-size","24px"),We(Te,"type","number"),k(Te,"width","65px"),k(H,"margin-left","10%"),k(H,"font-size","44px"),k(H,"color","#ddaadd"),We(bt,"href","https://score.schalk.net"),k($,"display",f[6]),k(g,"display",f[7]),k(ee,"display",f[8]),k(te,"display",f[9]),k(le,"margin-left","8%"),k(le,"font-size","22px"),k(ie,"margin-left","20px"),k(ie,"color","#bbbbff"),k(ie,"font-size","28px"),k(be,"display",f[10]),k(ve,"display",f[11]),k(ye,"display",f[12]),k(ce,"display",f[13]),k(de,"display",f[13])},m(e,l){n(document.head,E),i(e,a,l),i(e,O,l),i(e,M,l),i(e,I,l),n(I,se),i(e,W,l),i(e,B,l),n(B,re),n(B,fe),i(e,oe,l),i(e,Z,l),i(e,Y,l),i(e,P,l),n(P,L),i(e,D,l),n(D,ue),i(e,j,l),i(e,S,l),n(S,ne),i(e,b,l),i(e,A,l),n(A,C),i(e,Le,l),i(e,U,l),n(U,Nt),i(e,je,l),i(e,ae,l),n(ae,N),i(e,ke,l),i(e,X,l),n(X,Xe),i(e,we,l),i(e,pe,l),n(pe,Pt),i(e,ze,l),i(e,z,l),n(z,At),n(z,_),n(_,qe),i(e,Ve,l),i(e,Ge,l),i(e,Je,l),i(e,q,l),n(q,It),i(e,Ke,l),i(e,V,l),n(V,Dt),i(e,Qe,l),i(e,xe,l),i(e,$e,l),i(e,ge,l),i(e,G,l),n(G,St),i(e,et,l),i(e,J,l),i(e,tt,l),i(e,lt,l),i(e,it,l),i(e,st,l),i(e,K,l),n(K,Ut),i(e,rt,l),i(e,Q,l),i(e,ft,l),i(e,ot,l),i(e,ut,l),i(e,nt,l),i(e,x,l),n(x,c),i(e,y,l),i(e,R,l),i(e,_e,l),i(e,zt,l),i(e,qt,l),i(e,Vt,l),i(e,he,l),n(he,zi),i(e,Gt,l),i(e,Te,l),i(e,Jt,l),i(e,Kt,l),i(e,Qt,l),i(e,xt,l),i(e,at,l),n(at,qi),i(e,$t,l),i(e,pt,l),n(pt,Vi),i(e,gt,l),i(e,mt,l),n(mt,Gi),i(e,el,l),i(e,H,l),n(H,Ji),n(H,tl),n(H,Ki),i(e,ll,l),i(e,il,l),i(e,sl,l),i(e,rl,l),i(e,Be,l),n(Be,Qi),i(e,fl,l),i(e,Re,l),n(Re,xi),i(e,ol,l),i(e,Me,l),n(Me,$i),i(e,ul,l),i(e,Oe,l),n(Oe,gi),i(e,nl,l),i(e,al,l),i(e,pl,l),i(e,ml,l),i(e,bl,l),i(e,me,l),n(me,es),n(me,bt),n(bt,ts),n(me,ls),i(e,vl,l),i(e,vt,l),n(vt,is),i(e,yl,l),i(e,Ce,l),n(Ce,ss),n(Ce,cl),i(e,dl,l),i(e,$,l),n($,kl),i(e,wl,l),i(e,g,l),n(g,El),i(e,_l,l),i(e,ee,l),n(ee,hl),i(e,Tl,l),i(e,te,l),n(te,Bl),i(e,Rl,l),i(e,le,l),n(le,rs),n(le,Ml),i(e,Ol,l),i(e,Cl,l),i(e,Fl,l),i(e,Nl,l),i(e,Fe,l),n(Fe,fs),i(e,Pl,l),i(e,Ne,l),n(Ne,os),i(e,Al,l),i(e,Pe,l),n(Pe,us),i(e,Il,l),i(e,Ae,l),n(Ae,ns),i(e,Dl,l),i(e,Ie,l),n(Ie,as),i(e,Sl,l),i(e,ie,l),n(ie,Ul),i(e,Hl,l),i(e,Zl,l),i(e,Yl,l),i(e,Wl,l),i(e,De,l),n(De,ps),i(e,Ll,l),i(e,jl,l),i(e,Xl,l),i(e,zl,l),i(e,Se,l),n(Se,ms),n(Se,ql),i(e,Vl,l),i(e,Ue,l),n(Ue,bs),n(Ue,Gl),i(e,Jl,l),i(e,He,l),n(He,vs),n(He,Kl),i(e,Ql,l),i(e,Ze,l),n(Ze,ys),n(Ze,xl),i(e,$l,l),i(e,Ye,l),n(Ye,cs),n(Ye,gl),i(e,ei,l),i(e,ti,l),i(e,li,l),i(e,be,l),n(be,ii),i(e,si,l),i(e,ve,l),n(ve,ri),i(e,fi,l),i(e,ye,l),n(ye,oi),i(e,ui,l),i(e,ce,l),n(ce,ni),i(e,ai,l),i(e,de,l),n(de,pi),i(e,mi,l),i(e,bi,l),i(e,vi,l),i(e,yi,l),i(e,yt,l),n(yt,ds),i(e,ci,l),i(e,ct,l),n(ct,ks),i(e,di,l),i(e,dt,l),n(dt,ws),i(e,ki,l),i(e,kt,l),n(kt,Es),i(e,wi,l),i(e,wt,l),n(wt,_s),i(e,Ei,l),i(e,Et,l),n(Et,hs),i(e,_i,l),i(e,_t,l),n(_t,Ts),i(e,hi,l),i(e,ht,l),n(ht,Bs),i(e,Ti,l),i(e,Tt,l),n(Tt,Rs),i(e,Bi,l),i(e,Bt,l),n(Bt,Ms),i(e,Ri,l),i(e,Rt,l),n(Rt,Os),i(e,Mi,l),i(e,Mt,l),n(Mt,Cs),i(e,Oi,l),i(e,Ot,l),n(Ot,Fs),i(e,Ci,l),i(e,Ct,l),n(Ct,Ns),i(e,Fi,l),i(e,Ft,l),n(Ft,Ps),i(e,Ni,l),i(e,Pi,l),i(e,Ai,l),i(e,Ii,l),i(e,Di,l),i(e,Si,l),i(e,Ui,l),i(e,Hi,l),i(e,Zi,l),i(e,Yi,l),i(e,Wi,l),i(e,Li,l),w=!0,As||(Xs=[h(q,"click",f[34]),h(V,"click",f[33]),h(J,"keydown",f[35]),h(Q,"keydown",f[36]),h(R,"keydown",f[37]),h(Te,"keydown",f[38]),h(Be,"click",f[49]),h(Re,"click",f[50]),h(Me,"click",f[51]),h(Oe,"click",f[52]),h($,"click",f[53]),h(g,"click",f[54]),h(ee,"click",f[55]),h(te,"click",f[56]),h(Fe,"click",f[28]),h(Ne,"click",f[29]),h(Pe,"click",f[30]),h(Ae,"click",f[31]),h(Ie,"click",f[32]),h(De,"click",f[57])],As=!0)},p(e,l){(!w||l[0]&8388608)&&Ee!==(Ee=parseFloat(e[23](d)).toFixed(5).toString()+"")&&T(qe,Ee),(!w||l[0]&4194304)&&Ht!==(Ht=e[22](d).join(", ")+"")&&T(tl,Ht),(!w||l[0]&524288)&&T(cl,e[19]),(!w||l[0]&2)&&T(kl,e[1]),(!w||l[0]&64)&&k($,"display",e[6]),(!w||l[0]&4)&&T(El,e[2]),(!w||l[0]&128)&&k(g,"display",e[7]),(!w||l[0]&8)&&T(hl,e[3]),(!w||l[0]&256)&&k(ee,"display",e[8]),(!w||l[0]&16)&&T(Bl,e[4]),(!w||l[0]&512)&&k(te,"display",e[9]),(!w||l[0]&32)&&T(Ml,e[5]),(!w||l[0]&1)&&T(Ul,e[0]),(!w||l[0]&16384)&&Zt!==(Zt=e[14][0]+"")&&T(ql,Zt),(!w||l[0]&16384)&&Yt!==(Yt=e[14][1]+"")&&T(Gl,Yt),(!w||l[0]&16384)&&Wt!==(Wt=e[14][2]+"")&&T(Kl,Wt),(!w||l[0]&16384)&&Lt!==(Lt=e[14][3]+"")&&T(xl,Lt),(!w||l[0]&16384)&&jt!==(jt=e[14][4]+"")&&T(gl,jt),(!w||l[0]&32768)&&T(ii,e[15]),(!w||l[0]&1024)&&k(be,"display",e[10]),(!w||l[0]&65536)&&T(ri,e[16]),(!w||l[0]&2048)&&k(ve,"display",e[11]),(!w||l[0]&131072)&&T(oi,e[17]),(!w||l[0]&4096)&&k(ye,"display",e[12]),(!w||l[0]&262144)&&T(ni,e[18]),(!w||l[0]&8192)&&k(ce,"display",e[13]),(!w||l[0]&32)&&T(pi,e[5]),(!w||l[0]&8192)&&k(de,"display",e[13])},i(e){w||($r(()=>{F||(F=Vr(B,Gr,{},!0)),F.run(1)}),w=!0)},o(e){F||(F=Vr(B,Gr,{},!1)),F.run(0),w=!1},d(e){t(E),e&&t(a),e&&t(O),e&&t(M),e&&t(I),e&&t(W),e&&t(B),e&&F&&F.end(),e&&t(oe),e&&t(Z),e&&t(Y),e&&t(P),e&&t(D),e&&t(j),e&&t(S),e&&t(b),e&&t(A),e&&t(Le),e&&t(U),e&&t(je),e&&t(ae),e&&t(ke),e&&t(X),e&&t(we),e&&t(pe),e&&t(ze),e&&t(z),e&&t(Ve),e&&t(Ge),e&&t(Je),e&&t(q),e&&t(Ke),e&&t(V),e&&t(Qe),e&&t(xe),e&&t($e),e&&t(ge),e&&t(G),e&&t(et),e&&t(J),e&&t(tt),e&&t(lt),e&&t(it),e&&t(st),e&&t(K),e&&t(rt),e&&t(Q),e&&t(ft),e&&t(ot),e&&t(ut),e&&t(nt),e&&t(x),e&&t(y),e&&t(R),e&&t(_e),e&&t(zt),e&&t(qt),e&&t(Vt),e&&t(he),e&&t(Gt),e&&t(Te),e&&t(Jt),e&&t(Kt),e&&t(Qt),e&&t(xt),e&&t(at),e&&t($t),e&&t(pt),e&&t(gt),e&&t(mt),e&&t(el),e&&t(H),e&&t(ll),e&&t(il),e&&t(sl),e&&t(rl),e&&t(Be),e&&t(fl),e&&t(Re),e&&t(ol),e&&t(Me),e&&t(ul),e&&t(Oe),e&&t(nl),e&&t(al),e&&t(pl),e&&t(ml),e&&t(bl),e&&t(me),e&&t(vl),e&&t(vt),e&&t(yl),e&&t(Ce),e&&t(dl),e&&t($),e&&t(wl),e&&t(g),e&&t(_l),e&&t(ee),e&&t(Tl),e&&t(te),e&&t(Rl),e&&t(le),e&&t(Ol),e&&t(Cl),e&&t(Fl),e&&t(Nl),e&&t(Fe),e&&t(Pl),e&&t(Ne),e&&t(Al),e&&t(Pe),e&&t(Il),e&&t(Ae),e&&t(Dl),e&&t(Ie),e&&t(Sl),e&&t(ie),e&&t(Hl),e&&t(Zl),e&&t(Yl),e&&t(Wl),e&&t(De),e&&t(Ll),e&&t(jl),e&&t(Xl),e&&t(zl),e&&t(Se),e&&t(Vl),e&&t(Ue),e&&t(Jl),e&&t(He),e&&t(Ql),e&&t(Ze),e&&t($l),e&&t(Ye),e&&t(ei),e&&t(ti),e&&t(li),e&&t(be),e&&t(si),e&&t(ve),e&&t(fi),e&&t(ye),e&&t(ui),e&&t(ce),e&&t(ai),e&&t(de),e&&t(mi),e&&t(bi),e&&t(vi),e&&t(yi),e&&t(yt),e&&t(ci),e&&t(ct),e&&t(di),e&&t(dt),e&&t(ki),e&&t(kt),e&&t(wi),e&&t(wt),e&&t(Ei),e&&t(Et),e&&t(_i),e&&t(_t),e&&t(hi),e&&t(ht),e&&t(Ti),e&&t(Tt),e&&t(Bi),e&&t(Bt),e&&t(Ri),e&&t(Rt),e&&t(Mi),e&&t(Mt),e&&t(Oi),e&&t(Ot),e&&t(Ci),e&&t(Ct),e&&t(Fi),e&&t(Ft),e&&t(Ni),e&&t(Pi),e&&t(Ai),e&&t(Ii),e&&t(Di),e&&t(Si),e&&t(Ui),e&&t(Hi),e&&t(Zi),e&&t(Yi),e&&t(Wi),e&&t(Li),As=!1,gr(Xs)}}}var d="stop";function tf(f,E,a){var O=parseInt(f,10),M=parseInt(E,10);return a==="+"?O+M:a==="*"?O*M:a==="-"?O-M:a==="/"?O/M:a==="concat"?parseInt(""+O+M,10):"fubar"}function lf(f){var E=f.pop()**3;return f.unshift(E),f}function sf(f){return f.flatMap(E=>(E+1)**3)}function rf(f){return f.flatMap(E=>Math.round(E**(1/3)))}function Xt(f){return function E(a){if(typeof a=="function")return f=a(f),E;if(a==="stop")return f}}function js(f){var E=f.split("/");return E.length>1?E[0]/E[1]:E[0]}function ff(f,E){return f.filter(a=>E.includes(a))}function of(f,E,a){var Z,Y,P,L,O,M="none",I="none",se="none",W="none",B="none",re="none",fe="none",F="none",oe=[[0,0,0,0],[],[],[],[0]],Z,Y,P,L,D,ue,j,S,ne=[0],b,A="",C,Le=[[0,0,0,0],[],[],[],[0]],U;U=c=>{a(20,b=Xt([[Math.floor(Math.random()*6)+1,Math.floor(Math.random()*6)+1,Math.floor(Math.random()*12)+1,Math.floor(Math.random()*20)+1],[],[],[],[c]])),Nt(),a(14,oe=b("stop"))};const Nt=()=>{a(1,Z=b(d)[0][0]),a(2,Y=b(d)[0][1]),a(3,P=b(d)[0][2]),a(4,L=b(d)[0][3]),a(15,D=b(d)[1][0]),a(16,ue=b(d)[1][1]),a(17,j=b(d)[1][2]),a(18,S=b(d)[1][3]),a(5,O=b(d)[2]),b(d)[3],a(19,ne=b(d)[4]),a(6,M=a(7,I=a(8,se=a(9,W="inline")))),a(10,B=a(11,re=a(12,fe=a(13,F="none"))))};function je(){a(6,M=a(7,I=a(8,se=a(9,W=a(10,B=a(11,re=a(12,fe=a(13,F="none")))))))),Z!=null&&a(6,M="inline"),Y!=null&&a(7,I="inline"),P!=null&&a(8,se="inline"),L!=null&&a(9,W="inline"),D!=null&&a(10,B="inline"),ue!=null&&a(11,re="inline"),j!=null&&a(12,fe="inline"),S!=null&&a(13,F="inline")}var ae=()=>{a(1,Z=b(d)[0][0]),a(2,Y=b(d)[0][1]),a(3,P=b(d)[0][2]),a(4,L=b(d)[0][3]),a(5,O=b(d)[2]),b(d)[3],a(19,ne=b(d)[4]),a(15,D=b(d)[1][0]),a(16,ue=b(d)[1][1]),a(17,j=b(d)[1][2]),a(18,S=b(d)[1][3])},N=Xt([1,2,3,4]);C=c=>{a(14,oe=c);var y,R=c[4][0],_e;return c[1].length===2&&c[2].length===1&&(_e=c[1],y=tf(c[1][0],c[1][1],c[2][0]),c[0].push(y),c[3].push(y),c[1]=[]),c[1].length===3&&c[0].push(c[1].pop()),y==20&&ff(_e,c[3]).length>0&&(c[4][0]===4?(c[4]=0,a(0,A="You win! "),R=0):(R=R*1,R+=1,a(0,A="           Your score increased to "+R)),U(R),setTimeout(()=>a(0,A=""),3e3)),ae(),je(),c},b=Xt(Le);var ke=c=>y=>(y[1].push(y[0].splice(0,1)[0]),y=y,c(C),y),X=c=>y=>(y[1].push(y[0].splice(1,1)[0]),y=y,c(C),y),Xe=c=>y=>(y[1].push(y[0].splice(2,1)[0]),y=y,c(C),y),we=c=>y=>(y[1].push(y[0].splice(3,1)[0]),y=y,c(C),y);function pe(){b(c=>[b(d)[0],b(d)[1],["+"],b(d)[3],b(d)[4]].map(y=>y.flat())),b(C)}function Pt(){b(c=>[b(d)[0],b(d)[1],["-"],b(d)[3],b(d)[4]].map(y=>y.flat())),b(C)}function ze(){b(c=>[b(d)[0],b(d)[1],["*"],b(d)[3],b(d)[4]].map(y=>y.flat())),b(C)}function z(){b(c=>[b(d)[0],b(d)[1],["/"],b(d)[3],b(d)[4]].map(y=>y.flat())),b(C)}function At(){b(c=>[b(d)[0],b(d)[1],["concat"],b(d)[3],b(d)[4]].map(y=>y.flat())),b(C)}var _=Xt(3.1415926535),Ee=c=>c**3,qe=c=>c*c,Ve=c=>y=>y**c,Ge=c=>y=>1*y+1*c,Je=c=>y=>y*c,q=c=>y=>c;function It(){a(23,_=_(qe))}function Ke(){a(23,_=_(Ee))}var V=function(y){var R=js(y.target.value);y.keyCode==13&&a(23,_=_(Ve(R)))},Dt=function(y){y.keyCode==13&&a(23,_=_(Ge(y.target.value)))},Qe=function(y){y.keyCode==13&&a(23,_=_(Je(js(y.target.value))))},xe=function(y){y.keyCode==13&&a(23,_=_(q(js(y.target.value))))},$e=`fu = a => {  m2(fu) caused fu to operate on the closure's current value, a.
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
}`,ge=`function M (x) {
    return function go (func) {
        if (typeof func === "function") {
            x = func(x);
            return go;
        }
        else if (func === "stop") return x;
    }
};

m2 = M(any value); // The argument can be any JavaScript value
// For the game, the starting value is [ [0,0,0,0], [], [], [] ].`,G=`var mon3 = M([1,2,3,4]);
function g(ar) {
    var x = (ar.pop())**3;
    ar.unshift(x);
  return ar;
};
function g2 (ar) {return (ar.flatMap(v => (v+1)**3))};
function g3 (ar) {return (ar.flatMap(v => Math.round(v**(1/3))))};`,St=`function runRoll () {
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
};`,et=`function clic0 () {
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
};`,J=`if (a[1].length === 3) {   
    a[0].push(a[1].pop());  // Returns a clicked third number.
  };`,tt=`function sfunc () {
    b0 = b1 = b2 = b3 = b4 = b5 = b6 = b7 = "none";
    if (AA != (undefined && 0)) b0 = "inline";
    if (BB != (undefined && 0)) b1 = "inline";
    if (CC != (undefined && 0)) b2 = "inline";
    if (DD != (undefined && 0)) b3 = "inline";
    if (WW != (undefined && 0)) b4 = "inline";
    if (XX != (undefined && 0)) b5 = "inline";
    if (YY != (undefined && 0)) b6 = "inline";
    if (ZZ != (undefined && 0)) b7 = "inline";
}`,lt=`var update = () => {
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
};`,it=`function squareFu () {m4 = m4(square)};
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
};`,st=`var mon = M(2);
mon(v=>v**4)(v=>v+5)(v=>v*2);
// The value of x can be obtained later
mon('stop');  // 42`;b=Xt([[0,0,0,0],[],[],[],[0]]);const K=()=>a(22,N=N(lf)),Ut=()=>a(22,N=N(sf)),rt=()=>a(22,N=N(rf)),Q=()=>a(22,N=N(c=>[1,2,3,4])),ft=()=>b(ke(b)),ot=()=>b(X(b)),ut=()=>b(Xe(b)),nt=()=>b(we(b)),x=()=>U(ne);return f.$$.update=()=>{f.$$.dirty[0]&1&&a(0,A),f.$$.dirty[0]&1},[A,Z,Y,P,L,O,M,I,se,W,B,re,fe,F,oe,D,ue,j,S,ne,b,U,N,_,ke,X,Xe,we,pe,Pt,ze,z,At,It,Ke,V,Dt,Qe,xe,$e,ge,G,St,et,J,tt,lt,it,st,K,Ut,rt,Q,ft,ot,ut,nt,x]}class nf extends Jr{constructor(E){super();Kr(this,E,of,ef,Qr,{},null,[-1,-1,-1])}}export{nf as default};
