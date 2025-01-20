import { withPayload } from "@payloadcms/next/withPayload";

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			(() => {
				const url = new URL(process.env.NEXT_PUBLIC_SERVER_URL!);

				return {
					protocol: url.protocol.replace(":", "") as "http" | "https",
					hostname: url.hostname,
					port: url.hostname === "localhost" ? url.port : undefined,
				};
			})(),
		],
	},
};

export default withPayload(nextConfig);
