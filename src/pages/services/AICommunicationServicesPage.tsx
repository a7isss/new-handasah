import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Layout from '../../components/layout/Layout';
import {
  MessageSquare,
  Phone,
  Bot,
  Brain,
  Users,
  Heart,
  CheckCircle,
  ArrowRight,
  Zap,
  TrendingUp,
  Calendar,
  BarChart,
  Settings,
  Smartphone
} from 'lucide-react';

const AICommunicationServicesPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/10 p-4 rounded-full">
                <Brain size={48} className="text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              خدمات التواصل الذكي
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-indigo-100">
              تجربة تواصل متعددة القنوات مدعومة بالذكاء الاصطناعي لتحسين خدمة العملاء ورضا المرضى
            </p>
            <Link to="/signup" className="btn bg-white text-indigo-700 hover:bg-indigo-50 text-lg px-8 py-4">
              بدء تشغيل الوكلاء الذكيين
            </Link>
          </div>
        </div>
      </section>

      {/* AI Agents Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">وكلاؤنا الأذكياء المتخصصون</h2>
            <p className="text-xl text-secondary-600">
              خمسة وكلاء ذكيين متخصصين في قنوات التواصل المختلفة لتلبية احتياجاتك التجارية
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Sales Agent */}
            <AgentCard
              icon={<TrendingUp size={48} />}
              title="وكيل المبيعات الذكي"
              description="مكالمات صادرة لتوليد العملاء المحتملين وتأهيل العملاء"
              features={[
                'مكالمات صادرة للعملاء المحتملين',
                'تأهيل العملاء وتصنيفهم',
                'عروض مخصصة حسب الاحتياج',
                'متابعة دورية للعملاء',
                'تقارير مفصلة عن الأداء'
              ]}
              color="bg-orange-500"
              badge="الأكثر فعالية"
            />

            {/* Receptionist Agent */}
            <AgentCard
              icon={<Users size={48} />}
              title="موظف الاستقبال الذكي"
              description="استقبال المكالمات الواردة وحجز المواعيد وتوجيه المكالمات"
              features={[
                'استقبال المكالمات الواردة',
                'حجز المواعيد التلقائي',
                'توجيه المكالمات للأقسام',
                'الرد على الاستفسارات الشائعة',
                'خدمة 24/7 بدون انقطاع'
              ]}
              color="bg-blue-500"
            />

            {/* WhatsApp Marketing Agent */}
            <AgentCard
              icon={<MessageSquare size={48} />}
              title="وكيل التسويق عبر واتساب"
              description="حملات تسويقية ذكية ورسائل تفاعلية مخصصة"
              features={[
                'حملات جماعية مخصصة',
                'رسائل ترويجية تفاعلية',
                'متابعة شخصية للعملاء',
                'تحليلات الأداء المتقدمة',
                'تكامل مع قاعدة البيانات'
              ]}
              color="bg-green-500"
            />

            {/* Business WhatsApp Agent */}
            <AgentCard
              icon={<Settings size={48} />}
              title="وكيل الأعمال عبر واتساب"
              description="إشعارات تجارية مؤتمتة من أنظمة ERP"
              features={[
                'تنبيهات المخزون التلقائية',
                'إشعارات الفواتير والمدفوعات',
                'موافقات الإجازات HR',
                'تحديثات العملاء الفورية',
                'تكامل ERP سلس'
              ]}
              color="bg-purple-500"
            />

            {/* Healthcare Survey Agent */}
            <AgentCard
              icon={<Heart size={48} />}
              title="روبوت استطلاع الرضا الطبي"
              description="استطلاعات رضا المرضى التلقائية بعد الزيارة"
              features={[
                'استطلاعات رضا المرضى عبر المكالمات والواتساب',
                'متابعة ما بعد الزيارة',
                'تقييم جودة الخدمة',
                'تحليل مستوى الرضا الشامل',
                'تقارير للإدارة الطبية'
              ]}
              color="bg-red-500"
              badge="للقطاع الصحي"
            />
          </div>
        </div>
      </section>

      {/* Communication Channels */}
      <section className="py-16 bg-secondary-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">قنوات التواصل المتعددة</h2>
            <p className="text-xl text-secondary-600">
              رسائل نصية، مكالمات صوتية، وتكامل ذكي مع أنظمة الأعمال
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ChannelCard
              icon={<MessageSquare size={32} />}
              title="خدمات واتساب المتكاملة"
              description="تكامل ذكي مع أنظمة ERP للتسويق والإشعارات التجارية المؤتمتة"
              features={[
                'حملات تسويقية ذكية',
                'إشعارات تجارية مؤتمتة',
                'متابعة العملاء الشخصية',
                'تحليلات الأداء المتقدمة'
              ]}
              color="bg-green-50 border-green-200"
            />
            <ChannelCard
              icon={<Phone size={32} />}
              title="خدمات المكالمات الآلية"
              description="وكلاء ذكيون للمبيعات والاستقبال واستطلاعات الرضا"
              features={[
                'مكالمات صادرة آلية',
                'استقبال المكالمات الذكي',
                'حجز المواعيد التلقائي',
                'استطلاعات رضا المرضى'
              ]}
              color="bg-purple-50 border-purple-200"
            />
          </div>
        </div>
      </section>

      {/* Integration Examples */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">أمثلة التكامل الذكي</h2>
            <p className="text-xl text-secondary-600">
              كيف يتكامل النظام مع أنظمتك الحالية ويعزز التواصل مع العملاء
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <IntegrationExample
              title="دورة المبيعات الذكية"
              description="CRM → وكيل المبيعات → مكالمات مخصصة → تحديث قاعدة البيانات"
              steps={[
                'تحليل بيانات العملاء في CRM',
                'توليد العملاء المحتملين بالذكاء الاصطناعي',
                'مكالمات مخصصة لتأهيل العملاء',
                'تحديث نتائج المكالمات تلقائياً'
              ]}
            />
            <IntegrationExample
              title="الرعاية الصحية المتكاملة"
              description="نظام EHR → وكيل الرضا → استطلاعات ما بعد الزيارة → التحسين المستمر"
              steps={[
                'استخراج بيانات الزيارات من EHR',
                'إرسال استطلاعات رضا ذكية',
                'تحليل النتائج وحساب مؤشرات الرضا',
                'تقارير لتحسين جودة الخدمة'
              ]}
            />
            <IntegrationExample
              title="التسويق المتكامل"
              description="ERP → وكيل واتساب → حملات مخصصة → تتبع النتائج"
              steps={[
                'جمع بيانات العملاء من ERP',
                'تصفية العملاء المستهدفين بالذكاء الاصطناعي',
                'إرسال حملات واتساب مخصصة',
                'قياس معدل التحويل والعائد على الاستثمار'
              ]}
            />
            <IntegrationExample
              title="إدارة المواعيد الذكية"
              description="نظام الحجز → موظف الاستقبال الذكي → تذكيرات متسلسلة → تقليل معدل الغياب"
              steps={[
                'تلقي حجوزات جديدة من النظام',
                'إرسال تذكيرات ذكية عبر الواتساب',
                'مكالمات تأكيد قبل الزيارة',
                'متابعة وإعادة جدولة عند الحاجة'
              ]}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">جاهز لثورة التواصل الذكي؟</h2>
          <p className="text-xl text-secondary-600 mb-8">
            حول تجربتك مع العملاء إلى تجربة استثنائية مع الوكلاء الذكيين المتخصصين في قنوات التواصل المتعددة
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup" className="btn-primary text-lg px-8 py-4">
              بدء التشغيل الآن
            </Link>
            <Link to="/contact" className="btn-outline text-lg px-8 py-4">
              التحدث مع خبير
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

interface AgentCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  color: string;
  badge?: string;
}

const AgentCard: React.FC<AgentCardProps> = ({ icon, title, description, features, color, badge }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-sm border border-secondary-200 transition-all duration-300 hover:shadow-lg relative">
      {badge && (
        <div className="absolute -top-3 right-4 bg-accent-500 text-white text-sm py-1 px-3 rounded-full">
          {badge}
        </div>
      )}

      <div className={`inline-block p-4 ${color} text-white rounded-full mb-6`}>
        {icon}
      </div>

      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-secondary-600 mb-6">{description}</p>

      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <CheckCircle className="text-primary-600 ml-2 mt-1 flex-shrink-0" size={16} />
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>

      <Link
        to="/signup"
        className="btn-primary w-full text-center flex items-center justify-center gap-2"
      >
        بدأ المشروع
        <ArrowRight size={16} />
      </Link>
    </div>
  );
};

interface ChannelCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  color: string;
}

const ChannelCard: React.FC<ChannelCardProps> = ({ icon, title, description, features, color }) => {
  return (
    <div className={`p-8 rounded-lg border-2 transition-all duration-300 hover:shadow-lg ${color}`}>
      <div className="flex items-center mb-6">
        <div className="p-3 bg-white rounded-full shadow-sm ml-4">
          {icon}
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>

      <p className="text-secondary-600 mb-6">{description}</p>

      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <CheckCircle className="text-primary-600 ml-2 mt-1 flex-shrink-0" size={16} />
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

interface IntegrationExampleProps {
  title: string;
  description: string;
  steps: string[];
}

const IntegrationExample: React.FC<IntegrationExampleProps> = ({ title, description, steps }) => {
  return (
    <div className="bg-secondary-50 p-8 rounded-lg border border-secondary-200">
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-secondary-600 mb-6">{description}</p>
      <div className="space-y-4">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center">
            <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold ml-3 flex-shrink-0">
              {index + 1}
            </div>
            <span className="text-sm">{step}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AICommunicationServicesPage;
