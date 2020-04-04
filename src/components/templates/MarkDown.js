import { graphql } from "gatsby"
import GatsbyImage from "gatsby-image"
import React from "react"
import Layout from "../partials/Layout"
import Metatags from "../partials/MetaTags"
import PrevNext from "../partials/PrevNext"
import TagLinks from "../TagLinks"

import {
  BlogWrapper,
  TitleNTags,
  BlogDate,
  ThumbnailSrc,
  BlogHtml
} from "./markdown/styled"

function MarkDownTemplate({ data, pageContext, location }) {
  const { prev, next } = pageContext
  const blogPost = data.markdownRemark

  const url = data.site.siteMetadata.siteUrl
  const { title, tags, image, imageUrl } = blogPost.frontmatter
  const thumbnail = image && image.childImageSharp.resize.src

  console.log({prev})
  console.log({next})
  return (
    <Layout {...{ prev, next }}>
      <Metatags
        title={title}
        description={blogPost.excerpt}
        thumbnail={thumbnail && url + thumbnail}
        url={url}
        pathname={location.pathname}
      />
      <PrevNext prev={prev && prev.node} next={next && next.node} />

      <BlogWrapper>
        <BlogDate>{blogPost.frontmatter.date}</BlogDate>

        <TitleNTags>
          <h1>{blogPost.frontmatter.title}</h1>
          {tags && <TagLinks tags={Array.from(tags)} />}
        </TitleNTags>

        {thumbnail ? (
          <GatsbyImage
            fadeIn
            durationFadeIn={2000}
            fluid={blogPost.frontmatter.image.childImageSharp.fluid}
          />
        ) : (
          imageUrl && <ThumbnailSrc src={imageUrl} />
        )}

        <BlogHtml dangerouslySetInnerHTML={{ __html: blogPost.html }} />
      </BlogWrapper>
    </Layout>
  )
}

export default MarkDownTemplate

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        tags
        date(formatString: "DD. MMMM, YYYY")
        image {
          childImageSharp {
            resize(width: 1500, height: 1500) {
              src
            }
            fluid(maxWidth: 1500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        imageUrl
      }
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`
