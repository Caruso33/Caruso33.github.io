import Container from "@material-ui/core/Container"
import { withStyles } from "@material-ui/core/styles"
import Clipboard from "clipboard"
import React from "react"
import Portfolio from "./Portfolio"
import { CardIntro, CardProfil } from "./cards"
import { Fullpage, FullPageSection } from "./Fullpage"
import "./home.css"

const Home = ({ classes, fullpageApiRef }) => {
  let clipboard,
    copyMail = () => {}
  if (typeof window !== "undefined" && window.document) {
    clipboard = new Clipboard("#copyMail")

    copyMail = () => {
      clipboard.on("success", e => console.info("Copied:", e.text))
    }
  }

  const sections = [
    {
      name: "intro",
      component: fullpageApi => (
        <CardIntro classes={classes} fullpageApi={fullpageApi} />
      )
    },
    {
      name: "profile",
      component: () => <CardProfil classes={classes} copyMail={copyMail} />
    },
    { name: "portfolio", component: () => <Portfolio /> }
  ]

  return (
    <Container className={classes.paper}>
      <Fullpage
        apiRef={fullpageApiRef}
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
    </Container>
  )
}

export default withStyles(styles)(Home)

function styles() {
  return {
    paper: {
      padding: 50,
      paddingTop: 68,
      "@media screen and (max-width: 600px)": {
        paddingTop: 58
      }
    },
    card: {
      paddingTop: 20,
      marginRight: 20
    },
    cardContentHeading: {
      margin: "20px auto"
    },
    typography: {
      marginBottom: 20
    }
  }
}
