import { getTranslations } from "next-intl/server";
import { Section } from "@/components/layout/section";
import { SubSection } from "@/components/layout/sub-section";
import { SectionDescription } from "@/components/section-description";
import { SectionTitle } from "@/components/section-title";
import { ItemGroup } from "@/components/ui/item";
import { skillsData } from "@/data/skills";
import { SkillCard } from "./skill-card";

export async function SkillsSection() {
	const t = await getTranslations("skills");

	return (
		<Section id="skills">
			<SubSection>
				<SectionTitle>{t("title")}</SectionTitle>
				<SectionDescription>{t("description")}</SectionDescription>
			</SubSection>

			<SubSection>
				<div className="grid sm:grid-cols-3 gap-8 w-full">
					{skillsData.map((category) => (
						<div key={category.title} className="flex flex-col gap-4">
							<h2 className="text-lg text-muted-foreground">
								{category.title}
							</h2>
							<ItemGroup>
								{category.skills.map((skill) => (
									<SkillCard key={skill.name} skill={skill} />
								))}
							</ItemGroup>
						</div>
					))}
				</div>
			</SubSection>
		</Section>
	);
}
