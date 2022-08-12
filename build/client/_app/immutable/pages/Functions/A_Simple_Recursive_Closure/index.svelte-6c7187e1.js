import{S as Ia,i as Aa,s as Na,l,r as f,a as p,m as r,n as b,u,h as t,c as m,K as Sa,q as v,p as _,b as n,G as s,P as Gs,Q as M,v as I,R as Ba,M as xa,N as Ta,T as Oa,U as Ma}from"../../../chunks/index-cac77216.js";import{f as Ra}from"../../../chunks/index-54fd7bcd.js";import{t as Ks,u as Pa}from"../../../chunks/stores-8c4d0105.js";import"../../../chunks/index-786f648c.js";function Ha(i){let T,c,A,N,d,h,X,Me,W,B,Et,ne,O,se,le,re,H,Re,z,Pe,J,Y,F,V,G,C,ie,K,q,Be,Ie,Xe,Ae,Ne,S,Se,Q,Tt,g,$,Mt,Je,ae,Rt,Ve,ee,Pt,Ge,P,To,Bt,fe,Mo,It,xe,Ro,At,Oe,Po,Nt,ue,Ke,St,pe,Bo,xt,me,Io,Ot,L,Ao,Ht,He,No,Ft,ce,So,Ct,Z,xo,qt,Fe,Oo,Ut,be,Ho,Dt,U,Fo,Ce,Co,qo,qe,Uo,Do,Ue,jo,jt,De,a,k,x,Qe,Zo,ge,Qs,Wt,Wo=parseFloat(i[25](i[28])).toFixed(5).toString()+"",Xo,Jo,y,gs,$s,zt,el,tl,Yt,ol,nl,sl,ll,rl,Lt,il,al,Zt,fl,ul,pl,ml,Xt,cl,bl,Jt,hl,vl,dl,yl,Vt,wl,kl,Gt,_l,El,Tl,Ml,Kt,Rl,Pl,Qt,Bl,Il,Al,Vo,gt,Nl,Go,$e,Sl,Ko,$t,xl,Qo,D,Ol,zo=i[22](i[28]).join(", ")+"",go,Hl,$o,en,tn,on,et,Fl,nn,tt,Cl,sn,ot,ql,ln,nt,Ul,rn,an,fn,un,st,Dl,pn,j,jl,eo,Wl,zl,to,Yl,Ll,oo,Zl,Xl,mn,lt,Jl,cn,je,Vl,no,Gl,Kl,bn,so,Ql,hn,lo,gl,vn,te,dn,yn,wn,kn,ro,$l,_n,oe,En,io,Tn,Mn,Rn,Pn,rt,er,Bn,In,An,Nn,he,Sn,xn,ve,On,Hn,de,Fn,Cn,ye,qn,Un,we,tr,Yo=i[0](i[28])[2]+"",Dn,jn,ke,or,Lo=i[0](i[28])[4]+"",Wn,zn,Yn,Ln,Zn,it,nr,Xn,at,sr,Jn,ft,lr,Vn,ut,rr,Gn,pt,ir,Kn,_e,Qn,gn,Ee,$n,es,Te,ts,os,ns,ss,ls,mt,ar,rs,is,as,fs,ct,fr,us,We,ps,ms,ze,cs,bs,Ye,hs,vs,Le,ds,ys,ws,ks,_s,bt,ur,Es,ht,pr,Ts,ao,mr,Ms,fo,cr,Rs,uo,br,Ps,vt,hr,Bs,po,vr,Is,dt,dr,As,mo,yr,Ns,yt,wr,Ss,co,kr,xs,bo,_r,Os,wt,Er,Hs,ho,Tr,Fs,vo,Mr,Cs,yo,Rr,qs,wo,Pr,Us,ko,Br,Ds,_o,Ir,js,Eo,Ar,Ws,kt,Nr,zs,Ys,Ls,E,Sr,Dr;return{c(){T=l("h1"),c=f("HOME"),A=p(),N=p(),d=l("br"),h=p(),X=l("div"),Me=f("**************************************************************************"),W=p(),B=l("div"),Et=l("br"),ne=f(`

	A Very Simple Recursive Closure Insulates and Controls State Transformations`),se=p(),le=l("br"),re=p(),H=l("p"),Re=f(`JavaScript monads are defined in various ways online and in print. I wouldn't say any of these
	definitions are right or wrong. Everyone is entitled to an opinion. Some of my thoughts on the
	matter will be in `),z=l("a"),Pe=f("Home"),J=f(" and in an addendum."),Y=p(),F=l("p"),V=f(`The function M() (below) returns the function go(), thereby forming a closure. The returned
	function is named to facilitate recursion.  Here's the definition of M():`),G=p(),C=l("pre"),ie=f(i[47]),K=p(),q=l("p"),Be=f(`The function "ret" needs no functionality of its own. It just prompts the return of the current value of x. Here's the definition of ret() used on this page: `),Ie=l("span"),Xe=f(i[48]),Ae=f("."),Ne=p(),S=l("p"),Se=p(),Q=l("p"),Tt=f(`M(x) is most useful when the closure is named or, more precisely, when the function returned by
	M(x) is named. When M(x) is asigned a variable name, the value of "x" in M(x) can be preserved,
	transformed, and later used if it is eventually needed. "x" in M(x) will correspond to the state
	of play in the solitaire game of Score (below), but before we get to that, let's take a closer
	look at M and the function returned by M(x).`),g=p(),$=l("pre"),Mt=f(i[54]),Je=p(),ae=l("p"),Rt=f("The value held in the closure can be obtained later"),Ve=p(),ee=l("pre"),Pt=f(i[55]),Ge=p(),P=l("p"),To=f("And later"),Bt=p(),fe=l("pre"),Mo=f(i[56]),It=p(),xe=l("p"),Ro=f('Here are a few more simple operations on the very simple monad "mon":'),At=p(),Oe=l("p"),Po=f('We can set the value of x to 4 with the expression "mon = M(4)", or by modifying mon as follows:'),Nt=p(),ue=l("pre"),Ke=f(i[57]),St=p(),pe=l("p"),Bo=f("These abreviations will be used from now on:"),xt=p(),me=l("pre"),Io=f(`const s = ret;
const log = console.log;
`),Ot=p(),L=l("span"),Ao=f("Deep Clone:"),Ht=p(),He=l("span"),No=f(`I ran the following code in the Firefox.aurora console. The result verifies that mon2 defined by
	"var mon2 = M(mon(s))" is a deep clone of mon. The mon2 closure is out of reach by everything in
	its outer scope, and the mon closure is no exception.`),Ft=p(),ce=l("pre"),So=f(i[57]),Ct=p(),Z=l("span"),xo=f("Function Composition:"),qt=p(),Fe=l("span"),Oo=f(`M provides a way to anonymously compose functions concisely and transparently; a good alternative
	to callback spahgetti.`),Ut=p(),be=l("pre"),Ho=f(i[58]),Dt=p(),U=l("p"),Fo=f('Recursive closures created by "M" will control a fairly complicated dice game called "Score" ('),Ce=l("a"),Co=f("Link To Score"),qo=f(`). It's a solitaire version of a
	`),qe=l("a"),Uo=f("multiplayer version of the game"),Do=f(`
	I developed eight years ago based on a Haskell WebSockets server. The server code is
	`),Ue=l("a"),jo=f("here"),jt=p(),De=l("p"),a=f("These are the demonstration's event handlers:"),k=p(),x=l("pre"),Qe=f(i[53]),Zo=p(),ge=l("p"),Qs=f("m4(s) is "),Wt=l("span"),Xo=f(Wo),Jo=p(),y=l("p"),gs=l("br"),$s=p(),zt=l("button"),el=f("m4(cube)"),tl=p(),Yt=l("button"),ol=f("m4(square)"),nl=p(),sl=l("br"),ll=l("br"),rl=p(),Lt=l("span"),il=f("To call m4(pow(n)), enter n in the box ->"),al=p(),Zt=l("input"),fl=p(),ul=l("br"),pl=l("br"),ml=p(),Xt=l("span"),cl=f("To call m4(add(n)), enter n in the box ->"),bl=p(),Jt=l("input"),hl=p(),vl=l("br"),dl=l("br"),yl=p(),Vt=l("span"),wl=f("To call m4(mult(n)), enter n in the box ->"),kl=p(),Gt=l("input"),_l=p(),El=l("br"),Tl=l("br"),Ml=p(),Kt=l("span"),Rl=f("To call m4(reset(n)), enter n in the box ->"),Pl=p(),Qt=l("input"),Bl=p(),Il=l("br"),Al=l("br"),Vo=p(),gt=l("p"),Nl=f(`Next, x will be an array. Here are the functions responsible for the interactive demonstration
	below:`),Go=p(),$e=l("pre"),Sl=f(i[49]),Ko=p(),$t=l("p"),xl=f(`If you click mon3 = mon3(g) four times and the click mon3 = mon3(g3), you will see that mon3(s)
	returns its original value, [1,2,3,4]. By the way, the "mon3 =" part of "mon3 = mon3(g)" is
	included solely to trigger updating of browser displays. Svelte doesn't have a virtual DOM, and
	merely changing objects isn't enough to trigger DOM updates. For example, arr = [1,2,3] doesn't
	change in the DOM when arr.push(888) is called. arr = arr afterwards or arr = arr.push(888)
	initially both do the trick.`),Qo=p(),D=l("div"),Ol=f("["),go=f(zo),Hl=f("]"),$o=p(),en=l("br"),tn=l("br"),on=p(),et=l("button"),Fl=f("mon3 = mon3(g)"),nn=p(),tt=l("button"),Cl=f("mon3 = mon3(g2)"),sn=p(),ot=l("button"),ql=f("mon3 = mon3(g3)"),ln=p(),nt=l("button"),Ul=f("mon3 = mon3(x => [1,2,3,4])"),rn=p(),an=l("br"),fn=l("br"),un=f(`
Here's a contrived example showing one way asynchronous code can be handled:
`),st=l("pre"),Dl=f(i[59]),pn=p(),j=l("p"),jl=f("A robust monad that deals with a variety of contingencies is at "),eo=l("a"),Wl=f("Monad3"),zl=f(`. There's a more elaborate demonstration (Demonstration 1) at
	`),to=l("a"),Yl=f("functional-javascript"),Ll=f(`. I'm sticking with
	the simple monad generator M in this module. At
	`),oo=l("a"),Zl=f("functional-javascript"),Xl=f(` the monad is defines
	as follows:`),mn=p(),lt=l("pre"),Jl=f(i[60]),cn=p(),je=l("p"),Vl=f(`Now back to the little monad M and the game of score; a game involving four dice and two or
	three-stage arithmetic computations with the goal of arriving at the number 20. My son Alex taught
	it to me a decade ago, when he was in middle school. After some messy experiences with other
	programming languages, I turned to Haskell for the robust and easily maintainable backend that
	carried me through several experiments with front ends. The server can handle an indeterminate
	number of groups of interacting players. Each group has its own chat box and shared todo list, and
	all members always see the same dice roll as it gets whittled down by players selecting numbers.
	The backend can also compute all possible solutions to any roll, if any exist, to any throw of the
	dice. It also identifies all of the impossible-to-solve rolls. Players can gain a point by
	clicking "Impossible" unless another player finds a solution. In that case, they lose a point.
	Users can change the default number of dice sides from 6,6,12,and 20 and the goal from the default
	value of 20. A version of it is online at `),no=l("a"),Gl=f("https://score.schalk2.com"),Kl=f("."),bn=p(),so=l("p"),Ql=f(`This demonstration doesn't rely on a remote server, nor does it feature any Haskell code. It's
	just a little solitaire game providing an opportunity to consider the interesting possibilities of
	recursive closures. You can traverse the history of game play for the current roll. If you make a
	mistake, you can take back your move and do something else. If you traverse back and forth very
	far, subsequent computations will be very slow and the program might even crash. If you just take back a move, computations proceed normally.`),hn=p(),lo=l("span"),gl=f("Player:"),vn=p(),te=l("input"),dn=p(),yn=l("br"),wn=l("br"),kn=p(),ro=l("span"),$l=f("Best Score:"),_n=p(),oe=l("input"),En=p(),io=l("h2"),Tn=f(i[3]),Mn=p(),Rn=l("br"),Pn=p(),rt=l("button"),er=f("Reset"),Bn=p(),In=l("br"),An=l("br"),Nn=p(),he=l("button"),Sn=f(i[4]),xn=p(),ve=l("button"),On=f(i[5]),Hn=p(),de=l("button"),Fn=f(i[6]),Cn=p(),ye=l("button"),qn=f(i[7]),Un=p(),we=l("span"),tr=f("Operator: "),Dn=f(Yo),jn=p(),ke=l("span"),or=f("Score: "),Wn=f(Lo),zn=p(),Yn=l("br"),Ln=l("br"),Zn=p(),it=l("button"),nr=f("add"),Xn=p(),at=l("button"),sr=f("subtract"),Jn=p(),ft=l("button"),lr=f("multiply"),Vn=p(),ut=l("button"),rr=f("divide"),Gn=p(),pt=l("button"),ir=f("concat"),Kn=p(),_e=l("span"),Qn=f(i[1]),gn=p(),Ee=l("span"),$n=f(i[21]),es=p(),Te=l("span"),ts=f(i[2]),os=p(),ns=l("br"),ss=l("br"),ls=p(),mt=l("button"),ar=f("ROLL"),rs=p(),is=l("br"),as=l("br"),fs=p(),ct=l("button"),fr=f("test"),us=p(),We=l("button"),ps=f(i[16]),ms=p(),ze=l("button"),cs=f(i[17]),bs=p(),Ye=l("button"),hs=f(i[18]),vs=p(),Le=l("button"),ds=f(i[19]),ys=p(),ws=l("br"),ks=l("br"),_s=p(),bt=l("button"),ur=f("Back"),Es=p(),ht=l("button"),pr=f("Forward"),Ts=p(),ao=l("p"),mr=f(`Remember, just computing 20 isn't always enough. One of the numbers used to get 20 has to be the
	result of a prior computation`),Ms=p(),fo=l("p"),cr=f(`The function fu() is the brains behing the game of Score. Each time a number or operator is
	clicked, m2(fu) is called, the monad m2 is modified, and the change is reflected in the DOM. The
	state of play in M is an array of eight arrays. Let's call it ar. If an operator op is in ar[2]
	and two numbers a and b are in ar[1], fu calls calc(a,b,op) and the result is added to ar[0] and
	ar[3]. ar[0] are the numbers in the game interface. ar[3] hold numbers that have been computed. At
	least one of the numbers in ar[3] has to be used to compute 20 in order to gain a point. If the
	number of points reaches 5, fu causes "You win" to be displayed, sets the score back to 0, and
	calls runRoll, starting another round of play.`),Rs=p(),uo=l("p"),br=f(`At the end of fu(), two formatting functions are Called. The first, update(), refreshes the game
	buttons, causing them to reflect the current state of ar. The second hides buttons that correspond
	to values of undefine and shows buttons that correspond to numbers in ar. This is done by
	switching variables p in "style = 'display: p' back and forth between "none" and "inline".`),Ps=p(),vt=l("pre"),hr=f(i[46]),Bs=p(),po=l("p"),vr=f('Clicking "ROLL" calls runRoll() which, in turn, calls updateRoll() to re-set HTML variables.'),Is=p(),dt=l("pre"),dr=f(i[50]),As=p(),mo=l("p"),yr=f(`The "x = [ [], [], [], [], [0], [], [0], [] ]" format will be maintained throught game play. x[0]
	simulates the dice roll; x[1] recieves integers that are clicked; x[2] holds the operator; and
	x[4] contains numbers that are computed. x[4] makes sure at least one computed number is involved
	in arriving at 20. That's the reason, toward the end of fu(), that the intersection of a[0] and
	a[4] is examined when 20 is computed. Here are the first few functions called when a number is
	clicked:`),Ns=p(),yt=l("pre"),wr=f(i[51]),Ss=p(),co=l("p"),kr=f(`The first line of fu() is the calculation result that is generated whenever there are two items in
	(s)[1] and an operator in m2(s)[3]. The intersection is important in fu()'s bottom test. If
	"intersect", the intersection of m2(s)[1] and m2(s)[3], is empty intersect[0] returns false and
	the last test in fu fails, even though 20 was produced on the second computation.`),xs=p(),bo=l("p"),_r=f(`If no operator has been selected, it's possible to click a third number. The program doesn't
	complain, it just puts the number back for you with:`),Os=p(),wt=l("pre"),Er=f(i[52]),Hs=p(),ho=l("p"),Tr=f(`If you roll the dice and keep clicking on the leftmost number, you'll see the numbers shift back
	and forth on every try. The first element of m2(s)[0] keeps getting pulled out of the first
	position and pushed back on the right.`),Fs=p(),vo=l("p"),Mr=f(`sfunc() does some more DOM housekeeping. The buttons with dice number come and go as their CSS
	display strings are changed back and forth between "none" and "inline". fu() calls sfunc(). Here's
	how it is defined:`),Cs=p(),yo=l("p"),Rr=f(`For solitaire version presented here, a function named "m2" will will form a closure with M as
	follows: "m2 = M(x)" where x = [ [], [], [], [], [0], [], [0], [] ]. m2 will consume functions
	that, as the definition of M specifies, operate on x inside of M. x corresponds to the state of
	game play. After each click on a number or operator buttom, m2(fu) is called. The record of prior
	states kept in x[7] allows players to traverse the history of their choices.`),qs=p(),wo=l("p"),Pr=f(`In the solitaire version of the game of score, x in M(x) is, as mentioned above, the array of
	arrays [ [], [], [], [], [], [], [], [] ] where x[0] starts out as four integers simulating a
	throw of two six-sided, one twelve-sided, and one twenty-sided dice. x[1] and x[3] contain the
	number selected by the player, x[2] is the selected operator, and x[4] keeps track of the number
	of successes until the player wins by reaching 5, x[5] contains all prior states as the player
	selects numbers and operators and is used for reversing state a little or all the way back to the
	original roll. x[6] is an index of where in x[5] play is taking place, and x[7] contains every
	state during a round. using x[6] to travers the history of game play in both directions.`),Us=p(),ko=l("h2"),Br=f('Why I call them "monads"'),Ds=p(),_o=l("p"),Ir=f(`I call functions returned by M "monads", much to the consternation of some "functional
	programmers" who scoff at the idea that JavaScript could possibly have monads such as those
	defined in the Haskell programming language. Neither my monads nor the Haskell monads are Category
	Theory monads. Haskell monads insulate chained computation from the global space, consuming
	functions that return new Monads. Mine happen to do the same thing. Haskell monads need to
	navegate through various types but I don't bother with that. The definition of "M" shows that the
	returned function responds to arguments that are functions and also to the string "Stop."`),js=p(),Eo=l("p"),Ar=f(`In my opinion, trying to define JavaScript objects that resemble the basic monads found in the
	Haskell Prelude module, amusing though it may be, isn't likely to produce anything very useful.
	People who think Haskell, or the supposed mathematical category of Haskell types and functions
	called "Hask", are actually Category Theory categories are mistaken. Category Theory inspired the
	development of Haskell monads and it might not be merely coincidental that the monads I am about
	to define are functionally similar to Haskell monads, though superficially quite different. Both
	transform state along pipelines isolated from their outer scope by operating on functions that
	return new monads. Both preserve state for future transformations or for eventual use in their
	outer scopes. Mine call functions in their outer scopes in order to update the DOM, not having to
	wait to do it in a main() function. I'm not trying to mimic Haskell or any other functional
	programming language.`),Ws=f(`

Caution:
`),kt=l("pre"),Nr=f(i[61]),zs=p(),Ys=l("br"),Ls=l("br"),this.h()},l(e){T=r(e,"H1",{});var o=b(T);c=u(o,"HOME"),o.forEach(t),A=m(e),Sa('[data-svelte="svelte-137tvu"]',document.head).forEach(t),N=m(e),d=r(e,"BR",{}),h=m(e),X=r(e,"DIV",{});var jr=b(X);Me=u(jr,"**************************************************************************"),jr.forEach(t),W=m(e),B=r(e,"DIV",{style:!0});var xr=b(B);Et=r(xr,"BR",{}),ne=u(xr,`

	A Very Simple Recursive Closure Insulates and Controls State Transformations`),xr.forEach(t),se=m(e),le=r(e,"BR",{}),re=m(e),H=r(e,"P",{});var Zs=b(H);Re=u(Zs,`JavaScript monads are defined in various ways online and in print. I wouldn't say any of these
	definitions are right or wrong. Everyone is entitled to an opinion. Some of my thoughts on the
	matter will be in `),z=r(Zs,"A",{href:!0});var Wr=b(z);Pe=u(Wr,"Home"),Wr.forEach(t),J=u(Zs," and in an addendum."),Zs.forEach(t),Y=m(e),F=r(e,"P",{});var zr=b(F);V=u(zr,`The function M() (below) returns the function go(), thereby forming a closure. The returned
	function is named to facilitate recursion.  Here's the definition of M():`),zr.forEach(t),G=m(e),C=r(e,"PRE",{class:!0});var Yr=b(C);ie=u(Yr,i[47]),Yr.forEach(t),K=m(e),q=r(e,"P",{});var Xs=b(q);Be=u(Xs,`The function "ret" needs no functionality of its own. It just prompts the return of the current value of x. Here's the definition of ret() used on this page: `),Ie=r(Xs,"SPAN",{style:!0});var Lr=b(Ie);Xe=u(Lr,i[48]),Lr.forEach(t),Ae=u(Xs,"."),Xs.forEach(t),Ne=m(e),S=r(e,"P",{}),b(S).forEach(t),Se=m(e),Q=r(e,"P",{});var Zr=b(Q);Tt=u(Zr,`M(x) is most useful when the closure is named or, more precisely, when the function returned by
	M(x) is named. When M(x) is asigned a variable name, the value of "x" in M(x) can be preserved,
	transformed, and later used if it is eventually needed. "x" in M(x) will correspond to the state
	of play in the solitaire game of Score (below), but before we get to that, let's take a closer
	look at M and the function returned by M(x).`),Zr.forEach(t),g=m(e),$=r(e,"PRE",{class:!0});var Xr=b($);Mt=u(Xr,i[54]),Xr.forEach(t),Je=m(e),ae=r(e,"P",{});var Jr=b(ae);Rt=u(Jr,"The value held in the closure can be obtained later"),Jr.forEach(t),Ve=m(e),ee=r(e,"PRE",{class:!0});var Vr=b(ee);Pt=u(Vr,i[55]),Vr.forEach(t),Ge=m(e),P=r(e,"P",{});var Gr=b(P);To=u(Gr,"And later"),Gr.forEach(t),Bt=m(e),fe=r(e,"PRE",{class:!0});var Kr=b(fe);Mo=u(Kr,i[56]),Kr.forEach(t),It=m(e),xe=r(e,"P",{});var Qr=b(xe);Ro=u(Qr,'Here are a few more simple operations on the very simple monad "mon":'),Qr.forEach(t),At=m(e),Oe=r(e,"P",{});var gr=b(Oe);Po=u(gr,'We can set the value of x to 4 with the expression "mon = M(4)", or by modifying mon as follows:'),gr.forEach(t),Nt=m(e),ue=r(e,"PRE",{class:!0});var $r=b(ue);Ke=u($r,i[57]),$r.forEach(t),St=m(e),pe=r(e,"P",{});var ei=b(pe);Bo=u(ei,"These abreviations will be used from now on:"),ei.forEach(t),xt=m(e),me=r(e,"PRE",{class:!0});var ti=b(me);Io=u(ti,`const s = ret;
const log = console.log;
`),ti.forEach(t),Ot=m(e),L=r(e,"SPAN",{style:!0});var oi=b(L);Ao=u(oi,"Deep Clone:"),oi.forEach(t),Ht=m(e),He=r(e,"SPAN",{});var ni=b(He);No=u(ni,`I ran the following code in the Firefox.aurora console. The result verifies that mon2 defined by
	"var mon2 = M(mon(s))" is a deep clone of mon. The mon2 closure is out of reach by everything in
	its outer scope, and the mon closure is no exception.`),ni.forEach(t),Ft=m(e),ce=r(e,"PRE",{class:!0});var si=b(ce);So=u(si,i[57]),si.forEach(t),Ct=m(e),Z=r(e,"SPAN",{style:!0});var li=b(Z);xo=u(li,"Function Composition:"),li.forEach(t),qt=m(e),Fe=r(e,"SPAN",{});var ri=b(Fe);Oo=u(ri,`M provides a way to anonymously compose functions concisely and transparently; a good alternative
	to callback spahgetti.`),ri.forEach(t),Ut=m(e),be=r(e,"PRE",{class:!0});var ii=b(be);Ho=u(ii,i[58]),ii.forEach(t),Dt=m(e),U=r(e,"P",{});var _t=b(U);Fo=u(_t,'Recursive closures created by "M" will control a fairly complicated dice game called "Score" ('),Ce=r(_t,"A",{href:!0});var ai=b(Ce);Co=u(ai,"Link To Score"),ai.forEach(t),qo=u(_t,`). It's a solitaire version of a
	`),qe=r(_t,"A",{href:!0});var fi=b(qe);Uo=u(fi,"multiplayer version of the game"),fi.forEach(t),Do=u(_t,`
	I developed eight years ago based on a Haskell WebSockets server. The server code is
	`),Ue=r(_t,"A",{href:!0});var ui=b(Ue);jo=u(ui,"here"),ui.forEach(t),_t.forEach(t),jt=m(e),De=r(e,"P",{});var pi=b(De);a=u(pi,"These are the demonstration's event handlers:"),pi.forEach(t),k=m(e),x=r(e,"PRE",{class:!0});var mi=b(x);Qe=u(mi,i[53]),mi.forEach(t),Zo=m(e),ge=r(e,"P",{});var Or=b(ge);Qs=u(Or,"m4(s) is "),Wt=r(Or,"SPAN",{style:!0});var ci=b(Wt);Xo=u(ci,Wo),ci.forEach(t),Or.forEach(t),Jo=m(e),y=r(e,"P",{});var w=b(y);gs=r(w,"BR",{}),$s=m(w),zt=r(w,"BUTTON",{});var bi=b(zt);el=u(bi,"m4(cube)"),bi.forEach(t),tl=m(w),Yt=r(w,"BUTTON",{});var hi=b(Yt);ol=u(hi,"m4(square)"),hi.forEach(t),nl=m(w),sl=r(w,"BR",{}),ll=r(w,"BR",{}),rl=m(w),Lt=r(w,"SPAN",{style:!0});var vi=b(Lt);il=u(vi,"To call m4(pow(n)), enter n in the box ->"),vi.forEach(t),al=m(w),Zt=r(w,"INPUT",{type:!0,style:!0}),fl=m(w),ul=r(w,"BR",{}),pl=r(w,"BR",{}),ml=m(w),Xt=r(w,"SPAN",{style:!0});var di=b(Xt);cl=u(di,"To call m4(add(n)), enter n in the box ->"),di.forEach(t),bl=m(w),Jt=r(w,"INPUT",{type:!0,style:!0}),hl=m(w),vl=r(w,"BR",{}),dl=r(w,"BR",{}),yl=m(w),Vt=r(w,"SPAN",{style:!0});var yi=b(Vt);wl=u(yi,"To call m4(mult(n)), enter n in the box ->"),yi.forEach(t),kl=m(w),Gt=r(w,"INPUT",{type:!0,style:!0}),_l=m(w),El=r(w,"BR",{}),Tl=r(w,"BR",{}),Ml=m(w),Kt=r(w,"SPAN",{style:!0});var wi=b(Kt);Rl=u(wi,"To call m4(reset(n)), enter n in the box ->"),wi.forEach(t),Pl=m(w),Qt=r(w,"INPUT",{type:!0,style:!0}),Bl=m(w),Il=r(w,"BR",{}),Al=r(w,"BR",{}),w.forEach(t),Vo=m(e),gt=r(e,"P",{});var ki=b(gt);Nl=u(ki,`Next, x will be an array. Here are the functions responsible for the interactive demonstration
	below:`),ki.forEach(t),Go=m(e),$e=r(e,"PRE",{class:!0});var _i=b($e);Sl=u(_i,i[49]),_i.forEach(t),Ko=m(e),$t=r(e,"P",{});var Ei=b($t);xl=u(Ei,`If you click mon3 = mon3(g) four times and the click mon3 = mon3(g3), you will see that mon3(s)
	returns its original value, [1,2,3,4]. By the way, the "mon3 =" part of "mon3 = mon3(g)" is
	included solely to trigger updating of browser displays. Svelte doesn't have a virtual DOM, and
	merely changing objects isn't enough to trigger DOM updates. For example, arr = [1,2,3] doesn't
	change in the DOM when arr.push(888) is called. arr = arr afterwards or arr = arr.push(888)
	initially both do the trick.`),Ei.forEach(t),Qo=m(e),D=r(e,"DIV",{id:!0,style:!0});var Js=b(D);Ol=u(Js,"["),go=u(Js,zo),Hl=u(Js,"]"),Js.forEach(t),$o=m(e),en=r(e,"BR",{}),tn=r(e,"BR",{}),on=m(e),et=r(e,"BUTTON",{});var Ti=b(et);Fl=u(Ti,"mon3 = mon3(g)"),Ti.forEach(t),nn=m(e),tt=r(e,"BUTTON",{});var Mi=b(tt);Cl=u(Mi,"mon3 = mon3(g2)"),Mi.forEach(t),sn=m(e),ot=r(e,"BUTTON",{});var Ri=b(ot);ql=u(Ri,"mon3 = mon3(g3)"),Ri.forEach(t),ln=m(e),nt=r(e,"BUTTON",{});var Pi=b(nt);Ul=u(Pi,"mon3 = mon3(x => [1,2,3,4])"),Pi.forEach(t),rn=m(e),an=r(e,"BR",{}),fn=r(e,"BR",{}),un=u(e,`
Here's a contrived example showing one way asynchronous code can be handled:
`),st=r(e,"PRE",{class:!0});var Bi=b(st);Dl=u(Bi,i[59]),Bi.forEach(t),pn=m(e),j=r(e,"P",{});var Ze=b(j);jl=u(Ze,"A robust monad that deals with a variety of contingencies is at "),eo=r(Ze,"A",{href:!0});var Ii=b(eo);Wl=u(Ii,"Monad3"),Ii.forEach(t),zl=u(Ze,`. There's a more elaborate demonstration (Demonstration 1) at
	`),to=r(Ze,"A",{href:!0});var Ai=b(to);Yl=u(Ai,"functional-javascript"),Ai.forEach(t),Ll=u(Ze,`. I'm sticking with
	the simple monad generator M in this module. At
	`),oo=r(Ze,"A",{href:!0});var Ni=b(oo);Zl=u(Ni,"functional-javascript"),Ni.forEach(t),Xl=u(Ze,` the monad is defines
	as follows:`),Ze.forEach(t),mn=m(e),lt=r(e,"PRE",{class:!0});var Si=b(lt);Jl=u(Si,i[60]),Si.forEach(t),cn=m(e),je=r(e,"P",{});var Vs=b(je);Vl=u(Vs,`Now back to the little monad M and the game of score; a game involving four dice and two or
	three-stage arithmetic computations with the goal of arriving at the number 20. My son Alex taught
	it to me a decade ago, when he was in middle school. After some messy experiences with other
	programming languages, I turned to Haskell for the robust and easily maintainable backend that
	carried me through several experiments with front ends. The server can handle an indeterminate
	number of groups of interacting players. Each group has its own chat box and shared todo list, and
	all members always see the same dice roll as it gets whittled down by players selecting numbers.
	The backend can also compute all possible solutions to any roll, if any exist, to any throw of the
	dice. It also identifies all of the impossible-to-solve rolls. Players can gain a point by
	clicking "Impossible" unless another player finds a solution. In that case, they lose a point.
	Users can change the default number of dice sides from 6,6,12,and 20 and the goal from the default
	value of 20. A version of it is online at `),no=r(Vs,"A",{href:!0});var xi=b(no);Gl=u(xi,"https://score.schalk2.com"),xi.forEach(t),Kl=u(Vs,"."),Vs.forEach(t),bn=m(e),so=r(e,"P",{});var Oi=b(so);Ql=u(Oi,`This demonstration doesn't rely on a remote server, nor does it feature any Haskell code. It's
	just a little solitaire game providing an opportunity to consider the interesting possibilities of
	recursive closures. You can traverse the history of game play for the current roll. If you make a
	mistake, you can take back your move and do something else. If you traverse back and forth very
	far, subsequent computations will be very slow and the program might even crash. If you just take back a move, computations proceed normally.`),Oi.forEach(t),hn=m(e),lo=r(e,"SPAN",{});var Hi=b(lo);gl=u(Hi,"Player:"),Hi.forEach(t),vn=m(e),te=r(e,"INPUT",{style:!0,type:!0}),dn=m(e),yn=r(e,"BR",{}),wn=r(e,"BR",{}),kn=m(e),ro=r(e,"SPAN",{});var Fi=b(ro);$l=u(Fi,"Best Score:"),Fi.forEach(t),_n=m(e),oe=r(e,"INPUT",{style:!0,type:!0}),En=m(e),io=r(e,"H2",{});var Ci=b(io);Tn=u(Ci,i[3]),Ci.forEach(t),Mn=m(e),Rn=r(e,"BR",{}),Pn=m(e),rt=r(e,"BUTTON",{});var qi=b(rt);er=u(qi,"Reset"),qi.forEach(t),Bn=m(e),In=r(e,"BR",{}),An=r(e,"BR",{}),Nn=m(e),he=r(e,"BUTTON",{style:!0});var Ui=b(he);Sn=u(Ui,i[4]),Ui.forEach(t),xn=m(e),ve=r(e,"BUTTON",{style:!0});var Di=b(ve);On=u(Di,i[5]),Di.forEach(t),Hn=m(e),de=r(e,"BUTTON",{style:!0});var ji=b(de);Fn=u(ji,i[6]),ji.forEach(t),Cn=m(e),ye=r(e,"BUTTON",{style:!0});var Wi=b(ye);qn=u(Wi,i[7]),Wi.forEach(t),Un=m(e),we=r(e,"SPAN",{style:!0});var Hr=b(we);tr=u(Hr,"Operator: "),Dn=u(Hr,Yo),Hr.forEach(t),jn=m(e),ke=r(e,"SPAN",{style:!0});var Fr=b(ke);or=u(Fr,"Score: "),Wn=u(Fr,Lo),Fr.forEach(t),zn=m(e),Yn=r(e,"BR",{}),Ln=r(e,"BR",{}),Zn=m(e),it=r(e,"BUTTON",{});var zi=b(it);nr=u(zi,"add"),zi.forEach(t),Xn=m(e),at=r(e,"BUTTON",{});var Yi=b(at);sr=u(Yi,"subtract"),Yi.forEach(t),Jn=m(e),ft=r(e,"BUTTON",{});var Li=b(ft);lr=u(Li,"multiply"),Li.forEach(t),Vn=m(e),ut=r(e,"BUTTON",{});var Zi=b(ut);rr=u(Zi,"divide"),Zi.forEach(t),Gn=m(e),pt=r(e,"BUTTON",{});var Xi=b(pt);ir=u(Xi,"concat"),Xi.forEach(t),Kn=m(e),_e=r(e,"SPAN",{style:!0});var Ji=b(_e);Qn=u(Ji,i[1]),Ji.forEach(t),gn=m(e),Ee=r(e,"SPAN",{style:!0});var Vi=b(Ee);$n=u(Vi,i[21]),Vi.forEach(t),es=m(e),Te=r(e,"SPAN",{style:!0});var Gi=b(Te);ts=u(Gi,i[2]),Gi.forEach(t),os=m(e),ns=r(e,"BR",{}),ss=r(e,"BR",{}),ls=m(e),mt=r(e,"BUTTON",{});var Ki=b(mt);ar=u(Ki,"ROLL"),Ki.forEach(t),rs=m(e),is=r(e,"BR",{}),as=r(e,"BR",{}),fs=m(e),ct=r(e,"BUTTON",{});var Qi=b(ct);fr=u(Qi,"test"),Qi.forEach(t),us=m(e),We=r(e,"BUTTON",{style:!0});var gi=b(We);ps=u(gi,i[16]),gi.forEach(t),ms=m(e),ze=r(e,"BUTTON",{style:!0});var $i=b(ze);cs=u($i,i[17]),$i.forEach(t),bs=m(e),Ye=r(e,"BUTTON",{style:!0});var ea=b(Ye);hs=u(ea,i[18]),ea.forEach(t),vs=m(e),Le=r(e,"BUTTON",{style:!0});var ta=b(Le);ds=u(ta,i[19]),ta.forEach(t),ys=m(e),ws=r(e,"BR",{}),ks=r(e,"BR",{}),_s=m(e),bt=r(e,"BUTTON",{});var oa=b(bt);ur=u(oa,"Back"),oa.forEach(t),Es=m(e),ht=r(e,"BUTTON",{});var na=b(ht);pr=u(na,"Forward"),na.forEach(t),Ts=m(e),ao=r(e,"P",{});var sa=b(ao);mr=u(sa,`Remember, just computing 20 isn't always enough. One of the numbers used to get 20 has to be the
	result of a prior computation`),sa.forEach(t),Ms=m(e),fo=r(e,"P",{});var la=b(fo);cr=u(la,`The function fu() is the brains behing the game of Score. Each time a number or operator is
	clicked, m2(fu) is called, the monad m2 is modified, and the change is reflected in the DOM. The
	state of play in M is an array of eight arrays. Let's call it ar. If an operator op is in ar[2]
	and two numbers a and b are in ar[1], fu calls calc(a,b,op) and the result is added to ar[0] and
	ar[3]. ar[0] are the numbers in the game interface. ar[3] hold numbers that have been computed. At
	least one of the numbers in ar[3] has to be used to compute 20 in order to gain a point. If the
	number of points reaches 5, fu causes "You win" to be displayed, sets the score back to 0, and
	calls runRoll, starting another round of play.`),la.forEach(t),Rs=m(e),uo=r(e,"P",{});var ra=b(uo);br=u(ra,`At the end of fu(), two formatting functions are Called. The first, update(), refreshes the game
	buttons, causing them to reflect the current state of ar. The second hides buttons that correspond
	to values of undefine and shows buttons that correspond to numbers in ar. This is done by
	switching variables p in "style = 'display: p' back and forth between "none" and "inline".`),ra.forEach(t),Ps=m(e),vt=r(e,"PRE",{class:!0});var ia=b(vt);hr=u(ia,i[46]),ia.forEach(t),Bs=m(e),po=r(e,"P",{});var aa=b(po);vr=u(aa,'Clicking "ROLL" calls runRoll() which, in turn, calls updateRoll() to re-set HTML variables.'),aa.forEach(t),Is=m(e),dt=r(e,"PRE",{class:!0});var fa=b(dt);dr=u(fa,i[50]),fa.forEach(t),As=m(e),mo=r(e,"P",{});var ua=b(mo);yr=u(ua,`The "x = [ [], [], [], [], [0], [], [0], [] ]" format will be maintained throught game play. x[0]
	simulates the dice roll; x[1] recieves integers that are clicked; x[2] holds the operator; and
	x[4] contains numbers that are computed. x[4] makes sure at least one computed number is involved
	in arriving at 20. That's the reason, toward the end of fu(), that the intersection of a[0] and
	a[4] is examined when 20 is computed. Here are the first few functions called when a number is
	clicked:`),ua.forEach(t),Ns=m(e),yt=r(e,"PRE",{class:!0});var pa=b(yt);wr=u(pa,i[51]),pa.forEach(t),Ss=m(e),co=r(e,"P",{});var ma=b(co);kr=u(ma,`The first line of fu() is the calculation result that is generated whenever there are two items in
	(s)[1] and an operator in m2(s)[3]. The intersection is important in fu()'s bottom test. If
	"intersect", the intersection of m2(s)[1] and m2(s)[3], is empty intersect[0] returns false and
	the last test in fu fails, even though 20 was produced on the second computation.`),ma.forEach(t),xs=m(e),bo=r(e,"P",{});var ca=b(bo);_r=u(ca,`If no operator has been selected, it's possible to click a third number. The program doesn't
	complain, it just puts the number back for you with:`),ca.forEach(t),Os=m(e),wt=r(e,"PRE",{class:!0});var ba=b(wt);Er=u(ba,i[52]),ba.forEach(t),Hs=m(e),ho=r(e,"P",{});var ha=b(ho);Tr=u(ha,`If you roll the dice and keep clicking on the leftmost number, you'll see the numbers shift back
	and forth on every try. The first element of m2(s)[0] keeps getting pulled out of the first
	position and pushed back on the right.`),ha.forEach(t),Fs=m(e),vo=r(e,"P",{});var va=b(vo);Mr=u(va,`sfunc() does some more DOM housekeeping. The buttons with dice number come and go as their CSS
	display strings are changed back and forth between "none" and "inline". fu() calls sfunc(). Here's
	how it is defined:`),va.forEach(t),Cs=m(e),yo=r(e,"P",{});var da=b(yo);Rr=u(da,`For solitaire version presented here, a function named "m2" will will form a closure with M as
	follows: "m2 = M(x)" where x = [ [], [], [], [], [0], [], [0], [] ]. m2 will consume functions
	that, as the definition of M specifies, operate on x inside of M. x corresponds to the state of
	game play. After each click on a number or operator buttom, m2(fu) is called. The record of prior
	states kept in x[7] allows players to traverse the history of their choices.`),da.forEach(t),qs=m(e),wo=r(e,"P",{});var ya=b(wo);Pr=u(ya,`In the solitaire version of the game of score, x in M(x) is, as mentioned above, the array of
	arrays [ [], [], [], [], [], [], [], [] ] where x[0] starts out as four integers simulating a
	throw of two six-sided, one twelve-sided, and one twenty-sided dice. x[1] and x[3] contain the
	number selected by the player, x[2] is the selected operator, and x[4] keeps track of the number
	of successes until the player wins by reaching 5, x[5] contains all prior states as the player
	selects numbers and operators and is used for reversing state a little or all the way back to the
	original roll. x[6] is an index of where in x[5] play is taking place, and x[7] contains every
	state during a round. using x[6] to travers the history of game play in both directions.`),ya.forEach(t),Us=m(e),ko=r(e,"H2",{});var wa=b(ko);Br=u(wa,'Why I call them "monads"'),wa.forEach(t),Ds=m(e),_o=r(e,"P",{});var ka=b(_o);Ir=u(ka,`I call functions returned by M "monads", much to the consternation of some "functional
	programmers" who scoff at the idea that JavaScript could possibly have monads such as those
	defined in the Haskell programming language. Neither my monads nor the Haskell monads are Category
	Theory monads. Haskell monads insulate chained computation from the global space, consuming
	functions that return new Monads. Mine happen to do the same thing. Haskell monads need to
	navegate through various types but I don't bother with that. The definition of "M" shows that the
	returned function responds to arguments that are functions and also to the string "Stop."`),ka.forEach(t),js=m(e),Eo=r(e,"P",{});var _a=b(Eo);Ar=u(_a,`In my opinion, trying to define JavaScript objects that resemble the basic monads found in the
	Haskell Prelude module, amusing though it may be, isn't likely to produce anything very useful.
	People who think Haskell, or the supposed mathematical category of Haskell types and functions
	called "Hask", are actually Category Theory categories are mistaken. Category Theory inspired the
	development of Haskell monads and it might not be merely coincidental that the monads I am about
	to define are functionally similar to Haskell monads, though superficially quite different. Both
	transform state along pipelines isolated from their outer scope by operating on functions that
	return new monads. Both preserve state for future transformations or for eventual use in their
	outer scopes. Mine call functions in their outer scopes in order to update the DOM, not having to
	wait to do it in a main() function. I'm not trying to mimic Haskell or any other functional
	programming language.`),_a.forEach(t),Ws=u(e,`

Caution:
`),kt=r(e,"PRE",{class:!0});var Ea=b(kt);Nr=u(Ea,i[61]),Ea.forEach(t),zs=m(e),Ys=r(e,"BR",{}),Ls=r(e,"BR",{}),this.h()},h(){document.title="Recursive Closures Without Mutating State",v(B,"font-family","Times New Roman"),v(B,"text-align","center"),v(B,"font-size","32px"),_(z,"href","./"),_(C,"class","svelte-14qv4oq"),v(Ie,"color","#55ffff"),_($,"class","svelte-14qv4oq"),_(ee,"class","svelte-14qv4oq"),_(fe,"class","svelte-14qv4oq"),_(ue,"class","svelte-14qv4oq"),_(me,"class","svelte-14qv4oq"),v(L,"font-size","26px"),v(L,"color","gold"),v(L,"text-decoration","underline"),_(ce,"class","svelte-14qv4oq"),v(Z,"font-size","26px"),v(Z,"color","gold"),v(Z,"text-decoration","underline"),_(be,"class","svelte-14qv4oq"),_(Ce,"href","#score"),_(qe,"href","https://score.schalk.net"),_(Ue,"href","./score"),_(x,"class","svelte-14qv4oq"),v(Wt,"font-size","54px"),v(Lt,"font-size","24px"),_(Zt,"type","text"),v(Zt,"width","65px"),v(Xt,"font-size","24px"),_(Jt,"type","text"),v(Jt,"width","65px"),v(Vt,"font-size","24px"),_(Gt,"type","text"),v(Gt,"width","65px"),v(Kt,"font-size","24px"),_(Qt,"type","text"),v(Qt,"width","65px"),_($e,"class","svelte-14qv4oq"),_(D,"id","score"),v(D,"margin-left","10%"),v(D,"font-size","44px"),v(D,"color","#ddaadd"),_(st,"class","svelte-14qv4oq"),_(eo,"href","/Functions/Archive/Monad3"),_(to,"href","https://functional-javascript.schalk2.com/"),_(oo,"href","https://functional-javascript.schalk2.com/"),_(lt,"class","svelte-14qv4oq"),_(no,"href","https://score.schalk2.com"),v(te,"color","black"),_(te,"type","text"),v(oe,"color","black"),_(oe,"type","number"),v(he,"display",i[8]),v(ve,"display",i[9]),v(de,"display",i[10]),v(ye,"display",i[11]),v(we,"margin-left","8%"),v(we,"font-size","32px"),v(ke,"margin-left","64px"),v(ke,"font-size","32px"),v(_e,"margin-left","20px"),v(_e,"color","#bbbbff"),v(_e,"font-size","28px"),v(Ee,"margin-left","20px"),v(Ee,"color","#bbbbff"),v(Ee,"font-size","38px"),v(Te,"margin-left","20px"),v(Te,"color","#bbbbff"),v(Te,"font-size","38px"),v(We,"display",i[12]),v(ze,"display",i[13]),v(Ye,"display",i[14]),v(Le,"display",i[15]),_(vt,"class","svelte-14qv4oq"),_(dt,"class","svelte-14qv4oq"),_(yt,"class","svelte-14qv4oq"),_(wt,"class","svelte-14qv4oq"),_(kt,"class","svelte-14qv4oq")},m(e,o){n(e,T,o),s(T,c),n(e,A,o),n(e,N,o),n(e,d,o),n(e,h,o),n(e,X,o),s(X,Me),n(e,W,o),n(e,B,o),s(B,Et),s(B,ne),n(e,se,o),n(e,le,o),n(e,re,o),n(e,H,o),s(H,Re),s(H,z),s(z,Pe),s(H,J),n(e,Y,o),n(e,F,o),s(F,V),n(e,G,o),n(e,C,o),s(C,ie),n(e,K,o),n(e,q,o),s(q,Be),s(q,Ie),s(Ie,Xe),s(q,Ae),n(e,Ne,o),n(e,S,o),n(e,Se,o),n(e,Q,o),s(Q,Tt),n(e,g,o),n(e,$,o),s($,Mt),n(e,Je,o),n(e,ae,o),s(ae,Rt),n(e,Ve,o),n(e,ee,o),s(ee,Pt),n(e,Ge,o),n(e,P,o),s(P,To),n(e,Bt,o),n(e,fe,o),s(fe,Mo),n(e,It,o),n(e,xe,o),s(xe,Ro),n(e,At,o),n(e,Oe,o),s(Oe,Po),n(e,Nt,o),n(e,ue,o),s(ue,Ke),n(e,St,o),n(e,pe,o),s(pe,Bo),n(e,xt,o),n(e,me,o),s(me,Io),n(e,Ot,o),n(e,L,o),s(L,Ao),n(e,Ht,o),n(e,He,o),s(He,No),n(e,Ft,o),n(e,ce,o),s(ce,So),n(e,Ct,o),n(e,Z,o),s(Z,xo),n(e,qt,o),n(e,Fe,o),s(Fe,Oo),n(e,Ut,o),n(e,be,o),s(be,Ho),n(e,Dt,o),n(e,U,o),s(U,Fo),s(U,Ce),s(Ce,Co),s(U,qo),s(U,qe),s(qe,Uo),s(U,Do),s(U,Ue),s(Ue,jo),n(e,jt,o),n(e,De,o),s(De,a),n(e,k,o),n(e,x,o),s(x,Qe),n(e,Zo,o),n(e,ge,o),s(ge,Qs),s(ge,Wt),s(Wt,Xo),n(e,Jo,o),n(e,y,o),s(y,gs),s(y,$s),s(y,zt),s(zt,el),s(y,tl),s(y,Yt),s(Yt,ol),s(y,nl),s(y,sl),s(y,ll),s(y,rl),s(y,Lt),s(Lt,il),s(y,al),s(y,Zt),s(y,fl),s(y,ul),s(y,pl),s(y,ml),s(y,Xt),s(Xt,cl),s(y,bl),s(y,Jt),s(y,hl),s(y,vl),s(y,dl),s(y,yl),s(y,Vt),s(Vt,wl),s(y,kl),s(y,Gt),s(y,_l),s(y,El),s(y,Tl),s(y,Ml),s(y,Kt),s(Kt,Rl),s(y,Pl),s(y,Qt),s(y,Bl),s(y,Il),s(y,Al),n(e,Vo,o),n(e,gt,o),s(gt,Nl),n(e,Go,o),n(e,$e,o),s($e,Sl),n(e,Ko,o),n(e,$t,o),s($t,xl),n(e,Qo,o),n(e,D,o),s(D,Ol),s(D,go),s(D,Hl),n(e,$o,o),n(e,en,o),n(e,tn,o),n(e,on,o),n(e,et,o),s(et,Fl),n(e,nn,o),n(e,tt,o),s(tt,Cl),n(e,sn,o),n(e,ot,o),s(ot,ql),n(e,ln,o),n(e,nt,o),s(nt,Ul),n(e,rn,o),n(e,an,o),n(e,fn,o),n(e,un,o),n(e,st,o),s(st,Dl),n(e,pn,o),n(e,j,o),s(j,jl),s(j,eo),s(eo,Wl),s(j,zl),s(j,to),s(to,Yl),s(j,Ll),s(j,oo),s(oo,Zl),s(j,Xl),n(e,mn,o),n(e,lt,o),s(lt,Jl),n(e,cn,o),n(e,je,o),s(je,Vl),s(je,no),s(no,Gl),s(je,Kl),n(e,bn,o),n(e,so,o),s(so,Ql),n(e,hn,o),n(e,lo,o),s(lo,gl),n(e,vn,o),n(e,te,o),Gs(te,i[26]),n(e,dn,o),n(e,yn,o),n(e,wn,o),n(e,kn,o),n(e,ro,o),s(ro,$l),n(e,_n,o),n(e,oe,o),Gs(oe,i[27]),n(e,En,o),n(e,io,o),s(io,Tn),n(e,Mn,o),n(e,Rn,o),n(e,Pn,o),n(e,rt,o),s(rt,er),n(e,Bn,o),n(e,In,o),n(e,An,o),n(e,Nn,o),n(e,he,o),s(he,Sn),n(e,xn,o),n(e,ve,o),s(ve,On),n(e,Hn,o),n(e,de,o),s(de,Fn),n(e,Cn,o),n(e,ye,o),s(ye,qn),n(e,Un,o),n(e,we,o),s(we,tr),s(we,Dn),n(e,jn,o),n(e,ke,o),s(ke,or),s(ke,Wn),n(e,zn,o),n(e,Yn,o),n(e,Ln,o),n(e,Zn,o),n(e,it,o),s(it,nr),n(e,Xn,o),n(e,at,o),s(at,sr),n(e,Jn,o),n(e,ft,o),s(ft,lr),n(e,Vn,o),n(e,ut,o),s(ut,rr),n(e,Gn,o),n(e,pt,o),s(pt,ir),n(e,Kn,o),n(e,_e,o),s(_e,Qn),n(e,gn,o),n(e,Ee,o),s(Ee,$n),n(e,es,o),n(e,Te,o),s(Te,ts),n(e,os,o),n(e,ns,o),n(e,ss,o),n(e,ls,o),n(e,mt,o),s(mt,ar),n(e,rs,o),n(e,is,o),n(e,as,o),n(e,fs,o),n(e,ct,o),s(ct,fr),n(e,us,o),n(e,We,o),s(We,ps),n(e,ms,o),n(e,ze,o),s(ze,cs),n(e,bs,o),n(e,Ye,o),s(Ye,hs),n(e,vs,o),n(e,Le,o),s(Le,ds),n(e,ys,o),n(e,ws,o),n(e,ks,o),n(e,_s,o),n(e,bt,o),s(bt,ur),n(e,Es,o),n(e,ht,o),s(ht,pr),n(e,Ts,o),n(e,ao,o),s(ao,mr),n(e,Ms,o),n(e,fo,o),s(fo,cr),n(e,Rs,o),n(e,uo,o),s(uo,br),n(e,Ps,o),n(e,vt,o),s(vt,hr),n(e,Bs,o),n(e,po,o),s(po,vr),n(e,Is,o),n(e,dt,o),s(dt,dr),n(e,As,o),n(e,mo,o),s(mo,yr),n(e,Ns,o),n(e,yt,o),s(yt,wr),n(e,Ss,o),n(e,co,o),s(co,kr),n(e,xs,o),n(e,bo,o),s(bo,_r),n(e,Os,o),n(e,wt,o),s(wt,Er),n(e,Hs,o),n(e,ho,o),s(ho,Tr),n(e,Fs,o),n(e,vo,o),s(vo,Mr),n(e,Cs,o),n(e,yo,o),s(yo,Rr),n(e,qs,o),n(e,wo,o),s(wo,Pr),n(e,Us,o),n(e,ko,o),s(ko,Br),n(e,Ds,o),n(e,_o,o),s(_o,Ir),n(e,js,o),n(e,Eo,o),s(Eo,Ar),n(e,Ws,o),n(e,kt,o),s(kt,Nr),n(e,zs,o),n(e,Ys,o),n(e,Ls,o),E=!0,Sr||(Dr=[M(zt,"click",i[40]),M(Yt,"click",i[39]),M(Zt,"keydown",i[41]),M(Jt,"keydown",i[42]),M(Gt,"keydown",i[43]),M(Qt,"keydown",i[44]),M(et,"click",i[62]),M(tt,"click",i[63]),M(ot,"click",i[64]),M(nt,"click",i[65]),M(te,"input",i[66]),M(oe,"input",i[67]),M(rt,"click",i[45]),M(he,"click",i[68]),M(ve,"click",i[69]),M(de,"click",i[70]),M(ye,"click",i[71]),M(it,"click",i[72]),M(at,"click",i[73]),M(ft,"click",i[74]),M(ut,"click",i[75]),M(pt,"click",i[76]),M(mt,"click",i[77]),M(ct,"click",i[78]),M(bt,"click",i[79]),M(ht,"click",i[80])],Sr=!0)},p(e,o){(!E||o[0]&33554432)&&Wo!==(Wo=parseFloat(e[25](e[28])).toFixed(5).toString()+"")&&I(Xo,Wo),(!E||o[0]&4194304)&&zo!==(zo=e[22](e[28]).join(", ")+"")&&I(go,zo),o[0]&67108864&&te.value!==e[26]&&Gs(te,e[26]),o[0]&134217728&&Ba(oe.value)!==e[27]&&Gs(oe,e[27]),(!E||o[0]&8)&&I(Tn,e[3]),(!E||o[0]&16)&&I(Sn,e[4]),(!E||o[0]&256)&&v(he,"display",e[8]),(!E||o[0]&32)&&I(On,e[5]),(!E||o[0]&512)&&v(ve,"display",e[9]),(!E||o[0]&64)&&I(Fn,e[6]),(!E||o[0]&1024)&&v(de,"display",e[10]),(!E||o[0]&128)&&I(qn,e[7]),(!E||o[0]&2048)&&v(ye,"display",e[11]),(!E||o[0]&1)&&Yo!==(Yo=e[0](e[28])[2]+"")&&I(Dn,Yo),(!E||o[0]&1)&&Lo!==(Lo=e[0](e[28])[4]+"")&&I(Wn,Lo),(!E||o[0]&2)&&I(Qn,e[1]),(!E||o[0]&2097152)&&I($n,e[21]),(!E||o[0]&4)&&I(ts,e[2]),(!E||o[0]&65536)&&I(ps,e[16]),(!E||o[0]&4096)&&v(We,"display",e[12]),(!E||o[0]&131072)&&I(cs,e[17]),(!E||o[0]&8192)&&v(ze,"display",e[13]),(!E||o[0]&262144)&&I(hs,e[18]),(!E||o[0]&16384)&&v(Ye,"display",e[14]),(!E||o[0]&524288)&&I(ds,e[19]),(!E||o[0]&32768)&&v(Le,"display",e[15])},i(e){E||(xa(()=>{O||(O=Ta(B,Ra,{},!0)),O.run(1)}),E=!0)},o(e){O||(O=Ta(B,Ra,{},!1)),O.run(0),E=!1},d(e){e&&t(T),e&&t(A),e&&t(N),e&&t(d),e&&t(h),e&&t(X),e&&t(W),e&&t(B),e&&O&&O.end(),e&&t(se),e&&t(le),e&&t(re),e&&t(H),e&&t(Y),e&&t(F),e&&t(G),e&&t(C),e&&t(K),e&&t(q),e&&t(Ne),e&&t(S),e&&t(Se),e&&t(Q),e&&t(g),e&&t($),e&&t(Je),e&&t(ae),e&&t(Ve),e&&t(ee),e&&t(Ge),e&&t(P),e&&t(Bt),e&&t(fe),e&&t(It),e&&t(xe),e&&t(At),e&&t(Oe),e&&t(Nt),e&&t(ue),e&&t(St),e&&t(pe),e&&t(xt),e&&t(me),e&&t(Ot),e&&t(L),e&&t(Ht),e&&t(He),e&&t(Ft),e&&t(ce),e&&t(Ct),e&&t(Z),e&&t(qt),e&&t(Fe),e&&t(Ut),e&&t(be),e&&t(Dt),e&&t(U),e&&t(jt),e&&t(De),e&&t(k),e&&t(x),e&&t(Zo),e&&t(ge),e&&t(Jo),e&&t(y),e&&t(Vo),e&&t(gt),e&&t(Go),e&&t($e),e&&t(Ko),e&&t($t),e&&t(Qo),e&&t(D),e&&t($o),e&&t(en),e&&t(tn),e&&t(on),e&&t(et),e&&t(nn),e&&t(tt),e&&t(sn),e&&t(ot),e&&t(ln),e&&t(nt),e&&t(rn),e&&t(an),e&&t(fn),e&&t(un),e&&t(st),e&&t(pn),e&&t(j),e&&t(mn),e&&t(lt),e&&t(cn),e&&t(je),e&&t(bn),e&&t(so),e&&t(hn),e&&t(lo),e&&t(vn),e&&t(te),e&&t(dn),e&&t(yn),e&&t(wn),e&&t(kn),e&&t(ro),e&&t(_n),e&&t(oe),e&&t(En),e&&t(io),e&&t(Mn),e&&t(Rn),e&&t(Pn),e&&t(rt),e&&t(Bn),e&&t(In),e&&t(An),e&&t(Nn),e&&t(he),e&&t(xn),e&&t(ve),e&&t(Hn),e&&t(de),e&&t(Cn),e&&t(ye),e&&t(Un),e&&t(we),e&&t(jn),e&&t(ke),e&&t(zn),e&&t(Yn),e&&t(Ln),e&&t(Zn),e&&t(it),e&&t(Xn),e&&t(at),e&&t(Jn),e&&t(ft),e&&t(Vn),e&&t(ut),e&&t(Gn),e&&t(pt),e&&t(Kn),e&&t(_e),e&&t(gn),e&&t(Ee),e&&t(es),e&&t(Te),e&&t(os),e&&t(ns),e&&t(ss),e&&t(ls),e&&t(mt),e&&t(rs),e&&t(is),e&&t(as),e&&t(fs),e&&t(ct),e&&t(us),e&&t(We),e&&t(ms),e&&t(ze),e&&t(bs),e&&t(Ye),e&&t(vs),e&&t(Le),e&&t(ys),e&&t(ws),e&&t(ks),e&&t(_s),e&&t(bt),e&&t(Es),e&&t(ht),e&&t(Ts),e&&t(ao),e&&t(Ms),e&&t(fo),e&&t(Rs),e&&t(uo),e&&t(Ps),e&&t(vt),e&&t(Bs),e&&t(po),e&&t(Is),e&&t(dt),e&&t(As),e&&t(mo),e&&t(Ns),e&&t(yt),e&&t(Ss),e&&t(co),e&&t(xs),e&&t(bo),e&&t(Os),e&&t(wt),e&&t(Hs),e&&t(ho),e&&t(Fs),e&&t(vo),e&&t(Cs),e&&t(yo),e&&t(qs),e&&t(wo),e&&t(Us),e&&t(ko),e&&t(Ds),e&&t(_o),e&&t(js),e&&t(Eo),e&&t(Ws),e&&t(kt),e&&t(zs),e&&t(Ys),e&&t(Ls),Sr=!1,Oa(Dr)}}}function Ur(){}function Fa(i,T,c){var A=parseInt(i,10),N=parseInt(T,10);return c==="+"?A+N:c==="*"?A*N:c==="-"?A-N:c==="/"?A/N:c==="@"?" "+A+N:"fubar"}function Ca(i){var T=i.pop()**3;return i.unshift(T),i}function qa(i){return i.flatMap(T=>(T+1)**3)}function Ua(i){return i.flatMap(T=>Math.round(T**(1/3)))}function Cr(i){return JSON.parse(JSON.stringify(i))}function R(i){return function T(c){return c===Ur?i:(i=c(i),T)}}function qr(i){var T=i.split("/");return T.length>1?T[0]/T[1]:T[0]}function Da(i,T){return i.filter(c=>T.includes(c))}function ja(i,T,c){let A,N;Ma(i,Pa,a=>c(26,A=a)),Ma(i,Ks,a=>c(27,N=a)),console.log("top is",Ks);var d=Ur,h,X=1e3,Me=1001,W=0,B=0,Et,ne,ne="",J,Y,F,V,O="none",se="none",le="none",re="none",H="none",Re="none",z="none",Pe="none",J,Y,F,V,G,C,ie,K,q;q=a=>{var k=[[Math.floor(Math.random()*6)+1,Math.floor(Math.random()*6)+1,Math.floor(Math.random()*12)+1,Math.floor(Math.random()*20)+1],[],["+"],[],[a],[],[0],[]];return c(0,h=R(k)),c(0,h=R(h(Ur))),Ie(h),h(g),Ke&&St(),h};var Be="";function Ie(a){console.log("In updateRoll. m(s) is",a(d)),c(4,J=a(d)[0][0]),c(5,Y=a(d)[0][1]),c(6,F=a(d)[0][2]),c(7,V=a(d)[0][3]),c(16,G=a(d)[1][0]),c(17,C=a(d)[1][1]),c(18,ie=a(d)[1][2]),c(19,K=a(d)[1][3]),a(d)[2],a(d)[3],a(d)[4],c(8,O=c(9,se=c(10,le=c(11,re="inline")))),c(12,H=c(13,Re=c(14,z=c(15,Pe="none"))))}function Xe(){c(8,O=c(9,se=c(10,le=c(11,re=c(12,H=c(13,Re=c(14,z=c(15,Pe="none")))))))),J!=null&&c(8,O="inline"),Y!=null&&c(9,se="inline"),F!=null&&c(10,le="inline"),V!=null&&c(11,re="inline"),G!=null&&c(12,H="inline"),C!=null&&c(13,Re="inline"),ie!=null&&c(14,z="inline"),K!=null&&c(15,Pe="inline")}h=R([[Math.floor(Math.random()*6)+1,Math.floor(Math.random()*6)+1,Math.floor(Math.random()*12)+1,Math.floor(Math.random()*20)+1],[],["+"],[],[0],[],[0],[]]);var Ae=function(){c(4,J=h(d)[0][0]),c(5,Y=h(d)[0][1]),c(6,F=h(d)[0][2]),c(7,V=h(d)[0][3]),h(d)[2],h(d)[3],h(d)[4],c(16,G=h(d)[1][0]),c(17,C=h(d)[1][1]),c(18,ie=h(d)[1][2]),c(19,K=h(d)[1][3])};Ae();var Ne="",S=R([1,2,3,4]),Se;Se=a=>{if(a[5].length<1){c(0,h=R(a)),console.log("You're already all the way back");return}else{var k=a[7],a=a[5][a[5].length-1];a[7]=k,c(0,h=R(a)),Ae(),Xe()}};var Q;Q=a=>{var k=a[6][0];if(a[5].length===a[7].length){console.log("Already at the top"),c(0,h=R(a));return}else{var x=Cr(a[7]),a=a[7][k+1];a[7]=x,c(0,h=R(a)),Ae(),Xe()}};function Tt(){var a=h(d);return console.log("<><><><><><><><> xx is",a),console.log(a[0]),console.log("xx[5].length is ",a[5].length),console.log("index is",a[6]),c(0,h=R(a)),h}function g(a){a[5].push(Cr([a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7]])),a[7].push(Cr(a)),a[6][0]+=1;var k;a[4];var x;if(a[1].length===2&&a[2].length===1&&(x=a[1],k=Fa(a[1][0],a[1][1],a[2][0]),a[0].push(k),a[3].push(k),a[1]=[],c(0,h=R(a))),a[1].length===3&&a[0].push(a[1].pop()),k==20&&Da(x,a[3]).length>0){if(a[4][0]==2)pe(),Me<X&&(X=Me),c(21,Ne="You win! Your score is "),Ks.set([X]);else{var Qe=parseInt(a[4],10);Qe+=1,c(1,Be="           Your score increased to "+Qe),q(Qe)}setTimeout(()=>c(1,Be=c(21,Ne="")),8e3)}return Ae(),Xe(),h(d)}var $=a=>{a[1].push(a[0][0]),a[0].shift(),c(0,h=R(a)),h(g)},Mt=a=>{a[1].push(a[0].splice(1,1)[0]),c(0,h=R(a)),c(0,h=h(g))},Je=a=>{a[1].push(a[0].splice(2,1)[0]),c(0,h=R(a)),c(0,h=h(g))},ae=a=>{a[1].push(a[0].splice(3,1)[0]),c(0,h=R(a)),c(0,h=h(g))};function Rt(a){a[2]="+",c(0,h=R(a))}function Ve(a){a[2]="-",c(0,h=R(a))}function ee(a){a[2]="*",c(0,h=R(a))}function Pt(a){a[2]="/",c(0,h=R(a))}function Ge(a){a[2]="@",c(0,h=R(a))}var P=R(3.1415926535),To=a=>a**3,Bt=a=>k=>k**a,fe=a=>a*a,Mo=a=>k=>1*k+1*a,It=a=>k=>k*a,xe=a=>k=>a;function Ro(){c(25,P=P(fe))}function At(){c(25,P=P(To))}var Oe=function(k){var x=qr(k.target.value);k.keyCode==13&&c(25,P=P(Bt(x)))},Po=function(k){k.keyCode==13&&c(25,P=P(Mo(k.target.value)))},Nt=function(k){k.keyCode==13&&c(25,P=P(It(qr(k.target.value))))},ue=function(k){k.keyCode==13&&c(25,P=P(xe(qr(k.target.value))))},Ke=!0,St=function a(){Ke=!1,W>=9?(W=0,B+=1):W+=1,c(3,ne=B+"."+W),Et=setTimeout(()=>a(),100)};function pe(){clearTimeout(Et),c(2,Me=ne);var a=h(d);a[4]=[0],c(0,h=R(a)),W=0,B=0,c(3,ne=B+"."+W),Ke=!0}var Bo=`function fu (a) {                                    // fu
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
}`,xt=`function M (x) {
    return function go (func) {
        if (func === ret) return x
        else x = func(x);
        return go;
  }
}`,me="function ret () {}",Io=`var mon3 = M([1,2,3,4]);
function g(ar) {
    var x = (ar.pop())**3;
    ar.unshift(x);
  return ar;
};
function g2 (ar) {return (ar.flatMap(v => (v+1)**3))};
function g3 (ar) {return (ar.flatMap(v => Math.round(v**(1/3))))};`,Ot=`runRoll = x => {
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
};`,L=`var click0 = a => {
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
};`,Ao=`if (a[1].length === 3) {
    a[0].push(a[1].pop());  // Returns a clicked third number.
  };`,Ht=`function squareFu () {m4 = m4(square)};
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
};`,He=`var mon = M(2);
mon(v=>v**4)(v=>v+5)(v=>v*2);`,No=`mon('stop');  // 42
mon(v => v*v);`,Ft="mon('stop');  // 1764",ce=`var m3 = M(3);
var m4 = M(m3(s));
m3(v => v + 3);
m4(v => v + 4);

log("m3(s) * m4(s) is", m3(s) * m4(s))

m3(s) * m4(s) is 42`,So="M(2)(v=>v+1)(v=>v*2)(v=>v*7)(s) // 42",Ct=`var asyncMult = a => async b => {
    var d;
    if (!(b instanceof Promise)) return a * b;
    else d = await b;
    return a * d;
}

var asyncAdd = a => async b => {
    var d;
    if (!(b instanceof Promise)) return a + b;
    else d = await b;
    return a + d;
}

var m3 = M(3);

m3(asyncAdd(4))(asyncMult(6))(s).then(v => log("The result is", v));  // The result is 42
m3(asyncAdd(8))(asyncMult(2))(s).then(v => log("Now we are at", v));  // Now we are at 100
m3(asyncAdd(-51))(asyncMult(6/7))(s).then(v => log("And back to", v)) // And back to 42 `,Z=`function Comp ( AR = [] )  {
  var f_, p, run;
  var ar = AR.slice();
  var x = ar.pop();
  return run = (function run (x) {
    if (x === null || x === NaN ||
      x === undefined) x = f_('stop').pop();
    if (x instanceof Filt) {
      var z = ar.pop();
      if (x.filt(z)) x = z; else ar = [];
    }
    else if (x instanceof Promise) x.then(y =>
      {if (y != undefined && typeof y !== "boolean"
        && y === y && y.name !== "f_" && y.name !== "stop" ) {
      ar.push(y);
      diffRender()
    }})
    else if (x != undefined && x === x && x !== false
      && x.name !== "f_" && x.name !== "stop" ) {
      ar.push(x);
      diffRender()
    };
    function f_ (func) {
      if (func === 'stop' || func === 'S') return ar;
      else if (func === 'finish' || func === 'F') return Object.freeze(ar);
      else if (typeof func !== "function") p = func;
      else if (x instanceof Promise) p = x.then(v => func(v));
      else p = func(x);
      return run(p);
    };
    return f_;
  })(x)
}`,xo=`var s = dev;
var log = console.log;

function M (x) {
    return function go (func) {
        if (func === ret) return x
        else x = func(x);
        return go;
  }
}

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
// Two seconds after "1000" appears in the console log, "888" is displayed.`;const qt=()=>c(22,S=S(Ca)),Fe=()=>c(22,S=S(qa)),Oo=()=>c(22,S=S(Ua)),Ut=()=>c(22,S=S(a=>[1,2,3,4]));function be(){A=this.value,Pa.set(A)}function Ho(){N=Ba(this.value),Ks.set(N)}const Dt=()=>h($),U=()=>h(Mt),Fo=()=>h(Je),Ce=()=>h(ae),Co=()=>h(Rt),qo=()=>h(Ve),qe=()=>h(ee),Uo=()=>h(Pt),Do=()=>h(Ge),Ue=()=>h(q(h(d)[4][0])),jo=()=>Tt(),jt=()=>h(Se),De=()=>h(Q);return i.$$.update=()=>{i.$$.dirty[0]&2&&c(1,Be),i.$$.dirty[0]&2,i.$$.dirty[0]&1&&c(4,J=h(d)[0][0]),i.$$.dirty[0]&1&&c(5,Y=h(d)[0][1]),i.$$.dirty[0]&1&&c(6,F=h(d)[0][2]),i.$$.dirty[0]&1&&c(7,V=h(d)[0][3]),i.$$.dirty[0]&1&&h(d)[2],i.$$.dirty[0]&1&&h(d)[3],i.$$.dirty[0]&1&&h(d)[4],i.$$.dirty[0]&1&&c(16,G=h(d)[1][0]),i.$$.dirty[0]&1&&c(17,C=h(d)[1][1]),i.$$.dirty[0]&1&&c(18,ie=h(d)[1][2]),i.$$.dirty[0]&1&&c(19,K=h(d)[1][3]),i.$$.dirty[0]&1&&h(d)},[h,Be,Me,ne,J,Y,F,V,O,se,le,re,H,Re,z,Pe,G,C,ie,K,q,Ne,S,Se,Q,P,A,N,d,Tt,$,Mt,Je,ae,Rt,Ve,ee,Pt,Ge,Ro,At,Oe,Po,Nt,ue,pe,Bo,xt,me,Io,Ot,L,Ao,Ht,He,No,Ft,ce,So,Ct,Z,xo,qt,Fe,Oo,Ut,be,Ho,Dt,U,Fo,Ce,Co,qo,qe,Uo,Do,Ue,jo,jt,De]}class Xa extends Ia{constructor(T){super(),Aa(this,T,ja,Ha,Na,{},null,[-1,-1,-1,-1,-1])}}export{Xa as default};
