"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";

export function ThemeToggle() {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return (
			<ButtonGroup>
				<Button variant="ghost" nativeButton={true} disabled>
					E
				</Button>
				<Button variant="ghost" nativeButton={true} disabled>
					Z
				</Button>
			</ButtonGroup>
		);
	}

	return (
		<ButtonGroup>
			<Button
				variant={theme === "light" ? "default" : "ghost"}
				onClick={() => setTheme("light")}
				className="font-bold"
				nativeButton={true}
			>
				E
			</Button>
			<Button
				variant={theme === "dark" ? "default" : "ghost"}
				onClick={() => setTheme("dark")}
				className="font-bold"
				nativeButton={true}
			>
				Z
			</Button>
		</ButtonGroup>
	);
}
