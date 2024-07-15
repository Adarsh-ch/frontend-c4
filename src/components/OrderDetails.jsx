import React from 'react';

const OrderDetails = ({ order }) => {
  if (!order) return <div>Select an order to view details.</div>;

  return (
    <div>
      <h2>Order Details</h2>
      <p><strong>Customer:</strong> {order.customerName}</p>
      <p><strong>Total Amount:</strong> ${order.totalAmount}</p>
      <p><strong>Status:</strong> {order.status}</p>
      <p><strong>Items:</strong></p>
      <ul>
        {order.items.map(item => (
          <li key={item.bookId}>{item.bookTitle} - {item.quantity}</li>
        ))}
      </ul>
    </div>
  );
};

export default OrderDetails;
