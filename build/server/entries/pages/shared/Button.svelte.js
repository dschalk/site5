import { c as create_ssr_component, e as escape, n as null_to_empty } from "../../../chunks/index-63796eb4.js";
var Button_svelte_svelte_type_style_lang = "";
const css = {
  code: "button.svelte-1ew1atc{border:0;cursor:pointer;border-radius:6px;padding:8px 12px;font-weight:bold;box-shadow:1px 2px 3px rgba(0,0,0,0.2)}.flat.svelte-1ew1atc{box-shadow:none}.primary.svelte-1ew1atc{background:#d91b42;color:white}.secondary.svelte-1ew1atc{background:#45c496;color:white}.primary.inverse.svelte-1ew1atc{color:#d91b42;background:white;border:2px solid #d91b42}.secondary.inverse.svelte-1ew1atc{color:#45c496;background:white;border:2px solid #45c496}",
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
  return `<button class="${[
    escape(null_to_empty(type)) + " svelte-1ew1atc",
    (flat ? "flat" : "") + " " + (inverse ? "inverse" : "")
  ].join(" ").trim()}">${slots.default ? slots.default({}) : ``}
</button>`;
});
export { Button as default };
