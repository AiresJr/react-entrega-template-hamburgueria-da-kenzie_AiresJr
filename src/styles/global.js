import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
   *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
   }

   ul, ol {
    list-style: none;
   }
   li{
      margin: 0;
    padding: 0;
   }

   button{
    cursor: pointer;
    background: transparent;
    border: 0;
   }
`;
