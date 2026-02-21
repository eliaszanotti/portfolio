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
				<div className="flex items-center gap-2">
					<span className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium">
						Full-stack Developer
					</span>
				</div>
			</section>

			<NavContainer />
		</div>
	);
}
