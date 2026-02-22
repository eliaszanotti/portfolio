type SectionProps = {
	id: string;
	children: React.ReactNode;
};

export function Section({ id, children }: SectionProps) {
	return (
		<div
			id={id}
			className="min-h-screen flex flex-col gap-16 items-center pt-48"
		>
			{children}
		</div>
	);
}
