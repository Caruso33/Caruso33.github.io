import React from "react"
import { DiJavascript } from "react-icons/di"
import { FaReact } from "react-icons/fa"
import { Tag } from "antd"

export function mapTopicToImage(topic) {
  return tags[topic]
}

const tags = {
  javascript: DiJavascript,
  react: FaReact
}
