import React, { useEffect, useState } from 'react';
import { getAllOrders } from '../services/order';

const OrderList = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const data = await getAllOrders();
        setOrders(data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div>
      <h2>Order List</h2>
      <ul>
        {orders.map(order => (
          <li key={order._id}>{order.customerName} - ${order.totalAmount}</li>
        ))}
      </ul>
    </div>
  );
};

export default OrderList;
