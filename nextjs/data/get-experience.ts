import { unstable_cache } from "next/cache";
import { getPayload } from "payload";
import config from "@/payload.config";
import type { Experience } from "@/payload-types";
import type { Locale } from "@/lib/i18n/routing";

async function getExperience(locale: Locale): Promise<Experience[]> {
    const payload = await getPayload({ config });

    const { docs } = await payload.find({
        collection: "experience",
        depth: 0,
        locale,
    });

    return docs;
}

export const getCachedExperience = unstable_cache(
    async (locale: Locale) => getExperience(locale),
    ["experience"],
    { revalidate: 3600, tags: ["experience"] },
);
