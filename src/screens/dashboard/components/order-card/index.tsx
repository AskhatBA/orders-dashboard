import { FC } from "react";

import { Order } from "@/types/order.types";
import { Button } from "@/components/button";
import { CheckIcon } from "@/icons/check";
import { CrossIcon } from "@/icons/cross";
import { palette } from "@/style/palette";

import { OrderActionsEnum } from "@/enums/order.enums";
import {
  StyledWrapper,
  StyledHeader,
  StyledOrderId,
  StyledHeaderControls,
  StyledPrice,
  StyledBody,
  StyledOrder,
  StyledOrderAmount,
  StyledOrderPosition,
  StyledOrderOption,
  StyledFooter,
} from "./styles";

interface OrderCardProps extends Order {}

export const OrderCard: FC<OrderCardProps> = ({ id, price, items, action }) => {
  return (
    <StyledWrapper>
      <StyledHeader>
        <StyledOrderId>ID: {id}</StyledOrderId>
        <StyledHeaderControls>
          <StyledPrice>{price}</StyledPrice>
        </StyledHeaderControls>
      </StyledHeader>

      <StyledBody>
        {items.map((orderItem) => (
          <StyledOrder key={orderItem.name}>
            <StyledOrderAmount>{orderItem.amount} x</StyledOrderAmount>
            <StyledOrderPosition>
              {orderItem.name}
              {orderItem.options?.length &&
                orderItem.options.map((orderOption) => (
                  <StyledOrderOption>{orderOption}</StyledOrderOption>
                ))}
            </StyledOrderPosition>
          </StyledOrder>
        ))}
      </StyledBody>
      {action && (
        <StyledFooter>
          {action === OrderActionsEnum.CANCEL_CONFIRM && (
            <>
              <Button startIcon={<CrossIcon />} variant="outlined" color="danger">
                Отменить
              </Button>
              <Button startIcon={<CheckIcon />}>Принять</Button>
            </>
          )}
          {action === OrderActionsEnum.DONE && (
            <Button fullWidth startIcon={<CheckIcon color={palette.primary} />} variant="outlined">
              Готово
            </Button>
          )}
          {action === OrderActionsEnum.FINISH && (
            <Button fullWidth variant="outlined">
              Завершить
            </Button>
          )}
        </StyledFooter>
      )}
    </StyledWrapper>
  );
};
