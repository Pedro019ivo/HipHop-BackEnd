import { connection } from "../../../../config/database"
import type { UserCreateRequestDTO } from "../../dtos/user/user-create-request.dto"
import type { UserCreateResponseDTO } from "../../dtos/user/user-create-response.dto"
import type { UsersRepositoryInterface } from "../users.interface"

export class UsersRepository implements UsersRepositoryInterface {
  async create(user: UserCreateRequestDTO): Promise<void> {
    await connection
      .insert({
        name: user.name,
        email: user.email,
        password: user.password,
      })
      .into("users")
  }

  async getByEmail(email: string): Promise<UserCreateResponseDTO | null> {
    const user = await connection
      .select("*")
      .from("users")
      .where("email", email)
      .first()
    return user
  }
}
