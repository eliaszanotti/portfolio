import IconFrance from "@/icons/france";
import Man from "@/icons/man";

export default function Home() {
	return (
		<section className="relative w-full h-screen grid place-items-center">
			<div className="absolute p-20 w-full h-full grid grid-cols-[1fr_auto]">
				<IconFrance />
				<p className="text-2xl text-primary">FULL STACK DEVELOPER</p>
			</div>
			<div className="p-10 grid grid-cols-[1fr_1fr] gap-10">
				<div className="h-full w-fit">
					<Man />
				</div>
				<div className="flex flex-col items-center justify-center">
					<h1 className="text-[200px] leading-none font-black text-primary">
						ELIAS
					</h1>
					<h1 className="text-[130px] leading-none font-black text-secondary">
						ZANOTTI
					</h1>
				</div>
			</div>
		</section>
	);
}
