import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    main:{
    },
    search: {
      position: 'absolute',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: 'white',
      '&:hover': {
        border: '2px solid black' 
      }
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    },
  }),
);

const getSearch = async (query: string) => {
  const response =
      await fetch(`https://api.themoviedb.org/3/search/movie?query=${query}`,
        { 
          method: 'get',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.REACT_APP_TMDB_BEARER_TOKEN}`
          }
        }
      )
    console.log(await response.json())  
}


export default function SearchBar() {
    const classes = useStyles();
    
    getSearch('Avengers')

    return (
        <div className={classes.main}>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon>add_circle</SearchIcon>
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>    
        </div>
    )
}
