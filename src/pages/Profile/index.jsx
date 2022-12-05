import {FiArrowLeft} from "react-icons/fi"
import { FiUser,FiLogIn,FiMail, FiLock,FiCamera} from "react-icons/fi"

import {Container} from "./styles";
 import {Form} from "./styles"
 import {Input} from "../../components/Input"
 import {Button} from "../../components/Button"
 import {Avatar} from "./styles"

 import {Link} from "react-router-dom";



 
export function Profile(){
    return(
        <Container>
            <header>
                <Link to ="/">
                    <FiArrowLeft/>
                </Link>
            </header>

            <Form>
                <Avatar>
                    <img 
                    src="https://github.com/Pavanzinho.png" 
                    alt="Foto do Usuário"/>
                    
                    <label htmlFor="avatar">
                        <FiCamera/>

                        <input      //  será utilizado para abrir a janela de carregar a imagem, ficará invisível,
                                    //  o mesmo id da label, já que a label que irá conter a imagem onde se clicara para carregar 
                                    //  o type="file"
                        type="file" 
                        id="avatar"
                        />


                    </label>
                </Avatar>
                
                    <Input
                    placeholder="Nome"
                    type="text"
                    icon={FiUser}
                    />

                    <Input
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                    />

                    <Input
                    placeholder="Senha Atual"
                    type="password"
                    icon={FiLock}
                    />

                    <Input
                    placeholder="Nova Senha"
                    type="password"
                    icon={FiLock}
                    />
                
                

                <Button title="Salvar"  />

            </Form>



        </Container>
    )
   
        
    
    
}