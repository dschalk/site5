
<script>

import { merge_ssr_styles } from "svelte/internal";
// import { onMount } from "svelte";
import {fade} from "svelte/transition";

var A,B,C,D,AA,BB,CC,DD,EE,FF,GG,HH = "wait";
var N = 0;

var b0 = "none";
var b1 = "none";
var b2 = "none";
var b3 = "none";

var b4 = "none";
var b5 = "none";
var b6 = "none";
var b7 = "none";

var s = 'stop';
var AA;
var BB;
var CC;
var DD;
var EEE = "awaiting selection";
var FF;
var WW;
var XX;
var YY;
var ZZ;
var SCORE = [0];
var ZYXW;
var WXYZ;
var m2;
var Z = "";
$: Z;
var fu;
var x = [ [0,0,0,0], [], [], [], [0] ]

function calc(aa,bb,c) {
var a = parseInt(aa,10);
var b = parseInt(bb,10);
if (c === "+") return (a + b);
else if (c === "*") return (a * b);
else if (c === "-") return (a - b);
else if (c === "/") return (a / b);
else if (c === "concat") return parseInt("" + a + b, 10);
else return "fubar";
}

function g(ar) {
  var x = (ar.pop())**3;
  ar.unshift(x);
  return ar;
};

function g2 (ar) {return (ar.flatMap(v => (v+1)**3))};
function g3 (ar) {return (ar.flatMap(v => Math.round(v**(1/3))))};

function clone (x) {return JSON.parse(JSON.stringify(x))};

var clean = a => a.map( ar => ar.filter(x => (x != (undefined && 0))));

var cleanB = a => a.filter(x => x != (undefined && 0));

function M (x) {
  return function go (func) {
      if (typeof func === "function") {
          x = func(x);
          return go;
      }
      else if (func === "stop") return x;
  }
};


fu = a => {  
  var result;
  var SCORE = a[4][0];
  var a1;
  if (a[1].length === 2 && a[2].length === 1)   {
    a1 = a[1];
    result = calc(a[1][0], a[1][1],a[2][0]);

    a[0].push(result);
    a[3].push(result);  
    a[1] = [];
  }

  if (a[1].length === 3) {
    a[0].push(a[1].pop());
  }
  if (result == 20 && intersection(a1, a[3]).length > 0) {
      if (a[4][0] === 4) {
          a[4] = 0;
          Z = "You win! "
          SCORE = 0;
      }
      else {
          SCORE = SCORE*1;
          SCORE += 1;
          Z = "Good. Your score increased to " + SCORE;
      }
      runRoll(SCORE);
      setTimeout(() => Z = "", 2000);
  }
  update();
  sfunc();
  return a;
};

m2 = M(x);

var roll = x => {
  m2 = M([ [Math.floor(Math.random()*6) + 1, Math.floor(Math.random()*6) + 1, Math.floor(Math.random()*12) + 1, Math.floor(Math.random()*20) + 1], [], [], [], [x] ]);
  b4 = b5 = b6 = b7 = 'none';
};

function runRoll (x) {
    m2 = M([ [Math.floor(Math.random()*6) + 1, Math.floor(Math.random()*6) + 1, Math.floor(Math.random()*12) + 1, Math.floor(Math.random()*20) + 1], [], [], [], [x] ]);
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
  SCORE = m2(s)[4];
  b0 = b1 = b2 = b3 = "inline";
  b4 = b5 = b6 = b7 = 'none';
}
function sfunc () {
    b0 = b1 = b2 = b3 = b4 = b5 = b6 = b7 = "none";
    if (AA != (undefined && 0)) b0 = "inline";
    if (BB != (undefined && 0)) b1 = "inline";
    if (CC != (undefined && 0)) b2 = "inline";
    if (DD != (undefined && 0)) b3 = "inline";
    if (WW != (undefined && 0)) b4 = "inline";
    if (XX != (undefined && 0)) b5 = "inline";
    if (YY != (undefined && 0)) b6 = "inline";
    if (ZZ != (undefined && 0)) b7 = "inline";
}
var update = () => {
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

var mon3 = M([1,2,3,4]);
// function fmon3 (f) {mon3 = mon3(f)};
// function fmon3Reset () {mon3 = M([1,2,3,4])}

var fmon = f => x => x(f);
var reset = x => [1,2,3,4]

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

function clic0 () {
  EEE = "add";
  m2(ar => ar = [ m2(s)[0], m2(s)[1], ['+'], m2(s)[3], m2(s)[4] ].map(v => v.flat()));
  m2(fu);
} 

function clic1 () {
  EEE = "subtract";
  m2(ar => ar = [ m2(s)[0], m2(s)[1], ['-'], m2(s)[3], m2(s)[4]    ].map(v => v.flat()));
  m2(fu);
} 

function clic2 () {
  EEE = "multiply";
  m2(ar => ar = [ m2(s)[0], m2(s)[1], ['*'], m2(s)[3], m2(s)[4] ].map(v => v.flat()));
  m2(fu);
} 

function clic3 () {
  EEE = "divide";
  m2(ar => ar = [ m2(s)[0], m2(s)[1], ['/'], m2(s)[3], m2(s)[4]  ].map(v => v.flat()));
  m2(fu);
} 

function clic4 () {
  EEE = "concat";
  m2(ar => ar = [ m2(s)[0], m2(s)[1], ['concat'], m2(s)[3], m2(s)[4]  ].map(v => v.flat()));
  m2(fu);
} 

$: Z = Z;

var m3 = M(3);
var m4 = M(3.1415926535); 

var cube = x => x**3;
var square = x => x*x;
var pow = n => x => x**n;
var add = n => x => 1*x + 1*n;
var mult = n => x => x * n;
var reset2 = n => x => x = n;

function squareFu () {m4 = m4(square)};
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
};

var fuDem = `fu = a => {  m2(fu) caused fu to operate on the closure's current value, a.
  var result;
  var SCORE = a[4][0]; 
  var a1;                                 //  a1 will preserve a[1] for the final test
  if (a[1].length === 2 && a[2].length === 1)   {
    a1 = a[1];
    result = calc(a[1][0], a[1][1],a[2][0]);   // a[1] holds the selected numbers
    a[0].push(result);
    a[3].push(result);     // a1 is used in the final test to make sure 20 was 
                           // achieved by using a previously computed number. 
    a[1] = [];             // Now a[1] is empty but a1 still holds its prior value
  }

  if (a[1].length === 3) {     // a[1] can't use 3 numbers so it sends a 3rd selection back.
    a[0].push(a[1].pop());
  }
  
  if (result == 20 && intersection(a1, a[3])) { // An empty array means no previously computed 
                            // number was used. An empty array is like 0, false in a logical test. 
      if (a[4][0] === 4) {
          a[4] = 0;
          Z = "You win! "
          SCORE = 0;
      }
      else {
          SCORE += 1;
          Z = "Good. Your score increased to " + SCORE;
      }
      runRoll(SCORE);
      setTimeout(() => Z = "", 2000);
  }
  update();
  sfunc();
  return a;
};

// Now variables that appear in curly braces in the DOM must be updated.

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
}

var update = () => { // Now the values of DOM variables are updated.
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
}`;

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
// For the game, the starting value is [ [0,0,0,0], [], [], [] ].`   

var monad3 = `var mon3 = M([1,2,3,4]);
function g(ar) {
    var x = (ar.pop())**3;
    ar.unshift(x);
  return ar;
};
function g2 (ar) {return (ar.flatMap(v => (v+1)**3))};
function g3 (ar) {return (ar.flatMap(v => Math.round(v**(1/3))))};`;


var simple = `var s = 'stop';
var m4 = M(3);   // creates a new monad named "m4".
var cube = x => x**3;
var square = x => x*x;
var pow = n => x => x**n;
var add = n => x => 1*x + 1*n;
var mult = n => x => x * n;
var reset2 = n => x => x = n;`;

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
};`

var putBack = `if (a[1].length === 3) {   
    a[0].push(a[1].pop());  // Returns a clicked third number.
  };`

var sf =`function sfunc () {
    b0 = b1 = b2 = b3 = b4 = b5 = b6 = b7 = "none";
    if (AA != (undefined && 0)) b0 = "inline";
    if (BB != (undefined && 0)) b1 = "inline";
    if (CC != (undefined && 0)) b2 = "inline";
    if (DD != (undefined && 0)) b3 = "inline";
    if (WW != (undefined && 0)) b4 = "inline";
    if (XX != (undefined && 0)) b5 = "inline";
    if (YY != (undefined && 0)) b6 = "inline";
    if (ZZ != (undefined && 0)) b7 = "inline";
}`

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

function intersection (a,b) {return (a.filter(x => b.includes(x)))};

var example = `var mon = M(2);
mon(v=>v**4)(v=>v+5)(v=>v*2);
// The value of x can be obtained later
mon('stop');  // 42`

m2 = M([[0,0,0,0], [], [], [],  [0]   ]);

</script>

<svelte:head>
	<title>Recursive Closures </title>
</svelte:head>
<br>
<div>**************************************************************************</div>
<div style = "font-family: Times New Roman; text-align:center; font-size: 32px;" transition:fade>
<br>
The Recursive Closure "m2" Controls the Action
</div>
<br>
<p>m2 is a recursive function spawned by the function M. Together,they form a closure as follows:
<pre>{monad}</pre>
<p>I call functions returned by M "monads", much to the consternation of self-styled "functional programmers" who scoff at the idea that JavaScript could possibly have monads such as those defined in the Haskell programming language. Neither my monads nor the Haskell monads are Category Theory monads. The Haskell part actually surprises some programmers. Google "hask is a category" if you don't believe me.</p>
<p>A monads created by, say, "monad = M(x)" creates an isolated pipeline allowing nested functions to operate on "x" insulated from any outer scope. For example, you could run:  </p>
<pre>{example}</pre>
<p>In the solitaire version of the game of score below, x will be an array of arrays in the form x =  [ [], [], [], [], [n] ] where x[0] contains four integers simulating a throw of two six-sided, one twelve-sided, and one twenty-sided dice. x[1] and x[3] contain the number selected by the player, x[2] is the selected operator, and x[4] keeps track of the number of successes until the player wins by reaching x[4] = 5. But first, let's consider some simpler examples. </p> 

<p>These are the first interactive demonstration's event handlers: </p>
<pre>{fuFuncs}</pre>
<p>m4(s) is <span style = "font-size:54px">{parseFloat(m4(s)).toFixed(5).toString()}</span></p>
<br>
<button on:click = {cubeFu}>m4(cube)</button>
<button on:click = {squareFu}>m4(square)</button>
<br><br>
<span style = "font-size: 24px">To call m4(pow(n)), enter n in the box -> </span> 
<input type = text style = "width: 65px" on:keydown = {powFu} />
<br><br>

<span style = "font-size: 24px">To call m4(add(n)), enter n in the box -> </span> 
<input type = number style = "width: 65px" on:keydown = {addFu} />
<br><br>

<span style = "font-size: 24px">To call m4(mult(n)), enter n in the box -> </span> 
<input type = text style = "width: 65px" on:keydown = {multFu} />
<br><br>

<span style = "font-size: 24px">To call m4(reset(n)), enter n in the box -> </span> 
<input type = number style = "width: 65px" on:keydown = {resetFu} />
<br><br>
<p>Next, x will be an array manipulated by functions designed for that purpose. Here are the functions responsible for the interactive demonstration below:</p>
<pre>{monad3}</pre>
<p>If you click mon3 = mon3(g) four times and the click mon3 = mon3(g3), you will see that mon3(s) returns its original value, [1,2,3,4]. By the way, the "mon3 =" part of "mon3 = mon3(g)" is included solely to trigger updating of browser displays. Svelte doesn't have a virtual DOM, and merely changing objects isn't enough to trigger DOM updates. For example, arr = [1,2,3] doesn't change in the DOM when arr.push(888) is called. arr = arr afterwards or arr = arr.push(888) initially both do the trick.  </p>
<div style = "margin-left: 10%; font-size:44px; color:#ddaadd">[{mon3(s).join(", ")}]</div>
<br><br>
<button on:click={() => mon3 = mon3(g)}>mon3 = mon3(g)</button>
<button on:click={() => mon3 = mon3(g2)}>mon3 = mon3(g2)</button>
<button on:click={() => mon3 = mon3(g3)}>mon3 = mon3(g3)</button>
<button on:click={() => mon3 = mon3(x => [1,2,3,4])}>mon3 = mon3(x => [1,2,3,4])</button>
<br><br><br>
<p>Now for the game of score, a game involving four dice and two or three-stage arithmetic computations with the goal of arriving at the number 20. My son Alex taught it to me a decade ago, when he was in middle school. I was also learning the Haskell programming language, so I developed a multiplayer online version with groups of interacting player, a chat box, and a shared-by-the-group todo list controlled by a Haskell WebSockets server backend. The backend could compute all possible solutions, if any existed, to any throw of the dice. It also identified all of the impossible-to-solve rolls. Users could change the default number of dice sides from 6,6,12,and 20 and the goal from the default value of 20. A version of it is online at <a href = "https://score.schalk.net">https://score.schalk.net</a>.</p>

<p>This demonstration doesn't work in conjunction with a remote server, nor does it feature any Haskell code. It's just a little solitaire game providing an opportunity to consider the interesting possibilities of recursive closures. Instead of being argunents of function or global object methods, these monads are functions that consume functions. When the functions consumed by monads have no side effects outside of the monad's closure -- which should always be the case -- maintenance and bug tracking become more manageable. Minimizing side effects inside of monadic closure can help even more. </p>
<div style = "color:#bbbbff; font-size:22">{Z}</div>
<h3>Score: {SCORE}</h3>

<button style = "display: {b0}" on:click = {() => m2(click0(m2))}>{AA}</button> 
<button style = "display: {b1}" on:click = {() => m2(click1(m2))}>{BB}</button> 
<button style = "display: {b2}" on:click = {() => m2(click2(m2))}>{CC}</button> 
<button style = "display: {b3}" on:click = {() => m2(click3(m2))}>{DD}</button>
<span style = "margin-left: 8%; font-size: 22px">The operator is {EE}</span>

<br><br>
<button on:click = {clic0}>add</button>
<button on:click = {clic1}>subtract</button>
<button on:click = {clic2}>multiply</button>
<button on:click = {clic3}>divide</button>
<button on:click = {clic4}>concat</button>

<h2>{m2(s)}</h2>

<br><br>
<button on:click = {() => runRoll(SCORE)}>ROLL</button>
<br><br>
<button style = "display: {b4}">{WW}</button> 
<button style = "display: {b5}">{XX}</button> 
<button style = "display: {b6}">{YY}</button> 
<button style = "display: {b7}">{ZZ}</button>
<button style = "display: {b7}">{EE}</button>
<br><br>
<p>The function fu() is the brains behing the game of Score. Each time a number is clicked, m2(fu) is called and fu does various things depending on the state of the closures value, x. </p> 
<p>At the end of fu(), two formatting functions are Called. The first displays or hides variables in the DOM and the second updates their values. Here they are:</p>
<pre>{fuDem}</pre>  

<p>Clicking "ROLL" calls runRoll() which, in turn, calls updateRoll() to re-set HTML variables.</p>
<pre>{runR}</pre>
<p>The "x = [ [], [], [], [], [0] ]" format will be maintained throught game play. x[0] simulates the dice roll; x[1] recieves integers that are clicked; x[2] holds the operator; and x[4] contains numbers that are computed. x[4] makes sure at least one computed number is involved in arriving at 20. Here are the first few functions called when a number is clicked:</p>
<pre>{clickFuncs}</pre>
<p>The first line of fu() is the calculation result that is generated whenever there are two items in (s)[1] and an operator in m2(s)[3]. The intersection is important in fu()'s bottom test. If "intersect", the intersection of m2(s)[1] and m2(s)[3], is empty intersect[0] returns false and the last test in fu fails, even though 20 was produced on the second computation.</p> 
<p>If no operator has been selected, it's possible to click a third number. The program doesn't complain, it just puts the number back for you with:</p>
<pre>{putBack}</pre>
<p>If you roll the dice and keep clicking on the leftmost number, you'll see the numbers shift back and forth on every try. The first element of m2(s)[0] keeps getting pulled out of the first position and pushed back on the right. </p>
<p>sfunc() does some more DOM housekeeping. The buttons with dice number come and go as their CSS display strings are changed back and forth between "none" and "inline". fu() calls sfunc(). Here's how it is defined:</p>
<pre>{sf}</pre>
<p>After each number is selected and Before calling sFunc(), fu() first updates the HTML variables as follows:</p>
<pre>{upD}</pre>
<br><br><br><br><br><br>


<!-- <button on:click = {m2Func}>m2Func</button>
<button on:click = {update}>Update</button>
<button on:click = {() => m2(fu)}>m2(fu)</button>
<button on:click = {sfunc}>sfunc</button>
-->

<br><br><br><br>

