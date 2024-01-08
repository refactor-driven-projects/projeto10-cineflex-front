import styled from 'styled-components';

export const MovieCardWrapper = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid #ccc;
    margin-bottom: 10px;

    @media (max-width: 800px) {
        flex-direction: column;
    }
`;

export const MovieImage = styled.img`
    width: 300px;
    height: 400px;
`;

export const MovieInfo = styled.div`
    padding: 10px;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const MoviesContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 800px;
`;

export const SearchContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 200px;
    width: 100%;
`;

export const SessionButton = styled.button`
    margin: 5px;
    padding: 5px 10px;
    border: none;
    background-color: #007bff;
    color: white;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: #0056b3;
    }
`;

export const Title = styled.h1`
    margin: 20px 0;
`;

export const Input = styled.input`
    margin: 5px;
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    width: 100%;
`;

export const Button = styled.button`
    margin: 5px;
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    background-color: #007bff;
    color: white;
    cursor: pointer;

    &:hover {
        background-color: #0056b3;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

export const InputContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
`;

export const ToggleShowButton = styled.button`
    border: none;
    background-color: transparent;
    cursor: pointer;
`;

export const LoadingIndicator = styled.div`
    margin: 20px;
`;