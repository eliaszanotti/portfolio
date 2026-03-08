import { getTranslations, getLocale } from "next-intl/server";
import { Section } from "@/components/layout/section";
import { SubSection } from "@/components/layout/sub-section";
import { SectionTitle } from "@/components/section-title";
import { getProjects } from "@/data/get-projects";
import { SectionDescription } from "../section-description";
import { ContactCard } from "./contact-card";
import { ProjectCard } from "./project-card";
import { Suspense } from "react";
import { ProjectsSkeleton } from "./projects-skeleton";
import type { Locale } from "@/lib/i18n/routing";

export async function ProjectsSection() {
	const t = await getTranslations("projects");
	const locale = (await getLocale()) as Locale;
	const projectsData = await getProjects(locale);

	return (
		<Section id="projects">
			<SubSection>
				<SectionTitle>{t("title")}</SectionTitle>
				<SectionDescription>{t("description")}</SectionDescription>
			</SubSection>

			<Suspense fallback={<ProjectsSkeleton />}>
				<SubSection>
					<div className="grid grid-cols-2 gap-8 w-full">
						{projectsData.map((project) => (
							<ProjectCard key={project.id} project={project} />
						))}
						<ContactCard />
					</div>
				</SubSection>
			</Suspense>
		</Section>
	);
}
