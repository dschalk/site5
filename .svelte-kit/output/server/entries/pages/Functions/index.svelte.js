import { c as create_ssr_component, e as escape } from "../../../chunks/index-2dc61825.js";
const Functions = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var date = new Date();
  [date.getHours(), date.getMinutes(), date.getSeconds()];
  var permissions = `u@schalk:/var/www/html$ ls -ls 
total 20
4 drwxr-xr-x 2 u u 4096 Mar 20 15:23 Functions
4 -rwxr-xr-x 1 u u 2093 Mar 21 19:11 Functions.html
4 drwxr-xr-x 5 u u 4096 Mar 21 19:11 _app
4 -rwxr-xr-x 1 u u 1571 Mar 21 19:11 favicon.png
4 -rwxr-xr-x 1 u u 1599 Mar 21 19:11 index.html
u@schalk:/var/www/html$ ls -ls Functions
total 16
16 -rwxr-xr-x 1 u u 14451 Mar 21 19:11 monads.html
u@schalk:/var/www/html$ 
`;
  var config = `import adapter from '@sveltejs/adapter-static';

 export default {
	kit: {
		adapter: adapter({
			// default options are shown
			pages: 'build',
			assets: 'build',
			trailingSlash: 'never',
			fallback: null,
			precompress: false
		}),

		prerender: {
			// This can be false if you're using a fallback (i.e. SPA mode)
			default: true
		}
	}
};`;
  return `<br>
    <div>trailingSlash: &#39;never&#39;</div>
    <br>
    <span>Server permissions:</span>
     <pre> ${escape(permissions)} </pre> 
    <span>svelte.config.js:</span>     
     <pre> ${escape(config)} </pre> 
<br><br><br>`;
});
export { Functions as default };
