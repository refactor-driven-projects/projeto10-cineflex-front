import React from 'react';
import { useState, useEffect, useContext  } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { requisitions } from '../../routes/routes';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Title, Button, Input, SignUpButton, SignUpContainer, StyleGoogleLogin,ToggleShowButton, InputContainer, Password } from '../SignInPage/SignInStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { pages } from '../../routes/routes';
import { validateUser } from '../../context/validation';
import AuthContext from '../../context/authentication';

export default function SignInPage() {
    const { user, setUser } = useContext(AuthContext)
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [disable, setDisable] = useState(false);
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisibility = () => {setPasswordShown(!passwordShown);};

    useEffect(() => {
        validateUser(user, setUser);
        const isValidUser = (user !== 0 && user)
        if (isValidUser) {
          navigate(pages.home);
        }
    }, [user])

    function SignIn(e) {
        e.preventDefault();
        setDisable(true);
    
        const login = { email: email, password: password };
    
        axios.post(requisitions.signIn, login)
            .then((res) => {
                if (res && res.data) {
                    const newUser = {
                        userId: res.data.userId,
                        token: res.data.token
                    }
                    setUser(newUser);
                    console.log(newUser);
                    localStorage.setItem("user", JSON.stringify(newUser));
                    console.log(res.data);
                    navigate(pages.homepage);
                } else {
                    console.error('Resposta ou dados ausentes:', res);
                }
            })
            .catch((error) => {
                if (error.response) {
                    alert(error.response.data);
                } else {
                    console.error('Erro na requisição:', error);
                    
                }
            })
            .finally(() => {
                setDisable(false);
            });
    }
    
    function toSignUp() {
        navigate(pages.signup);
    }

    return(
        <>         
            <Container>
                <Title>Cineflex Plus</Title>
                <Input placeholder="Email" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <InputContainer>
                    <Input type={passwordShown ? "text" : "password"} 
                        placeholder="Senha" 
                        required                        
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <ToggleShowButton  type="button" onClick={togglePasswordVisibility}>
                        <FontAwesomeIcon icon={passwordShown ? faEye : faEyeSlash} style={{ color: 'grey' }} />
                    </ToggleShowButton>
                </InputContainer>                
                <Button onClick={SignIn}>Entrar</Button>
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
                <SignUpButton onClick={toSignUp}>Cadastre-se</SignUpButton>
                </SignUpContainer>
            </Container> 
        </> 
    );
}


