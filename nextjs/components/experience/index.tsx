import { ExperienceCard } from "./experience-card";
import { experienceData } from "@/data/experience";
import { certificationsData } from "@/data/certifications";
import { Badge } from "@/components/ui/badge";

export function ExperienceSection() {
	return (
		<div
			id="experience"
			className="min-h-screen flex flex-col gap-16 items-center pt-48"
		>
			<section className="space-y-8 px-8 max-w-3xl mx-auto text-center">
				<h1 className="text-5xl font-bold tracking-tight">Experience</h1>
				<p className="text-xl text-muted-foreground">
					My professional journey
				</p>
			</section>

			<section className="flex flex-col gap-6 px-8 max-w-3xl mx-auto w-full">
				{experienceData.map((exp, index) => (
					<ExperienceCard
						key={`${exp.name}-${index}`}
						experience={exp}
					/>
				))}
			</section>

			<section className="px-8 max-w-3xl mx-auto w-full">
				<h2 className="text-2xl font-semibold mb-4">Certifications</h2>
				<div className="flex flex-wrap gap-2">
					{certificationsData.map((cert) => (
						<Badge
							key={cert.name}
							variant="secondary"
							className="text-sm px-3 py-1"
						>
							{cert.name} ({cert.year})
						</Badge>
					))}
				</div>
			</section>
		</div>
	);
}
