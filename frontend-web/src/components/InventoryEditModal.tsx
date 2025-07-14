import React from 'react';
import { InventoryItem } from '../api/inventoryApi';

interface Props {
  item: InventoryItem | null;
  open: boolean;
  onClose: () => void;
  onSave: (item: InventoryItem) => void;
}

export const InventoryEditModal: React.FC<Props> = ({ item, open, onClose, onSave }) => {
  const [form, setForm] = React.useState<InventoryItem | null>(item);

  React.useEffect(() => {
    setForm(item);
  }, [item]);

  if (!open || !form) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow-lg w-96">
        <h2 className="text-lg font-bold mb-4">Edit Inventory</h2>
        <input
          className="border p-2 w-full mb-2"
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
        />
        {/* Add more fields as needed */}
        <div className="flex justify-end gap-2 mt-4">
          <button onClick={onClose} className="px-4 py-2 bg-gray-200 rounded">Cancel</button>
          <button
            onClick={() => form && onSave(form)}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}; 