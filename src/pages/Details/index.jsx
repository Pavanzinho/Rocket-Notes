import {Container,Links,Content} from './styles'
import {Header} from "../../components/Header"
import{Button} from '../../components/Button'
import { Section } from '../../components/Section'
import {ButtonText} from "../../components/ButtonText"

import {Tag} from "../../components/Tag"

import {Link} from "react-router-dom";



export  function Details(){
    return(
        <Container> 
            <Header/>
            
            <main>
                <Content>
                    <ButtonText title= "Excluir nota"/>
                    
                    <h1>
                        Introdução ao React
                    </h1>
                   
                    <p>
                       A RocketSeat, com toda sua qualidade de contéudos, além de ótimos professores com didática apurada,
                       te ensina React de forma completa e adaptada para o mercado de trabalho de desenvolvimento Web.
                       Faça parte da nova turma da trilha Explorer, e aprenda o necessário para conseguir sua primeira oportu
                       nidade como DEV no mercado de trabalho.
                    </p>

                    <Section title="Links úteis">
                        <Links>
                            <li>
                                <a 
                                target="_blank" 
                                href="https://app.rocketseat.com.br/explorer">https:/www.rocketseat.com.br
                                </a>
                            </li>
                            
                        </Links>
                    </Section>

                    <Section title="Marcadores">
                        <Tag title="React"/>
                        <Tag title="Explorer"/>
                                
                    </Section>
                        
                    
                    <Link to="/">
                        <Button title="Voltar"/>
                    </Link>
                
                </Content>
            </main>
        </Container>  
    )
  }

  /*<Button title="Entrar"/> : 
        criação de propriedade que fica dentro do objeto "props", do react mesmo.
        Assim, lá na construção do componente, neste caso o button, pode-se acessar essa propriedade utilizando
        "props.propriedade"
  */