import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    /* background-color: ${({ theme }) => theme.colors.primary}; */
    background: linear-gradient(180deg, #00efff 0%, ${({ theme }) => theme.colors.primary} 40%, #0fa0ff 100%);
  }
 #root {
        width: 100%;
      height: 100%;
    
  }
div, span {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
`;
