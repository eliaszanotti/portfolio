"use client";

import { useTranslations } from "next-intl";
import { Check, Copy } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Field, FieldLabel } from "@/components/ui/field";
import {
	InputGroup,
	InputGroupAddon,
	InputGroupButton,
	InputGroupInput,
} from "@/components/ui/input-group";
import { useClipboard } from "@/hooks/use-clipboard";

const EMAIL = "zanotti.elias@gmail.com";

export function ContactEmailInput() {
	const { copied, copy } = useClipboard();
	const t = useTranslations("contact.email");

	return (
		<div className="space-y-4">
			<Field>
				<FieldLabel htmlFor="email">{t("label")}</FieldLabel>
				<InputGroup>
					<InputGroupInput id="email" type="email" value={EMAIL} readOnly />
					<InputGroupAddon align="inline-end">
						<InputGroupButton onClick={() => copy(EMAIL)}>
							{copied ? <Check /> : <Copy />}
						</InputGroupButton>
					</InputGroupAddon>
				</InputGroup>
			</Field>

			<div className="grid grid-cols-3 gap-4 w-full">
				<Button
					variant="outline"
					render={
						<Link
							href={`https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}`}
							target="_blank"
							rel="noopener noreferrer"
							className="w-full"
						/>
					}
					nativeButton={false}
				>
					{t("gmail")}
				</Button>
				<Button
					variant="outline"
					render={
						<Link
							href={`https://outlook.live.com/owa/?path=/mail/action/compose&to=${EMAIL}`}
							target="_blank"
							rel="noopener noreferrer"
							className="w-full"
						/>
					}
					nativeButton={false}
				>
					{t("outlook")}
				</Button>
				<Button
					render={<Link href={`mailto:${EMAIL}`} className="w-full" />}
					nativeButton={false}
				>
					{t("mail")}
				</Button>
			</div>
		</div>
	);
}
