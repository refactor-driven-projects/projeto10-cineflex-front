import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Title, Button, Input, LinkSignUp } from './SignInStyle';

export default function SignInPage() {
    return(
        <>         
            <Container>
                <Title>Sign In</Title>
                <Input placeholder="Email" />
                <Input placeholder="Password" />
                <Button>Sign In</Button>
                <LinkSignUp to="/">Não possui uma conta? Cadastre-se clicando aqui!</LinkSignUp>
            </Container> 
        </> 
    );
}
