import {selector, selectorFamily} from 'recoil';
import {
  getAllItemsAsync,
  getAllListsAsync,
  getListByIdAsync,
} from '../services/api'; // import your axios instance
import {allItemsAtom, allListsAtom} from './atoms';

const keys = {
  getAllLists: '@ShopMate_getAllLists',
  getAllItemsQuery: '@ShopMate_getAllItemsQuery',
  getOneListQuery: '@ShopMate_getOneListQuery',
};

export const getAllListsQuery = selector({
  key: keys.getAllLists,
  get: async ({get}) => {
    try {
      get(allListsAtom);
      const allListsData = await getAllListsAsync();
      return allListsData;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
  set: ({set}, newListData) => {
    set(allListsAtom, newListData);
  },
});

export const getAllItemsQuery = selector({
  key: keys.getAllItemsQuery,
  get: async ({get}) => {
    try {
      get(allItemsAtom);
      const allItemsData = await getAllItemsAsync();
      return allItemsData;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
  set: ({set}, newListData) => {
    set(allListsAtom, newListData);
  },
});

export const getListByIdQuery = selectorFamily({
  key: keys.getOneListQuery,
  get:
    (id: string) =>
    async ({get}) => {
      if (!id) {
        return;
      }
      try {
        // Make the API call using the provided ID
        get(allListsAtom);
        const listData = await getListByIdAsync(id);
        return listData;
      } catch (error) {
        // Handle or throw the error
        console.error(error);
        throw error;
      }
    },
});
