import {
	Item,
	ItemContent,
	ItemTitle,
	ItemMedia,
} from "@/components/ui/item";
import type { Certification } from "@/data/certifications";
import { Badge } from "@/components/ui/badge";

type CertificationCardProps = {
	certification: Certification;
};

export function CertificationCard({ certification }: CertificationCardProps) {
	const Icon = certification.icon;

	return (
		<Item variant="outline">
			<ItemMedia variant="icon">
				<Icon className="size-4 text-primary" />
			</ItemMedia>
			<ItemContent>
				<ItemTitle>{certification.name}</ItemTitle>
			</ItemContent>
			<Badge variant="secondary">{certification.year}</Badge>
		</Item>
	);
}
