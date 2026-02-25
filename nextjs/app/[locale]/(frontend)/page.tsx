import { AboutSection } from "@/components/about";
import { ContactSection } from "@/components/contact";
import { ExperienceSection } from "@/components/experience";
import { HomeSection } from "@/components/home";
import { ProjectsSection } from "@/components/projects";
import { SkillsSection } from "@/components/skills";

export default function HomePage() {
	return (
		<div className="container mx-auto space-y-16 p-4 overflow-hidden">
			<HomeSection />
			<SkillsSection />
			<ProjectsSection />
			<ExperienceSection />
			<AboutSection />
			<ContactSection />
		</div>
	);
}
