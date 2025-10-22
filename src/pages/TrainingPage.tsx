import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Layout from '../components/layout/Layout';
import { CheckCircle, Users, Zap, Award, Clock, BookOpen, Target, TrendingUp } from 'lucide-react';

const TrainingPage: React.FC = () => {
  const { t, ready } = useTranslation();
  
  if (!ready) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary-600">جاري التحميل...</div>
          </div>
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-100 to-white text-black py-16 md:py-24">
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-black">
              تدريب إدارة دورة الإيرادات الطبية (RCM)
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-black">
              احترف إدارة الإيرادات الطبية مع برنامج التدريب المتقدم
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn bg-accent-600 text-white hover:bg-accent-700">
                سجل الآن
              </Link>
              <Link to="#program-details" className="btn bg-transparent border border-accent-600 text-accent-600 hover:bg-accent-50">
                تعرف على البرنامج
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Quick Stats */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <StatCard
              icon={<TrendingUp size={32} />}
              value="25%"
              label="زيادة الإيرادات"
            />
            <StatCard
              icon={<Target size={32} />}
              value="40%"
              label="تقليل رفض المطالبات"
            />
            <StatCard
              icon={<Zap size={32} />}
              value="60%"
              label="تحسين الكفاءة"
            />
            <StatCard
              icon={<Users size={32} />}
              value="500+"
              label="متدرب متميز"
            />
          </div>
        </div>
      </section>
      
      {/* Why Choose Our Training */}
      <section className="py-16 bg-primary-100" id="program-details">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-black">لماذا تختار برنامجنا التدريبي؟</h2>
            <p className="text-xl text-black">
              برنامج تدريبي متكامل يمنحك المهارات اللازمة لتحقيق التميز في إدارة دورة الإيرادات الطبية
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<BookOpen />}
              title="تدريب عملي تطبيقي"
              description="سيناريوهات حقيقية من بيئة العمل، مشاريع عملية، ودراسات حالة من مؤسسات رائدة"
            />
            <FeatureCard
              icon={<Zap />}
              title="دمج الذكاء الاصطناعي"
              description="استخدام أحدث أدوات الذكاء الاصطناعي في RCM، أتمتة العمليات المتكررة، وتحسين الدقة والكفاءة"
            />
            <FeatureCard
              icon={<Award />}
              title="شهادات معتمدة"
              description="شهادة إتمام البرنامج التدريبي، شهادة متخصص في إدارة دورة الإيرادات الطبية، واعتماد من جهات متخصصة"
            />
            <FeatureCard
              icon={<Users />}
              title="تدريب مخصص"
              description="مجموعات صغيرة لضمان جودة التدريب، مدربين خبراء في القطاع الصحي، ومتابعة شخصية وتقييم مستمر"
            />
            <FeatureCard
              icon={<Clock />}
              title="مرونة في التدريب"
              description="نظام تدريب هجين (أونلاين + وجاهي)، مدة البرنامج 6 أسابيع (48 ساعة تدريبية)"
            />
            <FeatureCard
              icon={<CheckCircle />}
              title="نتائج مضمونة"
              description="تحسين ملموس في الأداء، رضا عالي للمتدربين، وشهادات معتمدة ومعترف بها"
            />
          </div>
        </div>
      </section>
      
      {/* What You'll Learn */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-black">ما الذي ستتعلمه؟</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <LearningModule
              title="الوحدة الأولى: أساسيات إدارة دورة الإيرادات الطبية"
              items={[
                'فهم دورة الإيرادات من البداية إلى النهاية',
                'معايير الترميز الطبي (ICD-10-CM/ICD-10-AM)',
                'إجراءات الفوترة والتسعير',
                'الامتثال التنظيمي والمتطلبات القانونية'
              ]}
            />
            <LearningModule
              title="الوحدة الثانية: الترميز الطبي المتقدم"
              items={[
                'الترميز الدقيق باستخدام الذكاء الاصطناعي',
                'تجنب الأخطاء الشائعة في الترميز',
                'تحسين جودة التوثيق السريري',
                'استخدام أدوات الترميز الذكية'
              ]}
            />
            <LearningModule
              title="الوحدة الثالثة: إدارة المطالبات والتحصيل"
              items={[
                'استراتيجيات منع رفض المطالبات',
                'إجراءات المتابعة الفعالة',
                'تحليل أسباب الرفض وإجراءات التصحيح',
                'تحسين معدلات التحصيل'
              ]}
            />
            <LearningModule
              title="الوحدة الرابعة: التحليلات والتقارير"
              items={[
                'استخدام البيانات لتحسين الأداء',
                'مؤشرات الأداء الرئيسية (KPIs) في RCM',
                'تقارير الأداء والتنبؤات',
                'اتخاذ القرارات القائمة على البيانات'
              ]}
            />
          </div>
        </div>
      </section>
      
      {/* Target Audience */}
      <section className="py-16 bg-primary-100">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-black">الفئات المستهدفة</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AudienceCard
              title="مديري المستشفيات والمراكز الطبية"
              description="تحسين الإيرادات وتقليل التكاليف التشغيلية"
            />
            <AudienceCard
              title="متخصصي الترميز الطبي"
              description="اكتساب مهارات متقدمة في الترميز والامتثال"
            />
            <AudienceCard
              title="مسؤولي الفوترة والمطالبات"
              description="تحسين معدلات التحصيل وتقليل الرفض"
            />
            <AudienceCard
              title="محللي البيانات الصحية"
              description="استخدام التحليلات لتحسين الأداء المالي"
            />
            <AudienceCard
              title="خريجي الكليات الصحية والإدارية"
              description="بناء مستقبل مهني في إدارة الإيرادات الطبية"
            />
            <AudienceCard
              title="المهتمين بالتحول الرقمي"
              description="دمج التقنيات الحديثة في القطاع الصحي"
            />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-black">جاهز للبدء؟</h2>
            <p className="text-xl text-black mb-8">
              انضم إلى مئات المتدربين الذين استفادوا من برنامجنا التدريبي المتقدم
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn bg-accent-600 text-white hover:bg-accent-700">
                سجل الآن واحصل على خصم 20%
              </Link>
              <Link to="/contact" className="btn bg-transparent border border-accent-600 text-accent-600 hover:bg-accent-50">
                تواصل معنا للمزيد
              </Link>
            </div>
            <p className="text-sm text-black mt-4">
              * خصم 20% للدفع المبكر، مواد تدريبية شاملة، دعم فني وتقني مستمر
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon, value, label }) => {
  return (
    <div className="text-center">
      <div className="inline-block p-3 bg-primary-100 text-primary-600 rounded-full mb-4">
        {icon}
      </div>
      <div className="text-3xl font-bold text-black mb-2">{value}</div>
      <div className="text-black">{label}</div>
    </div>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-secondary-200">
      <div className="inline-block p-3 bg-accent-100 text-accent-600 rounded-full mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-black">{title}</h3>
      <p className="text-black">{description}</p>
    </div>
  );
};

interface LearningModuleProps {
  title: string;
  items: string[];
}

const LearningModule: React.FC<LearningModuleProps> = ({ title, items }) => {
  return (
    <div className="bg-primary-50 p-6 rounded-lg border border-primary-200">
      <h3 className="text-xl font-bold mb-4 text-black">{title}</h3>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-start">
            <CheckCircle size={18} className="text-accent-600 mt-1 ml-2 flex-shrink-0" />
            <span className="text-black">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

interface AudienceCardProps {
  title: string;
  description: string;
}

const AudienceCard: React.FC<AudienceCardProps> = ({ title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-secondary-200 text-center">
      <h3 className="text-lg font-bold mb-2 text-black">{title}</h3>
      <p className="text-black">{description}</p>
    </div>
  );
};

export default TrainingPage;
