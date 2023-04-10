import React from "react"
import { Routes, Route } from "react-router-dom";
import SignUp from "./Pages/Login/SignUp/SignUp"
import Login from "./Pages/Login/Login/Login";

function App() {

  return (
    <div className="App">

      <Routes>
        <Route path="/" exact element={<SignUp />} />
        <Route path="/login" exact element={<Login />} />

      </Routes>

    </div>
  )
}

export default App
