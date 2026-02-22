type SectionDescriptionProps = {
	children: React.ReactNode;
};

export function SectionDescription({ children }: SectionDescriptionProps) {
	return (
		<p className="text-lg text-left text-muted-foreground max-w-prose">
			{children}
		</p>
	);
}
