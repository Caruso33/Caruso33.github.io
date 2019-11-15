import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import { useTheme } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Mail } from "@material-ui/icons";
import React from "react";

export default ({ classes, copyMail }) => {
  const theme = useTheme();
  const largerSM = useMediaQuery(theme.breakpoints.up("sm"));
  let imageSize = largerSM ? 500 : 300;

  const muiImg = require(`../../../img/dist/landing/sizes/withMui-${imageSize +
    100}.webp`);

  return (
    <Card className={classes.Card}>
      <CardContent>
        <Grid container justify="center" alignItems="center">
          <Grid item xs={12}>
            <Typography
              gutterBottom
              variant="h4"
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
            <CardContent style={{ paddingRight: 50 }}>
              <Typography
                variant="subtitle1"
                component="p"
                className={classes.CardContentHeading}
              >
                After traveling through Nepal and Thailand with my backpack for
                some time, I realized that I enjoy the combination of living
                abroad, working on my laptop and traveling on free time very
                much.
                <br />
                So much in fact, that I decided to sell most of my things back
                home in Germany in order to pursue this life. Now I am living in
                Bangkok with my girlfriend.
              </Typography>

              <Typography
                variant="subtitle1"
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
                variant="subtitle1"
                component="p"
                className={classes.CardContentHeading}
              >
                If you have ANY questions, don't hesitate to send me a message.
              </Typography>
              <Typography
                variant="subtitle1"
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
