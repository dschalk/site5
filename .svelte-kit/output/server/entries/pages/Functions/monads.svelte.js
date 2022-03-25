import { c as create_ssr_component, e as escape } from "../../../chunks/index-2dc61825.js";
var s = "stop";
function calc(aa, bb, c) {
  var a = parseInt(aa, 10);
  var b = parseInt(bb, 10);
  if (c === "+")
    return a + b;
  else if (c === "*")
    return a * b;
  else if (c === "-")
    return a - b;
  else if (c === "/")
    return a / b;
  else if (c === "concat")
    return parseInt("" + a + b, 10);
  else
    return "fubar";
}
function M(x) {
  return function go(func) {
    if (typeof func === "function") {
      x = func(x);
      return go;
    } else if (func === "stop")
      return x;
  };
}
function intersection(a, b) {
  return a.filter((x) => b.includes(x));
}
const Monads = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var AA, BB, CC, DD, EE;
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
  var SCORE = [0];
  var m2;
  var Z = "";
  var fu;
  var x = [[0, 0, 0, 0], [], [], [], [0]];
  fu = (a) => {
    var result;
    var SCORE2 = parseInt(a[4][0], 10);
    console.log("In fu. SCORE is", SCORE2);
    var a1;
    if (a[1].length === 2 && a[2].length === 1) {
      a1 = a[1];
      result = calc(a[1][0], a[1][1], a[2][0]);
      a[0].push(result);
      a[3].push(result);
      a[1] = [];
    }
    if (a[1].length === 3) {
      a[0].push(a[1].pop());
    }
    if (result == 20 && intersection(a1, a[3])) {
      if (parseInt(a[4][0], 10) === 4) {
        a[4] = 0;
        Z = "You win! ";
        SCORE2 = 0;
      } else {
        SCORE2 += 1;
        Z = "Congratulations! You did it. Your score is " + SCORE2;
      }
      runRoll(SCORE2);
      setTimeout(() => Z = "", 3e3);
      console.log("Z is", Z);
    }
    update();
    sfunc();
    console.log("still in fu. m2(s) and SCORE are", m2(s), SCORE2);
    return a;
  };
  m2 = M(x);
  function runRoll(x2) {
    m2 = M([
      [
        Math.floor(Math.random() * 6) + 1,
        Math.floor(Math.random() * 6) + 1,
        Math.floor(Math.random() * 12) + 1,
        Math.floor(Math.random() * 20) + 1
      ],
      [],
      [],
      [],
      [x2]
    ]);
    updateRoll();
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
    m2(s)[3];
    SCORE = m2(s)[4];
    console.log("In updateRoll. SCORE is", SCORE);
    b0 = b1 = b2 = b3 = "inline";
    b4 = b5 = b6 = b7 = "none";
  };
  function sfunc() {
    b0 = b1 = b2 = b3 = b4 = b5 = b6 = b7 = "none";
    if (AA != void 0)
      b0 = "inline";
    if (BB != void 0)
      b1 = "inline";
    if (CC != void 0)
      b2 = "inline";
    if (DD != void 0)
      b3 = "inline";
    if (WW != void 0)
      b4 = "inline";
    if (XX != void 0)
      b5 = "inline";
    if (YY != void 0)
      b6 = "inline";
    if (ZZ != void 0)
      b7 = "inline";
  }
  var update = () => {
    AA = m2(s)[0][0];
    BB = m2(s)[0][1];
    CC = m2(s)[0][2];
    DD = m2(s)[0][3];
    EE = m2(s)[2];
    m2(s)[3];
    SCORE = m2(s)[4];
    WW = m2(s)[1][0];
    XX = m2(s)[1][1];
    YY = m2(s)[1][2];
    ZZ = m2(s)[1][3];
  };
  var mon3 = M([1, 2, 3, 4]);
  var m4 = M(3.1415926535);
  var monad = `function M (x) {
    return function go (func) {
        if (typeof func === "function") {
            x = func(x);
            return go;
        }
        else if (func === "stop") return x;
    }
};

m2 = M(any value); // The argument can be any JavaScript value
// For the game, the starting value is [ [0,0,0,0], [], [], [] ].`;
  var monad3 = `var mon3 = M([1,2,3,4]);
function g(ar) {
    var x = (ar.pop())**3;
    ar.unshift(x);
  return ar;
};
function g2 (ar) {return (ar.flatMap(v => (v+1)**3))};
function g3 (ar) {return (ar.flatMap(v => Math.round(v**(1/3))))};`;
  var runR = `function runRoll () {
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
};`;
  var clickFuncs = `function clic0 () {
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
};`;
  var putBack = `if (a[1].length === 3) {   
    a[0].push(a[1].pop());  // Returns a clicked third number.
  };`;
  var sf = `function sfunc () {
    b0 = b1 = b2 = b3 = b4 = b5 = b6 = b7 = "none";
    if (AA != (undefined && 0)) b0 = "inline";
    if (BB != (undefined && 0)) b1 = "inline";
    if (CC != (undefined && 0)) b2 = "inline";
    if (DD != (undefined && 0)) b3 = "inline";
    if (WW != (undefined && 0)) b4 = "inline";
    if (XX != (undefined && 0)) b5 = "inline";
    if (YY != (undefined && 0)) b6 = "inline";
    if (ZZ != (undefined && 0)) b7 = "inline";
}`;
  var upD = `var update = () => {
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
};`;
  var fuFuncs = `function squareFu () {m4 = m4(square)};
function cubeFu () {m4 = m4(cube)};

function divFraction (x) {
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
};`;
  console.log(fu(m2(s)));
  var example = `var mon = M(2);
mon(v=>v**4)(v=>v+5)(v=>v*2);
// The value of x can be obtained later
mon('stop');  // 42`;
  m2 = M([[0, 0, 0, 0], [], [], [], [0]]);
  Z = Z;
  return `${$$result.head += `${$$result.title = `<title>Recursive Closures </title>`, ""}`, ""}
<br>
<div>**************************************************************************</div>
<div style="${"font-family: Times New Roman; text-align:center; font-size: 32px;"}"><br>
The Recursive Closure &quot;m2&quot; Controls the Action
</div>
<br>
<p>m2 is a recursive function spawned by the function M. Together,they form a closure as follows:
</p><pre>${escape(monad)}</pre>
<p>I call functions returned by M &quot;monads&quot;, much to the consternation of self-styled &quot;functional programmers&quot; who scoff at the idea that JavaScript could possibly have monads such as those defined in the Haskell programming language. Neither my monads nor the Haskell monads are Category Theory monads. The Haskell part actually surprises some programmers. Google &quot;hask is a category&quot; if you don&#39;t believe me.</p>
<p>A monads created by, say, &quot;monad = M(x)&quot; creates an isolated pipeline allowing nested functions to operate on &quot;x&quot; insulated from any outer scope. For example, you could run:  </p>
<pre>${escape(example)}</pre>
<p>In the solitaire version of the game of score below, x will be an array of arrays in the form x =  [ [], [], [], [], [n] ] where x[0] contains four integers simulating a throw of two six-sided, one twelve-sided, and one twenty-sided dice. x[1] and x[3] contain the number selected by the player, x[2] is the selected operator, and x[4] keeps track of the number of successes until the player wins by reaching x[4] = 5. But first, let&#39;s consider some simpler examples. </p> 

<p>These are the first interactive demonstration&#39;s event handlers: </p>
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
<p>Next, x will be an array manipulated by functions designed for that purpose. Here are the functions responsible for the interactive demonstration below:</p>
<pre>${escape(monad3)}</pre>
<p>If you click mon3 = mon3(g) four times and the click mon3 = mon3(g3), you will see that mon3(s) returns its original value, [1,2,3,4]. By the way, the &quot;mon3 =&quot; part of &quot;mon3 = mon3(g)&quot; is included solely to trigger updating of browser displays. Svelte doesn&#39;t have a virtual DOM, and merely changing objects isn&#39;t enough to trigger DOM updates. For example, arr = [1,2,3] doesn&#39;t change in the DOM when arr.push(888) is called. arr = arr afterwards or arr = arr.push(888) initially both do the trick.  </p>
<div style="${"margin-left: 10%; font-size:44px; color:#ddaadd"}">[${escape(mon3(s).join(", "))}]</div>
<br><br>
<button>mon3 = mon3(g)</button>
<button>mon3 = mon3(g2)</button>
<button>mon3 = mon3(g3)</button>
<button>mon3 = mon3(x =&gt; [1,2,3,4])</button>
<br><br><br>
<p>Now for the game of score, a game involving four dice and two or three-stage arithmetic computations with the goal of arriving at the number 20. My son Alex taught it to me a decade ago, when he was in middle school. I was also learning the Haskell programming language, so I developed a multiplayer online version with groups of interacting player, a chat box, and a shared-by-the-group todo list controlled by a Haskell WebSockets server backend. The backend could compute all possible solutions, if any existed, to any throw of the dice. It also identified all of the impossible-to-solve rolls. Users could change the default number of dice sides from 6,6,12,and 20 and the goal from the default value of 20. A version of it is online at <a href="${"https://score.schalk.net"}">https://score.schalk.net</a>.</p>

<p>This demonstration doesn&#39;t work in conjunction with a remote server, nor does it feature any Haskell code. It&#39;s just a little solitaire game providing an opportunity to consider the interesting possibilities of recursive closures. Instead of being argunents of function or global object methods, these monads are functions that consume functions. When the functions consumed by monads have no side effects outside of the monad&#39;s closure -- which should always be the case -- maintenance and bug tracking become more manageable. </p>
<h3 style="${"color:#ffccff"}">${escape(Z)}</h3>
<h3>Score: ${escape(SCORE)}</h3>
<br>
<button style="${"display: " + escape(b0)}">${escape(AA)}</button> 
<button style="${"display: " + escape(b1)}">${escape(BB)}</button> 
<button style="${"display: " + escape(b2)}">${escape(CC)}</button> 
<button style="${"display: " + escape(b3)}">${escape(DD)}</button>
<span style="${"margin-left: 8%; font-size: 22px"}">The operator is ${escape(EE)}</span>

<br><br>
<button>add</button>
<button>subtract</button>
<button>multiply</button>
<button>divide</button>
<button>concat</button>

<br><br>
<button>ROLL</button>
<br><br>
<button style="${"display: " + escape(b4)}">${escape(WW)}</button> 
<button style="${"display: " + escape(b5)}">${escape(XX)}</button> 
<button style="${"display: " + escape(b6)}">${escape(YY)}</button> 
<button style="${"display: " + escape(b7)}">${escape(ZZ)}</button>
<button style="${"display: " + escape(b7)}">${escape(EE)}</button>
<br><br>
<p>Clicking &quot;ROLL&quot; calls runRoll() which, in turn, calls updateRoll() to re-set HTML variables.</p>
<pre>${escape(runR)}</pre>
<p>The &quot;x = [ [], [], [], [], [0] ]&quot; format will be maintained throught game play. x[0] simulates the dice roll; x[1] recieves integers that are clicked; x[2] holds the operator; and x[4] contains numbers that are computed. x[4] makes sure at least one computed number is involved in arriving at 20. Here are the first few functions called when a number is clicked:</p>
<pre>${escape(clickFuncs)}</pre>
<p>The first line of fu() is the calculation result that is generated whenever there are two items in (s)[1] and an operator in m2(s)[3]. The intersection is important in fu()&#39;s bottom test. If &quot;intersect&quot;, the intersection of m2(s)[1] and m2(s)[3], is empty intersect[0] returns false and the last test in fu fails, even though 20 was produced on the second computation.</p> 
<p>If no operator has been selected, it&#39;s possible to click a third number. The program doesn&#39;t complain, it just puts the number back for you with:</p>
<pre>${escape(putBack)}</pre>
<p>If you roll the dice and keep clicking on the leftmost number, you&#39;ll see the numbers shift back and forth on every try. The first element of m2(s)[0] keeps getting pulled out of the first position and pushed back on the right. </p>
<p>sfunc() does some more DOM housekeeping. The buttons with dice number come and go as their CSS display strings are changed back and forth between &quot;none&quot; and &quot;inline&quot;. fu() calls sfunc(). Here&#39;s how it is defined:</p>
<pre>${escape(sf)}</pre>
<p>After each number is selected and Before calling sFunc(), fu() first updates the HTML variables as follows:</p>
<pre>${escape(upD)}</pre>
<br><br><br><br><br><br>




<br><br><br><br>`;
});
export { Monads as default };
