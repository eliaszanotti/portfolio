import { getTranslations, getLocale } from "next-intl/server";
import { Section } from "@/components/layout/section";
import { SubSection } from "@/components/layout/sub-section";
import { SectionDescription } from "@/components/section-description";
import { SectionTitle } from "@/components/section-title";
import { Suspense } from "react";
import { AboutSkeleton } from "./about-skeleton";
import { AboutContent } from "./about-content";
import type { Locale } from "@/lib/i18n/routing";

export async function AboutSection() {
	const t = await getTranslations("about");
	const locale = (await getLocale()) as Locale;

	return (
		<Section id="about">
			<SubSection>
				<SectionTitle>{t("title")}</SectionTitle>
				<SectionDescription>{t("description")}</SectionDescription>
			</SubSection>

			<SubSection>
				<Suspense fallback={<AboutSkeleton />}>
					<AboutContent locale={locale} />
				</Suspense>
			</SubSection>
		</Section>
	);
}
