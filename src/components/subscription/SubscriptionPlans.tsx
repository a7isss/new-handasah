import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

export const subscriptionPlans = {
  basic: {
    id: 'basic',
    name: 'الباقة الأساسية',
    price: '699',
    period: 'سنوياً',
    features: [
      'الميزات الأساسية لإعداد وإدارة مستندات العطاءات',
      'قوالب أساسية',
      'دعم فني أساسي',
      'تحديثات مجانية'
    ],
    priceId: 'price_basic_yearly'
  },
  premium: {
    id: 'premium',
    name: 'الباقة الاحترافية',
    price: '899',
    period: 'سنوياً',
    features: [
      'جميع ميزات الباقة الأساسية',
      'دعم موسع',
      'تخصيص أفضل للقوالب',
      'صانع الجداول الزمنية'
    ],
    priceId: 'price_premium_yearly'
  }
};

export interface SubscriptionPlansProps {
  showPricing?: boolean;
  compact?: boolean;
  onSubscribe?: (planId: string) => void;
}

const SubscriptionPlans: React.FC<SubscriptionPlansProps> = ({
  showPricing = true,
  compact = false,
  onSubscribe
}) => {
  const { user } = useAuth();

  const handleSubscribe = (planId: string) => {
    if (onSubscribe) {
      onSubscribe(planId);
    }
  };

  return (
    <div className={`grid grid-cols-1 ${compact ? 'md:grid-cols-2 gap-4' : 'md:grid-cols-2 lg:grid-cols-2 gap-8'}`}>
      {Object.values(subscriptionPlans).map((plan) => (
        <div
          key={plan.id}
          className={`bg-white rounded-lg p-6 border ${
            plan.id === 'premium'
              ? 'border-primary-500 shadow-lg relative'
              : 'border-secondary-200'
          }`}
        >
          {plan.id === 'premium' && !compact && (
            <div className="absolute -top-3 right-4 bg-primary-500 text-white text-sm py-1 px-3 rounded-full">
              الأكثر شيوعاً
            </div>
          )}

          <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
          
          {showPricing && (
            <div className="text-3xl font-bold mb-4">
              {plan.price} <span className="text-lg font-normal">ريال {plan.period}</span>
            </div>
          )}

          <ul className={`space-y-3 ${compact ? 'mb-4' : 'mb-6'}`}>
            {plan.features.map((feature, index) => (
              <li key={index} className="flex items-center">
                <CheckCircle className="text-primary-600 ml-2" size={16} />
                <span className={compact ? 'text-sm' : ''}>{feature}</span>
              </li>
            ))}
          </ul>

          {user ? (
            <button
              onClick={() => handleSubscribe(plan.priceId)}
              className={`w-full ${
                plan.id === 'premium' ? 'btn-primary' : 'btn-outline'
              }`}
            >
              اشترك الآن
            </button>
          ) : (
            <Link
              to="/signup"
              className={`block text-center ${
                plan.id === 'premium' ? 'btn-primary' : 'btn-outline'
              }`}
            >
              ابدأ الآن
            </Link>
          )}
        </div>
      ))}
    </div>
  );
};

export default SubscriptionPlans;