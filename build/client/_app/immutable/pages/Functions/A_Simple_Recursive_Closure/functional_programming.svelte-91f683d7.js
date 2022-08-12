import{S as Ae,i as Ee,s as Me,l as s,r as l,a as c,m as r,n as m,u as o,h as t,c as u,p as M,b as i,G as n,E as ue}from"../../../chunks/index-cac77216.js";function We(He){let h,z,W,f,D,w,Q,V,P,g,X,J,d,Y,T,b,Z,N,C,$,F,k,ee,L,I,te,R,p,ae,S,ie,ne,x,_,le,B,H,oe,U,A,se,G,E,re,j,y,me,O,v,ce;return{c(){h=s("h3"),z=l("Home sweet home"),W=c(),f=s("p"),D=l('The following is copied from the "Functional Cargo Cult" section of '),w=s("a"),Q=l("Legacy-Monads"),V=l(" These links are cited at the bottom:"),P=c(),g=s("a"),X=l("Cargo Cult Programming video presentation"),J=c(),d=s("a"),Y=l("Cargo Cult Science -- Richard Feynman's 1974 Caltech lecture"),T=c(),b=s("h3"),Z=l("FUNCTIONAL PROGRAMMING"),N=c(),C=s("p"),$=l(`"Functional programming" means different things to different people. Applied to JavaScript, I wish
	it meant making good use JavaScript functions.`),F=c(),k=s("p"),ee=l(`Mimicking features of the Haskell programming language vaguely hoping Haskell's reliability, ease
	of maintenance, and other conveniences will come your way reminds me of the cargo cults. "The name
	derives from the belief which began among Melanesians in the late 19th and early 20th centuries
	that various ritualistic acts such as the building of an airplane runway will result in the
	appearance of material wealth, particularly highly desirable Western goods (i.e., "cargo"), via
	Western airplanes."`),L=c(),I=s("h4"),te=l("Cargo Cult"),R=c(),p=s("p"),ae=l(`According to the Wikipedia article "Cargo Cult", "a cargo cult is a belief system among members of
	a relatively undeveloped society in which adherents practice superstitious rituals hoping to bring
	modern goods supplied by a more technologically advanced society. `),S=s("a"),ie=l("Cargo Cult"),ne=l(` The article goes on to say, "The name derives from the belief which began among Melanesians in the
	late 19th and early 20th centuries that various ritualistic acts such as the building of an airplane
	runway will result in the appearance of material wealth, particularly highly desirable Western goods
	(i.e., "cargo"), via Western airplanes." citing Burridge, Kenelm (1969). New Heaven, New Earth: A study
	of Millenarian Activities. London: Basil Blackwell. p. 48 and Lindstrom, Lamont (1993). Cargo Cult:
	Strange Stories of desire from Melanesia and beyond. Honolulu: University of Hawaii Press.`),x=c(),_=s("p"),le=l(`Haskell programming language code has, in my experience, been wonderfully reliable and
	maintainable. The WebSockets server supporting two games and one of the monad demonstrations is a
	good example. Hoping to bring some of this Haskell goodness into my JavaScript code, I toyed with
	what I call "cargo cult functional JavaScript" for a time. Without thinking things through
	intelligently, I imposed strict type checking, referential transparency, and immutability on my
	JavaScript code in situations where these things needlessly caused clutter, inefficiency, code
	bloat, and obfuscation. I invented all sorts of "monads" along with monad transformers and
	mechanisms for lifting values into composite monadic types.`),B=c(),H=s("p"),oe=l(`Now that I have abandoned the folly of mindlessly mimicking features of functional programming
	languages, I can console myself with the thought that I wasn't the first and I wasn't the last
	JavaScript programmer to got lost in this manner. Strict typing where it serves no useful purpose
	and insisting on immutability where all it does is polute memory with useless intermediate values
	is trendy these days.`),U=c(),A=s("p"),se=l(`Code where functions might collide over mutable global variables leads programmers to religeously
	avoid mutable global variables. I'm using the Svelte framework for this project, and my numerous
	modules are quite small. Mutable global variables can't cause problems because I have no modules
	or heirarchies of nested modules in which clashes might occur. Were I to constrain my creativity
	by following "best practices" regarding global variables, I would be engaging in another form of
	cargo cult coding, mindlessly micking forms that have no value.`),G=c(),E=s("h4"),re=l("References"),j=c(),y=s("a"),me=l("Cargo Cult Programming video presentation"),O=c(),v=s("a"),ce=l("Cargo Cult Science -- Richard Feynman's 1974 Caltech lecture"),this.h()},l(e){h=r(e,"H3",{});var a=m(h);z=o(a,"Home sweet home"),a.forEach(t),W=u(e),f=r(e,"P",{});var q=m(f);D=o(q,'The following is copied from the "Functional Cargo Cult" section of '),w=r(q,"A",{href:!0});var he=m(w);Q=o(he,"Legacy-Monads"),he.forEach(t),V=o(q," These links are cited at the bottom:"),q.forEach(t),P=u(e),g=r(e,"A",{href:!0});var fe=m(g);X=o(fe,"Cargo Cult Programming video presentation"),fe.forEach(t),J=u(e),d=r(e,"A",{href:!0});var pe=m(d);Y=o(pe,"Cargo Cult Science -- Richard Feynman's 1974 Caltech lecture"),pe.forEach(t),T=u(e),b=r(e,"H3",{});var ge=m(b);Z=o(ge,"FUNCTIONAL PROGRAMMING"),ge.forEach(t),N=u(e),C=r(e,"P",{});var de=m(C);$=o(de,`"Functional programming" means different things to different people. Applied to JavaScript, I wish
	it meant making good use JavaScript functions.`),de.forEach(t),F=u(e),k=r(e,"P",{});var ye=m(k);ee=o(ye,`Mimicking features of the Haskell programming language vaguely hoping Haskell's reliability, ease
	of maintenance, and other conveniences will come your way reminds me of the cargo cults. "The name
	derives from the belief which began among Melanesians in the late 19th and early 20th centuries
	that various ritualistic acts such as the building of an airplane runway will result in the
	appearance of material wealth, particularly highly desirable Western goods (i.e., "cargo"), via
	Western airplanes."`),ye.forEach(t),L=u(e),I=r(e,"H4",{});var ve=m(I);te=o(ve,"Cargo Cult"),ve.forEach(t),R=u(e),p=r(e,"P",{});var K=m(p);ae=o(K,`According to the Wikipedia article "Cargo Cult", "a cargo cult is a belief system among members of
	a relatively undeveloped society in which adherents practice superstitious rituals hoping to bring
	modern goods supplied by a more technologically advanced society. `),S=r(K,"A",{href:!0});var we=m(S);ie=o(we,"Cargo Cult"),we.forEach(t),ne=o(K,` The article goes on to say, "The name derives from the belief which began among Melanesians in the
	late 19th and early 20th centuries that various ritualistic acts such as the building of an airplane
	runway will result in the appearance of material wealth, particularly highly desirable Western goods
	(i.e., "cargo"), via Western airplanes." citing Burridge, Kenelm (1969). New Heaven, New Earth: A study
	of Millenarian Activities. London: Basil Blackwell. p. 48 and Lindstrom, Lamont (1993). Cargo Cult:
	Strange Stories of desire from Melanesia and beyond. Honolulu: University of Hawaii Press.`),K.forEach(t),x=u(e),_=r(e,"P",{});var be=m(_);le=o(be,`Haskell programming language code has, in my experience, been wonderfully reliable and
	maintainable. The WebSockets server supporting two games and one of the monad demonstrations is a
	good example. Hoping to bring some of this Haskell goodness into my JavaScript code, I toyed with
	what I call "cargo cult functional JavaScript" for a time. Without thinking things through
	intelligently, I imposed strict type checking, referential transparency, and immutability on my
	JavaScript code in situations where these things needlessly caused clutter, inefficiency, code
	bloat, and obfuscation. I invented all sorts of "monads" along with monad transformers and
	mechanisms for lifting values into composite monadic types.`),be.forEach(t),B=u(e),H=r(e,"P",{});var Ce=m(H);oe=o(Ce,`Now that I have abandoned the folly of mindlessly mimicking features of functional programming
	languages, I can console myself with the thought that I wasn't the first and I wasn't the last
	JavaScript programmer to got lost in this manner. Strict typing where it serves no useful purpose
	and insisting on immutability where all it does is polute memory with useless intermediate values
	is trendy these days.`),Ce.forEach(t),U=u(e),A=r(e,"P",{});var ke=m(A);se=o(ke,`Code where functions might collide over mutable global variables leads programmers to religeously
	avoid mutable global variables. I'm using the Svelte framework for this project, and my numerous
	modules are quite small. Mutable global variables can't cause problems because I have no modules
	or heirarchies of nested modules in which clashes might occur. Were I to constrain my creativity
	by following "best practices" regarding global variables, I would be engaging in another form of
	cargo cult coding, mindlessly micking forms that have no value.`),ke.forEach(t),G=u(e),E=r(e,"H4",{});var Ie=m(E);re=o(Ie,"References"),Ie.forEach(t),j=u(e),y=r(e,"A",{href:!0});var Se=m(y);me=o(Se,"Cargo Cult Programming video presentation"),Se.forEach(t),O=u(e),v=r(e,"A",{href:!0});var _e=m(v);ce=o(_e,"Cargo Cult Science -- Richard Feynman's 1974 Caltech lecture"),_e.forEach(t),this.h()},h(){M(w,"href","https://legacy-monads.schalk2.com/"),M(g,"href","https://www.youtube.com/watch?v=nm22duia0jU"),M(d,"href","https://www.youtube.com/watch?v=yvfAtIJbatg"),M(S,"href","https://en.wikipedia.org/wiki/Cargo_cult"),M(y,"href","https://www.youtube.com/watch?v=nm22duia0jU"),M(v,"href","https://www.youtube.com/watch?v=yvfAtIJbatg")},m(e,a){i(e,h,a),n(h,z),i(e,W,a),i(e,f,a),n(f,D),n(f,w),n(w,Q),n(f,V),i(e,P,a),i(e,g,a),n(g,X),i(e,J,a),i(e,d,a),n(d,Y),i(e,T,a),i(e,b,a),n(b,Z),i(e,N,a),i(e,C,a),n(C,$),i(e,F,a),i(e,k,a),n(k,ee),i(e,L,a),i(e,I,a),n(I,te),i(e,R,a),i(e,p,a),n(p,ae),n(p,S),n(S,ie),n(p,ne),i(e,x,a),i(e,_,a),n(_,le),i(e,B,a),i(e,H,a),n(H,oe),i(e,U,a),i(e,A,a),n(A,se),i(e,G,a),i(e,E,a),n(E,re),i(e,j,a),i(e,y,a),n(y,me),i(e,O,a),i(e,v,a),n(v,ce)},p:ue,i:ue,o:ue,d(e){e&&t(h),e&&t(W),e&&t(f),e&&t(P),e&&t(g),e&&t(J),e&&t(d),e&&t(T),e&&t(b),e&&t(N),e&&t(C),e&&t(F),e&&t(k),e&&t(L),e&&t(I),e&&t(R),e&&t(p),e&&t(x),e&&t(_),e&&t(B),e&&t(H),e&&t(U),e&&t(A),e&&t(G),e&&t(E),e&&t(j),e&&t(y),e&&t(O),e&&t(v)}}}class Je extends Ae{constructor(h){super(),Ee(this,h,null,We,Me,{})}}export{Je as default};
