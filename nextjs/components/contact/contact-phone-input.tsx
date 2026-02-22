"use client";

import { Check, Copy } from "lucide-react";
import {
	InputGroup,
	InputGroupAddon,
	InputGroupButton,
	InputGroupInput,
} from "@/components/ui/input-group";
import { Field, FieldLabel } from "@/components/ui/field";
import { Button } from "@/components/ui/button";
import { useClipboard } from "@/hooks/use-clipboard";
import Link from "next/link";

const PHONE = "+33 6 98 10 57 84";

export function ContactPhoneInput() {
	const { copied, copy } = useClipboard();

	return (
		<div className="space-y-4">
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

			<div className="grid grid-cols-3 gap-4 w-full">
				<Button
					variant="default"
					className="w-full col-start-3"
					render={<Link href={`tel:${PHONE}`} className="w-full" />}
				>
					Call
				</Button>
			</div>
		</div>
	);
}
