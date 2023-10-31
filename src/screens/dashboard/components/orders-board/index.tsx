import { FC } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import { Order, OrderStatus } from "@/types/order.types";
import { OrderStatusesEnum } from "@/enums/order.enums";
import { theme } from "@/style/theme";

import {
  StyledDroppableColumn,
  StyledColumnHeader,
  StyledBoardWrapper,
  StyledColumnWrapper,
} from "./styles";

interface OrdersBoardProps {
  orders: [string, Order[]][];
}

const COLUMNS_HEADER = Object.freeze({
  [OrderStatusesEnum.NEW]: {
    color: theme.palette.primary,
    title: "Новый",
  },
  [OrderStatusesEnum.IN_PROGRESS]: {
    color: theme.palette.yellow["600"],
    title: "Заготовка",
  },
  [OrderStatusesEnum.READY_TO_DELIVER]: {
    color: theme.palette.green["600"],
    title: "Готов",
  },
  [OrderStatusesEnum.DELIVERED]: {
    color: theme.palette.teal["600"],
    title: "Курьер в пути",
  },
});

export const OrdersBoard: FC<OrdersBoardProps> = ({ orders }) => {
  const onDragEnd = () => {};

  return (
    <div style={{ padding: "16px" }}>
      <DragDropContext onDragEnd={onDragEnd}>
        <StyledBoardWrapper>
          {orders.map((order, index) => (
            <StyledColumnWrapper key={order[0]}>
              <StyledColumnHeader background={COLUMNS_HEADER[order[0] as OrderStatus].color}>
                {COLUMNS_HEADER[order[0] as OrderStatus].title}
              </StyledColumnHeader>

              <Droppable droppableId={order[0]}>
                {(provided, snapshot) => (
                  <StyledDroppableColumn ref={provided.innerRef} {...provided.droppableProps}>
                    {order[1].map((orderItem, indx) => (
                      <Draggable draggableId={orderItem.id} index={indx}>
                        {(p, s) => (
                          <div
                            ref={p.innerRef}
                            {...p.draggableProps}
                            {...p.dragHandleProps}
                            style={{
                              background: "blue",
                              height: "100px",
                              ...p.draggableProps.style,
                            }}
                          >
                            hello
                          </div>
                        )}
                      </Draggable>
                    ))}
                  </StyledDroppableColumn>
                )}
              </Droppable>
            </StyledColumnWrapper>
          ))}
        </StyledBoardWrapper>
      </DragDropContext>
    </div>
  );
};
