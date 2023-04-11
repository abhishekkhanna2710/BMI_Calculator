import React from "react"
import { Routes, Route } from "react-router-dom";
import SignUp from "./Pages/Login/SignUp/SignUp"
import Login from "./Pages/Login/Login/Login";
import Calculation from "./Pages/Calculation/Calculation";
import Profile from "./Pages/Profile/Profile";

function App() {

  return (
    <div className="App">

      <Routes>
        <Route path="/" exact element={<SignUp />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/bmi-calculator" exact element={<Calculation />} />
        <Route path="/user-section" exact element={<Profile />} />

      </Routes>

    </div>
  )
}

export default App
