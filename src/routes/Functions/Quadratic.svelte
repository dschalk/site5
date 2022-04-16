<script>
import {fade} from "svelte/transition"
var end = "end"

    function quadF2 (a, b, c) {
      let abc;
      let d = (-b - Math.sqrt(b * b - 4 * a * c)) / (2 * a);
      let e = (-b + Math.sqrt(b * b - 4 * a * c)) / (2 * a);
    let z = (c > 0) ? "+" : "-";
    let w = Math.abs(c);  
      if (d === d) {
        abc = (`${a}*x*x + ${b}*x ${z} ${w} = 0 has the following solutions: x = ${d} and x = ${e}`);
      }
      else {
          abc = (`${a}*x*x + ${b}*x + ${c} = 0 has no real solutions`);
    }
    return abc + "<br>";
  }
  var window = {};
window["<br>"] = "<br>"
var RESULT = []  
  
var M = function M ()  {  
    var ar = [];
    let res = "";
    var result = [];
    return (function run (x) {  
        if (x) ar.push(x); // excludes null, NaN, and undefined
        if (ar.length === 3) {
        RESULT.unshift(`${quadF2(ar[0], ar[1], ar[2])}`)
        RESULT.length = 6;
           ar = [];
        }
        return function f (func) {
            if (func === "end") return result;
            else return run(func(x));
        };
  })(ar.pop());
}
var m = M();
m(()=>3)(()=>3)(()=>-36)(()=>4)(()=>4)(()=>4)(()=>1)(()=>1)(()=>-2)
m(()=>5)(()=>-3)(()=>-54)(()=>5)(()=>10)(()=>-175)(()=>1)(()=>2)(()=>-3)
     console.log(RESULT) 
     let ar = [1,2,3,4,5];
 var code1 = `var m = M();
m(()=>3)(()=>3)(()=>-36)(()=>4)(()=>4)(()=>4)(()=>1)(()=>1)(()=>-2)
m(()=>5)(()=>-3)(()=>-54)(()=>5)(()=>10)(()=>-175)(()=>1)(()=>2)(()=>-3)`
var change = `RESULT.unshift(4*x*x + 4*x + 4 = 0 has no real solutions);
RESULT.length = 6;`
</script>
<svelte:head>
	<title>Quadratic</title>
</svelte:head>

<div style = "font-family: Times New Roman;  text-align: center; color: #0000AA; font-size: 38px;" transition:fade>
  <p></p>
Quadratic Formula
</div>>
<h2>Functional Programming Paradigm Ignored</h2>

 <p>Some Haskell programmers behave like dour monks in an austere monistary, always ready to downvote advice that deviates from Haskell's "no side effects, no mutations" ethos. Some fanatical functional JavaScript coders won't even mutate variables confined entirely in function scope. To them I say, JavaScript really shines in small isolated modules where global variables present no danger, imposing types is unnecessary, and functions don't have to  </p>

<p>What follows is certainly not the best way to solve quadratic equations. It shows that a programmer who relies on functions more than classes, or the ersatz "classes" introduced in ES2016, can use </p>

<p>The function m(), returned by "monad" factory M(), has side effects (mutates "RESULT" while running), and it doesn't return the same value each time it processes identical arguments. Yes! It is unlike mathematical functions. It is vry impure. </p>
<p>The third time "m(()=>4)" executes, a process runs placing a new item goes in RESULT's head, and incrementing the index of each RESULT property. Since RESULT.length = 6 is maintained, the previous tail is abandoned to the garbage collector            .</p>
<pre>{change}</pre> 
<pre>{code1}</pre>
<br>
<div>{@html RESULT[0]}</div>
<div>{@html RESULT[1]}</div>
<div>{@html RESULT[2]}</div>
<div>{@html RESULT[3]}</div>
<div>{@html RESULT[4]}</div>
<div>{@html RESULT[5]}</div>




























