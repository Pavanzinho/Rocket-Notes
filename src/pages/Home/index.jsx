import {Container,Brand, Menu,Search,Content,NewNote} from "./styles";
import {Header} from "../../components/Header"
import {Section} from "../../components/Section"
import{ButtonText} from "../../components/ButtonText"
import{Note} from "../../components/Note"

import {MdOutlineAdd} from "react-icons/md"
import {FiSearch} from "react-icons/fi"
import {Input} from "../../components/Input"

import {Link} from "react-router-dom";



export function Home(){
    return(
    <Container>
        
        <Brand> 
            <span>Rocket Notes</span>
        </Brand>
            
        <Header/>
        
        <Menu>
            <li><ButtonText title="Todos" isActive /></li>
            <li><ButtonText title="Frontend"/></li>
            <li><ButtonText title="Node"/></li>
            <li><ButtonText title="React"/></li>
        </Menu>

        <Search>
            <Input placeholder="Pesquisar pelo título" icon={FiSearch}/>
        </Search>

        <Content>
            <Section title="Minhas notas">
                
                <Link to="details/1">
                <Note data={{
                    title:'Introdução ao React',
                    tags:[
                        {id:"1",name: 'React'},
                        {id:"2",name:'Express'}
                            
                    ]
            
                }}
                /> 
                </Link>
                <Note data={{
                    title:'Exemplo de Middleware',
                    tags:[
                        {id:"1",name: 'express'},
                        {id:"2",name:'nodejs'}
                            
                    ]
            
                }}
                /> 
            </Section>
        </Content>
        
        
       
            <NewNote title="Criar nota" to="/new">  
                <MdOutlineAdd/>
                <span>Criar nota</span>
            </NewNote>
        
        



    </Container>
    )
   


}