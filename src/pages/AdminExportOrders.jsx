import React from 'react';
import { exportOrders } from '../services/admin';

const AdminExportOrders = () => {
  const handleExport = () => {
    exportOrders();
  };

  return (
    <div>
      <h2>Export Orders</h2>
      <button onClick={handleExport}>Export Orders to CSV</button>
    </div>
  );
};

export default AdminExportOrders;
