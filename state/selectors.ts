import {selector, selectorFamily} from 'recoil';
import {api} from '../services/api'; // import your axios instance

export const allListsQuery = selector({
  key: 'AllListsQuery',
  get: async () => {
    try {
      const response = await api.get('/lists');
      console.log('response.data > ', response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
});

export const oneListQuery = selectorFamily({
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
