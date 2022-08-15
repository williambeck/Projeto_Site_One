import styled from "styled-components";

export const Container = styled.div`

background-image: url(../imagens/bg-3.jpg);
height: 500px;
background-position: right center;
background-size: cover;
border: 1px solid black;
 
`;

export const Menulink = styled.div`

text-align: right;

>li {
   display: inline-flex;
   list-style: none;   
   padding: 10px; 
   margin-left : 10px ;
   
   
}

>li a {
   background: black ;
   display: block;
   padding: 10px;
   color: white;
   text-transform: uppercase;
   font-size: 10px;
   letter-spacing: 2px;
   background: rgba(255, 0, 0, 0.4);
   padding-left: 10px;

   &:hover {
      background: rgba(255, 0, 0, 0.6)
   }
   
   
}
   
`;

export const Content = styled.div`

color: white;
margin-top: 150px;

> h1 {
   color: white;
   text-transform: uppercase;
   font-size: 46px;
   text-shadow: 3px 3px 5px black;
   text-align: center;
}

> p {
   color: white;
   text-align: center;
   font-size: 18px;
}   
`;

