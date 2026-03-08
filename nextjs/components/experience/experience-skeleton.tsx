import { Skeleton } from "@/components/ui/skeleton";

export function ExperienceSkeleton() {
	return (
		<>
			<div className="flex flex-col gap-4 w-full">
				{[1, 2].map((i) => (
					<div
						key={i}
						className="p-6 rounded-lg border border-border bg-card"
					>
						<div className="space-y-3">
							<Skeleton className="h-6 w-48" />
							<Skeleton className="h-4 w-full" />
							<Skeleton className="h-4 w-3/4" />
						</div>
					</div>
				))}
			</div>
			<h2 className="text-2xl font-bold w-full">
				<Skeleton className="h-8 w-40" />
			</h2>
			<div className="flex flex-col gap-3 w-full">
				{[1, 2].map((i) => (
					<div
						key={i}
						className="p-4 rounded-lg border border-border bg-card"
					>
						<div className="space-y-2">
							<Skeleton className="h-5 w-40" />
							<Skeleton className="h-4 w-full" />
						</div>
					</div>
				))}
			</div>
		</>
	);
}
