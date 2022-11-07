const { z } = require('zod');
import * as dotenv from 'dotenv';

/*eslint sort-keys: "error"*/
const envSchema = z.object({
    DATABASE_URL: z.string().url(),
    NODE_ENV: z.enum(['development', 'test', 'production']),
});

if(process.env.NODE_ENV !== 'production') {
    dotenv.config()
}

const env = envSchema.safeParse(process.env);

if (!env.success) {
    console.error(
        '❌ Invalid environment variables:',
        JSON.stringify(env.error.format(), null, 4),
    );
    process.exit(1);
}

export default env.data;