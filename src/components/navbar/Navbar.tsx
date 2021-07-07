import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    toolBar: {
      display: 'flex',
      alignItems: 'center'
    },
    title: {
      flexGrow: 1,
      color: '#45AD8E',
      position: 'absolute',
      width: '111px',
      height: '53px',
      left: '23px',
      fontStyle: 'normal',
      fontSize: '45px',
      lineHeight: '53px'
    },
    appBar: {
        backgroundColor: 'white'
    }
  }),
);

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <Typography variant="h6" className={classes.title}>
            SEEN
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

