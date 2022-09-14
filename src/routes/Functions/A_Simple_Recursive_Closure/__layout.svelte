

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

<span>Monads</span>

<nav>
    <ul>

      <li>    
          <a href="/Functions/A_Simple_Recursive_Closure">           
  <button
    class:selected="{current === '/Functions/A_Simple_Recursive_Closure'}"
    on:click="{() => current = '/Functions/A_Simple_Recursive_Closure'}"
  >Home</button>
          </a>
      </li>

      <span> &nbsp;&nbsp;&nbsp;   </span>
  
      <li>
          <a href="/Functions/A_Simple_Recursive_Closure/array">
  <button
    class:selected="{current === '/Functions/A_Simple_Recursive_Closure/array'}"
    on:click="{() => current = '/Functions/A_Simple_Recursive_Closure/array'}"
  >Arrays</button>
          </a>
      </li>
 
      <span> &nbsp;&nbsp;&nbsp;   </span>

        
      <li>    
          <a href="/Functions/A_Simple_Recursive_Closure/asyncMonads">           
  <button
    class:selected="{current === '/Functions/A_Simple_Recursive_Closure/asyncMonads'}"
    on:click="{() => current = '/Functions/A_Simple_Recursive_Closure/asyncMonads'}"
  >Asynchronous_Functions</button>
          </a>
      </li>

      <span> &nbsp;&nbsp;&nbsp;   </span>
  
      <li>    
          <a href="/Functions/A_Simple_Recursive_Closure/score">           
  <button
    class:selected="{current === '/Functions/A_Simple_Recursive_Closure/asyncMonads/score'}"
    on:click="{() => current = '/Functions/A_Simple_Recursive_Closure/asyncMonads/score'}"
  >Game_of_Score</button>
          </a>
      </li>

      <span> &nbsp;&nbsp;&nbsp;   </span>
  
      <li>    
          <a href="/Functions/A_Simple_Recursive_Closure/score3">           
  <button
    class:selected="{current === '/Functions/A_Simple_Recursive_Closure/asyncMonads/score3'}"
    on:click="{() => current = '/Functions/A_Simple_Recursive_Closure/asyncMonads/score3'}"
  >score3</button>
          </a>
      </li>

      <span> &nbsp;&nbsp;&nbsp;   </span>
  
      <li>    
          <a href="/Functions/A_Simple_Recursive_Closure/score9">           
  <button
    class:selected="{current === '/Functions/A_Simple_Recursive_Closure/asyncMonads/score9'}"
    on:click="{() => current = '/Functions/A_Simple_Recursive_Closure/asyncMonads/score9'}"
  >score9</button>
          </a>
      </li>

      <span> &nbsp;&nbsp;&nbsp;   </span>
  

    </ul>

</nav>




<slot></slot>



<!--



<div>
    <br><br>
  <nav>
      <ul>
        
      <li>    
          <a href="/Functions/A_Simple_Recursive_Closure">Home</a>
      </li>

      <span> &nbsp;&nbsp;&nbsp;   </span>
  
      <li>    
          <a href="/Functions/A_Simple_Recursive_Closure/array">Arrays in Monads </a>
      </li>

      <span> &nbsp;&nbsp;&nbsp;   </span>
  
      <li>    
          <a href="/Functions/A_Simple_Recursive_Closure/asyncMonads">Asynchronous Monads</a>
      </li>

      <span> &nbsp;&nbsp;&nbsp;   </span>
  
      <li>    
          <a href="/Functions/A_Simple_Recursive_Closure/score/">Game of Score</a>
      </li>

      <span> &nbsp;&nbsp;&nbsp;   </span>
  




</ul>

</nav>

</div>

<slot></slot>
-->