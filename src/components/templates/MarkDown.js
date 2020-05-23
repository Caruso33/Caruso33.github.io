import _isEmpty from "lodash/isEmpty"
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
  BlogVersionText,
  BlogVersionDateText,
  ThumbnailSrc,
  BlogHtml,
  TitleText,
  AttributionText,
  DescriptionText,
  DateVersionWrapper
} from "./markdown/styled"
import { dateFormat } from "../../utils/date"
import moment from "moment"

function MarkDownTemplate({ data, pageContext, location }) {
  const { prev, next } = pageContext
  const blogPost = data.markdownRemark

  const url = data.site.siteMetadata.siteUrl
  const {
    title,
    tags,
    image,
    imageUrl,
    imageAttribution
  } = blogPost.frontmatter
  const thumbnail = image && image.childImageSharp.resize.src

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
        <DateVersionWrapper>
          <BlogDate>{blogPost.frontmatter.date}</BlogDate>

          {!_isEmpty(blogPost.frontmatter.versions) &&
            blogPost.frontmatter.versions.map(v => {
              const [version, date] = v.split(":")

              if (version === "v1") return null

              return (
                <div key={version}>
                  <BlogVersionText>{version}</BlogVersionText>:{" "}
                  <BlogVersionDateText>
                    {moment(date.trim()).format(dateFormat)}
                  </BlogVersionDateText>
                </div>
              )
            })}
        </DateVersionWrapper>

        <TitleNTags>
          <TitleText>{blogPost.frontmatter.title}</TitleText>
          {tags && <TagLinks tags={Array.from(tags)} />}
        </TitleNTags>

        {blogPost.frontmatter.description && (
          <DescriptionText>{blogPost.frontmatter.description}</DescriptionText>
        )}

        {thumbnail ? (
          <GatsbyImage
            fadeIn
            durationFadeIn={2000}
            fluid={blogPost.frontmatter.image.childImageSharp.fluid}
          />
        ) : (
          imageUrl && <ThumbnailSrc src={imageUrl} />
        )}

        {imageAttribution && (
          <AttributionText>{imageAttribution}</AttributionText>
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
        description
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
        imageAttribution
        versions
      }
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`
