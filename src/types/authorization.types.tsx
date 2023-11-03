export type AuthorizationStoreState = {
    authorized: boolean
    username: string
    setUsername: (name: string) => void
    setAuthorized: (flag: boolean) => void
    loginUser: (username: string, password: string) => void
    logoutUser: () => void
  }