import { c as create_ssr_component, e as escape, b as add_attribute } from "../../../../_app/immutable/chunks/index-e5fe3e4f.js";
const array = "/_app/immutable/assets/Screenshot_array-ef4daf70.png";
const asynchronous_functions_svelte_svelte_type_style_lang = "";
const css = {
  code: "img.svelte-950gb7{width:90%;height:90%}",
  map: null
};
function ret() {
}
function M(x) {
  return function go(func) {
    if (func === ret)
      return x;
    else
      x = func(x);
    return go;
  };
}
const Asynchronous_functions = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var m1 = M([2]);
  var mpow = (y) => (x) => {
    x.push(x.slice(-1)[0] ** y);
    return x;
  };
  var msqrt = (x) => {
    x.push(Math.sqrt(x.slice(-1)[0]));
    return x;
  };
  var mMult = (y) => (x) => {
    x.push(x.slice(-1)[0] * y);
    return x;
  };
  var madd = (y) => (x) => {
    x.push(x.slice(-1)[0] + y);
    return x;
  };
  m1(mpow(3))(mpow(3))(mMult(2))(msqrt)(madd(10));
  console.log("m1(dev) is", m1(ret));
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Recursive Closures Over Arrays</title>`, ""}`, ""}
<br>
<div>**************************************************************************</div>
<div style="${"font-family: Times New Roman; text-align:center; font-size: 32px;"}"><br>

  Recursive Closures Over Arrays
</div>
<br>

<p>The result, as expected, is [ ${escape(m1(ret))} ].</p>
<img${add_attribute("src", array, 0)} class="${"svelte-950gb7"}">`;
});
export {
  Asynchronous_functions as default
};
