import compose from "recompose/compose";
import React, { Component, Fragment } from "react";
import { Paper } from "material-ui";
import { withStyles } from "material-ui/styles";
import withWidth from "material-ui/utils/withWidth";
import {
  CardBackground,
  CardIntro,
  CardProfil,
  CardMore,
  CardWhoAmI
} from "./cards";
import Clipboard from "clipboard";
let clipboard = null;

const styles = theme => ({
  // toolbar: theme.mixins.toolbar
  Paper: { padding: 20 },
  Card: {
    "@media screen and (max-width: 600px)": {
      marginTop: 58
    },
    marginTop: 68
  },
  CardContentHeading: {
    margin: "20px auto"
  },
  a: { color: "inherit" }
});

class Landing extends Component {
  componentDidMount() {
    clipboard = new Clipboard("#copyMail");
  }
  copyMail = () => {
    clipboard.on("success", e => {
      console.info("Copied:", e.text);
    });
  };
  render() {
    const { classes, width } = this.props;

    return (
      <Fragment>
        <CardBackground classes={classes} width={width} />
        <Paper className={classes.Paper} xs={12}>
          <CardIntro classes={classes} />
          <CardProfil classes={classes} width={width} />
          <CardMore classes={classes} width={width} />
          <CardWhoAmI
            classes={classes}
            width={width}
            copyMail={this.copyMail}
          />
        </Paper>
      </Fragment>
    );
  }
}

export default compose(
  withStyles(styles),
  withWidth()
)(Landing);
