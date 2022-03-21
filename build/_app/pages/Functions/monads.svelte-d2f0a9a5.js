import{S as _s,i as Ts,s as hs,k as f,e as o,t as m,L as ds,d as t,m as u,c as s,a as v,h as b,f as c,b as Nt,g as i,G as a,M as T,j as F,N as Bs,O as ks,P as Rs,Q as cs}from"../../chunks/vendor-4e552e70.js";function Ms(r){let _,n,R,d,te,U,H,D,L,B,W,Z,M,C,S,j,x,z,O,y,I,P,De,X,kt,Le,le,N,we,Y,We,ke,ie,ct,Ze,oe,Et,h,se,_t,je,re,Tt,xe,fe,ht,ze,ue,dt,Xe,q,Bt,ne,ce=parseFloat(r[20](k)).toFixed(5).toString()+"",Ye,qe,Je,Ge,Ve,J,Rt,Qe,G,Mt,Ke,$e,ge,w,p,V,Ft,Ee,It,Ot,At,Ct,_e,Pi,St,Te,Ut,Ht,Dt,Lt,he,Ni,Wt,de,Zt,jt,xt,zt,Be,Fi,Xt,Re,Yt,qt,Jt,Gt,et,Ii,Vt,tt,Oi,Qt,lt,Ai,Kt,A,Ci,Pt=r[19](k).join(", ")+"",$t,Si,gt,el,tl,ll,Me,Ui,il,Pe,Hi,ol,Ne,Di,sl,Fe,Li,rl,fl,ul,nl,al,ae,Wi,it,Zi,ji,pl,ot,xi,ml,Ie,bl,vl,yl,wl,Q,kl,cl,K,El,_l,$,Tl,hl,g,dl,Bl,ee,zi,Rl,Ml,Pl,Nl,Fl,Oe,Xi,Il,Ae,Yi,Ol,Ce,qi,Al,Se,Ji,Cl,Ue,Gi,Sl,Ul,Hl,Dl,He,Vi,Ll,Wl,Zl,jl,pe,xl,zl,me,Xl,Yl,be,ql,Jl,ve,Gl,Vl,ye,Ql,Kl,$l,gl,ei,st,Qi,ti,rt,Ki,li,ft,$i,ii,ut,gi,oi,nt,eo,si,at,to,ri,pt,lo,fi,mt,io,ui,bt,oo,ni,vt,so,ai,yt,ro,pi,wt,fo,mi,bi,vi,yi,wi,ki,ci,Ei,_i,Ti,hi,di,E,uo,bo;return{c(){_=f(),n=o("br"),R=f(),d=o("div"),te=m("**********************************************************************"),U=f(),H=o("br"),D=o("br"),L=f(),B=o("div"),W=o("p"),Z=m(`
The Recursive Closure "m2" Controls the Action`),C=f(),S=o("br"),j=o("br"),x=o("br"),z=f(),O=o("p"),y=m(`m2 is a recursive function spawned by the function M. Together,they form a closure as follows:
`),I=o("pre"),P=m(r[37]),De=f(),X=o("p"),kt=m(`I call functions returned by M "monads", much to the consternation of self-styled "functional programmers" who scoff at the idea that JavaScript (my beloved favorite language) could possibly have monads such as those defined in the Haskell programming language. I won't elaborate any further, except to point out that neither my monads nor the Haskell monads are Category Theory monads. The Haskell part actually surprises some programmers. Google "hask is a category" if you don't believe me.`),Le=f(),le=o("p"),N=m("In the solitaire version of the game of score below, x will be an array of arrays in the form x =  [ [], [], [], [] ] where x[0] contains four integers simulating a throw of two six-sided, one twelve-sided, and one twenty-sided dice. We begin with x = 3 and some elementary math functions. This serves two purposes:"),we=f(),Y=o("p"),We=m("(1) To show the versitility of M(x). A vast range of functionality can be achieved depending on the value of x and the functions consumed by the monad returned by M(x);"),ke=f(),ie=o("p"),ct=m("(2) To show how M(x) works. A simple x value and simple functions for M(x) to use minimize distractions when comprehending the essence of what goes on. It's very easy to understand for anyone who's familiar with partially evaluated lambda functions and closures."),Ze=f(),oe=o("pre"),Et=m(`\`EXAMPLE:
var mon = M(3); 
var s = 'stop';
mon(s);                   // 3
var fu = a => b => a + b; 
mon(fu(100)); 
mon(s);                   // 103
mon(fu(-61))(s);\`         // 42
`),h=f(),se=o("p"),_t=m("Anonymous lambda function work as well as named functions, but for the following interactive demonstration these variables andnamed functions will be used:"),je=f(),re=o("pre"),Tt=m(r[39]),xe=f(),fe=o("p"),ht=m("These are the demonstration event handlers:"),ze=f(),ue=o("pre"),dt=m(r[45]),Xe=f(),q=o("p"),Bt=m("m4(s) is "),ne=o("span"),Ye=m(ce),qe=f(),Je=o("br"),Ge=o("br"),Ve=f(),J=o("button"),Rt=m("m4(cube)"),Qe=f(),G=o("button"),Mt=m("m4(square)"),Ke=f(),$e=o("br"),ge=o("br"),w=f(),p=o("span"),V=m("To call m4(pow(n)), enter n in the box ->"),Ft=f(),Ee=o("input"),It=f(),Ot=o("br"),At=o("br"),Ct=f(),_e=o("span"),Pi=m("To call m4(add(n)), enter n in the box ->"),St=f(),Te=o("input"),Ut=f(),Ht=o("br"),Dt=o("br"),Lt=f(),he=o("span"),Ni=m("To call m4(mult(n)), enter n in the box ->"),Wt=f(),de=o("input"),Zt=f(),jt=o("br"),xt=o("br"),zt=f(),Be=o("span"),Fi=m("To call m4(reset(n)), enter n in the box ->"),Xt=f(),Re=o("input"),Yt=f(),qt=o("br"),Jt=o("br"),Gt=f(),et=o("p"),Ii=m("Next, x will be an array manipulated by functions designed for that purpose. Here are the functions responsible for the interactive demonstration below:"),Vt=f(),tt=o("pre"),Oi=m(r[38]),Qt=f(),lt=o("p"),Ai=m(`If you click mon3 = mon3(g) four times and the click mon3 = mon3(g3), you will see that mon3(s) returns its original value, [1,2,3,4]. By the way, the "mon3 =" part of "mon3 = mon3(g)" is included solely to trigger updating of browser displays. Svelte doesn't have a virtual DOM, and merely changing objects isn't enough to trigger DOM updates. For example, arr = [1,2,3] doesn't change in the DOM when arr.push(888) is called. arr = arr afterwards or arr = arr.push(888) initially both do the trick.`),Kt=f(),A=o("div"),Ci=m("["),$t=m(Pt),Si=m("]"),gt=f(),el=o("br"),tl=o("br"),ll=f(),Me=o("button"),Ui=m("mon3 = mon3(g)"),il=f(),Pe=o("button"),Hi=m("mon3 = mon3(g2)"),ol=f(),Ne=o("button"),Di=m("mon3 = mon3(g3)"),sl=f(),Fe=o("button"),Li=m("mon3 = mon3(x => [1,2,3,4])"),rl=f(),fl=o("br"),ul=o("br"),nl=o("br"),al=f(),ae=o("p"),Wi=m("Now for the game of score, a game involving four dice and two or three-stage arithmetic computations with the goal of arriving at the number 20. My son Alex taught it to me a decade ago, when he was in middle school. I was also learning the Haskell programming language, so I developed a multiplayer online version with groups of interacting player, a chat box, and a shared-by-the-group todo list controlled by a Haskell WebSockets server backend. The backend could compute all possible solutions, if any existed, to any throw of the dice. It also identified all of the impossible-to-solve rolls. Users could change the default number of dice sides from 6,6,12,and 20 and the goal from the default value of 20. A version of it is online at "),it=o("a"),Zi=m("https://score.schalk.net"),ji=m("."),pl=f(),ot=o("p"),xi=m("This demonstration doesn't work in conjunction with a remote server, nor does it feature any Haskell code. It's just a little solitaire game providing an opportunity to consider the interesting possibilities of recursive closures. Instead of being argunents of function or putting functionality into methods, these monads take care of business by consuming function that that do their work sheltered from what goes on in the global space, now or after future maintainers have added features."),ml=f(),Ie=o("h1"),bl=m(r[0]),vl=f(),yl=o("br"),wl=f(),Q=o("button"),kl=m(r[1]),cl=f(),K=o("button"),El=m(r[2]),_l=f(),$=o("button"),Tl=m(r[3]),hl=f(),g=o("button"),dl=m(r[4]),Bl=f(),ee=o("span"),zi=m("The operator is "),Rl=m(r[5]),Ml=f(),Pl=o("br"),Nl=o("br"),Fl=f(),Oe=o("button"),Xi=m("add"),Il=f(),Ae=o("button"),Yi=m("subtract"),Ol=f(),Ce=o("button"),qi=m("multiply"),Al=f(),Se=o("button"),Ji=m("divide"),Cl=f(),Ue=o("button"),Gi=m("concat"),Sl=f(),Ul=o("br"),Hl=o("br"),Dl=f(),He=o("button"),Vi=m("ROLL"),Ll=f(),Wl=o("br"),Zl=o("br"),jl=f(),pe=o("button"),xl=m(r[14]),zl=f(),me=o("button"),Xl=m(r[15]),Yl=f(),be=o("button"),ql=m(r[16]),Jl=f(),ve=o("button"),Gl=m(r[17]),Vl=f(),ye=o("button"),Ql=m(r[5]),Kl=f(),$l=o("br"),gl=o("br"),ei=f(),st=o("p"),Qi=m('Clicking "ROLL" calls runRoll() which, in turn, calls updateRoll() to re-set HTML variables.'),ti=f(),rt=o("pre"),Ki=m(r[40]),li=f(),ft=o("p"),$i=m('The "x = [ [], [], [], [] ]" format will be maintained throught game play. x[0] simulates the dice roll; x[1] recieves integers that are clicked; x[2] holds the operator; and x[4] contains numbers that are computed. x[4] makes sure at least one computed number is involved in arriving at 20. Here are the first few functions called when a number is clicked:'),ii=f(),ut=o("pre"),gi=m(r[41]),oi=f(),nt=o("p"),eo=m(`The first line of fu() is the calculation result that is generated whenever there are two items in m2(s)[1] and an operator in m2(s)[3]. The intersection is important in fu()'s bottom test. If "intersect", the intersection of m2(s)[1] and m2(s)[3], is empty intersect[0] returns false and the last test in fu fails, even though 20 was produced on the second computation.`),si=f(),at=o("p"),to=m("If no operator has been selected, it's possible to click a third number. The program doesn't complain, it just puts the number back for you with:"),ri=f(),pt=o("pre"),lo=m(r[42]),fi=f(),mt=o("p"),io=m("If you roll the dice and keep clicking on the leftmost number, you'll see the numbers shift back and forth on every try. The first element of m2(s)[0] keeps getting pulled out of the first position and pushed back on the right."),ui=f(),bt=o("p"),oo=m(`sfunc() does some more DOM housekeeping. The buttons with dice number come and go as their CSS display strings are changed back and forth between "none" and "inline". fu() calls sfunc(). Here's how it is defined:`),ni=f(),vt=o("pre"),so=m(r[43]),ai=f(),yt=o("p"),ro=m("After each number is selected and Before calling sFunc(), fu() first updates the HTML variables as follows:"),pi=f(),wt=o("pre"),fo=m(r[44]),mi=f(),bi=o("br"),vi=o("br"),yi=o("br"),wi=o("br"),ki=o("br"),ci=o("br"),Ei=f(),_i=o("br"),Ti=o("br"),hi=o("br"),di=o("br"),this.h()},l(e){ds('[data-svelte="svelte-1iausp9"]',document.head).forEach(t),_=u(e),n=s(e,"BR",{}),R=u(e),d=s(e,"DIV",{});var vo=v(d);te=b(vo,"**********************************************************************"),vo.forEach(t),U=u(e),H=s(e,"BR",{}),D=s(e,"BR",{}),L=u(e),B=s(e,"DIV",{style:!0});var no=v(B);W=s(no,"P",{}),v(W).forEach(t),Z=b(no,`
The Recursive Closure "m2" Controls the Action`),no.forEach(t),C=u(e),S=s(e,"BR",{}),j=s(e,"BR",{}),x=s(e,"BR",{}),z=u(e),O=s(e,"P",{});var yo=v(O);y=b(yo,`m2 is a recursive function spawned by the function M. Together,they form a closure as follows:
`),yo.forEach(t),I=s(e,"PRE",{});var wo=v(I);P=b(wo,r[37]),wo.forEach(t),De=u(e),X=s(e,"P",{});var ko=v(X);kt=b(ko,`I call functions returned by M "monads", much to the consternation of self-styled "functional programmers" who scoff at the idea that JavaScript (my beloved favorite language) could possibly have monads such as those defined in the Haskell programming language. I won't elaborate any further, except to point out that neither my monads nor the Haskell monads are Category Theory monads. The Haskell part actually surprises some programmers. Google "hask is a category" if you don't believe me.`),ko.forEach(t),Le=u(e),le=s(e,"P",{});var co=v(le);N=b(co,"In the solitaire version of the game of score below, x will be an array of arrays in the form x =  [ [], [], [], [] ] where x[0] contains four integers simulating a throw of two six-sided, one twelve-sided, and one twenty-sided dice. We begin with x = 3 and some elementary math functions. This serves two purposes:"),co.forEach(t),we=u(e),Y=s(e,"P",{});var Eo=v(Y);We=b(Eo,"(1) To show the versitility of M(x). A vast range of functionality can be achieved depending on the value of x and the functions consumed by the monad returned by M(x);"),Eo.forEach(t),ke=u(e),ie=s(e,"P",{});var _o=v(ie);ct=b(_o,"(2) To show how M(x) works. A simple x value and simple functions for M(x) to use minimize distractions when comprehending the essence of what goes on. It's very easy to understand for anyone who's familiar with partially evaluated lambda functions and closures."),_o.forEach(t),Ze=u(e),oe=s(e,"PRE",{});var To=v(oe);Et=b(To,`\`EXAMPLE:
var mon = M(3); 
var s = 'stop';
mon(s);                   // 3
var fu = a => b => a + b; 
mon(fu(100)); 
mon(s);                   // 103
mon(fu(-61))(s);\`         // 42
`),To.forEach(t),h=u(e),se=s(e,"P",{});var ho=v(se);_t=b(ho,"Anonymous lambda function work as well as named functions, but for the following interactive demonstration these variables andnamed functions will be used:"),ho.forEach(t),je=u(e),re=s(e,"PRE",{});var Bo=v(re);Tt=b(Bo,r[39]),Bo.forEach(t),xe=u(e),fe=s(e,"P",{});var Ro=v(fe);ht=b(Ro,"These are the demonstration event handlers:"),Ro.forEach(t),ze=u(e),ue=s(e,"PRE",{});var Mo=v(ue);dt=b(Mo,r[45]),Mo.forEach(t),Xe=u(e),q=s(e,"P",{});var ao=v(q);Bt=b(ao,"m4(s) is "),ne=s(ao,"SPAN",{style:!0});var Po=v(ne);Ye=b(Po,ce),Po.forEach(t),ao.forEach(t),qe=u(e),Je=s(e,"BR",{}),Ge=s(e,"BR",{}),Ve=u(e),J=s(e,"BUTTON",{});var No=v(J);Rt=b(No,"m4(cube)"),No.forEach(t),Qe=u(e),G=s(e,"BUTTON",{});var Fo=v(G);Mt=b(Fo,"m4(square)"),Fo.forEach(t),Ke=u(e),$e=s(e,"BR",{}),ge=s(e,"BR",{}),w=u(e),p=s(e,"SPAN",{style:!0});var Io=v(p);V=b(Io,"To call m4(pow(n)), enter n in the box ->"),Io.forEach(t),Ft=u(e),Ee=s(e,"INPUT",{type:!0,style:!0}),It=u(e),Ot=s(e,"BR",{}),At=s(e,"BR",{}),Ct=u(e),_e=s(e,"SPAN",{style:!0});var Oo=v(_e);Pi=b(Oo,"To call m4(add(n)), enter n in the box ->"),Oo.forEach(t),St=u(e),Te=s(e,"INPUT",{type:!0,style:!0}),Ut=u(e),Ht=s(e,"BR",{}),Dt=s(e,"BR",{}),Lt=u(e),he=s(e,"SPAN",{style:!0});var Ao=v(he);Ni=b(Ao,"To call m4(mult(n)), enter n in the box ->"),Ao.forEach(t),Wt=u(e),de=s(e,"INPUT",{type:!0,style:!0}),Zt=u(e),jt=s(e,"BR",{}),xt=s(e,"BR",{}),zt=u(e),Be=s(e,"SPAN",{style:!0});var Co=v(Be);Fi=b(Co,"To call m4(reset(n)), enter n in the box ->"),Co.forEach(t),Xt=u(e),Re=s(e,"INPUT",{type:!0,style:!0}),Yt=u(e),qt=s(e,"BR",{}),Jt=s(e,"BR",{}),Gt=u(e),et=s(e,"P",{});var So=v(et);Ii=b(So,"Next, x will be an array manipulated by functions designed for that purpose. Here are the functions responsible for the interactive demonstration below:"),So.forEach(t),Vt=u(e),tt=s(e,"PRE",{});var Uo=v(tt);Oi=b(Uo,r[38]),Uo.forEach(t),Qt=u(e),lt=s(e,"P",{});var Ho=v(lt);Ai=b(Ho,`If you click mon3 = mon3(g) four times and the click mon3 = mon3(g3), you will see that mon3(s) returns its original value, [1,2,3,4]. By the way, the "mon3 =" part of "mon3 = mon3(g)" is included solely to trigger updating of browser displays. Svelte doesn't have a virtual DOM, and merely changing objects isn't enough to trigger DOM updates. For example, arr = [1,2,3] doesn't change in the DOM when arr.push(888) is called. arr = arr afterwards or arr = arr.push(888) initially both do the trick.`),Ho.forEach(t),Kt=u(e),A=s(e,"DIV",{style:!0});var Bi=v(A);Ci=b(Bi,"["),$t=b(Bi,Pt),Si=b(Bi,"]"),Bi.forEach(t),gt=u(e),el=s(e,"BR",{}),tl=s(e,"BR",{}),ll=u(e),Me=s(e,"BUTTON",{});var Do=v(Me);Ui=b(Do,"mon3 = mon3(g)"),Do.forEach(t),il=u(e),Pe=s(e,"BUTTON",{});var Lo=v(Pe);Hi=b(Lo,"mon3 = mon3(g2)"),Lo.forEach(t),ol=u(e),Ne=s(e,"BUTTON",{});var Wo=v(Ne);Di=b(Wo,"mon3 = mon3(g3)"),Wo.forEach(t),sl=u(e),Fe=s(e,"BUTTON",{});var Zo=v(Fe);Li=b(Zo,"mon3 = mon3(x => [1,2,3,4])"),Zo.forEach(t),rl=u(e),fl=s(e,"BR",{}),ul=s(e,"BR",{}),nl=s(e,"BR",{}),al=u(e),ae=s(e,"P",{});var Ri=v(ae);Wi=b(Ri,"Now for the game of score, a game involving four dice and two or three-stage arithmetic computations with the goal of arriving at the number 20. My son Alex taught it to me a decade ago, when he was in middle school. I was also learning the Haskell programming language, so I developed a multiplayer online version with groups of interacting player, a chat box, and a shared-by-the-group todo list controlled by a Haskell WebSockets server backend. The backend could compute all possible solutions, if any existed, to any throw of the dice. It also identified all of the impossible-to-solve rolls. Users could change the default number of dice sides from 6,6,12,and 20 and the goal from the default value of 20. A version of it is online at "),it=s(Ri,"A",{href:!0});var jo=v(it);Zi=b(jo,"https://score.schalk.net"),jo.forEach(t),ji=b(Ri,"."),Ri.forEach(t),pl=u(e),ot=s(e,"P",{});var xo=v(ot);xi=b(xo,"This demonstration doesn't work in conjunction with a remote server, nor does it feature any Haskell code. It's just a little solitaire game providing an opportunity to consider the interesting possibilities of recursive closures. Instead of being argunents of function or putting functionality into methods, these monads take care of business by consuming function that that do their work sheltered from what goes on in the global space, now or after future maintainers have added features."),xo.forEach(t),ml=u(e),Ie=s(e,"H1",{style:!0});var zo=v(Ie);bl=b(zo,r[0]),zo.forEach(t),vl=u(e),yl=s(e,"BR",{}),wl=u(e),Q=s(e,"BUTTON",{style:!0});var Xo=v(Q);kl=b(Xo,r[1]),Xo.forEach(t),cl=u(e),K=s(e,"BUTTON",{style:!0});var Yo=v(K);El=b(Yo,r[2]),Yo.forEach(t),_l=u(e),$=s(e,"BUTTON",{style:!0});var qo=v($);Tl=b(qo,r[3]),qo.forEach(t),hl=u(e),g=s(e,"BUTTON",{style:!0});var Jo=v(g);dl=b(Jo,r[4]),Jo.forEach(t),Bl=u(e),ee=s(e,"SPAN",{style:!0});var po=v(ee);zi=b(po,"The operator is "),Rl=b(po,r[5]),po.forEach(t),Ml=u(e),Pl=s(e,"BR",{}),Nl=s(e,"BR",{}),Fl=u(e),Oe=s(e,"BUTTON",{});var Go=v(Oe);Xi=b(Go,"add"),Go.forEach(t),Il=u(e),Ae=s(e,"BUTTON",{});var Vo=v(Ae);Yi=b(Vo,"subtract"),Vo.forEach(t),Ol=u(e),Ce=s(e,"BUTTON",{});var Qo=v(Ce);qi=b(Qo,"multiply"),Qo.forEach(t),Al=u(e),Se=s(e,"BUTTON",{});var Ko=v(Se);Ji=b(Ko,"divide"),Ko.forEach(t),Cl=u(e),Ue=s(e,"BUTTON",{});var $o=v(Ue);Gi=b($o,"concat"),$o.forEach(t),Sl=u(e),Ul=s(e,"BR",{}),Hl=s(e,"BR",{}),Dl=u(e),He=s(e,"BUTTON",{});var go=v(He);Vi=b(go,"ROLL"),go.forEach(t),Ll=u(e),Wl=s(e,"BR",{}),Zl=s(e,"BR",{}),jl=u(e),pe=s(e,"BUTTON",{style:!0});var es=v(pe);xl=b(es,r[14]),es.forEach(t),zl=u(e),me=s(e,"BUTTON",{style:!0});var ts=v(me);Xl=b(ts,r[15]),ts.forEach(t),Yl=u(e),be=s(e,"BUTTON",{style:!0});var ls=v(be);ql=b(ls,r[16]),ls.forEach(t),Jl=u(e),ve=s(e,"BUTTON",{style:!0});var is=v(ve);Gl=b(is,r[17]),is.forEach(t),Vl=u(e),ye=s(e,"BUTTON",{style:!0});var os=v(ye);Ql=b(os,r[5]),os.forEach(t),Kl=u(e),$l=s(e,"BR",{}),gl=s(e,"BR",{}),ei=u(e),st=s(e,"P",{});var ss=v(st);Qi=b(ss,'Clicking "ROLL" calls runRoll() which, in turn, calls updateRoll() to re-set HTML variables.'),ss.forEach(t),ti=u(e),rt=s(e,"PRE",{});var rs=v(rt);Ki=b(rs,r[40]),rs.forEach(t),li=u(e),ft=s(e,"P",{});var fs=v(ft);$i=b(fs,'The "x = [ [], [], [], [] ]" format will be maintained throught game play. x[0] simulates the dice roll; x[1] recieves integers that are clicked; x[2] holds the operator; and x[4] contains numbers that are computed. x[4] makes sure at least one computed number is involved in arriving at 20. Here are the first few functions called when a number is clicked:'),fs.forEach(t),ii=u(e),ut=s(e,"PRE",{});var us=v(ut);gi=b(us,r[41]),us.forEach(t),oi=u(e),nt=s(e,"P",{});var ns=v(nt);eo=b(ns,`The first line of fu() is the calculation result that is generated whenever there are two items in m2(s)[1] and an operator in m2(s)[3]. The intersection is important in fu()'s bottom test. If "intersect", the intersection of m2(s)[1] and m2(s)[3], is empty intersect[0] returns false and the last test in fu fails, even though 20 was produced on the second computation.`),ns.forEach(t),si=u(e),at=s(e,"P",{});var as=v(at);to=b(as,"If no operator has been selected, it's possible to click a third number. The program doesn't complain, it just puts the number back for you with:"),as.forEach(t),ri=u(e),pt=s(e,"PRE",{});var ps=v(pt);lo=b(ps,r[42]),ps.forEach(t),fi=u(e),mt=s(e,"P",{});var ms=v(mt);io=b(ms,"If you roll the dice and keep clicking on the leftmost number, you'll see the numbers shift back and forth on every try. The first element of m2(s)[0] keeps getting pulled out of the first position and pushed back on the right."),ms.forEach(t),ui=u(e),bt=s(e,"P",{});var bs=v(bt);oo=b(bs,`sfunc() does some more DOM housekeeping. The buttons with dice number come and go as their CSS display strings are changed back and forth between "none" and "inline". fu() calls sfunc(). Here's how it is defined:`),bs.forEach(t),ni=u(e),vt=s(e,"PRE",{});var vs=v(vt);so=b(vs,r[43]),vs.forEach(t),ai=u(e),yt=s(e,"P",{});var ys=v(yt);ro=b(ys,"After each number is selected and Before calling sFunc(), fu() first updates the HTML variables as follows:"),ys.forEach(t),pi=u(e),wt=s(e,"PRE",{});var ws=v(wt);fo=b(ws,r[44]),ws.forEach(t),mi=u(e),bi=s(e,"BR",{}),vi=s(e,"BR",{}),yi=s(e,"BR",{}),wi=s(e,"BR",{}),ki=s(e,"BR",{}),ci=s(e,"BR",{}),Ei=u(e),_i=s(e,"BR",{}),Ti=s(e,"BR",{}),hi=s(e,"BR",{}),di=s(e,"BR",{}),this.h()},h(){document.title="Monad Encapsulation ",c(B,"font-family","Times New Roman"),c(B,"text-align","center"),c(B,"font-size","32px"),c(ne,"font-size","5 4px"),c(p,"font-size","24px"),Nt(Ee,"type","text"),c(Ee,"width","65px"),c(_e,"font-size","24px"),Nt(Te,"type","number"),c(Te,"width","65px"),c(he,"font-size","24px"),Nt(de,"type","text"),c(de,"width","65px"),c(Be,"font-size","24px"),Nt(Re,"type","number"),c(Re,"width","65px"),c(A,"margin-left","10%"),c(A,"font-size","44px"),c(A,"color","#ddaadd"),Nt(it,"href","https://score.schalk.net"),c(Ie,"color","#ffccff"),c(Q,"display",r[6]),c(K,"display",r[7]),c($,"display",r[8]),c(g,"display",r[9]),c(ee,"margin-left","8%"),c(ee,"font-size","22px"),c(pe,"display",r[10]),c(me,"display",r[11]),c(be,"display",r[12]),c(ve,"display",r[13]),c(ye,"display",r[13])},m(e,l){i(e,_,l),i(e,n,l),i(e,R,l),i(e,d,l),a(d,te),i(e,U,l),i(e,H,l),i(e,D,l),i(e,L,l),i(e,B,l),a(B,W),a(B,Z),i(e,C,l),i(e,S,l),i(e,j,l),i(e,x,l),i(e,z,l),i(e,O,l),a(O,y),i(e,I,l),a(I,P),i(e,De,l),i(e,X,l),a(X,kt),i(e,Le,l),i(e,le,l),a(le,N),i(e,we,l),i(e,Y,l),a(Y,We),i(e,ke,l),i(e,ie,l),a(ie,ct),i(e,Ze,l),i(e,oe,l),a(oe,Et),i(e,h,l),i(e,se,l),a(se,_t),i(e,je,l),i(e,re,l),a(re,Tt),i(e,xe,l),i(e,fe,l),a(fe,ht),i(e,ze,l),i(e,ue,l),a(ue,dt),i(e,Xe,l),i(e,q,l),a(q,Bt),a(q,ne),a(ne,Ye),i(e,qe,l),i(e,Je,l),i(e,Ge,l),i(e,Ve,l),i(e,J,l),a(J,Rt),i(e,Qe,l),i(e,G,l),a(G,Mt),i(e,Ke,l),i(e,$e,l),i(e,ge,l),i(e,w,l),i(e,p,l),a(p,V),i(e,Ft,l),i(e,Ee,l),i(e,It,l),i(e,Ot,l),i(e,At,l),i(e,Ct,l),i(e,_e,l),a(_e,Pi),i(e,St,l),i(e,Te,l),i(e,Ut,l),i(e,Ht,l),i(e,Dt,l),i(e,Lt,l),i(e,he,l),a(he,Ni),i(e,Wt,l),i(e,de,l),i(e,Zt,l),i(e,jt,l),i(e,xt,l),i(e,zt,l),i(e,Be,l),a(Be,Fi),i(e,Xt,l),i(e,Re,l),i(e,Yt,l),i(e,qt,l),i(e,Jt,l),i(e,Gt,l),i(e,et,l),a(et,Ii),i(e,Vt,l),i(e,tt,l),a(tt,Oi),i(e,Qt,l),i(e,lt,l),a(lt,Ai),i(e,Kt,l),i(e,A,l),a(A,Ci),a(A,$t),a(A,Si),i(e,gt,l),i(e,el,l),i(e,tl,l),i(e,ll,l),i(e,Me,l),a(Me,Ui),i(e,il,l),i(e,Pe,l),a(Pe,Hi),i(e,ol,l),i(e,Ne,l),a(Ne,Di),i(e,sl,l),i(e,Fe,l),a(Fe,Li),i(e,rl,l),i(e,fl,l),i(e,ul,l),i(e,nl,l),i(e,al,l),i(e,ae,l),a(ae,Wi),a(ae,it),a(it,Zi),a(ae,ji),i(e,pl,l),i(e,ot,l),a(ot,xi),i(e,ml,l),i(e,Ie,l),a(Ie,bl),i(e,vl,l),i(e,yl,l),i(e,wl,l),i(e,Q,l),a(Q,kl),i(e,cl,l),i(e,K,l),a(K,El),i(e,_l,l),i(e,$,l),a($,Tl),i(e,hl,l),i(e,g,l),a(g,dl),i(e,Bl,l),i(e,ee,l),a(ee,zi),a(ee,Rl),i(e,Ml,l),i(e,Pl,l),i(e,Nl,l),i(e,Fl,l),i(e,Oe,l),a(Oe,Xi),i(e,Il,l),i(e,Ae,l),a(Ae,Yi),i(e,Ol,l),i(e,Ce,l),a(Ce,qi),i(e,Al,l),i(e,Se,l),a(Se,Ji),i(e,Cl,l),i(e,Ue,l),a(Ue,Gi),i(e,Sl,l),i(e,Ul,l),i(e,Hl,l),i(e,Dl,l),i(e,He,l),a(He,Vi),i(e,Ll,l),i(e,Wl,l),i(e,Zl,l),i(e,jl,l),i(e,pe,l),a(pe,xl),i(e,zl,l),i(e,me,l),a(me,Xl),i(e,Yl,l),i(e,be,l),a(be,ql),i(e,Jl,l),i(e,ve,l),a(ve,Gl),i(e,Vl,l),i(e,ye,l),a(ye,Ql),i(e,Kl,l),i(e,$l,l),i(e,gl,l),i(e,ei,l),i(e,st,l),a(st,Qi),i(e,ti,l),i(e,rt,l),a(rt,Ki),i(e,li,l),i(e,ft,l),a(ft,$i),i(e,ii,l),i(e,ut,l),a(ut,gi),i(e,oi,l),i(e,nt,l),a(nt,eo),i(e,si,l),i(e,at,l),a(at,to),i(e,ri,l),i(e,pt,l),a(pt,lo),i(e,fi,l),i(e,mt,l),a(mt,io),i(e,ui,l),i(e,bt,l),a(bt,oo),i(e,ni,l),i(e,vt,l),a(vt,so),i(e,ai,l),i(e,yt,l),a(yt,ro),i(e,pi,l),i(e,wt,l),a(wt,fo),i(e,mi,l),i(e,bi,l),i(e,vi,l),i(e,yi,l),i(e,wi,l),i(e,ki,l),i(e,ci,l),i(e,Ei,l),i(e,_i,l),i(e,Ti,l),i(e,hi,l),i(e,di,l),E=!0,uo||(bo=[T(J,"click",r[31]),T(G,"click",r[32]),T(Ee,"keydown",r[33]),T(Te,"keydown",r[34]),T(de,"keydown",r[35]),T(Re,"keydown",r[36]),T(Me,"click",r[46]),T(Pe,"click",r[47]),T(Ne,"click",r[48]),T(Fe,"click",r[49]),T(Q,"click",r[50]),T(K,"click",r[51]),T($,"click",r[52]),T(g,"click",r[53]),T(Oe,"click",r[26]),T(Ae,"click",r[27]),T(Ce,"click",r[28]),T(Se,"click",r[29]),T(Ue,"click",r[30]),T(He,"click",r[21])],uo=!0)},p(e,l){(!E||l[0]&1048576)&&ce!==(ce=parseFloat(e[20](k)).toFixed(5).toString()+"")&&F(Ye,ce),(!E||l[0]&524288)&&Pt!==(Pt=e[19](k).join(", ")+"")&&F($t,Pt),(!E||l[0]&1)&&F(bl,e[0]),(!E||l[0]&2)&&F(kl,e[1]),(!E||l[0]&64)&&c(Q,"display",e[6]),(!E||l[0]&4)&&F(El,e[2]),(!E||l[0]&128)&&c(K,"display",e[7]),(!E||l[0]&8)&&F(Tl,e[3]),(!E||l[0]&256)&&c($,"display",e[8]),(!E||l[0]&16)&&F(dl,e[4]),(!E||l[0]&512)&&c(g,"display",e[9]),(!E||l[0]&32)&&F(Rl,e[5]),(!E||l[0]&16384)&&F(xl,e[14]),(!E||l[0]&1024)&&c(pe,"display",e[10]),(!E||l[0]&32768)&&F(Xl,e[15]),(!E||l[0]&2048)&&c(me,"display",e[11]),(!E||l[0]&65536)&&F(ql,e[16]),(!E||l[0]&4096)&&c(be,"display",e[12]),(!E||l[0]&131072)&&F(Gl,e[17]),(!E||l[0]&8192)&&c(ve,"display",e[13]),(!E||l[0]&32)&&F(Ql,e[5]),(!E||l[0]&8192)&&c(ye,"display",e[13])},i(e){E||(Bs(()=>{M||(M=ks(B,cs,{},!0)),M.run(1)}),E=!0)},o(e){M||(M=ks(B,cs,{},!1)),M.run(0),E=!1},d(e){e&&t(_),e&&t(n),e&&t(R),e&&t(d),e&&t(U),e&&t(H),e&&t(D),e&&t(L),e&&t(B),e&&M&&M.end(),e&&t(C),e&&t(S),e&&t(j),e&&t(x),e&&t(z),e&&t(O),e&&t(I),e&&t(De),e&&t(X),e&&t(Le),e&&t(le),e&&t(we),e&&t(Y),e&&t(ke),e&&t(ie),e&&t(Ze),e&&t(oe),e&&t(h),e&&t(se),e&&t(je),e&&t(re),e&&t(xe),e&&t(fe),e&&t(ze),e&&t(ue),e&&t(Xe),e&&t(q),e&&t(qe),e&&t(Je),e&&t(Ge),e&&t(Ve),e&&t(J),e&&t(Qe),e&&t(G),e&&t(Ke),e&&t($e),e&&t(ge),e&&t(w),e&&t(p),e&&t(Ft),e&&t(Ee),e&&t(It),e&&t(Ot),e&&t(At),e&&t(Ct),e&&t(_e),e&&t(St),e&&t(Te),e&&t(Ut),e&&t(Ht),e&&t(Dt),e&&t(Lt),e&&t(he),e&&t(Wt),e&&t(de),e&&t(Zt),e&&t(jt),e&&t(xt),e&&t(zt),e&&t(Be),e&&t(Xt),e&&t(Re),e&&t(Yt),e&&t(qt),e&&t(Jt),e&&t(Gt),e&&t(et),e&&t(Vt),e&&t(tt),e&&t(Qt),e&&t(lt),e&&t(Kt),e&&t(A),e&&t(gt),e&&t(el),e&&t(tl),e&&t(ll),e&&t(Me),e&&t(il),e&&t(Pe),e&&t(ol),e&&t(Ne),e&&t(sl),e&&t(Fe),e&&t(rl),e&&t(fl),e&&t(ul),e&&t(nl),e&&t(al),e&&t(ae),e&&t(pl),e&&t(ot),e&&t(ml),e&&t(Ie),e&&t(vl),e&&t(yl),e&&t(wl),e&&t(Q),e&&t(cl),e&&t(K),e&&t(_l),e&&t($),e&&t(hl),e&&t(g),e&&t(Bl),e&&t(ee),e&&t(Ml),e&&t(Pl),e&&t(Nl),e&&t(Fl),e&&t(Oe),e&&t(Il),e&&t(Ae),e&&t(Ol),e&&t(Ce),e&&t(Al),e&&t(Se),e&&t(Cl),e&&t(Ue),e&&t(Sl),e&&t(Ul),e&&t(Hl),e&&t(Dl),e&&t(He),e&&t(Ll),e&&t(Wl),e&&t(Zl),e&&t(jl),e&&t(pe),e&&t(zl),e&&t(me),e&&t(Yl),e&&t(be),e&&t(Jl),e&&t(ve),e&&t(Vl),e&&t(ye),e&&t(Kl),e&&t($l),e&&t(gl),e&&t(ei),e&&t(st),e&&t(ti),e&&t(rt),e&&t(li),e&&t(ft),e&&t(ii),e&&t(ut),e&&t(oi),e&&t(nt),e&&t(si),e&&t(at),e&&t(ri),e&&t(pt),e&&t(fi),e&&t(mt),e&&t(ui),e&&t(bt),e&&t(ni),e&&t(vt),e&&t(ai),e&&t(yt),e&&t(pi),e&&t(wt),e&&t(mi),e&&t(bi),e&&t(vi),e&&t(yi),e&&t(wi),e&&t(ki),e&&t(ci),e&&t(Ei),e&&t(_i),e&&t(Ti),e&&t(hi),e&&t(di),uo=!1,Rs(bo)}}}var k="stop";function Ps(r,_){return r.filter(n=>_.includes(n))}function Ns(r,_,n){var R=parseInt(r,10),d=parseInt(_,10);return n==="+"?R+d:n==="*"?R*d:n==="-"?R-d:n==="/"?R/d:n==="concat"?parseInt(""+R+d,10):"fubar"}function Fs(r){var _=r.pop()**3;return r.unshift(_),r}function Is(r){return r.flatMap(_=>(_+1)**3)}function Os(r){return r.flatMap(_=>Math.round(_**(1/3)))}function Es(r){return JSON.parse(JSON.stringify(r))}function Mi(r){return function _(n){if(typeof n=="function")return r=n(r),_;if(n==="stop")return r}}function mo(r){var _=r.split("/");return console.log(_),_.length>1?_[0]/_[1]:_[0]}function As(r,_,n){var Z,M,C,S,R,d="none",te="none",U="none",H="none",D="none",L="none",B="none",W="none",Z,M,C,S,j,x,z,O,y,I="",P,De=[[0,0,0,0],[],[],[]];P=w=>{var p,V=Ps(w[1],w[3]);return console.log("interSec is",V),console.log("In fu, a is",Es(w)),w[1].length===2&&w[2].length===1&&(console.log("In fu. a[0]",Es(w[0])),p=Ns(w[1][0],w[1][1],w[2][0]),w[0].push(p),w[3].push(p),w[1]=[]),w[1].length===3&&w[0].push(w[1].pop()),p==20&&V[0]&&(n(0,I="Congratulations! You did it."),setTimeout(()=>n(0,I=""),3e3),console.log("Z is",I),X()),le(),Le(),w},y=Mi(De);function X(){n(18,y=Mi([[Math.floor(Math.random()*6)+1,Math.floor(Math.random()*6)+1,Math.floor(Math.random()*12)+1,Math.floor(Math.random()*20)+1],[],[],[]])),kt()}const kt=()=>{n(1,Z=y(k)[0][0]),n(2,M=y(k)[0][1]),n(3,C=y(k)[0][2]),n(4,S=y(k)[0][3]),n(14,j=y(k)[1][0]),n(15,x=y(k)[1][1]),n(16,z=y(k)[1][2]),n(17,O=y(k)[1][3]),n(5,R=y(k)[2]),y(k)[3],n(6,d=n(7,te=n(8,U=n(9,H="inline")))),n(10,D=n(11,L=n(12,B=n(13,W="none"))))};function Le(){n(6,d=n(7,te=n(8,U=n(9,H=n(10,D=n(11,L=n(12,B=n(13,W="none")))))))),Z!=null&&n(6,d="inline"),M!=null&&n(7,te="inline"),C!=null&&n(8,U="inline"),S!=null&&n(9,H="inline"),j!=null&&n(10,D="inline"),x!=null&&n(11,L="inline"),z!=null&&n(12,B="inline"),O!=null&&n(13,W="inline")}var le=()=>{n(1,Z=y(k)[0][0]),n(2,M=y(k)[0][1]),n(3,C=y(k)[0][2]),n(4,S=y(k)[0][3]),n(5,R=y(k)[2]),y(k)[3],n(14,j=y(k)[1][0]),n(15,x=y(k)[1][1]),n(16,z=y(k)[1][2]),n(17,O=y(k)[1][3])},N=Mi([1,2,3,4]),we=w=>p=>(p[1].push(p[0].splice(0,1)[0]),p=p,w(P),p),Y=w=>p=>(p[1].push(p[0].splice(1,1)[0]),p=p,w(P),p),We=w=>p=>(p[1].push(p[0].splice(2,1)[0]),p=p,w(P),p),ke=w=>p=>(p[1].push(p[0].splice(3,1)[0]),p=p,w(P),p);function ie(){y(w=>[y(k)[0],y(k)[1],["+"],y(k)[3]].map(p=>p.flat())),y(P)}function ct(){y(w=>[y(k)[0],y(k)[1],["-"],y(k)[3]].map(p=>p.flat())),y(P)}function Ze(){y(w=>[y(k)[0],y(k)[1],["*"],y(k)[3]].map(p=>p.flat())),y(P)}function oe(){y(w=>[y(k)[0],y(k)[1],["/"],y(k)[3]].map(p=>p.flat())),y(P)}function Et(){y(w=>[y(k)[0],y(k)[1],["concat"],y(k)[3]].map(p=>p.flat())),y(P)}var h=Mi(3.1415926535),se=w=>w**3,_t=w=>w*w,je=w=>p=>p**w,re=w=>p=>1*p+1*w,Tt=w=>p=>p*w,xe=w=>p=>w;function fe(){n(20,h=h(se))}function ht(){n(20,h=h(_t))}var ze=function(p){var V=mo(p.target.value);console.log("p is",V),p.keyCode==13&&n(20,h=h(je(V)))},ue=function(p){p.keyCode==13&&n(20,h=h(re(p.target.value)))},dt=function(p){p.keyCode==13&&n(20,h=h(Tt(mo(p.target.value))))},Xe=function(p){p.keyCode==13&&n(20,h=h(xe(mo(p.target.value))))},q=`function M (x) {
    return function go (func) {
        if (typeof func === "function") {
            x = func(x);
            return go;
        }
        else if (func === "stop") return x;
    }
};

m2 = M(any value); // The argument can be any JavaScript value
// For the game, the starting value is [ [0,0,0,0], [], [], [] ].`,Bt=`var mon3 = M([1,2,3,4]);
function g(ar) {
    var x = (ar.pop())**3;
    ar.unshift(x);
  return ar;
};
function g2 (ar) {return (ar.flatMap(v => (v+1)**3))};
function g3 (ar) {return (ar.flatMap(v => Math.round(v**(1/3))))};`,ne=`var s = 'stop';
var m4 = M(3);   // creates a new monad named "m4".
var cube = x => x**3;
var square = x => x*x;
var pow = n => x => x**n;
var add = n => x => 1*x + 1*n;
var mult = n => x => x * n;
var reset2 = n => x => x = n;`,ce=`function runRoll () {
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
};`,Ye=`function clic0 () {
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
};`,qe=`if (a[1].length === 3) {   
    a[0].push(a[1].pop());  // Returns a clicked third number.
  };`,Je=`function sfunc () {
    b0 = b1 = b2 = b3 = b4 = b5 = b6 = b7 = "none";
    if (AA != (undefined && 0)) b0 = "inline";
    if (BB != (undefined && 0)) b1 = "inline";
    if (CC != (undefined && 0)) b2 = "inline";
    if (DD != (undefined && 0)) b3 = "inline";
    if (WW != (undefined && 0)) b4 = "inline";
    if (XX != (undefined && 0)) b5 = "inline";
    if (YY != (undefined && 0)) b6 = "inline";
    if (ZZ != (undefined && 0)) b7 = "inline";
}`,Ge=`var update = () => {
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
};`,Ve=`function divFraction (x) {
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
};`;const J=()=>n(19,N=N(Fs)),Rt=()=>n(19,N=N(Is)),Qe=()=>n(19,N=N(Os)),G=()=>n(19,N=N(w=>[1,2,3,4])),Mt=()=>y(we(y)),Ke=()=>y(Y(y)),$e=()=>y(We(y)),ge=()=>y(ke(y));return r.$$.update=()=>{r.$$.dirty[0]&1&&n(0,I),r.$$.dirty[0]&1},[I,Z,M,C,S,R,d,te,U,H,D,L,B,W,j,x,z,O,y,N,h,X,we,Y,We,ke,ie,ct,Ze,oe,Et,fe,ht,ze,ue,dt,Xe,q,Bt,ne,ce,Ye,qe,Je,Ge,Ve,J,Rt,Qe,G,Mt,Ke,$e,ge]}class Ss extends _s{constructor(_){super();Ts(this,_,As,Ms,hs,{},null,[-1,-1,-1])}}export{Ss as default};
