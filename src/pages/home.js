import React from "react"
import Home from "../components/home/Home"
import Header from "../components/partials/Header"
import Layout from "../components/partials/Layout"
import Metatags from "../components/partials/MetaTags"

const App = () => {
  const fullpageApiRef = React.useRef()

  const moveTo = location => fullpageApiRef.current.fullpageApi.moveTo(location)

  return (
    <Layout>
      <Metatags title="home" />

      <Header moveTo={moveTo} type={"welcome"} />

      <Home fullpageApiRef={fullpageApiRef} />
    </Layout>
  )
}

export default App
