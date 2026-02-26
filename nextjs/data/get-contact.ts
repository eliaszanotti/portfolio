import { unstable_cache } from "next/cache";
import { getPayload } from "payload";
import config from "@/payload.config";
import type { NavLink } from "@/payload-types";
import type { Locale } from "@/lib/i18n/routing";

async function getContact(locale: Locale): Promise<NavLink[]> {
    const payload = await getPayload({ config });

    const { docs } = await payload.find({
        collection: "nav-links",
        depth: 0,
        locale,
        where: {
            isContactDialog: {
                equals: true,
            },
        },
    });

    return docs;
}

export const getCachedContact = unstable_cache(
    async (locale: Locale) => getContact(locale),
    ["nav-links"],
    { revalidate: 3600, tags: ["nav-links"] },
);
