import { getPayloadClient } from "@/lib/payload";
import type { Experience } from "@/payload-types";
import { cacheTag, cacheLife } from "next/cache";
import type { Locale } from "@/lib/i18n/routing";

export async function getExperience(locale: Locale): Promise<Experience[]> {
    "use cache";
    cacheLife("hours");
    cacheTag("experience");

    const payload = await getPayloadClient();

    const { docs } = await payload.find({
        collection: "experience",
        depth: 0,
        locale,
    });

    return docs;
}
