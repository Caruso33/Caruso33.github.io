import { Link } from "gatsby"
import {
  GithubOutlined,
  MailOutlined,
  TwitterOutlined,
  CheckOutlined
} from "@ant-design/icons"
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
  Sider
} from "./sidebar/styled"

export default function Sidebar({ data }) {
  const numberArticles = data

  const onGithub = () => {}
  const onTwitter = () => {}
  const onMail = () => {}

  return (
    <Sider>
      <ProfileImage />

      <ProfileTitle>Tobias Leinss</ProfileTitle>

      <ProfileDescription>
        ReactJS <CheckOutlined /> NodeJS <CheckOutlined /> Python
      </ProfileDescription>
      <ProfileDescription>Fullstack Developer</ProfileDescription>

      <IconWrapper>
        <GithubOutlined style={iconStyle} onClick={onGithub} />
        <TwitterOutlined style={iconStyle} onClick={onTwitter} />
        <MailOutlined style={iconStyle} onClick={onMail} />

        {/* TODO: Add Kaggle, freecodecamp */}
      </IconWrapper>

      <Divider />

      <NumberArticles>{numberArticles} Articles</NumberArticles>
      <PostsByTags>Show posts by topics</PostsByTags>
      <Link to="tags/">Posts by Tags</Link>

      <Divider />

      <LatestArticlesTitle>Latest Articles</LatestArticlesTitle>

      <LatestArticles></LatestArticles>
    </Sider>
  )
}
