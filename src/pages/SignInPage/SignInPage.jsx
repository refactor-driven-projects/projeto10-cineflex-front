import React from 'react';
import { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { requisitions } from '../../routes/routes';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Container, Title, Button, Input, SignUpButton, SignUpContainer, StyleGoogleLogin,ToggleShowButton, InputContainer, Password } from '../SignInPage/SignInStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

export default function SignInPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [disable, setDisable] = useState(false);
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisibility = () => {setPasswordShown(!passwordShown);};

    function SignIn(e) {
        e.preventDefault();
        setDisable(true);
    
        const login = { email: email, password: password };
    
        axios.post(requisitions.signIn, login)
          .then((res) => {
            const newUser = {
              name: res.data.username,
              token: res.data.token
            }
            setUser(newUser);
            localStorage.setItem("user", JSON.stringify(newUser))
            navigate(pages.home)
            setDisable(false)
          })
          .catch((erro) => {
            alert(erro.response.data);
            setDisable(false)
          });
      }

    return(
        <>         
            <Container>
                <Title>Cineflex Plus</Title>
                <Input placeholder="Email" />
                <InputContainer>
                    <Input type={passwordShown ? "text" : "password"} placeholder="Senha" />
                    <ToggleShowButton  type="button" onClick={togglePasswordVisibility}>
                        <FontAwesomeIcon icon={passwordShown ? faEye : faEyeSlash} style={{ color: 'grey' }} />
                    </ToggleShowButton>
                </InputContainer>                
                <Button>Entrar</Button>
                <Password to="/">Esqueceu a senha?</Password>
                <SignUpContainer>
                <StyleGoogleLogin>
                    <GoogleLogin
                    onSuccess={(credentialResponse) => {
                        console.log(credentialResponse);
                    }}
                    onError={() => {
                        console.log('Login Failed');
                    }}
                    />
                </StyleGoogleLogin>
                <SignUpButton>Cadastre-se</SignUpButton>
                </SignUpContainer>
            </Container> 
        </> 
    );
}


