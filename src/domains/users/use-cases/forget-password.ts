import { randomUUID } from "node:crypto"

import type { IUsersRepository } from "../repositories/users-repository.interface"
import { AppError } from "../../../shared/error/error-handler"
import { MailProvider } from "../../../shared/providers/email/nodemon/nodemonMailProvider"
import { passwordRecovery } from "../../../shared/providers/email/templates/password-recovery"
import { env } from "../../../shared/env/environments"

export class ForgetPasswordUseCase {
  constructor(private usersRepository: IUsersRepository) {
    this.usersRepository = usersRepository
  }

  async execute(email: string) {
    const user = await this.usersRepository.getByEmail(email)
    if (!user) {
      throw new AppError("User not found", 400)
    }

    const mailProvider = new MailProvider()

    const token = randomUUID()

    const html = passwordRecovery(`${env.FRONTEND_URL}/reset-password/${token}`)

    await this.usersRepository.saveTokenInDb(token, user.id)

    return mailProvider.sendMail({
      to: email,
      subject: "Casa do Hip Hop - Password recovery",
      template: html,
    })
  }
}
