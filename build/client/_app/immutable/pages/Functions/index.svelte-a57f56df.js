import{S as De,i as Ve,s as ze,a as m,l as n,r as s,K as Qe,h as t,c as u,m as o,n as c,u as r,q as Ee,p as W,b as i,G as l,E as Xe,M as Ye,N as je}from"../../chunks/index-cac77216.js";import{f as Oe}from"../../chunks/index-54fd7bcd.js";function Ze(Ke){let w,F,N,C,ie,R,f,le,ne,h,x,L,B,_,oe,q,p,se,k,re,me,U,g,ue,G,v,ce,j,I,fe,O,S,he,K,E,pe,D,A,de,V,d,ge,H,ve,ye,z,M,be,Q,P,we,X,T,Ce,Y,J,_e,Z,y,ke,$,b,Ie,ee;return{c(){w=m(),F=n("br"),N=m(),C=n("div"),ie=s("**************************************************************************"),R=m(),f=n("div"),le=n("br"),ne=s(`

	Some Thoughts About Functional Programming in JavaScript`),x=m(),L=n("br"),B=m(),_=n("h3"),oe=s("Home sweet home"),q=m(),p=n("p"),se=s('The following is copied from the "Functional Cargo Cult" section of '),k=n("a"),re=s("Legacy-Monads"),me=s(" These links are cited at the bottom:"),U=m(),g=n("a"),ue=s("Cargo Cult Programming video presentation"),G=m(),v=n("a"),ce=s("Cargo Cult Science -- Richard Feynman's 1974 Caltech lecture"),j=m(),I=n("h3"),fe=s("FUNCTIONAL PROGRAMMING"),O=m(),S=n("p"),he=s(`"Functional programming" means different things to different people. Applied to JavaScript, I wish
	it meant making good use JavaScript functions.`),K=m(),E=n("p"),pe=s(`Mimicking features of the Haskell programming language vaguely hoping Haskell's reliability, ease
	of maintenance, and other conveniences will come your way reminds me of the cargo cults. "The name
	derives from the belief which began among Melanesians in the late 19th and early 20th centuries
	that various ritualistic acts such as the building of an airplane runway will result in the
	appearance of material wealth, particularly highly desirable Western goods (i.e., "cargo"), via
	Western airplanes."`),D=m(),A=n("h4"),de=s("Cargo Cult"),V=m(),d=n("p"),ge=s(`According to the Wikipedia article "Cargo Cult", "a cargo cult is a belief system among members of
	a relatively undeveloped society in which adherents practice superstitious rituals hoping to bring
	modern goods supplied by a more technologically advanced society. `),H=n("a"),ve=s("Cargo Cult"),ye=s(` The article goes on to say, "The name derives from the belief which began among Melanesians in the
	late 19th and early 20th centuries that various ritualistic acts such as the building of an airplane
	runway will result in the appearance of material wealth, particularly highly desirable Western goods
	(i.e., "cargo"), via Western airplanes." citing Burridge, Kenelm (1969). New Heaven, New Earth: A study
	of Millenarian Activities. London: Basil Blackwell. p. 48 and Lindstrom, Lamont (1993). Cargo Cult:
	Strange Stories of desire from Melanesia and beyond. Honolulu: University of Hawaii Press.`),z=m(),M=n("p"),be=s(`Haskell programming language code has, in my experience, been wonderfully reliable and
	maintainable. The WebSockets server supporting two games and one of the monad demonstrations is a
	good example. Hoping to bring some of this Haskell goodness into my JavaScript code, I toyed with
	what I call "cargo cult functional JavaScript" for a time. Without thinking things through
	intelligently, I imposed strict type checking, referential transparency, and immutability on my
	JavaScript code in situations where these things needlessly caused clutter, inefficiency, code
	bloat, and obfuscation. I invented all sorts of "monads" along with monad transformers and
	mechanisms for lifting values into composite monadic types.`),Q=m(),P=n("p"),we=s(`Now that I have abandoned the folly of mindlessly mimicking features of functional programming
	languages, I can console myself with the thought that I wasn't the first and I wasn't the last
	JavaScript programmer to got lost in this manner. Strict typing where it serves no useful purpose
	and insisting on immutability where all it does is polute memory with useless intermediate values
	is trendy these days.`),X=m(),T=n("p"),Ce=s(`Code where functions might collide over mutable global variables leads programmers to religeously
	avoid mutable global variables. I'm using the Svelte framework for this project, and my numerous
	modules are quite small. Mutable global variables can't cause problems because I have no modules
	or heirarchies of nested modules in which clashes might occur. Were I to constrain my creativity
	by following "best practices" regarding global variables, I would be engaging in another form of
	cargo cult coding, mindlessly micking forms that have no value.`),Y=m(),J=n("h4"),_e=s("References"),Z=m(),y=n("a"),ke=s("Cargo Cult Programming video presentation"),$=m(),b=n("a"),Ie=s("Cargo Cult Science -- Richard Feynman's 1974 Caltech lecture"),this.h()},l(e){Qe('[data-svelte="svelte-1qqokw4"]',document.head).forEach(t),w=u(e),F=o(e,"BR",{}),N=u(e),C=o(e,"DIV",{});var Ae=c(C);ie=r(Ae,"**************************************************************************"),Ae.forEach(t),R=u(e),f=o(e,"DIV",{style:!0});var Se=c(f);le=o(Se,"BR",{}),ne=r(Se,`

	Some Thoughts About Functional Programming in JavaScript`),Se.forEach(t),x=u(e),L=o(e,"BR",{}),B=u(e),_=o(e,"H3",{});var He=c(_);oe=r(He,"Home sweet home"),He.forEach(t),q=u(e),p=o(e,"P",{});var te=c(p);se=r(te,'The following is copied from the "Functional Cargo Cult" section of '),k=o(te,"A",{href:!0});var Me=c(k);re=r(Me,"Legacy-Monads"),Me.forEach(t),me=r(te," These links are cited at the bottom:"),te.forEach(t),U=u(e),g=o(e,"A",{href:!0});var Pe=c(g);ue=r(Pe,"Cargo Cult Programming video presentation"),Pe.forEach(t),G=u(e),v=o(e,"A",{href:!0});var Te=c(v);ce=r(Te,"Cargo Cult Science -- Richard Feynman's 1974 Caltech lecture"),Te.forEach(t),j=u(e),I=o(e,"H3",{});var Je=c(I);fe=r(Je,"FUNCTIONAL PROGRAMMING"),Je.forEach(t),O=u(e),S=o(e,"P",{});var We=c(S);he=r(We,`"Functional programming" means different things to different people. Applied to JavaScript, I wish
	it meant making good use JavaScript functions.`),We.forEach(t),K=u(e),E=o(e,"P",{});var Fe=c(E);pe=r(Fe,`Mimicking features of the Haskell programming language vaguely hoping Haskell's reliability, ease
	of maintenance, and other conveniences will come your way reminds me of the cargo cults. "The name
	derives from the belief which began among Melanesians in the late 19th and early 20th centuries
	that various ritualistic acts such as the building of an airplane runway will result in the
	appearance of material wealth, particularly highly desirable Western goods (i.e., "cargo"), via
	Western airplanes."`),Fe.forEach(t),D=u(e),A=o(e,"H4",{});var Ne=c(A);de=r(Ne,"Cargo Cult"),Ne.forEach(t),V=u(e),d=o(e,"P",{});var ae=c(d);ge=r(ae,`According to the Wikipedia article "Cargo Cult", "a cargo cult is a belief system among members of
	a relatively undeveloped society in which adherents practice superstitious rituals hoping to bring
	modern goods supplied by a more technologically advanced society. `),H=o(ae,"A",{href:!0});var Re=c(H);ve=r(Re,"Cargo Cult"),Re.forEach(t),ye=r(ae,` The article goes on to say, "The name derives from the belief which began among Melanesians in the
	late 19th and early 20th centuries that various ritualistic acts such as the building of an airplane
	runway will result in the appearance of material wealth, particularly highly desirable Western goods
	(i.e., "cargo"), via Western airplanes." citing Burridge, Kenelm (1969). New Heaven, New Earth: A study
	of Millenarian Activities. London: Basil Blackwell. p. 48 and Lindstrom, Lamont (1993). Cargo Cult:
	Strange Stories of desire from Melanesia and beyond. Honolulu: University of Hawaii Press.`),ae.forEach(t),z=u(e),M=o(e,"P",{});var xe=c(M);be=r(xe,`Haskell programming language code has, in my experience, been wonderfully reliable and
	maintainable. The WebSockets server supporting two games and one of the monad demonstrations is a
	good example. Hoping to bring some of this Haskell goodness into my JavaScript code, I toyed with
	what I call "cargo cult functional JavaScript" for a time. Without thinking things through
	intelligently, I imposed strict type checking, referential transparency, and immutability on my
	JavaScript code in situations where these things needlessly caused clutter, inefficiency, code
	bloat, and obfuscation. I invented all sorts of "monads" along with monad transformers and
	mechanisms for lifting values into composite monadic types.`),xe.forEach(t),Q=u(e),P=o(e,"P",{});var Le=c(P);we=r(Le,`Now that I have abandoned the folly of mindlessly mimicking features of functional programming
	languages, I can console myself with the thought that I wasn't the first and I wasn't the last
	JavaScript programmer to got lost in this manner. Strict typing where it serves no useful purpose
	and insisting on immutability where all it does is polute memory with useless intermediate values
	is trendy these days.`),Le.forEach(t),X=u(e),T=o(e,"P",{});var Be=c(T);Ce=r(Be,`Code where functions might collide over mutable global variables leads programmers to religeously
	avoid mutable global variables. I'm using the Svelte framework for this project, and my numerous
	modules are quite small. Mutable global variables can't cause problems because I have no modules
	or heirarchies of nested modules in which clashes might occur. Were I to constrain my creativity
	by following "best practices" regarding global variables, I would be engaging in another form of
	cargo cult coding, mindlessly micking forms that have no value.`),Be.forEach(t),Y=u(e),J=o(e,"H4",{});var qe=c(J);_e=r(qe,"References"),qe.forEach(t),Z=u(e),y=o(e,"A",{href:!0});var Ue=c(y);ke=r(Ue,"Cargo Cult Programming video presentation"),Ue.forEach(t),$=u(e),b=o(e,"A",{href:!0});var Ge=c(b);Ie=r(Ge,"Cargo Cult Science -- Richard Feynman's 1974 Caltech lecture"),Ge.forEach(t),this.h()},h(){document.title="Functional Programming",Ee(f,"font-family","Times New Roman"),Ee(f,"text-align","center"),Ee(f,"font-size","32px"),W(k,"href","https://legacy-monads.schalk2.com/"),W(g,"href","https://www.youtube.com/watch?v=nm22duia0jU"),W(v,"href","https://www.youtube.com/watch?v=yvfAtIJbatg"),W(H,"href","https://en.wikipedia.org/wiki/Cargo_cult"),W(y,"href","https://www.youtube.com/watch?v=nm22duia0jU"),W(b,"href","https://www.youtube.com/watch?v=yvfAtIJbatg")},m(e,a){i(e,w,a),i(e,F,a),i(e,N,a),i(e,C,a),l(C,ie),i(e,R,a),i(e,f,a),l(f,le),l(f,ne),i(e,x,a),i(e,L,a),i(e,B,a),i(e,_,a),l(_,oe),i(e,q,a),i(e,p,a),l(p,se),l(p,k),l(k,re),l(p,me),i(e,U,a),i(e,g,a),l(g,ue),i(e,G,a),i(e,v,a),l(v,ce),i(e,j,a),i(e,I,a),l(I,fe),i(e,O,a),i(e,S,a),l(S,he),i(e,K,a),i(e,E,a),l(E,pe),i(e,D,a),i(e,A,a),l(A,de),i(e,V,a),i(e,d,a),l(d,ge),l(d,H),l(H,ve),l(d,ye),i(e,z,a),i(e,M,a),l(M,be),i(e,Q,a),i(e,P,a),l(P,we),i(e,X,a),i(e,T,a),l(T,Ce),i(e,Y,a),i(e,J,a),l(J,_e),i(e,Z,a),i(e,y,a),l(y,ke),i(e,$,a),i(e,b,a),l(b,Ie),ee=!0},p:Xe,i(e){ee||(Ye(()=>{h||(h=je(f,Oe,{},!0)),h.run(1)}),ee=!0)},o(e){h||(h=je(f,Oe,{},!1)),h.run(0),ee=!1},d(e){e&&t(w),e&&t(F),e&&t(N),e&&t(C),e&&t(R),e&&t(f),e&&h&&h.end(),e&&t(x),e&&t(L),e&&t(B),e&&t(_),e&&t(q),e&&t(p),e&&t(U),e&&t(g),e&&t(G),e&&t(v),e&&t(j),e&&t(I),e&&t(O),e&&t(S),e&&t(K),e&&t(E),e&&t(D),e&&t(A),e&&t(V),e&&t(d),e&&t(z),e&&t(M),e&&t(Q),e&&t(P),e&&t(X),e&&t(T),e&&t(Y),e&&t(J),e&&t(Z),e&&t(y),e&&t($),e&&t(b)}}}class tt extends De{constructor(w){super(),Ve(this,w,null,Ze,ze,{})}}export{tt as default};
