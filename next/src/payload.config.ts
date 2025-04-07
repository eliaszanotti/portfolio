import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import path from "path";
import { buildConfig } from "payload";
import { fileURLToPath } from "url";
import sharp from "sharp";

import { Users } from "./collections/Users";
import { Media } from "./collections/Media";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
	admin: {
		user: Users.slug,
		importMap: {
			baseDir: path.resolve(dirname),
		},
	},
	collections: [Users, Media],
	globals: [],
	editor: lexicalEditor({}),
	secret: process.env.PAYLOAD_SECRET || "",
	typescript: {
		outputFile: path.resolve(dirname, "payload-types.ts"),
	},
	db: mongooseAdapter({
		// url: process.env.DATABASE_URI || "",
		url: "mongodb://admineliaszanotti:pL9%5C4p5(z%26K37dq2e9@eliaszanotti.com:27017/boilerplate?authSource=admin",
		connectOptions: {
			dbName: "boilerplate",
		},
	}),
	sharp,
});
