import type { CollectionConfig } from "payload";
import { revalidateTag } from "next/cache";
import { nanoIDField } from "./utils/nano-id-field";

export const Skills: CollectionConfig = {
    slug: "skills",
    admin: {
        useAsTitle: "name",
        defaultColumns: ["name", "level", "category"],
    },
    hooks: {
        afterChange: [
            () => {
                revalidateTag("skills", "max");
            },
        ],
    },
    fields: [
        nanoIDField,
        {
            name: "name",
            type: "text",
            localized: true,
            required: true,
        },
        {
            name: "level",
            type: "select",
            required: true,
            defaultValue: 1,
            options: [
                { label: "Débutant (0)", value: 0 },
                { label: "Intermédiaire (1)", value: 1 },
                { label: "Avancé (2)", value: 2 },
                { label: "Expert (3)", value: 3 },
            ],
        },
        {
            name: "category",
            type: "relationship",
            relationTo: "skill-categories",
            required: true,
            admin: {
                description: "Catégorie de la compétence",
            },
        },
    ],
};
