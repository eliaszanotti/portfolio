export type NavLink = {
	title: string;
	href?: string;
	id?: string;
	icon: string;
	buttonSize: string;
	buttonVariant?: "default" | "outline" | "ghost" | "secondary";
	position: Partial<Record<"top" | "left", string>>;
	isContactDialog?: boolean;
};

export const navLinks: NavLink[] = [
	{
		title: "Skills",
		id: "skills",
		icon: "Code",
		buttonSize: "size-48",
		position: { top: "20%", left: "20%" },
	},
	{
		title: "Experience",
		id: "experience",
		icon: "GraduationCap",
		buttonSize: "size-40",
		position: { top: "40%", left: "80%" },
	},
	{
		title: "About",
		id: "about",
		icon: "Mail",
		buttonSize: "size-44",
		position: { top: "60%", left: "60%" },
	},
	{
		title: "Phone",
		icon: "Phone",
		buttonSize: "size-36",
		position: { top: "70%", left: "10%" },
		buttonVariant: "default",
		isContactDialog: true,
	},
	{
		title: "Email",
		icon: "Mail",
		buttonSize: "size-36",
		position: { top: "10%", left: "90%" },
		buttonVariant: "default",
		isContactDialog: true,
	},
	{
		title: "Projects",
		id: "projects",
		icon: "FolderOpen",
		buttonSize: "size-70",
		position: { top: "0%", left: "50%" },
	},
	{
		title: "Instagram",
		href: "https://www.instagram.com/eliaszanottiweb",
		icon: "Instagram",
		buttonSize: "size-32",
		position: { top: "65%", left: "30%" },
	},
	{
		title: "Github",
		href: "https://github.com/eliaszanotti",
		icon: "Github",
		buttonSize: "size-32",
		position: { top: "80%", left: "80%" },
	},
	{
		title: "Linkedin",
		href: "https://www.linkedin.com/in/elias-zanotti-42-school",
		icon: "Linkedin",
		buttonSize: "size-32",
		position: { top: "90%", left: "40%" },
	},
];
