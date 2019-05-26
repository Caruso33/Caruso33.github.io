import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import React from "react";
import ImgPomodoR from "../../../img/dist/portfolio/pomodor-min.webp";

export default function pomodor({ classes }) {
  return (
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
          Created with <a href="https://reactjs.org">ReactJs</a> and{" "}
          <a href="https://material-ui.com">Material-UI</a> components
        </Typography>
      </CardContent>
    </Card>
  );
}
