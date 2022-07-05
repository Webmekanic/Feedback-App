import React, { useState } from "react"
import Header from "./components/Header"
import FeedbackData from "./data/feedbackData"
import FeedbackList from "./components/feedbackList"
import FeedbackStat from "./components/feedbackStat"
import FeedbackForm from "./components/feedbackForm"
import { v4 as uuidv4 } from "uuid"

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
    <>
      <Header />
      <div className="container">
        <FeedbackForm handleAdd={addFeedback} />
        <FeedbackStat feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  )
}

export default App
