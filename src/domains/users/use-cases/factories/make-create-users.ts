import { CreateUser } from "../create-users"
import { UsersRepository } from "../../repositories/driver-acesso-knex/users.repository"

export function makeCreatUser() {
  const usersRepository = new UsersRepository()
  const createUser = new CreateUser(usersRepository)

  return createUser
}
