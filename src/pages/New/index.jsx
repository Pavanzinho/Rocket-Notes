import { Form } from "./styles";
import {Container} from "./styles";


import {Header} from "../../components/Header"
import {ButtonText} from "../../components/ButtonText"
import {Input} from "../../components/Input"
import {TextArea} from "../../components/TextArea"
import {NoteItem} from "../../components/NoteItem"
import { Section} from "../../components/Section"
import { Button} from "../../components/Button"



export function New(){
    return(
        <Container>
            <Header/>
           
            <main>    
                    <Form>
                        <header> 
                            <h1>
                                Introdução ao React
                            </h1>
                            
                            <ButtonText 
                            title="voltar"
                            isActive
                            to="/"
                            />
                        </header>

                    
                        <Input placeholder="Título"/>
                        <TextArea placeholder="Observações "/>

                        <Section title="Links Úteis">
                            
                            <NoteItem value="https://rocket.com.br"/>
                            <NoteItem IsNew placeholder="Novo Link"/>
                        </Section>

                        <Section title="Marcadores">
                            <div className="tags"> 
                                <NoteItem  IsNew placeholder="Nova Tag" />
                                <NoteItem value ="react"/>
                                <NoteItem  IsNew placeholder="Nova Tag" />
                            </div>  
                        </Section>
                        <Button title="Salvar"/>



                        


                    </Form>
                        
                        
                    
                    


                   
                    
                
                
            </main>

            
            

        </Container>
    )
    

}