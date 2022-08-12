import { c as create_ssr_component, d as subscribe, e as escape, b as add_attribute } from "../../../../_app/immutable/chunks/index-e5fe3e4f.js";
import { top, userName } from "../../../endpoints/stores.js";
const index_svelte_svelte_type_style_lang = "";
const css = {
  code: "pre.svelte-14qv4oq{margin-left:3%}",
  map: null
};
function ret() {
}
function M(x) {
  return function go(func) {
    if (func === ret)
      return x;
    else
      x = func(x);
    return go;
  };
}
const A_Simple_Recursive_Closure = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $userName, $$unsubscribe_userName;
  let $top, $$unsubscribe_top;
  $$unsubscribe_userName = subscribe(userName, (value) => $userName = value);
  $$unsubscribe_top = subscribe(top, (value) => $top = value);
  console.log("top is", top);
  var s = ret;
  var m2;
  var FIN = 1001;
  var d2;
  var d2 = "";
  var AA, BB, CC, DD;
  var b0 = "none";
  var b1 = "none";
  var b2 = "none";
  var b3 = "none";
  var b4 = "none";
  var b5 = "none";
  var b6 = "none";
  var b7 = "none";
  var AA;
  var BB;
  var CC;
  var DD;
  var WW;
  var XX;
  var YY;
  var ZZ;
  var Z = "";
  m2 = M([
    [
      Math.floor(Math.random() * 6) + 1,
      Math.floor(Math.random() * 6) + 1,
      Math.floor(Math.random() * 12) + 1,
      Math.floor(Math.random() * 20) + 1
    ],
    [],
    ["+"],
    [],
    [0],
    [],
    [0],
    []
  ]);
  var update = function update2() {
    AA = m2(s)[0][0];
    BB = m2(s)[0][1];
    CC = m2(s)[0][2];
    DD = m2(s)[0][3];
    m2(s)[2];
    m2(s)[3];
    m2(s)[4];
    WW = m2(s)[1][0];
    XX = m2(s)[1][1];
    YY = m2(s)[1][2];
    ZZ = m2(s)[1][3];
  };
  update();
  var ZWIN = "";
  var mon3 = M([1, 2, 3, 4]);
  var m4 = M(3.1415926535);
  var fuDem = `function fu (a) {                                    // fu
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
}`;
  var monad = `function M (x) {
    return function go (func) {
        if (func === ret) return x
        else x = func(x);
        return go;
  }
}`;
  var retCode = `function ret () {}`;
  var monad3 = `var mon3 = M([1,2,3,4]);
function g(ar) {
    var x = (ar.pop())**3;
    ar.unshift(x);
  return ar;
};
function g2 (ar) {return (ar.flatMap(v => (v+1)**3))};
function g3 (ar) {return (ar.flatMap(v => Math.round(v**(1/3))))};`;
  var runR = `runRoll = x => {
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
};`;
  var clickFuncs = `var click0 = a => {
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
};`;
  var putBack = `if (a[1].length === 3) {
    a[0].push(a[1].pop());  // Returns a clicked third number.
  };`;
  var fuFuncs = `function squareFu () {m4 = m4(square)};
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
};`;
  var example3 = `var mon = M(2);
mon(v=>v**4)(v=>v+5)(v=>v*2);`;
  var example4 = `mon('stop');  // 42
mon(v => v*v);`;
  var example5 = `mon('stop');  // 1764`;
  var example2 = `var m3 = M(3);
var m4 = M(m3(s));
m3(v => v + 3);
m4(v => v + 4);

log("m3(s) * m4(s) is", m3(s) * m4(s))

m3(s) * m4(s) is 42`;
  var example6 = `M(2)(v=>v+1)(v=>v*2)(v=>v*7)(s) // 42`;
  var async = `var asyncMult = a => async b => {
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
m3(asyncAdd(-51))(asyncMult(6/7))(s).then(v => log("And back to", v)) // And back to 42 `;
  var bigMonad = `function Comp ( AR = [] )  {
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
}`;
  var caution = `var s = dev;
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
// Two seconds after "1000" appears in the console log, "888" is displayed.`;
  $$result.css.add(css);
  Z = Z;
  AA = m2(s)[0][0];
  BB = m2(s)[0][1];
  CC = m2(s)[0][2];
  DD = m2(s)[0][3];
  m2(s)[2];
  m2(s)[3];
  m2(s)[4];
  WW = m2(s)[1][0];
  XX = m2(s)[1][1];
  YY = m2(s)[1][2];
  ZZ = m2(s)[1][3];
  m2(s);
  $$unsubscribe_userName();
  $$unsubscribe_top();
  return `<h1>HOME</h1>





${$$result.head += `${$$result.title = `<title>Recursive Closures Without Mutating State</title>`, ""}`, ""}
<br>
<div>**************************************************************************</div>
<div style="${"font-family: Times New Roman; text-align:center; font-size: 32px;"}"><br>

	A Very Simple Recursive Closure Insulates and Controls State Transformations
</div>
<br>
<p>JavaScript monads are defined in various ways online and in print. I wouldn&#39;t say any of these
	definitions are right or wrong. Everyone is entitled to an opinion. Some of my thoughts on the
	matter will be in <a href="${"./"}">Home</a> and in an addendum.
</p>
<p>The function M() (below) returns the function go(), thereby forming a closure. The returned
	function is named to facilitate recursion.  Here&#39;s the definition of M():
</p>
<pre class="${"svelte-14qv4oq"}">${escape(monad)}</pre>
<p>The function &quot;ret&quot; needs no functionality of its own. It just prompts the return of the current value of x. Here&#39;s the definition of ret() used on this page: <span style="${"color: #55ffff"}">${escape(retCode)}</span>. </p>
<p></p>
<p>M(x) is most useful when the closure is named or, more precisely, when the function returned by
	M(x) is named. When M(x) is asigned a variable name, the value of &quot;x&quot; in M(x) can be preserved,
	transformed, and later used if it is eventually needed. &quot;x&quot; in M(x) will correspond to the state
	of play in the solitaire game of Score (below), but before we get to that, let&#39;s take a closer
	look at M and the function returned by M(x).
</p>

<pre class="${"svelte-14qv4oq"}">${escape(example3)}</pre>
<p>The value held in the closure can be obtained later</p>
<pre class="${"svelte-14qv4oq"}">${escape(example4)}</pre>
<p>And later</p>
<pre class="${"svelte-14qv4oq"}">${escape(example5)}</pre>
<p>Here are a few more simple operations on the very simple monad &quot;mon&quot;:</p>
<p>We can set the value of x to 4 with the expression &quot;mon = M(4)&quot;, or by modifying mon as follows:
</p>
<pre class="${"svelte-14qv4oq"}">${escape(example2)}</pre>
<p>These abreviations will be used from now on:</p>
<pre class="${"svelte-14qv4oq"}">const s = ret;
const log = console.log;
</pre>
<span style="${"font-size:26px; color: gold; text-decoration: underline"}">Deep Clone:</span>
<span>I ran the following code in the Firefox.aurora console. The result verifies that mon2 defined by
	&quot;var mon2 = M(mon(s))&quot; is a deep clone of mon. The mon2 closure is out of reach by everything in
	its outer scope, and the mon closure is no exception.
</span>
<pre class="${"svelte-14qv4oq"}">${escape(example2)}</pre>

<span style="${"font-size:26px; color: gold; text-decoration: underline"}">Function Composition:</span>
<span>M provides a way to anonymously compose functions concisely and transparently; a good alternative
	to callback spahgetti.
</span>
<pre class="${"svelte-14qv4oq"}">${escape(example6)}</pre>

<p>Recursive closures created by &quot;M&quot; will control a fairly complicated dice game called &quot;Score&quot; (<a href="${"#score"}">Link To Score</a>). It&#39;s a solitaire version of a
	<a href="${"https://score.schalk.net"}">multiplayer version of the game</a>
	I developed eight years ago based on a Haskell WebSockets server. The server code is
	<a href="${"./score"}">here</a></p>

<p>These are the demonstration&#39;s event handlers:</p>
<pre class="${"svelte-14qv4oq"}">${escape(fuFuncs)}</pre>
<p>m4(s) is <span style="${"font-size:54px"}">${escape(parseFloat(m4(s)).toFixed(5).toString())}</span></p>
<p><br>
	<button>m4(cube)</button>
	<button>m4(square)</button>
	<br><br>
	<span style="${"font-size: 24px"}">To call m4(pow(n)), enter n in the box -&gt; </span>
	<input type="${"text"}" style="${"width: 65px"}">
	<br><br>

	<span style="${"font-size: 24px"}">To call m4(add(n)), enter n in the box -&gt; </span>
	<input type="${"text"}" style="${"width: 65px"}">
	<br><br>

	<span style="${"font-size: 24px"}">To call m4(mult(n)), enter n in the box -&gt; </span>
	<input type="${"text"}" style="${"width: 65px"}">
	<br><br>

	<span style="${"font-size: 24px"}">To call m4(reset(n)), enter n in the box -&gt; </span>
	<input type="${"text"}" style="${"width: 65px"}">
	<br><br></p>
<p>Next, x will be an array. Here are the functions responsible for the interactive demonstration
	below:
</p>
<pre class="${"svelte-14qv4oq"}">${escape(monad3)}</pre>
<p>If you click mon3 = mon3(g) four times and the click mon3 = mon3(g3), you will see that mon3(s)
	returns its original value, [1,2,3,4]. By the way, the &quot;mon3 =&quot; part of &quot;mon3 = mon3(g)&quot; is
	included solely to trigger updating of browser displays. Svelte doesn&#39;t have a virtual DOM, and
	merely changing objects isn&#39;t enough to trigger DOM updates. For example, arr = [1,2,3] doesn&#39;t
	change in the DOM when arr.push(888) is called. arr = arr afterwards or arr = arr.push(888)
	initially both do the trick.
</p>
<div id="${"score"}" style="${"margin-left: 10%; font-size:44px; color:#ddaadd"}">[${escape(mon3(s).join(", "))}]</div>
<br><br>
<button>mon3 = mon3(g)</button>
<button>mon3 = mon3(g2)</button>
<button>mon3 = mon3(g3)</button>
<button>mon3 = mon3(x =&gt; [1,2,3,4])</button>
<br><br>
Here&#39;s a contrived example showing one way asynchronous code can be handled:
<pre class="${"svelte-14qv4oq"}">${escape(async)}</pre>
<p>A robust monad that deals with a variety of contingencies is at <a href="${"/Functions/Archive/Monad3"}">Monad3</a>. There&#39;s a more elaborate demonstration (Demonstration 1) at
	<a href="${"https://functional-javascript.schalk2.com/"}">functional-javascript</a>. I&#39;m sticking with
	the simple monad generator M in this module. At
	<a href="${"https://functional-javascript.schalk2.com/"}">functional-javascript</a> the monad is defines
	as follows:
</p>
<pre class="${"svelte-14qv4oq"}">${escape(bigMonad)}</pre>
<p>Now back to the little monad M and the game of score; a game involving four dice and two or
	three-stage arithmetic computations with the goal of arriving at the number 20. My son Alex taught
	it to me a decade ago, when he was in middle school. After some messy experiences with other
	programming languages, I turned to Haskell for the robust and easily maintainable backend that
	carried me through several experiments with front ends. The server can handle an indeterminate
	number of groups of interacting players. Each group has its own chat box and shared todo list, and
	all members always see the same dice roll as it gets whittled down by players selecting numbers.
	The backend can also compute all possible solutions to any roll, if any exist, to any throw of the
	dice. It also identifies all of the impossible-to-solve rolls. Players can gain a point by
	clicking &quot;Impossible&quot; unless another player finds a solution. In that case, they lose a point.
	Users can change the default number of dice sides from 6,6,12,and 20 and the goal from the default
	value of 20. A version of it is online at <a href="${"https://score.schalk2.com"}">https://score.schalk2.com</a>.
</p>

<p>This demonstration doesn&#39;t rely on a remote server, nor does it feature any Haskell code. It&#39;s
	just a little solitaire game providing an opportunity to consider the interesting possibilities of
	recursive closures. You can traverse the history of game play for the current roll. If you make a
	mistake, you can take back your move and do something else. If you traverse back and forth very
	far, subsequent computations will be very slow and the program might even crash. If you just take back a move, computations proceed normally.
</p>


<span>Player: </span>
<input style="${"color: black; "}" type="${"text"}"${add_attribute("value", $userName, 0)}>
<br><br>
<span>Best Score: </span>
<input style="${"color: black;"}" type="${"number"}"${add_attribute("value", $top, 0)}>

<h2>${escape(d2)}</h2>

<br>
<button>Reset</button>
<br><br>
<button style="${"display: " + escape(b0, true)}">${escape(AA)}</button>
<button style="${"display: " + escape(b1, true)}">${escape(BB)}</button>
<button style="${"display: " + escape(b2, true)}">${escape(CC)}</button>
<button style="${"display: " + escape(b3, true)}">${escape(DD)}</button>
<span style="${"margin-left: 8%; font-size: 32px"}">Operator: ${escape(m2(s)[2])}</span>
<span style="${"margin-left: 64px; font-size: 32px"}">Score: ${escape(m2(s)[4])}</span>

<br><br>
<button>add</button>
<button>subtract</button>
<button>multiply</button>
<button>divide</button>
<button>concat</button>

<span style="${"margin-left: 20px; color:#bbbbff; font-size:28px"}">${escape(Z)}</span>
<span style="${"margin-left: 20px; color:#bbbbff; font-size:38px"}">${escape(ZWIN)}</span>
<span style="${"margin-left: 20px; color:#bbbbff; font-size:38px"}">${escape(FIN)}</span>

<br><br>
<button>ROLL</button>
<br><br>

<button>test</button>
<button style="${"display: " + escape(b4, true)}">${escape(WW)}</button>
<button style="${"display: " + escape(b5, true)}">${escape(XX)}</button>
<button style="${"display: " + escape(b6, true)}">${escape(YY)}</button>
<button style="${"display: " + escape(b7, true)}">${escape(ZZ)}</button>
<br><br>
<button>Back</button>
<button>Forward</button>

<p>Remember, just computing 20 isn&#39;t always enough. One of the numbers used to get 20 has to be the
	result of a prior computation
</p>
<p>The function fu() is the brains behing the game of Score. Each time a number or operator is
	clicked, m2(fu) is called, the monad m2 is modified, and the change is reflected in the DOM. The
	state of play in M is an array of eight arrays. Let&#39;s call it ar. If an operator op is in ar[2]
	and two numbers a and b are in ar[1], fu calls calc(a,b,op) and the result is added to ar[0] and
	ar[3]. ar[0] are the numbers in the game interface. ar[3] hold numbers that have been computed. At
	least one of the numbers in ar[3] has to be used to compute 20 in order to gain a point. If the
	number of points reaches 5, fu causes &quot;You win&quot; to be displayed, sets the score back to 0, and
	calls runRoll, starting another round of play.
</p>
<p>At the end of fu(), two formatting functions are Called. The first, update(), refreshes the game
	buttons, causing them to reflect the current state of ar. The second hides buttons that correspond
	to values of undefine and shows buttons that correspond to numbers in ar. This is done by
	switching variables p in &quot;style = &#39;display: p&#39; back and forth between &quot;none&quot; and &quot;inline&quot;.
</p>
<pre class="${"svelte-14qv4oq"}">${escape(fuDem)}</pre>

<p>Clicking &quot;ROLL&quot; calls runRoll() which, in turn, calls updateRoll() to re-set HTML variables.</p>
<pre class="${"svelte-14qv4oq"}">${escape(runR)}</pre>
<p>The &quot;x = [ [], [], [], [], [0], [], [0], [] ]&quot; format will be maintained throught game play. x[0]
	simulates the dice roll; x[1] recieves integers that are clicked; x[2] holds the operator; and
	x[4] contains numbers that are computed. x[4] makes sure at least one computed number is involved
	in arriving at 20. That&#39;s the reason, toward the end of fu(), that the intersection of a[0] and
	a[4] is examined when 20 is computed. Here are the first few functions called when a number is
	clicked:
</p>
<pre class="${"svelte-14qv4oq"}">${escape(clickFuncs)}</pre>
<p>The first line of fu() is the calculation result that is generated whenever there are two items in
	(s)[1] and an operator in m2(s)[3]. The intersection is important in fu()&#39;s bottom test. If
	&quot;intersect&quot;, the intersection of m2(s)[1] and m2(s)[3], is empty intersect[0] returns false and
	the last test in fu fails, even though 20 was produced on the second computation.
</p>
<p>If no operator has been selected, it&#39;s possible to click a third number. The program doesn&#39;t
	complain, it just puts the number back for you with:
</p>
<pre class="${"svelte-14qv4oq"}">${escape(putBack)}</pre>
<p>If you roll the dice and keep clicking on the leftmost number, you&#39;ll see the numbers shift back
	and forth on every try. The first element of m2(s)[0] keeps getting pulled out of the first
	position and pushed back on the right.
</p>
<p>sfunc() does some more DOM housekeeping. The buttons with dice number come and go as their CSS
	display strings are changed back and forth between &quot;none&quot; and &quot;inline&quot;. fu() calls sfunc(). Here&#39;s
	how it is defined:
</p>

<p>For solitaire version presented here, a function named &quot;m2&quot; will will form a closure with M as
	follows: &quot;m2 = M(x)&quot; where x = [ [], [], [], [], [0], [], [0], [] ]. m2 will consume functions
	that, as the definition of M specifies, operate on x inside of M. x corresponds to the state of
	game play. After each click on a number or operator buttom, m2(fu) is called. The record of prior
	states kept in x[7] allows players to traverse the history of their choices.
</p>

<p>In the solitaire version of the game of score, x in M(x) is, as mentioned above, the array of
	arrays [ [], [], [], [], [], [], [], [] ] where x[0] starts out as four integers simulating a
	throw of two six-sided, one twelve-sided, and one twenty-sided dice. x[1] and x[3] contain the
	number selected by the player, x[2] is the selected operator, and x[4] keeps track of the number
	of successes until the player wins by reaching 5, x[5] contains all prior states as the player
	selects numbers and operators and is used for reversing state a little or all the way back to the
	original roll. x[6] is an index of where in x[5] play is taking place, and x[7] contains every
	state during a round. using x[6] to travers the history of game play in both directions.
</p>




<h2>Why I call them &quot;monads&quot;</h2>

<p>I call functions returned by M &quot;monads&quot;, much to the consternation of some &quot;functional
	programmers&quot; who scoff at the idea that JavaScript could possibly have monads such as those
	defined in the Haskell programming language. Neither my monads nor the Haskell monads are Category
	Theory monads. Haskell monads insulate chained computation from the global space, consuming
	functions that return new Monads. Mine happen to do the same thing. Haskell monads need to
	navegate through various types but I don&#39;t bother with that. The definition of &quot;M&quot; shows that the
	returned function responds to arguments that are functions and also to the string &quot;Stop.&quot;
</p>

<p>In my opinion, trying to define JavaScript objects that resemble the basic monads found in the
	Haskell Prelude module, amusing though it may be, isn&#39;t likely to produce anything very useful.
	People who think Haskell, or the supposed mathematical category of Haskell types and functions
	called &quot;Hask&quot;, are actually Category Theory categories are mistaken. Category Theory inspired the
	development of Haskell monads and it might not be merely coincidental that the monads I am about
	to define are functionally similar to Haskell monads, though superficially quite different. Both
	transform state along pipelines isolated from their outer scope by operating on functions that
	return new monads. Both preserve state for future transformations or for eventual use in their
	outer scopes. Mine call functions in their outer scopes in order to update the DOM, not having to
	wait to do it in a main() function. I&#39;m not trying to mimic Haskell or any other functional
	programming language.
</p>

Caution:
<pre class="${"svelte-14qv4oq"}">${escape(caution)}</pre>
<br><br>



`;
});
export {
  A_Simple_Recursive_Closure as default
};
