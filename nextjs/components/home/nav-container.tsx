import { ButtonLinkClient } from "@/components/home/button-link-client";
import { DialogLink } from "@/components/home/dialog-link";
import { getCachedNavLinks } from "@/data/get-nav-links";
import { ButtonLink } from "./button-link";
import { getLocale } from "next-intl/server";
import type { Locale } from "@/lib/i18n/routing";

export async function NavContainer() {
	const locale = (await getLocale()) as Locale;
	const navLinks = await getCachedNavLinks(locale);

	return (
		<div className="relative w-full max-w-3xl h-100">
			{navLinks.map((item, index) => {
				if (item.isContactDialog) {
					return (
						<DialogLink key={item.id}>
							<ButtonLink link={item} index={index} />
						</DialogLink>
					);
				}
				return <ButtonLinkClient key={item.id} link={item} index={index} />;
			})}
		</div>
	);
}
