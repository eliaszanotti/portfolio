import { Skeleton } from "@/components/ui/skeleton";
import { Item, ItemMedia, ItemContent, ItemGroup } from "../ui/item";

export function AboutSkeleton() {
	return (
		<ItemGroup>
			{[1, 2, 3].map((i) => (
				<Item key={i} variant="outline">
					<ItemMedia
						variant="image"
						className="size-12 rounded-full bg-primary/10"
					>
						<Skeleton className="text-primary" />
					</ItemMedia>
					<ItemContent>
						<Skeleton className="h-4 w-32" />
						<Skeleton className="h-8 w-full" />
					</ItemContent>
				</Item>
			))}
		</ItemGroup>
	);
}
