import React, { useState } from 'react';
import { sendPromotionalEmails } from '../services/admin';

const AdminSendEmails = () => {
  const [subject, setSubject] = useState('');
  const [text, setText] = useState('');

  const handleSendEmails = async () => {
    try {
      await sendPromotionalEmails({ subject, text });
      alert('Emails sent successfully!');
    } catch (error) {
      console.error('Error sending promotional emails:', error);
    }
  };

  return (
    <div>
      <h2>Send Promotional Emails</h2>
      <form onSubmit={(e) => { e.preventDefault(); handleSendEmails(); }}>
        <input
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="Email Subject"
        />
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Email Content"
        />
        <button type="submit">Send Emails</button>
      </form>
    </div>
  );
};

export default AdminSendEmails;
