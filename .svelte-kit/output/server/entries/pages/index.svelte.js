import { c as create_ssr_component } from "../../chunks/index-2dc61825.js";
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<p>Two versions of the JavaScript recursive closures (I call them &quot;monads&quot;) are in the Functions subdirectory. They have similar APIs, but <a href="${"/Functions/monads"}">&quot;monads&quot;</a> mutates the state it encapsulates and <a href="${"/Functions/monads2"}">&quot;monads2&quot;</a> doesn&#39;t. </p>
<p>The simple monads store current state and sometimes prior states that have been sequentially transformed, as seen in the &quot;take-backs&quot; feature in monads2. Functions transform the state encapsulated by monads not by operating on them, but by being arguments of the Monads. This is somewhat similar to Haskell monads which aren&#39;t mutated but which operate on functions that result in fresh monads having the desired new or altered features.</p>`;
});
export { Routes as default };
