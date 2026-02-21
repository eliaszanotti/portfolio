import Link from "next/link";

import { Button } from "@/components/ui/button";
import { navLinks } from "@/data/nav-links";

export function NavContainer() {
	return (
		<div className="relative w-full max-w-3xl h-100">
			{navLinks.map((item) => {
				const Icon = item.icon;

				return (
					<Button
						key={item.href}
						variant={item.buttonVariant ?? "outline"}
						className={`${item.buttonSize} flex flex-col items-center justify-center gap-2 rounded-full absolute -translate-x-1/2`}
						style={{
							top: item.position.top,
							left: item.position.left,
						}}
						nativeButton={false}
						render={
							<Link href={item.href}>
								<Icon className="size-6" />
								<span className="font-semibold text-sm">
									{item.title}
								</span>
							</Link>
						}
					></Button>
				);
			})}
		</div>
	);
}
