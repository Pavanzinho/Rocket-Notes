import styled from "styled-components";

export const Container=styled.textarea`
   
   
    width: 100%;
    height: 150px;
    

    border: none;
    resize: none;
   
    border-radius: 10px;
    margin-bottom: 8px;
    padding: 16px;


    background-color:${({theme})=>theme.COLORS.BACKGROUND_900} ;
    color: ${({theme})=>theme.COLORS.WHITE};
    
    


    &&::placeholder{ // acessar propriedade passada na pagina, caso esteja dentro do mesmo container.
        color: ${({theme})=>theme.COLORS.GRAY_300}
    }
    
`