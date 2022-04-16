<script>
    import BitmaskPrimeGenerator from "./bitmask_prime_generator.svelte";
    var sieve =  `function sieve (N) {
    var buf = new ArrayBuffer(1.1 * Math.ceil(N/8));
    var view = new Uint8Array(buf);`
</script>

Just for fun, I made a C++ demonstration that adds and subtracts binary numbers using elementary arithmetic. Here it is: 
<iframe frameborder="0" width="80%" height="500px" src="https://replit.com/@DavidSchalk1/Binary-Addition-Using-Arithmetic?lite=true"></iframe>
<p>This does the same thing only more elegantly, using using bitwise operators:</p>
<iframe frameborder="0" width="80%" height="500px" src="https://replit.com/@DavidSchalk1/Binary-Addition-Using-Bitwise-Operators?lite=true"></iframe>
<br><br>

ECMAScript 2015 (ES6) introduced typed arrays, making it convenient to efficiently store information in individual bits. After an ArrayBuffer instance is defined, it can be accessed by an instance of DataView. 

An efficient implementation of the sieve of Eratosthenes, located on this website at <a href = "../bitmask_prime_generator">"../bitmask_prime_generator"</a>, begins with: 
<pre>{sieve}</pre>. It took thirty seconds to compute prime numbers up to one billion. The series ended with 999999667, 999999677, 999999733, 999999739, 999999751, 999999757, 999999761, 999999797, 999999883, 999999893, 999999929, and 999999937. These numbers are identical to those shown at <a href = "http://compoasso.free.fr/primelistweb/page/prime/liste_online_en.php">Prime I.T.</a>. 




