type SubSectionProps = {
	className?: string;
	children: React.ReactNode;
};

export function SubSection({
	className = "flex flex-col gap-8 max-w-3xl mx-auto w-full",
	children,
}: SubSectionProps) {
	return <section className={className}>{children}</section>;
}
