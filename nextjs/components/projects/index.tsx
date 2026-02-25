import { getTranslations } from "next-intl/server";
import { Section } from "@/components/layout/section";
import { SubSection } from "@/components/layout/sub-section";
import { SectionTitle } from "@/components/section-title";
import { projectsData } from "@/data/projects";
import { SectionDescription } from "../section-description";
import { ContactCard } from "./contact-card";
import { ProjectCard } from "./project-card";

export async function ProjectsSection() {
	const t = await getTranslations("projects");

	return (
		<Section id="projects">
			<SubSection>
				<SectionTitle>{t("title")}</SectionTitle>
				<SectionDescription>{t("description")}</SectionDescription>
			</SubSection>

			<SubSection>
				<div className="grid grid-cols-2 gap-8 w-full">
					{projectsData.map((project) => (
						<ProjectCard key={project.title} project={project} />
					))}
					<ContactCard />
				</div>
			</SubSection>
		</Section>
	);
}
