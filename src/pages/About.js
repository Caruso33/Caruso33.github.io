import React from "react"
import Layout from "../components/partials/Layout"
import Metatags from "../components/partials/MetaTags"
import styled from "styled-components"
import color from "../utils/color"
import { boxShadow } from "../components/partials/GlobalStyle"
import { graphql } from "gatsby"

const AboutDetails = styled.div`
  background: ${color.contentBackground};
  padding: 1.5rem;
  margin: 1.5rem;
  box-shadow: ${boxShadow};
`

export default function About({ data, location }) {
  return (
    <Layout {...{ location }}>
      <Metatags
        title={"About"}
        description={"about me"}
        url={data.site.siteMetadata.siteUrl}
        pathname={location.pathname}
      />
      <AboutDetails>
        <div>
          <p>
            Hi, my name is Tobias, I am a fullstack developer turning AI
            specialist based in Stuttgart, Germany.
          </p>
          <p>
            Originally, I've studied Industrial Management and specialized in IT
            with an thesis related to the field of{" "}
            <a href="https://en.wikipedia.org/wiki/Industry_4.0">
              Industrie 4.0
            </a>{" "}
            in a mid-sized German manufacturer.
          </p>
          <p>
            Currently, I work as a Research Scientist, combining the fields of
            IIoT, AI and Web Development. I enjoy writing code and improving
            myself, always keen in getting more experience in various
            technological fields.
          </p>
          <p>
            Recently, I am totally immersed into Artificial Intelligence,
            impressed by recent deep learning accomplishments.
          </p>
        </div>
        <div>
          What I do:
          <p>Build or extend websites</p>
          <p>
            I build e.g. landing pages, dashboards, blogs from ground up
            <br />
            and extend them with authentification, payments, email-subscriptions
          </p>
          <p>Build mobile apps</p>
          <p>
            In my previous company I've built an social media app for iOS and{" "}
            <a href="https://play.google.com/store/apps/details?id=com.sandboxglobal.sandboxplay">
              Android
            </a>{" "}
            with{" "}
            <a href="https://facebook.github.io/react-native/">
              React-Native.js
            </a>
            .
          </p>
          <p>
            Build a solid website infrastructure using widely accepted design
            languages
          </p>
          <p>
            I mainly use <a href="https://reactjs.org/">react.js</a> on the
            frontend side, <a href="https://nodejs.org/en/">node.js</a> &{" "}
            <a href="https://expressjs.com/">express.js</a> on the backend
            <br />
            and <a href="https://www.mongodb.com/">mongodb</a> as database or{" "}
            <a href="https://firebase.google.com/">firebase</a> as serverless
            solution of choice.
          </p>
          <p>
            Making websites PWA mobile-ready as taught by Google and Udacity by
            the
            <br />
            Mobile Web Specialist Nano-degree
          </p>
          <p>
            I was recipient of{" "}
            <a href="https://www.udacity.com/course/mobile-web-specialist-nanodegree--nd024">
              Google's Developer Challenge Scholarship
            </a>{" "}
            to deepen my understanding of modern mobile websites and to align
            projects to best practices regarding e.g. responsiveness,
            accessibility, offline functionality, low-fi connectivity.
          </p>
          <p>
            {" "}
            If you are unsure if I can help you, just send me a message to see
            if it's something I can do.
            <br />
            <br />
            If you have ANY questions, don't hesitate to send me a message.
          </p>
          Thanks!
        </div>
      </AboutDetails>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`

// const skillset = [
//   "JavaScript",
//   "Webpack",
//   "GraphQL",
//   "Software Development",
//   "Web Development",
//   "Backend",
//   "Blockchain",
//   "MongoDB",
//   "Git",
//   "CSS",
//   "HTML5",
//   "Redux",
//   "React-Native.js",
//   "REST",
//   "Solidity",
//   "PWA",
//   "TypeScript",
//   "MobX",
//   "Firebase",
//   "AWS",
//   "GCP",
//   "D3",
//   "Python",
//   "AI",
//   "IoT",
//   "Node.js",
//   "React.js",
//   "Docker",
//   "Kubernetes"
// ]
