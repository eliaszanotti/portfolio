import { getPayloadClient } from "@/lib/payload";
import type { About } from "@/payload-types";
import { cacheTag, cacheLife } from "next/cache";
import type { Locale } from "@/lib/i18n/routing";

export async function getAbout(locale: Locale): Promise<About[]> {
    "use cache";
    cacheLife("hours");
    cacheTag("about");

    const payload = await getPayloadClient();

    const { docs } = await payload.find({
        collection: "about",
        depth: 0,
        locale,
    });

    return docs;
}
