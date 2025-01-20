import { resendAdapter } from "@payloadcms/email-resend";

import { Config } from "payload";

export const resend: Config["email"] = resendAdapter({
	defaultFromAddress: process.env.RESEND_FROM_EMAIL!,
	defaultFromName: process.env.RESEND_FROM_NAME!,
	apiKey: process.env.RESEND_API_KEY!,
});
