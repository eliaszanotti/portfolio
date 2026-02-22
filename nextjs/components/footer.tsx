import React from "react";

export default function Footer() {
	return (
		<footer className="py-6 text-center text-sm text-muted-foreground">
			<p>
				&copy; {new Date().getFullYear()} Elias Zanotti. All rights reserved.
			</p>
		</footer>
	);
}
