export const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"start-06c331bf.js","js":["start-06c331bf.js","chunks/vendor-4e552e70.js"],"css":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js'),
			() => import('./nodes/7.js')
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
				id: "Functions/monads2",
				pattern: /^\/Functions\/monads2\/?$/,
				names: [],
				types: [],
				path: "/Functions/monads2",
				shadow: null,
				a: [0,3,5],
				b: [1]
			},
			{
				type: 'page',
				id: "Functions/monads3",
				pattern: /^\/Functions\/monads3\/?$/,
				names: [],
				types: [],
				path: "/Functions/monads3",
				shadow: null,
				a: [0,3,6],
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
				a: [0,3,7],
				b: [1]
			},
			{
				type: 'endpoint',
				id: "Functions/play",
				pattern: /^\/Functions\/play\/?$/,
				names: [],
				types: [],
				load: () => import('./entries/endpoints/Functions/play.js')
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
