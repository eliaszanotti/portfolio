import { getTranslations, getLocale } from "next-intl/server";
import { Section } from "@/components/layout/section";
import { SubSection } from "@/components/layout/sub-section";
import { SectionDescription } from "@/components/section-description";
import { SectionTitle } from "@/components/section-title";
import { getCachedAbout } from "@/data/get-about";
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

export async function AboutSection() {
	const t = await getTranslations("about");
	const locale = (await getLocale()) as Locale;
	const aboutData = await getCachedAbout(locale);

	return (
		<Section id="about">
			<SubSection>
				<SectionTitle>{t("title")}</SectionTitle>
				<SectionDescription>{t("description")}</SectionDescription>
			</SubSection>

			<SubSection>
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
			</SubSection>
		</Section>
	);
}
