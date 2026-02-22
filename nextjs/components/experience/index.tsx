import { ExperienceCard } from "./experience-card";
import { CertificationCard } from "./certification-card";
import { experienceData } from "@/data/experience";
import { certificationsData } from "@/data/certifications";

export function ExperienceSection() {
	return (
		<div
			id="experience"
			className="min-h-screen flex flex-col gap-16 items-center pt-48"
		>
			<section className="space-y-8 max-w-3xl mx-auto text-center">
				<h1 className="text-5xl font-bold tracking-tight">
					Experience
				</h1>
				<p className="text-xl text-muted-foreground">
					My professional journey
				</p>
			</section>

			<section className="flex flex-col gap-8 max-w-3xl mx-auto w-full">
				{experienceData.map((exp, index) => (
					<ExperienceCard
						key={`${exp.name}-${index}`}
						experience={exp}
					/>
				))}
			</section>

			<section className="flex flex-col gap-8 max-w-3xl mx-auto w-full">
				<h2 className="text-2xl font-bold ">Certifications</h2>
				<div className="flex flex-col gap-3">
					{certificationsData.map((cert) => (
						<CertificationCard
							key={cert.name}
							certification={cert}
						/>
					))}
				</div>
			</section>
		</div>
	);
}
