import { SubSection } from "@/components/layout/sub-section";
import { getCertifications } from "@/data/get-certifications";
import { getExperience } from "@/data/get-experience";
import { CertificationCard } from "./certification-card";
import { ExperienceCard } from "./experience-card";
import type { Locale } from "@/lib/i18n/routing";

type ExperienceContentProps = {
	locale: Locale;
	certificationsTitle: string;
};

export async function ExperienceContent({ locale, certificationsTitle }: ExperienceContentProps) {
	const [experienceData, certificationsData] = await Promise.all([
		getExperience(locale),
		getCertifications(locale),
	]);

	return (
		<>
			<SubSection>
				{experienceData.map((exp) => (
					<ExperienceCard key={exp.id} experience={exp} />
				))}
			</SubSection>

			<SubSection>
				<h2 className="text-2xl font-bold w-full">{certificationsTitle}</h2>
				<div className="flex flex-col gap-3 w-full">
					{certificationsData.map((cert) => (
						<CertificationCard key={cert.id} certification={cert} />
					))}
				</div>
			</SubSection>
		</>
	);
}
