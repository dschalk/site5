import { c as create_ssr_component, b as add_attribute } from "../../../../_app/immutable/chunks/index-e5fe3e4f.js";
import { a as async } from "../../../../_app/immutable/chunks/Screenshot_async-76142dca.js";
const asyncMonads_svelte_svelte_type_style_lang = "";
const css = {
  code: "img.svelte-1q2uefn{width:100%;height:100%}",
  map: null
};
const AsyncMonads = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Asynchronous values in monads</title>`, ""}`, ""}
<br>
<div>**************************************************************************</div>
<div style="${"font-family: Times New Roman; text-align:center; font-size: 32px;"}"><br>

    Arrays in Monads
</div>
<br>
<p></p>

<img${add_attribute("src", async, 0)} class="${"svelte-1q2uefn"}">`;
});
export {
  AsyncMonads as default
};
