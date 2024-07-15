import api from './api';

export const exportOrders = () => {
  return api.get('/admin/export-orders', { responseType: 'blob' }).then(response => {
    // Convert the response to a downloadable CSV file
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'orders.csv');
    document.body.appendChild(link);
    link.click();
  });
};

export const sendPromotionalEmails = (data) => {
  return api.post('/admin/send-promotional-emails', data).then(response => response.data);
};

export const triggerCronJobs = () => {
  return api.get('/admin/cron-jobs').then(response => response.data);
};
