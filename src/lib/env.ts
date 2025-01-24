import zod from "zod";

const envSchema = zod.object({
	DATABASE_URI: zod.string().nonempty(),
	PAYLOAD_SECRET: zod.string().nonempty(),
	RESEND_API_KEY: zod.string().nonempty(),
	RESEND_FROM_EMAIL: zod.string().nonempty(),
	RESEND_FROM_NAME: zod.string().nonempty(),
	UPLOADTHING_TOKEN: zod.string().nonempty(),
	NEXT_PUBLIC_SERVER_URL: zod.string().nonempty(),
});

export const env = envSchema.parse(process.env);
