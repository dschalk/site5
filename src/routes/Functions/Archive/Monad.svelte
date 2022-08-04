<script>
import {fade} from "svelte/transition"
var monad = `function M (defaultArg = [])  {  
    var ar = defaultArg.slice(); // clones the argument
    return (function run (x) {
        if (typeof x !== "undefined") ar.push(x); 
        return function f (func) {
            if (func === "end") return ar.slice();
            else return run(func(x));
        };
    })(ar.pop());
}`

var test = `mon = M();

var result = mon(()=>3)(x=>x*x*x)(x=>x*x)(x=>x/mon("end")[0]**2)
(Math.sqrt)(x=>mon("end")[1]+x)(x=>x+2*mon("end")[0])("end")

console.log(result)  // [3, 27, 729, 81, 9, 36, 42]`
var cow = `const sym1 = Symbol('sym1');
const sym2 = Symbol('sym2');
const sym3 = Symbol('sym3');

let B = {};
B[sym1] = [];
B[sym2] = [];
B[sym3] = [];

const  Mona = function Mona ( AR = [],  ar = "name" )  {  
  let p, run, f;
  B[ar] = AR.slice();
  return run = (function run (x) {
  if (x instanceof Promise) {x.then(y => {
    if (!( typeof y === "function" || y == lok || y == NaN || 
        typeof y == "undefined" ))   {B[ar] = B[ar].concat(y)}
    else if (typeof x !== "function" && x != lok  &&  typeof x !== "undefined"
       && x != NaN  && !(x instanceof Promise)) {B[ar] = B[ar].concat(x);
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
  })( B[ar].slice(-1)[0]);
}`
</script>

<style>

</style>

<svelte:head>
	<title>Basic Monad</title>
</svelte:head>

<div style = "font-family: Times New Roman;  text-align: center; font-size: 38px;" transition:fade>
  <p></p>
BASIC MONAD
</div>
<br>

<p>Forcing JavaScript to adhere to strict typing rules probably helps large development teams speed up the process of getting large, complicated applications into production. It might also be soothing to people who feel secure in highly structured environments. But here, we let JavaScript shine with only a few, common-sense rules such as, "make the code easy for future maintainers to understand"  and "each global variable is to be altered by no more than one function." </p>
<p>That doesn't mean there is a dearth of variety. As you will see in later modules, there's a monad that handles data from a WebSocket server and a Web Worker, one that handles Promises, another that serves as a transducer, and so on.  </p>
<p>Here's a basic design pattern; it's the definition of a very simple monad:</p>
<pre>{monad}</pre>
<p>"M()" returns "run()" which returns "f". M() holds the array ("ar") that can be augmented and manipulated by run(). If run() returns f() in front of a function, f()'s argument "func" (normally a function) is applied to run()'s argument, which is the return value of the previous "func" applied to the previous value of "x".</p>
<p>Until the last function ("func") in a chain evaluates the return value of the most recent "func(x)", recursion is automatic. The array "ar" grows during each cycle in which func(x) does not return null, NaN, or undefined. Whenever func === "end", ar is returned, but that does not end a chain of computations. As shown below, ar can be used in computations.</p>

<pre>{test}</pre>

<p>Note that both "mon = M([3])" and "mon = M()(()=>3)" have the same effect. They initialize the closure array making "ar === [3]" true.</p>
<p>Now I think the Promises monad will be easier to understand. It follows the same basic pattern with a new name for "M": Mona() returns run(), and run returns f(). The array that was previously held in "M()" is now stored externally in objects A and B; more precisely, in A[sym1], A[sym2], A[sym3], B[sym1], B[sym2], and B[sym3] where sym1, sym2, and sym3 are symbols. The Promises module features branching and resuming chains and a global lock named "lok" to prevent A and B from clashing. Check it out:</p>
<a href = http://blog.schalk.site/Monad3>Promises Monad</a> 

<p>Here are some definitions:  </p>
<pre>{cow}</pre>

