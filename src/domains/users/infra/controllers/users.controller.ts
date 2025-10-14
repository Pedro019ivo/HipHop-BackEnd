import type { FastifyReply, FastifyRequest } from "fastify"

import { z } from "zod"
import { makeCreatUser } from "../../use-cases/factories/make-create-users"

export async function createUser(request: FastifyRequest, reply: FastifyReply) {
  const createUserSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string(),
  })

  const { name, email, password } = createUserSchema.parse(request.body)

  const createUser = makeCreatUser()

  await createUser.execute({ name, email, password })

  return reply.status(201).send("Criação de usuario")
}
