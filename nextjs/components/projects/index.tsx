import { Section } from "@/components/layout/section";
import { SubSection } from "@/components/layout/sub-section";
import { SectionTitle } from "@/components/section-title";
import { ProjectCard } from "./project-card";
import { ContactCard } from "./contact-card";
import { projectsData } from "@/data/projects";

export function ProjectsSection() {
	return (
		<Section id="projects">
			<SubSection>
				<SectionTitle>Projects</SectionTitle>
				<p className="text-xl text-left text-muted-foreground">
					A selection of my best work, showcasing my skills and
					experience in web
				</p>
			</SubSection>

			<SubSection>
				{projectsData.map((project) => (
					<ProjectCard key={project.title} project={project} />
				))}
				<ContactCard />
			</SubSection>
		</Section>
	);
}
