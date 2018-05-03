import React from 'react';
import { Paper, Typography } from 'material-ui';

export default () => {
  return (
    <Paper style={{ marginTop: 70, padding: 20 }} xs={12}>
      <Typography variant="display1" component="h3" gutterBottom>
        Impressum laut §5 TMG
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
    </Paper>
  );
};
