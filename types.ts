export type ShoppingList = {
  id: number;
  name: string;
  items: ShoppingItem[];
};

export type ShoppingItem = {
  id: number;
  name: string;
  quantity: number;
  price: number;
  isBought: boolean;
};
