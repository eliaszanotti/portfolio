import type { NextConfig } from "next";
import { withPayload } from "@payloadcms/next/withPayload";

const nextConfig: NextConfig = {
	output: "standalone",
	poweredByHeader: false,
	compress: true,
	reactStrictMode: true,
	images: {
		unoptimized: true,
	},
	experimental: {
		optimizePackageImports: ["@payloadcms/next", "payload"],
	},
};

export default withPayload(nextConfig);
