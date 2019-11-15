import Paper from "@material-ui/core/Paper"
import { withStyles } from "@material-ui/core/styles"
import Clipboard from "clipboard"
import React from "react"
import Portfolio from "../portfolio/Portfolio"
import { CardIntro, CardProfil } from "./cards"
import { Fullpage, FullPageSection } from "./Fullpage"
import "./home.css"

const Landing = ({ classes }) => {
  const clipboard = new Clipboard("#copyMail")

  const copyMail = () => {
    clipboard.on("success", e => console.info("Copied:", e.text))
  }

  const sections = [
    {
      name: "intro",
      component: fullpageApi => (
        <CardIntro classes={classes} fullpageApi={fullpageApi} />
      )
    },
    {
      name: "profil",
      component: () => <CardProfil classes={classes} copyMail={copyMail} />
    },
    { name: "portfolio", component: () => <Portfolio /> }
  ]

  return (
    <Paper className={classes.Paper} xs={9}>
      <Fullpage
        navigation
        slidesNavigation
        anchors={sections.map(({ name }) => name)}
      >
        {(_state, fullpageApi) => {
          return sections.map(({ name, component }) => (
            <FullPageSection key={name} className={name}>
              {component(fullpageApi)}
            </FullPageSection>
          ))
        }}
      </Fullpage>
    </Paper>
  )
}

export default withStyles(styles)(Landing)

function styles() {
  return {
    Paper: {
      padding: 50,
      paddingTop: 68,
      "@media screen and (max-width: 600px)": {
        paddingTop: 58
      }
    },
    Card: {
      marginTop: 20
    },
    CardContentHeading: {
      margin: "20px auto"
    }
  }
}
