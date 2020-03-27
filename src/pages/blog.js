import { withStyles } from "@material-ui/styles"
import { graphql, Link } from "gatsby"
import React from "react"
import Header from "../components/partials/Header"
import Container from "../components/partials/Container"
import Layout from "../components/partials/Layout"
import Metatags from "../components/partials/MetaTags"

const Blog = props => {
  const moveTo = location => props.navigate(location)

  const { data, location } = props
  const url = data.site.siteMetadata.siteUrl

  return (
    <Layout>
      <Metatags
        title={"Blog List"}
        description={"list of blog posts"}
        url={url}
        pathname={location.pathname}
      />

      <Header moveTo={moveTo} type="blog" />

      <Container>
        <Link to="/tags/">Posts by Tags</Link>

        <ol>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <li key={node.frontmatter.title}>
              <Link to={`/${node.fields.slug}`}>
                <h2>{node.frontmatter.title}</h2>
                <p>{node.frontmatter.date}</p>
              </Link>
              <p>{node.excerpt}</p>
            </li>
          ))}
        </ol>
      </Container>
    </Layout>
  )
}

export default withStyles(styles)(Blog)

// export const pageQuery = graphql`
//   query {
//     allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
//       totalCount
//       edges {
//         node {
//           frontmatter {
//             title
//             date(formatString: "DD. MMMM, YYYY")
//           }
//           # html
//           # excerpt(pruneLength: 250)
//           fields {
//             slug
//           }
//         }
//       }
//     }
//     site {
//       siteMetadata {
//         siteUrl
//       }
//     }
//   }
// `

function styles() {
  return {}
}
