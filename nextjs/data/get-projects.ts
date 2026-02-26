import { unstable_cache } from "next/cache";
import { getPayload } from "payload";
import config from "@/payload.config";
import type { Project } from "@/payload-types";
import type { Locale } from "@/lib/i18n/routing";

async function getProjects(locale: Locale): Promise<Project[]> {
    const payload = await getPayload({ config });

    const { docs } = await payload.find({
        collection: "projects",
        depth: 1,
        locale,
    });

    return docs;
}

export const getCachedProjects = unstable_cache(
    async (locale: Locale) => getProjects(locale),
    ["projects"],
    { revalidate: 3600, tags: ["projects"] },
);
