import { FC, ReactNode } from "react";

import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";

import { StyledWrapper, StyledHeader, StyledMain, StyledSidebar } from "./styles";

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <StyledWrapper>
      <StyledHeader>
        <Header />
      </StyledHeader>
      <StyledSidebar>
        <Sidebar />
      </StyledSidebar>
      <StyledMain>{children}</StyledMain>
    </StyledWrapper>
  );
};
