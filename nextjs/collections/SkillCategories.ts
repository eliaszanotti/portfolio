import type { CollectionConfig } from "payload";
import { revalidateTag } from "next/cache";
import { nanoIDField } from "./utils/nano-id-field";

export const SkillCategories: CollectionConfig = {
    slug: "skill-categories",
    admin: {
        useAsTitle: "title",
        defaultColumns: ["title"],
    },
    hooks: {
        afterChange: [
            () => {
                revalidateTag("skill-categories", "max");
                revalidateTag("skills", "max");
            },
        ],
    },
    fields: [
        nanoIDField,
        {
            name: "title",
            type: "text",
            localized: true,
            required: true,
        },
    ],
};
