import React from 'react'
import './HomePage.scss'
import SearchBar from '../../components/searchbar/SearchBar'
import Background from '../../components/background/Background'

export default function HomePage() {
    return (
        <div className='home-page'>
          <Background/>
          <SearchBar/>
        </div>
    )
}
