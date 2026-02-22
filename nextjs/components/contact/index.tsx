import { Section } from "@/components/layout/section";
import { SubSection } from "@/components/layout/sub-section";
import { SectionTitle } from "@/components/section-title";
import { SectionDescription } from "@/components/section-description";
import { ContactCard } from "@/components/contact/contact-card";
import { contactData } from "@/data/contact";

export function ContactSection() {
	return (
		<Section id="contact">
			<SubSection>
				<SectionTitle>Get in Touch</SectionTitle>
				<SectionDescription>
					Feel free to reach out through any of these channels
				</SectionDescription>
			</SubSection>

			<SubSection>
				{contactData.map((contact) => (
					<ContactCard key={contact.name} contact={contact} />
				))}
			</SubSection>
		</Section>
	);
}
