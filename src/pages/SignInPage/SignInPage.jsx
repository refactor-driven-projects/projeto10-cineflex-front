import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Title, Button, Input, Password, SignUpButton, SignUpContainer, StyleGoogleLogin } from './SignInStyle';
import { GoogleLogin } from '@react-oauth/google';

export default function SignInPage() {
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


