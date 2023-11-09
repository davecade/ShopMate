// api.js
import axios from 'axios';
import {ShoppingList} from '../types';

export const api = axios.create({
  baseURL: 'http://localhost:3000',
});

export const createListQuery = async (newList: ShoppingList) => {
  try {
    const response = await api.post('/lists', newList);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
