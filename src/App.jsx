import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WebSocketProvider from './components/WebSocketProvider';
import AdminDashboard from './components/AdminDashboard';
import Home from './pages/Home';
import BookPage from './pages/BookPage';
import OrderHistory from './pages/OrderHistory';
import AdminExportOrders from './pages/AdminExportOrders';
import AdminSendEmails from './pages/AdminSendEmails';
import AdminCronJobs from './pages/AdminCronJobs';
import Login from './components/Login';
import Register from './components/Register';
import './styles/styles.css';
import BookList from './components/BookList';

const App = () => {
  return (
    <Router>
      <WebSocketProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/book/booklist" element={<BookList/>} />
          <Route path="/book/:bookId" element={<BookPage />} />
          <Route path="/order-history" element={<OrderHistory />} />
          <Route path="/admin" exact element={<AdminDashboard />} />
          <Route path="/admin/export-orders" element={<AdminExportOrders />} />
          <Route path="/admin/send-emails" element={<AdminSendEmails />} />
          <Route path="/admin/cron-jobs" element={<AdminCronJobs />} />
        </Routes>
      </WebSocketProvider>
    </Router>
  );
};

export default App;
