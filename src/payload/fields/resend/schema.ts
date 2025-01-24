import { resendAdapter } from "@payloadcms/email-resend";

import { Config } from "payload";

import { env } from "@/lib/env";

export const resend: Config["email"] = resendAdapter({
	defaultFromAddress: env.RESEND_FROM_EMAIL,
	defaultFromName: env.RESEND_FROM_NAME,
	apiKey: env.RESEND_API_KEY,
});
