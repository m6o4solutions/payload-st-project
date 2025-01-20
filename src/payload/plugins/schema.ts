import { Plugin } from "payload";

import { uploadthingStorage } from "@payloadcms/storage-uploadthing";

import { Media } from "@/payload/collections/media/schema";

export const plugins: Plugin[] = [
	uploadthingStorage({
		collections: {
			[Media.slug]: true,
		},
		options: {
			token: process.env.UPLOADTHING_TOKEN!,
			acl: "public-read",
		},
	}),
];
