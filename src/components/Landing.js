import React, { Fragment } from 'react';
import { Paper, Typography } from 'material-ui';
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import { withStyles } from 'material-ui/styles';

import backgroundImg from '../img/background.jpg';

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
    maxWidth: 345,
    height: 400
  })
});

console.log(backgroundImg);
export default withStyles(styles)(() => (
  <Fragment>
    <Card style={{ width: '100%' }}>
      <CardMedia
        style={{
          height: 400
        }}
        image={backgroundImg}
        title="This is me, Tobias"
      />
    </Card>
    <Paper
      style={{
        height: '80vh',
        padding: '20px',
        backgroundImage: backgroundImg
      }}
    >
      <Typography variant="headline" component="h3">
        This is a sheet of paper.
      </Typography>
      <Typography component="p">
        Paper can be used to build surface or other elements for your
        application.
      </Typography>
    </Paper>
  </Fragment>
));
