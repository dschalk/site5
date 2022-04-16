import { c as create_ssr_component, e as escape } from "../../../chunks/index-63796eb4.js";
const Monad3 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const sym1 = Symbol("sym1");
  const sym2 = Symbol("sym2");
  const sym3 = Symbol("sym3");
  let B = {};
  B[sym1] = [];
  B[sym2] = [];
  B[sym3] = [];
  var lok = false;
  let code = `
const sym1 = Symbol('sym1');
const sym2 = Symbol('sym2');
const sym3 = Symbol('sym3');

const A = {};
const B = {};
  B[sym1] = [];
  B[sym2] = [];
  B[sym3] = [];`;
  var code2 = `<h3>lok is {lok}</h3>
<h3> B[sym1] is {B[sym1]} </h3>
<h3> B[sym2] is {B[sym2]} </h3>
<h3> B[sym3] is {B[sym3]} </h3>`;
  var code3 = `let Mona = function Mona ( AR = [],  ar = "name" )  {  
  let p, run, f;
  B[ar] = AR.slice();
  let x = B[ar].slice(-1)[0] ;
  return run = (function run (x) {
  if (x instanceof Promise) {x.then(y => {
    if (!( typeof y === "function" || y == lok || y == NaN || y == undefined ||
      typeof y == "undefined" || y != y  ) ){B[ar] = B[ar].concat(y)}
    else if (typeof x !== "function" && x != lok  &&  x != undefined  && x != NaN  && !(x instanceof Promise)) {B[ar] = B[ar].concat(x);
  }})}
    f = function f (func) {
      if (func === 'halt' || func === 'h' || func == undefined ||
        typeof func == "undefined" || func == NaN ) {
        B[ar] = B[ar]; 
        return B[ar].slice();
      }
      if (typeof func == "function" && x instanceof Promise) p = x.then(v => func(v))
      else if (typeof func != "function" && x instanceof Promise) p = x.then(v => v)
      else if (typeof func != "function") p = func
      else p = func(x);
      return run(p);
    };
    return f;
  })(x);
}

function test_3 () {
  lok = true;
  A[sym1] = Mona([0], sym1);
  A[sym2] = Mona( [], sym2);
  A[sym3] = Mona([], sym3);
  A[sym1](addP(3))(cubeP)(addP(3))(squareP)(divP(100))(() => 
    branch(sym2,sym1)(idP)(squareP)(divP(27))(multP(7))(doubleP)(() => 
      branch(sym3,sym2)(idP)(() => B[sym1][1]+B[sym1][2]+B[sym1][3])
      (divP(10))(multP(7))(()=>2+3+4+5)(multP(3))(() => 
        branch(sym1,sym2)(idP)(divP(7))(addP(8))(multP(3))
        (() => B[sym1].reduce((a,b) => a+b) - 42)
        (addP(-23))(divP(24))(() => pause(9))(() => lok = false)
      )
    )
  )  
}

function test_4 () {
  lok = true;
  A[sym1] = Mona([0], sym1);
  A[sym2] = Mona( [], sym2);
  A[sym3] = Mona([], sym3);
  A[sym1](addP(4))(cubeP)(addP(6))(squareP)(divP(100))(() => 

    branch(sym2,sym1)(idP)(squareP)(divP(7))(multP(3))(doubleP)(() => 

      branch(sym3,sym2)(idP)(() => B[sym1][1]+B[sym1][2]+B[sym1][3])
      (divP(23))(multP(7))(()=>2+3+4+5)(multP(3))(() => 

        branch(sym1,sym2)(idP)(divP(343))(addP(7))(multP(400))
        (addP(-1000))(divP(100))(() => pause(9))(() => lok = false)
      )
    )
  )  
}

function branch (a, b) {  // Transfers a copy of the last item in A[b] to A[a]
  let c = A[b]().slice(-1);
  return A[a](c);
}

function resume (s) {return branch(s,s)}

var lok = false;

function start () {
  if (!lok) {
    test_3()
  }
  else {
    setTimeout(() => start(),300);
  }
}

function start_2 () {
  if (!lok) {
    test_4()
  }
  else {
    setTimeout(() => start_2(),300);
  }
}`;
  return `${$$result.head += `${$$result.title = `<title>Promises</title>`, ""}`, ""}

<div style="${"font-family: Times New Roman; text-align: center; font-size: 38px;"}"><p></p>
Promise Handling Monads
</div>
<p>If you click the buttons  (below) more than once, in any order, each routine will finish and then start over with the next function in the queue.</p>
<button style="${"text-align: left"}">test_3 ()
</button>

<button style="${"text-align: left"}">test_4 ()
</button>
<br><br>
<h3>lok is ${escape(lok)}</h3>
<h3>B[sym1] is ${escape(B[sym1])}</h3>
<h3>B[sym2] is ${escape(B[sym2])}</h3>
<h3>B[sym3] is ${escape(B[sym3])}</h3>

<pre style="${"font-size: 18"}">${escape(code)}</pre>
<p>&quot;A&quot; and &quot;B&quot; are global objects manipulated by the monadPlus function named &quot;Mona&quot;. There is no danger of name clashes, race conditions, or anything else untoward because this Svelte-Sapper module is small and unreachable from other modules. As Mona() changes B[sym1], B[sym2], and B[sym3], the browser display changes accordingly. Here&#39;s the dynamic display HTML:</p>

<pre style="${"font-size: 18"}">${escape(code2)}</pre>
<p>And here&#39;s the code for the functions:</p>
<pre style="${"font-size: 18"}">${escape(code3)}</pre>
  <br>
  <p></p>
  <br>`;
});
export { Monad3 as default };
