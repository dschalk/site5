
<script>
	import { merge_ssr_styles } from 'svelte/internal';
	import { onMount } from "svelte";
	import { fade } from 'svelte/transition';
	// import Index from "./index.svelte";

import {complex, square,  chain,  e, evaluate, log, pi, pow, round, sqrt, create, all} from 'mathjs';

console.log("pow(icomplex(2,5)", pow(2, 5));
console.log("pow(complex(2, 2))", pow(complex(2, 2)));
console.log("pow(complex(0, 2))", pow(complex(0, 2)));

var im = sqrt(complex(16,-4))
console.log("sqrt(complex(16,-4", sqrt(complex(16,-4)));
	
var clog = console.log;
var s = "stop";

function M (x) {
  return function go (func) {
      if (typeof func === "function") {
          x = func(x);
          return go;
      }
      else if (func === "stop") return x;
  }
};

function pip () {return π }   // π

/* var fu = a => b => c => {
        for (let k = 1; k < a; k+=1) {
            c = c + (1/k)**b;
    }
    return c;
}*/

 const m4 = M(0);

var qq = null;
// $: qq = m4ret;

const fun = a => b => {
        for (let k = 1; k < a; k+=4) {
            b = b + 1/k - 1/(k+2);
    }
    return b;
}

  function resetFun(e) {
		if (e.keyCode == 13) {
           m4 (v => 0);     // Returns the "x" value to 0.
           (m4(fun(e.target.value * 1)));
           qq = m4ret;
           console.log("qq and m4(s) are", qq, m4ret);
           return qq;
		}
	};

var AA;
$: AA = 100000;
var BB;
$: BB = complex(16,-4);

var fu = a => b => c => {
        for (let k = 1; k < a; k+=1) {
            c = c + (1/k)**b;   // Terms of the Reimann zeta function
    }
    return c;
}

const reset = function reset() {
        m3 (v => 0);              
        m3(fu(AA * 1)(BB*1));  
       q = m3ret;
       return q;                       
    }

// var foo = fu(10000000)(2);
var m3 = M(0);
var q;
 m3(fu(1000000)); 
$: q = m3(s);
var MCode = `function M (x) {
  return function go (func) {
      if (typeof func === "function") {
          x = func(x);   // New x for the next recursion. 
          return go;
      }
      else if (func === "stop") return x;   
    }
}`;
var fuCode = `var fu = a => b => c => {
        for (let k = 1; k < a; k+=1) {
            c = c + (1/k)**b;   // Terms of the zeta function
    }
    return c;
}`;

var runCode = `const reset = function reset() {
        m3 (v => 0);     // Re-sets x in M to 0. 
        m3(fu(AA * 1)(BB*1));  
        q = m3ret;
        return q;    // The extra line of code helps assure reactivity   
    }`

    var resetCode = `const resetFu = function resetFu(e) {
		if (e.keyCode == 13) {
           m3 (v => 0);     // Returns the "x" value to 0.
           (m3(fu(e.target.value * 1)));
           q = m3ret;
           return q;
		}
	}`;

const m3Code = `m3 = M(0)`

const funCode = `const fun = a => b => {
        for (let k = 1; k < a; k+=4) {
            b = b + 1/k - 1/(k+2);
    }
    return b;
}` ;




</script>

<svelte:head>
	<title>Approximating the Reiman zeta function</title>
</svelte:head>
<br />
<div>**************************************************************************</div>
<div style="font-family: Times New Roman; text-align:center; font-size: 32px;" transition:fade>
	<br />
	Approximating the Reiman Zeta Function in the M(x) Closure
</div>
<br />
<p>This page continues to experiment with the  recursive closures (I sometimes call them "monads") defined in  <a href = "monads">monads</a> as: </p>
<pre>{MCode}</pre>
<p>The closure used on this page is defined by <span style = "color: #44ffff; font-size:25px; text-emphasis:bold;  text-indent:4%">{m3Code}.</span> For this instance of the M(x) closure, m3 is "go" in the definition of "M" and the value of x starts out as 0. </p>
<br>
<span style="text-indent:23px;">This is the Riemann zeta function:</span>
    <pre>        <sub style="font-size:20px">∞</sub> 
 ζ(s) = ∑ 1/k**s 
        <span style = "font-size:14px">k=1</pre>
 <p>Here are a couple of explanations:<a href = "https://www.britannica.com/science/Riemann-zeta-function">the Riemann zeta function</a> .  For a more detailed explanation, see <a href = "https://en.wikipedia.org/wiki/Riemann_zeta_function">Wikipedia: Riemann Zeta Function</a></p>

<p>The default demonstration (below) approximates ζ(2) = π/6 with 100,000 1/k**2 terms. You can change this, perhaps lowing it for a a cell phone or raising it for a desktop computer. 100,000,000 terms is about as far as I can comfortably go on my desktop computer.  Much beyond that it hangs too long or crashes.</p>
<p> "s" can be any complex number in the Riemann zeta function, but right now, only real numbers are computed on this page. Here are some ideas for some values of s: <a href="https://en.wikipedia.org/wiki/Particular_values_of_the_Riemann_zeta_function">Particular values of the Riemann zeta function </a>  </p>
<p> "AA" and "BB" are the numbers in the left and right boxes (respectively) below. Clicking "Compute" runs:</p>
<pre>{runCode}</pre>
<p>fu() takes three arguments but fu() with only its "a" and "b" parameters specified is provided to m3. The "c" value in fu's definition is named "x" in the m3 closure. fu(a)(b)(x) changes the value of x in preparation for another recursion or for m3ret. Ater "stop", m3 still holds its most recent value and can resume recursive computations at any time.  </p>

<p style="font-size:28px;">This is the actual value of  π is 3.141592653...</p>

<span style = "color: gold; font-size:32px"> {sqrt(q * 6).toFixed(9)} </span>

<br>

<input bind:value={AA}>
<input bind:value={BB}>
<button id = "compute" on:click = {reset}>Compute</button>
{reset()}

<p>Here's an efficient way to approximate π/4:</p>
<pre>{funCode}</pre>


<p style="font-size:28px;">The actual value of  π is {pi.toFixed(10)}...</p>
<h4>qq * 4  = {(qq * 4).toFixed(10)}</h4>

<span>Enter a number here -->  </span><input id = "fun" type="number" style="width: 130px" on:keydown={resetFun} />


<p>I entered ten billion on my desktop computer and  got 3.1415926534. That's accurate up to the end where the 4 should be 6.  </p>






