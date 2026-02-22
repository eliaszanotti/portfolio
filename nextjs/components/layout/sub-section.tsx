import { cn } from "@/lib/utils";

type SubSectionProps = {
	className?: string;
	children: React.ReactNode;
};

export function SubSection({ className, children }: SubSectionProps) {
	return (
		<section
			className={cn(
				"flex flex-col items-center gap-8 max-w-3xl mx-auto w-full",
				className,
			)}
		>
			{children}
		</section>
	);
}
