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
			"• Form validation\n• Filters & search\n• SSR cache management\n• Clean React + shadcn UI",
		tags: ["Next.js", "React", "Zod", "Nuqs", "Shadcn/ui"],
		demo: "https://www.atlas-ambassadeurs.fr/",
	},
	{
		title: "Portfolio Website",
		description: "This portfolio built with Next.js and Payload CMS",
		tags: ["Next.js", "TypeScript", "Tailwind"],
		github: "https://github.com/eliaszanotti/portfolio",
		demo: "https://eliaszanotti.dev",
	},
];
