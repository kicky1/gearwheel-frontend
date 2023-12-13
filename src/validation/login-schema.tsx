import z from 'zod'

export type SignInSchemaType = z.infer<typeof SignInSchema>
export type SignUpSchemaType = z.infer<typeof SignUpSchema>

export const SignInSchema = z.object({
  username: z.string().min(1, 'Value is too short'),
  password: z.string().min(6, 'Password is too short'),
})

export const SignUpSchema = z.object({
  username: z.string().min(1, 'Value is too short'),
  password: z.string().min(6, 'Password is too short'),
  email: z.string().email('Invalid email'),
})
