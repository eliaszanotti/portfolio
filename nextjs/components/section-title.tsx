type SectionTitleProps = {
	children: React.ReactNode;
};

export function SectionTitle({ children }: SectionTitleProps) {
	return (
		<h1 className="text-5xl font-bold tracking-tight text-center">
			{children}
		</h1>
	);
}
