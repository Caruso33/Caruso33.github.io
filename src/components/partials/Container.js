import React from "react"
import { withStyles } from "@material-ui/styles"
import MuiContainer from "@material-ui/core/Container"

function Container({ children, classes, style = {} }) {
  return (
    <MuiContainer className={classes.paper} style={style}>
      {children}
    </MuiContainer>
  )
}

export default withStyles(styles)(Container)

function styles() {
  return {
    paper: {
      padding: 50,
      paddingTop: 78,

      "@media screen and (max-width: 600px)": {
        paddingTop: 70
      },

      "@media screen and (max-width: 840px)": {
        padding: "78px 20px 20px 20px"
      }
    }
  }
}
