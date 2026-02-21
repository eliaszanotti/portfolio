import localFont from "next/font/local";

/**
 * Recia - Font for body text (font-sans)
 * Weights: 300 (Light), 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold)
 */
export const bodyFont = localFont({
	src: [
		{
			path: "./fonts/recia/Recia-Light.woff2",
			weight: "300",
			style: "normal",
		},
		{
			path: "./fonts/recia/Recia-Regular.woff2",
			weight: "400",
			style: "normal",
		},
		{
			path: "./fonts/recia/Recia-Medium.woff2",
			weight: "500",
			style: "normal",
		},
		{
			path: "./fonts/recia/Recia-Semibold.woff2",
			weight: "600",
			style: "normal",
		},
		{
			path: "./fonts/recia/Recia-Bold.woff2",
			weight: "700",
			style: "normal",
		},
		{
			path: "./fonts/recia/Recia-LightItalic.woff2",
			weight: "300",
			style: "italic",
		},
		{
			path: "./fonts/recia/Recia-Italic.woff2",
			weight: "400",
			style: "italic",
		},
		{
			path: "./fonts/recia/Recia-MediumItalic.woff2",
			weight: "500",
			style: "italic",
		},
		{
			path: "./fonts/recia/Recia-SemiboldItalic.woff2",
			weight: "600",
			style: "italic",
		},
		{
			path: "./fonts/recia/Recia-BoldItalic.woff2",
			weight: "700",
			style: "italic",
		},
	],
	variable: "--font-sans",
	display: "swap",
});

/**
 * Fira - Font for headings/titles (font-serif)
 * Weights: 400 (Regular), 500 (Medium), 700 (Bold)
 */
export const headingFont = localFont({
	src: [
		{
			path: "./fonts/fira/FiraMono-Regular.woff2",
			weight: "400",
			style: "normal",
		},
		{
			path: "./fonts/fira/FiraMono-Medium.woff2",
			weight: "500",
			style: "normal",
		},
		{
			path: "./fonts/fira/FiraMono-Bold.woff2",
			weight: "700",
			style: "normal",
		},
	],
	variable: "--font-serif",
	display: "swap",
});
