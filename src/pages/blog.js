import React from "react"
import BlogContent from "../components/blog/Blog"
import AppBar from "../components/partials/AppBar"
import Layout from "../components/partials/Layout"

const Blog = () => {
  const fullpageApiRef = React.useRef()

  const moveTo = location => fullpageApiRef.current.fullpageApi.moveTo(location)

  return (
    <Layout>
      <AppBar moveTo={moveTo} type="blog" />
      <BlogContent />
    </Layout>
  )
}

export default Blog
