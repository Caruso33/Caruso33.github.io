import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const styles = theme => ({
  Paper: {
    padding: 20,
    "@media screen and (max-width: 600px)": {
      marginTop: 58
    },
    marginTop: 68,
    height: '100%'
  },
  Card: {
    marginTop: 20
  },
  CardContentHeading: {
    marginTop: 20
  },
  a: { color: "inherit" }
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
            <ul style={{ listStyleType: "none" }}>
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
