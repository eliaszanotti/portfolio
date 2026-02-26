import Link from "next/link";

import { Button } from "@/components/ui/button";
import type { NavLink } from "@/payload-types";
import { iconMap } from "@/lib/icons";

type ContactCardProps = {
	contact: NavLink;
};

export function ContactCard({ contact }: ContactCardProps) {
	const Icon = iconMap[contact.icon];

	return (
		<Button
			variant="outline"
			className="h-32"
			render={
				<Link
					href={contact.href || "#"}
					target="_blank"
					rel="noopener noreferrer"
					className="flex flex-col gap-2"
				>
					<Icon className="size-8" />
					<span className="font-semibold">{contact.title}</span>
				</Link>
			}
			nativeButton={false}
		/>
	);
}
