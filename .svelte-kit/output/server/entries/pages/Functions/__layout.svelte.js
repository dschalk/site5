import { c as create_ssr_component } from "../../../chunks/index-2dc61825.js";
var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".container.svelte-1ae2ou9{margin-right:10px}ul.svelte-1ae2ou9{display:flex;list-style:none;margin:0;font-size:11px}li.svelte-1ae2ou9{margin-right:10px}body{margin-right:12%;margin-left:12%;padding-right:3%;padding-left:3%;background-color:papayawhip}p{text-indent:3%}html{background-color:rgb(32,0,0)}body{background-color:papayawhip}p{font-size:20px}a{font-size:20px}pre{font-size:16px}",
  map: null
};
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div><br><br>
  <nav><ul class="${"svelte-1ae2ou9"}"><li class="${"svelte-1ae2ou9"}"><a href="${"/Functions"}">Home</a></li>
  
      <li class="${"svelte-1ae2ou9"}"><a href="${"/Functions/monads"}">monads</a></li>
  </ul></nav></div>
  
  
  <div></div>
  <div class="${"container svelte-1ae2ou9"}">${slots.default ? slots.default({}) : ``}</div>`;
});
export { _layout as default };
