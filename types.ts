export type ShoppingList = {
  _id?: string;
  name: string;
  items: ShoppingItem[];
};

export type ShoppingItem = {
  _id?: string;
  name: string;
  quantity: number;
  price: number;
  isBought: boolean;
};
