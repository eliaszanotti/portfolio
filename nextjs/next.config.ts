import { withPayload } from "@payloadcms/next/withPayload";
import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./lib/i18n/request.ts");

const nextConfig: NextConfig = {
	output: "standalone",
	cacheComponents: true,
};

export default withPayload(withNextIntl(nextConfig), {
	devBundleServerPackages: false,
});
