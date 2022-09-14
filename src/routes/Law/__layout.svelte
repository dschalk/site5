
<script>
  var current = '/Law/';
</script>

<style>
button {
      display: block;
    }
     .selected {
      background-color: lightgreen;
      color: blue;
    }
  </style>



<span style = "font-size: 30px">Law</span>
<nav>
    <ul>

      <li>    
          <a href="/Law/">           
  <button
    class:selected="{current === '/Law/'}"
    on:click="{() => current = '/Law/'}"
  >Home</button>
          </a>
      </li>

      <span> &nbsp;&nbsp;&nbsp;   </span>
  
      <li>
          <a href="/Law/law">
  <button
    class:selected="{current === '/Law/law'}"
    on:click="{() => current = '/Law/law'}"
  >law</button>
          </a>
      </li>
 
      <span> &nbsp;&nbsp;&nbsp;   </span>

        
      <li>    
          <a href="/Law/archive">           
  <button
    class:selected="{current === '/Law/archive'}"
    on:click="{() => current = '/Law/archive'}"
  >Archive</button>
          </a>
      </li>

      <span> &nbsp;&nbsp;&nbsp;   </span>
  

    </ul>

</nav>

<!-- <style>
    ul {
        display:flex;
        list-style: none;
        margin: 0;
		font-size: 14px;
    }
    li {margin-right: 10px}
</style> -->


<slot></slot>