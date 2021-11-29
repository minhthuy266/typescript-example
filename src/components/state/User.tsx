import { useState } from "react"

type AuthUser = {
  name: string
  email: string
}

const User = () => {
  const handleLogin = () => {
    setUser({
      name: "Thuy",
      email: "thuy@test.com",
    })
  }
  const handleLogout = () => {
    setUser(null)
  }
  const [user, setUser] = useState<AuthUser | null>(null)
  //   const [user, setUser] = useState<AuthUser>({} as AuthUser)

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User name is {user?.name}</div>
      <div>User email is {user?.email}</div>
    </div>
  )
}

export default User
