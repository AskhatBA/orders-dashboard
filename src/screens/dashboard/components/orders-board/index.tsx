import { FC, ReactElement, useState } from "react";
import { DragDropContext, Droppable, Draggable, OnDragEndResponder } from "react-beautiful-dnd";

import { Order, OrderStatus } from "@/types/order.types";

import { OrderCard } from "../order-card";
import { COLUMNS_HEADER } from "./variables";
import {
  StyledDroppableColumn,
  StyledColumnHeader,
  StyledBoardWrapper,
  StyledColumnWrapper,
} from "./styles";

interface OrdersBoardProps {
  orders: [string, Order[]][];
}

const DraggableCard: FC<{ order: Order; index: number }> = ({ order, index }): ReactElement => (
  <Draggable draggableId={order.id} index={index}>
    {(provided) => {
      const { draggableProps, dragHandleProps, innerRef } = provided;
      return (
        <div
          ref={innerRef}
          {...draggableProps}
          {...dragHandleProps}
          style={{
            ...draggableProps.style,
          }}
        >
          <OrderCard {...order} />
        </div>
      );
    }}
  </Draggable>
);

const DroppableArea: FC<{ orderColumn: [string, Order[]]; index: number }> = ({
  orderColumn,
  index,
}): ReactElement => {
  const [columnKey, orders] = orderColumn;
  const columnHeader = COLUMNS_HEADER[columnKey as OrderStatus];

  return (
    <StyledColumnWrapper>
      <StyledColumnHeader background={columnHeader.color}>
        {columnHeader.title} ({orders.length})
      </StyledColumnHeader>
      <Droppable droppableId={`${index}`}>
        {(provided) => {
          const { innerRef, droppableProps } = provided;
          return (
            <StyledDroppableColumn ref={innerRef} {...droppableProps}>
              {orders.map((order, indx) => (
                <DraggableCard key={order.id} order={order} index={indx} />
              ))}
            </StyledDroppableColumn>
          );
        }}
      </Droppable>
    </StyledColumnWrapper>
  );
};

export const OrdersBoard: FC<OrdersBoardProps> = ({ orders }) => {
  const [boardTickets, setBoardTickets] = useState<[string, Order[]][]>(orders);

  const reorder = (list: Order[], startIndex: number, endIndex: number) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  const onDragEnd: OnDragEndResponder = ({ source, destination }) => {
    if (!destination) return;

    const sourceDroppableId = +source.droppableId;
    const destinationDroppableId = +destination.droppableId;

    if (sourceDroppableId === destinationDroppableId) {
      const reordered = reorder(
        boardTickets[destinationDroppableId][1],
        source.index,
        destination.index,
      );
      const newTickets = [...boardTickets];
      newTickets[destinationDroppableId][1] = reordered;
      setBoardTickets(newTickets);
      return;
    }

    const sourceClone = Array.from(boardTickets[sourceDroppableId][1]);
    const destClone = Array.from(boardTickets[destinationDroppableId][1]);
    const [removed] = sourceClone.splice(source.index, 1);

    destClone.splice(destination.index, 0, removed);

    const result = {};
    // @ts-ignore
    result[source.droppableId] = sourceClone;
    // @ts-ignore
    result[destination.droppableId] = destClone;
    const newTickets = [...boardTickets];
    // @ts-ignore
    newTickets[sourceDroppableId][1] = result[sourceDroppableId];
    // @ts-ignore
    newTickets[destinationDroppableId][1] = result[destinationDroppableId];
    setBoardTickets(newTickets);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <StyledBoardWrapper>
        {boardTickets.map((orderColumn, index) => (
          <DroppableArea key={orderColumn[0]} orderColumn={orderColumn} index={index} />
        ))}
      </StyledBoardWrapper>
    </DragDropContext>
  );
};
