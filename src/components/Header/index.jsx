import { Container,Logout,Profile } from "./styles";
import {RiShutDownLine} from 'react-icons/ri'



export function Header(){
    return(
        <Container>
            <Profile to="/profile">
                <img 
                src= "https://github.com/Pavanzinho.png"
                alt="Foto de perfil"
                />

                <div>
                    <span>Bem-vindo</span>
                    <strong>Thiago Pavan</strong>
                </div>

            </Profile>
            
            <Logout>
                <RiShutDownLine/>
            </Logout>
        </Container>
    )
}