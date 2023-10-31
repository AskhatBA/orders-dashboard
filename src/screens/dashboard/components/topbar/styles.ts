import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
`;

export const StyledRightBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const StyledAmount = styled.div`
  display: flex;
  align-items: center;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.palette.border.level1};
  padding: 8px 12px;
  max-height: 36px;

  span {
    margin-left: 12px;
    margin-right: 6px;
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: -0.084px;
  }
`;

export const StyledTime = styled.div`
  max-height: 36px;
  display: inline-flex;
  padding: 8px 12px;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.084px;
  gap: 8px;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.palette.border.level1};
`;
