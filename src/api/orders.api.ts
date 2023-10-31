import axios, { AxiosResponse } from "axios";

import { Order } from "@/types/order.types";

export const getOrders = async (): Promise<Order[]> => {
  const response: AxiosResponse<Order[]> = await axios.get<Order[]>("/data/orders.json");
  return response.data;
};
