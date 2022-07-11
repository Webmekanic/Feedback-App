import React, { useContext } from "react"
import Card from "./shared/card"
import PropTypes from "prop-types"
import { FaTimes } from "react-icons/fa"
import FeedbackContext from "../context/feedBackContext"

function FeedbackItem({ item }) {
  const { deleteFeedback } = useContext(FeedbackContext)
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button className="close">
        <FaTimes onClick={() => deleteFeedback(item.id)} color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  )
}

FeedbackItem.prototype = {
  item: PropTypes.object.isRequired,
}

export default FeedbackItem
