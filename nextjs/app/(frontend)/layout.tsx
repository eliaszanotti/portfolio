import React from "react";
import "../globals.css";
import Header from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import { monoFont, serifFont } from "../fonts";

export const metadata = {
	description:
		"Full-stack developer portfolio built with Next.js and Payload CMS.",
	title: "Elias Zanotti - Portfolio",
};

export default async function RootLayout(props: { children: React.ReactNode }) {
	const { children } = props;

	return (
		<html
			lang="en"
			className={`font-serif ${serifFont.variable} ${monoFont.variable}`}
		>
			<body>
				<ThemeProvider attribute="class" defaultTheme="dark">
					<main>
						<Header />
						<div className="min-h-screen">{children}</div>
					</main>
				</ThemeProvider>
			</body>
		</html>
	);
}
