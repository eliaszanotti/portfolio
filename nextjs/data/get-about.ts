import { unstable_cache } from "next/cache";
import { getPayload } from "payload";
import config from "@/payload.config";
import type { About } from "@/payload-types";
import type { Locale } from "@/lib/i18n/routing";

async function getAbout(locale: Locale): Promise<About[]> {
    const payload = await getPayload({ config });

    const { docs } = await payload.find({
        collection: "about",
        depth: 0,
        locale,
    });

    return docs;
}

export const getCachedAbout = unstable_cache(
    async (locale: Locale) => getAbout(locale),
    ["about"],
    { revalidate: 3600, tags: ["about"] },
);
