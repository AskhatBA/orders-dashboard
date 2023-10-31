import { FC } from "react";

import { StyledWrapper, StyledHeaderTitle } from "./styles";

export const Header: FC = () => {
  return (
    <StyledWrapper>
      <StyledHeaderTitle>Cегодняшние заказы</StyledHeaderTitle>
    </StyledWrapper>
  );
};
