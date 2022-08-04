
<script>
/*import { action_destroyer, invalid_attribute_name_character, not_equal } from "svelte/internal"; */
import {fade} from "svelte/transition"
let visible = true;
</script>

 {#if visible}
 	<div style = "font-family: Times New Roman; text-align:center; font-size: 32px;" transition:fade>
     <p></p>
     Document Archive
 	</div>
 {/if}
 <br>
<a href = "https://one.schalk.site">Archive</a>