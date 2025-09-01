import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import {useTranslations} from 'next-intl';

export default function ResearchPage() {
  const t = useTranslations('pages.research');

  return (
    <>
      <Header />
      <main className="">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <Image
              src="/factory-images/windtunnel.png"
              alt="Wind Tunnel Background"
              fill
              className="object-cover"
              priority
            />
          </div>
          
          <div className="container-width section-padding relative z-10">
            <div className="relative max-w-6xl">
              <div className="mb-8">
                <span className="inline-block px-4 py-2 bg-fandi-blue/10 text-fandi-blue font-semibold rounded-full text-lg mb-6">
                  {t('hero.badge')}
                </span>
                <h1 className="text-6xl font-bold text-fandi-blue mb-6">{t('hero.title')}</h1>
                <p className="text-2xl text-gray-600 leading-relaxed mb-8">{t('hero.subtitle')}</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-fandi-blue rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{t('hero.partnership.title')}</h3>
                      <p className="text-lg text-gray-600 leading-relaxed">{t('hero.partnership.description')}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-fandi-red rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{t('hero.innovation.title')}</h3>
                      <p className="text-lg text-gray-600 leading-relaxed">{t('hero.innovation.description')}</p>
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  {/* Energy Efficiency Chart */}
                  <div className="bg-white rounded-3xl shadow-2xl overflow-hidden group">
                    <Image
                      src="/energy.png"
                      alt="Energy Efficiency Comparison Chart"
                      width={600}
                      height={450}
                      className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <h3 className="text-2xl font-bold mb-2">{t('hero.efficiencyChart.title')}</h3>
                      <p className="text-sm opacity-90">{t('hero.efficiencyChart.description')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Wind Tunnel Testing Section */}
        <section className="py-24 section-light">
          <div className="container-width section-padding">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="inline-block px-4 py-2 bg-blue-100 text-fandi-blue font-semibold rounded-full text-sm mb-6">
                  {t('windTunnel.badge')}
                </span>
                <h2 className="text-5xl font-bold text-gray-900 mb-8">{t('windTunnel.title')}</h2>
                <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                  <p>{t('windTunnel.description1')}</p>
                  <p>{t('windTunnel.description2')}</p>
                </div>
                
                <div className="grid grid-cols-2 gap-8 mt-12">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-fandi-blue rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{t('windTunnel.features.airflow')}</h3>
                    <p className="text-gray-600">{t('windTunnel.features.airflowDesc')}</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-fandi-red rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{t('windTunnel.features.efficiency')}</h3>
                    <p className="text-gray-600">{t('windTunnel.features.efficiencyDesc')}</p>
                  </div>
                </div>

              </div>
              
              <div className="relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                  <Image
                    src="/factory-images/windtunnel.png"
                    alt="Wind Tunnel Testing Facility"
                    width={600}
                    height={450}
                    className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">{t('windTunnel.imageTitle')}</h3>
                    <p className="text-sm opacity-90">{t('windTunnel.imageDesc')}</p>
                  </div>
                </div>
                
                {/* Test Report Integration - Right under wind tunnel image */}
                <div className="mt-12 relative rounded-2xl overflow-hidden shadow-2xl group">
                  <Image
                    src="/testreport.jpg"
                    alt="Wind Tunnel Test Report"
                    width={900}
                    height={780}
                    className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Overlay title like wind tunnel image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <h3 className="text-2xl font-bold mb-2">{t('windTunnel.testReport.title')}</h3>
                    <p className="text-sm opacity-90">{t('windTunnel.testReport.description')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Research Workstation Section */}
        <section className="py-24 section-darker">
          <div className="container-width section-padding">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative order-2 lg:order-1">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                  <Image
                    src="/factory-images/workstation.png"
                    alt="Research Workstation"
                    width={600}
                    height={450}
                    className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">{t('workstation.imageTitle')}</h3>
                    <p className="text-sm opacity-90">{t('workstation.imageDesc')}</p>
                  </div>
                </div>
              </div>
              
              <div className="order-1 lg:order-2">
                <span className="inline-block px-4 py-2 bg-red-100 text-fandi-red font-semibold rounded-full text-sm mb-6">
                  {t('workstation.badge')}
                </span>
                <h2 className="text-5xl font-bold text-gray-900 mb-8">{t('workstation.title')}</h2>
                <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                  <p>{t('workstation.description1')}</p>
                  <p>{t('workstation.description2')}</p>
                </div>
                
                <div className="space-y-6 mt-12">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-fandi-red rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{t('workstation.features.analysis')}</h3>
                      <p className="text-gray-600">{t('workstation.features.analysisDesc')}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-fandi-red rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{t('workstation.features.optimization')}</h3>
                      <p className="text-gray-600">{t('workstation.features.optimizationDesc')}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-fandi-red rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{t('workstation.features.validation')}</h3>
                      <p className="text-gray-600">{t('workstation.features.validationDesc')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Future Research Section */}
        <section className="py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
          <div className="container-width section-padding">
            <div className="text-center mb-20">
              <span className="inline-block px-4 py-2 bg-white/10 text-white font-semibold rounded-full text-sm mb-6">
                {t('future.badge')}
              </span>
              <h2 className="text-5xl font-bold mb-6">{t('future.title')}</h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">{t('future.subtitle')}</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">{t('future.research.iot.title')}</h3>
                <p className="text-gray-300 leading-relaxed">{t('future.research.iot.description')}</p>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">{t('future.research.sustainability.title')}</h3>
                <p className="text-gray-300 leading-relaxed">{t('future.research.sustainability.description')}</p>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">{t('future.research.materials.title')}</h3>
                <p className="text-gray-300 leading-relaxed">{t('future.research.materials.description')}</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}