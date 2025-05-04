import { withPayload } from "@payloadcms/next/withPayload";

import { env } from "@/lib/env";

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	turbopack: {
		resolveExtensions: [".mdx", ".tsx", ".ts", ".jsx", ".js", ".mjs", ".json"],
	},
	images: {
		remotePatterns: [
			(() => {
				const url = new URL(env.NEXT_PUBLIC_SERVER_URL);

				return {
					protocol: url.protocol.replace(":", "") as "http" | "https",
					hostname: url.hostname,
					port: url.hostname === "localhost" ? url.port : undefined,
				};
			})(),
		],
	},
};

export default withPayload(nextConfig, { devBundleServerPackages: false });
