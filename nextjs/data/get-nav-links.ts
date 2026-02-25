import { unstable_cache } from "next/cache";
import { getPayload } from "payload";
import config from "@/payload.config";
import type { NavLink } from "@/payload-types";

async function getNavLinks(): Promise<NavLink[]> {
	const payload = await getPayload({ config });

	const { docs } = await payload.find({
		collection: "nav-links",
		depth: 0,
	});

	return docs;
}

export const getCachedNavLinks = unstable_cache(
	async () => getNavLinks(),
	["nav-links"],
	{ revalidate: 3600, tags: ["nav-links"] },
);
