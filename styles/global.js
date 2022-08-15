import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'sofiapro' ;
    src: url('/sofiapro.ttf') format('truetype');
  }


 

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    //background: #4CABCD;
    background: #ccc;
  }

  html, body {
    font-family: sofiapro ,Arial, Helvetica, sans-serif;
    text-align: center;
   
  }

  * {
    text-decoration: none;
    box-sizing: border-box;
    
  }
`;

export default GlobalStyle;