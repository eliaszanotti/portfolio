import { SubSection } from "@/components/layout/sub-section";
import { getProjects } from "@/data/get-projects";
import { ContactCard } from "./contact-card";
import { ProjectCard } from "./project-card";
import type { Locale } from "@/lib/i18n/routing";

type ProjectsContentProps = {
	locale: Locale;
};

export async function ProjectsContent({ locale }: ProjectsContentProps) {
	const projectsData = await getProjects(locale);

	return (
		<SubSection>
			<div className="grid grid-cols-2 gap-8 w-full">
				{projectsData.map((project) => (
					<ProjectCard key={project.id} project={project} />
				))}
				<ContactCard />
			</div>
		</SubSection>
	);
}
