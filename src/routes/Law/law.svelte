<script>
/*import { action_destroyer, invalid_attribute_name_character, not_equal } from "svelte/internal"; */
import {fade} from "svelte/transition"
import Chun from '../images/Chun.svg';
let visible = true;
 

var chun = Chun;
function funcA () {
	document.getElementById('pdf').innerHTML = "Result: A-OK";
	};
</script>

 {#if visible}
 	<div style = "font-family: Times New Roman; text-align:center; font-size: 32px;" transition:fade>
     <p></p>
Judicial Tyrany
 	</div>
 {/if}
 <br>
<div id="pdf">yes</div>

<button on:click = {funcA}>Click me</button>


<img src = {Chun} />

<h3>Kafkaesque Ruling by the Indiana Supreme Court.</h3> 
<p>David Schalk will remain suspended from the practice of law in Indiana until such time as he "realizes the wrongfulness of his action_destroyer." Eight years have passed since the Indiana Supreme Court imposed the suspension without reference to David Schalk's legal argument regarding the legality of his involvement in what is loosely called a "controlled by" </p>
<p>The Indiana Supreme Court did not, and I'm sure they could not find instances of specific conduct or statement that might tend to justify assertions "1", "3", "4" and "5 of the "Facts in aggrivation" paragraph of their order. Concerning item "2", I don't recall doing anything wrongful in the matter. The full order is linked below. Here's the "Facts in aggravation" section:  </p>
<p>Facts in aggravation include: (1) Respondent solicited others to commit a criminal act, which put them at risk
of arrest or physical danger; (2) Respondent has no appreciation for the wrongfulness of his conduct; (3)
Respondent made false statements or statements with reckless disregard for their truth regarding the integrity of
the judges of the trial court and Court of Appeals; (4) Respondent's assertions that his criminal prosecution was
based upon vindictiveness by law enforcement authorities is frivolous; and (5) Respondent improperly interfered with the discovery process in the disciplinary proceeding.</p>
<a href="https://one.schalk.site/Motion_to_clarify_order_signed.pdf">Motion to clarify order</a>

<br><br>

<a href="https://one.schalk.site/Memorandum_Regarding_Motion_to_clarify_signed.pdf">Memorandum Regardingf Motion to clarify</a>

<br><br>

<a href="https://one.schalk.site/In re Schalk.pdf">In re Schalk.pdf</a>
