import React from "react"
import { Routes, Route } from "react-router-dom";
import SignUp from "./Pages/Login/SignUp/SignUp"

function App() {

  return (
    <div className="App">

      <Routes>
        <Route path="/" exact element={<SignUp />} />

      </Routes>

    </div>
  )
}

export default App
