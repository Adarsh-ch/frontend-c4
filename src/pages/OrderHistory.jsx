import React, { useEffect, useState } from 'react';
import { getOrderHistory } from '../services/order';

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrderHistory = async () => {
      try {
        const data = await getOrderHistory();
        setOrders(data);
      } catch (error) {
        console.error('Error fetching order history:', error);
      }
    };

    fetchOrderHistory();
  }, []);

  return (
    <div>
      <h2>Order History</h2>
      <ul>
        {orders.map(order => (
          <li key={order._id}>
            Order ID: {order._id}, Total Amount: ${order.totalAmount}, Status: {order.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderHistory;
