import React from "react"
import { Route } from "react-router-dom"
import Home from "./home/Home"
import AppBar from "./partials/AppBar"

const App = () => {
  return (
    <>
      <AppBar />
      <Route exact path="/" component={Home} />
    </>
  )
}

export default App
