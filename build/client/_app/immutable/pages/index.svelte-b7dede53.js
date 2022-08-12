import{S as He,i as Ae,s as Me,l as s,r as l,a as m,m as r,n as c,u as o,h as t,c as u,p as M,b as i,G as n,E as ue}from"../chunks/index-cac77216.js";function We(Ee){let h,z,W,f,D,b,Q,V,P,g,X,J,d,Y,T,w,Z,N,C,$,R,k,ee,F,I,te,L,p,ae,S,ie,ne,x,_,le,B,E,oe,O,H,se,U,A,re,G,y,ce,j,v,me;return{c(){h=s("h2"),z=l("HOME"),W=m(),f=s("p"),D=l('The following is copied from the "Functional Cargo Cult" section of '),b=s("a"),Q=l("Legacy-Monads"),V=l(" These links are cited at the bottom:"),P=m(),g=s("a"),X=l("Cargo Cult Programming video presentation"),J=m(),d=s("a"),Y=l("Cargo Cult Science -- Richard Feynman's 1974 Caltech lecture"),T=m(),w=s("h3"),Z=l("FUNCTIONAL PROGRAMMING"),N=m(),C=s("p"),$=l(`"Functional programming" means different things to different people. Applied to JavaScript, I wish
	it meant making good use JavaScript functions.`),R=m(),k=s("p"),ee=l(`Mimicking features of the Haskell programming language vaguely hoping Haskell's reliability, ease
	of maintenance, and other conveniences will come your way reminds me of the cargo cults. "The name
	derives from the belief which began among Melanesians in the late 19th and early 20th centuries
	that various ritualistic acts such as the building of an airplane runway will result in the
	appearance of material wealth, particularly highly desirable Western goods (i.e., "cargo"), via
	Western airplanes."`),F=m(),I=s("h4"),te=l("Cargo Cult"),L=m(),p=s("p"),ae=l(`According to the Wikipedia article "Cargo Cult", "a cargo cult is a belief system among members of
	a relatively undeveloped society in which adherents practice superstitious rituals hoping to bring
	modern goods supplied by a more technologically advanced society. `),S=s("a"),ie=l("Cargo Cult"),ne=l(` The article goes on to say, "The name derives from the belief which began among Melanesians in the
	late 19th and early 20th centuries that various ritualistic acts such as the building of an airplane
	runway will result in the appearance of material wealth, particularly highly desirable Western goods
	(i.e., "cargo"), via Western airplanes." citing Burridge, Kenelm (1969). New Heaven, New Earth: A study
	of Millenarian Activities. London: Basil Blackwell. p. 48 and Lindstrom, Lamont (1993). Cargo Cult:
	Strange Stories of desire from Melanesia and beyond. Honolulu: University of Hawaii Press.`),x=m(),_=s("p"),le=l(`Haskell programming language code has, in my experience, been wonderfully reliable and
	maintainable. The WebSockets server supporting two games and one of the monad demonstrations is a
	good example. Hoping to bring some of this Haskell goodness into my JavaScript code, I toyed with
	what I call "cargo cult functional JavaScript" for a time. Without thinking things through
	intelligently, I imposed strict type checking, referential transparency, and immutability on my
	JavaScript code in situations where these things needlessly caused clutter, inefficiency, code
	bloat, and obfuscation. I invented all sorts of "monads" along with monad transformers and
	mechanisms for lifting values into composite monadic types.`),B=m(),E=s("p"),oe=l(`Now that I have abandoned the folly of mindlessly mimicking features of functional programming
	languages, I can console myself with the thought that I wasn't the first and I wasn't the last
	JavaScript programmer to got lost in this manner. Strict typing where it serves no useful purpose
	and insisting on immutability where all it does is polute memory with useless intermediate values
	is trendy these days.`),O=m(),H=s("p"),se=l(`Code where functions might collide over mutable global variables leads programmers to religeously
	avoid mutable global variables. I'm using the Svelte framework for this project, and my numerous
	modules are quite small. Mutable global variables can't cause problems because I have no modules
	or heirarchies of nested modules in which clashes might occur. Were I to constrain my creativity
	by following "best practices" regarding global variables, I would be engaging in another form of
	cargo cult coding, mindlessly micking forms that have no value.`),U=m(),A=s("h4"),re=l("References"),G=m(),y=s("a"),ce=l("Cargo Cult Programming video presentation"),j=m(),v=s("a"),me=l("Cargo Cult Science -- Richard Feynman's 1974 Caltech lecture"),this.h()},l(e){h=r(e,"H2",{});var a=c(h);z=o(a,"HOME"),a.forEach(t),W=u(e),f=r(e,"P",{});var q=c(f);D=o(q,'The following is copied from the "Functional Cargo Cult" section of '),b=r(q,"A",{href:!0});var he=c(b);Q=o(he,"Legacy-Monads"),he.forEach(t),V=o(q," These links are cited at the bottom:"),q.forEach(t),P=u(e),g=r(e,"A",{href:!0});var fe=c(g);X=o(fe,"Cargo Cult Programming video presentation"),fe.forEach(t),J=u(e),d=r(e,"A",{href:!0});var pe=c(d);Y=o(pe,"Cargo Cult Science -- Richard Feynman's 1974 Caltech lecture"),pe.forEach(t),T=u(e),w=r(e,"H3",{});var ge=c(w);Z=o(ge,"FUNCTIONAL PROGRAMMING"),ge.forEach(t),N=u(e),C=r(e,"P",{});var de=c(C);$=o(de,`"Functional programming" means different things to different people. Applied to JavaScript, I wish
	it meant making good use JavaScript functions.`),de.forEach(t),R=u(e),k=r(e,"P",{});var ye=c(k);ee=o(ye,`Mimicking features of the Haskell programming language vaguely hoping Haskell's reliability, ease
	of maintenance, and other conveniences will come your way reminds me of the cargo cults. "The name
	derives from the belief which began among Melanesians in the late 19th and early 20th centuries
	that various ritualistic acts such as the building of an airplane runway will result in the
	appearance of material wealth, particularly highly desirable Western goods (i.e., "cargo"), via
	Western airplanes."`),ye.forEach(t),F=u(e),I=r(e,"H4",{});var ve=c(I);te=o(ve,"Cargo Cult"),ve.forEach(t),L=u(e),p=r(e,"P",{});var K=c(p);ae=o(K,`According to the Wikipedia article "Cargo Cult", "a cargo cult is a belief system among members of
	a relatively undeveloped society in which adherents practice superstitious rituals hoping to bring
	modern goods supplied by a more technologically advanced society. `),S=r(K,"A",{href:!0});var be=c(S);ie=o(be,"Cargo Cult"),be.forEach(t),ne=o(K,` The article goes on to say, "The name derives from the belief which began among Melanesians in the
	late 19th and early 20th centuries that various ritualistic acts such as the building of an airplane
	runway will result in the appearance of material wealth, particularly highly desirable Western goods
	(i.e., "cargo"), via Western airplanes." citing Burridge, Kenelm (1969). New Heaven, New Earth: A study
	of Millenarian Activities. London: Basil Blackwell. p. 48 and Lindstrom, Lamont (1993). Cargo Cult:
	Strange Stories of desire from Melanesia and beyond. Honolulu: University of Hawaii Press.`),K.forEach(t),x=u(e),_=r(e,"P",{});var we=c(_);le=o(we,`Haskell programming language code has, in my experience, been wonderfully reliable and
	maintainable. The WebSockets server supporting two games and one of the monad demonstrations is a
	good example. Hoping to bring some of this Haskell goodness into my JavaScript code, I toyed with
	what I call "cargo cult functional JavaScript" for a time. Without thinking things through
	intelligently, I imposed strict type checking, referential transparency, and immutability on my
	JavaScript code in situations where these things needlessly caused clutter, inefficiency, code
	bloat, and obfuscation. I invented all sorts of "monads" along with monad transformers and
	mechanisms for lifting values into composite monadic types.`),we.forEach(t),B=u(e),E=r(e,"P",{});var Ce=c(E);oe=o(Ce,`Now that I have abandoned the folly of mindlessly mimicking features of functional programming
	languages, I can console myself with the thought that I wasn't the first and I wasn't the last
	JavaScript programmer to got lost in this manner. Strict typing where it serves no useful purpose
	and insisting on immutability where all it does is polute memory with useless intermediate values
	is trendy these days.`),Ce.forEach(t),O=u(e),H=r(e,"P",{});var ke=c(H);se=o(ke,`Code where functions might collide over mutable global variables leads programmers to religeously
	avoid mutable global variables. I'm using the Svelte framework for this project, and my numerous
	modules are quite small. Mutable global variables can't cause problems because I have no modules
	or heirarchies of nested modules in which clashes might occur. Were I to constrain my creativity
	by following "best practices" regarding global variables, I would be engaging in another form of
	cargo cult coding, mindlessly micking forms that have no value.`),ke.forEach(t),U=u(e),A=r(e,"H4",{});var Ie=c(A);re=o(Ie,"References"),Ie.forEach(t),G=u(e),y=r(e,"A",{href:!0});var Se=c(y);ce=o(Se,"Cargo Cult Programming video presentation"),Se.forEach(t),j=u(e),v=r(e,"A",{href:!0});var _e=c(v);me=o(_e,"Cargo Cult Science -- Richard Feynman's 1974 Caltech lecture"),_e.forEach(t),this.h()},h(){M(b,"href","https://legacy-monads.schalk2.com/"),M(g,"href","https://www.youtube.com/watch?v=nm22duia0jU"),M(d,"href","https://www.youtube.com/watch?v=yvfAtIJbatg"),M(S,"href","https://en.wikipedia.org/wiki/Cargo_cult"),M(y,"href","https://www.youtube.com/watch?v=nm22duia0jU"),M(v,"href","https://www.youtube.com/watch?v=yvfAtIJbatg")},m(e,a){i(e,h,a),n(h,z),i(e,W,a),i(e,f,a),n(f,D),n(f,b),n(b,Q),n(f,V),i(e,P,a),i(e,g,a),n(g,X),i(e,J,a),i(e,d,a),n(d,Y),i(e,T,a),i(e,w,a),n(w,Z),i(e,N,a),i(e,C,a),n(C,$),i(e,R,a),i(e,k,a),n(k,ee),i(e,F,a),i(e,I,a),n(I,te),i(e,L,a),i(e,p,a),n(p,ae),n(p,S),n(S,ie),n(p,ne),i(e,x,a),i(e,_,a),n(_,le),i(e,B,a),i(e,E,a),n(E,oe),i(e,O,a),i(e,H,a),n(H,se),i(e,U,a),i(e,A,a),n(A,re),i(e,G,a),i(e,y,a),n(y,ce),i(e,j,a),i(e,v,a),n(v,me)},p:ue,i:ue,o:ue,d(e){e&&t(h),e&&t(W),e&&t(f),e&&t(P),e&&t(g),e&&t(J),e&&t(d),e&&t(T),e&&t(w),e&&t(N),e&&t(C),e&&t(R),e&&t(k),e&&t(F),e&&t(I),e&&t(L),e&&t(p),e&&t(x),e&&t(_),e&&t(B),e&&t(E),e&&t(O),e&&t(H),e&&t(U),e&&t(A),e&&t(G),e&&t(y),e&&t(j),e&&t(v)}}}class Je extends He{constructor(h){super(),Ae(this,h,null,We,Me,{})}}export{Je as default};
