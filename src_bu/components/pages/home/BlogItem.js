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

  const { title, date, tags, image, imageUrl } = node.frontmatter
  const hasImage = image || imageUrl
  const thumbnail = image && image.childImageSharp.resize.src

  return (
    <BlogListItem>
      <>
        <DateNTags>
          <p>{date}</p>
          <p>
            {(tags || []).map(topic => {
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
          <BlogTitle>{title}</BlogTitle>
        </Link>

        <ImageExcerptWrapper hasImage={!!hasImage}>
          {hasImage && <BlogImage src={thumbnail ? thumbnail : imageUrl} />}

          <ExcerptNReadFull>
            <BlogExcerpt>{node.excerpt}</BlogExcerpt>

            <ReadFull to={blogUrl}>...read full article</ReadFull>
          </ExcerptNReadFull>
        </ImageExcerptWrapper>
      </>
    </BlogListItem>
  )
}
