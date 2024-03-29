export { matchers } from './client-matchers.js';

export const components = [
	() => import("../../src/routes/__layout.svelte"),
	() => import("../runtime/components/error.svelte"),
	() => import("../../src/routes/Functions/__layout.svelte"),
	() => import("../../src/routes/Functions/A_Simple_Recursive_Closure/__layout.svelte"),
	() => import("../../src/routes/Functions/Archive/__layout.svelte"),
	() => import("../../src/routes/Grammar/__layout.svelte"),
	() => import("../../src/routes/Law/__layout.svelte"),
	() => import("../../src/routes/Legal and Constitutional Matters/__layout.svelte"),
	() => import("../../src/routes/Mahjong/__layout.svelte"),
	() => import("../../src/routes/Sara/__layout.svelte"),
	() => import("../../src/routes/Button.svelte"),
	() => import("../../src/routes/Functions/A_Simple_Recursive_Closure/array.svelte"),
	() => import("../../src/routes/Functions/A_Simple_Recursive_Closure/asyncMonads.svelte"),
	() => import("../../src/routes/Functions/A_Simple_Recursive_Closure/asynchronous_functions.svelte"),
	() => import("../../src/routes/Functions/A_Simple_Recursive_Closure/functional_programming.svelte"),
	() => import("../../src/routes/Functions/A_Simple_Recursive_Closure/index.svelte"),
	() => import("../../src/routes/Functions/A_Simple_Recursive_Closure/index2.svelte"),
	() => import("../../src/routes/Functions/A_Simple_Recursive_Closure/score.svelte"),
	() => import("../../src/routes/Functions/A_Simple_Recursive_Closure/score10.svelte"),
	() => import("../../src/routes/Functions/A_Simple_Recursive_Closure/score2.svelte"),
	() => import("../../src/routes/Functions/A_Simple_Recursive_Closure/score3.svelte"),
	() => import("../../src/routes/Functions/A_Simple_Recursive_Closure/score4.svelte"),
	() => import("../../src/routes/Functions/A_Simple_Recursive_Closure/score5.svelte"),
	() => import("../../src/routes/Functions/A_Simple_Recursive_Closure/score6.svelte"),
	() => import("../../src/routes/Functions/A_Simple_Recursive_Closure/score7.svelte"),
	() => import("../../src/routes/Functions/A_Simple_Recursive_Closure/score8.svelte"),
	() => import("../../src/routes/Functions/A_Simple_Recursive_Closure/score9.svelte"),
	() => import("../../src/routes/Functions/Archive/Button.svelte"),
	() => import("../../src/routes/Functions/Archive/JS_Servers.svelte"),
	() => import("../../src/routes/Functions/Archive/Monad.svelte"),
	() => import("../../src/routes/Functions/Archive/Monad0.svelte"),
	() => import("../../src/routes/Functions/Archive/Monad3.svelte"),
	() => import("../../src/routes/Functions/Archive/ObjectMonad.svelte"),
	() => import("../../src/routes/Functions/Archive/Quadratic.svelte"),
	() => import("../../src/routes/Functions/Archive/binary_arithmetic.svelte"),
	() => import("../../src/routes/Functions/Archive/bitmask_prime_generator.svelte"),
	() => import("../../src/routes/Functions/Archive/bitwise_primes.svelte"),
	() => import("../../src/routes/Functions/Archive/code.svelte"),
	() => import("../../src/routes/Functions/Archive/experiment.svelte"),
	() => import("../../src/routes/Functions/Archive/factors.svelte"),
	() => import("../../src/routes/Functions/Archive/functional_JS.svelte"),
	() => import("../../src/routes/Functions/Archive/game.svelte"),
	() => import("../../src/routes/Functions/Archive/gameBA KUP.svelte"),
	() => import("../../src/routes/Functions/Archive/haskell.svelte"),
	() => import("../../src/routes/Functions/Archive/index.svelte"),
	() => import("../../src/routes/Functions/Archive/monadsOld.svelte"),
	() => import("../../src/routes/Functions/Archive/proxy.svelte"),
	() => import("../../src/routes/Functions/Archive/score.svelte"),
	() => import("../../src/routes/Functions/Zeta.svelte"),
	() => import("../../src/routes/Functions/asynchronousMonads.svelte"),
	() => import("../../src/routes/Functions/index.svelte"),
	() => import("../../src/routes/Functions/play.svelte"),
	() => import("../../src/routes/Functions/stopwatch.svelte"),
	() => import("../../src/routes/Grammar/Niether of us (has or have).svelte"),
	() => import("../../src/routes/Grammar/index.svelte"),
	() => import("../../src/routes/Law/archive.svelte"),
	() => import("../../src/routes/Law/chapter-1.svelte"),
	() => import("../../src/routes/Law/index.svelte"),
	() => import("../../src/routes/Law/law.svelte"),
	() => import("../../src/routes/Legal and Constitutional Matters/index.svelte"),
	() => import("../../src/routes/Mahjong/index.svelte"),
	() => import("../../src/routes/Mahjong/terms.svelte"),
	() => import("../../src/routes/Mahjong/yaku.svelte"),
	() => import("../../src/routes/Sara/For-Sarabeth.svelte"),
	() => import("../../src/routes/Sara/index.svelte"),
	() => import("../../src/routes/index.svelte"),
	() => import("../../src/routes/shared/Button.svelte")
];

export const dictionary = {
	"": [[0, 65], [1]],
	"Button": [[0, 10], [1]],
	"Functions": [[0, 2, 50], [1]],
	"Grammar": [[0, 5, 54], [1]],
	"Law": [[0, 6, 57], [1]],
	"Legal and Constitutional Matters": [[0, 7, 59], [1]],
	"Mahjong": [[0, 8, 60], [1]],
	"Sara": [[0, 9, 64], [1]],
	"Functions/A_Simple_Recursive_Closure": [[0, 2, 3, 15], [1]],
	"Functions/Archive": [[0, 2, 4, 44], [1]],
	"Functions/Zeta": [[0, 2, 48], [1]],
	"Functions/asynchronousMonads": [[0, 2, 49], [1]],
	"Functions/play": [[0, 2, 51], [1]],
	"Functions/stopwatch": [[0, 2, 52], [1]],
	"Grammar/Niether of us (has or have)": [[0, 5, 53], [1]],
	"Law/archive": [[0, 6, 55], [1]],
	"Law/chapter-1": [[0, 6, 56], [1]],
	"Law/law": [[0, 6, 58], [1]],
	"Mahjong/terms": [[0, 8, 61], [1]],
	"Mahjong/yaku": [[0, 8, 62], [1]],
	"Sara/For-Sarabeth": [[0, 9, 63], [1]],
	"shared/Button": [[0, 66], [1]],
	"Functions/A_Simple_Recursive_Closure/array": [[0, 2, 3, 11], [1]],
	"Functions/A_Simple_Recursive_Closure/asyncMonads": [[0, 2, 3, 12], [1]],
	"Functions/A_Simple_Recursive_Closure/asynchronous_functions": [[0, 2, 3, 13], [1]],
	"Functions/A_Simple_Recursive_Closure/functional_programming": [[0, 2, 3, 14], [1]],
	"Functions/A_Simple_Recursive_Closure/index2": [[0, 2, 3, 16], [1]],
	"Functions/A_Simple_Recursive_Closure/score": [[0, 2, 3, 17], [1]],
	"Functions/A_Simple_Recursive_Closure/score10": [[0, 2, 3, 18], [1]],
	"Functions/A_Simple_Recursive_Closure/score2": [[0, 2, 3, 19], [1]],
	"Functions/A_Simple_Recursive_Closure/score3": [[0, 2, 3, 20], [1]],
	"Functions/A_Simple_Recursive_Closure/score4": [[0, 2, 3, 21], [1]],
	"Functions/A_Simple_Recursive_Closure/score5": [[0, 2, 3, 22], [1]],
	"Functions/A_Simple_Recursive_Closure/score6": [[0, 2, 3, 23], [1]],
	"Functions/A_Simple_Recursive_Closure/score7": [[0, 2, 3, 24], [1]],
	"Functions/A_Simple_Recursive_Closure/score8": [[0, 2, 3, 25], [1]],
	"Functions/A_Simple_Recursive_Closure/score9": [[0, 2, 3, 26], [1]],
	"Functions/Archive/Button": [[0, 2, 4, 27], [1]],
	"Functions/Archive/JS_Servers": [[0, 2, 4, 28], [1]],
	"Functions/Archive/Monad": [[0, 2, 4, 29], [1]],
	"Functions/Archive/Monad0": [[0, 2, 4, 30], [1]],
	"Functions/Archive/Monad3": [[0, 2, 4, 31], [1]],
	"Functions/Archive/ObjectMonad": [[0, 2, 4, 32], [1]],
	"Functions/Archive/Quadratic": [[0, 2, 4, 33], [1]],
	"Functions/Archive/binary_arithmetic": [[0, 2, 4, 34], [1]],
	"Functions/Archive/bitmask_prime_generator": [[0, 2, 4, 35], [1]],
	"Functions/Archive/bitwise_primes": [[0, 2, 4, 36], [1]],
	"Functions/Archive/code": [[0, 2, 4, 37], [1]],
	"Functions/Archive/experiment": [[0, 2, 4, 38], [1]],
	"Functions/Archive/factors": [[0, 2, 4, 39], [1]],
	"Functions/Archive/functional_JS": [[0, 2, 4, 40], [1]],
	"Functions/Archive/game": [[0, 2, 4, 41], [1], 1],
	"Functions/Archive/gameBA KUP": [[0, 2, 4, 42], [1]],
	"Functions/Archive/haskell": [[0, 2, 4, 43], [1]],
	"Functions/Archive/monadsOld": [[0, 2, 4, 45], [1]],
	"Functions/Archive/proxy": [[0, 2, 4, 46], [1]],
	"Functions/Archive/score": [[0, 2, 4, 47], [1]]
};