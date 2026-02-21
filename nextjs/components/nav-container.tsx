import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Mail, Code, FolderOpen, GraduationCap, User } from "lucide-react";

const navItems = [
	{
		title: "Contact",
		href: "/contact",
		icon: Mail,
		description: "Get in touch with me",
		size: "col-span-2 row-span-2",
		buttonSize: "size-32",
	},
	{
		title: "Skills",
		href: "/skills",
		icon: Code,
		description: "My tech stack",
		size: "col-span-2 row-span-1",
		buttonSize: "size-48",
	},
	{
		title: "Projects",
		href: "/projects",
		icon: FolderOpen,
		description: "My work",
		size: "col-span-1 row-span-2",
		buttonSize: "size-70",
	},
	{
		title: "School",
		href: "/school",
		icon: GraduationCap,
		description: "My education",
		size: "col-span-1 row-span-1",
		buttonSize: "size-40",
	},
	{
		title: "About",
		href: "/about",
		icon: User,
		description: "More about me",
		size: "col-span-2 row-span-1",
		buttonSize: "size-44",
	},
];

export function NavContainer() {
	return (
		<div className="relative w-full max-w-3xl h-100">
			{navItems.map((item, index) => {
				const Icon = item.icon;
				// Positions absolues pour créer un effet de boutons qui se croisent
				const positions: Partial<
					Record<"top" | "right" | "left" | "bottom", string>
				>[] = [
					{ top: "10%", left: "20%" }, // Contact
					{ top: "35%", left: "10%" }, // Skills
					{ top: "15%", left: "30%" }, // Projects
					{ top: "10%", left: "60%" }, // School
					{ top: "40%", right: "20%" }, // About
				];

				const pos = positions[index];

				return (
					<Link
						key={item.href}
						href={item.href}
						className="absolute"
						style={{
							top: pos.top,
							left: pos.left,
							right: pos.right,
							bottom: pos.bottom,
						}}
					>
						<Button
							variant="outline"
							className={`${item.buttonSize} flex flex-col items-center justify-center gap-2 rounded-full`}
						>
							<Icon className="size-6" />
							<span className="font-semibold text-sm">
								{item.title}
							</span>
						</Button>
					</Link>
				);
			})}
		</div>
	);
}
