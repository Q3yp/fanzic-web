'use client';

import {useTranslations} from 'next-intl';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="relative py-16 min-h-[700px] flex items-center">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/factory-images/梵蒂工厂图11.jpg)' }}
      />
      {/* Enhanced gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30" />
      
      <div className="container-width section-padding relative z-10">
        <div className="text-left max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            <span className="bg-white/10 backdrop-blur-md text-emerald-400 px-6 py-3 rounded-lg border border-white/20">
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