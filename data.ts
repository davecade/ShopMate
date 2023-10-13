import {ShoppingList} from './types';

export const shoppingListsData: ShoppingList[] = [
  {
    id: 1,
    name: 'Groceries',
    items: [
      {
        id: 1,
        name: 'Milk',
        quantity: 1,
        price: 1.5,
        isBought: false,
      },
      {
        id: 2,
        name: 'Bread',
        quantity: 2,
        price: 2,
        isBought: true,
      },
      {
        id: 3,
        name: 'Eggs',
        quantity: 12,
        price: 3,
        isBought: false,
      },
    ],
  },
  {
    id: 2,
    name: 'Office Supplies',
    items: [
      {
        id: 1,
        name: 'Notebook',
        quantity: 3,
        price: 5,
        isBought: false,
      },
      {
        id: 2,
        name: 'Pens',
        quantity: 10,
        price: 0.5,
        isBought: true,
      },
      {
        id: 3,
        name: 'Sticky Notes',
        quantity: 5,
        price: 1.5,
        isBought: true,
      },
    ],
  },
  {
    id: 3,
    name: 'Gardening',
    items: [
      {
        id: 1,
        name: 'Potting Soil',
        quantity: 2,
        price: 7,
        isBought: false,
      },
      {
        id: 2,
        name: 'Flower Seeds',
        quantity: 5,
        price: 1,
        isBought: false,
      },
      {
        id: 3,
        name: 'Watering Can',
        quantity: 1,
        price: 10,
        isBought: false,
      },
    ],
  },
];
