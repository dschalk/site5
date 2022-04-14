export { matchers } from './client-matchers.js';

export const components = [
	() => import("../../src/routes/__layout.svelte"),
	() => import("../runtime/components/error.svelte"),
	() => import("../../src/routes/index.svelte"),
	() => import("../../src/routes/Functions/__layout.svelte"),
	() => import("../../src/routes/Functions/index.svelte"),
	() => import("../../src/routes/Functions/bitmask_prime_generator.svelte"),
	() => import("../../src/routes/Functions/binary_arithmetic.svelte"),
	() => import("../../src/routes/Functions/bitwise_primes.svelte"),
	() => import("../../src/routes/Functions/experiment.svelte"),
	() => import("../../src/routes/Functions/Quadratic.svelte"),
	() => import("../../src/routes/Functions/monadsOld.svelte"),
	() => import("../../src/routes/Functions/factors.svelte"),
	() => import("../../src/routes/Functions/haskell.svelte"),
	() => import("../../src/routes/Functions/monads5.svelte"),
	() => import("../../src/routes/Functions/monads.svelte"),
	() => import("../../src/routes/Functions/proxy.svelte"),
	() => import("../../src/routes/Functions/score.svelte"),
	() => import("../../src/routes/Functions/code.svelte"),
	() => import("../../src/routes/Functions/time.svelte"),
	() => import("../../src/routes/Button.svelte"),
	() => import("../../src/routes/shared/Button.svelte")
];

export const dictionary = {
	"": [[0, 2], [1]],
	"Functions": [[0, 3, 4], [1]],
	"Functions/bitmask_prime_generator": [[0, 3, 5], [1]],
	"Functions/binary_arithmetic": [[0, 3, 6], [1]],
	"Functions/bitwise_primes": [[0, 3, 7], [1]],
	"Functions/experiment": [[0, 3, 8], [1]],
	"Functions/Quadratic": [[0, 3, 9], [1]],
	"Functions/monadsOld": [[0, 3, 10], [1]],
	"Functions/factors": [[0, 3, 11], [1]],
	"Functions/haskell": [[0, 3, 12], [1]],
	"Functions/monads5": [[0, 3, 13], [1]],
	"Functions/monads": [[0, 3, 14], [1]],
	"Functions/proxy": [[0, 3, 15], [1]],
	"Functions/score": [[0, 3, 16], [1]],
	"Functions/code": [[0, 3, 17], [1]],
	"Functions/time": [[0, 3, 18], [1]],
	"Button": [[0, 19], [1]],
	"shared/Button": [[0, 20], [1]]
};