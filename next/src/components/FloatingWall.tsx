import Image from "next/image";

export default function FloatingWall() {
	return (
		<div className="relative w-full h-full flex items-center justify-center">
			<div className="grid grid-cols-12 grid-rows-12 w-full aspect-square">
				<div className="col-span-4 row-span-4 col-start-3 row-start-3 bg-violet-600 rounded-box z-5">
					<Image
						className="w-full h-full object-contain"
						src="/images/projects/atlas-ambassadeurs.png"
						alt="Logo Atlas Ambassadeurs"
						width={1000}
						height={1000}
					/>
				</div>
				<div className="col-span-6 row-span-6 col-start-6 row-start-4 bg-white rounded-box p-8">
					<Image
						className="w-full h-full object-contain"
						src="/images/projects/coachmania.jpg"
						alt="Logo Coachmania"
						width={1000}
						height={1000}
					/>
				</div>
				<div className="col-span-4 row-span-4 col-start-4 row-start-8 bg-teal-500 rounded-box p-8">
					<Image
						className="w-full h-full object-contain"
						src="/images/projects/access-cycle.png"
						alt="Logo Access Cycle"
						width={1000}
						height={1000}
					/>
				</div>
			</div>
		</div>
	);
}
