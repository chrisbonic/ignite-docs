// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
	output: 'server',
	adapter: cloudflare(),
	base: process.env.NODE_ENV === 'production' ? 'CLOUD_MOUNT_PATH' : '/',
	security: { checkOrigin: false },
	integrations: [
		starlight({
			title: 'Ignite Studio',
			description: 'Platform guide for the Ignite Studio pitch delivery system.',
			head: [
				{ tag: 'meta', attrs: { name: 'robots', content: 'noindex, nofollow' } },
			],
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/chrisbonic/ignite-docs' },
			],
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						// { label: 'Platform Overview', slug: 'getting-started/overview' },
						{ label: 'Key Concepts', slug: 'getting-started/key-concepts' },
						{ label: 'Your First Client', slug: 'getting-started/your-first-client' },
					],
				},
				{
					label: 'Admin Guide',
					items: [
						{ label: 'Dashboard', slug: 'admin-guide/dashboard' },
						{ label: 'Client Setup', slug: 'admin-guide/client-setup' },
						{ label: 'Research', slug: 'admin-guide/research' },
						{ label: 'Generating Ideas', slug: 'admin-guide/generating-ideas' },
						{ label: 'Sales Pages', slug: 'admin-guide/sales-pages' },
						{ label: 'Partner Pages', slug: 'admin-guide/partner-pages' },
						{ label: 'Packages', slug: 'admin-guide/packages' },
						{ label: 'Editing Content', slug: 'admin-guide/editing-content' },
						{ label: 'Partner Manager', slug: 'admin-guide/partner-manager' },
					],
				},
				{
					label: 'Agents',
					items: [
						{ label: 'Agent Mode', slug: 'agents/agent-mode' },
						{ label: 'Pitch Agent', slug: 'agents/pitch-agent' },
					],
				},
				// {
				// 	label: 'Pitch Formula',
				// 	items: [
				// 		{ label: 'The 7-Slide Formula', slug: 'pitch-formula/seven-slides' },
				// 		{ label: 'Brand System', slug: 'pitch-formula/brand-system' },
				// 		{ label: 'Positioning Rules', slug: 'pitch-formula/positioning-rules' },
				// 	],
				// },
				// {
				// 	label: 'Architecture',
				// 	items: [
				// 		{ label: 'System Design', slug: 'architecture/system-design' },
				// 		{ label: 'CMS Schema', slug: 'architecture/cms-schema' },
				// 		{ label: 'Generation Pipeline', slug: 'architecture/generation-pipeline' },
				// 		{ label: 'URL Structure', slug: 'architecture/url-structure' },
				// 	],
				// },
				// {
				// 	label: 'Operations',
				// 	items: [
				// 		{ label: 'New Site Setup', slug: 'operations/new-site-setup' },
				// 		{ label: 'Environment Config', slug: 'operations/environment-config' },
				// 		{ label: 'Deployment', slug: 'operations/deployment' },
				// 		{ label: 'Troubleshooting', slug: 'operations/troubleshooting' },
				// 	],
				// },
			],
		}),
	],
});
