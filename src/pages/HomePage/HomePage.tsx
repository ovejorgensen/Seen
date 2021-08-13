import React from 'react'
import './HomePage.scss'
import SearchBar from '../../components/searchbar/SearchBar'
import Background from '../../components/background/Background'
// import { createStyles, makeStyles } from '@material-ui/core';
// import { Theme } from '@material-ui/core';


// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     search: {
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       height: '100vh',
//       width: '100vw',
//     }
//   }),
// );

export default function HomePage() {
  // const classes = useStyles();
  return (
    <div className='home-page'>
      <Background wave={true} />
      <SearchBar homePage={true} />
      {/* <div> */}
      {/* </div> */}
    </div>
  )
}
