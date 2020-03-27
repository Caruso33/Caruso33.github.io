import React from "react"
import { Link } from "gatsby"
import {
  BlogListItem,
  BlogImage,
  ImageExcerptWrapper,
  DateNTags,
  BlogTitle,
  BlogExcerpt,
  ReadFull,
  ExcerptNReadFull
} from "./styled"
import { mapTopicToImage } from "./mapTopicToImage"
import { Tag } from "antd"

export default function BlogItem({ node }) {
  const blogUrl = `/${node.fields.slug}`
  const hasImage = node.frontmatter.image

  return (
    <BlogListItem key={node.frontmatter.title}>
      <>
        <DateNTags>
          <p>{node.frontmatter.date}</p>
          <p>
            {(node.frontmatter.tags || []).map(topic => {
              const Mapping = mapTopicToImage(topic)

              return (
                <Tag key={topic}>
                  {Mapping && <Mapping />} {topic}
                </Tag>
              )
            })}
          </p>
        </DateNTags>

        <Link to={blogUrl}>
          <BlogTitle>{node.frontmatter.title}</BlogTitle>
        </Link>

        <ImageExcerptWrapper hasImage={hasImage}>
          {hasImage && <BlogImage src={node.frontmatter.image} />}

          <ExcerptNReadFull>
            <BlogExcerpt>{node.excerpt}</BlogExcerpt>

            <ReadFull to={blogUrl}>...read full article</ReadFull>
          </ExcerptNReadFull>
        </ImageExcerptWrapper>
      </>
    </BlogListItem>
  )
}
