//import { generateHash } from ""
import type { IUserDTO } from "../dtos/users.dto"
import type { UsersRepositoryInterface } from "../repositories/users.interface"

export class CreateUser {
  constructor(private usersRepository: UsersRepositoryInterface) {}

  async execute(user: IUserDTO): Promise<void> {
    // const userExists = await this.usersRepository.getByEmail(user.email)

    //if (userExists) {
    // throw new Error("User already exists")
    //}

    //const hashedPassword = await generateHash(user.password)

    //Object.assign(user, { password: hashedPassword })

    await this.usersRepository.create(user)
  }
}
