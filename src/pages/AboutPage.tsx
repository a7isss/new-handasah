import React from 'react';
import { useTranslation } from 'react-i18next';
import Layout from '../components/layout/Layout';
import { Shield, Award, Clock, CheckCircle, Users, Bot, Zap } from 'lucide-react';

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
          
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">{t('about.vision')}</h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              أن نكون الشريك الأول للشركات في منطقة الشرق الأوسط وشمال أفريقيا في رحلة التحول الرقمي
              من خلال دمج الذكاء الاصطناعي مع الخبرة البشرية المتخصصة.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;