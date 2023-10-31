import { FC, ReactElement, useState } from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  OnDragEndResponder,
  DraggableLocation,
} from "react-beautiful-dnd";

import { Order, OrderStatus } from "@/types/order.types";

import { OrderCard } from "../order-card";
import { COLUMNS_HEADER } from "./variables";
import {
  StyledDroppableColumn,
  StyledColumnHeader,
  StyledBoardWrapper,
  StyledColumnWrapper,
  StyledNoTickets,
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
              {orders.length ? (
                orders.map((order, indx) => (
                  <DraggableCard key={order.id} order={order} index={indx} />
                ))
              ) : (
                <StyledNoTickets>Нет заказов</StyledNoTickets>
              )}
            </StyledDroppableColumn>
          );
        }}
      </Droppable>
    </StyledColumnWrapper>
  );
};

export const OrdersBoard: FC<OrdersBoardProps> = ({ orders }) => {
  const [boardTickets, setBoardTickets] = useState<[string, Order[]][]>(orders);

  const reorderTickets = (list: Order[], startIndex: number, endIndex: number) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  const moveTicket = (
    source: Order[],
    destination: Order[],
    droppableSource: DraggableLocation,
    droppableDestination: DraggableLocation,
  ) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1);

    destClone.splice(droppableDestination.index, 0, removed);

    const result: { [key: string]: any } = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;

    return result;
  };

  const onDragEnd: OnDragEndResponder = ({ source, destination }) => {
    if (!destination) return;

    const sourceDroppableId = +source.droppableId;
    const destinationDroppableId = +destination.droppableId;

    if (sourceDroppableId === destinationDroppableId) {
      const reordered = reorderTickets(
        boardTickets[destinationDroppableId][1],
        source.index,
        destination.index,
      );
      const newTickets = [...boardTickets];
      newTickets[destinationDroppableId][1] = reordered;
      setBoardTickets(newTickets);
      return;
    }

    const movedTickets = moveTicket(
      boardTickets[sourceDroppableId][1],
      boardTickets[destinationDroppableId][1],
      source,
      destination,
    );
    const newTickets = [...boardTickets];
    newTickets[sourceDroppableId][1] = movedTickets[sourceDroppableId];
    newTickets[destinationDroppableId][1] = movedTickets[destinationDroppableId];
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
