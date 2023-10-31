import { FC } from "react";

import { BarChartIcon } from "@/icons/bar-chart";
import { SettingsIcon } from "@/icons/settings";

import {
  StyledLogo,
  StyledSidebarMenu,
  StyledSidebarMenuItem,
  StyledWrapper,
  StyledTop,
  StyledBottom,
  StyledSettings,
  StyledAvatar,
} from "./styles";

export const Sidebar: FC = () => {
  return (
    <StyledWrapper>
      <StyledTop>
        <StyledLogo>
          <img src="/images/logo.svg" alt="logo" />
        </StyledLogo>
        <StyledSidebarMenu>
          <StyledSidebarMenuItem>
            <BarChartIcon />
          </StyledSidebarMenuItem>
        </StyledSidebarMenu>
      </StyledTop>
      <StyledBottom>
        <StyledSettings>
          <SettingsIcon />
        </StyledSettings>
        <StyledAvatar>
          <img src="/images/avatar.png" alt="logo" />
        </StyledAvatar>
      </StyledBottom>
    </StyledWrapper>
  );
};
