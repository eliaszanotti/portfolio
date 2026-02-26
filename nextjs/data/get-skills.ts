import { unstable_cache } from "next/cache";
import { getPayload } from "payload";
import config from "@/payload.config";
import type { Skill } from "@/payload-types";
import type { Locale } from "@/lib/i18n/routing";

async function getSkills(locale: Locale): Promise<Skill[]> {
    const payload = await getPayload({ config });

    const { docs } = await payload.find({
        collection: "skills",
        depth: 1,
        locale,
    });

    return docs;
}

export const getCachedSkills = unstable_cache(
    async (locale: Locale) => getSkills(locale),
    ["skills"],
    { revalidate: 3600, tags: ["skills"] },
);
