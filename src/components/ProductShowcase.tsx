'use client';

import {useTranslations} from 'next-intl';
import Image from 'next/image';

export default function ProductShowcase() {
  const t = useTranslations('products');

  const products = [
    {
      id: 'panel',
      name: t('panel.name'),
      description: t('panel.description'),
      image: '/1-6款风机单独证件照PNG/1.高效节能板式风机.png',
      features: ['High Efficiency', 'Energy Saving', 'Low Noise', 'Durable']
    },
    {
      id: 'exhaust',
      name: t('exhaust.name'),
      description: t('exhaust.description'), 
      image: '/1-6款风机单独证件照PNG/4.高效节能负压风机.png',
      features: ['Powerful Airflow', 'Weather Resistant', 'Easy Installation', 'Low Maintenance']
    },
    {
      id: 'ceiling',
      name: t('ceiling.name'),
      description: t('ceiling.description'),
      image: '/1-6款风机单独证件照PNG/6.畜牧专用大吊扇.png',
      features: ['Large Diameter', 'Livestock Optimized', 'Quiet Operation', 'Smart Control']
    }
  ];

  return (
    <section className="py-16">
      <div className="container-width section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-square bg-gray-50 relative overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-8"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {product.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.features.map((feature, index) => (
                    <span
                      key={index}
                      className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}