<script>
    export let type = 'primary';
    export let flat = false;
    export let inverse = false;
</script>

<button>
<slot></slot>

</button>

<style>
button 
 {
    border:0;
    border-radius: 6px;
    cursor: pointer;
    padding: 8px 12px;
    font-weight: bold;
    box-shadow: 1px, 2px, 3px rgba (0,0,0,0.2); 
}

</style>





