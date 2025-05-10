"use client";

import Link from "next/link";
import IconFrance from "@/icons/france";
import { useThemeStore, ThemeState } from "@/store/themeStore";
import { useRef, useEffect } from "react";
import IconGithub from "@/icons/github";
import IconInstagram from "@/icons/instagram";

export default function Header() {
	const currentTheme = useThemeStore(
		(state: ThemeState) => state.currentTheme
	);
	const setHeaderRef = useThemeStore(
		(state: ThemeState) => state.setHeaderRef
	);
	const headerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		setHeaderRef(headerRef);
	}, [setHeaderRef]);

	return (
		<div
			ref={headerRef}
			className="w-full h-48 grid items-center grid-cols-[1fr_auto] px-16 fixed top-0 z-50 bg-transparent"
			data-theme={currentTheme}
		>
			<nav className="flex items-center gap-4">
				<Link className="btn btn-ghost h-full p-2" href="/">
					<IconFrance />
				</Link>
				<Link className="btn btn-ghost font-normal uppercase" href="/">
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
			<nav className="flex items-center gap-4">
				<p className="uppercase px-4">FULL STACK DEVELOPER</p>
				<Link
					className="btn btn-ghost h-full p-2"
					href="https://www.instagram.com/eliaszanottiweb"
					target="_blank"
					rel="noopener noreferrer"
				>
					<IconInstagram />
				</Link>
				<Link
					className="btn btn-ghost h-full p-2"
					href="https://github.com/eliaszanotti"
					target="_blank"
					rel="noopener noreferrer"
				>
					<IconGithub />
				</Link>
			</nav>
		</div>
	);
}
