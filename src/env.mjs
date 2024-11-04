import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"



export const env = createEnv({
  server: {
    // This is optional because it's only used in development.
    // See https://next-auth.js.org/deployment.
  
    DATABASE_URL: z.string().min(1),
    RESEND_API_KEY: z.string().min(1),

    STRIPE_API_KEY: z.string().min(1),
    STRIPE_WEBHOOK_SECRET: z.string().min(1),
  },

  client: {
    NEXT_PUBLIC_APP_URL: z.string().min(1),
    NEXT_PUBLIC_STRIPE_PRICE_ID_MONTHLY: z.string().min(1),
    NEXT_PUBLIC_STRIPE_PRICE_ID_YEARLY: z.string().min(1),
  },

  runtimeEnv: {  
    DATABASE_URL: process.env.DATABASE_URL,
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,

    // Stripe
    STRIPE_API_KEY: process.env.STRIPE_API_KEY,
    STRIPE_WEBHOOK_SECRET: "123qwe",
    // process.env.STRIPE_WEBHOOK_SECRET,
    NEXT_PUBLIC_STRIPE_PRICE_ID_MONTHLY: process.env.NEXT_PUBLIC_STRIPE_PRICE_ID_MONTHLY,
    NEXT_PUBLIC_STRIPE_PRICE_ID_YEARLY: process.env.NEXT_PUBLIC_STRIPE_PRICE_ID_YEARLY,
  },
})
