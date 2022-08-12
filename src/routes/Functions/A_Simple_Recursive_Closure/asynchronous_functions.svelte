<script>
	// @ts-ignore

  import array from '$lib/Screenshot_array.png';

	import { merge_ssr_styles } from 'svelte/internal';
	//	import { onMount } from "svelte";
	import { fade } from 'svelte/transition';

var log = console.log;
function ret () {};

function M (x) {
  return function go (func) {
      if (func === ret) return x
      else x = func(x);
      return go;
  }
}

var m1 = M([2]);
var mpow = y => x => {x.push((x.slice(-1)[0]**y)); return x}
var msqrt = x => {x.push(Math.sqrt(x.slice(-1)[0])); return x}
var mMult = y => x => {x.push(x.slice(-1)[0]*y); return x}
var madd = y => x => {x.push(x.slice(-1)[0]+y); return x}
m1(mpow(3))(mpow(3))(mMult(2))(msqrt)(madd(10))
console.log("m1(dev) is", m1(ret));

</script>
<style>
    img {
        width:90%; 
        height:90%;
    }
</style>
<svelte:head>
	<title>Recursive Closures Over Arrays</title>
</svelte:head>
<br />
<div>**************************************************************************</div>
<div style="font-family: Times New Roman; text-align:center; font-size: 32px;" transition:fade>
	<br />

  Recursive Closures Over Arrays
</div>
<br />

<p>The result, as expected, is [ {m1(ret)} ].</p>
<img src={array}/>
