export type Project = {
	title: string;
	description: string;
	tags: string[];
	github?: string;
	demo?: string;
};

export const projectsData: Project[] = [
	{
		title: "Atlas Ambassadeurs",
		description:
			"Platform featuring form validation with Zod, advanced filters and search using nuqs, optimized SSR cache management, and a clean UI built with React and shadcn/ui.",
		tags: ["Next.js", "Zod", "Nuqs", "Shadcn/ui"],
		demo: "https://www.atlas-ambassadeurs.fr/",
	},
	{
		title: "Access Cycle",
		description:
			"Complete showcase website built with Next.js and Payload CMS. Features multiple pages, responsive design, integrated map, and a classified ads system for second-hand bikes.",
		tags: ["Next.js", "PayloadCMS", "Daisy UI"],
		demo: "https://access-cycle.fr/",
	},
	{
		title: "Portfolio Website",
		description:
			"Minimal portfolio built with React & Next.js, powered by Payload CMS backend. Open source project.",
		tags: ["Next.js", "PayloadCMS", "Shadcn/ui"],
		github: "https://github.com/eliaszanotti/portfolio",
	},
];
