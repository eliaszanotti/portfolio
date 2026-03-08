import { getPayloadClient } from "@/lib/payload";
import type { Project } from "@/payload-types";
import { cacheTag, cacheLife } from "next/cache";
import type { Locale } from "@/lib/i18n/routing";

export async function getProjects(locale: Locale): Promise<Project[]> {
    "use cache";
    cacheLife("hours");
    cacheTag("projects");

    const payload = await getPayloadClient();

    const { docs } = await payload.find({
        collection: "projects",
        depth: 1,
        locale,
    });

    return docs;
}
