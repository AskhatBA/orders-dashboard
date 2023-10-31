import { OrderStatusesEnum } from "@/enums/order.enums";

export type OrderStatus = `${OrderStatusesEnum}`;

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
  items: OrderItem[];
}
