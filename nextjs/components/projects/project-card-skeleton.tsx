import { Skeleton } from "@/components/ui/skeleton";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from "@/components/ui/card";

export function ProjectCardSkeleton() {
	return (
		<Card>
			<CardHeader>
				<Skeleton className="h-6 w-40" />
				<Skeleton className="h-4 w-full" />
			</CardHeader>
			<CardContent className="flex h-full items-end">
				<div className="flex items-end flex-wrap gap-2">
					<Skeleton className="h-6 w-16" />
					<Skeleton className="h-6 w-20" />
					<Skeleton className="h-6 w-14" />
				</div>
			</CardContent>
			<CardFooter className="flex justify-end gap-2">
				<Skeleton className="h-10 w-24" />
				<Skeleton className="h-10 w-24" />
			</CardFooter>
		</Card>
	);
}
