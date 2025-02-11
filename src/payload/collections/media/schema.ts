import { anyone } from "@/payload/access/anyone";
import { authenticated } from "@/payload/access/authenticated";

import type { CollectionConfig } from "payload";

export const Media: CollectionConfig = {
	slug: "media",
	labels: {
		singular: "Media",
		plural: "Media",
	},
	admin: {
		defaultColumns: ["filename", "mimeType", "alt", "createdAt", "updatedAt"],
		useAsTitle: "alt",
	},
	access: {
		create: authenticated,
		delete: authenticated,
		read: anyone,
		update: authenticated,
	},
	fields: [
		{
			name: "alt",
			type: "text",
			required: true,
		},
	],
	upload: {
		adminThumbnail: "thumbnail",
		focalPoint: true,
		imageSizes: [
			{
				name: "thumbnail",
				width: 300,
			},
			{
				name: "square",
				width: 500,
				height: 500,
			},
			{
				name: "small",
				width: 600,
			},
			{
				name: "medium",
				width: 900,
			},
			{
				name: "large",
				width: 1400,
			},
			{
				name: "xlarge",
				width: 1920,
			},
			{
				name: "og",
				width: 1200,
				height: 630,
				crop: "center",
			},
		],
		mimeTypes: ["image/*"],
	},
};
