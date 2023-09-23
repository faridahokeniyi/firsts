import React from "react"
import { useDispatch } from "react-redux"
import { login, logout } from "../features/User"

const Login = () => {
  const dispatch = useDispatch()
  return (
    <div className="login">
      <h1>Login Here</h1>

      <button
        onClick={() => {
          dispatch(login({ name: "Candi", age: 32, email: "candi@gmail.com" }))
        }}
      >
        Login
      </button>
      <button
        onClick={() => {
          dispatch(logout())
        }}
      >
        Logout
      </button>
    </div>
  )
}
export default Login
