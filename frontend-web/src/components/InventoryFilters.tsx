import React from 'react';

interface Props {
  status: string;
  vendor: string;
  onChange: (filters: { status: string; vendor: string }) => void;
}

export const InventoryFilters: React.FC<Props> = ({ status, vendor, onChange }) => (
  <div className="flex gap-4 mb-4">
    <select value={status} onChange={e => onChange({ status: e.target.value, vendor })} className="border p-2 rounded">
      <option value="">All Statuses</option>
      <option value="in_stock">In Stock</option>
      <option value="out_of_stock">Out of Stock</option>
    </select>
    <input
      type="text"
      placeholder="Vendor"
      value={vendor}
      onChange={e => onChange({ status, vendor: e.target.value })}
      className="border p-2 rounded"
    />
  </div>
); 