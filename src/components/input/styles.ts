import styled from "styled-components";

export const StyledWrapper = styled.label`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.palette.border.level1};
`;

export const StyledInput = styled.input`
  border: none;
  outline: none;
  font-size: 14px;
  line-height: 24px;
  &::placeholder {
    color: ${({ theme }) => theme.palette.gray["500"]};
    letter-spacing: -0.084px;
  }
`;

export const StyledIcon = styled.i`
  display: block;
  width: 24px;
  height: 24px;
`;
