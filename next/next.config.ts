import type { NextConfig } from "next";
import { withPayload } from "@payloadcms/next/withPayload";

const nextConfig: NextConfig = {
	output: "standalone",
	poweredByHeader: false,
	compress: true,
	reactStrictMode: true,
	swcMinify: true,
	images: {
		unoptimized: true, // Désactive l'optimisation d'images pendant le build
	},
	experimental: {
		optimizeCss: true,
		optimizePackageImports: ["@payloadcms/next", "payload"],
	},
};

export default withPayload(nextConfig);
