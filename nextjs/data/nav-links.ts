import { LucideIcon } from "lucide-react";
import {
	Mail,
	Code,
	FolderOpen,
	GraduationCap,
	User,
	Phone,
} from "lucide-react";

export type NavLink = {
	title: string;
	href: string;
	icon: LucideIcon;
	description: string;
	buttonSize: string;
	buttonVariant?: "default" | "outline" | "ghost" | "secondary";
	position: Partial<Record<"top" | "right" | "left" | "bottom", string>>;
};

export const navLinks: NavLink[] = [
	{
		title: "Contact",
		href: "/contact",
		icon: User,
		description: "More about me",
		buttonSize: "size-48",
		position: { top: "10%", left: "20%" },
	},
	{
		title: "Skills",
		href: "/skills",
		icon: Code,
		description: "My tech stack",
		buttonSize: "size-48",
		position: { top: "45%", left: "30%" },
	},
	{
		title: "School",
		href: "/school",
		icon: GraduationCap,
		description: "My education",
		buttonSize: "size-40",
		position: { top: "40%", left: "80%" },
	},
	{
		title: "About",
		href: "/about",
		icon: Mail,
		description: "More about me",
		buttonSize: "size-44",
		position: { top: "60%", left: "60%" },
	},
	{
		title: "Phone",
		href: "tel:+33612345678",
		icon: Phone,
		description: "Call me",
		buttonSize: "size-36",
		position: { top: "70%", left: "10%" },
		buttonVariant: "secondary",
	},
	{
		title: "Email",
		href: "mailto:contact@eliaszanotti.com",
		icon: Mail,
		description: "Send me an email",
		buttonSize: "size-36",
		position: { top: "10%", left: "90%" },
	},
	{
		title: "Projects",
		href: "/projects",
		icon: FolderOpen,
		description: "My work",
		buttonSize: "size-70",
		position: { top: "0%", left: "50%" },
		buttonVariant: "default",
	},
];
