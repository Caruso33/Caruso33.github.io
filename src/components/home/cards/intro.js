import React from 'react';
import { Typography, Grid } from 'material-ui';

const intro = ({ classes }) => (
  <Grid item md={8} lg={6} style={{ margin: '20px auto' }}>
    <Typography
      variant="display1"
      component="h3"
      className={classes.Typography}
      gutterBottom
    >
      Hi,
    </Typography>
    <Typography variant="subheading" component="p" gutterBottom>
      my name is Tobias Leinss and I specialised in IT with related projects in
      my studies.
      <br />
      I am very keen on getting further experience in the field of web
      development while helping you reaching your goals.
      <br />
      My thesis was related in the field of Industrie 4.0 in a mid-sized German
      manufacturer, my work experience also includes product development at a
      German wholesaler.
    </Typography>
  </Grid>
);

export default intro;
