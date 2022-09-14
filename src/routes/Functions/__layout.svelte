

<script>
  var current = '/Functions/';
</script>

<style> 
button {font-size: 18px}
span {font-size:30px;} 

     .selected {

    color: #000000;
    background-color: #eab676;
    border-color: #E8F7C1;
    border-radius: 10px;
    box-shadow: 0px 0px 12px 0px rgb(255, 255, 0);

    } 

</style>

<span>Functions </span>

<nav>
    <ul>

      <li>    
          <a href="/Functions/">           
  <button
    class:selected="{current === '/Functions/'}"
    on:click="{() => current = '/Functions/'}"
  >Home</button>
          </a>
      </li>

      <span> &nbsp;&nbsp;&nbsp;   </span>
  
      <li>
          <a href="/Functions/A_Simple_Recursive_Closure/">
  <button
    class:selected="{current === '/Functions/A_Simple_Recursive_Closure'}"
    on:click="{() => current = '/Functions/A_Simple_Recursive_Closure'}"
  >A_Simple_Recursive_Closure</button>
          </a>
      </li>
 
      <span> &nbsp;&nbsp;&nbsp;   </span>

        
      <li>    
          <a href="/Functions/Archive">           
  <button
    class:selected="{current === '/Functions/Archive'}"
    on:click="{() => current = '/Functions/Archive'}"
  >Archive</button>
          </a>
      </li>

      <span> &nbsp;&nbsp;&nbsp;   </span>
  

    </ul>

</nav>




<slot></slot>
