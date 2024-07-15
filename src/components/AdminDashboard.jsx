import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <ul>
        <li><Link to="/admin/export-orders">Export Orders</Link></li>
        <li><Link to="/admin/send-emails">Send Promotional Emails</Link></li>
        <li><Link to="/admin/cron-jobs">Trigger Cron Jobs</Link></li>
      </ul>
    </div>
  );
};

export default AdminDashboard;
