import React from "react"
import { Link } from "gatsby"
import {
  BlogListItem,
  BlogImage,
  ImageExcerptWrapper,
  DateNTags
} from "./styled"
import { mapTopicToImage } from "./mapTopicToImage"
import { Tag } from "antd"

export default function BlogItem({ node }) {
  return (
    <BlogListItem key={node.frontmatter.title}>
      <>
        <DateNTags>
          <p>{node.frontmatter.date}</p>
          <p>
            {(node.frontmatter.tags || []).map(topic => {
              const Mapping = mapTopicToImage(topic)

              return (
                <Tag>
                  {Mapping && <Mapping />} {topic}
                </Tag>
              )
            })}
          </p>
        </DateNTags>

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
