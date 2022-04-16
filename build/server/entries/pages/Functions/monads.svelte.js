import { c as create_ssr_component, e as escape } from "../../../chunks/index-63796eb4.js";
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
const Monads = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  var m2;
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
  var mon3 = M([1, 2, 3, 4]);
  structuredClone;
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
      if (typeof func === "function") {
          x = func(x);
          return go;
      }
      else if (func === "stop") return x;
  }
};`;
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
  var example2 = `mon(v => 4)(s); // 4.`;
  var clone2 = `mon = M([ 1,[2],[[3]],[[{a:1, b:{c:2}}]] ])
var mon2 = M(mon(s));
log(mon(s) === mon2(s)); // true
mon(v => [ [], [] ]);
log(mon(s) === mon2(s)); // false

log("mon(s) is", mon(s)); // mon(s) is [ [], [] ]
log("mon2(s) is", mon2(s)); // mon2(s) is 
[ 1, (1) [\u2026], (1) [\u2026], (1) [\u2026] ]
0: 1
1: Array [ 2 ]
2: Array [ (1) [\u2026] ]
0: Array [ 3 ]
length: 1
<prototype>: Array []
3: Array [ (1) [\u2026] ]
0: Array [ {\u2026} ]
0: Object { a: 1, b: {\u2026} }
a: 1
b: Object { c: 2 }`;
  var example6 = `M(2)(v=>v+1)(v=>v*2)(v=>v*7)(s) // 42`;
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
  return `${$$result.head += `${$$result.title = `<title>Recursive Closures Without Mutating State </title>`, ""}<link rel="${"stylesheet"}" href="${"../Functions/style.css"}" data-svelte="svelte-3yzzxp">`, ""}
<br>
<div>**************************************************************************</div>
<div style="${"font-family: Times New Roman; text-align:center; font-size: 32px;"}"><br>

A Very Simple Recursive Closure Insulates and Controls State Transformations 
</div>
<br>
<p>JavaScript monads are defined in various ways online and in print. I wouldn&#39;t say any of these definitions are right or wrong. Everyone is entitled to an opinion. Some of my thoughts on the matter will be in <a href="${"./"}">Home</a> and in an addendum. </p>
<p>The function M() (below) returns the function go(), thereby forming a closure. The returned function is named to facilitate recursion. Here&#39;s the definition of M():</p>
<pre>${escape(monad)}</pre>
<p>M(x) is most useful when the closure is named or, more precisely, when the function returned by M(x) is named. When M(x) is asigned a variable name, the state of &quot;x&quot; in M(x) can be preserved, transformed, and later used when needed, as illustrated below:  </p>

<pre>${escape(example3)}</pre>
<p>The value held in the closure can be obtained later</p>
<pre>${escape(example4)}</pre>
<p>And later</p>
<pre>${escape(example5)}</pre>
<p>Here are a few more simple operations on the very simple monad &quot;mon&quot;:</p>
<p>We can set the value of x to 4 with a fresh closure, mon = M(4), or we can modify the one we have: </p>
<pre>${escape(example2)}</pre>
<p>These abreviations will be used from now on:</p>
<pre>var s = &quot;stop&quot;;
var log = console.log;
</pre>
<span style="${"font-size:26px; color: gold; text-decoration: underline"}">Deep Clone:</span>
<span>I ran the following code in firefox.aurora. The result verifies that mon2 defined by &quot;var mon2 = M(mon(s))&quot; is a deep clone of mon. The mon2 closure is out of reach by everything in its outer scope, and the mon closure is no exception.  </span>
<pre>${escape(clone2)}</pre>

<p>If you want to be certain that a computation won&#39;t clash with anything, you can use M() to perform computations without relying on variables.</p>
<pre>${escape(example6)}</pre>

<p>Recursive closures created by &quot;M&quot; will control a fairly complicated dice game called &quot;Score&quot; (<a href="${"#score"}">Link To Score</a>). It&#39;s a solitaire version of a <a href="${"https://score.schalk.net"}">multiplayer version of the game</a> I developed eight years ago based on a Haskell WebSockets server.</p> 

<p>For solitaire version presented here, a function named &quot;m2&quot; will will form a closure with M as follows: &quot;m2 = M(x)&quot; where x = [ [], [], [], [], [0], [], [0], [] ]. m2 will consume functions that, as the definition of M specifies, operate on x inside of M. x will correspond to the current state of game play. After each click on a number or operator buttom, m2(fu) is called.  as seen on a computer monitor and will keep a record of all prior states for each roll of the dice. The record of prior states allows players to traverse the history of their choices . Players can revert to prior states of game play and then move back to more recent states. Traversing states back and forth makes the browser sluggish . They can also traverse prior states of the game in the oposite direction.</p>

<p>In the solitaire version of the game of score below, x will be an array of arrays in the form x =  [ [], [], [], [], [], [], [], [], [] ] where x[0] starts out as four integers simulating a throw of two six-sided, one twelve-sided, and one twenty-sided dice. x[1] and x[3] contain the number selected by the player, x[2] is the selected operator, and x[4] keeps track of the number of successes until the player wins by reaching x[4] = 5, x[5] contains all prior states as the player selects numbers and operators and is used for reversing state a little or all the way back to the original roll, x[6] is an index of where in x[5] play is taking place, and x[7] contains every state during a round and uses x[6] to travers the history of game play forward. Before getting to that, here come two more simple examples. The first example shows callback functions used by buttons and text boxes. The second one shows operations on an array. </p> 

<p>These are the demonstration&#39;s event handlers: </p>
<pre>${escape(fuFuncs)}</pre>
<p>m4(s) is <span style="${"font-size:54px"}">${escape(parseFloat(m4(s)).toFixed(5).toString())}</span></p>
<br>
<button>m4(cube)</button>
<button>m4(square)</button>
<br><br>
<span style="${"font-size: 24px"}">To call m4(pow(n)), enter n in the box -&gt; </span> 
<input type="${"text"}" style="${"width: 65px"}">
<br><br>

<span style="${"font-size: 24px"}">To call m4(add(n)), enter n in the box -&gt; </span> 
<input type="${"number"}" style="${"width: 65px"}">
<br><br>

<span style="${"font-size: 24px"}">To call m4(mult(n)), enter n in the box -&gt; </span> 
<input type="${"text"}" style="${"width: 65px"}">
<br><br>

<span style="${"font-size: 24px"}">To call m4(reset(n)), enter n in the box -&gt; </span> 
<input type="${"number"}" style="${"width: 65px"}">
<br><br>
<p>Next, x will be an array. Here are the functions responsible for the interactive demonstration below:</p>
<pre>${escape(monad3)}</pre>
<p>If you click mon3 = mon3(g) four times and the click mon3 = mon3(g3), you will see that mon3(s) returns its original value, [1,2,3,4]. By the way, the &quot;mon3 =&quot; part of &quot;mon3 = mon3(g)&quot; is included solely to trigger updating of browser displays. Svelte doesn&#39;t have a virtual DOM, and merely changing objects isn&#39;t enough to trigger DOM updates. For example, arr = [1,2,3] doesn&#39;t change in the DOM when arr.push(888) is called. arr = arr afterwards or arr = arr.push(888) initially both do the trick.  </p>
<div id="${"score"}" style="${"margin-left: 10%; font-size:44px; color:#ddaadd"}">[${escape(mon3(s).join(", "))}]</div>
<br><br>
<button>mon3 = mon3(g)</button>
<button>mon3 = mon3(g2)</button>
<button>mon3 = mon3(g3)</button>
<button>mon3 = mon3(x =&gt; [1,2,3,4])</button>
<br><br>
<p>Now for the game of score, a game involving four dice and two or three-stage arithmetic computations with the goal of arriving at the number 20. My son Alex taught it to me a decade ago, when he was in middle school. I was also learning the Haskell programming language, so I developed a multiplayer online version with groups of interacting player, a chat box, and a shared-by-the-group todo list controlled by the Haskell WebSockets server backend. The backend could compute all possible solutions, if any existed, to any throw of the dice. It also identified all of the impossible-to-solve rolls. Users could change the default number of dice sides from 6,6,12,and 20 and the goal from the default value of 20. A version of it is online at <a href="${"https://score.schalk.net"}">https://score.schalk.net</a>.</p>

<p>This demonstration doesn&#39;t rely on a remote server, nor does it feature any Haskell code. It&#39;s just a little solitaire game providing an opportunity to consider the interesting possibilities of recursive closures. You can traverse the history of game play for current roll. If you make a mistake, you can take back your move and do something else. If you traverse back and forth over several number and operator selection, your computation will be very slow and the program might crash.   </p>
<h3>Score: ${escape(m2(s)[4])}</h3>

<button style="${"display: " + escape(b0)}">${escape(AA)}</button> 
<button style="${"display: " + escape(b1)}">${escape(BB)}</button> 
<button style="${"display: " + escape(b2)}">${escape(CC)}</button> 
<button style="${"display: " + escape(b3)}">${escape(DD)}</button>
<span style="${"margin-left: 8%; font-size: 22px"}">The operator is ${escape(m2(s)[2])}</span>

<br><br>
<button>add</button>
<button>subtract</button>
<button>multiply</button>
<button>divide</button>
<button>concat</button>


<span style="${"margin-left: 20px; color:#bbbbff; font-size:28px"}">${escape(Z)}</span>
<span style="${"margin-left: 20px; color:#bbbbff; font-size:38px"}">${escape(ZWIN)}</span>
<br><br>
<button>ROLL</button>
<br><br>

<button>test</button>
<button style="${"display: " + escape(b4)}">${escape(WW)}</button> 
<button style="${"display: " + escape(b5)}">${escape(XX)}</button> 
<button style="${"display: " + escape(b6)}">${escape(YY)}</button> 
<button style="${"display: " + escape(b7)}">${escape(ZZ)}</button>
<br><br>
<button>Back</button>
<button>Forward</button>

<p>The function fu() is the brains behing the game of Score. Each time a number or operator is clicked, m2(fu) is called, the monad m2 is modified, and the change is reflected in the DOM. The state of play in M is an array of seven arrays. Let&#39;s call it ar. If an operator op is in ar[2] and two numbers a and b are in ar[1], fu calls calc(a,b,op) and the result is added to ar[0] and ar[3]. ar[0] are the numbers in the game interface. ar[3] hold numbers that have been computed. At least one of the numbers in ar[3] has to be used to compute 20 in order to gain a point. If the number of points reaches 5, fu causes &quot;You win&quot; to be displayed, sets the score back to 0, and calls runRoll, starting another round of play. </p> 
<p>At the end of fu(), two formatting functions are Called. The first, update(), refreshes the game buttons, causing them to reflect the current state of ar. The second hides buttons that correspond to values of undefine and shows buttons that correspond to numbers in ar. This is done by switching variables p in &quot;style = &#39;display: p&#39; back and forth between &quot;none&quot; and &quot;inline&quot;. </p>
<pre>${escape(fuDem)}</pre>  

<p>Clicking &quot;ROLL&quot; calls runRoll() which, in turn, calls updateRoll() to re-set HTML variables.</p>
<pre>${escape(runR)}</pre>
<p>The &quot;x = [ [], [], [], [], [0], [], [0], [] ]&quot; format will be maintained throught game play. x[0] simulates the dice roll; x[1] recieves integers that are clicked; x[2] holds the operator; and x[4] contains numbers that are computed. x[4] makes sure at least one computed number is involved in arriving at 20. That&#39;s the reason, toward the end of fu(), that the intersection of a[0] and a[4] is examined when 20 is computed. Here are the first few functions called when a number is clicked:</p>
<pre>${escape(clickFuncs)}</pre>
<p>The first line of fu() is the calculation result that is generated whenever there are two items in (s)[1] and an operator in m2(s)[3]. The intersection is important in fu()&#39;s bottom test. If &quot;intersect&quot;, the intersection of m2(s)[1] and m2(s)[3], is empty intersect[0] returns false and the last test in fu fails, even though 20 was produced on the second computation.</p> 
<p>If no operator has been selected, it&#39;s possible to click a third number. The program doesn&#39;t complain, it just puts the number back for you with:</p>
<pre>${escape(putBack)}</pre>
<p>If you roll the dice and keep clicking on the leftmost number, you&#39;ll see the numbers shift back and forth on every try. The first element of m2(s)[0] keeps getting pulled out of the first position and pushed back on the right. </p>
<p>sfunc() does some more DOM housekeeping. The buttons with dice number come and go as their CSS display strings are changed back and forth between &quot;none&quot; and &quot;inline&quot;. fu() calls sfunc(). Here&#39;s how it is defined:</p>
<br><br><br>




<br><br>

<h2>ADDENDUM</h2>

<p>I call functions returned by M &quot;monads&quot;, much to the consternation of some &quot;functional programmers&quot; who scoff at the idea that JavaScript could possibly have monads such as those defined in the Haskell programming language. Neither my monads nor the Haskell monads are Category Theory monads. Haskell monads insulate chained computation from the global space, consuming functions that return new Monads. Mine happen to do the same thing. Haskell monads need to navegate through various types but I don&#39;t bother with that. The definition of &quot;M&quot; shows that the returned function responds to arguments that are functions and also to the string &quot;Stop.&quot; </p>

<p>In my opinion, trying to define JavaScript objects that resemble the basic monads found in the Haskell Prelude module, amusing though it may be, isn&#39;t likely to produce anything very useful. People who think Haskell, or the supposed mathematical category of Haskell types and functions called &quot;Hask&quot;, are actually Category Theory categories are mistaken. Category Theory inspired the development of Haskell monads and it might not be merely coincidental that the monads I am about to define are functionally similar to Haskell monads, though superficially quite different. Both transform state along pipelines isolated from their outer scope by operating on functions that return new monads. Both preserve state for future transformations or for eventual use in their outer scopes. Mine call functions in their outer scopes in order to update the DOM, not having to wait to do it in a main() function. I&#39;m not trying to mimic Haskell or any other functional programming language. </p>`;
});
export { Monads as default };
