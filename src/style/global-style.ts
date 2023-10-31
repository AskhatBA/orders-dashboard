import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${({ theme }) => theme.fontFamily.Inter};
    color: ${({ theme }) => theme.palette.text.main};
  }
`;
