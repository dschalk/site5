




<script>
  var current = '/Functions/';
</script>

<style>
button {
      display: block;
      font-size: 18px;
    }
     .selected {
    color: #000000;
    background-color: #eab676;
    border-color: #E8F7C1;
    border-radius: 10px;
    box-shadow: 0px 0px 12px 0px rgb(255, 255, 0);
    } 
span {
    font-size:30px;
}    
  </style>

<span>Archive</span>

<nav>
    <ul>

      <li>    
          <a href="/Functions/Archive/">           
  <button
    class:selected="{current === '/Functions/Archive/'}"
    on:click="{() => current = '/Functions/Archive/'}"
  >Home</button>
          </a>
      </li>

      <span> &nbsp;&nbsp;&nbsp;   </span>
  
      <li>
          <a href="/Functions/Archive/JS_Servers/">
  <button
    class:selected="{current === '/Functions/Archive/JS_Servers/'}"
    on:click="{() => current = '/Functions/Archive/JS_Servers'}"
  >JS_Servers</button>
          </a>
      </li>
 
      <span> &nbsp;&nbsp;&nbsp;   </span>

        
      <li>    
          <a href="/Functions/Archive/functional_JS">           
  <button
    class:selected="{current === '/Functions/Archive/functional_JS'}"
    on:click="{() => current = '/Functions/Archive/functional_JS'}"
  >functional_JS</button>
          </a>
      </li>

      <span> &nbsp;&nbsp;&nbsp;   </span>
  
        
      <li>    
          <a href="/Functions/Archive/factors">           
  <button
    class:selected="{current === '/Functions/Archive/factior'}"
    on:click="{() => current = '/Functions/Archive/factors'}"
  >factors</button>
          </a>
      </li>

      <span> &nbsp;&nbsp;&nbsp;   </span>
  
        
      <li>    
          <a href="/Functions/Archive/functional_JS">           
  <button
    class:selected="{current === '/Functions/Archive/functional_JS'}"
    on:click="{() => current = '/Functions/Archive/functional_JS'}"
  >functional_JS</button>
          </a>
      </li>

      <span> &nbsp;&nbsp;&nbsp;   </span>
        
      <li>    
          <a href="/Functions/Archive/functional_JS">           
  <button
    class:selected="{current === '/Functions/Archive/functional_JS'}"
    on:click="{() => current = '/Functions/Archive/functional_JS'}"
  >functional_JS</button>
          </a>
      </li>

      <span> &nbsp;&nbsp;&nbsp;   </span>
        
      <li>    
          <a href="/Functions/Archive/functional_JS">           
  <button
    class:selected="{current === '/Functions/Archive/functional_JS'}"
    on:click="{() => current = '/Functions/Archive/functional_JS'}"
  >functional_JS</button>
          </a>
      </li>

      <span> &nbsp;&nbsp;&nbsp;   </span>
        
      <li>    
          <a href="/Functions/Archive/functional_JS">           
  <button
    class:selected="{current === '/Functions/Archive/functional_JS'}"
    on:click="{() => current = '/Functions/Archive/functional_JS'}"
  >functional_JS</button>
          </a>
      </li>

      <span> &nbsp;&nbsp;&nbsp;   </span>
        
      <li>    
          <a href="/Functions/Archive/functional_JS">           
  <button
    class:selected="{current === '/Functions/Archive/functional_JS'}"
    on:click="{() => current = '/Functions/Archive/functional_JS'}"
  >functional_JS</button>
          </a>
      </li>

      <span> &nbsp;&nbsp;&nbsp;   </span>
  
  
  
  
  

    </ul>

</nav>





<div>
    <br><br>
  <nav>
      <ul>
      
      <span> &nbsp;&nbsp;&nbsp;   </span>

      <li>
          <a href="/Functions/Archive/factors">factors</a>
      </li>

      <span> &nbsp;&nbsp;&nbsp;   </span>
      
      <li>
          <a href="/Functions/Archive/Monad3">Monad3</a>
      </li>
      
      <span> &nbsp;&nbsp;&nbsp;   </span>
      
      <li>
          <a href="/Functions/Archive/score">Score</a>
      </li>
      
      <span> &nbsp;&nbsp;&nbsp;   </span>
      
  </ul>
  </nav>
  </div>
 <!-- <style>

  html {
    background-color:#211500;
    width: 100%;
  }

  body {
    width: 84%;
    margin-left: auto;
    margin-right: auto;
    border-radius: 35px;
    background-color: #361B01;
    color: #d3ead5;
    margin-top: 20px;
    font-size: 15px;
    font-family: "Proxima Nova Regular,Segoe UI,Roboto,Droid Sans,Helvetica Neue,Arial,sans-serif;";
    -webkit-box-shadow: inset 0px 0px 20px 0px rgb(0,0,0);
    -moz-box-shadow:    inset 0px 0px 20px 0px rgb(0,0,0);
    box-shadow:         inset 0px 0px 20px 0px rgb(0,0,0);
    padding: 3px 0px 3px 3px;
  }

  input, textarea {
    background-color: #efe1a7;
    color: #000000;
    border-radius: 5px;
    -webkit-transition: all 0.60s ease-in-out;
    -moz-transition: all 0.60s ease-in-out;
    -ms-transition: all 0.60s ease-in-out;
    -o-transition: all 0.60s ease-in-out;
    outline: none;
    padding: 3px 0px 3px 3px;
    margin: 5px 1px 3px 0px;
    border: 3px solid #DDDDDD;
  }

  input:focus, textarea:focus {
    -webkit-box-shadow: 0px 0px 20px 0px rgb(255, 215, 0);
    -moz-box-shadow:    0px 0px 20px 0px rgb(255, 215, 0);
    box-shadow:         0px 0px 20px 0px rgb(255, 215, 0);
    padding: 3px 0px 3px 3px;
  }

  input, checkbox {
    background-color: #efe1a7;
    color: #00AADD;
    border-radius: 5px;
    outline: none;
    -webkit-box-shadow: 0px 0px 20px 0px rgb(255, 215, 0);
    -moz-box-shadow:    0px 0px 20px 0px rgb(255, 215, 0);
    box-shadow:         0px 0px 20px 0px rgb(255, 215, 0);
    padding: 3px 0px 3px 3px;
    margin: 5px 1px 3px 0px;
    border: 3px solid #DDDDDD;
  }

  pre {
    font-size:15px;
    color: #efe302;
  }

  p {
    text-indent: 3%;
  }

  #logo {
    background-color: transparent;
    padding-left: 2%;
  }

  button {
    margin-left: 5%;
    background-color: #331903;
    border-width: 2px;
    border-color: #E8F7C1;
    border-radius: 10px;
    color: #00ffdd;
    font-size: 24px;
    -webkit-box-shadow: 0px 0px 15px 0px rgb(255, 215, 0);
    -moz-box-shadow:    0px 0px 15px 0px rgb(255, 215, 0);
    box-shadow:         0px 0px 15px 0px rgb(255, 215, 0);
    padding: 3px 10px 3px 10px;
  }

  button:hover {
    color: blue;
    background-color: lightblue;
    border-color: #0000AA;
    border-radius: 10px;
  }

   #roll {
    margin-left: 8%;
  }

  label {
    background-color: #331903;
    text-align: left;
    border-color: #331903;
    outline: 0px;
    color: #CCFDCB;
    border-radius: 10px;
    padding-top: 1.1px;
    padding-bottom: 2px;
    margin-right: 3px;
    margin-left: 12px;
    font-size: 24px;
    display: inline;
  }

  h2 {
    color: #efe302;
    text-align: center;
  }

  h1 {
    color: #D6FFFE;
    text-align: center;
  }

.tao {
  margin-left: 3%;
} */

ul {
  display:flex;
  list-style: none;
  margin: 0;
  font-size: 11px;
  color: #bbccff
}

li {margin-right: 10px}

 </style> 
  <!--<style>
    /* .container {margin-right: 10px} */
    :global(ul) {
      display:flex;
      list-style: none;
      margin: 0;
      font-size: 11px;
      color: #bbccff
    }
    :global(li) {margin-right: 10px}
  
    :global(body) {
      margin-right: 12%;
      margin-left:12%;
      padding-right:3%;
      padding-left: 3%;
      color: ivory;
      background-color: #361B01; ;
    }
    :global(p) {text-indent: 3%;}
    :global(html) {background-color: rgb(0,0,0);}
    :global(body) {background-color: #361B01;}
    :global(p) {font-size: 20px;}
    :global(a) {font-size: 20px;}
    :global(pre) {font-size: 16px;}
  </style> -->
  <div> </div>
  <slot />
  