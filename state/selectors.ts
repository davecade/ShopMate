import {selector} from 'recoil';
import {api} from '../services/api'; // import your axios instance

export const listsQuery = selector({
  key: 'ListsQuery',
  get: async () => {
    try {
      const response = await api.get('/lists');
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
});
