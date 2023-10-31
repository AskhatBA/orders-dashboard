import { OrderStatusesEnum, OrderActionsEnum } from "@/enums/order.enums";

export type OrderStatus = `${OrderStatusesEnum}`;

export type OrderAction = `${OrderActionsEnum}`;

export interface OrderItem {
  name: string;
  amount: string;
  options?: string[];
}

export interface Order {
  id: string;
  price: string;
  orderTime: string;
  status: OrderStatus;
  action?: OrderAction;
  items: OrderItem[];
}
