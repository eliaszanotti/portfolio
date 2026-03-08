import { Skeleton } from "@/components/ui/skeleton";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from "@/components/ui/card";

export function ContactCardSkeleton() {
	return (
		<Card className="bg-primary/10 ring-primary/30">
			<CardHeader>
				<Skeleton className="h-6 w-32" />
				<Skeleton className="h-4 w-full" />
			</CardHeader>
			<CardContent className="flex h-full items-end" />
			<CardFooter className="flex justify-end bg-primary/10 border-primary/10">
				<Skeleton className="h-10 w-24" />
			</CardFooter>
		</Card>
	);
}
