import React from "react"
import Card from "./shared/card"
import PropTypes from "prop-types"
import { FaTimes } from "react-icons/fa"

function FeedbackItem({ item, handleDelete }) {
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button className="close">
        <FaTimes onClick={() => handleDelete(item.id)} color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  )
}

FeedbackItem.prototype = {
  item: PropTypes.object.isRequired,
}

export default FeedbackItem
