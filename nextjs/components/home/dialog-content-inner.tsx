import { FieldSet } from "@/components/ui/field";
import { ContactEmailInput } from "@/components/contact/contact-email-input";
import { ContactPhoneInput } from "@/components/contact/contact-phone-input";

export function DialogContentInner() {
	return (
		<FieldSet className="w-full">
			<ContactEmailInput />
			<ContactPhoneInput />
		</FieldSet>
	);
}
