import { Divider } from "antd"
import { navigate } from "gatsby"
import React from "react"
import {
  AiFillGithub,
  AiOutlineCheck,
  AiOutlineMail,
  AiOutlineTwitter
} from "react-icons/ai"
import { mapTopicToImage } from "../../pages/home/mapTopicToImage"
import {
  iconStyle,
  IconWrapper,
  LatestArticles,
  LatestArticlesTitle,
  LatestArtLink,
  NumberArticles,
  PostsByTags,
  ProfileDescription,
  ProfileImage,
  ProfileTitle,
  Sider,
  TagLink
} from "./sidebar/styled"

export default function Sidebar({ totalCount, tags, lastArticles }) {
  const onGithub = () => {}
  const onTwitter = () => {}
  const onMail = () => {}

  return (
    <Sider>
      <ProfileImage />

      <ProfileTitle>Tobias Leinss</ProfileTitle>

      <ProfileDescription>
        ReactJS <AiOutlineCheck /> NodeJS <AiOutlineCheck /> Python
      </ProfileDescription>
      <ProfileDescription>Fullstack Developer</ProfileDescription>

      <IconWrapper>
        <AiFillGithub style={iconStyle} onClick={onGithub} />
        <AiOutlineTwitter style={iconStyle} onClick={onTwitter} />
        <AiOutlineMail style={iconStyle} onClick={onMail} />

        {/* TODO: Add Kaggle, freecodecamp */}
      </IconWrapper>

      <Divider />

      <NumberArticles>{totalCount} Articles</NumberArticles>

      <PostsByTags>Show posts by topics</PostsByTags>

      {tags.map(topic => {
        const Mapping = mapTopicToImage(topic)

        return (
          <TagLink onClick={() => navigate(`tags/${topic}`)}>
            {Mapping && <Mapping />} {topic}
          </TagLink>
        )
      })}

      <Divider />

      <LatestArticlesTitle>Latest Articles</LatestArticlesTitle>

      <LatestArticles>
        {lastArticles.map(({ node }) => {
          return (
            <LatestArtLink to={`/${node.fields.slug}`}>
              {node.frontmatter.title}
            </LatestArtLink>
          )
        })}
      </LatestArticles>
    </Sider>
  )
}
