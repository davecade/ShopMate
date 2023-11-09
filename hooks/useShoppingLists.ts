// import {useRecoilValue} from 'recoil';
// import {allListsQuery, oneListQuery} from '../state/selectors';
// import {ShoppingList} from '../types';
// import {useState, SetStateAction, Dispatch} from 'react';

// export const useShoppingLists = (): {
//   shoppingLists: ShoppingList[];
//   setSelectedListId: Dispatch<SetStateAction<string>>;
//   selectedList: ShoppingList;
// } => {
//   const [selectedListId, setSelectedListId] = useState('');
//   const shoppingLists = useRecoilValue(allListsQuery);
//   const selectedList = useRecoilValue<ShoppingList>(
//     oneListQuery(selectedListId),
//   );

// const getShoppingListDetailsById = (id: number) => {
//   return shoppingLists.find(list => list.id === id);
// };

// const getShoppingListItemsById = (id: number) => {
//   return getShoppingListDetailsById(id)?.items || [];
// };

// const getShoppingListItemDetails = (
//   ShoppingListId: number,
//   itemListId: number,
// ) => {
//   return getShoppingListItemsById(ShoppingListId)?.find(
//     item => item.id === itemListId,
//   );
// };

// const getTotalItemsByListId = (id: number) => {
//   return getShoppingListItemsById(id)?.length || 0;
// };

// const getTotalBoughtItemsListId = (id: number) => {
//   return getShoppingListItemsById(id)?.filter(item => item.isBought).length;
// };

//   return {
//     shoppingLists: shoppingLists,
//     setSelectedListId: setSelectedListId,
//     selectedList: selectedList,
//     // getShoppingListDetailsById,
//     // getShoppingListItemsById,
//     // getShoppingListItemDetails,
//     // getTotalItemsByListId,
//     // getTotalBoughtItemsListId,
//   };
// };
