
import root from '__GENERATED__/root.svelte';
import { respond } from '/home/d/site5/.svelte-kit/runtime/server/index.js';
import { set_paths, assets, base } from '/home/d/site5/.svelte-kit/runtime/paths.js';
import { set_prerendering } from '/home/d/site5/.svelte-kit/runtime/env.js';
import * as user_hooks from "./hooks.js";

const template = ({ head, body, assets, nonce }) => "<!DOCTYPE html>\n<html lang=\"en\">\n\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<link rel=\"icon\" href=\"/favicon.png\" />\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n\t\t<!-- " + head + " -->\n\t\t<meta name=\"description\" content=\"\" />\n\t\t<link rel=\"icon\" href=\"" + assets + "/favicon.png\" />\n\t</head>\n\n<!-- <style>\n  html {\n    background-color:#211500;\n    width: 100%;\n  }\n\n  body {\n    margin-left: 7%;\n    margin-right: 7%;\n    border-radius: 35px;\n    background-color: #361B01;\n    color: #d3ead5;\n    margin-top: 20px;\n    font-size: 15px;\n    font-family: \"Proxima Nova Regular,Segoe UI,Roboto,Droid Sans,Helvetica Neue,Arial,sans-serif;\";\n    -webkit-box-shadow: inset 0px 0px 20px 0px rgb(0,0,0);\n    -moz-box-shadow:    inset 0px 0px 20px 0px rgb(0,0,0);\n    box-shadow:         inset 0px 0px 20px 0px rgb(0,0,0);\n    padding: 20px, 12%, 20px, 12%;\n  }\n\n  input, textarea {\n    background-color: #efe1a7;\n    color: #000000;\n    border-radius: 5px;\n    -webkit-transition: all 0.60s ease-in-out;\n    -moz-transition: all 0.60s ease-in-out;\n    -ms-transition: all 0.60s ease-in-out;\n    -o-transition: all 0.60s ease-in-out;\n    outline: none;\n    padding: 3px 0px 3px 3px;\n    margin: 5px 1px 3px 0px;\n    border: 3px solid #DDDDDD;\n  }\n\n  input:focus, textarea:focus {\n    -webkit-box-shadow: 0px 0px 20px 0px rgb(255, 215, 0);\n    -moz-box-shadow:    0px 0px 20px 0px rgb(255, 215, 0);\n    box-shadow:         0px 0px 20px 0px rgb(255, 215, 0);\n    padding: 3px 0px 3px 3px;\n  }\n\n  pre {\n    font-size:15px;\n    color: #efe302;\n  }\n\n  p {\n    text-indent: 3%;\n  }\n\n  #logo {\n    background-color: transparent;\n    padding-left: 2%;\n  }\n\n  button {\n    margin-left: 5%;\n    background-color: #331903;\n    border-width: 2px;\n    border-color: #E8F7C1;\n    border-radius: 10px;\n    color: #00ffdd;\n    font-size: 24px;\n    -webkit-box-shadow: 0px 0px 15px 0px rgb(255, 215, 0);\n    -moz-box-shadow:    0px 0px 15px 0px rgb(255, 215, 0);\n    box-shadow:         0px 0px 15px 0px rgb(255, 215, 0);\n    padding: 3px 10px 3px 10px;\n  }\n\n  button:hover {\n    color: blue;\n    background-color: lightblue;\n    border-color: #0000AA;\n    border-radius: 10px;\n  }\n\n   #roll {\n    margin-left: 8%;\n  }\n\n  label {\n    background-color: #331903;\n    text-align: left;\n    border-color: #331903;\n    outline: 0px;\n    color: #CCFDCB;\n    border-radius: 10px;\n    padding-top: 1.1px;\n    padding-bottom: 2px;\n    margin-right: 3px;\n    margin-left: 12px;\n    font-size: 24px;\n    display: inline;\n  }\n\n  h2 {\n    color: #efe302;\n    text-align: center;\n  }\n\n  h1 {\n    color: #D6FFFE;\n    text-align: center;\n  }\n\n.tao {\n  margin-left: 3%;\n} \n</style> -->\n\t\n\t<body>\n\t\t<div>" + body + "</div>\n\t</body>\n</html>\n";

let read = null;

set_paths({"base":"","assets":""});

let default_protocol = 'https';

// allow paths to be globally overridden
// in svelte-kit preview and in prerendering
export function override(settings) {
	default_protocol = settings.protocol || default_protocol;
	set_paths(settings.paths);
	set_prerendering(settings.prerendering);
	read = settings.read;
}

export class Server {
	constructor(manifest) {
		this.options = {
			amp: false,
			csp: {"mode":"auto","directives":{"upgrade-insecure-requests":false,"block-all-mixed-content":false}},
			dev: false,
			floc: false,
			get_stack: error => String(error), // for security
			handle_error: (error, event) => {
				this.options.hooks.handleError({
					error,
					event,

					// TODO remove for 1.0
					// @ts-expect-error
					get request() {
						throw new Error('request in handleError has been replaced with event. See https://github.com/sveltejs/kit/pull/3384 for details');
					}
				});
				error.stack = this.options.get_stack(error);
			},
			hooks: null,
			hydrate: true,
			manifest,
			method_override: {"parameter":"_method","allowed":[]},
			paths: { base, assets },
			prefix: assets + '/_app/',
			prerender: true,
			read,
			root,
			service_worker: null,
			router: true,
			template,
			template_contains_nonce: false,
			trailing_slash: "never"
		};
	}

	async respond(request, options = {}) {
		if (!(request instanceof Request)) {
			throw new Error('The first argument to server.respond must be a Request object. See https://github.com/sveltejs/kit/pull/3384 for details');
		}

		if (!this.options.hooks) {
			const module = await import("./hooks.js");
			this.options.hooks = {
				getSession: module.getSession || (() => ({})),
				handle: module.handle || (({ event, resolve }) => resolve(event)),
				handleError: module.handleError || (({ error }) => console.error(error.stack)),
				externalFetch: module.externalFetch || fetch
			};
		}

		return respond(request, this.options, options);
	}
}
