import { getPayloadClient } from "@/lib/payload";
import type { SkillCategory } from "@/payload-types";
import { cacheTag, cacheLife } from "next/cache";
import type { Locale } from "@/lib/i18n/routing";

export async function getSkillCategories(locale: Locale): Promise<SkillCategory[]> {
    "use cache";
    cacheLife("hours");
    cacheTag("skill-categories");
    cacheTag("skills");

    const payload = await getPayloadClient();

    const { docs: categories } = await payload.find({
        collection: "skill-categories",
        depth: 1,
        sort: "title",
        joins: {
            skills: {
                sort: "-level",
            },
        },
        locale,
    });

    return categories;
}
