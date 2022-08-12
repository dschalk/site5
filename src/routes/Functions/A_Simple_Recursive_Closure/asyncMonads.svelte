<script>
    import async from '$lib/Screenshot_async.png';
	import { merge_ssr_styles } from 'svelte/internal';
	import { fade } from 'svelte/transition';
</script>
    
<style>
    img {
        width:100%; 
        height:100%;
    }
</style>

<svelte:head>
	<title>Asynchronous values in monads</title>
</svelte:head>
<br />
<div>**************************************************************************</div>
<div style="font-family: Times New Roman; text-align:center; font-size: 32px;" transition:fade>
	<br />

    Arrays in Monads
</div>
<br />
<p></p>

<img src={async}/>
    