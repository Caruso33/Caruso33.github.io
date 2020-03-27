import React from "react"
import { Divider } from "antd"
import {
  Sider,
  ProfileImage,
  ProfileTitle,
  ProfileDescription,
  IconWrapper,
  iconStyle,
  NumberArticles,
  LatestArticles
} from "./sidebar/styled"
import {
  GithubOutlined,
  TwitterOutlined,
  MailOutlined
} from "@ant-design/icons"

export default function Sidebar({ data }) {
  const numberArticles = data

  const onGithub = () => {}
  const onTwitter = () => {}
  const onMail = () => {}

  return (
    <Sider>
      <ProfileImage />

      <ProfileTitle>Tobias Leinss</ProfileTitle>

      <ProfileDescription>ReactJS {"&"} Python</ProfileDescription>
      <ProfileDescription>Fullstack Developer</ProfileDescription>

      <IconWrapper>
        <GithubOutlined style={iconStyle} onClick={onGithub} />
        <TwitterOutlined style={iconStyle} onClick={onTwitter} />
        <MailOutlined style={iconStyle} onClick={onMail} />
        {/* TODO: Add Kaggle, freecodecamp */}
      </IconWrapper>

      <Divider />

      <NumberArticles>{numberArticles} Articles</NumberArticles>

      <Divider />

      <LatestArticles>Latest Articles</LatestArticles>
    </Sider>
  )
}
