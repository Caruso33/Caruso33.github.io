import { Divider } from "antd"
import React from "react"
import {
  AiFillGithub,
  AiOutlineCheck,
  AiOutlineMail,
  AiOutlineTwitter
} from "react-icons/ai"
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
  ProfileSkills,
  ProfileTexts,
  PostTagsWrapper,
  LatestArticlesWrapper
} from "./sidebar/styled"
import TagLinks from "../TagLinks"

export default function Sidebar({
  totalCount,
  tags,
  lastArticles,
  isMobileSize,
  hideSidebar
}) {
  return (
    <Sider isMobileSize={isMobileSize} hideSidebar={hideSidebar}>
      <ProfileImage />

      <ProfileTexts>
        <ProfileTitle>Tobias Leinss</ProfileTitle>

        <ProfileSkills>
          ReactJS <AiOutlineCheck /> NodeJS <AiOutlineCheck /> Python
        </ProfileSkills>

        <ProfileDescription>Fullstack Developer</ProfileDescription>
      </ProfileTexts>

      <IconWrapper>
        <a href="https://github.com/caruso33">
          <AiFillGithub style={iconStyle} />
        </a>
        <a href="https://twitter.com/caruso33">
          <AiOutlineTwitter style={iconStyle} />
        </a>
        <a href="mailto:leinsst@web.de">
          <AiOutlineMail style={iconStyle} />
        </a>

        {/* TODO: Add Kaggle, freecodecamp */}
      </IconWrapper>

      {!isMobileSize && <Divider />}

      <NumberArticles>{totalCount} Articles</NumberArticles>

      <PostTagsWrapper>
        <PostsByTags>Show posts by topics</PostsByTags>

        <TagLinks tags={tags} />
      </PostTagsWrapper>

      {!isMobileSize && <Divider />}

      <LatestArticlesWrapper>
        <LatestArticlesTitle>Latest Articles</LatestArticlesTitle>

        <LatestArticles>
          {lastArticles.map(({ node }) => {
            return (
              <LatestArtLink key={node.fields.slug} to={`/${node.fields.slug}`}>
                {node.frontmatter.title}
              </LatestArtLink>
            )
          })}
        </LatestArticles>
      </LatestArticlesWrapper>
    </Sider>
  )
}
