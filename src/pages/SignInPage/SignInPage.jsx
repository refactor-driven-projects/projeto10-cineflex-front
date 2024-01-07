import React from 'react';
import { useState } from 'react';
import { Container, Title, Button, Input, Password, SignUpButton, SignUpContainer, StyleGoogleLogin } from './SignInStyle';
import { GoogleLogin } from '@react-oauth/google';
import { requisitions } from '../../routes/routes';
import axios from 'axios';

export default function SignInPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [disable, setDisable] = useState(false);

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
                <Input placeholder="Password" />
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


