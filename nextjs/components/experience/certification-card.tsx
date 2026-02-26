import { Badge } from "@/components/ui/badge";
import { Item, ItemContent, ItemMedia, ItemTitle } from "@/components/ui/item";
import type { Certification } from "@/payload-types";
import { iconMap } from "@/lib/icons";

type CertificationCardProps = {
	certification: Certification;
};

export function CertificationCard({ certification }: CertificationCardProps) {
	const Icon = iconMap[certification.icon];

	return (
		<Item variant="outline">
			<ItemMedia variant="image" className="size-12 rounded-full bg-primary/10">
				<Icon className="text-primary" />
			</ItemMedia>
			<ItemContent>
				<ItemTitle>{certification.name}</ItemTitle>
			</ItemContent>
			<Badge variant="secondary">{certification.year}</Badge>
		</Item>
	);
}
