'use client';

import { useEffect, useState } from 'react';

type Message = {
  name: string;
  email: string;
  message: string;
  date: string;
};

export default function AdminPage() {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    fetch('/api/admin/messages')
      .then((res) => res.json())
      .then((data) => setMessages(data.messages));
  }, []);

  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-8">📬 پیام‌های کاربران</h1>
      <div className="space-y-6">
        {messages.length === 0 && <p>هیچ پیامی ثبت نشده.</p>}
        {messages.map((msg, index) => (
          <div key={index} className="border p-4 rounded-md shadow-sm bg-white">
            <div className="text-sm text-gray-500">{new Date(msg.date).toLocaleString()}</div>
            <div className="font-bold mt-2">{msg.name} ({msg.email})</div>
            <p className="mt-2 text-gray-800 whitespace-pre-wrap">{msg.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}