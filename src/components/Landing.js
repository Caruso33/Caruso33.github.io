import compose from 'recompose/compose';
import React, { Fragment, Component } from 'react';
import { Paper, Typography, Button } from 'material-ui';
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails
} from 'material-ui/ExpansionPanel';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Tooltip from 'material-ui/Tooltip';
import { Mail } from '@material-ui/icons';
import { withStyles } from 'material-ui/styles';
import withWidth from 'material-ui/utils/withWidth';

import backgroundImg from '../img/dist/landing/sizes/background-crop-400.webp';
import profilImg from '../img/dist/landing/sizes/profil-400.webp';
// import ronjaImg from '../img/dist/landing/sizes/withRonja-400.webp';
import muiImg from '../img/dist/landing/sizes/withMui-400.webp';

import Clipboard from '../../node_modules/clipboard/dist/clipboard.min.js';

var clipboard = null;
const styles = theme => ({
  // toolbar: theme.mixins.toolbar
  CardMediaMui: {
    height: 532,
    width: 400,
    maxWidth: '100%'
  },
  CardContentHeading: {
    padding: 20
  },
  Paper: { padding: 20 },
  Typography: {
    marginBottom: 20
  },
  Panel: { flexGrow: 1 },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
});

class Landing extends Component {
  componentDidMount() {
    clipboard = new Clipboard('#copyMail');
  }
  copyMail = () => {
    clipboard.on('success', function(e) {
      console.info('Copied:', e.text);
    });
  };
  render() {
    const { classes, viewWidth } = this.props;
    return (
      <Fragment>
        <Card className={classes.Card} style={{ marginTop: 60 }} xs={12}>
          <CardMedia
            className={classes.CardMediaBackground}
            image={backgroundImg}
            style={{
              height: 400
            }}
            title="This is me, Tobias, casually"
            xs={12}
          />
        </Card>
        <Paper className={classes.Paper} xs={12}>
          <Typography
            variant="display1"
            component="h3"
            className={classes.Typography}
            gutterBottom
          >
            Hi,
          </Typography>
          <Typography variant="subheading" component="p" gutterBottom>
            my name is Tobias Leinss and I specialised in IT with related
            projects in my studies.
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
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              flexDirection: 'column',
              alignItems: 'center',
              marginTop: 30
            }}
          >
            <CardContent xs={12}>
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
              style={{
                height: 291,
                width: 200
                // position: 'inline'
              }}
              xs={12}
              sm={6}
            />
            <CardContent xs={12} sm={6}>
              <ExpansionPanel className={classes.Panel}>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography className={classes.heading}>
                    Build websites
                  </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>
                    I build a landing page, portfolio-page, contact-page, blog,
                    etc. from ground up
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
                    I mainly use reactjs on the frontend side, nodejs & express
                    on the backend and mongodb as database of choice.
                    <br />Of course there can be another setup if need be.
                  </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>
              <ExpansionPanel className={classes.Panel}>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography className={classes.heading}>
                    Using a widely accepted design language created by google
                    and up-to-date frontend components developed by facebook
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
                    Making the website mobile-ready as taught by Google and
                    Udacity with the <br />
                    <a href="https://www.udacity.com/course/mobile-web-specialist-nanodegree--nd024">
                      Mobile Web Specialist Nano-degree
                    </a>
                  </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>
                    Providing you best practices in terms of responsiveness,
                    accessibility, offline functionality, low-fi connectivity,
                    etc.
                  </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>
            </CardContent>
          </Card>
          <Card className={classes.Card}>
            {/* <CardMedia
        image={ronjaImg}
        title="Me with our family dog back in Germany"
        className={classes.CardMediaRonja}
        style={{
        maxWidth: '100%',
        CardMediaRonja: {
        height: 450,
        width: 600,
        maxWidth: '100%'
      }
    }}
    xs={12}
  /> */}
            <CardContent>
              <Typography
                gutterBottom
                variant="headline"
                component="h2"
                className={classes.CardContentHeading}
              >
                more
              </Typography>
              <Typography
                variant="subheading"
                component="p"
                style={{ marginTop: 10 }}
              >
                I am recipient of Google's Developer Challenge Scholarship to
                deepen my understanding of modern mobile websites and to align
                projects to best practices.
              </Typography>
              <Typography
                variant="subheading"
                component="p"
                style={{ marginTop: 10 }}
              >
                Overall, I am more than willed to get things done, successfully
                and in a compassionate manner.
              </Typography>
              <Typography
                variant="subheading"
                component="p"
                style={{ marginTop: 10 }}
              >
                If your project isn't listed or you are unsure if I can help
                you, just send me a message to see if it's something I can do. I
                usually respond within one hour and promise to get back to you
                within 12 hours.
              </Typography>
            </CardContent>
          </Card>
          <Card
            className={classes.Card}
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center'
            }}
          >
            <CardContent>
              <CardMedia
                image={muiImg}
                title="Mui and me"
                className={classes.CardMediaMui}
                // style={{ maxHeight: '100%' }}
              />
              <Typography
                gutterBottom
                variant="headline"
                component="h2"
                className={classes.CardContentHeading}
              >
                Who I am
              </Typography>
              <Typography
                variant="subheading"
                component="p"
                style={{ marginTop: 10 }}
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
                style={{ marginTop: 10 }}
              >
                If you have ANY questions, don't hesitate to send me a message.
              </Typography>
              <Typography
                variant="subheading"
                component="p"
                style={{ textAlign: 'center', marginTop: 10 }}
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
                    onClick={this.copyMail}
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
          </Card>
        </Paper>
      </Fragment>
    );
  }
}

export default compose(withStyles(styles), withWidth())(Landing);
