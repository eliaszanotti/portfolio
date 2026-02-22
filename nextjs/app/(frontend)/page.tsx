import { HomeSection } from "@/components/home";
import { SkillsSection } from "@/components/skills";
import { ExperienceSection } from "@/components/experience";
import { AboutSection } from "@/components/about";
import { ProjectsSection } from "@/components/projects";
import { ContactSection } from "@/components/contact";

export default function HomePage() {
	return (
		<div className="container mx-auto space-y-16">
			<HomeSection />
			<SkillsSection />
			<ExperienceSection />
			<AboutSection />
			<ProjectsSection />
			<ContactSection />
		</div>
	);
}
