import adapter from '@sveltejs/adapter-node';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://github.com/sveltejs/svelte-preprocess
    // for more information about preprocessors
    preprocess: preprocess(),

    kit: {
        // We have changed this to point to a build directory
        adapter: adapter({ out: 'build' })
        vite: () => ({ server: { port: 3005 }})
    }
};

export default config;

