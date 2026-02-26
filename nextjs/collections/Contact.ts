import type { CollectionConfig } from "payload";
import { revalidateTag } from "next/cache";
import { nanoIDField } from "./utils/nano-id-field";

export const Contact: CollectionConfig = {
    slug: "contact",
    admin: {
        useAsTitle: "name",
        defaultColumns: ["name", "icon", "href"],
    },
    hooks: {
        afterChange: [
            () => {
                revalidateTag("contact", "max");
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
            admin: {
                description: "Nom du contact (ex: GitHub, Instagram)",
            },
        },
        {
            name: "icon",
            type: "text",
            required: true,
            admin: {
                description: "Nom de l'icône Lucide (ex: Github, Instagram, Linkedin)",
            },
        },
        {
            name: "href",
            type: "text",
            required: true,
            admin: {
                description: "URL externe (ex: https://github.com/username)",
            },
        },
    ],
};
