import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import {useTranslations, useLocale} from 'next-intl';

export default function AboutPage() {
  const t = useTranslations('pages.about');
  const locale = useLocale();
  return (
    <>
      <Header />
      <main className="">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-50 to-indigo-50 py-24 overflow-hidden">
          
          {/* Background Image */}
          <div className="absolute inset-0 opacity-20">
            <Image
              src="/3-公司介绍图文展示等可用图片/图片1.jpg"
              alt="Company Background"
              fill
              className="object-cover"
              priority
            />
          </div>
          
          <div className="container-width section-padding relative z-10">
            <div className="relative max-w-5xl">
              <h1 className="text-6xl font-bold text-fandi-blue mb-6">{t('title')}</h1>
              <p className="text-2xl text-gray-600 leading-relaxed mb-8">{t('subtitle')}</p>
              <div className="space-y-6 text-xl text-gray-600 leading-relaxed">
                <a 
                  href={locale === 'zh' ? '/辉途_宣传折页0707.pdf' : '/2.WUITU Company Introduction_0827.pdf'}
                  download
                  className="float-right ml-6 mb-4 inline-flex items-center px-8 py-4 bg-fandi-blue text-white font-bold text-lg rounded-xl hover:bg-red-700 transition-all duration-300 hover:shadow-xl hover:scale-105 whitespace-nowrap"
                >
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  {t('brochures.download')}
                </a>
                <p>{t('mission.description1')}</p>
                <p>{t('mission.description2')}</p>
              </div>
            </div>
          </div>
        </section>


        {/* Company Gallery */}
        <section className="py-24 bg-gray-50">
          <div className="container-width section-padding">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-gray-900 mb-6">{t('facility.gallery')}</h2>
              <p className="text-xl text-gray-600">{t('facility.galleryDesc')}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {/* Large hero image */}
              <div className="md:col-span-2 lg:row-span-2 relative rounded-3xl overflow-hidden group shadow-xl">
                <div className="aspect-[4/3] lg:aspect-square">
                  <Image
                    src="/factory-images/梵蒂工厂图14.jpg"
                    alt="Main Company Facility"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 1024px) 100vw, 66vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-6 left-6 text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <h3 className="text-2xl font-bold mb-2">{t('gallery.heroTitle')}</h3>
                    <p className="text-sm">{t('gallery.heroDesc')}</p>
                  </div>
                </div>
              </div>
              
              {/* Top right image */}
              <div className="relative rounded-2xl overflow-hidden group shadow-lg">
                <div className="aspect-square">
                  <Image
                    src="/factory-images/梵蒂工厂图9.jpg"
                    alt="Manufacturing Floor"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
              
              {/* Bottom right image */}
              <div className="relative rounded-2xl overflow-hidden group shadow-lg">
                <div className="aspect-square">
                  <Image
                    src="/factory-images/梵蒂工厂图10.jpg"
                    alt="Quality Control"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
              
              {/* Bottom left image */}
              <div className="relative rounded-2xl overflow-hidden group shadow-lg">
                <div className="aspect-[16/10]">
                  <Image
                    src="/factory-images/梵蒂工厂图7.jpg"
                    alt="Factory Overview"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
              
              {/* Team and Equipment image */}
              <div className="relative rounded-2xl overflow-hidden group shadow-lg">
                <div className="aspect-[16/10]">
                  <Image
                    src="/factory-images/梵蒂工厂图16.jpg"
                    alt="Team and Equipment"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
              
              {/* Additional corner image */}
              <div className="relative rounded-2xl overflow-hidden group shadow-lg">
                <div className="aspect-square">
                  <Image
                    src="/factory-images/梵蒂工厂图4.jpg"
                    alt="Factory Detail"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-24 bg-white">
          <div className="container-width section-padding">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-bold text-gray-900 mb-6">{t('features.title')}</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t('features.subtitle')}</p>
            </div>
            <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
              <div className="group text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:shadow-xl transition-all duration-300">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold mb-6">{t('features.energyEfficient.title')}</h3>
                <p className="text-lg text-gray-600 leading-relaxed">{t('features.energyEfficient.description')}</p>
              </div>
              <div className="group text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-red-500 to-red-600 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:shadow-xl transition-all duration-300">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold mb-6">{t('features.qualityAssured.title')}</h3>
                <p className="text-lg text-gray-600 leading-relaxed">{t('features.qualityAssured.description')}</p>
              </div>
              <div className="group text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:shadow-xl transition-all duration-300">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25v19.5M21.75 12H2.25" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold mb-6">{t('features.livestockSpecialized.title')}</h3>
                <p className="text-lg text-gray-600 leading-relaxed">{t('features.livestockSpecialized.description')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Company Statistics */}
        <section className="py-24 bg-gradient-to-r from-gray-900 to-gray-800 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full" />
            <div className="absolute top-40 right-20 w-24 h-24 border border-white/20 rounded-full" />
            <div className="absolute bottom-20 left-1/3 w-48 h-48 border border-white/20 rounded-full" />
            <div className="absolute bottom-10 right-10 w-64 h-64 border border-white/20 rounded-full" />
          </div>
          <div className="container-width section-padding relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-bold mb-6">{t('stats.title')}</h2>
              <p className="text-2xl text-gray-300">{t('stats.subtitle')}</p>
            </div>
            <div className="grid md:grid-cols-4 gap-12 max-w-5xl mx-auto">
              <div className="text-center group">
                <div className="w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:bg-blue-400 transition-all duration-300">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-5xl font-bold text-blue-400 mb-3">15+</div>
                <p className="text-xl text-gray-300 font-medium">{t('stats.experience')}</p>
              </div>
              <div className="text-center group">
                <div className="w-24 h-24 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:bg-red-400 transition-all duration-300">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <div className="text-5xl font-bold text-red-400 mb-3">6</div>
                <p className="text-xl text-gray-300 font-medium">{t('stats.productLines')}</p>
              </div>
              <div className="text-center group">
                <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:bg-green-400 transition-all duration-300">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-5xl font-bold text-green-400 mb-3">50+</div>
                <p className="text-xl text-gray-300 font-medium">{t('stats.countries')}</p>
              </div>
              <div className="text-center group">
                <div className="w-24 h-24 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:bg-yellow-400 transition-all duration-300">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div className="text-5xl font-bold text-yellow-400 mb-3">100k+</div>
                <p className="text-xl text-gray-300 font-medium">{t('stats.customers')}</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}