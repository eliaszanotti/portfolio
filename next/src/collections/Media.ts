import type { CollectionConfig } from "payload";

export const Media: CollectionConfig = {
	slug: "media",
	access: {
		read: () => true,
	},
	fields: [
		{
			name: "alt",
			label: "Alternative text",
			type: "text",
		},
	],
	upload: {
		mimeTypes: ["image/*"],
		filesRequiredOnCreate: false,
	},
};
