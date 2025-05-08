import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

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
			<body className="antialiased font-delight" data-theme="light">
				<Header />
				{children}
			</body>
		</html>
	);
}
