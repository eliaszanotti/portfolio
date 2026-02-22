import { Section } from "@/components/layout/section";
import { SubSection } from "@/components/layout/sub-section";
import { SectionDescription } from "@/components/section-description";
import { SectionTitle } from "@/components/section-title";

import {
	Item,
	ItemContent,
	ItemDescription,
	ItemGroup,
	ItemMedia,
	ItemTitle,
} from "@/components/ui/item";
import { aboutData } from "@/data/about";

export function AboutSection() {
	return (
		<Section id="about">
			<SubSection>
				<SectionTitle>About Me</SectionTitle>
				<SectionDescription>Get to know me better</SectionDescription>
			</SubSection>

			<SubSection>
				<ItemGroup>
					{aboutData.map((item) => {
						const Icon = item.icon;
						return (
							<Item key={item.title} variant="outline">
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
			</SubSection>
		</Section>
	);
}
