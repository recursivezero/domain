import { config } from "dotenv";
import { expand } from "dotenv-expand";
import path from "node:path";
import { z } from "zod";

// Load .env file
expand(
  config({
    path: path.resolve(
      process.cwd(),
      process.env.NODE_ENV === "test" ? ".env.test" : ".env"
    )
  })
);

// Schema
const EnvSchema = z
  .object({
    NODE_ENV: z.string().default("development"),
    PORT: z.coerce.number().default(4321),
    LOG_LEVEL: z.enum([
      "fatal",
      "error",
      "warn",
      "info",
      "debug",
      "trace",
      "silent"
    ])
  })
  .superRefine((input, ctx) => {
    if (input.NODE_ENV === "production" && !input.LOG_LEVEL) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "LOG_LEVEL must be set in production"
      });
    }
  });

// Type
export type envType = z.infer<typeof EnvSchema>;

// ✅ Correct safeParse handling
const result = EnvSchema.safeParse(process.env);

if (!result.success) {
  console.error("❌ Invalid env:");
  console.error(JSON.stringify(result.error.flatten().fieldErrors, null, 2));
  process.exit(1);
}

const env = result.data;

export default env;