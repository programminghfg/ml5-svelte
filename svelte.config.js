import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	},
	package: {
		exclude: 'src/lib/utils/'
	}
};

export default config;
