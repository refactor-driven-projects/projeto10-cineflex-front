
import styled from "styled-components";
import { useContext } from "react";
import AuthContext from "../context/authentication";
import { useNavigate } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import { exitOutline } from "ionicons/icons";

export default function Header() {
    const { user, setUser } = useContext(AuthContext);
    const navigate = useNavigate();

    function logOut() {
        setUser(0);
        localStorage.removeItem("user");
        navigate(pages.signin);
    }

    return (
        <>
            <Container>                
                <UserInfo>Olá, Fulano!</UserInfo>
                <Title>Cineflex</Title>
                <StyledIcon icon={exitOutline}/>
            </Container>
        </>
    )
}

const Container = styled.div`
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 80px;
    background-color: black;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    border-bottom: 0.5px solid white;
    padding-right: 30px;
    padding-left: 30px;
`;

const Title = styled.h1`
    color: #C93904;
    font-size: 2.5rem;
    font-weight: Bold;
    font-family: 'Poppins', sans-serif;
    text-shadow: 2px 2px 2px white;
    text-align: center;
`;

const UserInfo = styled.h1`
    color: white;
    font-size: 1.2rem;
    font-weight: Bold;
    font-family: 'Poppins', sans-serif;
    text-align: center;
`;

const StyledIcon = styled(IonIcon)`
    color: white;
    font-size: 30px;
    
`;