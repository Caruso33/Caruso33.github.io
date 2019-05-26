import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import React from "react";
import D3barChart from "./projects/d3barChart";
import Pomodor from "./projects/pomodor";

const styles = theme => ({
  Paper: {
    "@media screen and (max-width: 600px)": {
      marginTop: 60
    },
    marginTop: 70,
    paddingTop: 30,
    paddingBottom: 20,
    textAlign: "center",
    minHeight: "90vh",
    display: "flex",
    flexWrap: "wrap"
  },
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
});
export default withStyles(styles)(props => {
  const { classes } = props;
  return (
    <Paper className={classes.Paper}>
      <Pomodor classes={classes} />
      <D3barChart classes={classes} />
    </Paper>
  );
});
