import { Section } from "@/components/layout/section";
import { SubSection } from "@/components/layout/sub-section";
import { SectionTitle } from "@/components/section-title";
import { projectsData } from "@/data/projects";
import { SectionDescription } from "../section-description";
import { ContactCard } from "./contact-card";
import { ProjectCard } from "./project-card";

export function ProjectsSection() {
	return (
		<Section id="projects">
			<SubSection>
				<SectionTitle>Projects</SectionTitle>
				<SectionDescription>
					A selection of my best work, showcasing my skills and experience in
					web
				</SectionDescription>
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
