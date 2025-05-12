import AppFrameContainer from "@/components/AppFrameContainer";
import Link from "next/link";

interface SectionSecondProps {
	addSectionRef: (el: HTMLElement | null) => void;
}

export default function SectionSecond({ addSectionRef }: SectionSecondProps) {
	return (
		<section
			ref={addSectionRef}
			data-theme="custom-second"
			className="md:min-h-screen grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-[1fr_2fr] items-center justify-center bg-base-100 p-16 py-32 gap-16"
		>
			<div className="grid place-items-center h-full">
				<AppFrameContainer
					imageData={{
						src: "/images/section-second.png",
						width: 2000,
						height: 2000,
					}}
					frameType="3"
				/>
			</div>
			<div className="flex flex-col gap-4">
				<p className="italic">Project #002</p>
				<h1 className="text-6xl font-black">CV Mania</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Quisquam, quos.
				</p>
				<div className="w-full">
					<Link
						className="btn btn-primary font-normal uppercase"
						href="/contact"
					>
						Visit
					</Link>
				</div>
			</div>
		</section>
	);
}
