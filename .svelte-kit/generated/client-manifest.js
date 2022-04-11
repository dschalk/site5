export { matchers } from './client-matchers.js';

export const components = [
	() => import("../../src/routes/__layout.svelte"),
	() => import("../runtime/components/error.svelte"),
	() => import("../../src/routes/index.svelte"),
	() => import("../../src/routes/Functions/__layout.svelte"),
	() => import("../../src/routes/Functions/index.svelte"),
	() => import("../../src/routes/Functions/monadsOld.svelte"),
	() => import("../../src/routes/Functions/monads5.svelte"),
	() => import("../../src/routes/Functions/monads.svelte")
];

export const dictionary = {
	"": [[0, 2], [1]],
	"Functions": [[0, 3, 4], [1]],
	"Functions/monadsOld": [[0, 3, 5], [1]],
	"Functions/monads5": [[0, 3, 6], [1]],
	"Functions/monads": [[0, 3, 7], [1]]
};