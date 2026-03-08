import { getPayloadClient } from "@/lib/payload";
import type { Certification } from "@/payload-types";
import { cacheTag, cacheLife } from "next/cache";
import type { Locale } from "@/lib/i18n/routing";

export async function getCertifications(locale: Locale): Promise<Certification[]> {
    "use cache";
    cacheLife("hours");
    cacheTag("certifications");

    const payload = await getPayloadClient();

    const { docs } = await payload.find({
        collection: "certifications",
        depth: 0,
        locale,
    });

    return docs;
}
