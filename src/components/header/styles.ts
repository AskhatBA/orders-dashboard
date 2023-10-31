import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  box-shadow: 0px -1px 0px 0px ${({ theme }) => theme.palette.border.level1} inset;
  height: 100%;
  padding: 0 16px;
`;

export const StyledHeaderTitle = styled.h1`
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 120% */
  letter-spacing: -0.28px;
`;
