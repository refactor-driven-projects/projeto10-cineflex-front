import React, { useState, useEffect } from 'react';
import axios from 'axios';
import dayjs from 'dayjs'; 
import { Container, MoviesContainer, SearchContainer, MovieCardWrapper, MovieInfo, MovieImage, SessionButton, LoadingIndicator } from './HomepageStyle';
import Header from '../../components/Header';
import { Tilt } from 'react-tilt'
import { requisitions } from '../../routes/routes';

const GET_MOVIES_URL = requisitions.getMovies;

export default function Homepage() {
    const [groupedMovies, setGroupedMovies] = useState({});
    const [searchDate, setSearchDate] = useState(dayjs().format('YYYY-MM-DD'));
    const [isLoading, setIsLoading] = useState(false);

    const groupMoviesByTitle = (movies) => {
        return movies.reduce((acc, day) => {
            day.showtimes.forEach((show) => {
                if (!acc[show.movie.title]) {
                    acc[show.movie.title] = {
                        ...show.movie,
                        sessions: []
                    };
                }
                acc[show.movie.title].sessions.push({
                    time: show.time,
                    audioType: show.audioType,
                    screenType: show.screenType,
                    experienceType: show.experienceType
                });
            });
            return acc;
        }, {});
    };

    const loadMovies = async (date) => {
        try {
            setIsLoading(true);
            const response = await axios.get(`${GET_MOVIES_URL}?date=${date}`);            
            const grouped = groupMoviesByTitle(response.data);
            setGroupedMovies(grouped);
        } catch (error) {
            console.error('Erro ao buscar filmes:', error);
            setGroupedMovies({});
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        loadMovies(searchDate);
    }, [searchDate]);

    return (
        <Container>
            <Header />
            <SearchContainer>
                <input
                    type="date"
                    value={searchDate}
                    onChange={(e) => setSearchDate(e.target.value)}
                />
            </SearchContainer>
            {isLoading ? (
                <LoadingIndicator>Carregando...</LoadingIndicator>
            ) : (
                <MoviesContainer>
                    {Object.keys(groupedMovies).length > 0 ? (
                        Object.values(groupedMovies).map((movie, index) => (   
                        <MovieCardWrapper key={index}>
                            <Tilt options={defaultOptions} style={{width: "300px", height: "400px"}}><MovieImage src={movie.image} alt={movie.title} /></Tilt>
                            <MovieInfo>
                                <h2>{movie.title}</h2>
                                <p>{movie.overview}</p>
                                <div>
                                    {movie.sessions.map((session, sIndex) => (
                                        <SessionButton key={sIndex}>
                                            {session.time} - {session.audioType} - {session.screenType} - {session.experienceType}
                                        </SessionButton>
                                    ))}
                                </div>
                            </MovieInfo>
                        </MovieCardWrapper>
                        ))
                    ) : (
                        <p>Não há filmes disponíveis para a data selecionada.</p>
                    )}
                </MoviesContainer>
            )}
        </Container>
    );
}

const defaultOptions = {
	reverse:        false,  // reverse the tilt direction
	max:            35,     // max tilt rotation (degrees)
	perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
	scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
	speed:          1000,   // Speed of the enter/exit transition
	transition:     true,   // Set a transition on enter/exit.
	axis:           null,   // What axis should be disabled. Can be X or Y.
	reset:          true,    // If the tilt effect has to be reset on exit.
	easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}