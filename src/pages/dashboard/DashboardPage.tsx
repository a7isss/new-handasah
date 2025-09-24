import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import DashboardLayout from '../../components/layout/DashboardLayout';
import { useAuth } from '../../contexts/AuthContext';
import { FileText, Activity, Users, Crown, ArrowRight, X } from 'lucide-react';
import SubscriptionPlans, { subscriptionPlans } from '../../components/subscription/SubscriptionPlans';

const DashboardPage: React.FC = () => {
  const { t } = useTranslation();
  const { user, userProfile } = useAuth();
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);

  // Get current subscription tier
  const currentTier = userProfile?.subscription_tier || 'free';
  const subscriptionStatus = userProfile?.subscription_status || 'inactive';

  // Determine subscription display
  const getSubscriptionDisplay = () => {
    if (currentTier === 'free' || subscriptionStatus !== 'active') {
      return {
        name: 'الباقة المجانية',
        color: 'bg-secondary-100 text-secondary-700',
        icon: <Users size={16} />
      };
    } else if (currentTier === 'basic') {
      return {
        name: 'الباقة الأساسية',
        color: 'bg-primary-100 text-primary-700',
        icon: <Crown size={16} />
      };
    } else if (currentTier === 'premium') {
      return {
        name: 'الباقة الاحترافية',
        color: 'bg-accent-100 text-accent-700',
        icon: <Crown size={16} />
      };
    }
    return {
      name: 'غير محدد',
      color: 'bg-secondary-100 text-secondary-700',
      icon: <Users size={16} />
    };
  };

  const subscriptionDisplay = getSubscriptionDisplay();
  
  return (
    <DashboardLayout>
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold mb-2">{t('dashboard.welcome')}</h1>
            <p className="text-secondary-600">{user?.email}</p>
          </div>
          
          {/* Subscription Status Display */}
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-sm text-secondary-600 mb-1">اشتراكك الحالي</p>
              <div className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg font-medium ${subscriptionDisplay.color}`}>
                {subscriptionDisplay.icon}
                <span>{subscriptionDisplay.name}</span>
              </div>
            </div>
            
            {/* Upgrade Button */}
            {(currentTier === 'free' || subscriptionStatus !== 'active') && (
              <button
                onClick={() => setShowUpgradeModal(true)}
                className="btn-primary flex items-center gap-2"
              >
                <Crown size={18} />
                <span>ترقية الاشتراك</span>
                <ArrowRight size={16} />
              </button>
            )}
          </div>
        </div>
      </div>
      
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatCard 
          title="القوالب المتاحة" 
          value="15+" 
          icon={<FileText size={24} />} 
          color="bg-primary-500" 
        />
        <StatCard 
          title="المشاريع النشطة" 
          value="0" 
          icon={<Activity size={24} />} 
          color="bg-accent-500" 
        />
        <StatCard 
          title="الجداول الزمنية" 
          value="0" 
          icon={<FileText size={24} />} 
          color="bg-success-500" 
        />
      </div>
      
      {/* Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <QuickActionCard
          title="القوالب"
          description="استعرض وحمل القوالب المتاحة لمشاريعك"
          icon={<FileText size={32} />}
          link="/dashboard/templates"
          buttonText="استعرض القوالب"
        />
        
        <QuickActionCard
          title="خدمة الجدولة"
          description="أنشئ وأدر الجداول الزمنية لمشاريعك"
          icon={<Activity size={32} />}
          link="/dashboard/schedule"
          buttonText="إنشاء جدول زمني"
        />
      </div>
      
      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow-sm border border-secondary-200 p-6">
        <h2 className="text-xl font-bold mb-4">النشاط الأخير</h2>
        <div className="text-center py-8">
          <Activity size={48} className="mx-auto mb-4 text-secondary-400" />
          <p className="text-secondary-600">لا توجد أنشطة حديثة</p>
          <p className="text-sm text-secondary-500 mt-2">ابدأ بإنشاء مشروع جديد أو استعراض القوالب</p>
        </div>
      </div>

      {/* Upgrade Modal */}
      {showUpgradeModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="p-6">
               <div className="flex items-center justify-between mb-6">
                 <div>
                   <h2 className="text-2xl font-bold mb-2">ترقية الاشتراك</h2>
                  <p className="text-secondary-600">اختر الباقة المناسبة لاحتياجاتك</p>
                </div>
                <button
                  onClick={() => setShowUpgradeModal(false)}
                  className="text-secondary-500 hover:text-secondary-700"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Subscription Plans */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.values(subscriptionPlans).map((plan) => (
                  <div
                    key={plan.id}
                    className={`bg-white rounded-lg p-6 border-2 transition-all hover:shadow-lg ${
                      plan.id === 'premium'
                        ? 'border-primary-500 shadow-md relative'
                        : 'border-secondary-200 hover:border-primary-300'
                    }`}
                  >
                    {plan.id === 'premium' && (
                      <div className="absolute -top-3 right-4 bg-primary-500 text-white text-sm py-1 px-3 rounded-full">
                        الأكثر شيوعاً
                      </div>
                    )}

                    <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                    
                    <div className="text-3xl font-bold mb-4 text-primary-600">
                      {plan.price} <span className="text-lg font-normal text-secondary-600">ريال {plan.period}</span>
                    </div>

                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-primary-600 ml-2 mt-0.5 flex-shrink-0">✓</span>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <button
                      onClick={() => {
                        // Handle subscription logic here
                        console.log('Subscribe to:', plan.priceId);
                        setShowUpgradeModal(false);
                      }}
                      className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${
                        plan.id === 'premium'
                          ? 'bg-primary-600 text-white hover:bg-primary-700'
                          : 'bg-secondary-100 text-secondary-700 hover:bg-secondary-200'
                      }`}
                    >
                      اشترك الآن
                    </button>
                  </div>
                ))}
              </div>

              {/* Additional Info */}
              <div className="mt-8 p-4 bg-secondary-50 rounded-lg">
                <h4 className="font-semibold mb-2">معلومات إضافية</h4>
                <ul className="text-sm text-secondary-600 space-y-1">
                  <li>• يمكنك إلغاء الاشتراك في أي وقت</li>
                  <li>• دعم فني على مدار الساعة للمشتركين</li>
                  <li>• تحديثات مجانية لجميع الميزات الجديدة</li>
                  <li>• ضمان استرداد المال خلال 30 يوم</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
};

interface StatCardProps {
  title: string;
  value: React.ReactNode;
  icon: React.ReactNode;
  color: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon, color }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-secondary-200">
      <div className="flex items-center">
        <div className={`rounded-full p-3 ml-4 rtl:mr-4 rtl:ml-0 ${color} text-white flex-shrink-0`}>
          {icon}
        </div>
        <div className="min-w-0">
          <h3 className="text-2xl font-bold">{value}</h3>
          <p className="text-secondary-600 truncate">{title}</p>
        </div>
      </div>
    </div>
  );
};

interface QuickActionCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  buttonText: string;
}

const QuickActionCard: React.FC<QuickActionCardProps> = ({ title, description, icon, link, buttonText }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-secondary-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-secondary-600 text-sm line-clamp-2">{description}</p>
        </div>
        <div className="text-primary-600 ml-4 flex-shrink-0">
          {icon}
        </div>
      </div>
      <a
        href={link}
        className="btn-outline w-full text-center flex items-center justify-center gap-2"
      >
        <span>{buttonText}</span>
        <ArrowRight size={16} />
      </a>
    </div>
  );
};

export default DashboardPage;