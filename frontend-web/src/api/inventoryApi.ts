import axios from 'axios';

export interface InventoryItem {
  id: string;
  name: string;
  status: string;
  vendor: string;
  price: number;
  quantity: number;
  // ...other fields
}

export const fetchInventory = async (params: any) => {
  const { data } = await axios.get('/api/inventory', { params });
  return data;
};

export const updateInventory = async (item: InventoryItem) => {
  const { data } = await axios.put(`/api/inventory/${item.id}`, item);
  return data;
};

export const deleteInventory = async (id: string) => {
  await axios.delete(`/api/inventory/${id}`);
}; 