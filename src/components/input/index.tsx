import { FC, InputHTMLAttributes, ReactNode } from "react";

import { StyledWrapper, StyledInput, StyledIcon } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  startIcon?: ReactNode;
}

export const Input: FC<InputProps> = ({ startIcon, ...inputProps }) => {
  return (
    <StyledWrapper>
      {startIcon && <StyledIcon>{startIcon}</StyledIcon>}
      <StyledInput {...inputProps} />
    </StyledWrapper>
  );
};
