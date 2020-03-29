import React from "react"
import styled from "styled-components"
import { Tag } from "antd"
import { mapTopicToImage } from "./pages/home/mapTopicToImage"
import { navigate } from "gatsby"

export const TagLink = styled(Tag)`
  cursor: pointer;
  margin-bottom: 3px;
`

export default function TagLinks({ tags }) {
  return (
    <div>
      {tags.map(topic => {
        const Mapping = mapTopicToImage(topic)

        return (
          <TagLink key={topic} onClick={() => navigate(`tags/${topic}`)}>
            {Mapping && <Mapping />} {topic}
          </TagLink>
        )
      })}
    </div>
  )
}
