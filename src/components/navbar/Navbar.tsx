import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    navBtn: {
      marginRight: theme.spacing(8),
      color: '#4A7C79',
      '&:hover': {
          borderBottom: '2px solid #4A7C79',
          cursor: 'pointer'
      }
    },
    title: {
      flexGrow: 1,
      color: '#45AD8E',
      width: '111px',
      height: '53px',
      left: '23px',
      fontStyle: 'normal',
      fontSize: '45px',
      lineHeight: '53px',
    },
    appBar: {
        backgroundColor: 'white',
    }
  }),
);

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar}>
        <Toolbar>
            <Typography variant="h6" className={classes.title}>
                SEEN
            </Typography>
            <Link to='/movies' style={{ textDecoration: 'none' }}>
                <Typography variant="h6" className={classes.navBtn}>
                    Movies 
                </Typography>
            </Link>
            <Link to='/series' style={{ textDecoration: 'none' }}>
                <Typography variant="h6" className={classes.navBtn}>
                    Series 
                </Typography>
            </Link>
         </Toolbar>
      </AppBar>
    </div>
  );
}

