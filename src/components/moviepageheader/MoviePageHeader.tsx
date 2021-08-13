import React from 'react'
import Grid from '@material-ui/core/Grid';
import { createStyles, makeStyles, Theme, Typography } from '@material-ui/core';
import SearchBar from '../searchbar/SearchBar'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between'
        },
        leftSide: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '30px',
            color: 'white',
            flexGrow: 1,
        },
        search: {
            marginLeft: 'auto',
            float: 'right'
        },
        main: {
            paddingTop: '64px',
            width: '80%',
            maxWidth: '1024px',
            display: 'flex',
            margin: 'auto',
            flexDirection: 'column'
        },
        container: {
            flexWrap: 'wrap'
        }
    }),
);


export default function MoviePageHeader() {
    const classes = useStyles();

    return (
        <main className={classes.main}>
            <div className={classes.root}>
                <div className={classes.leftSide}>
                    <Typography className='typographies' variant='h2'>Movies</Typography>
                    <Typography className='typographies' variant='h4'>watched</Typography>
                    <Typography className='typographies' variant='h4'>to watch</Typography>
                </div>
                <div className={classes.search}>
                    <SearchBar homePage={false} />
                </div>
            </div>
            <Grid container className={classes.container}>
                <Grid item>

                </Grid>
            </Grid>
        </main>
    )
}
