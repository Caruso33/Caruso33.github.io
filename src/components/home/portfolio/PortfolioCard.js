import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Typography from "@material-ui/core/Typography"
import OpenInNewIcon from "@material-ui/icons/OpenInNew"
import React from "react"

export default function CardVertical({
  classes,
  img,
  imgTitle,
  linkTo,
  contentTitle,
  contentParagraph,
  orientation
}) {
  const isVertical = orientation === "vertical"

  const cardClass = isVertical ? classes.CardVertical : classes.CardHorizontal
  const mediaStyle = isVertical ? { height: "auto" } : { height: 300 }

  return (
    <Card className={`${cardClass} portfolio-card`} raised>
      <CardActionArea onClick={() => (window.location.href = linkTo)}>
        <CardMedia
          component="img"
          className={`${classes.Media} portfolio-media`}
          style={{ ...mediaStyle, objectFit: "contain" }}
          image={img}
          title={imgTitle}
        ></CardMedia>

        <a href={linkTo} className="portfolio-icon">
          <OpenInNewIcon fontSize="large" color="secondary" />
        </a>
      </CardActionArea>

      <CardContent>
        <Typography gutterBottom variant="h5">
          {contentTitle}
        </Typography>

        <Typography component="p">{contentParagraph}</Typography>
      </CardContent>
    </Card>
  )
}
