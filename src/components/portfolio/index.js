import React from 'react';
import { Paper, Card, Typography } from 'material-ui';
import { CardContent, CardMedia } from 'material-ui/Card';
import { withStyles } from 'material-ui/styles';

import ImgPomodoR from '../../img/src/pomodor-min.png';

const styles = theme => ({
  Paper: {
    '@media screen and (max-width: 600px)': {
      marginTop: 60
    },
    marginTop: 70,
    paddingTop: 30,
    paddingBottom: 20,
    textAlign: 'center',
    height: '90vh'
  },
  Card: {
    width: 300,
    margin: 'auto'
  },
  Media: {
    height: 600,
    width: 'auto'
  }
});
export default withStyles(styles)(props => {
  const { classes } = props;
  return (
    <Paper className={classes.Paper}>
      <Card className={classes.Card}>
        <a href="https://caruso33.github.io/pomodoR/">
          <CardMedia
            className={classes.Media}
            image={ImgPomodoR}
            title="a pomodoro tomatoe timer in material design"
          />
        </a>
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            Tomatoe Timer
          </Typography>
          <Typography component="p">
            Created with react and material-ui components
          </Typography>
        </CardContent>
      </Card>
    </Paper>
  );
});
