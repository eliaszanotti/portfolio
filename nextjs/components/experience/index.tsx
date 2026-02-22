import { Section } from "@/components/layout/section";
import { SubSection } from "@/components/layout/sub-section";
import { SectionTitle } from "@/components/section-title";
import { SectionDescription } from "@/components/section-description";
import { ExperienceCard } from "./experience-card";
import { CertificationCard } from "./certification-card";
import { experienceData } from "@/data/experience";
import { certificationsData } from "@/data/certifications";

export function ExperienceSection() {
	return (
		<Section id="experience">
			<SubSection>
				<SectionTitle>Experience</SectionTitle>
				<SectionDescription>My professional journey</SectionDescription>
			</SubSection>

			<SubSection>
				{experienceData.map((exp, index) => (
					<ExperienceCard
						key={`${exp.name}-${index}`}
						experience={exp}
					/>
				))}
			</SubSection>

			<SubSection>
				<h2 className="text-2xl font-bold ">Certifications</h2>
				<div className="flex flex-col gap-3">
					{certificationsData.map((cert) => (
						<CertificationCard
							key={cert.name}
							certification={cert}
						/>
					))}
				</div>
			</SubSection>
		</Section>
	);
}
