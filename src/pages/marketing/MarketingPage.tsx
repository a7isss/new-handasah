import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/layout/Layout';
import { FileText, Users, Bell, Shield, CheckCircle, ArrowRight } from 'lucide-react';

const MarketingPage: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16 md:py-24">
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              لوحة التحكم الاستشارية: مستقبلك في المناقصات الحكومية يبدأ هنا
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100">
              خبرة عقود في إعداد العطاءات، بين يديك الآن
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup" className="btn bg-white text-primary-700 hover:bg-primary-50">
                ابدأ التجربة المجانية
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">الميزات الرئيسية</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={<FileText />}
              title="إعداد المستندات تلقائيًا"
              description="نظام ذكي يدمج بياناتك مع القوالب المعتمدة، لتوليد مستندات جاهزة للتقديم في دقائق"
            />
            <FeatureCard
              icon={<Users />}
              title="تنظيم القوالب حسب القطاع"
              description="قوالب مصنفة وفقًا للقطاعات (البناء، الطاقة، البنية التحتية، المياه)، مع إمكانية التخصيص حسب المشروع"
            />
            <FeatureCard
              icon={<Bell />}
              title="إشعارات فورية عبر واتساب"
              description="احصل على تحديثات فورية حول حالة المستندات والتعاون مع الفريق"
            />
            <FeatureCard
              icon={<Shield />}
              title="توقيعات رقمية ورموز QR"
              description="أضف توقيعات رقمية وتوليد رموز QR للتحقق السريع من المستندات"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-primary-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">لماذا تختار منصتنا؟</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <BenefitCard
              title="توفير الوقت والجهد"
              description="قلل من الوقت المستغرق في إعداد المستندات بفضل القوالب الجاهزة والتخصيص السهل"
            />
            <BenefitCard
              title="تحسين التعاون"
              description="شارك المستندات مع فريقك، وعلق عليها، وتابع التعديلات بسهولة"
            />
            <BenefitCard
              title="أمان عالي للمستندات"
              description="حماية متقدمة للمستندات مع تشفير وتسجيل للتعديلات"
            />
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <blockquote className="text-xl text-secondary-600 mb-6">
              "لوحة التحكم الاستشارية غيرت طريقة عملنا في إعداد العطاءات. السرعة والدقة والتعاون أصبحت أسهل من أي وقت مضى."
            </blockquote>
            <cite className="text-lg font-semibold block">
              — محمد العتيبي، مدير مشاريع، شركة البناء المتقدمة
            </cite>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-secondary-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">الأسئلة الشائعة</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <FAQItem
              question="هل يمكنني تخصيص القوالب لتناسب مشروعي؟"
              answer="نعم، يمكنك تعديل القوالب أو إنشاء قوالب جديدة حسب احتياجات مشروعك."
            />
            <FAQItem
              question="هل النظام آمن لحفظ المستندات الحساسة؟"
              answer="بالتأكيد، يتم تشفير المستندات وتوفير سجل كامل للتعديلات لضمان الأمان والشفافية."
            />
            <FAQItem
              question="هل يمكنني مشاركة المستندات مع فريقي؟"
              answer="نعم، يمكنك دعوة أعضاء الفريق للتعاون على المستندات ومتابعة التعديلات والتعليقات."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">ابدأ الآن</h2>
          <p className="text-xl mb-8">
            جرب لوحة التحكم الاستشارية مجانًا وابدأ في تحسين عملية إعداد العطاءات
          </p>
          <Link to="/signup" className="btn bg-white text-primary-700 hover:bg-primary-50">
            ابدأ التجربة المجانية
          </Link>
        </div>
      </section>
    </Layout>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-secondary-200 hover:shadow-md transition-all">
      <div className="inline-block p-3 bg-primary-50 text-primary-600 rounded-full mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-secondary-600">{description}</p>
    </div>
  );
};

interface BenefitCardProps {
  title: string;
  description: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex items-start mb-4">
        <CheckCircle className="text-primary-600 ml-2 mt-1\" size={20} />
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <p className="text-secondary-600">{description}</p>
    </div>
  );
};

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-lg font-bold mb-2">{question}</h3>
      <p className="text-secondary-600">{answer}</p>
    </div>
  );
};

export default MarketingPage;