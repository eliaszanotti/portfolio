import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import path from "path";
import { buildConfig } from "payload";
import { fileURLToPath } from "url";
import sharp from "sharp";
import { s3Storage } from "@payloadcms/storage-s3";

import { Users } from "./collections/Users";
import { Media } from "./collections/Media";
import { Skill } from "./collections/Skill";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
	admin: {
		user: Users.slug,
		importMap: {
			baseDir: path.resolve(dirname),
		},
	},
	collections: [Users, Media, Skill],
	globals: [],
	editor: lexicalEditor({}),
	secret: process.env.PAYLOAD_SECRET || "",
	typescript: {
		outputFile: path.resolve(dirname, "payload-types.ts"),
	},
	db: mongooseAdapter({
		url: process.env.DATABASE_URI || "",
		connectOptions: {
			dbName: process.env.DATABASE_NAME || "",
		},
	}),
	sharp,
	plugins: [
		s3Storage({
			collections: {
				media: true,
				skill: true,
			},
			bucket: process.env.S3_BUCKET || "",
			config: {
				endpoint: process.env.S3_ENDPOINT,
				region: process.env.S3_REGION,
				credentials: {
					accessKeyId: process.env.S3_ACCESS_KEY || "",
					secretAccessKey: process.env.S3_SECRET_KEY || "",
				},
				forcePathStyle: true,
			},
		}),
	],
});
