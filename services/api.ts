import axios from 'axios';
import Config from 'react-native-config';
import {ShoppingItem, ShoppingList} from '../types';

const api = axios.create({
  baseURL: 'https://shopmate-live-cd9f4d646e54.herokuapp.com',
});

api.interceptors.request.use(config => {
  config.headers.Authorization = `Bearer ${Config.API_SECRET_KEY}`;
  return config;
});

export const getAllListsAsync = async (): Promise<ShoppingList[]> => {
  try {
    const response = await api.get('/lists');
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getAllItemsAsync = async () => {
  try {
    const response = await api.get('/items');
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getListByIdAsync = async (id: string): Promise<ShoppingList> => {
  try {
    const response = await api.get(`/lists/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const createListAsync = async (newList: ShoppingList) => {
  try {
    const response = await api.post('/lists', newList);
    return response.data;
  } catch (error) {
    console.log('createListAsync: ', error);
    throw error;
  }
};

export const updateListAsync = async (updatedList: ShoppingList) => {
  try {
    const response = await api.put(`/lists/${updatedList._id}`, updatedList);
    return response.data;
  } catch (error) {
    console.log('updateListAsync: ', error);
    throw error;
  }
};

export const deleteListAsync = async (listId: string) => {
  try {
    const response = await api.delete(`/lists/${listId}`);
    return response.data;
  } catch (error) {
    console.log('deleteListAsync: ', error);
    throw error;
  }
};

export const addItemAsync = async (listId: string, newItem: ShoppingItem) => {
  try {
    const response = await api.post(`/lists/${listId}/items`, newItem);
    return response.data;
  } catch (error) {
    console.log('addItemAsync: ', error);
    throw error;
  }
};
