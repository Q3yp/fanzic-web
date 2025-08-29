'use client';

import {useTranslations, useLocale} from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

interface Product {
  id: number;
  name: string;
  nameZh: string;
  image: string;
  description: string;
  descriptionZh: string;
}

export default function ProductBanner() {
  const t = useTranslations('products');
  const locale = useLocale();

  const products: Product[] = [
    {
      id: 1,
      name: 'High-Efficiency Panel Fan',
      nameZh: '高效节能板式风机',
      image: '/1-6款风机单独证件照PNG/1.高效节能板式风机.png',
      description: 'Industrial-grade panel fans designed for maximum airflow efficiency',
      descriptionZh: '工业级板式风机，设计用于最大风量效率和最小能耗'
    },
    {
      id: 2,
      name: 'High-Efficiency Dragon Panel Fan',
      nameZh: '高效节能板龙风机',
      image: '/1-6款风机单独证件照PNG/2.高效节能板龙风机.png',
      description: 'Advanced panel fan with enhanced airflow distribution',
      descriptionZh: '先进的板龙风机，采用龙式设计，增强气流分布'
    },
    {
      id: 3,
      name: 'High-Efficiency Guide Flow Fan',
      nameZh: '高效节能导流风机',
      image: '/1-6款风机单独证件照PNG/3.高效节能导流风机.png',
      description: 'Specialized guide flow fan for optimal air circulation',
      descriptionZh: '专业导流风机，用于最佳空气循环和温度控制'
    },
    {
      id: 4,
      name: 'High-Efficiency Negative Pressure Fan',
      nameZh: '高效节能负压风机',
      image: '/1-6款风机单独证件照PNG/4.高效节能负压风机.png',
      description: 'Powerful negative pressure fans for effective air extraction',
      descriptionZh: '强力负压风机，用于有效空气抽取和通风'
    },
    {
      id: 5,
      name: 'High-Efficiency Positive Pressure Fan',
      nameZh: '高效节能正压风机',
      image: '/1-6款风机单独证件照PNG/5高效节能正压风机.png',
      description: 'Positive pressure ventilation fans for fresh air supply',
      descriptionZh: '正压通风风机，用于新鲜空气供应和加压'
    },
    {
      id: 6,
      name: 'Livestock Ceiling Fan',
      nameZh: '畜牧专用大吊扇',
      image: '/1-6款风机单独证件照PNG/6.畜牧专用大吊扇.png',
      description: 'Large diameter ceiling fans designed for livestock facilities',
      descriptionZh: '专为畜牧设施和农业作业设计的大直径吊扇'
    }
  ];

  // Duplicate products for seamless loop
  const duplicatedProducts = [...products, ...products];

  return (
    <section className="py-12 bg-white overflow-hidden">
      <div className="container-width section-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        {/* Continuous sliding banner */}
        <div className="relative overflow-hidden">
          <div className="flex animate-slide-infinite space-x-8">
            {duplicatedProducts.map((product, index) => (
              <div 
                key={`${product.id}-${Math.floor(index / products.length)}`}
                className="flex-shrink-0 w-80 bg-gray-50 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                {/* Product Image */}
                <div className="aspect-[16/9] bg-white rounded-t-xl relative overflow-hidden">
                  <Image
                    src={product.image}
                    alt={locale === 'zh' ? product.nameZh : product.name}
                    fill
                    className="object-contain p-2"
                    sizes="320px"
                  />
                </div>
                
                {/* Product Info */}
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                    {locale === 'zh' ? product.nameZh : product.name}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-3">
                    {locale === 'zh' ? product.descriptionZh : product.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <Link
            href={`/${locale}/products`}
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            {locale === 'zh' ? '查看所有产品' : 'View All Products'}
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-infinite {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-${(products.length * (320 + 32))}px);
          }
        }
        .animate-slide-infinite {
          animation: slide-infinite 30s linear infinite;
        }
        .line-clamp-2 {
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
        }
        .line-clamp-3 {
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
        }
      `}</style>
    </section>
  );
}