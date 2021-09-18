import { DiJavascript } from "react-icons/di"
import { FaReact } from "react-icons/fa"
import { AiOutlineHtml5 } from "react-icons/ai"
import { GiOctopus } from "react-icons/gi"
import { GoTools } from "react-icons/go"

export function mapTopicToImage(topic) {
  return tags[topic]
}

const tags = {
  javascript: DiJavascript,
  react: FaReact,
  "web development": AiOutlineHtml5,
  ai: GiOctopus,
  tools: GoTools
}
