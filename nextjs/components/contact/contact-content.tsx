import { getContact } from "@/data/get-contact";
import { ContactCard } from "./contact-card";
import type { Locale } from "@/lib/i18n/routing";

type ContactContentProps = {
	locale: Locale;
};

export async function ContactContent({ locale }: ContactContentProps) {
	const contactData = await getContact(locale);

	return (
		<div className="grid grid-cols-3 gap-8 w-full">
			{contactData.map((contact) => (
				<ContactCard key={contact.id} contact={contact} />
			))}
		</div>
	);
}
