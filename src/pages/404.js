import React from "react"
import Layout from "../components/partials/Layout"
import { Link } from "gatsby"
import AppBar from "../components/partials/AppBar"
import Head from "../components/partials/Head"

const NotFound = ({ moveTo }) => {
  return (
    <Layout>
      <Head title="NotFound" />
      <AppBar moveTo={moveTo} type={"404"} />

      <h1>Page not found</h1>
      <p>
        <Link to="/">Head home</Link>
      </p>
    </Layout>
  )
}

export default NotFound
