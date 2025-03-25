// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://dbwebb-se.github.io/website2/',
	base: '/website2',
	integrations: [
		starlight({
			title: 'dbwebb',
			favicon: 'favicon.png',
			logo: {
				src: './src/assets/leaf_256x256.png',
			},
			customCss: [
				'./src/styles/dbwebb.css',
			],
			editLink: {
				baseUrl: 'https://github.com/dbwebb-se/website2/tree/main',
			},
			social: {
				github: 'https://github.com/dbwebb-se/website2',
			},
			head: [
				{
				  tag: 'base',
				  attrs: {
					href: '/website2/'
				  }
				}
			],
			sidebar: [
				{
					label: 'Introduktion',
					collapsed: true,
					autogenerate: { directory: 'intro' },
				},
				{
					label: 'Labbmiljö',
					collapsed: true,
					autogenerate: { directory: 'labbmiljo' },
				},
				{
					label: 'Studieguide',
					collapsed: true,
					autogenerate: { directory: 'studieguide' },
					/* items: [
						{ label: 'Example Guide', slug: 'guides/example' },
					],*/
				},
			],
		}),
	],
});
