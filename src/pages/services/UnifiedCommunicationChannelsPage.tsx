import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Layout from '../../components/layout/Layout';
import { MessageSquare, Phone, Clock, Users, CheckCircle, ArrowRight, Headphones, Calendar, Mail } from 'lucide-react';

const UnifiedCommunicationChannelsPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary-900 to-primary-800 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              قنوات التواصل الموحدة
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100">
              حلول تواصل متكاملة تجمع بين الذكاء الاصطناعي والدعم البشري لخدمة عملائكم بفعالية
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/966530628416"
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-green-600 text-white hover:bg-green-700"
              >
                واتساب مباشر
              </a>
              <Link to="/contact" className="btn bg-white text-primary-700 hover:bg-primary-50">
                تواصل معنا
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Hours Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">ساعات العمل والتواصل</h2>

            <div className="bg-primary-50 p-8 rounded-lg mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="flex flex-col items-center">
                  <Clock size={32} className="text-primary-600 mb-3" />
                  <h3 className="text-xl font-bold mb-2">ساعات العمل</h3>
                  <p className="text-secondary-600">الأحد - الخميس</p>
                  <p className="text-secondary-600">8:00 ص - 6:00 م</p>
                </div>
                <div className="flex flex-col items-center">
                  <Phone size={32} className="text-primary-600 mb-3" />
                  <h3 className="text-xl font-bold mb-2">الهاتف</h3>
                  <p className="text-secondary-600">+966530628416</p>
                  <p className="text-secondary-600">متاح خلال ساعات العمل</p>
                </div>
                <div className="flex flex-col items-center">
                  <MessageSquare size={32} className="text-primary-600 mb-3" />
                  <h3 className="text-xl font-bold mb-2">واتساب</h3>
                  <p className="text-secondary-600">+966530628416</p>
                  <p className="text-secondary-600">رد فوري خلال ساعات العمل</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-secondary-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">خدمات التواصل المتاحة</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <ServiceCard
                icon={<MessageSquare size={32} />}
                title="خدمات الواتساب الذكية"
                description="إدارة التواصل مع العملاء عبر واتساب باستخدام الذكاء الاصطناعي مع دعم بشري متخصص"
                features={[
                  "ردود تلقائية ذكية",
                  "توجيه الاستفسارات المعقدة",
                  "متابعة حالة الطلبات",
                  "إرسال التنبيهات والتذكيرات"
                ]}
              />
              <ServiceCard
                icon={<Phone size={32} />}
                title="خدمة العملاء الهاتفية"
                description="فريق متخصص للرد على المكالمات وتقديم الدعم الفني والاستشارات"
                features={[
                  "رد على الاستفسارات",
                  "حل المشكلات الفنية",
                  "تقديم الاستشارات",
                  "جدولة المواعيد"
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">مميزات خدماتنا</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <BenefitItem
                icon={<CheckCircle size={20} />}
                text="تكامل بين الذكاء الاصطناعي والدعم البشري"
              />
              <BenefitItem
                icon={<CheckCircle size={20} />}
                text="رد سريع وفعال على جميع الاستفسارات"
              />
              <BenefitItem
                icon={<CheckCircle size={20} />}
                text="متاحية 24/7 مع دعم فني متخصص"
              />
              <BenefitItem
                icon={<CheckCircle size={20} />}
                text="توثيق وتتبع جميع التفاعلات"
              />
              <BenefitItem
                icon={<CheckCircle size={20} />}
                text="دعم متعدد اللغات (العربية والإنجليزية)"
              />
              <BenefitItem
                icon={<CheckCircle size={20} />}
                text="حلول مخصصة حسب احتياجات العميل"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-secondary-50">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">تواصل معنا</h2>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-secondary-200">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-2">
                      الاسم الكامل
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="أدخل اسمك الكامل"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-2">
                      رقم الهاتف
                    </label>
                    <input
                      type="tel"
                      className="w-full px-3 py-2 border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="+966xxxxxxxxx"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    البريد الإلكتروني
                  </label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="example@domain.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    نوع الخدمة المطلوبة
                  </label>
                  <select className="w-full px-3 py-2 border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500">
                    <option>خدمات الواتساب الذكية</option>
                    <option>خدمة العملاء الهاتفية</option>
                    <option>الحلول المتكاملة</option>
                    <option>استشارة عامة</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    رسالتك
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-3 py-2 border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="اكتب رسالتك هنا..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary"
                >
                  إرسال الرسالة
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">ابدأ رحلة التواصل الفعال</h2>
          <p className="text-xl text-secondary-600 mb-8">
            تواصل معنا الآن لبدء استخدام حلول التواصل المتكاملة
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/966530628416"
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-green-600 text-white hover:bg-green-700"
            >
              واتساب مباشر
            </a>
            <Link to="/contact" className="btn-primary">
              تواصل معنا
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, features }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-secondary-200 hover:shadow-md transition-shadow">
      <div className="inline-block p-3 bg-primary-100 text-primary-600 rounded-full mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-secondary-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="text-secondary-600 flex items-center gap-2">
            <ArrowRight size={16} className="text-primary-600" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

interface BenefitItemProps {
  icon: React.ReactNode;
  text: string;
}

const BenefitItem: React.FC<BenefitItemProps> = ({ icon, text }) => {
  return (
    <div className="flex items-center gap-3">
      <div className="text-green-600">
        {icon}
      </div>
      <span className="text-secondary-700">{text}</span>
    </div>
  );
};

export default UnifiedCommunicationChannelsPage;
