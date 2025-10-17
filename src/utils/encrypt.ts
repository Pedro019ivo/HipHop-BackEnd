import { env } from "../shared/env/environments"
import bcrypt from "bcrypt"

export async function generateHash(password: string): Promise<string> {
  return await bcrypt.hash(password, env.SALT_RESULT)
}

export async function compareHash(
  password: string,
  hashedPassword: string,
): Promise<boolean> {
  return await bcrypt.compare(password, hashedPassword)
}
