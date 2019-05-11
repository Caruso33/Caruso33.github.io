import React from 'react';
import Imgs from '../../model/Imgs';
import Subheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import { withStyles } from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";

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
      <GridList
        key={chapter.data}
        cellHeight={180}
        className={classes.gridList}
      >
        <GridListTile cols={2} style={{ height: 'auto' }}>
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
