import { c as create_ssr_component, e as escape, a as add_attribute } from "../../../chunks/index-63796eb4.js";
var Monad0_svelte_svelte_type_style_lang = "";
const css = {
  code: ".tao.svelte-1dr4x6t{margin-left:3%}h3.svelte-1dr4x6t{font-size:27px}",
  map: null
};
function Monad(x) {
  return function foo(func) {
    if (func === "stop")
      return x;
    else {
      x = func(x);
      return foo;
    }
  };
}
const Monad0 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let monadDisplay = `function Monad (x) {
  return function foo (func) {
    if (func === "stop") return x
    else  {
      x = func(x);
      return foo;
    }
  };
}`;
  const prod = (a) => (b) => a * b;
  const sum = (a) => (b) => a + b;
  let num = 6;
  let run = function run2(num2) {
    return [Monad(num2)(sum(7))(prod(4))(sum(-10))("stop")];
  };
  let mona = run(num);
  console.log(mona);
  console.log("num is", num);
  $$result.css.add(css);
  return `${`<div style="${"font-family: Times New Roman; text-align:center; font-size: 32px;"}"><p></p>
A SIMPLE LITTLE MONAD
 	</div>`}
 <br>
 <span class="${"tao svelte-1dr4x6t"}">Monad (from Greek \u03BC\u03BF\u03BD\u03AC\u03C2 monas, &quot;singularity&quot; in turn from \u03BC\u03CC\u03BD\u03BF\u03C2 monos, &quot;alone&quot;)[1] refers, in cosmogony, to the Supreme Being, divinity or the totality of all things. A basic unit of perceptual reality is a &quot;monad&quot; in Gottfried Leibniz&#39; </span>
<span style="${"font-style: italic"}">Monadology </span>
<span>, published in 1714. A single note in music theory is called a monad. </span>
<p>Monads in the Haskell Programming Language were inspired by Category Theory monads. The &quot;monads&quot; discussed herein are inspired by Haskell monads. Here&#39;s the definition of the simple monad described in this module: </p>
<pre>${escape(monadDisplay)}</pre>

<div>In &quot;Monad(6)(v=&gt;v+7)(v=&gt;v*4)(v=&gt;v-10)&quot;, the expression &quot;Monad(6)&quot; creates a closure around &quot;x&quot; accessible to the return value, foo(). The expression &quot;foo(&#39;stop&#39;)&quot; causes foo to return the number held in the closure, 42. </div>
<p>As in Category Theory and the Haskell programming language, the monads described above encapsulate sequences of computations. They do it in a drastically different way, without relying on types. </p>

<p>Below, you can supply num in &quot;Monad(num)(sum(7))(prod(4))(sum(-10))(&#39;stop&#39;)&quot; where </p>
<pre>
    const prod = a =&gt; b =&gt; a*b;
const sum = a =&gt; b =&gt; a+b;    
</pre>
<input id="${"one"}" type="${"number"}"${add_attribute("value", num, 0)}>
<p>num is ${escape(num)} so run(num) returns ${escape(run(num))}</p>

<h3 class="${"svelte-1dr4x6t"}">Encapsulating State</h3>
<span class="${"tao svelte-1dr4x6t"}">Named monads persist after they encounter &quot;stop&quot;, ready to process more functions.  </span>

<pre>
var m = Monad(3)
m(&quot;stop&quot;);  // returns 3
m(v =&gt; v**3)  // Returns foo()
m(&quot;stop&quot;)  // returns 27</pre>`;
});
export { Monad0 as default };
