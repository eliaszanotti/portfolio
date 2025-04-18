"use client";

import AppFrameContainer from "@/components/AppFrameContainer";
import IconFrance from "@/icons/france";
import Man from "@/icons/man";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Home() {
	const [currentTheme, setCurrentTheme] = useState("light");
	const sectionRefs = useRef<HTMLElement[]>([]);
	const headerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY + window.innerHeight / 2;
			const headerHeight = headerRef.current
				? headerRef.current.clientHeight
				: 0;

			sectionRefs.current.forEach((section) => {
				if (!section) return;

				const { top, bottom } = section.getBoundingClientRect();
				const sectionTop = top + window.scrollY + headerHeight * 2;
				const sectionBottom =
					bottom + window.scrollY + headerHeight * 2;
				if (
					scrollPosition > sectionTop &&
					scrollPosition < sectionBottom
				) {
					const theme = section.getAttribute("data-theme") || "light";
					setCurrentTheme(theme);
				}
			});
		};

		setTimeout(() => {
			handleScroll();
		}, 0);

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const addSectionRef = (el: HTMLElement | null) => {
		if (el && !sectionRefs.current.includes(el)) {
			sectionRefs.current.push(el);
		}
	};

	return (
		<div className="flex flex-col">
			<section ref={addSectionRef} className="relative w-full h-screen">
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
						<h1 className="text-[300px] leading-none font-black text-primary text-shadow-[0.4rem_0.4rem_var(--color-primary-content)]">
							ELIAS
						</h1>
						<h1 className="text-[200px] leading-none font-black text-primary text-shadow-[0.4rem_0.4rem_var(--color-primary-content)]">
							ZANOTTI
						</h1>
					</div>
				</div>
				<div
					ref={headerRef}
					className="w-full h-48 grid items-center grid-cols-[1fr_auto] px-16 fixed top-0 z-50 bg-transparent"
					data-theme={currentTheme}
				>
					<nav className="flex items-center gap-4">
						<Link className="btn btn-ghost h-full p-2" href="/">
							<IconFrance />
						</Link>
						<Link
							className="btn btn-ghost font-normal uppercase"
							href="/"
						>
							Home
						</Link>
						<Link
							className="btn btn-ghost font-normal uppercase"
							href="/about"
						>
							About
						</Link>
						<Link
							className="btn btn-ghost font-normal uppercase"
							href="/contact"
						>
							Contact
						</Link>
					</nav>
					<p className="text-2xl uppercase">FULL STACK DEVELOPER</p>
				</div>
			</section>
			<section
				ref={addSectionRef}
				className="h-screen grid place-items-center z-5 bg-base-200 text-primary"
			>
				<div className="flex flex-col gap-4">
					<h1 className="text-6xl font-black italic">
						&quot;Think outside the box&quot;
					</h1>
					<p className="text-2xl">Welcome to Elias&apos;s museum</p>
				</div>
			</section>
			<section
				ref={addSectionRef}
				data-theme="custom-first"
				className="min-h-screen grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-[3fr_2fr] items-center justify-center bg-secondary text-secondary-content z-5 p-32 gap-16 pt-48"
			>
				<div className="flex flex-col gap-4">
					<h1 className="text-6xl font-black">Ambassadeurs Atlas</h1>
					<p className="text-2xl">
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
		</div>
	);
}
