import IconFrance from "@/icons/france";
import Man from "@/icons/man";
import Image from "next/image";

export default function Home() {
	return (
		<div className="flex flex-col">
			<section className="relative w-full h-screen grid place-items-center">
				<div className="absolute p-20 w-full h-full grid grid-cols-[1fr_auto]">
					<IconFrance />
					<p className="text-2xl text-primary">
						FULL STACK DEVELOPER
					</p>
				</div>
				<div className="p-10 grid place-items-center gap-10 relative w-full h-full">
					<div className="flex flex-col items-center justify-center fixed z-10">
						<h1 className="text-[300px] leading-none font-black text-primary">
							ELIAS
						</h1>
						<h1 className="text-[200px] leading-none font-black text-primary">
							ZANOTTI
						</h1>
					</div>
					<div className="absolute inset-0 grid place-items-center w-full h-full">
						<Image
							className="h-2/3 w-full object-contain relative"
							src="/images/frame-1.png"
							alt="elias"
							width={300}
							height={300}
						/>
					</div>
				</div>
			</section>
			<section className="h-screen grid place-items-center z-50 bg-base-200">
				<p className="text-6xl font-black">Sortez du cadre</p>
			</section>
		</div>
	);
}
