import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
        
    a {
        text-decoration: none;
        color: inherit;
    }

    p {
        color: inherit;
        }

    body {
        background-color: ${({ theme }) => theme.colors.background};
        color: ${({ theme }) => theme.colors.text};
        transition: all 0.3s ease-in-out;
    }
`