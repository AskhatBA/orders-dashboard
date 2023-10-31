import { OrderStatusesEnum } from "@/enums/order.enums";
import { theme } from "@/style/theme";

export const COLUMNS_HEADER = Object.freeze({
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
