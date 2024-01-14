import {useRecoilState} from 'recoil';
import {allListsAtom, selectedListStateAtom} from '../state/atoms';
import {useState} from 'react';
import {
  createListAsync,
  deleteListAsync,
  getAllListsAsync,
  getListByIdAsync,
  updateListAsync,
} from '../services/api';
import {ShoppingList} from '../types';

export const useShoppingLists = () => {
  const [allLists, setAllLists] = useRecoilState(allListsAtom);
  const [selectedListState, setSelectedListState] = useRecoilState(
    selectedListStateAtom,
  );
  const [isLoading, setIsLoading] = useState(false);

  const getAllLists = async () => {
    const oldLists = allLists;
    try {
      setIsLoading(true);
      const allListsResponse = await getAllListsAsync();
      setAllLists(allListsResponse);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
      setAllLists(oldLists);
    }
  };

  const createList = async (newListData: ShoppingList) => {
    const oldLists = allLists;
    try {
      setIsLoading(true);
      const newListResponse = await createListAsync(newListData);
      setAllLists(prevLists => [...prevLists, newListResponse]);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
      setAllLists(oldLists);
    }
  };

  const updateList = async (updatedListData: ShoppingList) => {
    const oldLists = allLists;
    try {
      setIsLoading(true);
      const updatedListResponse = await updateListAsync(updatedListData);
      setAllLists(prevLists =>
        prevLists.map(list =>
          list._id === updatedListResponse._id ? updatedListResponse : list,
        ),
      );
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
      setAllLists(oldLists);
    }
  };

  const deleteListById = async (listId: string) => {
    const oldLists = allLists;
    try {
      setIsLoading(true);
      const deletedListResponse = await deleteListAsync(listId);
      if (deletedListResponse) {
        setAllLists(prev =>
          prev.filter(list => list._id !== deletedListResponse._id),
        );
      }
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
      setAllLists(oldLists);
    }
  };

  const getListById = async (listId: string) => {
    try {
      setIsLoading(true);
      const listData = await getListByIdAsync(listId);
      setSelectedListState(listData);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      throw error;
    }
  };

  return {
    isLoading,
    getAllLists,
    createList,
    updateList,
    deleteListById,
    getListById,
    shoppingLists: allLists,
    setShoppingLists: setAllLists,
    selectedList: selectedListState,
    setSelectedList: setSelectedListState,
  };
};
