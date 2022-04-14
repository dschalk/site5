import { c as create_ssr_component, e as escape } from "../../../chunks/index-63796eb4.js";
function quadF2(a, b, c) {
  let abc;
  let d = (-b - Math.sqrt(b * b - 4 * a * c)) / (2 * a);
  let e = (-b + Math.sqrt(b * b - 4 * a * c)) / (2 * a);
  let z = c > 0 ? "+" : "-";
  let w = Math.abs(c);
  if (d === d) {
    abc = `${a}*x*x + ${b}*x ${z} ${w} = 0 has the following solutions: x = ${d} and x = ${e}`;
  } else {
    abc = `${a}*x*x + ${b}*x + ${c} = 0 has no real solutions`;
  }
  return abc + "<br>";
}
const Quadratic = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var RESULT = [];
  var M = function M2() {
    var ar = [];
    var result = [];
    return function run(x) {
      if (x)
        ar.push(x);
      if (ar.length === 3) {
        RESULT.unshift(`${quadF2(ar[0], ar[1], ar[2])}`);
        RESULT.length = 6;
        ar = [];
      }
      return function f(func) {
        if (func === "end")
          return result;
        else
          return run(func(x));
      };
    }(ar.pop());
  };
  var m = M();
  m(() => 3)(() => 3)(() => -36)(() => 4)(() => 4)(() => 4)(() => 1)(() => 1)(() => -2);
  m(() => 5)(() => -3)(() => -54)(() => 5)(() => 10)(() => -175)(() => 1)(() => 2)(() => -3);
  console.log(RESULT);
  var code1 = `var m = M();
m(()=>3)(()=>3)(()=>-36)(()=>4)(()=>4)(()=>4)(()=>1)(()=>1)(()=>-2)
m(()=>5)(()=>-3)(()=>-54)(()=>5)(()=>10)(()=>-175)(()=>1)(()=>2)(()=>-3)`;
  var change = `RESULT.unshift(4*x*x + 4*x + 4 = 0 has no real solutions);
RESULT.length = 6;`;
  return `${$$result.head += `${$$result.title = `<title>Quadratic</title>`, ""}`, ""}

<div style="${"font-family: Times New Roman; text-align: center; color: #0000AA; font-size: 38px;"}"><p></p>
Quadratic Formula
</div>&gt;
<h2>Functional Programming Paradigm Ignored</h2>

 <p>Some Haskell programmers behave like dour monks in an austere monistary, always ready to downvote advice that deviates from Haskell&#39;s &quot;no side effects, no mutations&quot; ethos. Some fanatical functional JavaScript coders won&#39;t even mutate variables confined entirely in function scope. To them I say, JavaScript really shines in small isolated modules where global variables present no danger, imposing types is unnecessary, and functions don&#39;t have to  </p>

<p>What follows is certainly not the best way to solve quadratic equations. It shows that a programmer who relies on functions more than classes, or the ersatz &quot;classes&quot; introduced in ES2016, can use </p>

<p>The function m(), returned by &quot;monad&quot; factory M(), has side effects (mutates &quot;RESULT&quot; while running), and it doesn&#39;t return the same value each time it processes identical arguments. Yes! It is unlike mathematical functions. It is vry impure. </p>
<p>The third time &quot;m(()=&gt;4)&quot; executes, a process runs placing a new item goes in RESULT&#39;s head, and incrementing the index of each RESULT property. Since RESULT.length = 6 is maintained, the previous tail is abandoned to the garbage collector            .</p>
<pre>${escape(change)}</pre> 
<pre>${escape(code1)}</pre>
<br>
<div><!-- HTML_TAG_START -->${RESULT[0]}<!-- HTML_TAG_END --></div>
<div><!-- HTML_TAG_START -->${RESULT[1]}<!-- HTML_TAG_END --></div>
<div><!-- HTML_TAG_START -->${RESULT[2]}<!-- HTML_TAG_END --></div>
<div><!-- HTML_TAG_START -->${RESULT[3]}<!-- HTML_TAG_END --></div>
<div><!-- HTML_TAG_START -->${RESULT[4]}<!-- HTML_TAG_END --></div>
<div><!-- HTML_TAG_START -->${RESULT[5]}<!-- HTML_TAG_END --></div>`;
});
export { Quadratic as default };
