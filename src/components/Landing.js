import React, { Fragment } from 'react';
import { Paper, Typography } from 'material-ui';
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails
} from 'material-ui/ExpansionPanel';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import { withStyles } from 'material-ui/styles';

import backgroundImg from '../img/dist/background-original.jpg';
import profilImg from '../img/dist/profil-200.jpg';
import ronjaImg from '../img/dist/withRonja-600.jpg';
import muiImg from '../img/dist/withMui-400.jpg';

const styles = theme => ({
  // toolbar: theme.mixins.toolbar
  Card: {
    width: '100%',
    marginTop: 20,
    '@media screen and (minWidth: 600px)': { marginTop: 700 }
  },
  CardMediaBackground: { height: 400, maxWidth: '100%' },
  CardMediaProfil: {
    height: 291,
    width: 200,
    maxWidth: '100%',
    position: 'inline'
  },
  CardMediaRonja: {
    height: 450,
    width: 600,
    maxWidth: '100%'
  },
  CardMediaMui: {
    height: 532,
    width: 400,
    maxWidth: '100%'
  },
  CardContentHeading: {
    padding: 20
  },
  Paper: { padding: '20px' },
  Typography: {
    marginBottom: 20
  },
  Panel: { flexGrow: 1 },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
});

export default withStyles(styles)(({ classes }) => (
  <Fragment>
    <Card className={classes.Card} style={{ marginTop: 60 }}>
      <CardMedia
        className={classes.CardMediaBackground}
        image={backgroundImg}
        title="This is me, Tobias, casually"
      />
    </Card>
    <Paper className={classes.Paper}>
      <Typography
        variant="display1"
        component="h3"
        className={classes.Typography}
        gutterBottom
      >
        Hi,
      </Typography>
      <Typography variant="subheading" component="p" gutterBottom>
        my name is Tobias Leinss and I specialised in IT with related projects
        in my studies.
        <br />
        I am very keen on getting further experience in the field of web
        development while helping you reaching your goals.
        <br />
        My thesis was related in the field of Industrie 4.0 in a mid-sized
        German manufacturer, my work experience also includes product
        development at a German wholesaler.
      </Typography>

      <Card
        className={classes.Card}
        style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}
      >
        <CardContent style={{ width: '100%' }}>
          <Typography
            gutterBottom
            variant="headline"
            component="h2"
            className={classes.CardContentHeading}
            style={{ textAlign: 'center' }}
          >
            What I can do
          </Typography>
        </CardContent>
        <CardMedia
          image={profilImg}
          title="It's me, professionally"
          className={classes.CardMediaProfil}
          style={{ width: '30vw', maxWidth: 200 }}
        />
        <CardContent style={{ width: '60vw' }}>
          <ExpansionPanel className={classes.Panel}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.heading}>
                Build websites
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                I build a landing page, portfolio-page, contact-page, blog, etc.
                from ground up
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel className={classes.Panel}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.heading}>
                Extend present websites
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                I enhance your website with authentification, payments, etc.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel className={classes.Panel}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.heading}>
                Build a solid website infrastructure
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                I mainly use reactjs on the frontend side, nodejs & express on
                the backend and mongodb as database of choice.
                <br />Of course there can be another setup if need be.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel className={classes.Panel}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.heading}>
                Using a widely accepted design language created by google and
                up-to-date frontend components developed by facebook
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                <a href="www.material.io">material</a> and{' '}
                <a href="www.reactjs.org">reactjs</a>
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel className={classes.Panel}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.heading}>
                Making the website mobile-ready as taught by Google and Udacity
                at Mobile Web Specialist Nano-degree
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                Providing you best practices in terms of responsiveness,
                accessibility, offline functionality, low-fi connectivity, etc.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </CardContent>
      </Card>
      <Card className={classes.Card}>
        <CardMedia
          image={ronjaImg}
          title="Me with our family dog back in Germany"
          className={classes.CardMediaRonja}
          style={{ maxWidth: '100%' }}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="headline"
            component="h2"
            className={classes.CardContentHeading}
          >
            more
          </Typography>
          <Typography variant="subheading" component="p">
            I am recipient of Google's Developer Challenge Scholarship to deepen
            my understanding of modern mobile websites and to align projects to
            best practices.
            <br /> Overall, I am more than willed to get things done,
            successfully and in a compassionate manner. <br />
            If your project isn't listed or you are unsure if I can help you,
            just send me a message to see if it's something I can do. I usually
            respond within one hour and promise to get back to you within 12
            hours.
          </Typography>
        </CardContent>
      </Card>
      <Card
        className={classes.Card}
        style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}
      >
        <CardContent>
          <CardMedia
            image={muiImg}
            title="Me with our family dog back in Germany"
            className={classes.CardMediaMui}
            style={{ maxHeight: '100%' }}
          />
          <Typography
            gutterBottom
            variant="headline"
            component="h2"
            className={classes.CardContentHeading}
          >
            Who I am
          </Typography>
          <Typography variant="subheading" component="p">
            I am a digital nomad having my base in Bangkok and living here with
            my girlfriend. I am enjoying the combination of working on my laptop
            and traveling on free time so much that I decided to sell most of my
            things back home in Germany in order to pursue this life.
          </Typography>
          <br />
          <Typography variant="subheading" component="p">
            If you have ANY questions, don't hesitate to send me a message.
            Thanks!
          </Typography>
        </CardContent>
      </Card>
    </Paper>
  </Fragment>
));
