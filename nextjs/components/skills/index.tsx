import { getTranslations, getLocale } from "next-intl/server";
import { Section } from "@/components/layout/section";
import { SubSection } from "@/components/layout/sub-section";
import { SectionDescription } from "@/components/section-description";
import { SectionTitle } from "@/components/section-title";
import { Suspense } from "react";
import { SkillsSkeleton } from "./skills-skeleton";
import { SkillsContent } from "./skills-content";
import type { Locale } from "@/lib/i18n/routing";

export async function SkillsSection() {
	const t = await getTranslations("skills");
	const locale = (await getLocale()) as Locale;

	return (
		<Section id="skills">
			<SubSection>
				<SectionTitle>{t("title")}</SectionTitle>
				<SectionDescription>{t("description")}</SectionDescription>
			</SubSection>

			<Suspense fallback={<SkillsSkeleton />}>
				<SkillsContent locale={locale} />
			</Suspense>
		</Section>
	);
}
