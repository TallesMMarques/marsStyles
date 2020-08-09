import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body, #root {
    height: 100vh;
    width: 100vw;
  }
  *, button, input {
    border: 0;
    outline: 0;
    
    font-family: 'Open Sans', sans-serif;
  }
  :root  {
    --pink: #FFC4B3;
    --pink-dark: #BA5053; 
    --orange: #AC482A;
    --purple: #41203C;

    background: rgb(39,34,70);
    background: linear-gradient(30deg, rgba(39,34,70,1) 0%, rgba(255,138,102,1) 100%);  
  }
`;