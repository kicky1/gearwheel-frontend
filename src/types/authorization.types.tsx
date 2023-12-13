export type LoginInput = {
  username: string
  password: string
}

export type RegisterInput = LoginInput & {
  email: string
}

export type AuthorizationStoreState = {
  username: string
  authorized: boolean
  setUsername: (name: string) => void
  setAuthorized: (flag: boolean) => void
  logoutUser: () => void
}
