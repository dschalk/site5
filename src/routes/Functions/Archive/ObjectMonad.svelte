<script>
import {fade} from "svelte/transition"
var end = "end"

let vv = 3;

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

let value = 42
let submit = false
	
const handleSubmit = () => {
	submit = true
}
	
const handleKeyup = (event) => {
		submit = false
    if (event.code == 'Enter') {
		    event.preventDefault()
        vv = parseInt(event.target.value, 10);
        value = foo(vv);
        event.target.value = null;
		  	return false
		}
 }
  
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
}  `

</script>

<svelte:head>
	<title>Objects</title>
</svelte:head>

<div style = "font-family: Times New Roman;  text-align: center; color: #0000AA; font-size: 38px;" transition:fade>
  <p></p>
Object Monads
</div>
<br><br>
<form on:submit|preventDefault={handleSubmit}>
	<input type="text" on:keyup|preventDefault={handleKeyup}>
</form>

<h3>ret({vv}).bnd(=>ret(x**3)).bnd(x=>ret(x*2)).bnd(x=>ret(x-12)).x = {value} </h3>
<p>In this example, Monad returns simple objects I call "monads". Each monad "m" has two components: "x" can be any JavaScript value and "bnd" is a method that operates on functions. Let m = new Monad(v), then m.x = v and m.bnd(func) for some function func returns a monad "m2", which can be anonymous, whose components are func(v) and the method "bnd". m2.bnd(func2) for some function "func2" returns a monad with components func2(func(v)) and bnd().  </p>
<p>The interactive example above shows a</p>

<pre>
{code}
</pre>



