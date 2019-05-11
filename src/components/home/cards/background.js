import React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";

const background = ({ classes, width }) => {
  let imageSize, imageHeight;

  if (width === "xs") {
    imageHeight = 400;
    imageSize = 400;
  }
  if (width === "sm") {
    imageHeight = 400;
    imageSize = 600;
  }
  if (width === "md") {
    imageHeight = 400;
    imageSize = 800;
  }
  if (width === "lg") {
    imageHeight = 500;
    imageSize = 1000;
  }
  if (width === "xl") {
    imageHeight = 600;
    imageSize = 1200;
  }

  const backgroundImg = require(`../../../img/dist/landing/sizes/background-${imageSize}.webp`);

  return (
    <Card className={classes.Card} xs={12}>
      <CardMedia
        image={backgroundImg}
        title="This is me, Tobias, casually"
        xs={12}
        style={{ height: imageHeight }}
      />
    </Card>
  );
};

export default background;
