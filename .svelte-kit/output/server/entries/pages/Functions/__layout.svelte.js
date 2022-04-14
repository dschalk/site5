import { c as create_ssr_component } from "../../../chunks/index-63796eb4.js";
var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "ul.svelte-5x036g{display:flex;list-style:none;margin:0;font-size:11px;color:#bbccff\n}li.svelte-5x036g{margin-right:10px}",
  map: null
};
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div><br><br>
  <nav><ul class="${"svelte-5x036g"}"><li class="${"svelte-5x036g"}"><a href="${"/Functions/"}">Home</a></li>
  
      <span>\xA0\xA0\xA0   </span>
      
      <li class="${"svelte-5x036g"}"><a href="${"/Functions/monads"}">Monads</a></li>
  
  </ul></nav></div>
  
  
  <div></div>
  ${slots.default ? slots.default({}) : ``}`;
});
export { _layout as default };
