import { Github, Instagram, Linkedin, type LucideIcon } from "lucide-react";

export type Contact = {
	name: string;
	value: string;
	icon: LucideIcon;
	href: string;
};

export const contactData: Contact[] = [
	{
		name: "GitHub",
		value: "@eliaszanotti",
		icon: Github,
		href: "https://github.com/eliaszanotti",
	},
	{
		name: "Instagram",
		value: "@eliaszanottiweb",
		icon: Instagram,
		href: "https://www.instagram.com/eliaszanottiweb",
	},
	{
		name: "LinkedIn",
		value: "Elias Zanotti",
		icon: Linkedin,
		href: "https://www.linkedin.com/in/elias-zanotti-42-school",
	},
];
