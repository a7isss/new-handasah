import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Layout from '../../components/layout/Layout';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

const ContactPage: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };
  
  return (
    <Layout>
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">اتصل بنا</h1>
            <p className="text-xl text-secondary-600">
              نحن هنا لمساعدتك. تواصل معنا لأي استفسار أو دعم فني
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">معلومات التواصل</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="text-primary-600 ml-4 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold mb-1">العنوان</h3>
                    <p className="text-secondary-600">
                      الرياض، المملكة العربية السعودية
                      <br />
                      شارع الملك فهد، برج المملكة
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="text-primary-600 ml-4 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold mb-1">الهاتف</h3>
                    <p className="text-secondary-600">
                      +966 11 234 5678
                      <br />
                      +966 11 234 5679
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="text-primary-600 ml-4 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold mb-1">البريد الإلكتروني</h3>
                    <p className="text-secondary-600">
                      info@example.com
                      <br />
                      support@example.com
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h2 className="text-2xl font-bold mb-6">ساعات العمل</h2>
                <div className="space-y-2">
                  <p className="flex justify-between">
                    <span className="font-semibold">الأحد - الخميس</span>
                    <span className="text-secondary-600">9:00 ص - 5:00 م</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="font-semibold">الجمعة - السبت</span>
                    <span className="text-secondary-600">مغلق</span>
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-6">أرسل رسالة</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block font-medium mb-2">
                    الاسم
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block font-medium mb-2">
                    البريد الإلكتروني
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block font-medium mb-2">
                    رقم الهاتف
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block font-medium mb-2">
                    الرسالة
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="btn-primary w-full">
                  <Send size={18} className="ml-2" />
                  إرسال الرسالة
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;