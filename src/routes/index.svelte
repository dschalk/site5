<script>
import Index from "./Functions/index.svelte";
import Monads from "./Functions/monads.svelte";

</script>


<p> Two versions of the JavaScript recursive closures (I call them "monads") are in the Functions subdirectory. They have similar APIs, but <a href = "/Functions/monads">"monads"</a> mutates the state it encapsulates and <a href = "/Functions/monads2">"monads2"</a> doesn't. </p>
<p> The simple monads store current state and sometimes prior states that have been sequentially transformed, as seen in the "take-backs" feature in monads2. Functions transform the state encapsulated by monads not by operating on them, but by being arguments of the Monads. This is somewhat similar to Haskell monads which aren't mutated but which operate on functions that result in fresh monads having the desired new or altered features.</p> 