import {
	Item,
	ItemContent,
	ItemTitle,
	ItemDescription,
	ItemActions,
	ItemMedia,
} from "@/components/ui/item";
import type { Experience } from "@/data/experience";
import { Badge } from "@/components/ui/badge";

type ExperienceCardProps = {
	experience: Experience;
};

export function ExperienceCard({ experience }: ExperienceCardProps) {
	const Icon = experience.icon;

	return (
		<Item variant="outline">
			<ItemMedia
				variant="image"
				className="size-12 rounded-full bg-primary/10"
			>
				<Icon className="text-primary" />
			</ItemMedia>
			<ItemContent>
				<ItemTitle>{experience.name}</ItemTitle>
				<ItemDescription>{experience.fullName}</ItemDescription>
				<ItemDescription>{experience.description}</ItemDescription>
				<ItemDescription>{experience.location}</ItemDescription>
			</ItemContent>
			<ItemActions>
				<Badge variant="secondary">{experience.years}</Badge>
			</ItemActions>
		</Item>
	);
}
