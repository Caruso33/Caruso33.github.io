import Card from "@material-ui/core/Card"
import Grid from "@material-ui/core/Grid"
import IconButton from "@material-ui/core/IconButton"
import Typography from "@material-ui/core/Typography"
import AccountTreeIcon from "@material-ui/icons/AccountTree"
import GitHubIcon from "@material-ui/icons/GitHub"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import React, { useEffect, useRef, useState } from "react"

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
    <Card
      className={classes.card}
      style={{ padding: "24px 20px 24px 20px" }}
      raised
    >
      <Grid item md={8} lg={6} style={{ margin: "20px auto" }}>
        <Typography variant="h3" className={classes.typography} gutterBottom>
          Hi,
        </Typography>

        <Typography
          className={classes.typography}
          variant="subtitle1"
          gutterBottom
        >
          my name is Tobias, I am a fullstack developer based in{" "}
          <span className="changing-text">{adjective}</span> Bangkok, Thailand.{" "}
        </Typography>

        <Typography
          className={classes.typography}
          variant="subtitle1"
          gutterBottom
        >
          Originally, I've studied Industrial Management and specialized in IT
          with an thesis related to the field of{" "}
          <a href="https://en.wikipedia.org/wiki/Industry_4.0">Industrie 4.0</a>{" "}
          in a mid-sized German manufacturer.
        </Typography>

        <Typography
          className={classes.typography}
          variant="subtitle1"
          gutterBottom
        >
          Currently, I work as a{" "}
          <span className="linkColor">Senior Web Developer</span>. I enjoy
          writing code and improving myself, always keen in getting more
          experience in various technological fields like{" "}
          <span className="changing-text" style={{ minWidth: 150 }}>
            {skill}
          </span>
        </Typography>

        <Typography
          className={classes.typography}
          variant="subtitle1"
          gutterBottom
        >
          Recently, I am totally immersed into{" "}
          <span className="linkColor">Artificial Intelligence</span>, impressed
          by recent deep learning accomplishments.
        </Typography>

        <Typography variant="subtitle1" gutterBottom>
          You can switch to my portfolio{" "}
          <IconButton
            color="secondary"
            aria-label="Menu"
            onClick={() => fullpageApi.moveTo("portfolio")}
          >
            <AccountTreeIcon />
          </IconButton>{" "}
          or see my profiles{" "}
          <a href="https://www.linkedin.com/in/tobias-leinss/">
            <IconButton color="inherit" aria-label="Menu">
              <LinkedInIcon />{" "}
            </IconButton>{" "}
          </a>{" "}
          /{" "}
          <a href="https://github.com/caruso33/">
            <IconButton color="inherit" aria-label="Menu">
              <GitHubIcon />{" "}
            </IconButton>{" "}
          </a>
        </Typography>
      </Grid>
    </Card>
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
