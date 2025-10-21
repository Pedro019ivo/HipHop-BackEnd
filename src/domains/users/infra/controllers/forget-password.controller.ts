import type { FastifyReply, FastifyRequest } from "fastify"

import { z } from "zod"
import { makeForgotPassword } from "../../use-cases/factories/make-forgot-password"

export async function forgotPassword(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const forgotPasswordSchema = z.object({
    email: z.string().email(),
  })

  const { email } = forgotPasswordSchema.parse(request.body)

  const forgotPassword = makeForgotPassword()

  await forgotPassword.execute(email)

  return reply.status(200).send("Email sent")
}
