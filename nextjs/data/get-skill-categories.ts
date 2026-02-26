import { unstable_cache } from "next/cache";
import { getPayload } from "payload";
import config from "@/payload.config";
import type { SkillCategory, Skill } from "@/payload-types";
import type { Locale } from "@/lib/i18n/routing";

export type SkillCategoryWithSkills = SkillCategory & {
    skills: Skill[];
};

async function getSkillCategories(locale: Locale): Promise<SkillCategoryWithSkills[]> {
    const payload = await getPayload({ config });

    // Fetch all skills first
    const { docs: allSkills } = await payload.find({
        collection: "skills",
        depth: 0,
        locale,
    });

    // Fetch categories and populate with their skills
    const { docs: categories } = await payload.find({
        collection: "skill-categories",
        depth: 0,
        locale,
    });

    // Group skills by category
    return categories.map((category) => ({
        ...category,
        skills: allSkills.filter((skill) => {
            const categoryId = typeof skill.category === "string"
                ? skill.category
                : skill.category?.id;
            return categoryId === category.id;
        }),
    }));
}

export const getCachedSkillCategories = unstable_cache(
    async (locale: Locale) => getSkillCategories(locale),
    ["skill-categories"],
    { revalidate: 3600, tags: ["skill-categories", "skills"] },
);
