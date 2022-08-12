import { c as create_ssr_component, e as escape } from "../../../_app/immutable/chunks/index-e5fe3e4f.js";
var s = "stop";
function M(x) {
  return function go(func) {
    if (typeof func === "function") {
      x = func(x);
      return go;
    } else if (func === "stop")
      return x;
  };
}
const Play = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var clog = console.log;
  var m3 = M(1);
  var S = (x) => (b) => (c) => {
    x = x + 1 / b ** c;
    return x;
  };
  S(1)(2)(2);
  m3(S(2)(1));
  clog(m3(s));
  m3(S(2)(2));
  clog(m3(s));
  m3(S(2)(3));
  clog(m3(s));
  m3(S(2)(4));
  clog(m3(s));
  m3(S(2)(5));
  clog(m3(s));
  return `<h2>${escape(m3(s))}</h2>
	
	<h2>${escape(m3(S(2)(6)))}</h2>
	
	<h2>${escape(m3(S(2)(7)))}</h2>
	
	<h2>${escape(m3(S(2)(8)))}</h2>
	
	<h2>${escape(m3(S(2)(9)))}</h2>`;
});
export {
  Play as default
};
