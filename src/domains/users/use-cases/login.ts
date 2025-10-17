import type { AuthRequest } from "../dtos/auth/auth.request"
import type { UsersRepositoryInterface } from "../repositories/users.interface"
import { compareHash } from "../../../utils/encrypt"

import jwt from "jsonwebtoken"
import { env } from "../../../shared/env/environments"

export class Login {
  constructor(private usersRepository: UsersRepositoryInterface) {}

  async execute(data: AuthRequest) {
    const user = await this.usersRepository.getByEmail(data.email)

    if (!user || !user.password) {
      throw new Error("User not found")
    }
    const passwordMatch = await compareHash(data.password, user.password)
    if (!passwordMatch) {
      throw new Error("Invalid password")
    }

    const token = jwt.sign({ id: user?.id }, env.JWT_SECRET, {
      expiresIn: env.JWT_EXPIRES_IN,
    } as any)

    return {
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        status: user.status,
        createdAT: user.createdAt,
        updatedAT: user.updatedAt,
      },
      token,
    }
  }
}
