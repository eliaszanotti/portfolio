import localFont from "next/font/local";

/**
 * Recia - Font for serif/headings (font-serif)
 * Weights: 300 (Light), 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold)
 */
export const serifFont = localFont({
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
	variable: "--font-serif",
	display: "swap",
});

/**
 * Fira Mono - Font for monospace (font-mono)
 * Weights: 400 (Regular), 500 (Medium), 700 (Bold)
 */
export const monoFont = localFont({
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
	variable: "--font-mono",
	display: "swap",
});

/**
 * Anybody - Font for sans-serif (font-sans)
 * Weights: 100 (Thin) to 900 (Black)
 */
export const sansFont = localFont({
	src: [
		{
			path: "./fonts/anybody/Anybody-Thin.woff2",
			weight: "100",
			style: "normal",
		},
		{
			path: "./fonts/anybody/Anybody-ThinItalic.woff2",
			weight: "100",
			style: "italic",
		},
		{
			path: "./fonts/anybody/Anybody-ExtraLight.woff2",
			weight: "200",
			style: "normal",
		},
		{
			path: "./fonts/anybody/Anybody-ExtraLightItalic.woff2",
			weight: "200",
			style: "italic",
		},
		{
			path: "./fonts/anybody/Anybody-Light.woff2",
			weight: "300",
			style: "normal",
		},
		{
			path: "./fonts/anybody/Anybody-LightItalic.woff2",
			weight: "300",
			style: "italic",
		},
		{
			path: "./fonts/anybody/Anybody-Regular.woff2",
			weight: "400",
			style: "normal",
		},
		{
			path: "./fonts/anybody/Anybody-Italic.woff2",
			weight: "400",
			style: "italic",
		},
		{
			path: "./fonts/anybody/Anybody-Medium.woff2",
			weight: "500",
			style: "normal",
		},
		{
			path: "./fonts/anybody/Anybody-MediumItalic.woff2",
			weight: "500",
			style: "italic",
		},
		{
			path: "./fonts/anybody/Anybody-SemiBold.woff2",
			weight: "600",
			style: "normal",
		},
		{
			path: "./fonts/anybody/Anybody-SemiBoldItalic.woff2",
			weight: "600",
			style: "italic",
		},
		{
			path: "./fonts/anybody/Anybody-Bold.woff2",
			weight: "700",
			style: "normal",
		},
		{
			path: "./fonts/anybody/Anybody-BoldItalic.woff2",
			weight: "700",
			style: "italic",
		},
		{
			path: "./fonts/anybody/Anybody-ExtraBold.woff2",
			weight: "800",
			style: "normal",
		},
		{
			path: "./fonts/anybody/Anybody-ExtraBoldItalic.woff2",
			weight: "800",
			style: "italic",
		},
		{
			path: "./fonts/anybody/Anybody-Black.woff2",
			weight: "900",
			style: "normal",
		},
		{
			path: "./fonts/anybody/Anybody-BlackItalic.woff2",
			weight: "900",
			style: "italic",
		},
	],
	variable: "--font-sans",
	display: "swap",
});

/**
 * Anybody ExtraExpanded - Wide sans-serif variant
 */
export const sansFontExpanded = localFont({
	src: [
		{
			path: "./fonts/anybody/AnybodyExtraExpanded-Thin.woff2",
			weight: "100",
			style: "normal",
		},
		{
			path: "./fonts/anybody/AnybodyExtraExpanded-ThinItalic.woff2",
			weight: "100",
			style: "italic",
		},
		{
			path: "./fonts/anybody/AnybodyExtraExpanded-ExtraLight.woff2",
			weight: "200",
			style: "normal",
		},
		{
			path: "./fonts/anybody/AnybodyExtraExpanded-ExtraLightItalic.woff2",
			weight: "200",
			style: "italic",
		},
		{
			path: "./fonts/anybody/AnybodyExtraExpanded-Light.woff2",
			weight: "300",
			style: "normal",
		},
		{
			path: "./fonts/anybody/AnybodyExtraExpanded-LightItalic.woff2",
			weight: "300",
			style: "italic",
		},
		{
			path: "./fonts/anybody/AnybodyExtraExpanded-Regular.woff2",
			weight: "400",
			style: "normal",
		},
		{
			path: "./fonts/anybody/AnybodyExtraExpanded-Italic.woff2",
			weight: "400",
			style: "italic",
		},
		{
			path: "./fonts/anybody/AnybodyExtraExpanded-Medium.woff2",
			weight: "500",
			style: "normal",
		},
		{
			path: "./fonts/anybody/AnybodyExtraExpanded-MediumItalic.woff2",
			weight: "500",
			style: "italic",
		},
		{
			path: "./fonts/anybody/AnybodyExtraExpanded-SemiBold.woff2",
			weight: "600",
			style: "normal",
		},
		{
			path: "./fonts/anybody/AnybodyExtraExpanded-SemiBoldItalic.woff2",
			weight: "600",
			style: "italic",
		},
		{
			path: "./fonts/anybody/AnybodyExtraExpanded-Bold.woff2",
			weight: "700",
			style: "normal",
		},
		{
			path: "./fonts/anybody/AnybodyExtraExpanded-BoldItalic.woff2",
			weight: "700",
			style: "italic",
		},
		{
			path: "./fonts/anybody/AnybodyExtraExpanded-ExtraBold.woff2",
			weight: "800",
			style: "normal",
		},
		{
			path: "./fonts/anybody/AnybodyExtraExpanded-ExtraBoldItalic.woff2",
			weight: "800",
			style: "italic",
		},
		{
			path: "./fonts/anybody/AnybodyExtraExpanded-Black.woff2",
			weight: "900",
			style: "normal",
		},
		{
			path: "./fonts/anybody/AnybodyExtraExpanded-BlackItalic.woff2",
			weight: "900",
			style: "italic",
		},
	],
	variable: "--font-sans-expanded",
	display: "swap",
});

/**
 * Anybody UltraCondensed - Narrow sans-serif variant
 */
export const sansFontCondensed = localFont({
	src: [
		{
			path: "./fonts/anybody/AnybodyUltraCondensed-Thin.woff2",
			weight: "100",
			style: "normal",
		},
		{
			path: "./fonts/anybody/AnybodyUltraCondensed-ThinItalic.woff2",
			weight: "100",
			style: "italic",
		},
		{
			path: "./fonts/anybody/AnybodyUltraCondensed-ExtraLight.woff2",
			weight: "200",
			style: "normal",
		},
		{
			path: "./fonts/anybody/AnybodyUltraCondensed-ExtraLightItalic.woff2",
			weight: "200",
			style: "italic",
		},
		{
			path: "./fonts/anybody/AnybodyUltraCondensed-Light.woff2",
			weight: "300",
			style: "normal",
		},
		{
			path: "./fonts/anybody/AnybodyUltraCondensed-LightItalic.woff2",
			weight: "300",
			style: "italic",
		},
		{
			path: "./fonts/anybody/AnybodyUltraCondensed-Regular.woff2",
			weight: "400",
			style: "normal",
		},
		{
			path: "./fonts/anybody/AnybodyUltraCondensed-Italic.woff2",
			weight: "400",
			style: "italic",
		},
		{
			path: "./fonts/anybody/AnybodyUltraCondensed-Medium.woff2",
			weight: "500",
			style: "normal",
		},
		{
			path: "./fonts/anybody/AnybodyUltraCondensed-MediumItalic.woff2",
			weight: "500",
			style: "italic",
		},
		{
			path: "./fonts/anybody/AnybodyUltraCondensed-SemiBold.woff2",
			weight: "600",
			style: "normal",
		},
		{
			path: "./fonts/anybody/AnybodyUltraCondensed-SemiBoldItalic.woff2",
			weight: "600",
			style: "italic",
		},
		{
			path: "./fonts/anybody/AnybodyUltraCondensed-Bold.woff2",
			weight: "700",
			style: "normal",
		},
		{
			path: "./fonts/anybody/AnybodyUltraCondensed-BoldItalic.woff2",
			weight: "700",
			style: "italic",
		},
		{
			path: "./fonts/anybody/AnybodyUltraCondensed-ExtraBold.woff2",
			weight: "800",
			style: "normal",
		},
		{
			path: "./fonts/anybody/AnybodyUltraCondensed-ExtraBoldItalic.woff2",
			weight: "800",
			style: "italic",
		},
		{
			path: "./fonts/anybody/AnybodyUltraCondensed-Black.woff2",
			weight: "900",
			style: "normal",
		},
		{
			path: "./fonts/anybody/AnybodyUltraCondensed-BlackItalic.woff2",
			weight: "900",
			style: "italic",
		},
	],
	variable: "--font-sans-condensed",
	display: "swap",
});
