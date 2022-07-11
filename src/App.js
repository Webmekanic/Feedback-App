import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import FeedbackList from "./components/feedbackList"
import FeedbackStat from "./components/feedbackStat"
import FeedbackForm from "./components/feedbackForm"
import AboutPage from "./pages/aboutPage"
import { FeedbackProvider } from "./context/feedBackContext"
import AboutIconLink from "./components/aboutIconLink"

function App() {
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
                  <FeedbackForm />
                  <FeedbackStat />
                  <FeedbackList />
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
