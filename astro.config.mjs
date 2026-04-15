// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
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
						{ label: 'Client Intelligence', slug: 'admin-guide/client-intelligence' },
						{ label: 'Generating Ideas', slug: 'admin-guide/generating-ideas' },
						{ label: 'Sales Pages', slug: 'admin-guide/sales-pages' },
						{ label: 'Partner Pages', slug: 'admin-guide/partner-pages' },
						{ label: 'Client Briefs', slug: 'admin-guide/client-briefs' },
						{ label: 'Packages', slug: 'admin-guide/packages' },
						{ label: 'Editing Content', slug: 'admin-guide/editing-content' },
						{ label: 'Partner Manager', slug: 'admin-guide/partner-manager' },
						{ label: 'AI Context', slug: 'admin-guide/ai-context' },
					],
				},
				{
					label: 'Agents',
					items: [
						{ label: 'Agent Mode', slug: 'agents/agent-mode' },
						{ label: 'Pitch Agent', slug: 'agents/pitch-agent' },
					],
				},
				{
					label: 'Roadmap',
					items: [
						{ label: 'Overview', slug: 'roadmap' },
						{ label: 'Archived Reviews', slug: 'roadmap/_archive' },
					],
				},
				{
					label: 'Sessions',
					items: [
						{ label: 'Overview', slug: 'sessions' },
					],
				},
				{
					label: 'Webflow Cloud',
					items: [
						{ label: 'Overview', slug: 'webflow-cloud' },
						{ label: 'Incident Log', slug: 'webflow-cloud/incident-log' },
					],
				},
				{
					label: 'Runbooks',
					items: [
						{ label: 'Overview', slug: 'runbooks' },
						{ label: 'Multi-Repo Git Flow', slug: 'runbooks/multi-repo-git' },
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
