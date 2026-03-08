import { getTranslations, getLocale } from "next-intl/server";
import { Section } from "@/components/layout/section";
import { SubSection } from "@/components/layout/sub-section";
import { SectionDescription } from "@/components/section-description";
import { SectionTitle } from "@/components/section-title";
import { Suspense } from "react";
import { ExperienceSkeleton } from "./experience-skeleton";
import { ExperienceContent } from "./experience-content";
import type { Locale } from "@/lib/i18n/routing";

export async function ExperienceSection() {
	const t = await getTranslations("experience");
	const locale = (await getLocale()) as Locale;

	return (
		<Section id="experience">
			<SubSection>
				<SectionTitle>{t("title")}</SectionTitle>
				<SectionDescription>{t("description")}</SectionDescription>
			</SubSection>

			<Suspense fallback={<ExperienceSkeleton />}>
				<ExperienceContent locale={locale} certificationsTitle={t("certifications")} />
			</Suspense>
		</Section>
	);
}
