import type { CollectionConfig } from "payload";
import { revalidateTag } from "next/cache";
import { nanoIDField } from "./utils/nano-id-field";

export const About: CollectionConfig = {
    slug: "about",
    admin: {
        useAsTitle: "title",
        defaultColumns: ["title", "icon"],
    },
    hooks: {
        afterChange: [
            () => {
                revalidateTag("about", "max");
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
            name: "icon",
            type: "text",
            required: true,
            admin: {
                description: "Nom de l'icône Lucide (ex: User, Code, Coffee)",
            },
        },
    ],
};
