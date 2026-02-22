import Link from "next/link";

import { Button } from "@/components/ui/button";
import type { NavLink } from "@/data/nav-links";

type ButtonLinkProps = {
	link: NavLink;
	index?: number;
};

export function ButtonLink({ link, index = 0 }: ButtonLinkProps) {
	const Icon = link.icon;

	return (
		<Button
			variant={link.buttonVariant ?? "outline"}
			className={`${link.buttonSize} flex flex-col items-center justify-center gap-2 rounded-full absolute hover:cursor-pointer  transition-transform`}
			style={{
				top: link.position.top,
				left: link.position.left,
				animation: `float ${4 + index * 0.5}s ease-in-out infinite`,
			}}
			nativeButton={false}
			render={
				link.href ? (
					<Link href={link.href}>
						<Icon className="size-6" />
						<span className="font-semibold text-sm">{link.title}</span>
					</Link>
				) : (
					<div>
						<Icon className="size-6" />
						<span className="font-semibold text-sm">{link.title}</span>
					</div>
				)
			}
		/>
	);
}
