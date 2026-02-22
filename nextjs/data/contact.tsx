import { Mail, Phone, Github, Instagram, Linkedin, LucideIcon } from "lucide-react";

export type Contact = {
	name: string;
	value: string;
	icon: LucideIcon;
	href: string;
	color: string;
	variant: "default" | "outline";
};

export const contactData: Contact[] = [
	{
		name: "Email",
		value: "elias.zanotti@example.com",
		icon: Mail,
		href: "mailto:elias.zanotti@example.com",
		color: "text-primary-foreground",
		variant: "default",
	},
	{
		name: "Phone",
		value: "+33 6 12 34 56 78",
		icon: Phone,
		href: "tel:+33612345678",
		color: "text-primary-foreground",
		variant: "default",
	},
	{
		name: "GitHub",
		value: "@eliaszanotti",
		icon: Github,
		href: "https://github.com/eliaszanotti",
		color: "text-gray-900 dark:text-white",
		variant: "outline",
	},
	{
		name: "Instagram",
		value: "@eliaszanottiweb",
		icon: Instagram,
		href: "https://www.instagram.com/eliaszanottiweb",
		color: "text-pink-500",
		variant: "outline",
	},
	{
		name: "LinkedIn",
		value: "Elias Zanotti",
		icon: Linkedin,
		href: "https://linkedin.com/in/eliaszanotti",
		color: "text-blue-600",
		variant: "outline",
	},
];
