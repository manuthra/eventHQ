import React, { useState } from "react";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        if (!email || !password) {
            alert("Fill all fields");
            return;
        }

        localStorage.setItem("user", email);
        window.location.href = "/";
    };

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">

            <div className="card shadow p-4" style={{ width: "350px" }}>
                <h3 className="text-center mb-3">Login</h3>

                {/* Email */}
                <input type="email" className="form-control mb-3" placeholder="Enter Gmail" onChange={(e) => setEmail(e.target.value)}
                />

                {/* Password */}
                <input type="password" className="form-control mb-3" placeholder="Enter Password"
                onChange={(e) => setPassword(e.target.value)}
                />

                {/* Button */}
                <button className="btn btn-primary w-100" onClick={handleLogin}>
                    Login
                </button>

            </div>

        </div>
    );
}

export default Login;