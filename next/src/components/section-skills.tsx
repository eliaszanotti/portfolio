import { useRef } from "react";

interface SectionSkillsProps {
	addSectionRef: (el: HTMLElement | null) => void;
}

export default function SectionSkills({ addSectionRef }: SectionSkillsProps) {
	return (
		<section
			ref={addSectionRef}
			className="min-h-screen grid place-items-center p-16"
		>
			<div className="max-w-6xl grid grid-cols-2 gap-8 h-full">
				<div className="h-full w-full"></div>
				<div className="flex flex-col gap-4 justify-center">
					<h1 className="text-6xl font-black italic">
						&quot;Mastering the tools&quot;
					</h1>
					<p className="font-bold">My technical arsenal</p>
				</div>
			</div>
		</section>
	);
}
