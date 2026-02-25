import { nanoid } from "nanoid";
import type { TextField } from "payload";

export const nanoIDField: TextField = {
	name: "id",
	type: "text",
	required: true,
	unique: true,
	index: true,
	defaultValue: nanoid(),
	admin: {
		hidden: true,
	},
};
