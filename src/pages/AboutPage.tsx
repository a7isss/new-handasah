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
              {t('about.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-2xl font-bold mb-4">{t('about.mission')}</h2>
              <p className="text-lg text-secondary-600 mb-6">
                {t('about.missionText')}
              </p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <CheckCircle className="text-primary-600 ml-2" size={20} />
                  <span>{t('about.benefits.customSolutions')}</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-primary-600 ml-2" size={20} />
                  <span>{t('about.benefits.technicalSupport')}</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-primary-600 ml-2" size={20} />
                  <span>{t('about.benefits.continuousUpdates')}</span>
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
              <h3 className="text-xl font-bold mb-2">{t('about.features.advancedTech')}</h3>
              <p className="text-secondary-600">
                {t('about.features.advancedTechDesc')}
              </p>
            </div>
            <div className="text-center p-6 bg-primary-50 rounded-lg">
              <Users className="mx-auto text-primary-600 mb-4" size={40} />
              <h3 className="text-xl font-bold mb-2">{t('about.features.humanExpertise')}</h3>
              <p className="text-secondary-600">
                {t('about.features.humanExpertiseDesc')}
              </p>
            </div>
            <div className="text-center p-6 bg-primary-50 rounded-lg">
              <Zap className="mx-auto text-primary-600 mb-4" size={40} />
              <h3 className="text-xl font-bold mb-2">{t('about.features.highEfficiency')}</h3>
              <p className="text-secondary-600">
                {t('about.features.highEfficiencyDesc')}
              </p>
            </div>
          </div>
          
          <div className="text-center mb-16">
            <h2 className="text-2xl font-bold mb-4">{t('about.vision')}</h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              {t('about.visionText')}
            </p>
          </div>

          {/* Contact Section */}
          <div className="bg-primary-50 rounded-2xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">{t('contact.directContact')}</h2>
              <p className="text-xl text-secondary-600">
                {t('contact.whatsappConsultation')}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold mb-6">{t('contact.contactInfo')}</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="text-primary-600 ml-4 mt-1" size={24} />
                    <div>
                      <h4 className="font-semibold mb-1">{t('contact.address')}</h4>
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
                      <h4 className="font-semibold mb-1">{t('contact.whatsapp')}</h4>
                      <p className="text-secondary-600">
                        +966555056545
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="text-primary-600 ml-4 mt-1" size={24} />
                    <div>
                      <h4 className="font-semibold mb-1">{t('contact.email')}</h4>
                      <p className="text-secondary-600">
                        support@hndasah.com
                        <br />
                        sales@hndasah.com
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <h4 className="text-xl font-bold mb-4">{t('contact.businessHours')}</h4>
                  <div className="space-y-2">
                    <p className="flex justify-between">
                      <span className="font-semibold">{t('contact.sundayThursday')}</span>
                      <span className="text-secondary-600">9:00 ص - 5:00 م</span>
                    </p>
                    <p className="flex justify-between">
                      <span className="font-semibold">{t('contact.fridaySaturday')}</span>
                      <span className="text-secondary-600">{t('contact.closed')}</span>
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="text-center">
                  <MessageCircle className="mx-auto text-primary-600 mb-4" size={48} />
                  <h3 className="text-2xl font-bold mb-4">{t('contact.talkDirectly')}</h3>
                  <p className="text-secondary-600 mb-6">
                    {t('contact.clickWhatsapp')}
                  </p>
                  
                  <a 
                    href="https://wa.me/966555056545" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center btn-primary text-lg px-8 py-4"
                  >
                    <MessageCircle className="ml-2" size={24} />
                    {t('contact.connectWhatsapp')}
                  </a>
                  
                  <p className="text-sm text-secondary-500 mt-4">
                    {t('contact.responseTime')}
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
