import React from 'react';
import { triggerCronJobs } from '../services/admin';

const AdminCronJobs = () => {
  const handleTriggerJobs = async () => {
    try {
      await triggerCronJobs();
      alert('Cron jobs triggered successfully!');
    } catch (error) {
      console.error('Error triggering cron jobs:', error);
    }
  };

  return (
    <div>
      <h2>Trigger Cron Jobs</h2>
      <button onClick={handleTriggerJobs}>Trigger Cron Jobs</button>
    </div>
  );
};

export default AdminCronJobs;
