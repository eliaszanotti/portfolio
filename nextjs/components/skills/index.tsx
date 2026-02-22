import { Section } from "@/components/layout/section";
import { SubSection } from "@/components/layout/sub-section";
import { SectionTitle } from "@/components/section-title";
import { SectionDescription } from "@/components/section-description";
import { skillsData } from "@/data/skills";
import { SkillCard } from "./skill-card";
import { ItemGroup } from "@/components/ui/item";

export function SkillsSection() {
	return (
		<Section id="skills">
			<SubSection>
				<SectionTitle>Skills & Stack</SectionTitle>
				<SectionDescription>Technologies and tools I work with</SectionDescription>
			</SubSection>

			<SubSection>
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
