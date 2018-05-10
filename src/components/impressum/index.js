import React from 'react';
import { Paper, Typography } from 'material-ui';
import Card, { CardContent } from 'material-ui/Card';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  Paper: { padding: 20, height: '100vh' },
  Card: {
    '@media screen and (max-width: 600px)': {
      marginTop: 58
    },
    marginTop: 68,
    width: 300
  },
  CardContentHeading: {
    marginTop: 20
  },
  a: { color: 'inherit' }
});

export default withStyles(styles)(({ classes }) => {
  return (
    <Paper className={classes.Paper}>
      <Card className={classes.Card}>
        <CardContent>
          <Typography variant="display1" component="h3" gutterBottom>
            Impressum
          </Typography>
          <Typography variant="subheading" component="h3" gutterBottom>
            <ul style={{ listStyleType: 'none' }}>
              <li>Tobias Leinss</li>
              <li>Lorcher Strasse 36</li>
              <li>73033 Göppingen</li>
              <li>Germany</li>
              <br />
              <li>leinsst-at-web.de</li>
            </ul>
          </Typography>
        </CardContent>
      </Card>
    </Paper>
  );
});
