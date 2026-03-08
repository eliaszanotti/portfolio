import { Skeleton } from "@/components/ui/skeleton";

export function SkillsSkeleton() {
	return (
		<div className="grid sm:grid-cols-3 gap-8 w-full">
			{[1, 2, 3].map((categoryIndex) => (
				<div key={categoryIndex} className="flex flex-col gap-4">
					<Skeleton className="h-6 w-24" />
					<div className="flex flex-col gap-3">
						{[1, 2, 3, 4].map((skillIndex) => (
							<div
								key={skillIndex}
								className="p-4 rounded-lg border border-border bg-card"
							>
								<div className="flex items-center gap-4">
									<Skeleton className="size-10 rounded-lg" />
									<Skeleton className="h-5 w-32" />
								</div>
							</div>
						))}
					</div>
				</div>
			))}
		</div>
	);
}
