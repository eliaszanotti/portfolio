import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import type { ReactNode } from "react";
import type { Locale } from "@/lib/i18n/routing";
import { locales } from "@/lib/i18n/routing";
import "@/app/globals.css";
import { monoFont, sansFont, serifFont } from "@/app/fonts";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import { Suspense } from "react";
import Loading from "../loading";

type Props = {
	children: ReactNode;
	params: Promise<{ locale: string }>;
};

type LocaleContentProps = {
	children: ReactNode;
	locale: string;
};

async function LocaleContent({ children, locale }: LocaleContentProps) {
	const messages = await getMessages();

	return (
		<NextIntlClientProvider messages={messages}>
			<main>
				<Header />
				<div className="min-h-screen">{children}</div>
				<Footer />
			</main>
		</NextIntlClientProvider>
	);
}

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

	return (
		<html
			lang={locale}
			suppressHydrationWarning
			className={`font-sans ${serifFont.variable} ${monoFont.variable} ${sansFont.variable}`}
		>
			<body>
				<ThemeProvider attribute="class" defaultTheme="dark">
					<Suspense fallback={<Loading />}>
						<LocaleContent locale={locale}>{children}</LocaleContent>
					</Suspense>
				</ThemeProvider>
			</body>
		</html>
	);
}
