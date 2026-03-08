import { Skeleton } from "@/components/ui/skeleton";

export function ContactSkeleton() {
	return (
		<div className="grid grid-cols-3 gap-8 w-full">
			{[1, 2, 3].map((i) => (
				<div
					key={i}
					className="p-6 rounded-lg border border-border bg-card flex flex-col items-center text-center gap-4"
				>
					<Skeleton className="size-12 rounded-full" />
					<div className="space-y-2 w-full">
						<Skeleton className="h-5 w-24 mx-auto" />
						<Skeleton className="h-4 w-full" />
					</div>
					<Skeleton className="h-10 w-full" />
				</div>
			))}
		</div>
	);
}
