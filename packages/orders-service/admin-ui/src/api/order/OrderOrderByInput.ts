import { SortOrder } from "../../util/SortOrder";

export type OrderOrderByInput = {
  createdAt?: SortOrder;
  customerId?: SortOrder;
  discount?: SortOrder;
  id?: SortOrder;
  productId?: SortOrder;
  quantity?: SortOrder;
  toNotify?: SortOrder;
  totalPrice?: SortOrder;
  updatedAt?: SortOrder;
};
