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
    height: 50px;
    border-radius: 5px;
    border: none;
    margin-bottom: 10px;
    font-family: 'Playfair Display', serif;
    font-size: 20px;
    padding-left: 10px;
`

export const Button = styled.button`
    width: 300px;
    height: 50px;
    border-radius: 5px;
    border: none;
    box-shadow: -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white, 1px 1px 0 white;
    margin-bottom: 10px;
    font-size: 20px;
    background-color: #DE0D32;
    color: white;
    font-family: 'Playfair Display', serif;
    font-weight: bold;
    cursor: pointer;    

`

export const Title = styled.h1`
    color: #DE0D32;
    font-size: 60px;
    font-weight: Bold;
    font-family: 'Playfair Display', serif;
    text-shadow: -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white, 1px 1px 0 white;
    margin-bottom: 50px;
`

export const LinkSignUp = styled.a`
    color: white;
    font-size: 12px;
    font-weight: Bold;
    font-family: 'Playfair Display', serif;

    margin-bottom: 50px;
    cursor: pointer;
`