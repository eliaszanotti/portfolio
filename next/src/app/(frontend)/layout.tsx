import type { Metadata } from "next";
import "./globals.css";

export const revalidate = 10;

// TODO dynamic with payload
export const metadata: Metadata = {
	title: "Elias Zanotti",
	description: "Full Stack Developer",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className="antialiased font-delight">{children}</body>
		</html>
	);
}
