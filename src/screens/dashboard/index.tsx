import { FC, useEffect, useState, useCallback } from "react";

import { MainLayout } from "@/layout/main";
import { getOrders } from "@/api/orders.api";
import { Order, OrderStatus } from "@/types/order.types";

import { OrderStatusesEnum } from "@/enums/order.enums";
import { Topbar } from "./components/topbar";
import { OrdersBoard } from "./components/orders-board";

interface FormattedOrders {
  [OrderStatusesEnum.NEW]: Order[];
  [OrderStatusesEnum.IN_PROGRESS]: Order[];
  [OrderStatusesEnum.READY_TO_DELIVER]: Order[];
  [OrderStatusesEnum.DELIVERED]: Order[];
}

export const Dashboard: FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  const loadOrders = async () => {
    const response = await getOrders();
    formatBoardOrders(response);
    setOrders(response);
  };

  const formatBoardOrders = useCallback(
    (ordersToFormat: Order[]): [string, Order[]][] => {
      const formattedOrders: FormattedOrders = {
        [OrderStatusesEnum.NEW]: [],
        [OrderStatusesEnum.IN_PROGRESS]: [],
        [OrderStatusesEnum.READY_TO_DELIVER]: [],
        [OrderStatusesEnum.DELIVERED]: [],
      };

      ordersToFormat.forEach((order) => {
        formattedOrders[order.status].push(order);
      });

      return Object.entries(formattedOrders);
    },
    [orders],
  );

  useEffect(() => {
    loadOrders();
  }, []);

  return (
    <MainLayout>
      <Topbar />
      <OrdersBoard orders={formatBoardOrders(orders)} />
    </MainLayout>
  );
};
