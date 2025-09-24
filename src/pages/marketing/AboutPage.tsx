import React from 'react';
import { useTranslation } from 'react-i18next';
import Layout from '../../components/layout/Layout';
import { Shield, Award, Clock, CheckCircle } from 'lucide-react';

const AboutPage: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <Layout>
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">من نحن</h1>
            <p className="text-xl text-secondary-600">
              منصة متخصصة في مساعدة الاستشاريين على إعداد وثائق المناقصات بكفاءة عالية
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-2xl font-bold mb-4">مهمتنا</h2>
              <p className="text-lg text-secondary-600 mb-6">
                نسعى لتمكين الاستشاريين من تقديم عروضهم بشكل احترافي ومتوافق مع متطلبات منصة اعتماد،
                من خلال توفير قوالب وأدوات متخصصة تضمن الجودة والدقة في إعداد المستندات.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <CheckCircle className="text-primary-600 ml-2" size={20} />
                  <span>قوالب معتمدة ومتوافقة مع متطلبات اعتماد</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-primary-600 ml-2" size={20} />
                  <span>دعم فني متخصص على مدار الساعة</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-primary-600 ml-2" size={20} />
                  <span>تحديثات مستمرة لمواكبة المتطلبات الجديدة</span>
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
              <Shield className="mx-auto text-primary-600 mb-4" size={40} />
              <h3 className="text-xl font-bold mb-2">موثوقية عالية</h3>
              <p className="text-secondary-600">
                قوالب معتمدة ومراجعة من قبل خبراء في مجال المناقصات
              </p>
            </div>
            <div className="text-center p-6 bg-primary-50 rounded-lg">
              <Award className="mx-auto text-primary-600 mb-4" size={40} />
              <h3 className="text-xl font-bold mb-2">جودة متميزة</h3>
              <p className="text-secondary-600">
                معايير جودة عالية تضمن قبول العروض في منصة اعتماد
              </p>
            </div>
            <div className="text-center p-6 bg-primary-50 rounded-lg">
              <Clock className="mx-auto text-primary-600 mb-4" size={40} />
              <h3 className="text-xl font-bold mb-2">توفير الوقت</h3>
              <p className="text-secondary-600">
                تسريع عملية إعداد المستندات مع الحفاظ على الجودة
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-8">شركاؤنا في النجاح</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {/* Add partner logos here */}
              <div className="h-20 bg-secondary-100 rounded-lg flex items-center justify-center">
                شريك 1
              </div>
              <div className="h-20 bg-secondary-100 rounded-lg flex items-center justify-center">
                شريك 2
              </div>
              <div className="h-20 bg-secondary-100 rounded-lg flex items-center justify-center">
                شريك 3
              </div>
              <div className="h-20 bg-secondary-100 rounded-lg flex items-center justify-center">
                شريك 4
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;