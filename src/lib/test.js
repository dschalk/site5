
// import { onMount } from 'svelte';
let A = 10000;
let B = 10000;
let C = 10000;
let D = 10000;
let E = "Enter the number in the text box to see the result.";
var F, G, H, I, J, K, L;

var socket3, socket2, handleKeydown1, handleKeydown2;

// onMount(() => {
    socket3 = new WebSocket('wss://schalk.site:3003');
    socket2 = new WebSocket('wss://schalk.site:3002');
    function start () {
        handleKeydown1 = function handleKeydown1 (e) {
            if (e.keyCode == 13) {
                A = e.target.value;
                socket2.send(e.target.value);
                socket2.addEventListener('message', function (e) {
                    B = e.data;
                    D = e.data;
                    socket3.send(e.data);
                    socket3.onmessage = function (e) {
                        C = e.data;
                        E = e.data;
                    }
                });
            };
        };
        var i = 0
        function func ()  {
            let x = socket2.readyState
            let i = 0;
            if (i < 15 && x !== 1) {
                i+=1;
                console.log("Repeat i", i);
                setTimeout(() => {
                    func();
                },500)
            }
            else {
                i = 0;
                socket2.send(10000);
                socket2.onmessage = function(e) {
                    B = e.data;
                    D = e.data;
                    socket3.send(e.data);
                    socket3.onmessage = function (e) {
                        C = e.data;
                        E = e.data;
                    }
                }
            }
        }
        func();
        handleKeydown2 = function handleKeydown2 (e) {
            if (e.keyCode !== 13) {console.log("e.keyCode isn't 'Enter'")}
            else if (e.keyCode == 13) {
                socket3.send(e.target.value);
                D = e.target.value;
                socket3.onmessage = function (e) {
                    E = e.data;
                    B = E;
                };
            };
        };
    }
    start();
// });

var s = 'stop';
var log = console.log;
var AR = [];
var zz;
var so;
var f = async c => await c;

var sock = a => async b => {
    var ret;
    so = socket2;
    so.send(b);
    so.onmessage = e => (ret = e.data);
    await (typeof eval(F) == number)
    console.log("eval(F) and so.readyState are", F, so.readyState);
    AR.push(ret);
    G = ret;
    return ret;
} 
m3 = M() 
F = m3(sock(10000))(s);


function M(x) {
  function go(func) {
    if (typeof func === "function") {
      x = func(x);
      return go;
    } else if (func === "stop") return x;
  } return go;
};

function M2(x) {
  x = f(x)  
  function go(func) {
    if (typeof func === "function") {
      x.then(v => x = func(v));
      return go;
    } else if (func === "stop") return x;
  } return go;
};

var asyncMult = a => async b => {
    var j;
    a = f(a);
    b = f(b);
    await a.then( v => a = v);
    await b.then( v => b = v);
    j = a * b;
    AR.push(j);
    log("in asyncMult", AR);
    return j;
}; 

var asyncAdd = a => async b => {
    var j;
    a = f(a);
    b = f(b);
    await a.then( v => a = v);
    await b.then( v => b = v);
    j = a + b;
    AR.push(j);
    log("In asyncAdd", AR);
    await setTimeout(() => console.log("j is", j),4000);
    return j;
}; 

var fAdd = a => async b => await asyncAdd(a)(b);
var fMult = a => async b => await asyncMult(a)(b);

var m3 = M2(f(3));

m3(asyncMult(2))(asyncMult(7))(asyncAdd(58))(asyncMult(1/20))(asyncAdd(1))(asyncMult(7));
m3(s).then(v => console.log("v on line ## is", v));

log("AR is", AR);

m3(fAdd(8));
log("Now AR is", AR);

f(9).then(v => console.log("v == 9", v == 9))
log("f(f(7)) == f(7)", f(7).then(v1 => (f(7).then(v2 => v1 == v2)))) ;
