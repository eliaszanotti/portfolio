import { Section } from "@/components/layout/section";
import { SubSection } from "@/components/layout/sub-section";
import { Button } from "@/components/ui/button";
import { DialogLink } from "./dialog-link";
import { NavContainer } from "./nav-container";
import { SectionDescription } from "../section-description";

export function HomeSection() {
	return (
		<Section id="home">
			<SubSection className="flex flex-col gap-8 items-center text-center max-w-2xl">
				<h1 className="text-7xl font-black tracking-tight">
					Elias <span className="text-primary">Zanotti</span>
				</h1>
				<SectionDescription>
					Welcome to my portfolio! I&apos;m a passionate web
					developer.
				</SectionDescription>
				<DialogLink>
					<Button variant="default">Contact Me!</Button>
				</DialogLink>
			</SubSection>

			<NavContainer />
		</Section>
	);
}
