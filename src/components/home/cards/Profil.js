import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Grid from "@material-ui/core/Grid";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import { Mail } from "@material-ui/icons";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import React from "react";
import profilImg from "../../../img/dist/landing/sizes/profil-400.webp";

const profil = ({ classes, copyMail }) => {
  return (
    <Card className={classes.Card} style={{ paddingBottom: 24 }}>
      <Grid container justify="center" alignItems="center">
        <Grid item sm={12}>
          <Typography
            align="center"
            gutterBottom
            variant="h4"
            className={classes.CardContentHeading}
          >
            What I do
          </Typography>
        </Grid>
        <Grid item xs={12} sm={5} md={3} style={{ alignSelf: "flex-start" }}>
          <CardMedia
            image={profilImg}
            title="It's me, professionally"
            className={classes.CardMediaProfil}
            style={{
              backgroundSize: "contain",
              height: 291,
              width: "auto",
              marginTop: 30
            }}
          />
        </Grid>
        <Grid item xs={12} sm={7} md={9}>
          <CardContent>
            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>
                  Build or extend <span className="linkColor">websites</span>
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  I build e.g. landing pages, dashboards, blogs from ground up
                  <br />
                  and extend them with authentification, payments,
                  email-subscriptions
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>
                  Build <span className="linkColor">mobile apps</span>
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  In my previous company I've built an social media app for iOS
                  and{" "}
                  <a href="https://play.google.com/store/apps/details?id=com.sandboxglobal.sandboxplay">
                    Android
                  </a>{" "}
                  with{" "}
                  <a href="https://facebook.github.io/react-native/">
                    React-Native.js
                  </a>
                  .
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>
                  Build a{" "}
                  <span className="linkColor">
                    solid website infrastructure
                  </span>{" "}
                  using widely accepted design languages
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  I mainly use <a href="https://reactjs.org/">react.js</a> on
                  the frontend side,{" "}
                  <a href="https://nodejs.org/en/">node.js</a> &{" "}
                  <a href="https://expressjs.com/">express.js</a> on the backend
                  <br />
                  and <a href="https://www.mongodb.com/">mongodb</a> as database
                  or <a href="https://firebase.google.com/">firebase</a> as
                  serverless solution of choice.
                  <br />
                  <br />
                  Design e.g.{" "}
                  <a href="https://material-ui.com/">Material Design</a>{" "}
                  originally by google.
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>
                  Making websites PWA{" "}
                  <span className="linkColor">mobile-ready</span> as taught by
                  Google and Udacity by the
                  <br />
                  <span className="linkColor">
                    Mobile Web Specialist Nano-degree
                  </span>
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  I was recipient of{" "}
                  <a href="https://www.udacity.com/course/mobile-web-specialist-nanodegree--nd024">
                    Google's Developer Challenge Scholarship
                  </a>{" "}
                  to deepen my understanding of modern mobile websites and to
                  align projects to best practices regarding e.g.
                  responsiveness, accessibility, offline functionality, low-fi
                  connectivity.
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>

            <br />
            <Typography
              variant="subtitle1"
              component="p"
              className={classes.CardContentHeading}
            >
              If you are unsure if I can help you, just send me a message to see
              if it's something I can do.
              <br />
              <br />
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
    </Card>
  );
};

export default profil;
