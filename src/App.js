import React, { useState } from "react"
import { v4 as uuidv4 } from "uuid"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import FeedbackData from "./data/feedbackData"
import FeedbackList from "./components/feedbackList"
import FeedbackStat from "./components/feedbackStat"
import FeedbackForm from "./components/feedbackForm"
import AboutPage from "./pages/aboutPage"
import { FeedbackProvider } from "./context/feedBackContext"
import AboutIconLink from "./components/aboutIconLink"

function App() {
  const [feedback, setFeedback] = useState(FeedbackData)

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])

    console.log(newFeedback)
  }
  const deleteFeedback = (id) => {
    console.log(id)
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <FeedbackForm handleAdd={addFeedback} />
                  <FeedbackStat />
                  <FeedbackList handleDelete={deleteFeedback} />
                </>
              }
            ></Route>
            <Route path="/about" element={<AboutPage />} />
          </Routes>
          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  )
}

export default App
