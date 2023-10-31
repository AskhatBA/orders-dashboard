import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: 56px 1fr;
  grid-template-rows: 56px 1fr;
  grid-template-areas:
    "sidebar header"
    "sidebar main";
  height: 100vh;
`;

export const StyledHeader = styled.header`
  grid-area: header;
`;

export const StyledMain = styled.main`
  grid-area: main;
  overflow: auto;
`;

export const StyledSidebar = styled.aside`
  grid-area: sidebar;
  height: 100%;
`;
