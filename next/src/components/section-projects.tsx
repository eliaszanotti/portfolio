import Image from "next/image";

interface SectionProjectsProps {
	addSectionRef: (el: HTMLElement | null) => void;
}

export default function SectionProjects({
	addSectionRef,
}: SectionProjectsProps) {
	return (
		<section
			ref={addSectionRef}
			className="min-h-screen grid place-items-center bg-base-200 p-16"
		>
			<div className="max-w-6xl grid grid-cols-2 gap-8">
				<div className="flex flex-col gap-4 justify-center">
					<h1 className="text-6xl font-black italic">
						&quot;Think outside the box&quot;
					</h1>
					<p className="font-bold">Welcome to Elias&apos;s museum</p>
				</div>
				<div className="ICI">
					<Image
						className="h-1/2 object-contain"
						src="/images/frame-1.png"
						alt="elias"
						width={1000}
						height={1000}
					/>
				</div>
			</div>
		</section>
	);
}
