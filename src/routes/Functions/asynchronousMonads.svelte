<script>
import { onMount } from 'svelte';
import { bind } from 'svelte/internal';
import { fade } from 'svelte/transition';
    var A = 10000;
    var B = 10000;
    var C = 10000;
    var D = 10000;
    var E = "Enter the number in the text box to see the result.";
    var F, G, H, I, J, K, L, N, O;
    var f = async c => await c;
    var factors = () => {};
    var fac = () => {};
    var fact2 = () => {};
    $:  ar = () => AR.join(" --> ")
    var handleK = () => {};
    var m3 = M(3);
    var m4 = M(3);
    var m5 = M(3);
    var handleButton1 = function handleButton1 () {};
    var handleButton2 = function handleButton2 () {};
    var handleButton3 = function handleButton3 () {};
    var socket3, socket2, handleKeydown1, handleKeydown2;
    var s = 'stop';
    var log = console.log;
    var AR;
    $: AR = [];
    var zz;
    var so;
onMount( async () => {
    log("In start <><><><><><><><><> In start")
    socket3 = new WebSocket('wss://schalk.site:3003');
    socket2 = new WebSocket('wss://schalk.site:3002');
    /* socket2.onmessage = e => {
        console.log("Here it is", e.data);
        F = e.data;
        socket3.send(e.data);
    }; */
    
    var fAdd = a => async b => await asyncAdd(a)(b);
    var fMult = a => b => asyncMult(a)(b);
    var fInsert = a => async b => {
        await (b = a);
        AR.push(b);
    }    

    factors = a => {
        J = a;
        socket3.send(a);
        socket3.onmessage = function (e) {
            f(e.data).then(v => K = v);
            AR.push(JSON.parse(e.data));
            AR.push(red(JSON.parse(e.data)));
            log("$$$$$$$$$$$$ AR.length is", AR.length);
            return AR;
        }
    } 

    function fact2(a) {
        log("At the top of fact2. a is ", a); 
        if (socket3.readyState == 1) {
            if (a instanceof Promise) a.then(v => socket3.send(parseInt(v)))
            else socket3.send(parseInt(a));
        }
        else setTimeout(() => fact2(a),200);
        socket3.onmessage = function (e) {
            console.log("In fact2. e and e.data are", e, e.data);
            a = JSON.parse(e.data);
            AR.push(a);
            a = M(m3(s))(x => a)(s);
            console.log("OOOOOOOOOOOOOOOOOOOOOOOOOOO a is", a);
            log("At the end of fact2. a is", a, Array.isArray(a));
            return a;
        }
    }
    // log("<@><@><@><@><@><@><@><@>m4(x => 98)(fact2)(s)", m4(x => 988)(fact2)(s));
    // setTimeout(() => log("m3(factors(84). . . are", 

    fac = a => b => {
        J = b;
        setTimeout(b => {
            log("m3(s) is", m3(s));
            log("m3(factors(b) is",m3(factors(b))(v => K = v));
            console.log("factors test <><><><><><>", m3(s));
        },1000);
    }
    setTimeout(() => log("AR is", AR),2000 );

    log("J and K are", J, K);

var fact = a => async b => {
    setTimeout(() => {
    log("AR is", AR);
    b = factors(a);
    },1500);
}
    log("J and K are", J, K);
    setTimeout(() => log("Now J and K are", J, K),3000);

    // log("m4(fact(999)(s)", fac, fact, m4(fact(999))(s));

        handleKeydown2 = function handleKeydown2 (e) {
            if (e.keyCode !== 13) {console.log("e.keyCode isn't 'Enter'")}
            else if (e.keyCode == 13) {
                J = parseFloat(e.target.value);
                socket3.send(J);
                socket3.onmessage = function (e) {
                    K = e.data;
                };
            };
            return e.data;
        };

        handleK = a => {
                socket3.onmessage = function (e) {
                    L = JSON.parse(e.data);
                    AR.push(L);
                    //if (Array.isArray(K) && K.length > 0) AR.push(red(AR[AR.length - 1]))
                    a = L;
                    console.log("a and L are", a, L);
                    return a;
                } 
                if (socket3.readyState == 1) {
                socket3.send(parseInt(a));
                } 
                else setTimeout(() => handleK(a),200);
        }
        /*
    var w = 10;   
    log("w is", w);    
    w = handleK(w)(786);
    log("w is", w);    
    w = handleK(w)(3216);
    log("w is", w);    
    w = handleK(w)(3223);
    log("w is", w);    
*/

    function logger (s) {console.log("In log *&*&*&*&* value is", s)}

    function push (v) {AR.push(v); return AR}; 
    var val = a => b => (a = b);

  //  m3(asyncMult(1))(x => fMult(x)(7))(v => v*2)(asyncAdd(58))(fMult(2))(asyncMult(0.025))(asyncAdd(1))(asyncMult(7))(fact2)(v => AR.concat(36)[AR.length])(asyncMult(1))(fact2)(v => AR.concat(888)[AR.length])(asyncMult(1))(fact2)(v => AR[length - 1])(red)(asyncMult(1))(fMult(7))(v => v*2)(asyncAdd(58))(fMult(2))(asyncMult(0.025))(asyncAdd(1))(asyncMult(7))(fact2)(v => AR.concat(36)[AR.length])(asyncMult(1))(fact2)(v => AR.concat(888)[AR.length])(asyncMult(1))(fact2)

var makeArray = () => {m3(asyncMult(1))(x => fMult(x)(7))(v => v*2)(asyncAdd(58))(fMult(2))(asyncMult(0.025))(asyncAdd(1))(asyncMult(7))(fact2)(v => 36)(fact2)(v => 888)(asyncId)(fact2)(v => [2,3,4])(asyncId)(v => v = v.concat(5))(asyncId)(red)(fact2)

setTimeout(() => {m3(v => [3,3,3])(asyncId)(red)(fact2)},3000);
// setTimeout(() => {AR = []; L = ar()},7000);
}
// log("red([2,3,4,5,6])", red([2,3,4,5,6]))
makeArray();
setTimeout(() => makeArray(),5000);


}); 

log("<@><@><@> <$><$><$> <%><%><%> m3(s)", m3(s))
   
    function M(x) {
		return function go(func) {
            if (func == "stop") return x
		    if (x instanceof Promise) x = x.then(v => x = func(v));
            else if (typeof func == 'function') x = func(x);
    		return go;
		};
	}


/*
	function M(x) {
		return function go(func) {
			if (typeof func === 'function') {
				x = func(x);
				return go;
			} else if (func === 'stop') return x;
		};
	}
*/
    m3 = M(3); 
    var asyncAdd = a => async b => {
        var j;
        a = f(a);
        b = f(b);
        await a.then( v => a = parseFloat(v));
        await b.then( v => b = parseFloat(v));
        j = a + b;
        AR.push(j);
        log("in asyncMult j and AR are", j, AR);
        return j;
    }; 

    var asyncMult = a => async b => {
        var j;
        a = f(a);
        b = f(b);
        await a.then( v => a = parseFloat(v));
        await b.then( v => b = parseFloat(v));
        j = a * b;
        AR.push(j);
        log("in asyncMult j and AR are", j, AR);
        return j;
    }; 

    var asyncConcat = a => async b => {
        if (Array.isArray(a)) {
            a = a.concat(b);
            return a;
        }
    }; 


    var asyncId = a => {
        AR.push(a);
        return a;
    }; 

    /*m3(asyncMult(2))(asyncMult(7))(asyncAdd(58))(fMult(2))(asyncMult(0.025))(asyncAdd(1))(asyncMult(7))
    */
    // m3(v => handleK(v)(786))(x => handleK(x)(3216))(a => handleK(a)(3223));
    

    log("AR is", AR);
    log("$&$&$&$&$&$&  m3(s) is", m3(s))
    
    // m3(fAdd(8));
    
    f(9).then(v => console.log("v == 9", v === 9))
    log("f(f(7)) == f(7)", f(7).then(v1 => (f(7).then(v2 => v1 == v2)))) ;

    function red (arr) {
        console.log("  **************  Top of red. arr is", arr);
        if (arr instanceof Promise ) arr.then(v => arr = v);
        if (Array.isArray(arr)) {
            arr = arr.reduce((a,b) => a*b)
            console.log("  **************  In red. ar is", arr);
            AR.push(arr);
            ar();
        }
        return arr;
    }

    // log("red([3,3,3,3,3]", red([3,3,3,3,3]));

    setTimeout(() => L = ar(),2200);
    setTimeout(() => L = ar(),3500);
    //setTimeout(() => L = ar(),5000);
    //setTimeout(() => L = ar(),7000);

    // m3(v => 3)
    

var bigMonad = `function Comp ( AR = [] )  {
  var f_, p, run;
  var ar = AR.slice();
  var x = ar.pop();
  return run = (function run (x) {
    if (x === null || x === NaN ||
      x === undefined) x = f_('stop').pop();
    if (x instanceof Filt) {
      var z = ar.pop();
      if (x.filt(z)) x = z; else ar = [];
    }
    else if (x instanceof Promise) x.then(y =>
      {if (y != undefined && typeof y !== "boolean"
        && y === y && y.name !== "f_" && y.name !== "stop" ) {
      ar.push(y);
      diffRender()
    }})
    else if (x != undefined && x === x && x !== false
      && x.name !== "f_" && x.name !== "stop" ) {
      ar.push(x);
      diffRender()
    };
    function f_ (func) {
      if (func === 'stop' || func === 'S') return ar;
      else if (func === 'finish' || func === 'F') return Object.freeze(ar);
      else if (typeof func !== "function") p = func;
      else if (x instanceof Promise) p = x.then(v => func(v));
      else p = func(x);
      return run(p);
    };
    return f_;
  })(x)
}`;

var arrayCode = `m3(asyncMult(1))(x => fMult(x)(7))(v => v*2)(asyncAdd(58))(fMult(2))
(asyncMult(0.025))(asyncAdd(1))(asyncMult(7))(fact2)(v => 36)(fact2)
(v => 888)(asyncId)(fact2)(v => [2,3,4])(asyncId)(v => v = v.concat(5))
(asyncId)(red)(fact2)

setTimeout(() => {m3(v => [3,3,3])(asyncId)(red)(fact2)},3000);

setTimeout(() => L = ar(),2200);
setTimeout(() => L = ar(),3500);
    where ar = () => AR.join(" --> ")
      and AR and other relevant functions are defined below.`

var MCode = `function M(x) {
    return function go(func) {
        if (func == "stop") return x
        if (x instanceof Promise) x = x.then(v => x = func(v));
        else if (typeof func == 'function') x = func(x);
        return go;
    };
}`

</script>    


<svelte:head>
	<title>Asynchronous Recursive Closures</title>
</svelte:head>
<br />
<div>**************************************************************************</div>
<div style="font-family: Times New Roman; text-align:center; font-size: 32px;" transition:fade>
	<br />
	Asynchronous Functions for the Very Simple Recursive Closure
</div>
<br />
<!--<button on:click = {handleButton2}>Random Number</button>
<span style = "font-size: 36px"> {B}</span>
<button on:click = {handleButton3}>Factors</button>
<span>Prime factors of {B}: {C}</span> -->

<p>M, defined in <a href = "./Archive/monads">monads</a>, has an extra line of code here to account for possible asynchronisity. Here's the tweaked definition:</p>
<pre>{MCode}</pre> 
<p>This code:</p>
<pre>{arrayCode}</pre>

<p>Results in this:</p>
<p>Progression of AR: {L}</p>
<br><br>
<br><br>
<p>In <a href = "/Functions/Archive/Monad3/" target="_blank">Monad3</a> the demonstration used this monad:</p>
<pre>{bigMonad}</pre>





