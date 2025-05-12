import type { CollectionConfig } from "payload";

export const Skill: CollectionConfig = {
	slug: "skill",
	fields: [
		{
			name: "name",
			type: "text",
		},
		{
			type: "row",
			fields: [
				{
					name: "color",
					type: "text",
				},
				{
					name: "invert",
					type: "checkbox",
					defaultValue: false,
				},
			],
		},
		{
			name: "size",
			type: "select",
			options: ["1", "2", "3"],
		},
	],
	upload: {
		mimeTypes: ["image/*"],
		filesRequiredOnCreate: false,
	},
};
