"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";
import {
	InputGroup,
	InputGroupAddon,
	InputGroupButton,
	InputGroupInput,
} from "@/components/ui/input-group";
import { Field, FieldLabel, FieldSet } from "./ui/field";

export function DialogContentInner() {
	const [copied, setCopied] = useState<"email" | "phone" | null>(null);

	const copyToClipboard = async (text: string, type: "email" | "phone") => {
		await navigator.clipboard.writeText(text);
		setCopied(type);
		setTimeout(() => setCopied(null), 2000);
	};

	return (
		<FieldSet>
			<Field>
				<FieldLabel htmlFor="email">Email</FieldLabel>
				<InputGroup>
					<InputGroupInput
						id="email"
						type="email"
						value="contact@eliaszanotti.com"
						readOnly
					/>
					<InputGroupAddon align="inline-end">
						<InputGroupButton
							size="icon-xs"
							onClick={() =>
								copyToClipboard(
									"contact@eliaszanotti.com",
									"email",
								)
							}
						>
							{copied === "email" ? <Check /> : <Copy />}
						</InputGroupButton>
					</InputGroupAddon>
				</InputGroup>
			</Field>
			<Field>
				<FieldLabel htmlFor="phone">Phone</FieldLabel>
				<InputGroup>
					<InputGroupInput
						id="phone"
						type="tel"
						value="+33 6 98 10 57 84"
						readOnly
					/>
					<InputGroupAddon align="inline-end">
						<InputGroupButton
							size="icon-xs"
							onClick={() =>
								copyToClipboard("+33 6 98 10 57 84", "phone")
							}
						>
							{copied === "phone" ? <Check /> : <Copy />}
						</InputGroupButton>
					</InputGroupAddon>
				</InputGroup>
			</Field>
		</FieldSet>
	);
}
