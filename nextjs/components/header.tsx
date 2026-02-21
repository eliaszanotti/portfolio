"use client";

import Link from "next/link";
import IconFrance from "@/components/icon/france";
import { Button } from "@/components/ui/button";
import { Github, Instagram } from "lucide-react";

export default function Header() {
	return (
		<div className="w-full h-48 grid items-center grid-cols-[1fr_auto] px-16 fixed top-0 z-50">
			<nav className="flex items-center gap-4">
				<Button
					variant="ghost"
					size="lg"
					render={
						<Link href="/" className="flex gap-4">
							<IconFrance /> Elias Zanotti
						</Link>
					}
				/>
			</nav>
			<nav className="flex items-center gap-4">
				<p className="uppercase text-sm">Full-stack developer</p>
				<Button
					variant="ghost"
					render={
						<Link
							href="https://www.instagram.com/eliaszanottiweb"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Instagram />
						</Link>
					}
				/>
				<Button
					variant="ghost"
					render={
						<Link
							href="https://github.com/eliaszanotti"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Github />
						</Link>
					}
				/>
			</nav>
		</div>
	);
}
