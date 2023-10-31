import { FC, useEffect, useState, useCallback } from "react";

import { MainLayout } from "@/layout/main";
import { getOrders } from "@/api/orders.api";
import { Order } from "@/types/order.types";

import { OrderStatusesEnum } from "@/enums/order.enums";
import { StyledBoardWrapper } from "@/screens/dashboard/styles";
import { Topbar } from "./components/topbar";
import { OrdersBoard } from "./components/orders-board";

interface FormattedOrders {
  [OrderStatusesEnum.NEW]: Order[];
  [OrderStatusesEnum.IN_PROGRESS]: Order[];
  [OrderStatusesEnum.READY_TO_DELIVER]: Order[];
  [OrderStatusesEnum.DELIVERED]: Order[];
}

export const Dashboard: FC = () => {
  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState<Order[]>([]);

  const loadOrders = async () => {
    setLoading(true);
    const response = await getOrders();
    formatBoardOrders(response);
    setOrders(response);
    setLoading(false);
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

  if (loading) return <div>Loading</div>;

  return (
    <MainLayout>
      <Topbar />
      <StyledBoardWrapper>
        <OrdersBoard orders={formatBoardOrders(orders)} />
      </StyledBoardWrapper>
    </MainLayout>
  );
};
