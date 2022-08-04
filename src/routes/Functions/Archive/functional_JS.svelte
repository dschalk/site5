   <script>
	import { merge_ssr_styles } from 'svelte/internal';
	import { fade } from 'svelte/transition';
  import { onMount } from "svelte";
       onMount(async () =>  {
           document.getElementById("a1").click();
       });
   </script>

<svelte:head>
	<title>Recursive Closures Without Mutating State</title>
</svelte:head>
<br />
<div>**************************************************************************</div>
<div style="font-family: Times New Roman; text-align:center; font-size: 32px;" transition:fade>
	<br />

	A More Elaborate Monad</div>
<br />
   <a id = "a1" href="https://functional-javascript.schalk2.com/" target="_blank" >You bet</a>
