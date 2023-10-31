import { FC, InputHTMLAttributes } from "react";

import { StyledWrapper, StyledInput } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input: FC<InputProps> = ({ ...inputProps }) => {
  return (
    <StyledWrapper>
      <StyledInput {...inputProps} />
    </StyledWrapper>
  );
};
