import React from "react"
import { graphql } from "gatsby"
import AppBar from "../components/partials/AppBar"
import Layout from "../components/partials/Layout"
import { withStyles } from "@material-ui/core/styles"
import Container from "@material-ui/core/Container"
import Head from "../components/partials/Head"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`

function MarkDownTemplate(props) {
  const { data, classes, navigate } = props

  return (
    <Layout>
      <Head title={data.markdownRemark.frontmatter.title} />
      <AppBar
        moveTo={location => navigate(location)}
        type="blogPost"
        title={data.markdownRemark.frontmatter.title}
      />

      <Container className={classes.paper}>
        <h1>{data.markdownRemark.frontmatter.title}</h1>
        <p>{data.markdownRemark.frontmatter.data}</p>
        <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
      </Container>
    </Layout>
  )
}

export default withStyles(styles)(MarkDownTemplate)

function styles() {
  return {
    paper: {
      padding: 50,
      paddingTop: 68,
      "@media screen and (max-width: 600px)": {
        paddingTop: 58
      }
    }
  }
}
