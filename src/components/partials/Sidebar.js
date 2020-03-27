import { navigate } from "gatsby"
import {
  AiFillGithub,
  AiOutlineMail,
  AiOutlineTwitter,
  AiOutlineCheck
} from "react-icons/ai"
import { Divider } from "antd"
import React from "react"
import {
  iconStyle,
  IconWrapper,
  LatestArticles,
  NumberArticles,
  PostsByTags,
  ProfileDescription,
  ProfileImage,
  LatestArticlesTitle,
  ProfileTitle,
  Sider,
  TagLink
} from "./sidebar/styled"
import { mapTopicToImage } from "../../pages/home/mapTopicToImage"

export default function Sidebar({ totalCount, tags }) {
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

      <LatestArticles></LatestArticles>
    </Sider>
  )
}
