import { c as create_ssr_component, e as escape, b as add_attribute } from "../../../../_app/immutable/chunks/index-e5fe3e4f.js";
const Haskell = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  console.log("Cow");
  let display = "inline";
  let A = 1e4;
  let B = 1e4;
  let F = 1e4;
  let E = "Please enter a name here for the chat app (registration is unnecessary):";
  let creatures = ["samantha"];
  let profile = ["species"];
  return `${$$result.head += `${$$result.title = `<title>Haskell Programming Language</title>`, ""}`, ""}

    

    <div style="${"font-family: Times New Roman; text-align: center; font-size: 38px;"}"><br>
    Haskell Programming Language
    </div>

    <div>${escape(A)}</div>
    <div>${escape(B)}</div>
    <div>${escape(creatures)}</div>
    <div>${escape(profile)}</div>
    <div>${escape(F)}</div>
    <div>${escape(E)}</div>

    <input style="${"display: " + escape(display, true)}" type="${"text"}">
    <br><br>

    <input style="${"display2: " + escape(display, true)}" type="${"text"}">
    <br><br>

    <h2>Creatures</h2>

    <label><input type="${"radio"}"${add_attribute("value", 0, 0)}${0 === creatures ? add_attribute("checked", true, 1) : ""}>
        Samantha
    </label>

    <label><input type="${"radio"}"${add_attribute("value", 1, 0)}${1 === creatures ? add_attribute("checked", true, 1) : ""}>
        Bob
    </label>

    <label><input type="${"radio"}"${add_attribute("value", 2, 0)}${2 === creatures ? add_attribute("checked", true, 1) : ""}>
        Sally
    </label>

    <label><input type="${"radio"}"${add_attribute("value", 3, 0)}${3 === creatures ? add_attribute("checked", true, 1) : ""}>
        Fido
    </label>

    <label><input type="${"radio"}"${add_attribute("value", 4, 0)}${4 === creatures ? add_attribute("checked", true, 1) : ""}>
        Alex
    </label>

    <br><br>

    <h2>Creature</h2>

    <label><input type="${"radio"}"${add_attribute("value", 0, 0)}${0 === profile ? add_attribute("checked", true, 1) : ""}>
        Species
    </label>

    <label><input type="${"radio"}"${add_attribute("value", 1, 0)}${1 === profile ? add_attribute("checked", true, 1) : ""}>
        Sex
    </label>

    <label><input type="${"radio"}"${add_attribute("value", 2, 0)}${2 === profile ? add_attribute("checked", true, 1) : ""}>
        Age
    </label>

    <button>Evaluate</button>`;
});
export {
  Haskell as default
};
