'use client';

import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        toast.success("پیام شما با موفقیت ارسال شد!");
        setForm({ name: '', email: '', message: '' });
      } else {
        toast.error(data.error || "ارسال پیام با خطا مواجه شد.");
      }
    } catch (err) {
      toast.error("مشکلی پیش اومد. دوباره تلاش کن.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] relative">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 -z-10" />
      <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5 -z-10" />
      
      <div className="max-w-6xl mx-auto py-16 px-4">
        <div className="bg-white/30 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info Section */}
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  تماس با ما
                </h1>
                <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mt-2 rounded-full" />
              </div>
              
              <p className="text-gray-600 leading-relaxed">
                برای ارتباط با ما می‌توانید از طریق فرم زیر پیام خود را ارسال کنید. کارشناسان ما در اسرع وقت با شما تماس خواهند گرفت.
              </p>

              <div className="space-y-4">
                {[
                  { icon: "📧", title: "ایمیل", detail: "info@company.com" },
                  { icon: "📱", title: "تلفن", detail: "۰۲۱-۱۲۳۴۵۶۷۸" },
                  { icon: "📍", title: "آدرس", detail: "تهران، خیابان ولیعصر" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-4 space-x-reverse bg-white/50 rounded-xl p-4 hover:bg-white/70 transition-all duration-300">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <h3 className="font-semibold text-gray-900">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form Section */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">نام</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/50 backdrop-blur focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="نام خود را وارد کنید"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">ایمیل</label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/50 backdrop-blur focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="example@email.com"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">پیام</label>
                <textarea
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/50 backdrop-blur focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="پیام خود را بنویسید..."
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-medium
                         hover:shadow-lg hover:shadow-blue-500/25 active:scale-[0.98] disabled:opacity-70 
                         disabled:cursor-not-allowed transition-all duration-300"
              >
                {loading ? "در حال ارسال..." : "ارسال پیام"}
              </button>
            </form>
          </div>
        </div>
      </div>
      <Toaster 
        position="top-center"
        toastOptions={{
          className: 'backdrop-blur border border-white/20 bg-white/50',
          duration: 3000,
        }}
      />
    </div>
  );
}