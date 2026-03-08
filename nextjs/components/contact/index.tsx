import { getTranslations, getLocale } from "next-intl/server";
import { ContactCard } from "@/components/contact/contact-card";
import { Section } from "@/components/layout/section";
import { SubSection } from "@/components/layout/sub-section";
import { SectionDescription } from "@/components/section-description";
import { SectionTitle } from "@/components/section-title";
import { getContact } from "@/data/get-contact";
import { ContactEmailInput } from "./contact-email-input";
import { ContactPhoneInput } from "./contact-phone-input";
import { Suspense } from "react";
import { ContactSkeleton } from "./contact-skeleton";
import type { Locale } from "@/lib/i18n/routing";

export async function ContactSection() {
	const t = await getTranslations("contact");
	const locale = (await getLocale()) as Locale;
	const contactData = await getContact(locale);

	return (
		<Section id="contact">
			<SubSection>
				<SectionTitle>{t("title")}</SectionTitle>
				<SectionDescription>{t("description")}</SectionDescription>
			</SubSection>

			<SubSection>
				<div className="grid md:grid-cols-2 gap-8 w-full">
					<ContactEmailInput />
					<ContactPhoneInput />
				</div>
			</SubSection>

			<Suspense fallback={<ContactSkeleton />}>
				<SubSection>
					<div className="grid grid-cols-3 gap-8 w-full">
						{contactData.map((contact) => (
							<ContactCard key={contact.id} contact={contact} />
						))}
					</div>
				</SubSection>
			</Suspense>
		</Section>
	);
}
