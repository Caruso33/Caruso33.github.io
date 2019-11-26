import React from "react"
import BlogContent from "../components/blog/Blog"
import AppBar from "../components/partials/AppBar"
import Layout from "../components/partials/Layout"
import Head from "../components/partials/Head"

const Blog = props => {
  const moveTo = location => props.navigate(location)

  return (
    <Layout>
      <Head title="Blog" />
      <AppBar moveTo={moveTo} type="blog" />
      <BlogContent />
    </Layout>
  )
}

export default Blog
