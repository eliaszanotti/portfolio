import FloatingWall from "./FloatingWall";

interface SectionProjectsProps {
	addSectionRef: (el: HTMLElement | null) => void;
}

export default function SectionProjects({
	addSectionRef,
}: SectionProjectsProps) {
	return (
		<section
			ref={addSectionRef}
			className="md:min-h-screen grid place-items-center bg-base-200 p-16 py-32"
		>
			<div className="max-w-6xl grid md:grid-cols-2 grid-cols-1 gap-8 h-full">
				<div className="flex flex-col gap-4 justify-center">
					<h1 className="text-6xl font-black italic">
						&quot;Break out of the frame&quot;
					</h1>
					<p className="font-bold">Welcome to Elias&apos;s museum</p>
				</div>
				<div className="h-full w-full">
					<FloatingWall />
				</div>
			</div>
		</section>
	);
}
