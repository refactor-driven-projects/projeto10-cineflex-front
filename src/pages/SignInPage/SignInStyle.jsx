import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: black;
    height: 100vh;
    width: 100vw;

`

export const Input = styled.input`
    width: 300px;
    height: 40px;
    border-radius: 5px;
    border: none;
    margin-bottom: 10px;
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    padding-left: 10px;
`

export const Button = styled.button`
    width: 300px;
    height: 40px;
    border-radius: 5px;
    border: none;
    margin-bottom: 10px;
    font-size: 1rem;
    background-color: #C93904;
    color: white;
    font-family: 'Poppins', sans-serif;
    font-weight: SemiBold;
    cursor: pointer;   
    margin-bottom: 20px; 
`

export const Title = styled.h1`
    color: #C93904;
    font-size: 60px;
    font-weight: Bold;
    font-family: 'Poppins', sans-serif;
    margin-bottom: 50px;
    text-shadow: 2px 2px 2px white;
`

export const Password = styled.a`
    color: white;
    font-size: 1rem;
    font-weight: SemiBold;
    font-family: 'Poppins', sans-serif;
    margin-bottom: 40px;
    cursor: pointer;
`
export const SignUpButton = styled.button`
    width: 300px;
    height: 40px;
    border-radius: 5px;
    border: none;
    margin-bottom: 10px;
    font-size: 1rem;
    background-color: #C93904;
    color: white;
    font-family: 'Poppins', sans-serif;
`

export const SignUpContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: black;
    border-top: 1px solid white;
    padding-top: 40px;
`
export const StyleGoogleLogin = styled.div`
    width: 300px;
    height: 40px;
    border-radius: 5px;
    border: none;
    margin-bottom: 10px;
    cursor: pointer;
`