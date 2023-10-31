import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: -1px 0px 0px 0px ${({ theme }) => theme.palette.border.level1} inset;
  height: 100%;
`;

export const StyledTop = styled.div``;

export const StyledBottom = styled.div``;

export const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 56px;
  box-shadow: 0px -1px 0px 0px ${({ theme }) => theme.palette.border.level1} inset;
`;

export const StyledSidebarMenu = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

export const StyledSidebarMenuItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 6px;
  background: ${({ theme }) => theme.palette.primary};
`;

export const StyledSettings = styled.div`
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledAvatar = styled.div`
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 1px 0px 0px ${({ theme }) => theme.palette.border.level1} inset;
`;
