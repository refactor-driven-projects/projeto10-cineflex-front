import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import { Container, Title, Button, Input, SignUpButton, SignUpContainer, StyleGoogleLogin, ToggleShowButton, InputContainer, Error, Form } from '../SignInPage/SignInStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { requisitions } from '../../routes/routes';
import axios from 'axios';

export default function SignUpPage() {
    const [passwordShown, setPasswordShown] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const togglePasswordVisibility = () => { setPasswordShown(!passwordShown); };
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsLoading(true);
        setError(null);

        try {
            const name = e.target.elements.nome.value;
            const email = e.target.elements.email.value;
            const password = e.target.elements.senha.value;
            const url = requisitions.signUp;
            const response = await axios.post(url, { name, email, password, checkpassword: password });
            alert('Cadastro realizado com sucesso!');
            navigate('/signin');
        } catch (error) {
            console.error('Erro ao cadastrar:', error);

            if (error.response && error.response.data) {
                setError(error.response.data.message);
            } else {
                setError('Erro desconhecido ao cadastrar.');
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <Container>
                <Title>Cineflex Plus</Title>
                <Form onSubmit={handleSubmit}>
                    <Input name="nome" placeholder="Nome Completo" />
                    <Input name="email" placeholder="Email" />
                    <InputContainer>
                        <Input
                            name="senha"
                            type={passwordShown ? "text" : "password"}
                            placeholder="Senha"
                        />
                        <ToggleShowButton  type="button" onClick={togglePasswordVisibility}>
                            <FontAwesomeIcon icon={passwordShown ? faEye : faEyeSlash} style={{ color: 'grey' }} />
                        </ToggleShowButton>
                    </InputContainer>
                    <Button type="submit" disabled={isLoading}>
                        {isLoading ? 'Cadastrando...' : 'Cadastrar'}
                    </Button>
                </Form>
                <SignUpContainer>
                    <StyleGoogleLogin>
                        <GoogleLogin
                            onSuccess={(credentialResponse) => {
                                console.log(credentialResponse);
                            }}
                            onError={() => {
                                console.log('Cadastro falhou');
                            }}
                        />
                    </StyleGoogleLogin>
                    <Link to="/signin">
                        <SignUpButton>Já tem uma conta? Entre aqui</SignUpButton>
                    </Link>
                </SignUpContainer>
            </Container>
            {error && <Error>{error}</Error>}
        </>
    );
}
