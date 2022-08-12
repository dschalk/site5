import{S as il,i as rl,s as al,F as ul,a as f,l as r,r as h,K as fl,h as t,c as p,m as a,n as c,u as b,q as y,p as K,b as s,G as m,P as os,Q as _,R as nl,v as S,H as pl,I as ml,J as hl,M as bl,f as cl,N as el,t as dl,T as yl,U as tl}from"../../../chunks/index-cac77216.js";import{f as ol}from"../../../chunks/index-54fd7bcd.js";import{t as ss,u as sl}from"../../../chunks/stores-8c4d0105.js";import"../../../chunks/index-786f648c.js";function vl(l){let I,i,R,k,pe,Je,E,u,Ee,A,U,Q,Me,C,me,g,Y,he,$,x,be,ee,B,X,F,M,te,q,oe,se,ne,N,Ht,z,Te,Ie,ce,J,Ve,V,le,Ge,Re,H,Be,Pe,Se,Ae,G,Ot,Ne,D,Ke,de,Qe,ge,$e,et,ie,Ct,tt,ot,st,nt,W,lt,it,Z,rt,at,L,ut,ft,j,n,T,P,He,Yt=l[0](d)[2]+"",Ut,xt,re,ns,qt=l[0](d)[4]+"",Ft,Wt,Zt,Lt,jt,Oe,ls,Xt,Ce,is,zt,Ye,rs,Jt,qe,as,Vt,De,us,Gt,ae,Kt,Qt,ue,gt,$t,fe,eo,to,oo,so,no,Ue,fs,lo,io,ro,ao,xe,ps,uo,ye,fo,po,ve,mo,ho,we,bo,co,ke,yo,vo,wo,ko,_o,Fe,ms,Eo,We,hs,Mo,pt,bs,To,Dt,mt,cs,Io,ht,ds,Ro,bt,ys,Bo,ct,vs,Po,_e,ws,dt,ks,_s,So,yt,Es,Ao,vt,Ms,No,wt,Ts,Ho,kt,Is,Oo,Ze,Rs,Co,_t,Bs,Yo,Le,Ps,qo,Et,Ss,Do,je,As,Uo,Mt,Ns,xo,Tt,Hs,Fo,Xe,Os,Wo,It,Cs,Zo,Rt,Ys,Lo,Bt,qs,jo,Pt,Ds,Xo,St,Us,zo,At,xs,Jo,Nt,Fs,Vo,ze,Ws,Go,Ko,Qo,go,v,Zs,Vs;const Ls=l[46].default,O=ul(Ls,l,l[45],null);return{c(){I=f(),i=r("br"),R=f(),k=r("div"),pe=h("**************************************************************************"),Je=f(),E=r("div"),u=r("br"),Ee=h(`

	The State of Score Maintained in a Recursive Closure`),U=f(),Q=r("br"),Me=f(),C=r("p"),me=h("The game is held in the recursive closure returned initially by M(x) where M is:"),g=f(),Y=r("pre"),he=h(l[38]),$=f(),x=r("p"),be=h("and x is an array of eight arrays defined as:"),ee=f(),B=r("pre"),X=h(l[44]),F=f(),M=r("p"),te=h("It doesn't matter what, if anything, the function ret() would do if it were to be called because it doesn't get called. It's only purpose is to cause go(), the function returned by M, to return the current state of the value x held in the closure that was created by running var some-name = M(x). M can also be used anonymously to chain functions as in "),q=r("span"),oe=h("M(2)(v=>v+4)(v=>v*7)(ret) = 42"),se=h("."),ne=f(),N=r("p"),Ht=h("Here, ret() is defined as  "),z=r("span"),Te=h(l[39]),Ie=h('. Explanations of how M(x) works are below the game interface here and at "Simple_Recursive_Closures a/k/a MONADS/Home.'),ce=f(),J=r("p"),Ve=h("Your score will be the elapsed time after three rounds. A round is completed by computing the number 20 in two or three steps. For example, if your numbers are 1,3,4,20, you can complete the round in two steps with 4-3 and then 1 * 20. You'll have two 1's before the multiplication. It won't matter which one you use. If your first computation is 1 * 20, your numbers will be 3,4,20. You can still subtract 3 from 4 and multiply by 1, finishing in three steps instead of two."),V=f(),le=r("span"),Ge=h("Player:"),Re=f(),H=r("input"),Be=f(),Pe=r("br"),Se=r("br"),Ae=f(),G=r("span"),Ot=h("Best Score:"),Ne=f(),D=r("input"),Ke=f(),de=r("h2"),Qe=h(l[3]),ge=f(),$e=r("br"),et=f(),ie=r("button"),Ct=h("Reset"),tt=f(),ot=r("br"),st=r("br"),nt=f(),W=r("button"),lt=h(l[4]),it=f(),Z=r("button"),rt=h(l[5]),at=f(),L=r("button"),ut=h(l[6]),ft=f(),j=r("button"),n=h(l[7]),T=f(),P=r("span"),He=h("Operator: "),Ut=h(Yt),xt=f(),re=r("span"),ns=h("Score: "),Ft=h(qt),Wt=f(),Zt=r("br"),Lt=r("br"),jt=f(),Oe=r("button"),ls=h("add"),Xt=f(),Ce=r("button"),is=h("subtract"),zt=f(),Ye=r("button"),rs=h("multiply"),Jt=f(),qe=r("button"),as=h("divide"),Vt=f(),De=r("button"),us=h("concat"),Gt=f(),ae=r("span"),Kt=h(l[1]),Qt=f(),ue=r("span"),gt=h(l[21]),$t=f(),fe=r("span"),eo=h(l[2]),to=f(),oo=r("br"),so=r("br"),no=f(),Ue=r("button"),fs=h("ROLL"),lo=f(),io=r("br"),ro=r("br"),ao=f(),xe=r("button"),ps=h("test"),uo=f(),ye=r("button"),fo=h(l[16]),po=f(),ve=r("button"),mo=h(l[17]),ho=f(),we=r("button"),bo=h(l[18]),co=f(),ke=r("button"),yo=h(l[19]),vo=f(),wo=r("br"),ko=r("br"),_o=f(),Fe=r("button"),ms=h("Back"),Eo=f(),We=r("button"),hs=h("Forward"),Mo=f(),pt=r("p"),bs=h(`Remember, just computing 20 isn't always enough. One of the numbers used to get 20 has to be the
	result of a prior computation`),To=f(),Dt=r("p"),mt=r("h2"),cs=h("Background"),Io=f(),ht=r("p"),ds=h("Score is a game involving four dice and two or three-stage arithmetic computations with the goal of arriving at the number 20. My son Alex taught it to me a decade ago, when he was in middle school. I decided to make an online multi-player version."),Ro=f(),bt=r("p"),ys=h("After some messy experiences developing a server with other	programming languages, I turned to Haskell for the robust and easily maintainable backend that carried me through several experiments with various front ends. The server can handle a large number of 	number of groups of interacting players. Each group has its own chat box and shared todo list, and all members always see the same dice roll as it gets whittled down by players selecting numbers."),Bo=f(),ct=r("p"),vs=h('One of my fondest memories began with Alex asking me to to devise a way to display all solutions to a dice roll or else report that no solution exists. My initial impression was that an algorithm that could so that would be unreasonably complicated and resource intensive. But not long afterward, I was delighted -- maybe "euphoric" is the right word -- as I showed Alex a button on the player interface that would abort gameplay and display every way to get 20 in two or three steps. It even broke the solutions down into categories. My appreciation of the Haskell programming language continued to grow.'),Po=f(),_e=r("p"),ws=h(`In the online game, players can gain a point by	clicking "Impossible" unless another player finds a solution. In that case, the player who clicked "Impossible" loses a point. Players can change the default number of dice sides from 6,6,12,and 20 and the goal from the default
	value of 20. A drag and drop version of Score is online at `),dt=r("a"),ks=h("https://score.schalk2.com"),_s=h("."),So=f(),yt=r("h2"),Es=h("About this Solitaire Version"),Ao=f(),vt=r("p"),Ms=h(`This demonstration doesn't rely on a remote server, nor does it feature any Haskell code. It's
	just a little solitaire game providing an opportunity to consider the interesting possibilities of
	recursive closures. You can traverse the history of game play for the current roll. If you make a
	mistake, you can take back your move and do something else. If you traverse back and forth very
	far, subsequent computations will be very slow and the program might even crash. If you just take back a move, computations proceed normally.`),No=f(),wt=r("p"),Ts=h(`The function fu() is the brains behing the game of Score. Each time a number or operator is
	clicked, m2(fu) is called, the monad m2 is modified, and the change is reflected in the DOM. The
	state of play in M is an array of seven arrays. Let's call it ar. If an operator op is in ar[2]
	and two numbers a and b are in ar[1], fu calls calc(a,b,op) and the result is added to ar[0] and
	ar[3]. ar[0] are the numbers in the game interface. ar[3] hold numbers that have been computed. At
	least one of the numbers in ar[3] has to be used to compute 20 in order to gain a point. If the
	number of points reaches 5, fu causes "You win" to be displayed, sets the score back to 0, and
	calls runRoll, starting another round of play.`),Ho=f(),kt=r("p"),Is=h(`At the end of fu(), two formatting functions are Called. The first, update(), refreshes the game
	buttons, causing them to reflect the current state of ar. The second hides buttons that correspond
	to values of undefine and shows buttons that correspond to numbers in ar. This is done by
	switching variables p in "style = 'display: p' back and forth between "none" and "inline".`),Oo=f(),Ze=r("pre"),Rs=h(l[37]),Co=f(),_t=r("p"),Bs=h('Clicking "ROLL" calls runRoll() which, in turn, calls updateRoll() to re-set HTML variables.'),Yo=f(),Le=r("pre"),Ps=h(l[40]),qo=f(),Et=r("p"),Ss=h(`The "x = [ [], [], [], [], [0], [], [0], [] ]" format will be maintained throught game play. x[0]
	simulates the dice roll; x[1] recieves integers that are clicked; x[2] holds the operator; and
	x[4] contains numbers that are computed. x[4] makes sure at least one computed number is involved
	in arriving at 20. That's the reason, toward the end of fu(), that the intersection of a[0] and
	a[4] is examined when 20 is computed. Here are the first few functions called when a number is
	clicked:`),Do=f(),je=r("pre"),As=h(l[41]),Uo=f(),Mt=r("p"),Ns=h(`The first line of fu() is the calculation result that is generated whenever there are two items in
	(s)[1] and an operator in m2(s)[3]. The intersection is important in fu()'s bottom test. If
	"intersect", the intersection of m2(s)[1] and m2(s)[3], is empty intersect[0] returns false and
	the last test in fu fails, even though 20 was produced on the second computation.`),xo=f(),Tt=r("p"),Hs=h(`If no operator has been selected, it's possible to click a third number. The program doesn't
	complain, it just puts the number back for you with:`),Fo=f(),Xe=r("pre"),Os=h(l[42]),Wo=f(),It=r("p"),Cs=h(`If you roll the dice and keep clicking on the leftmost number, you'll see the numbers shift back
	and forth on every try. The first element of m2(s)[0] keeps getting pulled out of the first
	position and pushed back on the right.`),Zo=f(),Rt=r("p"),Ys=h(`sfunc() does some more DOM housekeeping. The buttons with dice number come and go as their CSS
	display strings are changed back and forth between "none" and "inline". fu() calls sfunc(). Here's
	how it is defined:`),Lo=f(),Bt=r("p"),qs=h(`For solitaire version presented here, a function named "m2" will will form a closure with M as
	follows: "m2 = M(x)" where x = [ [], [], [], [], [0], [], [0], [] ]. m2 will consume functions
	that, as the definition of M specifies, operate on x inside of M. x corresponds to the state of
	game play. After each click on a number or operator buttom, m2(fu) is called. The record of prior
	states kept in x[7] allows players to traverse the history of their choices.`),jo=f(),Pt=r("p"),Ds=h(`In the solitaire version of the game of score, x in M(x) is, as mentioned above, the array of
	arrays [ [], [], [], [], [], [], [], [], [] ] where x[0] starts out as four integers simulating a
	throw of two six-sided, one twelve-sided, and one twenty-sided dice. x[1] and x[3] contain the
	number selected by the player, x[2] is the selected operator, and x[4] keeps track of the number
	of successes until the player wins by reaching 5, x[5] contains all prior states as the player
	selects numbers and operators and is used for reversing state a little or all the way back to the
	original roll. x[6] is an index of where in x[5] play is taking place, and x[7] contains every
	state during a round. using x[6] to travers the history of game play in both directions.`),Xo=f(),St=r("h2"),Us=h('Why I Call Them "Monads"'),zo=f(),At=r("p"),xs=h(`I call functions returned by M "monads", much to the consternation of some "functional
	programmers" who scoff at the idea that JavaScript could possibly have monads such as those
	defined in the Haskell programming language. Neither my monads nor the Haskell monads are Category
	Theory monads. Haskell monads insulate chained computation from the global space, consuming
	functions that return new Monads. Mine happen to do the same thing. Haskell monads need to
	navegate through various types but I don't bother with that. The definition of "M" shows that the
	returned function responds to arguments that are functions and also to the string "Stop."`),Jo=f(),Nt=r("p"),Fs=h(`In my opinion, trying to define JavaScript objects that resemble the basic monads found in the
	Haskell Prelude module, amusing though it may be, isn't likely to produce anything very useful.
	People who think Haskell, or the supposed mathematical category of Haskell types and functions
	called "Hask", are actually Category Theory categories are mistaken. Category Theory inspired the
	development of Haskell monads and it might not be merely coincidental that the monads I am about
	to define are functionally similar to Haskell monads, though superficially quite different. Both
	transform state along pipelines isolated from their outer scope by operating on functions that
	return new monads. Both preserve state for future transformations or for eventual use in their
	outer scopes. Mine call functions in their outer scopes in order to update the DOM, not having to
	wait to do it in a main() function. I'm not trying to mimic Haskell or any other functional
	programming language.`),Vo=h(`

Caution:
`),ze=r("pre"),Ws=h(l[43]),Go=f(),Ko=r("br"),Qo=r("br"),go=f(),O&&O.c(),this.h()},l(e){fl('[data-svelte="svelte-1ei5wlq"]',document.head).forEach(t),I=p(e),i=a(e,"BR",{}),R=p(e),k=a(e,"DIV",{});var Gs=c(k);pe=b(Gs,"**************************************************************************"),Gs.forEach(t),Je=p(e),E=a(e,"DIV",{style:!0});var js=c(E);u=a(js,"BR",{}),Ee=b(js,`

	The State of Score Maintained in a Recursive Closure`),js.forEach(t),U=p(e),Q=a(e,"BR",{}),Me=p(e),C=a(e,"P",{});var Ks=c(C);me=b(Ks,"The game is held in the recursive closure returned initially by M(x) where M is:"),Ks.forEach(t),g=p(e),Y=a(e,"PRE",{class:!0});var Qs=c(Y);he=b(Qs,l[38]),Qs.forEach(t),$=p(e),x=a(e,"P",{});var gs=c(x);be=b(gs,"and x is an array of eight arrays defined as:"),gs.forEach(t),ee=p(e),B=a(e,"PRE",{class:!0});var $s=c(B);X=b($s,l[44]),$s.forEach(t),F=p(e),M=a(e,"P",{});var $o=c(M);te=b($o,"It doesn't matter what, if anything, the function ret() would do if it were to be called because it doesn't get called. It's only purpose is to cause go(), the function returned by M, to return the current state of the value x held in the closure that was created by running var some-name = M(x). M can also be used anonymously to chain functions as in "),q=a($o,"SPAN",{style:!0});var en=c(q);oe=b(en,"M(2)(v=>v+4)(v=>v*7)(ret) = 42"),en.forEach(t),se=b($o,"."),$o.forEach(t),ne=p(e),N=a(e,"P",{});var es=c(N);Ht=b(es,"Here, ret() is defined as  "),z=a(es,"SPAN",{style:!0});var tn=c(z);Te=b(tn,l[39]),tn.forEach(t),Ie=b(es,'. Explanations of how M(x) works are below the game interface here and at "Simple_Recursive_Closures a/k/a MONADS/Home.'),es.forEach(t),ce=p(e),J=a(e,"P",{});var on=c(J);Ve=b(on,"Your score will be the elapsed time after three rounds. A round is completed by computing the number 20 in two or three steps. For example, if your numbers are 1,3,4,20, you can complete the round in two steps with 4-3 and then 1 * 20. You'll have two 1's before the multiplication. It won't matter which one you use. If your first computation is 1 * 20, your numbers will be 3,4,20. You can still subtract 3 from 4 and multiply by 1, finishing in three steps instead of two."),on.forEach(t),V=p(e),le=a(e,"SPAN",{});var sn=c(le);Ge=b(sn,"Player:"),sn.forEach(t),Re=p(e),H=a(e,"INPUT",{style:!0,type:!0}),Be=p(e),Pe=a(e,"BR",{}),Se=a(e,"BR",{}),Ae=p(e),G=a(e,"SPAN",{});var nn=c(G);Ot=b(nn,"Best Score:"),nn.forEach(t),Ne=p(e),D=a(e,"INPUT",{style:!0,type:!0}),Ke=p(e),de=a(e,"H2",{});var ln=c(de);Qe=b(ln,l[3]),ln.forEach(t),ge=p(e),$e=a(e,"BR",{}),et=p(e),ie=a(e,"BUTTON",{});var rn=c(ie);Ct=b(rn,"Reset"),rn.forEach(t),tt=p(e),ot=a(e,"BR",{}),st=a(e,"BR",{}),nt=p(e),W=a(e,"BUTTON",{style:!0});var an=c(W);lt=b(an,l[4]),an.forEach(t),it=p(e),Z=a(e,"BUTTON",{style:!0});var un=c(Z);rt=b(un,l[5]),un.forEach(t),at=p(e),L=a(e,"BUTTON",{style:!0});var fn=c(L);ut=b(fn,l[6]),fn.forEach(t),ft=p(e),j=a(e,"BUTTON",{style:!0});var pn=c(j);n=b(pn,l[7]),pn.forEach(t),T=p(e),P=a(e,"SPAN",{style:!0});var Xs=c(P);He=b(Xs,"Operator: "),Ut=b(Xs,Yt),Xs.forEach(t),xt=p(e),re=a(e,"SPAN",{style:!0});var zs=c(re);ns=b(zs,"Score: "),Ft=b(zs,qt),zs.forEach(t),Wt=p(e),Zt=a(e,"BR",{}),Lt=a(e,"BR",{}),jt=p(e),Oe=a(e,"BUTTON",{});var mn=c(Oe);ls=b(mn,"add"),mn.forEach(t),Xt=p(e),Ce=a(e,"BUTTON",{});var hn=c(Ce);is=b(hn,"subtract"),hn.forEach(t),zt=p(e),Ye=a(e,"BUTTON",{});var bn=c(Ye);rs=b(bn,"multiply"),bn.forEach(t),Jt=p(e),qe=a(e,"BUTTON",{});var cn=c(qe);as=b(cn,"divide"),cn.forEach(t),Vt=p(e),De=a(e,"BUTTON",{});var dn=c(De);us=b(dn,"concat"),dn.forEach(t),Gt=p(e),ae=a(e,"SPAN",{style:!0});var yn=c(ae);Kt=b(yn,l[1]),yn.forEach(t),Qt=p(e),ue=a(e,"SPAN",{style:!0});var vn=c(ue);gt=b(vn,l[21]),vn.forEach(t),$t=p(e),fe=a(e,"SPAN",{style:!0});var wn=c(fe);eo=b(wn,l[2]),wn.forEach(t),to=p(e),oo=a(e,"BR",{}),so=a(e,"BR",{}),no=p(e),Ue=a(e,"BUTTON",{});var kn=c(Ue);fs=b(kn,"ROLL"),kn.forEach(t),lo=p(e),io=a(e,"BR",{}),ro=a(e,"BR",{}),ao=p(e),xe=a(e,"BUTTON",{});var _n=c(xe);ps=b(_n,"test"),_n.forEach(t),uo=p(e),ye=a(e,"BUTTON",{style:!0});var En=c(ye);fo=b(En,l[16]),En.forEach(t),po=p(e),ve=a(e,"BUTTON",{style:!0});var Mn=c(ve);mo=b(Mn,l[17]),Mn.forEach(t),ho=p(e),we=a(e,"BUTTON",{style:!0});var Tn=c(we);bo=b(Tn,l[18]),Tn.forEach(t),co=p(e),ke=a(e,"BUTTON",{style:!0});var In=c(ke);yo=b(In,l[19]),In.forEach(t),vo=p(e),wo=a(e,"BR",{}),ko=a(e,"BR",{}),_o=p(e),Fe=a(e,"BUTTON",{});var Rn=c(Fe);ms=b(Rn,"Back"),Rn.forEach(t),Eo=p(e),We=a(e,"BUTTON",{});var Bn=c(We);hs=b(Bn,"Forward"),Bn.forEach(t),Mo=p(e),pt=a(e,"P",{});var Pn=c(pt);bs=b(Pn,`Remember, just computing 20 isn't always enough. One of the numbers used to get 20 has to be the
	result of a prior computation`),Pn.forEach(t),To=p(e),Dt=a(e,"P",{});var ll=c(Dt);ll.forEach(t),mt=a(e,"H2",{});var Sn=c(mt);cs=b(Sn,"Background"),Sn.forEach(t),Io=p(e),ht=a(e,"P",{});var An=c(ht);ds=b(An,"Score is a game involving four dice and two or three-stage arithmetic computations with the goal of arriving at the number 20. My son Alex taught it to me a decade ago, when he was in middle school. I decided to make an online multi-player version."),An.forEach(t),Ro=p(e),bt=a(e,"P",{});var Nn=c(bt);ys=b(Nn,"After some messy experiences developing a server with other	programming languages, I turned to Haskell for the robust and easily maintainable backend that carried me through several experiments with various front ends. The server can handle a large number of 	number of groups of interacting players. Each group has its own chat box and shared todo list, and all members always see the same dice roll as it gets whittled down by players selecting numbers."),Nn.forEach(t),Bo=p(e),ct=a(e,"P",{});var Hn=c(ct);vs=b(Hn,'One of my fondest memories began with Alex asking me to to devise a way to display all solutions to a dice roll or else report that no solution exists. My initial impression was that an algorithm that could so that would be unreasonably complicated and resource intensive. But not long afterward, I was delighted -- maybe "euphoric" is the right word -- as I showed Alex a button on the player interface that would abort gameplay and display every way to get 20 in two or three steps. It even broke the solutions down into categories. My appreciation of the Haskell programming language continued to grow.'),Hn.forEach(t),Po=p(e),_e=a(e,"P",{});var ts=c(_e);ws=b(ts,`In the online game, players can gain a point by	clicking "Impossible" unless another player finds a solution. In that case, the player who clicked "Impossible" loses a point. Players can change the default number of dice sides from 6,6,12,and 20 and the goal from the default
	value of 20. A drag and drop version of Score is online at `),dt=a(ts,"A",{href:!0});var On=c(dt);ks=b(On,"https://score.schalk2.com"),On.forEach(t),_s=b(ts,"."),ts.forEach(t),So=p(e),yt=a(e,"H2",{});var Cn=c(yt);Es=b(Cn,"About this Solitaire Version"),Cn.forEach(t),Ao=p(e),vt=a(e,"P",{});var Yn=c(vt);Ms=b(Yn,`This demonstration doesn't rely on a remote server, nor does it feature any Haskell code. It's
	just a little solitaire game providing an opportunity to consider the interesting possibilities of
	recursive closures. You can traverse the history of game play for the current roll. If you make a
	mistake, you can take back your move and do something else. If you traverse back and forth very
	far, subsequent computations will be very slow and the program might even crash. If you just take back a move, computations proceed normally.`),Yn.forEach(t),No=p(e),wt=a(e,"P",{});var qn=c(wt);Ts=b(qn,`The function fu() is the brains behing the game of Score. Each time a number or operator is
	clicked, m2(fu) is called, the monad m2 is modified, and the change is reflected in the DOM. The
	state of play in M is an array of seven arrays. Let's call it ar. If an operator op is in ar[2]
	and two numbers a and b are in ar[1], fu calls calc(a,b,op) and the result is added to ar[0] and
	ar[3]. ar[0] are the numbers in the game interface. ar[3] hold numbers that have been computed. At
	least one of the numbers in ar[3] has to be used to compute 20 in order to gain a point. If the
	number of points reaches 5, fu causes "You win" to be displayed, sets the score back to 0, and
	calls runRoll, starting another round of play.`),qn.forEach(t),Ho=p(e),kt=a(e,"P",{});var Dn=c(kt);Is=b(Dn,`At the end of fu(), two formatting functions are Called. The first, update(), refreshes the game
	buttons, causing them to reflect the current state of ar. The second hides buttons that correspond
	to values of undefine and shows buttons that correspond to numbers in ar. This is done by
	switching variables p in "style = 'display: p' back and forth between "none" and "inline".`),Dn.forEach(t),Oo=p(e),Ze=a(e,"PRE",{class:!0});var Un=c(Ze);Rs=b(Un,l[37]),Un.forEach(t),Co=p(e),_t=a(e,"P",{});var xn=c(_t);Bs=b(xn,'Clicking "ROLL" calls runRoll() which, in turn, calls updateRoll() to re-set HTML variables.'),xn.forEach(t),Yo=p(e),Le=a(e,"PRE",{class:!0});var Fn=c(Le);Ps=b(Fn,l[40]),Fn.forEach(t),qo=p(e),Et=a(e,"P",{});var Wn=c(Et);Ss=b(Wn,`The "x = [ [], [], [], [], [0], [], [0], [] ]" format will be maintained throught game play. x[0]
	simulates the dice roll; x[1] recieves integers that are clicked; x[2] holds the operator; and
	x[4] contains numbers that are computed. x[4] makes sure at least one computed number is involved
	in arriving at 20. That's the reason, toward the end of fu(), that the intersection of a[0] and
	a[4] is examined when 20 is computed. Here are the first few functions called when a number is
	clicked:`),Wn.forEach(t),Do=p(e),je=a(e,"PRE",{class:!0});var Zn=c(je);As=b(Zn,l[41]),Zn.forEach(t),Uo=p(e),Mt=a(e,"P",{});var Ln=c(Mt);Ns=b(Ln,`The first line of fu() is the calculation result that is generated whenever there are two items in
	(s)[1] and an operator in m2(s)[3]. The intersection is important in fu()'s bottom test. If
	"intersect", the intersection of m2(s)[1] and m2(s)[3], is empty intersect[0] returns false and
	the last test in fu fails, even though 20 was produced on the second computation.`),Ln.forEach(t),xo=p(e),Tt=a(e,"P",{});var jn=c(Tt);Hs=b(jn,`If no operator has been selected, it's possible to click a third number. The program doesn't
	complain, it just puts the number back for you with:`),jn.forEach(t),Fo=p(e),Xe=a(e,"PRE",{class:!0});var Xn=c(Xe);Os=b(Xn,l[42]),Xn.forEach(t),Wo=p(e),It=a(e,"P",{});var zn=c(It);Cs=b(zn,`If you roll the dice and keep clicking on the leftmost number, you'll see the numbers shift back
	and forth on every try. The first element of m2(s)[0] keeps getting pulled out of the first
	position and pushed back on the right.`),zn.forEach(t),Zo=p(e),Rt=a(e,"P",{});var Jn=c(Rt);Ys=b(Jn,`sfunc() does some more DOM housekeeping. The buttons with dice number come and go as their CSS
	display strings are changed back and forth between "none" and "inline". fu() calls sfunc(). Here's
	how it is defined:`),Jn.forEach(t),Lo=p(e),Bt=a(e,"P",{});var Vn=c(Bt);qs=b(Vn,`For solitaire version presented here, a function named "m2" will will form a closure with M as
	follows: "m2 = M(x)" where x = [ [], [], [], [], [0], [], [0], [] ]. m2 will consume functions
	that, as the definition of M specifies, operate on x inside of M. x corresponds to the state of
	game play. After each click on a number or operator buttom, m2(fu) is called. The record of prior
	states kept in x[7] allows players to traverse the history of their choices.`),Vn.forEach(t),jo=p(e),Pt=a(e,"P",{});var Gn=c(Pt);Ds=b(Gn,`In the solitaire version of the game of score, x in M(x) is, as mentioned above, the array of
	arrays [ [], [], [], [], [], [], [], [], [] ] where x[0] starts out as four integers simulating a
	throw of two six-sided, one twelve-sided, and one twenty-sided dice. x[1] and x[3] contain the
	number selected by the player, x[2] is the selected operator, and x[4] keeps track of the number
	of successes until the player wins by reaching 5, x[5] contains all prior states as the player
	selects numbers and operators and is used for reversing state a little or all the way back to the
	original roll. x[6] is an index of where in x[5] play is taking place, and x[7] contains every
	state during a round. using x[6] to travers the history of game play in both directions.`),Gn.forEach(t),Xo=p(e),St=a(e,"H2",{});var Kn=c(St);Us=b(Kn,'Why I Call Them "Monads"'),Kn.forEach(t),zo=p(e),At=a(e,"P",{});var Qn=c(At);xs=b(Qn,`I call functions returned by M "monads", much to the consternation of some "functional
	programmers" who scoff at the idea that JavaScript could possibly have monads such as those
	defined in the Haskell programming language. Neither my monads nor the Haskell monads are Category
	Theory monads. Haskell monads insulate chained computation from the global space, consuming
	functions that return new Monads. Mine happen to do the same thing. Haskell monads need to
	navegate through various types but I don't bother with that. The definition of "M" shows that the
	returned function responds to arguments that are functions and also to the string "Stop."`),Qn.forEach(t),Jo=p(e),Nt=a(e,"P",{});var gn=c(Nt);Fs=b(gn,`In my opinion, trying to define JavaScript objects that resemble the basic monads found in the
	Haskell Prelude module, amusing though it may be, isn't likely to produce anything very useful.
	People who think Haskell, or the supposed mathematical category of Haskell types and functions
	called "Hask", are actually Category Theory categories are mistaken. Category Theory inspired the
	development of Haskell monads and it might not be merely coincidental that the monads I am about
	to define are functionally similar to Haskell monads, though superficially quite different. Both
	transform state along pipelines isolated from their outer scope by operating on functions that
	return new monads. Both preserve state for future transformations or for eventual use in their
	outer scopes. Mine call functions in their outer scopes in order to update the DOM, not having to
	wait to do it in a main() function. I'm not trying to mimic Haskell or any other functional
	programming language.`),gn.forEach(t),Vo=b(e,`

Caution:
`),ze=a(e,"PRE",{class:!0});var $n=c(ze);Ws=b($n,l[43]),$n.forEach(t),Go=p(e),Ko=a(e,"BR",{}),Qo=a(e,"BR",{}),go=p(e),O&&O.l(e),this.h()},h(){document.title="The Solitaire Game of Score",y(E,"font-family","Times New Roman"),y(E,"text-align","center"),y(E,"font-size","32px"),K(Y,"class","svelte-14qv4oq"),K(B,"class","svelte-14qv4oq"),y(q,"color","#55ffff"),y(z,"color","#55ffff"),y(H,"color","black"),K(H,"type","text"),y(D,"color","black"),K(D,"type","number"),y(W,"display",l[8]),y(Z,"display",l[9]),y(L,"display",l[10]),y(j,"display",l[11]),y(P,"margin-left","8%"),y(P,"font-size","32px"),y(re,"margin-left","64px"),y(re,"font-size","32px"),y(ae,"margin-left","20px"),y(ae,"color","#bbbbff"),y(ae,"font-size","28px"),y(ue,"margin-left","20px"),y(ue,"color","#bbbbff"),y(ue,"font-size","38px"),y(fe,"margin-left","20px"),y(fe,"color","#bbbbff"),y(fe,"font-size","38px"),y(ye,"display",l[12]),y(ve,"display",l[13]),y(we,"display",l[14]),y(ke,"display",l[15]),K(dt,"href","https://score.schalk2.com"),K(Ze,"class","svelte-14qv4oq"),K(Le,"class","svelte-14qv4oq"),K(je,"class","svelte-14qv4oq"),K(Xe,"class","svelte-14qv4oq"),K(ze,"class","svelte-14qv4oq")},m(e,o){s(e,I,o),s(e,i,o),s(e,R,o),s(e,k,o),m(k,pe),s(e,Je,o),s(e,E,o),m(E,u),m(E,Ee),s(e,U,o),s(e,Q,o),s(e,Me,o),s(e,C,o),m(C,me),s(e,g,o),s(e,Y,o),m(Y,he),s(e,$,o),s(e,x,o),m(x,be),s(e,ee,o),s(e,B,o),m(B,X),s(e,F,o),s(e,M,o),m(M,te),m(M,q),m(q,oe),m(M,se),s(e,ne,o),s(e,N,o),m(N,Ht),m(N,z),m(z,Te),m(N,Ie),s(e,ce,o),s(e,J,o),m(J,Ve),s(e,V,o),s(e,le,o),m(le,Ge),s(e,Re,o),s(e,H,o),os(H,l[25]),s(e,Be,o),s(e,Pe,o),s(e,Se,o),s(e,Ae,o),s(e,G,o),m(G,Ot),s(e,Ne,o),s(e,D,o),os(D,l[26]),s(e,Ke,o),s(e,de,o),m(de,Qe),s(e,ge,o),s(e,$e,o),s(e,et,o),s(e,ie,o),m(ie,Ct),s(e,tt,o),s(e,ot,o),s(e,st,o),s(e,nt,o),s(e,W,o),m(W,lt),s(e,it,o),s(e,Z,o),m(Z,rt),s(e,at,o),s(e,L,o),m(L,ut),s(e,ft,o),s(e,j,o),m(j,n),s(e,T,o),s(e,P,o),m(P,He),m(P,Ut),s(e,xt,o),s(e,re,o),m(re,ns),m(re,Ft),s(e,Wt,o),s(e,Zt,o),s(e,Lt,o),s(e,jt,o),s(e,Oe,o),m(Oe,ls),s(e,Xt,o),s(e,Ce,o),m(Ce,is),s(e,zt,o),s(e,Ye,o),m(Ye,rs),s(e,Jt,o),s(e,qe,o),m(qe,as),s(e,Vt,o),s(e,De,o),m(De,us),s(e,Gt,o),s(e,ae,o),m(ae,Kt),s(e,Qt,o),s(e,ue,o),m(ue,gt),s(e,$t,o),s(e,fe,o),m(fe,eo),s(e,to,o),s(e,oo,o),s(e,so,o),s(e,no,o),s(e,Ue,o),m(Ue,fs),s(e,lo,o),s(e,io,o),s(e,ro,o),s(e,ao,o),s(e,xe,o),m(xe,ps),s(e,uo,o),s(e,ye,o),m(ye,fo),s(e,po,o),s(e,ve,o),m(ve,mo),s(e,ho,o),s(e,we,o),m(we,bo),s(e,co,o),s(e,ke,o),m(ke,yo),s(e,vo,o),s(e,wo,o),s(e,ko,o),s(e,_o,o),s(e,Fe,o),m(Fe,ms),s(e,Eo,o),s(e,We,o),m(We,hs),s(e,Mo,o),s(e,pt,o),m(pt,bs),s(e,To,o),s(e,Dt,o),s(e,mt,o),m(mt,cs),s(e,Io,o),s(e,ht,o),m(ht,ds),s(e,Ro,o),s(e,bt,o),m(bt,ys),s(e,Bo,o),s(e,ct,o),m(ct,vs),s(e,Po,o),s(e,_e,o),m(_e,ws),m(_e,dt),m(dt,ks),m(_e,_s),s(e,So,o),s(e,yt,o),m(yt,Es),s(e,Ao,o),s(e,vt,o),m(vt,Ms),s(e,No,o),s(e,wt,o),m(wt,Ts),s(e,Ho,o),s(e,kt,o),m(kt,Is),s(e,Oo,o),s(e,Ze,o),m(Ze,Rs),s(e,Co,o),s(e,_t,o),m(_t,Bs),s(e,Yo,o),s(e,Le,o),m(Le,Ps),s(e,qo,o),s(e,Et,o),m(Et,Ss),s(e,Do,o),s(e,je,o),m(je,As),s(e,Uo,o),s(e,Mt,o),m(Mt,Ns),s(e,xo,o),s(e,Tt,o),m(Tt,Hs),s(e,Fo,o),s(e,Xe,o),m(Xe,Os),s(e,Wo,o),s(e,It,o),m(It,Cs),s(e,Zo,o),s(e,Rt,o),m(Rt,Ys),s(e,Lo,o),s(e,Bt,o),m(Bt,qs),s(e,jo,o),s(e,Pt,o),m(Pt,Ds),s(e,Xo,o),s(e,St,o),m(St,Us),s(e,zo,o),s(e,At,o),m(At,xs),s(e,Jo,o),s(e,Nt,o),m(Nt,Fs),s(e,Vo,o),s(e,ze,o),m(ze,Ws),s(e,Go,o),s(e,Ko,o),s(e,Qo,o),s(e,go,o),O&&O.m(e,o),v=!0,Zs||(Vs=[_(H,"input",l[47]),_(D,"input",l[48]),_(ie,"click",l[36]),_(W,"click",l[49]),_(Z,"click",l[50]),_(L,"click",l[51]),_(j,"click",l[52]),_(Oe,"click",l[53]),_(Ce,"click",l[54]),_(Ye,"click",l[55]),_(qe,"click",l[56]),_(De,"click",l[57]),_(Ue,"click",l[58]),_(xe,"click",l[59]),_(Fe,"click",l[60]),_(We,"click",l[61])],Zs=!0)},p(e,o){o[0]&33554432&&H.value!==e[25]&&os(H,e[25]),o[0]&67108864&&nl(D.value)!==e[26]&&os(D,e[26]),(!v||o[0]&8)&&S(Qe,e[3]),(!v||o[0]&16)&&S(lt,e[4]),(!v||o[0]&256)&&y(W,"display",e[8]),(!v||o[0]&32)&&S(rt,e[5]),(!v||o[0]&512)&&y(Z,"display",e[9]),(!v||o[0]&64)&&S(ut,e[6]),(!v||o[0]&1024)&&y(L,"display",e[10]),(!v||o[0]&128)&&S(n,e[7]),(!v||o[0]&2048)&&y(j,"display",e[11]),(!v||o[0]&1)&&Yt!==(Yt=e[0](d)[2]+"")&&S(Ut,Yt),(!v||o[0]&1)&&qt!==(qt=e[0](d)[4]+"")&&S(Ft,qt),(!v||o[0]&2)&&S(Kt,e[1]),(!v||o[0]&2097152)&&S(gt,e[21]),(!v||o[0]&4)&&S(eo,e[2]),(!v||o[0]&65536)&&S(fo,e[16]),(!v||o[0]&4096)&&y(ye,"display",e[12]),(!v||o[0]&131072)&&S(mo,e[17]),(!v||o[0]&8192)&&y(ve,"display",e[13]),(!v||o[0]&262144)&&S(bo,e[18]),(!v||o[0]&16384)&&y(we,"display",e[14]),(!v||o[0]&524288)&&S(yo,e[19]),(!v||o[0]&32768)&&y(ke,"display",e[15]),O&&O.p&&(!v||o[1]&16384)&&pl(O,Ls,e,e[45],v?hl(Ls,e[45],o,null):ml(e[45]),null)},i(e){v||(bl(()=>{A||(A=el(E,ol,{},!0)),A.run(1)}),cl(O,e),v=!0)},o(e){A||(A=el(E,ol,{},!1)),A.run(0),dl(O,e),v=!1},d(e){e&&t(I),e&&t(i),e&&t(R),e&&t(k),e&&t(Je),e&&t(E),e&&A&&A.end(),e&&t(U),e&&t(Q),e&&t(Me),e&&t(C),e&&t(g),e&&t(Y),e&&t($),e&&t(x),e&&t(ee),e&&t(B),e&&t(F),e&&t(M),e&&t(ne),e&&t(N),e&&t(ce),e&&t(J),e&&t(V),e&&t(le),e&&t(Re),e&&t(H),e&&t(Be),e&&t(Pe),e&&t(Se),e&&t(Ae),e&&t(G),e&&t(Ne),e&&t(D),e&&t(Ke),e&&t(de),e&&t(ge),e&&t($e),e&&t(et),e&&t(ie),e&&t(tt),e&&t(ot),e&&t(st),e&&t(nt),e&&t(W),e&&t(it),e&&t(Z),e&&t(at),e&&t(L),e&&t(ft),e&&t(j),e&&t(T),e&&t(P),e&&t(xt),e&&t(re),e&&t(Wt),e&&t(Zt),e&&t(Lt),e&&t(jt),e&&t(Oe),e&&t(Xt),e&&t(Ce),e&&t(zt),e&&t(Ye),e&&t(Jt),e&&t(qe),e&&t(Vt),e&&t(De),e&&t(Gt),e&&t(ae),e&&t(Qt),e&&t(ue),e&&t($t),e&&t(fe),e&&t(to),e&&t(oo),e&&t(so),e&&t(no),e&&t(Ue),e&&t(lo),e&&t(io),e&&t(ro),e&&t(ao),e&&t(xe),e&&t(uo),e&&t(ye),e&&t(po),e&&t(ve),e&&t(ho),e&&t(we),e&&t(co),e&&t(ke),e&&t(vo),e&&t(wo),e&&t(ko),e&&t(_o),e&&t(Fe),e&&t(Eo),e&&t(We),e&&t(Mo),e&&t(pt),e&&t(To),e&&t(Dt),e&&t(mt),e&&t(Io),e&&t(ht),e&&t(Ro),e&&t(bt),e&&t(Bo),e&&t(ct),e&&t(Po),e&&t(_e),e&&t(So),e&&t(yt),e&&t(Ao),e&&t(vt),e&&t(No),e&&t(wt),e&&t(Ho),e&&t(kt),e&&t(Oo),e&&t(Ze),e&&t(Co),e&&t(_t),e&&t(Yo),e&&t(Le),e&&t(qo),e&&t(Et),e&&t(Do),e&&t(je),e&&t(Uo),e&&t(Mt),e&&t(xo),e&&t(Tt),e&&t(Fo),e&&t(Xe),e&&t(Wo),e&&t(It),e&&t(Zo),e&&t(Rt),e&&t(Lo),e&&t(Bt),e&&t(jo),e&&t(Pt),e&&t(Xo),e&&t(St),e&&t(zo),e&&t(At),e&&t(Jo),e&&t(Nt),e&&t(Vo),e&&t(ze),e&&t(Go),e&&t(Ko),e&&t(Qo),e&&t(go),O&&O.d(e),Zs=!1,yl(Vs)}}}var d="stop";function wl(l,I,i){var R=parseInt(l,10),k=parseInt(I,10);return i==="+"?R+k:i==="*"?R*k:i==="-"?R-k:i==="/"?R/k:i==="@"?" "+R+k:"fubar"}function Js(l){return JSON.parse(JSON.stringify(l))}function w(l){return function I(i){if(typeof i=="function")return l=i(l),I;if(i==="stop")return l}}function kl(l,I){return l.filter(i=>I.includes(i))}function _l(l,I,i){let R,k,pe;tl(l,sl,n=>i(25,k=n)),tl(l,ss,n=>i(26,pe=n));let{$$slots:Je={},$$scope:E}=I;console.log("top is",ss);var u,Ee=1e3,A=1001,U=0,Q=0,Me,C,C="",B,X,F,M,me="none",g="none",Y="none",he="none",$="none",x="none",be="none",ee="none",B,X,F,M,te,q,oe,se,ne;ne=n=>{var T=[[Math.floor(Math.random()*6)+1,Math.floor(Math.random()*6)+1,Math.floor(Math.random()*12)+1,Math.floor(Math.random()*20)+1],[],["+"],[],[n],[],[0],[]];return i(0,u=w(T)),i(0,u=w(u(d))),Ht(u),u(V),G&&Ot(),u};var N="";function Ht(n){console.log("In updateRoll. m(s) is",n(d)),i(4,B=n(d)[0][0]),i(5,X=n(d)[0][1]),i(6,F=n(d)[0][2]),i(7,M=n(d)[0][3]),i(16,te=n(d)[1][0]),i(17,q=n(d)[1][1]),i(18,oe=n(d)[1][2]),i(19,se=n(d)[1][3]),n(d)[2],n(d)[3],n(d)[4],i(8,me=i(9,g=i(10,Y=i(11,he="inline")))),i(12,$=i(13,x=i(14,be=i(15,ee="none"))))}function z(){i(8,me=i(9,g=i(10,Y=i(11,he=i(12,$=i(13,x=i(14,be=i(15,ee="none")))))))),B!=null&&i(8,me="inline"),X!=null&&i(9,g="inline"),F!=null&&i(10,Y="inline"),M!=null&&i(11,he="inline"),te!=null&&i(12,$="inline"),q!=null&&i(13,x="inline"),oe!=null&&i(14,be="inline"),se!=null&&i(15,ee="inline")}u=w([[Math.floor(Math.random()*6)+1,Math.floor(Math.random()*6)+1,Math.floor(Math.random()*12)+1,Math.floor(Math.random()*20)+1],[],["+"],[],[0],[],[0],[]]);var Te=function(){i(4,B=u(d)[0][0]),i(5,X=u(d)[0][1]),i(6,F=u(d)[0][2]),i(7,M=u(d)[0][3]),u(d)[2],u(d)[3],u(d)[4],i(16,te=u(d)[1][0]),i(17,q=u(d)[1][1]),i(18,oe=u(d)[1][2]),i(19,se=u(d)[1][3])},Ie="",ce;ce=n=>{if(n[5].length<1){i(0,u=w(n)),console.log("You're already all the way back");return}else{var T=n[7],n=n[5][n[5].length-1];n[7]=T,i(0,u=w(n)),Te(),z()}};var J;J=n=>{var T=n[6][0];if(n[5].length===n[7].length){console.log("Already at the top"),i(0,u=w(n));return}else{var P=Js(n[7]),n=n[7][T+1];n[7]=P,i(0,u=w(n)),Te(),z()}};function Ve(){var n=u(d);return console.log("<><><><><><><><> xx is",n),console.log(n[0]),console.log("xx[5].length is ",n[5].length),console.log("index is",n[6]),i(0,u=w(n)),u}function V(n){n[5].push(Js([n[0],n[1],n[2],n[3],n[4],n[5],n[6],n[7]])),n[7].push(Js(n)),n[6][0]+=1;var T;n[4];var P;if(n[1].length===2&&n[2].length===1&&(P=n[1],T=wl(n[1][0],n[1][1],n[2][0]),n[0].push(T),n[3].push(T),n[1]=[],i(0,u=w(n))),n[1].length===3&&n[0].push(n[1].pop()),T==20&&kl(P,n[3]).length>0){if(n[4][0]==2)Ne(),A<Ee&&(Ee=A),i(21,Ie="You win! Your score is "),ss.set([Ee]);else{var He=parseInt(n[4],10);He+=1,i(1,N="           Your score increased to "+He),ne(He)}setTimeout(()=>i(1,N=i(21,Ie="")),8e3)}return Te(),z(),u(d)}var le=n=>{n[1].push(n[0][0]),n[0].shift(),i(0,u=w(n)),u(V)},Ge=n=>{n[1].push(n[0].splice(1,1)[0]),i(0,u=w(n)),i(0,u=u(V))},Re=n=>{n[1].push(n[0].splice(2,1)[0]),i(0,u=w(n)),i(0,u=u(V))},H=n=>{n[1].push(n[0].splice(3,1)[0]),i(0,u=w(n)),i(0,u=u(V))};function Be(n){n[2]="+",i(0,u=w(n))}function Pe(n){n[2]="*",i(0,u=w(n))}function Se(n){n[2]="/",i(0,u=w(n))}function Ae(n){n[2]="@",i(0,u=w(n))}var G=!0,Ot=function n(){G=!1,U>=9?(U=0,Q+=1):U+=1,i(3,C=Q+"."+U),Me=setTimeout(()=>n(),100)};function Ne(){clearTimeout(Me),i(2,A=C);var n=u(d);n[4]=[0],i(0,u=w(n)),U=0,Q=0,i(3,C=Q+"."+U),G=!0}var D=`function fu (a) {                                    // fu
  a[5].push(clone(a));
  a[7].push(clone(a)); // All game states for use in "Back" and "Forward."
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
      if (SCORE === 4) {
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

var update = () => { // The button displays will correspond to the values in m2.
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
}

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
}`,Ke=`function M (x) {
    return function go (func) {
        if (func === ret) return x
        else x = func(x);
        return go;
  }
}`,de="function ret () {}",Qe=`runRoll = x => {
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
};`,ge=`var click0 = a => {
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
};`,$e=`if (a[1].length === 3) {
    a[0].push(a[1].pop());  // Returns a clicked third number.
  };`,et=`var s = 'stop';
var log = console.log;

function M(x) {
  return function go(func) {
    if (typeof func === "function") {
      x = func(x);
      return go;
    } else if (func === "stop") return x;
  }
};

var m3 = M(3);

m3(async a => await 888); // m3(s) will return a Promise with value 888.

m3(s).then(v => m3((z => v + 112)));
// m3(s) will return 1000 after the promise is fulfilled.

m3(s).then(v => setTimeout(() => console.log("m3(s) resolved is", v,), 2000));
// The promise is still pending, so the value of "v" is 888.

setTimeout(() => console.log("m3(s) is", m3(s)),0);
// This gets bumped to the bottom of the stack, behind (2).
// m3(s) is called after x has been updated to 1000.

// Result:
16:13:15.590 m3(s) is 1000
16:13:17.590 m3(s) resolved is 888
// Two seconds after "1000" appears in the console log, "888" is displayed.`,ie=`m2 = M(
    [ 
      [Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1,
      Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 20) + 1], 
      [], ['+'], [], [0], [], [0], [] 
    ]);`;function Ct(){k=this.value,sl.set(k)}function tt(){pe=nl(this.value),ss.set(pe)}const ot=()=>u(le),st=()=>u(Ge),nt=()=>u(Re),W=()=>u(H),lt=()=>u(Be),it=()=>u(R),Z=()=>u(Pe),rt=()=>u(Se),at=()=>u(Ae),L=()=>u(ne(u(d)[4][0])),ut=()=>Ve(),ft=()=>u(ce),j=()=>u(J);return l.$$set=n=>{"$$scope"in n&&i(45,E=n.$$scope)},l.$$.update=()=>{l.$$.dirty[0]&2&&i(1,N),l.$$.dirty[0]&2,l.$$.dirty[0]&1&&i(4,B=u(d)[0][0]),l.$$.dirty[0]&1&&i(5,X=u(d)[0][1]),l.$$.dirty[0]&1&&i(6,F=u(d)[0][2]),l.$$.dirty[0]&1&&i(7,M=u(d)[0][3]),l.$$.dirty[0]&1&&u(d)[2],l.$$.dirty[0]&1&&u(d)[3],l.$$.dirty[0]&1&&u(d)[4],l.$$.dirty[0]&1&&i(16,te=u(d)[1][0]),l.$$.dirty[0]&1&&i(17,q=u(d)[1][1]),l.$$.dirty[0]&1&&i(18,oe=u(d)[1][2]),l.$$.dirty[0]&1&&i(19,se=u(d)[1][3]),l.$$.dirty[0]&1&&u(d)},i(24,R=n=>{n[2]="-",i(0,u=w(n))}),[u,N,A,C,B,X,F,M,me,g,Y,he,$,x,be,ee,te,q,oe,se,ne,Ie,ce,J,R,k,pe,Ve,le,Ge,Re,H,Be,Pe,Se,Ae,Ne,D,Ke,de,Qe,ge,$e,et,ie,E,Je,Ct,tt,ot,st,nt,W,lt,it,Z,rt,at,L,ut,ft,j]}class Rl extends il{constructor(I){super(),rl(this,I,_l,vl,al,{},null,[-1,-1,-1,-1,-1])}}export{Rl as default};
