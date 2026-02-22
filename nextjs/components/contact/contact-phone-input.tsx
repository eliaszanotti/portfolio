"use client";

import { Check, Copy } from "lucide-react";
import {
	InputGroup,
	InputGroupAddon,
	InputGroupButton,
	InputGroupInput,
} from "@/components/ui/input-group";
import { Field, FieldLabel } from "@/components/ui/field";
import { useClipboard } from "@/hooks/use-clipboard";

const PHONE = "+33 6 98 10 57 84";

export function ContactPhoneInput() {
	const { copied, copy } = useClipboard();

	return (
		<Field>
			<FieldLabel htmlFor="phone">My Phone</FieldLabel>
			<InputGroup>
				<InputGroupInput
					id="phone"
					type="tel"
					value={PHONE}
					readOnly
				/>
				<InputGroupAddon align="inline-end">
					<InputGroupButton onClick={() => copy(PHONE)}>
						{copied ? <Check /> : <Copy />}
					</InputGroupButton>
				</InputGroupAddon>
			</InputGroup>
		</Field>
	);
}
