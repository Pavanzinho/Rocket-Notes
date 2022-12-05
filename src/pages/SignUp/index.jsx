import {Container,Form} from "./styles";

import {Background} from "./styles";
import {ButtonText} from "../../components/ButtonText"
import {Button} from "../../components/Button"
import {Input} from "../../components/Input"

import { FiLogIn,FiMail, FiLock} from "react-icons/fi"

import {Link} from "react-router-dom";

export function SignUp(){
    return(
        <Container>
           
            <Background/>
            <Form>
                <h1>Rocket Notes</h1>
                <span>Aplicação para salvar e gerenciar seus links úteis</span>
                <h2>Crie sua conta</h2>
                
                <div>
                <Input 
                    placeholder="Nome"
                    type="text"
                    icon={FiLogIn}
                    />
                    
                    <Input 
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                    />
                
                
                    <Input 
                    placeholder="Senha"
                    type="password"
                    icon={FiLock}

                    />
                
                
                    <Button title="Entrar"/>
                </div>
                
               
                    <ButtonText title="Voltar para o login" isActive to ="/"/>
                
                
            </Form>
            




        </Container>



    )


}


