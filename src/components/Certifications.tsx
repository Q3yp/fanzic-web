'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

interface Certificate {
  id: string;
  image: string;
  title: string;
  description: string;
}

export default function Certifications() {
  const t = useTranslations('certifications');

  const certificates: Certificate[] = [
    {
      id: 'ce',
      image: '/4-资质证书展示/CE认证.jpg',
      title: t('ce'),
      description: t('ceDesc')
    },
    {
      id: 'cma',
      image: '/4-资质证书展示/CMA认证.jpg',
      title: t('cma'),
      description: t('cmaDesc')
    },
    {
      id: 'import',
      image: '/4-资质证书展示/进口商资质.jpg',
      title: t('import'),
      description: t('importDesc')
    },
    {
      id: 'report',
      image: '/4-资质证书展示/高效节能风机_检验报告.jpg',
      title: t('report'),
      description: t('reportDesc')
    }
  ];

  return (
    <section className="py-16 section-darker">
      <div className="container-width section-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('title')}</h2>
          <p className="text-lg text-gray-600">{t('subtitle')}</p>
        </div>

        {/* All Certifications in Single Row */}
        <div className="flex justify-center items-center space-x-12">
          {certificates.map((cert) => (
            <div key={cert.id} className="text-center group relative">
              <div className="w-48 h-48 bg-white rounded-lg p-4 relative mx-auto mb-4 shadow-lg transition-all duration-300 hover:shadow-xl">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-contain rounded"
                />
                
                {/* Hover Magnifying Bubble */}
                <div className="absolute -top-[660px] left-1/2 transform -translate-x-1/2 w-[640px] h-[640px] bg-white rounded-xl shadow-2xl border-4 border-blue-200 p-6 opacity-0 group-hover:opacity-100 transition-all duration-300 z-50 pointer-events-none">
                  <div className="relative w-full h-full">
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      fill
                      className="object-contain rounded-lg"
                    />
                  </div>
                  {/* Arrow pointing down */}
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-r-4 border-b-4 border-blue-200 rotate-45"></div>
                </div>
              </div>
              <p className="font-semibold text-gray-900 text-sm">{cert.title}</p>
              <p className="text-xs text-gray-600 mt-1">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}