import { unstable_cache } from "next/cache";
import { getPayload } from "payload";
import config from "@/payload.config";
import type { SkillCategory } from "@/payload-types";
import type { Locale } from "@/lib/i18n/routing";

async function getSkillCategories(locale: Locale): Promise<SkillCategory[]> {
	const payload = await getPayload({ config });

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

export const getCachedSkillCategories = unstable_cache(
	async (locale: Locale) => getSkillCategories(locale),
	["skill-categories"],
	{ revalidate: 3600, tags: ["skill-categories", "skills"] },
);
