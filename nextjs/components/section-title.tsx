type SectionTitleProps = {
	children: React.ReactNode;
};

export function SectionTitle({ children }: SectionTitleProps) {
	return <h1 className="text-5xl font-bold tracking-tight">{children}</h1>;
}
