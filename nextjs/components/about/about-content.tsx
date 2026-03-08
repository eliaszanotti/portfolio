import { getAbout } from "@/data/get-about";
import { iconMap } from "@/lib/icons";
import {
	Item,
	ItemContent,
	ItemDescription,
	ItemGroup,
	ItemMedia,
	ItemTitle,
} from "@/components/ui/item";
import type { Locale } from "@/lib/i18n/routing";

type AboutContentProps = {
	locale: Locale;
};

export async function AboutContent({ locale }: AboutContentProps) {
	const aboutData = await getAbout(locale);

	return (
		<ItemGroup>
			{aboutData.map((item) => {
				const Icon = iconMap[item.icon];
				return (
					<Item key={item.id} variant="outline">
						<ItemMedia
							variant="image"
							className="size-12 rounded-full bg-primary/10"
						>
							<Icon className="text-primary" />
						</ItemMedia>
						<ItemContent>
							<ItemTitle>{item.title}</ItemTitle>
							<ItemDescription>{item.description}</ItemDescription>
						</ItemContent>
					</Item>
				);
			})}
		</ItemGroup>
	);
}
