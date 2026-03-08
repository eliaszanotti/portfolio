import { SubSection } from "@/components/layout/sub-section";
import { ItemGroup } from "@/components/ui/item";
import { getSkillCategories } from "@/data/get-skill-categories";
import { SkillCard } from "./skill-card";
import type { Locale } from "@/lib/i18n/routing";
import type { Skill } from "@/payload-types";

type SkillsContentProps = {
	locale: Locale;
};

export async function SkillsContent({ locale }: SkillsContentProps) {
	const categories = await getSkillCategories(locale);

	return (
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
	);
}
