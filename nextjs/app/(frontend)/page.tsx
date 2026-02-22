import { HomeSection } from "@/components/home";
import { SkillsSection } from "@/components/skills";
import { ProjectsSection } from "@/components/projects";
import { ExperienceSection } from "@/components/experience";
import { AboutSection } from "@/components/about";
import { ContactSection } from "@/components/contact";

export default function HomePage() {
	return (
		<div className="container mx-auto space-y-16">
			<HomeSection />
			<SkillsSection />
			<ProjectsSection />
			<ExperienceSection />
			<AboutSection />
			<ContactSection />
		</div>
	);
}
