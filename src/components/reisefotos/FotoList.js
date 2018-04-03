import React from 'react';

import Imgs from '../../model/Imgs';

import { Paper } from 'material-ui';
import GridList, { GridListTile, GridListTileBar } from 'material-ui/GridList';
import Subheader from 'material-ui/List/ListSubheader';
import IconButton from 'material-ui/IconButton';
import InfoIcon from 'material-ui-icons/Info';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  root: {
    marginTop: 60,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    width: 500,
    height: 800
  },
  img: {
    width: '100%'
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)'
  }
});

export default withStyles(styles)(({ classes }) => (
  <Paper className={classes.root}>
    {Imgs.map(chapter => (
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <Subheader component="div">{chapter.title}</Subheader>
        </GridListTile>
        {chapter.data.map(album => (
          <GridListTile key={album.albumTitle}>
            <img
              className={classes.img}
              src={album.imgsrc}
              alt={album.albumTitle + 'Fotoalbum'}
              // style={{ width: 280 }}
            />
            <GridListTileBar
              title={album.albumTitle}
              subtitle={<span>{chapter.title}</span>}
              // style={{ width: 280 }}
              actionIcon={
                <a href={album.albumsrc}>
                  <IconButton className={classes.icon}>
                    <InfoIcon />
                  </IconButton>
                </a>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    ))}
  </Paper>
));
// {/* <SectionHeader sectionTitle="Reisefotoalben" className="sectionHeader" /> */}
