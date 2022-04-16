 <script>
import {fade} from "svelte/transition";

import { onMount } from 'svelte';
let A = 10000;
let B = 10000;
let C = 10000;
let D = 10000;
let E = "Enter the number in the text box to see the result.";
var socket3, socket2, handleKeydown1, handleKeydown2;

onMount(() => {
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
});

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
</script>

<div style = "font-family: Times New Roman;  text-align: center; font-size: 38px;" transition:fade>
    <br>
  Two Asynchronous Functions
</div>
<h3>Enter the upper limit for a pseudo-random number:</h3>
<input type="text" on:keydown={handleKeydown1} />
<br>
<p>The number to evaluate: {D}</p>
<p>The prime factors of {D} are: {E}</p>
<h3>Enter a number to see its prime decomposition:</h3>
<input type="text" on:keydown={handleKeydown2} />
<p>The prime factors of {D} are {E}.</p>
Here's how the script begins:
<pre>{setup}</pre>
<p>The work is done in a single function named "start" placed in "onMount."  Here's the code:</p>
<pre>{code}</pre>
<p>Here's the HTML:</p>
<pre>{html}</pre>
<p>The code isn't annotated, but the key to understanding it is that socket3 returns a pseudo-random number and socket2 returns the prime factors of the integer it receives. The purpose of this page is to show one way of using WebSockets in SvelteKit. </p>
<p>The WebSocket servers run on a droplet separate from the droplet hosting schalk.net. They're on a droplet that services traffic destined for schalk.site. Connections to the servers can be established with, for example, "var sock = new WebSocket('wss://schalk.site')". It's striking how fast WebSockets traffic moves between Digitalocean droplets on the East Coast. </p>
<p>Here's the code for the random number server:</p>
<pre>{soc1}</pre>
<p>And here's the code for the prime decomposition server:</p>
<pre>{soc2}</pre>
