import { config } from "dotenv";
import { expand } from "dotenv-expand";
import path from "node:path";
import { z } from "zod";

//console.log(process.cwd(), import.meta.url);

expand(
  config({
    path: path.resolve(process.cwd(), process.env.NODE_ENV === "test" ? ".env.test" : ".env")
  })
);

const EnvSchema = z
  .object({
    NODE_ENV: z.string().default("development"),
    PORT: z.coerce.number().default(4321),
    LOG_LEVEL: z.enum(["fatal", "error", "warn", "info", "debug", "trace", "silent"])
  })
  .superRefine((input, ctx) => {
    if (input.NODE_ENV === "production") {
      ctx.addIssue({
        code: z.ZodIssueCode.invalid_type,
        expected: "string",
        received: "undefined",
        message: "Must be set when NODE_ENV is 'production'"
      });
    }
  });

export type envType = z.infer<typeof EnvSchema>;

// eslint-disable-next-line ts/no-redeclare
const { data: env, error } = EnvSchema.safeParse(process.env);

if (error) {
  console.error("❌ Invalid env:");
  console.error(JSON.stringify(error.flatten().fieldErrors, null, 2));
  process.exit(1);
}

export default env!;
