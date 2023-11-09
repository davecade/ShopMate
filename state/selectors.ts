import {selector, selectorFamily} from 'recoil';
import {api} from '../services/api'; // import your axios instance
import {allListsAtom} from './atoms';

export const getAllListsQuery = selector({
  key: 'AllListsQuery',
  get: async ({get}) => {
    try {
      get(allListsAtom);
      const response = await api.get('/lists');
      return response.data;
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
  key: 'OneListQuery',
  get: (id: string) => async () => {
    if (!id) {
      return;
    }

    try {
      // Make the API call using the provided ID
      const response = await api.get(`/lists/${id}`);
      return response.data; // Return the list data
    } catch (error) {
      // Handle or throw the error
      console.error(error);
      throw error;
    }
  },
});
