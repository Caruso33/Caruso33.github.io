import React from 'react';
import { Typography, Grid } from 'material-ui';
import Card, { CardContent } from 'material-ui/Card';

// import ronjaImg from '../../img/dist/landing/sizes/withRonja-400.webp';

const more = ({ classes, width }) => {
  return (
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
        <Grid item md={8} lg={6} style={{ margin: 'auto' }}>
          <Typography
            gutterBottom
            variant="headline"
            component="h2"
            className={classes.CardContentHeading}
            align="center"
          >
            #more
          </Typography>
          <Typography
            variant="subheading"
            component="p"
            className={classes.CardContentHeading}
          >
            I am recipient of{' '}
            <a
              className={classes.a}
              href="https://www.udacity.com/course/mobile-web-specialist-nanodegree--nd024"
            >
              Google's Developer Challenge Scholarship
            </a>{' '}
            to deepen my understanding of modern mobile websites and to align
            projects to best practices.
          </Typography>
          <Typography
            variant="subheading"
            component="p"
            className={classes.CardContentHeading}
          >
            Overall, I am more than willed to get things done, successfully and
            in a compassionate manner.
          </Typography>
          <Typography
            variant="subheading"
            component="p"
            className={classes.CardContentHeading}
          >
            If you are unsure if I can help you, just send me a message to see
            if it's something I can do. I usually respond within one hour and
            promise to get back to you within 12 hours.
          </Typography>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default more;
