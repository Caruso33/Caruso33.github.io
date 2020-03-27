import React from "react"
import { Link } from "gatsby"
import { BlogListItem, BlogImage, ImageExcerptWrapper } from "./styled"

export default function BlogItem({ node }) {
  return (
    <BlogListItem key={node.frontmatter.title}>
      <>
        <p>{node.frontmatter.date}</p>

        <Link to={`/${node.fields.slug}`}>
          <h2>{node.frontmatter.title}</h2>
        </Link>

        <ImageExcerptWrapper>
          {node.frontmatter.image && <BlogImage src={node.frontmatter.image} />}

          <p>{node.excerpt}</p>
        </ImageExcerptWrapper>
      </>
    </BlogListItem>
  )
}
