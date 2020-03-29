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
  TagLink,
  ProfileSkills,
  ProfileTexts,
  PostTagsWrapper,
  LatestArticlesWrapper
} from "./sidebar/styled"

export default function Sidebar({
  totalCount,
  tags,
  lastArticles,
  isMobileSize
}) {
  const onGithub = () => {}
  const onTwitter = () => {}
  const onMail = () => {}

  return (
    <Sider isMobileSize={isMobileSize}>
      <ProfileImage />

      <ProfileTexts>
        <ProfileTitle>Tobias Leinss</ProfileTitle>

        <ProfileSkills>
          ReactJS <AiOutlineCheck /> NodeJS <AiOutlineCheck /> Python
        </ProfileSkills>

        <ProfileDescription>Fullstack Developer</ProfileDescription>
      </ProfileTexts>

      <IconWrapper>
        <AiFillGithub style={iconStyle} onClick={onGithub} />
        <AiOutlineTwitter style={iconStyle} onClick={onTwitter} />
        <AiOutlineMail style={iconStyle} onClick={onMail} />

        {/* TODO: Add Kaggle, freecodecamp */}
      </IconWrapper>

      {!isMobileSize && <Divider />}

      <NumberArticles>{totalCount} Articles</NumberArticles>

      <PostTagsWrapper>
        <PostsByTags>Show posts by topics</PostsByTags>

        {tags.map(topic => {
          const Mapping = mapTopicToImage(topic)

          return (
            <TagLink onClick={() => navigate(`tags/${topic}`)}>
              {Mapping && <Mapping />} {topic}
            </TagLink>
          )
        })}
      </PostTagsWrapper>

      {!isMobileSize && <Divider />}

      <LatestArticlesWrapper>
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
      </LatestArticlesWrapper>
    </Sider>
  )
}
