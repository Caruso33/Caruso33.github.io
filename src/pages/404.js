import { Link } from "gatsby"
import React from "react"
import Header from "../components/partials/Header"
import Layout from "../components/partials/Layout"
import Metatags from "../components/partials/MetaTags"

const NotFound = ({ moveTo }) => {
  return (
    <Layout>
      <Metatags title="NotFound" />

      <Header moveTo={moveTo} type={"404"} />

      <h1>Page not found</h1>
      <p>
        <Link to="/">Head home</Link>
      </p>
    </Layout>
  )
}

export default NotFound
