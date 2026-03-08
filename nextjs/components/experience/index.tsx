import { getTranslations, getLocale } from "next-intl/server";
import { Section } from "@/components/layout/section";
import { SubSection } from "@/components/layout/sub-section";
import { SectionDescription } from "@/components/section-description";
import { SectionTitle } from "@/components/section-title";
import { getCertifications } from "@/data/get-certifications";
import { getExperience } from "@/data/get-experience";
import { CertificationCard } from "./certification-card";
import { ExperienceCard } from "./experience-card";
import { Suspense } from "react";
import { ExperienceSkeleton } from "./experience-skeleton";
import type { Locale } from "@/lib/i18n/routing";

export async function ExperienceSection() {
	const t = await getTranslations("experience");
	const locale = (await getLocale()) as Locale;
	const [experienceData, certificationsData] = await Promise.all([
		getExperience(locale),
		getCertifications(locale),
	]);

	return (
		<Section id="experience">
			<SubSection>
				<SectionTitle>{t("title")}</SectionTitle>
				<SectionDescription>{t("description")}</SectionDescription>
			</SubSection>

			<Suspense fallback={<ExperienceSkeleton />}>
				<SubSection>
					{experienceData.map((exp) => (
						<ExperienceCard key={exp.id} experience={exp} />
					))}
				</SubSection>

				<SubSection>
					<h2 className="text-2xl font-bold w-full">{t("certifications")}</h2>
					<div className="flex flex-col gap-3 w-full">
						{certificationsData.map((cert) => (
							<CertificationCard key={cert.id} certification={cert} />
						))}
					</div>
				</SubSection>
			</Suspense>
		</Section>
	);
}
