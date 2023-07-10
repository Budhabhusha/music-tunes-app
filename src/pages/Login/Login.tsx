import { useState } from "react"
import './style.css'
const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  return (
    <div className="login">
      <form className="login__form">
        <h1>Login Here..</h1>
        <input 
          type="email" 
          placeholder="Enter Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <input 
          type="password" 
          placeholder="Enter Password" 
          value={password} 
          onChange={(e)=> setPassword(e.target.value)}
        />
        <button type="submit" className="submit__btn">LogIn</button>
      </form>
    </div>
  )
}

export default Login