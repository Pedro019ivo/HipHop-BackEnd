import type { UserCreateRequestDTO } from "../dtos/user/user-create-request.dto"
import type { UserCreateResponseDTO } from "../dtos/user/user-create-response.dto"

export interface UsersRepositoryInterface {
  create(user: UserCreateRequestDTO): Promise<void>
  getByEmail(email: string): Promise<UserCreateResponseDTO | null>
  //
  create(data: any): Promise<void>
}
