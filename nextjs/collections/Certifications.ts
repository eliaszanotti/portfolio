import type { CollectionConfig } from "payload";
import { revalidateTag } from "next/cache";
import { nanoIDField } from "./utils/nano-id-field";

export const Certifications: CollectionConfig = {
    slug: "certifications",
    admin: {
        useAsTitle: "name",
        defaultColumns: ["name", "year", "icon"],
    },
    hooks: {
        afterChange: [
            () => {
                revalidateTag("certifications", "max");
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
            name: "year",
            type: "text",
            required: true,
        },
        {
            name: "icon",
            type: "text",
            required: true,
            admin: {
                description: "Nom de l'icône Lucide (ex: Award, GraduationCap)",
            },
        },
    ],
};
