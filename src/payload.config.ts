import sharp from "sharp";

import { sqliteAdapter } from "@payloadcms/db-sqlite";
import { buildConfig } from "payload";

import path from "path";
import { fileURLToPath } from "url";

import { collections } from "@/payload/collections";
import { Users } from "@/payload/collections/users/schema";

import { env } from "@/lib/env";

import { lexical } from "@/payload/fields/lexical/schema";
import { resend } from "@/payload/fields/resend/schema";

import { plugins } from "@/payload/plugins/schema";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
	admin: {
		importMap: {
			baseDir: path.resolve(dirname),
		},
		meta: {
			titleSuffix: " | Payload",
		},
		user: Users.slug,
	},
	collections: collections,
	db: sqliteAdapter({
		client: {
			url: env.DATABASE_URI,
			authToken: env.DATABASE_AUTH_TOKEN,
		},
	}),
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
