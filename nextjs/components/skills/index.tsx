import { Section } from "@/components/layout/section";
import { SubSection } from "@/components/layout/sub-section";
import { SectionTitle } from "@/components/section-title";
import { skillsData } from "@/data/skills";
import { SkillCard } from "./skill-card";
import { ItemGroup } from "@/components/ui/item";

export function SkillsSection() {
	return (
		<Section id="skills">
			<SubSection className="space-y-8 max-w-4xl mx-auto text-center">
				<SectionTitle>Skills & Stack</SectionTitle>
				<p className="text-xl text-muted-foreground">
					Technologies and tools I work with
				</p>
			</SubSection>

			<SubSection className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto w-full">
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
			</SubSection>
		</Section>
	);
}
