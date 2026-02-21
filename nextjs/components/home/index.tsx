import { Button } from "@/components/ui/button";
import { DialogLink } from "./dialog-link";
import { NavContainer } from "./nav-container";

export function HomeSection() {
	return (
		<div
			id="home"
			className="min-h-screen flex flex-col gap-16 items-center pt-48"
		>
			<section className="flex flex-col gap-8 items-center text-center max-w-2xl">
				<h1 className="text-6xl font-bold tracking-tight">
					Elias <span className="text-primary">Zanotti</span>
				</h1>
				<p className="text-xl text-muted-foreground max-w-md">
					Passionate full-stack developer crafting modern web
					experiences
				</p>
				<DialogLink>
					<Button variant="default">Contact Me!</Button>
				</DialogLink>
			</section>

			<NavContainer />
		</div>
	);
}
