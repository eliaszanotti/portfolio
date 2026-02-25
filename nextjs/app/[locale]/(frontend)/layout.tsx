import type { ReactNode } from "react";
import type { Locale } from "@/lib/i18n/routing";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { locales } from "@/lib/i18n/routing";
import "@/app/globals.css";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import { monoFont, sansFont, serifFont } from "@/app/fonts";
import { LenisProvider } from "@/components/lenis-provider";

type Props = {
	children: ReactNode;
	params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
	return locales.map((locale) => ({ locale }));
}

export async function generateMetadata(props: Props) {
	const { locale } = await props.params;
	const t = await getTranslations({ locale, namespace: "" });

	return {
		description: t("header.role"),
		title: `${t("header.name")} - Portfolio`,
	};
}

export default async function LocaleLayout(props: Props) {
	const { children, params } = props;
	const { locale } = await params;

	if (!locales.includes(locale as Locale)) {
		notFound();
	}

	const messages = await getMessages();

	return (
		<html
			lang={locale}
			suppressHydrationWarning
			className={`font-sans ${serifFont.variable} ${monoFont.variable} ${sansFont.variable}`}
		>
			<body>
				<ThemeProvider attribute="class" defaultTheme="dark">
					<LenisProvider>
						<NextIntlClientProvider messages={messages}>
							<main>
								<Header />
								<div className="min-h-screen">{children}</div>
								<Footer />
							</main>
						</NextIntlClientProvider>
					</LenisProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
