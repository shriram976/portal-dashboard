import React from 'react';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { fetchInventory, updateInventory, deleteInventory, InventoryItem } from '../api/inventoryApi';
import { InventoryTable } from '../components/InventoryTable';
import { InventoryEditModal } from '../components/InventoryEditModal';
import { InventoryFilters } from '../components/InventoryFilters';

export const InventoryPage: React.FC = () => {
  const [filters, setFilters] = React.useState({ status: '', vendor: '' });
  const [editItem, setEditItem] = React.useState<InventoryItem | null>(null);
  const [modalOpen, setModalOpen] = React.useState(false);
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery(['inventory', filters], () => fetchInventory(filters));
  const updateMutation = useMutation(updateInventory, {
    onSuccess: () => queryClient.invalidateQueries('inventory'),
  });
  const deleteMutation = useMutation(deleteInventory, {
    onSuccess: () => queryClient.invalidateQueries('inventory'),
  });

  const handleEdit = (item: InventoryItem) => {
    setEditItem(item);
    setModalOpen(true);
  };

  const handleSave = (item: InventoryItem) => {
    updateMutation.mutate(item);
    setModalOpen(false);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Delete this item?')) {
      deleteMutation.mutate(id);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Inventory</h1>
      <InventoryFilters {...filters} onChange={setFilters} />
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <InventoryTable items={data || []} onEdit={handleEdit} onDelete={handleDelete} />
      )}
      <InventoryEditModal
        item={editItem}
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onSave={handleSave}
      />
    </div>
  );
}; 