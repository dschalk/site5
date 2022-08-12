import { c as create_ssr_component, d as subscribe, e as escape, b as add_attribute } from "../../../../_app/immutable/chunks/index-e5fe3e4f.js";
import { top, userName } from "../../../endpoints/stores.js";
const score_svelte_svelte_type_style_lang = "";
const css = {
  code: "pre.svelte-14qv4oq{margin-left:3%}",
  map: null
};
var s = "stop";
function M(x) {
  return function go(func) {
    if (typeof func === "function") {
      x = func(x);
      return go;
    } else if (func === "stop")
      return x;
  };
}
const Score = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $userName, $$unsubscribe_userName;
  let $top, $$unsubscribe_top;
  $$unsubscribe_userName = subscribe(userName, (value) => $userName = value);
  $$unsubscribe_top = subscribe(top, (value) => $top = value);
  console.log("top is", top);
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
  var ZWIN = "";
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
  var caution = `var s = 'stop';
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
// Two seconds after "1000" appears in the console log, "888" is displayed.`;
  var start = `m2 = M(
    [ 
      [Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1,
      Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 20) + 1], 
      [], ['+'], [], [0], [], [0], [] 
    ]);`;
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
  return `${$$result.head += `${$$result.title = `<title>The Solitaire Game of Score</title>`, ""}`, ""}
<br>
<div>**************************************************************************</div>
<div style="${"font-family: Times New Roman; text-align:center; font-size: 32px;"}"><br>

	The State of Score Maintained in a Recursive Closure
</div>
<br>
<p>The game is held in the recursive closure returned initially by M(x) where M is: </p>
<pre class="${"svelte-14qv4oq"}">${escape(monad)}</pre>
<p>and x is an array of eight arrays defined as:</p>
<pre class="${"svelte-14qv4oq"}">${escape(start)}</pre>
<p>It doesn&#39;t matter what, if anything, the function ret() would do if it were to be called because it doesn&#39;t get called. It&#39;s only purpose is to cause go(), the function returned by M, to return the current state of the value x held in the closure that was created by running var some-name = M(x). M can also be used anonymously to chain functions as in <span style="${"color: #55ffff"}">M(2)(v=&gt;v+4)(v=&gt;v*7)(ret) = 42</span>. </p>


<p>Here, ret() is defined as  <span style="${"color: #55ffff"}">${escape(retCode)}</span>. Explanations of how M(x) works are below the game interface here and at &quot;Simple_Recursive_Closures a/k/a MONADS/Home.
	 </p>
<p>Your score will be the elapsed time after three rounds. A round is completed by computing the number 20 in two or three steps. For example, if your numbers are 1,3,4,20, you can complete the round in two steps with 4-3 and then 1 * 20. You&#39;ll have two 1&#39;s before the multiplication. It won&#39;t matter which one you use. If your first computation is 1 * 20, your numbers will be 3,4,20. You can still subtract 3 from 4 and multiply by 1, finishing in three steps instead of two. </p>

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
<p></p><h2>Background</h2>
	<p>Score is a game involving four dice and two or three-stage arithmetic computations with the goal of arriving at the number 20. My son Alex taught it to me a decade ago, when he was in middle school. I decided to make an online multi-player version. </p>
	<p>After some messy experiences developing a server with other	programming languages, I turned to Haskell for the robust and easily maintainable backend that carried me through several experiments with various front ends. The server can handle a large number of 	number of groups of interacting players. Each group has its own chat box and shared todo list, and all members always see the same dice roll as it gets whittled down by players selecting numbers. </p>
	<p>One of my fondest memories began with Alex asking me to to devise a way to display all solutions to a dice roll or else report that no solution exists. My initial impression was that an algorithm that could so that would be unreasonably complicated and resource intensive. But not long afterward, I was delighted -- maybe &quot;euphoric&quot; is the right word -- as I showed Alex a button on the player interface that would abort gameplay and display every way to get 20 in two or three steps. It even broke the solutions down into categories. My appreciation of the Haskell programming language continued to grow.</p>
	<p>In the online game, players can gain a point by	clicking &quot;Impossible&quot; unless another player finds a solution. In that case, the player who clicked &quot;Impossible&quot; loses a point. Players can change the default number of dice sides from 6,6,12,and 20 and the goal from the default
	value of 20. A drag and drop version of Score is online at <a href="${"https://score.schalk2.com"}">https://score.schalk2.com</a>.
</p>
<h2>About this Solitaire Version</h2>

<p>This demonstration doesn&#39;t rely on a remote server, nor does it feature any Haskell code. It&#39;s
	just a little solitaire game providing an opportunity to consider the interesting possibilities of
	recursive closures. You can traverse the history of game play for the current roll. If you make a
	mistake, you can take back your move and do something else. If you traverse back and forth very
	far, subsequent computations will be very slow and the program might even crash. If you just take back a move, computations proceed normally.
</p>
<p>The function fu() is the brains behing the game of Score. Each time a number or operator is
	clicked, m2(fu) is called, the monad m2 is modified, and the change is reflected in the DOM. The
	state of play in M is an array of seven arrays. Let&#39;s call it ar. If an operator op is in ar[2]
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
	arrays [ [], [], [], [], [], [], [], [], [] ] where x[0] starts out as four integers simulating a
	throw of two six-sided, one twelve-sided, and one twenty-sided dice. x[1] and x[3] contain the
	number selected by the player, x[2] is the selected operator, and x[4] keeps track of the number
	of successes until the player wins by reaching 5, x[5] contains all prior states as the player
	selects numbers and operators and is used for reversing state a little or all the way back to the
	original roll. x[6] is an index of where in x[5] play is taking place, and x[7] contains every
	state during a round. using x[6] to travers the history of game play in both directions.
</p>



<h2>Why I Call Them &quot;Monads&quot;</h2>

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



${slots.default ? slots.default({}) : ``}`;
});
export {
  Score as default
};
