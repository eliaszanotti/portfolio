import { Section } from "@/components/layout/section";
import { SubSection } from "@/components/layout/sub-section";
import { SectionTitle } from "@/components/section-title";
import { SectionDescription } from "@/components/section-description";
import { ContactCard } from "@/components/contact/contact-card";
import { DialogContentInner } from "@/components/home/dialog-content-inner";
import { contactData } from "@/data/contact";
import { ContactEmailInput } from "./contact-email-input";
import { ContactPhoneInput } from "./contact-phone-input";

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
				<div className="grid grid-cols-2 gap-8 w-full">
					<ContactEmailInput />
					<ContactPhoneInput />
				</div>
			</SubSection>

			<SubSection>
				<div className="grid grid-cols-3 gap-8 w-full">
					{contactData.map((contact) => (
						<ContactCard key={contact.name} contact={contact} />
					))}
				</div>
			</SubSection>
		</Section>
	);
}
