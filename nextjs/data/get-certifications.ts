import { unstable_cache } from "next/cache";
import { getPayload } from "payload";
import config from "@/payload.config";
import type { Certification } from "@/payload-types";
import type { Locale } from "@/lib/i18n/routing";

async function getCertifications(locale: Locale): Promise<Certification[]> {
    const payload = await getPayload({ config });

    const { docs } = await payload.find({
        collection: "certifications",
        depth: 0,
        locale,
    });

    return docs;
}

export const getCachedCertifications = unstable_cache(
    async (locale: Locale) => getCertifications(locale),
    ["certifications"],
    { revalidate: 3600, tags: ["certifications"] },
);
