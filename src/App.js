import React, { useState } from "react"
import Header from "./components/Header"
import FeedbackItem from "./components/feedbackItem"

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <FeedbackItem />
      </div>
    </>
  )
}

export default App
