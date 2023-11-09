import {useRecoilCallback} from 'recoil';
import {api} from '../services/api'; // import your axios instance
import {getAllListsQuery} from '../state/selectors';

// This isn't a selector, it's a hook you'll call from your component
export const useCreateList = () =>
  useRecoilCallback(
    ({snapshot, set}) =>
      async createListDto => {
        try {
          const response = await api.post('/lists', createListDto);
          // Here you might want to update an atom or selector that holds your list data
          // This is an example of how to update the all lists query with the new list
          const currentLists = await snapshot.getPromise(getAllListsQuery);
          set(getAllListsQuery, [...currentLists, response.data]);
          return response.data; // Return the new list
        } catch (error) {
          console.error(error);
          throw error;
        }
      },
    [], // Dependencies array, if there are any
  );
