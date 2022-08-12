import { c as create_ssr_component } from "../../../_app/immutable/chunks/index-e5fe3e4f.js";
const __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "ul.svelte-hwm928{display:flex;list-style:none;margin:0;font-size:14px}li.svelte-hwm928{margin-right:10px}",
  map: null
};
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<span style="${"font-size: 30px"}">Law</span>
<nav><ul class="${"svelte-hwm928"}"><li class="${"svelte-hwm928"}"><a href="${"/Law/"}">Law Home</a></li>

        <li class="${"svelte-hwm928"}"><a href="${"/Law/law"}">Law</a></li>
        
        <li class="${"svelte-hwm928"}"><a href="${"/Law/archive"}">Archive</a></li>

        <li class="${"svelte-hwm928"}"><a href="${"/Law/chapter-1"}">Chapter 1</a></li></ul></nav>




${slots.default ? slots.default({}) : ``}`;
});
export {
  _layout as default
};
