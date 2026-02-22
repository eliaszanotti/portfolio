import { Coffee, Code, LucideIcon, User } from "lucide-react";

export type About = {
	title: string;
	description: string;
	icon: LucideIcon;
};

export const aboutData: About[] = [
	{
		title: "Who I Am",
		description:
			"Hey! I'm Elias, a passionate full-stack developer based in France. I love building modern web applications and solving complex problems with clean, efficient code.",
		icon: User,
	},
	{
		title: "What I Do",
		description:
			"I specialize in full-stack development using React, Next.js, and Node.js. I enjoy working on both the frontend and backend, creating seamless user experiences backed by robust APIs.",
		icon: Code,
	},
	{
		title: "When I'm Not Coding",
		description:
			"When I'm away from my keyboard, you can find me exploring new technologies, contributing to open-source projects, or enjoying the outdoors. I believe in continuous learning and staying curious.",
		icon: Coffee,
	},
];
