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
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('/api/admin/messages')
      .then((res) => res.json())
      .then((data) => setMessages(data.messages))
      .finally(() => setLoading(false));
  }, []);

  const filteredMessages = messages.filter(msg => 
    msg.name.includes(search) || 
    msg.email.includes(search) || 
    msg.message.includes(search)
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto py-8 px-4">
        {/* Dashboard Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            پنل مدیریت
          </h1>
          <div className="relative">
            <input
              type="text"
              placeholder="جستجو..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-64 px-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/50 backdrop-blur"
            />
            <span className="absolute left-3 top-2.5">🔍</span>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {[
            { title: 'کل پیام‌ها', value: messages.length, icon: '📨' },
            { title: 'پیام‌های امروز', value: messages.filter(m => new Date(m.date).toDateString() === new Date().toDateString()).length, icon: '📅' },
            { title: 'پیام‌های خوانده نشده', value: messages.length, icon: '📬' },
          ].map((stat, i) => (
            <div key={i} className="bg-white/50 backdrop-blur border border-white/20 rounded-2xl p-6 hover:shadow-xl transition-all duration-300">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-gray-600 text-sm">{stat.title}</div>
              <div className="text-2xl font-bold mt-1 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {stat.value}
              </div>
            </div>
          ))}
        </div>

        {/* Messages List */}
        <div className="bg-white/50 backdrop-blur border border-white/20 rounded-2xl p-6">
          <h2 className="text-xl font-bold mb-6">پیام‌های دریافتی</h2>
          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin text-3xl mb-4">⚡️</div>
              <p className="text-gray-500">در حال بارگذاری...</p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredMessages.length === 0 && (
                <p className="text-center py-12 text-gray-500">هیچ پیامی یافت نشد.</p>
              )}
              {filteredMessages.map((msg, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="font-bold text-lg">{msg.name}</div>
                      <div className="text-blue-600 text-sm">{msg.email}</div>
                    </div>
                    <div className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                      {new Date(msg.date).toLocaleDateString('fa-IR')}
                    </div>
                  </div>
                  <p className="mt-4 text-gray-600 whitespace-pre-wrap">{msg.message}</p>
                  <div className="mt-4 flex gap-2">
                    <button className="text-sm px-4 py-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors">
                      پاسخ
                    </button>
                    <button className="text-sm px-4 py-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors">
                      آرشیو
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}