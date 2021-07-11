import React from 'react'
import Background from '../../components/background/Background'
import MoviePageHeader from '../../components/moviepageheader/MoviePageHeader'

export default function MoviePage() {
    return (
        <div>
            <Background wave={false}/>
            <MoviePageHeader/>
        </div>
    )
}
