import api from './api';

export const getAllOrders = () => {
  return api.get('/orders').then(response => response.data);
};

export const getOrderById = (orderId) => {
  return api.get(`/orders/${orderId}`).then(response => response.data);
};

export const deleteOrderById = (orderId) => {
  return api.delete(`/orders/${orderId}`);
};
export const getOrderHistory = () => {
    return api.get('/orders/history').then(response => response.data);
  };