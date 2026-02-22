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

const EMAIL = "zanotti.elias@gmail.com";

export function ContactEmailInput() {
	const { copied, copy } = useClipboard();

	return (
		<Field>
			<FieldLabel htmlFor="email">My Email</FieldLabel>
			<InputGroup>
				<InputGroupInput
					id="email"
					type="email"
					value={EMAIL}
					readOnly
				/>
				<InputGroupAddon align="inline-end">
					<InputGroupButton onClick={() => copy(EMAIL)}>
						{copied ? <Check /> : <Copy />}
					</InputGroupButton>
				</InputGroupAddon>
			</InputGroup>
		</Field>
	);
}
