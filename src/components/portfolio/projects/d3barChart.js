import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import React from "react";
// import ImgBarChart from "../../../img/dist/portfolio/d3barChart.webp";
import ImgBarChart from "../../../img/src/portfolio/d3barChart.png";
import Card from "@material-ui/core/Card";

export default function d3barChart({ classes }) {
  return (
    <Card className={classes.CardHorizontal}>
      <a href="https://codepen.io/caruso33/full/oRebmV" className="media">
        <CardMedia
          className={classes.Media}
          style={{ height: 300 }}
          image={ImgBarChart}
          title="A D3 Bar Chart of GDPs progression over time"
        />
      </a>
      <CardContent>
        <Typography gutterBottom variant="headline" component="h2">
          D3 Bar Chart
        </Typography>
        <Typography component="p">
          Created with <a href="https://d3js.org">D3Js</a>
        </Typography>
      </CardContent>
    </Card>
  );
}
