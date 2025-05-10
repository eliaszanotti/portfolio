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
		adminThumbnail: "small",
		mimeTypes: ["image/*"],
		filesRequiredOnCreate: false,
	},
};
