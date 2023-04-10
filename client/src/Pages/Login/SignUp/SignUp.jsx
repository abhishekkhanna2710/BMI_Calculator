import React, { useState } from "react";
import signStyle from "./Sign.module.css"
import { NavLink, useNavigate } from "react-router-dom";


const SignUp = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
    })
    const [error, setError] = useState("")
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();

        const { name, email, password } = user;

        try {
            const res = await fetch("http://localhost:8000/api/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    email,
                    password,
                }),
            });

            const data = await res.json();



            if (data.message === "User Created Successfully") {
                console.log(data.message);
                alert("User Created Successfully")
                navigate("/login")

            } else if (!data.success) {
                setError(data.message);
                console.log(data);

            }

        } catch (error) {
            if (error.response && error.response.status >= 400 && error.response <= 500) {
                setError(error.response.data.message)
                console.log(error)
            }
        }
    };

    return (
        <div className={signStyle.Signup}>
            <h1>Register your Account</h1>
            <form onSubmit={handleSubmit} className={signStyle.signForm}>
                <label>
                    Name:
                    <input type="text" name="name" placeholder="Enter your name" value={user.name} onChange={handleInputChange} />
                </label>
                <br />
                <label>
                    Email:
                    <input type="email" name="email" placeholder="Enter Your Email" value={user.email} onChange={handleInputChange} />
                </label>
                <br />
                <label>
                    Password:
                    <input type="password" name="password" placeholder="Enter password" value={user.password} onChange={handleInputChange} />
                </label>
                <br />
                {error && <div className={signStyle.error}>{error}</div>}
                <br />
                <button className={signStyle.signButton} type="submit">Sign up</button>
                <br />
                <NavLink className={signStyle.navs}
                    to="/login"
                >
                    Already Have an Account  →
                </NavLink>
            </form>

        </div>
    );
};

export default SignUp;

