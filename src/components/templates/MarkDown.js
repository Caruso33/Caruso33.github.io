import { graphql } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import Header from "../partials/Header"
import Layout from "../partials/Layout"
import PrevNext from "../partials/PrevNext"
import Metatags from "../partials/MetaTags"
import Container from "../partials/Container"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      # html
      frontmatter {
        title
        tags
        date(formatString: "DD. MMMM, YYYY")
        image
        # {
        # childImageSharp {
        #   resize(width: 1500, height: 1500) {
        #     src
        #   }
        #   fluid(maxWidth: 750) {
        #     ...GatsbyImageSharpFluid
        #   }
        # }
        # }
      }
    }

    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`

function MarkDownTemplate(props) {
  const { data, navigate, pageContext, location } = props

  const { prev, next } = pageContext
  const blogPost = data.markdownRemark

  const url = data.site.siteMetadata.siteUrl
  const { title, tags } = blogPost.frontmatter
  // const { title, tags, image } = blogPost.frontmatter
  // const thumbnail = image && image.childImageSharp.resize.src

  return (
    <Layout>
      <Metatags
        title={title}
        description={blogPost.excerpt}
        // thumbnail={thumbnail && url + thumbnail}
        url={url}
        pathname={location.pathname}
      />

      <Header
        moveTo={location => navigate(location)}
        type="blogPost"
        title={blogPost.frontmatter.title}
      />

      <Container>
        <PrevNext prev={prev && prev.node} next={next && next.node} />
        <h1>{blogPost.frontmatter.title}</h1>
        <p>{blogPost.frontmatter.date}</p>

        {/* {thumbnail && (
          <>
            <Img fluid={blogPost.frontmatter.image.childImageSharp.fluid} />
            <p>Photo by eric combeau on Unsplash</p>
          </>
        )} */}

        <div dangerouslySetInnerHTML={{ __html: blogPost.html }} />
        {tags && (
          <div>
            <span>Tagged in </span>
            {tags.map((tag, i) => (
              <a href={`/tags/${tag}`} key={i} style={{ marginLeft: "10px" }}>
                {tag}
              </a>
            ))}
          </div>
        )}

        <PrevNext prev={prev && prev.node} next={next && next.node} />
      </Container>
    </Layout>
  )
}

export default MarkDownTemplate
