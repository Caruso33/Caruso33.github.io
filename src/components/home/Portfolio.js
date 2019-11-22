import { withStyles } from "@material-ui/core/styles"
import React from "react"
import D3barChart from "./portfolio/projects/D3barChart"
import Pomodor from "./portfolio/projects/Pomodor"
import { FullPageSlide } from "./Fullpage"

export default withStyles(styles)(props => {
  const { classes } = props

  return [
    <FullPageSlide key="pomodor">
      <Pomodor classes={classes} />
    </FullPageSlide>,
    <FullPageSlide key="d3-chart">
      <D3barChart classes={classes} />
    </FullPageSlide>
  ]
})

function styles() {
  return {
    Card: {
      width: 300,
      margin: "auto",
      marginBottom: 30
    },
    CardHorizontal: {
      width: 500,
      margin: "auto",
      marginBottom: 30
    },
    Media: {
      height: 550,
      opacity: 0.5,
      "&:hover": {
        opacity: 1
      }
    }
  }
}
