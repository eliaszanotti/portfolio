import { NavContainer } from "@/components/nav-container";

export default function HomePage() {
	return (
		<div className="flex flex-col items-center justify-center gap-16 px-8">
			{/* Hero Section */}
			<section className="flex flex-col items-center gap-6 text-center">
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
