import { c as create_ssr_component, e as escape } from "../../../../_app/immutable/chunks/index-e5fe3e4f.js";
const Async_monad = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let D = 1e4;
  let E = "Enter the number in the text box to see the result.";
  let code = `onMount(() => {
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
});`;
  var soc1 = `var ws = require('ws');
var https = require('https');
var fs = require('fs');
var j;

function randomInt (num) {
        return Math.floor(Math.random() * num);
}

const server = https.createServer({
  cert: fs.readFileSync('/etc/letsencrypt/live/schalk.site/cert.pem'),
  key: fs.readFileSync('/etc/letsencrypt/live/schalk.site/privkey.pem')
});
const wss = new ws.WebSocketServer({server});
wss.on('connection', function connection(ws) {
ws.on('message', function incoming(message) {
          var number = JSON.parse(message);
          j = randomInt(number);
          ws.send(j);
  });

});

server.listen(3002); `;
  var soc2 = `var ws = require('ws');
var https = require('https');
var fs = require('fs');
var j,k,n,arr,ar;

const server = https.createServer({
  cert: fs.readFileSync('/etc/letsencrypt/live/schalk.site/cert.pem'),
  key: fs.readFileSync('/etc/letsencrypt/live/schalk.site/privkey.pem')
});
const wss = new ws.WebSocketServer({server});

console.log("started web socket server...")

function pNums(n) {
    var store  = [], i, j, primes = [];
    for (let i = 2; i <= n; ++i) {
        if (!store [i]) {
            primes.push(i);
            for (j = i << 1; j <= n; j += i) {
                store[j] = true;
            }
        }
    }
    return primes;
}

function small (primes, v) {
    return primes.slice(0, primes.indexOf(primes.find(e => e > v)));
};

function primeNums (x) {
    return pNums(x);
};

function pfactors (prms, n) {
    var ar = [];
    prms.map(p => {
        while (n/p === Math.floor(n/p)) {
            ar.push(p);
            n = n/p;
        };
    })
    return ar;
}

var   sortFactors = ar => ar.sort(function(x,y) {
    return (x - y);
});

var g = x => {
        console.log("In g. x is", x);
    var primes = primeNums(x);
    return pfactors(primes,x);
}

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log("server2 incoming message is", message);
    var xx = g(message);
    var x = JSON.stringify(xx);
    ws.send(x);
  });
});
server.listen(3003); `;
  var setup = `import { onMount } from 'svelte';
let A = 10000;
let B = 10000;
let C = 10000;
let D = 10000;
let E = "Enter the number in the text box to see the result.";
var socket3, socket2, handleKeydown1, handleKeydown2; `;
  var html = `<h3>Enter the upper limit for a pseudo-random number:</h3>
<input type="text" on:keydown={handleKeydown1} />
<br>
<p>The number to evaluate: {D}</p>
<br>
<p>The prime factors of {D} are {E}.</p> `;
  return `<div style="${"font-family: Times New Roman; text-align: center; font-size: 38px;"}"><br>
  Two Asynchronous Functions
</div>
<h3>Enter the upper limit for a pseudo-random number:</h3>
<input type="${"text"}">
<br>
<p>The number to evaluate: ${escape(D)}</p>
<p>The prime factors of ${escape(D)} are: ${escape(E)}</p>
<h3>Enter a number to see its prime decomposition:</h3>
<input type="${"text"}">
<p>The prime factors of ${escape(D)} are ${escape(E)}.</p>
Here&#39;s how the script begins:
<pre>${escape(setup)}</pre>
<p>The work is done in a single function named &quot;start&quot; placed in &quot;onMount.&quot;  Here&#39;s the code:</p>
<pre>${escape(code)}</pre>
<p>Here&#39;s the HTML:</p>
<pre>${escape(html)}</pre>
<p>The code isn&#39;t annotated, but the key to understanding it is that socket3 returns a pseudo-random number and socket2 returns the prime factors of the integer it receives. The purpose of this page is to show one way of using WebSockets in SvelteKit. </p>
<p>The WebSocket servers run on a droplet separate from the droplet hosting schalk.net. They&#39;re on a droplet that services traffic destined for schalk.site. Connections to the servers can be established with, for example, &quot;var sock = new WebSocket(&#39;wss://schalk.site&#39;)&quot;. It&#39;s striking how fast WebSockets traffic moves between Digitalocean droplets on the East Coast. </p>
<p>Here&#39;s the code for the random number server:</p>
<pre>${escape(soc1)}</pre>
<p>And here&#39;s the code for the prime decomposition server:</p>
<pre>${escape(soc2)}</pre>`;
});
export {
  Async_monad as default
};
