import { getPayloadClient } from "@/lib/payload";
import type { Skill } from "@/payload-types";
import { cacheTag, cacheLife } from "next/cache";
import type { Locale } from "@/lib/i18n/routing";

export async function getSkills(locale: Locale): Promise<Skill[]> {
    "use cache";
    cacheLife("hours");
    cacheTag("skills");

    const payload = await getPayloadClient();

    const { docs } = await payload.find({
        collection: "skills",
        depth: 1,
        locale,
    });

    return docs;
}
