import React from "react";
import { Typography, Tooltip, Button, Grid } from "material-ui";
import Card, { CardContent, CardMedia } from "material-ui/Card";
import { Mail } from "@material-ui/icons";

let imageSize;
export default ({ classes, width, copyMail }) => {
  if (width === "xs") imageSize = 300;
  if (width === "md" || width === "sm" || width === "lg" || width === "xl")
    imageSize = 500;

  const muiImg = require(`../../../img/dist/landing/sizes/withMui-${imageSize +
    100}.webp`);

  return (
    <Card className={classes.Card}>
      <CardContent>
        <Grid container justify="center" alignItems="center">
          <Grid item xs={12}>
            <Typography
              gutterBottom
              variant="headline"
              component="h2"
              className={classes.CardContentHeading}
              align="center"
              style={{ marginBottom: 30 }}
            >
              Who I am
            </Typography>
          </Grid>

          <Grid item align="center" xs={8} md={6}>
            <CardMedia
              image={muiImg}
              title="Mui and me"
              className={classes.CardMediaMui}
              style={{
                height: imageSize,
                width: "auto",
                maxWidth: 370
              }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <CardContent>
              <Typography
                variant="subheading"
                component="p"
                className={classes.CardContentHeading}
              >
                I am a digital nomad having my base in Bangkok and living here
                with my girlfriend. I am enjoying the combination of working on
                my laptop and traveling on free time so much that I decided to
                sell most of my things back home in Germany in order to pursue
                this life.
              </Typography>
              <Typography
                variant="subheading"
                component="p"
                className={classes.CardContentHeading}
              >
                If you have ANY questions, don't hesitate to send me a message.
              </Typography>
              <Typography
                variant="subheading"
                component="p"
                style={{ textAlign: "center" }}
                className={classes.CardContentHeading}
              >
                Thanks!
                <Tooltip
                  title="Click to Copy my Mail to Clipboard"
                  placement="right-end"
                >
                  <Button
                    id="copyMail"
                    data-clipboard-text="leinsst@web.de"
                    className={classes.button}
                    variant="raised"
                    color="primary"
                    style={{ padding: 15, margin: 20 }}
                    onClick={copyMail}
                  >
                    Mail
                    <Mail
                      className={classes.rightIcon}
                      style={{ marginLeft: 20 }}
                    />
                  </Button>
                </Tooltip>
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
