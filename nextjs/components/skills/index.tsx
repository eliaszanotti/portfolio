import { getTranslations, getLocale } from "next-intl/server";
import { Section } from "@/components/layout/section";
import { SubSection } from "@/components/layout/sub-section";
import { SectionDescription } from "@/components/section-description";
import { SectionTitle } from "@/components/section-title";
import { ItemGroup } from "@/components/ui/item";
import { getCachedSkillCategories } from "@/data/get-skill-categories";
import { SkillCard } from "./skill-card";
import type { Locale } from "@/lib/i18n/routing";
import type { Skill } from "@/payload-types";

export async function SkillsSection() {
	const t = await getTranslations("skills");
	const locale = (await getLocale()) as Locale;
	const categories = await getCachedSkillCategories(locale);

	console.log("Fetched categories:", categories); // Debug log to check the fetched categories
	console.log("Categories:", categories[0].skills); // Debug log to check the structure of categories and skills

	return (
		<Section id="skills">
			<SubSection>
				<SectionTitle>{t("title")}</SectionTitle>
				<SectionDescription>{t("description")}</SectionDescription>
			</SubSection>

			<SubSection>
				<div className="grid sm:grid-cols-3 gap-8 w-full">
					{categories.map((category) => (
						<div key={category.id} className="flex flex-col gap-4">
							<h2 className="text-lg text-muted-foreground">
								{category.title}
							</h2>
							<ItemGroup>
								{(category.skills?.docs as Skill[])?.map((skill) => (
									<SkillCard key={skill.id} skill={skill} />
								))}
							</ItemGroup>
						</div>
					))}
				</div>
			</SubSection>
		</Section>
	);
}
