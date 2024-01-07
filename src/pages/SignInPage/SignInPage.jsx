import React from 'react';
import { Container, Title, Button, Input } from './SignInStyle';

export default function SignInPage() {
    return(
        <>         
            <Container>
                <Title>Sign In</Title>
                <Input placeholder="Email" />
                <Input placeholder="Password" />
                <Button>Sign In</Button>
            </Container> 
        </> 
    );
}
