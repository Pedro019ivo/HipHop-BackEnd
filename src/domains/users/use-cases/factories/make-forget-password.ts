import { ForgetPasswordUseCase } from "../forgot-password"
import { UsersRepository } from "../../repositories/knex/users.repository"

export function makeForgotPassword() {
  const usersRepository = new UsersRepository()
  const forgetPasswordUseCase = new ForgetPasswordUseCase(usersRepository)

  return forgetPasswordUseCase
}
