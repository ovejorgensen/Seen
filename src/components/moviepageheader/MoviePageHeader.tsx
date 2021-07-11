import React from 'react'
import Grid from '@material-ui/core/Grid';
import { createStyles, makeStyles, Theme, Typography } from '@material-ui/core';
import SearchBar from '../searchbar/SearchBar'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      paddingTop: '64px',
      alignItems: 'center',
    },
    title: {
        flexGrow: 1,
        textAlign: 'center',
        color: 'white',
    },
    screenToggler: {
        color: 'white',
    },
    growItem: {
        flexGrow: 1,
        color: 'white'
    },
    container: {
        position: 'absolute'
    }
  }),
);


export default function MoviePageHeader() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container className={classes.container}>
                <Grid item xs={12} md={3}>
                    <Typography variant="h3" className={classes.title}>
                        Movies
                    </Typography>
                </Grid>
                <Grid item xs={3} md={3}>
                     <Typography variant="h6" className={classes.screenToggler}>
                        Seen
                    </Typography>
                </Grid>
                <Grid item xs={3} md={3}>
                    <Typography variant="h6" className={classes.growItem}>
                        Watchlist
                    </Typography>
                </Grid>
                <Grid item xs={3} md={3}>
                    <SearchBar/>
                </Grid>
            </Grid>
        </div>
    )
}
