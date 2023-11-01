import { FC } from "react";

import { StyledLoader, StyledLoaderWrapper } from "./styles";

export const PageLoader: FC = () => {
  return (
    <StyledLoaderWrapper>
      <StyledLoader />
    </StyledLoaderWrapper>
  );
};
