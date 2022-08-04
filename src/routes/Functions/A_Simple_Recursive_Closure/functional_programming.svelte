<h3>Home sweet home</h3>

<p>
	The following is copied from the "Functional Cargo Cult" section of <a
		href="https://legacy-monads.schalk2.com/">Legacy-Monads</a
	> These links are cited at the bottom:
</p>

<a href="https://www.youtube.com/watch?v=nm22duia0jU">Cargo Cult Programming video presentation</a>

<a href="https://www.youtube.com/watch?v=yvfAtIJbatg"
	>Cargo Cult Science -- Richard Feynman's 1974 Caltech lecture</a
>

<h3>FUNCTIONAL PROGRAMMING</h3>
<p>
	"Functional programming" means different things to different people. Applied to JavaScript, I wish
	it meant making good use JavaScript functions.
</p>

<p>
	Mimicking features of the Haskell programming language vaguely hoping Haskell's reliability, ease
	of maintenance, and other conveniences will come your way reminds me of the cargo cults. "The name
	derives from the belief which began among Melanesians in the late 19th and early 20th centuries
	that various ritualistic acts such as the building of an airplane runway will result in the
	appearance of material wealth, particularly highly desirable Western goods (i.e., "cargo"), via
	Western airplanes."
</p>

<h4>Cargo Cult</h4>
<p>
	According to the Wikipedia article "Cargo Cult", "a cargo cult is a belief system among members of
	a relatively undeveloped society in which adherents practice superstitious rituals hoping to bring
	modern goods supplied by a more technologically advanced society. <a
		href="https://en.wikipedia.org/wiki/Cargo_cult">Cargo Cult</a
	> The article goes on to say, "The name derives from the belief which began among Melanesians in the
	late 19th and early 20th centuries that various ritualistic acts such as the building of an airplane
	runway will result in the appearance of material wealth, particularly highly desirable Western goods
	(i.e., "cargo"), via Western airplanes." citing Burridge, Kenelm (1969). New Heaven, New Earth: A study
	of Millenarian Activities. London: Basil Blackwell. p. 48 and Lindstrom, Lamont (1993). Cargo Cult:
	Strange Stories of desire from Melanesia and beyond. Honolulu: University of Hawaii Press.
</p>

<p>
	Haskell programming language code has, in my experience, been wonderfully reliable and
	maintainable. The WebSockets server supporting two games and one of the monad demonstrations is a
	good example. Hoping to bring some of this Haskell goodness into my JavaScript code, I toyed with
	what I call "cargo cult functional JavaScript" for a time. Without thinking things through
	intelligently, I imposed strict type checking, referential transparency, and immutability on my
	JavaScript code in situations where these things needlessly caused clutter, inefficiency, code
	bloat, and obfuscation. I invented all sorts of "monads" along with monad transformers and
	mechanisms for lifting values into composite monadic types.
</p>

<p>
	Now that I have abandoned the folly of mindlessly mimicking features of functional programming
	languages, I can console myself with the thought that I wasn't the first and I wasn't the last
	JavaScript programmer to got lost in this manner. Strict typing where it serves no useful purpose
	and insisting on immutability where all it does is polute memory with useless intermediate values
	is trendy these days.
</p>

<p>
	Code where functions might collide over mutable global variables leads programmers to religeously
	avoid mutable global variables. I'm using the Svelte framework for this project, and my numerous
	modules are quite small. Mutable global variables can't cause problems because I have no modules
	or heirarchies of nested modules in which clashes might occur. Were I to constrain my creativity
	by following "best practices" regarding global variables, I would be engaging in another form of
	cargo cult coding, mindlessly micking forms that have no value.
</p>

<h4>References</h4>
<a href="https://www.youtube.com/watch?v=nm22duia0jU">Cargo Cult Programming video presentation</a>

<a href="https://www.youtube.com/watch?v=yvfAtIJbatg"
	>Cargo Cult Science -- Richard Feynman's 1974 Caltech lecture</a
>
