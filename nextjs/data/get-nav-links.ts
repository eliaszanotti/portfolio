import { getPayloadClient } from "@/lib/payload";
import type { NavLink } from "@/payload-types";
import { cacheTag, cacheLife } from "next/cache";
import type { Locale } from "@/lib/i18n/routing";

export async function getNavLinks(locale: Locale): Promise<NavLink[]> {
    "use cache";
    cacheLife("hours");
    cacheTag("nav-links");

    const payload = await getPayloadClient();

    const { docs } = await payload.find({
        collection: "nav-links",
        depth: 0,
        locale,
    });

    return docs;
}
