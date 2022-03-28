
<div>
    <br><br>
  <nav>
      <ul>
      <li>    
          <a href="/">Home</a>
      </li>

      <span> &nbsp;&nbsp;&nbsp;   </span>
  
      <li>
          <a href="/Functions">Functions</a>
      </li>
 <!-- 
      <li>
          <a href="/Mahjong/">Riichi Mahjong</a>
      </li>
  
      <li>
          <a href="/Grammar ">Grammar</a>
      </li>
  
      <li>
          <a href="/Law">Rule By Law</a>
      </li>
    -->
  </ul>
  </nav>
  </div>
<style>
  :global(a) {
    color: #e37eec;
    font-size: 22px;
  }

  :global(li) {
    color: #c6c6f8;
  }

  :global(ul) {
    color: #c6c6f8;
  }

  :global(nav) {
    color: #c6c6f8;
  }

  :global(html) {
    background-color:#211500;
    width: 100%;
  }

  :global(p) {
    font-size: 22px;
    color: rgb(207, 245, 250);
  }

  :global(body) {
    width: 70%;
    margin-left: auto;
    margin-right: auto;
    border-radius: 35px;
    background-color: #2e2115;
    color: #d3ead5;
    margin-top: 20px;
    font-size: 15px;
    font-family: "Proxima Nova Regular,Segoe UI,Roboto,Droid Sans,Helvetica Neue,Arial,sans-serif;";
    -webkit-box-shadow: inset 0px 0px 20px 0px rgb(0,0,0);
    -moz-box-shadow:    inset 0px 0px 20px 0px rgb(0,0,0);
    box-shadow:         inset 0px 0px 20px 0px rgb(0,0,0);
    padding: 80px 50px 50px 80px;
  }

  :global(input, textarea) {
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

  :global(input:focus, textarea:focus) {
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

  :global(pre) {
    font-size:20px;
    color: #e5affa;
    margin-left: 4%;
  }

  :global(p) {
    text-indent: 3%;
  }

  #logo {
    background-color: transparent;
    padding-left: 2%;
  }

  :global(button) {
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

  :global(button:hover) {
    color: blue;
    background-color: lightblue;
    border-color: #0000AA;
    border-radius: 10px;
  }

   #roll {
    margin-left: 8%;
  }

  :global(label) {
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

  :global(h3) {
    color: #efe302;
    text-align: center;
    font-size: 25px;
  }

  :global(h2) {
    color: #efe302;
    text-align: center;
    font-size: 30px;
  }

  :global(h1) {
    color: #D6FFFE;
    text-align: center;
    font-size: 35px;
  }

:global(.tao) {
  margin-left: 3%;
}

:global(ul) {
  display:flex;
  list-style: none;
  margin: 0;
  font-size: 11px;
  color: #bbccff
}
</style>  


  <!-- <style>
   /* .container {margin-right: 10px} */
    :global(ul) {
      display:flex;
      list-style: none;
      margin: 0;
      font-size: 11px;
      color: #bbccff
    }
    li {margin-right: 10px}
  
    :global(body) {
      margin-right: 12%;
      margin-left:12%;
      padding-right:3%;
      color: ivory;
      padding-left: 3%;
      background-color: #361B01; ;
    }
    :global(p) {text-indent: 3%;}
    :global(html) {background-color: rgb(0,0,0);}
    :global(body) {background-color: #361B01;}
    :global(p) {font-size: 20px;}
    :global(a) {
      font-size: 20px;
      color: 
    }
    :global(pre) {font-size: 16px;}
  </style> -->
  <div> </div>
  <!--<div class ="container"><slot /></div>-->
  <slot/>

  