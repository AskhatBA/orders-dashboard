import styled from "styled-components";

export const StyledBoardWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

export const StyledColumnWrapper = styled.div`
  width: 326px;
`;

export const StyledDroppableColumn = styled.div`
  background: ${({ theme }) => theme.palette.gray["400"]};
  padding: 8px;
  border-radius: 0 0 6px 6px;
`;

export const StyledColumnHeader = styled.div<{ background: string }>`
  background: ${({ background }) => background};
  text-transform: uppercase;
  font-weight: bold;
  color: ${({ theme }) => theme.palette.text.inverted};
  padding: 12px;
  border-radius: 6px 6px 0 0;
  text-align: justify;
  font-size: 14px;
  font-style: normal;
  line-height: 24px;
  letter-spacing: 0.7px;
`;
