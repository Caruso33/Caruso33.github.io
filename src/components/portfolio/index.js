import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import ImgPomodoR from "../../img/dist/portfolio/pomodor-min.webp";

const styles = theme => ({
  Paper: {
    "@media screen and (max-width: 600px)": {
      marginTop: 60
    },
    marginTop: 70,
    paddingTop: 30,
    paddingBottom: 20,
    textAlign: "center",
    height: "90vh"
  },
  Card: {
    width: 300,
    margin: "auto"
  },
  Media: {
    minWidth: "100%",
    maxHeight: "100%",
    height: 550
    // width: 'auto',
    // backgroundRepeat: 'no-repeat',
    // backgroundAttachment: 'fixed'
  }
});
export default withStyles(styles)(props => {
  const { classes } = props;
  return (
    <Paper className={classes.Paper}>
      <Card className={classes.Card}>
        <a href="https://caruso33.github.io/pomodoR/">
          <CardMedia
            className={classes.Media}
            image={ImgPomodoR}
            title="a pomodoro tomatoe timer in material design"
          />
        </a>
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            Tomatoe Timer
          </Typography>
          <Typography component="p">
            Created with react and material-ui components
          </Typography>
        </CardContent>
      </Card>
    </Paper>
  );
});
