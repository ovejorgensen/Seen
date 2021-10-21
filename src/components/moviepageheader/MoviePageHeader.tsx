import React from 'react'
import Grid from '@material-ui/core/Grid';
import { createStyles, makeStyles, Paper, Theme, Typography } from '@material-ui/core';
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
            flexWrap: 'wrap',
            marginTop: '25px',
        },
        paper: {
            height: '346px',
            width: '232px',
            // backgroundColor: 'white',
            borderRadius: '20px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        thumbnail: {
            height: '342px',
            width: '228px',
            borderRadius: '20px',
            border: '2px solid white'
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
            <Grid spacing={4} container className={classes.container}>
                <Grid item>
                    <Paper elevation={4} className={classes.paper}>
                        <img className={classes.thumbnail} src='https://s3-alpha-sig.figma.com/img/a23e/1977/b6a19fe8084f1f0165128a4142a8ba00?Expires=1630886400&Signature=HeDgq~LY0V5-SVovs4Yo5CYWjYc5FGYQ-o3eYjvtGM1-LTo5Pxjg3UQ4vFqbGzczaEMqhzMSTVfQiVE8p9IOrv0rI7uTQHLxYYcVfYh~N2l6NxDDAQUM6lPM94roH5T-iLPguGcG9MbP09wbgZSSZk8EO2iVILdbzbNnZXoeSAroaSPx0k7eeRlAgwT1J03hiB4XsPwOixmh1Pq61JbfOva6lsBj-kFwIEwK4QX9InA33Sx~si0lGG5FzQ9WwnAQ4so3uRTjsdssCfd-8v2mNSRG0DEFDbVf1FkKXqRqahd45vGdm-bIVz7XzV81xO9nawSvL2FkWu4~~uunjEk3CA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'></img>
                    </Paper>
                </Grid>
                <Grid item>
                    <Paper elevation={4} className={classes.paper}>
                        <img className={classes.thumbnail} src='https://s3-alpha-sig.figma.com/img/a23e/1977/b6a19fe8084f1f0165128a4142a8ba00?Expires=1630886400&Signature=HeDgq~LY0V5-SVovs4Yo5CYWjYc5FGYQ-o3eYjvtGM1-LTo5Pxjg3UQ4vFqbGzczaEMqhzMSTVfQiVE8p9IOrv0rI7uTQHLxYYcVfYh~N2l6NxDDAQUM6lPM94roH5T-iLPguGcG9MbP09wbgZSSZk8EO2iVILdbzbNnZXoeSAroaSPx0k7eeRlAgwT1J03hiB4XsPwOixmh1Pq61JbfOva6lsBj-kFwIEwK4QX9InA33Sx~si0lGG5FzQ9WwnAQ4so3uRTjsdssCfd-8v2mNSRG0DEFDbVf1FkKXqRqahd45vGdm-bIVz7XzV81xO9nawSvL2FkWu4~~uunjEk3CA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'></img>
                    </Paper>
                </Grid>
                <Grid item>
                    <Paper elevation={4} className={classes.paper}>
                        <img className={classes.thumbnail} src='https://s3-alpha-sig.figma.com/img/a23e/1977/b6a19fe8084f1f0165128a4142a8ba00?Expires=1630886400&Signature=HeDgq~LY0V5-SVovs4Yo5CYWjYc5FGYQ-o3eYjvtGM1-LTo5Pxjg3UQ4vFqbGzczaEMqhzMSTVfQiVE8p9IOrv0rI7uTQHLxYYcVfYh~N2l6NxDDAQUM6lPM94roH5T-iLPguGcG9MbP09wbgZSSZk8EO2iVILdbzbNnZXoeSAroaSPx0k7eeRlAgwT1J03hiB4XsPwOixmh1Pq61JbfOva6lsBj-kFwIEwK4QX9InA33Sx~si0lGG5FzQ9WwnAQ4so3uRTjsdssCfd-8v2mNSRG0DEFDbVf1FkKXqRqahd45vGdm-bIVz7XzV81xO9nawSvL2FkWu4~~uunjEk3CA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'></img>
                    </Paper>
                </Grid>
                <Grid item>
                    <Paper elevation={4} className={classes.paper}>
                        <img className={classes.thumbnail} src='https://s3-alpha-sig.figma.com/img/a23e/1977/b6a19fe8084f1f0165128a4142a8ba00?Expires=1630886400&Signature=HeDgq~LY0V5-SVovs4Yo5CYWjYc5FGYQ-o3eYjvtGM1-LTo5Pxjg3UQ4vFqbGzczaEMqhzMSTVfQiVE8p9IOrv0rI7uTQHLxYYcVfYh~N2l6NxDDAQUM6lPM94roH5T-iLPguGcG9MbP09wbgZSSZk8EO2iVILdbzbNnZXoeSAroaSPx0k7eeRlAgwT1J03hiB4XsPwOixmh1Pq61JbfOva6lsBj-kFwIEwK4QX9InA33Sx~si0lGG5FzQ9WwnAQ4so3uRTjsdssCfd-8v2mNSRG0DEFDbVf1FkKXqRqahd45vGdm-bIVz7XzV81xO9nawSvL2FkWu4~~uunjEk3CA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'></img>
                    </Paper>
                </Grid>
            </Grid>
        </main>
    )
}
