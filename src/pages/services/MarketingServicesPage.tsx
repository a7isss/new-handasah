import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/layout/Layout';
import {
  Settings,
  Users,
  TrendingUp,
  Target,
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  Clock,
  Share2,
  Award,
  Zap,
  BarChart,
  Megaphone,
  Activity,
  Mail,
  Cog,
  Lightbulb,
  UserPlus,
  MessageSquare,
  Eye,
  Send
} from 'lucide-react';

const MarketingServicesPage: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-800 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/10 p-4 rounded-full">
                <Megaphone size={48} className="text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              خدمات التسويق الذكية بالذكاء الاصطناعي
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-emerald-100">
              تدفقات تسويقية محسّنة بالذكاء الاصطناعي لنتائج لا تُقاوم
            </p>
            <Link to="/contact" className="btn bg-white text-emerald-700 hover:bg-emerald-50 text-lg px-8 py-4">
              اتصلوا بنا اليوم
            </Link>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">ثورة التسويق الذكي في عصر الذكاء الاصطناعي</h2>
              <div className="w-24 h-1 bg-emerald-600 mx-auto mb-8"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg text-secondary-600 leading-relaxed">
                  في عصر المنافسة الشرسة والتفاعل المستمر بين العلامات التجارية والعملاء، لم تعد الحملات التسويقية التقليدية كافية لتحقيق النجاح. نحن في <strong className="text-emerald-600">نظم الهندسة المبتكرة</strong> نستخدم قوة الذكاء الاصطناعي لإعادة صياغة تجربة التسويق الخاصة بكم.
                </p>
                <p className="text-lg text-secondary-600 leading-relaxed">
                  متخصصون في إنشاء <strong className="text-emerald-600">تدفقات تسويقية ذكية</strong> تحول العملاء المحتملين إلى عملاء مخلصين بكفاءة قصوى ونتائج لا تُقاوم.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-emerald-50 p-6 rounded-lg text-center">
                  <Target className="text-emerald-600 mx-auto mb-3" size={32} />
                  <h3 className="font-bold text-black">التسويق بالذكاء الاصطناعي</h3>
                </div>
                <div className="bg-emerald-50 p-6 rounded-lg text-center">
                  <MessageSquare className="text-emerald-600 mx-auto mb-3" size={32} />
                  <h3 className="font-bold text-black">التخصيص الشخصي</h3>
                </div>
                <div className="bg-emerald-50 p-6 rounded-lg text-center">
                  <BarChart className="text-emerald-600 mx-auto mb-3" size={32} />
                  <h3 className="font-bold text-black">التحليلات المتقدمة</h3>
                </div>
                <div className="bg-emerald-50 p-6 rounded-lg text-center">
                  <Zap className="text-emerald-600 mx-auto mb-3" size={32} />
                  <h3 className="font-bold text-black">التنفيذ الآلي</h3>
                </div>
              </div>
            </div>

            <div className="mt-12 p-8 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg border border-emerald-200">
              <p className="text-lg text-secondary-700 leading-relaxed text-center">
                من خلال برامجنا التسويقية الذكية، نساعد الشركات من جميع الأحجام في تحقيق مؤشرات الأداء الرئيسية (KPIs) المستهدفة، وزيادة معدلات التحويل، وتعزيز وجودها الرقمي بطرق مبتكرة وفعالة.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Philosophy */}
      <section className="py-16 bg-secondary-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">فلسفتنا في التسويق الذكي</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm border border-secondary-200">
                <Eye className="text-emerald-600 mx-auto mb-4" size={48} />
                <h3 className="text-xl font-bold mb-4">التسويق التنبؤي بالذكاء الاصطناعي</h3>
                <p className="text-secondary-600">تحليلات متقدمة تتنبأ باحتياجات العملاء وتتنبأ بالفرص التسويقية قبل حدوثها</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm border border-secondary-200">
                <Send className="text-emerald-600 mx-auto mb-4" size={48} />
                <h3 className="text-xl font-bold mb-4">التخصيص الدقيق</h3>
                <p className="text-secondary-600">رسائل مخصصة تصل للعميل المناسب في التوقيت المثالي عبر القناة المفضلة</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">خدماتنا: حلول التسويق الذكي</h2>
            <p className="text-xl text-secondary-600">
              تدفقات تسويقية خصوصة بالذكاء الاصطناعي لنتائج لا تقاوم
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* AI-Powered Marketing Content */}
            <ServiceCard
              icon={<Mail size={48} />}
              title="التسويق المحتوى الذكي بالذكاء الاصطناعي"
              description="إنشاء محتوى تسويقي مخصص وجذاب لكل عميل باستخدام ذكاء اصطناعي متقدم"
              features={[
                'إنشاء المحتوى الأوتوماتيكي: إنتاج محتوى تفاعلي وجذاب لأغراض التسويق عبر البريد الإلكتروني والوسائط الاجتماعية بكفاءة عالية.',
                'التخصيص الذكي: تخصيص المحتوى بناءً على سلوك العملاء وتفضيلاتهم من خلال خوارزميات ذكية تتعلم وتتحسن',
                'تحسين محركات البحث: مُحسنات محركات البحث المدعومة بالذكاء الاصطناعي لزيادة الظهور والوصول للعملاء',
                'توقع احتياجات العملاء: تحليل البيانات للتنبؤ باحتياجات العملاء وإنشاء محتوى مسبق لهذه الاحتياجات'
              ]}
              color="bg-emerald-500"
              badge="الأكثر طلباً"
            />

            {/* AI Marketing Automation */}
            <ServiceCard
              icon={<Share2 size={48} />}
              title="التسويق عبر وسائل التواصل الاجتماعي المؤتمت"
              description="أتمتة حملات وسائل التواصل الاجتماعي باستخدام الذكاء الاصطناعي لنتائج استثنائية"
              features={[
                'الجدولة الذكية: تحديد أوقات النشر المثالية تلقائياً باستخدام تحليلات الذكاء الاصطناعي',
                'المحتوى المخصص: إنشاء محتوى مخصص لكل شريحة عملاء على منصات مختلفة',
                'التفاعل الآلي: الرد الذكي على التعليقات والرسائل باستخدام روبوتات الدردشة المطورة',
                'قياس الأداء: تحليلات مفصلة لقياس فعالية الحملات وتحسينها تلقائياً'
              ]}
              color="bg-teal-500"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">لماذا تختارون نظم الهندسة المبتكرة؟</h2>
            <p className="text-xl text-secondary-600">
              لأننا لا نقدم حلولًا نظرية، بل ننفذ استراتيجيات قابلة للقياس تحقق عائد استثمار ملموس
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <WhyChooseCard
              icon={<Eye size={32} />}
              title="تحليلات ذكية متقدمة"
              description="نستخدم خوارزميات التعلم الآلي لفهم سلوك العملاء بعمق وتنبؤ باحتياجاتهم قبل ظهورها"
            />
            <WhyChooseCard
              icon={<Zap size={32} />}
              title="أتمتة متقدمة"
              description="نتولى جميع عمليات التسويق كي يتمكن فريقكم من التركيز على أهداف الأعمال الأساسية والابتكار"
            />
            <WhyChooseCard
              icon={<Target size={32} />}
              title="تخصيص دقيق"
              description="خدمات مخصصة بناءً على بياناتك الفريدة وأهدافك التسويقية المحددة لتحقيق أفضل عائد استثمار ممكن"
            />
            <WhyChooseCard
              icon={<BarChart size={32} />}
              title="قياس دقيق للنتائج"
              description="تقارير مفصلة وشاملة تبين تأثير حملاتكم التسويقية والتنبؤ بأداء حملات المستقبل باستخدام الذكاء الاصطناعي"
            />
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">نقاط بارزة</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-r from-emerald-100 to-teal-100 p-8 rounded-lg border border-emerald-200">
                <Target className="text-emerald-600 mx-auto mb-4" size={48} />
                <h3 className="text-xl font-bold mb-3">تدفقات التسويق الذكية</h3>
                <p className="text-lg text-black">
                  "من النقطة الأولى إلى التحويل النهائي: ندير رحلة العميل الذكية."
                </p>
              </div>
              <div className="bg-gradient-to-r from-emerald-100 to-teal-100 p-8 rounded-lg border border-emerald-200">
                <BarChart className="text-emerald-600 mx-auto mb-4" size={48} />
                <h3 className="text-xl font-bold mb-3">نتائج قابلة للقياس</h3>
                <p className="text-lg text-black">
                  "نقيس. نعزز. نتفوق. نحقق عائد استثمار يتجاوز توقعاتكم دائماً."
                </p>
              </div>
            </div>

            <div className="mt-8 p-8 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg border border-emerald-200">
              <Activity className="text-emerald-600 mx-auto mb-4" size={48} />
              <h3 className="text-xl font-bold mb-3">تميز في التنفيذ</h3>
              <p className="text-lg text-secondary-700">
                "لا نكتفي بالأدوات، بل نطور استراتیجیات ثورية تحول البيانات إلى قرارات ونتائج ملموسیة."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">شريككم نحو التميز التسويقي</h2>
          <p className="text-xl mb-8 text-emerald-100">
            لنبدأ معًا رحلة تحول تسويقي ناجح يرفع من زيادة المبيعات وتعزيز مكانتكم في السوق.
          </p>
          <div className="mb-8">
            <p className="text-lg mb-4">
              <strong>"الخوارزميات تدير حملاتكم، والذكاء الاصطناعي ينمو أعمالكم."</strong>
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn bg-white text-emerald-700 hover:bg-emerald-50 text-lg px-8 py-4">
              احجز استشارة تسويقية مجانية
            </Link>
          </div>

          <div className="mt-8 p-6 bg-white/10 rounded-lg">
            <p className="text-emerald-100 mb-2">ابدأ رحلتك التسويقية:</p>
            <p className="text-lg">
              "دعونا نناقش كيف نحول استراتيجياتك التسويقية إلى تدفقات ذكية مؤتمتة تحقق نتائج استثنائية."
            </p>
          </div>
        </div>
      </section>

      {/* Navigation Footer */}
      <section className="py-12 bg-secondary-50 border-t border-secondary-200">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <Link to="/services" className="flex items-center text-emerald-600 hover:text-emerald-700 font-medium">
                <ArrowLeft size={16} className="ml-2" />
                العودة إلى الخدمات
              </Link>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-secondary-800 mb-3">خدمات ذات صلة</h3>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/services/ai-communication" className="text-emerald-600 hover:text-emerald-700 border-b border-emerald-600 hover:border-emerald-700">
                  خدمات التواصل الذكي
                </Link>
                <Link to="/services/ensure/medical-coding" className="text-emerald-600 hover:text-emerald-700 border-b border-emerald-600 hover:border-emerald-700">
                  خدمات الترميز الطبي
                </Link>
                <Link to="/services/ensure/healthcare-analytics" className="text-emerald-600 hover:text-emerald-700 border-b border-emerald-600 hover:border-emerald-700">
                  تحليلات الرعاية الصحية
                </Link>
              </div>
            </div>
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
  color: string;
  badge?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, features, color, badge }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-sm border border-secondary-200 transition-all duration-300 hover:shadow-lg relative">
      {badge && (
        <div className="absolute -top-3 right-4 bg-emerald-500 text-white text-sm py-1 px-3 rounded-full">
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
            <CheckCircle className="text-emerald-600 ml-2 mt-1 flex-shrink-0" size={16} />
            <span className="text-sm leading-relaxed">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

interface WhyChooseCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const WhyChooseCard: React.FC<WhyChooseCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-sm border border-secondary-200 text-center transition-all duration-300 hover:shadow-lg">
      <div className="inline-block p-3 bg-emerald-100 text-emerald-600 rounded-full mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-bold mb-3">{title}</h3>
      <p className="text-secondary-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export default MarketingServicesPage;
