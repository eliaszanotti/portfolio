import { Github, Instagram, Linkedin, type LucideIcon } from "lucide-react";

export type Contact = {
	name: string;
	icon: LucideIcon;
	href: string;
};

export const contactData: Contact[] = [
	{
		name: "GitHub",
		icon: Github,
		href: "https://github.com/eliaszanotti",
	},
	{
		name: "Instagram",
		icon: Instagram,
		href: "https://www.instagram.com/eliaszanottiweb",
	},
	{
		name: "LinkedIn",
		icon: Linkedin,
		href: "https://www.linkedin.com/in/elias-zanotti-42-school",
	},
];
