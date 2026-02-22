import { Section } from "@/components/layout/section";
import { SubSection } from "@/components/layout/sub-section";
import { Button } from "@/components/ui/button";
import { SectionDescription } from "../section-description";
import { DialogLink } from "./dialog-link";
import { NavContainer } from "./nav-container";

export function HomeSection() {
	return (
		<Section id="home">
			<SubSection>
				<h1 className="text-7xl font-black tracking-tight">
					Elias <span className="text-primary">Zanotti</span>
				</h1>
				<SectionDescription>
					Welcome to my portfolio! I&apos;m a passionate web developer.
				</SectionDescription>
				<DialogLink>
					<Button variant="default" nativeButton={true}>
						Contact Me!
					</Button>
				</DialogLink>
			</SubSection>

			<NavContainer />
		</Section>
	);
}
