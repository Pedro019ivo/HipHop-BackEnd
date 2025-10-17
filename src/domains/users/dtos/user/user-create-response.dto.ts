export interface UserCreateResponseDTO {
  id: string
  name: string
  email: string
  status: boolean
  createdAt: Date
  updatedAt: Date
  password?: string
}
