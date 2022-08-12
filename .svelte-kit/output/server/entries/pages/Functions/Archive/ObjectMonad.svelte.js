import { c as create_ssr_component, e as escape } from "../../../../_app/immutable/chunks/index-e5fe3e4f.js";
const ObjectMonad = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let vv = 3;
  let value = 42;
  var code = `
var Monad = function Monad(z = 0) {
  var _this = this;
  this.x = z;
  this.bnd = function (func) {
    return new Monad(func(this.x).x);
  };
}

function ret (v) { 
  return new Monad(v);
} 
    
var foo = v => ret(v).bnd(x => ret(x**3)).bnd(x => ret(x*2)).bnd(x=>ret(x-12)).x;
let val = 3;


let value = 42
let submit = false
let vv = 3;
	
const handleSubmit = () => {
  submit = true
}
	
const handleKeyup = () => {
  submit = false
  if (event.code == 'Enter') {
    event.preventDefault()
    vv = parseInt(event.target.value, 10);
    value = foo(vv);
    return false
  }
}  `;
  return `${$$result.head += `${$$result.title = `<title>Objects</title>`, ""}`, ""}

<div style="${"font-family: Times New Roman; text-align: center; color: #0000AA; font-size: 38px;"}"><p></p>
Object Monads
</div>
<br><br>
<form><input type="${"text"}"></form>

<h3>ret(${escape(vv)}).bnd(=&gt;ret(x**3)).bnd(x=&gt;ret(x*2)).bnd(x=&gt;ret(x-12)).x = ${escape(value)}</h3>
<p>In this example, Monad returns simple objects I call &quot;monads&quot;. Each monad &quot;m&quot; has two components: &quot;x&quot; can be any JavaScript value and &quot;bnd&quot; is a method that operates on functions. Let m = new Monad(v), then m.x = v and m.bnd(func) for some function func returns a monad &quot;m2&quot;, which can be anonymous, whose components are func(v) and the method &quot;bnd&quot;. m2.bnd(func2) for some function &quot;func2&quot; returns a monad with components func2(func(v)) and bnd().  </p>
<p>The interactive example above shows a</p>

<pre>${escape(code)}
</pre>`;
});
export {
  ObjectMonad as default
};
