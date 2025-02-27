import { isAdminOrHasSiteAccess, isAdmin } from "@/payload/access/access-control";

import type { CollectionConfig } from "payload";

const Sites: CollectionConfig = {
	slug: "sites",
	labels: {
		singular: "Site",
		plural: "Sites",
	},
	admin: {
		defaultColumns: ["title", "createdAt", "updatedAt"],
		useAsTitle: "title",
	},
	access: {
		// only admins can create sites
		create: isAdmin,
		// only admins or editors with site access can read site data
		read: isAdminOrHasSiteAccess("id"),
		// only admins can update sites
		update: isAdmin,
		// only admins can delete sites
		delete: isAdmin,
	},
	fields: [
		{
			name: "title",
			label: "Title",
			type: "text",
			required: true,
		},
	],
};

export { Sites };
