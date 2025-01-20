import { withPayload } from "@payloadcms/next/withPayload";

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "http",
				hostname: "localhost",
				port: "3000",
			},
			{
				protocol: "https",
				hostname: process.env.NEXT_PUBLIC_SERVER_URL_PRD!,
			},
		],
	},
};

export default withPayload(nextConfig);
