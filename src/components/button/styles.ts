import styled from "styled-components";
import { palette } from "@/style/palette";

const bgState = {
  primary: palette.primary,
  outlined: "transparent",
};

export const StyledButton = styled.button<{
  variant: "primary" | "outlined";
  color: "primary" | "danger";
  fullWidth?: boolean;
}>`
  display: block;
  cursor: pointer;
  background: ${({ variant }) => bgState[variant]};
  color: ${({ theme, color, variant }) => {
    if (variant === "primary") return theme.palette.text.inverted;
    if (variant === "outlined") return theme.palette[color];
  }};
  border: 1px solid
    ${({ theme, color, variant }) => {
      if (variant === "primary") return theme.palette.primary;
      if (variant === "outlined") return theme.palette[color];
    }};
  font-family: ${({ theme }) => theme.fontFamily.Inter};
  font-feature-settings: "clig" off, "liga" off;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  border-radius: 6px;
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};
  min-width: 140px;
  min-height: 36px;
  text-align: center;
`;

export const StyledWithIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
`;
