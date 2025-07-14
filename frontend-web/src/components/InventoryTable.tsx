import React from 'react';
import { InventoryItem } from '../api/inventoryApi';

interface Props {
  items: InventoryItem[];
  onEdit: (item: InventoryItem) => void;
  onDelete: (id: string) => void;
}

export const InventoryTable: React.FC<Props> = ({ items, onEdit, onDelete }) => (
  <table className="min-w-full bg-white border">
    <thead>
      <tr>
        <th className="p-2 border">Name</th>
        <th className="p-2 border">Status</th>
        <th className="p-2 border">Vendor</th>
        <th className="p-2 border">Price</th>
        <th className="p-2 border">Quantity</th>
        <th className="p-2 border">Actions</th>
      </tr>
    </thead>
    <tbody>
      {items.map(item => (
        <tr key={item.id}>
          <td className="p-2 border">{item.name}</td>
          <td className="p-2 border">{item.status}</td>
          <td className="p-2 border">{item.vendor}</td>
          <td className="p-2 border">{item.price}</td>
          <td className="p-2 border">{item.quantity}</td>
          <td className="p-2 border">
            <button onClick={() => onEdit(item)} className="text-blue-600 mr-2">Edit</button>
            <button onClick={() => onDelete(item.id)} className="text-red-600">Delete</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
); 