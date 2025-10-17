import { UsersRepository } from "../../repositories/driver-acesso-knex/users.repository"
import { Login } from "../login"

export function makeLogin() {
  const usersRepository = new UsersRepository()

  const login = new Login(usersRepository)
  return login
}
