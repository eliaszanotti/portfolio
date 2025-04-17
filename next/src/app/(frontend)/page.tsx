import IconFrance from "@/icons/france";
import Man from "@/icons/man";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
	return (
		<div className="flex flex-col">
			<section className="relative w-full h-screen">
				<div className="absolute inset-0 p-10 grid place-items-center gap-10 w-full h-full">
					<div className="absolute inset-0 grid place-items-center w-full h-full">
						<Image
							className="h-2/3 w-full object-contain relative"
							src="/images/frame-1.png"
							alt="elias"
							width={300}
							height={300}
						/>
					</div>
					<div className="flex flex-col items-center justify-center fixed">
						<h1 className="text-[300px] leading-none font-black text-primary">
							ELIAS
						</h1>
						<h1 className="text-[200px] leading-none font-black text-primary">
							ZANOTTI
						</h1>
					</div>
				</div>
				<div className="w-full h-48 grid items-center grid-cols-[1fr_auto] px-16 fixed top-0 z-50">
					<nav className="flex items-center gap-4">
						<Link href="/">
							<IconFrance />
						</Link>
						<Link
							className="btn btn-neutral btn-ghost font-normal uppercase"
							href="/"
						>
							Home
						</Link>
						<Link
							className="btn btn-neutral btn-ghost font-normal uppercase"
							href="/about"
						>
							About
						</Link>
						<Link
							className="btn btn-neutral btn-ghost font-normal uppercase"
							href="/contact"
						>
							Contact
						</Link>
					</nav>
					<p className="text-2xl text-primary">
						FULL STACK DEVELOPER
					</p>
				</div>
			</section>
			<section className="h-screen grid place-items-center z-5 bg-base-200 text-primary">
				<p className="text-6xl font-black">Sortez du cadre</p>
			</section>
		</div>
	);
}
