import { Section } from "@/components/layout/section";
import { SubSection } from "@/components/layout/sub-section";
import { SectionTitle } from "@/components/section-title";
import { ProjectCard } from "./project-card";
import { projectsData } from "@/data/projects";

export function ProjectsSection() {
	return (
		<Section id="projects">
			<SubSection className="space-y-8 px-8 max-w-5xl mx-auto text-center">
				<SectionTitle>Projects</SectionTitle>
				<p className="text-xl text-muted-foreground">
					A selection of my recent work
				</p>
			</SubSection>

			<SubSection className="grid grid-cols-1 md:grid-cols-2 gap-6 px-8 max-w-5xl mx-auto w-full">
				{projectsData.map((project) => (
					<ProjectCard key={project.title} project={project} />
				))}
			</SubSection>
		</Section>
	);
}
