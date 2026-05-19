export interface LoginDTO {
  email: string
  password: string
}

export interface RegisterDTO {
  email: string
  password: string
  fullName: string
}

export interface AuthResponseDTO {
  user: {
    id: string
    email: string
    fullName: string
    avatar?: string
  }
  token?: string
}
