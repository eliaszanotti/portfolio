import Link from "next/link";

import { Button } from "@/components/ui/button";
import type { Contact } from "@/data/contact";

type ContactCardProps = {
	contact: Contact;
};

export function ContactCard({ contact }: ContactCardProps) {
	const Icon = contact.icon;

	return (
		<Button
			variant="outline"
			className="h-32"
			render={
				<Link
					href={contact.href}
					target="_blank"
					rel="noopener noreferrer"
					className="flex flex-col gap-2"
				>
					<Icon className="size-8" />
					<span className="font-semibold">{contact.name}</span>
					<span>{contact.value}</span>
				</Link>
			}
			nativeButton={false}
		/>
	);
}
