import React from "react";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { Mail } from "@material-ui/icons";

let imageSize = 300;
export default ({ classes, width, copyMail }) => {
  // if (width === "xs") imageSize = 300;
  // if (width === "md" || width === "sm" || width === "lg" || width === "xl")
  // imageSize = 500;

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
              #more
            </Typography>
          </Grid>

          <Grid item xs={12} sm={5} md={4} style={{ alignSelf: "flex-start" }}>
            <CardMedia
              image={muiImg}
              title="Mui and me"
              className={classes.CardMediaMui}
              style={{
                height: imageSize,
                backgroundSize: "contain",
                width: "auto",
                marginTop: 40
              }}
            />
          </Grid>

          <Grid item xs={12} sm={7} md={8}>
            <CardContent>
              <Typography
                variant="subheading"
                component="p"
                className={classes.CardContentHeading}
              >
                If you are unsure if I can help you, just send me a message to
                see if it's something I can do.
                <br />
                If it's something, I assure that we'll get things successfully
                and compassionately done.
              </Typography>

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
                    variant="contained"
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
