import { unstable_cache } from "next/cache";
import { getPayload } from "payload";
import { getLocale } from "next-intl/server";
import config from "@/payload.config";
import type { NavLink } from "@/payload-types";
import type { Locale } from "@/lib/i18n/routing";

async function getNavLinks(): Promise<NavLink[]> {
	const payload = await getPayload({ config });
	const locale = (await getLocale()) as Locale;

	const { docs } = await payload.find({
		collection: "nav-links",
		depth: 0,
		locale,
	});

	return docs;
}

export const getCachedNavLinks = unstable_cache(
	async () => getNavLinks(),
	["nav-links"],
	{ revalidate: 3600, tags: ["nav-links"] },
);
