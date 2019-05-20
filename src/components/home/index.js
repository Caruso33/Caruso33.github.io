import compose from "recompose/compose";
import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import withWidth from "@material-ui/core/withWidth";
import { CardIntro, CardProfil, CardMore } from "./cards";
import Clipboard from "clipboard";
import "./index.css";

const styles = theme => ({
  // toolbar: theme.mixins.toolbar
  Paper: {
    padding: 20,
    "@media screen and (max-width: 600px)": {
      marginTop: 58
    },
    marginTop: 68
  },
  Card: {
    marginTop: 20
  },
  CardContentHeading: {
    margin: "20px auto"
  }
});

class Landing extends Component {
  constructor(props) {
    super(props);

    this.clipboard = new Clipboard("#copyMail");
  }

  copyMail = () => {
    this.clipboard.on("success", e => {
      console.info("Copied:", e.text);
    });
  };

  render() {
    const { classes, width } = this.props;

    return (
      <Paper className={classes.Paper} xs={12}>
        <CardIntro classes={classes} />
        <CardProfil classes={classes} width={width} />
        <CardMore classes={classes} width={width} copyMail={this.copyMail} />
      </Paper>
    );
  }
}

export default compose(
  withStyles(styles),
  withWidth()
)(Landing);
