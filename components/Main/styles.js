import styled from "styled-components";

export const Container = styled.main`

width: 90%;
margin: auto;
 
`;

export const Contentsection = styled.div`

background-color: white;
text-align: center;
padding: 20px;
margin-top: 15px;
`;

export const Card = styled.div`

width: 33%;
display: inline-block;
box-sizing: border-box;

> img {
    align-items: center;
    width: 90%;   
    
}

> p {
    font-size: 20px;
    background: black ;
    color: white;
    padding: 5px;
    text-transform: uppercase;
    border-bottom: 2px solid white;
    display: inline-block;
    width: 90%;   
    
}
 
`;