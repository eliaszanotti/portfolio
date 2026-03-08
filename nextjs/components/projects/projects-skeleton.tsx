import { Skeleton } from "@/components/ui/skeleton";

export function ProjectsSkeleton() {
	return (
		<div className="grid grid-cols-2 gap-8 w-full">
			{[1, 2, 3, 4].map((i) => (
				<div
					key={i}
					className="p-6 rounded-lg border border-border bg-card flex flex-col"
				>
					<div className="space-y-3 mb-4">
						<Skeleton className="h-6 w-40" />
						<Skeleton className="h-4 w-full" />
					</div>
					<div className="flex-1 flex items-end flex-wrap gap-2">
						<Skeleton className="h-6 w-16" />
						<Skeleton className="h-6 w-20" />
						<Skeleton className="h-6 w-14" />
					</div>
					<div className="flex justify-end gap-2 mt-4">
						<Skeleton className="h-10 w-24" />
						<Skeleton className="h-10 w-24" />
					</div>
				</div>
			))}
		</div>
	);
}
