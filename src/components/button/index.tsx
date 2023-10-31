import { FC, ButtonHTMLAttributes, ReactNode } from "react";

import { StyledButton, StyledWithIcon } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outlined";
  color?: "primary" | "danger";
  children: ReactNode;
  startIcon?: ReactNode;
  fullWidth?: boolean;
}

export const Button: FC<ButtonProps> = ({
  variant = "primary",
  color = "primary",
  fullWidth,
  children,
  startIcon,
  ...rest
}) => {
  const renderContent = () => {
    if (startIcon)
      return (
        <StyledWithIcon>
          {startIcon}
          {children}
        </StyledWithIcon>
      );

    return children;
  };

  return (
    <StyledButton variant={variant} color={color} fullWidth={fullWidth} {...rest}>
      {renderContent()}
    </StyledButton>
  );
};
