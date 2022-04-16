import { c as create_ssr_component, e as escape } from "../../../chunks/index-63796eb4.js";
var Promises_Monad_svelte_svelte_type_style_lang = "";
const css = {
  code: "a.svelte-euyywb{color:#eb93eb}a.svelte-euyywb:hover{color:#f7f700}button.svelte-euyywb{margin-left:1%;background-color:#CCffff;border-width:0px;border-color:#361B01;border-radius:25px;color:darkblue;font-size:20px;box-shadow:0px 0px 12px 0px rgb(0, 255, 0);padding:3px 5px 3px 5px;text-align:center;width:100%}button.svelte-euyywb:hover{box-shadow:0px 0px 12px 0px rgb(0,0,255);color:#0000FF;font-size:22px;background-color:gold ;border-color:#0000AA}p.svelte-euyywb{text-indent:3%}",
  map: null
};
var COW = 7;
const Promises_Monad = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var O = { b0: 1, b1: 2, b2: 3 };
  var candle = `Hello`;
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Async</title>`, ""}`, ""}

<div style="${"font-family: Times New Roman; text-align: center; color: yellow; font-size: 38px;"}">Asynchronous Information Handling
</div>
<br>
<h1>${escape(COW)} and ${escape(O)}</h1>
<p class="${"svelte-euyywb"}">Clicking the button below fetches three quasi-random integers from the Haskell WebSockets server which are then sent to a Web Worker. The Worker returns the prime factors of the number. </p> 
<h1>${escape(COW)}</h1>
<div>The WebSockets server sent these numbers (now at O.c0, O.c1, and O.c2); </div>
<div style="${"color:red"}"></div>

<h1>${escape(O)}</h1>
<span>Click this:</span>
<br>
<button class="${"svelte-euyywb"}">${escape(candle)}</button>


<p class="${"svelte-euyywb"}">In this demonstration, Monad() returns a function run() that returns a function f(). f() takes two arguments and calls run(a,b). run makes the assignment O[a1] = b, O[a2] =b, or O[a3] = b on the global object O, and returns f(). The cycle is repeated whenever f() encounters more arguments.  </p>

<p class="${"svelte-euyywb"}">Functions that cause side effects during execution can cause hard-to-find bugs. There is, however, no danger of that occurring here. This module is small, run() is the only function that modifies O, and there are no functions in the script that fetch data from O. O exists for the sole purpose of keeping browser displays refreshed when data arrives from the WebSockets server and the Web Worker. Svelte&#39;s built-in reactivity keeps the HTML page in sync with O.  </p>

<p class="${"svelte-euyywb"}">Here&#39;s the definition of &quot;Monad&quot; used in this module:</p>

<p class="${"svelte-euyywb"}">Messages are sent to the Haskell WebSockets server requesting pseudo-random numbers between 1 and the integer specified at the end of the request. On the server, randomR from the System.Random library produces a number that is sent to the browser with the prefix &quot;BE#$42&quot;. Messages from the server are parsed in socket.onmessage. If the prefix is &quot;BE#$42&quot;, mon(p) executes, where p is the payload (a number) and mon is defined by &quot;mon = Monad()&quot;. mon sends p to worker_OO, which sends back the prime decomposition of p.</p>
<p class="${"svelte-euyywb"}">mon(m) then executes, where m is an array co from the web worker are processed in worker_OO.onmessag
</p><p class="${"svelte-euyywb"}">When M === 2 the process is complete. M and N are set to -1 and lock is set to false, allowing another possible call to random() to call rand(). </p>



<br>
<br>
<span>The code for this Svelte application is at </span>
<a href="${"https://github.com/dschalk/blog/"}" target="${"_blank"}" class="${"svelte-euyywb"}">GitHub repository</a>`;
});
export { Promises_Monad as default };
