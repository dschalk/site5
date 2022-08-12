import { c as create_ssr_component, e as escape, b as add_attribute } from "../../../_app/immutable/chunks/index-e5fe3e4f.js";
import { pow, complex, sqrt, pi } from "mathjs";
var s = "stop";
function M(x) {
  return function go(func) {
    if (typeof func === "function") {
      x = func(x);
      return go;
    } else if (func === "stop")
      return x;
  };
}
const Zeta = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  console.log("pow(icomplex(2,5)", pow(2, 5));
  console.log("pow(complex(2, 2))", pow(complex(2, 2)));
  console.log("pow(complex(0, 2))", pow(complex(0, 2)));
  sqrt(complex(16, -4));
  console.log("sqrt(complex(16,-4", sqrt(complex(16, -4)));
  var qq = null;
  var AA;
  var BB;
  var fu = (a) => (b) => (c) => {
    for (let k = 1; k < a; k += 1) {
      c = c + (1 / k) ** b;
    }
    return c;
  };
  const reset = function reset2() {
    m3((v) => 0);
    m3(fu(AA * 1)(BB * 1));
    q = m3ret;
    return q;
  };
  var m3 = M(0);
  var q;
  m3(fu(1e6));
  var MCode = `function M (x) {
  return function go (func) {
      if (typeof func === "function") {
          x = func(x);   // New x for the next recursion. 
          return go;
      }
      else if (func === "stop") return x;   
    }
}`;
  var runCode = `const reset = function reset() {
        m3 (v => 0);     // Re-sets x in M to 0. 
        m3(fu(AA * 1)(BB*1));  
        q = m3ret;
        return q;    // The extra line of code helps assure reactivity   
    }`;
  const m3Code = `m3 = M(0)`;
  const funCode = `const fun = a => b => {
        for (let k = 1; k < a; k+=4) {
            b = b + 1/k - 1/(k+2);
    }
    return b;
}`;
  AA = 1e5;
  BB = complex(16, -4);
  q = m3(s);
  return `${$$result.head += `${$$result.title = `<title>Approximating the Reiman zeta function</title>`, ""}`, ""}
<br>
<div>**************************************************************************</div>
<div style="${"font-family: Times New Roman; text-align:center; font-size: 32px;"}"><br>
	Approximating the Reiman Zeta Function in the M(x) Closure
</div>
<br>
<p>This page continues to experiment with the  recursive closures (I sometimes call them &quot;monads&quot;) defined in  <a href="${"monads"}">monads</a> as: </p>
<pre>${escape(MCode)}</pre>
<p>The closure used on this page is defined by <span style="${"color: #44ffff; font-size:25px; text-emphasis:bold; text-indent:4%"}">${escape(m3Code)}.</span> For this instance of the M(x) closure, m3 is &quot;go&quot; in the definition of &quot;M&quot; and the value of x starts out as 0. </p>
<br>
<span style="${"text-indent:23px;"}">This is the Riemann zeta function:</span>
    <pre>        <sub style="${"font-size:20px"}">\u221E</sub> 
 \u03B6(s) = \u2211 1/k**s 
        <span style="${"font-size:14px"}">k=1</span></pre>
 <p>Here are a couple of explanations:<a href="${"https://www.britannica.com/science/Riemann-zeta-function"}">the Riemann zeta function</a> .  For a more detailed explanation, see <a href="${"https://en.wikipedia.org/wiki/Riemann_zeta_function"}">Wikipedia: Riemann Zeta Function</a></p>

<p>The default demonstration (below) approximates \u03B6(2) = \u03C0/6 with 100,000 1/k**2 terms. You can change this, perhaps lowing it for a a cell phone or raising it for a desktop computer. 100,000,000 terms is about as far as I can comfortably go on my desktop computer.  Much beyond that it hangs too long or crashes.</p>
<p>&quot;s&quot; can be any complex number in the Riemann zeta function, but right now, only real numbers are computed on this page. Here are some ideas for some values of s: <a href="${"https://en.wikipedia.org/wiki/Particular_values_of_the_Riemann_zeta_function"}">Particular values of the Riemann zeta function </a></p>
<p>&quot;AA&quot; and &quot;BB&quot; are the numbers in the left and right boxes (respectively) below. Clicking &quot;Compute&quot; runs:</p>
<pre>${escape(runCode)}</pre>
<p>fu() takes three arguments but fu() with only its &quot;a&quot; and &quot;b&quot; parameters specified is provided to m3. The &quot;c&quot; value in fu&#39;s definition is named &quot;x&quot; in the m3 closure. fu(a)(b)(x) changes the value of x in preparation for another recursion or for m3ret. Ater &quot;stop&quot;, m3 still holds its most recent value and can resume recursive computations at any time.  </p>

<p style="${"font-size:28px;"}">This is the actual value of  \u03C0 is 3.141592653...</p>

<span style="${"color: gold; font-size:32px"}">${escape(sqrt(q * 6).toFixed(9))}</span>

<br>

<input${add_attribute("value", AA, 0)}>
<input${add_attribute("value", BB, 0)}>
<button id="${"compute"}">Compute</button>
${escape(reset())}

<p>Here&#39;s an efficient way to approximate \u03C0/4:</p>
<pre>${escape(funCode)}</pre>


<p style="${"font-size:28px;"}">The actual value of  \u03C0 is ${escape(pi.toFixed(10))}...</p>
<h4>qq * 4  = ${escape((qq * 4).toFixed(10))}</h4>

<span>Enter a number here --&gt;  </span><input id="${"fun"}" type="${"number"}" style="${"width: 130px"}">


<p>I entered ten billion on my desktop computer and  got 3.1415926534. That&#39;s accurate up to the end where the 4 should be 6.  </p>`;
});
export {
  Zeta as default
};
