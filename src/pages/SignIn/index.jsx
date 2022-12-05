import {Container,Form} from "./styles";

import {Background} from "./styles";
import {ButtonText} from "../../components/ButtonText"
import {Button} from "../../components/Button"
import {Input} from "../../components/Input"

import { FiMail, FiLock} from "react-icons/fi"

import {Link} from "react-router-dom"

export function SignIn(){
    return(
        <Container>
            <Form>
                <h1>Rocket Notes</h1>
                <span>Aplicação para salvar e gerenciar seus links úteis</span>
                <h2>Faça seu Login</h2>
                
                <div>
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
                
                
                
                    <ButtonText title="Criar Usuário" isActive to ="/register"/>
               
                
            </Form>

            <Background/>
            




        </Container>



    )


}