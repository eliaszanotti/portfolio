import { getTranslations, getLocale } from "next-intl/server";
import { Section } from "@/components/layout/section";
import { SubSection } from "@/components/layout/sub-section";
import { SectionTitle } from "@/components/section-title";
import { SectionDescription } from "../section-description";
import { Suspense } from "react";
import { ProjectsSkeleton } from "./projects-skeleton";
import { ProjectsContent } from "./projects-content";
import type { Locale } from "@/lib/i18n/routing";

export async function ProjectsSection() {
	const t = await getTranslations("projects");
	const locale = (await getLocale()) as Locale;

	return (
		<Section id="projects">
			<SubSection>
				<SectionTitle>{t("title")}</SectionTitle>
				<SectionDescription>{t("description")}</SectionDescription>
			</SubSection>

			<Suspense fallback={<ProjectsSkeleton />}>
				<ProjectsContent locale={locale} />
			</Suspense>
		</Section>
	);
}
