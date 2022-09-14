<script>
    import async from '$lib/Screenshot_async.png';
    import asyncIdpng from '$lib/Screenshot_asyncId.png';
	import { merge_ssr_styles } from 'svelte/internal';
	import { fade } from 'svelte/transition';

var log = console.log;
function ret () {};

function M1 (x) {
  return function go (func) {
      if (func === ret) return x;
      x = asyncId(x).then(v => func(v));
      return go;
  }
}
 
var M1Code = `function M1 (x) {
  return function go (func) {
      if (func === ret) return x;
      x = asyncId(x).then(v => func(v));
      return go;
  }
}

WHERE async function asyncId (x) {return x};`

var monad = `function M (x) {
    return function go (func) {
        if (func === ret) return x
        x = func(x);
        return go;
  }
}`

var asyncIdCode = `async function asyncId (x) {return x};

var m2 = M1(3);

log("m2(ret) is", m2(ret));  // 3

asyncId(m2(ret)).then(v=>log("asyncId(m2(ret)).then(v =>",v));  //3

asyncId(asyncId(asyncId(m2(ret))))
.then(v=>log("asyncId(asyncId(asyncId(m2(ret))))).then(v =>",v));  //3`;

async function asyncId (x) {return x};
async function wait (t) {setTimeout(function () {}),t*1000};
var m1 = M1(2);
var m2 = M1(new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(2);
  }, 1500)}));

var mpow = y => async x => asyncId(x).then(v => x = v**y)
var msqrt = x => asyncId(x).then(v => x = Math.sqrt(v));
var mMult = y => x => asyncId(x).then(v => x = v*y);
var madd = y => async x => {await wait(2); return x+y}; 

m1(mpow(10))(Math.sqrt)(madd(52))(mMult(2))(a => a*2)(async x => {await wait(2); return x/8});

m2(mpow(10))(Math.sqrt)(madd(52))(mMult(2))(a => a*2)(async x => {await wait(2); return x/8});

console.log("m1(ret) is", m1(ret))
console.log("m2(ret) is", m2(ret))
</script>
    
<style>
    img {
        width:100%; 
        height:100%;
    }
    h3 {color:turquoise }
</style>

<svelte:head>
	<title>Asynchronous values in monads</title>
</svelte:head>
<br />
<div>**************************************************************************</div>
<div style="font-family: Times New Roman; text-align:center; font-size: 32px;" transition:fade>
	<br />

    Asynchronous State Transformations in Monads
</div>
<br />
<h3>GOAL: Handle both Synchronous and Asynchronous Functions in a Simple Recursive Closure</h3>
<p>We've been creating the recursive closures called monads with: </p>
<pre>{monad}</pre>
<p>Here it is again with a small tweak enabling it to handle functions that operate on and/or return promises: </p>
<pre>{M1Code}</pre>
<p>AsyncId makes promises out of non-promises and has no effect on promises as shown below. </p>
<pre>{asyncIdCode}</pre>
<p>Part A (above) shows that m2(ret) == 3. Calling asyncId on m2(ret) in Part B returned a promise whose fulfullment value is 3. The Part B Promise is both the argument and the return value of asyncId in PartC   .</p>
<p>The next screenshot demonstrates M1-created monads taking as arguments a series of synchronous mixed with asynchronous functions. The value held in m1 is initially the number 2. The value in m2 is a promise that resolves to the number 2.  </p>
<p>After m1 and m2 operate on pow(5), both hold promises with fulfillment values of 32. Had they operated on mpow(5) instead, the result would be the same.</p> 

<img src={async}/>
<img src={asyncIdpng}/>
