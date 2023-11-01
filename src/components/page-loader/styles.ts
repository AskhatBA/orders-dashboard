import styled from "styled-components";

export const StyledLoaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

export const StyledLoader = styled.div`
  width: 48px;
  height: 48px;
  border: 5px solid ${({ theme }) => theme.palette.background.main};
  border-bottom-color: ${({ theme }) => theme.palette.primary};
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
