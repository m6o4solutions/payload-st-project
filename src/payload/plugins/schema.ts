import { Plugin } from "payload";

import { uploadthingStorage } from "@payloadcms/storage-uploadthing";

import { Media } from "@/payload/collections/media/schema";

import { env } from "@/lib/env";

export const plugins: Plugin[] = [
	uploadthingStorage({
		collections: {
			[Media.slug]: true,
		},
		options: {
			token: env.UPLOADTHING_TOKEN,
			acl: "public-read",
		},
	}),
];
