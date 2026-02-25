import { getTranslations } from "next-intl/server";
import { Section } from "@/components/layout/section";
import { SubSection } from "@/components/layout/sub-section";
import { SectionDescription } from "@/components/section-description";
import { SectionTitle } from "@/components/section-title";
import { certificationsData } from "@/data/certifications";
import { experienceData } from "@/data/experience";
import { CertificationCard } from "./certification-card";
import { ExperienceCard } from "./experience-card";

export async function ExperienceSection() {
	const t = await getTranslations("experience");

	return (
		<Section id="experience">
			<SubSection>
				<SectionTitle>{t("title")}</SectionTitle>
				<SectionDescription>{t("description")}</SectionDescription>
			</SubSection>

			<SubSection>
				{experienceData.map((exp, index) => (
					<ExperienceCard key={`${exp.name}-${index}`} experience={exp} />
				))}
			</SubSection>

			<SubSection>
				<h2 className="text-2xl font-bold w-full">{t("certifications")}</h2>
				<div className="flex flex-col gap-3 w-full">
					{certificationsData.map((cert) => (
						<CertificationCard key={cert.name} certification={cert} />
					))}
				</div>
			</SubSection>
		</Section>
	);
}
