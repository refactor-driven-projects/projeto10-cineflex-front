import React from 'react';
import { Container } from './HomepageStyle';
import Header from '../../components/Header';
import MovieCard from '../../components/MovieCard';
import { MoviesContainer } from './HomepageStyle';

export default function Homepage() {
    return (
        <>
            <Container>
                <Header/>
                <MoviesContainer>
                    <MovieCard/>
                    <MovieCard/>
                    <MovieCard/>
                    <MovieCard/>
                    <MovieCard/>
                    <MovieCard/>
                    <MovieCard/>
                    <MovieCard/>
                    <MovieCard/>

                </MoviesContainer>

            </Container>
        </>
    )
}