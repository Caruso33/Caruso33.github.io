import React from 'react';
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import { Typography, Grid } from 'material-ui';
import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails
} from 'material-ui/ExpansionPanel';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import profilImg from '../../../img/dist/landing/sizes/profil-400.webp';

const profil = ({ classes, width }) => {
  return (
    <Card className={classes.Card} style={{ paddingBottom: 24 }}>
      <Grid container justify="center" alignItems="center">
        <Grid item sm={12}>
          <CardContent>
            <Typography
              align="center"
              gutterBottom
              variant="headline"
              component="h2"
              className={classes.CardContentHeading}
            >
              What I can do
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={12} sm={5} md={3}>
          <CardMedia
            image={profilImg}
            title="It's me, professionally"
            className={classes.CardMediaProfil}
            style={{
              backgroundSize: 'contain',
              height: 291,
              width: 'auto'
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
                  I mainly use reactjs on the frontend side, nodejs & express on
                  the backend and mongodb as database of choice.
                  <br />Of course there can be another setup if need be.
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>
                  Using a widely accepted design language created by google and
                  up-to-date frontend components developed by facebook
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  <a className={classes.a} href="www.material.io">
                    material
                  </a>{' '}
                  and
                  <a className={classes.a} href="www.reactjs.org">
                    reactjs
                  </a>
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>
                  Making the website mobile-ready as taught by Google and
                  Udacity with the <br />
                  <a
                    className={classes.a}
                    href="https://www.udacity.com/course/mobile-web-specialist-nanodegree--nd024"
                  >
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
        </Grid>
      </Grid>
    </Card>
  );
};

export default profil;
