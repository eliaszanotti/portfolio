import {
	Item,
	ItemContent,
	ItemTitle,
	ItemActions,
} from "@/components/ui/item";
import type { Skill } from "@/data/skills";
import { LevelDots } from "./level-dots";

type SkillCardProps = {
	skill: Skill;
};

export function SkillCard({ skill }: SkillCardProps) {
	return (
		<Item variant="outline">
			<ItemContent>
				<ItemTitle>{skill.name}</ItemTitle>
			</ItemContent>
			<ItemActions>
				<LevelDots level={skill.level} />
			</ItemActions>
		</Item>
	);
}
