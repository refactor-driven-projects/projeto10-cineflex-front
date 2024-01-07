import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import { Container, Title, Button, Input, SignUpButton, SignUpContainer, StyleGoogleLogin,ToggleShowButton, InputContainer, Password } from '../SignInPage/SignInStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

export default function SignInPage() {
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisibility = () => {setPasswordShown(!passwordShown);};
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


