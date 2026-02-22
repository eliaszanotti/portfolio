import Link from "next/link";

import { Button } from "@/components/ui/button";
import type { Contact } from "@/data/contact";

type ContactCardProps = {
	contact: Contact;
};

export function ContactCard({ contact }: ContactCardProps) {
	const Icon = contact.icon;
	const isDefault = contact.variant === "default";

	return (
		<Button
			variant={contact.variant}
			className="h-48 flex-col gap-3 py-6 px-8 hover:bg-primary hover:text-primary-foreground transition-all"
			render={
				<Link
					href={contact.href}
					target="_blank"
					rel="noopener noreferrer"
				/>
			}
		>
			<Icon className={`size-8 ${isDefault ? contact.color : contact.color}`} />
			<div className="flex flex-col items-center gap-1">
				<span className="font-semibold">{contact.name}</span>
				<span className={`text-sm ${isDefault ? "text-primary-foreground/80" : "text-muted-foreground group-hover:text-primary-foreground/80"}`}>
					{contact.value}
				</span>
			</div>
		</Button>
	);
}
