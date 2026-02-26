import type { CollectionConfig } from "payload";
import { nanoIDField } from "./utils/nano-id-field";
import { revalidateTag } from "next/cache";

export const Experience: CollectionConfig = {
    slug: "experience",
    admin: {
        useAsTitle: "name",
        defaultColumns: ["name", "fullName", "years"],
    },
    hooks: {
        afterChange: [
            () => {
                revalidateTag("experience", "max");
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
                description: "Nom court (ex: 42 School)",
            },
        },
        {
            name: "fullName",
            type: "text",
            localized: true,
            required: true,
            admin: {
                description: "Nom complet (ex: 42 Lyon)",
            },
        },
        {
            name: "description",
            type: "textarea",
            localized: true,
            required: true,
            admin: {
                description: "Description de l'expérience",
            },
        },
        {
            name: "icon",
            type: "text",
            required: true,
            admin: {
                description: "Nom de l'icône Lucide (ex: Code2, Briefcase)",
            },
        },
        {
            name: "location",
            type: "text",
            required: true,
            admin: {
                description: "Lieu de l'expérience",
            },
        },
        {
            name: "years",
            type: "text",
            required: true,
            admin: {
                description: "Années (ex: 2020-2023)",
            },
        },
    ],
};
