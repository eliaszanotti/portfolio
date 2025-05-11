"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import SectionFirst from "@/components/SectionFirst";
import SectionSecond from "@/components/SectionSecond";
import SectionProjects from "@/components/section-projects";
import SectionSkills from "@/components/section-skills";
import { useThemeStore, ThemeState } from "@/store/themeStore";
import Link from "next/link";

export default function Home() {
	const setCurrentTheme = useThemeStore(
		(state: ThemeState) => state.setCurrentTheme
	);
	const headerRef = useThemeStore((state: ThemeState) => state.headerRef);
	const sectionRefs = useRef<HTMLElement[]>([]);

	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY + window.innerHeight / 2;
			const headerHeight = headerRef?.current
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
	}, [setCurrentTheme, headerRef]);

	const addSectionRef = (el: HTMLElement | null) => {
		if (el && !sectionRefs.current.includes(el)) {
			sectionRefs.current.push(el);
		}
	};

	return (
		<div className="flex flex-col">
			<section ref={addSectionRef} className="relative w-full h-screen">
				<div className="relative p-10 grid place-items-center gap-10 w-full h-full">
					<div className="absolute grid place-items-center w-full h-full">
						<Image
							className="h-2/3 w-full object-contain grayscale opacity-50"
							src="/images/frame-1.png"
							alt="elias"
							width={1000}
							height={1000}
						/>
					</div>
					<div className="absolute flex flex-col items-center justify-center">
						<h1 className="text-[230px] leading-none font-black text-primary">
							ELIAS
						</h1>
						<h1 className="text-[140px] leading-none font-black text-primary">
							ZANOTTI
						</h1>
						<Link href="/" className="btn btn-primary">
							Expose your project
						</Link>
					</div>
				</div>
			</section>
			<SectionProjects addSectionRef={addSectionRef} />
			<SectionSkills addSectionRef={addSectionRef} />
			<SectionFirst addSectionRef={addSectionRef} />
			<SectionSecond addSectionRef={addSectionRef} />
		</div>
	);
}
