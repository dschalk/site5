<script>
// import { onMount } from "svelte";
import {fade} from "svelte/transition";
import Button from "./Button.svelte";

var A,B,C,D,AA,BB,CC,DD,EE,FF,GG,HH = "wait";
var N = 0;

var b0 = "inline";
var b1 = "inline";
var b2 = "inline";
var b3 = "inline";

var b4 = "inline";
var b5 = "inline";
var b6 = "inline";
var b7 = "inline";

var s = 'stop';
var AA;
var BB;
var CC;
var DD;
var WW;
var XX;
var YY;
var ZZ;
var ZYXW;
var WXYZ;
var m2;
var Z = "";

function clone (x) {return JSON.parse(JSON.stringify(x))};

var clean = a => a.map( ar => ar.filter(x => (x !== (undefined && 0))));

var cleanB = a => a.filter(x => x !== (undefined && 0));

function M (x) {
  return function go (func) {
      if (typeof func === "function") {
          x = func(x);
          return go;
      }
      else if (func === "stop") return x;
  }
};

$: m2 = M([ [3,6,9,12], [], [] ]);

function updateB (ar) {
  WW = ar[1][0];
  XX = ar[1][1];
  YY = ar[1][2];
  ZZ = ar[1][3];
  ZYXW = [WW, XX, YY, ZZ];
  WXYZ = cleanB(ZYXW);
  console.log("<><><><><><><><><><>>>>--> ZYXW and WXYZ are", ZYXW, WXYZ);
  return WXYZ;
}

m2 = M([ [1,2], [3,4], [] ]);
console.log("m2(s) and WXYZ before updateB() is", WXYZ);
m2(updateB);
updateC(m2);
console.log("m2(s) and WXYZ after updateB() is", clone(m2(s)), WXYZ)

function update (monad) {
  console.log("In update. monad(s) is", monad(s))
    if (monad(s)[0][0] == true) b0 = "inline" 
    else b0 = "none";  

    if (monad(s)[0][1]) b1 = "inline" 
    else b1 = "none";  

    if (monad(s)[0][2]) b2 = "inline" 
    else b2 = "none";  

    if (monad(s)[0][3]) b3 = "inline" 
    else b3 = "none";  
}

function updateC (monad) {
  console.log("In updateC. monad(s) is", monad(s))
    if (monad(s)[1][0]) b4 = "inline" 
    else b4 = "none";  

    if (monad(s)[1][1]) b5 = "inline" 
    else b5 = "none";  

    if (monad(s)[1][2]) b6 = "inline" 
    else b6 = "none";  

    if (monad(s)[1][3]) b7 = "inline" 
    else b7 = "none";  
}

$: m2 = M([ [1,3], [5,17], [] ]);
console.log("m2(s) before updateC(m2(s)", clone(m2(s)))
updateC(m2)
console.log("m2(s) after updateC(m2)G", clone(m2(s)))

var roll = ar => [ [Math.floor(Math.random()*6) + 1, Math.floor(Math.random()*6) + 1, Math.floor(Math.random()*12) + 1, Math.floor(Math.random()*20) + 1], [], [] ];

function runRoll () {
  m2(roll);
  AA = m2(s)[0][0];
  BB = m2(s)[0][1];
  CC = m2(s)[0][2];
  DD = m2(s)[0][3];
  b0 = b1 = b2 = b3 = "inline";
}
runRoll();

function op1 () {
op = "+";
if (nums.length === 2) {nums[1] = calc(nums[0],op,nums[1]); nums = []; dis4 = "inline"}
console.log("document.getElementById('1')).style", document.getElementById("1").style);
}

function op2 () {
op = "-";
if (nums.length === 2) {nums[1] = calc(nums[0],op,nums[1]); nums = []; dis4 = "inline"}
console.log("document.getElementById('1')).style", document.getElementById("1").style);
}

function op3 () {
op = "*";
if (nums.length === 2) {dice[3] = calc(nums[0],op,nums[1]); nums = []; dis4 = "inline"}
console.log("document.getElementById('1')).style", document.getElementById("1").style);
}

function op4 () {
op = "/";
if (nums.length === 2) {dice[3] = calc(nums[0],op,nums[1]); nums = []; dis4 = "inline"}
console.log("document.getElementById('1')).style", document.getElementById("1").style);
}

function op5 () {
op = "concat";
if (nums.length === 2) {dice[3] = calc(nums[0],op,nums[1]); nums = []; dis4 = "inline"}
console.log("document.getElementById('1')).style", document.getElementById("1").style);
}

var f = a => b => c => {c.splice(a,1,b)}
function fo (a,b) {return f(a)(b)};

function calc(aa,bb,c) {
var a = parseInt(aa,10);
var b = parseInt(bb,10);
if (c === "+") return (a + b);
if (c === "*") return (a * b);
if (c === "-") return (a - b);
if (c === "/") return (a / b);
if (c === "concat") return parseInt("" + a + b, 10);
}
console.log("<><><><><><><><><><><><><><><><><><><>")
console.log("calc(3,4,'+')", calc(3,4,'+' ));
var mon3 = M([1,2,3,4]);
function fmon3 (f) {mon3 = mon3(f)};
function fmon3Reset () {mon3 = M([1,2,3,4])}

function sort (ar) {
  AA = ar(s)[0][0] ? ar(s)[0][0] : b0 = "none";
  BB = ar(s)[0][1] ? ar(s)[0][1] : b1 = "none";
  CC = ar(s)[0][2] ? ar(s)[0][2] : b2 = "none";
  DD = ar(s)[0][3] ? ar(s)[0][3] : b3 = "none";
  EE = ar(s)[1][0] ? ar(s)[1][0] : b4 = "none";
  FF = ar(s)[1][1] ? ar(s)[1][1] : b5 = "none";
  GG = ar(s)[1][2] ? ar(s)[1][2] : b6 = "none";
  HH = ar(s)[1][3] ? ar(s)[1][3] : b7 = "none";
}

var click0 = ar => {
    ar[1].push(ar[0].splice(0,1)[0]);
    console.log("m2(s)[0]", m2(s)[0]);
    console.log("m2(s)[1]", m2(s)[1]);
    sort(m2);
    m2(updateB);
    //updateC(m2);
    ar = ar;
    return ar;
};

var click1 = ar => {
    ar[1].push(ar[0].splice(1,1)[0]);
    console.log("m2(s)[0]", m2(s)[0]);
    console.log("m2(s)[1]", m2(s)[1]);
    sort(m2);
    m2(updateB);
    // updateC(m2);
    ar = ar;
    return ar;
};

var click2 = ar => {
    ar[1].push(ar[0].splice(2,1)[0]);
    console.log("m2(s)[0]", m2(s)[0]);
    console.log("m2(s)[1]", m2(s)[1]);
    sort(m2);
    m2(updateB);
    //updateC(m2);
    ar = ar;
    return ar;
};

var click3 = ar => {
    ar[1].push(ar[0].splice(3,1)[0]);
    console.log("m2(s)[0]", m2(s)[0]);
    console.log("m2(s)[1]", m2(s)[1]);
    sort(m2);
    m2(updateB);
    // updateC(m2);
    ar = ar;
    return ar;
};

function clic0 () {
  m2(click0);
  m2(clean);
  console.log("m2(s) is", m2(s));
} 

function clic1 () {
  m2(click1);
  m2(clean);
  console.log("m2(s) is", m2(s));
} 

function clic2 () {
  m2(click2);
  m2(clean);
  console.log("m2(s) is", m2(s));
} 

function clic3 () {
  m2(click3);
  m2(clean);
  console.log("m2(s) is", m2(s));
} 

function choose (index) {
    return click(index);
}

var roll = ar => [ [Math.floor(Math.random()*6) + 1, Math.floor(Math.random()*6) + 1, Math.floor(Math.random()*12) + 1, Math.floor(Math.random()*20) + 1], [], [] ];

var fu = a => {
    var b;
    var result;
    if (a[1].length === 3) {
      a[0].push(a[2].pop());

    if ((a[2][0]) && a[1].length === 2) {
        b = clone(a); 
        result = calc(a[1][0], a[1][1], a[2][0]);
    }
    if (result == 20 && a[0].length < 2) {
      Z = "Congratulations! You made it.";
      A(runRoll);
    }
    b = clone(a); 
        a[0].push()
        a[1] = a[2] = [];
        return (a);
    } 
    else return a;
}

var m4 = M([ [3,4], [5,6], ["concat"]]);
console.log("m4(s) before m4(fu)", clone(m4(s)));
m4(fu);
console.log("m4(s) after m4(fu)", m4(s));
m4 = M([ [3,4], [5,6], [] ]);
console.log("m4(s) before m4(fu)", clone(m4(s)));
m4(fu);
console.log("m4(s) after m4(fu)", m4(s));


function g(ar) {
  var x = (ar.pop())**3;
  ar.unshift(x);
  return ar;
};

function g2 (ar) {return (ar.flatMap(v => (v+1)**3))};
function g3 (ar) {return (ar.flatMap(v => Math.round(v**(1/3))))};

var simple = `var someMonad = M(3)
someMonad(v=>v**3);
someMonad('stop');  // 27
someMonad(v=>v+15)('stop');  // 42 .. Now let's go back to 42 the hard way:
someMonad(v=>v/7)(v=>v+2)(v=>v*v)(v=>v**(1/6))(v=>v*21)('stop'); // 42 `;

var gCode = `function g(ar) {
  var x = (ar.pop())**3;
  ar.unshift(x);
  return ar;
};
function g2 (ar) {return (ar.flatMap(v => (v+1)**3))};
function g3 (ar) {return (ar.flatMap(v => Math.round(v**(1/3))))};`

var monCode = `
var f = M([1,2,3,4])`

var demo = `var mon3 = M([1,2,3,4]);
<h1>{mon3(s)}</h1>
<button on:click={() => fmon3(g)}>mon3(g)</button>
<button on:click={() => fmon3(g2)}>mon3(g2)</button>
<button on:click={() => fmon3(g3)}>mon3(g3)</button>
<button on:click={fmon3Reset}>Re-set mon3</button>
WHERE fmon3 and fmon3Reset are:
function fmon3 (f) {mon3 = mon3(f)}; // Updates the DOM
function fmon3Reset () {mon3 = M([1,2,3,4])}` ;

var demo2 = `function g(ar) {
  var x = (ar.pop())**3;
  ar.unshift(x);
  return ar;
};
mon(g);
console.log("mon('stop')", mon('stop'));
mon('stop') (4) [64, 1, 2, 3]     // As expected!`

var funcs = `
function fmon3 (f) {mon3 = mon3(f); return mon3}
function fmon3Reset () {mon3 = M([1,2,3,4])} `

var Mcode = `function M (x) {
  return function go (func) {
      if (typeof func === "function") {
          x = func(x);
          return go;
      }
      else if (func === "stop") return x;
  }
}; `;

var test_1 = `m4(s) before m4(fu) (3) [Array(2), Array(2), Array(1)]0: (2) [3, 4]1: (2) [5, 6]2: ['concat']length: 3[[Prototype]]: Array(0)
game.svelte? [sm]:48 m4(s) after m4(fu) (3) [Array(3), Array(0), Array(0)]0: (3) [3, 4, 56]1: []2: []length: 3[[Prototype]]: Array(0)
game.svelte? [sm]:50 m4(s) before m4(fu) (3) [Array(2), Array(2), Array(0)]0: (2) [3, 4]1: (2) [5, 6]2: []length: 3[[Prototype]]: Array(0)
game.svelte? [sm]:52 m4(s) after m4(fu) (3) [Array(2), Array(2), Array(0)]0: (2) [3, 4]1: (2) [5, 6]2: []length: 3[[Prototype]]: Array(0)
`;
m2 = M([ [0,0,0,0], [], [] ]);

clic3();

</script>

<style>
h1 {text-align: center;}
button {font-size: 30px}
</style>
<h1>_______________________________________________________________
</h1>
<div style = "font-family: Times New Roman;  text-align: center; font-size: 38px;" transition:fade>
The Game of Score Server
<br>
  <span style="font-style: italic; font-size: 34px">Using a JavaScript Ersatz Monad </span>
</div>
<a href = "https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new">Link</a>
<p> This page will demonstrate the use of recursive explicit closures spawned by a function M defined below. I sometimes call these closures "monads" partly because, like Haskell monads, they facilitate composing functions on encapsulated values. More about this is at <a href="../Monads/">Home</a	></p>
<p>I wrote "explicit" because all functions are closures, as explained in <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures">CLOSURES</a>. By the way, the word "ersatz" in the caption is there for critics who complain these aren't Category Theory monads. Some of these critics will be surprised to learn that Haskell monads aren't Catagory Theory monads either. </p>



<h2>The Project</h2>

<p> I'm going to construct an interactive simulated dice game my son taght me. It's called "Score". I wrote an elaborate version of the game of Score around eight years ago, using a Haskell WebSockets server to manage multiple clients and interacting groups of clients, compute all of the possible solutiong to each roll of the dice unless no solution existed, and more. It also featured a shared todo list for each group along with a group chat application. It isn't up and running right now, although I do revive it from time to time.</p>
<p> This version will be much simpler. I'll begin by defining a simple monad constructor named M. </p>

<pre>{Mcode}</pre>

<span>Here's how it works: </span>

<pre>{simple}</pre>
<p> Now I'll test M with an array these functions:</p>
<pre>{gCode}</pre>
<p>First, I'll use M to define a monad named "mon" by calling "var mon = M([1,2,3,4])". You'll see the return value of "mon3('stop')" dislayed, "[1,2,3,4]". mon(g)('stop') returns "[64,1,2,3]", as seen by clicking "mon3(g)". I call "mon(g)" twice more, causing "[8,27,64,1]" to be displayed. That's the value stored in mon3 and returned by mon3('stop'), and is the array that was expected.</p>
<p>After clicking "Re-set mon3", mon(g)(g(g)(g)(g3)) returns [1,2,3,4]. You can verify this by clicking "mon3(g)" four times and "mon3(g3)" once. If you click "mon3(g2)" three times and then "mon3(g3)" three times, mon3('stop') is displayed and is "[2,3,4,5]", as expected. Check it out below:"
<h1>{mon3(s)}</h1>
<button on:click={() => fmon3(g)}>mon3(g)</button>
<button on:click={() => fmon3(g2)}>mon3(g2)</button>
<button on:click={() => fmon3(g3)}>mon3(g3)</button>
<button on:click={() => fmon3Reset()}>Reset mon3</button>
<br><br><br>

<button style = "display: {b0}" on:click = {clic0}>{AA}</button> 
<button style = "display: {b1}" on:click = {clic1}>{BB}</button> 
<button style = "display: {b2}" on:click = {clic2}>{CC}</button> 
<button style = "display: {b3}" on:click = {clic3}>{DD}</button>

<br><br>
<button on:click = {runRoll}>ROLL</button>
<br><br>
<button style = "display: {b4}" >{WW}</button> 
<button style = "display: {b5}" >{XX}</button> 
<button style = "display: {b6}" >{YY}</button> 
<button style = "display: {b7}" >{ZZ}</button>

<h1>{WW} ** {XX} ** {YY} ** {ZZ} **</h1>
<br><br><br><br><br><br><br><br><br><br>
<p> Here's the HTML code for the first demo:</p>
<pre>{demo}</pre>
