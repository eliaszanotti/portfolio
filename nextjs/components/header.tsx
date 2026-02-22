"use client";

import Link from "next/link";
import IconFrance from "@/components/icon/france";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Header() {
	return (
		<div className="w-full h-48 flex items-center px-16 fixed top-0 z-50 ">
			<div className="p-8 backdrop-blur-md w-full grid items-center grid-cols-[1fr_auto_1fr] rounded-full">
				<nav className="flex items-center gap-4">
					<Button
						variant="ghost"
						size="lg"
						nativeButton={false}
						render={
							<Link href="/" className="flex gap-4">
								<IconFrance /> Elias Zanotti
							</Link>
						}
					/>
				</nav>

				<nav className="flex items-center gap-4">
					<p className="uppercase text-sm">Full-stack developer</p>
				</nav>
				<nav className="flex items-center justify-end gap-4">
					<ThemeToggle />
				</nav>
			</div>
		</div>
	);
}
