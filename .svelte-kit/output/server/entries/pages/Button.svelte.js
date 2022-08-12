import { c as create_ssr_component } from "../../_app/immutable/chunks/index-e5fe3e4f.js";
const Button_svelte_svelte_type_style_lang = "";
const css = {
  code: "button.svelte-48gc2l{border:0;border-radius:6px;cursor:pointer;padding:8px 12px;font-weight:bold;box-shadow:1px, 2px, 3px rgba (0,0,0,0.2)}",
  map: null
};
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { type = "primary" } = $$props;
  let { flat = false } = $$props;
  let { inverse = false } = $$props;
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.flat === void 0 && $$bindings.flat && flat !== void 0)
    $$bindings.flat(flat);
  if ($$props.inverse === void 0 && $$bindings.inverse && inverse !== void 0)
    $$bindings.inverse(inverse);
  $$result.css.add(css);
  return `<button class="${"svelte-48gc2l"}">${slots.default ? slots.default({}) : ``}

</button>`;
});
export {
  Button as default
};
