"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { NavLink } from "@/data/nav-links";
import { iconMap } from "@/lib/icons";

type ButtonLinkProps = {
	link: NavLink;
	index?: number;
};

function ButtonContent({ link }: { link: NavLink }) {
	const Icon = iconMap[link.icon];
	return (
		<>
			<Icon className="size-6" />
			<span className="font-semibold text-sm">{link.title}</span>
		</>
	);
}

export function ButtonLink({ link, index = 0 }: ButtonLinkProps) {
	const handleClick = (e: React.MouseEvent) => {
		if (link.id) {
			e.preventDefault();
			const target = document.getElementById(link.id);
			if (target) {
				target.scrollIntoView({ behavior: "smooth" });
			}
		}
	};

	const isAnchor = !!link.id;

	return (
		<Button
			variant={link.buttonVariant ?? "outline"}
			className={`${link.buttonSize} scale-90 -translate-x-1/20  md:scale-100 md:translate-x-0 flex flex-col items-center justify-center gap-2 rounded-full absolute hover:cursor-pointer transition-transform`}
			style={{
				top: link.position.top,
				left: link.position.left,
				animation: `float ${4 + index * 0.5}s ease-in-out infinite`,
			}}
			nativeButton={!link.href || isAnchor}
			onClick={isAnchor ? handleClick : undefined}
			render={
				link.href && !isAnchor ? (
					<Link href={link.href}>
						<ButtonContent link={link} />
					</Link>
				) : undefined
			}
		>
			{(!link.href || isAnchor) && <ButtonContent link={link} />}
		</Button>
	);
}
