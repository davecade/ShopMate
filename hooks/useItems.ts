import {useState} from 'react';
import {getAllItemsAsync} from '../services/api';
import {allItemsAtom} from '../state/atoms';
import {useRecoilState} from 'recoil';

export const useItems = () => {
  const [allItems, setAllItems] = useRecoilState(allItemsAtom);
  const [isLoading, setIsLoading] = useState(false);

  const getAllItems = async () => {
    const oldItems = allItems;
    try {
      setIsLoading(true);
      const allItemsResponse = await getAllItemsAsync();
      setAllItems(allItemsResponse);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
      setAllItems(oldItems);
    }
  };

  return {
    isLoading,
    getAllItems,
  };
};
