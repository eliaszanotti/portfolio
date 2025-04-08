import Man from "@icons/man";

export default function Home() {
	return (
		<section className="relative w-full h-full">
			<div className="absolute z-0 w-full h-full grid place-items-center">
				<Man />
			</div>
			<div className="relative z-10 flex h-screen w-full flex-col items-center justify-center gap-4">
				<h1 className="text-9xl font-black">ELIAS</h1>
				<h1 className="text-9xl font-black">ZANOTTI</h1>
			</div>
		</section>
	);
}
