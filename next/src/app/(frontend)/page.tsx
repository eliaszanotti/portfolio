"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import SectionFirst from "@/components/SectionFirst";
import SectionSecond from "@/components/SectionSecond";
import Header from "@/components/Header";

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
			<Header currentTheme={currentTheme} headerRef={headerRef} />
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
						<h1 className="text-[230px] leading-none font-black text-primary text-shadow-[0.4rem_0.4rem_var(--color-primary-content)]">
							ELIAS
						</h1>
						<h1 className="text-[140px] leading-none font-black text-primary text-shadow-[0.4rem_0.4rem_var(--color-primary-content)]">
							ZANOTTI
						</h1>
					</div>
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
					<p className="font-bold">Welcome to Elias&apos;s museum</p>
				</div>
			</section>
			<SectionFirst addSectionRef={addSectionRef} />
			<SectionSecond addSectionRef={addSectionRef} />
		</div>
	);
}
