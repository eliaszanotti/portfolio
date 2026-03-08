import { AboutSection } from "@/components/about";
import { ContactSection } from "@/components/contact";
import { ExperienceSection } from "@/components/experience";
import { HomeSection } from "@/components/home";
import { ProjectsSection } from "@/components/projects";
import { SkillsSection } from "@/components/skills";
import { Skeleton } from "@/components/ui/skeleton";
import { Suspense } from "react";

export default function HomePage() {
	return (
		<div className="container mx-auto space-y-16 p-4 overflow-hidden">
			<Suspense fallback={<Skeleton />}>
				<HomeSection />
			</Suspense>
			<Suspense fallback={<Skeleton />}>
				<SkillsSection />
			</Suspense>
			<Suspense fallback={<Skeleton />}>
				<ProjectsSection />
			</Suspense>
			<Suspense fallback={<Skeleton />}>
				<ExperienceSection />
			</Suspense>
			<Suspense fallback={<Skeleton />}>
				<AboutSection />
			</Suspense>
			<Suspense fallback={<Skeleton />}>
				<ContactSection />
			</Suspense>
		</div>
	);
}
