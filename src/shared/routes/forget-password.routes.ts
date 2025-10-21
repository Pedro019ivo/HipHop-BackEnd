import type { FastifyInstance } from "fastify"

import { forgotPassword } from "../shared/controllers/forget-password.controller"
export async function forgotPasswordRoutes(app: FastifyInstance) {
  app.post("/", forgotPassword)
}
