import sharp from "sharp";

import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { buildConfig } from "payload";

import path from "path";
import { fileURLToPath } from "url";

import { collections } from "@/payload/collections";
import { Users } from "@/payload/collections/users/schema";

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
	db: mongooseAdapter({ url: process.env.DATABASE_URI! }),
	editor: lexical,
	email: resend,
	globals: [],
	plugins: [...plugins],
	secret: process.env.PAYLOAD_SECRET!,
	sharp,
	typescript: {
		autoGenerate: true,
		outputFile: path.resolve(dirname, "payload-types.ts"),
	},
});
