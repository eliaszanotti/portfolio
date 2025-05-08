import Link from "next/link";
import IconFrance from "@/icons/france";

interface HeaderProps {
	currentTheme: string;
	headerRef: React.RefObject<HTMLDivElement | null>;
}

export default function Header({ currentTheme, headerRef }: HeaderProps) {
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
			<p className="uppercase">FULL STACK DEVELOPER</p>
		</div>
	);
}
