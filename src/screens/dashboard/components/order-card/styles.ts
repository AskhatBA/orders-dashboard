import styled from "styled-components";

export const StyledWrapper = styled.div`
  background: ${({ theme }) => theme.palette.background.main};
  border-radius: 6px;
  margin-bottom: 8px;
`;

export const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  box-shadow: 0px -1px 0px 0px ${({ theme }) => theme.palette.border.level1} inset;
`;

export const StyledOrderId = styled.div`
  font-feature-settings: "clig" off, "liga" off;
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
`;

export const StyledHeaderControls = styled.div``;

export const StyledPrice = styled.span`
  color: ${({ theme }) => theme.palette.text.secondary};
  font-size: 12px;
  font-weight: 500;
  line-height: 21px;
`;

export const StyledBody = styled.div`
  padding: 8px;
`;

export const StyledOrder = styled.div`
  display: flex;
  gap: 4px;
  margin-bottom: 12px;
`;

export const StyledOrderAmount = styled.div`
  width: 21px;
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
`;

export const StyledOrderPosition = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
`;

export const StyledOrderOption = styled.span`
  color: ${({ theme }) => theme.palette.text.gray};
  font-size: 12px;
  font-weight: 400;
  line-height: normal;
  margin-top: 2px;
`;

export const StyledFooter = styled.div`
  box-shadow: 0px 1px 0px 0px ${({ theme }) => theme.palette.border.level1} inset;
  display: flex;
  align-items: center;
  padding: 12px;
  gap: 6px;
`;
