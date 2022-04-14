export const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"start-846da8a9.js","js":["start-846da8a9.js","chunks/vendor-bc30573c.js"],"css":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js'),
			() => import('./nodes/7.js'),
			() => import('./nodes/8.js'),
			() => import('./nodes/9.js'),
			() => import('./nodes/10.js'),
			() => import('./nodes/11.js'),
			() => import('./nodes/12.js'),
			() => import('./nodes/13.js'),
			() => import('./nodes/14.js'),
			() => import('./nodes/15.js'),
			() => import('./nodes/16.js'),
			() => import('./nodes/17.js'),
			() => import('./nodes/18.js'),
			() => import('./nodes/19.js'),
			() => import('./nodes/20.js')
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				id: "Functions",
				pattern: /^\/Functions\/?$/,
				names: [],
				types: [],
				path: "/Functions",
				shadow: null,
				a: [0,3,4],
				b: [1]
			},
			{
				type: 'page',
				id: "Functions/bitmask_prime_generator",
				pattern: /^\/Functions\/bitmask_prime_generator\/?$/,
				names: [],
				types: [],
				path: "/Functions/bitmask_prime_generator",
				shadow: null,
				a: [0,3,5],
				b: [1]
			},
			{
				type: 'page',
				id: "Functions/binary_arithmetic",
				pattern: /^\/Functions\/binary_arithmetic\/?$/,
				names: [],
				types: [],
				path: "/Functions/binary_arithmetic",
				shadow: null,
				a: [0,3,6],
				b: [1]
			},
			{
				type: 'page',
				id: "Functions/bitwise_primes",
				pattern: /^\/Functions\/bitwise_primes\/?$/,
				names: [],
				types: [],
				path: "/Functions/bitwise_primes",
				shadow: null,
				a: [0,3,7],
				b: [1]
			},
			{
				type: 'page',
				id: "Functions/experiment",
				pattern: /^\/Functions\/experiment\/?$/,
				names: [],
				types: [],
				path: "/Functions/experiment",
				shadow: null,
				a: [0,3,8],
				b: [1]
			},
			{
				type: 'page',
				id: "Functions/Quadratic",
				pattern: /^\/Functions\/Quadratic\/?$/,
				names: [],
				types: [],
				path: "/Functions/Quadratic",
				shadow: null,
				a: [0,3,9],
				b: [1]
			},
			{
				type: 'page',
				id: "Functions/monadsOld",
				pattern: /^\/Functions\/monadsOld\/?$/,
				names: [],
				types: [],
				path: "/Functions/monadsOld",
				shadow: null,
				a: [0,3,10],
				b: [1]
			},
			{
				type: 'page',
				id: "Functions/factors",
				pattern: /^\/Functions\/factors\/?$/,
				names: [],
				types: [],
				path: "/Functions/factors",
				shadow: null,
				a: [0,3,11],
				b: [1]
			},
			{
				type: 'page',
				id: "Functions/haskell",
				pattern: /^\/Functions\/haskell\/?$/,
				names: [],
				types: [],
				path: "/Functions/haskell",
				shadow: null,
				a: [0,3,12],
				b: [1]
			},
			{
				type: 'page',
				id: "Functions/monads5",
				pattern: /^\/Functions\/monads5\/?$/,
				names: [],
				types: [],
				path: "/Functions/monads5",
				shadow: null,
				a: [0,3,13],
				b: [1]
			},
			{
				type: 'page',
				id: "Functions/monads",
				pattern: /^\/Functions\/monads\/?$/,
				names: [],
				types: [],
				path: "/Functions/monads",
				shadow: null,
				a: [0,3,14],
				b: [1]
			},
			{
				type: 'page',
				id: "Functions/proxy",
				pattern: /^\/Functions\/proxy\/?$/,
				names: [],
				types: [],
				path: "/Functions/proxy",
				shadow: null,
				a: [0,3,15],
				b: [1]
			},
			{
				type: 'page',
				id: "Functions/score",
				pattern: /^\/Functions\/score\/?$/,
				names: [],
				types: [],
				path: "/Functions/score",
				shadow: null,
				a: [0,3,16],
				b: [1]
			},
			{
				type: 'page',
				id: "Functions/code",
				pattern: /^\/Functions\/code\/?$/,
				names: [],
				types: [],
				path: "/Functions/code",
				shadow: null,
				a: [0,3,17],
				b: [1]
			},
			{
				type: 'endpoint',
				id: "Functions/play",
				pattern: /^\/Functions\/play\/?$/,
				names: [],
				types: [],
				load: () => import('./entries/endpoints/Functions/play.js')
			},
			{
				type: 'page',
				id: "Functions/time",
				pattern: /^\/Functions\/time\/?$/,
				names: [],
				types: [],
				path: "/Functions/time",
				shadow: null,
				a: [0,3,18],
				b: [1]
			},
			{
				type: 'page',
				id: "Button",
				pattern: /^\/Button\/?$/,
				names: [],
				types: [],
				path: "/Button",
				shadow: null,
				a: [0,19],
				b: [1]
			},
			{
				type: 'page',
				id: "shared/Button",
				pattern: /^\/shared\/Button\/?$/,
				names: [],
				types: [],
				path: "/shared/Button",
				shadow: null,
				a: [0,20],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
