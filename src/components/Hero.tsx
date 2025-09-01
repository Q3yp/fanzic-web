'use client';

import {useTranslations} from 'next-intl';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="relative py-6 min-h-[700px] flex items-start">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/factory-images/梵蒂工厂图11.jpg)' }}
      />
      {/* Enhanced gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30" />
      
      <div className="absolute z-10 top-[23.6vh] left-[23.6vw] max-w-4xl">
        <div className="text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-relaxed">
            <span className="backdrop-blur-md text-white/90 py-3">
              {t('title')}
            </span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mt-4 leading-relaxed">
            {t('subtitle')}
          </p>
        </div>
      </div>
    </section>
  );
}