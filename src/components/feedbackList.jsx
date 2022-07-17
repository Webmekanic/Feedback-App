import React, { useContext } from "react"
import FeedbackItem from "./feedbackItem"
import { motion, AnimatePresence } from "framer-motion"
import FeedbackContext from "../context/feedBackContext"

function FeedbackList() {
  const { feedback, isLoading } = useContext(FeedbackContext)
  if (!isLoading && (!feedback || feedback.length === 0)) {
    return <p>No feedback available</p>
  }
  return isLoading ? (
    <h3>Loading feedback......</h3>
  ) : (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem key={item.id} item={item} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}

export default FeedbackList
