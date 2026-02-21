import Link from "next/link";

import { Button } from "@/components/ui/button";
import type { NavLink } from "@/data/nav-links";

type ButtonLinkProps = {
	link: NavLink;
};

export function ButtonLink({ link }: ButtonLinkProps) {
	const Icon = link.icon;

	return (
		<Button
			variant={link.buttonVariant ?? "outline"}
			className={`${link.buttonSize} flex flex-col items-center justify-center gap-2 rounded-full absolute -translate-x-1/2 hover:cursor-pointer`}
			style={{
				top: link.position.top,
				left: link.position.left,
			}}
			nativeButton={false}
			render={
				link.href ? (
					<Link href={link.href}>
						<Icon className="size-6" />
						<span className="font-semibold text-sm">
							{link.title}
						</span>
					</Link>
				) : (
					<div>
						<Icon className="size-6" />
						<span className="font-semibold text-sm">
							{link.title}
						</span>
					</div>
				)
			}
		/>
	);
}
