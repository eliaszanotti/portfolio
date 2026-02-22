import { Code2, Briefcase, LucideIcon } from "lucide-react";

export type Experience = {
	name: string;
	fullName: string;
	description: string;
	icon: LucideIcon;
	location: string;
	years: string;
};

export const experienceData: Experience[] = [
	{
		name: "42 School",
		fullName: "42 Lyon",
		description:
			"Computer science student. Common core validated on 04/18/2024",
		icon: Code2,
		location: "Charbonnières-les-bains, France",
		years: "Since Nov. 2022",
	},
	{
		name: "JobMania",
		fullName: "Web Developer Intern",
		description: "Full SaaS development",
		icon: Briefcase,
		location: "Lyon, France",
		years: "6 months, 2024",
	},
];
