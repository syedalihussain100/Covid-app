 
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = makeStyles({
  root: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      left: 0
  },
});

export default function Bottom({screenConfig}) {
  const classes = useStyles();

  return (
    <BottomNavigation
      value={screenConfig}
      onChange={(event, newValue) => {
          // console.log(newValue)
          screenConfig[1](newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Covid Data!" icon={<RestoreIcon />} />
      <BottomNavigationAction label="Country Data!" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Graphs" icon={<LocationOnIcon />} />
    </BottomNavigation>
  );
}