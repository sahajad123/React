import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const credentials = [{ email: "test@123", password: "test123" },
{ email: "test@124", password: "test124" },
{ email: "test@125", password: "test125" }
]
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();

        for (let i = 0; i < credentials.length; i++) {
            if (credentials[i].email === email && credentials[i].password === password) {
                setIsAuthenticated(true);
                break;
            }
        }
        if (isAuthenticated) {
            navigate("/Home")
        } else {
            alert("Invalid username or password")
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)} value={email} />
                    <div id="emailHelp" className="form-text" >We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e) => setPassword(e.target.value)} value={password} />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Login
