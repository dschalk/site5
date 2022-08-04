
<script>
import {fade} from "svelte/transition"
let visible = true;

let monadDisplay = `function Monad (x) {
  return function foo (func) {
    if (func === "stop") return x
    else  {
      x = func(x);
      return foo;
    }
  };
}`

function Monad (x) {
  return function foo (func) {
    if (func === "stop") return x
    else  {
      x = func(x);
      return foo;
    }
  };
}

const prod = a => b => a*b;
const sum = a => b => a+b;

let num = 6;

let run = function run(num) {
return [Monad(num)(sum(7))(prod(4))(sum(-10))("stop")]}


let mona = run(num);
console.log(mona)

function numF (e) {num = e.target.value; console.log("e.target.value is", e.target.value); return e.target.value}

console.log("num is", num);
</script>

<style>
.tao {
  margin-left: 3%;
}

h3 {
   font-size: 27px;
}

#aside {
    font-size: 18px;
    color: #eeaaff;
    font-style: italic;
}
</style>

 {#if visible}
 	<div style = "font-family: Times New Roman; text-align:center; font-size: 32px;" transition:fade>
     <p></p>
A SIMPLE LITTLE MONAD
 	</div>
 {/if}
 <br>
 <span class="tao"> Monad (from Greek μονάς monas, "singularity" in turn from μόνος monos, "alone")[1] refers, in cosmogony, to the Supreme Being, divinity or the totality of all things. A basic unit of perceptual reality is a "monad" in Gottfried Leibniz' </span>
<span style = "font-style: italic"> Monadology </span>
<span>, published in 1714. A single note in music theory is called a monad. </span>
<p> Monads in the Haskell Programming Language were inspired by Category Theory monads. The "monads" discussed herein are inspired by Haskell monads. Here's the definition of the simple monad described in this module: </p>
<pre>{monadDisplay}</pre>

<div> In "Monad(6)(v=>v+7)(v=>v*4)(v=>v-10)", the expression "Monad(6)" creates a closure around "x" accessible to the return value, foo(). The expression "foo('stop')" causes foo to return the number held in the closure, 42. </div>
<p> As in Category Theory and the Haskell programming language, the monads described above encapsulate sequences of computations. They do it in a drastically different way, without relying on types. </p>

<p> Below, you can supply num in "Monad(num)(sum(7))(prod(4))(sum(-10))('stop')" where </p>
<pre>
    const prod = a => b => a*b;
const sum = a => b => a+b;    
</pre>
<input id = "one" type = "number" on:input={run}  bind:value={num} />
<p> num is {num} so run(num) returns {run(num)} </p>

<h3>Encapsulating State</h3>
<span class = tao> Named monads persist after they encounter "stop", ready to process more functions.  </span>

<pre>
var m = Monad(3)
m("stop");  // returns 3
m(v => v**3)  // Returns foo()
m("stop")  // returns 27</pre>



