import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/layout/Layout';
import {
  Settings,
  Users,
  TrendingUp,
  Heart,
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  Clock,
  Target,
  Award,
  Zap,
  BarChart,
  Stethoscope,
  Activity,
  UserCheck,
  Cog,
  Lightbulb,
  UserPlus
} from 'lucide-react';

const MedicalOperationsPage: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-800 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/10 p-4 rounded-full">
                <Stethoscope size={48} className="text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              نظم الهندسة المبتكرة
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-emerald-100">
              ريادة الأداء الطبي، واستثنائية في تجربة المريض
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
              <h2 className="text-3xl font-bold mb-6">شركاء في تحقيق التميز التشغيلي والرعاية المركزة حول المريض</h2>
              <div className="w-24 h-1 bg-emerald-600 mx-auto mb-8"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg text-secondary-600 leading-relaxed">
                  في عالم الرعاية الصحية سريع التطور، لم يعد النجاح يقاس بجودة الخدمات الطبية فحسب، بل بكفاءة تقديم هذه الخدمات ومدى رضا من نقدم لهم هذه الرعاية: <strong className="text-emerald-600">المرضى وذويهم</strong>.
                </p>
                <p className="text-lg text-secondary-600 leading-relaxed">
                  تُعد <strong className="text-emerald-600">نظم الهندسة المبتكرة</strong> شريكًا استراتيجيًا رائدًا متخصصًا في تقديم حلول متكاملة لـ <strong className="text-emerald-600">"التشغيل الطبي"</strong> و <strong className="text-emerald-600">"تجربة المرضى"</strong>.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-emerald-50 p-6 rounded-lg text-center">
                  <Settings className="text-emerald-600 mx-auto mb-3" size={32} />
                  <h3 className="font-bold text-emerald-800">كفاءة التشغيل</h3>
                </div>
                <div className="bg-emerald-50 p-6 rounded-lg text-center">
                  <Heart className="text-emerald-600 mx-auto mb-3" size={32} />
                  <h3 className="font-bold text-emerald-800">تجربة المريض</h3>
                </div>
                <div className="bg-emerald-50 p-6 rounded-lg text-center">
                  <TrendingUp className="text-emerald-600 mx-auto mb-3" size={32} />
                  <h3 className="font-bold text-emerald-800">الأداء الطبي</h3>
                </div>
                <div className="bg-emerald-50 p-6 rounded-lg text-center">
                  <Award className="text-emerald-600 mx-auto mb-3" size={32} />
                  <h3 className="font-bold text-emerald-800">التميز الصحي</h3>
                </div>
              </div>
            </div>

            <div className="mt-12 p-8 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg border border-emerald-200">
              <p className="text-lg text-secondary-700 leading-relaxed text-center">
                نحن نعمل جنبًا إلى جنب مع مؤسساتكم الصحية لتحقيق أقصى درجات الكفاءة التشغيلية، وبناء تجربة مرضية استثنائية تضعكم في الصدارة التنافسية وتعزز سمعة مؤسستكم كوجهة رعاية صحية موثوقة.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Philosophy */}
      <section className="py-16 bg-secondary-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">فلسفتنا الأساسية</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm border border-secondary-200">
                <Cog className="text-emerald-600 mx-auto mb-4" size={48} />
                <h3 className="text-xl font-bold mb-4">كفاءة التشغيل الطبي</h3>
                <p className="text-secondary-600">التي تضمن الدقة والسرعة في تقديم الخدمات الصحية</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm border border-secondary-200">
                <Heart className="text-emerald-600 mx-auto mb-4" size={48} />
                <h3 className="text-xl font-bold mb-4">استثنائية تجربة المريض</h3>
                <p className="text-secondary-600">التي تبني الثقة والولاء وتجعل المريض محور كل قرار</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">خدماتنا: هندسة مستقبل الرعاية الصحية</h2>
            <p className="text-xl text-secondary-600">
              حلول متكاملة للتشغيل الطبي وتجربة المرضى
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Medical Operations Management */}
            <ServiceCard
              icon={<Settings size={48} />}
              title="استشارات وإدارة التشغيل الطبي"
              description="نحول التحديات التشغيلية إلى فرص للنمو والكفاءة"
              features={[
                'تحسين وتصميم العمليات: تحليل وإعادة هندسة المسارات التشغيلية (للمرضى، والموارد، والمعلومات) لضمان سلاسة العمل وخفض التكاليف.',
                'الاستفادة المثلى من الموارد: إدارة الجداول الطبية، وتخصيص الكوادر البشرية، وتحسين استخدام الغرف والمرافق لزيادة الإنتاجية.',
                'إدارة سلاسل الإمداد الطبية: ضمان توفير المستلزمات والأدوية في الوقت والمكان المناسبين، مع التحكم في التكاليف.',
                'التحول الرقمي: استشارات اختيار وتنفيذ الأنظمة التقنية (مثل أنظمة ERP، وأنظمة إدارة المستشفيات HMIS) لتحويل العمليات اليدوية إلى عمليات رقمية ذكية.'
              ]}
              color="bg-emerald-500"
              badge="الأكثر طلباً"
            />

            {/* Patient Experience Programs */}
            <ServiceCard
              icon={<Users size={48} />}
              title="برامج تحسين تجربة المرضى"
              description="نضع المريض في قلب اهتمامكم، لأن المريض الراضي هو أفضل سفير لعلامتكم التجارية"
              features={[
                'قياس وتحليل تجربة المريض: تصميم وتنفيذ استبيانات علمية (مثل NPS، Press Ganey) لجمع الملاحظات وتحليلها بشكل استباقي.',
                'تطوير المسار الشامل للمريض: تحسين كل نقطة اتصال بين المريض ومؤسستكم، من الحجز الإلكتروني وحتى المتابعة ما بعد الخدمة.',
                'برامج تدريب الكوادر: تأهيل الطاقم الطبي والإداري على مهارات التواصل والتعاطف والخدمة المتميزة لضمان تفاعل إيجابي مع كل مريض.',
                'بناء واستراتيجية العلامة التجارية للمؤسسة الصحية: صياغة رسالة مؤسسية قائمة على الثقة والشفافية تعكس التزامكم براحة المرضى ورضاهم.'
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
              icon={<Award size={32} />}
              title="خبرة عملية عميقة"
              description="فريقنا مكون من خبراء في إدارة المستشفيات، والجودة الصحية، وعلم سلوك المريض، يمتلكون فهمًا دقيقًا للتحديات الفريدة التي تواجه القطاع الصحي في منطقتنا."
            />
            <WhyChooseCard
              icon={<Zap size={32} />}
              title="نهج متكامل"
              description="نربط بشكل وثيق بين كفاءة التشغيل وجودة تجربة المريض، فلا يمكن تحقيق تجربة متميزة بنظام تشغيلي معقد، والعكس صحيح."
            />
            <WhyChooseCard
              icon={<Target size={32} />}
              title="حلول مخصصة"
              description="نرفض النمطية. نعمل على تحليل الوضع القائم لمؤسستكم بدقة لنصمم حلولًا تناسب احتياجاتكم الخاصة وأهدافكم الاستراتيجية."
            />
            <WhyChooseCard
              icon={<BarChart size={32} />}
              title="الأثر القابل للقياس"
              description="نلتزم بتقديم تقارير دورية واضحة تعكس التقدم في مؤشرات الأداء الرئيسية (KPIs) مثل: زمن الانتظار، نسبة رضا المرضى، كفاءة استخدام الموارد، وغيرها."
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
                <Lightbulb className="text-emerald-600 mx-auto mb-4" size={48} />
                <h3 className="text-xl font-bold mb-3">شعار 1</h3>
                <p className="text-lg text-emerald-800">
                  "من كفاءة العمليات إلى ابتسامة المريض: نصنع الفرق."
                </p>
              </div>
              <div className="bg-gradient-to-r from-emerald-100 to-teal-100 p-8 rounded-lg border border-emerald-200">
                <Zap className="text-emerald-600 mx-auto mb-4" size={48} />
                <h3 className="text-xl font-bold mb-3">شعار 2</h3>
                <p className="text-lg text-emerald-800">
                  "نحلل. نخطط. ننفذ. نقيس النجاح. نضمن رضاكم ورضا مرضاكم."
                </p>
              </div>
            </div>

            <div className="mt-8 p-8 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg border border-emerald-200">
              <UserPlus className="text-emerald-600 mx-auto mb-4" size={48} />
              <h3 className="text-xl font-bold mb-3">نقطة قوة</h3>
              <p className="text-lg text-secondary-700">
                "لا نكتفي بتحسين الأنظمة، بل نهتم بتغيير السلوكيات لبناء ثقافة مؤسسية تركز على المريض."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">شريككم نحو التميز الصحي</h2>
          <p className="text-xl mb-8 text-emerald-100">
            لنبدأ معًا رحلة تحول ناجحة ترفع من كفاءة مؤسستكم وتجعل تجربة المرضى لديكم قصة نجاح يُحكى عنها.
          </p>
          <div className="mb-8">
            <p className="text-lg mb-4">
              <strong>"كفاءتنا تشغل مؤسستكم، واهتمامنا يرضي مرضاكم."</strong>
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn bg-white text-emerald-700 hover:bg-emerald-50 text-lg px-8 py-4">
              اتصلوا بنا اليوم لترتيب جلسة استشارية أولية
            </Link>
          </div>

          <div className="mt-8 p-6 bg-white/10 rounded-lg">
            <p className="text-emerald-100 mb-2">نداء للعمل:</p>
            <p className="text-lg">
              "لنتحدث عن كيفية تحويل التحديات التشغيلية وتجارب المرضى إلى نقاط قوة لمؤسستكم."
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

export default MedicalOperationsPage;
