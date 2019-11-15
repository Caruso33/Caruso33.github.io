import React, { useState, useEffect, useRef } from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import { Link } from "react-router-dom"
import GitHubIcon from "@material-ui/icons/GitHub"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import AccountTreeIcon from "@material-ui/icons/AccountTree"

const Intro = ({ fullpageApi, classes }) => {
  const [adjective, setAdjective] = useState(null)
  const [skill, setSkill] = useState(null)

  const savedCallback = useRef()

  useEffect(() => {
    savedCallback.current = callback
  })

  useEffect(() => {
    let id = setInterval(() => savedCallback.current(), 2000)
    return () => clearInterval(id)
  }, [])

  const callback = () => {
    setAdjective(bangkokAdjectives[pickRandomIndex(bangkokAdjectives.length)])
    setSkill(skillset[pickRandomIndex(skillset.length)])
  }

  const pickRandomIndex = length => Math.floor(Math.random() * length)

  return (
    <Grid item md={8} lg={6} style={{ margin: "20px auto" }}>
      <Typography variant="h3" className={classes.Typography} gutterBottom>
        Hi,
      </Typography>

      <Typography variant="subtitle1" component="p" gutterBottom>
        my name is Tobias, I am a fullstack developer based in{" "}
        <span className="changing-text">{adjective}</span> Bangkok, Thailand.
      </Typography>

      <Typography variant="subtitle1" component="p" gutterBottom>
        Originally, I've studied Industrial Management and specialized in IT
        with an thesis related to the field of{" "}
        <a href="https://en.wikipedia.org/wiki/Industry_4.0">Industrie 4.0</a>{" "}
        in a mid-sized German manufacturer.
      </Typography>

      <Typography variant="subtitle1" component="p" gutterBottom>
        Currently, I work as a Senior Web Developer for{" "}
        <a href="http://appy.town/">AppySphere</a>. I enjoy writing code and
        improving myself, always keen in getting more experience in various
        technological fields like{" "}
        <span className="changing-text" style={{ minWidth: 150 }}>
          {skill}
        </span>
      </Typography>

      <Typography variant="subtitle1" component="p" gutterBottom>
        Recently, I am totally immersed into{" "}
        <span className="linkColor">Artificial Intelligence</span>, impressed by
        recent deep learning accomplishments.
      </Typography>

      <Typography variant="subtitle1" component="p" gutterBottom>
        You can switch to my portfolio{" "}
        <Link to="" onClick={() => fullpageApi.moveTo("portfolio")}>
          <AccountTreeIcon /> portfolio
        </Link>{" "}
        or see my{" "}
        <a href="https://www.linkedin.com/in/tobias-leinss/">
          <LinkedInIcon /> linkedIn
        </a>{" "}
        /{" "}
        <a href="https://github.com/caruso33/">
          <GitHubIcon /> GitHub
        </a>{" "}
        profile.
      </Typography>
    </Grid>
  )
}

export default Intro

const bangkokAdjectives = [
  "beautiful",
  "hot",
  "crowded",
  "delicious",
  "warm-hearted",
  "awesome",
  "modern",
  "ancient",
  "large",
  "small",
  "interesting",
  "exciting",
  "beautiful",
  "expensive",
  "cheap",
  "quiet",
  "calm",
  "crowded",
  "busy",
  "pleasant",
  "warm",
  "cool",
  "huge"
]

const skillset = [
  "JavaScript",
  "Webpack",
  "GraphQL",
  "Software Development",
  "Web Development",
  "Backend",
  "Blockchain",
  "MongoDB",
  "Git",
  "CSS",
  "HTML5",
  "Redux",
  "React-Native.js",
  "REST",
  "Solidity",
  "PWA",
  "TypeScript",
  "MobX",
  "Firebase",
  "AWS",
  "GCP",
  "D3",
  "Python",
  "AI",
  "IoT",
  "Node.js",
  "React.js",
  "Docker",
  "Kubernetes"
]
