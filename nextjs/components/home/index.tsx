import { Section } from "@/components/layout/section";
import { SubSection } from "@/components/layout/sub-section";
import { Button } from "@/components/ui/button";
import { DialogLink } from "./dialog-link";
import { NavContainer } from "./nav-container";

export function HomeSection() {
	return (
		<Section id="home">
			<SubSection className="flex flex-col gap-8 items-center text-center max-w-2xl">
				<h1 className="text-7xl font-black tracking-tight">
					Elias <span className="text-primary">Zanotti</span>
				</h1>
				<p className="text-xl text-muted-foreground max-w-md">
					Passionate full-stack developer crafting modern web
					experiences
				</p>
				<DialogLink>
					<Button variant="default">Contact Me!</Button>
				</DialogLink>
			</SubSection>

			<NavContainer />
		</Section>
	);
}
