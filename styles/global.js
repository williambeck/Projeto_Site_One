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
    background: #4CABCD;
  }

  html, body {
    font-family: sofiapro ,Arial, Helvetica, sans-serif;
   
  }

  * {
    text-decoration: none;
    
  }
`;

export default GlobalStyle;