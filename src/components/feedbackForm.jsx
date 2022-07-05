import React, { useState } from "react"
import Button from "./shared/button"
import Card from "./shared/card"

function FeedbackForm() {
  const [text, setText] = useState("")
  const handleTextChange = (e) => {
    setText(e.target.value)
  }
  return (
    <Card>
      <form>
        <h2>How would you rate your service with us?</h2>
        {/* {@todo ratings select component} */}
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="write a review"
            value={text}
          />
          <Button type={"submit"}>Send</Button>
        </div>
      </form>
    </Card>
  )
}

export default FeedbackForm
