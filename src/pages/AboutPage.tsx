import React from 'react';
import { useTranslation } from 'react-i18next';
import Layout from '../components/layout/Layout';
import { Shield, Award, Clock, CheckCircle, Users, Bot, Zap, MapPin, Phone, Mail, MessageCircle } from 'lucide-react';

const AboutPage: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <Layout>
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">{t('about.title')}</h1>
            <p className="text-xl text-secondary-600">
              منصة متخصصة في تقديم خدمات الذكاء الاصطناعي المدعومة بالخبرة البشرية
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-2xl font-bold mb-4">{t('about.mission')}</h2>
              <p className="text-lg text-secondary-600 mb-6">
                نسعى لتمكين الشركات من الاستفادة من قوة الذكاء الاصطناعي مع الحفاظ على اللمسة البشرية المتخصصة،
                من خلال توفير حلول متكاملة تجمع بين التقنية المتطورة والخبرة المهنية.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <CheckCircle className="text-primary-600 ml-2" size={20} />
                  <span>حلول ذكية مخصصة لكل قطاع</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-primary-600 ml-2" size={20} />
                  <span>دعم فني متخصص على مدار الساعة</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-primary-600 ml-2" size={20} />
                  <span>تحديثات مستمرة لمواكبة التطورات التقنية</span>
                </li>
              </ul>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="فريق العمل"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6 bg-primary-50 rounded-lg">
              <Bot className="mx-auto text-primary-600 mb-4" size={40} />
              <h3 className="text-xl font-bold mb-2">تقنية متقدمة</h3>
              <p className="text-secondary-600">
                استخدام أحدث تقنيات الذكاء الاصطناعي لتحقيق أفضل النتائج
              </p>
            </div>
            <div className="text-center p-6 bg-primary-50 rounded-lg">
              <Users className="mx-auto text-primary-600 mb-4" size={40} />
              <h3 className="text-xl font-bold mb-2">خبرة بشرية</h3>
              <p className="text-secondary-600">
                فريق من المتخصصين لضمان جودة الخدمة والملاءمة الثقافية
              </p>
            </div>
            <div className="text-center p-6 bg-primary-50 rounded-lg">
              <Zap className="mx-auto text-primary-600 mb-4" size={40} />
              <h3 className="text-xl font-bold mb-2">كفاءة عالية</h3>
              <p className="text-secondary-600">
                تحسين العمليات وتوفير الوقت مع الحفاظ على أعلى معايير الجودة
              </p>
            </div>
          </div>
          
          <div className="text-center mb-16">
            <h2 className="text-2xl font-bold mb-4">{t('about.vision')}</h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              أن نكون الشريك الأول للشركات في منطقة الشرق الأوسط وشمال أفريقيا في رحلة التحول الرقمي
              من خلال دمج الذكاء الاصطناعي مع الخبرة البشرية المتخصصة.
            </p>
          </div>

          {/* Contact Section */}
          <div className="bg-primary-50 rounded-2xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">تواصل معنا مباشرة</h2>
              <p className="text-xl text-secondary-600">
                تحدث معنا مباشرة على واتساب للحصول على استشارة مجانية
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold mb-6">معلومات التواصل</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="text-primary-600 ml-4 mt-1" size={24} />
                    <div>
                      <h4 className="font-semibold mb-1">العنوان</h4>
                      <p className="text-secondary-600">
                        حائل، حي الشفا، الرمز البريدي 55437
                        <br />
                        مبنى رقم 5646، 7217
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="text-primary-600 ml-4 mt-1" size={24} />
                    <div>
                      <h4 className="font-semibold mb-1">واتساب</h4>
                      <p className="text-secondary-600">
                        +966555056545
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="text-primary-600 ml-4 mt-1" size={24} />
                    <div>
                      <h4 className="font-semibold mb-1">البريد الإلكتروني</h4>
                      <p className="text-secondary-600">
                        support@hndasah.com
                        <br />
                        sales@hndasah.com
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <h4 className="text-xl font-bold mb-4">ساعات العمل</h4>
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
              
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="text-center">
                  <MessageCircle className="mx-auto text-primary-600 mb-4" size={48} />
                  <h3 className="text-2xl font-bold mb-4">تحدث معنا مباشرة</h3>
                  <p className="text-secondary-600 mb-6">
                    انقر على الرابط أدناه للتواصل معنا مباشرة على واتساب
                  </p>
                  
                  <a 
                    href="https://wa.me/966555056545" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center btn-primary text-lg px-8 py-4"
                  >
                    <MessageCircle className="ml-2" size={24} />
                    تواصل معنا على واتساب
                  </a>
                  
                  <p className="text-sm text-secondary-500 mt-4">
                    سنجيب على استفسارك في أقرب وقت ممكن
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
