'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import {useTranslations, useLocale} from 'next-intl';

interface Product {
  id: number;
  name: string;
  nameZh: string;
  image: string;
  description: string;
  descriptionZh: string;
  applications: string[];
  applicationsZh: string[];
  features: string[];
  featuresZh: string[];
  videoFile: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'High-Efficiency Panel Fan',
    nameZh: '高效节能板式风机',
    image: '/1-6款风机单独证件照PNG/1.高效节能板式风机.png',
    description: 'Industrial-grade panel fans designed for maximum airflow efficiency with minimal energy consumption.',
    descriptionZh: '工业级板式风机，设计用于最大风量效率和最小能耗。',
    applications: ['Livestock barns', 'Poultry houses', 'Agricultural facilities'],
    applicationsZh: ['畜牧棚舍', '家禽舍', '农业设施'],
    features: ['Low noise', 'Energy efficient', 'Weatherproof', 'Easy maintenance'],
    featuresZh: ['低噪音', '节能高效', '防风雨', '易维护'],
    videoFile: 'PanelFanEC100.mp4'
  },
  {
    id: 2,
    name: 'High-Efficiency Dragon Panel Fan',
    nameZh: '高效节能板龙风机',
    image: '/1-6款风机单独证件照PNG/2.高效节能板龙风机.png',
    description: 'Advanced panel fan with dragon-style design for enhanced airflow distribution.',
    descriptionZh: '先进的板龙风机，采用龙式设计，增强气流分布。',
    applications: ['Large barns', 'Industrial ventilation', 'Commercial facilities'],
    applicationsZh: ['大型棚舍', '工业通风', '商业设施'],
    features: ['Enhanced airflow', 'Robust construction', 'High durability', 'Professional grade'],
    featuresZh: ['增强气流', '坚固结构', '高耐用性', '专业级别'],
    videoFile: 'PanelCirculationFan.mp4'
  },
  {
    id: 3,
    name: 'High-Efficiency Guide Flow Fan',
    nameZh: '高效节能导流风机',
    image: '/1-6款风机单独证件照PNG/3.高效节能导流风机.png',
    description: 'Specialized guide flow fan for optimal air circulation and temperature control.',
    descriptionZh: '专业导流风机，用于最佳空气循环和温度控制。',
    applications: ['Climate control', 'Air circulation', 'Ventilation systems'],
    applicationsZh: ['气候控制', '空气循环', '通风系统'],
    features: ['Precise airflow control', 'Energy saving', 'Quiet operation', 'Smart design'],
    featuresZh: ['精确气流控制', '节能省电', '静音运行', '智能设计'],
    videoFile: 'Cyclone.mp4'
  },
  {
    id: 4,
    name: 'High-Efficiency Negative Pressure Fan',
    nameZh: '高效节能负压风机',
    image: '/1-6款风机单独证件照PNG/4.高效节能负压风机.png',
    description: 'Powerful negative pressure fans for effective air extraction and ventilation.',
    descriptionZh: '强力负压风机，用于有效空气抽取和通风。',
    applications: ['Air extraction', 'Industrial exhaust', 'Ventilation systems'],
    applicationsZh: ['空气抽取', '工业排气', '通风系统'],
    features: ['High airflow', 'Corrosion resistant', 'Durable construction', 'Efficient operation'],
    featuresZh: ['大风量', '防腐蚀', '耐用结构', '高效运行'],
    videoFile: 'ExhaustFan.mp4'
  },
  {
    id: 5,
    name: 'High-Efficiency Positive Pressure Fan',
    nameZh: '高效节能正压风机',
    image: '/1-6款风机单独证件照PNG/5高效节能正压风机.png',
    description: 'Positive pressure ventilation fans for fresh air supply and pressurization.',
    descriptionZh: '正压通风风机，用于新鲜空气供应和加压。',
    applications: ['Fresh air supply', 'Pressurization', 'Clean environments'],
    applicationsZh: ['新风供应', '加压系统', '洁净环境'],
    features: ['Fresh air circulation', 'Pressurization control', 'Clean operation', 'Reliable performance'],
    featuresZh: ['新风循环', '压力控制', '清洁运行', '可靠性能'],
    videoFile: 'PressureFan.mp4'
  },
  {
    id: 6,
    name: 'Livestock Ceiling Fan',
    nameZh: '畜牧专用大吊扇',
    image: '/1-6款风机单独证件照PNG/6.畜牧专用大吊扇.png',
    description: 'Large diameter ceiling fans specifically designed for livestock facilities and farming operations.',
    descriptionZh: '专为畜牧设施和农业作业设计的大直径吊扇。',
    applications: ['Dairy farms', 'Cattle barns', 'Large livestock facilities'],
    applicationsZh: ['奶牛场', '牛棚', '大型畜牧设施'],
    features: ['Large diameter', 'Livestock-safe design', 'Quiet operation', 'Energy efficient'],
    featuresZh: ['大直径', '安全设计', '静音运行', '节能高效'],
    videoFile: 'CeilingFan.mp4'
  }
];

export default function ProductsPage() {
  const t = useTranslations('pages.products');
  const locale = useLocale();

  const openVideoPopup = (videoFile: string, productName: string) => {
    const videoFolder = locale === 'zh' ? 'fan-vid-chn' : 'fan-vid-eng';
    const videoUrl = `/${videoFolder}/${videoFile}`;
    const windowName = `video_${productName.replace(/\s+/g, '_')}`;
    window.open(videoUrl, windowName, 'width=800,height=600,scrollbars=yes,resizable=yes');
  };
  
  return (
    <>
      <Header />
      <main className="">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-50 to-indigo-50 py-24 overflow-hidden">
          
          {/* Background Image */}
          <div className="absolute inset-0 opacity-20">
            <Image
              src="/factory-images/梵蒂工厂图24.jpg"
              alt="Factory Background"
              fill
              className="object-cover"
              priority
            />
          </div>
          
          <div className="container-width section-padding relative z-10">
            <div className="relative max-w-5xl">
              <h1 className="text-6xl font-bold text-fandi-blue mb-6">{t('title')}</h1>
              <p className="text-2xl text-gray-600 leading-relaxed mb-8">{t('subtitle')}</p>
              <div className="text-xl text-gray-600 leading-relaxed">
                <a 
                  href={locale === 'zh' ? '/2-6款风机对应详情页/辉途_风机单页中文版_250818.pdf' : '/2-6款风机对应详情页/4.Fandi fan brochure-0818.pdf'}
                  download
                  className="float-right ml-6 mb-4 inline-flex items-center px-8 py-4 bg-fandi-blue text-white font-bold text-lg rounded-xl hover:bg-blue-700 transition-all duration-300 hover:shadow-xl hover:scale-105 whitespace-nowrap"
                >
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  {t('brochures.download')}
                </a>
              </div>
            </div>
          </div>
        </section>
        
        {/* Products Grid Section */}
        <section className="py-24 bg-white">
          <div className="container-width section-padding">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-square bg-gray-50 relative overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-6"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {locale === 'zh' ? product.nameZh : product.name}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    {locale === 'zh' ? product.descriptionZh : product.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-800 mb-2">{t('applications')}:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {(locale === 'zh' ? product.applicationsZh : product.applications).map((app, index) => (
                        <li key={index} className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                          {app}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => openVideoPopup(product.videoFile, locale === 'zh' ? product.nameZh : product.name)}
                    className="w-full bg-fandi-blue text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center gap-2 mt-4"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                    {t('videoButton')}
                  </button>
                </div>
              </div>
            ))}
          </div>

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}