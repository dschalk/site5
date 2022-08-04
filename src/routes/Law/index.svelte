<script>
import {fade} from "svelte/transition"
let visible = true;
</script>

 {#if visible}
 	<div style = "font-family: Times New Roman; text-align:center; font-size: 32px;" transition:fade>
     <p></p>
Rule By Law
 	</div>
 {/if}
 <br> 

 <p> <a href = "Law/law">Link</a> </p>
