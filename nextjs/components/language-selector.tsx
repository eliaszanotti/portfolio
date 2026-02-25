"use client";

import { useLocale } from "next-intl";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { usePathname, useRouter } from "@/lib/i18n/navigation";
import { type Locale, locales } from "@/lib/i18n/routing";

const localeFlags: Record<Locale, string> = {
	en: "🇬🇧",
	fr: "🇫🇷",
};

export function LanguageSelector() {
	const locale = useLocale();
	const router = useRouter();
	const pathname = usePathname();

	const switchLocale = (newLocale: Locale) => {
		router.replace(pathname, { locale: newLocale });
	};

	return (
		<ButtonGroup>
			{locales.map((loc) => {
				const isActive = locale === loc;
				return (
					<Button
						key={loc}
						variant={isActive ? "default" : "ghost"}
						nativeButton={true}
						onClick={() => switchLocale(loc)}
						className="p-2"
					>
						{localeFlags[loc]}
					</Button>
				);
			})}
		</ButtonGroup>
	);
}
