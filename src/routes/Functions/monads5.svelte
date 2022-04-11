



<script>

import { merge_ssr_styles } from "svelte/internal";
// import { onMount } from "svelte";
import {fade} from "svelte/transition";
// import Index from "./index.svelte";

var A,B,C,D,AA,BB,CC,DD,EE,FF,GG,HH = "wait";
var N = 0;
var l = console.log;
var b0 = "none";
var b1 = "none";
var b2 = "none";
var b3 = "none";
var index;
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
var SCORE;
$: SCORE = [0];
var ZYXW;
var WXYZ;

var m2;

var runRoll;
runRoll = b => {
    var arr = [ [Math.floor(Math.random()*6) + 1, Math.floor(Math.random()*6) + 1, Math.floor(Math.random()*12) + 1, Math.floor(Math.random()*20) + 1], [], ["+"], [], [b], [], [0], [] ];
    m2 = M(arr);
    
    //[5].push(clone([ a[0], a[1], a[2], a[3], a[4], [], a[6] ]));  
    EEE = "yet to be selected";
    m2 = M(m2(s));
    updateRoll(m2);
    m2(fu);
    return m2;
}
var Z = "";
$: Z;
var x;
function updateRoll (m) {
  console.log("In updateRoll. m(s) is", m(s));
  AA = m(s)[0][0];
  BB = m(s)[0][1];
  CC = m(s)[0][2];
  DD = m(s)[0][3];
  
  WW = m(s)[1][0];
  XX = m(s)[1][1];
  YY = m(s)[1][2];
  ZZ = m(s)[1][3];
  EE = m(s)[2];
  FF = m(s)[3];
  SCORE = m(s)[4]; 
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

m2 = M([ [Math.floor(Math.random()*6) + 1, Math.floor(Math.random()*6) + 1, Math.floor(Math.random()*12) + 1, Math.floor(Math.random()*20) + 1], [], ["+"], [], [0], [], [0], [] ]);

var update = function update () {
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

 $: AA = m2(s)[0][0];
 $: BB = m2(s)[0][1];
 $: CC = m2(s)[0][2];
 $: DD = m2(s)[0][3];
 $: EE = m2(s)[2];
 $: FF = m2(s)[3];
 $: SCORE = m2(s)[4];
 $: WW = m2(s)[1][0];
 $: XX = m2(s)[1][1];
 $: YY = m2(s)[1][2];
 $: ZZ = m2(s)[1][3];

var ZWIN = "";
var mon3 = M([1,2,3,4]);

function calc(aa,bb,c) {
    var a = parseInt(aa,10);
    var b = parseInt(bb,10);
    if (c === "+") return (a + b);
    else if (c === "*") return (a * b);
    else if (c === "-") return (a - b);
    else if (c === "/") return (a / b);
    else if (c === "@") return (" " + a + b);
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
    return function (func) {
        if (typeof func === "function") {
            return M(func(x));
        }
        else if (func === "stop") return x;
    }
};

var back;
$: back = a => {
    if (a[5].length > 0) {
        var b = a[5][a[5].length - 1];
        b[7] = a[7];
        m2 = M(b);
        update();
        sfunc();
    }
    else console.log("In back. Can't compute")
};
var forward;
$: forward = a => {
    if (a[6][0] < a[7].length - 1) {
        var b = a[7][index + 1];
        b[7] = a[7];
        m2 = M(b);
        update();
        sfunc();
    }
    else console.log("Going out of bounds. The end of b[7] has been reached");
};

/* function test () {
    var xx = m2(s);
    console.log('<><><><><><><><> xx is', xx);
    console.log(xx[0]);
    console.log("xx[5].length is ", xx[5].length);
    console.log("index is", xx[6]);
    m2 = M(xx); 
    return m2;
} */

function fu (a) {                                    
  a[5].push(clone([ a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7] ]));  
  a[7].push(clone([ a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7] ]));  
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
      if (a[4][0] === 4) {
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

var fmon = f => x => x(f);
var reset = x => [1,2,3,4]

var click0 = a => {
    a[1].push(a[0][0])
    a[0].shift();
    m2 = M(a);
    m2(fu);
    // sfunc();
};

/* var click0 = a => {
    a[1].push(a[0].splice(0,1)[0]);
    m2 = M(a);

}; */

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
  m2 = M(m) ;
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

function intersection (a,b) {return (a.filter(x => b.includes(x)))};

var fuDem = `function fu (a) {                                    
  a[5].push(clone([ a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7] ]));  
  a[7].push(clone([ a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7] ]));  
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
      if (a[4][0] === 4) {
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
    return function (func) {
        if (typeof func === "function") {
            return M(func(x));
        }
        else if (func === "stop") return x;
    }
};`

var monad2 = `
function M (x) {
    return function (func) {
        if (typeof func === "function") {
            AR.push(clone(x))
            return M(func(x));
        }
        else if (func === "stop") return x;
    }
};`


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
};`

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

var click0 = ar => {
    ar[1].push(ar[0].splice(0,1)[0]);
    m2(fu);
};

var click1 = ar => {
    ar[1].push(ar[0].splice(1,1)[0]);
    m2(fu);
};

var click2 = ar => {
    ar[1].push(ar[0].splice(2,1)[0]);
    m2(fu);
};

var click3 = ar => {
    ar[1].push(ar[0].splice(3,1)[0]);
    m2(fu);
};`

var fuComment = `


;`

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

var example = `var mon = M(2);
mon(v=>v**4)(v=>v+5)(v=>v*2);
// The value of x can be obtained later
mon('stop');  // 42`

var oldMonad =`function M (x) {
    return function go (func) {
        if (typeof func === "function") {
            x = func(x);
            return go;
        }
        else if (func === "stop") return x;
    }
};`

$: XO = m2(s);

</script>

<svelte:head>
	<title>Recursive Closures a/k/a "Monads" </title>
  <link rel="stylesheet" href="../Functions/style.css">
</svelte:head>
<br>
<div>**************************************************************************</div>
<div style = "font-family: Times New Roman; text-align:center; font-size: 32px;" transition:fade>
<br>
A Very Simple Recursive Closure Insulates and Controls State Transformations 
</div>
<br>
<p> Various bloggers and writers make define functional programming and JavaScript monads, if they deem their existence possible, in various ways. I'm not saying any of them are right or wrong. In these areas, everyone is entitled to an opinion. </p>

<p>In my opinion, contorted efforts to make strictly typed JavaScript resemble the basic monads found in the Haskell Prelude module might be amusing for some, but aren't likely to ever be useful. People who think Haskell, or the supposed mathematical category of Haskell types and function called "Hask" are actually Category Theory categories are mistaken. Category Theory inspired the development of Haskell monads and it might not be a coincedence that the monads I am about to define are essentially similar to Haskell monads though superficially very different.</p>

<p>Recursive closures spawned by "M" will control a fairly complicated dice game called "Score" (<a href = "#score">Link To Score</a>) m2, defined by "m2 = M(x)" where x = [ [], [], [], [], [0], [], [0], [] ], will do the work by consuming functions that operate internally on x. x will represent the ever-changing state of game play.But first we'll let x be a number and then a simple array of numbers in order to show how the monad works. Experienced programmers will be capable of seeing what is going on by just looking at the code, but such people might not see this until the end of a hectic work day, a time when they might appreciate an elementary walk-through. Students will benfit from understanding what is going on here. They aren't likely to learn about the possibility of such things in their classrooms. Here's the definition of "M":</p>

<pre>{monad}</pre>

<p>Notice that the anonymous function returned by "M" returns a brand new monad in which the value of "x" is func(x') where x' is the previous value of x in "M(x)". This is its definition: </p>
<pre>{oldMonad}</pre>
  
<p>It isn't on the menu, but you can see it in action here: <a href = "./mutatingStateMonads">Monads That Mutate State</a>. There, the function returned by "M" is named and x = func(x)" mutates x each time go(func) executed on a function "func". It is a little less elegant than the version presented here and changing "x" would have a tendency to change earlier versions, making reverting to prior states by pressing the "BACK" button problematic as opposed to its being problem-free when we re-define "x" inside of a new closure. </p>

<p>I call functions returned by M "monads", much to the consternation of some "functional programmers" who scoff at the idea that JavaScript could possibly have monads such as those defined in the Haskell programming language. Neither my monads nor the Haskell monads are Category Theory monads. Haskell monads insulate chained computation from the global space, consuming functions that return new Monads. Mine happen to do the same thing. Haskell monads need to navegate through various types but I don't bother with that. The definition of "M" shows that the returned function responds to arguments that are functions and also to the string "Stop." </p>
<p>A monads created by, say, "mon = M(x)" can create an insolated pipeline of state transformations that can wait indefinitely for mon('stop') to return the result. Transformations of M's state can resume at any time. For example, you could run:  </p>
<pre>{example}</pre>
<p>In the solitaire version of the game of score below, x will be an array of arrays in the form x =  [ [], [], [], [], [], [], [], [] ] where x[0] starts out as four integers simulating a throw of two six-sided, one twelve-sided, and one twenty-sided dice. x[1] and x[3] contain the number selected by the player, x[2] is the selected operator, and x[4] keeps track of the number of successes until the player wins by reaching x[4] = 5, x[5] contains all prior states as the player selects numbers and operators and is used for reversing state a little or all the way back to the original roll, x[6] is an index of where in x[5] play is taking place, and x[7] contains every state during a round and uses x[6] to travers the history of game play forward. Before getting to that, here's one more simple example: </p> 

<p>These are the demonstration's event handlers: </p>
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
<p id = "score">Now for the game of score, a game involving four dice and two or three-stage arithmetic computations with the goal of arriving at the number 20. My son Alex taught it to me a decade ago, when he was in middle school. I was also learning the Haskell programming language, so I developed a multiplayer online version with groups of interacting player, a chat box, and a shared-by-the-group todo list controlled by a Haskell WebSockets server backend. The backend could compute all possible solutions, if any existed, to any throw of the dice. It also identified all of the impossible-to-solve rolls. Users could change the default number of dice sides from 6,6,12,and 20 and the goal from the default value of 20. A version of it is online at <a href = "https://score.schalk.net">https://score.schalk.net</a>.</p>

<p>This demonstration doesn't work in conjunction with a server, nor does it feature any Haskell code as does the multiplayer version. It's just a little solitaire game providing an opportunity to consider the interesting possibilities of recursive closures. Instead of being argunents of function or global object methods, these monads are functions that consume functions. When the functions consumed by monads have no side effects outside of the monad's closure -- which should always be the case -- maintenance and bug tracking become more manageable. Minimizing side effects inside of monadic closure can help even more. </p>
<h3>Score: {m2(s)[4]}</h3>

<button style = "display: {b0}" on:click = {() => m2(click0)}>{AA}</button> 
<button style = "display: {b1}" on:click = {() => m2(click1)}>{BB}</button> 
<button style = "display: {b2}" on:click = {() => m2(click2)}>{CC}</button> 
<button style = "display: {b3}" on:click = {() => m2(click3)}>{DD}</button>
<span style = "margin-left: 8%; font-size: 22px">The operator is {m2(s)[2]}</span>

<br><br>
<button on:click = {() => m2(clic0)}>add</button>
<button on:click = {() => m2(clic1)}>subtract</button>
<button on:click = {() => m2(clic2)}>multiply</button>
<button on:click = {() => m2(clic3)}>divide</button>
<button on:click = {() => m2(clic4)}>concat</button>


<span style = "margin-left: 20px; color:#bbbbff; font-size:28px">{Z}</span>
<span style = "margin-left: 20px; color:#bbbbff; font-size:38px">{ZWIN}</span>
<br><br>
<button on:click = {() => m2(runRoll(m2(s)[4]))}>ROLL</button>
<br><br>

<button on:click = {() => test()}>test</button>
<button style = "display: {b4}">{WW}</button> 
<button style = "display: {b5}">{XX}</button> 
<button style = "display: {b6}">{YY}</button> 
<button style = "display: {b7}">{ZZ}</button>
<br><br>
<button on:click = {() => m2(back)}>Back</button>
<button on:click = {() => m2(forward)}>Forward</button>

<p>The function fu() is the brains behing the game of Score. Each time a number is clicked, m2(fu) is called and fu does various things depending on the state of the closures value, x. </p> 
<p>At the end of fu(), two formatting functions are Called. The first displays or hides variables in the DOM and the second updates their values. Here they are:</p>
<pre>{fuDem}</pre>  

<p>Clicking "ROLL" calls runRoll() which, in turn, calls updateRoll() to re-set HTML variables.</p>
<pre>{runR}</pre>
<p>The "x = [ [], [], [], [], [0], [], [0] ]" format will be maintained throught game play. x[0] simulates the dice roll; x[1] recieves integers that are clicked; x[2] holds the operator; and x[4] contains numbers that are computed. x[4] makes sure at least one computed number is involved in arriving at 20. Here are the first few functions called when a number is clicked:</p>
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

