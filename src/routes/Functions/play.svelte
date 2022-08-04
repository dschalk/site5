<script>
	
	// import ac from "array-comprehension";
	// console.log("ac is", ac);	
		

	
	var s = "stop";
	var clog = console.log;
	var m3 = M(1);
	
	var S = x => b => c =>{
		 x = x + 1/b**c;
		 return x;
	};
	
	var res3 = S(1)(2)(2);
	m3(S(2)(1));
	clog(m3(s));
	
	m3(S(2)(2));
	clog(m3(s));
	
	m3(S(2)(3));
	clog(m3(s));
	
	m3(S(2)(4));
	clog(m3(s));
	
	m3(S(2)(5));
	clog(m3(s));
	
		function M(x) {
			return function go(func) {
				if (typeof func === 'function') {
					x = func(x);
					return go;
				} else if (func === 'stop') return x;
			}
		}
			</script>
	
	<h2>{m3("stop")}</h2>
	
	<h2>{m3(S(2)(6))("stop")}</h2>
	
	<h2>{m3(S(2)(7))("stop")}</h2>
	
	<h2>{m3(S(2)(8))("stop")}</h2>
	
	<h2>{m3(S(2)(9))("stop")}</h2>
	
	