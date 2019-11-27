import React from "react"
import { withStyles } from "@material-ui/styles"
import MuiContainer from "@material-ui/core/Container"

function Container({ children, classes, classStyles = {}, style = {} }) {
  return (
    <MuiContainer className={[classes.paper, classStyles]} style={style}>
      {children}
    </MuiContainer>
  )
}

export default withStyles(styles)(Container)

function styles() {
  return {
    paper: {
      padding: 50,
      paddingTop: 68,
      "@media screen and (max-width: 600px)": {
        paddingTop: 58
      }
    }
  }
}
