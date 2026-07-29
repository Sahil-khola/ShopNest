import React, { useState, useContext } from 'react'
import { useNavigate , Link} from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import "../styles/auth.css";
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();
    
    async function handelSubmit(e) {
        e.preventDefault();
        try {
            const res = await fetch("/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });
            const data = await res.json();
            if (res.ok) {
                alert("Login successful");
                login(data.user);
                navigate("/");
            }
        } catch (error) {
            alert(error.message);
            console.error(error);
        }
    }
  return (
    <div className="auth-container">
      <form onSubmit={handelSubmit} className="auth-form">
        <input type="text" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type='submit' className='btn'>Login</button>
        <p>Don't have an account? <Link to="/register">Register</Link></p>
      </form>
    </div>
  )
}

export default Login
