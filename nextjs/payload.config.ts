import path from "node:path";
import { fileURLToPath } from "node:url";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { buildConfig } from "payload";
import sharp from "sharp";
import { About } from "./collections/About";
import { Certifications } from "./collections/Certifications";
import { Contact } from "./collections/Contact";
import { Experience } from "./collections/Experience";
import { Media } from "./collections/Media";
import { NavLinks } from "./collections/NavLinks";
import { Projects } from "./collections/Projects";
import { SkillCategories } from "./collections/SkillCategories";
import { Skills } from "./collections/Skills";
import { Users } from "./collections/Users";
import { defaultLocale } from "@/lib/i18n/routing";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
	admin: {
		user: Users.slug,
		importMap: {
			baseDir: path.resolve(dirname),
		},
	},
	collections: [
		Users,
		Media,
		NavLinks,
		About,
		Certifications,
		Contact,
		Experience,
		Projects,
		SkillCategories,
		Skills,
	],
	editor: lexicalEditor(),
	secret: process.env.PAYLOAD_SECRET || "",
	typescript: {
		outputFile: path.resolve(dirname, "payload-types.ts"),
	},
	db: postgresAdapter({
		pool: {
			connectionString: process.env.DATABASE_URL || "",
		},
	}),
	sharp,
	plugins: [],
	localization: {
		locales: ["fr", "en"],
		defaultLocale,
		fallback: true,
	},
});
