'use client';

import {useTranslations, useLocale} from 'next-intl';
import Image from 'next/image';

export default function Footer() {
  const t = useTranslations('footer');
  const locale = useLocale();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container-width section-padding">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-12 relative">
                <Image
                  src={locale === 'zh' ? '/梵帝logo新（中文版）.png' : '/梵帝风机英文Logo（透明底）.png'}
                  alt={locale === 'zh' ? '梵帝风机' : 'FanDi'}
                  width={120}
                  height={48}
                  className="object-contain"
                  priority
                />
              </div>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              {t('description')}
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">{t('products.title')}</h3>
            <ul className="space-y-2 text-gray-400">
              <li>{t('products.panelFans')}</li>
              <li>{t('products.exhaustFans')}</li>
              <li>{t('products.ceilingFans')}</li>
              <li>{t('products.accessories')}</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">{t('company_links.title')}</h3>
            <ul className="space-y-2 text-gray-400">
              <li>{t('company_links.about')}</li>
              <li>{t('company_links.certifications')}</li>
              <li>{t('company_links.quality')}</li>
              <li>{t('company_links.contact')}</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 {t('company')}. {t('rights')}</p>
        </div>
      </div>
    </footer>
  );
}