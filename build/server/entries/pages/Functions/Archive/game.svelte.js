import { c as create_ssr_component, e as escape } from "../../../../_app/immutable/chunks/index-e5fe3e4f.js";
/* empty css                                                                               */const game_svelte_svelte_type_style_lang = "";
const css = {
  code: "h1.svelte-1pzbx45{text-align:center}button.svelte-1pzbx45{font-size:30px}",
  map: null
};
var s = "stop";
function clone(x) {
  return JSON.parse(JSON.stringify(x));
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
function calc(aa, bb, c) {
  var a = parseInt(aa, 10);
  var b = parseInt(bb, 10);
  if (c === "+")
    return a + b;
  if (c === "*")
    return a * b;
  if (c === "-")
    return a - b;
  if (c === "/")
    return a / b;
  if (c === "concat")
    return parseInt("" + a + b, 10);
}
const Game = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var A, AA, BB, CC, DD;
  var b0 = "inline";
  var b1 = "inline";
  var b2 = "inline";
  var b3 = "inline";
  var b4 = "inline";
  var b5 = "inline";
  var b6 = "inline";
  var b7 = "inline";
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
  var clean = (a) => a.map((ar) => ar.filter((x) => x !== void 0));
  var cleanB = (a) => a.filter((x) => x !== void 0);
  function updateB(ar) {
    WW = ar[1][0];
    XX = ar[1][1];
    YY = ar[1][2];
    ZZ = ar[1][3];
    ZYXW = [WW, XX, YY, ZZ];
    WXYZ = cleanB(ZYXW);
    console.log("<><><><><><><><><><>>>>--> ZYXW and WXYZ are", ZYXW, WXYZ);
    return WXYZ;
  }
  m2 = M([[1, 2], [3, 4], []]);
  console.log("m2(s) and WXYZ before updateB() is", WXYZ);
  m2(updateB);
  updateC(m2);
  console.log("m2(s) and WXYZ after updateB() is", clone(m2(s)), WXYZ);
  function updateC(monad) {
    console.log("In updateC. monad(s) is", monad(s));
    if (monad(s)[1][0])
      b4 = "inline";
    else
      b4 = "none";
    if (monad(s)[1][1])
      b5 = "inline";
    else
      b5 = "none";
    if (monad(s)[1][2])
      b6 = "inline";
    else
      b6 = "none";
    if (monad(s)[1][3])
      b7 = "inline";
    else
      b7 = "none";
  }
  console.log("m2(s) before updateC(m2(s)", clone(m2(s)));
  updateC(m2);
  console.log("m2(s) after updateC(m2)G", clone(m2(s)));
  var roll = (ar) => [
    [
      Math.floor(Math.random() * 6) + 1,
      Math.floor(Math.random() * 6) + 1,
      Math.floor(Math.random() * 12) + 1,
      Math.floor(Math.random() * 20) + 1
    ],
    [],
    []
  ];
  function runRoll() {
    m2(roll);
    AA = m2(s)[0][0];
    BB = m2(s)[0][1];
    CC = m2(s)[0][2];
    DD = m2(s)[0][3];
    b0 = b1 = b2 = b3 = "inline";
  }
  runRoll();
  console.log("<><><><><><><><><><><><><><><><><><><>");
  console.log("calc(3,4,'+')", calc(3, 4, "+"));
  var mon3 = M([1, 2, 3, 4]);
  function sort(ar) {
    AA = ar(s)[0][0] ? ar(s)[0][0] : b0 = "none";
    BB = ar(s)[0][1] ? ar(s)[0][1] : b1 = "none";
    CC = ar(s)[0][2] ? ar(s)[0][2] : b2 = "none";
    DD = ar(s)[0][3] ? ar(s)[0][3] : b3 = "none";
    ar(s)[1][0] ? ar(s)[1][0] : b4 = "none";
    ar(s)[1][1] ? ar(s)[1][1] : b5 = "none";
    ar(s)[1][2] ? ar(s)[1][2] : b6 = "none";
    ar(s)[1][3] ? ar(s)[1][3] : b7 = "none";
  }
  var click3 = (ar) => {
    ar[1].push(ar[0].splice(3, 1)[0]);
    console.log("m2(s)[0]", m2(s)[0]);
    console.log("m2(s)[1]", m2(s)[1]);
    sort(m2);
    m2(updateB);
    ar = ar;
    return ar;
  };
  function clic3() {
    m2(click3);
    m2(clean);
    console.log("m2(s) is", m2(s));
  }
  var roll = (ar) => [
    [
      Math.floor(Math.random() * 6) + 1,
      Math.floor(Math.random() * 6) + 1,
      Math.floor(Math.random() * 12) + 1,
      Math.floor(Math.random() * 20) + 1
    ],
    [],
    []
  ];
  var fu = (a) => {
    var result;
    if (a[1].length === 3) {
      a[0].push(a[2].pop());
      if (a[2][0] && a[1].length === 2) {
        clone(a);
        result = calc(a[1][0], a[1][1], a[2][0]);
      }
      if (result == 20 && a[0].length < 2) {
        A(runRoll);
      }
      clone(a);
      a[0].push();
      a[1] = a[2] = [];
      return a;
    } else
      return a;
  };
  var m4 = M([[3, 4], [5, 6], ["concat"]]);
  console.log("m4(s) before m4(fu)", clone(m4(s)));
  m4(fu);
  console.log("m4(s) after m4(fu)", m4(s));
  m4 = M([[3, 4], [5, 6], []]);
  console.log("m4(s) before m4(fu)", clone(m4(s)));
  m4(fu);
  console.log("m4(s) after m4(fu)", m4(s));
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
function g3 (ar) {return (ar.flatMap(v => Math.round(v**(1/3))))};`;
  var demo = `var mon3 = M([1,2,3,4]);
<h1>{mon3(s)}</h1>
<button on:click={() => fmon3(g)}>mon3(g)</button>
<button on:click={() => fmon3(g2)}>mon3(g2)</button>
<button on:click={() => fmon3(g3)}>mon3(g3)</button>
<button on:click={fmon3Reset}>Re-set mon3</button>
WHERE fmon3 and fmon3Reset are:
function fmon3 (f) {mon3 = mon3(f)}; // Updates the DOM
function fmon3Reset () {mon3 = M([1,2,3,4])}`;
  var Mcode = `function M (x) {
  return function go (func) {
      if (typeof func === "function") {
          x = func(x);
          return go;
      }
      else if (func === "stop") return x;
  }
}; `;
  m2 = M([[0, 0, 0, 0], [], []]);
  clic3();
  $$result.css.add(css);
  m2 = M([[3, 6, 9, 12], [], []]);
  m2 = M([[1, 3], [5, 17], []]);
  return `<h1 class="${"svelte-1pzbx45"}">_______________________________________________________________
</h1>
<div style="${"font-family: Times New Roman; text-align: center; font-size: 38px;"}">The Game of Score Server
<br>
  <span style="${"font-style: italic; font-size: 34px"}">Using a JavaScript Ersatz Monad </span></div>
<a href="${"https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new"}">Link</a>
<p>This page will demonstrate the use of recursive explicit closures spawned by a function M defined below. I sometimes call these closures &quot;monads&quot; partly because, like Haskell monads, they facilitate composing functions on encapsulated values. More about this is at <a href="${"../Monads/"}">Home</a></p>
<p>I wrote &quot;explicit&quot; because all functions are closures, as explained in <a href="${"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures"}">CLOSURES</a>. By the way, the word &quot;ersatz&quot; in the caption is there for critics who complain these aren&#39;t Category Theory monads. Some of these critics will be surprised to learn that Haskell monads aren&#39;t Catagory Theory monads either. </p>



<h2>The Project</h2>

<p>I&#39;m going to construct an interactive simulated dice game my son taght me. It&#39;s called &quot;Score&quot;. I wrote an elaborate version of the game of Score around eight years ago, using a Haskell WebSockets server to manage multiple clients and interacting groups of clients, compute all of the possible solutiong to each roll of the dice unless no solution existed, and more. It also featured a shared todo list for each group along with a group chat application. It isn&#39;t up and running right now, although I do revive it from time to time.</p>
<p>This version will be much simpler. I&#39;ll begin by defining a simple monad constructor named M. </p>

<pre>${escape(Mcode)}</pre>

<span>Here&#39;s how it works: </span>

<pre>${escape(simple)}</pre>
<p>Now I&#39;ll test M with an array these functions:</p>
<pre>${escape(gCode)}</pre>
<p>First, I&#39;ll use M to define a monad named &quot;mon&quot; by calling &quot;var mon = M([1,2,3,4])&quot;. You&#39;ll see the return value of &quot;mon3(&#39;stop&#39;)&quot; dislayed, &quot;[1,2,3,4]&quot;. mon(g)(&#39;stop&#39;) returns &quot;[64,1,2,3]&quot;, as seen by clicking &quot;mon3(g)&quot;. I call &quot;mon(g)&quot; twice more, causing &quot;[8,27,64,1]&quot; to be displayed. That&#39;s the value stored in mon3 and returned by mon3(&#39;stop&#39;), and is the array that was expected.</p>
<p>After clicking &quot;Re-set mon3&quot;, mon(g)(g(g)(g)(g3)) returns [1,2,3,4]. You can verify this by clicking &quot;mon3(g)&quot; four times and &quot;mon3(g3)&quot; once. If you click &quot;mon3(g2)&quot; three times and then &quot;mon3(g3)&quot; three times, mon3(&#39;stop&#39;) is displayed and is &quot;[2,3,4,5]&quot;, as expected. Check it out below:&quot;
</p><h1 class="${"svelte-1pzbx45"}">${escape(mon3(s))}</h1>
<button class="${"svelte-1pzbx45"}">mon3(g)</button>
<button class="${"svelte-1pzbx45"}">mon3(g2)</button>
<button class="${"svelte-1pzbx45"}">mon3(g3)</button>
<button class="${"svelte-1pzbx45"}">Reset mon3</button>
<br><br><br>

<button style="${"display: " + escape(b0, true)}" class="${"svelte-1pzbx45"}">${escape(AA)}</button> 
<button style="${"display: " + escape(b1, true)}" class="${"svelte-1pzbx45"}">${escape(BB)}</button> 
<button style="${"display: " + escape(b2, true)}" class="${"svelte-1pzbx45"}">${escape(CC)}</button> 
<button style="${"display: " + escape(b3, true)}" class="${"svelte-1pzbx45"}">${escape(DD)}</button>

<br><br>
<button class="${"svelte-1pzbx45"}">ROLL</button>
<br><br>
<button style="${"display: " + escape(b4, true)}" class="${"svelte-1pzbx45"}">${escape(WW)}</button> 
<button style="${"display: " + escape(b5, true)}" class="${"svelte-1pzbx45"}">${escape(XX)}</button> 
<button style="${"display: " + escape(b6, true)}" class="${"svelte-1pzbx45"}">${escape(YY)}</button> 
<button style="${"display: " + escape(b7, true)}" class="${"svelte-1pzbx45"}">${escape(ZZ)}</button>

<h1 class="${"svelte-1pzbx45"}">${escape(WW)} ** ${escape(XX)} ** ${escape(YY)} ** ${escape(ZZ)} **</h1>
<br><br><br><br><br><br><br><br><br><br>
<p>Here&#39;s the HTML code for the first demo:</p>
<pre>${escape(demo)}</pre>`;
});
export {
  Game as default
};
