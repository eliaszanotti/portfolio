"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ButtonContent, type ButtonLinkProps, getButtonProps } from "./button-link";

export function ButtonLinkClient({ link, index = 0 }: ButtonLinkProps) {
	const handleClick = (e: React.MouseEvent) => {
		if (link.id) {
			e.preventDefault();
			const target = document.getElementById(link.id);
			if (target) {
				target.scrollIntoView({ behavior: "smooth" });
			}
		}
	};

	const buttonProps = getButtonProps(link, index);

	return (
		<Button
			{...buttonProps}
			nativeButton={!link.href}
			onClick={!link.href ? handleClick : undefined}
			render={
				link.href ? (
					<Link href={link.href}>
						<ButtonContent link={link} />
					</Link>
				) : undefined
			}
		>
			{!link.href && <ButtonContent link={link} />}
		</Button>
	);
}
