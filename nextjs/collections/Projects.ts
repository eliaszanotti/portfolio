import type { CollectionConfig } from "payload";
import { revalidateTag } from "next/cache";
import { nanoIDField } from "./utils/nano-id-field";

export const Projects: CollectionConfig = {
    slug: "projects",
    admin: {
        useAsTitle: "title",
        defaultColumns: ["title", "description"],
    },
    hooks: {
        afterChange: [
            () => {
                revalidateTag("projects", "max");
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
        {
            name: "description",
            type: "textarea",
            localized: true,
            required: true,
        },
        {
            name: "tags",
            type: "relationship",
            relationTo: "skills",
            hasMany: true,
            admin: {
                description: "Compétences associées au projet",
            },
        },
        {
            name: "github",
            type: "text",
            admin: {
                description: "Lien vers le dépôt GitHub (optionnel)",
            },
        },
        {
            name: "demo",
            type: "text",
            admin: {
                description: "Lien vers la démo en ligne (optionnel)",
            },
        },
    ],
};
