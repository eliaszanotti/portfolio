import Link from "next/link";
import { getTranslations } from "next-intl/server";
import IconFrance from "@/components/icon/france";
import { LanguageSelector } from "@/components/language-selector";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

export default async function Header() {
	const t = await getTranslations("header");

	return (
		<div className="w-full h-24 sm:h-32 md:h-48 flex items-center px-4 sm:px-8 md:px-16 fixed top-0 z-50 ">
			<div className="p-2 sm:p-4 md:p-8 backdrop-blur-md w-full grid items-center grid-cols-[1fr_auto_1fr] rounded-full">
				<nav className="flex items-center gap-4">
					<Button
						variant="ghost"
						size="lg"
						nativeButton={false}
						render={
							<Link href="/" className="flex gap-4">
								<IconFrance /> {t("name")}
							</Link>
						}
					/>
				</nav>
				<nav className="flex items-center gap-4">
					<p className="uppercase text-sm">{t("role")}</p>
				</nav>
				<nav className="flex items-center justify-end gap-4">
					<LanguageSelector />
					<ThemeToggle />
				</nav>
			</div>
		</div>
	);
}
