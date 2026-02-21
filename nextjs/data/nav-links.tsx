import { LucideIcon } from "lucide-react";
import {
	Mail,
	Code,
	FolderOpen,
	GraduationCap,
	User,
	Phone,
	Github,
	Instagram,
} from "lucide-react";

export type NavLink = {
	title: string;
	href?: string;
	icon: LucideIcon;
	description: string;
	buttonSize: string;
	buttonVariant?: "default" | "outline" | "ghost" | "secondary";
	position: Partial<Record<"top" | "left", string>>;
	isContactDialog?: boolean;
};

export const navLinks: NavLink[] = [
	{
		title: "Skills",
		href: "/skills",
		icon: Code,
		description: "My tech stack",
		buttonSize: "size-48",
		position: { top: "20%", left: "20%" },
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
		icon: Phone,
		description: "Call me",
		buttonSize: "size-36",
		position: { top: "70%", left: "10%" },
		buttonVariant: "default",
		isContactDialog: true,
	},
	{
		title: "Email",
		icon: Mail,
		description: "Send me an email",
		buttonSize: "size-36",
		position: { top: "10%", left: "90%" },
		buttonVariant: "default",
		isContactDialog: true,
	},
	{
		title: "Projects",
		href: "/projects",
		icon: FolderOpen,
		description: "My work",
		buttonSize: "size-70",
		position: { top: "0%", left: "50%" },
	},
	{
		title: "Instagram",
		href: "https://www.instagram.com/eliaszanottiweb",
		icon: Instagram,
		description: "Follow me on Instagram",
		buttonSize: "size-32",
		position: { top: "65%", left: "30%" },
	},
	{
		title: "Github",
		href: "https://github.com/eliaszanotti",
		icon: Github,
		description: "Check my Github",
		buttonSize: "size-32",
		position: { top: "80%", left: "80%" },
	},
];
