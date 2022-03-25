import adapter from '@sveltejs/adapter-static';

export default {
	kit: {
		adapter: adapter({
			// default options are shown
			pages: 'build',
			assets: 'build',
		})
	}
};





/*
import adapter from '@sveltejs/adapter-node';

export default {
  kit: {

    adapter: adapter({ out: 'build'})
  }
}; */
