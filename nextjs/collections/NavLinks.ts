import type { CollectionConfig } from "payload";
import { revalidateTag } from "next/cache";
import { nanoIDField } from "./utils/nano-id-field";

export const NavLinks: CollectionConfig = {
	slug: "nav-links",
	admin: {
		useAsTitle: "title",
		defaultColumns: ["title", "icon", "buttonSize"],
	},
	hooks: {
		afterChange: [
			() => {
				revalidateTag("nav-links", "max");
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
			name: "href",
			type: "text",
			admin: {
				description: "Lien externe (optionnel)",
			},
		},
		{
			name: "anchor",
			type: "text",
			admin: {
				description: "Ancre interne (optionnel, ex: skills)",
			},
		},
		{
			name: "icon",
			type: "text",
			required: true,
			admin: {
				description: "Nom de l'icône Lucide (ex: Code, GraduationCap)",
			},
		},
		{
			name: "buttonSize",
			type: "number",
			required: true,
			defaultValue: 192,
			admin: {
				description: "Taille du bouton en pixels (ex: 192)",
			},
		},
		{
			name: "buttonVariant",
			type: "select",
			defaultValue: "ghost",
			options: [
				{ label: "Default", value: "default" },
				{ label: "Outline", value: "outline" },
				{ label: "Ghost", value: "ghost" },
				{ label: "Secondary", value: "secondary" },
			],
		},
		{
			name: "positionTop",
			type: "text",
			defaultValue: "50%",
			admin: {
				description: "Position top en % (ex: 20%)",
			},
		},
		{
			name: "positionLeft",
			type: "text",
			defaultValue: "50%",
			admin: {
				description: "Position left en % (ex: 20%)",
			},
		},
		{
			name: "isContactDialog",
			type: "checkbox",
			defaultValue: false,
			label: "Ouvre le dialog de contact",
		},
		{
			name: "isContactLink",
			type: "checkbox",
			defaultValue: false,
			label: "Est un lien de contact",
		},
	],
};
