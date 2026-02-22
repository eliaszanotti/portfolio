export type SkillLevel = 0 | 1 | 2 | 3;

export type Skill = {
	name: string;
	level: SkillLevel;
};

export type SkillCategory = {
	title: string;
	skills: Skill[];
};

export const skillsData: SkillCategory[] = [
	{
		title: "Frontend",
		skills: [
			{ name: "React", level: 3 },
			{ name: "Next.js", level: 3 },
			{ name: "TypeScript", level: 3 },
			{ name: "Tailwind CSS", level: 2 },
		],
	},
	{
		title: "Backend",
		skills: [
			{ name: "Payload CMS", level: 3 },
			{ name: "PostgreSQL", level: 2 },
			{ name: "Prisma", level: 2 },
		],
	},
	{
		title: "Tools & Cloud",
		skills: [
			{ name: "Git", level: 3 },
			{ name: "Claude Code", level: 2 },
			{ name: "Docker", level: 2 },
			{ name: "AWS", level: 1 },
		],
	},
];
