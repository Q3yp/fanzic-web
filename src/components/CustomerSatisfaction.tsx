'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function CustomerSatisfaction() {
  const t = useTranslations('customerSatisfaction');

  const features = [
    {
      icon: (
        <svg className="w-8 h-8 text-fandi-blue" fill="currentColor" viewBox="0 0 24 24">
          <path d="M3 4a1 1 0 00-.64 1.76L3 6.38l.64.62A1 1 0 003 9H2a1 1 0 000 2h1a1 1 0 00.64-1.76L3 8.62l-.64-.62A1 1 0 003 7h1a1 1 0 000-2H3zm18 0a1 1 0 000 2h1a1 1 0 00.64 1.76L22 8.62l.64.62A1 1 0 0022 11h1a1 1 0 000 2h-1a1 1 0 00-.64-1.76L22 10.62l.64-.62A1 1 0 0022 9h-1a1 1 0 000-2h1zM7 6a1 1 0 011-1h8a1 1 0 011 1v12l-5-3-5 3V6z"/>
        </svg>
      ),
      title: t('features.safeDelivery.title'),
      description: t('features.safeDelivery.description')
    },
    {
      icon: (
        <svg className="w-8 h-8 text-fandi-blue" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      title: t('features.onlineService.title'),
      description: t('features.onlineService.description')
    },
    {
      icon: (
        <svg className="w-8 h-8 text-fandi-blue" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
        </svg>
      ),
      title: t('features.priceGuarantee.title'),
      description: t('features.priceGuarantee.description')
    },
    {
      icon: (
        <svg className="w-8 h-8 text-fandi-blue" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.66c.03-.08.06-.17.09-.25.16-.43.25-.78.25-1.09 0-.28-.09-.53-.26-.73-.09-.1-.2-.18-.32-.25-.18-.11-.38-.14-.59-.09-.24.06-.44.2-.58.4-.15.2-.24.45-.24.72 0 .23.07.45.19.63.08.12.18.22.3.29.15.09.32.13.49.1.2-.04.37-.14.49-.29.13-.16.2-.36.2-.57 0-.18-.05-.35-.14-.49-.06-.09-.14-.16-.23-.21-.11-.06-.23-.08-.36-.05-.15.04-.28.12-.37.24-.1.13-.15.29-.15.46 0 .14.04.27.11.38.05.07.11.13.18.17.09.05.19.07.29.05.12-.03.22-.09.29-.18.08-.1.12-.22.12-.35z"/>
        </svg>
      ),
      title: t('features.greenEnvironment.title'),
      description: t('features.greenEnvironment.description')
    }
  ];

  return (
    <>
      {/* Main content section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Company facility image */}
            <div className="relative">
              <div className="aspect-[4/3] relative overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="/3-公司介绍图文展示等可用图片/图片2.png"
                  alt={t('facilityImage.alt')}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Right side - Content */}
            <div className="space-y-8">
              {/* Company name */}
              <div className="text-sm text-gray-600 mb-2">
                {t('company')}
              </div>

              {/* Main title */}
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                {t('title')}
              </h2>

              {/* Description */}
              <p className="text-gray-800 text-lg mb-12">
                {t('description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature cards - full width banner */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center text-gray-800">
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}