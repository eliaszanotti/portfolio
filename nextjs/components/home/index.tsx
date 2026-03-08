import { getTranslations } from "next-intl/server";
import { Section } from "@/components/layout/section";
import { SubSection } from "@/components/layout/sub-section";
import { Button } from "@/components/ui/button";
import { SectionDescription } from "../section-description";
import { DialogLink } from "./dialog-link";
import { NavContainer } from "./nav-container";
import { Suspense } from "react";
import { NavContainerSkeleton } from "./nav-container-skeleton";

export async function HomeSection() {
	const t = await getTranslations("home");

	return (
		<Section id="home">
			<SubSection>
				<h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight">
					Elias <span className="text-primary">Zanotti</span>
				</h1>
				<SectionDescription>{t("greeting")}</SectionDescription>
				<DialogLink>
					<Button variant="default" nativeButton={true}>
						{t("contact")}
					</Button>
				</DialogLink>
			</SubSection>

			<Suspense fallback={<NavContainerSkeleton />}>
				<NavContainer />
			</Suspense>
		</Section>
	);
}
