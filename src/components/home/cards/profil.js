import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import profilImg from "../../../img/dist/landing/sizes/profil-400.webp";

const profil = ({ classes }) => {
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
            What I can do
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
                <Typography>Build websites</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  I build landing pages, portfolio-pages, contact-pages, blogs,
                  etc. from ground up
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Build Mobile Apps</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  In my previous company I've built an social media app for{" "}
                  <a href="https://itunes.apple.com/th/app/sandbox-play/id1262396310?mt=8">
                    iOS
                  </a>{" "}
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
                <Typography>Extend present websites</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  I enhance your website with authentification, payments, etc.
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Build a solid website infrastructure</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  I mainly use <a href="https://reactjs.org/">reactjs</a> on the
                  frontend side, <a href="https://nodejs.org/en/">nodejs</a> &{" "}
                  <a href="https://expressjs.com/">expressjs</a> on the backend
                  and <a href="https://www.mongodb.com/">mongodb</a> as database
                  or <a href="https://firebase.google.com/">firebase</a> as
                  serverless solution of choice.
                  <br />
                  Of course there can be any other setup.
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>
                  Using widely accepted design languages and state-of-the-art
                  frontend components
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  E.g. <a href="https://material-ui.com/">Material Design</a>{" "}
                  originally by google or{" "}
                  <a href="https://ant.design/">Ant-Design</a> together with{" "}
                  <a href="www.reactjs.org">reactjs</a> of facebook
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>
                  Making the website PWA mobile-ready as taught by Google and
                  Udacity by the <br />
                  <a href="https://www.udacity.com/course/mobile-web-specialist-nanodegree--nd024">
                    Mobile Web Specialist Nano-degree
                  </a>
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  I was recipient of{" "}
                  <a href="https://www.udacity.com/course/mobile-web-specialist-nanodegree--nd024">
                    Google's Developer Challenge Scholarship
                  </a>{" "}
                  to deepen my understanding of modern mobile websites and to
                  align projects to best practices.
                  <br />I can support you through developing a{" "}
                  <a href="https://en.wikipedia.org/wiki/Progressive_web_app">
                    PWA (Progressive Web Apps)
                  </a>
                  , providing you with best practices in terms of
                  responsiveness, accessibility, offline functionality, low-fi
                  connectivity, etc.
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
};

export default profil;
