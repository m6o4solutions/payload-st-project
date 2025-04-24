import sharp from "sharp";

import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { buildConfig } from "payload";

import path from "path";
import { fileURLToPath } from "url";

import { collections } from "@/payload/collections";
import { Users } from "@/payload/collections/users/schema";

import { lexical } from "@/payload/fields/lexical";
import { resend } from "@/payload/fields/resend";

import { plugins } from "@/payload/plugins/schema";

import { env } from "@/lib/env";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
	admin: {
		importMap: {
			baseDir: path.resolve(dirname),
		},
		meta: {
			titleSuffix: " | Superior Software Solutions",
		},
		user: Users.slug,
	},
	collections: collections,
	db: mongooseAdapter({ url: env.DATABASE_URI }),
	editor: lexical,
	email: resend,
	globals: [],
	plugins: [...plugins],
	secret: env.PAYLOAD_SECRET,
	sharp,
	typescript: {
		autoGenerate: true,
		outputFile: path.resolve(dirname, "payload-types.ts"),
	},
});
