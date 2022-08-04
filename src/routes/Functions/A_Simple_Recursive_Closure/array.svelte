<script>
	// @ts-ignore

	import { merge_ssr_styles } from 'svelte/internal';
	//	import { onMount } from "svelte";
	import { fade } from 'svelte/transition';

    var log = console.log;
function ret () {};

function M1 (x) {
  return function go (func) {
      if (func === ret) return x;
      if (typeof func === 'function') {
            x = func(x);
            return go;
      }
   }
}

var m1 = M1([2]);
var mpow = y => x => {x.push((x.slice(-1))**y); return x}
var msqrt = x => {x.push(Math.sqrt(x.slice(-1))); return x}
var mdouble = x => {x.push(x.slice(-1)*2); return x}
var madd = y => x => {x.push(x.slice(-1)+y); return x}
// m1(mpow(3))(mpow(3))(mdouble)(msqrt)(madd(10))(ret)

var zz = m1(mpow(3))(mpow(3))(mdouble)(msqrt)(madd(10))(ret);
console.log("zz is", zz);

var code = `function ret () {};  // Used in M1 (below).

function M1 (x) {
  return function go (func) {
      if (func === ret) return x;  // M used "stop", M1 uses ret.
      if (typeof func === 'function') {
            x = func(x);
            return go;
      }
   }
}

var m1 = M1([2]);
var mpow = y => x => {x.push((x.slice(-1))**y); return x}
var msqrt = x => {x.push(Math.sqrt(x.slice(-1))); return x}
var mdouble = x => {x.push(x.slice(-1)*2); return x}
var madd = y => x => {x.push(x.slice(-1)+y); return x}
m1(mpow(3))(mpow(3))(mdouble)(msqrt)(madd(10))(ret)`;

var code2 = `var zz = m1(mpow(3))(mpow(3))(mdouble)(msqrt)(madd(10))(ret)`;


</script>


<svelte:head>
	<title>Recursive Closures Without Mutating State</title>
</svelte:head>
<br />
<div>**************************************************************************</div>
<div style="font-family: Times New Roman; text-align:center; font-size: 32px;" transition:fade>
	<br />

    Arrays in Monads
</div>
<br />

<p>Eventually, we'll put arrays of promises in monads, chaining them to produce results. This first step toward that end maintains and manipulates arrays of numbers. This code: </p>
<pre>{code}</pre>
<p>Is the used to run:</p>
<pre>{code2}</pre>
<p>The result, as expected, is [ {zz.join(", ")} ].</p>
