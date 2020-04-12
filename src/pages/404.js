import { Link } from "gatsby"
import React from "react"

import Metatags from "../components/partials/MetaTags"
import { Typography } from "antd"

const NotFound = () => {
  return (
    <>
      <Metatags title="NotFound" />

      <Typography.Title>Page not found</Typography.Title>
      <p>
        <Link to="/">Head home</Link>
      </p>
    </>
  )
}

export default NotFound
