import { FC } from "react";

import { Input } from "@/components/input";
import { ClipboardIcon } from "@/icons/clipboard";
import { ArrowDownIcon } from "@/icons/arrow-down";
import { ClockIcon } from "@/icons/clock";

import { SearchIcon } from "@/icons/search";
import { StyledWrapper, StyledRightBlock, StyledTime, StyledAmount } from "./styles";

export const Topbar: FC = () => {
  return (
    <StyledWrapper>
      <Input placeholder="Поиск по ID" startIcon={<SearchIcon />} />
      <StyledRightBlock>
        <StyledAmount>
          <ClipboardIcon />
          <span>Всего: 115</span>
          <ArrowDownIcon />
        </StyledAmount>
        <StyledTime>
          <ClockIcon />
          45:08
        </StyledTime>
      </StyledRightBlock>
    </StyledWrapper>
  );
};
