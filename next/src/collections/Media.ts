import type { CollectionConfig } from "payload";
import { imageSizes } from "@constants/imageSizes";

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
		staticDir: "media",
		imageSizes,
		adminThumbnail: "small",
		mimeTypes: ["image/*"],
		filesRequiredOnCreate: false,
	},
};
