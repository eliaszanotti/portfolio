import AppFrameContainer from "@/components/AppFrameContainer";
import Link from "next/link";

interface SectionFirstProps {
	addSectionRef: (el: HTMLElement | null) => void;
}

export default function SectionFirst({ addSectionRef }: SectionFirstProps) {
	return (
		<section
			ref={addSectionRef}
			data-theme="custom-first"
			className="min-h-screen grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-[3fr_2fr] items-center justify-center bg-primary text-primary-content p-32 gap-16 pt-48"
		>
			<div className="flex flex-col gap-4">
				<p className="italic">Project #001</p>
				<h1 className="text-6xl font-black">Ambassadeurs Atlas</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Quisquam, quos.
				</p>
				<div className="w-full">
					<Link
						className="btn btn-secondary font-normal uppercase"
						href="/contact"
					>
						Visit
					</Link>
				</div>
			</div>
			<div className="grid place-items-center h-full">
				<AppFrameContainer
					imageData={{
						src: "/images/atlas.png",
						width: 2000,
						height: 2000,
					}}
					frameType="1-horizontal"
				/>
			</div>
		</section>
	);
}
