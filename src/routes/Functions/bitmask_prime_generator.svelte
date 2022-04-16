
<script>
var A = "";
var B = 0;
var C = 0;
var aa = `1<<10`;
var bb = `1<<11`;
    
import {fade} from "svelte/transition";

function sieve (N) {
    var buf = new ArrayBuffer(1.1 * Math.ceil(N/8));
    var view = new Uint8Array(buf);
    var d = new Date();
    var t = d.getTime();
    A = "";
    var top = N + 1;
    var max = Math.sqrt(top) + 1;
    for(let i = 2; i < max; i+=1){
        if(test(view, i)) {
            for(let j = 2*i; j < top; j+=i) {
                set(view, j);
            }
        }
    }
    for(let i = 2; i < top; i++) {
        if (test(view,i) && N < 10001) A = A + i + ", ";
        else if (test(view,i) && N < 1000001 && (i < 100 || i > 0.99*N)) A = A + i + ", "; 
        else if (test(view,i) && N > 1000000 && (i < 100 || i > 0.9999*N)) A = A + i + ", "; 
    }
}

var primes = function primes (e) {
    if (e.keyCode == 13) {
        let num = parseInt(e.target.value);
        sieve(num);
    };
};

function set(ar,i) {
  var a = Math.floor(i / 8)
  var b = i % 8
  ar[a] |= (1 << b)
};

function test (ar,i) {
  var a = Math.floor(i / 8);
  var b = i % 8;
  var value = ar[a] & (1 << b);
  return value === 0;
}

var func = `function sieve (N) {
    var d = new Date();
    var t = d.getTime();
    A = "";
    var top = N + 1;
    var max = Math.sqrt(top) + 1;
    for(let i = 2; i < max; i+=1){
        if(test(i)) {
            for(let j = 2*i; j < top; j+=i) {
                set(j);
            }
        }
    }
    for(let i = 2; i < top; i++) {
        if (test(view,i) & N < 10001) A = A + i + ", ";
        else if (test(view,i) && N < 1000001 && (i < 100 || i > 0.99*N)) A = A + i + ", "; 
        else if (test(view,i) && N > 1000000 && (i < 100 || i > 0.9999*N)) A = A + i + ", "; 
    } `;

var buffer = `const buf = new ArrayBuffer(250004);
const view = new Uint32Array(buf)`;

var bitmasks = `function set(ar,i) {
  var a = Math.floor(i / 8)
  var b = i % 8
  ar[a] |= (1 << b)
};

function test (ar,i) {
  var a = Math.floor(i / 8);
  var b = i % 8;
  var value = ar[a] & (1 << b);
  return value === 0;
}
}`;

</script>
<div style = "font-family: Times New Roman;  text-align: center; font-size: 38px;" transition:fade>
    <br>
  Using ArrayBuffer With the Sieve of Eratosthenes
</div>

<h3>Efficient Generation of Prime Numbers</h3>
<span>Enter a number less than five million (no commas). If the number is larger than 10,000, results at the beginning and at the end will be displayed. Otherwise, rendering a large number of primes and scrolling all the way to the bottom to see the result might require time you would prefer to spend on better things.    </span>

<input type="text" on:keydown={primes} />
<p>{A}</p>

<p>This demonstration runs the <a href = "https://en.wikipedia.org/wiki/sieve_of_Eratosthenes"> sieve_of_Eratosthenes</a> algorithm setting individual bits rather than 32 bit numbers.The function "sieve" uses an ArrayBuffer which is accessed by a Uint32Array named "view". I defined ArrayBuffer and view in the Chrome console and checked some methods to verify that I had 2,000,000 bits to work with. </p>
<pre>{buffer}</pre>
<p>I entered 2000000 in my ten-year-old desktop computer immediately after loading this site in Chrome. All modifications of view completed in 16 microseconds. The entire process of running view(2000000), including printing the prime numbers, took 60 microseconds. Subsequent runs yielded (view modification, </p>
<p> The 150,000 integers in the Uint32Array named "view" all start out as zeros. Each time a prime number is identified, all of its multiples up to a designated bound are set to "1". The 0's left over at the end correspond to prime numbers. This is the sieve of Eratosthenes working with great efficiency.</p>
<p>In the final stage, whenever test(i) === 0, i gets appended to the string A. A is the list of primes less than or equal to the sieve argument.</p>  
<p>The Uint32Array named "view" is not indexed but, for example, "(view[0] & {aa})=== 0" returns "false" and "(view[0] & {bb}) === 0" returns "true" where its position can be ascertained and its value changed with bit masks. view[n] is a binary number and its 32 bits are, therefore, not indexed. That's not a problem because NUM can easily be examined and flipped using bit masks.  NUM's precise location in view[n] is resolved into the pair "n,j" pair for lookup, where n is the index in view and j is the position in view[n]. If NUM's value is still 0 after the sieve has run its course, it's a prime number. This is an efficient algorithm. I entered 300000 below and quickly scrolled down to see that the largest prime number less than 300,000 is 299,993. There's no limit to how many integers can be stored in a Uint32Array. Number.MAX_SAFE_INTEGER is 9007199254740991 but given a powerful enough computer and enough time, the largest prime number less than a humongous bigInt much larger than MAX_SAFE_INTEGER could be computed. </p>

<p style = "indent: 3%"><a href = "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer">Mozilla Developer Network</a> says, "The ArrayBuffer object is used to represent a generic, fixed-length raw binary data buffer." and "It is an array of bytes, often referred to in other languages as a "byte array".You cannot directly manipulate the contents of an ArrayBuffer; instead, you create one of the typed array objects or a DataView object which represents the buffer in a specific format, and use that to read and write the contents of the buffer." This is the foundation on which this demo rests:  </p>
<pre>{buffer}</pre>

<div>And here's the function "sieve":</div>
<pre>{func}</pre>
<div>These are the functions that set bits and report the status of bits:</div>
<pre>{bitmasks}</pre>
<br><br><br>
<br><br><br>
<slot></slot>
