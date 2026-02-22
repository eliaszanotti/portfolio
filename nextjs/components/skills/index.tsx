import { skillsData } from "@/data/skills";
import { SkillCard } from "./skill-card";
import { ItemGroup } from "@/components/ui/item";

export function SkillsSection() {
	return (
		<div
			id="skills"
			className="min-h-screen flex flex-col gap-16 items-center pt-48"
		>
			<section className="space-y-8 max-w-4xl mx-auto text-center">
				<h1 className="text-5xl font-bold tracking-tight">
					Skills & Stack
				</h1>
				<p className="text-xl text-muted-foreground">
					Technologies and tools I work with
				</p>
			</section>

			<section className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto w-full">
				{skillsData.map((category) => (
					<div key={category.title} className="flex flex-col gap-4">
						<h2 className="text-2xl font-semibold">
							{category.title}
						</h2>
						<ItemGroup>
							{category.skills.map((skill) => (
								<SkillCard key={skill.name} skill={skill} />
							))}
						</ItemGroup>
					</div>
				))}
			</section>
		</div>
	);
}
